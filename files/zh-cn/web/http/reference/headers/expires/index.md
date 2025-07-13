---
title: Expires
slug: Web/HTTP/Reference/Headers/Expires
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

**`Expires`** 响应标头包含响应应被视为过期的日期/时间。

无效的日期（比如 0）代表过去的日期，即该资源已经过期。

> [!NOTE]
> 如果响应中有指令为 `max-age` 或 `s-maxage` 的 {{HTTPHeader("Cache-Control")}} 标头，则 `Expires` 标头会被忽略。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("Response header", "响应标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "列入 CORS 安全名单的响应标头")}}
      </th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Expires: <http-date>
```

## 指令

- \<http-date>
  - : HTTP 日期时间戳。

## 示例

```http
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
