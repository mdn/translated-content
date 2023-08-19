---
title: border-left
slug: Web/CSS/border-left
---

{{CSSRef}}

**`border-left`** は[一括指定](/ja/docs/Web/CSS/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) のプロパティで、要素の左側の[境界](/ja/docs/Web/CSS/border)のプロパティをすべて設定します。

{{EmbedInteractiveExample("pages/css/border-left.html")}}

他の一括指定プロパティと同様に、 `border-left` は、一部の値が指定されていなくても、設定可能なプロパティをすべて設定します。指定されていないプロパティは既定値が設定されます。つまり・・・

```css
border-left-style: dotted;
border-left: thick green;
```

・・・は、実際には以下と同じです・・・

```css
border-left-style: dotted;
border-left: none thick green;
```

・・・そして、 `border-left` の前で設定された {{cssxref("border-left-style")}} の値は無視されます。 {{cssxref("border-left-style")}} の既定値は `none` なので、 `border-style` の部分の設定は境界線なしとなります。

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

<h3 id="Applying_a_left_border">左の境界の適用</h3>

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
- [背景と境界](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders)
- [CSS の学習: 背景と境界](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
