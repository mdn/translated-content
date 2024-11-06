---
title: blur()
slug: Web/CSS/filter-function/blur
---

{{CSSRef}}

**`blur()`** は [CSS](/ja/docs/Web/CSS) の関数で、入力画像に[ガウシアンぼかし](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%82%A6%E3%82%B7%E3%82%A2%E3%83%B3%E3%81%BC%E3%81%8B%E3%81%97)を適用します。返値は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-blur.html")}}

## 構文

```css
blur(radius)
```

### 引数

- `radius`
  - : ぼかしの半径で、 {{cssxref("&lt;length&gt;")}} で指定します。ガウス関数の標準偏差の値を定義します。つまり、画面上のピクセルをいくつ互いに混合するかということです。すなわち、大きい値になるほどよりぼかしが入ります。 `0` の値は入力を変更しません。補間時の欠損値は `0` です。

## 例

### ピクセル数と rem を用いた blur の設定

```css
blur(0)        /* 効果なし */
blur(8px)      /* 半径 8px でぼかす */
blur(1.17rem)  /* 半径 1.17rem でぼかす */
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;filter-function&gt;")}}
- {{cssxref("filter-function/brightness()", "brightness()")}}
- {{cssxref("filter-function/contrast()", "contrast()")}}
- {{cssxref("filter-function/drop-shadow()", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale()", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate()", "hue-rotate()")}}
- {{cssxref("filter-function/invert()", "invert()")}}
- {{cssxref("filter-function/opacity()", "opacity()")}}
- {{cssxref("filter-function/saturate()", "saturate()")}}
- {{cssxref("filter-function/sepia()", "sepia()")}}
