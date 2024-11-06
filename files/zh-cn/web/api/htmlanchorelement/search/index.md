---
title: HTMLHyperlinkElementUtils.search
slug: Web/API/HTMLAnchorElement/search
---

{{ApiRef("URL API")}}

**`HTMLHyperlinkElementUtils.search`** 属性是一个搜索字符串，也叫做查询字符串，它是一个 {{domxref("USVString")}} ，包含 `'?'` 和随后的 URL 参数。

## 语法

```plain
string = object.search;
object.search = string;
```

## 示例

```js
// 让一个
// <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/docs/HTMLHyperlinkElementUtils.search?q=123" />
//  元素在文档里

let anchor = document.getElementById("myAnchor");
let result = anchor.search;
// 返回:'?q=123'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- 它属于{{domxref("HTMLHyperlinkElementUtils")}} mixin。
