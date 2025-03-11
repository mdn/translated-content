---
title: ExtendableCookieChangeEvent
slug: Web/API/ExtendableCookieChangeEvent
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

{{domxref("Cookie Store API", "Cookie 存储 API", "", "nocode")}} 的 **`ExtendableCookieChangeEvent`** 接口是传递给 {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} 事件的事件类型，当发生任何与 service worker 的 cookie 更改订阅列表匹配的 cookie 更改时，该事件在 {{domxref("ServiceWorkerGlobalScope")}} 上触发。cookie 更改事件由 cookie 和 type 组成。（“changed”或“deleted”）

导致派发 `ExtendableCookieChangeEvent` 的 cookie 更改包括：

- 新建一个 cookie，但不会立即删除。在这种情况下，`type` 为“changed”。
- 新建一个 cookie，但会立即删除。在这种情况下，`type` 为“deleted”。
- 删除一个 cookie。在这种情况下，`type` 为“deleted”。

> [!NOTE]
> 由于插入另一个具有相同名称、域和路径的 cookie 而被替换的 cookie 将被忽略并且不会触发更改事件。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("ExtendableCookieChangeEvent.ExtendableCookieChangeEvent", "ExtendableCookieChangeEvent()")}}
  - : 创建一个新的 `ExtendableCookieChangeEvent`。

## 实例属性

_此接口还从 {{domxref("ExtendableEvent")}} 继承属性。_

- {{domxref("ExtendableCookieChangeEvent.changed")}} {{ReadOnlyInline}}
  - : 返回包含已更改的 cookie 的数组。
- {{domxref("ExtendableCookieChangeEvent.deleted")}} {{ReadOnlyInline}}
  - : 返回包含已删除的 cookie 的数组。

## 实例方法

_此接口还从 {{domxref("ExtendableEvent")}} 继承方法。_

## 示例

在以下示例中，我们使用 {{domxref("CookieStoreManager.getSubscriptions()")}} 获取现有订阅的列表。（在 service worker 中，需要订阅才能监听事件。）我们使用 {{domxref("CookieStoreManager.unsubscribe()")}} 取消订阅现有订阅，然后使用 {{domxref("CookieStoreManager.subscribe()")}} 订阅名称为“COOKIE_NAME”的 cookie。如果该 cookie 发生更改，事件监听器会将该事件记录到控制台。这将是一个 `ExtendableCookieChangeEvent` 对象，其 {{domxref("ExtendableCookieChangeEvent.changed","changed")}} 或 {{domxref("ExtendableCookieChangeEvent.deleted","deleted")}} 属性包含已修改的 cookie。

```js
self.addEventListener("activate", (event) => {
  event.waitUntil(async () => {
    const subscriptions = await self.registration.cookies.getSubscriptions();

    await self.registration.cookies.unsubscribe(subscriptions);

    await self.registration.cookies.subscribe([
      {
        name: "COOKIE_NAME",
      },
    ]);
  });
});

self.addEventListener("cookiechange", (event) => {
  console.log(event);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
