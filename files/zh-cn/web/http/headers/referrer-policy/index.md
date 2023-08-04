---
title: Referrer-Policy
slug: Web/HTTP/Headers/Referrer-Policy
---

{{HTTPSidebar}}

**`Referrer-Policy`** 首部用来监管哪些访问来源信息——会在 {{HTTPHeader("Referer")}} 中发送——应该被包含在生成的请求当中。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

注意 {{HTTPHeader("Referer")}} 实际上是单词 "referrer" 的错误拼写。`Referrer-Policy` 这个首部并没有延续这个错误拼写。

```plain
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

## 指令

- no-referrer
  - : 整个 {{HTTPHeader("Referer")}} 首部会被移除。访问来源信息不随着请求一起发送。
- no-referrer-when-downgrade（默认值）
  - : 在没有指定任何策略的情况下用户代理的默认行为。在同等安全级别的情况下，引用页面的地址会被发送 (HTTPS->HTTPS)，但是在降级的情况下不会被发送 (HTTPS->HTTP)。
- origin
  - : 在任何情况下，仅发送文件的源作为引用地址。例如 `https://example.com/page.html` 会将 `https://example.com/ 作为引用地址`。
- origin-when-cross-origin
  - : 对于同源的请求，会发送完整的 URL 作为引用地址，但是对于非同源请求仅发送文件的源。
- same-origin
  - : 对于[同源的请求](/zh-CN/docs/Web/Security/Same-origin_policy)会发送引用地址，但是对于非同源请求则不发送引用地址信息。
- strict-origin
  - : 在同等安全级别的情况下，发送文件的源作为引用地址 (HTTPS->HTTPS)，但是在降级的情况下不会发送 (HTTPS->HTTP)。
- strict-origin-when-cross-origin
  - : 对于同源的请求，会发送完整的 URL 作为引用地址；在同等安全级别的情况下，发送文件的源作为引用地址 (HTTPS->HTTPS)；在降级的情况下不发送此首部 (HTTPS->HTTP)。
- unsafe-url

  - : 无论是同源请求还是非同源请求，都发送完整的 URL（移除参数信息之后）作为引用地址。

    > **备注：** 这项设置会将受 TLS 安全协议保护的资源的源和路径信息泄露给非安全的源服务器。进行此项设置的时候要慎重考虑。

## 集成到 HTML

你也可以在 HTML 内设置 referrer 策略。例如，你可以用一个 name 为 referrer 的 {{HTMLElement("meta")}} 元素为整个文档设置 referrer 策略。

```plain
<meta name="referrer" content="origin">
```

或者用 {{HTMLElement("a")}}、{{HTMLElement("area")}}、{{HTMLElement("img")}}、{{HTMLElement("iframe")}}、{{HTMLElement("script")}} 或者 {{HTMLElement("link")}} 元素上的 `referrerpolicy` 属性为其设置独立的请求策略。

```plain
<a href="http://example.com" referrerpolicy="origin">
```

另外也可以在 {{HTMLElement("a")}}、{{HTMLElement("area")}} 或者 {{HTMLElement("link")}} 元素上将 `rel` 属性设置为 `noreferrer`。

```plain
<a href="http://example.com" rel="noreferrer">
```

## 集成到 CSS

CSS 可以从样式表获取引用的资源，这些资源也可以遵从 referrer 策略：

- 外部 CSS 样式表使用默认策略 (`no-referrer-when-downgrade`)，除非 CSS 样式表的响应消息通过 `Referrer-Policy` 首部覆盖该策略。
- 对于 {{HTMLElement("style")}} 元素或 [`style`](/zh-CN/docs/Web/API/HTMLElement/style) 属性，则遵从文档的 referrer 策略。

## 示例

| Policy                                | Document                         | Navigation to                        | Referrer                        |
| ------------------------------------- | -------------------------------- | ------------------------------------ | ------------------------------- |
| **`no-referrer`**                     | `https://example.com/page.html`  | any domain or path                   | no referrer                     |
| **`no-referrer-when-downgrade`**      | `https://example.com/page.html`  | `https://example.com/otherpage.html` | `https://example.com/page.html` |
| **`no-referrer-when-downgrade`**      | `https://example.com/page.html`  | `https://mozilla.org`                | `https://example.com/page.html` |
| **`no-referrer-when-downgrade`**      | `https://example.com/page.html`  | **http**://example.org               | no referrer                     |
| **`origin`**                          | `https://example.com/page.html`  | any domain or path                   | `https://example.com/`          |
| **`origin-when-cross-origin`**        | `https://example.com/page.html`  | `https://example.com/otherpage.html` | `https://example.com/page.html` |
| **`origin-when-cross-origin`**        | `https://example.com/page.html`  | `https://mozilla.org`                | `https://example.com/`          |
| **`origin-when-cross-origin`**        | `https://example.com/page.html`  | **http**://example.com/page.html     | `https://example.com/`          |
| **`same-origin`**                     | `https://example.com/page.html`  | `https://example.com/otherpage.html` | `https://example.com/page.html` |
| **`same-origin`**                     | `https://example.com/page.html`  | `https://mozilla.org`                | no referrer                     |
| **`strict-origin`**                   | `https://example.com/page.html`  | `https://mozilla.org`                | `https://example.com/`          |
| **`strict-origin`**                   | `https://example.com/page.html`  | **http**://example.org               | no referrer                     |
| **`strict-origin`**                   | **http**://example.com/page.html | any domain or path                   | `http://example.com/`           |
| **`strict-origin-when-cross-origin`** | `https://example.com/page.html`  | `https://example.com/otherpage.html` | `https://example.com/page.html` |
| **`strict-origin-when-cross-origin`** | `https://example.com/page.html`  | `https://mozilla.org`                | `https://example.com/`          |
| **`strict-origin-when-cross-origin`** | `https://example.com/page.html`  | **http**://example.org               | no referrer                     |
| **`unsafe-url`**                      | `https://example.com/page.html`  | any domain or path                   | `https://example.com/page.html` |

### 指定后备策略

如果你要为那些策略未获广泛的浏览器支持的情况指定一种后备策略，使用逗号分隔的列表，并将希望使用的策略放在最后：

```plain
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

在上面的场景中，`no-referrer` 仅在 `strict-origin-when-cross-origin` 不被浏览器支持的情况下被使用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

**注意：** 从版本 53 起，Gecko 在 about:config 中提供了一项偏好设置，使得用户可以自行设定默认的 Referrer-Policy 值 —— network.http.referer.userControlPolicy。可选的值包括：

- 0 — `no-referrer`
- 1 — `same-origin`
- 2 — `strict-origin-when-cross-origin`
- 3 — `no-referrer-when-downgrade` (the default)

## 相关内容

- [HTTP referer on Wikipedia](https://zh.wikipedia.org/wiki/HTTP_referer)
- 其他设定页面引用策略的方式：

  - A {{HTMLElement("meta")}} element with a [name of `referrer`](/zh-CN/docs/Web/HTML/Element/meta#attr-name).
  - A `referrerpolicy` attribute on an {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, or {{HTMLElement("link")}} element.
  - The `noreferrer` link relation on an a, area, or link element (`rel="noreferrer"`).
  - When using [Fetch](/zh-CN/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}

- [同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)
- [Tighter Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
