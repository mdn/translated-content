---
title: WorkerLocation：protocol 属性
short-title: protocol
slug: Web/API/WorkerLocation/protocol
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerLocation")}} 对象的 **`protocol`** 属性返回该 Worker 所处位置的 {{domxref("URL.protocol", "protocol")}} 部分。

## 值

字符串。

## 示例

```js
// 在位于页面 https://developer.mozilla.org/zh-CN/docs/Web 上的 Web Worker 中
const result = location.protocol; // 返回“https:”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所属的 {{domxref("WorkerLocation")}} 接口。
