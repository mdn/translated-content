---
title: device-aspect-ratio
slug: Web/CSS/@media/device-aspect-ratio
tags:
  - '@media'
  - CSS
  - 非推奨
  - メディアクエリー
  - リファレンス
  - ウェブ
  - メディア特性
browser-compat: css.at-rules.media.device-aspect-ratio
translation_of: Web/CSS/@media/device-aspect-ratio
---
{{CSSRef}} {{deprecated_header}}

[CSS](/ja/docs/Web/CSS) の **`device-aspect-ratio`** [メディア特性](/ja/docs/Web/CSS/@media#メディア特性)は、出力機器の幅対高さのアスペクト比を調べるために使用します。

## 構文

`device-aspect-ratio` 特性は、 {{cssxref("&lt;ratio&gt;")}} で指定します。これは範囲の特性であり、つまり接頭辞の付いた **`min-device-aspect-ratio`** および `**max-device-aspect-ratio**` の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

### min-device-aspect-ratio の使用

```css
article {
  padding: 1rem;
}

@media screen and (min-device-aspect-ratio: 16/9) {
  article {
    padding: 1rem 5vw;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
