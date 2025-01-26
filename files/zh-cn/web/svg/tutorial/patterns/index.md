---
title: 图案
slug: Web/SVG/Tutorial/Patterns
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Gradients", "Web/SVG/Tutorial/Texts") }}

## 图案

在我看来 patterns（图案）是 SVG 中用到的最让人混淆的填充类型之一。它的功能非常强大，所以我认为他们值得讨论一下并且我们应至少对他们有最基本的了解。跟渐变一样，{{SVGElement('pattern')}} 需要放在 SVG 文档的 {{SVGElement("defs")}} 内部。

```html
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white" />
      <stop offset="95%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red" />
      <stop offset="95%" stop-color="orange" />
    </linearGradient>

    <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue" />
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="url(#Gradient1)"
        fill-opacity="0.5" />
    </pattern>
  </defs>

  <rect
    fill="url(#Pattern)"
    stroke="black"
    x="0"
    y="0"
    width="200"
    height="200" />
</svg>
```

{{ EmbedLiveSample('图案','220','220') }}

在 pattern 元素内部你可以包含任何之前包含过的其他基本形状，并且每个形状都可以使用之前学习过的任何样式样式化，包括渐变和半透明。这里我们在 pattern 中绘制两个矩形（两个矩形互相重叠，一个矩形是另一个矩形大小的二倍，且用于填充整个 pattern）和一个圆。

关于 pattern 容易混淆的事是，pattern 定义了一个单元系统以及他们的大小。上例中，我们在 pattern 元素上定义了`width`和`height`属性，用于描述在重复下一个图案之前应该跨过多远。如果你想要在绘制时偏移矩形的开始点，也可以使用 x 和 y 属性，原因如下。

就像前面使用了`gradientUnits`属性，同样的`pattern`也有一个属性`patternUnits`用于描述我们使用的属性单元。这同之前使用的`objectBoundingBox`默认值一样，所以当一个值为 1 时，它被缩放到应用 pattern 对象的宽高值。因此，我们希望 pattern 垂直和水平的重复 4 次，所以宽高被设置位 0.25，这一位置 pattern 的宽高仅为总外框大小的 0.25。

与渐变不同，pattern 有第二个属性`patternContentUnits`，它描述了`pattern`元素基于基本形状使用的单元系统，这个属性默认值为`userSpaceOnUse`，与`patternUnits`属性相反，这意味着除非你至少指定其中一个属性值（`patternContentUnits`或`patternUnits`），否则在`pattern`中绘制的形状将与`pattern`元素使用的坐标系不同，当你手写这部分时会容易混淆。为了使上例生效，我们必须考虑我们的边框（200 像素）大小和我们实际希望`pattern`垂直和水平重复 4 次的需求。这意味着每个 pattern 单元应该是 `50x50`的方形，pattern 中的两个矩形和圆形的大小会被缩放适应到一个 50x50 的边框里，任何我们绘制在边框外的内容都不会显示。因为我们希望 pattern 从边框的左上角里开始，所以 pattern 也必须偏移 10 像素，也就是 pattern 的 `x` 和 `y` 属性需要调整为 `10/200=0.05`。

如果对象改变了大小，pattern 会自适应其大小，但是对象里面的内容不会自适应。所以当我们在 pattern 中还是放置 4 个重复的 pattern 时，组成 pattern 的对象将不会保持相同的大小，同时在他们之间会有大片空白区域。通过改变`patternContentUnits`属性，我们可以把所有的元素放到相同的单元系统中：

```xml
 <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
   <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
   <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
   <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

现在，因为 pattern 内容与 pattern 本身处于相同的单元系统中，所以我们不用偏移边框以使 pattern 在正确的位置上开始，并且即使对象变大，pattern 也会自动的缩放以保证 pattern 内部的对象数目和重复不变。这与 `userSpaceOnUse` 系统不同，userSpaceOnUse 系统中如果对象改变大小，pattern 本身会保持不变，只是重复更多次去填满边框。

它有一点点的副作用，在 Gecko 中的圆如果半径设置得小于 0.075（尽管半径应该设置的比这个值大得多。这个可能是 pattern 元素中的一个 bug，或者也不算 bug，我也不太清楚）的话绘制的时候可能会出现问题，为了规避这个问题，可能最好的办法是尽量避免在 `objectBoundingBox` 单元中绘制图形。

在你想要使用 pattern 的时候，可能你并不中意这些方法中的任何一个，Pattern 通常都是有确认的大小并且重复他们自己，与对象形状独立开来。要想创建这种 pattern，pattern 和它的内容必须在当前用户空间中绘制，这样当对象在做如下操作时他们才不会改变形状：

```xml
 <pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
   <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
   <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
   <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

当然，这意味着如果你后续改变了对象大小，pattern 也不会缩放。上述三个举例在下图中放在一个矩形中展示，高度被轻微拉伸到 300px，但是我注意到这不是完整的图片，并且有些其他选项可能你的应用不支持。

![Image:SVG_Pattern_Comparison_of_Units.png](svg_pattern_comparison_of_units.png)

{{ PreviousNext("Web/SVG/Tutorial/Gradients", "Web/SVG/Tutorial/Texts") }}
