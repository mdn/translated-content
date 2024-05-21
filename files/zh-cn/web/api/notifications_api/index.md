---
title: Notifications API
slug: Web/API/Notifications_API
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{DefaultAPISidebar("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

**Notifications API** 允许网页控制向最终用户显示系统通知——这些都在顶层浏览上下文窗口之外，因此即使用户已经切换标签页或移动到不同的应用程序也可以显示。该 API 被设计成与不同平台上的现有通知系统兼容。

## 概念和用法

在支持该接口的平台上，显示一个系统通知通常涉及两件事。首先，用户需要为当前来源授予权限以显示系统通知，这通常在应用或站点初始化时，使用 {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}} 方法来完成。这应该通过响应用户交互行为来实现，如单击按钮，例如：

```js
btn.addEventListener("click", () => {
  let promise = Notification.requestPermission();
  // 等待授权
});
```

这不仅是最佳实践——你不应该向用户发送他们不同意的通知——并且未来的浏览器将明确禁止未响应用户交互而触发的通知。例如，Firefox 从 72 版本开始就已经这样做了。

这将产生一个请求对话框，内容如下：

![一个对话框，要求用户允许来自该源的通知。有一些选项可以禁止或允许通知](screen_shot_2019-12-11_at_9.59.14_am.png)

从这里，用户可以选择允许来自此来源的通知或阻止来自此来源的通知。一旦做出选择，该设置通常将持续用于当前会话。

> **备注：** 从 Firefox 44 开始，通知（Notification）和推送（[Push](/zh-CN/docs/Web/API/Push_API)）的权限已合并。如果为通知授予权限，推送也将启用。

接下来，使用 {{domxref("Notification.Notification","Notification()")}} 构造方法创建一个新通知。这个函数必须传递一个标题参数，并且可以选择传递一个选项对象来指定选项，例如文本方向、正文、要显示的图标、要播放的通知的声音等等。

此外，Notifications API 规范对 [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API) 指定了多个扩展，以允许 Service Worker 发送通知。

> **备注：** 想了解怎么在你的应用里使用通知接口，请阅读[使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)。

## 接口

- {{domxref("Notification")}}
  - : 定义的通知对象。
- {{domxref("NotificationEvent")}}
  - : 表示在 {{domxref("ServiceWorker")}} 的 {{domxref("ServiceWorkerGlobalScope")}} 上下文中触发的通知事件。

### 其他接口的扩展

- {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}} 事件
  - : 当用户单击显示的通知时触发。
- {{domxref("ServiceWorkerGlobalScope/notificationclose_event", "notificationclose")}} 事件
  - : 当用户关闭显示的通知时触发。
- {{domxref("ServiceWorkerRegistration.getNotifications()")}}
  - : 按照通过当前 Service Worker 从当前源创建的通知的顺序返回通知列表。
- {{domxref("ServiceWorkerRegistration.showNotification()")}}
  - : 显示带有请求的标题的通知。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
