---
title: Notifications API
slug: Web/API/Notifications_API
---

{{DefaultAPISidebar("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**Notifications API** 允许网页控制向最终用户显示系统通知 —这些都在顶级浏览上下文视口之外，因此即使用户已经切换标签页或移动到不同的应用程序，也可以显示。该 API 被设计成与不同平台上的现有通知系统兼容。

## 概念和用法

在支持该接口的平台上，显示一个系统通知通常涉及两件事。首先，用户需要授予当前源的权限以显示系统通知，这通常在应用或站点初始化时，使用 {{domxref("Notification.requestPermission()")}} 方法来完成。这应该响应用户交互来完成，例如单击按钮，例如：

```js
btn.addEventListener("click", () => {
  let promise = Notification.requestPermission();
  // 等待许可
});
```

这不仅是最佳实践——你不应该向用户发送他们不同意的通知——并且未来的浏览器将明确禁止未响应用户交互而触发的通知。例如，Firefox 从 72 版本开始就已经这样做了。

这将产生一个请求对话框，内容如下：

![一个对话框，要求用户允许来自该源的通知。有一些选项可以禁止或允许通知](screen_shot_2019-12-11_at_9.59.14_am.png)

从这里，用户可以选择允许来自此来源的通知或阻止来自此来源的通知。一旦做出选择，该设置通常将持续用于当前会话。

> **备注：** 从 Firefox 44 开始，通知（Notifications）和推送（[Push](/zh-CN/docs/Web/API/Push_API)）的权限已合并。如果为通知授予权限，推送也将启用。

接下来，使用 {{domxref("Notification.Notification","Notification()")}} 构造函数创建一个新通知。这个函数必须传递一个标题参数，并且可以选择传递一个选项对象来指定选项，例如文本方向、正文、要显示的图标、要播放的通知声音等等。

此外， **Notifications API** 规范对 [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API) 指定了多个添加，以允许 Service Worker 发送通知。

> **备注：** 想了解怎么在你的应用里使用通知接口，请阅读 [使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)。

## 接口

- {{domxref("Notification")}}
  - : 定义的通知对象。

### 附加参数

- {{domxref("ServiceWorkerRegistration")}}
  - : 该对象包含 {{domxref("ServiceWorkerRegistration.showNotification()")}} 和 {{domxref("ServiceWorkerRegistration.getNotifications()")}} 方法，用于控制通知的显示。
- {{domxref("ServiceWorkerGlobalScope")}}
  - : 该对象包含 {{domxref("ServiceWorkerGlobalScope.onnotificationclick")}} 事件处理函数，用于通知被点击的时候触发绑定的事件处理函数。
- {{domxref("NotificationEvent")}}
  - : 该对象是功能明确的事件对象，表示一个被触发的通知事件，继承自 {{domxref("ExtendableEvent")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
