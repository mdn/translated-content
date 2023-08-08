---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
---

{{JSRef}}

Объект **`Float32Array`** представляет типизированный массив 32-битных чисел с плавающей запятой (соответствует типу float в языке C) с платформо-зависимым порядком байт. Если необходим контроль за порядком байт, то вместо этого объекта используйте [`DataView`]](/ru/docs/Web/JavaScript/Reference/Global_Objects/DataView) Содержимое инициализируется значением `0`. Создав экземпляр **`Float32Array`**, можно получить доступ к элементам массива, используя методы объекта или стандартный синтаксис доступа к элементу массива по его индексу (с помощью скобочной нотации - квадратные скобки).

## Синтаксис

```
new Float32Array(); // new in ES2017
new Float32Array(length);
new Float32Array(typedArray);
new Float32Array(object);
new Float32Array(buffer [, byteOffset [, length]]);
```

Для более подробной информации о синтаксисе конструктора и его параметрах смотрите _[TypedArray](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Свойства

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : Возвращает число, соответствующее размеру элемента массива в байтах. Для `Float32Array` это `4`.
- Float32Array.length
  - : Статическое свойство "длина" со значением 0. Если хотите получить актуальную длину массива (число элементов) используйте {{jsxref("TypedArray.prototype.length", "Float32Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Float32Array.name")}}
  - : Возвращает строковое представление названия конструктора. В данном случае `Float32Array` вернёт `"Float32Array"`.
- {{jsxref("TypedArray.prototype", "Float32Array.prototype")}}
  - : Прототип объекта `TypedArray`.

## Методы

- {{jsxref("TypedArray.from", "Float32Array.from()")}}
  - : Создаёт новый `Float32Array` из массивоподобного или итерируемого объекта. Смотрите также {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Float32Array.of()")}}
  - : Создаёт новый `Float32Array` с заданным числом элементов. Смотрите также {{jsxref("Array.of()")}}.

## `Float32Array` prototype

``Любые `Float32Array` объекты наследуются от {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Свойства

- `Float32Array.prototype.constructor`
  - : Возвращает функцию, которая создаёт экземпляр прототипа. В данном случае это конструктор `Float32Array`.
- {{jsxref("TypedArray.prototype.buffer", "Float32Array.prototype.buffer")}} {{readonlyInline}}
  - : Возвращает {{jsxref("ArrayBuffer")}}, на который ссылается `Float32Array.` Автоматически изменяется при операциях над массивом и поэтому доступен **только для чтения**.
- {{jsxref("TypedArray.prototype.byteLength", "Float32Array.prototype.byteLength")}} {{readonlyInline}}
  - : Возвращает длину в байтах для `Float32Array` с начала его {{jsxref("ArrayBuffer")}}. Автоматически изменяется при операциях над массивом и поэтому доступен **только для чтения**.
- {{jsxref("TypedArray.prototype.byteOffset", "Float32Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Возвращает смещение (в байтах) `Float32Array` относительно начала {{jsxref("ArrayBuffer")}}. Автоматически изменяется при операциях над массивом и поэтому доступен **только для чтения**.
- {{jsxref("TypedArray.prototype.length", "Float32Array.prototype.length")}} {{readonlyInline}}
  - : Возвращает число элементов, хранящихся в `Float32Array`. Автоматически изменяется при операциях над массивом и поэтому доступен **только для чтения**.

### Методы

- {{jsxref("TypedArray.copyWithin", "Float32Array.prototype.copyWithin()")}}
  - : Копирует последовательность элементов в массив. Смотрите также {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Float32Array.prototype.entries()")}}
  - : Возвращает новый объект `Array Iterator`, который содержит пары ключ-значение для каждого элемента в массиве. Смотрите также {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Float32Array.prototype.every()")}}
  - : Проверяет, что все элементы в массиве соответствуют условию. Смотрите также {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Float32Array.prototype.fill()")}}
  - : Заполняет весь массив от начального до последнего индекса одинаковыми элементами. Смотрите также {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Float32Array.prototype.filter()")}}
  - : Возвращает новый массив со всеми элементами удовлетворяющей условию. Смотрите также {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Float32Array.prototype.find()")}}
  - : Возвращает найденное значение в массиве, если найден элемент соответствующий условию, в противном случае возвращает `undefined`. Смотрите также {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Float32Array.prototype.findIndex()")}}
  - : Возвращает индекс найденного значения в массиве, если найден элемент соответствующий условию, в противном случае возвращает `-1`. Смотрите также {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Float32Array.prototype.forEach()")}}
  - : Вызывает функцию для каждого элемента в массиве. Смотрите также {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Float32Array.prototype.includes()")}} {{experimental_inline}}
  - : Проверяет что массив включает себя элемент, возвращает соответственно true или false. Смотрите также {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Float32Array.prototype.indexOf()")}}
  - : Возвращает индекс элемента соответствующего условию (равен значению), в противном случае возвращает -1. Смотрите также {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Float32Array.prototype.join()")}}
  - : Объединяет элементы массива в строку. Смотрите также {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Float32Array.prototype.keys()")}}
  - : Возвращает новый `Array Iterator,` который содержит ключи элементов в массиве. Смотрите также {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Float32Array.prototype.lastIndexOf()")}}
  - : Возвращает последний найденный индекс соответствующий искомому значению, в противном случае возвращает - 1. Смотрите также {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Float32Array.prototype.map()")}}
  - : Возвращает новый массив с результатом применения функции к каждому элементу в этом массиве. Смотрите также {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Float32Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Нестандартизированная версия {{jsxref("TypedArray.copyWithin", "Float32Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Float32Array.prototype.reduce()")}}
  - : Применяет функцию к каждому элементу в массиве (слева-направо) и накапливает результат в переменной. Смотрите также {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Float32Array.prototype.reduceRight()")}}
  - : Применяет функцию к каждому элементу в массиве (справа-налево) и накапливает результат в переменной. Смотрите также {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Float32Array.prototype.reverse()")}}
  - : Переставляет элементы массива в обратном порядке - первый становится последним и так далее. Смотрите также {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Float32Array.prototype.set()")}}
  - : Сохраняет значения в массиве.
- {{jsxref("TypedArray.slice", "Float32Array.prototype.slice()")}}
  - : Выделяет часть массива и возвращает новый с этими значениями. Смотрите также {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Float32Array.prototype.some()")}}
  - : Возвращает true если хотя бы один элемент удовлетворяет условию. Смотрите также {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Float32Array.prototype.sort()")}}
  - : Сортирует элементы массива по порядку и возвращает этот массив. Смотрите также {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Float32Array.prototype.subarray()")}}
  - : `Возваращает новый Float32Array` с заданного начального по конечный индекс.
- {{jsxref("TypedArray.values", "Float32Array.prototype.values()")}}
  - : Возвращает новый объект `Array Iterator` который содержит значения всех элементов в массиве. Смотрите также {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Float32Array.prototype.toLocaleString()")}}
  - : Возвращает локализированную строку представляющую массив и его элементы. Смотрите также {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Float32Array.prototype.toString()")}}
  - : Возвращает строку представляющую массив и его элементы. Смотрите также {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Float32Array.prototype[@@iterator]()")}}
  - : `Возвращает новый объект Array Iterator который содержит значения всех элементов в массиве.`

## Примеры

Разные способы создания `Float32Array`:

```js
// Используя указание длины
var float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// Из массива
var arr = new Float32Array([21, 31]);
console.log(arr[1]); // 31

// Из другого TypedArray
var x = new Float32Array([21, 31]);
var y = new Float32Array(x);
console.log(y[0]); // 21

// Из другого ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Float32Array(buffer, 0, 4);

// Из итератора
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var float32 = new Float32Array(iterable);
// Float32Array[1, 2, 3]
```

## Спецификация

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Примечания по совместимости

Начиная с ECMAScript 2015 (ES6), `Float32Array` конструктор обязательно должен вызываться с ключевым словом {{jsxref("Operators/new", "new")}}. Вызов `Float32Array` конструктора как функцию приведёт к исключению {{jsxref("TypeError")}}.

```js example-bad
var dv = Float32Array([1, 2, 3]);
// TypeError: calling a builtin Float32Array constructor
// without new is forbidden
```

```js example-good
var dv = new Float32Array([1, 2, 3]);
```

## Смотрите также

- [JavaScript typed arrays](/ru/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
