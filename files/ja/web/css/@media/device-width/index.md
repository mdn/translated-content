---
title: device-width
slug: Web/CSS/@media/device-width
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}} {{deprecated_header}}

> [!NOTE]
> ビューポートの幅を問い合わせる場合、開発者は代わりに [`width`](/ja/docs/Web/CSS/@media/width) メディア特性を使用してください。

**`device-width`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、出力機器の描画面の幅を調べるために使用することができます。

## 構文

`device-width` 特性は、 {{cssxref("&lt;length&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-device-width`** および **`max-device-width`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### 800 ピクセルより狭い機器に特別のスタイルシートを適用

```html
<link
  rel="stylesheet"
  media="screen and (max-device-width: 799px)"
  href="http://foo.bar.com/narrow-styles.css" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
