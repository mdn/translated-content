---
title: CSS `border-block-color` プロパティ
short-title: border-block-color
slug: Web/CSS/Reference/Properties/border-block-color
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

**`border-block-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロック方向の両端の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは {{cssxref("border-top-color")}} および {{cssxref("border-bottom-color")}} の組み合わせ、または {{cssxref("border-right-color")}} および {{cssxref("border-left-color")}} の組み合わせのどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

他の方向の境界色については、 {{cssxref("border-inline-color")}} によって、 {{cssxref("border-inline-start-color")}} と {{cssxref("border-inline-end-color")}} を設定することができます。

{{InteractiveExample("CSS デモ: border-block-color")}}

```css interactive-example-choice
border-block-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-color: rgb(170 50 220 / 0.6);
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    これは周囲に境界線があるボックスです。
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

### 構文

```css
border-block-color: yellow;
border-block-color: #f5f6f7;

/* グローバル値 */
border-block-color: inherit;
border-block-color: initial;
border-block-color: revert;
border-block-color: revert-layer;
border-block-color: unset;
```

### 値

このプロパティは、単一の `<color>` 値として指定します。

- {{CSSXref("&lt;color&gt;")}}
  - : 境界線の色です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストの境界線

#### HTML

```html
<div>
  <p class="exampleText">テキストの例</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-block-color: red;
}
```

#### 結果

{{EmbedLiveSample("縦書きテキストの境界線", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- このプロパティは、物理的な境界プロパティである {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}} のいずれかに対応します。
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
