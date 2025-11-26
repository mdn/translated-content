---
title: "SpeechRecognition: phrases プロパティ"
short-title: phrases
slug: Web/API/SpeechRecognition/phrases
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

**`phrases`** は {{domxref("SpeechRecognition")}} インターフェイスのプロパティで、[文脈バイアス](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition)に使用する {{domxref("SpeechRecognitionPhrase")}} オブジェクトの配列を設定します。

## 値

{{domxref("SpeechRecognitionPhrase")}} オブジェクトの `ObservableArray` です。

## 例

### 基本的な使用

以下のコードは、ブースト対象のフレーズとその {{domxref("SpeechRecognitionPhrase.boost", "boost")}} 値を含む配列を最初に作成します。このデータを `SpeechRecognitionPhrase` オブジェクトの `ObservableArray` に変換します。元の配列を {{domxref("SpeechRecognitionPhrase.SpeechRecognitionPhrase", "SpeechRecognitionPhrase()")}} コンストラクター呼び出しに対応づけることで実現します。

```js
const phraseData = [
  { phrase: "azure", boost: 5.0 },
  { phrase: "khaki", boost: 3.0 },
  { phrase: "tan", boost: 2.0 },
];

const phraseObjects = phraseData.map(
  (p) => new SpeechRecognitionPhrase(p.phrase, p.boost),
);
```

{{domxref("SpeechRecognition")}} インスタンスを作成した後、`phraseObjects` 配列を `SpeechRecognition.phrases` プロパティの値として設定することで、文脈依存バイアスフレーズをそのインスタンスに組み込みます。

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.processLocally = true;
recognition.phrases = phraseObjects;

// …
```

このコードは、[端末内音声カラーチェンジャー](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer)から抜粋したものです（[デモをライブで実行](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)）。詳細な説明については[ウェブ音声 API の使用方法](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
- {{domxref("SpeechRecognitionPhrase")}}
