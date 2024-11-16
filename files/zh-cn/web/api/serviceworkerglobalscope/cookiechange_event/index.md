---
title: ServiceWorkerGlobalScope：cookiechange 事件
slug: Web/API/ServiceWorkerGlobalScope/cookiechange_event
l10n:
  sourceCommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{APIRef("Cookie Store API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

{{domxref("ServiceWorkerGlobalScope")}} 接口的 **`cookiechange`** 事件会在与 Service Worker 的 cookie 更改订阅列表相匹配的 cookie 发生更改时触发。

此事件不可取消且不会冒泡。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("cookiechange", (event) => {});

oncookiechange = (event) => {};
```

## 事件类型

{{domxref("ExtendableCookieChangeEvent")}}。继承自 {{domxref("ExtendableEvent")}}。

{{InheritanceDiagram("ExtendableCookieChangeEvent")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
