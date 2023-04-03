---
title: Notification.requestPermission()
slug: Web/API/Notification/requestPermission
---

{{APIRef("Web Notifications")}}

{{domxref("Notification")}} 接口的 **`requestPermission()`** 方法请求用户当前来源的权限以显示通知。

## 语法

最新的规范已将此方法更新为基于 promise 的语法，工作原理如下：

```js
Notification.requestPermission().then(function(permission) { ... });
```

以前，语法是基于一个简单的回调；此版本现~~已弃用~~：

```js
Notification.requestPermission(callback);
```

### 参数

- `callback` {{optional_inline}} {{deprecated_inline}}
  - : 一个可选的参数为权限请求的结果的回调函数。此参数已废弃，请使用 Promise 的语法。

### 返回值

一个 {{jsxref("Promise")}} ，将解析为一个 {{domxref("DOMString")}} ，它是用户对权限请求的选择。这个字符串可以是 `granted`（被授予）， `denied`（被拒绝）或者 `default`（默认）。

## 实例

下面这个代码片段将向用户请求权限，然后根据用户的不同选择，输出不同的日志。

```js
Notification.requestPermission().then(function(result) {
  if (result === 'denied') {
    console.log('Permission wasn\'t granted. Allow a retry.');
    return;
  }
  if (result === 'default') {
    console.log('The permission request was dismissed.');
    return;
  }
  // Do something with the granted permission.
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Notifications](/zh-CN/docs/Web/API/notification/Using_Web_Notifications)
