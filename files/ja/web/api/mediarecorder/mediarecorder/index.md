---
title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder()`** コンストラクタは、指定された {{domxref("MediaStream")}} を記録する新しい {{domxref("MediaRecorder")}} オブジェクトを作成します。

## 構文

```
var mediaRecorder = new MediaRecorder(stream[, options]);
```

### パラメータ

- **`stream`**
  - : 記録される {{domxref("MediaStream")}}。 このソースメディアは、{{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} を使用して作成したストリーム、または {{HTMLElement("audio")}}、{{HTMLElement("video")}}、{{HTMLElement("canvas")}} 要素から取得できます。
- **`options`** {{optional_inline}}

  - : 以下のプロパティを含むことができる辞書オブジェクト。

    - `mimeType`: 新しい `MediaRecorder` の記録コンテナとして使用する MIME タイプ。アプリは、{{domxref("MediaRecorder.isTypeSupported()")}} を呼び出すことによって、この `mimeType` がユーザーエージェントによってサポートされているかどうかを事前に確認できます。
    - `audioBitsPerSecond`: メディアの音声コンポーネントに選択したビットレート。
    - `videoBitsPerSecond`: メディアの動画コンポーネントに選択したビットレート。
    - `bitsPerSecond`: メディアの音声コンポーネントおよび動画コンポーネントに選択したビットレート。 上記の 2 つのプロパティの代わりにこれを指定できます。 これを上記のプロパティのいずれかと一緒に指定している場合、これは指定していないものに使用されます。

    > **メモ:** 動画や音声にビット/秒の値を指定していない場合、動画が採用しているデフォルトは 2.5Mbps ですが、音声のデフォルトはサンプルレートとチャネル数に応じてアダプティブです。

## 例

この例では、音声のビットレートを 128 K ビット/秒に設定し、動画のビットレートを 2.5 M ビット/秒に設定して、指定したストリーム用のメディアレコーダーを作成する方法を示します。 記録したメディアデータは MP4 ラッパーに保存されます（従って、メディアデータのチャンクを集めてディスクに保存すると、それらは MP4 ファイルになります）。

```js
...


if (navigator.mediaDevices.getUserMedia) {
  var constraints = { audio: true, video: true };
  var chunks = [];

  var onSuccess = function(stream) {
    var options = {
      audioBitsPerSecond : 128000,
      videoBitsPerSecond : 2500000,
      mimeType : 'video/mp4'
    }
    var mediaRecorder = new MediaRecorder(stream,options);
    m = mediaRecorder;

...
```

## 仕様

| 仕様                                             | 状態                                         | コメント |
| ------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName("MediaStream Recording")}} | {{Spec2("MediaStream Recording")}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.MediaRecorder.MediaRecorder")}}

## 関連情報

- [Media​Stream Recording API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](http://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpl.info の MediaStream Recording のデモ](http://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}}
