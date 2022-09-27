---
title: TextEncoder.prototype.encode()
slug: Web/API/TextEncoder/encode
---

{{APIRef("Encoding API")}}

**`TextEncoder.prototype.encode()`** 方法接受一个 {{domxref("USVString")}} 作为参数，返回一个以给定的文本（字符串）参数，通过 `TextEncoder` 中指定的方法（默认 UTF-8）编码后的 {{jsxref("Global_Objects/Uint8Array", "Uint8Array")}} 类型的值。

## 语法

```plain
b1 = encoder.encode(string);
```

### 参数

- `string`
  - : 一个包含了将要编码的文本的 {{DOMxRef("USVString")}}。

### 返回值

一个 {{domxref("Uint8Array")}} 对象。

## 示例

```html
<p class="source">This is a sample paragraph.</p>
<p class="result">Encoded result: </p>
```

```js
const sourcePara = document.querySelector('.source');
const resultPara = document.querySelector('.result');
const string = sourcePara.textContent;

const textEncoder = new TextEncoder();

let encoded = textEncoder.encode(string);
resultPara.textContent += encoded;
```

{{EmbedLiveSample('Examples')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- The {{DOMxRef("TextEncoder")}} interface it belongs to.
