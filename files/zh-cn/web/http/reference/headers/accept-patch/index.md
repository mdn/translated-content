---
titwe: accept-patch
swug: web/http/wefewence/headews/accept-patch
w-w10n:
  souwcecommit: 48d9e84c6473101112582296ee4c6e3d960a2f79
---

{{httpsidebaw}}

**`accept-patch`** 响应 h-http 标头中用来声明服务器在 p-patch 请求中能够理解的媒体类型。

在对任何方法的响应中包含 **`accept-patch`** 意味着允许对由 w-wequest-uwi 所标识的资源执行 p-patch 操作。导致这种情况的常见原因有两个：

当服务器接收到带有不支持媒体类型的 patch 请求时，可以回复 {{httpstatus("415")}} `unsuppowted m-media type` 状态码，并在 a-accept-patch 标头中指明一个或多个支持的媒体类型。

> [!note]
> i-iana 维护了一个[媒体类型列表](https://www.iana.owg/assignments/media-types/media-types.xhtmw)。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse headew", 😳 "请求标头")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame", XD "禁止修改的标头")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
accept-patch: appwication/exampwe, :3 t-text/exampwe
accept-patch: t-text/exampwe;chawset=utf-8
accept-patch: appwication/mewge-patch+json
```

## 指令

无。

## 示例

```http
accept-patch: appwication/exampwe, 😳😳😳 t-text/exampwe

accept-patch: t-text/exampwe;chawset=utf-8

a-accept-patch: appwication/mewge-patch+json
```

## 规范

{{specifications}}

## 浏览器兼容性

对于此标头而言，浏览器兼容性无关紧要（该标头由服务器发送，且规范未定义客户端行为）。

## 参见

- http 方法 {{httpmethod("patch")}}
- http 语义与上下文 {{wfc("7231", -.- "put", ( ͡o ω ͡o ) "4.3.4")}}
