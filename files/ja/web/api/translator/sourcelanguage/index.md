---
title: "Translator: sourceLanguage プロパティ"
short-title: sourceLanguage
slug: Web/API/Translator/sourceLanguage
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

**`sourceLanguage`** は {{domxref("Translator")}} インターフェイスの読み取り専用プロパティで、翻訳対象の入力テキストの想定される言語を返します。

`Translator` インスタンスの `sourceLanguage` は {{domxref("Translator.create_static", "create()")}} でインスタンスが生成されるときに設定されます。

## 値

翻訳元言語を示す文字列です。これは有効な {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}です。

## 例

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

// "en" と出力
console.log(translator.sourceLanguage);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [翻訳と言語検出 API の使用](/ja/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
