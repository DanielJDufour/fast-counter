const getDepth = require("get-depth");

function count(data, options) {
  const debug = (options && options.debug) || false;
  // get the depth or number of dimensions
  const depth = (options && options.depth) || getDepth(data);
  if (debug) console.log("depth:", depth);
  const counts = (options && options.counts) || {};
  const currentDepth = (options && options.currentDepth) || 1;
  if (debug) console.log("currentDepth:", currentDepth);

  if (currentDepth === depth) {
    for (let i = 0; i < data.length; i++) {
      const value = data[i];
      if (counts[value] === undefined) {
        counts[value] = 1;
      } else {
        counts[value]++;
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      count(data[i], { counts, currentDepth: currentDepth + 1, depth });
    }
  }
  return counts;
}

module.exports = count;
