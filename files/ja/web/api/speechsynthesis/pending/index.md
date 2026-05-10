---
title: "SpeechSynthesis: pending プロパティ"
short-title: pending
slug: Web/API/SpeechSynthesis/pending
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`pending`** は {{domxref("SpeechSynthesis")}} インターフェイスの読み取り専用プロパティで、論理値を返します。この発話キューにまだ発話されていない発話がある場合に `true` を返します。

## 値

論理値です。

## 例

```js
const synth = window.speechSynthesis;

const utterance1 = new SpeechSynthesisUtterance(
  "こう言ってみてはどうでしょうか？これを言うと、かなり長い文章になります。",
);
const utterance2 = new SpeechSynthesisUtterance(
  "念のため、もう一言言います。",
);

synth.speak(utterance1);
synth.speak(utterance2);

const amIPending = synth.pending; // utterance1 がまだ話されている最中で、utterance2 がキューに入っている場合、true を返します
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
