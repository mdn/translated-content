---
title: 图案
slug: Web/SVG/Tutorial/Patterns
---

{{SVGRef}}

{{ PreviousNext("SVG/Tutorial/Gradients", "SVG/Tutorial/Texts") }}

pattern（图案）是一个比较难理解的填充类型。同时，pattern 的作用很强大，所以在这里需要进行一些讨论，以便对填充模式有一个大致的了解。和渐变一样，[`<pattern>`](/zh-TW/docs/Web/SVG/Element/pattern) 元素也需要放在 SVG 文件的 `<ldefs>` 段落里。

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white"/>
      <stop offset="95%" stop-color="blue"/>
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red"/>
      <stop offset="95%" stop-color="orange"/>
    </linearGradient>

    <pattern id="Pattern" x=".05" y=".05" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
      <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
    </pattern>

  </defs>

  <rect fill="url(#Pattern)" stroke="black" x="0" y="0" width="200" height="200"/>
</svg>
```

在 pattern 元素里，你可以使用任意的基本图形元素，也可以按照之前所学的方法给它们设置样式，包括渐变和不透明度。在上面的例子里，我们在 pattern 元素里放了一个圆形和两个矩形元素，它们相互重叠，其中一个矩形是另一个矩形的两倍大小，用来填满 pattern。

pattern 最难理解的是定义尺寸和单位。在上面的例子里，我们给 pattern 元素定义了`width`和`height`属性，用来描述 pattern 占据的尺寸范围，另外还有`x`和`y`属性，用来定义 pattern 起点的偏移量。它们的具体解释如下：

渐变有`gradientUnits`属性，pattern 也有一个类似的属性`patternUnits`，用来定义属性采用的单位，它的默认值是 objectBoundingBox，等同于 pattern 采用的宽高缩放比是 1。在上面的例子里，我们需要 pattern 的填充效果在纵向和横向都重复 4 次，所以 width 和 height 设置的值都是 0.25，意思是 pattern 的填充效果的宽和高是整个图形宽高的 1/4（0.25）。

与渐变不同的是，pattern 还有另外一个属性`patternContentUnits`，用来描述 pattern 内部形状使用的单位，这个属性的默认值是 userSpaceOnUse，它与 patternUnits 属性相反，即：如果你没定义 patternContentUnits，也没有定义 patternUnits，那么 pattern 内部采用的坐标单位，会不同于 pattern 采用的坐标单位。这个地方可能会有一点不好理解。在上面的例子中，我们考虑到这个图形的尺寸是 200px 见方，pattern 需要在纵向和横向都重复 4 次，这意味着 pattern 的尺寸是 50\*50px 的正方形，pattern 内部的矩形和圆形应该位于 50\*50px 的范围内，任何超出范围的部分都不会被显示。另外，pattern 还有 10px 的偏移量，由于它是从左上角开始显示，所以 x 和 y 属性应该是 10/200=0.05。

这里需要说明一下，当图形的尺寸发生变化时，pattern 也会自动缩放，适应图形的变化，但是 pattern 内部的图形不会改变尺寸。所以，尽管我们仍然设置了 4 次重复，但 pattern 内部的元素仍然保持原尺寸，所以它们之间有比较大的空白。通过改变`patternContentUnits`属性，我们可以让所有元素使用同样的单位。

```xml
 <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
   <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
   <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
   <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

现在，由于 pattern 内部的元素和 pattern 本身采用相同的单位，我们就不用再设置偏移量去纠正 pattern 的起始位置，并且，当图形的尺寸放大时，pattern 也会自动缩放，所以 pattern 内部的元素数目和重复次数都不会变化。这里有一个使用 userSpaceOnUse 的对比例子，如果图形改变尺寸，pattern 会保持原尺寸，并且重复更多次，达到填满图形的效果。

在 Gecko 引擎中，如果圆形的半径小于 0.075 将会出现一些问题。（这可能是 pattern 独有的 bug，也可能在所有情况下都是 bug，尚不确定。）为了避免这种错误出现，应尽量避免使用 objectBoundingBox。

以上这些都不是我们通常理解的 pattern。pattern 一般会设置一个尺寸，并且独立于图形进行重复。如果像下面这样做，那么 pattern 和它内部的元素都会被创建在当前用户空间内，并且不会被改变：

```xml
 <pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
   <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
   <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
   <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

当然，这意味着当你改变图形的尺寸后，pattern 不会缩放。上面提到的三种情况都会被放在下面的例子里，将图形绘制在一个拉长到 300px 高度的画布上。图示可能并不详尽，你可以在你的应用里改变更多设置项。

![Image:SVG_Pattern_Comparison_of_Units.png](svg_pattern_comparison_of_units.png)o

{{ PreviousNext("SVG/Tutorial/Gradients", "SVG/Tutorial/Texts") }}
