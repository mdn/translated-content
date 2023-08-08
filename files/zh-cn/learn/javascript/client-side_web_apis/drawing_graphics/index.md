---
title: 绘图
slug: Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

浏览器包含一些非常强大的图形编程工具，从可缩放矢量图形（Scalable Vector Graphics，简称 [SVG](/zh-CN/docs/Web/SVG)）语言到用于在 HTML {{htmlelement("canvas")}} 元素上绘制图形的 API（参阅 [Canvas API](/zh-CN/docs/Web/API/Canvas_API) 和 [WebGL](/zh-CN/docs/Web/API/WebGL_API)）。本文对 {{htmlelement("canvas")}} 进行介绍，并提供更多的学习资源。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        JavaScript 基础（见
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps">JavaScript 第一步</a
        >，<a href="/zh-CN/docs/learn/JavaScript/Building_blocks"
          >创建 JavaScript 代码块</a
        >，<a href="/zh-CN/docs/Learn/JavaScript/Objects">JavaScript 对象入门</a
        >），<a
          href="/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Web API 基础知识</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        学习 JavaScript 在 <code>&#x3C;canvas></code> 元素中绘图的基础知识。
      </td>
    </tr>
  </tbody>
</table>

## 网络图形

我们来讨论 HTML 的 [多媒体和嵌入式](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding) 模块，早先的网页只有单调的文字，后来才引入了图像，起初是通过 {{htmlelement("img")}} 元素的方式，后来出现了类似于 {{cssxref("background-image")}} 的 CSS 属性和 [SVG](/zh-CN/docs/Web/SVG) 图像等方式。

然而，这还不够好。当你能够使用 [CSS](/zh-CN/docs/Learn/CSS) 和 [JavaScript](/zh-CN/docs/Learn/JavaScript) 让 SVG 矢量图动起来时，位图却依然没有相应的支持。同时 SVG 动画的可用工具也少得可怜。有效地生成动画、游戏画面、3D 场景和其他的需求依然没有满足，而这些在诸如 C++ 或者 Java 等底层语言中却司空见惯。

当浏览器开始支持 HTML 画布元素 {{htmlelement("canvas")}} 和相关的 [Canvas API](/zh-CN/docs/Web/API/Canvas_API)（由苹果公司在 2004 年前后发明，后来其他的浏览器开始跟进）时，形势开始改善。下面你会看到，canvas 提供了许多有用的工具，特别是当捆绑了由网络平台提供的一些其他的 API 时。它们用来生成 2D 动画、游戏画面和数据分析图，以及其他类型的 app。

下面的例子显示的是一个基于 canvas 的简单的 2D 弹跳球动画，前面我们在 [JavaScript 对象入门](/zh-CN/docs/Learn/JavaScript/Objects/Object_building_practice) 的章节中见到过。

{{EmbedGHLiveSample("learning-area/javascript/oojs/bouncing-balls/index-finished.html", '100%', 500)}}

大约在 2006 - 2007 年，Mozilla 开始测试 3D 画布。后来演化为 [WebGL](/zh-CN/docs/Web/API/WebGL_API)，它获得了各大浏览器厂商的认可，于是大约在 2009 - 2010 年间得到了标准化。WebGL 可以让你在 web 浏览器中生成真正的 3D 图形。下面的例子显示了一个简单的旋转的 WebGL 立方体。

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

由于原生的 WebGL 代码非常复杂，本文主要针对 2D 画布。然而，你也可以通过 [WebGL 介绍页面](/zh-CN/docs/Web/API/WebGL_API) 找到 WebGL 原生代码的教程，来学习如何更容易地使用 WebGL 库来创建一个 3D 场景。

> **备注：** 画布的基本功能有良好的跨浏览器支持。但存在例外：IE 8 及以下不支持 2D 画布，IE 11 及以下不支持 WebGL。

## 主动学习：开始使用 \<canvas>

要在网页中创建 2D 或者 3D 场景，必须在 HTML 文件中插入一个 {{htmlelement("canvas")}} 元素，以界定网页中的绘图区域。这很简单，如下所示：

```html
<canvas width="320" height="240"></canvas>
```

网页中会生成一块 320 × 240 像素的画布。

在 canvas 标签内，你可以放置一些反馈信息，如果用户的浏览器不支持画布功能，这些内容就会显示出来。

```html
<canvas width="320" height="240">
  <p>卧槽你的浏览器竟然不支持 canvas！</p>
</canvas>
```

当然这条信息实在是没什么用！在实际情况中最好提供与画布内容相关的反馈信息。比如，如果无法渲染实时更新的股价曲线图，就应提供一幅静态的、最近的股价曲线图，并用 alt 显示出价格信息。

### 创建画布并确定尺寸

让我们开始吧：创建画布，准备尝试绘制图形。

