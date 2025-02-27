---
title: HTMLAnchorElement：hostname 属性
slug: Web/API/HTMLAnchorElement/hostname
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.hostname`** 属性是一个包含 URL 域名的字符串。

## 值

一个字符串。

## 示例

```js
// 文档中有一个 <a id="myAnchor" href="/zh-CN/docs/HTMLAnchorElement"> 元素
const anchor = document.getElementById("myAnchor");
anchor.hostname; // 返回“developer.mozilla.org”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
