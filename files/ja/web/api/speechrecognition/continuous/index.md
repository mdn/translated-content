---
title: "SpeechRecognition: continuous プロパティ"
short-title: continuous
slug: Web/API/SpeechRecognition/continuous
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

**`continuous`** は {{domxref("SpeechRecognition")}} インターフェイスのプロパティで、認識が行われるたびに、継続的に結果を返すのか、あるいは単一の結果のみ返すのかを制御します。

既定では単一の結果 (`false`) です。

### 値

論理値で、現在の `SpeechRecognition` の継続の状態を表します。`true` の場合は継続的で、`false` の場合は継続的ではありません（単一の結果を都度返します）。

## 例

下記のソースコードは [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) を参考しています。

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
