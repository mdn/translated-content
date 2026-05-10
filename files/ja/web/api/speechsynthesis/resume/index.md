---
title: "SpeechSynthesis: resume() メソッド"
short-title: resume()
slug: Web/API/SpeechSynthesis/resume
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`resume()`** は {{domxref("SpeechSynthesis")}} インターフェイスのメソッドで、`SpeechSynthesis` オブジェクトを一時停止していない状態に戻します。つまり、すでに一時停止している場合は、発話を再開します。

## 構文

```js-nolint
resume()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
let synth = window.speechSynthesis;

const utterance1 = new SpeechSynthesisUtterance(
  "こう言ってみてはどうでしょうか？これを言うと、かなり長い文章になります。",
);
const utterance2 = new SpeechSynthesisUtterance("念のため、もう一言言います。");

synth.speak(utterance1);
synth.speak(utterance2);

synth.pause(); // 発話を一時停止
synth.resume(); // 発話を再開
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
