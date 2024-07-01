---
title: HTMLMediaElement.currentTime
slug: Web/API/HTMLMediaElement/currentTime
---

{{APIRef("HTML DOM")}}**`HTMLMediaElement.currentTime`** 属性会以秒为单位返回当前媒体元素的播放时间。设置这个属性会改变媒体元素当前播放位置。

> **备注：** 该处原文：The **`HTMLMediaElement.currentTime`** property gives the current playback time in seconds. Setting this value seeks the media to the new time.

## 语法

```js
var cTime = video.currentTime;
video.currentTime = 35;
```

### 返回值

一个 `double` 双精度浮点数。

## 示例

```js
var obj = document.createElement("video");
console.log(obj.currentTime);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- [`HTMLMediaElement.fastSeek()`](/zh-CN/docs/Web/API/HTMLMediaElement/fastSeek) for another method of setting the time
