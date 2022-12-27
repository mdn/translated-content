---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
---

{{JSRef}}

**`DataView`** 視圖提供了一個底層介面來讀寫 {{jsxref("ArrayBuffer")}} 中的二進位資料。`DataView` 能用多種不同的型別對 `ArrayBuffer` 進行修改、解讀，且可自訂資料的位元組順序而不受系統平台限制。`DataView` 物件僅為視圖，並不會存放資料，所有的資料皆實際儲存於 `ArrayBuffer` 物件當中。

## 語法

```plain
new DataView(buffer [, byteOffset [, byteLength]])
```

### 參數

- `buffer`
  - : 要給 DataView 物件操作的資料容器並且不能為 null
- `byteOffset` {{optional_inline}}
  - : The offset, in bytes, to the first byte in the specified buffer for the new view to reference. If not specified, the view of the buffer will start with the first byte.
- `byteLength` {{optional_inline}}
  - : The number of elements in the byte array. If unspecified, length of the view will match the buffer's length.

### 回傳值

A new `DataView` object representing the specified data buffer.

### Errors thrown

- `{{jsxref("RangeError")}}`
  - : Thrown if the `byteOffset` and `byteLength` result in the specified view extending past the end of the buffer.

## 描述

### 位元組順序

Multi-byte number formats are represented in memory differently depending on machine architecture, see {{Glossary("Endianness")}} for an explanation. DataView accessors provide explicit control of how data will be accessed irrespective of the platform architecture's endianness.

```js
var littleEndian = (function() {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

## 屬性

- DataView\.length
  - : The `DataView` constructor's length property whose value is 3.
- {{jsxref("DataView.prototype")}}
  - : Allows the addition of properties to all `DataView` objects.

## `DataView` 實例

All `DataView` instances inherit from {{jsxref("DataView.prototype")}}.

### 屬性

{{page('en-US/Web/JavaScript/Reference/Global_Objects/DataView/prototype','Properties')}}

### 方法

{{page('en-US/Web/JavaScript/Reference/Global_Objects/DataView/prototype','Methods')}}

## 範例

```js
var buffer = new ArrayBuffer(16);
var dv = new DataView(buffer, 0);

dv.setInt16(1, 42);
dv.getInt16(1); //42
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Firefox-specific notes

Starting with Gecko / SpiderMonkey 40 {{geckoRelease(40)}}, `DataView` requires to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling `DataView()` as a function without `new`, will throw a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = DataView(buffer, 0);
// TypeError: calling a builtin DataView constructor without new is forbidden
```

```js example-good
var dv = new DataView(buffer, 0);
```

## 參見

- [jDataView](https://github.com/jDataView/jDataView): JavaScript library that polyfills and extends the `DataView` API to all browsers and Node.js.
