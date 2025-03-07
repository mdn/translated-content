---
title: Notification：silent 属性
slug: Web/API/Notification/silent
l10n:
  sourceCommit: 79f5e2c8ed9833f409e9054e69e02798b83422d1
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

{{domxref("Notification")}} 接口的 **`silent`** 只读属性指定通知是否应当保持静默，即无论设备设置如何，都不发出声音或振动。该属性通过 {{domxref("Notification.Notification","Notification()")}} 构造函数的 `silent` 选项控制。

## 值

布尔值或 `null`。如果被设置为 `true`，则使通知静音；如果被设置 `null`（默认值），则遵循设备的默认设置。

## 示例

以下代码片段触发静默通知。创建一个 `options` 对象，并使用 {{DOMxRef("Notification.Notification","Notification()")}} 构造函数响应按钮单击触发通知。该代码还包括基本的权限处理，如果尚未授予权限，则向用户请求通知权限。

```js
const btn = document.querySelector("button");
const options = {
  body: "没有恼人的噪音或振动？",
  silent: true,
};

function requestSilentNotification() {
  const n = new Notification("静默通知", options);
  console.log(n.silent); // 应该返回 true
}

btn.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    requestSilentNotification();
  } else {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        requestSilentNotification();
      } else {
        console.log("未授予通知权限");
      }
    });
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Notification API](/zh-CN/docs/Web/API/Notifications_API/Using_the_Notifications_API)
