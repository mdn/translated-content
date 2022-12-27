---
title: MediaRecorder.onstart
slug: Web/API/MediaRecorder/start_event
original_slug: Web/API/MediaRecorder/onstart
---

{{APIRef("Media Recorder API")}}

**`MediaRecorder.onstartevent`** ハンドラ（[MediaStream Recording API](/ja/docs/Web/API/MediaStream_Recording_API) の一部）は `start` イベントを処理します。 これにより、`MediaRecorder` によってメディアの記録が開始されたことに応答してコードを実行できるようにします。

`start` イベントは、{{domxref("MediaRecorder.start()")}} メソッドを呼び出した結果としてスローされます。 この時点で、データは {{domxref("Blob")}} に集められ始めます。

## 構文

```
MediaRecorder.onstart = function(event) { ... }
MediaRecorder.addEventListener('start', function(event) { ... })
```

## 例

```js
...

  record.onclick = function() {
    mediaRecorder.start();
    console.log("レコーダーが起動しました");
  }

  mediaRecorder.onstart = function() {
    // 記録の開始に
    // 応答して何かをする
  }

...
```

## プロパティ

無し。

## 仕様

| 仕様                                                                                                                         | 状態                                         | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-onstart", "MediaRecorder.onstart")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.onstart")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
