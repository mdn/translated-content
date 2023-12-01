---
title: DataView.prototype.setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
---

{{JSRef}}

Метод **`setInt8()`** экземпляров {{jsxref("DataView")}} принимает число и сохраняет его в форме 8-битного целого числа со знаком в байте, определённом в смещении этого `DataView`.

{{EmbedInteractiveExample("pages/js/dataview-setint8.html")}}

## Синтаксис

```js-nolint
setInt8(byteOffset, value)
```

### Параметры

- `byteOffset`
  - : Смещение в байтах от начала `DataView`, в котором будут храниться данные.
- `value`
  - : Устанавливаемое значение. На данный момент значение кодируется в байтах.

### Возвращаемое значение

{{jsxref("undefined")}}.

### Исключения

- {{jsxref("RangeError")}}
  - : Возникает, если `byteOffset` выходит за пределы `DataView`.

## Примеры

### Использование setInt8()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt8(0, 3);
dataview.getInt8(0); // 3
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Типизированные массивы JavaScript](/ru/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int8Array")}}
