---
title: "SpeechRecognition: SpeechRecognition() コンストラクター"
short-title: SpeechRecognition()
slug: Web/API/SpeechRecognition/SpeechRecognition
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

**`SpeechRecognition()`** コンストラクターは、 {{domxref("SpeechRecognition")}} のオブジェクトインスタンスを作成します。

## 構文

```js-nolint
new SpeechRecognition()
```

### 引数

なし。

## 例

このコードは、 [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) から引用しています。

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
