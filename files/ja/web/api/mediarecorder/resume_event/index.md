---
title: MediaRecorder.onresume
slug: Web/API/MediaRecorder/resume_event
original_slug: Web/API/MediaRecorder/onresume
---

{{APIRef("Media Recorder API")}}

**`MediaRecorder.onresume`** イベントハンドラ（[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) の一部）は `resume` イベントを処理します。 これにより、一時停止後にメディアの記録が再開されたことに応答してコードを実行できます。

`resume` イベントは、{{domxref("MediaRecorder.resume()")}} メソッドを呼び出した結果としてスローされます。

## 構文

```
MediaRecorder.onresume = function(event) { ... }
MediaRecorder.addEventListener('resume', function(event) { ... })
```

## 例

```js
...

  pause.onclick = function() {
    if(MediaRecorder.state === "recording") {
      mediaRecorder.pause();
      // 記録を一時停止
    } else if(MediaRecorder.state === "paused") {
      mediaRecorder.resume();
      // 記録を再開
    }
  }

  mediaRecorder.onpause = function() {
    // 記録の一時停止に
    // 応答して何かをする
  }

  mediaRecorder.onresume = function() {
    // 記録の再開に
    // 応答して何かをする
  }

...
```

## プロパティ

無し。

## 仕様

| 仕様                                                                                                                             | 状態                                         | コメント |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-onresume", "MediaRecorder.onresume")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.onresume")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
