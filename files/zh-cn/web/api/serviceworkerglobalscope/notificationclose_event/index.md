---
title: ServiceWorkerGlobalScope：notificationclose 事件
slug: Web/API/ServiceWorkerGlobalScope/notificationclose_event
l10n:
  sourceCommit: 28848ba41c082db2a8c55e85c804bd06363afb57
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

{{domxref("ServiceWorkerGlobalScope")}} 接口的 **`notificationclose`** 事件在用户关闭由 {{domxref("ServiceWorkerRegistration.showNotification()")}} 方法生成的显示的通知时触发。

在主线程或非 Service Worker 线程中使用 {{domxref("Notification.Notification","Notification()")}} 构造函数创建的通知则将在 {{domxref("Notification")}} 对象本身触发 {{domxref("Notification/close_event", "close")}} 事件。

此事件不可取消且不会冒泡。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("notificationclose", (event) => {});

onnotificationclose = (event) => {};
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

```js
// 在 service worker 内部。
self.onnotificationclose = (event) => {
  console.log("当关闭通知时：", event.notification.tag);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
