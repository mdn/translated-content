---
title: 路径
slug: Web/SVG/Tutorials/SVG_from_scratch/Paths
l10n:
  sourceCommit: 43515e7b3bbe5817e521058136cb6780fb4ea471
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}

{{SVGElement('path')}} 元素是 SVG [基本形状](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes)中最强大的一个。你可以用它创建线条、曲线、弧形等等。

路径通过组合多条直线或曲线来创建复杂形状。仅由直线组成的复杂形状可以使用 [`<polyline>`](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes#polyline) 元素来创建。虽然 `<polyline>` 和 `<path>` 元素可以绘制出外观相似的形状，但 `<polyline>` 元素需要大量细小的直线来模拟曲线，且在放大时难以保持良好的比例。

在绘制 SVG 时，深入理解路径非常重要。虽然不建议使用 XML 编辑器或文本编辑器来创建复杂的路径，但了解其工作原理有助于识别并修复 SVG 中的显示问题。

`<path>` 元素的形状由一个参数定义：{{ SVGAttr("d") }}。（更多内容请参见[基本形状](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes)。）`d` 属性包含一系列命令及其所使用的参数。

每个命令都由一个特定的字母来实例化（例如，创建一个类、为其命名并定位）。例如，让我们移动到 x 和 y 坐标为 (`10`, `10`) 的位置。通过字母 `M` 调用“移动到”命令。当解析器遇到这个字母时，它就知道需要移动到某个点。因此，要移动到 (`10`, `10`) 坐标，应使用的命令是 `M 10 10`。之后，解析器将开始读取下一个命令。

所有命令都有两种形式。**大写字母**表示页面上的绝对坐标，而 **小写字母** 表示相对坐标（例如，_从上一个点向上移动 10px，向左移动 7px_）。

`d` 参数中的坐标**始终是无量纲的**，因此属于用户坐标系。稍后，我们将学习如何对路径进行变换以满足其他需求。

## 直线命令

{{SVGElement("path")}} 节点里有 5 个画直线的命令。首先是“移动到”命令 `M`，前面已经提到过，它需要两个参数，分别是需要移动到的点的 `x` 轴和 `y` 轴的坐标。如果光标已经位于页面上的某个位置，则不会绘制连接这两个位置的线条。“移动到”命令出现在路径的开头，用于指定绘图的起始位置。例如：

```plain
M x y
（或）
m dx dy
```

在下面的示例中，只有一个位于 (`10`, `10`) 的点。但请注意，如果只是像往常一样绘制路径，该点将不会显示出来。例如：

```html live-sample___move-to
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 10" />
</svg>
```

```html hidden live-sample___move-to
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="10" cy="10" r="3" fill="red" />
  </g>
</svg>
<button>显示/隐藏参考点和线</button>
```

```js hidden live-sample___move-to
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('move-to', 100, 130) }}

有三个用于绘制直线的命令。其中最通用的是“线向”命令，通过 `L` 指令调用。`L` 需要两个参数——x 和 y 坐标——并从当前位置绘制一条直线到新位置。

```plain
L x y
（或）
l dx dy
```

绘制水平线和垂直线有两种简写形式。`H` 绘制水平线，`V` 绘制垂直线。由于这两个命令只沿一个方向移动，因此它们都只接受一个参数。

```plain
H x
（或）
h dx

V y
（或）
v dy
```

一个简单的入门方法是画一个图形。我们将从一个矩形开始（这与使用 {{SVGElement("rect")}} 元素更易绘制的矩形类型相同）。它仅由水平线和垂直线组成。

```html live-sample___rectangle-lines
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 10 H 90 V 90 H 10 L 10 10" />
</svg>
```

```html hidden live-sample___rectangle-lines
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="10" cy="10" r="3" fill="red" />
    <circle cx="90" cy="90" r="3" fill="red" />
    <circle cx="90" cy="10" r="3" fill="red" />
    <circle cx="10" cy="90" r="3" fill="red" />
  </g>
</svg>
<button>显示/隐藏参考点和线</button>
```

```js hidden live-sample___rectangle-lines
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('rectangle-lines', 100, 130) }}

