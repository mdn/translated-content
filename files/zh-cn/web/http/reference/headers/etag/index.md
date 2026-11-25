---
title: ETag
short-title: ETag
slug: Web/HTTP/Reference/Headers/ETag
l10n:
  sourceCommit: 099a15b4234071958980dcae0e122a7145fdbdfa
---

HTTP **`ETag`**（实体标签）{{Glossary("response header", "响应标头")}}是资源特定版本的标识符。它可以让[缓存](/zh-CN/docs/Web/HTTP/Guides/Caching)更高效并节省带宽，因为如果内容没有变化，Web 服务器无需重新发送完整响应。此外，ETag 还有助于防止对同一资源的并发更新相互覆盖（[“空中碰撞”](#避免空中碰撞)）。

如果给定 URL 上的资源发生变化，则*必须*生成新的 `ETag` 值。通过比较 ETag 值，可以判断资源的两个表示是否相同。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}、{{Glossary("Representation header", "表示标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止修改的请求标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
ETag: W/"<etag_value>"
ETag: "<etag_value>"
```

## 指令

- `W/` {{optional_inline}}
  - : `W/`（区分大小写）表示使用[弱验证器](/zh-CN/docs/Web/HTTP/Guides/Conditional_requests#弱验证类型)。弱 ETag 易于生成，但用于比较时用处要小得多。强验证器是用于比较的理想选择，但可能很难高效地生成。同一资源的两个表示的弱 `ETag` 值可能在语义上等价，但并非逐字节完全相同。这意味着使用[字节范围请求](/zh-CN/docs/Web/HTTP/Reference/Headers/Accept-Ranges)时，弱 ETag 会阻止缓存，而强 ETag 意味着范围请求仍然可以被缓存。
- `<etag_value>`
  - : 唯一表示所请求资源的实体标签。它是由 {{Glossary("ASCII")}} 字符组成的字符串，放在双引号之间，例如 `"675af34563dc-tr34"`。`ETag` 值的生成方法并未规定。通常，ETag 值是内容的散列、最后修改时间戳的散列，或者只是一个修订号。例如，wiki 引擎可以使用文档文章内容的十六进制散列。

## 示例

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### 避免空中碰撞

借助 `ETag` 和 {{HTTPHeader("If-Match")}} 标头，你可以检测编辑过程中的空中碰撞（冲突）。

例如，在编辑 wiki 时，可以计算当前 wiki 内容的散列并将其放入响应的 `ETag` 标头中：

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

在保存对 wiki 页面所做的更改（提交数据）时，{{HTTPMethod("POST")}} 请求将包含 {{HTTPHeader("If-Match")}} 标头，其中带有用于检查新鲜度的 `ETag` 值。

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

如果散列值不匹配，则说明文档在此期间已被编辑，将抛出 {{HTTPStatus("412", "412 Precondition Failed")}} 错误。

### 缓存未更改的资源

`ETag` 标头的另一个典型用途是缓存未更改的资源。如果用户再次访问某个给定 URL（该响应设置了 `ETag`），而缓存的资源已经*陈旧*（太旧而无法视为可用），客户端会在 {{HTTPHeader("If-None-Match")}} 标头字段中一并发送其 `ETag` 值：

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

服务器将客户端的 `ETag`（随 `If-None-Match` 发送）与其当前版本资源的 `ETag` 进行比较。如果两个值匹配（即资源没有变化），服务器会返回不带响应体的 {{HTTPStatus("304", "304 Not Modified")}} 状态码，告诉客户端缓存的响应版本仍然可以使用（仍然*新鲜*）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("If-Match")}}、{{HTTPHeader("If-None-Match")}} 标头
- {{HTTPStatus("304", "304 Not Modified")}}、{{HTTPStatus("412", "412 Precondition Failed")}} 响应状态码
- [W3C 说明：编辑 Web——使用非保留检出检测丢失更新问题](https://www.w3.org/1999/04/Editing/)
