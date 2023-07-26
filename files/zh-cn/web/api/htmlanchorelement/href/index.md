---
title: HTMLAnchorElement.href
slug: Web/API/HTMLAnchorElement/href
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.href`** 属性是一个返回包含整个 URL 的字符串的 {{Glossary("stringifier")}}，且允许 href 被更新。

## 值

一个字符串。

## 示例

```js
// 假设 <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> 元素在文档内
const anchor = document.getElementById("myAnchor");
anchor.href; // 返回 'https://developer.mozilla.org/en-US/HTMLAnchorElement'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("HTMLAnchorElement")}} 接口。
