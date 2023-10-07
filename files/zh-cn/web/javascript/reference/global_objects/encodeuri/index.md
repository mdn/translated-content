---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
---

{{jsSidebar("Objects")}}

**`encodeURI()`** 函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (URI) 进行编码 (该字符的 UTF-8 编码仅为四转义序列) 由两个 "代理" 字符组成)。

## 语法

```plain
encodeURI(URI)
```

### 参数

- `URI`
  - : 一个完整的 URI。

### 返回值

一个新字符串，表示提供的字符串编码为统一资源标识符 (URI)。

## 描述

假定一个 URI 是完整的 URI，那么无需对那些保留的并且在 URI 中有特殊意思的字符进行编码。

```plain
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

`encodeURI` 会替换所有的字符，但不包括以下字符，即使它们具有适当的 UTF-8 转义序列：

| 类型         | 包含                                          |
| ------------ | --------------------------------------------- |
| 保留字符     | `;` `,` `/` `?` `:` `@` `&` `=` `+` `$`       |
| 非转义的字符 | 字母 数字 `-` `_` `.` `!` `~` `*` `'` `(` `)` |
| 数字符号     | `#`                                           |

请注意，`encodeURI` 自身*无法*产生能适用于 HTTP GET 或 POST 请求的 URI，例如对于 XMLHTTPRequests，因为 "&", "+", 和 "=" 不会被编码，然而在 GET 和 POST 请求中它们是特殊字符。然而{{jsxref("encodeURIComponent")}}这个方法会对这些字符编码。

另外，如果试图编码一个非高 - 低位完整的代理字符，将会抛出一个 {{jsxref("URIError")}} 错误，例如：

```js
// 编码高 - 低位完整字符 ok
console.log(encodeURI("\uD800\uDFFF"));

// 编码单独的高位字符抛出 "Uncaught URIError: URI malformed"
console.log(encodeURI("\uD800"));

// 编码单独的低位字符抛出 "Uncaught URIError: URI malformed"
console.log(encodeURI("\uDFFF"));
```

并且需要注意，如果 URL 需要遵循较新的[RFC3986](http://tools.ietf.org/html/rfc3986)标准，那么方括号是被保留的 (给 IPv6)，因此对于那些没有被编码的 URL 部分 (例如主机)，可以使用下面的代码：

```js
function fixedEncodeURI(str) {
  return encodeURI(str).replace(/%5B/g, "[").replace(/%5D/g, "]");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}
