---
title: WakeLock
slug: Web/API/WakeLock
---

{{APIRef("Screen Wake Lock API")}}{{SeeCompatTable}}{{securecontext_header}}

**`WakeLock`** 接口允许一个文件获取屏幕唤醒锁定。

## 方法

- {{domxref("WakeLock.request","WakeLock.request()")}}
  - : 返回一个决议为 {{DOMxRef("WakeLockSentinel")}} 的 {{JSxRef("Promise")}} 或当唤醒锁定不可访问的时候抛出异常。

## 示例

以下例子获取一个唤醒锁定并在 10 分钟后释放它：

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

- {{DOMxRef("Navigator.wakeLock")}}
