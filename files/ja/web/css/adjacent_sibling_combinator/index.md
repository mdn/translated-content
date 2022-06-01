---
title: 隣接兄弟結合子
slug: Web/CSS/Adjacent_sibling_combinator
tags:
  - CSS
  - NeedsMobileBrowserCompatibility
  - リファレンス
  - セレクター
browser-compat: css.selectors.adjacent_sibling
translation_of: Web/CSS/Adjacent_sibling_combinator
---
{{CSSRef("Selectors")}}

**隣接兄弟結合子** (adjacent sibling combinator, `+`) は 2 つのセレクターを接続し、 2 つ目の要素が 1 つ目の要素の _直後_ にあって、両者が同じ親{{DOMxRef("element", "要素")}}の子同士である場合に一致します。

```css
/* 画像の直後に来る段落 */
img + p {
  font-style: bold;
}
```

## 構文

```css
直前の要素 + 対象の要素 { <em>スタイルプロパティ</em> }
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

- [一般兄弟結合子](/ja/docs/Web/CSS/General_sibling_combinator)
