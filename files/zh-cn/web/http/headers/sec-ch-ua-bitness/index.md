---
title: Sec-CH-UA-Bitness
slug: Web/HTTP/Headers/Sec-CH-UA-Bitness
---

{{HTTPSidebar}} {{SeeCompatTable}} {{securecontext_header}}

**`Sec-CH-UA-Bitness`** [用户代理客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#user-agent_client_hints)请求标头提供用户代理底层 CPU 架构（architecture）的“位数”。这是一种以位为单位的指示内存地址大小的整数，通常为 64 位或 32 位。

这个标头可能被服务器用作类似选择并提供可执行文件的正确二进制格式供用户下载等用途。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Request header", "请求标头")}}、<a href="/zh-CN/docs/Web/HTTP/Client_hints">客户端提示</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Sec-CH-UA-Bitness: <bitness>
```

## 指令

- `<bitness>`
  - : 指示基础平台架构位数的字符串，例如：`"64"`、`"32"`。

## 示例

服务器通过在来自客户端的任何请求的*响应*中包含 {{HTTPHeader("Accept-CH")}} 来请求 `Sec-CH-UA-Bitness` 标头，并使用所需标头的名称作为令牌：

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Bitness
```

客户端可以选择提供提示，并将 `Sec-CH-UA-Bitness` 标头添加到后续请求中。例如，在基于 Windows 的 64 位计算机上，客户端可能会添加标头，如下所示：

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Bitness: "64"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [客户端提示](/zh-CN/docs/Web/HTTP/Client_hints)
- [用户代理客户端提示 API](/zh-CN/docs/Web/API/User-Agent_Client_Hints_API)
- [通过用户代理客户端提示改善用户隐私和开发人员体验](https://developer.chrome.google.cn/docs/privacy-security/user-agent-client-hints)（developer.chrome.google.cn）
- {{HTTPHeader("Accept-CH")}}
- [HTTP 缓存 > Vary 响应](/zh-CN/docs/Web/HTTP/Caching#vary_响应)和 {{HTTPHeader("Vary")}}
