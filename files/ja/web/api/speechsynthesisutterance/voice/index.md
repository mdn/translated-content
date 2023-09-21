---
title: "SpeechSynthesisUtterance: voice プロパティ"
short-title: voice
slug: Web/API/SpeechSynthesisUtterance/voice
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

**`voice`** は {{domxref("SpeechSynthesisUtterance")}} インターフェイスのプロパティで、発話に使用する音声を取得および設定します。

これは {{domxref("SpeechSynthesis.getVoices()")}} が返す {{domxref("SpeechSynthesisVoice")}} オブジェクトのいずれかに設定する必要があります。
発話時点までに設定されていない場合、使用する音声は発話の {{domxref("SpeechSynthesisUtterance.lang","lang")}} 設定で利用できる最も適した既定値になります。

## 値

{{domxref("SpeechSynthesisVoice")}} オブジェクトです。

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
