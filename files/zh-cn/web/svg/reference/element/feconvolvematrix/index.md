---
title: <feConvolveMatrix>
slug: Web/SVG/Reference/Element/feConvolveMatrix
l10n:
  sourceCommit: 1cec868de12e098b0c24d61fd91506887d8d5773
---

**`<feConvolveMatrix>`** [SVG](/zh-CN/docs/Web/SVG) 滤镜原语应用矩阵卷积的滤镜效果。卷积是将输入图像中的像素与相邻像素组合以生成结果图像。通过卷积可以实现各种各样的图像操作，包括模糊、边缘检测、锐化、浮雕和斜角。

矩阵卷积基于 n\*m 矩阵（卷积核），其描述了如何将输入图像中的给定像素值与其相邻像素值组合在一起以生成结果像素值。每个结果像素是通过将卷积核矩阵应用于相应的源像素及其相邻像素来确定的。对于给定像素的每个颜色值，应用的基本卷积公式如下：

<math display="block"><semantics><mrow><mi>C</mi><mi>O</mi><mi>L</mi><mi>O</mi><msub><mi>R</mi><mrow><mi>X</mi><mo separator="true">,</mo><mi>Y</mi></mrow></msub><mo>=</mo><mfrac><mrow><msubsup><mo movablelimits="false">∑</mo><mrow><mi>I</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>o</mi><mi>r</mi><mi>d</mi><mi>e</mi><mi>r</mi><mi>X</mi><mo>−</mo><mn>1</mn></mrow></msubsup><msubsup><mo movablelimits="false">∑</mo><mrow><mi>J</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>o</mi><mi>r</mi><mi>d</mi><mi>e</mi><mi>r</mi><mi>X</mi><mo>−</mo><mn>1</mn></mrow></msubsup><mrow><mo fence="true" form="prefix">(</mo><mi>S</mi><mi>O</mi><mi>U</mi><mi>R</mi><mi>C</mi><msub><mi>E</mi><mrow><mi>X</mi><mo>−</mo><mi>t</mi><mi>a</mi><mi>r</mi><mi>g</mi><mi>e</mi><mi>t</mi><mi>X</mi><mo>+</mo><mi>J</mi><mo separator="true">,</mo><mi>Y</mi><mo>−</mo><mi>t</mi><mi>a</mi><mi>r</mi><mi>g</mi><mi>e</mi><mi>t</mi><mi>Y</mi><mo>+</mo><mi>I</mi></mrow></msub><mo>\*</mo><mi>k</mi><mi>e</mi><mi>r</mi><mi>n</mi><mi>e</mi><mi>l</mi><mi>M</mi><mi>a</mi><mi>t</mi><mi>r</mi><mi>i</mi><msub><mi>x</mi><mrow><mi>o</mi><mi>r</mi><mi>d</mi><mi>e</mi><mi>r</mi><mi>X</mi><mo>−</mo><mi>J</mi><mo>−</mo><mn>1</mn><mo separator="true">,</mo><mi>o</mi><mi>r</mi><mi>d</mi><mi>e</mi><mi>r</mi><mi>Y</mi><mo>−</mo><mi>I</mi><mo>−</mo><mn>1</mn></mrow></msub><mo fence="true" form="postfix">)</mo></mrow></mrow><mrow><mi>d</mi><mi>i</mi><mi>v</mi><mi>s</mi><mi>o</mi><mi>r</mi><mo>+</mo><mi>b</mi><mi>i</mi><mi>a</mi><mi>s</mi><mo>\*</mo><mi>A</mi><mi>L</mi><mi>P</mi><mi>H</mi><msub><mi>A</mi><mrow><mi>X</mi><mo separator="true">,</mo><mi>Y</mi></mrow></msub></mrow></mfrac></mrow><annotation encoding="TeX">COLOR\_{X,Y} = \frac{ \sum\_{I=0}^{orderX-1} \sum\_{J=0}^{orderX-1}{\left( SOURCE\_{X-targetX+J, Y-targetY+I} \* kernelMatrix\_{orderX-J-1, orderY-I-1} \right)}}{divsor + bias \* ALPHA\_{X, Y}}</annotation></semantics></math>

其中“orderX”和“orderY”表示 [`order`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementOrderAttribute) 的 X 和 Y 值，“targetX”表示 [`targetX`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetXAttribute) 属性的值，“targetY”表示 [`targetY`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetYAttribute) 的值，“kernelMatrix”表示 [`kernelMatrix`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementKernelMatrixAttribute) 属性的值，“divisor”表示 [`divisor`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementDivisorAttribute) 属性的值，“bias”表示 [`bias`](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementBiasAttribute) 属性的值。

注意上述公式中，卷积矩阵是在相对于源和目标图像旋转 180 度的情况下应用的，以便与许多计算机图形学教科书中描述的卷积理论相匹配。

这里举例说明，假设你有一个 5x5 像素的输入图像，其中一个颜色通道的色值如下：

```plain
0    20  40 235 235
100 120 140 235 235
200 220 240 235 235
225 225 255 255 255
225 225 255 255 255
```

然后定义一个如下的 3\*3 卷积核：

```plain
1 2 3
4 5 6
7 8 9
```

让我们专注于图像的第二行和第二列的颜色值（源像素值为 120）。假定最简单的情况（输入图像的像素网格与卷积核的像素网格完全对齐），且“[divisor](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementDivisorAttribute)”、“[targetX](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetXAttribute)”和“[targetY](https://www.w3.org/TR/SVG11/filters.html#feConvolveMatrixElementTargetYAttribute)”都具有默认值，那么结果的颜色值会是：

```plain
(9*0   + 8*20  + 7*40 +
 6*100 + 5*120 + 4*140 +
 3*200 + 2*220 + 1*240) / (9+8+7+6+5+4+3+2+1)
```

## 使用上下文

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

## DOM 接口

该元素实现了 {{domxref("SVGFEConvolveMatrixElement")}} 接口。

## 示例

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
    style="filter:url(#emboss);" />
</svg>
```

### 结果

{{EmbedLiveSample("示例", 200, 210)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [SVG 滤镜原语属性](/zh-CN/docs/Web/SVG/Reference/Attribute#滤镜原语属性)
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
- [SVG 教程：滤镜效果](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
