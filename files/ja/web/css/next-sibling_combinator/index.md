---
title: 次兄弟結合子
slug: Web/CSS/Next-sibling_combinator
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{CSSRef}}

**次兄弟結合子** (next-sibling combinator, `+`) は 2 つのセレクターを接続し、 2 つ目の要素が 1 つ目の要素の _直後_ にあって、両者が同じ親{{DOMxRef("element", "要素")}}の子同士である場合に一致します。

```css
/* 画像の直後に来る段落 */
img + p {
  font-weight: bold;
}
```

## 構文

```css-nolint
/* 結合子の前後の空白はオプションですが、推奨されます。 */
直前の要素 + 対象の要素 { スタイルプロパティ }
```

## 例

### CSS

```css
li:first-of-type + li {
  color: red;
}
```

### HTML

```html
<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>
```

### 結果

{{EmbedLiveSample("Examples", "100%", 100)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [後続兄弟結合子](/ja/docs/Web/CSS/Subsequent-sibling_combinator)
