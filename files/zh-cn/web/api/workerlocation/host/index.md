---
title: WorkerLocation：host 属性
short-title: host
slug: Web/API/WorkerLocation/host
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerLocation")}} 对象的 **`host`** 属性返回该 Worker 所处位置的 {{domxref("URL.host", "host")}} 部分。

## 值

字符串。

## 示例

```js
// 在位于页面 http://localhost:8080/ 上的 Web Worker 中
const result = location.host; // 返回“localhost:8080”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所属的 {{domxref("WorkerLocation")}} 接口。
