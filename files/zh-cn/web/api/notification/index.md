---
title: Notification
slug: Web/API/Notification
l10n:
  sourceCommit: 79f5e2c8ed9833f409e9054e69e02798b83422d1
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Notifications API", "", "", "nocode")}} 的 **`Notification`** 接口用于向用户配置和显示桌面通知。

这些通知的外观和功能因平台而异，但通常它们提供了一种异步向用户提供信息的方式。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("Notification.Notification", "Notification()")}}
  - : 创建一个新的 `Notification` 实例对象。

## 静态属性

_还继承了其父接口 {{domxref("EventTarget")}} 的属性。_

- {{domxref("Notification.permission_static", "Notification.permission")}} {{ReadOnlyInline}}
  - : 一个字符串，表示当前显示通知的权限。可能的值是：
    - `denied`——用户拒绝显示通知。
    - `granted`——用户接受显示通知。
    - `default`——用户选择是未知的，因此浏览器的行为类似于值是 denied。

- {{domxref("Notification.maxActions_static", "Notification.maxActions")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 设备和用户代理支持的最大的操作数量。

## 实例属性

_还继承了其父接口 {{domxref("EventTarget")}} 的属性。_

- {{domxref("Notification.actions")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 在构造函数的 `options` 参数中指定的通知的操作的数组。
- {{domxref("Notification.badge")}} {{ReadOnlyInline}}
  - : 返回一个包含图像 URL 的字符串，在没有足够的空间来显示通知本身（例如 Android 通知栏）时表示通知。在 Android 设备上，徽章应适应高达 4 倍分辨率（约 96 x 96 像素）的设备，并且图像将自动屏蔽。
- {{domxref("Notification.body")}} {{ReadOnlyInline}}
  - : 在构造函数的 `options` 参数中指定的通知的正文字符串。
- {{domxref("Notification.data")}} {{ReadOnlyInline}}
  - : 返回一个通知数据的结构化克隆。
- {{domxref("Notification.dir")}} {{ReadOnlyInline}}
  - : 在构造函数的 `options` 参数中指定的通知的文本方向。
- {{domxref("Notification.icon")}} {{ReadOnlyInline}}
  - : 在构造函数的 `options` 参数中用作指定通知图标的图像 URL。
- {{domxref("Notification.image")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 在构造函数的 `options` 参数中用作指定作为通知的一部分显示的图像 URL。
- {{domxref("Notification.lang")}} {{ReadOnlyInline}}
  - : 在构造函数的 `options` 参数中指定的通知的语言代码。
- {{domxref("Notification.renotify")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 指定在新通知取代旧通知后，是否应该通知用户。
- {{domxref("Notification.requireInteraction")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示通知应该保持活动状态，直到用户点击或者关掉它，而不是自动关闭。
- {{domxref("Notification.silent")}} {{ReadOnlyInline}}
  - : 指定通知是否应该静音——即，无论设备的设置如何，都不应发出声音和振动。
- {{domxref("Notification.tag")}} {{ReadOnlyInline}}
  - : 在构造函数的 `options` 参数中指定的通知的 ID（如果有的话）。
- {{domxref("Notification.timestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 指定通知创建或者应用时（过去、现在或者未来）的时间。
- {{domxref("Notification.title")}} {{ReadOnlyInline}}
  - : 在构造函数的第一个参数中指定的通知标题。
- {{domxref("Notification.vibrate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 为拥有振动硬件的终端设备指定振动模式。

## 静态方法

_还继承了其父接口 {{domxref("EventTarget")}} 的方法。_

- {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}}
  - : 请求用户显示通知的权限。

## 实例方法

_还继承了其父接口 {{domxref("EventTarget")}} 的方法。_

- {{domxref("Notification.close()")}}
  - : 以编程方式关闭通知实例。

## 事件

_还继承了其父接口 {{domxref("EventTarget")}} 的事件。_

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
<button onclick="notifyMe()">提醒我！</button>
```

可以按如下方式发送通知——在这里，我们提供了一个相当详细且完整的代码，如果你想要首先检查通知是否受支持，然后检查用户是否已授予当前源发送通知的权限，然后根据需要请求权限，最后发送一个通知。

```js
function notifyMe() {
  if (!("Notification" in window)) {
    // 检查浏览器是否支持通知
    alert("当前浏览器不支持桌面通知");
  } else if (Notification.permission === "granted") {
    // 检查是否已授予通知权限；如果是的话，创建一个通知
    const notification = new Notification("你好！");
    // …
  } else if (Notification.permission !== "denied") {
    // 我们需要征求用户的许可
    Notification.requestPermission().then((permission) => {
      // 如果用户接受，我们就创建一个通知
      if (permission === "granted") {
        const notification = new Notification("你好！");
        // …
      }
    });
  }

  // 最后，如果用户拒绝了通知，并且你想尊重用户的选择，则无需再打扰他们
}
```

在这里，我们不再展示一个在线实例，因为 Chrome 和 Firefox 不再允许从跨源的 {{htmlelement("iframe")}} 请求通知权限，其他浏览器会陆续跟进。要查看实际示例，请查看我们的[待办事项示例](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（参见[在线运行的应用程序](https://mdn.github.io/dom-examples/to-do-notifications/)）。

> [!NOTE]
> 在上面的示例中，我们生成了响应用户手势的通知（点击按钮）。这不仅仅是最佳实践——你不应该向用户发送它们不同意的通知——而且未来浏览器将明确的禁止未响应用户手势发出的通知。例如，Firefox 已经从版本 72 开始就这么做了。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
