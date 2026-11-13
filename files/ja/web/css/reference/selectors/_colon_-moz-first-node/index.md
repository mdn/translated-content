---
title: CSS `:-moz-first-node` 擬似クラス
short-title: :-moz-first-node
slug: Web/CSS/Reference/Selectors/:-moz-first-node
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}{{SeeCompatTable}}

**`:-moz-first-node`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)です。他の要素の最初の子要素であるあらゆる要素を表します。 {{Cssxref(":first-child")}} とは異なり、最初の子要素の前に（ホワイトスペース以外の）テキストがあると一致しません。

> [!NOTE]
> 要素の先頭にあるホワイトスペースは `:-moz-first-node` の判定において無視されます。

## 構文

```css
:-moz-first-node {
  /* ... */
}
```

## 例

### CSS

```css
span:-moz-first-node {
  background-color: lime;
}
```

### HTML

```html
<p>
  <span>これは一致します。</span>
  <span>これは一致しません。</span>
</p>

<p>
  Blahblah.
  <span>これは、その前にテキストがあるため一致しません。</span>
</p>
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":-moz-last-node")}}
- {{cssxref(":first-child")}}
