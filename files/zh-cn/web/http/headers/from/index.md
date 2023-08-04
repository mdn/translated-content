---
title: From
slug: Web/HTTP/Headers/From
---

{{HTTPSidebar}}

请求首部 **`From`** 中包含一个电子邮箱地址，这个电子邮箱地址属于发送请求的用户代理的实际掌控者的人类用户。

如果你在运行一个机器人代理程序（比如爬虫），那么 Form 首部应该随请求一起发送，这样的话，在服务器遇到问题的时候，例如机器人代理发送了过量的、不希望收到的或者不合法的请求，站点管理员可以联系到你。

> **警告：** 不可以将 From 首部用于访问控制或者身份验证。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
From: <email>
```

## 指令

- \<email>
  - : 一个机器可识别的电子邮箱地址。

## 示例

```plain
From: webmaster@example.org
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPHeader("Host")}}
