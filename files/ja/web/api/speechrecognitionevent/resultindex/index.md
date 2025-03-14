---
title: SpeechRecognitionEvent.resultIndex
slug: Web/API/SpeechRecognitionEvent/resultIndex
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Web Speech API")}}

**`resultIndex`** は {{domxref("SpeechRecognitionEvent")}} のインターフェイスの読み取り専用プロパティで、 {{domxref("SpeechRecognitionResultList")}} 「配列」の中で最も小さな添字を結果として返します。

{{domxref("SpeechRecognitionResultList")}} オブジェクトは配列ではありませんが、配列構文でアクセスできるようにゲッターがあります。

## 値

数値です。

## 例

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(event.resultIndex); // returns 0 if there is only one result
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
