---
title: AudioParam：cancelAndHoldAtTime() 方法
short-title: cancelAndHoldAtTime()
slug: Web/API/AudioParam/cancelAndHoldAtTime
l10n:
  sourceCommit: 7211da0d97a892bf781852e93ee96c2bd732c115
---

{{APIRef("Web Audio API")}}

{{domxref("AudioParam")}} 接口的 **`cancelAndHoldAtTime()`** 方法用于取消所有计划在未来的对 `AudioParam` 的更改，并将取值保持在给定时间点，直到使用其他方法进行进一步更改。

## 语法

```js-nolint
cancelAndHoldAtTime(cancelTime)
```

### 参数

- `cancelTime`
  - : 一个双精度浮点数，表示从创建 [`AudioContext`](/zh-CN/docs/Web/API/AudioContext) 开始经过的时间（以秒为单位）。在此时间之后，所有计划的更改都将被取消。

## 返回值

返回调用该方法的 {{domxref("AudioParam")}} 对象的引用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
