---
title: 基础变形
slug: Web/SVG/Tutorial/Basic_Transformations
---

{{SVGRef}}

{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}

现在我们准备好开始扭曲我们美丽的图像了。但是首先，让我们正式地介绍{{SVGElement("g")}}元素。利用这个助手，你可以把属性赋给一整个元素集合。实际上，这是它唯一的目的。一个示例：

```xml
<g fill="red">
  <rect x="0" y="0" width="10" height="10" />
  <rect x="20" y="0" width="10" height="10" />
</g>
```

输出两个红色矩形。

所有接下来的变形都会用一个元素的`transform`属性总结。变形可以连缀，只要把它们连接起来就行，用空格隔开。

## 平移

你能把元素移动一段距离，甚至你可以根据相应的属性定位它。`translate()`变形方法专门效力于这个目的。

```xml
<rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
```

该示例将呈现一个矩形，移到点 (30,40)，而不是出现在点 (0,0)。

如果没有指定第二个值，它默认被赋值*0*。

## 旋转

旋转一个元素是相当常见的任务。使用`rotate() 变形就可以了：`

```xml
<rect x="20" y="20" width="20" height="20" transform="rotate(45)" />
```

该示例显示了一个方形，旋转了 45 度。`rotate()`的值是用角度数指定的。

## 斜切

利用一个矩形制作一个斜菱形。可用`skewX()`变形和`skewY()`变形。每个需要一角度以确定元素斜切到多远。

## 缩放

`scale() 变形`改变了元素的尺寸。它需要两个数字，作为比率计算如何缩放。0.5 表示收缩到 50%。_如果第二个数字被忽略了，它默认等于第一个值。_

## 用 `matrix()` 实现复杂变形

所有上面的变形可以表达为一个 2x3 的变形矩阵。组合一些变形，可以直接用 `matrix(a, b, c, d, e, f)` 变形设置结果矩阵，利用下面的矩阵，它把来自上一个坐标系统的坐标映射到新的坐标系统：

<math display="block"><semantics><mrow><mo>{</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>new</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>=</mo><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>new</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>=</mo><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi></mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prev</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr></mtable></mrow><annotation encoding="TeX">\left\{ \begin{matrix} x*{\mathrm{prevCoordSys}} = a x*{\mathrm{newCoordSys}} + c y*{\mathrm{newCoordSys}} + e \\ y*{\mathrm{prevCoordSys}} = b x*{\mathrm{newCoordSys}} + d y*{\mathrm{newCoordSys}} + f \end{matrix} \right.</annotation></semantics></math>

请看[关于 SVG 变形文档的具体实例](/zh-CN/docs/Web/SVG/Attribute/transform#general_transformation)。关于该属性的详细信息可以在 [SVG 推荐标准](https://www.w3.org/TR/SVG/coords.html#TransformMatrixDefined)上找到。

## 坐标系统上的效果

如果使用了变形，你会在元素内部建立了一个新的坐标系统，应用了这些变形，你为该元素和它的子元素指定的单位可能不是 1:1 像素映射。但是依然会根据这个变形进行歪曲、斜切、转换、缩放操作。

```xml
<g transform="scale(2)">
  <rect width="50" height="50" />
</g>
```

上面示例中的结果矩形将是 100x100px，如果你使用了比如说 userSpaceOnUse 等属性，将出现更吸引人的效果。

## SVG 嵌在 SVG 内部

比之 HTML，SVG 允许你无缝嵌入别的 svg 元素。因此你可以利用内部`svg`元素的属性`viewBox`、属性`width`和属性`height`简单创建一个新的坐标系统。

```xml
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

以上示例基本上跟它上面的示例有同样的效果，也就是矩形将是指定的两倍大。

{{PreviousNext("Web/SVG/Tutorial/Texts", "Web/SVG/Tutorial/Clipping_and_masking")}}
