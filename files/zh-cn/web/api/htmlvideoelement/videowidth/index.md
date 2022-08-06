---
title: HTMLVideoElement.videoWidth
slug: Web/API/HTMLVideoElement/videoWidth
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLVideoElement
  - Intrinsic Width
  - Media
  - Property
  - Read-only
  - Reference
  - Video
  - size
  - videoWidth
  - width
browser-compat: api.HTMLVideoElement.videoWidth
---
{{APIRef("HTML DOM")}}

{{domxref("HTMLVideoElement")}} 接口提供只读的 **`videoWidth`** 属性，指示视频的 [固有宽度](/en-US/docs/Web/API/HTMLVideoElement/videoHeight#about_intrinsic_width_and_height)，使用css的像素值表示。
简单来说，这是媒体的初始宽度。

参见 [`HTMLVideoElement.videoHeight` > About intrinsic width and height](/en-US/docs/Web/API/HTMLVideoElement/videoHeight#about_intrinsic_width_and_height) 查看更多细节。

## 属性

整数值，以CSS的像素值指定视频的固有宽度。
如果元素的 {{domxref("HTMLMediaElement.readyState", "readyState")}} 是`HTMLMediaElement.HAVE_NOTHING`， 则此属性的值为0，因为视频和开头帧的大小并不能知道。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
