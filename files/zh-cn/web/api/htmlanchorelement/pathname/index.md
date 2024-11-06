---
title: HTMLAnchorElement：pathname 属性
slug: Web/API/HTMLAnchorElement/pathname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.pathname`** 属性是一个字符串，首先为 `'/'`，后面是不包含查询字符串或片段的 URL 路径（如果没有路径，则为空字符串）。

## 值

一个字符串。

## 示例

```js
// 假设文档中有一个这样的元素：<a id="myAnchor" href="/zh-CN/docs/HTMLAnchorElement">
const anchor = document.getElementById("myAnchor");
anchor.pathname; // 返回 '/zh-CN/docs/HTMLAnchorElement'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
