# fast-counter
Fast Multi-Dimensional Counter of Array Values for JavaScript

# install
```bash
npm install fast-counter
```

# usage

# simple array of numbers
```javascript
const count = require("fast-counter");
const nums = [0, 2, 2, 5, 6, 2];
const counts = count(nums);
// { 0: 1, 2: 3, 5: 1, 6: 1 }
```

# table of values
```javascript
const count = require("fast-counter");
const nums = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2] 
];
const counts = count(nums);
// { 0: 3, 1: 3, 2: 3 }
```

# multi-band interleaved RGB pixels for satellite imagery
```javascript
const count = require("fast-counter");
const pixels = [
    [255, 0, 123], // first pixel
    [255, 0, 123], // second pixel
    [255, 0, 87], // third pixel
    [82, 13, 94] // fourth pixel
];

// counting RGB pixels
// you can specify the depth to count at
const counts = count(pixels, { depth: 1 });
// counts is { '255,0,123': 2, '255,0,87': 1, '82,13,94': 1 }
```