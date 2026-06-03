---
title: HTMLIFrameElement：contentDocument 属性
slug: Web/API/HTMLIFrameElement/contentDocument
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

如果 iframe 及其父文档处于[同源](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)，则返回一个 [`Document`](/zh-CN/docs/Web/API/Document)（即嵌套浏览上下文中的活动文档），否则返回 `null`。

## contentDocument 示例

```js
const iframeDocument = document.querySelector("iframe").contentDocument;

iframeDocument.body.style.backgroundColor = "blue";
// 这样 iframe 就会变成蓝色。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
