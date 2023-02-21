# What is this?
A React hook used for managing state and Storage simultaneously.

## Install
Use npm to install bjork_useStorage or copy the code manually form [github](https://github.com/EmilEinarsen/bjork_useStorage).
```bash
> npm i bjork_useStorage
```

## Usage
_useStorage_ takes three params: <br>
1. _type_ ('local' | 'session' | 'cookie'): Storage type.
2. _key_ (string)
3. initalValue (@default '').

The returned "set" takes two parameters, _key_ and _value_.
If the chosen type is cookie, then the returned "set" also takes an optional third parameter that configures how the cookie is formatted, for more information check out the dependency [cookie-helper](https://github.com/EmilEinarsen/cookie-helper).
```js
import useStorage from 'bjork_usestorage'

const [ state, setState ] = useStorage(type, key, initalvalue?)
```

## Contribution
Pull requests are welcome. For any considerable changes, please open an issue first to discuss what you would like to change.<br>

## Licence
[MIT](https://github.com/EmilEinarsen/useStorage/blob/master/LICENSE)
