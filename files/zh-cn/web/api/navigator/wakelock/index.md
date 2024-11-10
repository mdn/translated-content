---
title: Navigator：wakeLock 属性
slug: Web/API/Navigator/wakeLock
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{ApiRef("Screen Wake Lock API")}}{{securecontext_header}}

{{domxref("Navigator")}} 接口的 **`wakeLock`** 只读属性返回一个允许文档获取屏幕唤醒锁的 {{DOMxRef("WakeLock")}} 接口。当屏幕唤醒锁处于激活状态时，用户代理将尝试阻止设备调暗屏幕、完全关闭屏幕或显示屏幕保护程序。

## 语法

```js-nolint
navigator.wakeLock
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("WakeLock.request()")}}
- [屏幕唤醒锁 API](/zh-CN/docs/Web/API/Screen_Wake_Lock_API)
- [使用屏幕唤醒锁 API 阻止息屏](https://developer.chrome.google.cn/docs/capabilities/web-apis/wake-lock)
