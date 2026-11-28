---
title: Sec-Fetch-Site
slug: Web/HTTP/Reference/Headers/Sec-Fetch-Site
l10n:
  sourceCommit: 7e4e8954972d77196e4beedca4a3f8610da34dc9
---

HTTP **`Sec-Fetch-Site`** [fetch 元数据请求标头](/zh-CN/docs/Web/HTTP/Guides/Fetch_metadata)表明了请求发起者的来源与所请求资源的来源之间的关系。

换句话说，该标头告诉服务器某个资源请求是来自同一源、同一站点、不同站点，还是“由用户发起”的请求。服务器随后可以利用此信息来决定是否允许该请求。

同源请求通常默认会被允许，但来自其他源的请求如何处理，可能进一步取决于所请求的资源，或其他 fetch 元数据请求标头中的信息。默认情况下，不被接受的请求应以 {{HTTPStatus("403")}} 响应码被拒绝。

该标头只会包含在发往[潜在可信 URL](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts#上下文何时是安全的) 的请求中。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Fetch Metadata Request Header", "fetch 元数据请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>是（<code>Sec-</code> 前缀）</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Sec-Fetch-Site: cross-site
Sec-Fetch-Site: same-origin
Sec-Fetch-Site: same-site
Sec-Fetch-Site: none
```

## 指令

- `cross-site`
  - : 请求发起者与托管资源的服务器属于不同的站点（即“potentially-evil.com”向“example.com”上的资源发起的请求）。
- `same-origin`
  - : 请求发起者与托管资源的服务器具有相同的{{Glossary("origin", "源")}}（相同的协议、主机和端口）。
- `same-site`
  - : 请求发起者与托管资源的服务器属于同一{{Glossary("site", "站点")}}，包括协议在内。
- `none`
  - : 该请求是由用户发起的操作。例如：在地址栏中输入 URL、打开书签，或将文件拖放到浏览器窗口中。

## 示例

从 `https://mysite.example` 上的网页（端口相同）向 `https://mysite.example/foo.json` 发起的 fetch 请求属于同源请求。浏览器会生成如下所示的 `Sec-Fetch-Site: same-origin` 标头，服务器通常会允许该请求：

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
```

从其他站点（例如 `potentially-evil.com`）向相同 URL 发起的 fetch 请求会导致浏览器生成不同的标头（例如 `Sec-Fetch-Site: cross-site`），服务器可以选择接受或拒绝该请求：

```http
GET /foo.json
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- fetch 元数据请求标头：{{HTTPHeader("Sec-Fetch-Mode")}}、{{HTTPHeader("Sec-Fetch-User")}}、{{HTTPHeader("Sec-Fetch-Dest")}}
- [使用 Fetch 元数据保护你的资源免受网络攻击](https://web.developers.google.cn/articles/fetch-metadata)（web.developers.google.cn）
- [Fetch 元数据请求标头演练场](https://secmetadata.appspot.com/)（secmetadata.appspot.com）
