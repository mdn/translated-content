---
title: '::marker'
slug: Web/CSS/::marker
tags:
  - CSS
  - CSS リスト
  - 実験的
  - レイアウト
  - 擬似要素
  - リファレンス
  - セレクター
browser-compat: css.selectors.marker
translation_of: Web/CSS/::marker
---
{{CSSRef}}

**`::marker`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、リスト項目の箇条書き記号ボックス (ふつうは黒丸や番号) を選択します。これは `[display: list-item](/ja/docs/Web/CSS/display)` が設定された要素や擬似要素、例えば {{HTMLElement("li")}} 要素や {{HTMLElement("summary")}} 要素で利用できます。

```css
::marker {
  color: blue;
  font-size: 1.2em;
}
```

## 利用できるプロパティ

`::marker` 擬似要素では、一部の CSS プロパティのみが利用できます。

- すべての[フォントプロパティ](/ja/docs/Web/CSS/CSS_Fonts)
- {{CSSxRef("white-space")}} プロパティ
- {{CSSxRef("color")}}
- {{CSSxRef("text-combine-upright")}}, {{CSSxRef("unicode-bidi")}}, {{CSSxRef("direction")}} の各プロパティ
- {{CSSxRef("content")}} プロパティ
- すべての[アニメーション](/ja/docs/Web/CSS/CSS_Animations#css_プロパティ)および[トランジション](/ja/docs/Web/CSS/CSS_Transitions#プロパティ)プロパティ

> **Note:** この仕様書は、将来追加の CSS プロパティにも対応する可能性があることを示しています。

## 構文

{{CSSSyntax}}

## 例

### HTML

```html
<ul>
  <li>Peaches</li>
  <li>Apples</li>
  <li>Plums</li>
</ul>
```

### CSS

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 既定で箇条書き記号ボックスがある HTML 要素: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("summary")}}