1. 首先下载 [0_canvas_start.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start.html) 文件，用文本编辑器打开。
2. 在 {{htmlelement("body")}} 标签下面填加以下代码。

   ```html
   <canvas class="myCanvas">
     <p>添加恰当的反馈信息。</p>
   </canvas>
   ```

   我们为 `<canvas>` 元素添加了一个 `class`，使得在网页中选择多个画布时会容易些。这里我们移除了 `width` 和 `height` 属性 (你可以随时添上。但是我们会在下方用 JavaScript 把它们添加回来）。不明确指定宽高时，画布默认尺寸为 300 × 150 像素。

3. 现在，请在 {{htmlelement("script")}} 元素内添加以下 JavaScript 代码：

   ```js
   var canvas = document.querySelector(".myCanvas");
   var width = (canvas.width = window.innerWidth);
   var height = (canvas.height = window.innerHeight);
   ```

   这里我们用 `canvas` 变量来存储画布的引用。第二行中我们将 {{domxref("Window.innerWidth")}}（可视区域宽度）赋值给一个新变量 `width` 和画布的 `canvas.width` 变量，（第三行同理）。然后我们就得到了一个充满窗口的画布。

   你还可以看到我们使用了多个等号为多个变量进行连续赋值，这在 JavaScript 中是允许的，很适合为多个变量同时赋一个相同的值。后文中你会发现，使用 `width` 和 `height` 变量可以更快捷地访问画布的长宽（比如在画布正中央绘制一条垂直线）。

4. 如果现在保存文件，浏览器中什么也不会显示，这并没有问题，但是滚动条还是可见的，这就是问题了。原因是我们的“全窗尺寸画布”包含 {{htmlelement("body")}} 元素的外边距（{{cssxref("margin")}}），使得文档比窗口略宽。为使滚动条消失，需要删除 {{htmlelement("body")}} 元素的 {{cssxref("margin")}} 并将 {{cssxref("overflow")}} 设置为 `hidden`。在文档的 {{htmlelement("head")}} 中添加以下代码即可：

   ```html
   <style>
     body {
       margin: 0;
       overflow: hidden;
     }
   </style>
   ```

   此时滚动条就消失了。

> **备注：** 如上文所讲，一般情况下图片的尺寸可以通过 HTML 属性或 DOM 属性来设定。你也可以使用 CSS，但问题是画布在渲染完毕后其尺寸就是固定的了，如果试图调整，就会与其他图象一样（其实渲染好的画布就是一副图片），所显示的内容将变得像素化或扭曲变形。

### 获取画布上下文（canvas context）并完成设置

画布模板设置还有最后一步。我们需要获得一个对绘画区域的特殊的引用（称为“上下文”）用来在画布上绘图。可通过 {{domxref("HTMLCanvasElement.getContext()")}} 方法获得基础的绘画功能，需要提供一个字符串参数来表示所需上下文的类型。

这里我们需要一个 2d 画布，在 `<script>` 元素内添加以下 JS 代码即可：

```js
var ctx = canvas.getContext("2d");
```

> **备注：** 可选上下文还包括 WebGL（`webgl`）、WebGL 2（`webgl2`）等等，但本文暂不涉及。

好啦，现已万事具备！`ctx` 变量包含一个 {{domxref("CanvasRenderingContext2D")}} 对象，画布上所有绘画操作都会涉及到这个对象。

开始前我们先初尝一下 canvas API。在 JS 代码中添加以下两行，将画布背景涂成黑色：

```js
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);
```

这里我们使用画布的 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 属性（和 CSS 属性 [色值](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Colors) 一致）设置填充色，然后使用 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}} 方法绘制一个覆盖整个区域的矩形（前两个参数是矩形左上顶点的坐标，后两个参数是矩形的长宽，现在你知道 `width` 和 `height` 的作用了吧）。

好的，模板已经就位，我们要开始了。

## 2D 画布基础

如上文所讲，所有绘画操作都离不开 {{domxref("CanvasRenderingContext2D")}} 对象（这里叫做 `ctx`）。许多操作都需要提供坐标来指示绘图的确切位置。画布左上角的坐标是 (0, 0)，横坐标（x）轴向右延伸，纵坐标（y）轴向下延伸。

![](canvas_default_grid.png)

绘图操作可基于原始矩形模型实现，也可通过追踪一个特定路径后填充颜色实现。下面分别讲解。

### 简单矩形

让我们从简单矩形开始。

1. 首先，复制一份刚才创建的画布模板 (如果你没有严格按上述步骤进行，请下载 [1_canvas_template.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html))。
2. 然后在 JS 代码末尾添加下面两行：

   ```js
   ctx.fillStyle = "rgb(255, 0, 0)";
   ctx.fillRect(50, 50, 100, 150);
   ```

   保存并刷新，画布上将出现一个红色的矩形。其左边和顶边与画布边缘距离均为 50 像素（由前两个参数指定），宽 100 像素、高 150 像素（由后两个参数指定）。

3. 然后再添加一个绿色矩形。在 JS 代码末尾添加下面两行：

   ```js
   ctx.fillStyle = "rgb(0, 255, 0)";
   ctx.fillRect(75, 75, 100, 100);
   ```

   保存并刷新，新的矩形就会出现。这里引出了一个新问题：绘制矩形、线等操作按出现的顺序依次进行。就像粉刷墙面时，两层重叠时新层总会覆盖旧层。这一点是无法改变的，因此在绘制图形时一定要慎重考虑顺序问题。

4. 你还可以通过指定半透明的颜色来绘制半透明的图形，比如使用 `rgba()`。 `a` 指定了“α 通道”的值，也就是颜色的透明度。值越高透明度越高，底层的内容就越清晰。在代码中添加以下两行：

   ```js
   ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
   ctx.fillRect(25, 100, 175, 50);
   ```

5. 现在你可以自己尝试绘制一些矩形了，玩得开心！

### 描边（stroke）和线条宽度

目前我们绘制的矩形都是填充颜色的，我们也可以绘制仅包含外部框线（图形设计中称为**描边**）的矩形。你可以使用 {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} 属性来设置描边颜色，使用 {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect")}} 来绘制一个矩形的轮廓。

1. 在上文的 JS 代码的末尾添加以下代码：

   ```js
   ctx.strokeStyle = "rgb(255, 255, 255)";
   ctx.strokeRect(25, 25, 175, 200);
   ```

2. 默认的描边宽度是 1 像素，可以通过调整 {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}} 属性（接受一个表示描边宽度像素值的数字）的值来修改。在上文两行后添加以下代码（读者注：此代码要放到两行代码中间才有效）：

   ```js
   ctx.lineWidth = 5;
   ```

