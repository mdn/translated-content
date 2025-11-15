---
title: border-right
slug: Web/CSS/Reference/Properties/border-right
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`border-right`** は[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) のプロパティで、要素の右側の[境界](/ja/docs/Web/CSS/Reference/Properties/border)のプロパティをすべて設定します。

{{InteractiveExample("CSS デモ: border-right")}}

```css interactive-example-choice
border-right: solid;
```

```css interactive-example-choice
border-right: dashed red;
```

```css interactive-example-choice
border-right: 1rem solid;
```

```css interactive-example-choice
border-right: thick double #32a1ce;
```

```css interactive-example-choice
border-right: 4mm ridge rgb(211 220 50 / 0.6);
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

他の一括指定プロパティと同様に、 `border-right` は、一部の値が指定されていなくても、設定可能なプロパティをすべて設定します。指定されていないプロパティは既定値が設定されます。次のコードを考えてください。

```css
border-right-style: dotted;
border-right: thick green;
```

これは、実際には以下と同じです。

```css
border-right-style: dotted;
border-right: none thick green;
```

`border-right` の前で設定された {{cssxref("border-right-style")}} の値は無視されます。 {{cssxref("border-right-style")}} の既定値は `none` なので、 `border-style` の部分の設定は境界線なしとなります。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}

## 構文

```css
border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;

/* グローバル値 */
border-right: inherit;
border-right: initial;
border-right: revert;
border-right: revert-layer;
border-right: unset;
```

一括指定プロパティの 3 つの値は任意の順序で指定可能で、また、1 つまたは 2 つの値を省略することができます。

### 値

- `<br-width>`
  - : {{cssxref("border-right-width")}} を参照してください。
- `<br-style>`
  - : {{cssxref("border-right-style")}} を参照してください。
- {{cssxref("&lt;color&gt;")}}
  - : {{cssxref("border-right-color")}} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 右側の境界の適用

#### HTML

```html
<div>このボックスには右側に境界線があります。</div>
```

#### CSS

```css
div {
  border-right: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample('Applying_a_right_border')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
