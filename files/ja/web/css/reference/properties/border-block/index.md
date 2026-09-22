---
title: CSS `border-block` プロパティ
short-title: border-block
slug: Web/CSS/Reference/Properties/border-block
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

**`border-block`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、論理的なブロック方向のそれぞれの境界プロパティをスタイルシートの一ヶ所で設定します。

{{InteractiveExample("CSS デモ: border-block")}}

```css interactive-example-choice
border-block: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block: 1rem solid;
writing-mode: horizontal-tb;
direction: rtl;
```

```html-nolint interactive-example
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

このプロパティは次の CSS プロパティの一括指定です。

- {{cssxref("border-block-color")}}
- {{cssxref("border-block-style")}}
- {{cssxref("border-block-width")}}

## 構文

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;

/* グローバル値 */
border-block: inherit;
border-block: initial;
border-block: revert;
border-block: revert-layer;
border-block: unset;
```

### 値

`border-block` は以下の値のうちの 1 つ以上を任意の順序で指定します。

- {{cssxref("&lt;line-width&gt;")}}
  - : 境界の幅です。 {{cssxref("border-width")}} を参照してください。
- {{cssxref("&lt;line-style&gt;")}}
  - : 境界線のスタイルです。 {{cssxref("border-style")}} を参照してください。
- {{CSSXref("&lt;color&gt;")}}
  - : 境界線の色です。

## 解説

`border-block` は {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}}, {{cssxref("border-block-color")}} のうちの 1 つ以上の値を、ブロック方向の先頭側と末尾側の両方に対して一度に設定するために使用することができます。割り当て先の物理的な境界は、要素の書字方向によって決まります。 {{cssxref("border-top")}} と {{cssxref("border-bottom")}}、または {{cssxref("border-right")}} と {{cssxref("border-left")}} のどちらかの組み合わせに対して、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} に設定された値に応じて対応づけられます。

他の方向の境界については、 {{cssxref("border-inline")}} によって、 {{cssxref("border-inline-start")}} と {{cssxref("border-inline-end")}} の両方を設定することができます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 縦書きテキストの場合の境界

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
  border-block: 5px dashed blue;
}
```

#### 結果

{{EmbedLiveSample("縦書きテキストの場合の境界", 140, 140)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)
- このプロパティは物理的な境界プロパティである {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, {{cssxref("border-left")}} のいずれかに対応づけられます。
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