我们可以通过使用“闭合路径”命令（通过 `Z` 指令调用）来稍微缩短上述路径声明。该命令会从当前位置画一条直线回到第一个未闭合的点（如果有最后一个 `Z` 命令，则为该命令之后的第一点；否则为路径中的第一点），并用一条线段接头将路径闭合。该接头通常位于路径节点的末端，但并非总是如此。该命令的大小写形式没有区别。

```plain
Z
（或）
z
```

所以上面例子里用到的路径，可以简化成这样：

```xml
<path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black" />
```

你也可以使用这些命令的相对坐标形式来绘制相同的图形，如之前所述，相对命令使用的是小写字母，它们的参数不是指定一个明确的坐标，而是表示相对于它前面的点需要移动多少距离。例如前面的示例，画的是一个 80x80 的正方形，`<path>` 元素可以写成这样：

```xml
<path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black" />
```

上述路径是：画笔移动到 (`10`, `10`) 点，由此开始，向右移动 80 个单位构成一条水平线，然后向下移动 80 个单位，然后向左移动 80 个单位，然后再回到起点。

在这些示例中，使用 {{SVGElement("polygon")}} 或 {{SVGElement("polyline")}} 元素可能更直观。不过，由于路径在 SVG 绘图中被广泛使用，开发者可能更习惯使用它们。无论使用哪一种，都不会对性能产生实质性的影响。

## 曲线命令

绘制平滑曲线的命令有三个，其中两个用来绘制[贝塞尔曲线](/zh-CN/docs/Glossary/Bezier_curve)，另外一个用来绘制“弧形”或者说是圆的一部分。如果你在 Inkscape、Illustrator 或者 Photoshop 中用过路径工具，可能对贝塞尔曲线有一定程度的了解。贝塞尔曲线的类型有很多，但是在 `<path>` 元素里，只存在两种贝塞尔曲线：三次贝塞尔曲线 C，和二次贝塞尔曲线 Q。

### 贝塞尔曲线

三次曲线 `C` 是一条稍显复杂的曲线。三次贝塞尔曲线对于每个点都需要两个控制点。因此，要创建一条三次贝塞尔曲线，需要指定三组坐标。

```plain
C x1 y1, x2 y2, x y
（或）
c dx1 dy1, dx2 dy2, dx dy
```

这里最后一组坐标（`x`, `y`）指定了直线的终点位置。另外两组坐标是控制点。(`x1`, `y1`) 是曲线的起始控制点，(`x2`，`y2`) 是曲线的终点控制点。这些控制点本质上描述了从各点开始的直线的斜率。随后，贝塞尔函数会生成一条平滑曲线，该曲线从直线起始端设定的斜率逐渐过渡到另一端的斜率。

```html live-sample___cubic_bezier_curves
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent" />
  <path d="M 70 10 C 70 20, 110 20, 110 10" stroke="black" fill="transparent" />
  <path
    d="M 130 10 C 120 20, 180 20, 170 10"
    stroke="black"
    fill="transparent" />
  <path d="M 10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent" />
  <path d="M 70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent" />
  <path
    d="M 130 60 C 120 80, 180 80, 170 60"
    stroke="black"
    fill="transparent" />
  <path
    d="M 10 110 C 20 140, 40 140, 50 110"
    stroke="black"
    fill="transparent" />
  <path
    d="M 70 110 C 70 140, 110 140, 110 110"
    stroke="black"
    fill="transparent" />
  <path
    d="M 130 110 C 120 140, 180 140, 170 110"
    stroke="black"
    fill="transparent" />
</svg>
```

```html hidden live-sample___cubic_bezier_curves
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference"></g>
</svg>
<button>显示/隐藏参考点和线</button>
```

