---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
---

{{JSRef}}

Объект **_TypedArray_** (типизированный массив) это массивоподобное представление нижележащего [буфера с бинарными данными (ArrayBuffer)](/ru/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). Нет ни глобального свойства `TypedArray`, ни открытого конструктора _`TypedArray`_. Но существует ряд глобальных элементов, которые являются конструкторами типизированных массивов для конкретно заданных типов данных. Они приведены ниже. Далее вы найдёте общие свойства и функции, которые можно использовать с любыми типизированными массивами.

## Синтаксис

```
new TypedArray(); // новое в ES2017
new TypedArray(length);
new TypedArray(typedArray);
new TypedArray(object);
new TypedArray(buffer [, byteOffset [, length]]);

где TypedArray() это одно из следующих значений:

Int8Array(), Uint8Array(), Uint8ClampedArray(), Int16Array(), Uint16Array(), Int32Array(), Uint32Array(), Float32Array(), Float64Array()
```

### Параметры

- length
  - : При вызове в памяти создаётся буфер длины **`length`** _BYTES_PER_ELEMENT_ байт, содержащий нули
- typedArray
  - : Когда вызывается с аргументом **`typedArray`**, который может быть объектом любого из типов типизированных массивов (например, `Int32Array`), тогда переданный массив `typedArray` копируется в новый массив. Каждое значение из `typedArray` конвертируется в соответствующий конструктору тип прямо перед копированием. Длина нового объекта `typedArray` будет такой же как и длина переданного в параметре `typedArray`
- object
  - : Новый массив создаётся так, как если бы была вызвана функция `TypedArray.from()`
- buffer, byteOffset, length
  - : Когда происходит вызов с параметрами **`buffer`** и опциональными параметрами **`byteOffset`** и **`length`**, то будет создан новый типизированный массив, который будет отражать `buffer` типа {{jsxref("ArrayBuffer")}}. Параметры `byteOffset` и `length` определяют диапазон (размер) памяти, выводимый данным массивоподобным представлением. Если оба этих параметра (`byteOffset` и `length`) опущены, то будет использован весь буфер `buffer`; если опущен только `length`, то будет выведен весь остаток буфера после смещения начала отсчёта элементов, заданного параметром `byteOffset`.

## Описание

ECMAScript 2015 определяет конструктор объекта _TypedArray,_ который является прототипом всех _TypedArray_-конструкторов. Этот конструктор не открыт явным образом: какое-либо глобальное свойство _`%TypedArray%`_ или _`TypedArray`_ отсутствует. Он доступен только через `Object.getPrototypeOf(...) (`например`, Int8Array.prototype)`. Все `TypedArray`s конструкторы наследуют общие свойства от конструктора `%TypedArray%`. Кроме того, все прототипы типизированных массивов (`TypedArray.prototype`) имеют своим прототипом `%TypedArray%.prototype`.

Сам по себе конструктор `%TypedArray%` не имеет пользы. Его вызов напрямую или через оператор `new` выдаст ошибку `TypeError`, кроме случая, когда он используется во время создания объектов в JS-движке, поддерживающего подклассы. В настоящее время такие движки неизвестны, поэтому `%TypedArray%` используется только для дополнения функциональности (затычка) браузеров в конструкторах _TypedArray_.

Когда создаётся экземпляр _TypedArray_ (например, `Int8Array`), то буферный массив создаётся в памяти, в случае если объект `ArrayBuffer` передаётся как аргумент конструктора, то вместо создания буфера используется он. Адрес буфера сохраняется во внутреннем свойстве экземпляра, и все методы из `%TypedArray%.prototype`, например сеттеры и геттеры, оперируют с буфером, по этому адресу.

### Доступ к свойствам

Получить доступ к элементам массива можно используя стандартный синтаксис по индексу (например, `arr[12]`). Однако, получение и установка индексируемых свойств по цепи прототипов не будет происходить даже в случае, когда вы пытаетесь использовать индексы извне массива. Индексируемые свойства обращаются к элементам буфера {{jsxref("ArrayBuffer")}} и не имеют отношения к объектным свойствам. Также можно использовать именованные свойства как и в обычных объектах.

```js
//Установка и получение используя стандартный синтаксис массивов
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

//Отсутствует обращение к свойству прототипа (элемент №20 должен бы иметь значение "foo")
Int8Array.prototype[20] = "foo";
new Int8Array(32)[20]; // 0
//Отсутствует даже в случае обращения к индексу извне текущего массива
Int8Array.prototype[20] = "foo";
new Int8Array(8)[20]; // undefined
// также в случае отрицательных индексов
Int8Array.prototype[-1] = "foo";
new Int8Array(8)[-1]; // undefined

// Допустимы именованные свойства
Int8Array.prototype.foo = "bar";
new Int8Array(32).foo; // "bar"
```

