---
title: Content-Range
slug: Web/HTTP/Reference/Headers/Content-Range
l10n:
  sourceCommit: beb5d4126bd1e5c838d0fa0eea3e996eb0a9e0b9
---

**`Content-Range`** HTTP 响应标头表示部分消息在完整消息中的位置。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Response header", "响应标头")}}、{{Glossary("Payload header", "有效负载标头")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "列入 CORS 白名单的请求标头")}}
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Content-Range: <unit> <range-start>-<range-end>/<size>
Content-Range: <unit> <range-start>-<range-end>/*
Content-Range: <unit> */<size>
```

## 指令

- \<unit>
  - : 指定范围的单位。通常是字节（`bytes`）。
- \<range-start>
  - : 给定单位中的一个整数，表示所请求范围的起始位置（从零开始，包含起始位置）。
- \<range-end>
  - : 给定单位中的一个整数，表示所请求范围的结束位置（从零开始，包含结束位置）。
- \<size>
  - : 文档的总长度（如果未知，则为 `'*'`）。

## 示例

```http
Content-Range: bytes 200-1000/67589
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
