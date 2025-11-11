---
title: MediaSource.readyState
slug: Web/API/MediaSource/readyState
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} 介面的唯讀屬性 **`readyState`** 回傳表示當前 `MediaSource` 狀態的列舉值。三種可能的值為：

- `closed`: 來源 (source) 目前沒有附加到媒體元件 (media element) 。
- `open`: 來源已經附加且可以接收 {{domxref("SourceBuffer")}} 物件。
- `ended`: 來源已經附加但是串流已經經由 {{domxref("MediaSource.endOfStream()")}} 結束。

## 語法

```js
var myReadyState = mediaSource.readyState;
```

### 回傳值

一個 {{domxref("DOMString")}}。

## 範例

以下片段是由 Nick Desaulniers 所撰寫的簡單範例（[在此實際觀看](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下載原始碼](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)以更進一步研究）

```js
if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource();
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen(_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener("updateend", function (_) {
      mediaSource.endOfStream();
      video.play();
      //console.log(mediaSource.readyState); // ended
    });
    sourceBuffer.appendBuffer(buf);
  });
}
```

## 規格

{{Specifications}}

## 相容性表格

{{Compat}}

## 相關資料

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
