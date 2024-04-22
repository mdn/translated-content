---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
---

{{JSRef}}

Свойство-геттер **`byteLength`** возвращает длину {{jsxref("DataView")}} в байтах.

{{EmbedInteractiveExample("pages/js/dataview-bytelength.html")}}

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
