---
title: <feConvolveMatrix>
slug: Web/SVG/Reference/Element/feConvolveMatrix
l10n:
  sourceCommit: 62476ac3c21417ad3a07e12c9f8eaf92cea8311d
---

**`<feConvolveMatrix>`** は [SVG](/ja/docs/Web/SVG) のフィルタープリミティブで、行列畳み込みフィルター効果を適用します。畳み込みとは、入力画像のピクセルと隣接するピクセルを組み合わせて、結果の画像を生成する処理です。畳み込みを利用することで、ぼかし、エッジ検出、シャープ化、エンボス加工、ベベル加工など、さまざまな画像操作を実現できます。

行列畳み込みは、n × m の行列（畳み込みカーネル）に基づいており、入力画像内の指定されたピクセル値が、その近傍のピクセル値とどのように組み合わされて結果のピクセル値が生成されるかを記述するものです。各結果ピクセルは、対応するソースピクセルとその近傍のピクセルにカーネル行列を適用することで決定されます。指定されたピクセルそれぞれの色値に適用される基本的な畳み込みの式は、次のとおりです。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><msub><mi>color</mi><mrow><mi>X</mi><mi>,</mi><mi>Y</mi></mrow></msub><mo stretchy="false">=</mo><mrow><mfrac><mrow><mrow><mrow><munderover><mo stretchy="false">∑</mo><mrow><mrow><mi>i</mi><mo stretchy="false">=</mo><mn>0</mn></mrow></mrow><mrow><mrow><mi>orderY</mi><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow></munderover><mrow><munderover><mo stretchy="false">∑</mo><mrow><mrow><mi>j</mi><mo stretchy="false">=</mo><mn>0</mn></mrow></mrow><mrow><mrow><mi>orderX</mi><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow></munderover><msub><mi>source</mi><mrow><mrow><mrow><mi>x</mi><mo stretchy="false">−</mo><mi>targetX</mi></mrow><mo stretchy="false">+</mo><mi>j</mi></mrow><mi>,</mi><mrow><mrow><mi>y</mi><mo stretchy="false">−</mo><mi mathvariant="italic">targetY</mi></mrow><mo stretchy="false">+</mo><mi>i</mi></mrow></mrow></msub></mrow></mrow><mo stretchy="false">⋅</mo><msub><mi>kernelMatrix</mi><mrow><mrow><mrow><mi>orderX</mi><mo stretchy="false">−</mo><mi>j</mi></mrow><mo stretchy="false">−</mo><mn>1,</mn></mrow><mrow><mrow><mi>orderY</mi><mo stretchy="false">−</mo><mi>i</mi></mrow><mo stretchy="false">−</mo><mn>1</mn></mrow></mrow></msub></mrow></mrow><mrow><mi>divisor</mi></mrow></mfrac><mo stretchy="false">+</mo><mrow><mi>bias</mi><mo stretchy="false">⋅</mo><msub><mi>alpha</mi><mrow><mi>x</mi><mi>,</mi><mi>y</mi></mrow></msub></mrow></mrow></mrow></mrow><annotation encoding="TeX">\left(color\right)_{X , Y} = \frac{\sum_{i = 0}^{orderY - 1} \sum_{j = 0}^{orderX - 1} \left(source\right)_{x - targetX + j , y - \mathit{targetY} + i} \cdot \left(kernelMatrix\right)_{orderX - j - 1, orderY - i - 1}}{divisor} + bias \cdot \left(alpha\right)_{x , y}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

ここで、"orderX" および "orderY" は、[`order`](/ja/docs/Web/SVG/Reference/Attribute/order) 属性の X および Y 値を表し、それ以外にも [`targetX`](/ja/docs/Web/SVG/Reference/Attribute/targetX)、 [`targetY`](/ja/docs/Web/SVG/Reference/Attribute/targetY)、[`kernelMatrix`](/ja/docs/Web/SVG/Reference/Attribute/kernelMatrix)、 [`divisor`](/ja/docs/Web/SVG/Reference/Attribute/divisor)、および [`bias`](/ja/docs/Web/SVG/Reference/Attribute/bias) 属性を指します。

以上の上の式において、多くのコンピュータグラフィックの教科書で説明されている畳み込みの理論と一致させるため、カーネル行列の値は、ソース画像および出力先画像に対してカーネル行列が 180 度回転させた状態で適用されることに注意してください。

例を挙げると、5 ピクセル× 5 ピクセルというサイズの入力画像があり、そのうちのある色チャンネルの色値が以下の通りであるとします。

```plain
0    20  40 235 235
100 120 140 235 235
200 220 240 235 235
225 225 255 255 255
225 225 255 255 255
```

そして、3 × 3 の畳み込みカーネルを次のように定義します。

```plain
1 2 3
4 5 6
7 8 9
```

画像の 2 行目 2 列目の色値に注目してみましょう（ソースピクセルの値は 120 です）。最も単純な場合（入力画像のピクセルグリッドがカーネルのピクセルグリッドと完全に一致している場合）を仮定し、属性 [`divisor`](/ja/docs/Web/SVG/Reference/Attribute/divisor)、[`targetX`](/ja/docs/Web/SVG/Reference/Attribute/targetX)、[`targetY`](/ja/docs/Web/SVG/Reference/Attribute/targetY) についてデフォルト値を使用すると、結果として得られる色値は次のようになります。

```plain
(9*0   + 8*20  + 7*40 +
 6*100 + 5*120 + 4*140 +
 3*200 + 2*220 + 1*240) / (9+8+7+6+5+4+3+2+1)
```

他のフィルタープリミティブと同様に、デフォルトで `linearRGB` {{glossary("color space","色空間")}} の色成分を処理します。{{svgattr("color-interpolation-filters")}} を使用することで、代わりに `sRGB` を使用することもできます。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("in")}}
- {{SVGAttr("order")}}
- {{SVGAttr("kernelMatrix")}}
- {{SVGAttr("divisor")}}
- {{SVGAttr("bias")}}
- {{SVGAttr("targetX")}}
- {{SVGAttr("targetY")}}
- {{SVGAttr("edgeMode")}}
- {{SVGAttr("kernelUnitLength")}}
- {{SVGAttr("preserveAlpha")}}
- [フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）): {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}}, {{SVGAttr("result")}}

## DOM インターフェイス

この要素は {{domxref("SVGFEConvolveMatrixElement")}} インターフェイスを実装しています。

## 例

### SVG

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="emboss">
      <feConvolveMatrix
        kernelMatrix="3 0 0
                      0 0 0
                      0 0 -3" />
    </filter>
  </defs>

  <image
    href="mdn.svg"
    x="0"
    y="0"
    height="200"
    width="200"
    filter="url(#emboss)" />
</svg>
```

### 結果

{{EmbedLiveSample("Example", 200, 210)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [SVG フィルタープリミティブ属性](/ja/docs/Web/SVG/Reference/Attribute#フィルタープリミティブ属性（プレゼンテーション属性）)
- {{SVGElement("filter")}}
- {{SVGElement("animate")}}
- {{SVGElement("set")}}
- {{SVGElement("feBlend")}}
- {{SVGElement("feColorMatrix")}}
- {{SVGElement("feComponentTransfer")}}
- {{SVGElement("feComposite")}}
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
- [SVG チュートリアル: フィルター効果](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
