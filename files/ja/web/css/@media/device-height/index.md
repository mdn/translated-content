---
title: device-height
slug: Web/CSS/@media/device-height
---

{{CSSRef}} {{deprecated_header}}

[CSS](/ja/docs/Web/CSS) の **`device-height`** [メディア特性](/ja/docs/Web/CSS/@media#メディア特性)は、出力機器の描画面の高さを調べるために使用することができます。

## 構文

`device-height` 特性は、 {{cssxref("&lt;length&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-device-height`** および **`max-device-height`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

この HTML は、800 ピクセルより低い機器に特別のスタイルシートを適用します。

```html
<link
  rel="stylesheet"
  media="screen and (max-device-height: 799px)"
  href="http://foo.bar.com/short-styles.css" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
