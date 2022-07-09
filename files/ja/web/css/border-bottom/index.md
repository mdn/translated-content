---
title: border-bottom
slug: Web/CSS/border-bottom
tags:
  - CSS
  - CSS 境界
  - CSS プロパティ
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.border-bottom
translation_of: Web/CSS/border-bottom
---
{{CSSRef}}

**`border-bottom`** は[一括指定](/ja/docs/Web/CSS/Shorthand_properties)の [CSS](/ja/docs/Web/CSS) のプロパティで、要素の下側の[境界](/ja/docs/Web/CSS/border)のプロパティをすべて設定します。

{{EmbedInteractiveExample("pages/css/border-bottom.html")}}

他の一括指定プロパティと同様に、 `border-bottom` は、一部の値が指定されていなくても、設定可能なプロパティをすべて設定します。指定されていないプロパティは既定値が設定されます。つまり・・・

```css
border-bottom-style: dotted;
border-bottom: thick green;
```

・・・は、実際には以下と同じです・・・

```css
border-bottom-style: dotted;
border-bottom: none thick green;
```

・・・そして、 `border-bottom` の前で設定された {{cssxref("border-bottom-style")}} の値は無視されます。 {{cssxref("border-bottom-style")}} の既定値は `none` なので、 `border-style` の部分の設定は境界線なしとなります。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}

## 構文

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed blue;

/* グローバル値 */
border-bottom: inherit;
border-bottom: initial;
border-bottom: revert;
border-bottom: unset;
```

一括指定プロパティの 3 つの値は任意の順序で指定可能で、また、 1 つまたは 2 つの値を省略することができます。

### 値

- `<br-width>`
  - : {{cssxref("border-bottom-width")}} を参照してください。
- `<br-style>`
  - : {{cssxref("border-bottom-style")}} を参照してください。
- {{cssxref("&lt;color&gt;")}}
  - : {{cssxref("border-bottom-color")}} を参照してください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Applying_a_bottom_border">下の境界の適用</h3>

#### HTML

```html
<div>
  このボックスには下側に境界線があります。
</div>
```

#### CSS

```css
div {
  border-bottom: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### 結果

{{EmbedLiveSample('Applying_a_bottom_border')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
