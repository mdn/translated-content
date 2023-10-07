---
title: Int32Array
slug: Web/JavaScript/Reference/Global_Objects/Int32Array
---

{{JSRef}}

Объект **`Int32Array`** представляет типизированный массив 32-битных целых чисел со знаком с дополнением до двух с платформо-зависимым порядком байт. Если необходим контроль за порядком байт, то вместо этого объекта используйте [`DataView`](/ru/docs/Web/JavaScript/Reference/Global_Objects/DataView). Содержимое инициализируется значением `0`. Создав экземпляр **`Int32Array`**, можно получить доступ к элементам массива, используя методы объекта или стандартный синтаксис доступа к элементу массива по его индексу (с помощью скобочной нотации).

## Синтаксис

```
new Int32Array(); // добавлено в ES2017
new Int32Array(length);
new Int32Array(typedArray);
new Int32Array(object);
new Int32Array(buffer [, byteOffset [, length]]);
```

Для получения дополнительной информации о синтаксисе конструктора и параметрах _[TypedArray](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax)_.

## Свойства

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int32Array.BYTES_PER_ELEMENT")}}
  - : Возвращает числовое значение размера элемента. `4` в случае с `Int32Array`.
- Int32Array.length
  - : Свойство статического размера, значение которого равно 3. Для актуального размера (количества элементов), смотрите {{jsxref("TypedArray.prototype.length", "Int32Array.prototype.length")}}.
- {{jsxref("TypedArray.name", "Int32Array.name")}}
  - : Возвращает строковое значение названия конструктора. В случае с типом `Int32Array`: "Int32Array".
- {{jsxref("TypedArray.prototype", "Int32Array.prototype")}}
  - : Прототип для _TypedArray_ объектов.

## Методы

- {{jsxref("TypedArray.from", "Int32Array.from()")}}
  - : Создаёт новый `Int32Array` из массивоподобного или итеративного объекта. Смотрите также {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Int32Array.of()")}}
  - : Создаёт новый `Int32Array` with a variable number of arguments. See also {{jsxref("Array.of()")}}.

## `Int32Array` прототип

All `Int32Array` objects inherit from {{jsxref("TypedArray.prototype", "%TypedArray%.prototype")}}.

### Свойства

- `Int32Array.prototype.constructor`
  - : Returns the function that created an instance's prototype. This is the `Int32Array` constructor by default.
- {{jsxref("TypedArray.prototype.buffer", "Int32Array.prototype.buffer")}} {{readonlyInline}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the `Int32Array` Fixed at construction time and thus **read only**.
- {{jsxref("TypedArray.prototype.byteLength", "Int32Array.prototype.byteLength")}} {{readonlyInline}}
  - : Returns the length (in bytes) of the `Int32Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.byteOffset", "Int32Array.prototype.byteOffset")}} {{readonlyInline}}
  - : Returns the offset (in bytes) of the `Int32Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.length", "Int32Array.prototype.length")}} {{readonlyInline}}
  - : Returns the number of elements hold in the `Int32Array`. Fixed at construction time and thus **read only.**

### Методы

- {{jsxref("TypedArray.copyWithin", "Int32Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int32Array.prototype.entries()")}}
  - : Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int32Array.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int32Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int32Array.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int32Array.prototype.find()")}}
  - : Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int32Array.prototype.findIndex()")}}
  - : Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found. See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int32Array.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int32Array.prototype.includes()")}} {{experimental_inline}}
  - : Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int32Array.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int32Array.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int32Array.prototype.keys()")}}
  - : Returns a new `Array Iterator` that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int32Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int32Array.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.move", "Int32Array.prototype.move()")}} {{non-standard_inline}} {{unimplemented_inline}}
  - : Former non-standard version of {{jsxref("TypedArray.copyWithin", "Int32Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.reduce", "Int32Array.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Int32Array.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Int32Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Int32Array.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified array.
- {{jsxref("TypedArray.slice", "Int32Array.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Int32Array.prototype.some()")}}
  - : Returns true if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Int32Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int32Array.prototype.subarray()")}}
  - : Returns a new `Int32Array` from the given start and end element index.
- {{jsxref("TypedArray.values", "Int32Array.prototype.values()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Int32Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int32Array.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Int32Array.prototype[@@iterator]()")}}
  - : Returns a new `Array Iterator` object that contains the values for each index in the array.

## Примеры

Разные способы создания `Int32Array`:

```js
// С указанием размера
var int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// Из массива (Array)
var arr = new Int32Array([21, 31]);
console.log(arr[1]); // 31

// Из другого типизированного массива (TypedArray)
var x = new Int32Array([21, 31]);
var y = new Int32Array(x);
console.log(y[0]); // 21

// Из ArrayBuffer
var buffer = new ArrayBuffer(16);
var z = new Int32Array(buffer, 0, 4);

// Из итерируемого объекта (iterable)
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var int32 = new Int32Array(iterable);
// Int32Array[1, 2, 3]
```

## Specifications

| Specification                                                   | Статус                   | Комментарии                                                                                                                    |
| --------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('Typed Array')}}                                     | {{Spec2('Typed Array')}} | Superseded by ECMAScript 2015.                                                                                                 |
| {{SpecName('ES2015', '#table-49', 'TypedArray constructors')}}  | {{Spec2('ES2015')}}      | Initial definition in an ECMA standard. Specified that `new` is required.                                                      |
| {{SpecName('ESDraft', '#table-49', 'TypedArray constructors')}} | {{Spec2('ESDraft')}}     | ECMAScript 2017 changed the `Int32Array` constructor to use the `ToIndex` operation and allows constructors with no arguments. |

## Browser compatibility

{{Compat}}

## Compatibility notes

Начиная с ECMAScript 2015, конструкторы `Int32Array` требуют оператор {{jsxref("Operators/new", "new")}}. Вызов `Int32Array` конструктора как функцию без оператора `new`, вызовет ошибку {{jsxref("TypeError")}}.

```js example-bad
var dv = Int32Array([1, 2, 3]);
// TypeError: calling a builtin Int32Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int32Array([1, 2, 3]);
```

## See also

- [JavaScript typed arrays](/ru/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
