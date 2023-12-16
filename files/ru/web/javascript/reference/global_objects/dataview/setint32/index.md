---
title: DataView.prototype.setInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Метод **`setInt32()`** экземпляров {{jsxref("DataView")}} принимает число и сохраняет его в форме 32-битного целого числа со знаком в 4 байтах начиная с определённого в этом `DataView` смещении. Ограничений по выравниванию нет, многобайтовые значения могут храниться с любым смещением в пределах границ.

{{EmbedInteractiveExample("pages/js/dataview-setint32.html")}}

## Синтаксис

```js-nolint
setInt32(byteOffset, value)
setInt32(byteOffset, value, littleEndian)
```

### Параметры

- `byteOffset`
  - : Смещение в байтах от начала `DataView`, в котором будут храниться данные.
- `value`
  - : Устанавливаемое значение. На данный момент значение кодируется в байтах.
- `littleEndian` {{optional_inline}}
  - : Указывает, в каком формате сохранять данные — [с прямым или обратным порядком байтов](/ru/docs/Glossary/Endianness) ("big-endian" или "little-endian"). Если `false` или `undefined`, значение записывается с прямым порядком байтов ("big-endian").

### Возвращаемое значение

{{jsxref("undefined")}}.

### Исключения

- {{jsxref("RangeError")}}
  - : Возникает, если `byteOffset` выходит за пределы `DataView`.

## Примеры

### Использование setInt32()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt32(0, 3);
dataview.getInt32(1); // 768
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Типизированные массивы в JavaScript](/ru/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int32Array")}}
