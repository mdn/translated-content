---
title: RGB
slug: Glossary/RGB
l10n:
  sourceCommit: ceb303e16d56ac69c25ed2e72c258212714ab15a
---

{{GlossarySidebar}}

**RGB** は、_赤_、_緑_、_青_ という 3 つの基本要素（またはチャネル）を混ぜ合わせることで表現されるカラーモデルです。このモデルでは色を 3 つの数字のシーケンス (通常は 0.0〜1.0、または 0〜255) で表します。各数字は、最終的な色を決定する際の個々の原色の強度（もしくは寄与度）を示します。

1 つの RGB 値そのもののみでは意味を持ちません。 3 つの数字が{{glossary("color space","色空間")}} でどのような意味を持ち、色を定義するかを決めるのは、カラーモデルです。図示すると、3 次元の格子の中の1点、もしくは直方体が一つの色を表すことになります。それぞれの次元（または軸）は個別のチャンネルに対応します。 RGB カラーモデルは色空間の中の立体、もしくはデカルト座標系だといえます。

![RGB カラーモデル 赤, 青, 緑 の各軸からなる直方体としての表現](rgb_color_cube.png)

ウェブでは、RGB 値の基礎になる色空間は _sRGB_ (Standard RGB; 標準 RGB)であり、個々の RGB 要素は 0 と 1 の間の値を取ります。

`sRGB` は[いくつかある RGB 色空間](/ja/docs/Glossary/Color_space#rgb_color_spaces)のうちの 1 つにすぎません。 他の RGB 色空間、たとえば _Adobe RGB_ 色空間は _sRGB_ 色空間よりも広範囲の{{glossary("gamut","色域")}} を表現することができます。 _sRGB_ と _Adobe RGB_ では、座標の取り方が異なります。

色の RGB 要素を記述するのには多くの方法があります。 {{Glossary("CSS")}} でも、様々な表現方法が用意されています: 24 ビット整数の [16 進](/ja/docs/Web/CSS/Reference/Values/hex-color) 表記 (たとえば、 `#add8e6` は水色) または [`rgb()`](/ja/docs/Web/CSS/Reference/Values/color_value/rgb) 関数を使った記法で 3 つのパーセンテージ、または `0` から `255` までの値 (たとえば, `rgb(46 139 87)` は緑)を用いる方法もあります。 CSS は [`color()`](/ja/docs/Web/CSS/Reference/Values/color_value/color) 関数では `srgb`、 `srgb-linear`、 `a98-rgb`、 `prophoto-rgb` 色空間もサポートします。

RGB は`sRGB` {{glossary("color space","色空間")}} を表現できる唯一のカラーモデルではありません。 [`HSL`](/ja/docs/Web/CSS/Reference/Values/color_value/hsl) (_hue-saturation-lightness_; _色相-彩度-明度_) または [`HWB`](/ja/docs/Web/CSS/Reference/Values/color_value/hwb) (_hue-whiteness-blackness_; _色相-白色度-黒色度_) 色空間のような円筒座標系もまた、ウェブの `sRGB` 色を表現するのに使われます。

## 関連情報

- [CSS データ型: `<color>`](/ja/docs/Web/CSS/Reference/Values/color_value)
- [ColorAide: sRGB color space](https://facelessuser.github.io/coloraide/colors/srgb/)
- [RGB](https://ja.wikipedia.org/wiki/RGB) Wikipedia
- [sRGB](https://ja.wikipedia.org/wiki/SRGB) Wikipedia
- [Adobe RGB color space](https://en.wikipedia.org/wiki/Adobe_RGB_color_space) Wikipedia (英語)
