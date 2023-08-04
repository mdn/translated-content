---
title: "URIError: malformed URI sequence"
slug: Web/JavaScript/Reference/Errors/Malformed_URI
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
URIError: malformed URI sequence (Firefox)
URIError: URI malformed (Chrome)
```

## 错误类型

{{jsxref("URIError")}}

## 哪里出错了？

URI 编码和解码不成功。传递给 {{jsxref("decodeURI")}}、{{jsxref("encodeURI")}}、{{jsxref("encodeURIComponent")}} 或者 {{jsxref("decodeURIComponent")}} 这些函数的参数不合法，导致函数无法正确对其进行编解码。

## 示例

### 编码

编码操作会将每一个字符实例替换为一到四个相对应的 UTF-8 编码形式的转义序列。如果试图编码一个非高 - 低位完整的代理字符，将会抛出一个 {{jsxref("URIError")}} 错误，例如：

```js example-bad
encodeURI("\uD800");
// "URIError: malformed URI sequence"

encodeURI("\uDFFF");
// "URIError: malformed URI sequence"
```

高 - 低位完整的代理字符是没问题的，例如：

```js example-good
encodeURI("\uD800\uDFFF");
// "%F0%90%8F%BF"
```

### 解码

解码操作则是将已经经过编码的 URL 片段中的每一个转义序列替换为相对应的字符。如果相应的字符不存在，就会抛出错误：

```js example-bad
decodeURIComponent("%E0%A4%A");
// "URIError: malformed URI sequence"
```

输入没问题的话，通常是下面这样：

```js example-good
decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");
// "JavaScript_шеллы"
```

## 相关内容

- {{jsxref("URIError")}}
- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}
