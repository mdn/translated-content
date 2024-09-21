---
title: HTMLMediaElement：buffered 属性
slug: Web/API/HTMLMediaElement/buffered
l10n:
  sourceCommit: 2b554506d84d016d3ddf612c593bd8315833c64d
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} 对象的只读属性 **`buffered`** 返回一个新的静态[规范化 `TimeRanges` 对象](/zh-CN/docs/Web/API/TimeRanges#规范化的_timeranges_对象)，该对象表示用户代理在访问 `buffered` 属性时已缓冲的媒体资源（如果有）的范围。

## 返回值

一个新的静态[规范化 `TimeRanges` 对象](/zh-CN/docs/Web/API/TimeRanges#规范化的_timeranges_对象)，表示用户代理在访问 `buffered` 属性时已缓冲的媒体资源（如果有）的范围。

## 示例

```js
const obj = document.createElement("video");
console.log(obj.buffered); // TimeRanges { length: 0 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLMediaElement")}}：用于定义 `HTMLMediaElement.buffered` 属性的接口
