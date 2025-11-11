---
title: Sec-CH-UA-Arch
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Arch
---

{{SeeCompatTable}} {{securecontext_header}}

**`Sec-CH-UA-Arch`** [用户代理客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints)请求标头提供了用户代理的底层 CPU 架构，例如 ARM 或 x86。

例如，服务器可以使用它来选择并提供可执行文件的正确二进制格式供用户下载。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/zh-CN/docs/Web/HTTP/Guides/Client_hints">客户端提示</a>
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
Sec-CH-UA-Arch: <arch>
```

### 指令

- `<arch>`
  - : 指示底层平台架构的字符串，例如 `"x86"`、`"ARM"`、`"[arm64-v8a, armeabi-v7a, armeabi]"` 等。

## 示例

服务器通过在响应客户端的某些请求时包含 {{HTTPHeader("Accept-CH")}} 来请求 `Sec-CH-UA-Arch` 标头，并使用所需标头的名称作为令牌：

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Arch
```

客户端可以选择提供提示，并将 `Sec-CH-UA-Arch` 标头添加到后续请求中。例如，在基于 Windows X86 的计算机上，客户端可能会添加如下所示标头：

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Arch: "x86"
```

请注意，即使服务器响应中未指定，[低熵标头](/zh-CN/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)也会被添加到请求中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints)
- [用户代理客户端提示 API](/zh-CN/docs/Web/API/User-Agent_Client_Hints_API)
- [通过用户代理客户端提示改善用户隐私和开发人员体验](https://developer.chrome.google.cn/docs/privacy-security/user-agent-client-hints)（developer.chrome.google.cn）
- {{HTTPHeader("Accept-CH")}}
- [HTTP 缓存 > Vary 响应](/zh-CN/docs/Web/HTTP/Guides/Caching#vary_响应)和 {{HTTPHeader("Vary")}}
