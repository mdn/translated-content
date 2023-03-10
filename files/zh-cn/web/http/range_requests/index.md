---
title: HTTP 请求范围
slug: Web/HTTP/Range_requests
---

{{HTTPSidebar}}

HTTP 协议范围请求允许服务器只发送 HTTP 消息的一部分到客户端。范围请求在传送大的媒体文件，或者与文件下载的断点续传功能搭配使用时非常有用。

## 检测服务器端是否支持范围请求

假如在响应中存在 {{HTTPHeader("Accept-Ranges")}} 首部（并且它的值不为“none”），那么表示该服务器支持范围请求。例如，你可以使用 cURL 发送一个 {{HTTPMethod("HEAD")}} 请求来进行检测。

```plain
curl -I http://i.imgur.com/z4d4kWk.jpg

HTTP/1.1 200 OK
...
Accept-Ranges: bytes
Content-Length: 146515
```

在上面的响应中， `Accept-Ranges: bytes` 表示界定范围的单位是 bytes。这里 {{HTTPHeader("Content-Length")}} 也是有效信息，因为它提供了要检索的图片的完整大小。

如果站点未发送 `Accept-Ranges` 首部，那么它们有可能不支持范围请求。一些站点会明确将其值设置为 "none"，以此来表明不支持。在这种情况下，某些应用的下载管理器会将暂停按钮禁用。

```plain
curl -I https://www.youtube.com/watch?v=EwTZ2xpQwpA

HTTP/1.1 200 OK
...
Accept-Ranges: none
```

## 从服务器端请求特定的范围

假如服务器支持范围请求的话，你可以使用 {{HTTPHeader("Range")}} 首部来生成该类请求。该首部指示服务器应该返回文件的哪一或哪几部分。

### 单一范围

我们可以请求资源的某一部分。这次我们依然用 cURL 来进行测试。"-H" 选项可以在请求中追加一个首部行，在这个例子中，是用 Range 首部来请求图片文件的前 1024 个字节。

```plain
curl http://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023"
```

这样生成的请求如下：

```plain
GET /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
Range: bytes=0-1023
```

服务器端会返回状态码为 {{HTTPStatus("206")}} `Partial Content` 的响应：

```plain
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/146515
Content-Length: 1024
...
(binary content)
```

在这里，{{HTTPHeader("Content-Length")}} 首部现在用来表示先前请求范围的大小（而不是整张图片的大小）。{{HTTPHeader("Content-Range")}} 响应首部则表示这一部分内容在整个资源中所处的位置。

### 多重范围

Range 头部也支持一次请求文档的多个部分。请求范围用一个逗号分隔开。

```plain
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

服务器返回 206 Partial Content 状态码和 Content-Type：multipart/byteranges; boundary=3d6b6a416f9b5 头部，Content-Type：multipart/byteranges 表示这个响应有多个 byterange。每一部分 byterange 都有他自己的 Content-type 头部和 Content-Range，并且使用 boundary 参数对 body 进行划分。

```plain
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

<!doctype html>
<html>
<head>
    <title>Example Do
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-150/1270

eta http-equiv="Content-type" content="text/html; c
--3d6b6a416f9b5--
```

### 条件式范围请求

当（中断之后）重新开始请求更多资源片段的时候，必须确保自从上一个片段被接收之后该资源没有进行过修改。

The {{HTTPHeader("If-Range")}} 请求首部可以用来生成条件式范围请求：假如条件满足的话，条件请求就会生效，服务器会返回状态码为 {{HTTPStatus("206")}} `Partial` 的响应，以及相应的消息主体。假如条件未能得到满足，那么就会返回状态码为 {{HTTPStatus("200")}} `OK` 的响应，同时返回整个资源。该首部可以与 {{HTTPHeader("Last-Modified")}} 验证器或者 {{HTTPHeader("ETag")}} 一起使用，但是二者不能同时使用。

```plain
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## 范围请求的响应

与范围请求相关的有三种状态：

- 在请求成功的情况下，服务器会返回 {{HTTPStatus("206")}} `Partial Content` 状态码。
- 在请求的范围越界的情况下（范围值超过了资源的大小），服务器会返回 {{HTTPStatus("416")}} `Requested Range Not Satisfiable` （请求的范围无法满足）状态码。
- 在不支持范围请求的情况下，服务器会返回 {{HTTPStatus("200")}} `OK` 状态码。

## 与分块传输编码的对比

{{HTTPHeader("Transfer-Encoding")}} 首部允许分块编码，这在数据量很大，并且在请求未能完全处理完成之前无法知晓响应的体积大小的情况下非常有用。服务器会直接把数据发送给客户端而无需进行缓冲或确定响应的精确大小——后者会增加延迟。范围请求与分块传输是兼容的，可以单独或搭配使用。

## 相关内容

- 相关状态码： {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.
- 相关首部： {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.
- [IE 浏览器中的断点续传功能](https://blogs.msdn.microsoft.com/ieinternals/2011/06/03/download-resumption-in-internet-explorer/)
