---
title: NotificationEvent：notification 属性
slug: Web/API/NotificationEvent/notification
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers("service")}}

{{domxref("NotificationEvent")}} 接口的 **`notification`** 只读属性返回被单击而触发事件的 {{domxref("Notification")}} 实例。{{domxref("Notification")}} 提供对在通知实例化时设置的许多属性的只读访问权限，例如 `tag` 和 `data` 属性，这些属性允许你在通知的 `notificationclick` 事件中延迟使用存储的信息。

## 值

一个 {{domxref("Notification")}} 对象。

## 示例

```js
self.addEventListener("notificationclick", (event) => {
  console.log("通知被点击");

  // 数据可以附加到通知中，以便你在 notificationclick 事件处理方法中对其进行处理。
  console.log(`Notification Tag: ${event.notification.tag}`);
  console.log(`Notification Data: ${event.notification.data}`);
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

## 浏览器兼容性

{{Compat}}
