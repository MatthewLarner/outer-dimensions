# outer-dimensions
### Get the outer dimensions of an element, including margins

```javascript
var outerDimensions = require('outer-dimentions');

var dimensions = outerDimensions(element);
```

dimensions is an object with width and height properties.

```javascript
{
    width: //offsetWidth + left and right margins,
    height: //offsetHeight + top and bottom margins
}
```
