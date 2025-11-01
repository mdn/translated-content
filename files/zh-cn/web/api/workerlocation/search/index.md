---
title: WorkerLocation：search 属性
short-title: search
slug: Web/API/WorkerLocation/search
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerLocation")}} 对象的 **`search`** 属性返回该 Worker 所处位置的 {{domxref("URL.search", "search")}} 部分。

## 值

字符串。

## 示例

```js
// 在位于页面 https://developer.mozilla.org/zh-CN/docs/Web?t=67 上的 Web Worker 中
const result = location.search; // 返回“?t=67”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所属的 {{domxref("WorkerLocation")}} 接口。
