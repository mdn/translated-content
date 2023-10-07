---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---

{{JSRef}}

Объект **`ArrayBuffer`** используется для работы с бинарными данными. Он представляет собой ссылку на поток "сырых" двоичных данных, однако работать с ними напрямую возможности не даёт. Вместо этого, вы можете создать [типизированный массив](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) или объект {{jsxref("DataView")}}, который можно использовать для чтения и записи данных в **`ArrayBuffer`**.

## Синтаксис

```
new ArrayBuffer(length)
```

### Параметры

- `length`
  - : Длина создаваемого буфера в байтах.

### Возвращаемое значение

Новый объект `ArrayBuffer` определённого размера. Изначально содержимое равно 0.

## Описание

Конструктор `ArrayBuffer` создаёт новый `ArrayBuffer` установленного в байтах размера.

### Создание буфера

- [Из Base64 строки](/ru/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)
- [Из локального файла](</ru/docs/Web/API/FileReader#readAsArrayBuffer()>)

## Свойства

- `ArrayBuffer.length`
  - : Длина конструктора `ArrayBuffer`, которая равна 1.
- {{jsxref("ArrayBuffer.prototype")}}
  - : Позволяет расширить прототип всех `ArrayBuffer` объектов.

## Методы

- {{jsxref("ArrayBuffer.isView", "ArrayBuffer.isView(arg)")}}
  - : Возвращает `true` если `arg` – одно из представлений `ArrayBuffer`, например [типизированный массив](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) или {{jsxref("DataView")}}. Вернёт `false` в остальных случаях.
- {{jsxref("ArrayBuffer.transfer", "ArrayBuffer.transfer(oldBuffer [, newByteLength])")}} {{experimental_inline}}
  - : Вернёт новый `ArrayBuffer`, контент которого будет взят из данных `oldBuffer`, а затем усечён или дополнен нулевыми значениями до `newByteLength`.

## Пример

В этом примере мы создаём 8-байтный буфер с {{jsxref("Global_Objects/Int32Array", "Int32Array")}} представлением:

```js
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
```

## Спецификация

| Specification                                                      | Status                   | Comment                                 |
| ------------------------------------------------------------------ | ------------------------ | --------------------------------------- |
| {{SpecName('Typed Array')}}                                        | {{Spec2('Typed Array')}} | Заменён спецификацией ECMAScript 6.     |
| {{SpecName('ES6', '#sec-arraybuffer-constructor', 'ArrayBuffer')}} | {{Spec2('ES6')}}         | Первичное определение в ECMA стандарте. |

## Таблица совместимости

{{Compat}}

## Также

- [JavaScript типизированные массивы](/ru/docs/Web/JavaScript/Typed_arrays)
