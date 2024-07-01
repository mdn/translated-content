---
title: "SpeechSynthesisEvent: utterance プロパティ"
short-title: utterance
slug: Web/API/SpeechSynthesisEvent/utterance
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`utterance`** は {{domxref("SpeechSynthesisUtterance")}} インターフェイスの読み取り専用プロパティで、イベントが発生した {{domxref("SpeechSynthesisUtterance")}} インスタンスを返します。

## 値

{{domxref("SpeechSynthesisUtterance")}} オブジェクトです。

## 例

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
  );
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
