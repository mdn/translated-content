---
title: MediaRecorder.state
slug: Web/API/MediaRecorder/state
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.state`** 読み取り専用プロパティは、現在の `MediaRecorder` オブジェクトの現在の状態を返します。

## 構文

```
var state = MediaRecorder.state
```

### 値

以下のいずれかの値を含む [RecordingState](https://w3c.github.io/mediacapture-record/#recordingstate) オブジェクト。

| 列挙型      | 説明                                                                            |
| ----------- | ------------------------------------------------------------------------------- |
| `inactive`  | 記録は行われていません — まだ開始されていないか、開始されてから停止されました。 |
| `recording` | 記録が開始され、UA がデータをキャプチャしています。                             |
| `paused`    | 記録は開始され、その後一時停止されましたが、まだ停止または再開されていません。  |

## 例

```js
...

  record.onclick = function() {
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    // "recording" を返します
    console.log("レコーダー起動");
  }

...
```

## 仕様

| 仕様                                                                                                                     | 状態                                         | コメント |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording", "#widl-MediaRecorder-state", "MediaRecorder.state")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.state")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
