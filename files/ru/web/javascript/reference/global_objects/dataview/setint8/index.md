---
title: DataView.prototype.setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
tags:
  - DataView
  - JavaScript
  - TypedArrays
  - метод
  - прототип
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setInt16
---

{{JSRef}}

Метод **`setInt8()`** сохраняет 8-битное целое значение в байте, смещенном на указанное число от начала `DataView`.

{{EmbedInteractiveExample("pages/js/dataview-setint8.html")}}

## Синтаксис

```js-nolint
setInt8(byteOffset, value)
```

### Параметры

- `byteOffset`
  - : Смещение в байтах от начала до этого значения, где будут храниться данные.
- `value`
  - : Устанавливаемое значение.

### Возвращаемое значение

{{jsxref("undefined")}}.

### Возвращаемые ошибки

- {{jsxref("RangeError")}}
  - : Выдается, если `byteOffset` установлен так, что он храниться за пределами представления.

## Примеры

### Использование метода `setInt8`

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.setInt8(1, 3);
dataview.getInt8(1); // 3
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
