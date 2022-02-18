---
title: border-top-width
slug: Web/CSS/border-top-width
tags:
  - CSS
  - CSS 境界
  - CSS プロパティ
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-top-width
translation_of: Web/CSS/border-top-width
---
{{CSSRef}}

**`border-top-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の上側の境界の幅を設定します。

{{EmbedInteractiveExample("pages/css/border-top-width.html")}}

## 構文

```css
/* キーワード値 */
border-top-width: thin;
border-top-width: medium;
border-top-width: thick;

/* <length> 値 */
border-top-width: 10em;
border-top-width: 3vmax;
border-top-width: 6px;

/* グローバルキーワード */
border-top-width: inherit;
border-top-width: initial;
border-top-width: revert;
border-top-width: unset;
```

### 値

- `<line-width>`

  - : 境界の幅を、明示的な非負の {{cssxref("&lt;length&gt;")}} またはキーワードで定義します。キーワードの場合は、以下の値の何れかでなければなりません。

    - `thin`
    - `medium`
    - `thick`

 > **Note:** 仕様書ではそれぞれのキーワードで示される正確な太さを定義していないため、何れかを使用した場合の詳細な結果は、実装に依存します。とは言っても、常に `thin ≤ medium ≤ thick` というパターンに従い、値は同じ文書の中では一貫しています。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<div>Element 1</div>
<div>Element 2</div>
```

### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-top-width: thick;
}
div:nth-child(2) {
  border-top-width: 2em;
}
```

### 結果

{{EmbedLiveSample('Examples', '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

 - 他の border-width 関連 CSS プロパティ: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, {{Cssxref("border-width")}}
 - 他の border-top 関連 CSS プロパティ: {{Cssxref("border")}}, {{Cssxref("border-top")}}, {{Cssxref("border-top-style")}}, {{Cssxref("border-top-color")}}
