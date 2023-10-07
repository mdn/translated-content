---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
---

{{JSRef}}

Метод **`slice()`** вернёт новый `ArrayBuffer`, содержимое которого, будет копией содержимого, содержащегося в исходом ArrayBuffer, начиная с begin (включительно), и до end(не включая).

## Syntax

```
arraybuffer.slice(begin[, end])
```

### Parameters

- `begin`
  - : Указывает с какого индекса начинать slice, начинается с нуля.

<!---->

- `end`
  - : Указывает до какого индекса делать slice. Если не указан - slice будет выполнен до конца `ArrayBuffer. Разница между begin и end должна быть положительной и быть не более длины ArrayBuffer, в противном случае будет выставлен 0.`

### Return value

Новый объект `ArrayBuffer`.

## Description

Метод `slice` копирует, до индекса в параметре end (не включительно) . В случае если `begin` или `end` негативен, то индекс считается с конца массива.

## Examples

### Копируем `ArrayBuffer`

```js
var buf1 = new ArrayBuffer(8);
var buf2 = buf1.slice(0);
```

## Specifications

| Specification                                                                              | Status                   | Comment                                 |
| ------------------------------------------------------------------------------------------ | ------------------------ | --------------------------------------- |
| {{SpecName('Typed Array')}}                                                                | {{Spec2('Typed Array')}} | Superseded by EMCAScript 6.             |
| {{SpecName('ES6', '#sec-arraybuffer.prototype.slice', 'ArrayBuffer.prototype.slice')}}     | {{Spec2('ES6')}}         | Initial definition in an ECMA standard. |
| {{SpecName('ESDraft', '#sec-arraybuffer.prototype.slice', 'ArrayBuffer.prototype.slice')}} | {{Spec2('ESDraft')}}     |                                         |

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
