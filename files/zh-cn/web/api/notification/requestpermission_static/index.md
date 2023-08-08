---
title: Notification：requestPermission() 静态方法
slug: Web/API/Notification/requestPermission_static
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

> **备注：** Safari 仍然使用回调函数语法来请求权限。[使用 Notifications API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API) 的例子说明了如何检测需使用回调函数语法的情况并以适当的方式运行代码。

{{domxref("Notification")}} 接口的 **`requestPermission()`** 静态方法向用户为当前来源请求显示通知的权限。

## 语法

```js-nolint
// 最新规范已将此方法更新为基于 promise 的语法，其工作方式如下：
Notification.requestPermission()

// 以前，语法是基于一个简单的回调函数；此版本现已弃用：
Notification.requestPermission(callback)
```

### 参数

- `callback` {{optional_inline}} {{deprecated_inline}}
  - : 一个可选的参数为权限请求的结果的回调函数。此参数已废弃，请使用 Promise 的语法。

### 返回值

一个 {{jsxref("Promise")}}，会兑现为一个表示用户选择的权限的字符串。该字符串的可能值为：

- `granted`
- `denied`
- `default`

## 示例

假设如下基本的 HTML：

```html
<button onclick="notifyMe()">通知我！</button>
```

可以按如下方式发送通知——这里我们提供了一组相当详细和完整的代码，如果你想首先检查是否支持通知，然后检查是否已授予当前域名发送通知的权限，然后，如果必需的话，在发送通知前请求权限。

```js
function notifyMe() {
  if (!("Notification" in window)) {
    // 检查浏览器是否支持桌面通知
    alert("此浏览器不支持桌面通知");
  } else if (Notification.permission === "granted") {
    // 检查通知权限是否已经被授予；如果是的话，创建一条通知
    const notification = new Notification("你好呀！");
    // …
  } else if (Notification.permission !== "denied") {
    // 我们需要请求用户的许可
    Notification.requestPermission().then((permission) => {
      // 如果用户同意，让我们创建一个通知
      if (permission === "granted") {
        const notification = new Notification("你好呀！");
        // …
      }
    });
  }

  // 最后，如果用户拒绝了通知，而你想要尊重他们，就没有必要再打扰他们了。
}
```

我们不再在此页面上展示实时示例，因为 Chrome 和 Firefox 不再允许从跨源 {{htmlelement("iframe")}} 请求通知权限，并且其他浏览器也将效仿。要查看实际示例，请查看我们的[待办事项列表示例](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)（参见[实时运行用例](https://mdn.github.io/dom-examples/to-do-notifications/)）。

> **备注：** 在上面的示例中，我们生成通知以响应用户手势（单击按钮）。这不仅仅是最佳实践——你不应该向用户滥发他们不同意的通知——而且未来的浏览器将明确禁止未响应用户手势而触发的通知。例如，Firefox 已经从版本 72 开始这样做了。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notifications API](/zh-CN/docs/Web/API/notification/Using_Web_Notifications)
