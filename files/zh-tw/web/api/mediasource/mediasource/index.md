---
title: MediaSource.MediaSource()
slug: Web/API/MediaSource/MediaSource
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} 介面的 **`MediaSource()`** 建構子建構且回傳一個沒有與任何來源緩衝 (source buffer) 關聯的新 `MediaSource` 物件。

## 語法

```js
var mediaSource = new MediaSource();
```

### 參數

無。

## 範例

以下的片段擷取自 Nick Desaulniers 所編纂的簡單範例（[觀看實際演示](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下載原始碼](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) 以利更進一步研究。）

```js
var video = document.querySelector('video');

var assetURL = 'frag_bunny.mp4';
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource;
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', sourceOpen);
} else {
  console.error('Unsupported MIME type or codec: ', mimeCodec);
}

...
```

## 瀏覽器相容性

{{Compat}}

## 相關資料

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
