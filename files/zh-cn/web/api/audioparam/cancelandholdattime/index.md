---
title: AudioParam：cancelAndHoldAtTime() 方法
short-title: cancelAndHoldAtTime()
slug: Web/API/AudioParam/cancelAndHoldAtTime
l10n:
  sourceCommit: 7211da0d97a892bf781852e93ee96c2bd732c115
---

{{APIRef("Web Audio API")}}

{{domxref("AudioParam")}} 接口的 **`cancelAndHoldAtTime()`** 方法用于取消在某一时间点后所有对 `AudioParam` 的更改，使其取值与该时间点的保持一致，直到再调用其他方法对该值进行修改。

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
