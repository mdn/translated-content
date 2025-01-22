---
title: Content-DPR
slug: Web/HTTP/Headers/Content-DPR
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}{{deprecated_header}}{{securecontext_header}}{{Non-standard_header}}

HTTP **`Content-DPR`** {{Glossary("response header", "响应标头")}}用于在使用屏幕 {{HTTPHeader("DPR")}} 客户端提示来选择图像资源的请求中确认*图像*的设备像素比率（DPR）。

> **备注：** `Content-DPR` 标头在 [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07) 草案中已从客户端提示规范中移除。[响应式图像客户端提示](https://wicg.github.io/responsive-image-client-hints/)规范提议通过在 EXIF 元数据中指定图像的固有分辨率或尺寸来替代该标头。

如果使用 `DPR` 客户端提示来选择图像，则服务器必须在响应中指定 `Content-DPR`。如果 `Content-DPR` 中的值与请求中的 {{HTTPHeader("DPR")}} 值不同（即图像的 DPR 与屏幕的 DPR 不同），客户端必须使用 `Content-DPR` 来确定图像的固有尺寸并对图像进行缩放。

如果消息中出现多个 `Content-DPR` 标头，则使用最后一个出现的值。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>
        {{Glossary("Response header", "响应标头")}}、<a href="/zh-CN/docs/Web/HTTP/Client_hints">客户端提示</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "列入 CORS 白名单的响应标头")}}
      </th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
Content-DPR: <number>
```

## 指令

- `<number>`
  - : 图像设备像素比率，根据以下公式计算：Content-DPR = _所选图像资源尺寸_ /（_宽度_ / _DPR_）

## 示例

请参阅 [`DPR`](/zh-CN/docs/Web/HTTP/Headers/DPR#示例) 标头示例。

## 浏览器兼容性

{{Compat}}

## 参见

- 设备客户端提示
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP 缓存：Vary](/zh-CN/docs/Web/HTTP/Caching#vary) 和 {{HTTPHeader("Vary")}}
- developer.chrome.google.cn 上的[利用用户代理客户端提示改善用户隐私并提升开发者体验](https://developer.chrome.google.cn/docs/privacy-security/user-agent-client-hints)（2020）
