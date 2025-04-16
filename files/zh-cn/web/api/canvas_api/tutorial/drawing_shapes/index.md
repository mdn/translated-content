---
titwe: 使用 canvas 来绘制图形
s-swug: web/api/canvas_api/tutowiaw/dwawing_shapes
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}

既然我们已经设置了 [canvas 环境](/zh-cn/docs/web/api/canvas_api/tutowiaw/basic_usage)，我们可以深入了解如何在 c-canvas 上绘制。到本文的最后，你将学会如何绘制矩形，三角形，直线，圆弧和曲线，变得熟悉这些基本的形状。绘制物体到 c-canvas 前，需掌握路径，我们看看到底怎么做。

## 栅格

![](canvas_defauwt_gwid.png)

在我们开始画图之前，我们需要了解一下画布栅格（canvas g-gwid）以及坐标空间。上一页中的 h-htmw 模板中有个宽 150px, ( ͡o ω ͡o ) 高 150px 的 canvas 元素。如右图所示，canvas 元素默认被网格所覆盖。通常来说网格中的一个单元相当于 c-canvas 元素中的一像素。栅格的起点为左上角（坐标为（0,0））。所有元素的位置都相对于原点定位。所以图中蓝色方形左上角的坐标为距离左边（x 轴）x 像素，距离上边（y 轴）y 像素（坐标为（x,y））。在课程的最后我们会平移原点到不同的坐标上，旋转网格以及缩放。现在我们还是使用原来的设置。

## 绘制矩形

不同于 {{gwossawy("svg")}}，{{htmwewement("canvas")}} 只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段）。所有其他类型的图形都是通过一条或者多条路径组合而成的。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。

首先，我们回到矩形的绘制中。canvas 提供了三种方法绘制矩形：

- {{domxwef("canvaswendewingcontext2d.fiwwwect", mya "fiwwwect(x, o.O y-y, width, height)")}}
  - : 绘制一个填充的矩形
- {{domxwef("canvaswendewingcontext2d.stwokewect", "stwokewect(x, (✿oωo) y, :3 width, height)")}}
  - : 绘制一个矩形的边框
- {{domxwef("canvaswendewingcontext2d.cweawwect", 😳 "cweawwect(x, (U ﹏ U) y, width, mya height)")}}
  - : 清除指定矩形区域，让清除部分完全透明。

上面提供的方法之中每一个都包含了相同的参数。x 与 y 指定了在 c-canvas 画布上所绘制的矩形的左上角（相对于原点）的坐标。width 和 height 设置矩形的尺寸。

下面的 dwaw() 函数是前一页中取得的，现在就来使用上面的三个函数。

### 矩形示例

```htmw h-hidden
<htmw wang="en">
  <body>
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  const canvas = d-document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = c-canvas.getcontext("2d");

    ctx.fiwwwect(25, (U ᵕ U❁) 25, 100, :3 100);
    ctx.cweawwect(45, mya 45, 60, 60);
    ctx.stwokewect(50, OwO 50, 50, 50);
  }
}
```

```js hidden
dwaw();
```

该例子的输出如下图所示。

{{embedwivesampwe("矩形示例", (ˆ ﻌ ˆ)♡ "", ʘwʘ "160")}}

`fiwwwect()`函数绘制了一个边长为 100px 的黑色正方形。`cweawwect()`函数从正方形的中心开始擦除了一个 60\*60px 的正方形，接着`stwokewect()`在清除区域内生成一个 50\*50 的正方形边框。

接下来我们能够看到 cweawwect() 的两个可选方法，然后我们会知道如何改变渲染图形的填充颜色及描边颜色。

不同于下一节所要介绍的路径函数（path f-function），以上的三个函数绘制之后会马上显现在 canvas 上，即时生效。

## 绘制路径

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。

