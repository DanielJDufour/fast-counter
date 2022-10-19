const test = require("flug");
const count = require("./index");

test("count single dimensional array of numbers", ({ eq }) => {
  const data = [0, 1, 1, 2, 6, 0, 1];
  const counts = count(data);
  eq(counts, { 0: 2, 1: 3, 2: 1, 6: 1 });
});

test("count two dimensional array of numbers", ({ eq }) => {
  const data = [
    [0, 1, 1, 2, 6, 0, 1],
    [0, 1, 1, 2, 6, 0, 1]
  ];
  const counts = count(data, { debug: false });
  eq(counts, { 0: 4, 1: 6, 2: 2, 6: 2 });
});

test("count three dimensional array of numbers", ({ eq }) => {
  const data = [
    [
      [0, 1],
      [1, 2],
      [6, 0]
    ],
    [
      [0, 1],
      [1, 2],
      [6, 0]
    ]
  ];
  const counts = count(data, { debug: false });
  eq(counts, { 0: 4, 1: 4, 2: 2, 6: 2 });
});
