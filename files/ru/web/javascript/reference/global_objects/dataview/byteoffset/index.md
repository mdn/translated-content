---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Свойство **`byteOffset`** экземпляров {{jsxref("DataView")}} возвращает смещение (в байтах) этого `DataView` относительно начала своего {{jsxref("ArrayBuffer")}} или {{jsxref("SharedArrayBuffer")}}.

{{InteractiveExample("JavaScript Demo: DataView.byteOffset")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view.byteOffset);
// Expected output: 12
```

## Описание

`byteOffset` — это свойство, функция доступа которого равна `undefined`, то есть это свойство доступно только для чтения. Значение устанавливается при создании `DataView` и не может быть изменено.

## Примеры

### Использование свойства byteOffset

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 (смещение не установлено)

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (как установлено при создании DataView)
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
