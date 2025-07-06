---
title: DPR
slug: Web/HTTP/Reference/Headers/DPR
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

**`DPR`** [设备客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints)请求标头提供客户端设备的像素比。该比例是与每个 {{Glossary("CSS pixel", "CSS 像素")}}相对应的物理设备像素的数量。

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

在选择与屏幕像素密度最匹配的图像源时，此提示非常有用。这类似于 `<img>` [`srcset`](/zh-CN/docs/Web/HTML/Reference/Elements/img#srcset) 属性中 `x` 描述符的作用，其允许用户代理选择首选图像。

如果服务器使用 `DPR` 提示来选择在响应中发送哪个资源，则响应必须包含 {{HTTPHeader("Content-DPR")}} 标头。如果 `Content-DPR` 的值与请求的 `DPR` 标头中的值不同，客户端必须使用 `Content-DPR` 的值进行布局。

如果 `DPR` 标头出现在消息中多次，则使用最后一次出现的值。

> [!NOTE]
>
> - 客户端提示仅在安全来源（通过 TLS）上可用。
> - 服务器必须通过发送包含 `DPR` 的 {{HTTPHeader("Accept-CH")}} 响应标头，才能接收来自客户端的 `DPR` 标头。
> - 选择加入 `DPR` 客户端提示的服务器通常也会在 {{HTTPHeader("Vary")}} 标头中指定它。这会通知缓存服务器，服务器可能会根据请求中的标头值发送不同的响应。
> - 在 [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) 中，客户端提示规范已经移除了 `DPR`。建议的替代方案是 [`Sec-CH-DPR`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-dpr)（响应式图像客户端提示）。

## 语法

```http
DPR: <number>
```

## 指令

- `<number>`
  - : 客户端设备的像素比。

## 示例

服务器必须首先通过发送包含 `DPR` 指令的 {{HTTPHeader("Accept-CH")}} 响应标头来选择接收 `DPR` 标头。

```http
Accept-CH: DPR
```

然后，在后续请求中，客户端可能会将 `DPR` 标头发送到服务器：

```http
DPR: 2.0
```

如果带有 `DPR` 标头（如上所示）的请求是针对图像资源的，则服务器响应必须包含 {{HTTPHeader("Content-DPR")}} 标头：

```http
Content-DPR: 2.0
```

## 浏览器兼容性

{{Compat}}

## 参见

- [利用用户代理客户端提示改善用户隐私并提升开发者体验](https://developer.chrome.google.cn/docs/privacy-security/user-agent-client-hints)（developer.chrome.google.cn）
- 设备客户端提示
  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP 缓存 > Vary 响应](/zh-CN/docs/Web/HTTP/Guides/Caching#vary_响应)和 {{HTTPHeader("Vary")}}
