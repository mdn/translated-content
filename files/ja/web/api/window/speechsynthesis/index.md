---
title: "Window: speechSynthesis プロパティ"
short-title: speechSynthesis
slug: Web/API/Window/speechSynthesis
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef("Web Speech API")}}

`speechSynthesis` は Window オブジェクトの読み取り専用プロパティで、{{domxref("SpeechSynthesis")}} オブジェクトを返します。これは、[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) の音声合成機能を使用するためのエントリーポイントです。

## 値

{{domxref("SpeechSynthesis")}} オブジェクト。

## 例

この基本的な [音声合成のデモ](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) では、最初に `window.speechSynthesis` を使用して SpeechSynthesis コントローラーへの参照を取得します。いくつかの必要な変数を定義した後、{{domxref("SpeechSynthesis.getVoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。

`inputForm.onsubmit` ハンドラー内部では、[preventDefault()](/ja/docs/Web/API/Event/preventDefault) でフォーム送信を停止し、テキスト {{htmlelement("input")}} に入力されたテキストを含む新しい {{domxref("SpeechSynthesisUtterance")}} インスタンスを作成します。その発声 (utterance) にユーザーが {{htmlelement("select")}} 要素で選択した音声を設定し、{{domxref("SpeechSynthesis.speak()")}} メソッドを通して発声の発話を開始します。

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

function populateVoiceList() {
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  utterThis.voice = voices.find((v) => v.name === selectedOption);
  synth.speak(utterThis);
  inputTxt.blur();
};
```

## 仕様書

{{Specifications}}

## ブラウザーの実装状況

{{Compat}}

## 関連項目

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
