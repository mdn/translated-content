---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
---

{{JSRef}}

Метод **`some()`** проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

> **Примечание:** метод возвращает `false` при любом условии для пустого массива.

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## Синтаксис

```
arr.some(callback(element[, index[, array]])[, thisArg])
```

### Параметры

- `callback`

  - : Функция проверки каждого элемента, принимает три аргумента:

    - `element`
      - : Текущий обрабатываемый элемент массива.
    - `index`{{Optional_inline}}
      - : Индекс текущего обрабатываемого элемента массива.
    - `array`{{Optional_inline}}
      - : Массив, по которому осуществляется проход.

- `thisArg`{{Optional_inline}}
  - : Значение, используемое в качестве `this` при выполнении функции `callback`.

### Возвращаемое значение

**`true`**, если функция проверки возвращает {{Glossary("truthy")}} значение хотя бы для одного элемента массива. Иначе, **`false`**.

## Описание

Метод `some()` вызывает переданную функцию `callback` один раз для каждого элемента, присутствующего в массиве до тех пор, пока не найдёт такой, для которого `callback` вернёт _истинное_ значение (значение, становящееся равным `true` при приведении его к типу {{jsxref("Boolean")}}). Если такой элемент найден, метод `some()` немедленно вернёт `true`. В противном случае, если `callback` вернёт `false` для всех элементов массива, метод `some()` вернёт `false`. Функция `callback` вызывается только для индексов массива, имеющих присвоенные значения; она не вызывается для индексов, которые были удалены или которым значения никогда не присваивались.

Функция `callback` вызывается с тремя аргументами: значением элемента, индексом элемента и массивом, по которому осуществляется проход.

Если в метод `some()` был передан параметр `thisArg`, при вызове `callback` он будет использоваться в качестве значения `this`. В противном случае в качестве значения `this` будет использоваться значение {{jsxref("Global_Objects/undefined", "undefined")}}. В конечном итоге, значение `this`, наблюдаемое из функции `callback`, определяется согласно [обычным правилам определения `this`, видимого из функции](/ru/docs/Web/JavaScript/Reference/Operators/this).

Метод `some()` не изменяет массив, для которого он был вызван.

Диапазон элементов, обрабатываемых методом `some()`, устанавливается до первого вызова функции `callback`. Элементы, добавленные в массив после начала выполнения метода `some()`, не будут посещены функцией `callback`. Если существующие элементы массива изменятся, значения, переданные в функцию `callback`, будут значениями на тот момент времени, когда метод `some()` посетит их; удалённые элементы посещены не будут.

## Примеры

### Проверка значений элементов массива

Следующий пример проверяет наличие в массиве элемента, который больше 10.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

{{ EmbedLiveSample('Проверка_значений_элементов_массива') }}

### Проверка элементов массива с использованием стрелочных функций

[Стрелочные функции](/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions) предоставляют более краткий синтаксис для подобных проверок.

```js
[2, 5, 8, 1, 4].some((elem) => elem > 10); // false
[12, 5, 8, 1, 4].some((elem) => elem > 10); // true
```

{{ EmbedLiveSample('Проверка_элементов_массива_с_использованием_стрелочных_функций') }}

### Проверка наличия элемента в массиве

Чтобы имитировать функцию метода `includes()`, эта пользовательская функция возвращает true, если элемент существует в массиве:

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

{{ EmbedLiveSample('Проверка_наличия_элемента_в_массиве') }}

### Проверка наличия элемента в массиве с использованием стрелочной функции

```js
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
```

{{ EmbedLiveSample('Проверка_наличия_элемента_в_массиве_с_использованием_стрелочной_функции') }}

### Приведение значения к логическому типу

```js
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  "use strict";

  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function (t) {
    return t === value;
  });
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
```

{{ EmbedLiveSample('Приведение_значения_к_логическому_типу') }}

## Полифил

Метод `some()` был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может не присутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать `some()` в реализациях, которые не поддерживают этот метод. Этот алгоритм является точно тем, что описан в ECMA-262 5-го издания; и предполагает, что {{jsxref("Global_Objects/Object", "Object")}} и {{jsxref("Global_Objects/TypeError", "TypeError")}} имеют свои первоначальные значения и что `callback.call` вычисляется в оригинальное значение {{jsxref("Function.prototype.call()")}}.

```js
// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.17
// Ссылка (en): http://es5.github.io/#x15.4.4.17
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function (fun /*, thisArg*/) {
    "use strict";

    if (this == null) {
      throw new TypeError("Array.prototype.some called on null or undefined");
    }

    if (typeof fun !== "function") {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.some()")}}
