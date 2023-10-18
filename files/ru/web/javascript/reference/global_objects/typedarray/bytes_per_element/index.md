---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
---

{{JSRef}}

Свойство **`TypedArray.BYTES_PER_ELEMENT`** содержит размер в байтах каждого элемента типизированного массива.

{{js_property_attributes(0,0,0)}}

## Синтаксис

```
TypedArray.BYTES_PER_ELEMENT;
```

## Описание

Объекты TypedArray отличаются друг от друга числом байтов на каждый элемент и способом интерпретации байтов. Константа `BYTES_PER_ELEMENT` содержит число байтов, который имеет каждый из элементов в данном массиве.

## Примеры

```js
Int8Array.BYTES_PER_ELEMENT; // 1
Uint8Array.BYTES_PER_ELEMENT; // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT; // 2
Uint16Array.BYTES_PER_ELEMENT; // 2
Int32Array.BYTES_PER_ELEMENT; // 4
Uint32Array.BYTES_PER_ELEMENT; // 4
Float32Array.BYTES_PER_ELEMENT; // 4
Float64Array.BYTES_PER_ELEMENT; // 8
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- [JavaScript typed arrays](/ru/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
