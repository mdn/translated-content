---
title: Vary
slug: Web/HTTP/Reference/Headers/Vary
---

**`Vary`** HTTP 响应标头描述了除方法和 URL 之外影响响应内容的请求消息。大多数情况下，这用于在使用[内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)时创建缓存键。

给定 URL 的所有响应都应使用相同的 `Vary` 标头值，包括 {{HTTPStatus("304")}} `Not Modified` 响应和“默认”响应。

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
  </tbody>
</table>

## 语法

```http
Vary: *
Vary: <header-name>, <header-name>, ...
```

## 指令

- \*
  - : 表示请求标头以外的因素影响了此响应的生成。意味着响应不可缓存。
- \<header-name>
  - : 可能影响此响应生成的请求标头名称的逗号分隔列表。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 兼容性备注

- [小心使用 Vary – Vary 标头在 IE6-9 的问题](https://docs.microsoft.com/archive/blogs/ieinternals/vary-with-care)

## 参见

- [理解 Vary 标头 - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [使用 Vary 标头的最佳实践 – fastly.com](https://www.fastly.com/blog/best-practices-using-vary-header)
- [内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)
