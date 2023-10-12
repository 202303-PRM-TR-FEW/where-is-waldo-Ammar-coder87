const example1 = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]];

  const example2 = [
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["P", "O", "O", "O"],
    ["O", "O", "O", "O"]
  ];

const whereIsWaldo = (matrix) => {
  let row = 1;
  let colo = 1;
  for( let i = 0; i < matrix.length; i++) {
    for( let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] !== matrix[row][colo]) {
        row = i;
        colo = j;
      }
    }
  }
  return [row + 1, colo];
};

console.log(whereIsWaldo(example1));
console.log(whereIsWaldo(example2));

