---
title: ScriptProcessorNode.bufferSize
slug: Web/API/ScriptProcessorNode/bufferSize
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

{{domxref("ScriptProcessorNode")}} インターフェイスの `bufferSize` プロパティは、入力と出力両方のバッファーサイズを表す整数をサンプルフレーム数単位で返します。この値は `256` 〜 `16384` の範囲の 2 のべき乗を取りえます。

> **メモ:** この機能は [AudioWorklets](/ja/docs/Web/API/AudioWorklet) および {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

## 値

整数です。

## 例

サンプルコードは [`BaseAudioContext.createScriptProcessor()`](/ja/docs/Web/API/BaseAudioContext/createScriptProcessor#%E4%BE%8B) を参照してください。

## 仕様書

2014 年 8 月 29 日の [Web Audio API specification](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) の発行以降、この機能は非推奨になりました。この機能は標準化を検討されていません。

この機能は [AudioWorklets](/ja/docs/Web/API/AudioWorklet) および {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
