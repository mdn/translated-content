---
title: "SpeechRecognition: grammars プロパティ"
short-title: grammars
slug: Web/API/SpeechRecognition/grammars
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

**`grammars`** は {{domxref("SpeechRecognition")}} インターフェイスのプロバティで、現在の `SpeechRecognition` が理解できる文法を表す {{domxref("SpeechGrammar")}} オブジェクトの集合を返します。

> [!NOTE]
> ウェブ音声 API から文法の概念が削除されました。関連機能は仕様書に残っており、下位互換性のため対応ブラウザーでは認識されますが、音声認識サービスには影響しません。

## 値

{{domxref("SpeechGrammarList")}} で、アプリで使用する文法を表す{{domxref("SpeechGrammar")}} オブジェクトが入っています。

## 例

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
