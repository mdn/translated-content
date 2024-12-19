---
title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
---

{{APIRef('XMLHttpRequest')}}

The **`XMLHttpRequest()`** 构造器初始化一个新的 {{domxref("XMLHttpRequest")}} 对象。

关于 `XMLHttpRequest` 的具体用法，请参考[使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)。

## 语法

```js-nolint
new XMLHttpRequest()
```

### 参数

无。

### 返回值

一个新的 {{domxref("XMLHttpRequest")}} 对象。此对象 must be prepared by at least calling {{domxref("XMLHttpRequest.open", "open()")}} to initialize it before calling {{domxref("XMLHttpRequest.send", "send()")}} to send the request to the server.

## 非标准 Firefox 语法

Firefox 16 added a non-standard parameter to the constructor that can enable anonymous mode (see [Firefox bug 692677](https://bugzil.la/692677)). Setting the `mozAnon` flag to `true` effectively resembles the [`AnonXMLHttpRequest()`](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest) constructor described in older versions of the XMLHttpRequest specification.

Gecko/Firefox 16 为该构造方法新增了一个非标准的参数，以启用匿名模式（参见 [Firefox bug 692677](https://bugzil.la/692677)）。将 `mozAnon` 属性设置为 `true`，即可有效地模拟 [`AnonXMLHttpRequest()`](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest) 构造器。此构造器在早先的 XMLHttpRequest 规范中有描述，但并未在任何浏览器中被实现。

```plain
const request = new XMLHttpRequest(paramsDictionary);
```

### 参数（非标准）

- `objParameters`

  - : 有两个属性可以设置：

    - `mozAnon`
      - : 布尔值：将此属性设置为 `true` 将使浏览器在获取资源时不暴露自身来源和[用户凭据](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials)。最重要的是，这意味着只有明确添加使用 setRequestHeader 才会发送 Cookies。
    - `mozSystem`
      - : 布尔值：将此属性设置为 `true` 允许建立跨站点的连接，而无需服务器选择使用 CORS*（译者注：Cross-Origin Resource Sharing 跨域资源共享）*。_必须同时将参数_ `mozAnon` _设置为_ `true`，_即不能与 Cookie 或其他用户凭据同时发送。[仅限于在 privileged (reviewed) apps 起效](https://bugzilla.mozilla.org/show_bug.cgi?id=692677#c68)（译者注：此句原文 This [only works in privileged (reviewed) apps](https://bugzilla.mozilla.org/show_bug.cgi?id=692677#c68);）；在 Firefox 上任何网页加载后不起作用（译者注：此句原文 it does not work on arbitrary webpages loaded in Firefox.）。_

## 参见

- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest 中的 HTML](/zh-CN/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
