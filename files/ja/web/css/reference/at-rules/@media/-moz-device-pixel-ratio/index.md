---
title: -moz-device-pixel-ratio
slug: Web/CSS/Reference/At-rules/@media/-moz-device-pixel-ratio
original_slug: Web/CSS/@media/-moz-device-pixel-ratio
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{Non-standard_header}} {{Deprecated_header}}

**`-moz-device-pixel-ratio`** は Gecko 独自の [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、 CSS ピクセルあたりのデバイスピクセル数に基づいてスタイルを適用することができます。

> [!WARNING]
> この特性を使用しないでください。代わりに [`resolution`](/ja/docs/Web/CSS/Reference/At-rules/@media/resolution) 特性と `dppx` の単位を使用してください。

> [!NOTE]
> このメディア特性は Webkit でも `-webkit-device-pixel-ratio` として実装されています。 min および max 接頭辞は、 Gecko では `min--moz-device-pixel-ratio` および `max--moz-device-pixel-ratio` です。しかし、同じ接頭辞が WebKit では `-webkit-min-device-pixel-ratio` および `-webkit-max-device-pixel-ratio` として実装されています。

## 構文

- {{cssxref("&lt;number&gt;")}}
  - : CSS ピクセルあたりのデバイスピクセル数。

**メディア:** {{cssxref("@media")}}
**min/max 接頭辞の受付:** あり

## 例

### 基本的な互換コード

`-moz-device-pixel-ratio` は Firefox のバージョン 16 以前や、 `dppx` に未対応の WebKit ベースのブラウザーの `-webkit-device-pixel-ratio` との互換性のために使用されることがあります。

例:

```css
/* WebKit ベースのブラウザー */
@media (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2) /* 古い Firefox ブラウザー (firefox 16 以前) */,
  (min-resolution: 2dppx) /* 標準の方法 */,
  (min-resolution: 192dpi); /* dppx のフォールバック */
```

> [!NOTE]
> `resolution` および `dppx` に関わる互換性の良い習慣については、 [CSSWG の記事](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)を参照してください。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
