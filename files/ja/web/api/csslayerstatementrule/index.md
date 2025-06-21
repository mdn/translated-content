---
title: CSSLayerStatementRule
slug: Web/API/CSSLayerStatementRule
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSSOM")}}

**`CSSLayerStatementRule`** は {{cssxref("@layer")}} 文のルールを表します。 {{domxref("CSSLayerBlockRule")}}とは異なり、他のコンテナーのルールを格納せず、単に 1 つまたは複数のレイヤーの名前を提供して定義します。

このルールで、 CSS ファイルの先頭に見かけ上あるレイヤーの順序を明示的に宣言することができます。レイヤーの順序は、各レイヤー名の最初の出現順序によって定義されます。文で宣言することで、読者はレイヤーの順序を理解することができます。また、 `CSSLayerBlockRule` 構文を使用する場合には不可能な、インラインレイヤーとインポートレイヤーの挿入も可能になります。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{DOMxRef("CSSRule")}} から継承したプロパティもあります。_

- {{DOMxRef("CSSLayerStatementRule.nameList")}} {{ReadOnlyInline}}
  - ルールによる各カスケードレイヤーの名前を表す文字列の配列です。

## 例

### HTML

```html
<p></p>
```

### CSS

```css
@layer layerName, layerName2;
```

### JavaScript

```js
const item = document.getElementsByTagName("p")[0];
const rules = document.styleSheets[1].cssRules;
// スタイルシート #1 はこの埋め込み例に関連するスタイルシートであり、
// スタイルシート #0 は MDN ページ全体に関連するスタイルシート。

const layer = rules[0]; // CSSLayerStatementRule

item.textContent = `この CSS の @layer 文は、 ${layer.nameList.join(
  ", ",
)} レイヤーを宣言しています。`;
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@layer")}}
- [名前付きレイヤーのための `@layer` 文のアットルール](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#名前付きレイヤーのための_layer_文のアットルール)
- {{DOMxRef("CSSLayerBlockRule")}}
