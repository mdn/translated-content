---
title: "ScriptProcessorNode: bufferSize プロパティ"
short-title: bufferSize
slug: Web/API/ScriptProcessorNode/bufferSize
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Web Audio API")}}{{Deprecated_Header}}

{{domxref("ScriptProcessorNode")}} インターフェイスの `bufferSize` プロパティは、入力と出力両方のバッファーサイズを表す整数をサンプルフレーム数単位で返します。この値は `256` 〜 `16384` の範囲の 2 のべき乗を取りえます。

> [!NOTE]
> この機能は [AudioWorklets](/ja/docs/Web/API/AudioWorklet) および {{domxref("AudioWorkletNode")}} インターフェイスに置き換えられました。

## 値

整数です。

## 例

サンプルコードは [`BaseAudioContext.createScriptProcessor()`](/ja/docs/Web/API/BaseAudioContext/createScriptProcessor#%E4%BE%8B) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
