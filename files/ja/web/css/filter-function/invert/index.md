---
title: invert()
slug: Web/CSS/filter-function/invert
tags:
  - CSS
  - CSS 関数
  - フィルター効果
  - 関数
  - リファレンス
translation_of: Web/CSS/filter-function/invert()
original_slug: Web/CSS/filter-function/invert()
browser-compat: css.types.filter-function.invert
---
{{CSSRef}}

**`invert()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、入力画像の色サンプルを反転します。結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-invert.html")}}

## 構文

```css
invert(amount)
```

### 引数

- `amount`
  - : 変換の度合いで、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 `100%` の値では完全に反転され、 `0%` の値では入力が変更されないままになります。 `0%` と `100%` の間の値は、効果の割合です。補間時の欠損値は `0` です。

## 例

### invert() の正しい値の例

```css
invert(0)     /* 効果なし */
invert(.6)    /* 60% 反転 */
invert(100%)  /* 完全に反転 */
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
- {{cssxref("filter-function/opacity()", "opacity()")}}
- {{cssxref("filter-function/saturate()", "saturate()")}}
- {{cssxref("filter-function/sepia()", "sepia()")}}
