---
title: "SpeechSynthesis: speaking プロパティ"
short-title: speaking
slug: Web/API/SpeechSynthesis/speaking
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`speaking`** は {{domxref("SpeechSynthesis")}} インターフェイスの読み取り専用プロパティで、論理値であり、発話が現在処理中の場合、`SpeechSynthesis` が {{domxref("SpeechSynthesis/pause()","paused")}} 状態であっても `true` を返します。

## 値

論理値です。

## 例

```js
const synth = window.speechSynthesis;

const utterance1 = new SpeechSynthesisUtterance(
  "こう言ってみてはどうでしょうか？これを言うと、かなり長い文章になります。",
);
const utterance2 = new SpeechSynthesisUtterance("念のため、もう一言言います。");

synth.speak(utterance1);
synth.speak(utterance2);

const amISpeaking = synth.speaking; // utterance1 または　utterance2 が現在話されている場合、true を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
