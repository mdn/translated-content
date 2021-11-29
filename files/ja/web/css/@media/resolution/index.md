---
title: resolution
slug: Web/CSS/@media/resolution
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - リファレンス
  - メディア特性
browser-compat: css.at-rules.media.resolution
translation_of: Web/CSS/@media/resolution
---
{{CSSRef}}

**`resolution`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、出力端末のピクセル解像度をテストするために使用することができます。

## 構文

`resolution` 特性は、出力端末のピクセル解像度を表す {{cssxref("&lt;resolution&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-resolution`** および **`max-resolution`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### HTML

```html
<p>This is a test of your device's pixel density.</p>
```

### CSS

```css
/* 正確な解像度 */
@media (resolution: 150dpi) {
  p {
    color: red;
  }
}

/* 最小解像度 */
@media (min-resolution: 72dpi) {
  p {
    text-decoration: underline;
  }
}

/* 最大解像度 */
@media (max-resolution: 300dpi) {
  p {
    background: yellow;
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

- {{domxref("window.devicePixelRatio")}}
- {{cssxref("image-resolution")}} プロパティ
