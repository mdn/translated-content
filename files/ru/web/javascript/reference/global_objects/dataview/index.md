---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
---

{{JSRef}}

Вид **`DataView`** предоставляет низко-уровневый интерфейс для чтения и записи многочисленных числовых типов в бинарном {{jsxref("ArrayBuffer")}}, независимо от порядка байтов платформы.

{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}

## Синтаксис

```
new DataView(buffer [, byteOffset [, byteLength]])
```

### Параметры

- `buffer`
  - : Существующий {{jsxref("ArrayBuffer")}} или {{jsxref("SharedArrayBuffer")}} {{experimental_inline}} для использования как хранилище для нового объекта `DataView`.
- `byteOffset` {{optional_inline}}
  - : Смещение в байтах к первому байту в заданном буфере. Если не определён, то вид буфера будет начинаться с первого байта.
- `byteLength` {{optional_inline}}
  - : Количество элементов в массиве байтов. Если не определён, то длина вида будет соответствовать длине буфера.

### Возвращаемое значение

Новый объект `DataView` представляющий определённый буфер данных.

### Исключения

- `{{jsxref("RangeError")}}`
  - : Выкидывается если `byteOffset` и `byteLength` заходит за пределы буфера.

## Описание

### Порядок байтов

Многобайтовые числовые форматы представлены в памяти по разному в зависимости от архитектуры машины, см {{Glossary("Endianness")}} для объяснения. Аксессоры DataView предоставляют явный контроль над обращением к данным вне зависимости от порядка байтов архитектуры платформы.

```js
var littleEndian = (function () {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

## Свойства

All `DataView` instances inherit from {{jsxref("DataView.prototype")}} and allows the addition of properties to all DataView objects.

{{page('en-US/Web/JavaScript/Reference/Global_Objects/DataView/prototype','Properties')}}

## Методы

{{page('en-US/Web/JavaScript/Reference/Global_Objects/DataView/prototype','Methods')}}

## Пример

```js
var buffer = new ArrayBuffer(16);
var dv = new DataView(buffer, 0);

dv.setInt16(1, 42);
dv.getInt16(1); //42
```

## Спецификация

{{Specifications}}

## Таблица совместимости

{{Compat}}

## Замечания совместимости

Starting with Firefox 40, `DataView` requires to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling `DataView()` as a function without `new`, will throw a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = DataView(buffer, 0);
// TypeError: calling a builtin DataView constructor without new is forbidden
```

```js example-good
var dv = new DataView(buffer, 0);
```

## Также

- [jDataView](https://github.com/jDataView/jDataView): JavaScript library that polyfills and extends the `DataView` API to all browsers and Node.js.
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
