---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
---

**`ArrayBuffer`** 物件是一種表示通用、固定大小的原始二進制資料緩衝。想要直接操作一個 `ArrayBuffer` 物件的內容是不可能的。若要讀寫該緩衝的內容則必須透過視圖，可以選擇建立一個 {{jsxref("DataView")}} 視圖物件或是一個限定其成員為某種型別的 {{jsxref("TypedArray")}} 視圖物件，它們皆能以特定的型別解讀、修改 `ArrayBuffer`。

## 語法

```js-nolint
new ArrayBuffer(length)
```

### 參數

- `length`
  - : 要建立的緩衝陣列大小，以位元組（byte）計算。

### 回傳值

為一個新建立的指定大小 `ArrayBuffer` 物件，其內容皆初始化為 0。

### Exceptions

A {{jsxref("RangeError")}} is thrown if the `length` is larger than {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) or negative.

## 說明

The `ArrayBuffer` constructor creates a new `ArrayBuffer` of the given length in bytes.

### 從既有的資料取得 ArrayBuffer

- [From a Base64 string](/zh-TW/docs/Glossary/Base64#appendix.3a_decode_a_base64_string_to_uint8array_or_arraybuffer)
- [從本地端檔案](</zh-TW/docs/Web/API/FileReader#readAsArrayBuffer()>)

## 屬性

- `ArrayBuffer.length`
  - : The `ArrayBuffer` constructor's length property whose value is 1.
- [`ArrayBuffer[Symbol.species]`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
  - : The constructor function that is used to create derived objects.
- {{jsxref("ArrayBuffer.prototype")}}
  - : Allows the addition of properties to all `ArrayBuffer` objects.

## 方法

- {{jsxref("ArrayBuffer.isView", "ArrayBuffer.isView(arg)")}}
  - : Returns `true` if `arg` is one of the ArrayBuffer views, such as [typed array objects](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or a {{jsxref("DataView")}}. Returns `false` otherwise.
- {{jsxref("ArrayBuffer.transfer", "ArrayBuffer.transfer(oldBuffer [, newByteLength])")}} {{experimental_inline}}
  - : Returns a new `ArrayBuffer` whose contents are taken from the `oldBuffer`'s data and then is either truncated or zero-extended by `newByteLength`.

## `ArrayBuffer` 實例

所有的 `ArrayBuffer` 物件實例皆繼承自 {{jsxref("ArrayBuffer.prototype")}}.

### 屬性

- `ArrayBuffer.prototype[Symbol.toStringTag]`
  - : The initial value of the [`Symbol.toStringTag`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"ArrayBuffer"`. This property is used in {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : The read-only size, in bytes, of the `ArrayBuffer`. This is established when the array is constructed and cannot be changed.

### 方法

- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Returns a new `ArrayBuffer` whose contents are a copy of this `ArrayBuffer`'s bytes from `begin` (inclusive) up to `end` (exclusive). If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.

## 範例

In this example, we create a 8-byte buffer with a {{jsxref("Global_Objects/Int32Array", "Int32Array")}} view referring to the buffer:

```js
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相容性備註

Starting with ECMAScript 2015, `ArrayBuffer` constructors require to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling an `ArrayBuffer` constructor as a function without `new`, will throw a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = ArrayBuffer(10);
// TypeError: calling a builtin ArrayBuffer constructor
// without new is forbidden
```

```js example-good
var dv = new ArrayBuffer(10);
```

## 參見

- {{jsxref("TypedArray")}}
- {{jsxref("SharedArrayBuffer")}}