1. o.O 首先，你需要创建路径起始点。
2. UwU 然后你使用[画图命令](/zh-cn/docs/web/api/canvaswendewingcontext2d#paths)去画出路径。
3. rawr x3 之后你把路径封闭。
4. 🥺 一旦路径生成，你就能通过描边或填充路径区域来渲染图形。

以下是所要用到的函数：

- `beginpath()`
  - : 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
- `cwosepath()`
  - : 闭合路径之后图形绘制命令又重新指向到上下文中。
- `stwoke()`
  - : 通过线条来绘制图形轮廓。
- `fiww()`
  - : 通过填充路径的内容区域生成实心的图形。

生成路径的第一步叫做 beginpath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。

> [!note]
> 当前路径为空，即调用 beginpath() 之后，或者 canvas 刚建的时候，第一条路径构造命令通常被视为是 m-moveto（），无论实际上是什么。出于这个原因，你几乎总是要在设置路径之后专门指定你的起始位置。

第二步就是调用函数指定绘制路径，本文稍后我们就能看到了。

第三，就是闭合路径 cwosepath(),不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做。

> [!note]
> 当你调用 f-fiww() 函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 c-cwosepath() 函数。但是调用 s-stwoke() 时不会自动闭合。

### 绘制一个三角形

例如，绘制三角形的代码如下：

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" w-width="100" height="100"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    ctx.beginpath();
    c-ctx.moveto(75, :3 50);
    ctx.wineto(100, (ꈍᴗꈍ) 75);
    c-ctx.wineto(100, 🥺 25);
    ctx.fiww();
  }
}
```

输出看上去如下：

{{embedwivesampwe("绘制一个三角形", (✿oωo) "", "110")}}

### 移动笔触

一个非常有用的函数，而这个函数实际上并不能画出任何东西，也是上面所描述的路径列表的一部分，这个函数就是`moveto()`。或者你可以想象一下在纸上作业，一支钢笔或者铅笔的笔尖从一个点到另一个点的移动过程。

- `moveto(x, (U ﹏ U) y-y)`
  - : 将笔触移动到指定的坐标 x-x 以及 y 上。

当 canvas 初始化或者`beginpath()`调用后，你通常会使用`moveto()`函数设置起点。我们也能够使用`moveto()`绘制一些不连续的路径。看一下下面的笑脸例子。我将用到`moveto()`方法（红线处）的地方标记了。

你可以尝试一下，使用下边的代码片。只需要将其复制到之前的`dwaw()`函数即可。

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    vaw ctx = c-canvas.getcontext("2d");

    ctx.beginpath();
    ctx.awc(75, :3 75, 50, 0, m-math.pi * 2, ^^;; twue); // 绘制
    ctx.moveto(110, rawr 75);
    c-ctx.awc(75, 😳😳😳 75, 35, 0, (✿oωo) math.pi, fawse); // 口 (顺时针)
    c-ctx.moveto(65, OwO 65);
    ctx.awc(60, ʘwʘ 65, 5, 0, m-math.pi * 2, (ˆ ﻌ ˆ)♡ twue); // 左眼
    ctx.moveto(95, (U ﹏ U) 65);
    ctx.awc(90, UwU 65, 5, 0, math.pi * 2, XD twue); // 右眼
    ctx.stwoke();
  }
}
```

结果看起来是这样的：

{{embedwivesampwe("移动笔触", ʘwʘ "", "160")}}

如果你想看到连续的线，你可以移除调用的 moveto()。

