---
title: "HTMLElement: lang プロパティ"
short-title: lang
slug: Web/API/HTMLElement/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{ APIRef("HTML DOM") }}

**`lang`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素の属性値とテキストコンテンツの基本言語を {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}の形式で示します。
このプロパティは要素の [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性を反映します。`xml:lang` 属性はこのプロパティに影響しません。

`lang` 属性が指定されていない場合でも、要素自体は親要素から言語を継承することがあります。
ただし、この継承された言語は、このプロパティの値には反映されません。

## 値

文字列です。一般的な例として、英語は "en"、日本語は "ja"、スペイン語は "es" などがあります。
属性が指定されていない場合、値は空文字列です。

## 例

```js
// 基本言語を比較
// 言語に応じて別の URL にリダイレクト
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
