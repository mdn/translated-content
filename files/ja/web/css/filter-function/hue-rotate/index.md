---
title: hue-rotate()
slug: Web/CSS/filter-function/hue-rotate
---

{{CSSRef}}

**`hue-rotate()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素およびその中身のコンテンツの[色相環](https://ja.wikipedia.org/wiki/%E8%89%B2%E7%9B%B8)を回転させます。結果は {{cssxref("&lt;filter-function&gt;")}} です。

{{EmbedInteractiveExample("pages/css/function-hue-rotate.html")}}

## 構文

```css
hue-rotate(angle)
```

### 引数

- `angle`
  - : 入力サンプルの色相の相対的な変化量を、 {{cssxref("&lt;angle&gt;")}} で指定します。 `0deg` は入力を変更しないままにします。正の回転角は色相の値を増加させるのに対し、負の回転角は色相の値を減少させます。補間時の欠損値は `0` です。最小値または最大値はなく、 `hue-rotate(Ndeg)` は `N` を 360 で割った余りと等価です。

## 例

### hue-rotate の正しい値の例

```css
hue-rotate(-90deg)  /* 270 度の回転と同じ */
hue-rotate(0deg)    /* 効果なし */
hue-rotate(90deg)   /* 90 度の回転 */
hue-rotate(.5turn)  /* 180 度の回転 */
hue-rotate(405deg)  /* 45 度の回転と同じ */
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
- {{cssxref("filter-function/invert()", "invert()")}}
- {{cssxref("filter-function/opacity()", "opacity()")}}
- {{cssxref("filter-function/saturate()", "saturate()")}}
- {{cssxref("filter-function/sepia()", "sepia()")}}
