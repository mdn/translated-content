---
title: JavaScript 类型化数组
slug: Web/JavaScript/Typed_arrays
---
{{JsSidebar("Advanced")}}

JavaScript 类型化数组是一种类似数组的对象，并提供了一种用于访问原始二进制数据的机制。 正如你可能已经知道，{{jsxref("Array")}} 存储的对象能动态增多和减少，并且可以存储任何 JavaScript 值。JavaScript 引擎会做一些内部优化，以便对数组的操作可以很快。然而，随着 Web 应用程序变得越来越强大，尤其一些新增加的功能例如：音频视频编辑，访问 WebSockets 的原始数据等，很明显有些时候如果使用 JavaScript 代码可以快速方便地通过类型化数组来操作原始的二进制数据将会非常有帮助。

但是，不要把类型化数组与正常数组混淆，因为在类型数组上调用 {{jsxref("Array.isArray()")}} 会返回`false`。此外，并不是所有可用于正常数组的方法都能被类型化数组所支持（如 push 和 pop）。

## 缓冲和视图：类型数组架构

为了达到最大的灵活性和效率，JavaScript 类型数组（[Typed Arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)）将实现拆分为**缓冲**和**视图**两部分。一个缓冲（由 {{jsxref("ArrayBuffer")}} 对象实现）描述的是一个数据块。缓冲没有格式可言，并且不提供机制访问其内容。为了访问在缓冲对象中包含的内存，你需要使用视图。视图提供了上下文 — 即数据类型、起始偏移量和元素数 — 将数据转换为实际有类型的数组。

![Typed arrays in an ArrayBuffer](typed_arrays.png)

### ArrayBuffer

{{jsxref("ArrayBuffer")}} 是一种数据类型，用来表示一个通用的、固定长度的二进制数据缓冲区。你不能直接操纵一个 ArrayBuffer 中的内容；你需要创建一个类型化数组的视图或一个描述缓冲数据格式的{{jsxref("DataView")}}，使用它们来读写缓冲区中的内容。

### 类型数组视图

类型化数组视图具有自描述性的名字和所有常用的数值类型像`Int8`，`Uint32`，`Float64` 等等。有一种特殊类型的数组`Uint8ClampedArray`。它仅操作 0 到 255 之间的数值。例如，这对于[Canvas 数据处理](/zh-CN/docs/Web/API/ImageData)非常有用。

{{page("/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray", "TypedArray_objects")}}

### 数据视图

{{jsxref("DataView")}} 是一种底层接口，它提供有可以操作缓冲区中任意数据的读写接口。这对操作不同类型数据的场景很有帮助，例如：类型化数组视图都是运行在本地字节序模式 (参考 {{Glossary("Endianness")}})，可以通过使用 `DataView` 来控制字节序。默认是大端字节序 (Big-endian)，但可以调用读写接口改为小端字节序 (Little-endian)。

## 使用类型数组的 Web API

- [`FileReader.prototype.readAsArrayBuffer()`](<https://developer.mozilla.org/en-US/docs/Web/API/FileReader#readAsArrayBuffer()>)
  - : `FileReader.prototype.readAsArrayBuffer()` 读取对应的[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) 或 [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File)的内容
- [`XMLHttpRequest.prototype.send()`](<https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#send()>)
  - : `XMLHttpRequest` 实例的 `send()` 方法现在使用支持类型化数组和 {{jsxref("ArrayBuffer")}} 对象作为参数。
- [`ImageData.data`](https://developer.mozilla.org/en-US/docs/Web/API/ImageData)
  - : 是一个 {{jsxref("Uint8ClampedArray")}} 对象，用来描述包含按照 RGBA 序列的颜色数据的一维数组，其值的范围在`0`到`255`（包含 255）之间。

## 示例

### 使用视图和缓冲

首先，我们创建一个 16 字节固定长度的缓冲：

```js
var buffer = new ArrayBuffer(16);
```

现在我们有了一段初始化为 0 的内存，目前还做不了什么太多操作。让我们确认一下数据的字节长度：

```js
if (buffer.byteLength === 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}
```

在实际开始操作这个缓冲之前，需要创建一个视图。我们将创建一个视图，此视图将把缓冲内的数据格式化为一个 32 位的有符号整数数组：

```js
var int32View = new Int32Array(buffer);
```

现在我们可以像普通数组一样访问该数组中的元素：

```js
for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

该代码会将数组以 0, 2, 4 和 6 填充 （一共 4 个 4 字节元素，所以总长度为 16 字节）。

### 同一数据的多个视图

更有意思的是，你可以在同一数据上创建多个视图。例如：基于上文的代码，我们可以添加如下代码处理：

```js
var int16View = new Int16Array(buffer);

for (var i = 0; i < int16View.length; i++) {
  console.log("Entry " + i + ": " + int16View[i]);
}
```

这里我们创建了一个 2 字节整数视图，该视图共享上文的 4 字节整数视图的缓冲，然后以 2 字节整数打印出缓冲里的数据，这次我们会得到 0, 0, 2, 0, 4, 0, 6, 0 这样的输出。

那么，这样呢？

```js
int16View[0] = 32;
console.log("Entry 0 in the 32-bit array is now " + int32View[0]);
```

这次的输出是"Entry 0 in the 32-bit array is now 32"。也就是，这 2 个数组都是同一数据的以不同格式展示出来的视图。你可以使用任何一种 [view types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) 中的定义的视图。

### 使用复杂的数据结构

通过将缓冲与不同类型视图组合，以及修改内存访问的偏移位置，你可以操作包含更多更复杂数据结构的数据。你可以使用[js-ctypes](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes)操作诸如[WebGL](https://developer.mozilla.org/en-US/docs/Web/WebGL)，数据文件或 C 语言结构体这些复杂的数据结构。

请看如下的 C 语言结构：

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

你可以采用如下代码访问一个包含此类结构体的缓冲：

```js
var buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

var idView = new Uint32Array(buffer, 0, 1);
var usernameView = new Uint8Array(buffer, 4, 16);
var amountDueView = new Float32Array(buffer, 20, 1);
```

现在你就可以通过`amountDueView[0]`的方式访问数量。

> **备注：** C 语言结构体的[数据对齐](http://en.wikipedia.org/wiki/Data_structure_alignment)与平台相关。因此需要防范和考虑不同平台的字节填充对齐。

### 转换为普通数组

在处理完一个类型化数组后，有时需要把它转为普通数组，以便可以可以像普通数据一种操作访问。可以调用 {{jsxref("Array.from")}}实现这种转换，如果 `Array.from` 不支持的话，也可以通过如下代码实现：

```js
var typedArray = new Uint8Array([1, 2, 3, 4]),
    normalArray = Array.prototype.slice.call(typedArray);
normalArray.length === 4;
normalArray.constructor === Array;
```

## 了解更多

- [Getting `ArrayBuffer`s or typed arrays from _Base64_-encoded strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding#Appendix.3A_Decode_a_Base64_string_to_Uint8Array_or_ArrayBuffer)
- [`StringView` – a C-like representation of strings based on typed arrays](https://developer.mozilla.org/en-US/docs/Code_snippets/StringView)
- [Faster Canvas Pixel Manipulation with Typed Arrays](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays)
- [Typed Arrays: Binary Data in the Browser](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays)
- {{Glossary("Endianness")}}
