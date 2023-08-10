---
title: ArrayBuffer.isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
---

{{JSRef}}

Метод `ArrayBuffer.isView(arg)` возвращает `true`, если `arg` является одним из таких видов `ArrayBuffer`, как [типизированные массивы](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) или {{jsxref("DataView")}}; в ином случае возвращает `false`.

{{EmbedInteractiveExample("pages/js/arraybuffer-isview.html")}}

## Синтаксис

```
ArrayBuffer.isView(arg)
```

### Параметры

- `arg`
  - : Проверяемое значение.

### Возвращаемое значение

`true`, если переданный аргумент является одним из видов `ArrayBuffer`; в противном случае `false`.

## Примеры

```js
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

var buffer = new ArrayBuffer(2);
var dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}

## Смотрите также

- [Типизированные массивы JavaScript](/ru/docs/Web/JavaScript/Typed_arrays)
