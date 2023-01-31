---
title: oklch()
slug: Web/CSS/color_value/oklch
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}{{SeeCompatTable}}

**`oklch()`** 関数記法は、指定された色を OKLCH 色空間で表現します。これは {{cssxref("color_value/oklab","oklab()")}} と同じ L 軸を持っていますが、極座標 C （彩度）と H （色相）を使用します。

## 構文

```css
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)
```

### 値

- 関数記法: `oklch(L C H [/ A])`

  - : `L` は知覚される明度を指定し、黒を表す `0%` と白を表す `100%` の間の {{cssxref("&lt;percentage&gt;") }} で表します。

    2 つ目の引数 `C` は彩度（おおよそ「色の量」を表します）です。その有益な最小値は 0 であり、その最大値は理論的には無制限です（しかし、実際には 0.4 を超えることはありません）。

    3 つ目の引数 `H` は色相角です。 `0deg` は正の "a" 軸に沿って（紫がかった赤に）、`90deg` は正の "b" 軸に沿って（マスタードイエローに）、 `180deg` は負の a 軸に沿って（緑がかったシアンに）、そして `270deg` は負の b 軸に沿って（スカイブルーに）点を取ります。

    `A` (アルファ) は {{cssxref("&lt;number&gt;")}} で `0` から `1` の間、または {{cssxref("&lt;percentage&gt;")}} で、数値 `1` は `100%` （完全不透明）に相当します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
- [OKLCH in CSS](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
- [Safari Technology Preview 137 release notes](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/): `oklch()` および {{cssxref("color_value/oklab",'oklab()')}} の色を含みます。
