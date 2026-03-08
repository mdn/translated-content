---
title: border-inline
slug: Web/CSS/Reference/Properties/border-inline
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

**`border-inline`** は [CSS](/ja/docs/Web/CSS) のプロパティで、論理的なインライン方向のそれぞれの境界プロパティをスタイルシートの一ヶ所で設定する[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)です。

{{InteractiveExample("CSS デモ: border-inline")}}

```css interactive-example-choice
border-inline: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline: 1rem solid;
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
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## 構成要素のプロパティ

このプロパティは次の CSS プロパティの一括指定です。

- {{cssxref("border-inline-color")}}
- {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-width")}}

## 構文

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* グローバル値 */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: revert-layer;
border-inline: unset;
```

### 値

`border-inline` は以下の値のうちの1つ以上を任意の順序で指定します。

- `<'border-width'>`
  - : 境界の幅です。 {{cssxref("border-width")}} を参照してください。
- `<'border-style'>`
  - : 境界線のスタイルです。 {{cssxref("border-style")}} を参照してください。
- {{CSSXref("&lt;color&gt;")}}
  - : 境界線の色です。

## 解説

`border-inline` の割り当て先の物理的な境界は、要素の書字方向によって決まります。 {{cssxref("border-top")}} と {{cssxref("border-bottom")}}、または {{cssxref("border-right")}} と {{cssxref("border-left")}} のどちらかの組み合わせに対して、 {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} に設定された値に応じて対応づけられます。

他の方向の境界については、 {{cssxref("border-block")}} によって、 {{cssxref("border-block-start")}} と {{cssxref("border-block-end")}} の両方を設定することができます。

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
  border-inline: 5px dashed blue;
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
- このプロパティは物理的な境界プロパティである {{cssxref("border-top")}}、{{cssxref("border-right")}}、{{cssxref("border-bottom")}}、{{cssxref("border-left")}} のいずれかに対応づけられます。
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
