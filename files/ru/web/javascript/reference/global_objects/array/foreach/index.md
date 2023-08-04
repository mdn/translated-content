---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
---

{{JSRef("Global_Objects", "Array")}}

Метод **`forEach()`** выполняет указанную функцию один раз для каждого элемента в массиве.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## Синтаксис

```
arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);
```

### Параметры

- `callback`

  - : Функция, которая будет вызвана для каждого элемента массива. Она принимает от одного до трёх аргументов:

    - `currentValue`
      - : Текущий обрабатываемый элемент в массиве.
    - `index`{{optional_inline}}
      - : Индекс текущего обрабатываемого элемента в массиве.
    - `array`{{optional_inline}}
      - : Массив, по которому осуществляется проход.

- `thisArg`
  - : Необязательный параметр. Значение, используемое в качестве `this` при вызове функции `callback`.

### Возвращаемое значение

{{jsxref("undefined")}}.

## Описание

Метод `forEach()` выполняет функцию `callback` один раз для каждого элемента, находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов массива. Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют значение {{jsxref("Global_Objects/undefined", "undefined")}}.

Функция `callback` будет вызвана с **тремя аргументами**:

- значение элемента (**value**)
- индекс элемента (**index**)
- массив, по которому осуществляется проход (**array**)

Если в метод `forEach()` был передан параметр `thisArg`, при вызове `callback` он будет использоваться в качестве значения `this`. В противном случае, в качестве значения `this` будет использоваться значение {{jsxref("Global_Objects/undefined", "undefined")}}. В конечном итоге, значение `this`, наблюдаемое из функции `callback`, определяется согласно {{jsxref('Operators/this', 'обычным правилам определения <code>this</code>, видимого из функции')}}.

Диапазон элементов, обрабатываемых методом `forEach()`, устанавливается до первого вызова функции `callback`. Элементы, добавленные в массив после начала выполнения метода `forEach()`, не будут посещены функцией `callback`. Если существующие элементы массива изменятся, значения, переданные в функцию `callback`, будут значениями на тот момент времени, когда метод `forEach()` посетит их; удалённые элементы посещены не будут. Если уже посещённые элементы удаляются во время итерации (например, с помощью {{jsxref("Array.prototype.shift()", "shift()")}}), последующие элементы будут пропущены. ({{jsxref('Global_Objects/Array/forEach', 'Смотри пример ниже', 'Модификация_массива_во_время_итерации')}})

> **Примечание:** Не существует способа остановить или прервать цикл `forEach()` кроме как выбрасыванием исключения. Если вам необходимо такое поведение, метод `forEach()` неправильный выбор.
>
> Досрочное прекращение может быть достигнуто с:
>
> - Простой цикл {{jsxref('Statements/for', 'for')}}
> - Циклы {{jsxref('Statements/for...of', 'for...of')}} / {{jsxref('Statements/for...in', 'for...in')}}
> - {{jsxref("Array.prototype.every()")}}
> - {{jsxref("Array.prototype.some()")}}
> - {{jsxref("Array.prototype.find()")}}
> - {{jsxref("Array.prototype.findIndex()")}}
>
> Если нужно протестировать элементы массива на условие и нужно вернуть булево значение, вы можете воспользоваться методами {{jsxref("Array.prototype.every()", "every()")}}, {{jsxref("Array.prototype.some()", "some()")}}, {{jsxref("Array.prototype.find()", "find()")}} или {{jsxref("Array.prototype.findIndex()", "findIndex()")}}.
>
> Метод `forEach()` выполняет функцию `callback` один раз для каждого элемента массива; в отличие от методов {{jsxref("Array.prototype.every()", "every()")}} и {{jsxref("Array.prototype.some()", "some()")}}, он всегда возвращает значение {{jsxref("Global_Objects/undefined", "undefined")}}.

## Примеры

### Нет операции для неинициализированных значений (разреженные массивы)

```js
const arraySparse = [1, 3, , 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);

// 1
// 3
// 7
// numCallbackRuns: 3
// комментарий: как вы видите пропущенное значение между 3 и 7 не вызывало функцию callback.
```

### Конвертируем цикл for в forEach

```js
const items = ["item1", "item2", "item3"];
const copy = [];

// до
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}

// после
items.forEach(function (item) {
  copy.push(item);
});
```

### Печать содержимого массива

> **Примечание:** Для отображения содержимого массива в консоли вы можете использовать [`console.table()`](/ru/docs/Web/API/Console/table), который выводит отформатированную версию массива.
>
> Следующий пример иллюстрирует альтернативный подход, использующий `forEach()`.

Следующий код выводит каждый элемент массива на новой строке журнала:

