---
title: 典型的 HTTP 会话
slug: Web/HTTP/Session
---

{{HTTPSidebar}}

在像 HTTP 这样的客户端——服务器（Client-Server）协议中，会话分为三个阶段：

1. 客户端建立一条 TCP 连接（如果传输层不是 TCP，也可以是其他适合的连接）。
2. 客户端发送请求并等待应答。
3. 服务器处理请求并送回应答，回应包括一个状态码和对应的数据。

从 HTTP/1.1 开始，连接在完成第三阶段后不再关闭，客户端可以再次发起新的请求。这意味着第二步和第三步可以连续进行数次。

## 建立连接

在客户端——服务器协议中，连接是由客户端发起建立的。在 HTTP 中打开连接意味着在底层传输层启动连接，通常是 TCP。

使用 TCP 时，HTTP 服务器的默认端口号是 80，另外还有 8000 和 8080 也很常用。页面的 URL 会包含域名和端口号，但当端口号为 80 时可以省略。前往[标识互联网上的内容](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)获取更多内容。

> **备注：** 客户端——服务器模型不允许服务器在没有显式请求时发送数据给客户端。为了解决这个问题，Web 开发者们使用了许多技术：例如，使用 {{domxref("XMLHTTPRequest")}} 或 {{domxref("Fetch")}} API 周期性地请求服务器，使用 HTML [WebSocket API](/zh-CN/docs/Web/API/WebSockets_API)，或其他类似协议。

## 发送客户端请求

一旦连接建立，用户代理就可以发送请求（用户代理通常是 Web 浏览器，但也可以是其他的，例如爬虫）。客户端请求由一系列文本指令组成，并使用 CRLF 分隔（回车，然后是换行），它们被划分为三个块：

1. 第一行包括请求方法及请求参数：

   - 文档路径，不包括协议和域名的绝对路径 URL
   - 使用的 HTTP 协议版本

2. 接下来的行每一行都表示一个 HTTP 标头，为服务器提供关于所需数据的信息（例如语言，或 MIME 类型），或是一些改变请求行为的数据（例如当数据已经被缓存，就不再应答）。这些 HTTP 标头形成一个以空行结尾的块。
3. 最后一块是可选数据块，包含更多数据，主要被 POST 方法所使用。

### 请求示例

访问 developer.mozilla.org（`https://developer.mozilla.org/`）的根页面，并告诉服务器用户代理倾向于该页面使用法语展示：

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

注意最后的空行，它把标头与数据块分隔开。由于在 HTTP 标头中没有 `Content-Length`，数据块是空的，所以服务器可以在收到代表标头结束的空行后就开始处理请求。

例如，发送表单的结果：

```http
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### 请求方法

HTTP 定义了一组[请求方法](/zh-CN/docs/Web/HTTP/Methods)用来指定对目标资源的行为。它们一般是名词，但这些请求方法有时会被叫做 HTTP 动词。最常用的请求方法是 `GET` 和 `POST`：

- {{HTTPMethod("GET")}} 方法请求指定的资源。`GET` 请求应该只被用于获取数据。
- {{HTTPMethod("POST")}} 方法向服务器发送数据，因此会改变服务器状态。这个方法常在 [HTML 表单](/zh-CN/docs/Learn/Forms)中使用。

## 服务器响应结构

当收到用户代理发送的请求后，Web 服务器就会处理它，并最终送回一个响应。与客户端请求很类似，服务器响应由一系列文本指令组成，并使用 CRLF 分隔，它们被划分为三个不同的块：

1. 第一行是*状态行*，包括使用的 HTTP 协议版本，然后是一个状态码（及其人类可读的描述文本）。
2. 接下来每一行都表示一个 HTTP 标头，为客户端提供关于所发送数据的一些信息（如类型、数据大小、使用的压缩算法、缓存指示）。与客户端请求的头部块类似，这些 HTTP 标头组成一个块，并以一个空行结束。
3. 最后一块是数据块，包含了响应的数据（如果有的话）。

### 响应示例

成功的网页响应：

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 55743
Connection: keep-alive
Cache-Control: s-maxage=300, public, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:37:18 GMT
ETag: "2e77ad1dc6ab0b53a2996dfd4653c1c3"
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
Age: 7

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>A simple webpage</title>
</head>
<body>
  <h1>Simple HTML webpage</h1>
  <p>Hello, world!</p>
</body>
</html>
```

请求资源已被永久移动的网页响应：

```http
HTTP/1.1 301 Moved Permanently
Server: Apache/2.4.37 (Red Hat)
Content-Type: text/html; charset=utf-8
Date: Thu, 06 Dec 2018 17:33:08 GMT
Location: https://developer.mozilla.org/ （目标资源的新地址，服务器期望用户代理去访问它）
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
Content-Length: 325 (如果用户代理无法转到新地址，就显示一个默认页面)

<!DOCTYPE html>… (包含一个网站自定义页面，帮助用户找到丢失的资源)
```

请求资源不存在的网页响应：

```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: 38217
Connection: keep-alive
Cache-Control: no-cache, no-store, must-revalidate, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:35:13 GMT
Expires: Thu, 06 Dec 2018 17:35:13 GMT
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
X-Cache: Error from cloudfront
<!DOCTYPE html>… (包含一个站点自定义 404 页面，帮助用户找到丢失的资源)
```

### 响应状态码

[HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Status)用来表示一个 HTTP 请求是否成功完成。响应被分为 5 种类型：信息型响应，成功响应，重定向，客户端错误和服务端错误。

- {{HTTPStatus(200)}}：OK。请求成功。
- {{HTTPStatus(301)}}：Moved Permanently。请求资源的 URI 已被改变。
- {{HTTPStatus(404)}}：Not Found。服务器无法找到请求的资源。

## 参见

- [识别互联网上的内容](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
- [HTTP 标头（header）](/zh-CN/docs/Web/HTTP/Headers)
- [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Methods)
- [HTTP 响应状态码](/zh-CN/docs/Web/HTTP/Status)
