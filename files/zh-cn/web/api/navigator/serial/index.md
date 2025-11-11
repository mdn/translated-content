---
title: Navigator：serial 属性
slug: Web/API/Navigator/serial
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("Navigator")}} 接口的 **`serial`** 只读属性返回一个 {{domxref("Serial")}} 对象，该对象是 {{domxref("Web Serial API")}} 的入口点。

获取时，始终会返回同一 {{domxref("Serial")}} 对象的实例。

## 值

一个 {{domxref("Serial")}} 对象。

## 示例

以下示例使用 `getPorts()` 方法初始化可用端口列表。

```js
navigator.serial.getPorts().then((ports) => {
  // 页面加载时，使用 `ports` 初始化可用端口列表。
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [对串行端口执行读写操作](https://developer.chrome.google.cn/docs/capabilities/serial)
- [Web 串行 API 入门](https://codelabs.developers.google.com/codelabs/web-serial#0)
