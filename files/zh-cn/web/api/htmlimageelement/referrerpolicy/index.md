---
title: HTMLImageElement.referrerPolicy
slug: Web/API/HTMLImageElement/referrerPolicy
---

{{APIRef}}{{SeeCompatTable}}

**`HTMLImageElement.referrerPolicy`** 反映了 {{HTMLElement("img")}} 元素的 HTML 属性 [`referrerpolicy`](/zh-CN/docs/Web/HTML/Element/img#referrerpolicy) 的定义，这个属性定义了{{HTMLElement("img")}} 元素在获取资源时的引用方式。

## 语法

```
refStr = imgElt.referrerPolicy;
imgElt.referrerPolicy = refStr;
```

### 值

- `"no-referrer"` 表示 HTTP 头部信息将不会发送 `referrer` 。
- `"origin"` 表示 referrer 只包含策略、主机名、端口等页面源的信息。
- `"unsafe-url"` 这意味着引用者将包括源站和路径（但不包括片段、密码或用户名）。这种情况是不安全的，因为它可能会泄漏路径信息，这些信息已被使用 TLS 隐藏到第三方。

## 例子

```js
var img = new Image();
img.src = "img/logo.png";
img.referrerPolicy = "origin";

var div = document.getElementById("divAround");
div.appendChild(img); // Fetch the image using the origin as the referrer
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{domxref("HTMLAnchorElement.referrerPolicy")}}, {{domxref("HTMLAreaElement.referrerPolicy")}}, and {{domxref("HTMLIFrameElement.referrerPolicy")}}.
