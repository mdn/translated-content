---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
tags:
  - DataView
  - JavaScript
  - byteOffset
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
---

{{JSRef}}

Свойство **`byteOffset`** возвращает смещение в байтах объектов {{jsxref("DataView")}} относительно начала своего {{jsxref("ArrayBuffer")}} или {{jsxref("SharedArrayBuffer")}}.

{{EmbedInteractiveExample("pages/js/dataview-byteoffset.html")}}

## Описание

Свойство `byteOffset` - это свойством доступа, функция set accessor которого `undefined`, что означает, что вы можете только читать это свойство. Значение устанавливается при создании объекта `DataView` и не может быть изменено.

## Примеры

### Использование свойства byteOffset

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 (смещение не указано)

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (как указано при построении DataView)
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
