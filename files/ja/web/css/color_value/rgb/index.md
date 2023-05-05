---
title: rgb()
slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}

**`rgb()`** 関数記法は、赤、緑、青の成分によって色を表現します。オプションのアルファ成分は、色の透明度を表します。

{{EmbedInteractiveExample("pages/css/function-rgb.html")}}

> **メモ:** CSS Colors Level 4 では、 `rgb()` にいくつかの変更が加えられました。標準の {{cssxref("color_value/rgba","rgba()")}} が `rgb()` の別名として受け入れられているブラウザーでは、同じ引数を受け入れ、同じように動作させます。
>
> レベル 4 の仕様では、カンマ区切りの他に空白区切りの値も認められています。

## 構文

```css
rgb(255, 255, 255) /* 白 */
rgb(255, 255, 255,.5) /* 透明度 50% の白 */
rgb(255 255 255) /* CSS Colors 4 の空白区切りの値 */
rgb(255 255 255 / .5); /* 透明度 50% の白、 CSS Colors 4 の空白区切りの値 */
```

### 値

- 関数記法: `rgba(R, G, B[, A])`
  - : `R`（赤）、`G`（緑）、`B`（青）は {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で、数値 `255` は `100%` に相当します。`A`（アルファ）は `0`〜`1` の {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で、数値 `1` は `100%` （完全に不透明）に相当します。
- 関数記法: `rgba(R G B[ / A])`
  - : CSS Colors Level 4 は関数記法に空白区切りの値の対応を追加しています。

## ブラウザーの互換性

{{Compat}}
