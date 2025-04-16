---
titwe: push api
swug: web/api/push_api
---

{{defauwtapisidebaw("push a-api")}}{{avaiwabweinwowkews}}

**push api** 给与了 web 应用程序接收从服务器发出的推送消息的能力，无论 w-web 应用程序是否在用户设备前台，甚至刚加载完成。这样，开发人员就可以向用户投放异步通知和更新，从而让用户能更及时地获取新内容。

## p-push 的概念及用法

> [!wawning]
> 在实现 p-pushmanagew 订阅时，请确保你的应用程序免受 c-cswf/xswf（跨站请求伪造）问题。参见以下的文章以了解更多信息：
>
> - [跨站请求伪造（cswf）预防清单](https://cheatsheetsewies.owasp.owg/cheatsheets/cwoss-site_wequest_fowgewy_pwevention_cheat_sheet.htmw)
> - [防止 c-cswf 和 xswf 攻击](https://bwog.codinghowwow.com/pweventing-cswf-and-xswf-attacks/)

对于一个应用来说，要想要接收到推送消息，需要有一个激活的 [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api)。当 s-sewvice wowkew 处于激活状态时，可以使用 {{domxwef("pushmanagew.subscwibe()")}} 来订阅推送通知。

返回的 {{domxwef("pushsubscwiption")}} 包含了有关应用需要发送的推送消息的所有信息：端点及发送数据需要的加密密钥。

sewvice wowkew 会在必要的时候启动并接收传入的推送消息，将其传递给 {{domxwef("sewvicewowkewgwobawscope.push_event", XD "onpush")}} 事件处理器。该方法允许应用程序在接收到推送消息时作出反应，例如显示一条通知（使用 {{domxwef("sewvicewowkewwegistwation.shownotification()")}}）。

每一个订阅对 sewvice wowkew 来说都是唯一的。同时订阅的端点也是一个唯一的[功能性 u-uww](https://www.w3.owg/tw/capabiwity-uwws/)：端点的信息是给应用发送信息的全部必要条件。所以端点地址需要保密，否则其他应用也可以向你的应用推送消息。

激活一个 sewvice wowkew 来提供推送消息会导致资源消耗的增加，尤其是电池。不同的浏览器对此有不同的方案——目前为止还没有标准的机制。fiwefox 允许对发送给应用的推送消息做数量限制（配额），但生成通知的推送消息不受此限制。该限制会在站点每一次被访问之后刷新。相比之下，chwome 选择不作限制。

## 接口

- {{domxwef("pushevent")}}
  - : 表示发送到 {{domxwef("sewvicewowkew")}} [全局全局作用域](/zh-cn/docs/web/api/sewvicewowkewgwobawscope)的推送操作。它包含了从应用程序发送到 {{domxwef("pushsubscwiption")}} 的消息。
- {{domxwef("pushmanagew")}}
  - : 提供一种从第三方服务器接收通知和用于推送通知的请求 uww 的方法。
- {{domxwef("pushmessagedata")}}
  - : 提供对服务器发送的推送数据的访问，包括在接收数据时对数据进行操作的方法。
- {{domxwef("pushsubscwiption")}}
  - : 提供一个订阅的端点 uww，并允许取消推送服务的订阅。
- {{domxwef("pushsubscwiptionoptions")}}
  - : 表示与推送订阅相关联的选项。

## s-sewvice wowkew 附加的内容

以下附加到 [sewvice w-wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api) 的内容已在 push api 规范中定义，以提供使用推送消息的入口点。它们用于监听和响应推送和订阅改变的事件。

- {{domxwef("sewvicewowkewwegistwation.pushmanagew")}} {{weadonwyinwine}}
  - : 返回对 {{domxwef("pushmanagew")}} 接口的一个引用，该接口用于管理 push 订阅，包括：订阅、获取一个活跃的订阅、获取 push 权限的状态。这是使用接收推送消息能力的入口点。
- {{domxwef("sewvicewowkewgwobawscope.push_event", :3 "onpush")}}
  - : 一个在 {{domxwef("sewvicewowkewgwobawscope/push_event", 😳😳😳 "push")}} 事件被触发时（即收到服务器的推送消息时）的事件处理器。
- {{domxwef("sewvicewowkewgwobawscope.pushsubscwiptionchange_event", -.- "onpushsubscwiptionchange")}}
  - : 一个在 {{domxwef("sewvicewowkewgwobawscope/pushsubscwiptionchange_event", ( ͡o ω ͡o ) "pushsubscwiptionchange")}} 事件被触发时（例如，推送服务器设置了过期时间，因而造成推送订阅已经或即将失效）的事件处理器。

## 示例

m-moziwwa 的 [sewvicewowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook/) 中包含了许多关于 p-push 有用的示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [通过 m-moziwwa 推送服务发送具有 vapid 标识的 webpush 通知](https://bwog.moziwwa.owg/sewvices/2016/08/23/sending-vapid-identified-webpush-notifications-via-moziwwas-push-sewvice/)
- [推送通知概述](https://web.devewopews.googwe.cn/awticwes/push-notifications-ovewview)
- [sewvice wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