```js hidden live-sample___cubic_bezier_curves
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");

// prettier-ignore
const points = [
  [[10, 10], [20, 20], [40, 20], [50, 10]],
  [[70, 10], [70, 20], [110, 20], [110, 10]],
  [[130, 10], [120, 20], [180, 20], [170, 10]],
  [[10, 60], [20, 80], [40, 80], [50, 60]],
  [[70, 60], [70, 80], [110, 80], [110, 60]],
  [[130, 60], [120, 80], [180, 80], [170, 60]],
  [[10, 110], [20, 140], [40, 140], [50, 110]],
  [[70, 110], [70, 140], [110, 140], [110, 110]],
  [[130, 110], [120, 140], [180, 140], [170, 110]],
];

for (const curvePoints of points) {
  for (const p of curvePoints) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", p[0]);
    circle.setAttribute("cy", p[1]);
    circle.setAttribute("r", 1.5);
    circle.setAttribute("fill", "red");
    g.appendChild(circle);
  }
  const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line1.setAttribute("x1", curvePoints[0][0]);
  line1.setAttribute("y1", curvePoints[0][1]);
  line1.setAttribute("x2", curvePoints[1][0]);
  line1.setAttribute("y2", curvePoints[1][1]);
  line1.setAttribute("stroke", "red");
  g.appendChild(line1);
  const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line2.setAttribute("x1", curvePoints[2][0]);
  line2.setAttribute("y1", curvePoints[2][1]);
  line2.setAttribute("x2", curvePoints[3][0]);
  line2.setAttribute("y2", curvePoints[3][1]);
  line2.setAttribute("stroke", "red");
  g.appendChild(line2);
}

let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('cubic_bezier_curves', 190, 190) }}

上面的示例创建了九条三次贝塞尔曲线。随着曲线向右移动，控制点在水平方向上逐渐分散开来。随着曲线向下移动，它们与端点之间的距离也越来越大。这里需要注意的是，曲线最初沿第一个控制点方向延伸，随后发生弯曲，最终沿第二个控制点方向到达终点。

可以将多条贝塞尔曲线串联起来，以创建延伸的、平滑的形状。通常，为了保持斜率恒定，某一点一侧的控制点会是另一侧所用控制点的镜像。在这种情况下，可以使用三次贝塞尔曲线的简写形式，其命令为 `S`（或 `s`）。

```plain
S x2 y2, x y
（或）
s dx2 dy2, dx dy
```

`S` 命令生成的曲线与前文所述类型相同——但如果它紧跟在另一个 `S` 命令或 `C` 命令之后，则默认将第一个控制点视为之前所用控制点的对称点。如果 `S` 命令不紧跟在另一个 `S` 或 `C` 命令之后，则光标的当前位置将作为第一个控制点。其结果虽与使用相同参数的 `Q` 命令生成的结果不完全相同，但较为相似。

下文给出了该语法的示例，左侧图中，指定的控制点以红色显示，推断出的控制点以蓝色显示。

```html live-sample___shortcut_cubic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
    stroke="black"
    fill="transparent" />
</svg>
```

```html hidden live-sample___shortcut_cubic_bezier
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <line x1="10" y1="80" x2="40" y2="10" stroke="red" />
    <line x1="65" y1="10" x2="95" y2="80" stroke="red" />
    <line x1="95" y1="80" x2="125" y2="150" stroke="blue" />
    <line x1="150" y1="150" x2="180" y2="80" stroke="red" />
    <circle cx="10" cy="80" r="3" fill="red" />
    <circle cx="40" cy="10" r="3" fill="red" />
    <circle cx="65" cy="10" r="3" fill="red" />
    <circle cx="95" cy="80" r="3" fill="red" />
    <circle cx="125" cy="150" r="3" fill="blue" />
    <circle cx="150" cy="150" r="3" fill="red" />
    <circle cx="180" cy="80" r="3" fill="red" />
  </g>
</svg>
<button>显示/隐藏参考点和线</button>
```

```js hidden live-sample___shortcut_cubic_bezier
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('shortcut_cubic_bezier', 190, 190) }}

另一种可用的贝塞尔曲线是二次贝塞尔曲线 `Q`，它比三次贝塞尔曲线简单，只需要一个控制点，用来确定起点和终点的曲线斜率。因此它需要两组参数，控制点和终点坐标。

> [!NOTE]
> `q` 的坐标增量都是相对于前一点的（也就是说，`dx` 和 `dy` 并非相对于 `dx1` 和 `dy1`）。

