---
title: JavaScript 型別陣列
slug: Web/JavaScript/Guide/Typed_arrays
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}

當 Webapp 有了視頻、音頻操作，及用 [WebSocket](/zh-TW/docs/Web/API/WebSockets_API) 存取原始資料等等的功能而變得越來越強大，讓 JavaScript 代碼可以快速、簡單地操作原始二進制資料的好處就越來越明顯。以前唯一的解法是視原始資料為[字串](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)並用 [`charCodeAt()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) 方法讀取資料緩衝的位元組。

然而，由於需要多次型別轉換（特別是二進制資料並非以位元組計算，如 32 位元整數或浮點數），這個解法既慢又容易發生錯誤。

JavaScript 型別陣列提供了存取二進制資料更有效率的機制。

型別陣列不該與一般的陣列搞混，當對型別陣列呼叫{{jsxref("Array.isArray()")}}時會回傳`false`。此外，一般陣列所提供的方法並非全部被型別陣列所支援(如 push 以及 pop 方法)

## 緩衝與視圖：型別陣列的架構

為了追求最大的可朔性與效率，JavaScript 型別陣列的實作分為**緩衝**與**視圖**。一個緩衝（以類別 {{jsxref("ArrayBuffer")}} 實作）為代表一塊資料資料的物件，它沒有任何格式，也沒有任何存取其內容的機制。想存取一個緩衝所佔的記憶體必須用一個視圖。一個視圖提供了一種前後關係 — 資料型別、起始偏移與元素的數目 — 使得資料變成真實的型別陣列。視圖以類別 {{jsxref("ArrayBufferView")}} 與其子類別實作。

![Typed arrays in an ArrayBuffer](typed_arrays.png)

### ArrayBuffer

{{jsxref("ArrayBuffer")}} 是一種資料型態，用於表示通用的固定長度二進制資料緩衝區。 你不能直接操作 `ArrayBuffer` 的內容。但是，你可以建立一個型別陣列視圖 (typed array view) 或一個 {{jsxref("DataView")}}，它以特定格式代表緩衝區，並使用它讀取和寫入緩衝區的內容。

### 型別陣列視圖 (Typed array views)

型別陣列視圖具有自述性名稱，並為所有常用的數字類型（如 `Int8`, `Uint32`, `Float64` 等）提供視圖。 有一個特殊的型別陣列視圖 `Uint8ClampedArray`。 它的範圍值在 0 到 255 之間。它對於 [Canvas 的資料處理](/zh-TW/docs/Web/API/Canvas_API/Tutorial)非常有用。

| Type                            | Value Range               | Size in bytes | Description                                                               | Web IDL type          | Equivalent C type |
| ------------------------------- | ------------------------- | ------------- | ------------------------------------------------------------------------- | --------------------- | ----------------- |
| {{jsxref("Int8Array")}}         | -128 to 127               | 1             | 8-bit two's complement signed integer                                     | `byte`                | `int8_t`          |
| {{jsxref("Uint8Array")}}        | 0 to 255                  | 1             | 8-bit unsigned integer                                                    | `octet`               | `uint8_t`         |
| {{jsxref("Uint8ClampedArray")}} | 0 to 255                  | 1             | 8-bit unsigned integer (clamped)                                          | `octet`               | `uint8_t`         |
| {{jsxref("Int16Array")}}        | -32768 to 32767           | 2             | 16-bit two's complement signed integer                                    | `short`               | `int16_t`         |
| {{jsxref("Uint16Array")}}       | 0 to 65535                | 2             | 16-bit unsigned integer                                                   | `unsigned short`      | `uint16_t`        |
| {{jsxref("Int32Array")}}        | -2147483648 to 2147483647 | 4             | 32-bit two's complement signed integer                                    | `long`                | `int32_t`         |
| {{jsxref("Uint32Array")}}       | 0 to 4294967295           | 4             | 32-bit unsigned integer                                                   | `unsigned long`       | `uint32_t`        |
| {{jsxref("Float32Array")}}      | 1.2x10^-38 to 3.4x10^38   | 4             | 32-bit IEEE floating point number ( 7 significant digits e.g. 1.1234567)  | `unrestricted float`  | `float`           |
| {{jsxref("Float64Array")}}      | 5.0x10^-324 to 1.8x10^308 | 8             | 64-bit IEEE floating point number (16 significant digits e.g. 1.123...15) | `unrestricted double` | `double`          |

### DataView

The {{jsxref("DataView")}} is a low-level interface that provides a getter/setter API to read and write arbitrary data to the buffer. This is useful when dealing with different types of data, for example. Typed array views are in the native byte-order (see {{Glossary("Endianness")}}) of your platform. With a `DataView` you are able to control the byte-order. It is big-endian by default and can be set to little-endian in the getter/setter methods.

## Web APIs using typed arrays

- [`FileReader.prototype.readAsArrayBuffer()`](</zh-TW/docs/Web/API/FileReader#readAsArrayBuffer()>)
  - : The `FileReader.prototype.readAsArrayBuffer()` method starts reading the contents of the specified [`Blob`](/zh-TW/docs/Web/API/Blob) or [`File`](/zh-TW/docs/Web/API/File).
- [`XMLHttpRequest.prototype.send()`](</zh-TW/docs/Web/API/XMLHttpRequest#send()>)
  - : `XMLHttpRequest` instances' `send()` method now supports typed arrays and {{jsxref("ArrayBuffer")}} objects as argument.
- [`ImageData.data`](/zh-TW/docs/Web/API/ImageData)
  - : Is a {{jsxref("Uint8ClampedArray")}} representing a one-dimensional array containing the data in the RGBA order, with integer values between `0` and `255` inclusive.

## 範例

### 使用視圖與緩衝

先來建立一個 16 位元組的緩衝：

```js
var buffer = new ArrayBuffer(16);
```

在這個時候，我們有位元組全部初始為 0 的一塊記憶體，但是用它做不了什麼事。我們只能確認它的確是 16 的位元組的長度：

```js
if (buffer.byteLength === 16) {
  console.log("沒錯，是 16 個位元組。");
} else {
  console.log("糟糕，長度不對！");
}
```

要用這個緩衝搞點花樣之前，建立一個視圖是必需的。來建立一個視圖把這個緩衝當作 32 位元的有符號整數：

```js
var int32View = new Int32Array(buffer);
```

這樣就可以把它當作一般的陣列以存取欄位：

```js
for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

這會把此陣列的四個欄位以 0、2、4、6 填滿（四個 4 位元組，總共 16 位元組）。

### 同一份資料的多個視圖

考慮在同一份資料上建立多個視圖的有趣情形。舉例來說，繼續使用上面的代碼：

```js
var int16View = new Int16Array(buffer);

for (var i = 0; i < int16View.length; i++) {
  console.log("Entry " + i + ": " + int16View[i]);
}
```

雖然該緩衝上已有一個 32 位元的視圖，這裡建立了同一個緩衝上的 16 位元整數視圖，這裡的輸出為 0, 0, 2, 0, 4, 0, 6, 0。

繼續考慮這種情況：

```js
int16View[0] = 32;
console.log("現在32位元陣列的欄位0是" + int32View[0]);
```

輸出為"現在 32 位元陣列的欄位 0 是 32"。也就是，這兩個陣列真的是同一個資料緩衝的在不同格式下的看法。其他 [view types](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typed_array_subclasses) 也是同樣的情形。

### 處理複雜的資料結構

在單一個緩衝使用不同型別、不同起始偏移的多個視圖以操作資料物件含有的多個資料型別。這個方法可以用在使用 [WebGL](/zh-TW/WebGL) 、資料檔案、[js-ctypes](/zh-TW/js-ctypes) 時遇到的複雜的資料結構。

考慮這個 C 結構：

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

可以用以下方法存取含有這種資料格式的緩衝：

```js
var buffer = new ArrayBuffer(24);

// ... 將資料讀入緩衝 ...

var idView = new Uint32Array(buffer, 0, 1);
var usernameView = new Uint8Array(buffer, 4, 16);
var amountDueView = new Float32Array(buffer, 20, 1);
```

舉例來說，可以用 `amountDueView[0]` 存取 amountDue。

> [!NOTE]
> C 結構的[資料結構對齊](https://zh.wikipedia.org/wiki/数据结构对齐)是與使用平台有關，須小心這些填充上的差異。

### Conversion to normal arrays

After processing a typed array, it is sometimes useful to convert it back to a normal array in order to benefit from the {{jsxref("Array")}} prototype. This can be done using {{jsxref("Array.from")}}, or using the following code where `Array.from` is unsupported.

```js
var typedArray = new Uint8Array([1, 2, 3, 4]),
  normalArray = Array.prototype.slice.call(typedArray);
normalArray.length === 4;
normalArray.constructor === Array;
```

## 參見

- [Getting `ArrayBuffer`s or typed arrays from _Base64_-encoded strings](/zh-TW/docs/Glossary/Base64#appendix.3a_decode_a_base64_string_to_uint8array_or_arraybuffer)
- [`StringView` – a C-like representation of strings based on typed arrays](/zh-TW/docs/Code_snippets/StringView)
- [Faster Canvas Pixel Manipulation with Typed Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays)
- [型別陣列——瀏覽器中的二進位資料](https://web.dev/articles/webgl-typed-arrays)
- {{Glossary("Endianness")}}
