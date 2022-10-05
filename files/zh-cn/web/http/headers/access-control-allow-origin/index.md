---
title: Access-Control-Allow-Origin
slug: Web/HTTP/Headers/Access-Control-Allow-Origin
---

{{HTTPSidebar}}

**`Access-Control-Allow-Origin`** 响应头指定了该响应的资源是否被允许与给定的 {{glossary("origin")}} 共享。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header","响应头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name","禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## 指令

- `*`
  - : 对于*不需具备凭证*的请求，服务器会以“`*`”作为通配符，从而允许所有域都具有访问资源的权限。尝试在凭证中使用通配符[会报错](/zh-CN/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials)。
- `<origin>`
  - : 指定一个可以访问资源的 URI。
- `null`

  - : 指定”null“源。

  > **备注：** `null` [不应该使用](https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null)：“返回 `Access-Control-Allow-Origin: "null"` 似乎是安全的，但任何使用非分级方案（如 `data:` 或 `file:`）的资源和沙盒文件的 Origin 的序列化都被定义为“null”。许多用户代理将授予这类文件对带有 `Access-Control-Allow-Origin: "null"` 头的响应的访问权，而且任何源都可以用 `null` 源创建一个恶意文件。因此，应该避免 ACAO 头的“null”值。”


## 示例

一个告诉浏览器允许来自任何来源的代码访问资源的响应将包括以下内容：

```http
Access-Control-Allow-Origin: *
```

如需允许 `https://developer.mozilla.org` 源访问资源，响应应包含以下内容：

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

将可能的 `Access-Control-Allow-Origin` 值限制在一组允许的源，需要服务器端的代码检查 {{HTTPHeader("Origin")}} 请求头的值，将其与允许的源列表进行比较，如果 {{HTTPHeader("Origin")}} 值在列表中，将 `Access-Control-Allow-Origin` 设置为与 {{HTTPHeader("Origin")}} 头一样的值。

### CORS 和缓存

如果服务器未使用“`*`”，而是指定了一个域，那么为了向客户端表明服务器的返回会根据 `Origin` 请求头而有所不同，必须在{{HTTPHeader("Vary")}} 响应头中包含 `Origin`。

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Vary")}}
- [跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- {{httpheader("Cross-Origin-Resource-Policy")}}
