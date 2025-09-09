---
title: HTMLAnchorElement：href 属性
slug: Web/API/HTMLAnchorElement/href
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.href`** 属性是一个{{Glossary("stringifier", "字符串化器")}}，它返回一个包含完整 URL 的字符串，并且允许更新 `href` 属性。

## 值

一个字符串。

## 示例

```js
// 文档中有一个 <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/HTMLAnchorElement"> 元素
const anchor = document.getElementById("myAnchor");
anchor.href; // 返回“https://developer.mozilla.org/zh-CN/HTMLAnchorElement”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
