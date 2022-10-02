---
title: WakeLock.request()
slug: Web/API/WakeLock/request
---

{{APIRef("Screen Wake Lock API")}}{{SeeCompatTable}}{{securecontext_header}}

**`WakeLock.request()`** 方法用来获取屏幕唤醒锁定权限，防止屏幕变暗、关闭或展示屏幕保护程序。

## 语法

```
WakeLock.request(wakeLockType)
```

### 参数

- `wakeLockType`
  - : 唤醒锁定类型，目前必须传 `"screen"` 。

### 返回值

决议为 {{DOMxRef("WakeLockSentinel")}} 的 {{JSxRef("Promise")}}。

### 异常

- `NotAllowedError`

  - : 当唤醒锁定不可用的时候抛出，例如在：

    - 由于屏幕唤醒锁定策略，Document 不允许使用屏幕唤醒锁定。
    - Document 不完全激活。
    - Document 被隐藏。
    - {{Glossary("User Agent")}} 无法获取平台的唤醒锁定。

## 示例

以下示例获取屏幕唤醒锁定并在 10 分钟后释放它：

```
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

- {{DOMxRef("WakeLock")}}
- {{DOMxRef("Navigator.wakeLock")}}
