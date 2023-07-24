---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
tags:
  - DataView
  - JavaScript
  - byteLength
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
---

{{JSRef}}

Свойство **`byteLength`** возвращает длину объектов {{jsxref("DataView")}} в байтах.

{{EmbedInteractiveExample("pages/js/dataview-bytelength.html")}}

## Описание

Свойство `byteLength` - это свойством доступа, функция set accessor которого `undefined`, что означает, что вы можете только читать это свойство. Значение устанавливается при создании объекта `DataView` и не может быть изменено. Если `DataView` не указывает смещение или длину (`byteLength`), то будет возвращена `byteLength` указанного `ArrayBuffer` или `SharedArrayBuffer`.

## Примеры

### Использование свойства byteLength

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 (соответствует длине буфера в байтах)

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (как указано при построении DataView)

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (из-за смещения при построении DataView)
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
