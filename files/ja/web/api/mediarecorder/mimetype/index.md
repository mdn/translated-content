---
title: MediaRecorder.mimeType
slug: Web/API/MediaRecorder/mimeType
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.mimeType`** 読み取り専用プロパティは、作成時に記録コンテナとして使用する MIME タイプを返します。 これは、記録したすべてのデータをディスクに書き込むことによって生じるファイルのファイル形式です。 もちろん、個々のトラックに関連付けられているファイル形式とコーデックはまったく異なるものであることに注意してください。 WebM ビデオでうまく機能するトラックを MP4 ラッパーに書き込んでも、どこにでも再生できるファイルにならない可能性があります。

## 構文

```
var mimeType = MediaRecorder.mimeType
```

### 値

記録したメディアのコンテナ形式として使用する MIME タイプ（{{domxref("DOMString")}} 形式）。

## 例

```js
...

if (navigator.mediaDevices) {
  console.log('getUserMedia supported.');

  var constraints = { audio: true, video: true };
  var chunks = [];

  navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
      var options = {
        audioBitsPerSecond : 128000,
        videoBitsPerSecond : 2500000,
        mimeType : 'video/mp4'
      }
      var mediaRecorder = new MediaRecorder(stream,options);
      m = mediaRecorder;

      m.mimeType; // would return 'video/mp4'
      ...
    })
    .catch(function(error) {
      console.log(error.message);
    });
```

## 仕様

| 仕様                                                                                                                             | 状態                                         | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-mimeType", "MediaRecorder.mimeType")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.mimeType")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
