---
title: CSS `prefers-reduced-data` メディア特性
short-title: prefers-reduced-data
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-data
l10n:
  sourceCommit: 294f2e4cedd4de0d99948f3bf9b451454387fe35
---

{{SeeCompatTable}}

> [!WARNING]
> この特性は、どのユーザーエージェントも対応しておらず、その仕様が変更される可能性があります。

**`prefers-reduced-data`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、ユーザーがウェブコンテンツのインターネット通信を削減するようリクエストしていることを検出するために使用します。

通常、ブラウザーは、データ量を縮小するための環境設定について、基盤となるオペレーティングシステムに照会することでこれを実現します。

## 構文

- `no-preference`
  - : ユーザーがシステムに対して環境設定を一切通知していないことを示します。このキーワードは、論理値コンテキストでは false と評価されます。
- `reduce`
  - : ユーザーが軽量な代替コンテンツを希望していることを示します。

## 例

### 基本的な使い方

この例では、`montserrat-regular.woff2` フォントファイルは先読みもダウンロードもされません。もしユーザーがデータを削減従っているのであれば、この場合「[システムフォントスタック](https://css-tricks.com/snippets/css/system-font-stack/)」が予備フォントとして機能することになります。

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
    font-family: "Montserrat";
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    /* latin */
    src:
      local("Montserrat Regular"),
      local("Montserrat-Regular"),
      url("fonts/montserrat-regular.woff2") format("woff2");
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
}

body {
  font-family:
    "Montserrat",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    sans-serif;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTTP の {{HTTPHeader("Save-Data")}} ヘッダー
