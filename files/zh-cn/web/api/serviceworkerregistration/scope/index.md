---
title: ServiceWorkerRegistration：scope 属性
short-title: scope
slug: Web/API/ServiceWorkerRegistration/scope
l10n:
  sourceCommit: e9b95b3735a9e928fbdf3fe0a9f69c420b44cd79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

{{domxref("ServiceWorkerRegistration")}} 接口的只读属性 **`scope`** 返回一个字符串，该字符串表示定义了服务工作者注册作用域的 URL；即服务工作者可以控制的 URL 范围。此值通过调用 {{domxref('ServiceWorkerContainer.register()')}} 时指定的 `scope` 参数进行设置，该参数用于注册服务工作者。

## 值

返回一个字符串，该字符串表示定义服务工作者注册作用域的 URL。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用服务工作者](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [服务工作者基础代码示例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [使用 Web 工作者](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
