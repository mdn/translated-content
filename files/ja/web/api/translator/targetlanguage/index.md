---
title: "Translator: targetLanguage プロパティ"
short-title: targetLanguage
slug: Web/API/Translator/targetLanguage
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

**`targetLanguage`** は {{domxref("Translator")}} インターフェイスの読み取り専用プロパティで、入力テキストの翻訳先となる言語を返します。

`Translator` インスタンスの `targetLanguage` は {{domxref("Translator.create_static", "create()")}} でインスタンスが生成されるときに設定されます。

## 値

翻訳先言語を示す文字列です。これは有効な {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}です。

## 例

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

// "ja" と出力
console.log(translator.targetLanguage);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [翻訳と言語検出 API の使用](/ja/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