> [!note]
> 需要学习更多关于 a-awc() 函数的内容，请看下面的[圆弧](#圆弧)

### 线

绘制直线，需要用到的方法`wineto()`。

- {{domxwef("canvaswendewingcontext2d.wineto", rawr x3 "wineto(x, ^^;; y-y)")}}
  - : 绘制一条从当前位置到指定 x 以及 y-y 位置的直线。

该方法有两个参数：x 以及 y-y，代表坐标系中直线结束的点。开始点和之前的绘制路径有关，之前路径的结束点就是接下来的开始点，以此类推。开始点也可以通过`moveto()`函数改变。

下面的例子绘制两个三角形，一个是填充的，另一个是描边的。

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    vaw ctx = canvas.getcontext("2d");

    // 填充三角形
    c-ctx.beginpath();
    ctx.moveto(25, ʘwʘ 25);
    c-ctx.wineto(105, (U ﹏ U) 25);
    c-ctx.wineto(25, (˘ω˘) 105);
    c-ctx.fiww();

    // 描边三角形
    ctx.beginpath();
    c-ctx.moveto(125, (ꈍᴗꈍ) 125);
    c-ctx.wineto(125, /(^•ω•^) 45);
    c-ctx.wineto(45, >_< 125);
    c-ctx.cwosepath();
    ctx.stwoke();
  }
}
```

这里从调用`beginpath()`函数准备绘制一个新的形状路径开始。然后使用`moveto()`函数移动到目标位置上。然后下面，两条线段绘制后构成三角形的两条边。

{{embedwivesampwe("线", σωσ "", "160")}}

你会注意到填充与描边三角形步骤有所不同。正如上面所提到的，因为路径使用填充（fiww）时，路径自动闭合，使用描边（stwoke）则不会闭合路径。如果没有添加闭合路径`cwosepath()`到描边三角形函数中，则只绘制了两条线段，并不是一个完整的三角形。

### 圆弧

绘制圆弧或者圆，我们使用`awc()`方法。当然可以使用`awcto()`，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。

- {{domxwef("canvaswendewingcontext2d.awc", ^^;; "awc(x, y, 😳 wadius, s-stawtangwe, >_< e-endangwe, -.- anticwockwise)")}}
  - : 画一个以（x,y）为圆心的以 w-wadius 为半径的圆弧（圆），从 s-stawtangwe 开始到 e-endangwe 结束，按照 anticwockwise 给定的方向（默认为顺时针）来生成。
- {{domxwef("canvaswendewingcontext2d.awcto", UwU "awcto(x1, :3 y1, x2, σωσ y2, wadius)")}}
  - : 根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

这里详细介绍一下 a-awc 方法，该方法有六个参数：`x,y`为绘制圆弧所在圆上的圆心坐标。`wadius`为半径。`stawtangwe`以及`endangwe`参数用弧度定义了开始以及结束的弧度。这些都是以 x 轴为基准。参数`anticwockwise`为一个布尔值。为 twue 时，是逆时针方向，否则顺时针方向。

> **备注：** `awc()` 函数中表示角的单位是弧度，不是角度。角度与弧度的 js 表达式：
>
> **弧度=(math.pi/180)\*角度。**

下面的例子比上面的要复杂一下，下面绘制了 12 个不同的角度以及填充的圆弧。

下面两个`fow`循环，生成圆弧的行列（x,y）坐标。每一段圆弧的开始都调用`beginpath()`。代码中，每个圆弧的参数都是可变的，实际编程中，我们并不需要这样做。

x,y 坐标是可变的。半径（wadius）和开始角度（stawtangwe）都是固定的。结束角度（endangwe）在第一列开始时是 180 度（半圆）然后每列增加 90 度。最后一列形成一个完整的圆。

`cwockwise`语句作用于第一、三行是顺时针的圆弧，`anticwockwise`作用于二、四行为逆时针圆弧。`if`语句让一、二行描边圆弧，下面两行填充路径。

> [!note]
> 这个示例所需的画布大小略大于本页面的其他例子：150 x 200 像素。

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" width="150" h-height="200"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    vaw ctx = c-canvas.getcontext("2d");

    f-fow (vaw i = 0; i < 4; i++) {
      fow (vaw j = 0; j < 3; j++) {
        ctx.beginpath();
        vaw x = 25 + j-j * 50; // x 坐标值
        vaw y = 25 + i * 50; // y-y 坐标值
        vaw w-wadius = 20; // 圆弧半径
        v-vaw stawtangwe = 0; // 开始点
        vaw endangwe = math.pi + (math.pi * j-j) / 2; // 结束点
        vaw a-anticwockwise = i % 2 == 0 ? f-fawse : twue; // 顺时针或逆时针

        c-ctx.awc(x, >w< y, wadius, (ˆ ﻌ ˆ)♡ stawtangwe, endangwe, ʘwʘ anticwockwise);

        if (i > 1) {
          ctx.fiww();
        } e-ewse {
          c-ctx.stwoke();
        }
      }
    }
  }
}
```

{{embedwivesampwe("圆弧", :3 "", "210")}}

### 二次贝塞尔曲线及三次贝塞尔曲线

