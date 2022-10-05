---
title: notification
slug: Web/API/notification
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

[Notifications API](/zh-CN/docs/Web/API/Notifications_API) 的**通知**接口用于向用户配置和显示桌面通知。

## 构造方法

```
let notification = new Notification(title, options)
```

### 参数

- `title`
  - : 一定会被显示的通知标题
- `options` {{optional_inline}}

  - : 一个被允许用来设置通知的对象。它包含以下属性：

    - `dir` : 文字的方向；它的值可以是 `auto（自动）`, `ltr（从左到右）`, or `rtl`（从右到左）
    - `lang`: 指定通知中所使用的语言。这个字符串必须在 [BCP 47 language tag](http://tools.ietf.org/html/bcp47) 文档中是有效的。
    - `body`: 通知中额外显示的字符串
    - `tag`: 赋予通知一个 ID，以便在必要的时候对通知进行刷新、替换或移除。
    - `icon`: 一个图片的 URL，将被用于显示通知的图标。

## 属性

### 静态属性

这些属性仅在 `Notification` 对象上有效。

- {{domxref("Notification.permission")}} {{readonlyinline}}
  - : 一个用于表明当前通知显示授权状态的字符串。可能的值包括：`denied` (用户拒绝了通知的显示), `granted` (用户允许了通知的显示), 或 `default` (因为不知道用户的选择，所以浏览器的行为与 denied 时相同).

### 实例属性

这些属性仅在 `Notification` 的实例中有效。

- {{domxref("Notification.title")}} {{readonlyinline}} (moz only)
  - : 在构造方法中指定的 title 参数。
- {{domxref("Notification.dir")}} {{readonlyinline}}
  - : 通知的文本显示方向。在构造方法的 options 中指定。
- {{domxref("Notification.lang")}} {{readonlyinline}}
  - : 通知的语言。在构造方法的 options 中指定。
- {{domxref("Notification.body")}} {{readonlyinline}}
  - : 通知的文本内容。在构造方法的 options 中指定。
- {{domxref("Notification.tag")}} {{readonlyinline}}
  - : 通知的 ID。在构造方法的 options 中指定。
- {{domxref("Notification.icon")}} {{readonlyinline}}
  - : 通知的图标图片的 URL 地址。在构造方法的 options 中指定。

#### 事件处理

- {{domxref("Notification.onclick")}}
  - : 处理 {{event("click")}} 事件的处理。每当用户点击通知时被触发。
- {{domxref("Notification.onshow")}}
  - : 处理 {{event("show")}} 事件的处理。当通知显示的时候被触发。
- {{domxref("Notification.onerror")}}
  - : 处理 {{event("error")}} 事件的处理。每当通知遇到错误时被触发。
- {{domxref("Notification.onclose")}}
  - : 处理 {{event("close")}} 事件的处理。当用户关闭通知时被触发。

## 方法

### 静态方法

这些方法仅在 `Notification` 对象中有效。

- {{domxref("Notification.requestPermission()")}}
  - : 用于当前页面向用户申请显示通知的权限。这个方法只能被用户行为调用（比如：onclick 事件），并且不能被其他的方式调用。

### 实例方法

这些方法仅在 `Notification` 实例或其 [`prototype`](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) 中有效。

- {{domxref("Notification.close()")}}
  - : 用于关闭通知。

`Notification` 对象继承自 {{domxref("EventTarget")}} 接口。

{{page("/en-US/docs/Web/API/EventTarget","Methods")}}

## Example

假定有如下 HTML：

```html
<button onclick="notifyMe()">Notify me!</button>
```

接下来发送一条通知：

```js
function notifyMe() {
  // 先检查浏览器是否支持
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // 检查用户是否同意接受通知
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // 否则我们需要向用户获取权限
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // 如果用户接受权限，我们就可以发起一条消息
      if (permission === "granted") {
         var notification = new Notification("Hi there!");
      }
    });
  }


  // 最后，如果执行到这里，说明用户已经拒绝对相关通知进行授权
  // 出于尊重，我们不应该再打扰他们了
}
```

### See the live result

{{ EmbedLiveSample('Example', '100%', 30) }}

## 规范

{{Specifications}}

## 权限

当你要在开放 web 应用中使用通知时，请确保将 `desktop-notification` 权限添加到你的 manifest 文件中。通知可以被用于任何权限级别，hosted 或更高。

```
"permissions": {
    "desktop-notification":{}
}
```

## 浏览器兼容性

{{Compat}}

## 请参见

- [使用 Web Notifications](/zh-CN/docs/Web/API/notification/Using_Web_Notifications)
- [Firefox OS 图片上传器示例 App](https://github.com/soapdog/firefoxos-sample-app-image-uploader)
- <https://codepen.io/xgqfrms/pen/vxaQKe>
