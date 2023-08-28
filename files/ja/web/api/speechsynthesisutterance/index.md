---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

[Web Speech API](/ja/docs/Web/API/Web_Speech_API) の **`SpeechSynthesisUtterance`** インターフェイスは、発話リクエストを表します。これには、speech サービスが読み上げるコンテンツと、その読み上げ方についての情報 (言語、音の高低、音量) が含まれます。

## コンストラクター

- {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()")}}
  - : 新しい `SpeechSynthesisUtterance` オブジェクトのインスタンスを返します。

## プロパティ

_`SpeechSynthesisUtterance` は、その親インターフェイスである {{domxref("EventTarget")}} からのプロパティも継承します。_

- {{domxref("SpeechSynthesisUtterance.lang")}}
  - : utterance (発声) の言語を取得または設定します。
- {{domxref("SpeechSynthesisUtterance.pitch")}}
  - : utterance が発話される際のピッチ (音の高低) を取得または設定します。
- {{domxref("SpeechSynthesisUtterance.rate")}}
  - : utterance が発話される際の速度を取得または設定します。
- {{domxref("SpeechSynthesisUtterance.text")}}
  - : utterance が発話される際の合成されるテキストを取得または設定します。
- {{domxref("SpeechSynthesisUtterance.voice")}}
  - : utterance の発話に使用される音声を取得または設定します。
- {{domxref("SpeechSynthesisUtterance.volume")}}
  - : utterance が発話される際の音量を取得または設定します。

### イベントハンドラー

- {{domxref("SpeechSynthesisUtterance.onboundary")}}
  - : 発話された utterance が単語または文の境界に達した時に発火します。
- {{domxref("SpeechSynthesisUtterance.onend")}}
  - : utterance の発話が完了した時に発火します。
- {{domxref("SpeechSynthesisUtterance.onerror")}}
  - : utterance の正常な発話を妨げるエラーが発生した時に発火します。
- {{domxref("SpeechSynthesisUtterance.onmark")}}
  - : 発話された utterance が SSML (音声合成マークアップ言語) の "mark" タグに達した時に発火します。
- {{domxref("SpeechSynthesisUtterance.onpause")}}
  - : utterance の発話が途中で一時停止された時に発火します。
- {{domxref("SpeechSynthesisUtterance.onresume")}}
  - : 一時停止された utterance の発話が再開された時に発火します。
- {{domxref("SpeechSynthesisUtterance.onstart")}}
  - : utterance の発話が開始された時に発火します。

## 例

私たちの基本的な [音声合成のデモ](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) では、最初に `window.speechSynthesis` を使用して SpeechSynthesis コントローラーへの参照を取得します。必要な変数の定義後、 {{domxref("SpeechSynthesis.getVoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。

`inputForm.onsubmit` ハンドラー内部では、[preventDefault()](/ja/docs/Web/API/Event/preventDefault) でフォーム送信を停止し、テキスト {{htmlelement("input")}} に入力されたテキストを含む新しい {{domxref("SpeechSynthesisUtterance")}} インスタンスを作成します。その発声にユーザーが {{htmlelement("select")}} 要素で選択した音声を設定し、{{domxref("SpeechSynthesis.speak()")}} メソッドを通して発声の発話を開始します。

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector("form");
var inputTxt = document.querySelector("input");
var voiceSelect = document.querySelector("select");

var voices = synth.getVoices();

for (i = 0; i < voices.length; i++) {
  var option = document.createElement("option");
  option.textContent = voices[i].name + " (" + voices[i].lang + ")";
  option.setAttribute("data-lang", voices[i].lang);
  option.setAttribute("data-name", voices[i].name);
  voiceSelect.appendChild(option);
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

{{Compat("api.SpeechSynthesisUtterance")}}

## 関連項目

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)
