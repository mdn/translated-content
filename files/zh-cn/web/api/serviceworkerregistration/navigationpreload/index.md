---
title: ServiceWorkerRegistration：navigationPreload 属性
short-title: navigationPreload
slug: Web/API/ServiceWorkerRegistration/navigationPreload
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

{{domxref("ServiceWorkerRegistration")}} 接口的只读属性 **`navigationPreload`** 返回与当前服务工作线程注册相关联的 {{domxref("NavigationPreloadManager")}}。

返回的对象允许由服务工作线程管理的资源在服务工作线程启动的同时被预先下载。

## 值

一个 {{domxref("NavigationPreloadManager")}} 实例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
