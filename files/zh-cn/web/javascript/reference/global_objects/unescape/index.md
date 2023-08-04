---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
---

{{jsSidebar("Objects")}}

已废弃的**`unescape()`** 方法计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。上述的转义序列就像{{jsxref("escape")}}里介绍的一样。因为 `unescape` 已经废弃，建议使用 {{jsxref("decodeURI")}}或者{{jsxref("decodeURIComponent")}} 替代本方法。

> **备注：** 不要使用`unescape`去解码 URLS，使用`decodeURI`或`decodeURIComponent`替代。

## 语法

```plain
unescape(str)
```

### 参数

- `str`
  - : 被编码过的字符串。

### 返回值

一个未被转义的新字符串。

## 描述

`unescape`函数是*全局对象*的一个属性。

## 示例

```js
unescape("abc123"); // "abc123"
unescape("%E4%F6%FC"); // "äöü"
unescape("%u0107"); // "ć"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
