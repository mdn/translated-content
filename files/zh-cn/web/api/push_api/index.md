---
title: 开发式平台
slug: Web/API/Push_API
---
{{DefaultAPISidebar("Push API")}}{{SeeCompatTable}}

**Push API** 给与了 Web 应用程序接收从服务器发出的推送消息的能力，无论 Web 应用程序是否在用户设备前台，甚至刚加载完成。这样，开发人员就可以向用户投放异步通知和更新，从而让用户能更及时地获取新内容。

> **备注：** 本文档涵盖了 W3C Push API 规范; 如果您正在寻找有关 Firefox OS 专有推送机制的文档，请参阅 [Simple Push](/zh-CN/docs/Web/API/Simple_Push_API).

## Push 的概念及用法

对于一个应用来说，要想要接收到推送消息，需要有一个被激活的 [service worker](/zh-CN/docs/Web/API/ServiceWorker_API)。当 service worker 处于激活状态时，可以使用 {{domxref("PushManager.subscribe()")}} 来订阅推送通知。

{{domxref("PushSubscription")}} 的结果包含了应用需要发送的推送消息的所有信息：端点及发送数据需要的加密密钥。

Service worker 会在必要的时候启动并接收接下来的推送消息，传递给 {{domxref("ServiceWorkerGlobalScope.onpush")}} 事件句柄。该方法允许将接收到的推送消息使用在应用上，例如通过显示一条通知（使用 {{domxref("ServiceWorkerRegistration.showNotification()")}}）

每一个订阅对 service worker 来说都是唯一的。同时订阅的端点也是一个唯一的 [功能性 URL](http://www.w3.org/TR/capability-urls/)：端点的信息是给应用发送信息的全部必要条件。所以端点地址需要保证隐私，否则其他应用也可以向你的应用发送消息。

激活一个 service worker 来提供推送消息会导致资源消耗的增加，尤其是电池。不同的浏览器对此有不同的方案——目前为止还没有标准的机制。Firefox 允许对发送给应用的推送消息做数量限制（配额）。该限制会在站点每一次被访问之后刷新。相比之下，Chrome 选择不做限制，但要求站点在每一次消息到达后都显示通知，这样可以让用户确认他们仍希望接收消息并确保用户可见性。

> **备注：** 从 Gecko 44 开始，当新的通知触发时，每个应用程序允许的推送消息配额不会增加，而另一个仍然可见，持续三秒钟。 这可以处理收到通知突发的情况，而不是所有通知都会产生可见通知。

> **备注：** 早于 52 的 Chrome 版本要求您在[Google Cloud Messaging](https://developers.google.com/cloud-messaging/)上设置项目以发送推送消息，并在发送推送通知时使用关联的项目编号和 API 密钥。 它还需要一个应用程序清单，其中包含一些使用此服务的特殊参数。

## 接口

- {{domxref("PushEvent")}}
  - : Represents a push action sent to the [global scope](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope) of a {{domxref("ServiceWorker")}}. It contains information sent from an application to a {{domxref("PushSubscription")}}.
- {{domxref("PushManager")}}
  - : Provides a way to receive notifications from third-party servers as well as request URLs for push notifications. This interface has replaced functionality offered by the obsolete {{domxref("PushRegistrationManager")}} interface.
- {{domxref("PushMessageData")}}
  - : Provides access to push data sent by a server, and includes methods to manipulate the received data.
- {{domxref("PushSubscription")}}
  - : Provides a subcription's URL endpoint and allows unsubscription from a push service.

## Service worker additions

The following additions to the [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) have been specified in the Push API spec to provide an entry point for using Push messages. They also monitor and respond to push and subscription change events.

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{readonlyinline}}
  - : Returns a reference to the {{domxref("PushManager")}} interface for managing push subscriptions including subscribing, getting an active subscription, and accessing push permission status. This is the entry point into using Push messaging.
- {{domxref("ServiceWorkerGlobalScope.onpush")}}
  - : An event handler fired whenever a {{Event("push")}} event occurs; that is, whenever a server push message is received.
- {{domxref("ServiceWorkerGlobalScope.onpushsubscriptionchange")}}
  - : An event handler fired whenever a {{Event("pushsubscriptionchange")}} event occurs; for example, when a push subscription has been invalidated, or is about to be invalidated (e.g. when a push service sets an expiration time.)

## 示例

Mozilla's [ServiceWorker Cookbook](https://serviceworke.rs/) 包含很多关于 Push 有用的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Sending VAPID identified WebPush Notifications via Mozilla’s Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [Web Push Notifications: Timely, Relevant, and Precise](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/), Joseph Medley
- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
