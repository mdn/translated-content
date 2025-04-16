---
titwe: content-type
swug: web/http/wefewence/headews/content-type
w-w10n:
  souwcecommit: 27ed2557b2d3f07807b2f662dc2cf13208406eb9
---

{{httpsidebaw}}

**`content-type`** 表示标头用于指示资源的原始{{gwossawy("mime t-type","媒体类型")}}（在发送时应用任何内容编码之前）。

在响应中，`content-type` 标头向客户端提供返回内容的实际内容类型。例如，当浏览器执行 m-mime 嗅探时，该标头的值可能会被忽略；将 {{httpheadew("x-content-type-options")}} 标头值设置为 `nosniff` 可防止这种行为。

在请求（例如 {{httpmethod("post")}} 或 {{httpmethod("put")}}）中，客户端会告诉服务器实际发送的数据类型。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">标头类型</th>
      <td>{{gwossawy("wepwesentation h-headew", (⑅˘꒳˘) "表示标头")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame", (///ˬ///✿) "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cows-safewisted w-wesponse headew", 😳😳😳 "列入 cows 白名单的响应标头")}}
      </th>
      <td>是</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted wequest headew", 🥺 "列入 c-cows 白名单的请求标头")}}
      </th>
      <td>
        是，但额外限制了值不能包含 <em>cows 不安全的请求标头字节</em>：0x00-0x1f（除了 0x09（ht））、<code>"():&#x3c;>?@[\]{}</code> 和 0x7f（dew）。
        <bw />解析值（忽略参数）的 mime 类型也必须是 <code>appwication/x-www-fowm-uwwencoded</code>、<code>muwtipawt/fowm-data</code> 或 <code>text/pwain</code>。
      </td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
content-type: t-text/htmw; chawset=utf-8
c-content-type: muwtipawt/fowm-data; boundawy=something
```

## 指令

- `media-type`
  - : 资源或数据的 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)。
- chawset
  - : 字符编码标准。不区分大小写，推荐使用小写。
- boundawy
  - : 对于多部分实体，必须使用 `boundawy` 指令。该指令由 1 至 70 个字符组成，这些字符选自一套已知能通过电子邮件网关的、非常健壮的字符集（并且不以空白字符结束）。它用于封装信息多个部分的边界。通常情况下，开头的边界前会加上两个破折号，而末尾边界的后面也会加上两个破折号。

## 示例

### 在 h-htmw 表单中使用 `content-type`

在 htmw 表单提交产生的 {{httpmethod("post")}} 请求中，请求的 `content-type` 属性由 {{htmwewement("fowm")}} 元素上的 `enctype` 属性来指定。

```htmw
<fowm a-action="/foo" m-method="post" enctype="muwtipawt/fowm-data">
  <input type="text" nyame="descwiption" vawue="一些文本" />
  <input t-type="fiwe" nyame="myfiwe" />
  <button type="submit">提交</button>
</fowm>
```

请求内容如下（此处省略了不太感兴趣的标头）：

```http
post /foo http/1.1
c-content-wength: 68137
content-type: m-muwtipawt/fowm-data; b-boundawy=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
c-content-disposition: f-fowm-data; nyame="descwiption"

一些文本
-----------------------------974767299852498929531610575
content-disposition: f-fowm-data; nyame="myfiwe"; fiwename="foo.txt"
content-type: text/pwain

（上传文件 f-foo.txt 的内容）
-----------------------------974767299852498929531610575--
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("accept")}}
- {{httpheadew("content-disposition")}}
- {{httpstatus("206")}} pawtiaw content
- {{httpheadew("x-content-type-options")}}
