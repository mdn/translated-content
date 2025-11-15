---
title: WorkerLocation：origin 属性
short-title: origin
slug: Web/API/WorkerLocation/origin
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerLocation")}} 对象的 **`origin`** 属性返回该 Worker 所处位置的 {{domxref("URL.origin", "origin")}}。

## 值

字符串。

## 示例

```js
// 在此页面上，返回 origin
const result = self.location.origin; // 返回“https://developer.mozilla.org:443”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所属的 {{domxref("WorkerLocation")}} 接口。
