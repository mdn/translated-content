---
title: saturate()
slug: Web/CSS/filter-function/saturate
---

{{CSSRef}}

**`saturate()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、入力画像の彩度を上げたり下げたりします。結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-saturate.html")}}

## 構文

```css
saturate(amount)
```

### 引数

- `amount`
  - : 変換の量で、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 `100%` 未満の値では彩度を下げ、 `100%` を超える値では彩度を上げます。 `0%` の値では画像が完全に彩度がなくなり、 `100%` の値では入力が変更されないままになります。補間時の欠損値は `1` です。

## 例

### saturate() の正しい値の例

```css
saturate(0)     /* 彩度なし */
saturate(.4)    /* 彩度 40% */
saturate(100%)  /* 効果なし */
saturate(200%)  /* 2 倍の彩度 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/blur()", "blur()")}}
- {{cssxref("filter-function/brightness()", "brightness()")}}
- {{cssxref("filter-function/contrast()", "contrast()")}}
- {{cssxref("filter-function/drop-shadow()", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale()", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate()", "hue-rotate()")}}
- {{cssxref("filter-function/invert()", "invert()")}}
- {{cssxref("filter-function/opacity()", "opacity()")}}
- {{cssxref("filter-function/sepia()", "sepia()")}}
