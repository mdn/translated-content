---
title: Device-Memory
slug: Web/HTTP/Reference/Headers/Device-Memory
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{securecontext_header}}

**`Device-Memory`** [设备客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#设备客户端提示)请求标头的字段指示客户端设备上可用内存的近似大小。该标头属于{{DOMxRef("Device Memory API", "设备内存 API", "", "nocode")}}。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Request header", "请求标头")}}、<a href="/zh-CN/docs/Web/HTTP/Guides/Client_hints">客户端提示</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
>
> - 客户端提示仅在安全来源（通过 TLS）上可用。
> - 服务器必须通过发送 {{HTTPHeader("Accept-CH")}} 响应标头，才能接收来自客户端的 `Device-Memory` 标头。
> - 选择加入 `Device-Memory` 客户端提示的服务器通常也会在 {{HTTPHeader("Vary")}} 标头中指定它。这会通知缓存服务器：服务器可能会根据请求中的标头值发送不同的响应。

## 语法

```http
Device-Memory: <number>
```

## 指令

- `<number>`
  - : 设备内存的近似大小。可能的值有：`0.25`、`0.5`、`1`、`2`、`4`、`8`。

设备内存的大小可被用作{{glossary("fingerprinting", "指纹识别")}}的变量，因此标头的值故意设置得很粗略，以减小其被滥用的可能性。

## 示例

服务器需要先发送包含 `Device-Memory` 的 {{HTTPHeader("Accept-CH")}} 响应标头，来选择接收 `Device-Memory` 请求标头。

```http
Accept-CH: Device-Memory
```

接下来客户端发送的请求则可能会包含 `Device-Memory` 请求头：

```http
Device-Memory: 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [利用用户代理客户端提示改善用户隐私并提升开发者体验](https://developer.chrome.google.cn/docs/privacy-security/user-agent-client-hints)（developer.chrome.google.cn）
- {{DOMxRef("Device Memory API", "设备内存 API", "", "nocode")}}
- {{DOMxRef("Navigator.deviceMemory")}}
- {{DOMxRef("WorkerNavigator.deviceMemory")}}
- 设备客户端提示
  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP 缓存 > Vary 响应](/zh-CN/docs/Web/HTTP/Guides/Caching#vary_响应)和 {{HTTPHeader("Vary")}}
