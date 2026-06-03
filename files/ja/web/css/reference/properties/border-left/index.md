---
title: border-left
slug: Web/CSS/Reference/Properties/border-left
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`border-left`** は[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) プロパティで、要素の左側の[境界](/ja/docs/Web/CSS/Reference/Properties/border)のプロパティをすべて設定します。

{{InteractiveExample("CSS デモ: border-left")}}

```css interactive-example-choice
border-left: solid;
```

```css interactive-example-choice
border-left: dashed red;
```

```css interactive-example-choice
border-left: 1rem solid;
```

```css interactive-example-choice
border-left: thick double #32a1ce;
```

```css interactive-example-choice
border-left: 4mm ridge rgb(211 220 50 / 0.6);
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
}
```

他の一括指定プロパティと同様に、 `border-left` は、一部の値が指定されていなくても、設定可能なプロパティをすべて設定します。指定されていないプロパティは既定値が設定されます。次のコードを考えてください。

```css
border-left-style: dotted;
border-left: thick green;
```

これは、実際には以下と同じです。

```css
border-left-style: dotted;
border-left: none thick green;
```

`border-left` の前で設定された {{cssxref("border-left-style")}} の値は無視されます。 {{cssxref("border-left-style")}} の既定値は `none` なので、 `border-style` の部分の設定は境界線なしとなります。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}

## 構文

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed blue;

/* グローバル値 */
border-left: inherit;
border-left: initial;
border-left: revert;
border-left: revert-layer;
border-left: unset;
```

一括指定プロパティの 3 つの値は任意の順序で指定可能で、また、1 つまたは 2 つの値を省略することができます。

### 値

- `<br-width>`
  - : {{cssxref("border-left-width")}} を参照してください。
- `<br-style>`
  - : {{cssxref("border-left-style")}} を参照してください。
- {{cssxref("&lt;color&gt;")}}
  - : {{cssxref("border-left-color")}} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 左の境界の適用

#### HTML

```html
<div>このボックスには左側に境界線があります。</div>
```

#### CSS

```css
div {
  border-left: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample('Applying_a_left_border')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
- [背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)
- [CSS の学習: 背景と境界](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
