---
title: Cookie
slug: Web/HTTP/Reference/Headers/Cookie
---

**`Cookie`** 是一个 HTTP 请求标头，其中含有先前由服务器通过 {{HTTPHeader("Set-Cookie")}} 标头投放或通过 JavaScript 的 {{domxref("Document.cookie")}} 方法设置，然后存储到客户端的 [HTTP cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies) 。

这个标头是可选的，而且可能会被忽略，例如在浏览器的隐私设置里面设置为禁用 cookie。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">标头类型</th>
   <td>{{Glossary("Request header", "请求标头")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
   <td>是</td>
  </tr>
 </tbody>
</table>

## 语法

```http
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

- \<cookie-list>
  - : 一系列的名称/值对，形式为 `<cookie-name>=<cookie-value>`。名称/值对之间用分号和空格（`'; '`）隔开。

## 示例

```http
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
