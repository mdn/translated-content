---
title: "SpeechSynthesisUtterance: volume プロパティ"
short-title: volume
slug: Web/API/SpeechSynthesisUtterance/volume
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

**`volume`** は {{domxref("SpeechSynthesisUtterance")}} インターフェイスのプロパティで、発話の音量を取得および設定します。

未設定の場合、既定値の 1 が使用されます。

## 値

0 （最低）から 1 （最高）の間の浮動小数点数で、音量を表します。

[SSML](https://www.w3.org/TR/speech-synthesis/) を使用している場合、この値はマークアップの[韻律タグ](https://www.w3.org/TR/speech-synthesis/#S3.2.4)によって上書きされます。

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
  utterThis.volume = 0.5;
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
