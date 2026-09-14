---
title: WorkerLocation：href 属性
short-title: href
slug: Web/API/WorkerLocation/href
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerLocation")}} 对象的 **`href`** 属性返回包含该 Worker 所处位置的序列化 {{domxref("URL")}} 的字符串。

## 值

字符串。

## 示例

```js
// 在位于页面 https://developer.mozilla.org/zh-CN/docs/Web 上的 Web Worker 中
const result = location.href; // 返回“https://developer.mozilla.org/zh-CN/docs/Web”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所属的 {{domxref("WorkerLocation")}} 接口。
