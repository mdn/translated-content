---
title: color()
slug: Web/CSS/color_value/color
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}{{SeeCompatTable}}

関数記法 **`color()`** により、他のほとんどの色関数が暗黙に処理する sRGB 色空間ではなく、特定の指定した色空間で色を指定することができます。

特定の色空間に対応しているかどうかは、CSS メディア特性の [`color-gamut`](/ja/docs/Web/CSS/@media/color-gamut) で検出することができます。

[CSS](/ja/docs/Web/CSS) [アットルール](/ja/docs/Web/CSS/At-rule)の [`@color-profile`](/ja/docs/Web/CSS/@color-profile) では、 `color()` 関数で色を指定するために使用する色プロファイルを定義し、名前を付けるために使用することができます。

## 構文

```css
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);
```

### 値

- 関数記法: `color( [ [<ident> | <dashed-ident>]? [ <number-percentage>+ | <string> ] [ / <alpha-value> ]? ] )`

  - : `[<ident> | <dashed-ident>]` はオプションで、色空間を示す {{cssxref("ident")}} または {{cssxref("dashed-ident")}} で す。もしこれが `<ident>` であれば、定義済みの色空間の 1 つ（display-p3 など）を示します。もしこれが \<dashed-ident> であれば、[`@color-profile`](/ja/docs/Web/CSS/@color-profile) ルールで定義された、カスタム色空間であることを意味します。

    `[ <number-percentage>+ | <string> ]` は、色空間が受け取る引数の値を提供する 1 つ以上の {{cssxref("number")}} または {{cssxref("percentage")}} 値、または色空間が定義する色の名前を与える {{cssxref("string")}} です。

    `/ <alpha-value>` （アルファ）は {{cssxref("&lt;number&gt;")}} で `0` から `1` の間、または {{cssxref("&lt;percentage&gt;")}} で `1` から `100%` （完全に不透明）の間で、この色の透明度（またはアルファチャネル）を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Wide Gamut Color in CSS with Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
