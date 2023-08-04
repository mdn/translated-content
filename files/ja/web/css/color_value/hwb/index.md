---
title: hwb()
slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}

**`hwb()`** 関数記法は、指定された色を色相、白色度、黒色度によって表現するものです。オプションのアルファ成分は、色の透明度を表します。

{{EmbedInteractiveExample("pages/css/function-hwb.html")}}

## 構文

```css
hwb(194 0% 0%) /* #00c3ff */
hwb(194 0% 0% / .5) /* #00c3ff with 50% opacity */
```

### 値

> **メモ:** HWB関数は、以前の色関数のように値を区切るのにカンマを使用しません。また、オプションのアルファ値を指定する場合は、その前にスラッシュ(`/`)を使用する必要があります。

- 関数記法: `hwb(H W B[ / A])`

  - : `H` （色相）は色相環の {{cssxref("&lt;angle&gt;")}} で、`deg`（角度）、`rad`（ラジアン）、`grad`、`turn` の単位が [CSS Color](https://drafts.csswg.org/css-color/#typedef-hue) 仕様書で定められています。単位のない {{cssxref("&lt;number&gt;")}} として書かれた場合、角度として解釈されることが [CSS Color Level 3](https://drafts.csswg.org/css-color-3/#hsl-color) 仕様書で定められています。定義上は、 赤=0deg=360deg であり、他の色は 緑=120deg、青=240deg、などのように円周上に展開されています。 `<angle>` としては、暗黙的に折り返されるので、 -120deg=240deg、480deg=120deg、-1turn=1turn、などとなります。

    `W` （白色度）は混合される白の量を、パーセント値で 0% （白色度なし）から 100% （白色度最大）で表します。

    `B` （黒色度）は混合される黒の量を、パーセント値で 0% （黒色度なし）から 100% （黒色度最大）で表します。

    `A` （アルファ）は {{cssxref("&lt;number&gt;")}} で `0` から `1` の間、または {{cssxref("&lt;percentage&gt;")}} で `1` から `100%` （完全に不透明）の間で、この色の透明度（またはアルファチャネル）を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
