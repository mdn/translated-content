---
title: Age
slug: Web/HTTP/Reference/Headers/Age
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

**`Age`** 标头包含对象在代理缓存中停留的时间，以秒为单位。

`Age` 标头通常接近于 0。如果显示为 `Age: 0`，则表示该内容可能是从源服务器上获取的；否则，它通常是通过代理服务器当前日期与 HTTP 响应中包含的 {{HTTPHeader("Date")}} 通用标头之间的差值来计算得出的。

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
Age: <delta-seconds>
```

## 指令

- \<delta-seconds>
  - : 一个非负整数，表示对象在代理缓存中停留的时间，以秒为单位。

## 示例

```http
Age: 24
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