现在可以看到白色的外边框变得更粗了。就这么简单，示例看上去像这样：

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles.html", '100%', 250)}}

> **备注：** 完整代码请访问 GitHub： [2_canvas_rectangles.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/2_canvas_rectangles.html)。

### 绘制路径

可以通过绘制路径来绘制比矩形更复杂的图形。路径中至少要包含钢笔运行精确路径的代码以确定图形的形状。画布提供了许多函数用来绘制直线、圆、贝塞尔曲线，等等。

重新复制一份（[1_canvas_template.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)），然后在其中绘制新的示例。

一些通用的方法和属性将贯穿以下全部内容：

- {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}}：在钢笔当前所在位置开始绘制一条路径。在新的画布中，钢笔起始位置为 (0, 0)。
- {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}}：将钢笔移动至另一个坐标点，不记录、不留痕迹，只将钢笔“跳”至新位置。
- {{domxref("CanvasRenderingContext2D.fill", "fill()")}}：通过为当前所绘制路径的区域填充颜色来绘制一个新的填充形状。
- {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}：通过为当前绘制路径的区域描边，来绘制一个只有边框的形状。
- 路径也可和矩形一样使用 `lineWidth` 和 `fillStyle` / `strokeStyle` 等功能。

以下是一个典型的简单路径绘制选项：

```js
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
// 绘制路径
ctx.fill();
```

#### 画线

我们来在画布上绘制一个等边三角形。

