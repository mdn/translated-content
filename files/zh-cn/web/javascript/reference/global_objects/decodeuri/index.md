---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
---

{{jsSidebar("Objects")}}

**`decodeURI()`** 函数能解码由{{jsxref("encodeURI")}} 创建或其他流程得到的统一资源标识符（URI）。

{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}

## 语法

```plain
decodeURI(encodedURI)
```

### 参数

- `encodedURI`
  - : 一个完整的编码过的 URI

### 返回值

返回一个给定编码统一资源标识符 (URI) 的未编码版本的新字符串。

### 异常

当`encodedURI` 包含无效字符序列时，引发{{jsxref("URIError")}}（“格式错误的 URI 序列”）异常。

## 描述

将已编码 URI 中所有能识别的转义序列转换成原字符，但不能解码那些不会被 {{jsxref("encodeURI")}} 编码的内容（例如 "`#`"）。

## 示例

### 解码一个西里尔字母（Cyrillic）URL

```js
decodeURI(
  "https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B",
);
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
```

### 捕捉异常

```plain
try {
  var a = decodeURI('%E0%A4%A');
} catch(e) {
  console.error(e);
}

// URIError: malformed URI sequence
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("decodeURIComponent")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
