---
title: HTMLMediaElement.buffered
slug: Web/API/HTMLMediaElement/buffered
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.buffered`** 返回一个只读 {{domxref("TimeRanges")}} 对象 返回媒体已缓冲的区域

> **备注：** This feature is not available in [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API).

## 语法

```
var timeRange = audioObject.buffered
```

### 返回值

对象{{domxref("TimeRanges")}}

length - 获得音频/视频中已缓冲范围的数量

buffered.start 开始的区域

buffered.end 结束的区域

## 例子

```
var obj = document.createElement('video');
console.log(obj.buffered); // TimeRanges { length: 0 }
console.log(obj.buffered.start(0));//第一个缓存开始的区域
console.log(obj.buffered.end(0));//第一个缓存结束的区域
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 也可以看看

- The interface defining it, {{domxref("HTMLMediaElement")}}.
