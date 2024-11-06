---
title: MediaSource
slug: Web/API/MediaSource
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

[Media Source Extensions API](/zh-TW/docs/Web/API/Media_Source_Extensions_API) 的 **`MediaSource`** 介面代表 {{domxref("HTMLMediaElement")}} 物件的媒體資料來源。一個 `MediaSource` 物件可以被附加到一個 {{domxref("HTMLMediaElement")}} 以被用戶代理 (user agent) 播放。

{{InheritanceDiagram}}

## 建構子 (Constructor)

- {{domxref("MediaSource.MediaSource", "MediaSource()")}}
  - : 建構且回傳一個新的 `MediaSource` 物件但不與任何來源緩衝 (source buffers) 關聯 (associate)。

## 屬性 (Properties)

- {{domxref("MediaSource.sourceBuffers")}} {{readonlyInline}}
  - : 回傳一個含有與此 `MediaSource` 關聯的 {{domxref("SourceBuffer")}} 物件串列的 {{domxref("SourceBufferList")}} 物件。
- {{domxref("MediaSource.activeSourceBuffers")}} {{readonlyInline}}
  - : 回傳一個 {{domxref("SourceBufferList")}} 物件，含有 {{domxref("SourceBuffers")}} 的子集合 {{domxref("SourceBuffer")}} 物件 — 物件的串列提供被選擇的影片軌 (video track), 啟用的音軌 (audio tracks), 以及顯示或隱藏的字軌。
- {{domxref("MediaSource.readyState")}} {{readonlyInline}}
  - : 回傳一個列舉類型表示目前 `MediaSource` 的狀態：沒有附加到媒體元件 (`closed`)，已經附加且可以接收 {{domxref("SourceBuffer")}} 物件 (`open`)，已經附加但是串流已經經由 {{domxref("MediaSource.endOfStream()")}} 結束 (`ended`)。
- {{domxref("MediaSource.duration")}}
  - : 取得或設置現在正被表示的媒體的時間長度。

### 事件處理函數 (Event handlers)

- {{domxref("MediaSource.onsourceclose")}}
  - : `sourceclose` 事件的事件處理函數。
- {{domxref("MediaSource.onsourceended")}}
  - : `sourceended` 事件的事件處理函數。
- {{domxref("MediaSource.onsourceopen")}}
  - : `sourceopen` 事件的事件處理函數。

## 方法 (Methods)

_從親介面 (parent interface) {{domxref("EventTarget")}} 繼承屬性。_

- {{domxref("MediaSource.addSourceBuffer()")}}
  - : 依據指定的 MIME 類型建立一個新的 {{domxref("SourceBuffer")}} 且將其加入 `MediaSource` 的 {{domxref("SourceBuffers")}} 串列。
- {{domxref("MediaSource.clearLiveSeekableRange()")}}
  - : 清除先前藉由呼叫 `setLiveSeekableRange()` 所設定的可尋找範圍。
- {{domxref("MediaSource.endOfStream()")}}
  - : 示意串流的結束。
- {{domxref("MediaSource.removeSourceBuffer()")}}
  - : 從與此 `MediaSource` 物件關聯的 {{domxref("SourceBuffers")}} 串列移除指定的 {{domxref("SourceBuffer")}}。
- {{domxref("MediaSource.setLiveSeekableRange()")}}
  - : 設定使用者可以在媒體元素中的可尋找範圍。

## 靜態方法 (Static methods)

- {{domxref("MediaSource.isTypeSupported()")}}
  - : 回傳一個 {{domxref("Boolean")}} 值表示指定的 MIME 類型是否被現在的用戶代理支援 — 意即可否成功的為該 MIME 類型建立 {{domxref("SourceBuffer")}} 物件。

## 範例

以下簡單的範例儘快的載入一個個影片塊 (chunk) 且儘快的播放。這個範例是由 Nick Desaulniers 所撰寫且可以[在此實際觀看](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)（你也可以[下載原始碼](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)以更進一步研究）

```js
var video = document.querySelector("video");

var assetURL = "frag_bunny.mp4";
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

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

function fetchAB(url, cb) {
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.responseType = "arraybuffer";
  xhr.onload = function () {
    cb(xhr.response);
  };
  xhr.send();
}
```

## 規格

{{Specifications}}

## 相容性表格

{{Compat}}

## 相關資料

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
