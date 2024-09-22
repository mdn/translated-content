---
title: ServiceWorkerRegistration：cookies 属性
slug: Web/API/ServiceWorkerRegistration/cookies
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{APIRef("Cookie Store API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_service")}}

{{domxref("ServiceWorkerRegistration")}} 接口的 **`cookies`** 只读属性返回 {{domxref("CookieStoreManager")}} 接口的引用，它允许 Web APP 在 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 中订阅和取消订阅 cookie 变更事件。是 [Cookie Store API](/zh-CN/docs/Web/API/Cookie_Store_API) 的入口点。

## 值

{{domxref("CookieStoreManager")}} 对象实例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
