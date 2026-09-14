---
title: CSS `hover` メディア特性
short-title: hover
slug: Web/CSS/Reference/At-rules/@media/hover
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

**`hover`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、第一の入力機構で要素にかざす（ホバー）操作ができるかどうかを検査するために使用することができます。

## 構文

`hover` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : 第一の入力機構が全くかざす操作ができないか、かざす操作を簡単に行うことができない（例えば、多くのモバイル機器は便利ではないものの、ロングタップのユーザー操作で擬似的にホバーを実現する）、または第一の入力機構がない。
- `hover`
  - : 第一の入力機構が、要素の上でかざす操作を簡単に行うことができる。

## 例

### HTML

```html
<a href="#">この上でかざしてみてください！</a>
```

### CSS

```css
/* デフォルトのホバー効果 */
a:hover {
  color: black;
  background: yellow;
}

@media (hover: hover) {
  /* ホバーに対応している場合 */
  a:hover {
    color: white;
    background: black;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
