---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Свойство **`buffer`** экземпляров {{jsxref("DataView")}} возвращает значение {{jsxref("ArrayBuffer")}} или {{jsxref("SharedArrayBuffer")}}, на которое ссылается `DataView` при создании.

{{EmbedInteractiveExample("pages/js/dataview-buffer.html")}}

## Описание

`buffer` — это свойство, функция доступа которого равна `undefined`, то есть это свойство доступно только для чтения. Значение устанавливается при создании `DataView` и не может быть изменено.

## Примеры

### Использование свойства buffer

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
