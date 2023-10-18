---
title: border-top
slug: Web/CSS/border-top
---

{{CSSRef}}

**`border-top`** は[一括指定](/ja/docs/Web/CSS/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) のプロパティで、要素の上側の[境界](/ja/docs/Web/CSS/border)のプロパティをすべて設定します。</span>

{{EmbedInteractiveExample("pages/css/border-top.html")}}

他の一括指定プロパティと同様に、 `border-top` は、一部の値が指定されていなくても、設定可能なプロパティをすべて設定します。指定されていないプロパティは既定値が設定されます。つまり・・・

```css
border-top-style: dotted;
border-top: thick green;
```

・・・は、実際には以下と同じです・・・

```css
border-top-style: dotted;
border-top: none thick green;
```

・・・そして、 `border-top` の前で設定された {{cssxref("border-top-style")}} の値は無視されます。 {{cssxref("border-top-style")}} の既定値は `none` なので、 `border-style` の部分の設定は境界線なしとなります。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-top-color`](/ja/docs/Web/CSS/border-top-color)
- [`border-top-style`](/ja/docs/Web/CSS/border-top-style)
- [`border-top-width`](/ja/docs/Web/CSS/border-top-width)

## 構文

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;

/* グローバル値 */
border-top: inherit;
border-top: initial;
border-top: revert;
border-top: unset;
```

一括指定プロパティの 3 つの値は任意の順序で指定可能で、また、1 つまたは 2 つの値を省略することができます。

### 値

- `<br-width>`
  - : {{cssxref("border-top-width")}} を参照してください。
- `<br-style>`
  - : {{cssxref("border-top-style")}} を参照してください。
- {{cssxref("&lt;color&gt;")}}
  - : {{cssxref("border-top-color")}} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Applying_a_top_border">上側の境界の適用</h3>

#### HTML

```html
<div>このボックスには上側に境界線があります。</div>
```

#### CSS

```css
div {
  border-top: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample('Applying_a_top_border')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`border`](/ja/docs/Web/CSS/border)
- [`border-block`](/ja/docs/Web/CSS/border-block)
- [`outline`](/ja/docs/Web/CSS/outline)
