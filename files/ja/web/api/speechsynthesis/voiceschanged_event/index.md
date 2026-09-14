---
title: "SpeechSynthesis: voiceschanged イベント"
short-title: voiceschanged
slug: Web/API/SpeechSynthesis/voiceschanged_event
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

**`voiceschanged`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) のイベントで、{{domxref("SpeechSynthesis.getVoices()")}} メソッドから返される {{domxref("SpeechSynthesisVoice")}} オブジェクトのリストが変更された際に発生します （`voiceschanged` イベントが発生したとき）。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("voiceschanged", (event) => { })

onvoiceschanged = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} で、追加のプロパティはありません。

## 例

これにより、イベントが発生した際にユーザーが選択できる音声のリストを再設定することができます。[`addEventListener`](/ja/docs/Web/API/EventTarget/addEventListener) メソッド内で `voiceschanged` イベントを使用できます。

```js
const synth = window.speechSynthesis;

synth.addEventListener("voiceschanged", () => {
  const voices = synth.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
});
```

または、`onvoiceschanged` イベントハンドラープロパティを使用して、

```js
const synth = window.speechSynthesis;
synth.onvoiceschanged = () => {
  const voices = synth.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
