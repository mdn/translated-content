---
title: MediaSource.duration
slug: Web/API/MediaSource/duration
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("MediaSource")}} 介面的 **`duration`** 屬性用來取得以及設置正被表示的媒體時間長度。

## 語法

```js
mediaSource.duration = 5.5; // 5.5 seconds

var myDuration = mediaSource.duration;
```

### 回傳值

單位為秒的 double 型別。

### 錯誤

當設置此屬性一個新的值時以下錯誤可能發生。

| 錯誤                 | 解釋                                                                                                                                                                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidAccessError` | 嘗試設置的時間長度是負值，或者 `NaN`。                                                                                                                                                                                              |
| `InvalidStateError`  | {{domxref("MediaSource.readyState")}} 不是 `open`，或者 {{domxref("MediaSource.sourceBuffers")}} 中一個或多個以上的 {{domxref("SourceBuffer")}} 物件正在被更新（例如：他們的 {{domxref("SourceBuffer.updating")}} 屬性為 `true`。） |

## 範例

以下的片段基於 Nick Desaulniers 所編纂的簡單範例（[觀看實際演示](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)，或者[下載原始碼](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferAll.html)以利更進一步研究。）

```js
function sourceOpen (_) {
  //console.log(this.readyState); // open
  var mediaSource = this;
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream();
      mediaSource.duration = 120;
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
