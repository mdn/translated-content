---
title: Notification
slug: Web/API/Notification
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

[Notifications API](/zh-CN/docs/Web/API/Notifications_API) 的接口 `Notification` 用于配置以向用户显示桌面通知。

这些通知的外观和功能因平台而异，但通常它们会提供一种异步向用户提供信息的方式。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("Notification.Notification", "Notification()")}}
  - : 创建一个新的 `Notification` 实例对象。

## 静态属性

这些属性只能用于 `Notification` 对象自身。

- {{domxref("Notification.permission")}} {{ReadOnlyInline}}

  - : 一个字符串，表示当前显示通知的权限。可能的值是：

    - `denied`——用户拒绝显示通知。
    - `granted`——用户接受显示通知。
    - `default`——用户选择是未知的，因此浏览器的行为类似于值是 denied。

- {{domxref("Notification.maxActions")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 设备和用户代理支持的最大的操作数量。

## 实例属性

这些属性仅用于 `Notification` 实例对象上。

- {{domxref("Notification.actions")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 在构造函数的 `options` 参数中指定的通知的操作数组。
- {{domxref("Notification.badge")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 当没有足够的空间去显示通知自身时，用于表示通知图像的 URL。
- {{domxref("Notification.body")}} {{ReadOnlyInline}}
  - : 在构造函数的 `options` 参数中指定的通知的正文字符串。
- {{domxref("Notification.data")}} {{ReadOnlyInline}}
  - : 返回一个通知数据的结构化克隆。
- {{domxref("Notification.dir")}} {{ReadOnlyInline}}
  - : 在构造函数的 `options` 参数中指定的通知的文本方向。
- {{domxref("Notification.lang")}} {{ReadOnlyInline}}
  - : 在构造函数的 `options` 参数中指定的通知的语言。
- {{domxref("Notification.tag")}} {{ReadOnlyInline}}
  - : 在构造函数的 `options` 参数中指定的通知的 ID（如果有的话）。
- {{domxref("Notification.icon")}} {{ReadOnlyInline}}
  - : 在构造函数的 `options` 参数中用作指定通知图标的图像 URL。
- {{domxref("Notification.image")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 作为通知的一部分显示的图像 URL，在构造函数的选项参数中指定。
- {{domxref("Notification.renotify")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 指定在新通知取代旧通知后，是否应该通知用户。
- {{domxref("Notification.requireInteraction")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 一个布尔值，表示通知应该保持活动状态，直到用户点击或者关掉它，而不是自动关闭。
- {{domxref("Notification.silent")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 指定通知是否应该静音——即，无论设备的设置如何，都不应发出声音和摆动。
- {{domxref("Notification.timestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 指定通知创建或者应用时（过去、现在或者未来）的时间。
- {{domxref("Notification.title")}} {{ReadOnlyInline}}
  - : 在构造函数第一个参数中指定的通知标题。
- {{domxref("Notification.vibrate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 为拥有振动硬件的终端设备指定振动模式。

## 静态方法

这些属性只能用于 `Notification` 对象自身。

- {{domxref("Notification.requestPermission()")}}
  - : 请求用户允许显示通知。

## 实例方法

这些属性仅用于 `Notification` 实例对象或者通过 [`prototype`](/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) 提供。`Notification` 对象也继承自 {{domxref("EventTarget")}} 接口。

- {{domxref("Notification.close()")}}
  - : 以编程方式关闭通知实例。

## 事件

- {{domxref("Notification.click_event", "click")}}
  - : 当用户点击通知时触发。
- {{domxref("Notification.close_event", "close")}}
  - : 当用户关闭通知时触发。
- {{domxref("Notification.error_event", "error")}}
  - : 当通知发生错误时触发。
- {{domxref("Notification.show_event", "show")}}
  - : 当通知显示时触发。

## 示例

假定有如下 HTML：

```html
<button onclick="notifyMe()">Notify me!</button>
```

可能按以下方式发送通知——在这里，我们提供了一个相当冗长且完整的代码，如果你想要首先检查通知是否受支持，然后检查用户是否已授予当前来源发送通知的权限，然后根据需要请求权限，最后发送一个通知。

```js
function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}
```

在这里，我们不再展示一个在线实例，因为 Chrome 和 Firefox 不再允许从跨域的 {{htmlelement("iframe")}} 请求通知权限，其他浏览器会陆续跟进。要查看实际示例，请查看我们的[待办事项示例](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（参见[在线运行的应用程序](https://mdn.github.io/dom-examples/to-do-notifications/)）。

> **备注：** 在上面的示例中，我们生成了响应用户手势的的通知（点击按钮）。这是最佳实践——你不应该向用户发送它们不同意的通知——而且未来浏览器将明确的禁止未响应用户手势发出的通知。例如，Firefox 已经从版本 72 开始就这么做了。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
