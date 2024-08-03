---
title: "AnalyserNode: AnalyserNode() コンストラクター"
short-title: AnalyserNode()
slug: Web/API/AnalyserNode/AnalyserNode
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("'Web Audio API'")}}

**`AnalyserNode()`** は[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) のコンストラクターで、新しい {{domxref("AnalyserNode")}} オブジェクトインスタンスを生成します。

## 構文

```js-nolint
new AnalyserNode(context)
new AnalyserNode(context, options)
```

### 引数

- `context`
  - : {{domxref("AudioContext")}} または {{domxref("OfflineAudioContext")}} への参照です。
- `options` {{optional_inline}}

  - : 以下のプロパティを持つオブジェクトです。すべて省略可能です。

    - `fftSize`
      - : [周波数領域](https://ja.wikipedia.org/wiki/周波数領域)を解析するための [FFT](https://ja.wikipedia.org/wiki/高速フーリエ変換) の望ましい初期サイズです。
        既定値は `2048` です。
    - `maxDecibels`
      - : FFT 解析のための [dB](https://ja.wikipedia.org/wiki/デシベル) 単位の望ましい初期最大出力です。
        既定値は `-30` です。
    - `minDecibels`
      - : FFT 解析のための dB 単位の望ましい初期最小出力です。
        既定値は `-100` です。
    - `smoothingTimeConstant`
      - : FFT 解析のための望ましい初期スムーズ化定数です。既定値は `0.8` です。
    - `channelCount`
      - : ノードへの任意の入力への[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)接続時に使用するチャンネル数を決定するための整数を表します。（詳しくは {{domxref("AudioNode.channelCount")}} を参照してください。）Its usage and precise definition depend on the value of `channelCountMode`.
        使い方や正確な定義は `channelCountMode` の値に依存します。
    - `channelCountMode`
      - : ノードの入出力間でチャンネルを一致させる方法を記述する[列挙](/ja/docs/Glossary/Enumerated)値を表します。（既定など、詳細は{{domxref("AudioNode.channelCountMode")}}を参照してください。）
    - `channelInterpretation`
      - : チャンネルの意味を記述する列挙値を表します。この解釈は音声の[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)がどのように行われるかを定義します。
        使用可能な値は `"speakers"` または `"discrete"` です。（既定値など、詳しくは {{domxref("AudioNode.channelCountMode")}} を参照してください。）

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("BaseAudioContext.createAnalyser()")}}、同様のファクトリーメソッド
