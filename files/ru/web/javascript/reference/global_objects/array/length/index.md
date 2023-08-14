---
title: Array.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
---

{{JSRef("Global_Objects", "Array")}}

## Сводка

Свойство **`length`** объекта, который является экземпляром типа `Array` , устанавливает или возвращает число элементов этого массива. Значение данного свойства 32-битное безнаковое целое число, которое всегда численно больше чем самый наибольший индекс в массиве.

```js
var items = ["shoes", "shirts", "socks", "sweaters"];
items.length;

// возвращает 4
```

## Синтаксис

```
arr.length
```

## Описание

Свойство `length` является целым числом с положительным знаком и значением, меньшим чем 2 в степени 32 (232).

```js
var namelistA = new Array(4294967296); //2 в 32 степени = 4294967296
var namelistC = new Array(-100); //отрицательная величина

console.log(namelistA.length); //RangeError: Invalid array length
console.log(namelistC.length); //RangeError: Invalid array length

var namelistB = [];
namelistB.length = Math.pow(2, 32) - 1; //устанавливает длину массива меньше 2 в 32 степени
console.log(namelistB.length);

//4294967295
```

В любой момент вы можете установить свойство `length` для обрезки массива. Когда вы расширяете массив, изменяя его свойство `length`, реальное количество элементов в массиве увеличивается; например, если вы установите свойство `length` в 3, когда оно равно 2, массив будет из 3 элементов, где значение третьего элемента будет равно `undefined` .

```js
var arr = [1, 2, 3];
printEntries(arr);

arr.length = 5; // устанавливает длину массива 5.
printEntries(arr);

function printEntries(arr) {
  var goNext = true;
  var entries = arr.entries();
  while (goNext) {
    var result = entries.next();
    if (result.done !== true) {
      console.log(result.value[1]);
      goNext = true;
    } else goNext = false;
  }
  console.log("=== printed ===");
}

// 1
// 2
// 3
// === printed ===
// 1
// 2
// 3
// undefined
// undefined
// === printed ===
```

Таким образом, свойство `length` ничего не говорит о количестве определённых значений в массиве. Также смотрите раздел [Взаимосвязь свойства `length` с числовыми свойствами](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array#Relationship_between_length_and_numerical_properties).

{{js_property_attributes(1, 0, 0)}}

## Примеры

### Пример: итерирование по массиву

В следующем примере массив `numbers` итерируется до значения свойства `length`, показывающего, сколько элементов содержит массив. Значение каждого элемента удваивается.

```js
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
// Массив numbers теперь равен [2, 4, 6, 8, 10];
```

### Пример: сокращение массива

Следующий пример сокращает массив `statesUS` до длины в 50 элементов, если текущая длина массива больше 50.

```js
if (statesUS.length > 50) {
  statesUS.length = 50;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/Array", "Array")}}
