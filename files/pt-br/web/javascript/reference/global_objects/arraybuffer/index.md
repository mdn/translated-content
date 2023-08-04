---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---

{{JSRef}}

O objeto **`ArrayBuffer`** é um tipo de dado usado para representar um genérico, buffer de dados binários de tamanho fixo. Você não pode manipular diretamente os conteúdos de um `ArrayBuffer`; em vez disso, você cria um objeto [`ArrayBufferView`](/pt-BR/JavaScript_typed_arrays/ArrayBufferView) que representa o buffer em um formato específico, e usa para ler e escrever os conteúdos do buffer.

{{EmbedInteractiveExample("pages/js/arraybuffer-constructor.html")}}

## Syntax

```
new ArrayBuffer(length)
```

### Parameters

- `length`
  - : The size, in bytes, of the array buffer to create.

### Return value

A new `ArrayBuffer` object of the specified size. Its contents are initialized to 0.

### Exceptions

A {{jsxref("RangeError")}} is thrown if the `length` is larger than {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) or negative.

## Description

The `ArrayBuffer` constructor creates a new `ArrayBuffer` of the given length in bytes.

### Getting an array buffer from existing data

- [From a Base64 string](/pt-BR/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)
- [From a local file](</pt-BR/docs/Web/API/FileReader#readAsArrayBuffer()>)

## Properties

- `ArrayBuffer.length`
  - : The `ArrayBuffer` constructor's length property whose value is 1.
- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : The constructor function that is used to create derived objects.
- {{jsxref("ArrayBuffer.prototype")}}
  - : Allows the addition of properties to all `ArrayBuffer` objects.

## Methods

- {{jsxref("ArrayBuffer.isView", "ArrayBuffer.isView(arg)")}}
  - : Returns `true` if `arg` is one of the ArrayBuffer views, such as [typed array objects](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or a {{jsxref("DataView")}}. Returns `false` otherwise.
- {{jsxref("ArrayBuffer.transfer", "ArrayBuffer.transfer(oldBuffer [, newByteLength])")}} {{experimental_inline}}
  - : Returns a new `ArrayBuffer` whose contents are taken from the `oldBuffer`'s data and then is either truncated or zero-extended by `newByteLength`.

## Instances

All `ArrayBuffer` instances inherit from {{jsxref("ArrayBuffer.prototype")}}.

### Properties

{{page('en-US/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype','Properties')}}

### Methods

{{page('en-US/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype','Methods')}}

- {{jsxref("ArrayBuffer.slice()")}} {{non-standard_inline}}
  - : Has the same functionality as {{jsxref("ArrayBuffer.prototype.slice()")}}.

## Exemplo

In this example, we create a 8-byte buffer with a {{jsxref("Global_Objects/Int32Array", "Int32Array")}} view referring to the buffer:

```
var buffer = new ArrayBuffer(8);
var view   = new Int32Array(buffer);
```

## Especificações

| Especificação                                                          | Status                   | Comentário                                                            |
| ---------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------- |
| {{SpecName('Typed Array')}}                                            | {{Spec2('Typed Array')}} | Substituído pelo ECMAScript 6                                         |
| {{SpecName('ES6', '#sec-arraybuffer-constructor', 'ArrayBuffer')}}     | {{Spec2('ES6')}}         | Definição inicial no ECMA standard. Specified that `new` is required. |
| {{SpecName('ESDraft', '#sec-arraybuffer-constructor', 'ArrayBuffer')}} | {{Spec2('ESDraft')}}     |                                                                       |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.ArrayBuffer")}}

## Compatibility notes

Starting with ECMAScript 2015, `ArrayBuffer` constructors require to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling an `ArrayBuffer` constructor as a function without `new`, will throw a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = ArrayBuffer(10);
// TypedError: calling a builtin ArrayBuffer constructor
// without new is forbidden
```

```js example-good
var dv = new ArrayBuffer(10);
```

## Veja também

- [JavaScript typed arrays](/pt-BR/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