```js
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}

// Обратите внимание на пропуск по индексу 2, там нет элемента, поэтому он не посещается
[2, 5, , 9].forEach(logArrayElements);
// логи:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### Использование `thisArg`

Следующий (надуманный) пример обновляет свойства объекта, когда перебирает записи массива:

```js
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  array.forEach((entry) => {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note
};

const obj = new Counter();
obj.add([2, 5, 9]);
obj.count;
// 3
obj.sum;
// 16
```

Поскольку в `forEach()` передан параметр `thisArg` (`this`), он затем передаётся в `callback` при каждом вызове. И callback использует его в качестве собственного значения `this`.

> **Примечание:** Если при передаче callback функции используется {{jsxref('Functions/Arrow_functions', 'выражение стрелочной функции')}}, параметр `thisArg` может быть опущен, так как все стрелочные функции лексически привязываются к значению{{jsxref("Operators/this", "this")}}.

### Прерывание цикла

Следующий код использует {{jsxref("Array.prototype.every()")}} для логирования содержимого массива и останавливается при превышении значением заданного порогового значения `THRESHOLD`.

```js
var THRESHOLD = 12;
var v = [5, 2, 16, 4, 3, 18, 20];
var res;

res = v.every(function (element, index, array) {
  console.log("element:", element);
  if (element >= THRESHOLD) {
    return false;
  }

  return true;
});
console.log("res:", res);
// логи:
// element: 5
// element: 2
// element: 16
// res: false

res = v.some(function (element, index, array) {
  console.log("element:", element);
  if (element >= THRESHOLD) {
    return true;
  }

  return false;
});
console.log("res:", res);
// логи:
// element: 5
// element: 2
// element: 16
// res: true
```

### Функция копирования объекта

Следующий код создаёт копию переданного объекта. Существует несколько способов создания копии объекта, и это один из них. Он позволяет понять, каким образом работает `Array.prototype.forEach()`, используя функции мета-свойств `Object.*` из ECMAScript 5.

```js
function copy(o) {
  var copy = Object.create(Object.getPrototypeOf(o));
  var propNames = Object.getOwnPropertyNames(o);

  propNames.forEach(function (name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var o1 = { a: 1, b: 2 };
var o2 = copy(o1); // теперь o2 выглядит также, как и o1
```

### Модификация массива во время итерации

В следующем примере в лог выводится `"one"`, `"two"`, `"four"`.

При достижении записи, содержащей значение `'two'`, первая запись всего массива удаляется, в результате чего все оставшиеся записи перемещаются на одну позицию вверх. Поскольку элемент `'four'` теперь находится на более ранней позиции в массиве, `'three'` будет пропущен.

`forEach()` не делает копию массива перед итерацией.

```js
let words = ["one", "two", "three", "four"];
words.forEach((word) => {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});
// one
// two
// four
```

### Выравнивание (уплощение) массива

Следующий пример приведён только для целей обучения. Если вы хотите выравнять массив с помощью встроенных методов, вы можете использовать {{jsxref("Array.prototype.flat()")}}

```js
function flatten(arr) {
  const result = [];

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });

  return result;
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

flatten(nested); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Полифил

Метод `forEach()` был добавлен к стандарту ECMA-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. Вы можете работать с ним, добавив следующий код в начало ваших скриптов, он позволяет использовать `forEach()` в реализациях, которые не поддерживают этот метод. Этот алгоритм является точно тем, что описан в ECMA-262 5-го издания; он предполагает, что {{jsxref("Object")}} и {{jsxref("TypeError")}} имеют свои первоначальные значения и что `callback.call` вычисляется в оригинальное значение {{jsxref("Function.prototype.call()")}}.

```js
// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.18
// Ссылка (en): http://es5.github.io/#x15.4.4.18
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.18
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    var T, k;

    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }

    // 1. Положим O равным результату вызова ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Положим lenValue равным результату вызова внутреннего метода Get объекта O с аргументом "length".
    // 3. Положим len равным ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Если IsCallable(callback) равен false, выкинем исключение TypeError.
    // Смотрите: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    // 5. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Положим k равным 0
    k = 0;

    // 7. Пока k < len, будем повторять
    while (k < len) {
      var kValue;

      // a. Положим Pk равным ToString(k).
      //   Это неявное преобразование для левостороннего операнда в операторе in
      // b. Положим kPresent равным результату вызова внутреннего метода HasProperty объекта O с аргументом Pk.
      //   Этот шаг может быть объединён с шагом c
      // c. Если kPresent равен true, то
      if (k in O) {
        // i. Положим kValue равным результату вызова внутреннего метода Get объекта O с аргументом Pk.
        kValue = O[k];

        // ii. Вызовем внутренний метод Call функции callback с объектом T в качестве значения this и
        // списком аргументов, содержащим kValue, k и O.
        callback.call(T, kValue, k, O);
      }
      // d. Увеличим k на 1.
      k++;
    }
    // 8. Вернём undefined.
  };
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
