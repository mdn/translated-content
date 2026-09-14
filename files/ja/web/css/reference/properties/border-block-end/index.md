---
title: CSS `border-block-end` プロパティ
short-title: border-block-end
slug: Web/CSS/Reference/Properties/border-block-end
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

**`border-block-end`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、個々の論理的なブロック方向末尾側の境界のプロパティ値を、スタイルシート内の単一の場所で設定します。

{{InteractiveExample("CSS デモ: border-block-end")}}

```css interactive-example-choice
border-block-end: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end: 1rem solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: thick double #32a1ce;
writing-mode: vertical-lr;
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
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-end-width")}}

## 構文

```css
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed blue;

/* グローバル値 */
border-block-end: inherit;
border-block-end: initial;
border-block-end: revert;
border-block-end: revert-layer;
border-block-end: unset;
```

`border-block-end` は 1 つ以上の {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}} の値の組み合わせを使用することができます。対応づけられる物理的な境界は、書字方向やテキストの向きによって決まります。これは {{cssxref("border-top")}}、{{cssxref("border-right")}}、{{cssxref("border-bottom")}}、{{cssxref("border-left")}} のいずれかに対応し、どれに対応するかは {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} で定義された値によって決まります。

関連するプロパティとしては、 {{cssxref("border-block-start")}}、{{cssxref("border-inline-start")}}、{{cssxref("border-inline-end")}} が要素の他の境界を定義します。

### 値

`border-block-end` は以下の値のうちの 1 つ以上を任意の順序で指定します。

- {{cssxref("&lt;line-width&gt;")}}
  - : 境界の幅です。 {{cssxref("border-width")}} を参照してください。
- {{cssxref("&lt;line-style&gt;")}}
  - : 境界線のスタイルです。 {{cssxref("border-style")}} を参照してください。
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
  writing-mode: vertical-rl;
  border-block-end: 5px dashed blue;
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
- このプロパティは {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, {{cssxref("border-left")}} のうちの一つに対応づけられます。
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
