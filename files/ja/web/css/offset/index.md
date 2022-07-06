---
title: offset
slug: Web/CSS/offset
tags:
  - CSS
  - CSS モーションパス
  - CSS プロパティ
  - 実験的
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.offset
translation_of: Web/CSS/offset
---
{{CSSRef}}

**`offset`** は CSS の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、要素を定義された経路に沿って動かすのに必要なすべてのプロパティを設定します。

> **Note:** 仕様書の早期の版では、このプロパティを `motion` と呼んでいました。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

## 構文

```css
/* オフセット位置 */
offset: auto;
offset: 10px 30px;
offset: none;

/* オフセット経路 */
offset: ray(45deg closest-side);
offset: path('M 100 100 L 300 100 L 200 300 z');
offset: url(arc.svg);

/* オフセット経路に距離と回転が加わったもの */
offset: url(circle.svg) 100px;
offset: url(circle.svg) 40%;
offset: url(circle.svg) 30deg;
offset: url(circle.svg) 50px 20deg;

/* オフセットアンカーを含む */
offset: ray(45deg closest-side) / 40px 20px;
offset: url(arc.svg) 2cm / 0.5cm 3cm;
offset: url(arc.svg) 30deg / 50px 100px;

/* グローバル値 */
offset: inherit;
offset: initial;
offset: revert;
offset: unset;
```

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 経路に沿って要素を動かす

#### HTML

```html
<div id="offsetElement"></div>
```

#### CSS

```css
@keyframes move {
  from {
    offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}

#offsetElement {
  width: 50px;
  height: 50px;
  background-color: blue;
  offset: path("M 100 100 L 300 100 L 200 300 z") auto;
  animation: move 3s linear infinite;
}
```

#### 結果

{{EmbedLiveSample("Animating_an_element_along_a_path", 350, 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
