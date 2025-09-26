---
title: location：protocol 属性
slug: Web/API/Location/protocol
---

{{ApiRef("Location")}}

{{domxref("Location")}} 接口的 **`protocol`** 属性是一个表示 URL 协议方案的字符串，包含结尾的 `':'`。

## 值

一个字符串。

## 示例

```js
// 在文档中加入一个 <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/Location.protocol"> 元素
const anchor = document.getElementById("myAnchor");
const result = anchor.protocol; // 返回：'https:'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
