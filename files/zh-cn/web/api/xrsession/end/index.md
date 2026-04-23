---
title: XRSession：end() 方法
short-title: end()
slug: Web/API/XRSession/end
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`end()`** 方法会关闭调用它的 {{domxref("XRSession")}}，并返回一个在会话完全关闭后兑现的 promise。

## 语法

```js-nolint
end()
```

### 参数

无。

## 返回值

一个 {{jsxref("promise")}}，其在完成与关闭会话相关的任何平台特定步骤后，将不带值地兑现。你可以使用该 promise 来执行诸如更新 UI 元素以反映连接已关闭、触发应用程序关闭或其他你可能需要执行的操作。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
