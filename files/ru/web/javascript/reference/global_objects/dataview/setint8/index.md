---
title: DataView.prototype.setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Метод **`setInt8()`** экземпляров {{jsxref("DataView")}} принимает число и сохраняет его в форме 8-битного целого числа со знаком в байте, определённом в смещении этого `DataView`.

{{InteractiveExample("JavaScript Demo: DataView.setInt8()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt8(1, 127); // Max signed 8-bit integer

console.log(view.getInt8(1));
// Expected output: 127
```

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

- [Типизированные массивы в JavaScript](/ru/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int8Array")}}
