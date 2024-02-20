//домашка за 06.02
const arr = [1, 2, 3, 4];
const reverse = (args) => {
  let newArr = [];
  for (let i = args.length - 1; i >= 0; i--) {
    newArr[newArr.length] = args[i];
  }
  return newArr;
};
console.log(reverse(arr));

const text = "Hello, my name is Kristina!";
const truncate = (text, maxLenght) => {
  if (text.length > maxLenght) {
    return text.slice(0, maxLenght - 1) + "…";
  } else {
    return text;
  }
};
console.log(truncate(text, 6));

//домашка за 08.02
//функция filter

const array = [1, 2, 4, 5, 2, 6];

const filter = (arr, callback) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(filter(array, (item) => item === 2));

//функция find

const find = (arr, callback) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
      break;
    }
  }
  return newArr;
};
console.log(find(array, (item) => item === 2));
