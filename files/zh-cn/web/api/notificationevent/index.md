---
title: NotificationEvent
slug: Web/API/NotificationEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

{{domxref("Notifications API", "", "", "nocode")}} 的 **`NotificationEvent`** 接口表示在 {{domxref("ServiceWorker")}} 的 {{domxref("ServiceWorkerGlobalScope")}} 上触发的通知事件。

该接口继承自 {{domxref("ExtendableEvent")}} 接口。

> [!NOTE]
> 只有在 {{domxref("ServiceWorkerGlobalScope")}} 对象上触发的持久通知事件才会使用 `NotificationEvent` 接口。非持久通知事件在 {{domxref("Notification")}} 对象上触发，使用 `Event` 接口。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("NotificationEvent.NotificationEvent","NotificationEvent()")}}
  - : 创建一个新的 `NotificationEvent` 对象。

## 实例属性

_还从其父接口 {{domxref("ExtendableEvent")}} 继承属性_。

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("Notification")}} 对象，表示单击以触发事件的通知。
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : 返回用户单击的通知按钮的字符串 ID。如果用户单击操作按钮以外的通知，或者通知没有按钮，则此值返回空字符串。

## 实例方法

_还从其父接口 {{domxref("ExtendableEvent")}} 继承方法_。

## 示例

```js
self.addEventListener("notificationclick", (event) => {
  console.log(`通知被点击：${event.notification.tag}`);
  event.notification.close();

  // 这会检查当前标签页是否已打开并聚焦
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## 规范

{{Specifications}}

> [!NOTE]
> 此接口在 [Notifications API](/zh-CN/docs/Web/API/Notifications_API) 中指定，但是可以通过 {{domxref("ServiceWorkerGlobalScope")}} 访问。

## 浏览器兼容性

{{Compat}}
