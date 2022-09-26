---
title: HTMLAnchorElement.referrer
slug: Web/API/HTMLAnchorElement/referrerPolicy
---

{{APIRef}}{{SeeCompatTable}}

**`HTMLAnchorElement.referrer`** 属性对应于 HTML 中 {{HTMLElement("a")}} 标签的 {{htmlattrxref("referrer","a")}} 属性，它可以控制用户在点击这个链接时所发出的 HTTP 请求的 Referer 请求头的值。

## 语法

```js
refStr = anchorElt.referrer;
anchorElt.referrer = refStr;
```

### 属性值

- `"no-referrer"` 意味着不要发送 Referer 请求头。
- `"origin"` 意味着所发送的 Referer 请求头的值为当前页面的源，即 `location.origin` 的值。
- `"unsafe-url"` 意味着所发送的 Referrer 请求头的值为当前页面完整的 url（即 `location.href`）去掉尾部的哈希（即 `location.hash`）之后的值。正如该选项的名字所言（unsafe），此选项是不安全的，它可以将一个 HTTPS 页面的路径信息透露给第三方。

## 示例

```js
var elt = document.createElement("a");
var linkText = document.createTextNode("My link");
elt.appendChild(linkText);
elt.href = "https://developer.mozilla.org/en-US/";
elt.referrer = "no-referrer";

var div = document.getElementById("divAround");
div.appendChild(elt); // 点击该链接接时不会发送 Referer 请求头
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("HTMLImageElement.referrer")}}、{{domxref("HTMLAreaElement.referrer")}}、{{domxref("HTMLIFrameElement.referrer")}}
