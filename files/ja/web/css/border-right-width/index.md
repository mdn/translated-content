---
title: border-right-width
slug: Web/CSS/border-right-width
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
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
border-right-width: revert-layer;
border-right-width: unset;
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

{{EmbedLiveSample('境界線の太さの比較', '100%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 境界の太さに関する他の CSS プロパティ: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-top-width")}}, {{Cssxref("border-width")}}
- 右の境界に関する他の CSS プロパティ: {{Cssxref("border")}}, {{Cssxref("border-right")}}, {{Cssxref("border-right-style")}}, {{Cssxref("border-right-color")}}
