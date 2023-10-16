---
title: HTMLAnchorElement：protocol 属性
slug: Web/API/HTMLAnchorElement/protocol
---

{{ApiRef("HTML DOM")}}

**`HTMLAnchorElement.protocol`** 属性是一个表示 URL 协议方案的字符串，包含结尾的 `':'`。

## 值

一个字符串。

## 示例

### 从锚点元素的链接中获取协议

```js
// 文档中有一个 <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/HTMLAnchorElement"> 元素
const anchor = document.getElementById("myAnchor");
anchor.protocol; // 返回 'https:'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("HTMLAnchorElement")}} 接口。
