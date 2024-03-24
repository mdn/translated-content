---
title: "SpeechSynthesisErrorEvent: error プロパティ"
short-title: error
slug: Web/API/SpeechSynthesisErrorEvent/error
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`error`** は {{domxref("SpeechSynthesisErrorEvent")}} インターフェイスのプロパティで、音声合成の失敗を示すエラーコードを返します。

## 値

エラーの理由を持つ文字列。使用可能な値は以下のとおりです。

- `canceled`
  - : {{domxref("SpeechSynthesis.cancel")}} メソッドが、 {{domxref("SpeechSynthesisUtterance")}} が発話開始前にキューから除去されたために呼び出されました。
- `interrupted`
  - : {{domxref("SpeechSynthesis.cancel")}} メソッドが、 {{domxref("SpeechSynthesisUtterance")}} が発話開始後に中断されたために呼び出されました。
- `audio-busy`
  - : ユーザーエージェントがオーディオ出力機器にアクセスできなかったため、この時刻に処理を完全に完了できませんでした（例えば、ユーザーは別のアプリケーションを閉じてこの問題を解決する必要ががある場合など）。
- `audio-hardware`
  - : ユーザーエージェントがオーディオ出力機器を特定できなかったため、操作を完了できませんでした（例えば、ユーザーはスピーカーを接続したり、システム設定を行ったりする必要があります）。
- `network`
  - : 必要なネットワーク通信に失敗したため、今回の処理を完全に実行できませんでした。
- `synthesis-unavailable`
  - : この例では、利用できる合成エンジンがないため、処理を完了できませんでした（例えば、ユーザーは合成エンジンをインストールまたは設定する必要があります）。
- `synthesis-failed`
  - : 合成エンジンがエラーを発生したため、処理が実行できませんでした。
- `language-unavailable`
  - : {{domxref("SpeechSynthesisUtterance.lang")}} で設定するには、適切な音声が利用できませんでした。 [`window.speechSynthesis.getVoices()`](/ja/docs/Web/API/SpeechSynthesis/getVoices) メソッドを使用して、ユーザーのブラウザーで対応している音声と言語を判別することができます。
- `voice-unavailable`
  - : {{domxref("SpeechSynthesisUtterance.voice")}} に設定した音声は利用できませんでした。
- `text-too-long`
  - : {{domxref("SpeechSynthesisUtterance.text")}} 属性のコンテンツが長すぎて合成できませんでした。
- `invalid-argument`
  - : {{domxref("SpeechSynthesisUtterance.rate")}}、{{domxref("SpeechSynthesisUtterance.pitch")}}、{{domxref("SpeechSynthesisUtterance.volume")}} のいずれかのプロパティの内容が無効でした。
- `not-allowed`
  - : 処理を開始することが許可されませんでした。

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
    console.error(
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
