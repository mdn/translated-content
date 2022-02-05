---
title: brightness()
slug: Web/CSS/filter-function/brightness()
tags:
  - CSS
  - CSS 関数
  - フィルター効果
  - 関数
  - リファレンス
browser-compat: css.types.filter-function.brightness
translation_of: Web/CSS/filter-function/brightness()
---
{{CSSRef}}

**`brightness()`** は [CSS](/ja/docs/Web/CSS) の関数で、入力画像に線形乗算を適用し、明るくしたり暗くしたりします。その結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

## 構文

```css
brightness(amount)
```

### 引数

- `amount`
  - : 結果の明るさで、 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 `100%` 未満の値では画像が暗くなり、 `100%` を超える値では画像が明るくなります。 `0%` の値では画像が完全に黒くなり、 `100%` の値では入力が変更されないままになります。補間時の欠損値は `1` です。

## 例

### 数値とパーセント値を用いた brightness の設定

```css
>brightness(0%)   /* 完全に黒 */
brightness(0.4)  /* 明るさ 40% */
brightness(1)    /* 効果なし */
brightness(200%) /* 明るさ 2 倍 */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/blur()", "blur()")}}
- {{cssxref("filter-function/contrast()", "contrast()")}}
- {{cssxref("filter-function/drop-shadow()", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale()", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate()", "hue-rotate()")}}
- {{cssxref("filter-function/invert()", "invert()")}}
- {{cssxref("filter-function/opacity()", "opacity()")}}
- {{cssxref("filter-function/saturate()", "saturate()")}}
- {{cssxref("filter-function/sepia()", "sepia()")}}
