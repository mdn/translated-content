---
title: Notification.Notification()
slug: Web/API/Notification/Notification
---

{{APIRef("Web Notifications")}}

**Notification()** 构造函数创建一个新的{{domxref("Notification")}}对象实例。

{{AvailableInWorkers}}

## 语法

```plain
let myNotification = new Notification(title, options);
```

### 参数

- _title_
  - : 定义一个通知的标题，当它被触发时，它将显示在通知窗口的顶部。
- _options_ {{optional_inline}}

  - : options 对象包含应用于通知的任何自定义设置选项。选项有：

    - `dir`: 显示通知的方向。默认是 auto，跟随浏览器语言设置行为，你也可以通过设置 ltr 和 rtl 的值来覆盖该行为（虽然大多数浏览器似乎忽略这些设置）
    - `lang`: 通知的语言，如使用代表一个[BCP 47 语言标签](http://www.rfc-editor.org/rfc/bcp/bcp47.txt)的 {{domxref("DOMString")}} 指定的。请参阅 Sitepoint [ISO 2 字母语言代码](http://www.sitepoint.com/web-foundations/iso-2-letter-language-codes/)页面，以获得简单的参考。
    - badge: 一个 {{domxref("USVString")}} 包含用于表示通知的图像的 URL，当没有足够的空间来显示通知本身时。
    - `body`: 一个 {{domxref("DOMString")}} 表示通知的正文，将显示在标题下方。
    - `tag`: 一个 {{domxref("DOMString")}} 代表通知的 一个识别标签。
    - `icon`: 一个 {{domxref("USVString")}} 包含要在通知中显示的图标的 URL。
    - `image`: 一个 {{domxref("USVSTring")}}包含要在通知中显示的图像的 URL。
    - `data`: 您想要与通知相关联的任意数据。这可以是任何数据类型。
    - `vibrate`: 一个振动模式 [vibration pattern](/zh-CN/docs/Web/Guide/API/Vibration#Vibration_patterns) 设备的振动硬件在通知触发时发出。
    - `renotify`: 一个 {{domxref("Boolean")}} 指定在新通知替换旧通知后是否应通知用户。默认值为 false，这意味着它们不会被通知。
    - `requireInteraction`: 表示通知应保持有效，直到用户点击或关闭它，而不是自动关闭。默认值为 false。

    以下选项列在最新规范中，但在任何浏览器中都不支持。It is advisable to keep checking back regularly to see if the status of these has updated, and let us know if you find any out of date information.

    - `silent`: 一个 {{domxref("Boolean")}} 指明通知是否应该是无声的，即，不需要发出声音或振动，无论设备设置如何。默认值为 false，这意味着它不会保持静默。
    - `sound`:一个 {{domxref("USVString")}} 包含通知触发时要播放的音频文件的 URL。
    - `noscreen`: 一个 {{domxref("Boolean")}} 指定通知触发是否应启用设备的屏幕。默认值为 false，这意味着它将启用屏幕。
    - `sticky`: 一个 {{domxref("Boolean")}} 指明通知是否应该是“粘”, 即不易被用户清理。默认值为 false，这意味着它不会粘。

## 示例

In our [Emogotchi demo](http://mdn.github.io/emogotchi/) ([see source code](https://github.com/mdn/emogotchi)), we run a simple `spawnNotification()` function when we want to fire a notification — this is passed arguments to specify the body, icon and title we want, then it creates the necessary `options` object and fires the notification using the `Notification()` constructor.

```js
function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
    body: theBody,
    icon: theIcon,
  };
  var n = new Notification(theTitle, options);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
