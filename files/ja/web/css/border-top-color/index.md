---
title: border-top-color
slug: Web/CSS/border-top-color
l10n:
  sourceCommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{CSSRef}}

**`border-top-color`** は CSS のプロパティで、要素の上側の[境界線](/ja/docs/Web/CSS/border)の色を設定します。一括指定プロパティの {{cssxref("border-color")}} または {{cssxref("border-top")}} でも設定することができます。

{{EmbedInteractiveExample("pages/css/border-top-color.html")}}

## 構文

```css
/* <color> 値 */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255 0 0);
border-top-color: hsl(100deg 50% 25% / 75%);
border-top-color: currentcolor;
border-top-color: transparent;

/* グローバル値 */
border-top-color: inherit;
border-top-color: initial;
border-top-color: revert;
border-top-color: revert-layer;
border-top-color: unset;
```

`border-top-color` プロパティは 1 つの値で指定します。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 上の境界線の色を定義します。

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
  border-top-color: red;
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

- 境界に関する CSS 一括指定プロパティ: {{cssxref("border")}}, {{cssxref("border-top")}}, {{cssxref("border-color")}}.
- 他の境界線の色に関する CSS プロパティ: {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}}
- 同じ境界線に適用される他の境界関連の CSS プロパティ: {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}
- 既定値の [`currentcolor`](/ja/docs/Web/CSS/color_value#currentcolor_keyword) カラー値
