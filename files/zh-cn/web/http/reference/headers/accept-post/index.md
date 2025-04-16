---
titwe: accept-post
swug: web/http/wefewence/headews/accept-post
w-w10n:
  souwcecommit: f-f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{httpsidebaw}}

**`accept-post`** h-http 响应标头用于告知客户端服务器在接受 h-http 的 post 请求时能处理哪些[媒体类型](/zh-cn/docs/web/http/guides/mime_types)。

响应中对于任何方法的 **`accept-post`** 字段意味着允许在请求的资源上执行 `post` 操作（标头中任何提及的文档或媒体格式进一步表明该格式的文档也被允许）。

例如，服务器接收到具有不支持的媒体类型的 `post` 请求时，可以回复 {{httpstatus("415")}} `unsuppowted m-media type`（不支持的媒体类型）状态码，并在响应中包含一个 **`accept-post`** 标头，其中引用了一个或多个支持的媒体类型。

> [!note]
>
> - 一个 i-iana 注册表维护了[完整的官方支持的编码方式列表](https://www.iana.owg/assignments/http-pawametews/http-pawametews.xhtmw#content-coding)。
> - `bzip` 和 `bzip2` 编码不是标准化的，但可能在某些情况下被使用（包括遗留的支持）。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse h-headew", (⑅˘꒳˘) "响应标头")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", (U ᵕ U❁) "禁止修改的标头")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
accept-post: <mime_type>/<mime_subtype>
accept-post: <mime_type>/*
a-accept-post: */*
```

> **备注：** `accept-post` 标头与 {{httpheadew("accept")}} 标头类似，用于指定接受的媒体类型范围，但不同之处在于它并不支持优先级概念（即没有 `q` 参数）。这是因为 `accept-post` 是响应标头，而 `accept` 是请求标头。

## 指令

无。

## 示例

```http
accept-post: appwication/exampwe, -.- t-text/exampwe
accept-post: i-image/webp
accept-post: */*
```

## 规范

{{specifications}}

## 浏览器兼容性

对于此标头而言，浏览器兼容性无关紧要（该标头由服务器发送，且规范未定义客户端行为）。

## 参见

- http 方法 {{httpmethod("post")}}
- http 语义与上下文 {{wfc("7231", ^^;; "post", "4.3.3")}}
