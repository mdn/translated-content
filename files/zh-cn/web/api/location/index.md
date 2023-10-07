---
title: Location
slug: Web/API/Location
---

{{APIRef("URLUtils")}}

**`Location`** 接口表示其链接到的对象的位置（URL）。所做的修改反映在与之相关的对象上。 {{domxref("Document")}} 和 {{domxref("Window")}} 接口都有这样一个链接的 Location，分别通过 {{domxref("Document.location")}}和{{domxref("Window.location")}} 访问。

## 属性

_`Location` 接口不继承任何属性，但是实现了那些来自 {{domxref("URLUtils")}} 的属性。_

- {{domxref("Location.href")}}
  - : 包含整个 URL 的一个{{domxref("DOMString")}}
- {{domxref("Location.protocol")}}
  - : 包含 URL 对应协议的一个{{domxref("DOMString")}}，最后有一个":"。
- {{domxref("Location.host")}}
  - : 包含了域名的一个{{domxref("DOMString")}}，可能在该串最后带有一个":"并跟上 URL 的端口号。
- {{domxref("Location.hostname")}}
  - : 包含 URL 域名的一个{{domxref("DOMString")}}。
- {{domxref("Location.port")}}
  - : 包含端口号的一个{{domxref("DOMString")}}。
- {{domxref("Location.pathname")}}
  - : 包含 URL 中路径部分的一个{{domxref("DOMString")}}，开头有一个 `/`。
- {{domxref("Location.search")}}
  - : 包含 URL 参数的一个{{domxref("DOMString")}}，开头有一个`“?”`。
- {{domxref("Location.hash")}}
  - : 包含块标识符的{{domxref("DOMString")}}，开头有一个 `#`。
- {{domxref("Location.username")}}
  - : 包含 URL 中域名前的用户名的一个{{domxref("DOMString")}}。
- {{domxref("Location.password")}}
  - : 包含 URL 域名前的密码的一个 {{domxref("DOMString")}}。
- {{domxref("Location.origin")}} {{readOnlyInline}}
  - : 包含页面来源的域名的标准形式{{domxref("DOMString")}}。

## 方法

_`Location` 没有继承任何方法_，但实现了来自{{domxref("URLUtils")}}_的方法。_

- {{domxref("Location.assign()")}}
  - : 加载给定 URL 的内容资源到这个 Location 对象所关联的对象上。
- {{domxref("Location.reload()")}}
  - : 重新加载来自当前 URL 的资源。他有一个特殊的可选参数，类型为 {{domxref("Boolean")}}，该参数为 true 时会导致该方法引发的刷新一定会从服务器上加载数据。如果是 `false`或没有制定这个参数，浏览器可能从缓存当中加载页面。
- {{domxref("Location.replace()")}}
  - : 用给定的 URL 替换掉当前的资源。与 `assign()` 方法不同的是用 `replace()`替换的新页面不会被保存在会话的历史 {{domxref("History")}}中，这意味着用户将不能用后退按钮转到该页面。
- {{domxref("Location.toString()")}}
  - : 返回一个{{domxref("DOMString")}}，包含整个 URL。它和读取{{domxref("URLUtils.href")}}的效果相同。但是用它是不能够修改 Location 的值的。

## 例子

```js
// Create anchor element and use href property for the purpose of this example
// A more correct alternative is to browse to the URL and use document.location or window.location
var url = document.createElement("a");
url.href =
  "https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container";
console.log(url.href); // https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container
console.log(url.protocol); // https:
console.log(url.host); // developer.mozilla.org
console.log(url.hostname); // developer.mozilla.org
console.log(url.port); // (blank - https assumes port 443)
console.log(url.pathname); // /en-US/search
console.log(url.search); // ?q=URL
console.log(url.hash); // #search-results-close-container
console.log(url.origin); // https://developer.mozilla.org
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- Two methods creating such an object: {{domxref("Window.location")}} and {{domxref("Document.location")}}.
