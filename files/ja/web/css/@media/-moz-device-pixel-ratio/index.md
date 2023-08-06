---
title: "-moz-device-pixel-ratio"
slug: Web/CSS/@media/-moz-device-pixel-ratio
---

{{CSSRef}} {{Non-standard_header}} {{Deprecated_header}}

**`-moz-device-pixel-ratio`** は Gecko 独自の [CSS](/ja/docs/Web/CSS) の Gecko のみの[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、 CSS ピクセルあたりのデバイスピクセル数に基づいてスタイルを適用することができます。

> **警告:** この特性を使用しないでください。代わりに [`resolution`](/ja/docs/Web/CSS/@media/resolution) 特性と `dppx` の単位を使用してください。

> **メモ:** このメディア特性は Webkit および [IE 11 for Windows Phone 8.1](<https://msdn.microsoft.com/ja/library/ie/dn760733(v=vs.85).aspx>) でも `-webkit-device-pixel-ratio` として実装されています。 min および max 接頭辞は、 Gecko では `min--moz-device-pixel-ratio` および `max--moz-device-pixel-ratio` です。しかし、同じ接頭辞が Webkit では `-webkit-min-device-pixel-ratio` および `-webkit-max-device-pixel-ratio` として実装されています。

## 構文

- {{cssxref("&lt;number&gt;")}}
  - : CSS ピクセルあたりのデバイスピクセル数。

**メディア:** {{cssxref("@media")}}
**min/max 接頭辞の受付:** はい

## 例

### 基本的な互換コード

`-moz-device-pixel-ratio` は Firefox のバージョン 16 以前や、 `dppx` に未対応の WebKit ベースのブラウザーの `-webkit-device-pixel-ratio` との互換性のために使用されることがあります。

例:

```css
@media (-webkit-min-device-pixel-ratio: 2), /* Webkit ベースのブラウザー */
       (min--moz-device-pixel-ratio: 2),    /* 古い Firefox ブラウザー (Firefox 16 以前) */
       (min-resolution: 2dppx),             /* 標準の方法 */
       (min-resolution: 192dpi)             /* dppx のフォールバック */
```

> **メモ:** `resolution` および `dppx` に関わる互換性の良い習慣については、 [CSSWG の記事](http://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)を参照してください。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
