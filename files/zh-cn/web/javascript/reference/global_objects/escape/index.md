---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
---

{{jsSidebar("Objects")}} {{deprecated_header}}

## 概览

废弃的 **`escape()`** 方法生成新的由十六进制转义序列替换的字符串。使用 {{jsxref("Global_Objects/encodeURI", "encodeURI")}} 或 {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} 代替。

## 语法

```plain
escape(str)
```

### 参数

- `str`
  - : 待编码的字符串。

## 描述

`escape` 函数是全局对象的属性。特色字符如：`@*_+-./` 被排除在外。

字符的 16 进制格式值，当该值小于等于 0xFF 时，用一个 2 位转义序列：`%xx` 表示。大于的话则使用 4 位序列：%**u**xxxx 表示。

## 示例

```js
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// special characters
escape("@*_+-./"); // "@*_+-./"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他链接

- {{jsxref("Global_Objects/encodeURI", "encodeURI")}}
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}
