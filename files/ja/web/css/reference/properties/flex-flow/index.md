---
title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
original_slug: Web/CSS/flex-flow
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

**`flex-flow`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、フレックスコンテナーの向きと折り返しの動作を同時に指定します。

{{InteractiveExample("CSS デモ: flex-flow")}}

```css interactive-example-choice
flex-flow: row wrap;
```

```css interactive-example-choice
flex-flow: row-reverse nowrap;
```

```css interactive-example-choice
flex-flow: column wrap-reverse;
```

```css interactive-example-choice
flex-flow: column wrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`flex-direction`](/ja/docs/Web/CSS/Reference/Properties/flex-direction)
- [`flex-wrap`](/ja/docs/Web/CSS/Reference/Properties/flex-wrap)

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

- CSS フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)_
- CSS フレックスボックスガイド: _[フレックスアイテムの順序](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)_
