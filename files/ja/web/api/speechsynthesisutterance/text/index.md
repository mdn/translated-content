---
title: "SpeechSynthesisUtterance: text プロパティ"
short-title: text
slug: Web/API/SpeechSynthesisUtterance/text
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

**`text`** は {{domxref("SpeechSynthesisUtterance")}} インターフェイスのプロパティで、発話時に合成されるテキストを取得および設定します。

テキストはプレーンテキストか、整形された [SSML](https://www.w3.org/TR/speech-synthesis/) 文書として提供されます。
SSML タグは SSML に対応していない端末では取り除かれます。

## 値

合成するテキストを表す文字列です。
各発話で発話できるテキストの最大長は 32,767 文字です。

## 例

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
  console.log(utterThis.text);
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
