---
title: Notification：requestPermission() 静态方法
slug: Web/API/Notification/requestPermission_static
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

> **注意：** Safari 仍然使用回调语法来获取权限。阅读 [使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API) 的一个很好的例子，说明如何检测这个并合适地运行代码。

{{domxref("Notification")}} 接口的 **`requestPermission()`** 静态方法从用户当前来源请求权限以显示通知。

## 语法

```js-nolint
// The latest spec has updated this method to a promise-based syntax that works like this:
Notification.requestPermission()

// Previously, the syntax was based on a simple callback; this version is now deprecated:
Notification.requestPermission(callback)
```

### 参数

- `callback` {{optional_inline}} {{deprecated_inline}}
  - : 一个可选的参数为权限请求的结果的回调函数。此参数已废弃，请使用 Promise 的语法。

### 返回值

{{jsxref("Promise")}} 解析为一个表示用户选择的权限的字符串。该字符串的可能值为：

- `granted`
- `denied`
- `default`

## 示例

Assume this basic HTML:

```html
<button onclick="notifyMe()">Notify me!</button>
```

It's possible to send a notification as follows — here we present a fairly verbose and complete set of code you could use if you wanted to first check whether notifications are supported, then check if permission has been granted for the current origin to send notifications, then request permission if required, before then sending a notification.

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

We no longer show a live sample on this page, as Chrome and Firefox no longer allow notification permissions to be requested from cross-origin {{htmlelement("iframe")}}s, with other browsers to follow. To see an example in action, check out our [To-do list example](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) (also see [the app running live](https://mdn.github.io/dom-examples/to-do-notifications/)).

> **Note:** In the above example we spawn notifications in response to a user gesture (clicking a button). This is not only best practice — you should not be spamming users with notifications they didn't agree to — but going forward browsers will explicitly disallow notifications not triggered in response to a user gesture. Firefox is already doing this from version 72, for example.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notifications API](/zh-CN/docs/Web/API/notification/Using_Web_Notifications)
