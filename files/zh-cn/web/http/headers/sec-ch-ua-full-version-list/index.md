---
title: Sec-CH-UA-Full-Version-List
slug: Web/HTTP/Headers/Sec-CH-UA-Full-Version-List
---

{{HTTPSidebar}} {{SeeCompatTable}} {{securecontext_header}}

**`Sec-CH-UA-Full-Version-List`** [用户代理客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#user-agent_client_hints)请求标头提供用户代理的品牌和完整版本信息。

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

**`Sec-CH-UA-Full-Version-List`** 标头以逗号分隔的列表提供与每个浏览器关联的品牌的名称和完整版本信息。

品牌是用户代理的商业名称，例如：Chromium、Opera、Google Chrome、Microsoft Edge、Firefox 和 Safari。用户代理可能有多个关联的品牌。例如，Opera、Chrome 和 Edge 都基于 Chromium，并将在 **`Sec-CH-UA-Full-Version-List`** 标头中会提供这两个品牌。

因此，标头允许服务器根据共享品牌及其各自特定版本中的特定自定义项（particular customizations）来自定义其响应。

标头可能包含任何位置和任何名称的“假冒”品牌。此功能旨在防止服务器直接拒绝未知用户代理，迫使用户代理在其品牌标识上撒谎。

> **备注：** 这类似于 {{HTTPHeader("Sec-CH-UA")}}，但包含完整的版本号，而不是每个品牌的重要版本号。

## 语法

用户代理品牌列表中以逗号分隔的品牌列表及其关联的完整版本号。单个条目的语法具有以下格式：

```http
Sec-CH-UA-Full-Version-List: "<brand>";v="<full version>", ...
```

### 指令

- `<brand>`
  - : 与用户代理相关的品牌，如“Chromium”和“Google Chrome”。
    这可能是一个故意不正确的品牌，如 `" Not A;Brand"` 或 `"(Not(A:Brand"`（实际值是预期随时间变化且不可预测的）。
- `<full version>`
  - : 完整的版本号，例如 98.0.4750.0。

## 示例

服务器通过在来自客户端的任何请求的*响应*中包含 {{HTTPHeader("Accept-CH")}} 来请求 `Sec-CH-UA-Full-Version-List` 标头，并使用所需标头的名称作为令牌：

```http
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version-List
```

客户端可以选择提供提示，并将 `Sec-CH-UA-Full-Version-List` 标头添加到后续请求中，如下所示：

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Full-Version-List: " Not A;Brand";v="99.0.0.0", "Chromium";v="98.0.4750.0", "Google Chrome";v="98.0.4750.0"
Sec-CH-UA-Platform: "Linux"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [客户端提示](/zh-CN/docs/Web/HTTP/Client_hints)
- [用户代理客户端提示 API](/zh-CN/docs/Web/API/User-Agent_Client_Hints_API)
- [通过用户代理客户端提示改善用户隐私和开发人员体验](https://web.dev/user-agent-client-hints/)（web.dev）
- {{HTTPHeader("Accept-CH")}}
- [HTTP 缓存 > Vary 响应](/zh-CN/docs/Web/HTTP/Caching#vary_响应)和 {{HTTPHeader("Vary")}}
