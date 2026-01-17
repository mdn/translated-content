---
title: TRACE 请求方法
short-title: TRACE
slug: Web/HTTP/Reference/Methods/TRACE
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP 方法 **`TRACE`** 沿着通往目标资源的路径进行信息回环测试。

请求的最终接收者应将收到的信息（不包括可能包括敏感数据的字段）作为 {{HTTPStatus("200", "200 OK")}} 响应的信息主体反映给客户端，其 {{HTTPHeader("Content-Type")}} 为 `message/http`。最终接收者是源服务器或第一个在请求中收到 {{HTTPHeader("Max-Forwards")}} 值为 `0` 的服务器。

客户端不能在请求中包含{{Glossary("HTTP Content", "内容")}}，或生成可能包括敏感数据的标头（如用户凭证或 cookie）。并非所有服务器都实现了 `TRACE` 方法，且某些服务器拥有者出于安全性考虑禁止了 `TRACE` 方法的使用。在这些情况下，会发送 {{HTTPStatus("405", "405 Method Not Allowed")}} [客户端错误响应](/zh-CN/docs/Web/HTTP/Reference/Status#客户端错误响应)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">请求是否有主体</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">成功的响应是否有主体</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent","幂等")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable","可缓存")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        允许在 <a href="/zh-CN/docs/Learn_web_development/Extensions/Forms">HTML 表单</a>中使用
      </th>
      <td>不允许</td>
    </tr>
  </tbody>
</table>

## 语法

```http
TRACE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : 当与 {{HTTPHeader("Host")}} 标头提供的信息结合时，可识别请求的目标资源。在向源服务器发送的请求中，此路径为绝对路径（例如 `/path/to/file.html`）；而在向代理服务器发送的请求中，此路径为绝对 URL（例如 `http://www.example.com/path/to/file.html`）。
- `<query>` {{optional_inline}}
  - : 可选查询组件，以问号 `?` 开头。常用于携带以 `key=value` 对形式呈现的标识信息。

## 示例

### 成功的 TRACE 请求

可以使用 `curl` 执行 `TRACE` 请求：

```bash
curl -v -X TRACE example.com
```

它产生了如下 HTTP 请求：

```http
TRACE / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

服务端会向客户端发送包含请求头信息的 {{HTTPStatus("200", "200 OK")}} 响应：

```http
HTTP/1.1 200 OK
Content-Length: 123
Date: Wed, 04 Sep 2024 11:50:24 GMT
Server: Apache/2.4.59 (Unix)
Content-Type: message/http

TRACE / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

## 规范

{{Specifications}}

## 浏览器兼容性

浏览器不会对用户主动发起的操作使用 `TRACE` 方法，因此“浏览器兼容性”在此不适用。

## 参见

- [HTTP 方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
- [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)
- [跨站跟踪（XST）](https://owasp.org/www-community/attacks/Cross_Site_Tracing)
