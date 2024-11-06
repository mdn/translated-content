---
title: "ChannelSplitterNode: ChannelSplitterNode() コンストラクター"
short-title: ChannelSplitterNode()
slug: Web/API/ChannelSplitterNode/ChannelSplitterNode
l10n:
  sourceCommit: 670f9e44920895045984a458dcd4cae0304e2fe3
---

{{APIRef("Web Audio API")}}

[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の **`ChannelSplitterNode()`** コンストラクターは、新しい {{domxref("ChannelSplitterNode")}} オブジェクトのインスタンスを作成します。これは、入力の音声チャンネルそれぞれを別々の出力に分離するノードを表します。

## 構文

```js-nolint
new ChannelSplitterNode(context)
new ChannelSplitterNode(context, options)
```

### 引数

- `context`
  - : このノードを関連付ける音声コンテキストを表す {{domxref("BaseAudioContext")}} です。
- `options` {{optional_inline}}

  - : `ChannelSplitterNode` に持たせるプロパティを定義するオブジェクトです。
    - `numberOfOutputs` {{optional_inline}}
      - : {{domxref("ChannelSplitterNode")}} の出力の数を決める数値です。指定しない場合の既定の値は 6 です。
    - `channelCount` {{optional_inline}}
      - : このノードの入力について[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)を行う際に用いるチャンネル数を決める整数です。
        (詳しくは {{domxref("AudioNode.channelCount")}} を参照してください)
        使用法と正確な定義は `channelCountMode` の値によります。
    - `channelCountMode` {{optional_inline}}
      - : ノードの入力と出力でチャンネルを対応付ける方法を表す文字列です。
        (デフォルト値など詳しくは {{domxref("AudioNode.channelCountMode")}} を参照してください)
    - `channelInterpretation` {{optional_inline}}
      - : チャンネルの意味を表す文字列です。
        この意味により、音声の[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#%E3%82%A2%E3%83%83%E3%83%97%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0%E3%81%A8%E3%83%80%E3%82%A6%E3%83%B3%E3%83%9F%E3%82%AD%E3%82%B7%E3%83%B3%E3%82%B0)を行う方法が決まります。
        取りうる値は `"speakers"` と `"discrete"` です。
        (デフォルト値など詳しくは {{domxref("AudioNode.channelCountMode")}} を参照してください)

### 返値

新しい {{domxref("ChannelSplitterNode")}} オブジェクトのインスタンスを返します。

## 例

```js
const ac = new AudioContext();

const options = {
  numberOfOutputs: 2,
};

const mySplitter = new ChannelSplitterNode(ac, options);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
