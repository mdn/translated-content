---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
---

{{JSRef}} {{deprecated_header}}

{{jsxref("String")}} 值的 **`link()`** 方法创建一个 {{HTMLElement("a")}} 元素字符串，其中嵌入了调用的字符串（`<a href="...">str</a>`），用作指向另一个 URL 的超文本链接。

> [!NOTE]
> 所有 [HTML 包装方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法)都已被弃用，并且仅为了兼容性而标准化。请使用 [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)（例如 [`document.createElement()`](/zh-CN/docs/Web/API/Document/createElement)）代替。

## 语法

```js-nolint
link(url)
```

### 参数

- `url`
  - : 任何能够指定 `<a>` 元素的 `href` 属性的字符串；它应当是有效的 URL（相对或绝对），任何 `&` 字符将会被转义为 `&amp;`。

### 返回值

一个以 `<a href="url">` 开始标签开始（`url` 中的双引号被替换为 `&quot;`），接着是文本 `str`，最后是 `</a>` 结束标签的字符串。

## 示例

### 使用 link()

下面的示例将单词“MDN”显示为一个超文本链接，点击该链接将用户返回到 Mozilla Developer Network。

```js
const hotText = "MDN";
const url = "https://developer.mozilla.org/";

console.log(`点击返回 ${hotText.link(url)}`);
// 点击返回 <a href="https://developer.mozilla.org/">MDN</a>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.link` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.anchor()")}}
- {{domxref("document.links")}}
