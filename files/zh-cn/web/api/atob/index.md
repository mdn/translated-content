---
title: atob() 全局函数
slug: Web/API/atob
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

**`atob()`** 函数会对经过 {{glossary("Base64")}} 编码的字符串进行解码。你可以使用 {{domxref("btoa","btoa()")}} 方法来编码一个可能在传输过程中出现问题的数据，并且在接受数据之后，使用 `atob()` 方法再将数据解码。例如：你可以编码、传输和解码操作各种字符，比如 {{Glossary("ASCII")}} 0 到 31 的控制字符。

对于任意 Unicode 字符串的使用，请参阅 {{Glossary("Base64")}} 文中的 [“Unicode 问题”](/zh-CN/docs/Glossary/Base64#“unicode_问题”)。

## 语法

```js-nolint
atob(encodedData)
```

### 参数

- `encodedData`
  - : 一个包含 base64 编码数据的二进制字符串（即字符串中的每个字符都被视为一字节的二进制数据）。A binary string (i.e., a string in which each character in the string is treated as a byte of binary data) containing base64-encoded data.

### 返回值

从 `encodedData` 解码出来的 ASCII 字符串

### 异常

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 如果 `encodedData` 不是有效的 base64 字符串，则抛出错误。

## 示例

```js
const encodedData = window.btoa("Hello, world"); // 编码
const decodedData = window.atob(encodedData); // 解码
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [A polyfill of `atob`](https://github.com/zloirock/core-js#base64-utility-methods) is available in [`core-js`](https://github.com/zloirock/core-js)
- [`data` URLs](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)
- {{domxref("btoa","btoa()")}}
