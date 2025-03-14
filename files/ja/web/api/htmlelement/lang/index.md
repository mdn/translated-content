---
title: "HTMLElement: lang プロパティ"
short-title: lang
slug: Web/API/HTMLElement/lang
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.lang`** プロパティは、要素の属性値とテキストコンテンツの基本言語を取得または設定します。

このプロパティによって返される言語コードは、 {{RFC(5646, "Tags for Identifying Languages (BCP 47 とも呼ばれる)")}} で定義されています。 一般的な例には、英語の "en"、日本語の "ja"、スペイン語の "es" などがあります。 この属性の既定値は `unknown` です。 この属性は、ここで説明する個々の要素レベルで有効ですが、ほとんどの場合、文書のルート要素に対して指定されます。

これも `lang` 属性でのみ機能し、`xml:lang` では機能しません。

## 値

文字列です。

## 例

```js
// このスニペットは基本言語を比較し、
// 言語に基づいて別の URL にリダイレクトするものです
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
