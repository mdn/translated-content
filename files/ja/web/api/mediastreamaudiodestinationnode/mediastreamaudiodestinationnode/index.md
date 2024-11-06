---
title: "MediaStreamAudioDestinationNode: MediaStreamAudioDestinationNode() コンストラクター"
slug: Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Web Audio API")}}

[Web Audio API](/ja/docs/Web/API/Web_Audio_API) の **`MediaStreamAudioDestinationNode()`** コンストラクターは、新しい {{domxref("MediaStreamAudioDestinationNode")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nolint
new MediaStreamAudioDestinationNode(context)
new MediaStreamAudioDestinationNode(context, options)
```

### 引数

- `context`
  - : このノードを関連付ける音声コンテキストを表す {{domxref("AudioContext")}} です。
- `options` {{optional_inline}}

  - : `MediaStreamAudioDestinationNode` に持たせる性質を定義するオブジェクトです。

    - `channelCount`
      - : ノードの入力への接続を[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)する際に使用するチャンネルの数を決めるのに用いる整数です。(詳しくは {{domxref("AudioNode.channelCount")}} を参照してください) 使用法と正確な定義は、`channelCountMode` の値によります。
    - `channelCountMode`
      - : ノードの入力と出力のチャンネルを対応させる方法を表す文字列です。(デフォルト値を含む詳細は {{domxref("AudioNode.channelCountMode")}} を参照してください)
    - `channelInterpretation`
      - : チャンネルの意味を表す文字列です。この解釈は、音声の[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)を行う方法を定義します。取りうる値は `"speakers"` および `"discrete"` です。(デフォルト値を含む詳細は {{domxref("AudioNode.channelCountMode")}} を参照してください)

## 例

```js
const ac = new AudioContext();

const myDestination = new MediaStreamAudioDestinationNode(ac);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
