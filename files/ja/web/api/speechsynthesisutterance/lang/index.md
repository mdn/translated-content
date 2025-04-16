---
title: "SpeechSynthesisUtterance: lang プロパティ"
short-title: lang
slug: Web/API/SpeechSynthesisUtterance/lang
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

**`lang`** は {{domxref("SpeechSynthesisUtterance")}} インターフェイスのプロパティで、発話の言語を取得および設定します。

設定されていない場合、アプリ（すなわち {{htmlelement("html")}} の [`lang`](/ja/docs/Web/HTML/Reference/Elements/html#lang) 値）の言語が使用されるか、こちらも未設定であればユーザーエージェントの既定の言語が使用されます。

## 値

BCP 47 言語タグを表す文字列です。

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
  utterThis.lang = "en-US";
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
