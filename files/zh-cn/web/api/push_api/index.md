---
title: Push API
slug: Web/API/Push_API
---

{{DefaultAPISidebar("Push API")}}{{AvailableInWorkers}}

**Push API** 给与了 Web 应用程序接收从服务器发出的推送消息的能力，无论 Web 应用程序是否在用户设备前台，甚至刚加载完成。这样，开发人员就可以向用户投放异步通知和更新，从而让用户能更及时地获取新内容。

## Push 的概念及用法

> [!WARNING]
> 在实现 PushManager 订阅时，请确保你的应用程序免受 CSRF/XSRF（跨站请求伪造）问题。参见以下的文章以了解更多信息：
>
> - [跨站请求伪造（CSRF）预防清单](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
> - [防止 CSRF 和 XSRF 攻击](https://blog.codinghorror.com/preventing-csrf-and-xsrf-attacks/)

对于一个应用来说，要想要接收到推送消息，需要有一个激活的 [service worker](/zh-CN/docs/Web/API/Service_Worker_API)。当 service worker 处于激活状态时，可以使用 {{domxref("PushManager.subscribe()")}} 来订阅推送通知。

返回的 {{domxref("PushSubscription")}} 包含了有关应用需要发送的推送消息的所有信息：端点及发送数据需要的加密密钥。

Service worker 会在必要的时候启动并接收传入的推送消息，将其传递给 {{domxref("ServiceWorkerGlobalScope.push_event", "onpush")}} 事件处理器。该方法允许应用程序在接收到推送消息时作出反应，例如显示一条通知（使用 {{domxref("ServiceWorkerRegistration.showNotification()")}}）。

每一个订阅对 service worker 来说都是唯一的。同时订阅的端点也是一个唯一的[功能性 URL](https://www.w3.org/TR/capability-urls/)：端点的信息是给应用发送信息的全部必要条件。所以端点地址需要保密，否则其他应用也可以向你的应用推送消息。

激活一个 service worker 来提供推送消息会导致资源消耗的增加，尤其是电池。不同的浏览器对此有不同的方案——目前为止还没有标准的机制。Firefox 允许对发送给应用的推送消息做数量限制（配额），但生成通知的推送消息不受此限制。该限制会在站点每一次被访问之后刷新。相比之下，Chrome 选择不作限制。

## 接口

- {{domxref("PushEvent")}}
  - : 表示发送到 {{domxref("ServiceWorker")}} [全局全局作用域](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope)的推送操作。它包含了从应用程序发送到 {{domxref("PushSubscription")}} 的消息。
- {{domxref("PushManager")}}
  - : 提供一种从第三方服务器接收通知和用于推送通知的请求 URL 的方法。
- {{domxref("PushMessageData")}}
  - : 提供对服务器发送的推送数据的访问，包括在接收数据时对数据进行操作的方法。
- {{domxref("PushSubscription")}}
  - : 提供一个订阅的端点 URL，并允许取消推送服务的订阅。
- {{domxref("PushSubscriptionOptions")}}
  - : 表示与推送订阅相关联的选项。

## Service worker 附加的内容

以下附加到 [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API) 的内容已在 Push API 规范中定义，以提供使用推送消息的入口点。它们用于监听和响应推送和订阅改变的事件。

- {{domxref("ServiceWorkerRegistration.pushManager")}} {{ReadOnlyInline}}
  - : 返回对 {{domxref("PushManager")}} 接口的一个引用，该接口用于管理 push 订阅，包括：订阅、获取一个活跃的订阅、获取 push 权限的状态。这是使用接收推送消息能力的入口点。
- {{domxref("ServiceWorkerGlobalScope.push_event", "onpush")}}
  - : 一个在 {{domxref("ServiceWorkerGlobalScope/push_event", "push")}} 事件被触发时（即收到服务器的推送消息时）的事件处理器。
- {{domxref("ServiceWorkerGlobalScope.pushsubscriptionchange_event", "onpushsubscriptionchange")}}
  - : 一个在 {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}} 事件被触发时（例如，推送服务器设置了过期时间，因而造成推送订阅已经或即将失效）的事件处理器。

## 示例

Mozilla 的 [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook/) 中包含了许多关于 Push 有用的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [通过 Mozilla 推送服务发送具有 VAPID 标识的 WebPush 通知](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)
- [推送通知概述](https://web.developers.google.cn/articles/push-notifications-overview)
- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