```plain
Q x1 y1, x y
（或）
q dx1 dy1, dx dy
```

```html live-sample___quadratic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
</svg>
```

```html hidden live-sample___quadratic_bezier
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <line x1="10" y1="80" x2="95" y2="10" stroke="red" />
    <line x1="95" y1="10" x2="180" y2="80" stroke="red" />
    <circle cx="10" cy="80" r="3" fill="red" />
    <circle cx="180" cy="80" r="3" fill="red" />
    <circle cx="95" cy="10" r="3" fill="red" />
  </g>
</svg>
<button>显示/隐藏参考点和线</button>
```

```js hidden live-sample___quadratic_bezier
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('quadratic_bezier', 190, 190) }}

与三次贝塞尔曲线类似，将多个二次贝塞尔曲线串联起来也有一个快捷方式，即使用 `T` 调用。

```plain
T x y
（或）
t dx dy
```

此快捷方式会参考上一个控制点，并据此推导出一个新的控制点。这意味着在设置第一个控制点之后，只需指定端点即可绘制出相当复杂的形状。

此功能仅在前一个命令为 `Q` 或 `T` 命令时有效。否则，系统将默认该控制点与上一个控制点相同，此时仅会绘制直线。

```html live-sample___shortcut_quadratic_bezier
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10 80 Q 52.5 10, 95 80 T 180 80"
    stroke="black"
    fill="transparent" />
</svg>
```

```html hidden live-sample___shortcut_quadratic_bezier
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <line x1="10" y1="80" x2="52.5" y2="10" stroke="red" />
    <line x1="52.5" y1="10" x2="95" y2="80" stroke="red" />
    <line x1="95" y1="80" x2="137.5" y2="150" stroke="blue" />
    <line x1="137.5" y1="150" x2="180" y2="80" stroke="blue" />
    <circle cx="10" cy="80" r="3" fill="red" />
    <circle cx="52.5" cy="10" r="3" fill="red" />
    <circle cx="95" cy="80" r="3" fill="red" />
    <circle cx="137.5" cy="150" r="3" fill="blue" />
    <circle cx="180" cy="80" r="3" fill="blue" />
  </g>
</svg>
<button>显示/隐藏参考点和线</button>
```

```js hidden live-sample___shortcut_quadratic_bezier
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('shortcut_quadratic_bezier', 190, 190) }}

这两条曲线得出的结果相似，不过三次曲线在曲线的外形上提供了更大的自由度。选择使用哪条曲线要视具体情况而定，并取决于该线的对称程度。

### 弧形

使用 SVG 还可以创建另一种曲线，即圆弧，通过 `A` 命令调用。圆弧是圆或椭圆的局部。

对于给定的 x 半径和 y 半径，有两个椭圆可以连接任意两个点（只要它们位于圆的半径范围内）。沿着这两个圆中的任意一个，都有两条可能的路径可以连接这两个点——因此，在任何情况下，都有四种可能的弧形可供选择。

正因如此，弧形需要相当多的参数：

```plain
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

在起始处，弧形元素需要两个参数来指定 x 半径和 y 半径。如有需要，请参考 {{SVGElement("ellipse")}} 的用法及其行为。最后两个参数则指定了笔画结束时的 x 和 y 坐标。这四个值共同定义了弧形的基本结构。

第三个参数描述了弧形的旋转。最好通过一个示例来说明：

```html live-sample___arcs_axis_rotation
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10 315
       L 110 215
       A 30 50 0 0 1 162.55 162.45
       L 172.55 152.45
       A 30 50 -45 0 1 215.1 109.9
       L 315 10"
    stroke="black"
    fill="green"
    stroke-width="2"
    fill-opacity="0.5" />
</svg>
```

```html hidden live-sample___arcs_axis_rotation
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <ellipse
      cx="136.225"
      cy="188.275"
      rx="30"
      ry="50"
      stroke="red"
      fill="none" />
    <ellipse
      cx="193.5"
      cy="131.5"
      rx="30"
      ry="50"
      stroke="red"
      fill="none"
      transform="rotate(-45)"
      transform-origin="193.5 131.5" />
  </g>
