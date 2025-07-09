---
title: ServiceWorkerRegistration：showNotification() 方法
slug: Web/API/ServiceWorkerRegistration/showNotification
l10n:
  sourceCommit: 09ad551d5fecae5872328ece2871fdf02b115b6e
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

{{domxref("ServiceWorkerRegistration")}} 接口的 **`showNotification()`** 方法在一个活动状态下的 Service Worker 上创建通知。

## 语法

```js-nolint
showNotification(title)
showNotification(title, options)
```

### 参数

- `title`
  - : 定义通知的标题，显示在通知窗口的顶部。
- `options` {{optional_inline}}
  - : 允许配置通知的对象。它可以具有以下属性：
    - `actions` {{optional_inline}} {{experimental_inline}}
      - : 要在通知中显示的一系列操作的数组，默认值为空数组。数组中的每个元素都是一个具有以下成员的对象：
        - `action`
          - : 一个标识要在通知上显示的用户操作的字符串。
        - `title`
          - : 一个包含要向用户显示的操作文本的字符串。
        - `icon` {{optional_inline}}
          - : 一个包含与操作一起显示的图标 URL 的字符串。

        使用 {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} 事件中的 `event.action` 构建适当的响应。

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : 一个当没有足够的空间来显示通知本身（例如 Android 通知栏）时来表示通知的图像 URL 的字符串。在 Android 设备上，徽章应适应高达 4 倍分辨率（约 96 x 96 像素）的设备，并且图像将被自动遮罩。
    - `body` {{optional_inline}}
      - : 一个表示通知正文的字符串，显示在标题下方，默认值是一个空字符串。
    - `data` {{optional_inline}} {{experimental_inline}}
      - : 你想要与通知关联的任意数据。它可以是任何[可结构化克隆](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#支持的类型)的数据类型。默认值为 `null`。
    - `dir` {{optional_inline}}
      - : 表示通知的方向。默认为 `auto`，即采用浏览器的语言设置行为，但你可以通过设置 `ltr` 和 `rtl` 的值来覆盖该行为（尽管大多数浏览器似乎会忽略这些设置）。
    - `icon` {{optional_inline}}
      - : 一个包含要在通知中显示的图标的 URL 的字符串。
    - `image` {{optional_inline}} {{experimental_inline}}
      - : 一个包含要在通知中显示的图像的 URL 的字符串。
    - `lang` {{optional_inline}}
      - : 指定通知的语言，根据 {{RFC(5646, "识别语言的标签（也被称为 BCP47）")}}使用表示语言标签的字符串指定。请参阅 Sitepoint [ISO 2 字母语言代码](https://www.sitepoint.com/iso-2-letter-language-codes/)页面以获取简单参考。默认值为空字符串。
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : 一个布尔值，指示重复使用 `tag` 值时是否阻止振动和声音提醒。默认为 `false`，表示不会通知。如果为 `true`，则还必须设置 `tag` 参数。
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : 表示通知应保持活动状态直到用户点击或关闭它，而不是自动关闭。默认值为 `false`。
    - `silent` {{optional_inline}}
      - : 一个布尔值，用于指定通知是否静音（不发出声音或振动），无论设备设置如何。默认值为 `null`，表示遵循设备默认值。如果为 `true`，则 `vibrate` 参数不得指定。
    - `tag` {{optional_inline}}
      - : 表示通知的标签的字符串。默认值为空字符串。
    - `timestamp` {{optional_inline}}
      - : 一个时间戳，以毫秒为单位的 {{glossary("Unix time", "Unix 时间")}}，表示与通知关联的时间。这可能是在过去，当通知用于因设备离线而无法立即发送的消息时，或者在将来，当通知用于即将开始的会议时。
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : 设备振动硬件随通知一起发出的[振动模式](/zh-CN/docs/Web/API/Vibration_API#振动模式)。当该值被指定时，`silent` 参数不得设置为 `true`。

### 返回值

一个兑现 `undefined` 的 {{jsxref('Promise')}}。

### 异常

- `TypeError`
  - : 如果当前 Service Worker 的状态不是 `activating` 或 `activated`，或者用户明确拒绝了浏览器使用 API 的权限请求，则抛出该异常。
- {{jsxref("TypeError")}}
  - : 如果满足以下条件之一，则抛出该异常：
    - 当前 service worker 的状态不是 `activating` 或 `activated`。
    - 用户已明确拒绝浏览器使用该 API 的权限请求。
    - `silent` 选项是 `true` 且 `vibrate` 选项被同时指定。
    - `renotify` 选项是 `true` 但是 `tag` 选项为空值。
- `DataCloneError` {{domxref("DOMException")}}
  - : 若由于某种原因序列化 `data` 选项失败，则抛出该异常。

## 示例

```js
navigator.serviceWorker.register("sw.js");

function showNotification() {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz!",
          icon: "../images/touch/chrome-touch-icon-192x192.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}
```

要在适当的时间调用上述函数，你可以监听 {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} 事件。

你还可以使用以下 {{domxref("ServiceWorkerRegistration.getNotifications()")}} 方法检索当前 Service Worker 已触发的 {{domxref("Notification")}} 的详细信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
