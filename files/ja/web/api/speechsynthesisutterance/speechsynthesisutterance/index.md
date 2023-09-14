---
title: "SpeechSynthesisUtterance: SpeechSynthesisUtterance() コンストラクター"
short-title: SpeechSynthesisUtterance()
slug: Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

`SpeechSynthesisUtterance()` は {{domxref("SpeechSynthesisUtterance")}} インターフェイスのコンストラクターで、新しい `SpeechSynthesisUtterance` オブジェクトのインスタンスを返します。

## 構文

```js-nolint
new SpeechSynthesisUtterance(text)
```

### 引数

- `text`
  - : 発話時に合成されるテキストを格納した文字列です。

## 例

以下のスニペットは [Speech synthesizer demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) から抜粋したものです。

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

const voices = synth.getVoices();

// ...

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
