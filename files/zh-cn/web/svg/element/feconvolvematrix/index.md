---
title: feConvolveMatrix
slug: Web/SVG/Element/feConvolveMatrix
---

{{SVGRef}}

`feConvolveMatrix`元素应用了一个矩阵卷积滤镜效果。一个卷积在输入图像中把像素与邻近像素组合起来制作出结果图像。通过卷积可以实现各种成像操作，包括模糊、边缘检测、锐化、压花和斜角。

一个矩阵卷积是基于一个 nxm 矩阵 (卷积内核)，用来描述如何将给定的输入图像的像素值与相邻像素合并为一个输出像素值。每个输出像素是由应用的内核矩阵来处理相应的源像素和它的相邻像素。基本的卷积公式是对给定的每个像素进行如下应用：

COLORX,Y = (
SUM I=0 to \[[orderY](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementOrderAttribute)-1] {
SUM J=0 to \[[orderX](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementOrderAttribute)-1] {
SOURCE X-[targetX](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementTargetXAttribute)+J, Y-[targetY](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementTargetYAttribute)+I \* [kernelMatrix](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementKernelMatrixAttribute)[orderX](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementOrderAttribute)-J-1, [orderY](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementOrderAttribute)-I-1
}
}
) / [divisor](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementDivisorAttribute) + [bias](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementBiasAttribute) \* ALPHAX,Y

其中“orderX”和"orderY"表示[‘order’](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementOrderAttribute) 的 x 和 y 值，"targetX"表示[‘targetX’](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementTargetXAttribute) 属性的值，"targetY"表示[‘targetY’](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementTargetYAttribute) 的值，"kernelMatrix" 表示 [‘kernelMatrix’](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementKernelMatrixAttribute)属性的值，"divisor"表示 [‘divisor’](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementDivisorAttribute)属性的值， "bias" 表示 [‘bias’](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementBiasAttribute)属性的值。

注意上述公式中内核矩阵的值是被旋转 180 度后被使用，这是为了符合许多计算机图形学教科书中的理论。

这里举例说明，假设你有一个 5x5 像素的输入图像，其中一个颜色通道的色值如下：

```plain
  0  20  40 235 235
  100 120 140 235 235
  200 220 240 235 235
  225 225 255 255 255
  225 225 255 255 255
```

你定义一个 3\*3 卷积核如下：

```plain
 1 2 3
  4 5 6
  7 8 9
```

让我们专注于图像的第二行和第二列的颜色值（源像素值为 120）。最简单的情况（输入图像的像素网格与内核像素网格完全对齐）,[‘divisor’](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementDivisorAttribute), [‘targetX’](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementTargetXAttribute) 和[‘targetY’](http://link.zhihu.com/?target=https%3A//www.w3.org/TR/SVG/filters.html%23feConvolveMatrixElementTargetYAttribute)都是默认值，那么输出色值将是：

```plain
(9*  0 + 8* 20 + 7* 40 +
6*100 + 5*120 + 4*140 +
3*200 + 2*220 + 1*240) / (9+8+7+6+5+4+3+2+1)
```

## 用法

{{svginfo}}

## 示例

### SVG

```plain
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="emboss">
      <feConvolveMatrix
          kernelMatrix="3 0 0
                        0 0 0
                        0 0 -3"/>
    </filter>
  </defs>

  <image xlink:href="/files/12668/MDN.svg" x="0" y="0"
      height="200" width="200" style="filter:url(#emboss);" />
</svg>
```

## 属性

### 全局属性

- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [外观属性](/zh-CN/SVG/Attribute#Presentation) »
- [滤镜属性](/zh-CN/SVG/Attribute#Filter) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}

### 专有属性

- {{ SVGAttr("in") }}
- {{ SVGAttr("order") }}
- {{ SVGAttr("kernelMatrix") }}
- {{ SVGAttr("divisor") }}
- {{ SVGAttr("bias") }}
- {{ SVGAttr("targetX") }}
- {{ SVGAttr("targetY") }}
- {{ SVGAttr("edgeMode") }}
- {{ SVGAttr("kernelUnitLength") }}
- {{ SVGAttr("preserveAlpha") }}

## DOM 接口

该元素实现了[`SVGFEConvolveMatrixElement`](/zh-CN/DOM/SVGFEConvolveMatrixElement)接口。

## 参见

- {{ SVGElement("filter") }}
- {{ SVGElement("animate") }}
- {{ SVGElement("set") }}
- {{ SVGElement("feBlend") }}
- {{ SVGElement("feColorMatrix") }}
- {{ SVGElement("feComponentTransfer") }}
- {{ SVGElement("feComposite") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("feSpecularLighting") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- [SVG 教程：滤镜效果](/zh-CN/SVG/Tutorial/Filter_effects)
