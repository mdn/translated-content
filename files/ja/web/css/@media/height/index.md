---
title: height
slug: Web/CSS/@media/height
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - リファレンス
  - メディア特性
browser-compat: css.at-rules.media.height
translation_of: Web/CSS/@media/height
---
{{CSSRef}}

**`height`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、{{glossary("viewport", "ビューポート")}}の高さ (または[ページ付きメディア](/ja/docs/Web/CSS/Paged_Media)のページボックスの高さ) に基づいてスタイルを適用するために使用することができます。

## 構文

`height` 特性は、ビューポートの高さを表す {{cssxref("&lt;length&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-height`** および **`max-height`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### HTML

```html
<div>ビューポートの高さを変更しながら、この要素を見ていてください。</div>
```

### CSS

```css
/* 正確な高さ */
@media (height: 360px) {
  div {
    color: red;
  }
}

/* 最小高 */
@media (min-height: 25rem) {
  div {
    background: yellow;
  }
}

/* 最大高 */
@media (max-height: 40rem) {
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
