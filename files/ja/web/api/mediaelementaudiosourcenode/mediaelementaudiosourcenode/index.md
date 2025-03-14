---
title: "MediaElementAudioSourceNode: MediaElementAudioSourceNode() コンストラクター"
slug: Web/API/MediaElementAudioSourceNode/MediaElementAudioSourceNode
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Web Audio API")}}

**`MediaElementAudioSourceNode()`** コンストラクターは、新しい {{domxref("MediaElementAudioSourceNode")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nolint
new MediaElementAudioSourceNode(context, options)
```

### 引数

- `context`
  - : このノードを関連付ける音声コンテキストを表す {{domxref("AudioContext")}} です。
- `options`
  - : `MediaElementAudioSourceNode` が持つ性質を定義するオブジェクトです。
    - `mediaElement`
      - : 音声の音源として用いる {{domxref("HTMLMediaElement")}} です。
    - `channelCount`
      - : このノードへの入力の[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)を行う際に用いるチャンネルの数を決める整数です。(詳細は {{domxref("AudioNode.channelCount")}} を参照してください) 使用法と正確な定義は `channelCountMode` の値によります。
    - `channelCountMode`
      - : ノードの入力と出力のチャンネルを対応させる方法を表す文字列です。(デフォルト値を含む詳細は {{domxref("AudioNode.channelCountMode")}} を参照してください)
    - `channelInterpretation`
      - : チャンネルの意味を表す文字列です。この解釈は、[アップミキシングとダウンミキシング](/ja/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#アップミキシングとダウンミキシング)を行う方法を決めます。取りうる値は `"speakers"` および `"discrete"` です。(デフォルト値を含む詳細は {{domxref("AudioNode.channelInterpretation")}} を参照してください)

### 返値

新しい {{domxref("MediaElementAudioSourceNode")}} オブジェクトのインスタンスです。

## 例

```js
const ac = new AudioContext();
const mediaElement = document.createElement("audio");

const myAudioSource = new MediaElementAudioSourceNode(ac, {
  mediaElement,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
