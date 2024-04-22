---
title: HTML 属性：crossorigin
slug: Web/HTML/Attributes/crossorigin
---

{{HTMLSidebar}}

**`crossorigin`** 属性在 {{HTMLElement("audio")}}、{{HTMLElement("img")}}、{{HTMLElement("link")}}、{{HTMLElement("script")}} 和 {{HTMLElement("video")}} 元素中有效，它们提供对 [CORS](/zh-CN/docs/Web/HTTP/CORS) 的支持，定义该元素如何处理跨源请求，从而实现对该元素获取数据的 CORS 请求的配置。根据元素的不同，该属性可以是一个 CORS 设置属性。

在媒体元素上所使用的 `crossorigin` 内容属性为 CORS 设置属性。

这些属性是[枚举](/zh-CN/docs/Glossary/Enumerated)的，并具有以下可能的值：

- `anonymous`
  - : 请求使用了 CORS 标头，且证书标志被设置为 `'same-origin'`。没有通过 cookies、客户端 SSL 证书或 HTTP 认证交换**用户凭据**，除非目的地是同一来源。
- `use-credentials`
  - : 请求使用了 CORS 标头，且证书标志被设置为 `'include'`。总是包含**用户凭据**。
- `""`
  - : 将属性名称设置为空值，如 `crossorigin` 或 `crossorigin=""`，与设置为 `anonymous` 的效果一样。

不合法的关键字或空字符串会视为 `anonymous` 关键字。

默认情况下（即未指定该属性时），CORS 根本不会使用。用户代理不会要求对资源进行完全访问的许可，在跨源请求的情况下，将根据相关元素的类型进行某些限制：

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">元素</td>
      <td class="header">限制</td>
    </tr>
    <tr>
      <td><code>img</code>、<code>audio</code>、<code>video</code></td>
      <td>
        当资源被放置在 {{HTMLElement("canvas")}} 中时，元素会标记为<a href="/zh-CN/docs/Web/HTML/CORS_enabled_image#安全性和“被污染”的_canvas"><em>被污染的</em></a>。
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        对错误日志 {{domxref('Window.error_event', 'window.onerror')}} 的访问将会被限制。
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        使用了不合适的 <code>crossorigin</code> 标头的请求可能会被丢弃。
      </td>
    </tr>
  </tbody>
</table>

> **备注：** 在 Firefox 83 版本之前，`rel="icon"` 元素不支持 `crossorigin` 属性。也有一个 [Chrome 的未解决的议题](https://bugs.chromium.org/p/chromium/issues/detail?id=1121645)。

### 示例：使用 `crossorigin` 的 `<script>` 元素

你可以使用下面的 {{HTMLElement("script")}} 元素告诉浏览器执行来自 `https://example.com/example-framework.js` 的脚本且不发送用户凭据。

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### 示例：带有用户凭据的 Web 清单

在获取需要用户凭据的[清单](/zh-CN/docs/Web/Manifest)时，即使是同源的情况，属性值也必须设置为 `use-credentials`。

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- [HTML 属性：`rel`](/zh-CN/docs/Web/HTML/Attributes/rel)

{{QuickLinksWithSubpages("/zh-CN/docs/Web/HTML/")}}
