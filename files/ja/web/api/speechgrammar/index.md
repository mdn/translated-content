---
title: SpeechGrammar
slug: Web/API/SpeechGrammar
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

[Web Speech API](/ja/docs/Web/API/Web_Speech_API) の **`SpeechGrammar`** インターフェイスは、認識サービスに認識させたい単語のセットまたは単語パターンを表します。

文法は、[JSpeech Grammar Format](http://www.w3.org/TR/jsgf/) (**JSGF**) を使用して定義されています。他の形式も将来サポートされる可能性があります。

## コンストラクター

- {{domxref("SpeechGrammar.SpeechGrammar()")}}
  - : `SpeechGrammar` オブジェクトを生成します。

## プロパティ

- {{domxref("SpeechGrammar.src")}}
  - : `SpeechGrammar` オブジェクトのインスタンス内からの文法を含む文字列を設定して返します。
- {{domxref("SpeechGrammar.weight")}} {{optional_inline}}
  - : `SpeechGrammar` オブジェクトの重みづけを設定して返します。

## 例

```js
var grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // grammar 変数の内容と同じ値が返される
console.log(speechRecognitionList[0].weight); // 4 行目で設定された weight と同じ値の 1 が返される
```

## 仕様

{{Specifications}}

## ブラウザーの実装状況

{{Compat("api.SpeechGrammar")}}

## 関連項目

- [Web Speech API](/ja/docs/Web/API/Web_Speech_API)
