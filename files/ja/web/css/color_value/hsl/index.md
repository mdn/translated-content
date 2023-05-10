---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 6be1b954a117202d7635caeec74ebbbde984d3f3
---

{{CSSRef}}

**`hsl()`** 関数表記は、 {{glossary("RGB", "sRGB")}} 色を色相、彩度、明度の成分によって表現します。オプションのアルファ成分は、その色の透明度を表します。

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

`hsl()` による補色の定義は、{{glossary("color wheel", "色相環")}}の同じ直径に配置されるため、単一の式で計算することができます。ある色の角度を `theta` とすれば、その補色は `180deg-theta` が _彩度_ の座標となります。

## 構文

```css
/* 空白区切りの値の構文 */
hsl(hue saturation lightness)
hsl(hue saturation lightness / alpha)

/* カンマ区切りの値の構文 */
hsl(hue, saturation, lightness)
hsl(hue, saturation, lightness, alpha)
```

### 値

- `hue`

  - : {{cssxref("&lt;angle&gt;")}} で {{glossary("color wheel", "色相環")}} 上の角度を `deg`、`rad`、`grad`、`turn` のいずれかの単位で指定したものです。単位のない {{cssxref("&lt;number&gt;")}} として書かれた場合、角度として解釈されます。定義によれば、 _赤_ は `0deg` で、他の色は円周上に広がっているので、 _緑_ は `120deg` 、 _青_ は `240deg` などとなります。また、`<angle>` は周期的なものなので、暗黙のうちに `-120deg` = `240deg`, `480deg` = `120deg`, `-1turn` = `1turn` というように折り返されます。この色相環は、色に関連する角度を探すのに役立ちます。 ![原色（赤-緑-青）と二次色（黄-シアン-マゼンタ）の色相の角度を示す色相環](hue-wheel.png)

- `saturation`

  - : {{cssxref("&lt;percentage&gt;")}} であり、`100%` は色の濃さが最大で、 `0%` は完全に色がありません（無彩色）。

- `lightness`

  - : {{cssxref("&lt;percentage&gt;")}} であり、`100%` は白で、 `0%` は黒で、 `50%` は「通常」です。

- `alpha` {{optional_inline}}
  - : {{cssxref("&lt;percentage&gt;")}} または `0` から `1` までの {{cssxref("&lt;number&gt;")}} で、数値 `1` は `100%` に対応して完全に不透明であることを、 `0` は `0%` に対応し完全に透明であることを意味します。

## 例

`hsl()` 関数と [`conic-gradient()`](/ja/docs/Web/CSS/gradient/conic-gradient) はどちらも角度を扱うので、相性がよいものです。

```html hidden
<div></div>
```

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360, 100%, 50%),
    hsl(315, 100%, 50%),
    hsl(270, 100%, 50%),
    hsl(225, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(135, 100%, 50%),
    hsl(90, 100%, 50%),
    hsl(45, 100%, 50%),
    hsl(0, 100%, 50%)
  );
  clip-path: circle(closest-side);
}
```

{{EmbedLiveSample('Examples', '100%', '140px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`hsla()`](/ja/docs/Web/CSS/color_value/hsla) 関数、この関数の古い別名。
- {{cssxref("&lt;color&gt;")}} 型、あらゆる色を表す。
- [HSL Color Picker](https://hslpicker.com/)