</svg>
<button>显示/隐藏参考点和线</button>
```

```js hidden live-sample___arcs_axis_rotation
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('arcs_axis_rotation', 320, 350) }}

该示例展示了一个沿页面对角线延伸的 `<path>` 元素。在其中心位置，被切出了两个椭圆弧（x 半径 = `30`，y 半径 = `50`）。在第一个弧中，x 轴旋转角度保持为 `0`，因此该弧所围绕的椭圆（灰色部分）呈垂直方向。然而，对于第二个弧，x 轴旋转角被设置为 `-45` 度。这会旋转椭圆，使其短轴与路径方向对齐，如示例图片中的第二个椭圆所示。

对于上图中未旋转的椭圆，只有两条不同的弧可供选择，而不是四条，因为从弧的起点和终点画出的直线会穿过椭圆的中心。在一个稍作修改的示例中，可以看到构成这四条不同弧的两个椭圆：

```html live-sample___arcs_axis_rotation_2
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
  <path
    d="M 10 315
       L 110 215
       A 36 60 0 0 1 150.71 170.29
       L 172.55 152.45
       A 30 50 -45 0 1 215.1 109.9
       L 315 10"
    stroke="black"
    fill="green"
    stroke-width="2"
    fill-opacity="0.5" />
</svg>
```

```html hidden live-sample___arcs_axis_rotation_2
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="150.71" cy="170.29" r="3" fill="red" />
    <circle cx="110" cy="215" r="3" fill="red" />
    <ellipse
      cx="144.931"
      cy="229.512"
      rx="36"
      ry="60"
      fill="transparent"
      stroke="red" />
    <ellipse
      cx="115.779"
      cy="155.778"
      rx="36"
      ry="60"
      fill="transparent"
      stroke="red" />
  </g>
</svg>
<button>显示/隐藏参考点和线</button>
```

```js hidden live-sample___arcs_axis_rotation_2
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('arcs_axis_rotation_2', 320, 350) }}

请注意，每个蓝色椭圆都由两段弧线组成，具体取决于顺时针还是逆时针方向。每个椭圆包含一段短弧和一段长弧。这两个椭圆只是彼此的镜像，它们是沿起点→终点连线进行的翻转。

如果起始点→终点之间的距离超出了椭圆的 `x` 和 `y` 半径所能覆盖的范围，椭圆的半径将被最小程度地扩展，以便能够覆盖起始点→终点。本页面底部的交互式 Codepen 很好地演示了这一点。要判断椭圆的半径是否足够大以至于需要扩展，需要求解一组方程，例如 [Wolfram Alpha 上的这个](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)% 5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1>)。此计算针对起始点→终点为 (`110`, `215`)→(`150.71`, `170.29`) 的未旋转椭圆。解 (`x`, `y`) 即为该椭圆（或椭圆组）的中心。解将为 [虚数](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2) +%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1>)，若椭圆的半径过小。第二个计算针对的是未旋转的椭圆，其起始点→终点为 (`110`, `215`)→(`162.55`, `162.45`)。由于椭圆仅被微幅拉伸，因此解的虚部较小。

上述四种不同的路径由接下来的两个参数标志决定。如前所述，路径仍可能绕两个椭圆运行，且每个椭圆上都有两种不同的路径，因此共有四种可能的路径。第一个参数是 `large-arc-flag`。它决定弧度应大于还是小于 180 度；最终，该标志决定了弧线将沿给定圆的哪个方向运行。第二个参数是 `sweep-flag`。它决定弧线应从正角度还是负角度开始移动，这实质上决定了将绕哪个圆运行。下面的示例展示了所有四种可能的组合，以及每种情况下的两个圆。

```html live-sample___arcs_flags
<svg width="360" height="360" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 100 100
       A 45 45, 0, 0, 0, 145 145
       L 145 100 Z"
    fill="#00FF00A0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 250 100
       A 45 45, 0, 1, 0, 295 145
       L 295 100 Z"
    fill="#FF0000A0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 100 250
       A 45 45, 0, 0, 1, 145 295
       L 145 250 Z"
    fill="#FF00FFA0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 250 250
       A 45 45, 0, 1, 1, 295 295
       L 295 250 Z"
    fill="#0000FFA0"
    stroke="black"
    stroke-width="2" />
  <path
    d="M 45 45 L 345 45 L 345 345 L 45 345 Z M 195 45 L 195 345 M 45 195 L 345 195"
    fill="none"
    stroke="black" />
  <text x="140" y="20" font-size="20" fill="black">大型弧标志</text>
  <text
    x="-15"
    y="195"
    font-size="20"
    fill="black"
    transform="rotate(-90)"
    transform-origin="20 195">
    Sweep flag
  </text>
  <text x="120" y="40" font-size="20" fill="black">0</text>
  <text x="270" y="40" font-size="20" fill="black">1</text>
  <text x="30" y="120" font-size="20" fill="black">0</text>
  <text x="30" y="270" font-size="20" fill="black">1</text>
