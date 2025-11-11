---
title: ExtendableCookieChangeEvent：ExtendableCookieChangeEvent() 构造函数
slug: Web/API/ExtendableCookieChangeEvent/ExtendableCookieChangeEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

**`ExtendableCookieChangeEvent()`** 构造函数会创建一个新的 {{domxref("ExtendableCookieChangeEvent")}} 对象，该对象是传递给 {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} 事件的事件类型，当发生任何与 service worker 的 cookie 更改订阅列表匹配的 cookie 更改时，该事件会在 {{domxref("ServiceWorkerGlobalScope")}} 中触发。当发生更改事件时，浏览器会调用此构造函数。

> [!NOTE]
> 网站通常不需要此事件构造函数。它主要用于需要此事件实例的测试。

## 语法

```js-nolint
new ExtendableCookieChangeEvent(type)
new ExtendableCookieChangeEvent(type, options)
```

### 参数

- `type`
  - : 事件名称字符串。它区分大小写，并且浏览器始终将其设置为 `cookiechange`。
- `options` {{optional_inline}}
  - : 配置对象，_除了在 {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} 中定义的属性之外_，还可以具有以下属性：
    - `changed` {{optional_inline}}
      - : 包含已更改的 cookie 的数组。
    - `deleted` {{optional_inline}}
      - : 包含已删除的 cookie 的数组。

### 返回值

一个新的 {{domxref("ExtendableCookieChangeEvent")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