1. 首先，在代码底部添加下面的辅助函数。它可以将角度换算为弧度，在为 JavaScript 提供角度值时非常实用，JS 基本上只接受弧度值，而人类更习惯用角度值。

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }
   ```

2. 然后，在刚才复制好的文件中添加下面的内容，以开始路径的绘制。此处为我们为三角形设置了颜色，准备绘制，然后将钢笔移动至 (50, 50)（没有绘制任何内容）。然后准备在新的坐标开始绘制三角形。

   ```js
   ctx.fillStyle = "rgb(255, 0, 0)";
   ctx.beginPath();
   ctx.moveTo(50, 50);
   ```

3. 接下来在脚本中添加以下代码：

   ```js
   ctx.lineTo(150, 50);
   var triHeight = 50 * Math.tan(degToRad(60));
   ctx.lineTo(100, 50 + triHeight);
   ctx.lineTo(50, 50);
   ctx.fill();
   ```

   我们来逐行解释：

   首先绘制一条直线，终点坐标为 (150, 50)。此时路径沿 x 轴向右行走 100 像素。

   然后利用三角函数来计算等边三角形的高。这里我们要绘制的三角形是朝下的。等边三角形每个角均为 60°，为计算高的值，我们可以将三角形从正中心分割为两个直角三角形，每个直角三角形的三个角分别为 90°、60°、30°。对于边：

   - 最长的边称为 **斜边**。
   - 紧挨 60° 角的边称为 **临边**，显然地，它的长度是刚才绘制的线的一半，即 50 像素。
   - 60° 角对面的边称为 **对边**，即三角形的高，需要计算得到。

   ![](trigonometry.png)

   通过基本三角函数可得：临边长度乘以角的正切等于对边长度。于是可得三角形的高为 `50 * Math.tan(degToRad(60))`。由于 {{jsxref("Math.tan()")}} 接受数值的单位为弧度，于是我们用刚才的 `degToRad()` 函数将 60° 换算为弧度。

4. 有了三角形的高，我们来绘制另一条线，终点坐标为 `(100, 50+triHeight)`。X 坐标值很简单，应在刚才绘制的水平线两顶点正中间位置。Y 值应为 50 加上三角形的高，因为高即三角形底边到顶点的距离。
5. 下一条线的终点坐标为绘制整个三角形的起点坐标。
6. 最后，运行 `ctx.fill()` 来终止路径，并为图形填充颜色。

#### 画圆

下面来看可在画布中绘制圆的方法—— {{domxref("CanvasRenderingContext2D.arc", "arc()")}} ，通过连续的点来绘制整个圆或者弧（arc，即局部的圆）。

1. 在代码中添加以下几行，以向画布中添加一条弧。

   ```plain
   ctx.fillStyle = 'rgb(0, 0, 255)';
   ctx.beginPath();
   ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
   ctx.fill();
   ```

   `arc()` 函数有六个参数。前两个指定圆心的位置坐标，第三个是圆的半径，第四、五个是绘制弧的起、止角度（给定 0° 和 360° 便能绘制一个完整的圆），第六个是绘制方向（`false` 是顺时针，`true` 是逆时针）。

   > **备注：** 0° 设定为水平向右。

2. 我们再来画一条弧：

   ```plain
   ctx.fillStyle = 'yellow';
   ctx.beginPath();
   ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
   ctx.lineTo(200, 106);
   ctx.fill();
   ```

   模式基本一样，但有两点不同：

   - 将 `arc()` 的最后一个参数设置为 `true`，意味着弧将逆时针绘制，也就意味着即使起、止角度分别设置为 -45°、45°，我们还是得到了区域外的一条 270° 的弧。如果把 `true` 改为`false` 重新运行，将得到 90° 的弧。
   - 在调用 `fill()` 前，我们绘制了一条终点为圆心的直线。然后我们就渲染出一个惟妙惟肖的吃豆人模型。如果删除这条线（试试呗）再重新运行代码，你只能得到一个起止点间被砍掉一块的圆。这向我们展示了画布的另一个重要事项：如果要填充一个未完成（也就是没有首尾相接）的路径，浏览器将在起、止点件绘制一条直线，然后直接填充。

示例现在应该跟下图一致：

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/3_canvas_paths.html", '100%', 200)}}

> **备注：** 完整代码可到 GitHub 下载：[3_canvas_paths.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/3_canvas_paths.html)。

> **备注：** 请访问我们的 [用画布绘图](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) 入门课程来学习更多高级的路径绘制功能，比如贝叶斯曲线。

### 文本

画布可用于绘制文本。我们简要学习一下。首先再次下载一份新的画布模板（[1_canvas_template.htm](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)），我们用它来绘制新的示例。

以下两个函数用于绘制文本：

- {{domxref("CanvasRenderingContext2D.fillText", "fillText()")}} ：绘制有填充色的文本。
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText()")}}：绘制文本外边框（描边）。

这两个函数有三个基本的参数：需要绘制的文字、**文本框**（顾名思义，围绕着需要绘制文字的方框）左上顶点的 X、Y 坐标。

还有一系列帮助控制文本渲染的属性：比如用于指定字体族、字号的 {{domxref("CanvasRenderingContext2D.font", "font")}}，它的值和语法与 CSS 的 {{cssxref("font")}} 属性一致。

在 JS 代码底部添加以下内容：

```js
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);
```

将绘制两行文字，一行描边文字一行填充颜色的文字。示例最终如下所示：

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/4_canvas_text.html", '100%', 180)}}

> **备注：** 完整代码可到 GitHub 下载：[4_canvas_text.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/4_canvas_text.html).

可以自己尝试一下。访问 [绘制文本](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text) 获得关于画布文本选项的更多信息。

### 在画布上绘制图片

可在画布上渲染外部图片，简单图片文件、视频帧、其他画布内容都可以。这里我们只考虑简单图片文件的情况：

1. 同上，下载画布模板（[1_canvas_template.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)）以绘制新的示例。这里还需要在同一目录下保存一个示例图片文件：[firefox.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/firefox.png)。

   {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}} 方法可将图片绘制在画布上。最简单的版本需要三个参数：需要渲染的图片、图片左上角的 X、Y 坐标。

2. 将图片源嵌入画布中，代码如下：

   ```js
   var image = new Image();
   image.src = "firefox.png";
   ```

   这里使用 {{domxref("HTMLImageElement.Image()", "Image()")}} 构造器创建了一个新的 {{domxref("HTMLImageElement")}} 对象。返回对象的类型与非空 {{htmlelement("img")}} 元素的引用是一致的。然后将它的 [`src`](/zh-CN/docs/Web/HTML/Element/img#src) 属性设置为 Firefox 的图标。此时浏览器将开始载入这张图片。

3. 这次我们尝试用 `drawImage()` 函数来嵌入图片，应确保图片先载入完毕，否则运行会出错。可以通过 `onload` 事件处理器来达成，该函数只在图片调用完毕后才会调用。在上文代码末尾添加以下内容：

   ```js
   image.onload = function () {
     ctx.drawImage(image, 50, 50);
   };
   ```

   保存刷新，可以看到图片成功嵌入画布中。

4. 还有更多方式。如果仅需要显示图片的某一部分，或者需要改变尺寸，该怎么做呢？复杂版本的 `drawImage()` 可解决这两个问题。请更新 `ctx.drawImage()` 一行代码为：

   ```js
   ctx.drawImage(image, 20, 20, 185, 175, 50, 50, 185, 175);
   ```

   - 第一个参数不变，为图片引用。
   - 参数 2、3 表示裁切部分左上顶点的坐标，参考原点为原图片本身左上角的坐标。原图片在该坐标左、上的部分均不会绘制出来。
   - 参数 4、5 表示裁切部分的长、宽。
   - 参数 6、7 表示裁切部分左上顶点在画布中的位置坐标，参考原点为画布左上顶点。
   - 参数 8、9 表示裁切部分在画布中绘制的长、宽。本例中绘制时与裁切时面积相同，你也可以定制绘制的尺寸。

最终结果如下所示：

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/getting-started/5_canvas_images.html", '100%', 260)}}

> **备注：** 完整代码可到 GitHub 下载：[5_canvas_images.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/5_canvas_images.html).

## 循环和动画

目前我们学习了关于 2D 画布一些非常基础的用法，但是不学习动画你就无法体会画布的强大。画布是提供可编程图形的。如果你的作品不需要改变，那么你就只能永远面对那些静态图片了。

### 创建一个循环

在画布中使用循环是件有趣的事，你可以在 [`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for) 循环中运行画布命令，和其他 JS 代码一样。

我们来创建一个简单的示例。

1. 继续复制一份画布模板（[1_canvas_template.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)）在代码编辑器中打开。
2. 在 JS 代码末尾添加以下一行。这将创建一个新方法——{{domxref("CanvasRenderingContext2D.translate", "translate()")}}，可用于移动画布的原点。

   ```js
   ctx.translate(width / 2, height / 2);
   ```

   这会使原点 (0, 0) 从画布左上顶点移动至画布正中心。这个功能在许多场合非常实用，就像本示例，我们的绘制操作都是围绕着画布的中心点展开的。

3. 在 JS 代码末尾添加以下内容：

   ```js
   function degToRad(degrees) {
     return (degrees * Math.PI) / 180;
   }

   function rand(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   var length = 250;
   var moveOffset = 20;

   for (var i = 0; i < length; i++) {}
   ```

   这里我们实现了一个与上文三角形示例中相同的 `degToRad()` 函数、一个返回给定范围内随机数 `rand()` 函数、`length` 和 `moveOffset` 变量（见下文），以及一个空的 `for` 循环。

