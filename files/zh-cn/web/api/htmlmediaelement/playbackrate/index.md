---
title: HTMLMediaElement.playbackRate
slug: Web/API/HTMLMediaElement/playbackRate
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.playbackRate`** 属性设置媒体文件播放时的速率。这用于实现让用户控制快放、慢放等。正常播放速率乘以该值表示当前的播放速率，所以 1.0 表示一个正常的播放速率。

将 `playbackRate` 设为负值**不可以**实现倒播。

媒体文件倒着播放时，或者播放速率低于或高于浏览器内核规定的可用范围（比如，Gecko 约定范围是 0.25 ～ 5.0）时，播放过程将静音。

任意播放速率下，音频的音调将默认与其匹配。一些浏览器实现了非标准的 {{domxref("HTMLMediaElement.preservesPitch")}} {{non-standard_inline}} 属性来进行音调控制。

## 语法

```js
// video
video.playbackRate = 1.5;
// audio
audio.playbackRate = 1.0;
```

### 赋值说明

浮点数 1.0 是 "正常速度"，比 1.0 小的值使媒体文件播放的慢于正常速度，比 1.0 大的值使播放变得快于正常速度。

## 示例

```js
var obj = document.createElement("video");
console.log(obj.playbackRate); // 1
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- 接口定义 {{domxref("HTMLMediaElement")}}.
