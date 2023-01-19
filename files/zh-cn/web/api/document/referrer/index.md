---
title: Document.referrer
slug: Web/API/Document/referrer
---

{{APIRef("DOM")}}

**`Document.referrer`** 返回的是一个 [URI](https://www.w3.org/Addressing/#background)，当前页面就是从这个 URI 所代表的页面跳转或打开的。

## 值

如果用户直接打开了这个页面（不是通过页面跳转，而是通过地址栏或者书签等打开的），则该属性为空字符串。由于该属性只是返回一个字符串，所以不能够通过该属性引用页面的 DOM。

在 {{HTMLElement("iframe")}} 中，`Document.referrer` 会初始化为父窗口 {{domxref("Window/location", "Window.location")}} 的 {{domxref("HTMLAnchorElement/href", "href")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
