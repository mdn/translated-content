---
title: border-left-width
slug: Web/CSS/Reference/Properties/border-left-width
original_slug: Web/CSS/border-left-width
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

**`border-left-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の左側の境界の幅を設定します。

{{InteractiveExample("CSS デモ: border-left-width")}}

```css interactive-example-choice
border-left-width: thick;
```

```css interactive-example-choice
border-left-width: 2em;
```

```css interactive-example-choice
border-left-width: 4px;
```

```css interactive-example-choice
border-left-width: 2ex;
```

```css interactive-example-choice
border-left-width: 0;
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
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 構文

```css
/* キーワード値 */
border-left-width: thin;
border-left-width: medium;
border-left-width: thick;

/* <length> 値 */
border-left-width: 10em;
border-left-width: 3vmax;
border-left-width: 6px;

/* グローバル値 */
border-left-width: inherit;
border-left-width: initial;
border-left-width: revert;
border-left-width: revert-layer;
border-left-width: unset;
```

### 値

- `<line-width>`
  - : 境界の幅を、明示的な非負の {{cssxref("&lt;length&gt;")}} またはキーワードで定義します。キーワードの場合、以下の値のいずれかでなければなりません。
    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> 仕様書ではそれぞれのキーワードで示される正確な太さを定義していないため、いずれかを使用した場合の詳細な結果は、実装に依存します。とは言っても、常に `thin ≤ medium ≤ thick` というパターンに従い、値は同じ文書の中では一貫しています。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 境界線の太さの比較

#### HTML

```html live-sample___comparing_border_widths
<div>Element 1</div>
<div>Element 2</div>
```

#### CSS

```css live-sample___comparing_border_widths
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-left-width: thick;
}
div:nth-child(2) {
  border-left-width: 2em;
}
```

#### 結果

{{EmbedLiveSample('Comparing_border_widths', '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界の太さに関する他の CSS プロパティ: {{Cssxref("border-top-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, {{Cssxref("border-width")}}
- 左の境界に関する他の CSS プロパティ: {{Cssxref("border")}}, {{Cssxref("border-left")}}, {{Cssxref("border-left-style")}}, {{Cssxref("border-left-color")}}
