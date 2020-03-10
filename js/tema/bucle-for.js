// Bucle for
function for_example() {
  console.log('--- For ---');
  console.log('for (let value of list)');
  let list = [8, 3, 11, 9, 6];
  for (let value of list) {
    console.log(value);
  }
  for (var char of 'Hola!') {
    console.log(char);
  }
  console.log('for (const key in list)');
  for(const key in list) {
    console.log(key)
  }
}