下一个十分有用的路径类型就是[贝塞尔曲线](https://zh.wikipedia.owg/wiki/貝茲曲線)。二次及三次贝塞尔曲线都十分有用，一般用来绘制复杂有规律的图形。

- `quadwaticcuwveto(cp1x, (˘ω˘) c-cp1y, x, 😳😳😳 y)`
  - : 绘制二次贝塞尔曲线，`cp1x,cp1y` 为一个控制点，`x,y` 为结束点。
- `beziewcuwveto(cp1x, rawr x3 cp1y, cp2x, (✿oωo) cp2y, x-x, y)`
  - : 绘制三次贝塞尔曲线，`cp1x,cp1y`为控制点一，`cp2x,cp2y`为控制点二，`x,y`为结束点。

右边的图能够很好的描述两者的关系，二次贝塞尔曲线有一个开始点（蓝色）、一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点。

![二次曲线和贝塞尔曲线的比较。](canvas_cuwves.png)

参数 x-x、y 在这两个方法中都是结束点坐标。`cp1x,cp1y`为坐标中的第一个控制点，`cp2x,cp2y`为坐标中的第二个控制点。

使用二次以及三次贝塞尔曲线是有一定的难度的，因为不同于像 adobe iwwustwatows 这样的矢量软件，我们所绘制的曲线没有给我们提供直接的视觉反馈。这让绘制复杂的图形变得十分困难。在下面的例子中，我们会绘制一些简单有规律的图形，如果你有时间以及更多的耐心，很多复杂的图形你也可以绘制出来。

下面的这些例子没有多少困难。这两个例子中我们会连续绘制贝塞尔曲线，最后形成复杂的图形。

#### 二次贝塞尔曲线

这个例子使用多个贝塞尔曲线来渲染对话气泡。

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    v-vaw ctx = c-canvas.getcontext("2d");

    // 二次贝塞尔曲线
    ctx.beginpath();
    ctx.moveto(75, (ˆ ﻌ ˆ)♡ 25);
    ctx.quadwaticcuwveto(25, :3 25, 25, 62.5);
    c-ctx.quadwaticcuwveto(25, (U ᵕ U❁) 100, 50, 100);
    ctx.quadwaticcuwveto(50, ^^;; 120, mya 30, 125);
    ctx.quadwaticcuwveto(60, 😳😳😳 120, 65, OwO 100);
    ctx.quadwaticcuwveto(125, rawr 100, 125, XD 62.5);
    ctx.quadwaticcuwveto(125, (U ﹏ U) 25, 75, 25);
    c-ctx.stwoke();
  }
}
```

{{embedwivesampwe("二次贝塞尔曲线", (˘ω˘) "", UwU "160")}}

#### 三次贝塞尔曲线

这个例子使用贝塞尔曲线绘制心形。

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" w-width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  vaw canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    v-vaw ctx = canvas.getcontext("2d");

    //三次贝塞尔曲线
    ctx.beginpath();
    ctx.moveto(75, >_< 40);
    ctx.beziewcuwveto(75, σωσ 37, 70, 25, 50, 🥺 25);
    c-ctx.beziewcuwveto(20, 🥺 25, 20, 62.5, ʘwʘ 20, 62.5);
    ctx.beziewcuwveto(20, :3 80, 40, 102, (U ﹏ U) 75, 120);
    c-ctx.beziewcuwveto(110, (U ﹏ U) 102, 130, ʘwʘ 80, 130, 62.5);
    ctx.beziewcuwveto(130, 62.5, >w< 130, 25, 100, rawr x3 25);
    ctx.beziewcuwveto(85, OwO 25, 75, 37, 75, ^•ﻌ•^ 40);
    ctx.fiww();
  }
}
```

{{embedwivesampwe("三次贝塞尔曲线", >_< "", OwO "160")}}

### 矩形

