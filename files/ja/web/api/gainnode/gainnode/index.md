---
title: "GainNode: GainNode() コンストラクター"
short-title: GainNode()
slug: Web/API/GainNode/GainNode
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Web Audio API")}}

[Web Audio API](/ja/docs/Web/API/Web_Audio_API) の **`GainNode()`** コンストラクターは、新しい {{domxref("GainNode")}} オブジェクトを作成します。これは音量の変更を表す {{domxref("AudioNode")}} です。

## 構文

```js-nolint
new GainNode(context, options)
```

### 引数

- `context`
  - : {{domxref("BaseAudioContext")}} (たとえば {{domxref("AudioContext")}}) への参照です。
- `options` {{optional_inline}}
  - : 以下のオプションが指定できます。
    - `gain`
      - : 適用するゲインです。このパラメーターは a-rate で、公称の範囲は (-∞,+∞) です。デフォルト値は `1` です。
    - `channelCount`
      - : このノードへの入力について[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)を行う際に用いるチャンネル数の決定に用いる整数です。(詳しくは {{domxref("AudioNode.channelCount")}} を参照してください) この使用法と正確な定義は `channelCountMode` の値によります。
    - `channelCountMode`
      - : ノードの入力と出力でチャンネルを対応させる方法を表す列挙値です。(デフォルト値など詳しくは {{domxref("AudioNode.channelCountMode")}} を参照してください)
    - `channelInterpretation`
      - : チャンネルの意味を表す列挙値です。この意味により、音声の[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)を行う方法を決定します。取りうる値は `"speakers"` および `"discrete"` です。(デフォルト値など詳しくは {{domxref("AudioNode.channelCountMode")}} を参照してください)

### 返値

新しい {{domxref("GainNode")}} オブジェクトのインスタンスを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
