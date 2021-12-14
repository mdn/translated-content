---
title: width
slug: Web/CSS/@media/width
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - メディア特性
  - リファレンス
browser-compat: css.at-rules.media.width
translation_of: Web/CSS/@media/width
---
{{CSSRef}}

**`width`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、{{glossary("viewport", "ビューポート")}}の幅 (または[ページ付きメディア](/ja/docs/Web/CSS/Paged_media)のページボックスの幅) をテストするために使用することができます。

## 構文

`width` 特性は、ビューポートの幅を表す {{cssxref("&lt;length&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-width`** および `**max-width**` の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### HTML

```html
<div>ビューポートの幅を変更しながらこの要素を見ていてください。</div>
```

### CSS

```css
/* 正確な幅 */
@media (width: 360px) {
  div {
    color: red;
  }
}

/* 最小幅 */
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/* 最大幅 */
@media (max-width: 50rem) {
  div {
    border: 2px solid blue;
  }
}
```

### 結果

{{EmbedLiveSample('Examples','90%')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
