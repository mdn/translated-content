---
title: Server
slug: Web/HTTP/Headers/Server
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Server`** 标头描述了处理请求的源服务器（即生成响应的服务器）所使用的软件。

> [!WARNING]
> 避免使用过于详细的 `Server` 值，因为它们可能会透露信息，使攻击者（更容易）利用已知的安全漏洞。

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
Server: <product>
```

## 指令

- \<product>
  - : 处理请求的软件或产品名称。通常格式类似于 {{HTTPHeader('User-Agent')}}。

包含多少细节是一个需要平衡的问题；暴露操作系统版本可能是个坏主意，正如前面关于过于详细的值的警告所提到的。不过，暴露的 Apache 版本可以帮助浏览器解决版本中的一个错误，即结合使用 {{HTTPHeader('Content-Encoding')}} 和 {{HTTPHeader('Range')}}。

## 示例

```http
Server: Apache/2.4.1 (Unix)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Allow")}}
