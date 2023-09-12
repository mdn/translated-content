---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
l10n:
  sourceCommit: 3bf44d4b0197665d6609fef7d32f6d78c21964e9
---

{{APIRef("Web Speech API")}}

**`SpeechSynthesisUtterance`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のインターフェイスで、発話リクエストを表します。
これには、発話サービスが読み上げるコンテンツと、その読み上げ方についての情報（言語、音の高低、音量）が含まれます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance", "SpeechSynthesisUtterance()")}}
  - : 新しい `SpeechSynthesisUtterance` オブジェクトのインスタンスを返します。

## インスタンスプロパティ

_`SpeechSynthesisUtterance` は、その親インターフェイスである {{domxref("EventTarget")}} から継承したプロパティもあります。_

- {{domxref("SpeechSynthesisUtterance.lang")}}
  - : utterance （発声）の言語を取得または設定します。
- {{domxref("SpeechSynthesisUtterance.pitch")}}
  - : utterance が発話される際のピッチ（音の高低）を取得または設定します。
- {{domxref("SpeechSynthesisUtterance.rate")}}
  - : utterance が発話される際の速度を取得または設定します。
- {{domxref("SpeechSynthesisUtterance.text")}}
  - : utterance が発話される際の合成されるテキストを取得または設定します。
- {{domxref("SpeechSynthesisUtterance.voice")}}
  - : utterance の発話に使用される音声を取得または設定します。
- {{domxref("SpeechSynthesisUtterance.volume")}}
  - : utterance が発話される際の音量を取得または設定します。

## イベント

これらのイベントは、 [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用するか、イベントリスナーを `onイベント名` プロパティに代入することで待ち受けしてください。

- [`boundary`](/ja/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - : 音声の発話が単語または文の境界に達すると発行されます。
    `onboundary` プロパティからも利用できます。
- [`end`](/ja/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - : 発話が完了したときに発行されます。
    `onend` プロパティからも利用できます。
- [`error`](/ja/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - : 発話が正常に行われずにエラーが発生したときに発行されます。
    `onerror` プロパティからも利用できます。
- [`mark`](/ja/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - : 音声発話が SSML の名前付き "mark" タグに到達したときに発行されます。
    `onmark` プロパティからも利用できます。
- [`pause`](/ja/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - : 発話の途中で一時停止した場合に発行されます。
    `onpause` プロパティからも利用できます。
- [`resume`](/ja/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - : 一時停止していた発話が再開されたときに発行されます。
    `onresume` プロパティからも利用できます。
- [`start`](/ja/docs/Web/API/SpeechSynthesisUtterance/start_event)
  - : 発話が始まったときに発行されます。
    `onstart` プロパティからも利用できます。

## 例

基本的な [音声合成のデモ](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/) では、最初に `window.speechSynthesis` を使用して SpeechSynthesis コントローラーへの参照を取得します。必要な変数の定義後、 {{domxref("SpeechSynthesis.getVoices()")}} を使用して利用可能な音声のリストを取得し、それらの選択メニューを構成します。ユーザーは、そこから使用したい音声を選べます。

`inputForm.onsubmit` ハンドラー内部では、 {{domxref("Event.preventDefault","preventDefault()")}} でフォーム送信を停止し、 {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "constructor")}} 使用して、新しいテキスト {{htmlelement("input")}} に入力されたテキストを含む新しい {{domxref("SpeechSynthesisUtterance")}} インスタンスを作成します。その発話にユーザーが {{htmlelement("select")}} 要素で選択した {{domxref("SpeechSynthesisUtterance.voice","音声", "", 1)}}を設定し、{{domxref("SpeechSynthesis.speak()")}} メソッドを通して発声の発話を開始します。

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

let voices;

function loadVoices() {
  voices = synth.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.value = i;
    voiceSelect.appendChild(option);
  }
}

// Google Chrome では、音声はページの読み込みでは準備できません
if ("onvoiceschanged" in synth) {
  synth.onvoiceschanged = loadVoices;
} else {
  loadVoices();
}

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  utterThis.voice = voices[voiceSelect.value];
  synth.speak(utterThis);
  inputTxt.blur();
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
