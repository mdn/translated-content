---
title: '`rel="prefetch"` HTML 属性值'
short-title: prefetch
slug: Web/HTML/Reference/Attributes/rel/prefetch
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("link")}} 元素的 [`rel`](/zh-CN/docs/Web/HTML/Reference/Elements/link#rel) 属性的 **`prefetch`** 关键字向浏览器提供提示：用户很可能在未来的导航中需要目标资源，因此浏览器很可能通过抢先获取并缓存该资源来改善用户体验。`<link rel="prefetch">` 用于同站导航资源，或同站页面所使用的子资源。

结果会保存在磁盘上的 HTTP 缓存中。因此，它适用于预取子资源，即使当前页面并不使用这些子资源。你也可以用它来预取用户在站点上很可能接下来访问的文档。不过，也因此需要注意标头——例如，某些 [Cache-Control](/zh-CN/docs/Web/HTTP/Reference/Headers/Cache-Control) 标头可能会阻止预取（例如 `no-cache` 或 `no-store`）。

> [!NOTE]
> 由于存在此类限制，在支持的情况下，建议改用[推测规则 API](/zh-CN/docs/Web/API/Speculation_Rules_API) 进行文档预取。

`<link rel="prefetch">` 在功能上等价于设置了 `priority: "low"` 选项的 {{domxref("Window/fetch", "fetch()")}} 调用，不同之处在于前者的优先级通常更低，并且请求上会设置 [`Sec-Purpose: prefetch`](/zh-CN/docs/Web/HTTP/Reference/Headers/Sec-Purpose) 标头。请注意，一般来说，浏览器给予预取资源的优先级低于预加载资源（例如通过 [`<link rel="preload">`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload) 请求的资源）——当前页面比下一页更重要。

`prefetch` 操作的获取请求会产生一个包含 HTTP 标头 [`Sec-Purpose: prefetch`](/zh-CN/docs/Web/HTTP/Reference/Headers/Sec-Purpose) 的 HTTP 请求。服务器可能会使用此标头来更改资源的缓存超时时间，或执行其他特殊处理。该请求还会包含值设为 `empty` 的 {{HTTPHeader("Sec-Fetch-Dest")}} 标头。

请求中的 {{HTTPHeader("Accept")}} 标头会与普通导航请求所使用的值匹配。这样浏览器才能在导航后找到匹配的缓存资源。

## 示例

### 基本预取

```js
<link rel="prefetch" href="main.js" />
```

### 导航与子资源预取

预取可用于获取可能的下一次导航所需的 HTML 和子资源。一种常见用例是：网站着陆页预取站点其余部分所使用的更“重量级”的资源。

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### 缓存分区的影响

许多浏览器现在会实现某种形式的[缓存分区](https://developer.chrome.google.cn/blog/http-cache-partitioning)，这使得 `<link rel="prefetch">` 对于供不同顶级站点使用的资源变得无效。这包括跨站导航时的主文档。因此，例如以下预取：

```html
<link rel="prefetch" href="https://news.example/article" />
```

将无法从 `https://aggregator.example/` 访问。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [推测性加载](/zh-CN/docs/Web/Performance/Guides/Speculative_loading)，以比较 `<link rel="prefetch">` 和其他类似的性能改进特性。