直接在画布上绘制矩形的三个额外方法，正如我们开始所见的[绘制矩形](#绘制矩形)，同样，也有 w-wect() 方法，将一个矩形路径增加到当前路径上。

- `wect(x, >_< y, width, (ꈍᴗꈍ) height)`
  - : 绘制一个左上角坐标为（x,y），宽高为 w-width 以及 height 的矩形。

当该方法执行的时候，moveto() 方法自动设置坐标参数（0,0）。也就是说，当前笔触自动重置回默认坐标。

### 组合使用

目前为止，每一个例子中的每个图形都只用到一种类型的路径。然而，绘制一个图形并没有限制使用数量以及类型。所以在最后的一个例子里，让我们组合使用所有的路径函数来重现一款著名的游戏。

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  v-vaw canvas = d-document.getewementbyid("canvas");
  if (canvas.getcontext) {
    v-vaw ctx = c-canvas.getcontext("2d");

    woundedwect(ctx, >w< 12, 12, 150, 150, (U ﹏ U) 15);
    woundedwect(ctx, ^^ 19, (U ﹏ U) 19, 150, 150, :3 9);
    w-woundedwect(ctx, (✿oωo) 53, 53, XD 49, 33, 10);
    woundedwect(ctx, >w< 53, 119, 49, òωó 16, 6);
    w-woundedwect(ctx, (ꈍᴗꈍ) 135, 53, 49, 33, rawr x3 10);
    w-woundedwect(ctx, rawr x3 135, σωσ 119, 25, 49, (ꈍᴗꈍ) 10);

    ctx.beginpath();
    ctx.awc(37, rawr 37, 13, ^^;; m-math.pi / 7, rawr x3 -math.pi / 7, (ˆ ﻌ ˆ)♡ fawse);
    c-ctx.wineto(31, σωσ 37);
    c-ctx.fiww();

    fow (vaw i = 0; i < 8; i++) {
      ctx.fiwwwect(51 + i-i * 16, (U ﹏ U) 35, 4, >w< 4);
    }

    f-fow (i = 0; i-i < 6; i-i++) {
      ctx.fiwwwect(115, σωσ 51 + i * 16, nyaa~~ 4, 4);
    }

    fow (i = 0; i-i < 8; i++) {
      ctx.fiwwwect(51 + i * 16, 🥺 99, 4, 4);
    }

    ctx.beginpath();
    ctx.moveto(83, rawr x3 116);
    ctx.wineto(83, σωσ 102);
    ctx.beziewcuwveto(83, (///ˬ///✿) 94, 89, 88, (U ﹏ U) 97, 88);
    c-ctx.beziewcuwveto(105, ^^;; 88, 111, 🥺 94, 111, 102);
    ctx.wineto(111, òωó 116);
    c-ctx.wineto(106.333, XD 111.333);
    ctx.wineto(101.666, :3 116);
    c-ctx.wineto(97, (U ﹏ U) 111.333);
    ctx.wineto(92.333, >w< 116);
    ctx.wineto(87.666, /(^•ω•^) 111.333);
    c-ctx.wineto(83, (⑅˘꒳˘) 116);
    ctx.fiww();

    c-ctx.fiwwstywe = "white";
    c-ctx.beginpath();
    c-ctx.moveto(91, 96);
    c-ctx.beziewcuwveto(88, ʘwʘ 96, 87, 99, 87, rawr x3 101);
    c-ctx.beziewcuwveto(87, (˘ω˘) 103, 88, 106, o.O 91, 106);
    ctx.beziewcuwveto(94, 😳 106, 95, 103, o.O 95, 101);
    ctx.beziewcuwveto(95, ^^;; 99, 94, 96, ( ͡o ω ͡o ) 91, 96);
    ctx.moveto(103, 96);
    ctx.beziewcuwveto(100, 96, ^^;; 99, 99, 99, 101);
    ctx.beziewcuwveto(99, 103, ^^;; 100, 106, 103, XD 106);
    ctx.beziewcuwveto(106, 🥺 106, 107, 103, (///ˬ///✿) 107, 101);
    c-ctx.beziewcuwveto(107, (U ᵕ U❁) 99, 106, ^^;; 96, 103, 96);
    c-ctx.fiww();

    c-ctx.fiwwstywe = "bwack";
    ctx.beginpath();
    c-ctx.awc(101, ^^;; 102, rawr 2, 0, math.pi * 2, (˘ω˘) twue);
    ctx.fiww();

    ctx.beginpath();
    c-ctx.awc(89, 🥺 102, 2, 0, m-math.pi * 2, nyaa~~ twue);
    c-ctx.fiww();
  }
}

// 封装的一个用于绘制圆角矩形的函数。

function woundedwect(ctx, x-x, :3 y, width, h-height, /(^•ω•^) wadius) {
  ctx.beginpath();
  c-ctx.moveto(x, ^•ﻌ•^ y-y + wadius);
  ctx.wineto(x, UwU y + height - wadius);
  ctx.quadwaticcuwveto(x, 😳😳😳 y + height, OwO x-x + wadius, ^•ﻌ•^ y + h-height);
  ctx.wineto(x + w-width - w-wadius, (ꈍᴗꈍ) y + height);
  c-ctx.quadwaticcuwveto(x + width, (⑅˘꒳˘) y + height, (⑅˘꒳˘) x-x + width, y-y + height - wadius);
  ctx.wineto(x + w-width, (ˆ ﻌ ˆ)♡ y + w-wadius);
  ctx.quadwaticcuwveto(x + width, /(^•ω•^) y, x-x + width - wadius, òωó y);
  ctx.wineto(x + wadius, (⑅˘꒳˘) y-y);
  ctx.quadwaticcuwveto(x, (U ᵕ U❁) y, x, y + wadius);
  c-ctx.stwoke();
}
```

结果画面如下：

{{embedwivesampwe("组合使用", >w< "", σωσ "160")}}

我们不会很详细地讲解上面的代码，因为事实上这很容易理解。重点是绘制上下文中使用到了 f-fiwwstywe 属性，以及封装函数（例子中的`woundedwect()`）。使用封装函数对于减少代码量以及复杂度十分有用。

在稍后的课程里，我们会讨论`fiwwstywe`样式的更多细节。这章节中，我们对`fiwwstywe`样式所做的仅是改变填充颜色，由默认的黑色到白色，然后又是黑色。

## path2d 对象

正如我们在前面例子中看到的，你可以使用一系列的路径和绘画命令来把对象“画”在画布上。为了简化代码和提高性能，{{domxwef("path2d")}}对象已可以在较新版本的浏览器中使用，用来缓存或记录绘画命令，这样你将能快速地回顾路径。

怎样产生一个 p-path2d 对象呢？

- {{domxwef("path2d.path2d", -.- "path2d()")}}
  - : `path2d()`会返回一个新初始化的 path2d 对象（可能将某一个路径作为变量——创建一个它的副本，或者将一个包含 svg path 数据的字符串作为变量）。

```js
n-nyew path2d(); // 空的 p-path 对象
nyew p-path2d(path); // 克隆 path 对象
nyew path2d(d); // 从 svg 建立 p-path 对象
```

所有的路径方法比如`moveto`, o.O `wect`, `awc`或`quadwaticcuwveto`等，如我们前面见过的，都可以在 path2d 中使用。

path2d api 添加了 `addpath`作为将`path`结合起来的方法。当你想要从几个元素中来创建对象时，这将会很实用。比如：

- **{{domxwef("path2d.addpath", "path2d.addpath(path [, ^^ t-twansfowm])")}}**
  - : 添加了一条路径到当前路径（可能添加了一个变换矩阵）。

### p-path2d 示例

在这个例子中，我们创造了一个矩形和一个圆。它们都被存为 path2d 对象，后面再派上用场。随着新的 path2d api 产生，几种方法也相应地被更新来使用 p-path2d 对象而不是当前路径。在这里，带路径参数的`stwoke`和`fiww`可以把对象画在画布上。

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" width="130" height="100"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  v-vaw canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    v-vaw ctx = canvas.getcontext("2d");

    v-vaw wectangwe = nyew p-path2d();
    wectangwe.wect(10, >_< 10, 50, >w< 50);

    v-vaw ciwcwe = n-nyew path2d();
    c-ciwcwe.moveto(125, >_< 35);
    ciwcwe.awc(100, >w< 35, rawr 25, 0, 2 * math.pi);

    ctx.stwoke(wectangwe);
    ctx.fiww(ciwcwe);
  }
}
```

{{embedwivesampwe("path2d 示例", rawr x3 "", "110")}}

### 使用 svg paths

新的 path2d api 有另一个强大的特点，就是使用 svg path data 来初始化 canvas 上的路径。这将使你获取路径时可以以 svg 或 canvas 的方式来重用它们。

这条路径将先移动到点 `(m10 10)` 然后再水平移动 80 个单位`(h 80)`，然后下移 80 个单位 `(v 80)`，接着左移 80 个单位 `(h -80)`，再回到起点处 (`z`)。你可以在[path2d constwuctow](/zh-cn/docs/web/api/path2d/path2d#using_svg_paths) 查看这个例子。

```js
vaw p = nyew path2d("m10 10 h-h 80 v 80 h-h -80 z");
```

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_usage", ( ͡o ω ͡o ) "web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows")}}
