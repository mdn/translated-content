---
title: "BaseAudioContext: createConvolver() メソッド"
short-title: createConvolver()
slug: Web/API/BaseAudioContext/createConvolver
l10n:
  sourceCommit: 136d5393245316a5ba4ed17c163a7c1284b1cbcc
---

{{ APIRef("Web Audio API") }}

`createConvolver()` は {{ domxref("BaseAudioContext") }} インターフェイスのメソッドで、 {{ domxref("ConvolverNode") }} を生成します。これは一般に音声にリバーブ効果を適用するために使用されます。詳しくは[畳み込み効果の仕様定義](https://webaudio.github.io/web-audio-api/#background-3) を参照してください。

> [!NOTE]
> {{domxref("ConvolverNode.ConvolverNode", "ConvolverNode()")}} コンストラクターは {{domxref("ConvolverNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

## 構文

```js-nolint
createConvolver()
```

### 引数

なし。

### 返値

{{domxref("ConvolverNode")}} です。

## 例

### 畳み込みノードの作成

次の例は、畳み込みノードを作成するための AudioContext の使用方法を示しています。畳み込み効果を形成するアンビエンスとして使用するサウンドサンプル（*インパルスレスポンス*と呼ばれます）を含む {{domxref("AudioBuffer")}} を作成し、それを畳み込みに適用します。下の例では、コンサートホールの観客の短いサンプルを使っているので、適用されるリバーブ効果はとても深く、エコーがかかっているようです。

応用例や情報については、 [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) デモを参照してください（関連コードは [app.js](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js) を参照してください）。

```js
const audioCtx = new AudioContext();
// ...

const convolver = audioCtx.createConvolver();
// ...

// 畳み込みノードのために fetch() で音声トラックをつかむ
try {
  const response = await fetch(
    "https://mdn.github.io/webaudio-examples/voice-change-o-matic/audio/concert-crowd.ogg",
  );
  const arrayBuffer = await response.arrayBuffer();
  const decodedAudio = await audioCtx.decodeAudioData(arrayBuffer);
  convolver.buffer = decodedAudio;
} catch (error) {
  console.error(
    `音声ファイル ${name} が読み取れませんでした。エラー: ${err.message}`,
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
