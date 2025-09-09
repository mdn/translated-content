---
title: HTMLAnchorElement：username 属性
slug: Web/API/HTMLAnchorElement/username
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.username`** 属性是一个字符串，包含在域名之前指定的用户名。

## 值

一个字符串。

## 示例

### 从锚点链接中获取用户名

```js
// 假设文档中含有这样的元素：<a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/zh-CN/docs/HTMLAnchorElement">
const anchor = document.getElementByID("myAnchor");
anchor.username; // 返回“anonymous”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
