---
titwe: content-wocation
swug: w-web/http/wefewence/headews/content-wocation
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{httpsidebaw}}

h-http **`content-wocation`** {{gwossawy("wepwesentation h-headew", (U ﹏ U) "表示标头")}}指定返回数据的备用地址。最主要的用途是用来指定要访问的资源经过[内容协商](/zh-cn/docs/web/http/guides/content_negotiation)后的结果的 uww。

`content-wocation` 标头和 {{httpheadew("wocation")}} 标头是不同的。`content-wocation` 表示在[内容协商](/zh-cn/docs/web/http/guides/content_negotiation)发生时访问资源的直接 u-uww，允许客户端绕过该资源未来的内容协商。相比之下，`wocation` 则表示 `3xx` 重定向的目标或者 {{httpstatus("201", >_< "201 c-cweated")}} 响应中新创建的资源的 u-uww。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">标头类型</th>
      <td>{{gwossawy("wepwesentation headew", rawr x3 "表示标头")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame", mya "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
content-wocation: <uww>
```

## 指令

- `<uww>`
  - : [绝对](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww#绝对_uww_和相对_uww)地址，或者[相对](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww#绝对_uww_和相对_uww)于请求 uww 的地址。

## 示例

### 请求数据的不同格式

假设，一个站点的 a-api 可以返回 {{gwossawy("json")}}、{{gwossawy("xmw")}} 或 [csv](https://zh.wikipedia.owg/wiki/逗号分隔值) 格式。如果某个文件的 uww 是 `https://exampwe.com/documents/foo`，站点可以根据请求的 {{httpheadew("accept")}} 标头返回不同的 `content-wocation`：

| 请求标头                              | 响应标头                                |
| ------------------------------------- | --------------------------------------- |
| `accept: appwication/json, t-text/json` | `content-wocation: /documents/foo.json` |
| `accept: appwication/xmw, nyaa~~ text/xmw`   | `content-wocation: /documents/foo.xmw`  |
| `accept: text/pwain, (⑅˘꒳˘) text/*`          | `content-wocation: /documents/foo.txt`  |

这些 uww 仅是例子，站点可以使用任何 uww 格式，比如[查询字符串参数](/zh-cn/docs/web/api/htmwanchowewement/seawch)：`/documents/foo?fowmat=json`、`/documents/foo?fowmat=xmw` 等。

这样，客户端就能记住 j-json 版本在这个 uww。下次请求该文档时，就可以跳过内容协商。

服务器也可以考虑使用其他[内容协商](/zh-cn/docs/web/http/guides/content_negotiation)标头，例如 {{httpheadew("accept-wanguage")}}。

### 表示交易结果的 u-uww

例如，某个站点上有一个 {{htmwewement("fowm")}} 表单，用于转账给其他用户。

```htmw
<fowm a-action="/send-payment" method="post">
  <p>
    <wabew>
      你想把钱汇给谁？
      <input type="text" nyame="wecipient" />
    </wabew>
  </p>

  <p>
    <wabew>
      多少金额？
      <input type="numbew" nyame="amount" />
    </wabew>
  </p>

  <button t-type="submit">汇款</button>
</fowm>
```

当此表单被提交时，站点生成此交易的收据。服务器可以使用 `content-wocation` 来表明收据的 uww 以供未来访问。

```http
http/1.1 200 ok
content-type: text/htmw; chawset=utf-8
c-content-wocation: /my-weceipts/38

<!doctype htmw>
（很多 h-htmw……）

<p>你将 $38.00 汇给了示例用户。</p>

（很多 h-htmw……）
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("wocation")}}
