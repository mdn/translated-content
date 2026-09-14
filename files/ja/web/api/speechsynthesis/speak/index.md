---
title: "SpeechSynthesis: speak() メソッド"
short-title: speak()
slug: Web/API/SpeechSynthesis/speak
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

**`speak()`** は {{domxref("SpeechSynthesis")}} インターフェイスのメソッドで、発話 ({{domxref("SpeechSynthesisUtterance", "utterance")}}) を発話キューに追加します。この発話は、その前にキューに入れられている他のすべての発話が読み上げられた後に読み上げられます。

## 構文

```js-nolint
speak(utterance)
```

### 引数

- `utterance`
  - : {{domxref("SpeechSynthesisUtterance")}} オブジェクトです。

### 返値

なし ({{jsxref("undefined")}})。

## 例

このスニペットは、[音声合成デモ](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js)（[ライブで見る](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/)）から抜粋したものです。読み上げたいテキストが含まれたフォームが送信されると、（他の処理と併せて）このテキストを含む新しい発話を生成し、それを `speak()` の引数として渡すことで読み上げます。

```js
const synth = window.speechSynthesis;

// …

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
