---
title: Secure contexts
slug: Web/Security/Secure_Contexts
---
**安全上下文**是 `Window` 与 `Worker` 中的概念满足了最低标准的身份验证和机密性。许多 Web APIs 的访问仅能在安全上下文中. 安全上下文的主要目标是防止 [MITM attackers](https://zh.wikipedia.org/wiki/man-in-the-middle_attack) 强大的 APIs 被坏人利用。

## 为什么要限制某些功能？

有些 APIs 是非常强大的，能给攻击者更强的能力以及更多的操作：

- 侵犯用户隐私。
- 获得对用户计算机的低级访问权限。
- 获得对数据的访问权限，例如用户凭证。

## When is a context considered secure?

A context is considered secure when it meets certain minimum standards of authentication and confidentiality defined in the [Secure Contexts](https://w3c.github.io/webappsec-secure-contexts/) specification. A particular document is considered to be in a secure context when it is the [active document](https://html.spec.whatwg.org/multipage/browsers.html#active-document) of a [top-level browsing context](https://html.spec.whatwg.org/multipage/browsers.html#top-level-browsing-context) (basically, a containing window or tab) that is a secure context.

For example, even for a document delivered over TLS within an {{HTMLElement("iframe")}}, its context is **not** considered secure if it has an ancestor that was not also delivered over TLS.

However, it’s important to note that if a non-secure context causes a new window to be created (with or without specifying [noopener](/en-US/docs/Web/API/Window/open#noopener)), then the fact that the opener was insecure has no effect on whether the new window is considered secure. That’s because the determination of whether or not a particular document is in a secure context is based only on considering it within the top-level browsing context with which it is associated — and not whether a non-secure context happened to be used to create it.

Locally-delivered resources such as those with _http\://127.0.0.1_ URLs, _http\://localhost_ URLs (under certain conditions), and _file://_ URLs are also considered to have been delivered securely.

Resources that are not local, to be considered secure, must meet the following criteria:

- must be served over _https\://_ or _wss\://_ URLs
- the security properties of the network channel used to deliver the resource must not be considered deprecated

## Feature detection

Pages can use feature detection to check whether they are in a secure context or not by using the {{domxref("isSecureContext")}} boolean, which is exposed on the global scope.

```js
if (window.isSecureContext) {
  // Page is a secure context so service workers are now available
  navigator.serviceWorker.register("/offline-worker.js").then(function () {
    ...
  });
}
```

## Specifications

{{Specifications}}

## See also

- [Platform features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) — a list of the features available only in secure contexts
- {{domxref("Window.isSecureContext")}}
- <https://permission.site> — A site that allows you to check what API permission checks your browser employs, over HTTP and HTTPS
- [Strict-Transport-Security](/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP header

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
