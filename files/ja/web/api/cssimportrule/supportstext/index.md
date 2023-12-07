---
title: "CSSImportRule: supportsText プロパティ"
short-title: supportsText
slug: Web/API/CSSImportRule/supportsText
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

**`supportsText`** は {{domxref("CSSImportRule")}} インターフェイスの読み取り専用プロパティで、 {{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/At-rule)で指定された supports 条件を返します。

## 値

文字列、または `null` です。

## 例

この文書の単一のスタイルシートには 3 つの {{cssxref("@import")}} ルールが含まれています。最初の宣言は、 `display: flex` に対応している場合にスタイルシートをインポートします。 2 つ目の宣言は、 `:has` セレクターに対応している場合にスタイルシートをインポートします。 3 つ目の宣言は、対応条件なしにスタイルシートをインポートします。

The `supportsText` property returns the import conditions associated with the at-rule.

```css
@import url("style1.css") supports(display: flex);
@import url("style2.css") supports(selector(p:has(a)));
@import url("style3.css");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].supportsText); // `"display: flex"` を返す
console.log(myRules[1].supportsText); // `"selector(p:has(a))"` を返す
console.log(myRules[2].supportsText); // `null` を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [機能クエリーの使用](/ja/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- {{cssxref("@import")}} and {{cssxref("@supports")}}
