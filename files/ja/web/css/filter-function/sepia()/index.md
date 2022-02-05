---
title: sepia()
slug: Web/CSS/filter-function/sepia()
tags:
  - CSS
  - CSS 関数
  - フィルター効果
  - 関数
  - リファレンス
browser-compat: css.types.filter-function.sepia
translation_of: Web/CSS/filter-function/sepia()
---
{{CSSRef}}

**`sepia()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、入力画像をセピア色に、より暖かい、より黄色/茶色がかったの表現に変換します。結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-sepia.html")}}

## 構文

```css
sepia(amount)
```

### 引数

- `amount`
  - : 変換の度合いで、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 `100%` の値では完全にセピア色になり、 `0%` の値では入力が変更されないままになります。 `0%` と `100%` の間の値は、効果の割合です。補間時の欠損値は `0` です。

## 例

### sepia() の正しい値の例

```css
sepia(0)     /* 効果なし */
sepia(.65)   /* 65% セピア色 */
sepia(100%)  /* 完全にセピア色 */
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
- {{cssxref("filter-function/saturate()", "saturate()")}}
