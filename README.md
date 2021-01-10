# node-jsonp

A simple JSONP implementation for Node.js.

## Installation

``` bash
$ npm install node-jsonp
```

## API

### JSONP(url, data, method, callback)

- `url` (`String`) The URL you are requesting with the JSON data
- `data` (`Object`) The Data object you want to generate the URL params from
- `method` (`String`) The method name for the callback function. Defaults to callback (for example, flickr's is "jsoncallback")
- `callback` (`function`) The callback you want to execute as an anonymous function. The first parameter of the anonymous callback function is the JSON

The callback is called with `data` parameters.

###Example
```js
const JSONP = require('node-jsonp-v2');

JSONP('http://jsfiddle.net/echo/jsonp/?first=Hello%20&b=World', json => {
	console.log(json);
});
```

## License

MIT

