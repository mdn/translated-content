---
title: <feColorMatrix>
slug: Web/SVG/Element/feColorMatrix
---

{{SVGRef}}

**`<feColorMatrix>`** は SVG のフィルター要素で、変換行列に基づいて色を変化させます。すべてのピクセルのカラー値 `[R,G,B,A]` は 5 x 5 の行列で[行列乗算](https://en.wikipedia.org/wiki/Matrix_multiplication)され、新しい色 `[R',G',B',A']` を生成します。

> **メモ:** 基本的な記号 _**`'`**_ は、数学で変換された結果を表すために使用されます。

```
| R' |     | r1 r2 r3 r4 r5 |   | R |
| G' |     | g1 g2 g3 g4 g5 |   | G |
| B' |  =  | b1 b2 b3 b4 b5 | * | B |
| A' |     | a1 a2 a3 a4 a5 |   | A |
| 1  |     | 0  0  0  0  1 |   | 1 |
```

簡略化すると、新しいピクセルの各色のチャンネルがどのように計算されるかを以下に示します。最後の行は値が一定なので無視されます。

```
R' = r1*R + r2*G + r3*B + r4*A + r5
G' = g1*R + g2*G + g3*B + g4*A + g5
B' = b1*R + b2*G + b3*B + b4*A + b5
A' = a1*R + a2*G + a3*B + a4*A + a5
```

新しいピクセルの赤の量、すなわち `R'` に注目すると下記のようになります。

これは以下の値の合計です。

- 旧ピクセルの赤成分 `R` の `r1` 倍
- 旧ピクセルの緑成分 `G` の `r2` 倍
- 旧ピクセルの青成分 `B` の `r3` 倍
- 旧ピクセルのアルファ成分 `A` の `r4` 倍
- 加えて加算値の `r5`

これらの指定された数量は任意の実数を取ることができますが、最終的な **R'** は 0 ～ 1 の間に丸められます。 **G'**, **B'**, **A'** についても同様です。

```
R'      =      r1 * R      +        r2 * G      +       r3 * B      +       r4 * A       +       r5
New red = [ r1 * old red ] + [ r2 * old green ] + [ r3 * old Blue ] + [ r4 * old Alpha ] + [ shift of r5 ]
```

例えば、真っ黒な画像をより赤くしたい場合は、 `r5` を正の実数 _x_ とすれば、新しい画像の各画素の赤さを _x_ だけ増加させます。

**単位行列** は次のようになります。

```
     R G B A W
R' | 1 0 0 0 0 |
G' | 0 1 0 0 0 |
B' | 0 0 1 0 0 |
A' | 0 0 0 1 0 |
```

この中では、新しい値はすべて古い値のちょうど 1 倍の値であり、それ以外は何も加えられていません。ここから行列の操作を始めることをお勧めします。

## 使用場面

{{svginfo}}

## 属性

### グローバル属性

- [コア属性](/ja/docs/Web/SVG/Attribute#Core_attributes)
- [プレゼンテーション属性](/ja/docs/Web/SVG/Attribute#Presentation_attributes)
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Attribute#Filter_primitive_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}

### 固有の属性

- {{SVGAttr("in")}}
- {{SVGAttr("type")}}
- {{SVGAttr("values")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEColorMatrixElement")}} インターフェイスを実装しています。

## 例

### SVG

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 150 500"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- ref -->
  <defs>
    <g id="circles">
      <circle cx="30" cy="30" r="20" fill="blue" fill-opacity="0.5" />
      <circle cx="20" cy="50" r="20" fill="green" fill-opacity="0.5" />
      <circle cx="40" cy="50" r="20" fill="red" fill-opacity="0.5" />
    </g>
  </defs>
  <use href="#circles" />
  <text x="70" y="50">Reference</text>

  <!-- identity matrix -->
  <filter id="colorMeTheSame">
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 1 0" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 70)"
    filter="url(#colorMeTheSame)" />
  <text x="70" y="120">Identity matrix</text>

  <!-- Combine RGB into green matrix -->
  <filter id="colorMeGreen">
    <feColorMatrix
      in="SourceGraphic"
      type="matrix"
      values="0 0 0 0 0
                1 1 1 1 0
                0 0 0 0 0
                0 0 0 1 0" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 140)"
    filter="url(#colorMeGreen)" />
  <text x="70" y="190">rgbToGreen</text>

  <!-- saturate -->
  <filter id="colorMeSaturate">
    <feColorMatrix in="SourceGraphic" type="saturate" values="0.2" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 210)"
    filter="url(#colorMeSaturate)" />
  <text x="70" y="260">saturate</text>

  <!-- hueRotate -->
  <filter id="colorMeHueRotate">
    <feColorMatrix in="SourceGraphic" type="hueRotate" values="180" />
  </filter>
  <use
    href="#circles"
    transform="translate(0 280)"
    filter="url(#colorMeHueRotate)" />
  <text x="70" y="330">hueRotate</text>

  <!-- luminanceToAlpha -->
  <filter id="colorMeLTA">
    <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" />
  </filter>
  <use href="#circles" transform="translate(0 350)" filter="url(#colorMeLTA)" />
  <text x="70" y="400">luminanceToAlpha</text>
</svg>
```

### 結果

{{EmbedLiveSample("Example", "100%", 700, "test.png")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("svg.elements.feColorMatrix")}}

## 関連情報

- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feConvolveMatrix")}}
- {{SVGElement("feDiffuseLighting")}}
- {{SVGElement("feDisplacementMap")}}
- {{SVGElement("feFlood")}}
- {{SVGElement("feGaussianBlur")}}
- {{SVGElement("feImage")}}
- {{SVGElement("feMerge")}}
- {{SVGElement("feMorphology")}}
- {{SVGElement("feOffset")}}
- {{SVGElement("feSpecularLighting")}}
- {{SVGElement("feTile")}}
- {{SVGElement("feTurbulence")}}
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorial/Filter_effects)
