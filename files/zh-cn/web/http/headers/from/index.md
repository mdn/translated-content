---
title: From
slug: Web/HTTP/Headers/From
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`From`** 请求标头包含控制发起请求的用户代理的人类用户的互联网电子邮件地址。

如果运行的是机器人用户代理（如爬虫），则必须发送 `From` 标头，以便在服务器出现问题（例如机器人发送过多、不希望收到或无效的请求）时与你联系。

> [!WARNING]
> 不可以将 `From` 标头用于访问控制或身份验证。

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
From: <email>
```

## 指令

- \<email>
  - : 机器可识别的电子邮箱地址。

## 示例

```http
From: webmaster@example.org
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Host")}}