</svg>
```

```html hidden live-sample___arcs_flags
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <g id="reference">
    <circle cx="145" cy="100" r="45" stroke="#888888E0" fill="none" />
    <circle cx="100" cy="145" r="45" stroke="#888888E0" fill="none" />
    <circle cx="295" cy="100" r="45" stroke="#888888E0" fill="none" />
    <circle cx="250" cy="145" r="45" stroke="#888888E0" fill="none" />
    <circle cx="145" cy="250" r="45" stroke="#888888E0" fill="none" />
    <circle cx="100" cy="295" r="45" stroke="#888888E0" fill="none" />
    <circle cx="295" cy="250" r="45" stroke="#888888E0" fill="none" />
    <circle cx="250" cy="295" r="45" stroke="#888888E0" fill="none" />
  </g>
</svg>
<button>显示/隐藏参考点和线</button>
```

```js hidden live-sample___arcs_flags
const g = document.querySelector("#reference");
const svg = document.querySelector("svg");
const button = document.querySelector("button");
let isHidden = true;
button.addEventListener("click", () => {
  isHidden = !isHidden;
  if (isHidden) {
    svg.querySelector("#reference").remove();
  } else {
    svg.appendChild(g.cloneNode(true));
  }
});
```

{{ EmbedLiveSample('arcs_flags', 360, 390) }}

在绘图中，使用弧线是绘制圆或椭圆扇形段的简便方法。例如，绘制饼图时，每个扇形段都需要使用不同的弧线。

如果从 {{HTMLElement("canvas")}} 过渡到 SVG，弧线可能是最难掌握的部分，但它的功能也更加强大。完整的圆和椭圆是 SVG 弧线难以绘制的唯一形状。由于任何绕圆路径的起始点和终点都是同一点，因此可选的圆有无限多种，而实际路径是未定义的。可以通过将路径的起始点和终点稍微偏移，然后用另一段路径连接它们来近似绘制。例如，可以通过为每个半圆分别绘制一个弧来构建一个圆。此时，通常直接使用真正的 {{SVGElement("circle")}} 或 {{SVGElement("ellipse")}} 节点会更简单。这个交互式演示可能有助于理解 SVG 弧背后的概念。

```html hidden live-sample___arcs_interactive
<script src="https://cdn.jsdelivr.net/gh/lingtalfi/simpledrag@2.2.0/simpledrag.js"></script>
<div class="ui">
  <div class="controls">
    Radius X: <input id="rx" type="range" min="0" max="500" /><br />
    Radius Y: <input id="ry" type="range" min="0" max="500" /><br />
    Rotation:
    <input id="rot" type="range" min="0" max="360" value="0" /><br />
    大型弧标志：<input id="laf" type="checkbox" /><br />
    Sweep 标志：<input id="sf" type="checkbox" /><br />
    Arc 命令：<span id="arc-value"></span><br />
  </div>
  <div class="results">
    鼠标：pageX <span id="page-x"></span>、pageY <span id="page-y"></span><br />
    A: <span id="ax-value"></span>, <span id="ay-value"></span><br />
    B: <span id="bx-value"></span>, <span id="by-value"></span><br />
    m: <span id="m-value"></span><br />
    b(A): <span id="ba-value"></span><br />
    b(B): <span id="bb-value"></span><br />
    contextWidth: <span id="cw-value"></span><br />
  </div>
