---
title: CSSLayerBlockRule
slug: Web/API/CSSLayerBlockRule
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("CSSOM")}}

**`CSSLayerBlockRule`** は {{cssxref("@layer")}} ブロックルールを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSGroupingRule")}} および {{domxref("CSSRule")}} から継承したプロパティもあります。_

- {{DOMxRef("CSSLayerBlockRule.name")}} {{ReadOnlyInline}}
  - 関連するカスケードレイヤーの名前を含む文字列です。

## インスタンスメソッド

_祖先である {{domxref("CSSGroupingRule")}} および {{domxref("CSSRule")}} から継承したメソッドもあります。_

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
- [学習: カスケードレイヤー](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
