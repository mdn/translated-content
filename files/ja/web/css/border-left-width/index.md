---
title: border-left-width
slug: Web/CSS/border-left-width
tags:
  - CSS
  - CSS 境界
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-left-width
translation_of: Web/CSS/border-left-width
---
{{CSSRef}}

**`border-left-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の左側の境界の幅を設定します。

{{EmbedInteractiveExample("pages/css/border-left-width.html")}}

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
border-left-width: unset;
```

### 値

- `<line-width>`

  - : 明示的な負の値ではない {{cssxref("&lt;length&gt;")}} またはキーワードで、境界の幅を定義します。キーワードの場合、以下の値のうちの一つでなければなりません。

    - `thin`
    - `medium`
    - `thick`

> **Note:** 仕様書ではそれぞれのキーワードで示される正確な太さを定義していないため、何れか一つを使用した場合の詳細な結果は、実装に依存します。とは言っても、常に `thin ≤ medium ≤ thick` というパターンに従い、値は同じ文書の中では一貫しています。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Comparing_border_widths">境界線の太さの比較</h3>

#### HTML

```html
<div>Element 1</div>
<div>Element 2</div>
```

#### CSS

```css
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

 - 他の境界の太さに関する CSS プロパティ: {{Cssxref("border-top-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, {{Cssxref("border-width")}}
 - 他の左の境界に関する CSS プロパティ: {{Cssxref("border")}}, {{Cssxref("border-left")}}, {{Cssxref("border-left-style")}}, {{Cssxref("border-left-color")}}
