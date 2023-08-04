---
title: XMLHttpRequest：withCredentials 属性
slug: Web/API/XMLHttpRequest/withCredentials
---

{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.withCredentials`** 属性是一个{{jsxref("Boolean", "布尔", "", 1)}}值，它指示了是否该使用类似 cookie、Authorization 标头或者 TLS 客户端证书等凭据进行跨站点访问控制（`Acess-Control`）请求。设置 `withCredentials` 对同源请求是无效的。

此外，这个标志还用于指示何时在响应中忽略 cookie。默认值是 `false`。除非在发送 `XMLHttpRequest` 请求之前，将 `withCredentials` 设置为 `true`，否则来自不同域的 `XMLHttpRequest` 响应无法为自己的域设置 cookie 值。而通过设置 `withCredentials` 为 true 获得第三方 cookie，仍将遵循同源策略，因此请求的脚本无法通过 [document.cookie](/zh-CN/docs/Web/API/Document/cookie) 或者响应标头访问。

> **备注：** 永远不会影响到同源请求。

> **备注：** 不同域下的 `XmlHttpRequest` 响应，不论其 `Access-Control-` 标头设置什么值，都无法为它自身站点设置 Cookie 值，除非它在请求之前将 `withCredentials` 设为 true。

## 值

布尔值。

## 示例

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
