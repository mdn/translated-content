---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
---

{{APIRef("HTML DOM")}}

**`HTMLAudioElement`** 接口提供对 {{HTMLElement("audio")}} 元素的属性访问及一系列操控它的方法，它基于并从 {{domxref("HTMLMediaElement")}} 接口继承属性和方法。

{{InheritanceDiagram(600, 120)}}

## 构造函数

- {{domxref("HTMLAudioElement.Audio", "Audio()")}}
  - : 创建并返回一个新的 `HTMLAudioElement` 对象，如果提供音频文件 URL，则开始加载音频文件。

## 属性

_没有具体的属性；从父类 {{domxref("HTMLMediaElement")}} 和 {{domxref("HTMLElement")}} 继承属性。_

## 方法

_从父类 {{domxref("HTMLMediaElement")}} 和 {{domxref("HTMLElement")}} 继承方法，自身不提供方法。_

### 废弃的且仅适用于 Mozilla 的方法

_以下方法是未标准化的，请勿使用._

- {{domxref("HTMLAudioElement.mozCurrentSampleOffset", "mozCurrentSampleOffset()")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : Returns the number of samples form the beginning of the stream that have been written so far into the audio stream created by calling {{domxref("HTMLAudioElement.mozWriteAudio", "mozWriteAudio()")}}.
- {{domxref("HTMLAudioElement.mozSetup", "mozSetup()")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : Sets up the audio stream to allow writing, given the number of audio channels (1 or 2) and the sample rate in kHz.
- {{domxref("HTMLAudioElement.mozWriteAudio", "mozWriteAudio()")}} {{non-standard_inline}} {{Deprecated_Inline}}
  - : Writes a batch of audio frames to the stream at the current offset, returning the number of bytes actually written to the stream.

## 示例

### 基本用法

你可以完全使用 JavaScript 的 {{domxref("HTMLAudioElement.Audio", "Audio()")}} 构造函数来创建一个 `HTMLAudioElement` ：

```js
var audioElement = new Audio("car_horn.wav");
```

然后你可以在这个元素上调用 `play()` 方法

```js
audioElement.play();
```

> **备注：** 一个常见的需求是在页面加载后马上去播放音频，现代浏览器的默认自动播放策略会阻止这一行为，参见 [firefox](https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/) 和 [chrome](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes) 寻找最佳实践和解决方案。

一些经常被使用的属性，包括 {{domxref("HTMLMediaElement.src", "src")}}、{{domxref("HTMLMediaElement.currentTime", "currentTime")}}、{{domxref("HTMLMediaElement.duration", "duration")}}、{{domxref("HTMLMediaElement.paused", "paused")}}、{{domxref("HTMLMediaElement.muted", "muted")}} 和 {{domxref("HTMLMediaElement.volume", "volume")}}。以下这段代码赋值音频文件的播放时长给一个变量：

```js
var audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // duration 变量现在存放音频的播放时长（单位秒）
});
```

## 事件

_从父类 {{domxref("HTMLMediaElement")}} 和祖先 {{domxref("HTMLElement")}} 继承方法。使用_ [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) _监听事件或者赋值一个事件监听器给这个接口的_ `oneventname` 属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web media technologies](/zh-CN/docs/Web/Media)
- [Using audio and video in HTML](/zh-CN/docs/Web/Media/HTML_media)
- HTML element implementing this interface: {{HTMLElement("audio")}}.
