---
title: border-right-style
slug: Web/CSS/border-right-style
tags:
  - CSS
  - CSS 境界
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-right-style
translation_of: Web/CSS/border-right-style
---
{{CSSRef}}

**`border-right-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の右側の境界線 ({{cssxref("border")}}) の形状を設定します。

{{EmbedInteractiveExample("pages/css/border-right-style.html")}}

> **Note:** 仕様書では、異なる形状の境界線を角でどの様に接続するかを定義していません。

## 構文

```css
/* キーワード値 */
border-right-style: none;
border-right-style: hidden;
border-right-style: dotted;
border-right-style: dashed;
border-right-style: solid;
border-right-style: double;
border-right-style: groove;
border-right-style: ridge;
border-right-style: inset;
border-right-style: outset;

/* グローバル値 */
border-right-style: inherit;
border-right-style: initial;
border-right-style: revert;
border-right-style: unset;
```

`border-right-style` プロパティは、 {{cssxref("border-style")}} プロパティで利用できるキーワードのうちの一つで指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Border_styles">境界の形状</h3>

#### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS

```css
/* 表の外見を定義 */
table {
  border-width: 2px;
  background-color: #52E385;
}
tr, td {
  padding: 3px;
}

/* border-right-style の例のクラス */
.b1 {border-right-style: none;}
.b2 {border-right-style: hidden;}
.b3 {border-right-style: dotted;}
.b4 {border-right-style: dashed;}
.b5 {border-right-style: solid;}
.b6 {border-right-style: double;}
.b7 {border-right-style: groove;}
.b8 {border-right-style: ridge;}
.b9 {border-right-style: inset;}
.b10 {border-right-style: outset;}
```

#### 結果

{{ EmbedLiveSample('Border_styles') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

 - その他の形状に関する境界のプロパティ: {{ Cssxref("border-bottom-style") }}, {{ Cssxref("border-left-style") }}, {{ Cssxref("border-top-style") }}, {{ Cssxref("border-style") }}
 - その他の右側の境界に関するプロパティ: {{ Cssxref("border-right") }}, {{ Cssxref("border-right-color") }}, {{ Cssxref("border-right-width") }}
