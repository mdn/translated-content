---
title: HTMLAnchorElement：password 属性
slug: Web/API/HTMLAnchorElement/password
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.password`** 属性是一个字符串，包含域名之前指定的密码。

如果未先设置 [`username`](/zh-CN/docs/Web/API/HTMLAnchorElement/username) 属性就尝试设置此属性，则会静默失败。

## 值

一个字符串。

## 示例

```js
// 文档中有一个 <a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/zh-CN/docs/HTMLAnchorElement"> 元素
const anchor = document.getElementByID("myAnchor");
anchor.password; // 返回“flabada”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
