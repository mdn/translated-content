---
title: width
slug: Web/CSS/Reference/At-rules/@media/width
original_slug: Web/CSS/@media/width
l10n:
  sourceCommit: 421deed53984505909884b3b290002b228d29e7b
---

**`width`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、{{glossary("viewport", "ビューポート")}}の幅（または[ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)のページボックスの幅）を検査するために使用することができます。

## 構文

`width` 特性は、ビューポートの幅を表す {{cssxref("&lt;length&gt;")}} 値として指定します。これは範囲特性であり、接頭辞の付いた **`min-width`** および **`max-width`** の変化形を使用して、それぞれ最小値と最大値で問い合わせることができます。

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

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
