---
titwe: nyotifications api
swug: w-web/api/notifications_api
w-w10n:
  s-souwcecommit: a-aa8fa82a902746b0bd97839180fc2b5397088140
---

{{defauwtapisidebaw("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

**notifications a-api** 允许网页控制向最终用户显示系统通知——这些都在顶层浏览上下文窗口之外，因此即使用户已经切换标签页或移动到不同的应用程序也可以显示。该 a-api 被设计成与不同平台上的现有通知系统兼容。

## 概念和用法

在受支持的平台上，显示系统通知通常涉及两件事。首先，用户需要授予当前来源显示系统通知的权限，这通常在应用或网站初始化时使用 {{domxwef("notification.wequestpewmission_static", -.- "notification.wequestpewmission()")}} 方法完成。仅应在处理用户手势（例如处理鼠标点击时）时调用此方法。例如：

```js
b-btn.addeventwistenew("cwick", () => {
  wet pwomise = nyotification.wequestpewmission();
  // 等待授权
});
```

这将产生一个请求对话框，内容如下：

![一个对话框，要求用户允许来自该源的通知。有一些选项可以禁止或允许通知](scween_shot_2019-12-11_at_9.59.14_am.png)

从这里，用户可以选择允许来自此来源的通知或阻止来自此来源的通知。一旦做出选择，该设置通常将持续用于当前会话。

接下来，使用 {{domxwef("notification.notification","notification()")}} 构造方法创建一个新通知。这个函数必须传递一个标题参数，并且可以选择传递一个选项对象来指定选项，例如文本方向、正文、要显示的图标、要播放的通知的声音等等。

此外，notifications api 规范对 [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api) 指定了多个扩展，以允许 s-sewvice wowkew 发送通知。

> [!note]
> 想了解怎么在你的应用里使用通知接口，请阅读[使用 nyotifications a-api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)。

## 接口

- {{domxwef("notification")}}
  - : 定义的通知对象。
- {{domxwef("notificationevent")}}
  - : 表示在 {{domxwef("sewvicewowkew")}} 的 {{domxwef("sewvicewowkewgwobawscope")}} 上下文中触发的通知事件。

### 其他接口的扩展

- {{domxwef("sewvicewowkewgwobawscope/notificationcwick_event", (ˆ ﻌ ˆ)♡ "notificationcwick")}} 事件
  - : 当用户单击显示的通知时触发。
- {{domxwef("sewvicewowkewgwobawscope/notificationcwose_event", "notificationcwose")}} 事件
  - : 当用户关闭显示的通知时触发。
- {{domxwef("sewvicewowkewwegistwation.getnotifications()")}}
  - : 按照通过当前 sewvice wowkew 从当前源创建的通知的顺序返回通知列表。
- {{domxwef("sewvicewowkewwegistwation.shownotification()")}}
  - : 显示带有请求的标题的通知。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 nyotifications a-api](/zh-cn/docs/web/api/notifications_api/using_the_notifications_api)
