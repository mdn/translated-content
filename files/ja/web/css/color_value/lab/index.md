---
title: lab()
slug: Web/CSS/color_value/lab
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}{{SeeCompatTable}}

**`lab()`** 関数記法は、指定された色を CIE L\*a\*b\* 色空間で表現する。 Lab は人間が見ることのできる色の範囲をすべて表します。

## 構文

```css
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);
```

### 値

- 関数記法: `lab(L a b [/ A])`

  - : `L` は CIE 明度を表し、黒を表す `0%` と白を表す `100%` の間の {{cssxref("&lt;percentage&gt;")}} であることを指定します。

    第 2 引数 `a` は Lab 色空間の `a` 軸に沿った距離を表します。

    第 3 引数 `b` は Lab 色空間の `b` 軸に沿った距離を表します。

    `A` （アルファ）は {{cssxref("&lt;number&gt;")}} で `0` から `1` の間、または {{cssxref("&lt;percentage&gt;")}} で `1` から `100%` （完全に不透明）の間で、この色の透明度（またはアルファチャネル）を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari Technology Preview 122 release notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): `lab()` および {{cssxref("color_value/lch",'lch()')}} 色を含む
