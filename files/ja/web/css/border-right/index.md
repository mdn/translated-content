---
title: border-right
slug: Web/CSS/border-right
tags:
  - CSS
  - CSS 境界
  - CSS プロパティ
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.border-right
translation_of: Web/CSS/border-right
---
{{CSSRef}}

**`border-right`** は[一括指定](/ja/docs/Web/CSS/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) のプロパティで、要素の右側の[境界](/ja/docs/Web/CSS/border)のプロパティをすべて設定します。

{{EmbedInteractiveExample("pages/css/border-right.html")}}

他の一括指定プロパティと同様に、 `border-right` は、一部の値が指定されていなくても、設定可能なプロパティをすべて設定します。指定されていないプロパティは既定値が設定されます。つまり・・・

```css
border-right-style: dotted;
border-right: thick green;
```

・・・は、実際には以下と同じです・・・

```css
border-right-style: dotted;
border-right: none thick green;
```

・・・そして、 `border-right` の前で設定された {{cssxref("border-right-style")}} の値は無視されます。 {{cssxref("border-right-style")}} の既定値は `none` なので、 `border-style` の部分の設定は境界線なしとなります。

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

<h3 id="Applying_a_right_border">右側の境界の適用</h3>

#### HTML

```html
<div>
  このボックスには右側に境界線があります。
</div>
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
