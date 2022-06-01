---
title: '-webkit-device-pixel-ratio'
slug: Web/CSS/@media/-webkit-device-pixel-ratio
tags:
  - '@media'
  - CSS
  - NeedsBrowserCompatibility
  - 標準外
  - WebKit
  - メディア特性
browser-compat: css.at-rules.media.-webkit-device-pixel-ratio
translation_of: Web/CSS/@media/-webkit-device-pixel-ratio
---
{{ CSSRef }} {{ Non-standard_header }}

**`-webkit-device-pixel-ratio`** は [CSS](/ja/docs/Web/CSS) の標準外の論理[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、標準の[`resolution`](/ja/docs/Web/CSS/@media/resolution)メディア特性の代替です。

> **Note:** このメディア特性は WebKit の機能です。可能であれば、代わりに [`resolution`](/ja/docs/Web/CSS/@media/resolution) メディア特性クエリーを使用してください。

## 構文

`-webkit-device-pixel-ratio` 特性は {{cssxref("&lt;number&gt;")}} 値で指定されます。これは範囲特性であり、つまり接頭辞が付いた **`-webkit-min-device-pixel-ratio`** および **`-webkit-max-device-pixel-ratio`** の変化形を使用して、それぞれ最低値と最高値をクエリーすることもできます。

### 値

- {{cssxref("&lt;number&gt;")}}
  - : CSS の [`px`](/ja/docs/Web/CSS/length#absolute_length_units) を表すために使われるデバイスピクセルの数です。この値は `<number>` であり、構文的に単位を許可しておらず、暗黙の単位は [`dppx`](/ja/docs/Web/CSS/resolution#units) です。

## 実装

```css
/* "dppx" の単位が含まれています。 */
@media (-webkit-min-device-pixel-ratio: 2) { ... }
/* ... は以下のものと同じです。 */
@media (min-resolution: 2dppx) { ... }

/* 同様に */
@media (-webkit-max-device-pixel-ratio: 2) { ... }
/* ... は以下のものと同じです。 */
@media (max-resolution: 2dppx) { ... }
```

## 例

### HTML

```html
<p>This is a test of your device's pixel density.</p>
```

### CSS

```css
/* 正確な解像度 */
@media (-webkit-device-pixel-ratio: 1) {
  p {
    color: red;
  }
}

/* 最低解像度 */
@media (-webkit-min-device-pixel-ratio: 1.1) {
  p {
    font-size: 1.5em;
  }
}

/* 最高解像度 */
@media (-webkit-max-device-pixel-ratio: 3) {
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

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- {{cssxref("resolution")}}
- [`-webkit-transform-2d`](/ja/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transform-3d`](/ja/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transition`](/ja/docs/Web/CSS/@media/-webkit-transition)
- [`-webkit-animation`](/ja/docs/Web/CSS/@media/-webkit-animation)
- [W3C Suggested Method to UnPrefix](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/)
