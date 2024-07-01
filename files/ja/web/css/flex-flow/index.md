---
title: flex-flow
slug: Web/CSS/flex-flow
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

**`flex-flow`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、フレックスコンテナーの向きと折り返しの動作を同時に指定します。

{{EmbedInteractiveExample("pages/css/flex-flow.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`flex-direction`](/ja/docs/Web/CSS/flex-direction)
- [`flex-wrap`](/ja/docs/Web/CSS/flex-wrap)

## 構文

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> および <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* グローバル値 */
flex-flow: inherit;
flex-flow: initial;
flex-flow: revert;
flex-flow: revert-layer;
flex-flow: unset;
```

### 値

値に関して詳しくは、 {{cssxref("flex-direction")}} および {{cssxref("flex-wrap")}} をご覧ください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### column-reverse と wrap の設定

```css
element {
  /* main-axis は block 方向で、 main-start と main-end を逆にします。フレックスアイテムは複数行にレイアウトされます */
  flex-flow: column-reverse wrap;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- CSS フレックスボックスガイド: _[フレックスアイテムの順序](/ja/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)_
