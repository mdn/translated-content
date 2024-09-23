---
title: Sec-CH-UA
slug: Web/HTTP/Headers/Sec-CH-UA
---

{{HTTPSidebar}} {{SeeCompatTable}} {{securecontext_header}}

**`Sec-CH-UA`** [用户代理客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#user-agent_client_hints)请求标头（header）提供用户代理的品牌（brand）和重要的版本信息。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/zh-CN/docs/Web/HTTP/Client_hints">客户端提示</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

**`Sec-CH-UA`** 标头在以逗号分隔的列表中提供与浏览器关联的每个品牌的品牌和重要版本。品牌是用户代理的商业名称，例如：Chromium、Opera、Google Chrome、Microsoft Edge、Firefox 和 Safari。用户代理可能有多个关联的品牌。例如，Opera、Chrome 和 Edge 都基于 Chromium，并将在 **`Sec-CH-UA`** 标头中提供这两个品牌。

_significant version_ 是`市场`版本标识符，用于区分品牌的主要版本。例如，完整版本号为“96.0.4664.45”的 Chromium 的重要版本号是“96”。因此，标头允许服务器根据共享品牌及其各自特定自定义版本来自定义其响应。

`Sec-CH-UA` 是一个[低熵提示](/zh-CN/docs/Web/HTTP/Client_hints#low_entropy_hints)。除非被用户代理权限策略阻止，否则默认情况下会发送它，而不需要通过服务器发送 {{HTTPHeader("Accept-CH")}} 来选择是否发送。

标头可以包含任何位置和任何名称的“假冒”品牌。此功能旨在防止服务器直接拒绝未知的用户代理，迫使用户代理在品牌标识上撒谎。

> **备注：** {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} 与 **`Sec-CH-UA`** 相同，但前者包含完整版本号，而不是每个品牌的重要版本号。

## 语法

用户代理品牌列表中以逗号分隔的品牌列表及其关联的有效版本号。单个条目的语法具有以下格式：

```http
Sec-CH-UA: "<brand>";v="<significant version>", ...
```

### 指令

- `<brand>`
  - : 与用户代理关联的品牌，例如“Chromium”、“Google Chrome”，又或是故意不正确的品牌，例如 `"Not A;Brand"`.
- `<significant version>`
  - : 与可区分的 Web 公开功能关联的“市场”版本号。

## 示例

`Sec-CH-UA` 是一个[低熵提示](/zh-CN/docs/Web/HTTP/Client_hints#low_entropy_hints)。除非被用户代理策略明确阻止，否则它将在所有请求中发送（无需通过服务器发送 {{HTTPHeader("Accept-CH")}} 来选择是否发送）。

来自 Chromium、Chrome、Edge 和 Opera 桌面浏览器的字符串如下所示。请注意，它们都共享“Chromium”品牌，但有一个额外的品牌表明其来源。它们还具有故意不正确的品牌字符串，该字符串可能出现在任何位置并具有不同的文本。

```http
Sec-CH-UA: "(Not(A:Brand";v="8", "Chromium";v="98"
```

```http
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
```

```http
Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Microsoft Edge";v="96"
```

```http
Sec-CH-UA: "Opera";v="81", " Not;A Brand";v="99", "Chromium";v="95"
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
