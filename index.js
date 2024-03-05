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
const cb = (item) => item === 2;

console.log(filter(array, cb));

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

//домашка за 20.02

class Book {
  constructor(options) {
    this.title = options.title;
    this.author = options.author;
    this.year = options.year;
  }

  GetSummary() {
    return `${this.title} была написана ${this.author} в ${this.year} году.`;
  }

  GetAge() {
    let currentYear = new Date().getFullYear();
    return `Со дня публикации книге ${currentYear - this.year}`;
  }

  Revise(newYear) {
    this.year = newYear;
    return `Книга была переиздана в ${this.year} году`;
  }
}

const sevenGnomes = new Book({
  title: "Семь гномов",
  author: "Братья Гримм",
  year: "1937",
});

console.log(sevenGnomes.GetSummary());
console.log(sevenGnomes.GetAge());
console.log(sevenGnomes.Revise(2000));

//домашка за 22.02
