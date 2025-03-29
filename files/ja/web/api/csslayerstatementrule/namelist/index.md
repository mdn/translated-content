---
title: "CSSLayerStatementRule: nameList プロパティ"
short-title: nameList
slug: Web/API/CSSLayerStatementRule/nameList
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("CSSOM")}}

**`nameList`** は {{DOMxRef("CSSLayerStatementRule")}} インターフェイスの読み取り専用プロパティで、関連づけられたカスケードレイヤーの名前のリストを返します。名前は変更できません。

## 値

文字列の配列 ({{jsxref("Array")}}) で、それぞれが {{cssxref("@layer")}} 文ルールで表されるカスケードレイヤーを表します。

## 例

### HTML

```html
<div></div>
```

### CSS

```css
@layer layerName, layerName2;

@layer layerName3 {
  div {
    font-family: serif;
  }
}
```

### JavaScript

```js
const item = document.getElementsByTagName("div")[0];
const rules = document.styleSheets[1].cssRules;
// スタイルシート #1 はこの埋め込み例に関連するスタイルシートであり、
// スタイルシート #0 は MDN ページ全体に関連するスタイルシート。

const layerStatementRule = rules[0]; // CSSLayerStatementRule
const layerBlockRule = rules[1]; // CSSLayerBlockRule には nameList プロパティがない

item.textContent = `@layer は ${layer.nameList.join(
  ", ",
)} レイヤーを宣言しています。`;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMXRef("CSSLayerBlockRule.name")}}
- {{CSSXref("@layer")}}
- [名前付きレイヤーのための @layer 文のアットルール](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#名前付きレイヤーのための_layer_文のアットルール)
