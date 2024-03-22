---
title: WakeLock
slug: Web/API/WakeLock
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

**`WakeLock`** [屏幕唤醒锁定 API](/zh-CN/docs/Web/API/Screen_Wake_Lock_API) 接口可用于请求阻止设备屏幕在应用程序需要保持运行时变暗或锁定。

此接口以及系统唤醒锁定通过 {{domxref("Navigator.wakeLock")}} 属性。

## 实例方法

- {{domxref("WakeLock.request", "request()")}}
  - : 返回一个 {{jsxref("Promise")}} 对象，该对象在屏幕唤醒锁定被授予时会实现一个 {{domxref("WakeLockSentinel")}} 对象。

## 示例

以下代码使用了 `awaits` 来请求 {{domxref("WakeLockSentinel")}} 对象，如果请求成功则继续执行。

{{domxref("WakeLock.request", "WakeLock.request()")}} 方法被包裹在 `try...catch` 语句中，[导致 promise 被拒绝的情况](/zh-CN/docs/Web/API/WakeLock/request#exceptions) 例如由于设备电量低。

```js
try {
  const wakeLock = await navigator.wakeLock.request("screen");
} catch (err) {
  // 唤醒锁定请求失败 - 通常是由于系统原因，例如设备电量不足
  console.log(`${err.name}, ${err.message}`);
}
```

请注意，设备可能会在授予屏幕唤醒锁后撤销它。返回的 {{domxref("WakeLockSentinel")}} 可用于检查锁定的状态，和/或手动取消持有的屏幕唤醒锁定。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用屏幕唤醒锁定 API 阻止息屏](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
