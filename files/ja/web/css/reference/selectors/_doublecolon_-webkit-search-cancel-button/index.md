---
title: CSS `::-webkit-search-cancel-button` 擬似要素
short-title: ::-webkit-search-cancel-button
slug: Web/CSS/Reference/Selectors/::-webkit-search-cancel-button
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-webkit-search-cancel-button`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、`type="search"` の {{HTMLElement("input")}} の端にあるボタン（「キャンセルボタン」）を表し、{{HTMLElement("input")}} 要素の現在の値をクリアします。このボタンおよび擬似要素は標準外であり、WebKit および Blink でのみ対応しているため、ベンダー接頭辞が付いています。クリアボタンは、値が空でない検索用 {{HTMLElement("input")}} 要素にのみ表示されます。

## 構文

```css
selector::-webkit-search-cancel-button {
  /* ... */
}
```

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref('::-webkit-search-results-button')}}
