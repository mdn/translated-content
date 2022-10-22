---
title: MediaRecorder.stream
slug: Web/API/MediaRecorder/stream
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.stream`** 読み取り専用プロパティは、`MediaRecorder` を作成したときに `MediaRecorder()` コンストラクタに渡したストリームを返します。

## 構文

```
var stream = MediaRecorder.stream
```

### 値

最初に `MediaRecorder` を作成したとき `MediaRecorde()` コンストラクタに渡した {{domxref("MediaStream")}}。

## 例

```js
if (navigator.getUserMedia) {
   console.log('getUserMediaがサポートされています。');
   navigator.getUserMedia (
      // 制約 - このアプリに必要なのは音声のみ
      {
         audio: true
      },

      // 成功コールバック
      function(stream) {
           var mediaRecorder = new MediaRecorder(stream);

           var myStream = mediaRecorder.stream;
           console.log(myStream);

...
```

## 仕様

| 仕様                                                                                                                     | 状態                                         | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-stream", "MediaRecorder.stream")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.stream")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
