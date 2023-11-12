---
title: TextEncoder.encodeInto()
slug: Web/API/TextEncoder/encodeInto
---

{{APIRef("Encoding API")}}

**`TextEncoder.encodeInto()`** 方法接受一个要编码的字符串和一个目标 {{jsxref("Uint8Array")}}，将生成的 UTF-8 编码的文本放入目标数组中，并返回一个指示编码进度的字典对象。这相比于旧的 `encode()` 方法性能更高——尤其是当目标缓冲区是 WASM 堆视图时。

## 语法

```js-nolint
encodeInto(string, uint8Array)
```

### 参数

- `string`
  - : 一个字符串，包含将要编码的文本。
- `uint8Array`
  - : 一个 {{jsxref("Uint8Array")}} 对象实例，用于将生成的 UTF-8 编码的文本放入其中。

### 返回值

一个对象，包含两个参数。

- `read`
  - : 已经从源字符串中转换为 UTF-8 的，使用 UTF-16 编码的码元数。如果 `uint8Array` 没有足够的空间，则此值可能小于 `string.length`。
- `written`
  - : 在目标 `Uint8Array` 中修改的字节数。写入的的字节确保形成完整的 UTF-8 字节序列。

## 编码到特定的位置

_encoder_`.encodeInto()` 总是将它输出的结果放在数组的开头。然而，有时使输出从一个指定的索引开始很有用。解决方案是：[`TypedArray.prototype.subarray()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray)：

```js
const encoder = new TextEncoder();

function encodeIntoAtPosition(string, u8array, position) {
  return encoder.encodeInto(
    string,
    position ? u8array.subarray(position | 0) : u8array,
  );
}

const u8array = new Uint8Array(8);
encodeIntoAtPosition("hello", u8array, 2);
console.log(u8array.join()); // 0,0,104,101,108,108,111,0
```

## 缓冲区大小

转换一个 JavaScript 字符串 `s` 到 UTF-8 序列时，完全转换输出所需的空间从不会小于 `s.length` 个字节，也从不会大于 `s.length * 3` 字节。如果预计输出到缓冲区（通常是在 WASM 堆中）的生命周期很短，则可以为输出分配 `s.length * 3` 字节的空间，这样就能保证在第一次尝试中转换整个字符串。注意，`s.length * 3` 的情况是很少见的，因为很少有字符串中一定包含扩展之后为 3 个字节的字符。长文本的长度将不太可能超过 `s.length * 2` 个字节。因此，更乐观的方法可能是分配 `s.length * 2 + 5`个字节的空间，并且在极少数的情况下（乐观分配的方法出现错误）进行重新分配。

如果预计输出的生命周期很长，则可以计算最小分配空间为 `roundUpToBucketSize(s.length)`，最大分配空间为 `s.length * 3`，并且选择一个阈值 `t`（作为内存使用和速度之间的折衷方案），使得 `roundUpToBucketSize(s.length) + t >= s.length * 3` 时，分配 `s.length * 3` 的空间。否则，首先为 `roundUpToBucketSize(s.length)` 分配空间并进行转换。如果返回的字典对象中的 `read` 的大小为 `s.length`，则表示转换完成。如果不是，将目标的缓冲区的大小重新分配为 `written + (s.length - read) * 3`，并从字符串 `s` 中的索引 `read` 处开始取子字符串，并从目标缓冲区的索引 `written` 处开始取子缓冲区进行转换。

上述 `roundUpToBucketSize()` 函数，用于将空间向上舍入到分配器的桶大小。例如，如果你的 Wasm 分配器使用 2 的幂次方桶，则 `roundUpToBucketSize()` 应该返回该参数（如果它是 2 的幂次方的话，否则返回下一个 2 的幂次方）。如果 Wasm 分配器的行为未知，则 `roundUpToBucketSize()` 应为恒等函数。

如果你分配器的行为未知，但是你可能想要进行多达两次重新分配，并使得第一次重分配的步骤将*剩余未转换*的长度乘以 2 而不是 3。然而，在这种情况下，将*已经写入*缓冲区的长度乘以 2 通常是没有意义的，因为在这种情况下，如果发生第二次重分配，与原始长度乘 3 相比，它将总是过度分配。上述建议假设你不需要为 0 终止符分配空间。也就是说，在 WASM 方面，你正在使用 Rust 字符串或者一个不以 0 终止的 C++ 类。如果你正在使用 C++ `std::string` 标准库，即使逻辑长度已经向你展示，当计算向上舍入到分配器的桶大小的时候，你还是需要去考虑额外的终止符字节。请参阅下一节有关 C 字符串的内容。

## 没有 0 终止符

如果输入字符串在输入中包含字符 U+0000，`encodeInto()` 将在输出中写入一个 0x00 字节。`encodeInto()` *不会*在逻辑输出后写入 C 风格的 0x00 标记字节。

如果你的 Wasm 程序使用 C 字符串，那么你有职责去写 `0x00` 的标记，并且如果你的 JavaScript 字符串包含 `U+0000`，则无法阻止 Wasm 程序看到逻辑截断的字符串。观察：

```js
const encoder = new TextEncoder();

function encodeIntoWithSentinel(string, u8array, position) {
  const stats = encoder.encodeInto(
    string,
    position ? u8array.subarray(position | 0) : u8array,
  );
  if (stats.written < u8array.length) u8array[stats.written] = 0; // append null if room
  return stats;
}
```

## 示例

```html
<p class="source">This is a sample paragraph.</p>
<p class="result"></p>
```

```js
const sourcePara = document.querySelector(".source");
const resultPara = document.querySelector(".result");
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();
const utf8 = new Uint8Array(string.length);

const encodedResults = textEncoder.encodeInto(string, utf8);
resultPara.textContent +=
  `Bytes read: ${encodedResults.read}` +
  ` | Bytes written: ${encodedResults.written}` +
  ` | Encoded result: ${utf8}`;
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 属于 {{DOMxRef("TextEncoder")}} 接口
- {{DOMxRef("TextEncoder.encode()")}}
