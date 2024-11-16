---
title: 标志位
slug: Glossary/Bitwise_flags
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**标志位**是一组变量（通常是简单的数值），可以用于启用或禁用方法或其他代码结构的特定用途或特性。由于它们在位级别上运行，因此可以快速有效地实现这一点。同一组中的相关标志通常被赋予互补值，每个值都表示单个值（例如十六进制）中不同位的位置，以便用单个值表示多个标志的设置。

例如，在 {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} 中，可以使用 {{domxref("GPUDevice.createBuffer()")}} 方法创建 {{domxref("GPUBuffer")}} 对象实例。在调用此方法时，需要在描述符中定义 `usage` 属性，其中包含一个或多个标志，启用该缓冲区不同的允许用途。

```js
usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
```

这些值在同一个命名空间内定义，并且每个值都对应一个十六进制值：

| 用法标志                       | 十六进制表示 | 十进制等价值 |
| ------------------------------ | ------------ | ------------ |
| `GPUBufferUsage.MAP_READ`      | 0x0001       | 1            |
| `GPUBufferUsage.MAP_WRITE`     | 0x0002       | 2            |
| `GPUBufferUsage.COPY_SRC`      | 0x0004       | 4            |
| `GPUBufferUsage.COPY_DST`      | 0x0008       | 8            |
| `GPUBufferUsage.INDEX`         | 0x0010       | 16           |
| `GPUBufferUsage.VERTEX`        | 0x0020       | 32           |
| `GPUBufferUsage.UNIFORM`       | 0x0040       | 64           |
| `GPUBufferUsage.STORAGE`       | 0x0080       | 128          |
| `GPUBufferUsage.INDIRECT`      | 0x0100       | 256          |
| `GPUBufferUsage.QUERY_RESOLVE` | 0x0200       | 512          |

当查询 {{domxref("GPUBuffer.usage")}} 属性时，会返回一个单一的十进制数，该数是不同用法标志的不同十进制值的总和。回到上面的例子，查询具有先前指定用法的 `GPUBuffer` 创建的 `GPUBuffer.usage` 将返回以下内容：

- `GPUBufferUsage.COPY_SRC` 的十进制等价值，即 4
- 加上 `GPUBufferUsage.MAP_WRITE` 的十进制等价值，即 2
- 等于 6。

由于为不同标志选择的值是唯一的，因此每个值组合都是唯一的，因此程序可以一目了然地从单个值中知道设置了哪些标志。此外，你也可以使用按位与运算符轻松测试组合值中设置了哪些标志：

```js
if (buffer.usage & GPUBufferUsage.MAP_WRITE) {
  // Buffer 有 MAP_WRITE 用法
}
```

## 参见

- [标志位是优雅的，为什么？](https://www.hendrik-erz.de/post/bitwise-flags-are-beautiful-and-heres-why)
- 维基百科上的[位操作](https://zh.wikipedia.org/wiki/位操作)
