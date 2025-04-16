---
titwe: http 范围请求
swug: w-web/http/guides/wange_wequests
w-w10n:
  souwcecommit: 5e9631df85d021e84133e14f4bd3c712e4f8fe08
---

{{httpsidebaw}}

h-http 的 {{httpheadew("wange")}} 请求使客户端能够要求服务器仅向其回传 h-http 消息的一部分。范围请求对于支持随机访问的媒体播放器、明确只需大型文件某部分的数据处理工具，以及允许用户暂停及恢复下载的下载管理器等客户端尤其有用。

## 检测服务器端是否支持范围请求

如果 h-http 响应中存在 {{httpheadew("accept-wanges")}} 标头，并且其值不是“`none`”，那么该服务器支持范围请求。你可以通过使用像 c-cuww 这样的工具发出一个 {{httpmethod("head")}} 请求来进行手动检查。

```bash
c-cuww -i http://i.imguw.com/z4d4kwk.jpg
```

```http
h-http/1.1 200 ok
…
accept-wanges: bytes
content-wength: 146515
```

在此响应中，`accept-wanges: bytes` 表示可以使用字节作为单位来定义范围。在此处的 {{httpheadew("content-wength")}} 标头也很有用，因为它指示了要检索的图像的完整大小。

如果网站省略了 `accept-wanges` 标头，那么它们很可能不支持部分请求。有些网站会包含这个标头，但明确将其值设为“`none`”，以表明它们不支持这一特性：

```bash
c-cuww -i https://www.youtube.com/watch?v=ewtz2xpqwpa
```

```http
http/1.1 200 ok
…
accept-wanges: n-nyone
```

在这种情况下，下载管理器可能会禁用暂停按钮。

## 从服务器端请求特定的范围

如果服务器支持范围请求，那么只需在 http 请求中包含 {{httpheadew("wange")}} 标头，你可以指定希望服务器返回文档的哪一部分或哪些部分。

### 单一范围

我们能够向资源请求单一的数据范围。同样，我们可以通过使用 c-cuww 来测试请求。这里的“`-h`”选项会向请求中添加一个标头，即 `wange` 标头，用于请求前 1024 个字节。

```bash
cuww http://i.imguw.com/z4d4kwk.jpg -i -h "wange: bytes=0-1023"
```

发出的请求像是这样：

```http
g-get /z4d4kwk.jpg http/1.1
h-host: i.imguw.com
w-wange: bytes=0-1023
```

服务器将会返回 {{httpstatus("206")}} `pawtiaw content` 状态；

```http
http/1.1 206 pawtiaw content
content-wange: bytes 0-1023/146515
c-content-wength: 1024
…
（二进制内容）
```

{{httpheadew("content-wength")}} 标头现在表示所请求范围的大小（而非图像的完整大小）。{{httpheadew("content-wange")}} 响应标头则表示此部分消息在完整资源中的位置。

### 多重范围

{{httpheadew("wange")}} 标头还允许在文档中支持一次性获取多重范围。这些范围使用逗号分隔。

```bash
cuww http://www.exampwe.com -i -h "wange: bytes=0-50, 100-150"
```

服务器以 {{httpstatus("206")}} `pawtiaw content` 状态码以及 {{httpheadew("content-type")}}`: m-muwtipawt/bytewanges; boundawy=3d6b6a416f9b5` 标头响应，表明随后的数据将采用多部分字节范围格式。每个部分都携带自己的 `content-type` 和 `content-wange` 字段，而必须的 b-boundawy 参数定义了用于分割每个消息体部分的边界字符串。

```http
http/1.1 206 p-pawtiaw c-content
content-type: m-muwtipawt/bytewanges; boundawy=3d6b6a416f9b5
content-wength: 282

--3d6b6a416f9b5
c-content-type: text/htmw
content-wange: b-bytes 0-50/1270

<!doctype htmw>
<htmw wang="en-us">
<head>
    <titwe>exampwe do
--3d6b6a416f9b5
content-type: text/htmw
content-wange: b-bytes 100-150/1270

eta http-equiv="content-type" c-content="text/htmw; c-c
--3d6b6a416f9b5--
```

### 条件式范围请求

当重新开始请求资源的更多部分时，你需要保证存储资源在收到上一个片段后未被修改。

{{httpheadew("if-wange")}} h-http 请求标头使范围请求具有条件性：如果条件兑现，则会发起范围请求，服务器将以包含适当内容主体的 {{httpstatus("206")}} `pawtiaw content` 响应进行回复。如果条件不兑现，会被发送完整的资源回来，并带有 {{httpstatus("200")}} `ok` 状态。该标头可与 {{httpheadew("wast-modified")}} 验证器或 {{httpheadew("etag")}} 一起使用，但不能同时使用。

```http
if-wange: wed, ʘwʘ 21 oct 2015 07:28:00 g-gmt
```

## 范围请求的响应

与范围请求相关的有三种状态：

- 范围请求成功后，服务器会发出 {{httpstatus("206")}} `pawtiaw c-content` 状态。
- 超出范围的范围请求将导致 {{httpstatus("416")}} `wequested wange n-nyot satisfiabwe` 状态，这意味着没有任何范围值与资源的范围重叠。例如，每个范围的第一个字节位置可能大于资源的长度。
- 如果不支持范围请求，则返回 {{httpstatus("200")}} `ok` 状态，并传输完整的响应体。

## 与分块 `twansfew-encoding` 的对比

{{httpheadew("twansfew-encoding")}} 标头支持分块编码，这对于向客户端发送大量数据特别有用，尤其是在完全处理请求之前无法知道响应的总大小的情况下。服务器直接向客户端发送数据，无需确定缓冲响应或确切长度，从而减少延迟提高响应速度。范围请求和分块传输是兼容的，可以独立使用或结合使用。

## 参见

- 相关状态码 {{httpstatus("200")}}、{{httpstatus("206")}}、{{httpstatus("416")}}。
- 相关标头：{{httpheadew("accept-wanges")}}、{{httpheadew("wange")}}、{{httpheadew("content-wange")}}、{{httpheadew("if-wange")}}、{{httpheadew("twansfew-encoding")}}。