4. 此处的理念是利用 `for` 循环在画布上循环迭代绘制好玩儿的内容。请将以下代码添加进 `for` 循环中：

   ```js
   ctx.fillStyle =
     "rgba(" + (255 - length) + ", 0, " + (255 - length) + ", 0.9)";
   ctx.beginPath();
   ctx.moveTo(moveOffset, moveOffset);
   ctx.lineTo(moveOffset + length, moveOffset);
   var triHeight = (length / 2) * Math.tan(degToRad(60));
   ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
   ctx.lineTo(moveOffset, moveOffset);
   ctx.fill();

   length--;
   moveOffset += 0.7;
   ctx.rotate(degToRad(5));
   ```

   在每次迭代中：

   - 设置 `fillStyle` 为略透明的紫色渐变色。渐变由每次迭代时 `length` 值的改变实现。随着循环的运行， `length` 值逐渐变小，从而使连续的三角形颜色逐渐变亮。
   - 开始路径。
   - 将钢笔移动至坐标 `(moveOffset, moveOffset)`；该变量定义了每次要绘制新三角形时需要移动的距离。
   - 画一条直线，终点坐标为 `(moveOffset+length, moveOffset)`。即一条长度为 `length` 与 X 轴平行的线。
   - 计算三角形的高，方法同上。
   - 向三角形底部顶点方向绘制一条直线，然后向三角形的起始点绘制一条直线。
   - 调用 `fill()` 为三角形填充颜色。
   - 更新次序变量，准备绘制下一个三角形。`length` 的值减一，使三角形每次迭代都变小一些；小幅增加 `moveOffset` 的值，使得下一个三角形略微错位；用一个新函数 {{domxref("CanvasRenderingContext2D.rotate", "rotate()")}} 来旋转整块画布，在绘制下个三角形前画布旋转 5°。

好了，最终结果如下：

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop.html", '100%', 550)}}

现在，你可以尝试这个示例，可以加一些创新哦。比如：

- 把三角形换成矩形、弧，甚至内嵌的图片。
- 修改 `length` 和 `moveOffset` 的值。
- 我们引入了 `rand()` 函数但是没有使用，你可以试着用它引入一些随机数。

> **备注：** 完整代码可到 GitHub 下载：[6_canvas_for_loop.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/loops_animation/6_canvas_for_loop.html).

### 动画

上文的循环示例很有趣，其实在重度画布应用（比如游戏或实时可视化）中恒定循环是至关重要的支持组件。如果期望画布显示的内容像一部电影，屏幕最好能够以 60 帧每秒的刷新率实时更新，这样人眼看到的动作才更真实、更平滑。

一些 JavaScript 函数可以让函数在一秒内重复运行多次，这里最适合的就是 {{domxref("window.requestAnimationFrame()")}}。它只取一个参数，即每帧要运行的函数名。下一次浏览器准备好更新屏幕时，将会调用你的函数。如果你的函数向动画中绘制了更新内容，则在函数结束前再次调用 `requestAnimationFrame()`，动画循环得以保留。只有在停止调用 `requestAnimationFrame()` 时，或 `requestAnimationFrame()` 调用后、帧调用前调用了 {{domxref("window.cancelAnimationFrame()")}} 时，循环才会停止。

**注：**动画结束后在主代码中调用 `cancelAnimationFrame()` 是良好习惯，可以确保不再有等待运行的更新。

浏览器自行处理诸如“使动画匀速运行”、“避免在不可见的内容浪费资源”等复杂细节问题。

