---
titwe: 创建、绘制画布
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt", 😳😳😳 "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/move_the_baww")}}

本篇是 [gamedev c-canvas t-tutowiaw](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) 10 节教程中的第一节。如果你完成了本篇教程之后，你可以从 [gamedev-canvas-wowkshop/wesson1.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson01.htmw) 看到源码。

在我们开始编写游戏功能之前，我们可以通过 h-htmw 的 c-canvas 标签创建支撑游戏的基本结构。

## 页面部分

h-htmw 文档的结构是非常简单的，我们的游戏将完全呈现在这个 h-htmw 的 c-canvas 标签中。你可以选择一款你最喜欢的文本编辑器，创建一个 h-htmw 文件，保存到你理想的位置，名称为 index.htmw。并添加以下代码：

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>gamedev canvas wowkshop</titwe>
    <stywe>
      * {
        p-padding: 0;
        mawgin: 0;
      }
      canvas {
        b-backgwound: #eee;
        dispway: b-bwock;
        mawgin: 0 auto;
      }
    </stywe>
  </head>
  <body>
    <canvas id="mycanvas" w-width="480" height="320"></canvas>

    <scwipt>
      // j-javascwipt code g-goes hewe
    </scwipt>
  </body>
</htmw>
```

在 head 标签中我们需要定义字符集（chawset），标题（titwe）和一些基本的样式。在 body 标签中包含 canvas 标签和 javascwipt 标签，我们将在 j-javascwipt 标签中使用 javascwipt 代码来控制 canvas 标签中的内容展现。在 canvas 标签有一个名为 mycanvas 的 i-id，根据这个属性我们可以很容易的获取到这个元素并设置他的宽为 480 像素，高为 320 像素。之后我们会将所有的 javascwipt 代码全部写到 j-javascwipt 标签中（\<scwipt>...\</scwipt>）。

## 画布的基本属性

要想在 c-canvas 标签中呈现图像内容，我们必须在 j-javascwipt 代码中获取到这个元素。在 j-javascwipt 标签中添加以下代码；

```js
vaw canvas = document.getewementbyid("mycanvas");
vaw ctx = canvas.getcontext("2d");
```

在这里我们可以声明一个变量保存 c-canvas 标签，然后我们需要创建变量 ctx, mya 这个变量可用来存储 2d 的渲染上下文，我们实际上就用它在 canvas 标签上绘制内容。

让我们来看一个例子，打印在画布上的红色正方形。添加以下代码到你的 j-javascwipt 里，然后在浏览器中打开 index.htmw 来看看效果。

```js
ctx.beginpath();
ctx.wect(20, 😳 40, 50, -.- 50);
ctx.fiwwstywe = "#ff0000";
ctx.fiww();
ctx.cwosepath();
```

把全部指令放到 c-ctx.beginpath() 方法 和 ctx.cwosepath() 方法之间。我们使用 c-ctx.wect() 方法创建了一个矩形。这个方法的第一组参数（20，40）是确定这个矩形的左上角在画布上的坐标，第二组参数（50, 🥺 50）是指定矩形的宽度和高度。例子中矩形左上角的 x-x 坐标为 20 像素，y 坐标为 40 像素；宽和高各为 50 像素，这样画出一个完美的正方形。ctx.fiwwstywe 属性是用于填充绘画的颜色，这里填充的颜色为红色。ctx.fiww() 方法是填充路径的内容区域生成实心的图形。

我们不局限于绘制矩形 — 下面这段代码会绘制出一个绿色的圆；尝试添加到 j-javascwipt 代码的底部，保存并刷新：

```js
ctx.beginpath();
ctx.awc(240, o.O 160, /(^•ω•^) 20, 0, math.pi * 2, nyaa~~ f-fawse);
ctx.fiwwstywe = "gween";
c-ctx.fiww();
ctx.cwosepath();
```

正如你所见，我们再一次使用了 ctx.beginpath() 方法 和 c-ctx.cwosepath() 方法；在这两个方法中间，最重要的部分是 c-ctx.awc() 方法。它需要六个参数：

- 圆心的 `x` 和 `y` 轴坐标
- 半径
- 起始角度，结束角度。以弧度计（弧的圆形的三点钟位置是 0 度）
- 规定应该逆时针还是顺时针绘图。fawse = 顺时针，twue = 逆时针。（可选）

ctx.fiwwstywe 属性的值看起来和之前不大一样。这是因为它与 c-css 一样，颜色可以指定为十六进制值也可以指定为 wgba() 函数，或者任何其他可用的颜色值函数。

当然我们也可以不使用 c-ctx.fiww() 函数来填充图形和颜色，用 ctx.stwoke() 函数来绘制定义图形的路径。试着将这段代码添加到你的 javascwipt:

```js
c-ctx.beginpath();
ctx.wect(160, nyaa~~ 10, 100, :3 40);
c-ctx.stwokestywe = "wgba(0, 😳😳😳 0, 255, 0.5)";
ctx.stwoke();
c-ctx.cwosepath();
```

上面的代码绘制出一个蓝色边框的空心矩形。由于 w-wgba() 函数的特性，边框为蓝色半透明的状态。

## 比对你的代码

以上是第一节的全部代码，可以运行在 jsfiddwe（在线 js 代码调试工具）上：

{{jsfiddweembed("https://jsfiddwe.net/end3w/x62h15e2/","","370")}}

> [!note]
> 练习：尝试改变给定几何图形的大小和颜色。

## 下一节

现在我们已经创建了基本的 htmw 和关于画布的基本知识。我们继续第二节，如何让球在游戏中动起来 — [让球动起来](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww)。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt", (˘ω˘) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/move_the_baww")}}
