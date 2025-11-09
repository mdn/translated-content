---
title: border-block-width
slug: Web/CSS/Reference/Properties/border-block-width
original_slug: Web/CSS/border-block-width
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`border-block-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の論理的なブロック方向の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応づけられます。これは {{cssxref("border-top-width")}} と {{cssxref("border-bottom-width")}}、または {{cssxref("border-left-width")}} と {{cssxref("border-right-width")}} のどちらかに対応し、どちらに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。

{{InteractiveExample("CSS デモ: border-block-width")}}

```css interactive-example-choice
border-block-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-width: 4px;
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
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

他の方向の境界の幅は {{cssxref("border-inline-width")}} で設定でき、これは {{cssxref("border-inline-start-width")}} および {{cssxref("border-inline-end-width")}} を設定します。

## 構文

```css
/* <'border-width'> 値 */
border-block-width: 5px;
border-block-width: thick;

/* グローバル値 */
border-block-width: inherit;
border-block-width: initial;
border-block-width: revert;
border-block-width: revert-layer;
border-block-width: unset;
```

### 値

- `<'border-width'>`
  - : 境界の幅です。 {{cssxref("border-width")}} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストの境界の幅

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
  border: 1px solid blue;
  border-block-width: 5px;
}
```

#### 結果

{{EmbedLiveSample("縦書きテキストの境界の幅", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- このプロパティは {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, {{cssxref("border-left-width")}} のうちの 1 つに対応します
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
