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
