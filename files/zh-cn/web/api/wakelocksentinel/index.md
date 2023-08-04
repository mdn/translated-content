---
title: WakeLockSentinel
slug: Web/API/WakeLockSentinel
---

{{APIRef("Screen Wake Lock API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`WakeLockSentinel`** interface of Screen Wake Lock API provides a handle to a platform wake lock used to prevent screen from turning off, dimming, or displaying a screen saver.

## 属性

- {{DOMxRef("WakeLockSentinel.type")}} {{readonlyInline}}
  - : Wake lock type. Currently it is always `"screen"`.

## 方法

- {{DOMxRef("WakeLockSentinel.release","WakeLockSentinel.release()")}}
  - : Returns a {{JSxRef("Promise")}} that resolves without a value after requesting the underlying wake lock is released.

## 事件处理程序

- {{DOMxRef("WakeLockSentinel.onrelease")}}
  - : Event handler for `release` event type which occurs when `WakeLockSentinel` object's handle has been releases due to either a `release()` method being called or because {{Glossary("User Agent")}} releases the lock.

## 示例

The following example acquires a screen wake lock and then releases it in 10 minutes:

```plain
function tryKeepScreenAlive(minutes) {
  navigator.wakeLock.request("screen").then(lock => {
    setTimeout(() => lock.release(), minutes * 60 * 1000);
  });
}

tryKeepScreenAlive(10);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{DOMxRef("WakeLock.request", "navigator.wakeLock.request()")}}
