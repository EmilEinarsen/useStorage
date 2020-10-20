import { useState } from 'react'
import { set as setCookie, get as getCookie } from 'bjork_cookie'

export const TYPES = {
	LOCAL: 'local',
	SESSION: 'session',
	COOKIE: 'cookie'
}

const getStorageGetSet = type => (
	type === TYPES.LOCAL ? {
		getItem: key => localStorage.getItem(key),
		setItem: (key, value) => localStorage.setItem(key, value),
	} : type === TYPES.SESSION ? {
		getItem: key => sessionStorage.getItem(key),
		setItem: (key, value) => sessionStorage.setItem(key, value),
	} :  type === TYPES.COOKIE ? {
		getItem: key => getCookie(key),
		setItem: (key, value, options) => setCookie(key, value, options),
	} : {}
)

function useStorage(type, key, initialValue = '') {

	const storage = getStorageGetSet(type)

	const [item, setItem] = useState(() => (
		storage.getItem(key) ? storage.getItem(key) 
		: () => {
			storage.setItem(key, initialValue)
			return initialValue
		}
	))
  
	return [
		item, 
		type === TYPES.COOKIE ? (value, options) => {
			setItem(value)
			storage.setItem(key, value, options)
		} : value => {
			setItem(value)
			storage.setItem(key, value)
		}
	]
}

export default useStorage