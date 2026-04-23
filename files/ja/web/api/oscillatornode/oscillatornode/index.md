---
title: "OscillatorNode: OscillatorNode() コンストラクター"
short-title: OscillatorNode()
slug: Web/API/OscillatorNode/OscillatorNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Web Audio API")}}

**`OscillatorNode()`** は [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のコンストラクターで、正弦波のような周期的な波形を表現する {{domxref("AudioNode")}} オブジェクトを新しく作成し、オプションでノードのプロパティの値を指定したオブジェクトの値に合わせて設定することができます。

プロパティの既定値が受け入れられる場合 は、代わりに {{domxref("BaseAudioContext.createOscillator()")}} ファクトリーメソッドを任意で使用することができます。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)をご覧ください。

## 構文

```js-nolint
new OscillatorNode(context, options)
```

### 引数

- `context`
  - : {{domxref("AudioContext")}} への参照です。
- `options` {{optional_inline}}
  - : この発振器ノードのプロパティの初期値を指定するオブジェクトです。プロパティがオブジェクトから省略されると、ドキュメントにある通りの既定値を受け取ります。
    - `type`
      - : ノードが生成する波形を指定します。有効な値は '`sine`', '`square`', '`sawtooth`', '`triangle`', '`custom`'です。既定値は '`sine`' です。
    - `detune`
      - : 指定された量だけ `frequency` をずらす離調値（セント単位）です。既定値では 0 です。
    - `frequency`
      - : 周期的な波形の周波数（単位は[ヘルツ](https://ja.wikipedia.org/wiki/ヘルツ)）です。既定で 440 です。
    - `periodicWave`
      - : 任意の周期の波形を {{domxref("PeriodicWave")}} オブジェクトで記述したものです。
    - `channelCount`
      - : ノードへの任意の入力に[アップミキシングおよびダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)接続するときに、何チャンネル使用するかを決めるために使用する整数を表わします。（詳細は {{domxref("AudioNode.channelCount")}} を参照してください）。その使用方法と正確な定義は `channelCountMode` の値に依存します。
    - `channelCountMode`
      - : ノードの入力と出力の間でチャンネルを照合する方法を記述する列挙型の値を表します。（既定値を含む詳細な情報は {{domxref("AudioNode.channelCountMode")}} を参照してください。）
    - `channelInterpretation`
      - : チャンネルの意味を記述する列挙値を表します。この解釈により、音声の[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)がどう行われるかを定義します。
        使用可能な値は `"speakers"` または `"discrete"` です。（既定値を含む詳細な情報は {{domxref("AudioNode.channelCountMode")}} を参照してください。）

### 返値

新しい {{domxref("OscillatorNode")}} オブジェクトのインスタンスです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
