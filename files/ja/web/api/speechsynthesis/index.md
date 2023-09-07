---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

[Web Speech API](/ja/docs/Web/API/Web_Speech_API) の **`SpeechSynthesis`** インターフェイスは、speech サービスのための制御インターフェイスです。これは、端末で利用可能な合成音声についての情報を取得するために使用されます。読み上げの開始および一時停止、他のコマンドで制御します。

## プロパティ

_`SpeechSynthesis` は、その親インターフェイスである {{domxref("EventTarget")}} からのプロパティも継承します。_

- {{domxref("SpeechSynthesis.paused")}} {{readonlyinline}}
  - : {{domxref("Boolean", "真偽値")}}。`SpeechSynthesis` オブジェクトが一時停止状態の場合に `true` を返します。
- {{domxref("SpeechSynthesis.pending")}} {{readonlyinline}}
  - : {{domxref("Boolean", "真偽値")}}。発声 (utterance) キューにまだ発話されていないものがある場合に `true` を返します。
- {{domxref("SpeechSynthesis.speaking")}} {{readonlyinline}}
  - : {{domxref("Boolean", "真偽値")}}。`SpeechSynthesis` が一時停止状態であっても、発声が現在発話処理中の場合に `true` を返します。

### イベントハンドラー

- {{domxref("SpeechSynthesis.onvoiceschanged")}}
  - : {{domxref("SpeechSynthesis.getVoices()")}} メソッドにより返される {{domxref("SpeechSynthesisVoice")}} オブジェクトのリストが変更された時に発火します。

## メソッド

_`SpeechSynthesis` は、その親インターフェイスである {{domxref("EventTarget")}} からのメソッドも継承します。_

- {{domxref("SpeechSynthesis.cancel()")}}
  - : すべての発声を発声キューから削除します。
- {{domxref("SpeechSynthesis.getVoices()")}}
  - : 現在の端末上のすべての利用可能な音声を表す、{{domxref("SpeechSynthesisVoice")}} オブジェクトのリストを返します。
- {{domxref("SpeechSynthesis.pause()")}}
  - : `SpeechSynthesis` オブジェクトを一時停止状態にします。
- {{domxref("SpeechSynthesis.resume()")}}
  - : `SpeechSynthesis` オブジェクトを一時停止でない状態にします。つまり、一時停止状態であった場合に再開します。
- {{domxref("SpeechSynthesis.speak()")}}
  - : {{domxref("SpeechSynthesisUtterance", "utterance")}} を発声キューに追加します。これは、それ以前にキューに追加された他の発声が発話された後に発話されます。

## 例

私たちの基本的な [音声合成のデモ](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) では、最初に `window.speechSynthesis` を使用して SpeechSynthesis コントローラーへの参照を取得します。必要な変数の定義後、 {{domxref("SpeechSynthesis.getVoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。

`inputForm.onsubmit` ハンドラー内部では、[preventDefault()](/ja/docs/Web/API/Event/preventDefault) でフォーム送信を停止し、テキスト {{htmlelement("input")}} に入力されたテキストを含む新しい {{domxref("SpeechSynthesisUtterance")}} インスタンスを作成します。その発声にユーザーが {{htmlelement("select")}} 要素で選択した音声を設定し、{{domxref("SpeechSynthesis.speak()")}} メソッドを通して発声の発話を開始します。

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector("form");
var inputTxt = document.querySelector(".txt");
var voiceSelect = document.querySelector("select");

var pitch = document.querySelector("#pitch");
var pitchValue = document.querySelector(".pitch-value");
var rate = document.querySelector("#rate");
var rateValue = document.querySelector(".rate-value");

var voices = [];

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
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);

  inputTxt.blur();
};
```

## 仕様

{{Specifications}}

## ブラウザーの実装状況

{{Compat("api.SpeechSynthesis")}}

## 関連項目

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)
