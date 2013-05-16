# jQuery Prettify

[![Build Status](https://travis-ci.org/jewelsjacobs/jquery.prettify.png)](https://travis-ci.org/jewelsjacobs/jquery.prettify)

jQuery plugin to print an associative array / object in the browser

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jjacobs/jquery.prettify/master/dist/jquery.prettify.min.js
[max]: https://raw.github.com/jjacobs/jquery.prettify/master/dist/jquery.prettify.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.prettify.min.js"></script>
```

## Documentation

### How to use
#### CSS
```css
pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }
    .string { color: green; }
    .number { color: darkorange; }
    .boolean { color: blue; }
    .null { color: magenta; }
    .key { color: red; }
```

#### HTML
```html
<div id="test"></div>
```

#### JavaScript
```javascript
$().ready(function(){
    var obj = {a:1, 'b':'foo', c:[false,'false',null, 'null', {d:{e:1.3e5,f:'1.3e5'}}]};

    $('#test').prettify({highlight : true}, obj);
});
```

## Examples
[Demo jsfiddle](http://jsfiddle.net/jewelsjacobs/58bAZ/)

## Release History
_(Nothing yet)_
