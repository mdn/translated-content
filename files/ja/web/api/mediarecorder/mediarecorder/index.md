---
title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder()`** コンストラクターは、新しい {{domxref("MediaRecorder")}} オブジェクトを作成します。これが指定された {{domxref("MediaStream")}} を記録します。

オブジェクトは、オプションとして、特定のメディアコンテナー（ファイル形式）を使用して記録するように構成することができ、さらに、[`codecs` 引数](/ja/docs/Web/Media/Formats/codecs_parameter) を指定して、使用するコーデックとコーデック構成を正確に指定することができます。

## 構文

```js-nolint
new MediaRecorder(stream)
new MediaRecorder(stream, options)
```

### 引数

- `stream`
  - : 記録される {{domxref("MediaStream")}}。 このソースメディアは、{{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} を使用して作成したストリーム、または {{HTMLElement("audio")}}、{{HTMLElement("video")}}、{{HTMLElement("canvas")}} 要素から取得できます。
- `options` {{optional_inline}}

  - : 以下のプロパティを含むことができる辞書オブジェクト。

    - `mimeType`
      - : 生成されるメディアの形式を指定する MIME タイプです。コンテナー形式を指定することもできますし（ブラウザーは音声と映像のために好ましいコーデックを選択します）、 [`codecs`引数](/ja/docs/Web/Media/Formats/codecs_parameter)や `profiles` 引数を使って、どのコーデックを使い、どう設定するのかという詳細情報を提供することもできます。
        アプリケーションは `mimeType` が {{Glossary("user agent") }} で対応しているかどうかを事前に調べることができます。そのためには {{domxref("MediaRecorder.isTypeSupported()")}} を呼び出す必要があります。
    - `audioBitsPerSecond`
      - : メディアの音声コンポーネントに選択したビットレート。
    - `videoBitsPerSecond`
      - : メディアの映像コンポーネントに選択したビットレート。
    - `bitsPerSecond`
      - : メディアの音声コンポーネントおよび映像コンポーネントに選択したビットレート。 上記の 2 つのプロパティの代わりにこれを指定することができます。 これを上記のプロパティのいずれかと一緒に指定している場合、これは指定していないものに使用されます。

    > **メモ:** 映像や音声にビット/秒の値を指定していない場合、映像が採用している既定値は 2.5Mbps ですが、音声の既定値はサンプルレートとチャネル数に応じて決まります。

    > **メモ:** 映像の解像度やフレームレートなどの設定は {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を呼び出す際に制約として指定され、ここでの MediaRecorder API では指定されません。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 指定された MIME タイプにユーザーエージェントが対応していない場合に発生します。

## 例

この例では、音声のビットレートを 128 K ビット/秒に設定し、映像のビットレートを 2.5 M ビット/秒に設定して、指定したストリーム用のメディアレコーダーを作成する方法を示します。 記録したメディアデータは MP4 ラッパーに保存されます（従って、メディアデータのチャンクを集めてディスクに保存すると、それらは MP4 ファイルになります）。

```js
if (navigator.mediaDevices.getUserMedia) {
  const constraints = { audio: true, video: true };
  const chunks = [];

  const onSuccess = (stream) => {
    const options = {
      audioBitsPerSecond : 128000,
      videoBitsPerSecond : 2500000,
      mimeType : 'video/mp4'
    }
    const mediaRecorder = new MediaRecorder(stream, options);
    m = mediaRecorder;

    // …
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MediaStream 収録 API の使用](/ja/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [ウェブディクタフォン](https://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API 可視化デモ、[Chris Mills](https://twitter.com/chrisdavidmills) 著（[Github のソース](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone)）。（英語）
- [simpl.info の MediaStream Recording のデモ](https://simpl.info/mediarecorder/)、[Sam Dutton](https://twitter.com/sw12) 著。（英語）
- {{domxref("MediaDevices.getUserMedia")}}
