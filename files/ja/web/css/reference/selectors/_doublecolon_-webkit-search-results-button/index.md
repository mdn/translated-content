---
title: CSS `::-webkit-search-results-button` 擬似要素
short-title: ::-webkit-search-results-button
slug: Web/CSS/Reference/Selectors/::-webkit-search-results-button
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-webkit-search-results-button`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、`type="search"` の {{HTMLElement("input")}} の左端にあるボタン（「検索結果ボタン」）を表し、これをクリックすると、ユーザーが以前の検索クエリーから選択することができるメニューが表示されます。このボタンおよび擬似要素は標準外であり、WebKit および Blink でのみ対応しているため、ベンダー接頭辞が付いています。検索結果ボタンは、[`results`](/ja/docs/Web/HTML/Reference/Elements/input#results) 属性を持つ検索用 {{HTMLElement("input")}} 要素にのみ表示されます。

## 構文

```css
selector::-webkit-search-results-button {
  /* ... */
}
```

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('::-webkit-search-cancel-button')}}
