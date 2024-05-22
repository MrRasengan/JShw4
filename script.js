// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function checkNum() {
	for (let i = 0; i <= 11; i++) {
		if (i === 0) {
			console.log(`${i} - это ноль`);
		} else if (i % 2 === 0) {
			console.log(`${i} - это четное число`);
		} else if (i % 2 !== 0) {
			console.log(`${i} - это нечетное число`);
		}
	}
}
checkNum();

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

function delInArr() {
	const arr = [1, 2, 3, 4, 5, 6, 7];
	arr.splice(3, 2); //начиная с третьего элемента удаляем два эл.
	console.log(...arr);
}
delInArr();

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const array = [];

function generateRandomNumb() {
	for (let i = 0; i <= 4; i++) {
		array.push(Math.floor(Math.random() * (9 - 1) + 1));
	}
	console.log(`Массив рандомных  пяти чисел от 0 до 9 - ${array}`);
}
generateRandomNumb();

function getSumNumb() {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	console.log(`Сумма элеиентов в данном массиве равна - ${sum}`);
}
getSumNumb();

function getMinNumb() {
	const minNumb = Math.min(...array);
	console.log(`Минимальное значение в данном массиве - ${minNumb}`);
}
getMinNumb();

// мои костыли=)
// for (let i = 0; i < array.length; i++) {
//   if(array[i] === 3){
//     console.log(`есть 3`);
//     break;
//   } else {
//     console.log(`нет 3`);
//   }
// }

function getNumbTree() {
	const numbTree = array.includes(3);
	console.log(`Есть ли в данном массиве 3? ${numbTree}`);
}
getNumbTree();

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 1; i <= 20; i++){
  let x = " "
  for (let j = 1; j <= i; j++){
      x += " x";
  }
  console.log(x);
}
