---
title: AudioWorklet
slug: Web/API/AudioWorklet
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}{{securecontext_header}}

[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) の **`AudioWorklet`** インターフェイスは、別のスレッドで実行して非常に低遅延の音声処理を提供するカスタム音声処理スクリプトを提供するのに使われます。

このワークレットのコードはグローバル実行コンテキスト {{domxref("AudioWorkletGlobalScope")}} で、ワークレットと他の音声ノードで共有のウェブオーディオスレッドで実行されます。

音声コンテキストの `AudioWorklet` のインスタンスには、{{domxref("BaseAudioContext.audioWorklet")}} プロパティを通じてアクセスできます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_`AudioWorklet` インターフェイスは自身のプロパティを定義していませんが、{{domxref("Worklet")}} のプロパティを継承しています。_

## インスタンスメソッド

_このインターフェイスは {{domxref('Worklet')}} からメソッドを継承しています。`AudioWorklet` インターフェイスは自身のメソッドを定義していません。_

## イベント

_`AudioWorklet` には反応するイベントがありません。_

## 例

カスタム音声ノードを作成する完全な例は、{{domxref("AudioWorkletNode")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("AudioWorkletGlobalScope")}} — `AudioWorklet` のグローバル実行コンテキスト
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [AudioWorklet の使用](/ja/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
