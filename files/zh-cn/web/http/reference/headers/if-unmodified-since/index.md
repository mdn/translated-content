---
title: If-Unmodified-Since 标头
short-title: If-Unmodified-Since
slug: Web/HTTP/Reference/Headers/If-Unmodified-Since
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP 的 **`If-Unmodified-Since`** {{Glossary("request header", "请求标头")}}使对资源的请求变为[条件请求](/zh-CN/docs/Web/HTTP/Guides/Conditional_requests)。服务器仅在请求头中指定的日期之后该资源未被修改的情况下，才会发送所请求的资源（或在 {{HTTPMethod("POST")}} 等非{{Glossary("Safe/HTTP", "安全")}}方法中接受请求）。如果资源在指定日期之后已被修改，服务器将返回 {{HTTPStatus("412", "412 Precondition Failed")}} 错误响应。

`If-Unmodified-Since` 标头通常用于以下情况：

- 当与 {{HTTPMethod("POST")}} 等非{{Glossary("Safe/HTTP", "安全")}}方法结合使用时，此标头可用于实现[乐观并发控制](https://zh.wikipedia.org/wiki/乐观并发控制)（例如某些 Wiki 系统的做法）：如果自上次获取以来存储的文档已被修改，则会拒绝修订请求，从而避免冲突。
- 当与 {{HTTPHeader("Range")}} 标头一起用于范围请求时，该标头可确保新请求的内容片段来自未被修改的文档。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header" , "禁止修改的请求标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## 指令

- `<day-name>`
  - : `Mon`、`Tue`、`Wed`、`Thu`、`Fri`、`Sat` 或 `Sun` 之一（区分大小写）。
- `<day>`
  - : 两位数的日期数字，例如“04”或“23”。
- `<month>`
  - : `Jan`、`Feb`、`Mar`、`Apr`、`May`、`Jun`、`Jul`、`Aug`、`Sep`、`Oct`、`Nov`、`Dec` 之一（区分大小写）。
- `<year>`
  - : 四位数的年份，例如“1990”或“2016”。
- `<hour>`
  - : 两位数的小时数，例如“09”或“23”。
- `<minute>`
  - : 两位数的分钟数，例如“04”或“59”。
- `<second>`
  - : 两位数的秒数，例如“04”或“59”。
- GMT
  - : 格林威治标准时间。HTTP 日期总是以 GMT 表示，而不是本地时间。

## 示例

```http
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTTP 条件请求](/zh-CN/docs/Web/HTTP/Guides/Conditional_requests)指南
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("If-Range")}}、{{HTTPHeader("Range")}} 范围请求标头
- {{HTTPHeader("If-Match")}}、{{HTTPHeader("If-Modified-Since")}}、{{HTTPHeader("If-None-Match")}} 条件请求标头
- {{HTTPStatus("304", "304 Not Modified")}}、{{HTTPStatus("412", "412 Precondition Failed")}} 响应状态码
