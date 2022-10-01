---
title: TextDecoder.decode()
slug: Web/API/TextDecoder/decode
---

{{APIRef("Encoding API")}}{{SeeCompatTable}}

**`TextDecode.decode()`** 方法使用 {{domxref("TextDecoder")}} 对象的指定方法对给定的参数进行解码后，返回一个字符串。

## 语法

```js
decode()
decode(buffer)
decode(buffer, options)
```

### 参数

- `buffer` {{Optional_Inline}}
  - : 要解码的文本，是一个 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 对象。
- `options` {{Optional_Inline}}

  - : 具有以下属性的对象：

    - `stream`
      - : 一个布尔标志，表示在后续调用 decode() 将跟随附加数据。如果以分块的形式处理数据，则设置为 true；如果是最终的分块或者数据没有分块，则设置为 false。默认是 false。

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
const array = encoder.encode('€'); // Uint8Array(3) [226, 130, 172]
document.getElementById('encoded-value').textContent = array;

const decoder = new TextDecoder();
const str = decoder.decode(array); // String "€"
document.getElementById('decoded-value').textContent = str;
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 属于 {{DOMxRef("TextDecoder")}} 接口。
