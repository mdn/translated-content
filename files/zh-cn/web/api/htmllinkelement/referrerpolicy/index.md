---
title: HTMLLinkElement.referrerPolicy
slug: Web/API/HTMLLinkElement/referrerPolicy
---

{{APIRef}}

**`HTMLLinkElement.referrerPolicy`** 反映了 {{HTMLElement("link")}} 元素的 HTML 属性 [`referrerpolicy`](/zh-CN/docs/Web/HTML/Element/link#referrerpolicy)，这个属性定义了 {{HTMLElement("link")}} 元素在获取资源时的引用方式。

详情请参考 HTTP 标头 {{HTTPHeader("Referrer-Policy")}}。

## 示例

```js
const links = document.getElementsByTagName("link");
links[0].referrerPolicy; // "no-referrer"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTTP 标头 {{HTTPHeader("Referrer-Policy")}}
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
- {{domxref("HTMLAreaElement.referrerPolicy")}}
- {{domxref("HTMLIFrameElement.referrerPolicy")}}
- {{domxref("HTMLImageElement.referrerPolicy")}}
