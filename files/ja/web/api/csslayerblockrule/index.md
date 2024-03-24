---
title: CSSLayerBlockRule
slug: Web/API/CSSLayerBlockRule
l10n:
  sourceCommit: d541534313520301ec9053591ac1a72a8dc41f35
---

{{APIRef("CSSOM")}}

**`CSSLayerBlockRule`** は {{cssxref("@layer")}} ブロックルールを表します。 これは、他のルールを含むことができる、すなわちグループ化アットルールであり、名前で識別される所定のカスケードレイヤーに関連付けられます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{DOMxRef("CSSGroupingRule")}} から継承したプロパティもあります。_

- {{DOMxRef("CSSLayerBlockRule.name")}} {{ReadOnlyInline}}
  - 関連するカスケードレイヤーの名前を含む文字列です。

## インスタンスメソッド

_親インターフェイスである {{DOMxRef("CSSGroupingRule")}} から継承したメソッドもあります。_

## 例

### HTML

```html
<p>I am displayed in <code>color: rebeccapurple</code>.</p>
```

### CSS

```css
@layer special {
  p {
    color: rebeccapurple;
  }
}
```

### JavaScript

```js
const item = document.getElementsByTagName("p")[0];
const rules = document.styleSheets[1].cssRules;
// スタイルシート #1 はこの埋め込み例に関連するスタイルシートであり、
// スタイルシート #0 は MDN ページ全体に関連するスタイルシート。

const layer = rules[0]; // CSSLayerBlockRule

item.textContent = `この CSSLayerBlockRule は "${layer.name}" レイヤーのものです。`;
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@layer")}}
- {{DOMxRef("CSSLayerStatementRule")}}
- [CSS カスケードレイヤーの学習](/ja/docs/Learn/CSS/Building_blocks/Cascade_layers)
