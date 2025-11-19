---
title: device-height
slug: Web/CSS/Reference/At-rules/@media/device-height
original_slug: Web/CSS/@media/device-height
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{deprecated_header}}

> [!NOTE]
> ビューポートの高さを問い合わせる場合、開発者は代わりに [`height`](/ja/docs/Web/CSS/Reference/At-rules/@media/height) メディア特性を使用してください。

**`device-height`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、出力機器の描画面の高さを調べるために使用することができます。

## 構文

`device-height` 特性は、 {{cssxref("&lt;length&gt;")}} 値として指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-device-height`** および **`max-device-height`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### 800 ピクセルより小さな機器に特別のスタイルシートを適用

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

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
