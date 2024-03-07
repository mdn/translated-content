---
title: If-Range
slug: Web/HTTP/Headers/If-Range
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`If-Range`** HTTP 请求标头用于创建具有条件的范围请求：当条件得到满足时，则发出范围请求，服务器将返回 {{HTTPStatus("206")}} `Partial Content` 状态，以及相应的内容；如果条件没有得到满足，服务器将返回完整的资源以及 {{HTTPStatus("200")}} `OK` 状态。

该标头既可用 {{HTTPHeader("Last-Modified")}} 验证器，也可用 {{HTTPHeader("ETag")}} 验证器，但不能同时使用两者。

最常见的用例是恢复下载，以确保自最后一次片段接收以来，存储的资源没有发生更改。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## 指令

- \<etag>
  - : 唯一代表所请求资源的实体标签。它是用双引号括起的 ASCII 字符串（例如 `"675af34563dc-tr34"`）。这个标头中不能使用弱实体标签（以 `W/` 为前缀）。
- \<day-name>
  - : “Mon”、“Tue”、“Wed”、“Thu”、“Fri”、“Sat”或“Sun”之一（大小写敏感）。
- \<day>
  - : 两位表示日期的数字，例如“04”或“23”。
- \<month>
  - : “Jan”、“Feb”、“Mar”、“Apr”、“May”、“Jun”、“Jul”、“Aug”、“Sep”、“Oct”、“Nov”或“Dec”之一（大小写敏感）。
- \<year>
  - : 四位表示年份的数字，例如“1990”或“2016”。
- \<hour>
  - : 两位表示小时的数字，例如“09”或“23”。
- \<minute>
  - : 两位表示分的数字，例如“04”或“59”。
- \<second>
  - : 两位表示秒的数字，例如“04”或“59”。
- `GMT`
  - : 格林威治时间。HTTP 的日期始终使用 GMT（而不是本地时间）表示。

## 示例

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- [HTTP 条件请求](/zh-CN/docs/Web/HTTP/Conditional_requests)
