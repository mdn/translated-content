---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
---

{{JSRef}}

Метод **`Array.from()`** создаёт новый экземпляр `Array` из массивоподобного или итерируемого объекта.

{{EmbedInteractiveExample("pages/js/array-from.html")}}

## Синтаксис

```
Array.from(arrayLike[, mapFn[, thisArg]])
```

### Параметры

- `arrayLike`
  - : Массивоподобный или итерируемый объект, преобразуемый в массив.
- `mapFn` {{Optional_inline}}
  - : Отображающая функция, вызываемая для каждого элемента массива.
- `thisArg` {{Optional_inline}}
  - : Значение, используемое в качестве `this` при выполнении функции `mapFn`.

### Возвращаемое значение

Новый экземпляр {{jsxref("Array")}}

## Описание

`Array.from()` позволяет вам создавать массивы из:

- массивоподобных объектов (объектов со свойством `length` и элементами по индексным ключам) или
- [итерируемых объектов](/ru/docs/Web/JavaScript/Reference/Iteration_protocols) (объектов, из которых вы можете достать их элементы, например {{jsxref("Map")}} или {{jsxref("Set")}}).

`Array.from()` имеет необязательный параметр `mapFn`, который позволяет вам выполнять функцию {{jsxref("Array.prototype.map", "map")}} для каждого элемента создаваемого массива (или его подкласса). Проще говоря, вызов `Array.from(obj, mapFn, thisArg)` эквивалентен цепочке `Array.from(obj).map(mapFn, thisArg)`, за исключением того, что он не создаёт промежуточного массива. Это особенно важно для некоторых подклассов массива, вроде [типизированных массивов](/ru/docs/Web/JavaScript/Typed_arrays), поскольку промежуточный массив неизбежно приведёт к усечению значений, чтобы они подпали под подходящий тип.

Свойство `length` метода `from()` равно 1.

В ES2015 классовый синтаксис позволяет создавать подклассы как встроенных классов, так и классов, определённых пользователем; в результате статические методы класса, вроде `Array.from` «наследуются» подклассами {{jsxref("Global_Objects/Array", "Array")}} и создают новые экземпляры подкласса, а не класса {{jsxref("Global_Objects/Array", "Array")}}.

## Примеры

### Массив из строки `String`

```js
Array.from("foo");
// ['f', 'o', 'o']
```

### Массив из `Set`

```js
var s = new Set(["foo", window]);
Array.from(s);
// ['foo', window]
```

### Массив из `Map`

```js
var m = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]
```

### Массив из массивоподобного объекта (arguments)

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);
// [1, 2, 3]
```

### Использование стрелочной функции и `Array.from()`

```js
// Использование стрелочной функции в качестве функции отображения для

// манипулирования элементами
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Генерирования последовательности чисел
Array.from({ length: 5 }, (v, k) => k);
// [0, 1, 2, 3, 4]
```

## Полифил

Метод `Array.from` был добавлен к стандарту ECMA-262 в 6-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать `Array.from` в реализациях, которые не поддерживают этот метод. Этот алгоритм является точно тем, что описан в ECMA-262 6-го издания; он предполагает, что {{jsxref("Global_Objects/Object", "Object")}} и {{jsxref("Global_Objects/TypeError", "TypeError")}} имеют свои первоначальные значения и что `callback.call` вычисляется в оригинальное значение {{jsxref("Function.prototype.call")}}. Кроме того, поскольку истинные итерируемые объекты не могут быть заменены полифилом, эта реализация не поддерживает общие итерируемые объекты, как они определены в 6-м издании ECMA-262.

```js
// Шаги алгоритма ECMA-262, 6-е издание, 22.1.2.1
// Ссылка: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === "function" || toStr.call(fn) === "[object Function]";
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // Свойство length метода from равно 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Положим C равным значению this.
      var C = this;

      // 2. Положим items равным ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError(
          "Array.from requires an array-like object - not null or undefined",
        );
      }

      // 4. Если mapfn равен undefined, положим mapping равным false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== "undefined") {
        // 5. иначе
        // 5. a. Если вызов IsCallable(mapfn) равен false, выкидываем исключение TypeError.
        if (!isCallable(mapFn)) {
          throw new TypeError(
            "Array.from: when provided, the second argument must be a function",
          );
        }

        // 5. b. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Положим lenValue равным Get(items, "length").
      // 11. Положим len равным ToLength(lenValue).
      var len = toLength(items.length);

      // 13. Если IsConstructor(C) равен true, то
      // 13. a. Положим A равным результату вызова внутреннего метода [[Construct]]
      //     объекта C со списком аргументов, содержащим единственный элемент len.
      // 14. a. Иначе, положим A равным ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Положим k равным 0.
      var k = 0;
      // 17. Пока k < len, будем повторять... (шаги с a по h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] =
            typeof T === "undefined"
              ? mapFn(kValue, k)
              : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Положим putStatus равным Put(A, "length", len, true).
      A.length = len;
      // 20. Вернём A.
      return A;
    };
  })();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
