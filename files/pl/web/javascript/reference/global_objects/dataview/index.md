---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
translation_of: Web/JavaScript/Reference/Global_Objects/DataView
original_slug: Web/JavaScript/Referencje/Obiekty/DataView
---
{{JSRef}}

**`DataView`**  udostępnia niskopoziowy interfejs do zapisu i odczytu typów numerycznych w formie {{jsxref("ArrayBuffer")}} niezależnie od kodowania platformy.

## Składnia

    new DataView(buffer [, byteOffset [, byteLength]])

### Parametry

- `buffer`
  - : Istniejący {{jsxref("ArrayBuffer")}} lub {{jsxref("SharedArrayBuffer")}} {{experimental_inline}} używany jako pamięć dla  obiektu  `DataView` .
- `byteOffset` {{optional_inline}}
  - : The offset, in bytes, to the first byte in the specified buffer for the new view to reference. If not specified, the view of the buffer will start with the first byte.
- `byteLength` {{optional_inline}}
  - : The number of elements in the byte array. If unspecified, length of the view will match the buffer's length.

### Return value

A new `DataView` object representing the specified data buffer.

### Exceptions

- `{{jsxref("RangeError")}}`
  - : Thrown if the `byteOffset` and `byteLength` result in the specified view extending past the end of the buffer.

## Description

### Endianness

Multi-byte number formats are represented in memory differently depending on machine architecture, see {{Glossary("Endianness")}} for an explanation. DataView accessors provide explicit control of how data will be accessed irrespective of the platform architecture's endianness.

```js
var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

## Properties

All `DataView` instances inherit from {{jsxref("DataView.prototype")}} and allows the addition of properties to all DataView objects.

{{page('en-US/Web/JavaScript/Reference/Global_Objects/DataView/prototype','Properties')}}

## Methods

{{page('en-US/Web/JavaScript/Reference/Global_Objects/DataView/prototype','Methods')}}

## Example

```js
var buffer = new ArrayBuffer(16);
var dv = new DataView(buffer, 0);

dv.setInt16(1, 42);
dv.getInt16(1); //42
```

## Specifications

| Specification                                                                        | Status                           | Comment                                |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------- |
| {{SpecName('Typed Array')}}                                                 | {{Spec2('Typed Array')}} | Superseded by ECMAScript 6             |
| {{SpecName('ES6', '#sec-dataview-constructor', 'DataView')}}     | {{Spec2('ES6')}}             | Initial definition in an ECMA standard |
| {{SpecName('ESDraft', '#sec-dataview-constructor', 'DataView')}} | {{Spec2('ESDraft')}}     |                                        |

## Browser compatibility

{{Compat("javascript.builtins.DataView")}}

## Compatibility notes

Starting with Firefox 40, `DataView` requires to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling `DataView()` as a function without `new`, will throw a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = DataView(buffer, 0);
// TypeError: calling a builtin DataView constructor without new is forbidden
```

```js example-good
var dv = new DataView(buffer, 0);
```

## See also

- [jDataView](https://github.com/jDataView/jDataView): JavaScript library that polyfills and extends the `DataView` API to all browsers and Node.js.
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
