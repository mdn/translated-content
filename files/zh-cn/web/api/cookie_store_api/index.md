---
title: Cookie Store API
slug: Web/API/Cookie_Store_API
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

**Cookie Store API** 是一个用于管理 cookies 的异步 API，可在 window 和 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 中使用。

## 概念和用法

现存的获取和设置的 cookies 的方法包括将 {{domxref("document.cookie")}} 作为键/值对字符串使用。除了麻烦且容易出错之外，在现代网络开发的背景下它也存在许多问题。

`document.cookie` 接口是{{Glossary("synchronous", "同步")}}、单线程和阻塞的。编写 cookie 时，你必须等待浏览器更新包含所有 cookies 的字符串。此外，依赖 {{domxref("document")}} 意味着访问不到 `document` 对象的 Service Worker 无法访问 cookie。

_Cookie Store API_ 提供了管理 Cookie 更新的方法。方法是{{Glossary("asynchronous", "异步")}}和基于 Promise 的，因此不会阻塞事件循环。方法不依赖于 {{domxref("document")}}，所以对于 Service Worker 也有效。获取和设置 cookie 的方法还通过错误消息提供了更多反馈。这意味着 Web 开发人员不必设置后，立即读取 cookie 来检查是否成功设置。

## 接口

- {{domxref("CookieStore")}} {{Experimental_Inline}}
  - : `CookieStore` 接口允许获取和设置 cookies。
- {{domxref("CookieStoreManager")}} {{Experimental_Inline}}
  - : `CookieStoreManager` 接口提供了 Service Worker Registration 用于允许 Service Worker 订阅 cookie 变更事件。
- {{domxref("CookieChangeEvent")}} {{Experimental_Inline}}
  - : 在 {{domxref("Window")}} 上下文中发生任何脚本可见的 cookie 更改时，`CookieStore` 对象会派发出名为 `change` 的 `CookieChangeEvent` 事件。
- {{domxref("ExtendableCookieChangeEvent")}}
  - : 在 {{domxref("ServiceWorkerGlobalScope")}} 上下文中发生任何脚本可见的 cookie 更改时，`ExtendableCookieChangeEvent` 将被派发，事件名为 `cookiechange`。

### 对其他接口的扩展

- {{domxref("ServiceWorkerGlobalScope.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回此 Service Worker 关联的 {{domxref("CookieStore")}} 对象的引用。
- {{domxref("ServiceWorkerRegistration.cookies")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回 {{domxref("CookieStoreManager")}} 接口的引用，它允许 Web APP 订阅和取消订阅 cookie 变更事件。
- {{domxref("Window.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回当前 document 上下文的 {{domxref("CookieStore")}} 对象。
- {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} 事件 {{Experimental_Inline}}
  - : 当 cookie 发生任何更改时触发，与 Service Worker 的 Cookie 更改订阅列表相匹配。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
