---
title: PeriodicWave()
slug: Web/API/PeriodicWave/PeriodicWave
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{APIRef("Web Audio API")}}

[Web Audio API](/ja/docs/Web/API/Web_Audio_API) の **`PeriodicWave()`** コンストラクターは、新しい {{domxref("PeriodicWave")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nolint
new PeriodicWave(context)
new PeriodicWave(context, options)
```

### 引数

- `context`
  - : ノードを関連付ける音声コンテキストを表す {{domxref("BaseAudioContext")}} です。
- `options` {{optional_inline}}

  - : `PeriodicWave` に持たせるプロパティを定義する
    [`PeriodicWaveOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveOptions)
    の辞書オブジェクトです。(辞書 [PeriodicWaveConstraints](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveConstraints) で定義されるオプションも継承しています)

    - `real`
      - : 波形を作るための余弦 (コサイン) の項を格納した {{jsxref("Float32Array")}} です。
        ({{domxref("BaseAudioContext.createPeriodicWave")}} の引数 `real` に相当します)
    - `imag`
      - : 波形を作るための正弦 (サイン) の項を格納した {{jsxref("Float32Array")}} です。
        ({{domxref("BaseAudioContext.createPeriodicWave")}} の引数 `imag` に相当します)
    - `channelCount`
      - : ノードへの入力の[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)を行う際に何個のチャンネルを用いるかを決めるために用いる整数です。(詳しくは {{domxref("AudioNode.channelCount")}} を参照してください) 利用法と正確な定義は `channelCountMode` の値によります。
    - `channelCountMode`
      - : ノードの入力と出力でチャンネルを対応させる方法を表す列挙値です。(デフォルト値など詳しくは {{domxref("AudioNode.channelCountMode")}} を参照してください)
    - `channelInterpretation`
      - : チャンネルの意味を表す列挙値です。これにより[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)をどのように行うかを決定します。取りうる値は `"speakers"` および `"discrete"` です。(デフォルト値など詳しくは {{domxref("AudioNode.channelCountMode")}} を参照してください)

### 返値

新しい {{domxref("PeriodicWave")}} オブジェクトのインスタンスを返します。

## 例

```js
const real = new Float32Array(2);
const imag = new Float32Array(2);
const ac = new AudioContext();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

const wave = new PeriodicWave(ac, {
  real,
  imag,
  disableNormalization: false,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
