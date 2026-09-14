---
title: WakeLock：request() 方法
slug: Web/API/WakeLock/request
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

{{domxref("WakeLock")}} 接口的 **`request()`** 方法用于请求系统屏幕唤醒锁。如果请求成功，该方法会返回一个兑现为 {{domxref("WakeLockSentinel")}} 对象的 {{jsxref("Promise")}}。

屏幕唤醒锁可阻止设备屏幕在应用程序中需要保持运行时变暗或锁定。

## 语法

```js-nolint
request(type)
```

### 参数

- `type` {{optional_inline}}
  - : 屏幕唤醒锁类型是一个字符串，用于指定屏幕唤醒锁的类型：
    - `screen`
      - : 阻止屏幕关闭，只有可见文档才能获取屏幕唤醒锁。

如果未明确指定 `type` 参数，`request()` 方法会默认使用 `screen` 类型。

### 返回值

一个 {{jsxref("Promise")}} 对象，它将解析为一个 {{domxref("WakeLockSentinel")}} 对象。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 当无法获取屏幕唤醒锁时抛出异常，可能有以下原因：
    - 使用此功能被[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)阻止。
    - 文档未完全激活。
    - 文档的可见性状态为 `hidden`。
    - {{Glossary("User Agent", "用户代理")}}无法获取平台的屏幕唤醒锁。例如设备电池电量过低。

## 示例

以下异步函数请求一个 {{domxref("WakeLockSentinel")}} 对象。`request()` 方法被包裹在一个 `try...catch` 语句中，以处理浏览器因任何原因拒绝请求的情况。

```js
const requestWakeLock = async () => {
  try {
    const wakeLock = await navigator.wakeLock.request("screen");
  } catch (err) {
    // 唤醒锁请求失败——通常是系统原因，例如设备电量不足
    console.log(`${err.name}, ${err.message}`);
  }
};

requestWakeLock();
```

设备可能会在授予屏幕唤醒锁后撤销它，返回的 {{domxref("WakeLockSentinel")}} 对象可用于检查屏幕唤醒锁的状态，以及手动取消持有的屏幕唤醒锁。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用屏幕唤醒锁 API 阻止息屏](https://developer.chrome.google.cn/docs/capabilities/web-apis/wake-lock)
