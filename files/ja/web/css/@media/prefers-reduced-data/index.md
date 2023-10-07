---
title: prefers-reduced-data
slug: Web/CSS/@media/prefers-reduced-data
---

{{CSSRef}}{{SeeCompatTable}}

> **メモ:** この特性は、どのユーザーエージェントも対応しておらず、その仕様が変更される可能性があります。

**`prefers-reduced-data`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Media_Queries/Using_media_queries#メディア特性)で、ユーザーがウェブコンテンツのインターネット通信を削減するようリクエストしていることを検出するために使用します。

## 構文

- `no-preference`
  - : ユーザーがシステムに対して何の設定もしていないことを示します。このキーワードの値は、論理値のコンテキストでは false として評価されます。
- `reduce`
  - : ユーザーが軽量な代替コンテンツを希望していることを示します。

## ユーザー設定

現在、この特性を実装しているユーザエージェントはありませんが、さまざまなオペレーティングシステムがこのような設定に対応しており、このメディアクエリーが実装された場合、ユーザーエージェントはオペレーティングシステムが提供する設定に依存する可能性が高いでしょう。

## 例

> **メモ:** 現在、この特性を実装しているブラウザーはありませんので、以下の例は動作しません。

この例では、 `montserrat-regular.woff2` フォントファイルは先読みもダウンロードもされません。もしユーザーがデータを削減従っているのであれば、この場合「[システムフォントスタック](https://css-tricks.com/snippets/css/system-font-stack/)」が予備フォントとして機能することになります。

### HTML

```html
<head>
  <link
    rel="preload"
    href="fonts/montserrat-regular.woff2"
    as="font"
    media="(prefers-reduced-data: no-preference)"
    crossorigin />
  <link rel="stylesheet" href="style.css" />
</head>
```

### CSS

```css
@media (prefers-reduced-data: no-preference) {
  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    /* latin */
    src:
      local("Montserrat Regular"),
      local("Montserrat-Regular"),
      url("fonts/montserrat-regular.woff2") format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
      U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
      U+2212, U+2215, U+FEFF, U+FFFD;
  }
}

body {
  font-family:
    Montserrat,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    "Microsoft YaHei",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol";
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTTP の {{HTTPHeader("Save-Data")}} ヘッダー
