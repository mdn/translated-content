---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
---

{{HTTPSidebar}}

**HTTP 的 `OPTIONS 方法`** 用于获取目的资源所支持的通信选项。客户端可以对特定的 URL 使用 OPTIONS 方法，也可以对整站（通过将 URL 设置为“\*”）使用该方法。

| Request has body                     | No  |
| ------------------------------------ | --- |
| Successful response has body         | Yes |
| {{Glossary("Safe")}}         | Yes |
| {{Glossary("Idempotent")}} | Yes |
| {{Glossary("Cacheable")}}     | No  |
| Allowed in HTML forms                | No  |

## 语法

```plain
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

## 示例

### 检测服务器所支持的请求方法

可以使用 OPTIONS 方法对服务器发起请求，以检测服务器支持哪些 HTTP 方法：

```plain
curl -X OPTIONS http://example.org -i
```

响应报文包含一个 {{HTTPHeader("Allow")}} 首部字段，该字段的值表明了服务器支持的所有 HTTP 方法：

```plain
HTTP/1.1 200 OK
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Expires: Thu, 20 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
x-ec-custom-error: 1
Content-Length: 0
```

### CORS 中的预检请求

在 [CORS](/zh-CN/docs/Web/HTTP/Access_control_CORS) 中，可以使用 OPTIONS 方法发起一个预检请求，以检测实际请求是否可以被服务器所接受。预检请求报文中的 {{HTTPHeader("Access-Control-Request-Method")}} 首部字段告知服务器实际请求所使用的 HTTP 方法；{{HTTPHeader("Access-Control-Request-Headers")}} 首部字段告知服务器实际请求所携带的自定义首部字段。服务器基于从预检请求获得的信息来判断，是否接受接下来的实际请求。

```plain
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

服务器所返回的 {{HTTPHeader("Access-Control-Allow-Methods")}} 首部字段将所有允许的请求方法告知客户端。该首部字段与 {{HTTPHeader("Allow")}} 类似，但只能用于涉及到 CORS 的场景中。

```plain
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Allow")}} header
- [CORS](/zh-CN/docs/Web/HTTP/Access_control_CORS)
