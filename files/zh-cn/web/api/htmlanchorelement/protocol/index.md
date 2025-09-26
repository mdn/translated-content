---
title: HTMLAnchorElement：protocol 属性
slug: Web/API/HTMLAnchorElement/protocol
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.protocol`** 属性是一个字符串，表示 URL 的协议方案，包括末尾的 `':'`。

## 值

一个字符串。

## 示例

### 获取锚点链接的协议

```js
// 文档中有一个 <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/HTMLAnchorElement"> 元素
const anchor = document.getElementById("myAnchor");
anchor.protocol; // 返回“https:”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
