import { useState } from 'react'

export const TYPES = {
	LOCAL: 'local',
	SESSION: 'session'
}

function useStorage(type, key, initialValue) {
	const storage = 
		type === TYPES.LOCAL ? localStorage 
		: type === TYPES.SESSION ? sessionStorage 
		: ''

	const [item, setItem] = useState(storage.getItems(key, initialValue))
  
	return [
		item, 
		(value, options) => {
			setItem(value)
			storage.setItem(key, value, options)
	 	 }
	]
}

export default useStorage