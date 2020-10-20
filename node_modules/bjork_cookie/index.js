const isBrowser = typeof window !== 'undefined'

const cookie = {

	destroy: key => cookie.set(key,"",{days: -1}),

	check: key => cookie.get(key) ? true : false,

	set: (key, value, options = {}) => {
		if(!isBrowser) return
		const { 
			days = 7, 
			path = '/'
		} = options
		const DayInSec = 864e5
		const expires = new Date(
			Date.now() + days * DayInSec
		).toUTCString()

		document.cookie =
			key +
			'=' +
			encodeURIComponent(value) +
			'; expires=' +
			expires +
			'; path=' +
			path
	},

	get: (key, initialValue) => (
		(isBrowser &&
			document.cookie
			.split('; ')
			.reduce((r, v) => {
				const parts = v.split('=')
				return parts[0] === key ? decodeURIComponent(parts[1]) : r
			}, '')
		) || initialValue
	)
}

module.exports = cookie