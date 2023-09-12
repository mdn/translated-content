---
title: "SpeechSynthesisEvent: charLength プロパティ"
short-title: charLength
slug: Web/API/SpeechSynthesisEvent/charLength
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

**`charLength`** は {{DOMxRef("SpeechSynthesisEvent")}} インターフェイスの読み取り専用プロパティで、 {{DOMxRef("SpeechSynthesisEvent.charIndex", "charIndex")}} の位置にある文字の後に発話される残りの文字数を返します。

音声エンジンが判断できない場合は 0 を返します。

## 値

整数です。

## 例

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  const charLeft = event.charLength;
  if (charLeft) {
    console.log(
      `Speech paused. There are still ${charLeft} characters to be spoken.`,
    );
  } else {
    console.log(
      "Speech paused. The underlying speech engine can't tell how many characters are left.",
    );
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
