---
title: lch()
slug: Web/CSS/color_value/lch
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}{{SeeCompatTable}}

**`lch()`** 関数記法は、指定された色を LCH 色空間で表現するものです。これは {{cssxref("color_value/lab", "lab()")}} と同じ L 軸を持っていますが、極座標の C （彩度）と H （色相）を使用します。

## 構文

```css
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);
```

### 値

- 関数記法: `lch(L C H [/ A])`

  - : `L` は CIE 明度を表し、黒を表す `0%` と白を表す `100%` の間の {{cssxref("&lt;percentage&gt;")}} であることを指定します。

    2 つ目の引数 `C` は彩度（おおよそ「色の量」を表します）です。その有益な最小値は 0 であり、最大値は理論的には無制限です（ただし、実際には 230 を超えることはありません）。

    3 つ目の引数 `H` は色相角です。 `0deg` は正の a 軸に沿って（紫がかった赤に）、 `90deg` は正の b 軸に沿って（マスタードイエローに）、`180deg` は負の a 軸に沿って（緑がかったシアンに）、そして `270deg` は負の b 軸に沿って（スカイブルーに）点を取ります。

    `A`（アルファ）は{{cssxref("&lt;number&gt;")}} で `0` から `1` の間、または {{cssxref("&lt;percentage&gt;")}} で `1` から `100%` （完全に不透明）の間で、この色の透明度（またはアルファチャネル）を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [LCH colors in CSS: what, why, and how?](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/)
- [Safari Technology Preview 122 release notes](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/): `lch()` および {{cssxref("color_value/lab",'lab()')}} の色を含みます。
