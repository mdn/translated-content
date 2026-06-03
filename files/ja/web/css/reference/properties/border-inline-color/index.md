---
title: border-inline-color
slug: Web/CSS/Reference/Properties/border-inline-color
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`border-inline-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なインライン方向の両端の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは {{cssxref("border-top-color")}} と {{cssxref("border-bottom-color")}}、または {{cssxref("border-right-color")}} と {{cssxref("border-left-color")}} の組み合わせのどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

{{InteractiveExample("CSS デモ: border-inline-color")}}

```css interactive-example-choice
border-inline-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-color: rgb(170 50 220 / 0.6);
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

他の方向の境界色については、 {{cssxref("border-block-color")}} によって {{cssxref("border-block-start-color")}} と {{cssxref("border-block-end-color")}} を設定することができます。

## 構文

```css
border-inline-color: yellow;
border-inline-color: #f5f6f7;

/* グローバル値 */
border-inline-color: inherit;
border-inline-color: initial;
border-inline-color: revert;
border-inline-color: revert-layer;
border-inline-color: unset;
```

### 値

- {{CSSXref("&lt;color&gt;")}}
  - : 境界線の色です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストが垂直方向の場合の境界色

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
  border-inline-color: red;
}
```

#### 結果

{{EmbedLiveSample("テキストが垂直方向の場合の境界色", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- このプロパティは {{cssxref("border-top-color")}}、{{cssxref("border-right-color")}}、{{cssxref("border-bottom-color")}}、{{cssxref("border-left-color")}} のうちの 1 つに対応します
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
