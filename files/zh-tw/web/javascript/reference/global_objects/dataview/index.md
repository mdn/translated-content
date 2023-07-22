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

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` and `byteLength` result in the specified view extending past the end of the buffer.

## 描述

### 位元組順序

Multi-byte number formats are represented in memory differently depending on machine architecture, see {{Glossary("Endianness")}} for an explanation. DataView accessors provide explicit control of how data will be accessed irrespective of the platform architecture's endianness.

```js
var littleEndian = (function () {
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

- `DataView.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"DataView"`. This property is used in {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("DataView.prototype.buffer")}}
  - : The {{jsxref("ArrayBuffer")}} referenced by this view. Fixed at construction time and thus **read only.**
- {{jsxref("DataView.prototype.byteLength")}}
  - : The length (in bytes) of this view. Fixed at construction time and thus **read only.**
- {{jsxref("DataView.prototype.byteOffset")}}
  - : The offset (in bytes) of this view from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**

### 方法

- {{jsxref("DataView.prototype.getInt8()")}}
  - : Gets a signed 8-bit integer (byte) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : Gets an unsigned 8-bit integer (unsigned byte) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : Gets a signed 16-bit integer (short) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : Gets an unsigned 16-bit integer (unsigned short) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : Gets a signed 32-bit integer (long) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : Gets an unsigned 32-bit integer (unsigned long) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : Gets a signed 32-bit float (float) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : Gets a signed 64-bit float (double) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : Gets a signed 64-bit integer (long long) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : Gets an unsigned 64-bit integer (unsigned long long) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : Stores a signed 8-bit integer (byte) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : Stores an unsigned 8-bit integer (unsigned byte) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : Stores a signed 16-bit integer (short) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : Stores an unsigned 16-bit integer (unsigned short) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : Stores a signed 32-bit integer (long) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : Stores an unsigned 32-bit integer (unsigned long) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : Stores a signed 32-bit float (float) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : Stores a signed 64-bit float (double) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : Stores a signed 64-bit integer (long long) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : Stores an unsigned 64-bit integer (unsigned long long) value at the specified byte offset from the start of the view.

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

Starting with Gecko / SpiderMonkey 40, `DataView` requires to be constructed with a {{jsxref("Operators/new", "new")}} operator. Calling `DataView()` as a function without `new`, will throw a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = DataView(buffer, 0);
// TypeError: calling a builtin DataView constructor without new is forbidden
```

```js example-good
var dv = new DataView(buffer, 0);
```

## 參見

- [jDataView](https://github.com/jDataView/jDataView): JavaScript library that polyfills and extends the `DataView` API to all browsers and Node.js.
