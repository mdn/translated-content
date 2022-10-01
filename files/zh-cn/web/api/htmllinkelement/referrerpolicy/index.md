---
title: HTMLLinkElement.referrerPolicy
slug: Web/API/HTMLLinkElement/referrerPolicy
---

{{APIRef}}{{SeeCompatTable}}

HTMLLinkElement.referrerPolicy 反映了 {{HTMLElement("link")}} 元素的 HTML 属性 {{htmlattrxref("referrerpolicy","link")}} 的定义，这个属性定义了{{HTMLElement("link")}} 元素在获取资源时的引用方式。

详情请参考 HTTP header 中的 {{HTTPHeader("Referrer-Policy")}} 。

## 语法

```plain
DOMString HTMLLinkElement.referrerPolicy
```

## 例子

```js
var links = document.getElementsByTagName("link");
links[0].referrerPolicy; // "no-referrer"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- HTTP header {{HTTPHeader("Referrer-Policy")}}
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
- {{domxref("HTMLAreaElement.referrerPolicy")}}
- {{domxref("HTMLIFrameElement.referrerPolicy")}}
- {{domxref("HTMLImageElement.referrerPolicy")}}
