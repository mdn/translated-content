---
title: Notification：Notification() 构造函数
slug: Web/API/Notification/Notification
l10n:
  sourceCommit: 09ad551d5fecae5872328ece2871fdf02b115b6e
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

**`Notification()`** 构造函数创建一个新的代表用户通知的 {{domxref("Notification")}} 对象实例。

> [!NOTE]
> 尝试在 {{domxref("ServiceWorkerGlobalScope")}} 中使用 `Notification()` 构造函数创建通知将抛出 `TypeError`，应该使用 {{domxref("ServiceWorkerRegistration.showNotification()")}}。

## 语法

```js-nolint
new Notification(title)
new Notification(title, options)
```

### 参数

- `title`
  - : 定义一个通知的标题，它将显示在通知窗口的顶部。
- `options` {{optional_inline}}

  - : 一个包含要应用于通知的任何自定义设置的选项对象。可能的选项有：

    - `actions` {{optional_inline}}
      - : 必须未指定或为空数组。`actions` 仅支持使用 {{domxref("ServiceWorkerRegistration.showNotification()")}} 从 service worker 触发的持久通知。
    - `badge` {{optional_inline}}
      - : 一个包含图像 URL 的字符串，用于在没有足够空间显示通知本身时表示通知；例如，Android 通知栏。在 Android 设备上，徽章应适应高达 4 倍分辨率的设备，大约 96x96px，并且图像将被自动遮罩。
    - `body` {{optional_inline}}
      - : 一个表示通知正文的字符串，显示在标题下方，默认值是一个空字符串。
    - `data` {{optional_inline}}
      - : 任意你想要与通知关联的数据。它可以是任何[可结构化克隆](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#支持的类型)的数据类型。默认值为 `null`。
    - `dir` {{optional_inline}}
      - : 显示通知的方向。它默认为 `auto`，即只采用浏览器的语言设置行为，但你可以通过设置 `ltr` 和 `rtl` 的值来覆盖该行为（尽管大多数浏览器似乎忽略这些设置）。
    - `icon` {{optional_inline}}
      - : 一个包含要在通知中显示的图标的 URL 的字符串。
    - `image` {{optional_inline}}
      - : 一个包含要在通知中显示的图像的 URL 的字符串。
    - `lang` {{optional_inline}}
      - : 指定通知的语言，根据 {{RFC(5646, "识别语言的标签（也被称为 BCP47）")}}使用表示语言标签的字符串指定。请参阅 Sitepoint [ISO 2 字母语言代码](https://www.sitepoint.com/iso-2-letter-language-codes/)页面以获取简单参考。默认值为空字符串。
    - `renotify` {{optional_inline}}
      - : 一个布尔值，指定在新通知替换旧通知后是否应通知用户。默认值为 `false`，这意味着用户不会收到通知。如果该值被指定为 `true`，那么必须同时设置 `tag` 参数。
    - `requireInteraction` {{optional_inline}}
      - : 指示通知应保持活动状态，直到用户单击或关闭它，而不是自动关闭。默认值为 `false`。
    - `silent` {{optional_inline}}
      - : 一个布尔值，指定通知是否静音（不发出声音或振动），无论设备设置如何。默认值 `null` 表示使用设备默认值。如果被设置为 `true`，那么不能同时存在 `vibrate` 参数。
    - `tag` {{optional_inline}}
      - : 一个表示通知的识别标签的字符串，默认值是一个空字符串。
    - `timestamp` {{optional_inline}}
      - : 一个以毫秒为单位表示为 {{glossary("Unix time", "Unix 时间")}}的时间戳，表示与通知相关的时间。当通知用于发送由于设备离线而无法立即发送的消息时，该时间戳可能是过去的时间，或者用于即将开始的会议的未来时间。
    - `vibrate` {{optional_inline}}
      - : 设备振动硬件随通知一起发出的[振动模式](/zh-CN/docs/Web/API/Vibration_API#振动模式)。当该值被指定时，`silent` 参数不得设置为 `true`。

### 返回值

一个 {{domxref("Notification")}} 实例对象。

### 异常

- {{jsxref("TypeError")}}
  - : 如果满足以下条件之一，则抛出该异常：
    - 构造函数在 {{domxref("ServiceWorkerGlobalScope")}} 上下文中调用。
    - `actions` 选项被指定且不为空。
    - `silent` 选项是 `true` 且 `vibrate` 选项被同时指定。
    - `renotify` 选项是 `true` 但是 `tag` 选项为空值。
- `DataCloneError` {{domxref("DOMException")}}
  - : 若由于某种原因序列化 `data` 选项失败，则抛出该异常。

## 示例

这是一个最基本的示例，仅在已授予权限时才显示通知。有关更完整的示例，请参阅 {{domxref("Notification")}} 页面。

```js
if (Notification.permission === "granted") {
  const notification = new Notification("你好呀！");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### Chrome 浏览器备注

从 Chrome 49 开始，通知在无痕模式下不起作用。

Android 版 Chrome 会在调用 `Notification` 构造函数时抛出 {{jsxref("TypeError")}}。它仅支持从 Service Worker 中创建通知。有关更多详细信息，请参阅 [Chromium 问题跟踪器](https://crbug.com/481856)。

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
