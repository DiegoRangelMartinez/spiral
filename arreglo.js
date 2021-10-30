let value = [[1, 2, 3, 4],
             [5, 6, 7, 8],
             [9, 10, 11, 12],
             [13, 14, 15, 16],
             [5, 6, 7, 8]];
let spiralFunction = (array) => {
  if(!array.length || !array[0].length)
    return;
  printFirstRow(array);
  removeFirsRow(array);
  printLastElements(array);
  spiralFunction(reversearrayrix(array));
};
let reversearrayrix = (array) => {
    array.forEach(item => {
        item.reverse();
    });
    array.reverse();
    return array;
};
let printFirstRow = (array) => {
  array[0].forEach(entry => {
    console.log(entry);
  });
};
let removeFirsRow = (array) => {
  array.shift();
};
let printLastElements = (array) => {
  array.forEach(item => {
      console.log(item.pop());
  });
};
spiralFunction(value);
