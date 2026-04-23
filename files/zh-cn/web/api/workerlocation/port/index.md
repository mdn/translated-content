---
title: WorkerLocation：port 属性
short-title: port
slug: Web/API/WorkerLocation/port
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerLocation")}} 对象的 **`port`** 属性返回该 Worker 所处位置的 {{domxref("URL.port", "port")}} 部分。

## 值

字符串。

## 示例

```js
// 在位于页面 http://localhost:8080/ 上的 Web Worker 中
const result = location.port; // 返回“8080”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所属的 {{domxref("WorkerLocation")}} 接口。