我们简单回顾一下“弹球”示例（[在线运行](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html) 或查看 [源代码](https://github.com/mdn/learning-area/tree/main/javascript/oojs/bouncing-balls)），来探究一下原理。以下是让弹球持续运行的循环代码：

```js
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 25) {
    var ball = new Ball();
    balls.push(ball);
  }

  for (i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
```

我们在代码底部运行了一次 `loop()` 函数，它启动了整个循环，绘制了第一帧动画。接着 `loop()` 函数接管了`requestAnimationFrame(loop)` 的调用工作，即运行下一帧、再下一帧……的动画。

请注意每一帧我们都整体清除画布并重新渲染所有内容。（每帧创建一个新球（25 个封顶），然后绘制每个球，更新它们的位置，检查是否撞到了其他球。）向画布中绘制的新图形不能像 DOM 元素那样单独操作。你无法再画布中单独操作某一个球，因为只要绘制完毕了，它就是画布的一部分，而不是一个单独的球。你需要擦除再重画，可以将整帧擦除再重画整个画面，也可通过编程选择最小的部分进行擦除和重画。

优化图形动画是另一个编程主题，需要好多奇技淫巧。这超出我们的讨论范围啦。

一般地，在画布上制作动画需要以下步骤：

1. 清除画布内容（可用 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} 或 {{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}）。
2. （在需要时）用 {{domxref("CanvasRenderingContext2D.save", "save()")}} 保存状态。（在进行下一步前保存所更新的设置，一般在复杂环境中用到）
3. 绘制动画图形。
4. 使用 {{domxref("CanvasRenderingContext2D.restore", "restore()")}} 恢复第 2 步中保存的状态。
5. 调用 `requestAnimationFrame()` 准备下一帧动画。

> **备注** `save()` 和 `restore()` 这里暂不展开，可以访问 [变形](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations) 教程（及后续内容）来获取详细信息。

### 一个简单的人物动画

现在我们来创建一个简单的动画，我们找来一个复古的电脑游戏的主角制作一个在屏幕上行走的动画。

1. 继续复制一份画布模板（[1_canvas_template.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/getting-started/1_canvas_template.html)）在代码编辑器中打开。下载 [walk-right.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/loops_animation/walk-right.png) 并放在同一文件夹。
2. 在 JS 代码末尾添加下面一行，再次将画布的原点设置为中心点。

   ```js
   ctx.translate(width / 2, height / 2);
   ```

3. 创建一个新的 {{domxref("HTMLImageElement")}} 对象，把它的 [`src`](/zh-CN/docs/Web/HTML/Element/img#src) 设置为所需图片，添加一个 `onload` 事件处理器，使 `draw()` 函数在图片载入后触发。

   ```js
   var image = new Image();
   image.src = "walk-right.png";
   image.onload = draw;
   ```

4. 添加一些变量，来追踪精灵图在屏幕上的位置，以及当前需要显示的精灵图的序号。

   ```js
   var sprite = 0;
   var posX = 0;
   ```

   我们来解释一下“精灵图序列”（我们借鉴了麦克托马斯的 [使用 CSS 动画创建人物行走的精灵图](http://atomicrobotdesign.com/blog/htmlcss/create-a-sprite-sheet-walk-cycle-using-using-css-animation/)）。图片如下：

   ![](walk-right.png)

   图中包含六个精灵，它们组成了一趟完整的行走序列。每个精灵的尺寸为 102 × 148 像素。为了整齐的显示一个精灵，可以通过 `drawImage()` 来从序列中裁切出单独的精灵并隐藏其他部分，就像上文中操作 Firefox 图标的方法。切片的 X 坐标应为 102 的倍数，Y 坐标恒为 0。切片尺寸恒为 102 × 148 像素。

5. 在代码末尾添加一个空的 `draw()` 函数，用来添加一些代码：

   ```js
   function draw() {}
   ```

6. 本节剩余部分都在这个 `draw()` 中展开。首先，添加以下代码，清除画布，准备绘制新的帧。注意由于我们刚才将原点设置为 `width/2, height/2`，这里需要将矩形左上顶点的坐标设置为 `-(width/2), -(height/2)`。

   ```js
   ctx.fillRect(-(width / 2), -(height / 2), width, height);
   ```

7. 下一步，我们使用 `drawImage()`（9 参数版本）来绘制图形，添加以下代码：

   ```js
   ctx.drawImage(image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);
   ```

   如你所见：

   - `image` 指定需要嵌入的图片。
   - 参数 2、3 指定切片左上顶点在原图的位置坐标，X 值为 `sprite`（精灵序列 0 - 5）乘 102，Y 值恒为 0。
   - 参数 4、5 指定切片尺寸：102 × 148 像素。
   - 参数 6、7 指定切片在画布绘制区域的坐上顶点坐标。X 坐标位置为 0 + `posX`，意味着我们可以通过修改 `posX` 的值来修改绘制的位置。
   - 参数 8、9 指定图片在画布中的尺寸。这里需要图片保持原始尺寸，因此我们指定宽、高值为 102、148。

8. 现在，我们在每帧绘制完毕（部分完毕）后修改 `sprite` 的值。在 `draw()` 函数底部添加以下内容：

   ```js
   if (posX % 13 === 0) {
     if (sprite === 5) {
       sprite = 0;
     } else {
       sprite++;
     }
   }
   ```

   将整个功能块放置在 `if (posX % 13 === 0) { ... }` 内。用“模（`%`）运算符”（即 [求余运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)）来检测 `posX` 是否可以被 13 整除。如果整除，则通过增加 `sprite` 的值转至下一个精灵（到 5 号精灵时归零）。这实际上意味着每隔 13 帧才更新一次精灵，每秒大约更新 5 帧（`requestAnimationFrame()` 每秒最多调用 60 帧）。我们故意放慢了帧率，因为精灵图只有六个，且如果每秒显示 60 帧的话，这个角色就会快到起飞。

   外部程序块中用一个 [`if ... else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 语句来检测 `sprite` 的值是否为 5（精灵序号在 0 - 5 间循环，因此 5 代表最后一个精灵）。如果最后一个精灵已经显示，就把 `sprite` 重置为 0，否则加 1。

9. 下一步要算出每帧 `posX` 的值，在上文代码末尾添加以下内容：

   ```js
   if (posX > width / 2) {
     newStartPos = -(width / 2 + 102);
     posX = Math.ceil(newStartPos / 13) * 13;
     console.log(posX);
   } else {
     posX += 2;
   }
   ```

   用另一个 `if ... else` 来检测 `posX` 的值是否超出了 `width/2`，那意味着角色走到了屏幕右侧边缘。如果这样就计算出一个让角色出现在屏幕左侧边缘的 X 坐标，然后将 `posX` 设置为最接近这个数的 13 的倍数。这里必须限定 13 的倍数这个条件，这是因为 `posX` 不可能是 13 的倍数，若不限定的话上一段代码就不会运行了。

   如果角色没有走到屏幕边缘，只需为 `posX` 加 2。这将让他在下次绘制时更靠右些。

10. 最后，通过在 `draw()` 函数末尾添加 {{domxref("window.requestAnimationFrame", "requestAnimationFrame()")}} 调用以实现动画的循环。

    ```js
    window.requestAnimationFrame(draw);
    ```

成功了！最终效果如下所示：

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation.html", '100%', 260)}}

> **备注：** 完整代码可到 GitHub 下载：[7_canvas_walking_animation.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/loops_animation/7_canvas_walking_animation.html).

### 简单的绘图应用

下面来演示一个简单的绘图应用，作为最后一个绘画示例，它将向你展示动画循环如果与用户输入（本例中为鼠标移动）结合起来。我们不会带你一步一步来实现本示例，只对代码中最有趣的部分进行探究。

示例代码可到 GitHub 下载：[8_canvas_drawing_app.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app.html)，也可在线试玩：

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/loops_animation/8_canvas_drawing_app.html", '100%', 600)}}

下面我们就来看看代码的精华部分。首先，用 `curX`、`curY` 和 `pressed` 这三个变量来跟踪鼠标的 X、Y 坐标和点击状态。当鼠标移动时，触发一个函数作为 `onmousemove` 事件处理器，其应捕获当前的 X 和 Y 值。再用 `onmousedown` 和 `onmouseup` 事件处理器来修改鼠标键按下时 `pressed` 的值（按下为 `true`，释放为 `false`）。

```js
var curX;
var curY;
var pressed = false;

document.onmousemove = function (e) {
  curX = window.Event
    ? e.pageX
    : e.clientX +
      (document.documentElement.scrollLeft
        ? document.documentElement.scrollLeft
        : document.body.scrollLeft);
  curY = window.Event
    ? e.pageY
    : e.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);
};

canvas.onmousedown = function () {
  pressed = true;
};

canvas.onmouseup = function () {
  pressed = false;
};
```

在按下“Clear canvas”（清除画布）按钮时，我们运行一个简单的函数来清除整个画布的内容至纯黑色，和刚才的方法一致：

```js
clearBtn.onclick = function () {
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, width, height);
};
```

这次的绘图循环非常简单，如果 `pressed` 为 `true`，则绘制一个圆，该圆以颜色选择器中设定的颜色为背景，以滑动选择器设定的数值为半径。

```js
function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
```

> **备注：** `range` 和 `color` 两个 {{htmlelement("input")}} 的类型有良好的跨浏览器支持，但 Safari 暂不支持 `color`，IE 10 以下版本两者均不支持。如果你的浏览器不支持这些输入类型，它们将降格为简单文字输入区域，可以直接输入合法的数字来表示半径和颜色的值。

## WebGL

2D 内容告一段落，现在简单了解一下 3D 画布。3D 画布内容可通过的 [WebGL](/zh-CN/docs/Web/API/WebGL_API) API 实现，尽管它和 2D canvas API 都可在 {{htmlelement("canvas")}} 元素上进行渲染，但两者是彼此独立的。

WebGL 基于 [OpenGL](/zh-CN/docs/Glossary/OpenGL) 图形编程语言实现，可直接与 [GPU](/zh-CN/docs/Glossary/GPU) 通信，基于此，编写纯 WebGL 代码与常规的 JavaScript 不尽相同，更像 C++ 那样的底层语言，更加复杂，但无比强大。

### 使用库

由于 3D 绘图的复杂性，大多数人写代码时会使用第三方 JavaScript 库（比如 [Three.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)、[PlayCanvas](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) 或 [Babylon.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)）。大多数库的原理都基本类似，提供创建基本的、自定义性状的功能、视图定位摄影和光效、表面纹理覆盖，等等。库负责 与 WebGL 通信，你只需完成更高阶工作。

接触任何一个库都意味着要学一套全新的 API（这里是第三方的版本），但与纯 WebGL 编程都大同小异。

### 创建魔方

我们来看一个简单的示例，用一套 WebGL 库（这里我们选择 [Three.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)，最流行的 3D 绘图库之一）来创建我们在本文开头看到的旋转魔方。

1. 首先，下载 [index.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/index.html)、[metal003.png](https://github.com/mdn/learning-area/blob/main/javascript/apis/drawing-graphics/threejs-cube/metal003.png) 并保存在同一个文件夹。图片将用于魔方的表面纹理。
2. 然后，继续在同一个文件夹内创建 `main.js` 文件。
3. 在编辑器中打开 `index.html` 可以看到其中有两个 {{htmlelement("script")}} 元素，第一个将 `three.min.js` 嵌入页面，第二个将我们的 `main.js` 嵌入页面。需要自行 [下载 three.min.js 库](https://raw.githubusercontent.com/mrdoob/three.js/dev/build/three.min.js) 并保存到同一个文件夹中。
4. 将 `three.js` 嵌入页面后，就可以在 `main.js` 中添加新的代码对其加以应用了。请添加下面一行：

   ```js
   var scene = new THREE.Scene();
   ```

   [`Scene()`](https://threejs.org/docs/index.html#Reference/Scenes/Scene) 构造器创建一个新的场景，表示即将显示的整个 3D 世界。

5. 下一步，我们需要一部**摄影机**来看到整个场景。在 3D 绘图语境中，摄影机表示观察者在世界里的位置，可通过下面代码创建一部摄影机：

   ```js
   var camera = new THREE.PerspectiveCamera(
     75,
     window.innerWidth / window.innerHeight,
     0.1,
     1000,
   );
   camera.position.z = 5;
   ```

   [`PerspectiveCamera()`](https://threejs.org/docs/index.html#Reference/Cameras/PerspectiveCamera) 构造器有四个参数：

   - 观察区域：镜头视角大小，用角度表示。
   - 屏幕宽高比：一般情况下，宽高比等于屏幕的宽比上屏幕的高。使用其他的值会使场景扭曲（也许正是你需要的，但一般都不是）。
   - 近裁切面：停止渲染前对象离摄影机的最近距离。设想一下，举起一个手指，逐渐移近双眼，某个点后就在也看不到这根手指了。
   - 远裁切面：停止渲染前离摄像机最远的对象的距离。

   将摄像机的位置设定为距 Z 轴 5 个距离单位的位置。与 CSS 类似，在屏幕之外你（观察者）的位置。

6. 第三个重要参数是渲染器。我们用它来渲染给定的场景，可通过给定位值得摄影机观察。现在我们使用 [`WebGLRenderer()`](https://threejs.org/docs/index.html#Reference/Renderers/WebGLRenderer) 构造器创建一个渲染器供稍后使用。添加以下代码：

   ```js
   var renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   ```

   第一行创建一个新的渲染器，第二行设定渲染器在当前摄影机视角下的尺寸，第三行将渲染好的 {{htmlelement("canvas")}} 对象加入 HTML 的 {{htmlelement("body")}} 中。现在渲染器绘制的内容将在窗口中显示出来。

7. 下一步，在画布中创建魔方。把以下代码添加到 JS 文件中：

   ```js
   var cube;

   var loader = new THREE.TextureLoader();

   loader.load("metal003.png", function (texture) {
     texture.wrapS = THREE.RepeatWrapping;
     texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set(2, 2);

     var geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
     var material = new THREE.MeshLambertMaterial({
       map: texture,
       shading: THREE.FlatShading,
     });
     cube = new THREE.Mesh(geometry, material);
     scene.add(cube);

     draw();
   });
   ```

   内容很多，我们来剥丝抽茧：

   - 首先，创建一个全局变量 `cube`，这样就可以在代码任意位置访问我们的魔方。
   - 然后，创建一个 [`TextureLoader`](https://threejs.org/docs/index.html#Reference/Loaders/TextureLoader) 对象，并调用 `load()`。这里 `load()` 包含两个参数（其他情况可以有更多参数）：需要调用的纹理图（PNG 文件）和纹理加载成功后调用的函数。
   - 函数内部，我们用 [`texture`](https://threejs.org/docs/index.html#Reference/Textures/Texture) 对象的属性指明我们要在魔方的每个面渲染 2 × 2 的图片，然后创建一个 [`BoxGeometry`](https://threejs.org/docs/index.html#Reference/Geometries/BoxGeometry) 对象和一个 [`MeshLambertMaterial`](https://threejs.org/docs/index.html#Reference/Materials/MeshLambertMaterial) 对象，将两者作为 [`Mesh`](https://threejs.org/docs/index.html#Reference/Objects/Mesh) 的参数来创建我们的魔方。 [`Mesh`](https://threejs.org/docs/index.html#Reference/Objects/Mesh) 一般就需要两个参数：一个几何（形状）和一个素材（形状表面外观）。
   - 最后，将魔方添加进场景中，调用我们的 `draw()` 函数开始动画。

8. 定义 `draw()` 函数前，我们需要先为场景打光，以照亮场景中的物体。请添加以下代码：

   ```js
   var light = new THREE.AmbientLight("rgb(255, 255, 255)"); // soft white light
   scene.add(light);

   var spotLight = new THREE.SpotLight("rgb(255, 255, 255)");
   spotLight.position.set(100, 1000, 1000);
   spotLight.castShadow = true;
   scene.add(spotLight);
   ```

   [`AmbientLight`](https://threejs.org/docs/index.html#Reference/Lights/AmbientLight) 对象是可以轻度照亮整个场景的柔光，就像户外的阳光。而 [`SpotLight`](https://threejs.org/docs/index.html#Reference/Lights/SpotLight) 对象是直射的硬光，就像闪光灯和手电筒（或者它的英文字面意思——聚光灯）。

9. 最后，在代码末尾添加我们的 `draw()` 函数：

   ```js
   function draw() {
     cube.rotation.x += 0.01;
     cube.rotation.y += 0.01;
     renderer.render(scene, camera);

     requestAnimationFrame(draw);
   }
   ```

   这段代码很直观，每一帧我们都沿 X 轴 和 Y 轴将魔方轻微转动，然后按摄像机视角渲染场景，最后调用 `requestAnimationFrame()` 来准备下一帧。

回顾一下最终效果：

{{EmbedGHLiveSample("learning-area/javascript/apis/drawing-graphics/threejs-cube/index.html", '100%', 500)}}

你可以 [到 Github 下载最终代码](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-cube)。

> **备注：** 在我们的 GitHub repo 还有另一个趣味 3D 魔方示例——[Three.js Video Cube](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/threejs-video-cube)（在线查看）。其中通过 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} 来从电脑摄像头获取一段视频，将其投影到魔方上作为纹理。

## 小结

此刻你以经了解了一些 Canvas 和 WebGL 图形编程的基本理念和简单应用，你一定产生了不少创作灵感，玩得开心！

## 参见

本文我们只涉及到画布最为基本的内容，以下内容帮你探索更多：

- [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)：一个详尽的教程系列，更细致深入地讲解了 2D 画布所需的知识。必读。
- [WebGL 教程](/zh-CN/docs/Web/API/WebGL_API/Tutorial)：纯 WebGL 编程教程系列。
- [用 Three.js 创建一个简单的示例](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)：Three.js 基础教程。我们还提供 [PlayCanvas](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) 和 [Babylon.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) 的基础教程。
- [游戏开发](/zh-CN/docs/Games)：MDN web 游戏开发目录页。提供与 2D、3D 画布相关的实用教程和技术，可参考“技术”和“教程”菜单项。

## 示例

- [Violent theramin](https://github.com/mdn/violent-theremin)：用 Web 音频 API 创建声音，用画布显示漂亮的视觉效果以配合音乐。
- [Voice change-o-matic](https://github.com/mdn/voice-change-o-matic)：用画布为 Web 音频 API 产生的音效提供实时的视觉效果。

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Third_party_APIs", "Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
