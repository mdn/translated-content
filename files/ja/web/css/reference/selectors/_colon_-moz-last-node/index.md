---
title: CSS `:-moz-last-node` 擬似クラス
short-title: :-moz-last-node
slug: Web/CSS/Reference/Selectors/:-moz-last-node
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}{{SeeCompatTable}}

**`:-moz-last-node`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、 [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)です。他の要素の最後の子要素であるあらゆる要素を表します。 {{Cssxref(":last-child")}} とは異なり、最後の子要素の後に（ホワイトスペース以外の）テキストがあると一致しません。

> [!NOTE]
> 要素の末尾にあるホワイトスペースは `:-moz-last-node` の判定において無視されます。

## 構文

```css
:-moz-last-node {
  /* ... */
}
```

## 例

### CSS

```css
span:-moz-last-node {
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
  <span>これは、その後にテキストがあるため一致しません。</span>
  Blahblah.
</p>
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

どの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
