---
title: BluetoothRemoteGATTDescriptor：readValue() 方法
short-title: readValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/readValue
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTDescriptor.readValue()`** 方法返回一个 {{jsxref("Promise")}}，其会在成功时兑现为一个包含 `value` 属性的副本（如果可用且受支持）的 {{jsxref("ArrayBuffer")}}。否则该 promise 会以错误拒绝。

## 语法

```js-nolint
readValue()
```

### 参数

无。

## 返回值

{{jsxref("Promise")}}，且该 promise 将会在成功时兑现为 {{jsxref("ArrayBuffer")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
