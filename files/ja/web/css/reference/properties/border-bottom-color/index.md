---
title: border-bottom-color
slug: Web/CSS/Reference/Properties/border-bottom-color
original_slug: Web/CSS/border-bottom-color
l10n:
  sourceCommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

**`border-bottom-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の下側の[境界線](/ja/docs/Web/CSS/Reference/Properties/border)の色を設定します。一括指定プロパティの {{cssxref("border-color")}} または {{cssxref("border-bottom")}} でも設定することができます。

{{InteractiveExample("CSS デモ: border-bottom-color")}}

```css interactive-example-choice
border-bottom-color: red;
```

```css interactive-example-choice
border-bottom-color: #32a1ce;
```

```css interactive-example-choice
border-bottom-color: rgb(170, 50, 220, 0.6);
```

```css interactive-example-choice
border-bottom-color: hsl(60, 90%, 50%, 0.8);
```

```css interactive-example-choice
border-bottom-color: transparent;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 構文

```css
/* <color> 値 */
border-bottom-color: red;
border-bottom-color: #ffbb00;
border-bottom-color: rgb(255 0 0);
border-bottom-color: hsl(100deg 50% 25% / 75%);
border-bottom-color: currentcolor;
border-bottom-color: transparent;

/* グローバル値 */
border-bottom-color: inherit;
border-bottom-color: initial;
border-bottom-color: revert;
border-bottom-color: revert-layer;
border-bottom-color: unset;
```

`border-bottom-color` プロパティは 1 つの値で指定します。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 下の境界線の色を定義します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界線が付いた単純な div

#### HTML

```html-nolint live-sample___a_simple_div_with_a_border
<div class="my-box">
  <p>
    これは周囲に境界線があるボックスです。 なお、ボックスのその辺が<span class="red-text">赤</span>になっています。
  </p>
</div>
```

#### CSS

```css live-sample___a_simple_div_with_a_border
.my-box {
  border: solid 0.3em gold;
  border-bottom-color: red;
  width: auto;
}

.red-text {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('A_simple_div_with_a_border')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界に関する CSS 一括指定プロパティ: {{cssxref("border")}}, {{cssxref("border-bottom")}}, {{cssxref("border-color")}}.
- 他の境界線の色に関する CSS プロパティ: {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, {{cssxref("border-left-color")}}
- 同じ境界線に適用される他の境界関連の CSS プロパティ: {{cssxref("border-bottom-style")}}, {{cssxref("border-bottom-width")}}
- 既定値の [`currentColor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_キーワード) カラー値
