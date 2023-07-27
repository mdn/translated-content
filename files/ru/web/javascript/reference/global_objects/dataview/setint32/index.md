---
title: DataView.prototype.setInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
tags:
  - DataView
  - JavaScript
  - TypedArrays
  - метод
  - прототип
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
---

{{JSRef}}

Метод **`setInt32()`** сохраняет 32-битное целое значение в 4 байтах, смещенном на указанное число от начала `DataView`.

{{EmbedInteractiveExample("pages/js/dataview-setint32.html")}}

## Синтаксис

```js-nolint
setInt32(byteOffset, value)
setInt32(byteOffset, value, littleEndian)
```

### Параметры

- `byteOffset`
  - : Смещение в байтах от начала до этого значения, где будут храниться данные.
- `value`
  - : Устанавливаемое значение.
- `littleEndian` {{optional_inline}}
  - : Указывает, сохранять ли 32-bit целое в
    {{Glossary("Endianness", "little- or big-endian")}} формате. Если значение `false` или
    `undefined`, записывает значение big-endian.

### Возвращаемое значение

{{jsxref("undefined")}}.

### Возвращаемые ошибки

- {{jsxref("RangeError")}}
  - : Выдается, если `byteOffset` установлен так, что он храниться за пределами представления.

## Примеры

### Использование метода `setInt32`

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.setInt32(1, 3);
dataview.getInt32(1); // 3
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
