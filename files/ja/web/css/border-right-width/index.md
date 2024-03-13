---
title: border-right-width
slug: Web/CSS/border-right-width
---

{{CSSRef}}

**`border-right-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の右側の境界の幅を設定します。

{{EmbedInteractiveExample("pages/css/border-right-width.html")}}

## 構文

```css
/* キーワード値 */
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* <length> 値 */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* グローバル値 */
border-right-width: inherit;
border-right-width: initial;
border-right-width: revert;
border-right-width: unset;
```

### 値

- `<line-width>`

  - : 明示的な負の値ではない {{cssxref("&lt;length&gt;")}} またはキーワードで、境界の幅を定義します。キーワードの場合、以下の値のうちの一つでなければなりません。

    - `thin`
    - `medium`
    - `thick`

> **メモ:** 仕様書ではそれぞれのキーワードで示される正確な太さを定義していないため、何れか一つを使用した場合の詳細な結果は、実装に依存します。とは言っても、常に `thin ≤ medium ≤ thick` というパターンに従い、値は同じ文書の中では一貫しています。

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
  border-right-width: thick;
}
div:nth-child(2) {
  border-right-width: 2em;
}
```

#### 結果

{{EmbedLiveSample('Comparing_border_widths', '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の太さに関する境界の CSS プロパティ: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-top-width")}}, {{Cssxref("border-width")}}
- 他の右側の境界に関する CSS プロパティ: {{Cssxref("border")}}, {{Cssxref("border-right")}}, {{Cssxref("border-right-style")}}, {{Cssxref("border-right-color")}}
