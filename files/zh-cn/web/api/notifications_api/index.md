---
title: Notifications API
slug: Web/API/Notifications_API
---

{{DefaultAPISidebar("Web Notifications")}}

**Notifications API** 允许网页控制向最终用户显示系统通知 —这些都在顶级浏览上下文视口之外，因此即使用户已经切换标签页或移动到不同的应用程序，也可以显示。该 API 被设计成与不同平台上的现有通知系统兼容。

## 概念和用法

在支持该接口的平台上，显示一个系统通知通常涉及两件事。首先，用户需要授予当前源的权限以显示系统通知，这通常在应用或站点初始化时，使用{{domxref("Notification.requestPermission()")}} 方法来完成。

这将产生一个请求对话框，沿着以下几行：

![](https://mdn.mozillademos.org/files/10819/notification-bubble.png)

从这里，用户可以选择允许来自此来源的通知，阻止来自此来源的通知，或不选择此点。一旦做出选择，该设置通常将持续用于当前会话。

> **备注：** 从 Firefox 44 开始，通知（Notifications）和推送（[Push](/zh-CN/docs/Web/API/Push_API)）的权限已合并。如果为通知授予权限，推送也将启用。

接下来，使用 {{domxref("Notification.Notification","Notification()")}} 构造函数创建一个新通知。这个方法可以传入两个参数。这必须传递一个标题参数，并可以选择性地传递一个选项对象来指定选项，如文本方向，正文，显示图标，通知声音播放，等等。

{{AvailableInWorkers}}

此外， **Notifications API** 规范对 [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)指定了多个添加，以允许 service workers 发送通知。

> **备注：** 想了解怎么在你的应用里使用通知接口，请阅读 [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)。

## 接口（Notifications interfaces）

- {{domxref("Notification")}}
  - : 定义的通知对象

### 附加参数（Service worker additions）

- {{domxref("ServiceWorkerRegistration")}}
  - : 该对象包含 {{domxref("ServiceWorkerRegistration.showNotification()")}} 和 {{domxref("ServiceWorkerRegistration.getNotifications()")}} 方法，用于控制通知的显示。
- {{domxref("ServiceWorkerGlobalScope")}}
  - : 该对象包含 {{domxref("ServiceWorkerGlobalScope.onnotificationclick")}} 事件处理函数，用于通知被点击的时候触发绑定的事件处理函数。
- {{domxref("NotificationEvent")}}
  - : 该对象是功能明确的事件对象，表示一个通知事件被触发了，继承自{{domxref("ExtendableEvent")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## Firefox OS permissions

当你在 Firefox OS app 中使用通知时，请确保在 manifest 文件中添加了`desktop-notification` 权限。Notifications can be used at any permission level, hosted or above:

```json
"permissions": {
  "desktop-notification": {}
}
```

## See also

- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
