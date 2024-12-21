---
title: border-bottom-width
slug: Web/CSS/border-bottom-width
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

**`border-bottom-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ボックスの下の境界の幅を設定します。

{{EmbedInteractiveExample("pages/css/border-bottom-width.html")}}

## 構文

```css
/* キーワード値 */
border-bottom-width: thin;
border-bottom-width: medium;
border-bottom-width: thick;

/* <length> 値 */
border-bottom-width: 10em;
border-bottom-width: 3vmax;
border-bottom-width: 6px;

/* グローバルキーワード */
border-bottom-width: inherit;
border-bottom-width: initial;
border-bottom-width: revert;
border-bottom-width: revert-layer;
border-bottom-width: unset;
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

### 下境界の太さの比較

#### HTML

```html live-sample___comparing_bottom_border_widths
<div>Element 1</div>
<div>Element 2</div>
```

#### CSS

```css live-sample___comparing_bottom_border_widths
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-bottom-width: thick;
}
div:nth-child(2) {
  border-bottom-width: 2em;
}
```

#### 結果

{{EmbedLiveSample('Comparing_bottom_border_widths', '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界の太さに関する他の CSS プロパティ: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}}, {{Cssxref("border-width")}}
- 下の境界に関する他の CSS プロパティ: {{Cssxref("border")}}, {{Cssxref("border-bottom")}}, {{Cssxref("border-bottom-style")}}, {{Cssxref("border-bottom-color")}}
