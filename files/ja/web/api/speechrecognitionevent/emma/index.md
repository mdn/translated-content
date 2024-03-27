---
title: SpeechRecognitionEvent.emma
slug: Web/API/SpeechRecognitionEvent/emma
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("Web Speech API")}}{{deprecated_header}}{{Non-standard_header}}

**`emma`** は {{domxref("SpeechRecognitionEvent")}} インターフェイスの読み取り専用プロパティで、結果の Extensible MultiModal Annotation markup language (EMMA) — XML — 表現を返します。

> **メモ:** EMMA は [EMMA: Extensible MultiModal Annotation markup language](https://www.w3.org/TR/emma/) 仕様書で定められています。この仕様書に複数の EMMA の例があります。

## 値

有効な XML 文書。正確な内容はユーザーエージェントや認識エンジンによって異なるが、対応している実装はすべて EMMA 名前空間を含む有効な XML 文書を公開します。音声認識システムが EMMA データを提供しない場合、ユーザーエージェントは `null` を返します。

## 例

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(event.emma);
};
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
