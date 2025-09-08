---
title: OPTIONS 请求方法
slug: Web/HTTP/Reference/Methods/OPTIONS
i10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**HTTP `OPTIONS` 方法**请求给定的 URL 或服务器的允许通信选项。这可用于测试请求允许的 HTTP 方法，或确定在进行 CORS 预检请求时请求是否会成功。客户端可以用这个方法指定一个 URL，或者用星号（`*`）来指代整个服务器。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">请求是否有主体</th>
      <td>可能有*</td>
    </tr>
    <tr>
      <th scope="row">成功的响应是否有主体</th>
      <td>可能有</td>
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

\* 尽管从技术上讲允许使用带有请求主体的 `OPTIONS` 消息，但它没有定义的语义。只要你提供有效的 {{HTTPHeader("Content-Type")}} 标头，并且知道服务器需要它，你就可以在 `OPTIONS` 消息中包含正文，因为行为是特定于实现的。

## 语法

```http
OPTIONS *|<request-target>["?"<query>] HTTP/1.1
```

请求目标可以是表示整个服务器的“星号形式” `*`，也可以是与其他方法常见的请求目标：

- `*`
  - : 表示客户端希望请求整个服务器的 `OPTIONS`，而不是该服务器的特定命名资源。
- `<request-target>`
  - : 与 {{HTTPHeader("Host")}} 标头中提供的信息结合使用，可识别请求的目标资源。请求源服务器时是绝对路径（例如，`/path/to/file.html`），请求代理服务器时是绝对 URL（例如，`http://www.example.com/path/to/file.html`）。
- `<query>` {{optional_inline}}
  - : 可选的查询组件，以问号 `?` 开头。 通常用于以 `键=值` 对的形式承载识别信息。

## 示例

### 检测服务器所支持的请求方法

要想知道一个服务器支持哪些请求方法，可以使用 `curl` 命令行程序来发出 `OPTIONS` 请求：

```bash
curl -X OPTIONS https://example.org -i
```

这会创建以下 HTTP 请求：

```http
OPTIONS / HTTP/2
Host: example.org
User-Agent: curl/8.7.1
Accept: */*
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

在 [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS) 中，可以使用 OPTIONS 方法发起一个[预检请求](/zh-CN/docs/Glossary/Preflight_request)，以检测实际请求是否可以被服务器所接受。在这个示例中，我们会为这些参数请求权限：

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
  - : {{HTTPMethod("POST")}}、{{HTTPMethod("GET")}} 和 `OPTIONS` 是该 URL 允许的方法（该标头类似于 {{HTTPHeader("Allow")}} 响应标头，但只用于 [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS)）。
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

> [!NOTE]
> {{HTTPStatus("200")}} OK 和 {{HTTPStatus("204")}} No Content 都是[允许的状态码](https://fetch.spec.whatwg.org/#ref-for-ok-status)，但是部分浏览器错误地认为 `204 No Content` 也适用于该资源，且不发送后续请求来获取资源内容。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Reference/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Reference/Status)
- [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Allow")}} 标头
- [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS)
