---
title: grayscale()
slug: Web/CSS/filter-function/grayscale
l10n:
  sourceCommit: 2d5005825db30faf5826e7681ec7ee526f5458b0
---

{{CSSRef}}

**`grayscale()`** は [CSS](/ja/docs/Web/CSS) の関数は、入力画像をグレースケールに変換します。結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-grayscale.html")}}

## 構文

```css
grayscale(amount)
```

### 引数

- `amount`
  - : 入力画像がグレースケールに変換される度合いです。 {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で指定します。 `100%` の値では完全にグレースケールになり、 `0%` の値では入力が変更されないままになります。 `0%` と `100%` の間の値は、その効果に対する線形の倍数です。省略時の既定値は `1` です。{{Glossary("interpolation","補間")}}の初期値は `0` です。

## 例

### grayscale() の正しい値の例

```css
grayscale(0)     /* 効果なし */
grayscale(.7)    /* 70% グレースケール */
grayscale(100%)  /* 完全なグレースケール */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

その他の {{cssxref("filter")}} および {{cssxref("backdrop-filter")}} プロパティの値で使用できる {{cssxref("&lt;filter-function&gt;")}} 関数には、次のものがあります。

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
