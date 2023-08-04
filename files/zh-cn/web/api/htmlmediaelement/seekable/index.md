---
title: HTMLMediaElement.seekable
slug: Web/API/HTMLMediaElement/seekable
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}}的只读属性 **`seekable`** 返回一个包含了用户可以跳转到的时刻的区域（如果有）的{{domxref('TimeRanges')}}对象。

## Syntax

```plain
var seekable = audioOrVideo.seekable;
```

### 值

一个{{domxref('TimeRanges')}}对象。

## 示例

```js
var video = document.querySelector("video");
var timeRangesObject = video.seekable;
var timeRanges = [];
//遍历所有时间区域并输出数组
for (let count = 0; count < timeRangesObject.length; count++) {
  timeRanges.push([timeRangesObject.start(count), timeRangesObject.end(count)]);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- [Media Source Extensions API](/zh-CN/docs/Web/API/Media_Source_Extensions_API)
