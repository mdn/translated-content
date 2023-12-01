---
title: TextDecoder.decode()
slug: Web/API/TextDecoder/decode
---

{{APIRef("Encoding API")}}

**`TextDecoder.decode()`** 方法返回一个字符串，其包含作为参数传递的缓冲区解码后的文本。

解码方法在当前的 {{domxref("TextDecoder")}} 对象中定义。这包含了数据的预期编码，以及如何处理解码时发生的错误。

## 语法

```js-nolint
decode()
decode(buffer)
decode(buffer, options)
```

### 参数

- `buffer` {{Optional_Inline}}
  - : 一个 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)、{{jsxref("TypedArray")}} 或包含要解码的编码文本的 {{jsxref("DataView")}} 对象。
- `options` {{Optional_Inline}}

  - : 具有以下属性的对象：

    - `stream`
      - : 一个布尔标志，表示在后续调用 `decode()` 将跟随附加数据。如果以分块的形式处理数据，则设置为 `true`；如果是最终的分块或者数据没有分块，则设置为 `false`。默认是 `false`。

### 异常

- {{jsxref("TypeError")}}
  - : 当 {{DOMxRef("TextDecoder.fatal")}} 属性为 `true` 时，若出现解码错误，则抛出该异常。

### 返回值

一个字符串。

## 示例

这个示例编码和解码欧元符号，€。

### HTML

```html
<p>Encoded value: <span id="encoded-value"></span></p>
<p>Decoded value: <span id="decoded-value"></span></p>
```

### JavaScript

```js
const encoder = new TextEncoder();
const array = encoder.encode("€"); // Uint8Array(3) [226, 130, 172]
document.getElementById("encoded-value").textContent = array;

const decoder = new TextDecoder();
const str = decoder.decode(array); // String "€"
document.getElementById("decoded-value").textContent = str;
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 属于 {{DOMxRef("TextDecoder")}} 接口。
