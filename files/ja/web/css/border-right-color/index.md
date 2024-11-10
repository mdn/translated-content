---
title: border-right-color
slug: Web/CSS/border-right-color
l10n:
  sourceCommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{CSSRef}}

**`border-right-color`** は CSS のプロパティで、要素の右側の[境界線](/ja/docs/Web/CSS/border)の色を設定します。一括指定プロパティの {{cssxref("border-color")}} または {{cssxref("border-right")}} でも設定することができます。

{{EmbedInteractiveExample("pages/css/border-right-color.html")}}

## 構文

```css
/* <color> 値 */
border-right-color: red;
border-right-color: #ffbb00;
border-right-color: rgb(255 0 0);
border-right-color: hsl(100deg 50% 25% / 75%);
border-right-color: currentcolor;
border-right-color: transparent;

/* グローバル値 */
border-right-color: inherit;
border-right-color: initial;
border-right-color: revert;
border-right-color: revert-layer;
border-right-color: unset;
```

`border-right-color` プロパティは 1 つの値で指定します。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 右の境界線の色を定義します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界線が付いた単純な div

#### HTML

```html-nolint
<div class="mybox">
  <p>
    これは周囲に境界線があるボックスです。 なお、ボックスのその辺が<span class="redtext">赤</span>になっています。
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-right-color: red;
  width: auto;
}

.redtext {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('境界線が付いた単純な div')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界に関する CSS 一括指定プロパティ: {{cssxref("border")}}, {{cssxref("border-right")}}, {{cssxref("border-color")}}
- 他の境界線の色に関する CSS プロパティ: {{cssxref("border-left-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-top-color")}}
- 同じ境界に適用される他の境界関連の CSS プロパティ: {{cssxref("border-right-style")}}, {{cssxref("border-right-width")}}
- 既定値の [`currentcolor`](/ja/docs/Web/CSS/color_value#currentcolor_keyword) カラー値
