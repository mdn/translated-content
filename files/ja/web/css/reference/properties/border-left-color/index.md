---
title: border-left-color
slug: Web/CSS/Reference/Properties/border-left-color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**`border-left-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の左側の[境界線](/ja/docs/Web/CSS/Reference/Properties/border)の色を設定します。一括指定プロパティの {{cssxref("border-color")}} または {{cssxref("border-left")}} でも設定することができます。

{{InteractiveExample("CSS デモ: border-left-color")}}

```css interactive-example-choice
border-left-color: red;
```

```css interactive-example-choice
border-left-color: #32a1ce;
```

```css interactive-example-choice
border-left-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
border-left-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-left-color: transparent;
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
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 構文

```css
/* <color> 値 */
border-left-color: red;
border-left-color: #ffbb00;
border-left-color: rgb(255 0 0);
border-left-color: hsl(100deg 50% 25% / 75%);
border-left-color: currentColor;
border-left-color: transparent;

/* グローバル値 */
border-left-color: inherit;
border-left-color: initial;
border-left-color: revert;
border-left-color: revert-layer;
border-left-color: unset;
```

`border-left-color` プロパティは 1 つの値で指定します。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 左の境界線の色を定義します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界線が付いた div

#### HTML

```html-nolint
<div class="my-box">
  <p>
    これは周囲に境界線があるボックスです。 なお、ボックスのその辺が<span class="red-text">赤</span>になっています。
  </p>
</div>
```

#### CSS

```css
.my-box {
  border: solid 0.3em gold;
  border-left-color: red;
  width: auto;
}

.red-text {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('境界線が付いた div')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界に関する CSS 一括指定プロパティ: {{cssxref("border")}}, {{cssxref("border-left")}}, {{cssxref("border-color")}}.
- 他の境界線の色に関する CSS プロパティ: {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-top-color")}}
- 同じ境界に適用される他の境界関連の CSS プロパティ: {{cssxref("border-left-style")}}, {{cssxref("border-left-width")}}
- 既定値の [`currentColor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_キーワード) カラー値
