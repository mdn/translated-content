---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
---

{{JSRef}}

Метод **`slice()`** возвращает новый массив, содержащий копию части исходного массива.

{{InteractiveExample("JavaScript Demo: Array.slice()")}}

```js interactive-example
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

## Синтаксис

```
arr.slice([begin[, end]])
```

### Параметры

- `begin` {{optional_inline}}

  - : Индекс (счёт начинается с нуля), по которому начинать извлечение.

    Если индекс отрицательный, `begin` указывает смещение от конца последовательности. Вызов `slice(-2)` извлечёт два последних элемента последовательности.

    Если `begin` не определён, `slice()` начинает работать с индекса `0`.

    Если `begin` больше длины последовательности вернётся пустой массив.

- `end` {{optional_inline}}

  - : Индекс (счёт начинается с нуля), по которому заканчивать извлечение. Метод `slice()` извлекает элементы с индексом меньше `end`.

    Вызов `slice(1, 4)` извлечёт элементы со второго по четвёртый (элементы по индексам 1, 2 и 3).

    Если индекс отрицательный, `end` указывает смещение от конца последовательности. Вызов `slice(2, -1)` извлечёт из последовательности элементы начиная с третьего элемента с начала и заканчивая вторым с конца.

    Если `end >= array.length` или `end` опущен, `slice()` извлекает все элементы до конца последовательности (`arr.length`).

### Возвращаемое значение

Новый массив, содержащий извлечённые элементы.

## Описание

Метод `slice()` не изменяет исходный массив, а возвращает новую «одноуровневую» копию, содержащую копии элементов, вырезанных из исходного массива. Элементы исходного массива копируются в новый массив по следующим правилам:

- Ссылки на объекты (но не фактические объекты): метод `slice()` копирует ссылки на объекты в новый массив. И оригинал, и новый массив ссылаются на один и тот же объект. То есть, если объект по ссылке будет изменён, изменения будут видны и в новом, и в исходном массивах.
- Строки и числа (но не объекты {{jsxref("Global_Objects/String", "String")}} и {{jsxref("Global_Objects/Number", "Number")}}): метод `slice()` копирует значения строк и чисел в новый массив. Изменения строки или числа в одном массиве никак не затрагивает другой.

Если к любому массиву будет добавлен новый элемент, это никак не повлияет на другой массив.

## Примеры

### Пример: возврат части существующего массива

```js
// Пример: наши хорошие друзья цитрусовые среди фруктов
var fruits = ["Банан", "Апельсин", "Лимон", "Яблоко", "Манго"];
var citrus = fruits.slice(1, 3);

// citrus содержит ['Апельсин', 'Лимон']
```

### Пример: использование метода `slice()`

В следующем примере метод `slice()` создаёт новый массив, `newCar`, из массива `myCar`. Оба содержат ссылку на объект `myHonda`. Когда цвет в объекте `myHonda` изменяется на багровый, оба массива замечают это изменение.

```js
// Используя slice, создаём newCar из myCar.
var myHonda = {
  color: "красный",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
var myCar = [myHonda, 2, "в хорошем состоянии", "приобретена в 1997"];
var newCar = myCar.slice(0, 2);

// Отображаем значения myCar, newCar и цвет myHonda
//  по ссылкам из обоих массивов.
console.log("myCar = " + myCar.toSource());
console.log("newCar = " + newCar.toSource());
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);

// Изменяем цвет myHonda.
myHonda.color = "багровый";
console.log("Новый цвет моей Honda - " + myHonda.color);

// Отображаем цвет myHonda по ссылкам из обоих массивов.
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);
```

Этот скрипт выведет:

```js
myCar = [{color:'красный', wheels:4, engine:{cylinders:4, size:2.2}}, 2,
         'в хорошем состоянии', 'приобретена в 1997']
