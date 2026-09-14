---
title: "PannerNode: PannerNode() コンストラクター"
short-title: PannerNode()
slug: Web/API/PannerNode/PannerNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Web Audio API")}}

**`PannerNode()`** は[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のコンストラクターで、新しい {{domxref("PannerNode")}} オブジェクトインスタンスを生成します。

## 構文

```js-nolint
new PannerNode(context)
new PannerNode(context, options)
```

### 引数

- `context`
  - : ノードを関連付けたい音声コンテキストを表す {{domxref("BaseAudioContext")}} です。
- `options` {{optional_inline}}
  - : `PannerNode` に設定したいプロパティを定義する [`PannerOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PannerOptions) 辞書オブジェクトです。
    - `panningModel`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.panningModel")}} （既定値は `equalpower` です。）
    - `distanceModel`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.distanceModel")}} （既定値は `inverse` です。）
    - `positionX`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.positionX")}} （既定値は `0` です。）
    - `positionY`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.positionY")}} （既定値は `0` です。）
    - `positionZ`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.positionZ")}} （既定値は `0` です。）
    - `orientationX`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.orientationX")}} （既定値は `1` です。）
    - `orientationY`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.orientationY")}} （既定値は `0` です。）
    - `orientationZ`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.orientationZ")}} （既定値は `0` です。）
    - `refDistance`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.refDistance")}} です。既定値は `1` であり、負の値は許可されません。
    - `maxDistance`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.maxDistance")}} です。既定値は `10000` であり、正でない値は許可されません。
    - `rolloffFactor`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.rolloffFactor")}} です。既定値は `1` であり、負の値は許可されません。
    - `coneInnerAngle`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.coneInnerAngle")}} （既定値は `360` です。）
    - `coneOuterAngle`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.coneOuterAngle")}} （既定値は `360` です。）
    - `coneOuterGain`
      - : {{domxref("PannerNode")}} に設定したい {{domxref("PannerNode.coneOuterGain")}} です。既定値は `0` であり、値は 0 ～ 1 の範囲を取ることができます。
    - `channelCount`
      - : ノードへの任意の入力への[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)接続時に使用するチャンネル数を決定するための整数を表します。（詳細は {{domxref("AudioNode.channelCount")}} を参照してください。）使用法と正確な定義は `channelCountMode` の値に依存します。
    - `channelCountMode`
      - : ノードの入出力間でチャンネルを照合する方法を記述する列挙値を表します。（既定値を含む詳細は {{domxref("AudioNode.channelCountMode")}} を参照してください。）
    - `channelInterpretation`
      - : チャンネルの意味を記述する列挙値を表します。この解釈によって、音声の[アップミキシングやダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)がどのように行われるかを定義します。可能な値は "speakers" または "discrete" です。（既定値を含む詳細は {{domxref("AudioNode.channelCountMode")}} を参照してください。）

### 例外

- {{jsxref("RangeError")}}
  - : `refDistance`、`maxDistance`、`rolloffFactor` プロパティに受け入れられる範囲外の値が指定された場合に発生します。
- `InvalidStateError` {{domxref("DOMException")}}
  - : `coneOuterGain` プロパティに受け入れられる範囲外 (0 ～ 1) の値が指定された場合に発生します。

## 例

```js
const ctx = new AudioContext();

const options = {
  positionX: 1,
  maxDistance: 5000,
};

const myPanner = new PannerNode(ctx, options);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
