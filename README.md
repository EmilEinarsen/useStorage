# What is this?
A React hook used for managing state and Storage simultaneously, effortlessly.
## Install
Use npm to install bjork_useStorage or copy the code manually form [github](https://github.com/EmilEinarsen/bjork_useStorage).
```bash
> npm i bjork_useStorage
```
## Usage
Utilizes and, therefor, functions like Reacts **useState**. <br>
However, _useStorage_ also take three params: <br>
1. _type_ (string). Which only accepts one of three strings "local", "session" or "cookie".
2. _key_ (string)
3. initalValue (@default "").

The returned "set" takes two parameters, _key_ and _value_.
Also, if the chosen type is cookie, then the returned "set" also takes an optional third parameter that configures how the cookie is packaged, for more information check out the dependency [bjork_cookie](https://github.com/EmilEinarsen/bjork_cookie).
```js
> import useStorage from 'bjork_usestorage'
>
> const [ state, setState ] = useStorage(type, key, initalvalue?)
```
## Contribution
Pull requests are welcome. For any considerable changes, please open an issue first to discuss what you would like to change.<br>

## Licence
[MIT](https://github.com/EmilEinarsen/bjork_useStorage/blob/master/LICENSE)
