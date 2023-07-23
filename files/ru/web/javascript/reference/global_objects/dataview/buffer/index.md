---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
tags:
  - DataView
  - JavaScript
  - buffer
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/buffer
---

{{JSRef}}

Свойство средства доступа к **`buffer`** представляет собой {{jsxref("ArrayBuffer")}} или {{jsxref("SharedArrayBuffer")}}, на которые ссылается {{jsxref("DataView")}} при создании.

{{EmbedInteractiveExample("pages/js/dataview-buffer.html")}}

## Описание

Свойство `buffer` - это свойство доступа, функция доступа которого `undefined`, что означает, что вы можете только читать это свойство. Значение устанавливается при создании `DataView` и не может быть изменено.

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
