---
title: palette-mix()
slug: Web/CSS/Reference/Properties/font-palette/palette-mix
original_slug: Web/CSS/font-palette/palette-mix
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{SeeCompatTable}}

**`palette-mix()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、新しい {{cssxref("font-palette")}} 値を、指定したパーセント値と色混合方式によって 2 個の `font-palette` 値を混ぜ合わせることによって生成することができます。

## 構文

```css
/* フォント定義のパレットを混合 */
font-palette: palette-mix(in lch, normal, dark)

/* 作者定義のパレットを混合 */
font-palette: palette-mix(in lch, --blues, --yellows)

/* 混合するそれぞれのパレットの様々なパーセント値 */
font-palette: palette-mix(in lch, --blues 50%, --yellows 50%)
font-palette: palette-mix(in lch, --blues 70%, --yellows 30%)

/* さまざまな色混合方式 */
font-palette: palette-mix(in srgb, --blues, --yellows)
font-palette: palette-mix(in hsl, --blues, --yellows)
font-palette: palette-mix(in hsl shorter hue, --blues, --yellows)

```

### 値

関数記法:

```plain
palette-mix(method, palette1 [p1], palette2 [p2])
```

- `method`
  - : 混合する伊六区間を指定する {{cssxref("&lt;color-interpolation-method&gt;")}} です。
- `palette1`, `palette2`
  - : 互いに混合する {{cssxref("font-palette")}} 値です。これは任意の `font-palette` 値を取ることができます。 `palette-mix()` 関数、`normal`、`dark`、`light` などです。
- `p1`, `p2` {{optional_inline}}
  - : {{cssxref("&lt;percentage&gt;")}} 値で、 `0%` ～ `100%` の間で混合するそれぞれのパレットの量を指定します。次のように一般化されます。
    - `p1` と `p2` の両方が省略された場合は、 `p1 = p2 = 50%` となります。
    - `p1` が省略された場合は、 `p1 = 100% - p2` となります。
    - `p2` が省略された場合は、 `p2 = 100% - p1` となります。
    - `p1 = p2 = 0%` であった場合は、この関数は無効になります。
    - `p1 + p2 ≠ 100%` であった場合は、 `p1' = p1 / (p1 + p2)` および `p2' = p2 / (p1 + p2)` となります。ここで、 `p1'` と `p2'` は正規化された結果です。

## 例

### `palette-mix()` を使用して 2 つのパレットを混合

この例では、 `palette-mix()` 関数を使用して、新しいパレットを作成するために他の 2 つのパレットを混合する方法を示します。

#### HTML

HTML には、フォント情報を適用するための 3 つの段落があります。

```html
<p class="yellowPalette">Yellow palette</p>
<p class="bluePalette">Blue palette</p>
<p class="mixedPalette">Mixed palette</p>
```

#### CSS

CSS では、 Google Fonts からカラーフォントをインポートし、 {{cssxref("@font-palette-values")}} アットルールを使って 2 つのカスタムフォントパレット値を定義します。次に、段落に 3 つの異なる `font-palette` 値（`--yellow`、`--blue`、そして `palette-mix()` を使って青色と黄色のパレットを混合して作成した新しい緑色のパレット）を適用します。

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

@font-palette-values --blueNabla {
  font-family: Nabla;
  base-palette: 2; /* これは Nabla の青いパレット */
}

@font-palette-values --yellowNabla {
  font-family: Nabla;
  base-palette: 7; /* これは Nabla の黄色いパレット */
}

p {
  font-family: "Nabla";
  font-size: 4rem;
  text-align: center;
  margin: 0;
}

.yellowPalette {
  font-palette: --yellowNabla;
}

.bluePalette {
  font-palette: --blueNabla;
}

.mixedPalette {
  font-palette: palette-mix(in lch, --blueNabla 55%, --yellowNabla 45%);
}
```

#### 結果

出力結果は次のようになります。

{{EmbedLiveSample("Using `palette-mix()` to blend two palettes", "100%", 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("font-palette")}}
- {{cssxref("@font-palette-values", "@font-palette-values")}}
- {{cssxref("color_value/color-mix", "color-mix()")}}
- [CSS 色値](/ja/docs/Web/CSS/CSS_colors/Color_values)ガイド
- {{glossary("Color space","色空間")}}