## Объекты TypedArray

| Тип                             | Диапазон значений         | Размер (байты) | Описание                                                                                   | Тип Web IDL           | Эквивалентный тип языка C |
| ------------------------------- | ------------------------- | -------------- | ------------------------------------------------------------------------------------------ | --------------------- | ------------------------- |
| {{jsxref("Int8Array")}}         | -128 до 127               | 1              | 8-битное целое со знаком с дополнением до двух                                             | `byte`                | `int8_t`                  |
| {{jsxref("Uint8Array")}}        | 0 до 255                  | 1              | 8-битное беззнаковое целое                                                                 | `octet`               | `uint8_t`                 |
| {{jsxref("Uint8ClampedArray")}} | 0 до 255                  | 1              | 8-битное беззнаковое целое (фиксированное от 0 до 255)                                     | `octet`               | `uint8_t`                 |
| {{jsxref("Int16Array")}}        | -32768 до 32767           | 2              | 16-битное целое со знаком с дополнением до двух                                            | `short`               | `int16_t`                 |
| {{jsxref("Uint16Array")}}       | 0 до 65535                | 2              | 16-битное беззнаковое целое                                                                | `unsigned short`      | `uint16_t`                |
| {{jsxref("Int32Array")}}        | -2147483648 до 2147483647 | 4              | 32-битное целое со знаком с дополнением до двух                                            | `long`                | `int32_t`                 |
| {{jsxref("Uint32Array")}}       | 0 до 4294967295           | 4              | 32-битное беззнаковое целое                                                                | `unsigned long`       | `uint32_t`                |
| {{jsxref("Float32Array")}}      | 1.2x10-38 to 3.4x1038     | 4              | 32-битное число с плавающей точкой IEEE-стандарта (7 значащих цифр, например 1.123456)     | `unrestricted float`  | `float`                   |
| {{jsxref("Float64Array")}}      | 5.0x10-324 to 1.8x10308   | 8              | 64-битное число с плавающей точкой IEEE-стандарта (16 значащих цифр, например, 1.123...15) | `unrestricted double` | `double`                  |

## Свойства

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Возвращает размер элемента для разных типизированных массивов.
- _TypedArray_.length
  - : Свойство "Длина", значение которого 0.
- {{jsxref("TypedArray.name")}}
  - : Возвращает строковое имя конструктора. Например, "Int8Array".
- {{jsxref("TypedArray.@@species", "get TypedArray[@@species]")}}
  - : Конструктор. Используется для создания производных объектов.
- {{jsxref("TypedArray.prototype")}}
  - : Прототип для _TypedArray_-объектов.

## Методы

- {{jsxref("TypedArray.from()")}}
  - : Создаёт типизированный массив из массивоподобного или перечислимого объекта. Смотрите {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Создаёт новый типизированный массив с переменным числом аргументов, из которых создастся массив. Смотрите {{jsxref("Array.of()")}}.

## Прототип TypedArray

Все TypedArrays-массивы наследуют от {{jsxref("TypedArray.prototype")}}.

### Свойства

{{page('ru/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype','Properties')}}

### Методы

{{page('ru/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype','Methods')}}

### Полифилы (дополнители) методов

Многие методы, используемые в TypedArray, могут быть подменены, используя методы, присутствующие среди стандартных в прототипе Arrays. Следующий кусок Javascript-кода демонстрирует, как вы можете дополнить недостающие методы Typed Array.

```js example-bad
var typedArrayTypes = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
];

for (var k in typedArrayTypes)
  for (var v in Array.prototype)
    if (
      Array.prototype.hasOwnProperty(v) &&
      !typedArrayTypes[k].prototype.hasOwnProperty(v)
    )
      typedArrayTypes[k].prototype[v] = Array.prototype[v];
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Совместимость

Начиная с ECMAScript 2015, конструкторы `TypedArray` требуют использования оператора {{jsxref("Operators/new", "new")}}. Вызов конструктора `TypedArray` как функции без `new`, отныне выбросит ошибку {{jsxref("TypeError")}}.

```js example-bad
var dv = Int8Array([1, 2, 3]);
// TypeError: вызов встроенного конструктора Int8Array
// без new запрещён
```

```js example-good
var dv = new Int8Array([1, 2, 3]);
```

## Смотрите также

- [JavaScript typed arrays](/ru/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
