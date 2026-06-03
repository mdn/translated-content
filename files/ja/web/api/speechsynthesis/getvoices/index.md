---
title: "SpeechSynthesis: getVoices() メソッド"
short-title: getVoices()
slug: Web/API/SpeechSynthesis/getVoices
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

**`getVoices()`** は {{domxref("SpeechSynthesis")}} インターフェイスのメソッドで、現在の端末で利用できるすべての音声を表す {{domxref("SpeechSynthesisVoice")}} オブジェクトのリストを返します。

## 構文

```js-nolint
getVoices()
```

### 引数

なし。

### 返値

{{domxref("SpeechSynthesisVoice")}} オブジェクトのリスト（配列）です。

## 例

### JavaScript

```js
function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    document.getElementById("voiceSelect").appendChild(option);
  }
}

populateVoiceList();
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

### HTML

```html
<select id="voiceSelect"></select>
```

{{EmbedLiveSample("例", 400, 25)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