</div>

<svg width="100%" height="100%" id="svg-context">
  <path id="arc2" d="" fill="none" stroke="green" stroke-width="2"></path>
  <path id="arc3" d="" fill="none" stroke="green" stroke-width="2"></path>
  <path id="arc4" d="" fill="none" stroke="green" stroke-width="2"></path>

  <path
    id="arc"
    d="M100 100 A 100 100 0 1 0 200 100"
    fill="none"
    stroke="red"
    stroke-width="4"></path>

  <line
    id="line0"
    x1="0"
    y1="0"
    x2="0"
    y2="0"
    fill="none"
    stroke="black"
    stroke-width="2"></line>
  <line
    id="line"
    x1="0"
    y1="0"
    x2="0"
    y2="0"
    fill="none"
    stroke="black"
    stroke-width="2"></line>
  <line
    id="line2"
    x1="0"
    y1="0"
    x2="0"
    y2="0"
    fill="none"
    stroke="black"
    stroke-width="2"></line>

  <circle
    id="circle1"
    cx="100"
    cy="100"
    r="5"
    fill="red"
    stroke="red"
    stroke-width="2"></circle>

  <circle
    id="circle2"
    cx="200"
    cy="100"
    r="5"
    fill="red"
    stroke="red"
    stroke-width="2"></circle>
</svg>
```

```css hidden live-sample___arcs_interactive
body {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #eeeeee;
}

.ui {
  display: flex;
}

.ui > div {
  margin: 0 10px;
}

.ui .controls input {
  vertical-align: middle;
}

#circle1,
#circle2 {
  cursor: pointer;
}

svg {
  background: #dddddd;
}
```

```js hidden live-sample___arcs_interactive
const svgContext = document.getElementById("svg-context");
let rect = svgContext.getBoundingClientRect(); // 用于将鼠标坐标封装到 SVG 盒子中的辅助函数

const pageXEl = document.getElementById("page-x");
const pageYEl = document.getElementById("page-y");
const mEl = document.getElementById("m-value");
const rxEl = document.getElementById("rx");
const ryEl = document.getElementById("ry");
const rotEl = document.getElementById("rot");
const lafEl = document.getElementById("laf");
const sfEl = document.getElementById("sf");
const axEl = document.getElementById("ax-value");
const ayEl = document.getElementById("ay-value");
const bxEl = document.getElementById("bx-value");
const byEl = document.getElementById("by-value");
const baEl = document.getElementById("ba-value");
const bbEl = document.getElementById("bb-value");
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const line = document.getElementById("line");
const line0 = document.getElementById("line0");
const line2 = document.getElementById("line2");
const cwEl = document.getElementById("cw-value");
const arcCmdEl = document.getElementById("arc-value");
const arcEl = document.getElementById("arc");
const arc2El = document.getElementById("arc2");
const arc3El = document.getElementById("arc3");
const arc4El = document.getElementById("arc4");

