---
title: Notification：permission 静态属性
slug: Web/API/Notification/permission_static
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`permission`** 只读静态属性表明当前用户是否授予当前来源（origin）显示 web 通知的权限。

## 值

一个表示当前权限的字符串。其值可以是：

- `granted`
  - : 用户已经明确地授予了当前来源显示系统通知的权限。
- `denied`
  - : 用户已经明确地拒绝了当前来源显示系统通知的权限。
- `default`
  - : 用户是否授予当前来源显示系统通知的权限的决定是未知的；在这种情况下，应用的行为与该值为 `denied` 的情况相同。

## 示例

如果你想首先检查是否支持通知，然后检查是否已授予当前来源发送通知的权限，然后在发送通知之前请求权限（如果需要），则可以使用以下代码段。

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
  // 最后，如果用户拒绝了通知，而你想要尊重他们，就没有必要再打扰他们了
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Notification API](/zh-CN/docs/Web/API/Notifications_API)
- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [Permission API](/zh-CN/docs/Web/API/Permissions_API)
- [使用 Permission API](/zh-CN/docs/Web/API/Permissions_API/Using_the_Permissions_API)
