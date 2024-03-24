---
title: Window.speechSynthesis
slug: Web/API/Window/speechSynthesis
---

{{APIRef()}}{{SeeCompatTable}}

Window オブジェクトの `speechSynthesis` 読み取り専用プロパティは、{{domxref("SpeechSynthesis")}} オブジェクトを返します。これは、[Web Speech API](/ja/docs/Web/API/Web_Speech_API) の音声合成機能を使用するためのエントリーポイントです。

## 構文

```js
var synth = window.speechSynthesis;
```

### 値

{{domxref("SpeechSynthesis")}} オブジェクト。

## 例

私たちの基本的な [音声合成のデモ](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) では、最初に `window.speechSynthesis` を使用して SpeechSynthesis コントローラーへの参照を取得します。いくつかの必要な変数を定義した後、{{domxref("SpeechSynthesis.getVoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。

`inputForm.onsubmit` ハンドラー内部では、[preventDefault()](/ja/docs/Web/API/Event/preventDefault) でフォーム送信を停止し、テキスト {{htmlelement("input")}} に入力されたテキストを含む新しい {{domxref("SpeechSynthesisUtterance")}} インスタンスを作成します。その発声 (utterance) にユーザーが {{htmlelement("select")}} 要素で選択した音声を設定し、{{domxref("SpeechSynthesis.speak()")}} メソッドを通して発声の発話を開始します。

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector("form");
var inputTxt = document.querySelector("input");
var voiceSelect = document.querySelector("select");

function populateVoiceList() {
  voices = synth.getVoices();

  for (i = 0; i < voices.length; i++) {
    var option = document.createElement("option");
    option.textContent = voices[i].name + " (" + voices[i].lang + ")";

    if (voices[i].default) {
      option.textContent += " -- DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = function (event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
};
```

## 仕様

{{Specifications}}

## ブラウザーの実装状況

{{Compat}}

## 関連項目

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)
