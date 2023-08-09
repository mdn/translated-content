---
title: CSS.escape()
slug: Web/API/CSS/escape_static
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

**`CSS.escape()`** 静态方法返回 {{domxref("DOMString")}} 包含作为参数传递的转义字符串，主要用作 CSS 选择器的一部分。

## 语法

```plain
escapedStr = CSS.escape(str);
```

### 参数

- _str_
  - : The {{domxref("DOMString")}} to be escaped.

## 实例

### 基本结果

```js
CSS.escape(".foo#bar"); // "\.foo\#bar"
CSS.escape("()[]{}"); // "\(\)\[\]\\{\\}"
CSS.escape("--a"); // "--a"
CSS.escape(0); // "\30 ",  Unicode 代码点“0”是 30
CSS.escape("\0"); // "\ufffd",  Unicode 替换字符
```

### 在上下文使用

要转义一个字符串作为选择器使用， `escape()`方法可以用于：

```js
var element = document.querySelector("#" + CSS.escape(id) + " > img");
```

`escape()`方法也可以用于转义字符串，它也转义了不严格需要转义的字符：

```js
var element = document.querySelector('a[href="#' + CSS.escape(fragment) + '"]');
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{domxref("CSS")}} interface where this static method resides.
- [A polyfill for the CSS.escape](https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js)
