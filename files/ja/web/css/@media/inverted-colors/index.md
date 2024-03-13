---
title: inverted-colors
slug: Web/CSS/@media/inverted-colors
---

{{CSSRef}}

**`inverted-colors`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、{{glossary("user agent", "ユーザーエージェント")}}またはその下の OS が色を反転しているかどうかを調べるために使用することができます。

## 構文

`inverted-colors` 特性は以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : 色が通常通り表示されます。
- `inverted`
  - : 表示領域内のすべてのピクセルが反転されています。

## 例

### HTML

```html
<p>
  If you're using inverted colors, this text should be blue on white (the
  inverse of yellow on black). If you're not, it should be red on light gray.
</p>
<p>
  If the text is gray, your browser doesn't support the `inverted-colors` media
  feature.
</p>
```

### CSS

```css
p {
  color: gray;
}

@media (inverted-colors: inverted) {
  p {
    background: black;
    color: yellow;
  }
}

@media (inverted-colors: none) {
  p {
    background: #eee;
    color: red;
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

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
