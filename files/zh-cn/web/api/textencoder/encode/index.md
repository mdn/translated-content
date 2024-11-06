---
title: TextEncoder.encode()
slug: Web/API/TextEncoder/encode
---

{{APIRef("Encoding API")}}

**`TextEncoder.encode()`** 方法接受一个字符串作为输入，返回一个对参数中给定的文本的编码后的 {{jsxref("Global_Objects/Uint8Array", "Uint8Array")}}，编码的方法通过 {{domxref("TextEncoder")}} 对象指定。

## 语法

```js-nolint
encode(string)
```

### 参数

- `string`
  - : 一个包含了将要编码的文本。

### 返回值

一个 {{domxref("Uint8Array")}} 对象。

## 示例

```html
<p class="source">This is a sample paragraph.</p>
<p class="result">Encoded result:</p>
```

```js
const sourcePara = document.querySelector(".source");
const resultPara = document.querySelector(".result");
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();

let encoded = textEncoder.encode(string);
resultPara.textContent += encoded;
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 属于 {{DOMxRef("TextEncoder")}} 接口。
