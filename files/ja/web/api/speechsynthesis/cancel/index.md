---
title: "SpeechSynthesis: cancel() メソッド"
short-title: cancel()
slug: Web/API/SpeechSynthesis/cancel
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`cancel()`** は {{domxref("SpeechSynthesis")}} インターフェイスのメソッドで、発話キューからすべての発話を除去します。

現在発話中の場合は、直ちに発話が停止します。

## 構文

```js-nolint
cancel()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const synth = window.speechSynthesis;

const utterance1 = new SpeechSynthesisUtterance(
  "こう言ってみてはどうでしょうか？これを言うと、かなり長い文章になります。",
);
const utterance2 = new SpeechSynthesisUtterance("念のため、もう一言言います。");

synth.speak(utterance1);
synth.speak(utterance2);

synth.cancel(); // utterance1 の発話を直ちに停止し、両方がキューから除去します。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
