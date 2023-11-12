---
title: MediaStreamAudioSourceNode()
slug: Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode
l10n:
  sourceCommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{APIRef("Web Audio API")}}

[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の **`MediaStreamAudioSourceNode()`** コンストラクターは、指定された {{domxref("MediaStream")}} の最初の音声トラックを音源として用いる新しい {{domxref("MediaStreamAudioSourceNode")}} オブジェクトを作成して返します。

> **メモ:** `MediaStreamAudioSourceNode` を作成するもう一つの方法は、音声の取得元のストリームを指定して {{domxref("AudioContext.createMediaStreamSource()")}} メソッドを呼ぶことです。

## 構文

```js-nolint
new MediaStreamAudioSourceNode(context, options)
```

### 引数

- `context`
  - : ノードを関連付ける音声コンテキストを表す {{domxref("AudioContext")}} です。
- `options`

  - : `MediaStreamAudioSourceNode` に持たせるプロパティを定義するオブジェクトです。

    - `mediaStream`
      - : 必須のプロパティで、ノードが用いる音声の取得元となる {{domxref("MediaStream")}} を指定します。

### 返値

指定されたストリームから音声を取得する音声ノードを表す新しい {{domxref("MediaStreamAudioSourceNode")}} オブジェクトを返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 指定された {{domxref("MediaStream")}} に音声トラックが無いとき投げられます。

## 例

この例では、{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} を用いてユーザーのカメラにアクセスし、その {{domxref("MediaStream")}} から新しい {{domxref("MediaStreamAudioSourceNode")}} を作成します。

```js
// 変数を定義する
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// getUserMedia によりストリームを取得し、
// MediaStreamAudioSourceNode に入れる
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia(
      // constraints: このアプリケーションで音声と映像を用いるか
      {
        audio: true,
        video: false,
      },
    )
    .then((stream) => {
      const options = {
        mediaStream: stream,
      };

      const source = new MediaStreamAudioSourceNode(audioCtx, options);
      source.connect(audioCtx.destination);
    })
    .catch((err) => {
      console.error(`以下の gUM エラーが発生しました: ${err}`);
    });
} else {
  console.log(
    "このブラウザーでは新しい getUserMedia がサポートされていません！",
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
