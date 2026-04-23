---
title: HTTP 范围请求
slug: Web/HTTP/Guides/Range_requests
l10n:
  sourceCommit: 5e9631df85d021e84133e14f4bd3c712e4f8fe08
---

HTTP 的 {{HTTPHeader("Range")}} 请求使客户端能够要求服务器仅向其回传 HTTP 消息的一部分。范围请求对于支持随机访问的媒体播放器、明确只需大型文件某部分的数据处理工具，以及允许用户暂停及恢复下载的下载管理器等客户端尤其有用。

## 检测服务器端是否支持范围请求

如果 HTTP 响应中存在 {{HTTPHeader("Accept-Ranges")}} 标头，并且其值不是“`none`”，那么该服务器支持范围请求。你可以通过使用像 cURL 这样的工具发出一个 {{HTTPMethod("HEAD")}} 请求来进行手动检查。

```bash
curl -I http://i.imgur.com/z4d4kWk.jpg
```

```http
HTTP/1.1 200 OK
…
Accept-Ranges: bytes
Content-Length: 146515
```

在此响应中，`Accept-Ranges: bytes` 表示可以使用字节作为单位来定义范围。在此处的 {{HTTPHeader("Content-Length")}} 标头也很有用，因为它指示了要检索的图像的完整大小。

如果网站省略了 `Accept-Ranges` 标头，那么它们很可能不支持部分请求。有些网站会包含这个标头，但明确将其值设为“`none`”，以表明它们不支持这一特性：

```bash
curl -I https://www.youtube.com/watch?v=EwTZ2xpQwpA
```

```http
HTTP/1.1 200 OK
…
Accept-Ranges: none
```

在这种情况下，下载管理器可能会禁用暂停按钮。

## 从服务器端请求特定的范围

如果服务器支持范围请求，那么只需在 HTTP 请求中包含 {{HTTPHeader("Range")}} 标头，你可以指定希望服务器返回文档的哪一部分或哪些部分。

### 单一范围

我们能够向资源请求单一的数据范围。同样，我们可以通过使用 cURL 来测试请求。这里的“`-H`”选项会向请求中添加一个标头，即 `Range` 标头，用于请求前 1024 个字节。

```bash
curl http://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023"
```

发出的请求像是这样：

```http
GET /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
Range: bytes=0-1023
```

服务器将会返回 {{HTTPStatus("206")}} `Partial Content` 状态；

```http
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/146515
Content-Length: 1024
…
（二进制内容）
```

{{HTTPHeader("Content-Length")}} 标头现在表示所请求范围的大小（而非图像的完整大小）。{{HTTPHeader("Content-Range")}} 响应标头则表示此部分消息在完整资源中的位置。

### 多重范围

{{HTTPHeader("Range")}} 标头还允许在文档中支持一次性获取多重范围。这些范围使用逗号分隔。

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

服务器以 {{HTTPStatus("206")}} `Partial Content` 状态码以及 {{HTTPHeader("Content-Type")}}`: multipart/byteranges; boundary=3d6b6a416f9b5` 标头响应，表明随后的数据将采用多部分字节范围格式。每个部分都携带自己的 `Content-Type` 和 `Content-Range` 字段，而必须的 boundary 参数定义了用于分割每个消息体部分的边界字符串。

```http
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>Example Do
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-150/1270

eta http-equiv="Content-type" content="text/html; c
--3d6b6a416f9b5--
```

### 条件式范围请求

当重新开始请求资源的更多部分时，你需要保证存储资源在收到上一个片段后未被修改。

{{HTTPHeader("If-Range")}} HTTP 请求标头使范围请求具有条件性：如果条件兑现，则会发起范围请求，服务器将以包含适当内容主体的 {{HTTPStatus("206")}} `Partial Content` 响应进行回复。如果条件不兑现，会被发送完整的资源回来，并带有 {{HTTPStatus("200")}} `OK` 状态。该标头可与 {{HTTPHeader("Last-Modified")}} 验证器或 {{HTTPHeader("ETag")}} 一起使用，但不能同时使用。

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## 范围请求的响应

与范围请求相关的有三种状态：

- 范围请求成功后，服务器会发出 {{HTTPStatus("206")}} `Partial Content` 状态。
- 超出范围的范围请求将导致 {{HTTPStatus("416")}} `Requested Range Not Satisfiable` 状态，这意味着没有任何范围值与资源的范围重叠。例如，每个范围的第一个字节位置可能大于资源的长度。
- 如果不支持范围请求，则返回 {{HTTPStatus("200")}} `OK` 状态，并传输完整的响应体。

## 与分块 `Transfer-Encoding` 的对比

{{HTTPHeader("Transfer-Encoding")}} 标头支持分块编码，这对于向客户端发送大量数据特别有用，尤其是在完全处理请求之前无法知道响应的总大小的情况下。服务器直接向客户端发送数据，无需确定缓冲响应或确切长度，从而减少延迟提高响应速度。范围请求和分块传输是兼容的，可以独立使用或结合使用。

## 参见

- 相关状态码 {{HTTPStatus("200")}}、{{HTTPStatus("206")}}、{{HTTPStatus("416")}}。
- 相关标头：{{HTTPHeader("Accept-Ranges")}}、{{HTTPHeader("Range")}}、{{HTTPHeader("Content-Range")}}、{{HTTPHeader("If-Range")}}、{{HTTPHeader("Transfer-Encoding")}}。
