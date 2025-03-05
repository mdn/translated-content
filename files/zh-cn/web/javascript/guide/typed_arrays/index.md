---
title: JavaScript 类型化数组
slug: Web/JavaScript/Guide/Typed_arrays
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}

JavaScript 类型化数组是一种类似数组的对象，并提供了一种用于在内存缓冲中访问原始二进制数据的机制。

引入类型化数组并非是为了取代 JavaScript 中数组的任何一种功能。相反，它为开发者提供了一个操作二进制数据的接口。这在操作与平台相关的特性时会很有用，例如：音频视频编辑和访问 [WebSocket](/zh-CN/docs/Web/API/WebSockets_API) 原始数据等。JavaScript 类型化数组中的每一个元素都是以某种格式表示的原始二进制值，JavaScript 支持从 8 位整数到 64 位浮点数的多种二进制格式。

类型化数组拥有许多与数组相同的方法，语义也相似。但是，类型化数组并不是普通数组，因为在类型化数组上调用 {{jsxref("Array.isArray()")}} 会返回 `false`。此外，并不是所有可用于普通数组的方法都能被类型化数组所支持（如 push 和 pop）。

为了最大程度的灵活性和效率，JavaScript 将类型化数组的实现拆分为*缓冲*和*视图*两部分。缓冲是一种表示了数据块的对象，它没有格式可言，也没有提供访问其内容的机制。为了访问缓冲中的内存，你需要使用[视图](#视图)。视图提供了*上下文*——即数据类型、起始偏移量和元素数量。

![同一缓冲上的不同类型化数组。每种类型化数组的元素数量与元素宽度都不同。](typed_arrays.png)

## 缓冲

有两种类型的缓冲：{{jsxref("ArrayBuffer")}} 和 {{jsxref("SharedArrayBuffer")}}。它们都是内存块的低级表示。它们名字中都含有“array”，但是它们与数组并没有太多关系——你不能直接读写它们。相反，缓冲是通用的对象，它们只包含原始数据。为了访问缓冲所表示的内存，你需要使用视图。

缓冲支持以下操作：

- _分配_：创建一个新的缓冲时，会分配一个新的内存块，并且初始化为 `0`。
- _复制_：使用 {{jsxref("ArrayBuffer/slice", "slice()")}} 方法，你可以高效地复制缓冲中的一部分数据，而不需要创建视图来手动复制每一个字节。
- _转移_：使用 {{jsxref("ArrayBuffer/transfer", "transfer()")}} 和 {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} 方法，可以将内存块的所有权转移给一个新的缓冲对象。若你想要在不同的执行上下文间转移数据，又不想复制，这些方法就很有用。转移后，原始缓冲将不再可用。`SharedArrayBuffer` 不能被转移（因为缓冲已经被所有执行上下文共享）。
- _调整大小_：使用 {{jsxref("ArrayBuffer/resize", "resize()")}} 方法，可以调整内存块的大小（只要不超过预设的 {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} 限制）。`SharedArrayBuffer` 只能[增长](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow)，不能缩小。

`ArrayBuffer` 与 `SharedArrayBuffer` 之间的区别是，前者在同一时刻只能所属于单个执行上下文。如果你将 `ArrayBuffer` 传递给另一个执行上下文，它会被*转移*，原始的 `ArrayBuffer` 将不再可用。这确保了同一时刻只有一个执行上下文可以访问内存。`SharedArrayBuffer` 在传递给另一个执行上下文时不会被转移，因此可以被多个执行上下文同时访问。当多个线程同时访问同一内存块时，可能会出现竞争条件，这时候 {{jsxref("Atomics")}} 方法就很有用了。

## 视图

目前主要有两种视图：类型化数组视图和 {{jsxref("DataView")}}。类型化数组提供了[实用方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#实例方法)，可以方便地转换二进制数据。`DataView` 更底层，可以精确控制数据的访问方式。使用这两种视图读写数据的方式是非常不同的。

两种视图都会使 {{jsxref("ArrayBuffer.isView()")}} 返回 `true`。它们都有以下属性：

- `buffer`
  - : 视图所引用的底层缓冲。
- `byteOffset`
  - : 视图相对于缓冲起始位置的偏移量（以字节为单位）。
- `byteLength`
  - : 视图的长度（以字节为单位）。

两者的构造函数都接受上述三个分离的参数。类型化数组构造函数还接受 `length` 作为元素数量，而不是字节长度。

### 类型化数组视图

类型化数组视图有自描述的名称，并且提供了所有常见数值类型的视图，如 `Int8`、`Uint32` 和 `Float64` 等等。还有一种特殊的类型化数组视图，{{jsxref("Uint8ClampedArray")}}，它会将值钳制（clamp）到 `0` 到 `255` 之间，这在 [Canvas 数据处理](/zh-CN/docs/Web/API/ImageData)等场景中很有用。

| 类型                            | 值范围                                         | 字节数 | 描述                                                  | 对应的 Web IDL 类型   | 等效的 C 类型                   |
| ------------------------------- | ---------------------------------------------- | ------ | ----------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | -128~127                                       | 1      | 8 位有符号整数（补码）                                | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}        | 0~255                                          | 1      | 8 位无符号整数                                        | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | 0~255                                          | 1      | 8 位无符号整数（值会被裁剪）                          | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}        | -32768~32767                                   | 2      | 16 位有符号整数（补码）                               | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}       | 0~65535                                        | 2      | 16 位无符号整数                                       | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}        | -2147483648~2147483647                         | 4      | 32 位有符号整数（补码）                               | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}       | 0~4294967295                                   | 4      | 32 位无符号整数                                       | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}      | `-3.4E38`~`3.4E38` 以及 `1.2E-38`（最小正数）  | 4      | 32 位 IEEE 浮点数（7 位有效数字，例如 `1.123456`）    | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}      | `-1.8E308`~`1.8E308` 以及 `5E-324`（最小正数） | 8      | 64 位 IEEE 浮点数（16 位有效数字，例如 `1.123...15`） | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup>~2<sup>63</sup> - 1             | 8      | 64 位有符号整数（补码）                               | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}    | 0~2<sup>64</sup> - 1                           | 8      | 64 位无符号整数                                       | `bigint`              | `uint64_t (unsigned long long)` |

