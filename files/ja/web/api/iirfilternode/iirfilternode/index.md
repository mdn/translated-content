---
title: "IIRFilterNode: IIRFilterNode() コンストラクター"
slug: Web/API/IIRFilterNode/IIRFilterNode
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Web Audio API")}}

**`IIRFilterNode()`** は[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のコンストラクターで、一般的な無限インパルス応答フィルターを実装するための {{domxref("IIRFilterNode")}} プロセッサーとなる新しい {{domxref("AudioNode")}} オブジェクトを作成します。

## 構文

```js-nolint
new IIRFilterNode(context, options)
```

### 引数

- `context`
  - : {{domxref("AudioContext")}} への参照です。
- `options`
  - : オプションは次の通りです。
    - `feedforward`
      - : フィードフォワードの係数の列です。
    - `feedback`
      - : フィードバック係数の列です。
    - `channelCount`
      - : ノードへの任意の入力に[アップミキシングおよびダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)接続する際に、何チャンネルを用いるか決めるために用いられる整数を表します。（詳細は{{domxref("AudioNode.channelCount")}}を参照してください。）その使い方と正確な定義は `channelCountMode` の値に依存します。
    - `channelCountMode`
      - : ノードの入力と出力の間でチャンネルを一致させる方法を記述する列挙値を表します。（既定値を含む詳細情報は {{domxref("AudioNode.channelCountMode")}} を参照してください。）
    - `channelInterpretation`
      - : チャンネルの意味を説明する列挙値を表します。この解釈により、音声の[アップミキシングおよびダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)がどう行われるかが定義されます。
        使用可能な値は `"speakers"` または `"discrete"` です。（既定値を含む詳細な情報は {{domxref("AudioNode.channelCountMode")}} を参照してください。）

ウェブオーディオ API の他のノードとは異なり、IIR フィルターの作成時に渡されるオプションは、オプションではありません。フィルターは作業するためにこの値を必要とし、利用できるフィルターの範囲が広いため、既定値はありません。

### 返値

新しい {{domxref("IIRFilterNode")}} オブジェクトインスタンスです。

## 例

```js
let feedForward = [0.00020298, 0.0004059599, 0.00020298];
let feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const iirFilter = new IIRFilterNode(audioCtx, {
  feedforward: feedForward,
  feedback: feedBackward,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
