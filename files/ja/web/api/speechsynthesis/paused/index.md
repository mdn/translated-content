---
title: "SpeechSynthesis: paused プロパティ"
short-title: paused
slug: Web/API/SpeechSynthesis/paused
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

**`paused`** は {{domxref("SpeechSynthesis")}} インターフェイスの読み取り専用プロパティで、論理値を返します。`true` はこの `SpeechSynthesis` オブジェクトが一時停止状態の場合、`false` はそれ以外の場合に返します。

現在、音声が出力されていない場合でも、{{domxref("SpeechSynthesis.pause()", "paused")}} に設定することができます。その後、{{domxref("SpeechSynthesisUtterance","utterances")}} が発話キューに追加されても、`SpeechSynthesis` オブジェクトの一時停止を {{domxref("SpeechSynthesis.resume()")}} で解除するまで、それらは発話されません。

## 値

論理値です。

## 例

```js
const synth = window.speechSynthesis;

synth.pause();

const amIPaused = synth.paused; // true を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
