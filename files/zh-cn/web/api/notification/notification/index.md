---
title: Notification：Notification() 构造函数
slug: Web/API/Notification/Notification
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

**`Notification()`** 构造函数创建一个新的代表用户通知的 {{domxref("Notification")}} 对象实例。

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

    - `dir`
      - : 显示通知的方向。它默认为 `auto`，即只采用浏览器的语言设置行为，但你可以通过设置 `ltr` 和 `rtl` 的值来覆盖该行为（尽管大多数浏览器似乎忽略这些设置）。
    - `lang`
      - : 指定通知的语言，根据{{RFC(5646, "识别语言的标签（也被称为 BCP47）")}}使用表示语言标签的字符串指定。请参阅 Sitepoint [ISO 2 字母语言代码](https://www.sitepoint.com/iso-2-letter-language-codes/)页面以获取简单参考。
    - `badge`
      - : 一个包含图像 URL 的字符串，用于在没有足够空间显示通知本身时表示通知。
    - `body`
      - : 一个表示通知正文的字符串，显示在标题下方。
    - `tag`
      - : 一个表示通知的识别标签的字符串，默认值是一个空字符串。
    - `icon`
      - : 一个包含要在通知中显示的图标的 URL 的字符串。
    - `image`
      - : 一个包含要在通知中显示的图像的 URL 的字符串。
    - `data`
      - : 任意你想要与通知关联的数据。它可以是任何数据类型。
    - `vibrate`
      - : 设备振动硬件随通知一起发出的[振动模式](/zh-CN/docs/Web/API/Vibration_API#振动模式)。当该值被指定时，`silent` 参数不得设置为 `true`。
    - `renotify`
      - : 一个布尔值，指定在新通知替换旧通知后是否应通知用户。默认值为 `false`，这意味着他们不会收到通知。如果该值被指定为 `true`，那么必须同时设置 `tag` 参数。
    - `requireInteraction`
      - : 指示通知应保持活动状态，直到用户单击或关闭它，而不是自动关闭。默认值为 `false`。
    - `actions`

      - : 要在通知中显示的一系列操作的数组。数组中的每个元素都是一个具有以下成员的对象：

        - `action`：一个标识要在通知上显示的用户操作的字符串。
        - `title`：一个包含要向用户显示的操作文本的字符串。
        - `icon`：一个包含与操作一起显示的图标 URL 的字符串。

        使用 {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} 事件中的 `event.action` 构建适当的响应。

    - `silent`
      - : 一个布尔值，指定通知是否静音（不发出声音或振动），无论设备设置如何。默认值为 `false`，这意味着它不会保持静音。如果被设置为 `true`，那么不能同时传递 `vibrate` 参数。

### 异常

- {{jsxref("TypeError")}}
  - : 如果满足以下条件之一，则抛出该异常：
    - `options.silent` 是 `true` 且同时指定了 `options.vibrate`。
    - `options.renotify` 是 `true` 但是 `options.tag` 为空值。

## 示例

在我们的 [`Emogotchi` 演示](https://chrisdavidmills.github.io/emogotchi/)（[查看源代码](https://github.com/chrisdavidmills/emogotchi)）中，当我们想要触发通知时，我们运行 `spawnNotification()` 函数。该函数传递参数来指定我们想要的正文、图标和标题，然后它创建必要的 `options` 对象并使用 `Notification()` 构造函数触发通知。

```js
function spawnNotification(body, icon, title) {
  const notification = new Notification(title, { body, icon });
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
