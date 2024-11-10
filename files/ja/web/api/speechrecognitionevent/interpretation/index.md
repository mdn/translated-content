---
title: "SpeechRecognitionEvent: interpretation プロパティ"
short-title: interpretation
slug: Web/API/SpeechRecognitionEvent/interpretation
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}{{deprecated_header}}{{Non-standard_header}}

**`interpretation`** は {{domxref("SpeechRecognitionEvent")}} インターフェイスの読み取り専用プロパティで、ユーザーが何を言ったかの意味論的な意味づけを返します。

これは、例えば、文法における意味づけの SISR 仕様書によって決定されるかも しれません（仕様と例については、 [Semantic Interpretation for Speech Recognition (SISR) Version 1.0](https://www.w3.org/TR/semantic-interpretation/) を参照してください）。

## 値

返される値はあらゆる型になる可能性があります。音声認識システムから意味づけが返されなかった場合、 `null` が返されます。

## 例

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(event.interpretation);
};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
