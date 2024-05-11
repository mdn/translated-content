---
title: ServiceWorkerRegistration：showNotification() 方法
slug: Web/API/ServiceWorkerRegistration/showNotification
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
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
  - : 通知中必须显示的标题。
- `options` {{optional_inline}}

  - : 允许配置通知的对象。它可以具有以下属性：

    - `actions` {{optional_inline}} {{experimental_inline}}

      - : 要在通知中显示的一系列操作的数组。数组中的每个元素都是一个具有以下成员的对象：

        - `action`
          - : 一个标识要在通知上显示的用户操作的字符串。
        - `title`
          - : 一个包含要向用户显示的操作文本的字符串。
        - `icon` {{optional_inline}}
          - : 一个包含与操作一起显示的图标 URL 的字符串。

        使用 {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} 事件中的 `event.action` 构建适当的响应。

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : 一个当没有足够的空间来显示通知本身（例如 Android 通知栏）时来表示通知的图像 URL 的字符串。在 Android 设备上，徽章应适应高达 4 倍分辨率（约 96 x 96 像素）的设备，并且图像将自动屏蔽。
    - `body` {{optional_inline}}
      - : 表示要在通知中显示的额外内容的字符串。
    - `data` {{optional_inline}} {{experimental_inline}}
      - : 你想要与通知关联的任意数据。这可以是任何数据类型。
    - `dir` {{optional_inline}}
      - : 表示通知的方向；它可以是 `auto`、`ltr` 或 `rtl`。
    - `icon` {{optional_inline}}
      - : 一个包含要在通知中显示的图标的 URL 的字符串。
    - `image` {{optional_inline}} {{experimental_inline}}
      - : 一个包含要在通知中显示的图像的 URL 的字符串。
    - `lang` {{optional_inline}}
      - : 指定通知中使用的语言。根据 {{RFC(5646, "识别语言的标签（也被称为 BCP47）")}}，此字符串必须是有效的语言标签。
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : 一个布尔值，指示重复使用 `tag` 值时是否阻止振动和声音提醒。如果 _options_ 参数的 `renotify` 属性为 `true` 并且 _options_ 参数的 `tag` 属性是空字符串，则会抛出 `TypeError`。默认为 `false`。
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : 指示在屏幕足够大的设备上，通知应保持活动状态，直到用户单击或关闭它。如果此值不存在或为 `false`，桌面版 Chrome 将在大约二十秒后自动最小化通知。默认值为 `false`。
    - `silent` {{optional_inline}}
      - : 设置后表示不应发出声音或振动。如果 _options_ 参数的 `silent` 属性为 `true` 并且 _options_ 参数的 `vibrate` 属性存在，则会抛出 `TypeError` 异常。默认值为 `false`。
    - `tag` {{optional_inline}}
      - : 给定通知的 ID，允许你在必要时使用脚本查找、替换或删除通知。
    - `timestamp` {{optional_inline}}
      - : 一个时间戳，以毫秒为单位的 {{glossary("Unix time")}}，表示与通知关联的时间。这可能是在过去，当通知用于因设备离线而无法立即发送的消息时，或者在将来，当通知用于即将开始的会议时。
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : 一个与通知显示一起运行的振动模式。振动模式可以是只有一个成员的阵列。这些值是以毫秒为单位的时间，其中偶数索引（0、2、4 等）表示振动多长时间，奇数索引表示暂停多长时间。例如，`[300, 100, 400]` 会振动 300 毫秒，暂停 100 毫秒，然后振动 400 毫秒。

### 返回值

一个兑现 `undefined` 的 {{jsxref('Promise')}}。

### 异常

- `TypeError`
  - : 如果当前 Service Worker 的状态不是 `activating` 或 `activated`，或者用户明确拒绝了浏览器使用 API 的权限请求，则抛出该异常。

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
