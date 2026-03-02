---
title: hover
slug: Web/CSS/Reference/At-rules/@media/hover
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`hover`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、*第一の*入力機構で要素の上でホバーする（かざす）ことができるかどうかを検査するために使用することができます。

## 構文

`hover` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : 第一の入力機構が全くホバーができないか、差支えなくホバーをすることができない（例えば、多くのモバイル機器は便利ではないものの、ロングタップのユーザー操作で擬似的にホバーを実現する）、または第一の入力機構がない。
- `hover`
  - : 第一の入力機構が、要素の上で差支えなくホバーすることができる。

## 例

### HTML

```html
<a href="#">Try hovering over me!</a>
```

### CSS

```css
/* 既定のホバー効果 */
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
