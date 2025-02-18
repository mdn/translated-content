---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
---

{{JSRef}}

Свойство-геттер **`byteLength`** возвращает длину {{jsxref("DataView")}} в байтах.

{{InteractiveExample("JavaScript Demo: DataView.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view1.byteLength + view2.byteLength); // 16 + 4
// Expected output: 20
```

## Описание

Свойство `byteLength` доступно только для чтения. Его значение определяется при создании объекта `DataView` и не может быть изменено. Если при создании `DataView` не были переданы параметры `byteOffset` или `byteLength`, то свойство будет равно `byteLength` связанного `ArrayBuffer` или `SharedArrayBuffer`.

## Примеры

### Использование свойства byteLength

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 (соответствует byteLength буфера)

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (как указано при создании DataView)

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (из-за byteOffset, заданного при создании DataView)
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
