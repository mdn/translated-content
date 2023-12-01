---
title: NotificationEvent
slug: Web/API/NotificationEvent
---

{{APIRef("Web Notifications")}}

传递给 {{domxref("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}} 处理程序的参数的`NotificationEvent`接口，该接口表示通知单击事件，该事件在 {{domxref("ServiceWorkerGlobalScope")}} ，{{domxref("ServiceWorker")}} 。

该接口继承自{{domxref("ExtendableEvent")}}接口。

## 建设者

- {{domxref("NotificationEvent.NotificationEvent","NotificationEvent()")}}
  - : 创建一个新`NotificationEvent`对象。

## 物产

_从其祖先{{domxref("Event")}}继承属性_。

- {{domxref("NotificationEvent.notification")}} {{readonlyInline}}
  - : 返回一个{{domxref("Notification")}}对象，该对象表示单击以触发事件的通知。
- {{domxref("NotificationEvent.action")}} {{readonlyinline}}
  - : 返回用户单击的通知按钮的字符串 ID。如果用户在除操作按钮之外的其他位置单击了通知，或者该通知没有按钮，则此值返回一个空字符串。

## 方法

_从其父项**{{domxref("ExtendableEvent")}}**继承方法_。

- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}
  - : 延长事件的寿命。告诉浏览器工作正在进行中。

## 例

```js
self.addEventListener("notificationclick", function (event) {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url == "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## 规范

{{Specifications}}

> **备注：** 此接口在[Notifications API 中](/zh-CN/docs/Web/API/Notifications_API)指定，但是可以通过 {{domxref("ServiceWorkerGlobalScope")}}访问。

## 浏览器兼容性

{{Compat}}
