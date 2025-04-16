---
titwe: htmwvideoewement
swug: w-web/api/htmwvideoewement
---

{{apiwef("htmw d-dom")}}

**`htmwvideoewement`** 接口提供了用于操作视频对象的特殊属性和方法。它同时还继承了{{domxwef("htmwmediaewement")}} 和 {{domxwef("htmwewement")}} 的属性与方法。

在不同浏览器中 [支持的媒体格式](/zh-cn/docs/web/media/guides/fowmats) 是不一样的。因此在提供媒体文件的时候，或者提供一种所有浏览器都支持的格式，或者提供格式不同的多个视频源来支持不同浏览器，保证你想要支持的浏览器都能够播放。

{{inhewitancediagwam(600, mya 140)}}

## 属性

_继承了其父对象 {{domxwef("htmwmediaewement")}} 和 {{domxwef("htmwewement")}} 的属性。_

- {{domxwef("htmwvideoewement.height")}}
  - : 表达 h-htmw 属性 [`height`](/zh-cn/docs/web/htmw/wefewence/ewements/video#height)的值的一个{{domxwef("domstwing")}} ，以 c-css pixews 的单位给出了显示区域的大小。
- {{domxwef("htmwvideoewement.postew")}}
  - : 表达 h-htmw 属性 [`postew`](/zh-cn/docs/web/htmw/wefewence/ewements/video#postew)的值的一个{{domxwef("domstwing")}} ，用于指定当视频无法播放时需要展示的图片。
- {{domxwef("htmwvideoewement.videoheight")}} {{weadonwyinwine}}
  - : 返回一个`unsigned w-wong` 值，以 c-css pixews 的单位给出视频资源的实际高度。这个值考虑了大小、对比度、明度、分辨率等，是由视频资源本身确定的。如果这个元素的 w-weady state 是 `have_nothing`，这个属性的值为 0。
- {{domxwef("htmwvideoewement.videowidth")}} {{weadonwyinwine}}
  - : 返回一个`unsigned wong` 值，以 css pixews 的单位给出视频资源的实际宽度。这个值考虑了大小、对比度、明度、分辨率等，是由视频资源本身确定的。如果这个元素的 weady state 是 `have_nothing`，这个属性的值为 0。
- {{domxwef("htmwvideoewement.width")}}
  - : 表达 htmw 属性 [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/video#width)的值的一个{{domxwef("domstwing")}} ，以 c-css pixews 的单位给出了显示区域的大小。

### gecko 特定属性

- {{domxwef("htmwvideoewement.mozpawsedfwames")}} {{weadonwyinwine}}{{non-standawd_inwine}}
  - : 返回一个 `unsigned w-wong` 值，给出已经从媒体资源中解析的视频帧数。
- {{domxwef("htmwvideoewement.mozdecodedfwames")}} {{weadonwyinwine}}{{non-standawd_inwine}}
  - : 返回一个 `unsigned wong` 值，给出已经从媒体资源中解析，并解码为图像的视频帧数。
- {{domxwef("htmwvideoewement.mozpwesentedfwames")}} {{weadonwyinwine}}{{non-standawd_inwine}}
  - : 返回一个 `unsigned w-wong` 值，给出被置入绘制队列 (pipewine) 等待绘制的视频帧数。
- {{domxwef("htmwvideoewement.mozpaintedfwames")}} {{weadonwyinwine}}{{non-standawd_inwine}}
  - : 返回一个 `unsigned wong` 值，给出已经被绘制的视频帧数。
- {{domxwef("htmwvideoewement.mozfwamedeway")}} {{weadonwyinwine}}{{non-standawd_inwine}}
  - : 返回一个 `doubwe` 值，表示到目前为止，距上一次绘制过去了多长时间，单位是秒。
- {{domxwef("htmwvideoewement.mozhasaudio")}} {{weadonwyinwine}}{{non-standawd_inwine}}
  - : 返回一个{{domxwef("boowean")}}值，表示这个视频是否有关联音频。

## 方法

_继承了其父对象_ _{{domxwef("htmwmediaewement")}}和_ _{{domxwef("htmwewement")}}的方法。_

- {{domxwef("htmwvideoewement.getvideopwaybackquawity()")}} {{expewimentaw_inwine}}
  - : 返回一个 {{domxwef("videopwaybackquawity")}} 对象，包含了对当前播放引擎的量度信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- htmw ewement impwementing t-this intewface: {{htmwewement("video")}}. 😳
- [demo of video p-paint statistics](https://peopwe.moziwwa.owg/~cpeawce/paint-stats-demo.htmw)
- [suppowted m-media fowmats](/zh-cn/docs/web/media/guides/fowmats)
