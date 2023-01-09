---
title: rgba()
slug: conflicting/Web/CSS/color_value/rgb
original_slug: Web/CSS/color_value/rgba
---

{{CSSRef}}

**`rgba()`** 関数記法は、赤、緑、青の成分によって色を表現します。オプションのアルファ成分は、色の透明度を表します。

{{EmbedInteractiveExample("pages/css/function-rgba.html")}}

> **メモ:** CSS Colors Level 4 は、カンマ区切りに加えて空白区切りを許可しています。

## 構文

```css
rgba(255, 255, 255) /* 白 */
rgba(255, 255, 255, 0.5) /* 透明度 50% の白 */
rgba(255 255 255 / 0.5); /* CSS Colors 4 の空白区切りの値 */
rgba(255 255 255 / 50%); /* CSS Colors 4 の空白区切りの値、パーセント値 */
```

### 値

- 関数記法: `rgba(R, G, B[, A])`
  - : `R`（赤）、`G`（緑）、`B`（青）は {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で、数値 `255` は `100%` に相当します。`A`（アルファ）は `0`〜`1` の {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で、数値 `1` は `100%` （完全に不透明）に相当します。
- 関数記法: `rgba(R G B[ / A])`
  - : CSS Colors Level 4 は関数記法に空白区切りの値の対応を追加しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
