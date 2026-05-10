---
title: "SpeechSynthesis: pause() メソッド"
short-title: pause()
slug: Web/API/SpeechSynthesis/pause
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`pause()`** は {{domxref("SpeechSynthesis")}} インターフェイスのメソッドで、`SpeechSynthesis` オブジェクトを一時停止状態にします。

## 構文

```js-nolint
pause()
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
const utterance2 = new SpeechSynthesisUtterance(
  "念のため、もう一言言います。",
);

synth.speak(utterance1);
synth.speak(utterance2);

synth.pause(); // 発話を停止
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
