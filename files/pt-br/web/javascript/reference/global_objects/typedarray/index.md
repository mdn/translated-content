---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
---

{{JSRef}}

A **_TypedArray_** object describes an array-like view of an underlying [binary data buffer](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). There is no global property named `TypedArray`, nor is there a directly visible `TypedArray` constructor. Instead, there are a number of different global properties, whose values are typed array constructors for specific element types, listed below. On the following pages you will find common properties and methods that can be used with any typed array containing elements of any type.

## Syntax

```
new TypedArray(length);
new TypedArray(typedArray);
new TypedArray(object);
new TypedArray(buffer [, byteOffset [, length]]);

where TypedArray() is one of:

Int8Array();
Uint8Array();
Uint8ClampedArray();
Int16Array();
Uint16Array();
Int32Array();
Uint32Array();
Float32Array();
Float64Array();
```

### Parameters

- length
  - : When called with a `length` argument, an internal array buffer is created in memory of size _length multiplied by BYTES_PER_ELEMENT_ bytes containing 0 value.
- typedArray
  - : When called with a `typedArray` argument, which can be an object of any of the typed array types (such as `Int32Array`), the `typedArray` gets copied into a new typed array. Each value in `typedArray` is converted to the corresponding type of the constructor before being copied into the new array. Then length of the new typedArray object will be same of length of the typedArray argument.
- object
  - : When called with an `object` argument, a new typed array is created as if by the `TypedArray.from()` method.
- buffer, byteOffset, length
  - : When called with a `buffer`, and optionally a `byteOffset` and a `length` argument, a new typed array view is created that views the specified {{jsxref("ArrayBuffer")}}. The `byteOffset` and `length` parameters specify the memory range that will be exposed by the typed array view. If both are omitted, all of `buffer` is viewed; if only `length` is omitted, the remainder of `buffer` is viewed.

## Description

ECMAScript 2015 defines a _TypedArray_ constructor that serves as the `[[Prototype]]` of all _TypedArray_ constructors. This constructor is not directly exposed: there is no global `%TypedArray%` or `TypedArray` property. It is only directly accessible through `Object.getPrototypeOf(Int8Array)` and similar. All `TypedArray`s constructors inherit common properties from the `%TypedArray%` constructor function. Additionally, all typed array prototypes (`TypedArray.prototype`) have `%TypedArray%.prototype` as their `[[Prototype]]`.

The `%TypedArray%` constructor on its own is not particularly useful. Calling it or using it in a `new` expression will throw a `TypeError`, except when used during object creation in JS engines that support subclassing. There are at present no such engines, so `%TypedArray%` is only useful to polyfill functions or properties onto all _TypedArray_ constructors.

When creating a _TypedArray_ instance (i.e. instance of Int8Array or similar), an array buffer is created internally (if ArrayBuffer object is present as constructor argument then this array buffer is used) in memory and this buffer address is saved as internal property of that instances, and all the methods of %`TypedArray`%.`prototype` uses that array buffer address to operate on i.e. set value and get value etc.

### Property access

You can reference elements in the array using standard array index syntax (that is, using bracket notation). However, getting or setting indexed properties on typed arrays will not search in the prototype chain for this property, even when the indices are out of bound. Indexed properties will consult the {{jsxref("ArrayBuffer")}} and will never look at object properties. You can still use named properties, just like with all objects.

```js
// Setting and getting using standard array syntax
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Indexed properties on prototypes are not consulted (Fx 25)
Int8Array.prototype[20] = "foo";
new Int8Array(32)[20]; // 0
// even when out of bound
Int8Array.prototype[20] = "foo";
new Int8Array(8)[20]; // undefined
// or with negative integers
Int8Array.prototype[-1] = "foo";
new Int8Array(8)[-1]; // undefined

// Named properties are allowed, though (Fx 30)
Int8Array.prototype.foo = "bar";
new Int8Array(32).foo; // "bar"
```

## TypedArray objects

| Type                            | Size in bytes | Description                            | Web IDL type          | Equivalent C type |
| ------------------------------- | ------------- | -------------------------------------- | --------------------- | ----------------- |
| {{jsxref("Int8Array")}}         | 1             | 8-bit two's complement signed integer  | `byte`                | `int8_t`          |
| {{jsxref("Uint8Array")}}        | 1             | 8-bit unsigned integer                 | `octet`               | `uint8_t`         |
| {{jsxref("Uint8ClampedArray")}} | 1             | 8-bit unsigned integer (clamped)       | `octet`               | `uint8_t`         |
| {{jsxref("Int16Array")}}        | 2             | 16-bit two's complement signed integer | `short`               | `int16_t`         |
| {{jsxref("Uint16Array")}}       | 2             | 16-bit unsigned integer                | `unsigned short`      | `uint16_t`        |
| {{jsxref("Int32Array")}}        | 4             | 32-bit two's complement signed integer | `long`                | `int32_t`         |
| {{jsxref("Uint32Array")}}       | 4             | 32-bit unsigned integer                | `unsigned long`       | `uint32_t`        |
| {{jsxref("Float32Array")}}      | 4             | 32-bit IEEE floating point number      | `unrestricted float`  | `float`           |
| {{jsxref("Float64Array")}}      | 8             | 64-bit IEEE floating point number      | `unrestricted double` | `double`          |

## Properties

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size for the different typed array objects.
- _TypedArray_.length
  - : Length property whose value is 0.
- {{jsxref("TypedArray.name")}}
  - : Returns the string value of the constructor name. E.g "Int8Array".
- {{jsxref("TypedArray.@@species", "get TypedArray[@@species]")}}
  - : The constructor function that is used to create derived objects.
- {{jsxref("TypedArray.prototype")}}
  - : Prototype for the _TypedArray_ objects.

## Methods

- {{jsxref("TypedArray.from()")}}
  - : Creates a new typed array from an array-like or iterable object. See also {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Creates a new typed array with a variable number of arguments. See also {{jsxref("Array.of()")}}.

## TypedArray prototype

All _TypedArrays_ inherit from {{jsxref("TypedArray.prototype")}}.

### Properties

{{page('en-US/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype','Properties')}}

### Methods

{{page('en-US/Web/JavaScript/Reference/Global_Objects/TypedArray/prototype','Methods')}}

## Specifications

| Specification                                                            | Status                   | Comment                                                                                                                         |
| ------------------------------------------------------------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                              | {{Spec2('Typed Array')}} | Defined as `TypedArray` and `ArrayBufferView` interface with typed array view types. Superseded by ECMAScript 2015.             |
| {{SpecName('ES6', '#sec-typedarray-objects', 'TypedArray Objects')}}     | {{Spec2('ES6')}}         | Initial definition in an ECMA standard. Specified behaviour for indexed and named properties. Specified that `new` is required. |
| {{SpecName('ESDraft', '#sec-typedarray-objects', 'TypedArray Objects')}} | {{Spec2('ESDraft')}}     |                                                                                                                                 |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.TypedArray")}}

## Compatibility notes

Starting with ECMAScript 2015, `TypedArray` constructors require to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a `TypedArray` constructor as a function without `new`, will throw a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = Int8Array([1, 2, 3]);
// TypeError: calling a builtin Int8Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int8Array([1, 2, 3]);
```

## See also

- [JavaScript typed arrays](/pt-BR/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
