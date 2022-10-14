---
title: MediaSource.activeSourceBuffers
slug: Web/API/MediaSource/activeSourceBuffers
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

**`activeSourceBuffers`** 是 {{domxref("MediaSource")}} 介面的唯讀屬性，回傳一個 {{domxref("SourceBufferList")}} 物件，含有在 {{domxref("SourceBuffers")}} 之中的 {{domxref("SourceBuffer")}} 物件子集合—物件的串列提供被選擇的影片軌 (video track), 啟用的音軌 (audio tracks), 以及顯示或隱藏的字軌。

## 語法

```js
var myActiveSourceBuffers = mediaSource.activeSourceBuffers;
```

### 回傳值

一個 {{domxref("SourceBufferList")}} 。

## 範例

以下的片段基於 Nick Desaulniers 所編纂的簡單範例（[觀看實際演示](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下載原始碼](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html) 以利更進一步研究。）

```js
function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      console.log(mediaSource.activeSourceBuffers);
      // will contain the source buffer that was added above,
      // as it is selected for playing in the video player
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
};

...
```

## 規格

{{Specifications}}

## 相容性表格

{{Compat}}

## 相關資料

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
