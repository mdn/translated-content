---
title: HTMLVideoElement.videoHeight
slug: Web/API/HTMLVideoElement/videoHeight
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLVideoElement
  - Intrinsic Height
  - Intrinsic Width
  - Media
  - Property
  - Read-only
  - Reference
  - Video
  - Video Dimensions
  - dimension
  - height
  - size
  - videoHeight
  - videoWidth
browser-compat: api.HTMLVideoElement.videoHeight
---
{{APIRef("HTML DOM")}}

{{domxref("HTMLVideoElement")}} 接口提供只读的 **`videoHeight`** 属性 ，指示视频的 [固有高度](#关于固定的宽高) ，使用CSS的像素值表示。
简单来说，这是媒体的初始高度。

## 属性

整数值，以CSS的像素值指定视频的固有高度。
如果元素的 {{domxref("HTMLMediaElement.readyState", "readyState")}} 是 `HTMLMediaElement.HAVE_NOTHING`， 则此属性的值为0，因为视频和开头图片的大小并不能知道

### 关于固定的宽高

{{Glossary("user agent")}} 通过从媒体的原始像素宽度和高度开始计算元素媒体的固有宽度和高度，然后考虑以下因素:

- 媒体的宽高比。
- 媒体的镜头校正（以媒体中心点为中心的一个匹配目标长宽比的子矩形；译者注：用于校正媒体存在的暗角）。
- 目标设备的分辨率。
- 媒体格式所需要的任何其他因素。

如果元素当前显示的是视频的开头帧而不是呈现的视频内容， 那么开头帧的固有大小将被视为元素 `<video>` 的大小。

如果任何时候媒体的固有大小发生变化，但是元素的 {{domxref("HTMLMediaElement.readyState", "readyState")}} 不是 `HAVE_NOTHING`，则将会向该`<video>`元素发送 {{domxref("HTMLMediaElement.resize", "resize")}} 事件.
当元素从显示的开头帧切换到显示视频内容时，或者当显示的视频内容时。

## 示例

此示例为 {{domxref("HTMLVideoElement.resize", "resize")}} 事件创建的处理程序， 该事件调整 {{HTMLElement("video")}} 元素的大小以匹配其内容的固定大小。

```js
let v = document.getElementById("myVideo");

v.addEventListener("resize", ev => {
  let w = v.videoWidth;
  let h = v.videoHeight;

  if (w && h) {
    v.style.width = w;
    v.style.height = h;
  }
}, false);
```

请注意，只有当 `videoWidth` 和 `videoHeight` 都不是0的情况，才会应用更改。
这样可以避免在还没有关于大小的情况下，应用无效的更改。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
