---
title: rel=preconnect
slug: Web/HTML/Attributes/rel/preconnect
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{HTMLSidebar}}

{{HTMLElement("link")}} 元素的 [`rel`](/zh-CN/docs/Web/HTML/Element/link#rel) 属性的 **`preconnect`** 关键字是对浏览器的一种提示，即用户很可能需要来自目标来源的资源，因此浏览器很可能通过抢先启动与该源的连接来改善用户体验。通过抢先执行部分或全部握手（HTTP 为 DNS+TCP，HTTPS 为 DNS+TCP+TLS），预连接可加快未来从给定源加载的速度。

`<link rel="preconnect">` 将为未来的跨源 HTTP 请求、导航或子资源带来好处。它对同源请求没有好处，因为连接已经打开。

如果一个页面需要与许多第三方域建立连接，将它们全部预连接可能会适得其反。`<link rel="preconnect">` 提示最好只用于最关键的连接。对于其他连接，只需使用 [`<link rel="dns-prefetch">`](/zh-CN/docs/Web/HTML/Attributes/rel/dns-prefetch)，以节省第一步 DNS 查询的时间。

## 示例

```html
<link rel="preconnect" href="https://example.com" />
```

你也可以将预连接作为 HTTP [Link](/zh-CN/docs/Web/HTTP/Headers/Link) 标头来实现：

```http
Link: <https://example.com>; rel="preconnect"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [推测性加载](/zh-CN/docs/Web/Performance/Speculative_loading)，以比较 `<link rel="preconnect">` 和其他类似的性能改进特性。
