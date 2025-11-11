---
title: Web media technologies
slug: Web/Media
---

這些年來，網頁來表達，創作及運用視訊及音訊以至其他媒介的能力不斷上升。今時今日存在了 大量可供運用的 API 及 HTML 元件，DOM 介面，及其他不止於 發揮傳統效果，還能與其他網頁層面的技術產生協同效應和真實地令人深刻銘記 的特效。本文列出不同的 API 和連結其詳細資料的超連結，希望你能認為這些資訊能幫你盡快純熟這些技術。

## References

### HTML

這些文章包括 HTML 特效，供ＨＴＭＬ媒體開發者參考。

- {{HTMLElement("audio")}}
  - : `<audio>` 元件，這是用來在網頁裡播放音效。此元件能 不被看見地運用來 作為一個 供更多其他繁雜的媒介放置的 位置。當然，也能放置一些可看見的控制器予用家來控制是否重播這些音訊。
- {{HTMLElement("video")}}
  - : `<video>` 元件，這是一個為了視訊內容在網頁裡播放的端點。它能被簡單地只用作表現視訊，或者用作一個位置來放置即時視訊內容。`<video>` 也能被用作一個途徑來連結媒介 API 和其他 HTML 及 DOM 技術，當中包括 {{HTMLElement("canvas")}}（這是作 frame grabbing(?) 和其管控）。

### API

- [Media Capture and Streams API](/zh-TW/docs/Web/API/Media_Capture_and_Streams_API)
  - : 這是一個參考資料，關於串流，記錄，管控媒體資料，無論是本地的，透過網路的。這些包括本地的攝錄機及來捕流視訊，音效或圖像的麥克風。
- [Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API)
  - : 你可以藉由此 API 產出、篩選及操作即時的聲音或是預先錄製好的材料，然後將音效送至`<audio>`元件、影音串流或是儲存起來。
- [WebRTC](/zh-TW/docs/Web/API/WebRTC_API)
  - : WebRTC (網頁即時通訊)能夠即時地串流影音，也能夠透過網際網路將兩個人的訊息資料互相傳遞，而不需要任何媒介。

## 指南

- [網頁傳播媒體的概述](/zh-TW/docs/Web/Media/Overview)
  - : 支援影音撥放，操作與紀錄的網頁科技與 API 的概論。如果你不知道該使用哪一個 API，請從這裡開始。

## Other topics

Related topics which may be of interest, since they can be used in tandem with media APIs in interesting ways.

- [The Canvas API](/zh-TW/docs/Web/API/Canvas_API)
  - : The Canvas API lets you draw into an {{HTMLElement("canvas")}}, manipulating and changing the contents of an image. This can be used with media in many ways, including by setting a `<canvas>` element as the destination for video playback or camera capture so that you can capture and manipulate video frames.
- [WebGL](/zh-TW/docs/Web/API/WebGL_API)
  - : WebGL provides an OpenGL ES compatible API on top of the existing Canvas API, making it possible to do powerful 3D graphics on the Web. Through a canvas, this can be used to add 3D imagery to media content.
