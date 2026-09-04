---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

**`SpeechSynthesis`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のインターフェイスで、音声発声サービスのための制御インターフェイスです。これは、端末で利用可能な合成音声についての情報を取得するために使用されます。読み上げの開始および一時停止、他のコマンドで制御します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_`SpeechSynthesis` には、その親インターフェイスである {{domxref("EventTarget")}} から継承したプロパティもあります。_

- {{domxref("SpeechSynthesis.paused")}} {{ReadOnlyInline}}
  - : 論理値で、`SpeechSynthesis` オブジェクトが一時停止状態の場合に `true` を返します。
- {{domxref("SpeechSynthesis.pending")}} {{ReadOnlyInline}}
  - : 論理値で、発声 (utterance) キューにまだ発声されていないものがある場合に `true` を返します。
- {{domxref("SpeechSynthesis.speaking")}} {{ReadOnlyInline}}
  - : 論理値で、`SpeechSynthesis` が一時停止状態であっても、発声が現在発話処理中の場合に `true` を返します。

## メソッド

_`SpeechSynthesis` には、その親インターフェイスである {{domxref("EventTarget")}} から継承したメソッドもあります。_

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

### イベントハンドラー

このイベントを待ち受けするには、[`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用するか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入するかします。

- [`voiceschanged`](/ja/docs/Web/API/SpeechSynthesis/voiceschanged_event)
  - : {{domxref("SpeechSynthesis.getVoices()")}} メソッドにより返される {{domxref("SpeechSynthesisVoice")}} オブジェクトのリストが変更された時に発生します。
    `onvoiceschanged` プロパティからも利用できます。

## 例

まず、例を示します。

```js
let utterance = new SpeechSynthesisUtterance("Hello world!");
speechSynthesis.speak(utterance);
```

次に、もう少し本格的な例を見ていきましょう。この[音声合成のデモ](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis)では、最初に `window.speechSynthesis` を使用して SpeechSynthesis コントローラーへの参照を取得します。必要な変数の定義後、 {{domxref("SpeechSynthesis.getVoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。

`inputForm.onsubmit` ハンドラー内部では、[preventDefault()](/ja/docs/Web/API/Event/preventDefault) でフォーム送信を停止し、テキスト {{htmlelement("input")}} に入力されたテキストを含む新しい {{domxref("SpeechSynthesisUtterance")}} インスタンスを作成します。その発声にユーザーが {{htmlelement("select")}} 要素で選択した音声を設定し、{{domxref("SpeechSynthesis.speak()")}} メソッドを通して発声の発話を開始します。

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

let voices = [];

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
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
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