所有类型化数组类型都有相同的方法与属性，这些方法与属性由 {{jsxref("TypedArray")}} 类定义。它们的唯一区别在于底层数据类型和字节数的不同。这在[值编码与标准化](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#值编码与标准化)中有详细讨论。

类型化数组原则上是固定长度的，因此并不存在可以改变数组长度的方法，如 `pop`、`push`、`shift`、`splice` 和 `unshift`。此外，`flat` 也不可用，因为类型化数组无法嵌套；`concat` 和 `flatMap` 则是由于应用场景不大，亦不可用。由于 `splice` 不可用，因此 `toSpliced` 也不可用。所有其他数组方法都是 `Array` 和 `TypedArray` 共享的。

另一方面，类型化数组有额外的 `set` 和 `subarray` 方法，可以用来优化“同缓冲多视图”的场景。`set()` 方法允许你使用一个数组或类型化数组的数据，来对另一个类型化数组的多个索引同时进行设置。如果两个类型化数组共享同一个底层缓冲，那么这个操作可能会更加高效，因为这是一个快速的内存移动。`subarray()` 方法创建一个新的类型化数组视图，它引用与原始类型化数组相同的缓冲，但是范围更窄。

在不改变底层缓冲的前提下，无法直接改变类型化数组的长度。但是，当类型化数组的底层是可调整大小的缓冲，且没有固定的 `byteLength` 时，它就会*跟踪长度*，即它的长度会随着缓冲的大小而自动调整。详情请参阅[底层为可变大小缓冲时的行为](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#底层为可变大小缓冲时的行为)。

类似于普通数组，你可以使用[方括号表示法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors#方括号表示法)来访问类型化数组的元素。底层缓冲中对应的字节会被解析为一个数字。任何使用数字（或数字的字符串表示，因为数字总是在访问属性时被转换为字符串）的属性访问都会被类型化数组代理——它们永远不会与对象本身交互。这意味着，例如：

- 超越边界索引的访问总是返回 `undefined`，而不会实际访问对象上的属性。
- 任何尝试写入超越边界的属性的行为都不会生效：它既不会抛出错误，也不会改变缓冲或类型化数组。
- 类型化数组的索引看起来是可配置的和可写的，但是任何改变它们的属性的尝试都会失败。

```js
const uint8 = new Uint8Array([1, 2, 3]);
console.log(uint8[0]); // 1

// 仅用作示例。不要在生产代码中使用。
uint8[-1] = 0;
uint8[2.5] = 0;
uint8[NaN] = 0;
console.log(Object.keys(uint8)); // ["0", "1", "2"]
console.log(uint8[NaN]); // undefined

// 非数字访问仍然有效
uint8[true] = 0;
console.log(uint8[true]); // 0

Object.freeze(uint8); // TypeError：无法冻结非空缓冲的视图
```

### DataView

{{jsxref("DataView")}} 是一种底层接口，它提供可以操作缓冲中任意数据的 getter/setter API。这对操作不同类型数据的场景很有帮助，例如：类型化数组视图都是运行在本地字节序模式（参考[字节序](/zh-CN/docs/Glossary/Endianness)），可以通过使用 `DataView` 来控制字节序。默认是大端字节序（big-endian），但可以调用 getter/setter 方法改为小端字节序（little-endian）。

`DataView` 不需要对齐，多字节读写可以从任意指定的偏移量开始。setter 方法也是如此。

下面的例子使用 `DataView` 来获取任意数字的二进制表示：

```js
function toBinary(
  x,
  { type = "Float64", littleEndian = false, separator = " ", radix = 16 } = {},
) {
  const bytesNeeded = globalThis[`${type}Array`].BYTES_PER_ELEMENT;
  const dv = new DataView(new ArrayBuffer(bytesNeeded));
  dv[`set${type}`](0, x, littleEndian);
  const bytes = Array.from({ length: bytesNeeded }, (_, i) =>
    dv
      .getUint8(i)
      .toString(radix)
      .padStart(8 / Math.log2(radix), "0"),
  );
  return bytes.join(separator);
}

console.log(toBinary(1.1)); // 3f f1 99 99 99 99 99 9a
console.log(toBinary(1.1, { littleEndian: true })); // 9a 99 99 99 99 99 f1 3f
console.log(toBinary(20, { type: "Int8", radix: 2 })); // 00010100
```

## 使用类型化数组的 Web API

下面是一些使用类型化数组的 API 示例，其并不完整，我们会在未来添加更多示例。

- [`FileReader.prototype.readAsArrayBuffer()`](/zh-CN/docs/Web/API/FileReader/readAsArrayBuffer)
  - : `FileReader.prototype.readAsArrayBuffer()` 读取对应的 [`Blob`](/zh-CN/docs/Web/API/Blob) 或 [`File`](/zh-CN/docs/Web/API/File) 的内容
- [`XMLHttpRequest.prototype.send()`](/zh-CN/docs/Web/API/XMLHttpRequest/send)
  - : `XMLHttpRequest` 实例的 `send()` 方法现在支持使用类型化数组和 {{jsxref("ArrayBuffer")}} 对象作为参数。
- [`ImageData.data`](/zh-CN/docs/Web/API/ImageData)
  - : 是一个 {{jsxref("Uint8ClampedArray")}} 对象，用来描述包含按照 RGBA 序列的颜色数据的一维数组，其值的范围在 `0` 到 `255` 之间。

## 示例

### 使用视图和缓冲

首先，我们需要创建一个 16 字节固定长度的缓冲：

```js
const buffer = new ArrayBuffer(16);
```

现在我们有了一段初始化为 0 的内存，目前还做不了什么太多操作。让我们确认一下数据的字节长度：

```js
if (buffer.byteLength === 16) {
  console.log("是 16 字节。");
} else {
  console.log("大小有问题！");
}
```

在实际开始操作这个缓冲之前，还需要一个视图。现在，我们就创建一个视图，该视图将把缓冲内的数据视为一个 32 位有符号整数数组：

```js
const int32View = new Int32Array(buffer);
```

现在我们可以像普通数组一样访问该数组中的元素：

```js
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}
```

该代码会将数组以 `0`、`2`、`4` 和 `6` 填充（一共 4 个 4 字节元素，所以总长度为 16 字节）。

### 相同数据上的多个视图

更有意思的是，你可以在同一数据上创建多个视图。例如：基于上文的代码，我们可以像这样继续操作：

```js
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log(`索引 ${i}：${int16View[i]}`);
}
```

这里我们创建了一个 16 位整数视图，该视图共享上文的 32 位整数视图的缓冲，然后以 16 位整数打印出缓冲里的数据，这次我们会得到 `0`、`0`、`2`、`0`、`4`、`0`、`6`、`0` 这样的输出（假设是小端序编码）。

```plain
Int16Array  |   0  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |      0      |      2      |      4      |      6      |
ArrayBuffer | 00 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

进一步地：

```js
int16View[0] = 32;
console.log(`32 位数组的索引 0 处数据是：${int32View[0]}`);
```

这次的输出是 `"32 位数组的索引 0 处数据是：32"`。也就是，这 2 个数组都是同一数据的以不同格式展示出来的视图。

```plain
Int16Array  |  32  |  0   |   2  |  0   |   4  |  0   |   6  |  0   |
Int32Array  |     32      |      2      |      4      |      6      |
ArrayBuffer | 20 00 00 00 | 02 00 00 00 | 04 00 00 00 | 06 00 00 00 |
```

你可以对任意视图类型进行这样的操作，尽管如果你设置一个整数，然后以浮点数的形式读取它，你可能会得到一个奇怪的结果，因为位的解释方式不同。

```js
const float32View = new Float32Array(buffer);
console.log(float32View[0]); // 4.484155085839415e-44
```

### 从缓冲读取文本

缓冲并不总是表示数字。例如，读取文件可以给你一个文本数据缓冲。你可以使用类型化数组从缓冲中读取这些数据。

下面的代码使用 {{domxref("TextDecoder")}} web API 读取 UTF-8 文本：

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
// 我们手动写入数据，假装它已经在缓冲区中了
uint8.set([228, 189, 160, 229, 165, 189]);
const text = new TextDecoder().decode(uint8);
console.log(text); // "你好"
```

下面的代码使用 {{jsxref("String.fromCharCode()")}} 方法读取 UTF-16 文本：

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
// 我们手动写入数据，假装它已经在缓冲区中了
uint16.set([0x4f60, 0x597d]);
const text = String.fromCharCode(...uint16);
console.log(text); // "你好"
```

### 使用复杂的数据结构

通过将缓冲与不同类型视图组合，以及修改内存访问的偏移量，你可以操作包含更多更复杂数据结构的数据。例如，你可以操作诸如 [WebGL](/zh-CN/docs/Web/API/WebGL_API) 或数据文件这些复杂的数据结构。

请看如下的 C 语言结构体：

```cpp
struct someStruct {
  unsigned long id;
  char username[16];
  float amountDue;
};
```

你可以采用如下代码访问一个包含此类结构体的缓冲：

```js
const buffer = new ArrayBuffer(24);

// …将数据读入缓冲…

const idView = new Uint32Array(buffer, 0, 1);
const usernameView = new Uint8Array(buffer, 4, 16);
const amountDueView = new Float32Array(buffer, 20, 1);
```

这样一来，你就得到了一个类似的数据结构，例如，`amountDueView[0]` 对应了 C 的 `amountDue` 字段。

> **备注**：C 语言结构体的[数据对齐](https://zh.wikipedia.org/wiki/数据结构对齐)与平台相关。因此需要防范和考虑不同平台字节填充对齐的差异。

### 转换为普通数组

在处理完一个类型化数组后，有时需要把它转为普通数组，以便可以从 {{jsxref("Array")}} 原型中受益。可以通过使用 {{jsxref("Array.from()")}} 实现：

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = Array.from(typedArray);
```

也可以使用{{jsxref("operators/spread_syntax", "展开语法", "", 1)}}。

```js
const typedArray = new Uint8Array([1, 2, 3, 4]);
const normalArray = [...typedArray];
```

## 参见

- [使用类型化数组实现快速的 Canvas 像素操作](https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/)
- [类型化数组：浏览器中的二进制数据](https://web.developers.google.cn/articles/webgl-typed-arrays)
- [字节序](/zh-CN/docs/Glossary/Endianness)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{jsxref("TypedArray")}}
- {{jsxref("SharedArrayBuffer")}}

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Iterators_and_generators")}}
