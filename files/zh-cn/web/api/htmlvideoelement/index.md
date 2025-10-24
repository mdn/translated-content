---
title: HTMLVideoElement
slug: Web/API/HTMLVideoElement
---

{{APIRef("HTML DOM")}}

**`HTMLVideoElement`** 接口提供了用于操作视频对象的特殊属性和方法。它同时还继承了{{domxref("HTMLMediaElement")}} 和 {{domxref("HTMLElement")}} 的属性与方法。

在不同浏览器中 [支持的媒体格式](/zh-CN/docs/Web/Media/Guides/Formats) 是不一样的。因此在提供媒体文件的时候，或者提供一种所有浏览器都支持的格式，或者提供格式不同的多个视频源来支持不同浏览器，保证你想要支持的浏览器都能够播放。

{{InheritanceDiagram(600, 140)}}

## 属性

_继承了其父对象 {{domxref("HTMLMediaElement")}} 和 {{domxref("HTMLElement")}} 的属性。_

- {{domxref("HTMLVideoElement.height")}}
  - : 表达 HTML 属性 [`height`](/zh-CN/docs/Web/HTML/Reference/Elements/video#height)的值的一个{{domxref("DOMString")}} ，以 CSS pixels 的单位给出了显示区域的大小。
- {{domxref("HTMLVideoElement.poster")}}
  - : 表达 HTML 属性 [`poster`](/zh-CN/docs/Web/HTML/Reference/Elements/video#poster)的值的一个{{domxref("DOMString")}} ，用于指定当视频无法播放时需要展示的图片。
- {{domxref("HTMLVideoElement.videoHeight")}} {{readonlyInline}}
  - : 返回一个`unsigned long` 值，以 CSS pixels 的单位给出视频资源的实际高度。这个值考虑了大小、对比度、明度、分辨率等，是由视频资源本身确定的。如果这个元素的 ready state 是 `HAVE_NOTHING`，这个属性的值为 0。
- {{domxref("HTMLVideoElement.videoWidth")}} {{readonlyInline}}
  - : 返回一个`unsigned long` 值，以 CSS pixels 的单位给出视频资源的实际宽度。这个值考虑了大小、对比度、明度、分辨率等，是由视频资源本身确定的。如果这个元素的 ready state 是 `HAVE_NOTHING`，这个属性的值为 0。
- {{domxref("HTMLVideoElement.width")}}
  - : 表达 HTML 属性 [`width`](/zh-CN/docs/Web/HTML/Reference/Elements/video#width)的值的一个{{domxref("DOMString")}} ，以 CSS pixels 的单位给出了显示区域的大小。

### Gecko 特定属性

- {{domxref("HTMLVideoElement.mozParsedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : 返回一个 `unsigned long` 值，给出已经从媒体资源中解析的视频帧数。
- {{domxref("HTMLVideoElement.mozDecodedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : 返回一个 `unsigned long` 值，给出已经从媒体资源中解析，并解码为图像的视频帧数。
- {{domxref("HTMLVideoElement.mozPresentedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : 返回一个 `unsigned long` 值，给出被置入绘制队列 (pipeline) 等待绘制的视频帧数。
- {{domxref("HTMLVideoElement.mozPaintedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : 返回一个 `unsigned long` 值，给出已经被绘制的视频帧数。
- {{domxref("HTMLVideoElement.mozFrameDelay")}} {{readonlyInline}}{{non-standard_inline}}
  - : 返回一个 `double` 值，表示到目前为止，距上一次绘制过去了多长时间，单位是秒。
- {{domxref("HTMLVideoElement.mozHasAudio")}} {{readonlyInline}}{{non-standard_inline}}
  - : 返回一个{{domxref("Boolean")}}值，表示这个视频是否有关联音频。

## 方法

_继承了其父对象_ _{{domxref("HTMLMediaElement")}}和_ _{{domxref("HTMLElement")}}的方法。_

- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} {{experimental_inline}}
  - : 返回一个 {{domxref("VideoPlaybackQuality")}} 对象，包含了对当前播放引擎的量度信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML element implementing this interface: {{HTMLElement("video")}}.
- [Demo of video paint statistics](https://people.mozilla.org/~cpearce/paint-stats-demo.html)
- [Supported media formats](/zh-CN/docs/Web/Media/Guides/Formats)
