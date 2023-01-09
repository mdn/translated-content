---
title: hsla()
slug: conflicting/Web/CSS/color_value/hsl
original_slug: Web/CSS/color_value/hsla
---

{{CSSRef}}

**`hsla()`** 関数記法は、指定された色を色相、彩度、明度成分によって表現します。オプションのアルファ成分は、その色の透明度を表します。

{{EmbedInteractiveExample("pages/css/function-hsla.html")}}

> **メモ:** レベル 4 の仕様では、カンマ区切りの他に空白区切りの値も認められています。

## 構文

```css
hsla(100, 100%, 50%, 1) /* #5f0 */
hsla(235, 100%, 50%, .5) /* #0015ff で 50% の透過度 */
hsla(235 100% 50% / 1); /* CSS Colors 4 の空白区切りの値 */
```

### 値

- 関数記法: `hsla(H, S, L[, A])`

  - : `H` （色相）は色相環の {{cssxref("&lt;angle&gt;")}} で、`deg`（角度）、`rad`（ラジアン）、`grad`、`turn` の単位が [CSS Color](https://drafts.csswg.org/css-color/#typedef-hue) 仕様書で定められています。単位のない {{cssxref("&lt;number&gt;")}} として書かれた場合、角度として解釈されることが [CSS Color Level 3](https://drafts.csswg.org/css-color-3/#hsl-color) 仕様書で定められています。定義上は、 赤=0deg=360deg であり、他の色は 緑=120deg、青=240deg、などのように円周上に展開されています。 `<angle>` としては、暗黙的に折り返されるので、 -120deg=240deg、480deg=120deg、-1turn=1turn、などとなります。

    `S` （彩度）および `L` （明度）はパーセント値です。 `100%` の**彩度**は色の濃さが最大で、 `0%` は完全に色がありません（無彩色）。 `100%` の**明度**は白で、 `0%` の明度は黒で、 `50%` の明度は「通常」です。

    `A` （アルファ）は {{cssxref("&lt;number&gt;")}} で `0` から `1` の間、または {{cssxref("&lt;percentage&gt;")}} で `1` から `100%` （完全に不透明）の間で、この色の透明度（またはアルファチャネル）を表します。

- 関数記法: `hsla(H S L[ / A])`
  - : CSS Colors Level 4 では、関数表記で値の空白区切りの対応が追加されました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