newCar = [{color:'красный', wheels:4, engine:{cylinders:4, size:2.2}}, 2]
myCar[0].color = красный
newCar[0].color = красный
Новый цвет моей Honda - багровый
myCar[0].color = багровый
newCar[0].color = багровый
```

## Массивоподобные объекты

Метод `slice()` также может использоваться для преобразования массивоподобных объектов / коллекций в новый массив `Array`. Вам просто нужно привязать метод к объекту. Псевдомассив {{jsxref("Functions_and_function_scope/arguments", "arguments")}} внутри функции как раз является примером «массивоподобного объекта».

```js
function list() {
  return Array.prototype.slice.call(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

Привязка может быть осуществлена посредством функции `call()` из прототипа функции {{jsxref("Function.prototype")}}, также запись может быть сокращена до `[].slice.call(arguments)` вместо использования `Array.prototype.slice.call()`. В любом случае, она может быть упрощена посредством использования функции {{jsxref("Function.prototype.bind()", "bind()")}}.

```js
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

## Совершенствование кросс-браузерного поведения

Хотя спецификация не требует от хост-объектов (например, объектов DOM) следовать поведению Mozilla при преобразовании с помощью `Array.prototype.slice()` и IE < 9 так не делает, версии IE, начиная с 9-й это умеют. «Прокладывание» позволяет добиться надёжного кросс-браузерного поведения. Пока другие современные браузеры будут поддерживать эту способность, что и делают в настоящее время IE, Mozilla, Chrome, Safari и Opera, разработчики, читая (поддерживающий DOM) код функции `slice()`, опирающийся на эту прокладку, не будут вводиться в заблуждение его семантикой; они могут смело полагаться на текущую семантику, являющуюся, видимо, _де-факто_ стандартным поведением. (Прокладка также исправляет поведение IE, позволяя работать со вторым аргументом `slice()`, явно определённым как {{jsxref("Global_Objects/null", "null")}}/{{jsxref("Global_Objects/undefined", "undefined")}}, поскольку более ранние версии IE такое не позволяют, но все современные браузеры, в том числе IE >= 9, поддерживают данное поведение.)

```js
/**
 * Прокладка для "исправления" отсутствия поддержки в IE < 9 применения slice
 * к хост-объектам вроде NamedNodeMap, NodeList и HTMLCollection
 * (технически, поскольку хост-объекты зависят от реализации,
 * по крайней мере, до ES2015, IE не обязан так работать).
 * Также работает для строк, исправляет поведение IE < 9, позволяя явно указывать undefined
 * вторым аргументом (как в Firefox), и предотвращает ошибки, возникающие при
 * вызове на других объектах DOM.
 */
(function () {
  "use strict";
  var _slice = Array.prototype.slice;

  try {
    // Не может использоваться с элементами DOM в IE < 9
    _slice.call(document.documentElement);
  } catch (e) {
    // В IE < 9 кидается исключение
    // Функция будет работать для истинных массивов, массивоподобных объектов,
    // NamedNodeMap (атрибуты, сущности, примечания),
    // NodeList (например, getElementsByTagName), HTMLCollection (например, childNodes)
    // и не будет падать на других объектах DOM (как это происходит на элементах DOM в IE < 9)
    Array.prototype.slice = function (begin, end) {
      // IE < 9 будет недоволен аргументом end, равным undefined
      end = typeof end !== "undefined" ? end : this.length;

      // Для родных объектов Array мы используем родную функцию slice
      if (Object.prototype.toString.call(this) === "[object Array]") {
        return _slice.call(this, begin, end);
      }

      // Массивоподобные объекты мы обрабатываем самостоятельно
      var i,
        cloned = [],
        size,
        len = this.length;

      // Обрабатываем отрицательное значение begin
      var start = begin || 0;
      start = start >= 0 ? start : len + start;

      // Обрабатываем отрицательное значение end
      var upTo = end ? end : len;
      if (end < 0) {
        upTo = len + end;
      }

      // Фактически ожидаемый размер среза
      size = upTo - start;

      if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
          for (i = 0; i < size; i++) {
            cloned[i] = this.charAt(start + i);
          }
        } else {
          for (i = 0; i < size; i++) {
            cloned[i] = this[start + i];
          }
        }
      }

      return cloned;
    };
  }
})();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
