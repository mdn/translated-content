---
title: ServiceWorkerGlobalScope：notificationclick 事件
slug: Web/API/ServiceWorkerGlobalScope/notificationclick_event
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

{{domxref("ServiceWorkerGlobalScope")}} 接口的 **`notificationclick`** 事件在点击由 {{domxref("ServiceWorkerRegistration.showNotification()")}} 生成的系统通知时触发。

在主线程或非 Service Worker 线程中使用 {{domxref("Notification.Notification","Notification()")}} 构造函数创建的通知则将在 {{domxref("Notification")}} 对象本身触发 {{domxref("Notification/click_event", "click")}} 事件。

此事件不可取消且不会冒泡。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("notificationclick", (event) => {});

onnotificationclick = (event) => {};
```

## 事件类型

一个 {{domxref("NotificationEvent")}}。继承自 {{domxref("ExtendableEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("NotificationEvent")}}

## 事件属性

_从其祖先 {{domxref("ExtendableEvent")}} 和 {{domxref("Event")}} 继承属性_。

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : 返回一个 {{domxref("Notification")}} 对象，表示单击而触发事件的通知。
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : 返回用户单击的通知按钮的字符串 ID。如果用户单击通知的操作按钮以外的部分，或者通知没有按钮，则此值返回空字符串。

## 示例

你可以在 {{domxref("EventTarget/addEventListener", "addEventListener")}} 方法中使用 `notificationclick` 事件：

```js
self.addEventListener("notificationclick", (event) => {
  console.log("当点击通知时：", event.notification.tag);
  event.notification.close();

  // 这会查看当前标签页是否已打开并是否已聚焦
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

或者使用 `onnotificationclick` 事件处理器属性：

```js
self.onnotificationclick = (event) => {
  console.log("当点击通知时：", event.notification.tag);
  event.notification.close();

  // 这会查看当前标签页是否已打开并是否已聚焦
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
};
```

你可以在 `notificationclick` 事件处理器中使用 `event.action` 来处理事件操作：

```js
navigator.serviceWorker.register("sw.js");
Notification.requestPermission().then((result) => {
  if (result === "granted") {
    navigator.serviceWorker.ready.then((registration) => {
      // 显示包含标题为 Archive 的操作的通知。
      registration.showNotification("New mail from Alice", {
        actions: [
          {
            action: "archive",
            title: "Archive",
          },
        ],
      });
    });
  }
});

self.addEventListener(
  "notificationclick",
  (event) => {
    event.notification.close();
    if (event.action === "archive") {
      // 用户选择了 Archive 操作。
      archiveEmail();
    } else {
      // 用户选择（例如单击）通知的主体。
      clients.openWindow("/inbox");
    }
  },
  false,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [Notifications API](/zh-CN/docs/Web/API/Notifications_API)
