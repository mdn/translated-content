---
title: resolution
slug: Web/CSS/Reference/At-rules/@media/resolution
original_slug: Web/CSS/@media/resolution
l10n:
  sourceCommit: a18eaa8478fb9da1de8052cb2a18b00be00cdca0
---

**`resolution`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、出力端末のピクセル解像度を検査するために使用することができます。

## 構文

`resolution` 特性は、出力端末のピクセル解像度を表す {{cssxref("&lt;resolution&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-resolution`** および **`max-resolution`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### HTML

```html-nolint
<p>これは、お使いのデバイスのピクセル密度を検査するものです。</p>
```

### CSS

```css
/* 単位 `dpi` による正確な解像度 */
@media (resolution: 150dpi) {
  p {
    color: red;
  }
}

/* 同義語である `dppx` および `x` による最小解像度 */
@media (min-resolution: 2dppx) {
  p {
    text-decoration: underline;
  }
}

@media (min-resolution: 2x) {
  p {
    text-decoration: underline;
  }
}

/* 単位 `dpcm` による最大解像度 */
@media (max-resolution: 2dpcm) {
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
