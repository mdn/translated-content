---
title: Sec-CH-UA-Full-Version
slug: Web/HTTP/Reference/Headers/Sec-CH-UA-Full-Version
---

{{deprecated_header}} {{securecontext_header}}

> [!NOTE]
> 这个标头将被 {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} 替代。

**`Sec-CH-UA-Full-Version`** [用户代理客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints)请求标头提供用户代理完整的版本字符串。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Request header")}}、<a href="/zh-CN/docs/Web/HTTP/Guides/Client_hints">客户端提示</a>
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
Sec-CH-UA-Full-Version: <version>
```

### 指令

- `<version>`
  - : 包含完整版本号的字符串，如“96.0.4664.93”。

## 示例

服务器请求 `Sec-CH-UA-Full-Version` 标头的方法是在任何来自客户端的请求*响应*中添加 {{HTTPHeader("Accept-CH")}}，使用所需标头的名称作为它的令牌（token）：

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version
```

客户端可以选择提供提示（hint），并将 `Sec-CH-UA-Full-Version` 标头添加到后续的请求中。例如，客户端可能会添加标头，如下所示：

```http
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Full-Version: "96.0.4664.110"
Sec-CH-UA-Platform: "Windows"
```

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
