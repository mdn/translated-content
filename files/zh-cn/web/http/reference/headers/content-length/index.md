---
title: Content-Length
slug: Web/HTTP/Reference/Headers/Content-Length
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

HTTP **`Content-Length`** 标头表示发送给接收方的消息体的大小（以字节为单位）。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Request header", "请求标头")}}、{{Glossary("Response header", "响应标头")}}、{{Glossary("Content header", "内容标头")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>是</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "列入 CORS 白名单的响应标头")}}
      </th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Content-Length: <length>
```

## 指令

- `<length>`
  - : 以字节为单位的长度。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Transfer-Encoding")}}
