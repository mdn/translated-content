---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
---

{{HTTPSidebar}}

**HTTP `OPTIONS` 方法**请求给定的 URL 或服务器的允许通信选项。客户端可以用这个方法指定一个 URL，或者用星号（`*`）来指代整个服务器。

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
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

## 示例

### 检测服务器所支持的请求方法

要想知道一个服务器支持哪些请求方法，可以使用 `curl` 命令行程序来发出 `OPTIONS` 请求：

```bash
curl -X OPTIONS https://example.org -i
```

响应包含 {{HTTPHeader("Allow")}} 标头，其值表明了服务器支持的所有 HTTP 方法：

```http
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### CORS 中的预检请求

在 [CORS](/zh-CN/docs/Web/HTTP/CORS) 中，可以使用 OPTIONS 方法发起一个[预检请求](/zh-CN/docs/Glossary/Preflight_request)，以检测实际请求是否可以被服务器所接受。在这个示例中，我们会为这些参数请求权限：

- 在预检请求中发送的 {{HTTPHeader("Access-Control-Request-Method")}} 标头告知服务器实际请求所使用的 HTTP 方法，在这里将实际使用 {{HTTPMethod("POST")}} 请求方法。
- {{HTTPHeader("Access-Control-Request-Headers")}} 标头告知服务器实际请求所携带的自定义标头，在这里会使用 `X-PINGOTHER` 和 `Content-Type` 标头。

```http
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.example
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

服务器现在可以回应是否会接受这些情况下的请求。在这个例子中，服务器的响应说明了：

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : `https://foo.example` 源被允许通过以下方式请求 `bar.example/resources/post-here/` URL：
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}、{{HTTPMethod("GET")}} 和 `OPTIONS` 是该 URL 允许的方法（该标头类似于 {{HTTPHeader("Allow")}} 响应标头，但只用于 [CORS](/zh-CN/docs/Web/HTTP/CORS)）。
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` 和 `Content-Type` 是该 URL 允许的请求标头。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 以上权限可以缓存 86400 秒（1 天）。

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

## 状态码

{{HTTPStatus("200")}} OK 和 {{HTTPStatus("204")}} No Content 都是[允许的状态码](https://fetch.spec.whatwg.org/#ref-for-ok-status)，但是部分浏览器错误地认为 `204 No Content` 也适用于该资源，且不发送后续请求来获取资源内容。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Allow")}} 标头
- [CORS](/zh-CN/docs/Web/HTTP/CORS)
