const convertSpeed = (speed, convertTo) => {
  if (convertTo == "toMS") {
    return console.log(`convertSpeed(36, 'toMS') -> ${speed / 3.6} м/с`);
  }
  if (convertTo == "toKMH") {
    return console.log(`convertSpeed(36, 'toKMH') -> ${speed * 3.6} км/ч`);
  }
};

convertSpeed(36, "toMS");
convertSpeed(36, "toKMH");

const absValue = (value) => {
  return value < 0 ? -value : value;
};

let num = prompt("Введите число");
if (isNaN(parseInt(num))) {
  console.log("Вы ввели не число");
} else {
  console.log(absValue(num));
}

let student = {
  group: 211,
  last_name: "Димухаметова",
  first_name: "Анастасия",
};

console.log(`Список свойств: ${Object.keys(student).join(", ")}`);
console.log(
  `Студент ${student.last_name} ${student.first_name} учится в ${student.group} группе`
);

const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
console.log(randomNumber(-10, 10));

const array = [1, 2, 3, 4];
const sampleArray = (array, number) => {
  const newArray = [];
  for (let i = 0; i < number; i++) {
    const randomIndex = randomNumber(0, array.length - 1);
    console.log(randomIndex);
    newArray.push(array[randomIndex]);
  }
  console.log(newArray);
};
sampleArray(array, 2);
