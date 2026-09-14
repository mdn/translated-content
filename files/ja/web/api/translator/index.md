---
title: Translator
slug: Web/API/Translator
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

**`Translator`** は{{domxref("Translator and Language Detector APIs", "翻訳と言語検出 API", "", "nocode")}} のインターフェイスで、AI モデルの利用可能性を調べる、新しい `Translator` インスタンスを生成する、それを用いた翻訳を作成するなど、翻訳に関連するすべての機能が含まれています。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("Translator.inputQuota", "inputQuota")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ブラウザーが翻訳を生成するために利用できる入力クォータ。
- {{domxref("Translator.sourceLanguage", "sourceLanguage")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 翻訳される入力テキストの想定言語。
- {{domxref("Translator.targetLanguage", "targetLanguage")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 入力テキストの翻訳先となる言語。

## 静的メソッド

- {{domxref("Translator.availability_static", "availability()")}} {{Experimental_Inline}}
  - : 指定された `Translator` 構成に対する AI モデルの利用可否を示す列挙値を返します。
- {{domxref("Translator.create_static", "create()")}} {{Experimental_Inline}}
  - : 翻訳を生成するための新しい `Translator` インスタンスを生成します。

## インスタンスメソッド

- {{domxref("Translator.destroy", "destroy()")}} {{Experimental_Inline}}
  - : 呼び出された `Translator` インスタンスに割り当てられたリソースを解放し、そのインスタンスでのそれ以降の処理を停止します。
- {{domxref("Translator.measureInputUsage", "measureInputUsage()")}} {{Experimental_Inline}}
  - : 指定されたテキスト入力の翻訳処理で、どの程度の入力クォータが使用されるかを報告します。
- {{domxref("Translator.translate", "translate()")}} {{Experimental_Inline}}
  - : 入力文字列の翻訳を含む文字列を返します。
- {{domxref("Translator.translateStreaming", "translateStreaming()")}} {{Experimental_Inline}}
  - : 入力文字列の翻訳結果を {{domxref("ReadableStream")}} として生成します。

## 例

完全な例については、[翻訳と言語検出 API の使用](/ja/docs/Web/API/Translator_and_Language_Detector_APIs/Using)を参照してください。

### `Translator` インスタンスの生成

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

### 翻訳の生成

```js
const translation = await translator.translate(myTextString);
console.log(translation);
```

### 翻訳ストリームの生成

```js
const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  translation += chunk;
}

console.log("Stream complete");
console.log(translation);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [翻訳と言語検出 API の使用](/ja/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
