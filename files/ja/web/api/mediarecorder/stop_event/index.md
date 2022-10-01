---
title: MediaRecorder.onstop
slug: Web/API/MediaRecorder/stop_event
original_slug: Web/API/MediaRecorder/onstop
---

{{APIRef("Media Recorder API")}}

**`MediaRecorder.onstop`** イベントハンドラ（[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) の一部）は、`stop` イベントを処理します。 これにより、`MediaRecorder` を介してメディアの記録が停止されたことに応答してコードを実行できます。

`stop` イベントは、{{domxref("MediaRecorder.stop()")}} メソッドを呼び出した結果として、またはキャプチャしているメディアストリームが終了したときにスローされます。 いずれの場合も、`stop` イベントの前に `dataavailable` イベントがあり、それまでにキャプチャされた {{domxref("Blob")}} をアプリで使用できるようにします。

## 構文

```
MediaRecorder.onstop = function(event) { ... }
MediaRecorder.addEventListener('stop', function(event) { ... })
```

## 例

```js
...

  mediaRecorder.onstop = function(e) {
    console.log("MediaRecorder.stop() 呼び出し後に利用可能なデータ。");

    var audio = document.createElement('audio');
    audio.controls = true;
    var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    var audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;
    console.log("レコーダー停止");
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

...
```

## 仕様

| 仕様                                                                                                                     | 状態                                         | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-onstop", "MediaRecorder.onstop")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.onstop")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
