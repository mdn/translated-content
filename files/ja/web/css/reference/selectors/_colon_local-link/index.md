---
title: :local-link
slug: Web/CSS/Reference/Selectors/:local-link
original_slug: Web/CSS/:local-link
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

**`:local-link`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、文書内のリンクを表します。したがって、ハイパーリンクのソースアンカーである要素は、その要素の絶対 URL と一致する絶対 URL を持つ要素です。

```css
/* 現在の文書にリンクしている <a> を選択 */
a:local-link {
  color: green;
}
```

## 構文

```css
:local-link {
  /* ... */
}
```

## 例

### HTML

```html
<a href="#target">これは、このページ上のリンクです。</a><br />
<a href="https://example.com">これは外部リンクです。</a><br />
```

### CSS

```css
a:local-link {
  color: green;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

現在、この機能に対応しているブラウザーはありません。

## 関連情報

- リンクに関する擬似クラス: {{ cssxref(":link") }}, {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}, {{ cssxref(":any-link") }}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
