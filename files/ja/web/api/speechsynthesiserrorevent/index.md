---
title: SpeechSynthesisErrorEvent
slug: Web/API/SpeechSynthesisErrorEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`SpeechSynthesisErrorEvent`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のインターフェイスで、発話サービスの {{domxref("SpeechSynthesisUtterance")}} オブジェクトの処理中に発生したエラーに関する情報を保持します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("SpeechSynthesisErrorEvent.SpeechSynthesisErrorEvent", "SpeechSynthesisErrorEvent()")}}
  - : 新しい `SpeechSynthesisErrorEvent` イベントを生成します。

## インスタンスプロパティ

_`SpeechSynthesisErrorEvent` は {{domxref("SpeechSynthesisEvent")}} インターフェイスから派生しており、親インターフェイスである {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("SpeechSynthesisErrorEvent.error")}} {{ReadOnlyInline}}
  - : 音声合成に失敗したことを示すエラーコードを返します。

## インスタンスメソッド

_`SpeechSynthesisErrorEvent` は {{domxref("SpeechSynthesisEvent")}} インターフェイスから派生しており、親インターフェイスである {{domxref("Event")}} からメソッドを継承しています。_

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

  utterThis.onerror = (event) => {
    console.log(
      `An error has occurred with the speech synthesis: ${event.error}`,
    );
  };

  inputTxt.blur();
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