function updatePaths(pageX, pageY) {
  pageXEl.textContent = pageX;
  pageYEl.textContent = pageY;

  // 两点之间的连线
  line.setAttribute("x1", circle1.getAttribute("cx"));
  line.setAttribute("y1", circle1.getAttribute("cy"));
  line.setAttribute("x2", circle2.getAttribute("cx"));
  line.setAttribute("y2", circle2.getAttribute("cy"));

  axEl.textContent = circle1.getAttribute("cx");
  ayEl.textContent = circle1.getAttribute("cy");
  bxEl.textContent = circle2.getAttribute("cx");
  byEl.textContent = circle2.getAttribute("cy");

  // y = mx + b
  let m, b, run; // m = rise/run = (y2-y1) / (x2-x1)
  if (circle1.getAttribute("cx") <= circle2.getAttribute("cx")) {
    run = circle2.getAttribute("cx") - circle1.getAttribute("cx");
    if (run !== 0) {
      m = (circle2.getAttribute("cy") - circle1.getAttribute("cy")) / run;
    }
  } else {
    run = circle1.getAttribute("cx") - circle2.getAttribute("cx");
    if (run !== 0) {
      m = (circle1.getAttribute("cy") - circle2.getAttribute("cy")) / run;
    }
  }

  if (run !== 0) {
    // b = y - mx
    b = circle1.getAttribute("cy") - m * circle1.getAttribute("cx");
    b2 = circle2.getAttribute("cy") - m * circle2.getAttribute("cx");
    baEl.textContent = b;
    bbEl.textContent = b2;
    mEl.textContent = m;

    // 从左侧纵坐标轴（x=0）画一条线段到最左侧的点（A 或 B）。
    // x=0 ----> y = b
    let leftMost, rightMost;
    if (circle1.getAttribute("cx") <= circle2.getAttribute("cx")) {
      leftMost = circle1;
      rightMost = circle2;
    } else {
      leftMost = circle2;
      rightMost = circle1;
    }

    line0.setAttribute("x1", 0);
    line0.setAttribute("y1", b);
    line0.setAttribute("x2", leftMost.getAttribute("cx"));
    line0.setAttribute("y2", leftMost.getAttribute("cy"));

    // 从点 B 向右绘制一条线段至垂直轴（x=rect.width），该点代表 SVG 盒子的右端。
    // y = mx + b
    const y = m * rect.width + b;
    line2.setAttribute("x1", rightMost.getAttribute("cx"));
    line2.setAttribute("y1", rightMost.getAttribute("cy"));
    line2.setAttribute("x2", rect.width);
    line2.setAttribute("y2", y);

    // 现在更新弧形
    const arcCmd = getArcCommand(
      leftMost,
      rightMost,
      lafEl.checked,
      sfEl.checked,
    );
    arcCmdEl.textContent = arcCmd;
    arcEl.setAttribute("d", arcCmd);

    // 现在更新其他辅助弧
    const combo = [
      [true, true],
      [true, false],
      [false, true],
      [false, false],
    ].filter(
      (item) => !(item[0] === lafEl.checked && item[1] === sfEl.checked),
    );
    arc2El.setAttribute(
      "d",
      getArcCommand(leftMost, rightMost, combo[0][0], combo[0][1]),
    );
    arc3El.setAttribute(
      "d",
      getArcCommand(leftMost, rightMost, combo[1][0], combo[1][1]),
    );
    arc4El.setAttribute(
      "d",
      getArcCommand(leftMost, rightMost, combo[2][0], combo[2][1]),
    );
  }
}

function getArcCommand(leftMost, rightMost, lafChecked, sfChecked) {
  return `M${leftMost.getAttribute("cx")} ${leftMost.getAttribute("cy")} A ${rxEl.value} ${ryEl.value} ${rotEl.value} ${lafChecked ? "1" : "0"} ${sfChecked ? "1" : "0"} ${rightMost.getAttribute("cx")} ${rightMost.getAttribute("cy")}`;
}

function updateScreen() {
  rect = svgContext.getBoundingClientRect();
  cwEl.textContent = rect.width;
}

circle1.sdrag((el, pageX, startX, pageY, startY) => {
  pageX -= rect.left;
  pageY -= rect.top;

  el.setAttribute("cx", pageX);
  el.setAttribute("cy", pageY);
  updatePaths(pageX, pageY);
});

circle2.sdrag((el, pageX, startX, pageY, startY) => {
  pageX -= rect.left;
  pageY -= rect.top;

  el.setAttribute("cx", pageX);
  el.setAttribute("cy", pageY);
  updatePaths(pageX, pageY);
});

window.addEventListener("resize", updateScreen);

// 滑块
["rx", "ry", "rot"].forEach((id) => {
  document.getElementById(id).addEventListener("input", (e) => {
    updatePaths();
  });
});

// 复选框
["laf", "sf"].forEach((id) => {
  document.getElementById(id).addEventListener("change", (e) => {
    updatePaths();
  });
});

updatePaths();
updateScreen();
```

{{EmbedLiveSample("arcs_interactive", "", 600)}}

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}
