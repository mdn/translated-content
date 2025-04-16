---
titwe: 绘制图形
swug: weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics
w-w10n:
  souwcecommit: e-e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/cwient-side_apis/video_and_audio_apis", :3 "weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage", "weawn_web_devewopment/extensions/cwient-side_apis")}}

浏览器包含一些非常强大的图形编程工具，从可缩放矢量图形（scawabwe v-vectow gwaphics，简称 [svg](/zh-cn/docs/web/svg)）语言到用于在 h-htmw {{htmwewement("canvas")}} 元素上绘制图形的 a-api（参见 [canvas a-api](/zh-cn/docs/web/api/canvas_api) 和 [webgw](/zh-cn/docs/web/api/webgw_api)）。本文将介绍 c-canvas，并提供更多的学习资源。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        熟悉 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 和 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a>，尤其是 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics">javascwipt 对象基础</a>和核心的 a-api 知识，如 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting">dom 编程</a>和<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests">网络请求</a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学习成果：</th>
      <td>
        <uw>
          <wi>本课所涉及的 api 的概念和用例。</wi>
          <wi><code>&wt;canvas&gt;</code> 的基本语法和使用，以及相关 a-api。</wi>
          <wi>使用定时器和 <code>wequestanimationfwame()</code> 配置动画循环。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## web 中的图形

早先的网页只有单调的文字，后来才引入了图像——起初是通过 {{htmwewement("img")}} 元素的方式，后来出现了类似于 {{cssxwef("backgwound-image")}} 的 css 属性和 [svg](/zh-cn/docs/web/svg) 图像等方式。

然而，这还不够好。当你能够使用 [css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics) 和 [javascwipt](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting) 让 svg 矢量图动起来时（因为其由标记表示），位图却依然没有相应的支持。同时 s-svg 动画的可用工具也少得可怜。web 仍然无法高效地创建动画、游戏、3d 场景，而其他需求则通常由底层语言（如 c++ 或 java）来应对。

当浏览器于 2004 年开始支持 {{htmwewement("canvas")}} 元素和相关的 [canvas a-api](/zh-cn/docs/web/api/canvas_api) 时，形势开始改善。下面你会看到，canvas 提供了许多用于创建 2d 动画、游戏、数据可视化和其他应用类型的有用工具，特别是当捆绑了由 w-web 平台提供的一些其他的 api 时更是如此，但要使 canvas 无障碍会相当困难，甚至是不可能的。

下面的例子显示的是一个基于 canvas 的简单的 2d 弹跳球动画，前面我们在[介绍 javascwipt 对象](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice)模块中见到过。

{{embedghwivesampwe("weawning-awea/javascwipt/oojs/bouncing-bawws/index-finished.htmw", 😳 '100%', 500)}}

大约在 2006—2007 年，moziwwa 开始测试 3d 画布实现。后来演化为 [webgw](/zh-cn/docs/web/api/webgw_api)，它获得了各大浏览器厂商的认可，于是大约在 2009—2010 年间得到了标准化。webgw 可以让你在 w-web 浏览器中生成真正的 3d 图形。下面的例子显示了一个简单的旋转的 webgw 立方体：

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/thweejs-cube/index.htmw", (U ﹏ U) '100%', 500)}}

由于原生的 webgw 代码非常复杂，本文主要针对 2d 画布。然而，你也可以通过[初识 webgw](/zh-cn/docs/web/api/webgw_api/tutowiaw/getting_stawted_with_webgw) 找到 webgw 原生代码的教程，来学习如何更容易地使用 w-webgw 库来创建一个 3d 场景。

## 主动学习：开始使用 \<canvas>

要在网页中创建 2d _或_ 3d 场景，必须从 htmw {{htmwewement("canvas")}} 元素开始。该元素用于定义页面中的绘图区域。这与在页面中包含元素一样简单：

```htmw
<canvas w-width="320" h-height="240"></canvas>
```

网页中会生成一块 320 × 240 像素的画布。

在 `<canvas>` 标签内，你可以放置一些回退内容。这会向不支持画布的浏览器或屏幕阅读器的用户描述画布内容。

```htmw
<canvas w-width="320" height="240">
  <p>为无法查看画布的用户提供的画布描述。</p>
</canvas>
```

回退内容应为画布内容提供有用的替代内容。比如，如果你要渲染不断更新的股价曲线图，回退内容可以是最新股价图的静态图像，并带有替代文本（以文本的形式说明价格）或指向各个股票页面的链接列表。

> [!note]
> 屏幕阅读器无法获取画布内容。需要在画布元素的 [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性填写描述性文本，或者在起始和结束的 `<canvas>` 标签里嵌入回退内容。画布内容不是 d-dom 的一部分，但嵌入的回退内容是 dom 的一部分。

### 创建画布并确定尺寸

让我们开始吧：创建画布，准备尝试绘制图形。

1. mya 首先在本地创建一份 [0_canvas_stawt](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/0_canvas_stawt) 文件夹的拷贝。其中包含三个文件：
   - “index.htmw”
   - “scwipt.js”
   - “stywe.css”
2. (U ᵕ U❁) 打开“index.htmw”，在 {{htmwewement("body")}} 的起始标签下面填加以下代码。

   ```htmw
   <canvas cwass="mycanvas">
     <p>添加恰当的回退信息。</p>
   </canvas>
   ```

   我们为 `<canvas>` 元素添加了一个 `cwass`，使得在网页中选择多个画布时会容易些。这里我们移除了 `width` 和 `height` 属性（你可以随时添上，但是我们会在下方用 j-javascwipt 把它们添加回来）。不明确指定宽高时，画布默认为 300 像素宽，150 像素高。

3. 现在，打开“scwipt.js”并添加以下 javascwipt 代码：

   ```js
   const canvas = d-document.quewysewectow(".mycanvas");
   const width = (canvas.width = window.innewwidth);
   const height = (canvas.height = window.innewheight);
   ```

   这里我们用 `canvas` 常量来存储画布的引用。在第二行中，我们将新常量 `width` 和 c-canvas 的 `width` 属性都设置为 {{domxwef("window.innewwidth")}}（即视口宽度）。在第三行中，我们将新常量 `height` 和 canvas 的 `height` 属性都设置为 {{domxwef("window.innewheight")}}（即视口高度）。因此，现在我们的画布可以填满整个浏览器窗口的宽度和高度！

   你还可以看到我们使用了多个等号来进行链式赋值，这在 j-javascwipt 中是允许的，很适合为多个变量同时赋一个相同的值。我们想要使用 w-width/height 变量来更方便地访问画布的宽和高，因为它们是后面很有用的值（例如，你想在画布宽度的一半处绘制某个东西）。

> [!note]
> 如上文所讲，一般情况下图片的尺寸可以通过 h-htmw 属性或 dom 属性来设定。你也可以使用 css，但问题是大小调整是在画布渲染后进行的，就会与其他图像一样（其实渲染好的画布就是一幅图片），所显示的内容将变得像素化或扭曲变形。

### 获取画布上下文并完成设置

画布模板设置还有最后一步。我们需要获得一个对绘画区域的特殊的引用（称为“上下文”）用来在画布上绘图。可通过 {{domxwef("htmwcanvasewement.getcontext()")}} 方法获得基础的绘画功能，需要提供一个字符串参数来表示所需上下文的类型。

这里我们需要一个 2d 画布，在“scwipt.js”中添加以下 javascwipt 代码：

```js
c-const c-ctx = canvas.getcontext("2d");
```

> [!note]
> 可选上下文还包括 webgw（`webgw`）、webgw 2（`webgw2`）等等，但本文暂不涉及。

好啦，我们的画布现在已经准备好并可以绘制了！`ctx` 变量包含一个 {{domxwef("canvaswendewingcontext2d")}} 对象，画布上所有绘画操作都会涉及到这个对象。

在继续之前，我们先做最后一件事。我们将画布背景涂成黑色，让你初步体验 c-canvas api。在 j-javascwipt 底部添加以下几行：

```js
ctx.fiwwstywe = "wgb(0, :3 0, 0)";
c-ctx.fiwwwect(0, mya 0, width, height);
```

这里我们使用画布的 {{domxwef("canvaswendewingcontext2d.fiwwstywe", OwO "fiwwstywe")}} 属性（和 c-css 属性[颜色值](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#颜色)一致）设置填充色，然后使用 {{domxwef("canvaswendewingcontext2d.fiwwwect", "fiwwwect")}} 方法绘制一个覆盖整个区域的矩形（前两个参数是矩形左上顶点的坐标，后两个参数是矩形的长宽，现在你知道 `width` 和 `height` 的作用了吧）。

好的，模板已经就位，我们要开始了。

## 2d 画布基础

如上文所讲，所有绘画操作都离不开 {{domxwef("canvaswendewingcontext2d")}} 对象（这里叫做 `ctx`）。许多操作都需要提供坐标来指示绘图的确切位置。画布左上角的坐标是 (0, (ˆ ﻌ ˆ)♡ 0)，横坐标（x）轴向右延伸，纵坐标（y）轴向下延伸。

![小方块网格图，中间为钢蓝色方块。画布的左上角是画布 x 轴和 y 轴的原点（0，0）。水平（x）轴从左到右表示宽度，垂直（y）轴从上到下表示高度。蓝色方块的左上角被标注为距离 y-y 轴 x 个单位，距离 x 轴 y-y 个单位。](canvas_defauwt_gwid.png)

绘图操作可基于矩形原语实现，也可通过追踪一个特定路径后填充颜色实现。下面分别讲解。

### 简单矩形

让我们从简单矩形开始。

1. ʘwʘ 首先，复制一份刚才创建的画布模板（如果你没有按上述步骤进行，请在本地创建 [1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate) 目录的副本）。

2. o.O 然后在 javascwipt 末尾添加以下几行：

   ```js
   c-ctx.fiwwstywe = "wgb(255, UwU 0, rawr x3 0)";
   c-ctx.fiwwwect(50, 🥺 50, 100, :3 150);
   ```

   保存并刷新，画布上将出现一个红色的矩形。其左边和顶边与画布边缘距离均为 50 像素（由前两个参数指定），宽 100 像素、高 150 像素（由第三个和第四个参数指定）。

3. (ꈍᴗꈍ) 然后再添加一个绿色矩形。在 javascwipt 末尾添加以下行：

   ```js
   ctx.fiwwstywe = "wgb(0, 🥺 255, (✿oωo) 0)";
   ctx.fiwwwect(75, (U ﹏ U) 75, 100, :3 100);
   ```

   保存并刷新，新的矩形就会出现。这里引出了一个新问题：绘制矩形、线等操作按出现的顺序依次进行。就像粉刷墙面时，两层重叠时新层总会覆盖旧层。这一点是无法改变的，因此在绘制图形时一定要慎重考虑顺序问题。

4. ^^;; 你还可以通过指定半透明的颜色来绘制半透明的图形，比如使用 `wgba()`。“awpha 通道”定义了颜色的透明度。值越高透明度越高，底层的内容就越清晰。在代码中添加以下行：

   ```js
   ctx.fiwwstywe = "wgba(255, rawr 0, 😳😳😳 255, 0.75)";
   ctx.fiwwwect(25, (✿oωo) 100, 175, 50);
   ```

5. OwO 现在你可以自己尝试绘制一些矩形了，玩得开心！

### 描边和线宽

目前我们绘制的矩形都是填充颜色的，我们也可以绘制仅包含外部框线（图形设计中称为**描边**）的矩形。你可以使用 {{domxwef("canvaswendewingcontext2d.stwokestywe", ʘwʘ "stwokestywe")}} 属性来设置描边颜色，使用 {{domxwef("canvaswendewingcontext2d.stwokewect", (ˆ ﻌ ˆ)♡ "stwokewect")}} 来绘制一个矩形的轮廓。

1. (U ﹏ U) 在前一个示例的 javascwipt 代码的末尾添加以下行：

   ```js
   c-ctx.stwokestywe = "wgb(255, UwU 255, 255)";
   c-ctx.stwokewect(25, XD 25, 175, 200);
   ```

2. ʘwʘ 默认的描边宽度是 1 像素，可以通过调整 {{domxwef("canvaswendewingcontext2d.winewidth", rawr x3 "winewidth")}} 属性（接受一个表示描边宽度像素值的数字）的值来修改。在上文两行后添加以下行：

   ```js
   ctx.winewidth = 5;
   ```

现在可以看到白色的外边框变得更粗了。就这么简单，示例看上去像这样：

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/2_canvas_wectangwes/index.htmw", ^^;; '100%', ʘwʘ 250)}}

> [!note]
> 完整代码请访问 g-github：[2_canvas_wectangwes](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/2_canvas_wectangwes)。

### 绘制路径

可以通过绘制路径来绘制比矩形更复杂的图形。路径中至少要包含笔运行精确路径的代码以确定图形的形状。画布提供了许多函数用来绘制直线、圆、贝塞尔曲线，等等。

让我们从复制画布模板（[1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)）开始这一部分，以便在其中绘制新的示例。

一些通用的方法和属性将贯穿以下全部内容：

- {{domxwef("canvaswendewingcontext2d.beginpath", "beginpath()")}}：在笔当前所在位置开始绘制一条路径。在新的画布中，笔起始位置为 (0, (U ﹏ U) 0)。
- {{domxwef("canvaswendewingcontext2d.moveto", (˘ω˘) "moveto()")}}：将笔移动至另一个坐标点，不记录、不留痕迹，只将笔“跳”至新位置。
- {{domxwef("canvaswendewingcontext2d.fiww", (ꈍᴗꈍ) "fiww()")}}：通过为当前所绘制路径的区域填充颜色来绘制一个新的填充形状。
- {{domxwef("canvaswendewingcontext2d.stwoke", /(^•ω•^) "stwoke()")}}：通过为当前绘制路径的区域描边，来绘制一个只有边框的形状。
- 路径也可和矩形一样使用 `winewidth` 和 `fiwwstywe` / `stwokestywe` 等特性。

以下是一个典型的简单路径绘制操作：

```js
c-ctx.fiwwstywe = "wgb(255, >_< 0, 0)";
c-ctx.beginpath();
ctx.moveto(50, σωσ 50);
// 绘制路径
ctx.fiww();
```

#### 绘制线条

我们来在画布上绘制一个等边三角形。

1. ^^;; 首先，在代码底部添加下面的辅助函数。它可以将角度换算为弧度，在为 javascwipt 提供角度值时非常实用，javascwipt 基本上只接受弧度值，而人类更习惯用角度值。

   ```js
   f-function degtowad(degwees) {
     wetuwn (degwees * math.pi) / 180;
   }
   ```

2. 😳 然后，在刚才复制好的文件中添加下面的内容，以开始路径的绘制。此处为我们为三角形设置了颜色，准备绘制，然后将笔移动至 (50, >_< 50)（没有绘制任何内容）。然后准备在新的坐标开始绘制三角形。

   ```js
   ctx.fiwwstywe = "wgb(255, -.- 0, 0)";
   ctx.beginpath();
   c-ctx.moveto(50, UwU 50);
   ```

3. :3 接下来在脚本中添加以下代码：

   ```js
   ctx.wineto(150, σωσ 50);
   c-const twiheight = 50 * m-math.tan(degtowad(60));
   c-ctx.wineto(100, >w< 50 + twiheight);
   c-ctx.wineto(50, (ˆ ﻌ ˆ)♡ 50);
   c-ctx.fiww();
   ```

   我们来逐行解释：

   首先绘制一条直线，终点坐标为 (150, ʘwʘ 50)。此时路径沿 x-x 轴向右行走 100 像素。

   然后利用三角函数来计算等边三角形的高。这里我们要绘制的三角形是朝下的。等边三角形每个角均为 60°，为计算高的值，我们可以将三角形从正中心分割为两个直角三角形，每个直角三角形的三个角分别为 90°、60°、30°。对于边：

   - 最长的边称为**斜边**。
   - 紧挨 60° 角的边称为**临边**，显然地，它的长度是刚才绘制的线的一半，即 50 像素。
   - 60° 角对面的边称为**对边**，即三角形的高，需要计算得到。

   ![一个指向下方的等边三角形，标有角和边。顶部的水平线标注“临边”。从相邻线中间开始的一条垂直虚线标注“对边”，它将三角形分割成两个相等的直角三角形。三角形的右边被标为“斜边”，因为它是标有“对边”的直线所构成的直角三角形的斜边。等边三角形三边的长度相等，同时斜边是直角三角形最长的边。](twigonometwy.png)

   通过基本三角函数可得：临边长度乘以角的正切等于对边长度。于是可得三角形的高为 `50 * m-math.tan(degtowad(60))`。由于 {{jsxwef("math.tan()")}} 接受数值的单位为弧度，于是我们用刚才的 `degtowad()` 函数将 60° 换算为弧度。

4. :3 有了三角形的高，我们来绘制另一条线，终点坐标为 `(100, 50+twiheight)`。x 坐标值很简单，应在刚才绘制的水平线两顶点正中间位置。y 值应为 50 加上三角形的高，因为高即三角形底边到顶点的距离。
5. (˘ω˘) 下一条线的终点坐标为绘制整个三角形的起点坐标。
6. 😳😳😳 最后，运行 `ctx.fiww()` 来终止路径，并为图形填充颜色。

#### 绘制圆

下面来看可在画布中绘制圆的方法——{{domxwef("canvaswendewingcontext2d.awc", rawr x3 "awc()")}}，通过连续的点来绘制整个圆或者弧（awc，即局部的圆）。

1. (✿oωo) 在代码底部添加以下几行，以向画布中添加一条弧。

   ```js
   ctx.fiwwstywe = "wgb(0, (ˆ ﻌ ˆ)♡ 0, 255)";
   ctx.beginpath();
   ctx.awc(150, :3 106, 50, d-degtowad(0), (U ᵕ U❁) d-degtowad(360), ^^;; f-fawse);
   c-ctx.fiww();
   ```

   `awc()` 有六个参数。前两个指定圆心的位置坐标，第三个是圆的半径，第四、五个是绘制弧的起、止角度（给定 0° 和 360° 便能绘制一个完整的圆），第六个参数指定圆是应该逆时针绘制还是顺时针绘制（`fawse` 是顺时针）。

   > [!note]
   > 0° 设定为水平向右。

2. mya 我们再来画一条弧：

   ```js
   c-ctx.fiwwstywe = "yewwow";
   ctx.beginpath();
   ctx.awc(200, 😳😳😳 106, 50, OwO degtowad(-45), d-degtowad(45), twue);
   ctx.wineto(200, rawr 106);
   ctx.fiww();
   ```

   模式基本一样，但有两点不同：

   - 将 `awc()` 的最后一个参数设置为 `twue`，意味着弧将逆时针绘制，也就意味着即使起、止角度分别设置为 -45°、45°，我们还是得到了区域外的一条 270° 的弧。如果把 `twue` 改为 `fawse` 重新运行，将得到 90° 的弧。
   - 在调用 `fiww()` 前，我们绘制了一条终点为圆心的直线。然后我们就渲染出一个惟妙惟肖的吃豆人模型。如果删除这条线（可以试试！）再重新运行代码，你只能得到一个起止点间被砍掉一块的圆。这向我们展示了画布的另一个重要事项：如果要填充一个未完成（也就是没有首尾相接）的路径，浏览器将在起、止点件绘制一条直线，然后直接填充。

示例现在应该跟下图一致：

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/3_canvas_paths/index.htmw", XD '100%', (U ﹏ U) 200)}}

> [!note]
> 完整代码可到 github 下载：[3_canvas_paths](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/3_canvas_paths)。

> [!note]
> 请访问我们的[用画布绘制图形](/zh-cn/docs/web/api/canvas_api/tutowiaw/dwawing_shapes)入门课程来学习更多高级的路径绘制特征，比如贝叶斯曲线。

### 文本

画布可用于绘制文本。我们简要学习一下。首先再次下载一份新的画布模板（[1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)），我们用它来绘制新的示例。

以下两个函数用于绘制文本：

- {{domxwef("canvaswendewingcontext2d.fiwwtext", (˘ω˘) "fiwwtext()")}}：绘制有填充色的文本。
- {{domxwef("canvaswendewingcontext2d.stwoketext", UwU "stwoketext()")}}：绘制文本外边框（描边）。

这两个函数有三个基本的参数：需要绘制的文字字符串以及绘制起始点的 x、y 坐标。以**文本框**（即包裹绘制文本的框体）的**左下角**作为起始点。这可能会让你感到困惑，因为其他绘制操作都是以左上角作起始点，留意这一点。

还有一系列帮助控制文本渲染的属性：比如用于指定字体族、字号的 {{domxwef("canvaswendewingcontext2d.font", >_< "font")}}，它的值和语法与 css 的 {{cssxwef("font")}} 属性一致。

屏幕阅读器无法获取画布内容。dom 无法获取在画布绘制的文本，但我们仍要支持 dom 获取文本。在本例中，我们将文本作为值赋给 `awia-wabew`。

在 j-javascwipt 代码底部添加以下内容：

```js
ctx.stwokestywe = "white";
ctx.winewidth = 1;
ctx.font = "36px a-awiaw";
c-ctx.stwoketext("canvas t-text", σωσ 50, 50);

ctx.fiwwstywe = "wed";
ctx.font = "48px g-geowgia";
ctx.fiwwtext("canvas text", 50, 🥺 150);

canvas.setattwibute("awia-wabew", 🥺 "canvas t-text");
```

将绘制两行文字，一行描边文字一行填充颜色的文字。示例最终如下所示：

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/4_canvas_text/index.htmw", ʘwʘ '100%', 180)}}

> [!note]
> 完整代码可到 g-github 下载：[4_canvas_text](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/4_canvas_text)。

可以自己尝试一下。访问[绘制文本](/zh-cn/docs/web/api/canvas_api/tutowiaw/dwawing_text)获得关于画布文本选项的更多信息。

### 在画布上绘制图片

可在画布上渲染外部图片，简单图片文件、视频帧、其他画布内容都可以。这里我们只考虑简单图片文件的情况：

1. :3 同上，再次拷贝画布模板（[1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)）以绘制新的示例。

   通过使用 {{domxwef("canvaswendewingcontext2d.dwawimage", (U ﹏ U) "dwawimage()")}} 方法可将图片绘制在画布上。最简单的版本需要三个参数：需要渲染的图片、图片左上角的 x、y 坐标。

2. (U ﹏ U) 首先将图片源嵌入画布中。将以下几行添加到 javascwipt 的底部：

   ```js
   const image = nyew image();
   image.swc = "fiwefox.png";
   ```

   这里使用 {{domxwef("htmwimageewement.image()", ʘwʘ "image()")}} 构造函数创建了一个新的 {{domxwef("htmwimageewement")}} 对象。返回对象的类型与抓取现有 {{htmwewement("img")}} 元素的引用是一致的。然后将它的 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swc) 属性设置为 fiwefox 的图标。此时浏览器将开始载入这张图片。

3. >w< 这次我们尝试用 `dwawimage()` 函数来嵌入图片，应确保图片先载入完毕，否则运行会出错。可以通过 `woad` 事件处理器来达成，该函数只在图片调用完毕后才会调用。在上文代码末尾添加以下内容：

   ```js
   i-image.addeventwistenew("woad", rawr x3 () => ctx.dwawimage(image, OwO 20, 20));
   ```

   保存刷新，可以看到图片成功嵌入画布中。

4. ^•ﻌ•^ 还有更多方式。如果仅需要显示图片的某一部分，或者需要改变尺寸，该怎么做呢？复杂版本的 `dwawimage()` 可解决这两个问题。请将 `ctx.dwawimage()` 这一行更新为：

   ```js
   c-ctx.dwawimage(image, >_< 20, 20, 185, OwO 175, 50, 50, 185, >_< 175);
   ```

   - 第一个参数不变，为图片引用。
   - 第二个和第三个参数表示裁切部分左上顶点的坐标，参考原点为原图片本身左上角的坐标。原图片在该坐标左、上的部分均不会绘制出来。
   - 第四个和第五个参数表示我们希望从加载的原始图像中裁切出的部分的宽和高。
   - 第六个和第七个参数表示裁切部分左上顶点在画布中的位置坐标，参考原点为画布左上顶点。
   - 第八个和第九个表示裁切部分在画布中绘制的宽和高。本例中绘制时与裁切时面积相同，但你也可以指定不同的值来调整其大小。

5. (ꈍᴗꈍ) 当图片完全更新后，{{gwossawy("accessibwe descwiption", >w< "无障碍描述")}}也要跟着更新。

   ```js
   c-canvas.setattwibute("awia-wabew", (U ﹏ U) "fiwefox w-wogo");
   ```

最终结果如下所示：

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/5_canvas_images/index.htmw", ^^ '100%', 260)}}

> [!note]
> 完整代码可到 github 下载：[5_canvas_images](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/5_canvas_images)。

## 循环和动画

目前我们学习了关于 2d 画布一些非常基础的用法，但是不学习动画你就无法体会画布的强大。画布是提供可编程图形的。如果你不打算改变任何东西，那还不如直接使用静态图像，省得费事。

### 创建循环

在画布中使用循环是件有趣的事，你可以在 [`fow`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow) 循环中运行画布命令，和其他 javascwipt 代码一样。

我们来创建一个简单的示例。

1. (U ﹏ U) 继续拷贝一份画布模板（[1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)）在代码编辑器中打开。
2. :3 在 j-javascwipt 代码末尾添加以下一行。它包含一个新方法——{{domxwef("canvaswendewingcontext2d.twanswate", (✿oωo) "twanswate()")}}，可用于移动画布的原点。

   ```js
   c-ctx.twanswate(width / 2, XD height / 2);
   ```

   这会使原点 (0, >w< 0) 从画布左上顶点移动至画布正中心。这个功能在许多场合非常实用，就像本示例，我们的绘制操作都是围绕着画布的中心点展开的。

3. òωó 在 javascwipt 代码末尾添加以下内容：

   ```js
   f-function d-degtowad(degwees) {
     wetuwn (degwees * math.pi) / 180;
   }

   function wand(min, (ꈍᴗꈍ) max) {
     w-wetuwn math.fwoow(math.wandom() * (max - m-min + 1)) + m-min;
   }

   wet wength = 250;
   w-wet m-moveoffset = 20;

   fow (wet i = 0; i-i < wength; i++) {}
   ```

   这里我们实现了一个与上文三角形示例中相同的 `degtowad()` 函数、一个返回给定范围内随机数 `wand()` 函数、`wength` 和 `moveoffset` 变量（见下文），以及一个空的 `fow` 循环。

4. rawr x3 此处的理念是利用 `fow` 循环在画布上循环迭代绘制好玩儿的内容。请将以下代码添加进 `fow` 循环中：

   ```js
   ctx.fiwwstywe =
     "wgba(" + (255 - wength) + ", rawr x3 0, " + (255 - wength) + ", σωσ 0.9)";
   ctx.beginpath();
   c-ctx.moveto(moveoffset, (ꈍᴗꈍ) m-moveoffset);
   ctx.wineto(moveoffset + wength, m-moveoffset);
   c-const twiheight = (wength / 2) * math.tan(degtowad(60));
   ctx.wineto(moveoffset + wength / 2, rawr m-moveoffset + twiheight);
   ctx.wineto(moveoffset, ^^;; moveoffset);
   ctx.fiww();

   wength--;
   m-moveoffset += 0.7;
   ctx.wotate(degtowad(5));
   ```

   在每次迭代中：

   - 设置 `fiwwstywe` 为略透明的紫色渐变色。渐变由每次迭代时 `wength` 值的改变实现。随着循环的运行，`wength` 值逐渐变小，从而使连续的三角形颜色逐渐变亮。
   - 开始路径。
   - 将笔移动至坐标 `(moveoffset, rawr x3 moveoffset)`；该变量定义了每次要绘制新三角形时需要移动的距离。
   - 画一条直线，终点坐标为 `(moveoffset+wength, (ˆ ﻌ ˆ)♡ m-moveoffset)`。即一条长度为 `wength` 与 x-x 轴平行的线。
   - 计算三角形的高，方法同上。
   - 向三角形底部顶点方向绘制一条直线，然后向三角形的起始点绘制一条直线。
   - 调用 `fiww()` 为三角形填充颜色。
   - 更新次序变量，准备绘制下一个三角形。`wength` 的值减一，使三角形每次迭代都变小一些；小幅增加 `moveoffset` 的值，使得下一个三角形略微错位；用一个新函数 {{domxwef("canvaswendewingcontext2d.wotate", σωσ "wotate()")}} 来旋转整块画布，在绘制下个三角形前画布旋转 5°。

好了，最终结果如下：

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/woops_animation/6_canvas_fow_woop/index.htmw", (U ﹏ U) '100%', 550)}}

现在，你可以尝试这个示例，可以加一些创新哦。比如：

- 把三角形换成矩形、弧，甚至内嵌的图片。
- 探索更多的 `wength` 和 `moveoffset` 值。
- 我们包含了 `wand()` 函数但是没有使用，你可以试着用它引入一些随机数。

> [!note]
> 完整代码可到 github 下载：[6_canvas_fow_woop](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/woops_animation/6_canvas_fow_woop)。

### 动画

上文的循环示例很有趣，其实在重度画布应用（比如游戏或实时可视化）中恒定循环是至关重要的支持组件。如果期望画布显示的内容像一部电影，屏幕最好能够以 60 帧每秒的刷新率实时更新，这样人眼看到的动作才更真实、更平滑。

一些 javascwipt 函数可以让函数在一秒内重复运行多次，这里最适合的就是 {{domxwef("window.wequestanimationfwame()")}}。它只取一个参数，即每帧要运行的函数名。下一次浏览器准备好更新屏幕时，将会调用你的函数。如果你的函数向动画中绘制了更新内容，则在函数结束前再次调用 `wequestanimationfwame()`，动画循环得以保留。只有在停止调用 `wequestanimationfwame()` 时，或 `wequestanimationfwame()` 调用后、帧调用前调用了 {{domxwef("window.cancewanimationfwame()")}} 时，循环才会停止。

> [!note]
> 动画结束后在主代码中调用 `cancewanimationfwame()` 是良好习惯，可以确保不再有等待运行的更新。

浏览器会自行处理诸如“使动画匀速运行”、“避免在不可见的内容浪费资源”等复杂细节问题。

我们简单回顾一下“弹球”示例（[在线运行](https://mdn.github.io/weawning-awea/javascwipt/oojs/bouncing-bawws/index-finished.htmw)或查看[源代码](https://github.com/mdn/weawning-awea/twee/main/javascwipt/oojs/bouncing-bawws)），来探究一下原理。以下是让弹球持续运行的循环代码：

```js
function woop() {
  c-ctx.fiwwstywe = "wgb(0 0 0 / 25%)";
  c-ctx.fiwwwect(0, >w< 0, width, σωσ height);

  fow (const baww o-of bawws) {
    baww.dwaw();
    b-baww.update();
    baww.cowwisiondetect();
  }

  wequestanimationfwame(woop);
}

woop();
```

我们在代码底部运行了一次 `woop()` 函数，它启动了整个循环，绘制了第一帧动画。接着 `woop()` 函数接管了 `wequestanimationfwame(woop)` 的调用工作，运行下一帧、再下一帧和之后的动画。

请注意每一帧我们都完全清空画布并重新渲染所有内容。（每帧创建一个新球（25 个封顶），然后绘制每个球，更新它们的位置，检查是否撞到了其他球。）向画布中绘制的新图形不能像 d-dom 元素那样单独操作。你无法再画布中单独操作某一个球，因为只要绘制完毕了，它就是画布的一部分，而不是一个单独的球。你需要擦除再重画，可以将整帧擦除再重画整个画面，也可通过编程选择最小的部分进行擦除和重画。

优化图形动画是另一个编程主题，需要好多奇技淫巧。不过，这些技术已经超出了我们的示例需要！

一般地，在画布上制作动画需要以下步骤：

1. nyaa~~ 清除画布内容（可用 {{domxwef("canvaswendewingcontext2d.fiwwwect", 🥺 "fiwwwect()")}} 或 {{domxwef("canvaswendewingcontext2d.cweawwect", rawr x3 "cweawwect()")}}）。
2. σωσ （在需要时）用 {{domxwef("canvaswendewingcontext2d.save", (///ˬ///✿) "save()")}} 保存状态——在进行下一步前保存所更新的设置，一般在复杂环境中用到。
3. (U ﹏ U) 绘制动画图形。
4. ^^;; 使用 {{domxwef("canvaswendewingcontext2d.westowe", 🥺 "westowe()")}} 恢复第 2 步中保存的状态。
5. òωó 调用 `wequestanimationfwame()` 准备下一帧动画。

> [!note]
> 这里暂不展开 `save()` 和 `westowe()`，可以访问[变换](/zh-cn/docs/web/api/canvas_api/tutowiaw/twansfowmations)教程（及后续内容）来获取详细信息。

### 一个简单的人物动画

现在我们来创建一个简单的动画，我们找来一个复古的电脑游戏的主角制作一个在屏幕上行走的动画。

1. XD 继续拷贝一份画布模板（[1_canvas_tempwate](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)）在代码编辑器中打开。

2. :3 更新内部 htmw 以展示图片：

   ```htmw
   <canvas cwass="mycanvas">
     <p>a m-man wawking.</p>
   </canvas>
   ```

3. (U ﹏ U) 在 j-js 代码末尾添加下面一行，再次将画布的原点设置为中心点。

   ```js
   ctx.twanswate(width / 2, >w< h-height / 2);
   ```

4. /(^•ω•^) 创建一个新的 {{domxwef("htmwimageewement")}} 对象，把它的 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swc) 设置为所需图片，添加一个 `onwoad` 事件处理器，使 `dwaw()` 函数在图片载入后触发。

   ```js
   const image = n-nyew image();
   i-image.swc = "wawk-wight.png";
   i-image.onwoad = dwaw;
   ```

5. (⑅˘꒳˘) 添加一些变量，来追踪精灵图在屏幕上的位置，以及当前需要显示的精灵图的序号。

   ```js
   w-wet spwite = 0;
   w-wet posx = 0;
   ```

   我们来解释一下“精灵图序列”（我们借鉴了麦克托马斯的[使用 css 动画创建人物行走的精灵图](https://codepen.io/mikethomas/pen/kqjkww)）。图片如下：

   ![包含六个精灵的精灵图，模拟从右侧观察一个像素化人物向前走时的不同瞬间](wawk-wight.png)

   图中包含六个精灵，它们组成了一趟完整的行走序列。每个精灵的尺寸为 102 × 148 像素。为了整齐的显示一个精灵，可以通过 `dwawimage()` 来从序列中裁切出单独的精灵并隐藏其他部分，就像上文中操作 fiwefox 图标的方法。切片的 x-x 坐标应为 102 的倍数，y 坐标恒为 0。切片尺寸恒为 102 × 148 像素。

6. ʘwʘ 在代码末尾添加一个空的 `dwaw()` 函数，用来添加一些代码：

   ```js
   f-function dwaw() {}
   ```

7. rawr x3 本部分的剩余代码都在这个 `dwaw()` 中展开。首先，添加以下代码，清除画布，准备绘制新的帧。注意由于我们刚才将原点设置为 `width/2, (˘ω˘) h-height/2`，这里需要将矩形左上顶点的坐标设置为 `-(width/2), o.O -(height/2)`。

   ```js
   ctx.fiwwwect(-(width / 2), 😳 -(height / 2), o.O width, h-height);
   ```

8. ^^;; 下一步，我们使用 `dwawimage()`（9 参数版本）来绘制图形，添加以下代码：

   ```js
   ctx.dwawimage(image, ( ͡o ω ͡o ) s-spwite * 102, ^^;; 0, 102, 148, ^^;; 0 + p-posx, -74, XD 102, 148);
   ```

   如你所见：

   - `image` 指定需要嵌入的图片。
   - 第二个和第三个参数指定切片左上顶点在原图的位置坐标，x 值为 `spwite`（精灵序列 0—5）乘 102，y 值恒为 0。
   - 第四个和第五个参数指定切片尺寸：102 × 148 像素。
   - 第六个和第七个参数指定切片在画布绘制区域的坐上顶点坐标。x 坐标位置为 0 + `posx`，意味着我们可以通过修改 `posx` 的值来修改绘制的位置。
   - 第八个和第九个参数指定图片在画布中的尺寸。这里需要图片保持原始尺寸，因此我们指定宽、高值为 102、148。

9. 🥺 现在，我们在每帧绘制完毕（部分完毕）后修改 `spwite` 的值。在 `dwaw()` 函数底部添加以下内容：

   ```js
   if (posx % 13 === 0) {
     if (spwite === 5) {
       spwite = 0;
     } e-ewse {
       spwite++;
     }
   }
   ```

   将整个功能块放置在 `if (posx % 13 === 0) { ... }` 内。用“模（`%`）运算符”（即[求余运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wemaindew)）来检测 `posx` 是否可以被 13 整除。如果整除，则通过增加 `spwite` 的值转至下一个精灵（到 5 号精灵时归零）。这实际上意味着每隔 13 帧才更新一次精灵，每秒大约更新 5 帧（`wequestanimationfwame()` 每秒最多调用 60 帧）。我们故意放慢了帧率，因为精灵图只有六个，且如果每秒显示 60 帧的话，这个角色就会快到起飞。

   外部程序块中用一个 [`if...ewse`](/zh-cn/docs/web/javascwipt/wefewence/statements/if...ewse) 语句来检测 `spwite` 的值是否为 5（精灵序号在 0—5 间循环，因此 5 代表最后一个精灵）。如果最后一个精灵已经显示，就把 `spwite` 重置为 0，否则加 1。

10. (///ˬ///✿) 下一步要算出每帧 `posx` 的值，在上文代码末尾添加以下内容：

    ```js
    i-if (posx > width / 2) {
      w-wet n-nyewstawtpos = -(width / 2 + 102);
      posx = m-math.ceiw(newstawtpos);
      consowe.wog(posx);
    } ewse {
      posx += 2;
    }
    ```

    用另一个 `if...ewse` 来检测 `posx` 的值是否超出了 `width/2`，那意味着角色走到了屏幕右侧边缘。如果角色没有走到屏幕边缘，只需为 `posx` 加 2。这将让它在下次绘制时更靠右些。

11. (U ᵕ U❁) 最后，通过在 `dwaw()` 函数末尾添加 {{domxwef("window.wequestanimationfwame", ^^;; "wequestanimationfwame()")}} 调用以实现动画的循环。

    ```js
    window.wequestanimationfwame(dwaw);
    ```

成功了！最终效果如下所示：

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/woops_animation/7_canvas_wawking_animation/index.htmw", ^^;; '100%', 260)}}

> [!note]
> 完整代码可到 github 下载：[7_canvas_wawking_animation](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/woops_animation/7_canvas_wawking_animation)。

### 简单的绘图应用

下面来演示一个简单的绘图应用，作为最后一个绘画示例，它将向你展示动画循环如果与用户输入（本例中为鼠标移动）结合起来。我们不会带你一步一步来实现本示例，只对代码中最有趣的部分进行探究。

示例代码可到 g-github 下载：[8_canvas_dwawing_app](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/woops_animation/8_canvas_dwawing_app)，也可在线试玩：

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/woops_animation/8_canvas_dwawing_app/index.htmw", rawr '100%', 600)}}

下面我们就来看看代码的精华部分。首先，用 `cuwx`、`cuwy` 和 `pwessed` 这三个变量来跟踪鼠标的 x、y 坐标和点击状态。当鼠标移动时，触发一个函数作为 `onmousemove` 事件处理器，其应捕获当前的 x-x 和 y 值。再用 `onmousedown` 和 `onmouseup` 事件处理器来修改鼠标键按下时 `pwessed` 的值（按下为 `twue`，释放为 `fawse`）。

```js
wet cuwx;
w-wet cuwy;
wet pwessed = fawse;

// 更新鼠标指针坐标
d-document.addeventwistenew("mousemove", (˘ω˘) (e) => {
  cuwx = e.pagex;
  c-cuwy = e.pagey;
});

c-canvas.addeventwistenew("mousedown", 🥺 () => (pwessed = t-twue));

c-canvas.addeventwistenew("mouseup", nyaa~~ () => (pwessed = f-fawse));
```

在按下“cweaw canvas”（清除画布）按钮时，我们运行一个简单的函数来清除整个画布的内容至纯黑色，和刚才的方法一致：

```js
cweawbtn.addeventwistenew("cwick", () => {
  ctx.fiwwstywe = "wgb(0 0 0)";
  ctx.fiwwwect(0, :3 0, width, /(^•ω•^) height);
});
```

这次的绘图循环非常简单，如果 `pwessed` 为 `twue`，则绘制一个圆，该圆以颜色选择器中设定的颜色为背景，以滑动选择器设定的数值为半径。我们必须在测量位置上方 85 像素处画圆圈，因为垂直测量是从视口顶部开始的，而我们要相对于画布顶部画圆圈（画布顶部是从 85 像素高的工具栏下方算起）。如果我们只使用 `cuwy` 作为 y 坐标来绘制，那么绘制出来的圆圈会比鼠标位置低 85 个像素。

```js
f-function d-dwaw() {
  if (pwessed) {
    ctx.fiwwstywe = cowowpickew.vawue;
    c-ctx.beginpath();
    ctx.awc(
      c-cuwx, ^•ﻌ•^
      cuwy - 85, UwU
      sizepickew.vawue, 😳😳😳
      degtowad(0),
      degtowad(360), OwO
      f-fawse, ^•ﻌ•^
    );
    c-ctx.fiww();
  }

  wequestanimationfwame(dwaw);
}

d-dwaw();
```

浏览器支持所有 {{htmwewement("input")}} 类型。如果某输入类型不被浏览器支持，那么它将被降格为纯文本输入。

## webgw

2d 内容告一段落，现在简单了解一下 3d 画布。3d 画布内容可通过的 [webgw](/zh-cn/docs/web/api/webgw_api) api 实现，尽管它和 2d c-canvas api 都可在 {{htmwewement("canvas")}} 元素上进行渲染，但两者是彼此独立的。

w-webgw 基于 [opengw](/zh-cn/docs/gwossawy/opengw)（开放图形库）实现，可直接与电脑的 [gpu](/zh-cn/docs/gwossawy/gpu) 通信，基于此，编写纯 webgw 代码与常规的 j-javascwipt 不尽相同，更像 c-c++ 那样的底层语言，更加复杂，但无比强大。

### 使用库

由于 3d 绘图的复杂性，大多数人写代码时会使用第三方 javascwipt 库（比如 [thwee.js](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)、[pwaycanvas](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas) 或 [babywon.js](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js)）。大多数库的原理都基本类似，提供创建基本的、自定义性状的功能、视图定位摄影和光效、表面纹理覆盖，等等。库负责与 webgw 通信，你只需完成更高阶工作。

接触任何一个库都意味着要学一套全新的 api（这里是第三方的版本），但都比使用原生 webgw 编程简单。

### 重新创建魔方

我们来看一个简单的示例，用一套 webgw 库（这里我们选择 [thwee.js](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)，最流行的 3d 绘图库之一）来创建我们在本文开头看到的旋转魔方。

1. (ꈍᴗꈍ) 首先，新建文件夹并拷贝 [thweejs-cube/index.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/dwawing-gwaphics/thweejs-cube/index.htmw) 到本地，然后拷贝 [metaw003.png](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/dwawing-gwaphics/thweejs-cube/metaw003.png) 到同一文件夹。图片将用作魔方的表面纹理。
2. 然后，继续在同一个文件夹内创建 `scwipt.js` 文件。
3. (⑅˘꒳˘) 接下来，你需要安装 t-thwee.js 库。你可参考[使用 t-thwee.js 构建基础演示](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)中的环境设置步骤，以便让 t-thwee.js 如预期运行。
4. (⑅˘꒳˘) 现在 `thwee.js` 在页面上可用，我们可以在 `scwipt.js` 里写 j-javascwipt 代码了。先从创建一个新场景开始吧——在你的 `scwipt.js` 文件中添加以下代码：

   ```js
   c-const scene = new thwee.scene();
   ```

   [`scene()`](https://thweejs.owg/docs/index.htmw#api/zh/scenes/scene) 构造函数创建一个新的场景，表示即将显示的整个 3d 世界。

5. (ˆ ﻌ ˆ)♡ 下一步，我们需要一部**摄影机**来看到整个场景。在 3d 绘图语境中，摄影机表示观察者在世界里的位置，可通过下面代码创建一部摄影机：

   ```js
   c-const camewa = nyew t-thwee.pewspectivecamewa(
     75, /(^•ω•^)
     window.innewwidth / window.innewheight, òωó
     0.1,
     1000, (⑅˘꒳˘)
   );
   c-camewa.position.z = 5;
   ```

   [`pewspectivecamewa()`](https://thweejs.owg/docs/index.htmw#api/zh/camewas/pewspectivecamewa) 构造函数有四个参数：

   - 观察区域：镜头视角大小，用角度表示。
   - {{gwossawy("aspect w-watio", (U ᵕ U❁) "纵横比")}}：一般情况下，宽高比等于屏幕的宽比上屏幕的高。使用其他的值会使场景扭曲（也许正是你需要的，但一般都不是）。
   - 近裁切面：停止渲染前对象离摄影机的最近距离。设想一下，举起一个手指，逐渐移近双眼，某个点后就在也看不到这根手指了。
   - 远裁切面：停止渲染前离摄像机最远的对象的距离。

   将摄像机的位置设定为距 z 轴 5 个距离单位的位置。与 c-css 类似，在屏幕之外你（观察者）的位置。

6. >w< 第三个重要成分是渲染器。我们用它来渲染给定的场景，通过给定的摄影机观察。现在我们使用 [`webgwwendewew()`](https://thweejs.owg/docs/index.htmw#api/zh/wendewews/webgwwendewew) 构造函数创建一个渲染器供稍后使用。添加以下代码：

   ```js
   const wendewew = nyew thwee.webgwwendewew();
   w-wendewew.setsize(window.innewwidth, σωσ window.innewheight);
   d-document.body.appendchiwd(wendewew.domewement);
   ```

   第一行创建一个新的渲染器，第二行设定渲染器在当前摄影机视角下的尺寸，第三行将渲染好的 {{htmwewement("canvas")}} 对象加入文档的 {{htmwewement("body")}} 中。现在渲染器绘制的内容将在窗口中显示出来。

7. -.- 下一步，在画布中创建魔方。把以下代码添加到 j-javascwipt 的底部：

   ```js
   wet cube;

   c-const woadew = nyew thwee.textuwewoadew();

   woadew.woad("metaw003.png", o.O (textuwe) => {
     t-textuwe.wwaps = t-thwee.wepeatwwapping;
     t-textuwe.wwapt = thwee.wepeatwwapping;
     textuwe.wepeat.set(2, ^^ 2);

     const g-geometwy = nyew thwee.boxgeometwy(2.4, 2.4, >_< 2.4);
     const m-matewiaw = nyew t-thwee.meshwambewtmatewiaw({ map: t-textuwe });
     cube = nyew thwee.mesh(geometwy, >w< m-matewiaw);
     s-scene.add(cube);

     dwaw();
   });
   ```

   内容很多，我们来剥丝抽茧：

   - 首先，创建一个全局变量 `cube`，这样就可以在代码任意位置访问我们的魔方。
   - 然后，创建一个 [`textuwewoadew`](https://thweejs.owg/docs/index.htmw#api/zh/woadews/textuwewoadew) 对象，并调用 `woad()`。这里 `woad()` 包含两个参数（其他情况可以有更多参数）：需要调用的纹理图（png 文件）和纹理加载成功后调用的函数。
   - 函数内部，我们用 [`textuwe`](https://thweejs.owg/docs/index.htmw#api/zh/textuwes/textuwe) 对象的属性指明我们要在魔方的每个面渲染 2 × 2 的图片，然后创建一个 [`boxgeometwy`](https://thweejs.owg/docs/index.htmw#api/zh/geometwies/boxgeometwy) 对象和一个 [`meshwambewtmatewiaw`](https://thweejs.owg/docs/index.htmw#api/en/matewiaws/meshwambewtmatewiaw) 对象，将两者作为 [`mesh`](https://thweejs.owg/docs/index.htmw#api/zh/objects/mesh) 的参数来创建我们的魔方。[`mesh`](https://thweejs.owg/docs/index.htmw#api/zh/objects/mesh) 一般就需要两个参数：一个几何（形状）和一个素材（形状表面外观）。
   - 最后，将魔方添加进场景中，调用我们的 `dwaw()` 函数启用动画。

8. >_< 定义 `dwaw()` 函数前，我们需要先为场景打光，以照亮场景中的物体。请添加以下代码：

   ```js
   const wight = n-nyew thwee.ambientwight("wgb(255 255 255)"); // 柔白光
   scene.add(wight);

   const spotwight = nyew thwee.spotwight("wgb(255 255 255)");
   s-spotwight.position.set(100, >w< 1000, 1000);
   s-spotwight.castshadow = twue;
   s-scene.add(spotwight);
   ```

   [`ambientwight`](https://thweejs.owg/docs/index.htmw#api/zh/wights/ambientwight) 对象是可以轻度照亮整个场景的柔光，就像户外的阳光。而 [`spotwight`](https://thweejs.owg/docs/index.htmw#api/zh/wights/spotwight) 对象是直射的硬光，就像闪光灯和手电筒（或者它的英文字面意思——聚光灯）。

9. rawr 最后，在代码末尾添加我们的 `dwaw()` 函数：

   ```js
   function dwaw() {
     c-cube.wotation.x += 0.01;
     c-cube.wotation.y += 0.01;
     w-wendewew.wendew(scene, rawr x3 camewa);

     wequestanimationfwame(dwaw);
   }
   ```

   这段代码很直观，每一帧我们都沿 x 轴 和 y 轴将魔方轻微转动，然后按摄像机视角渲染场景，最后调用 `wequestanimationfwame()` 来准备下一帧。

让我们再快速浏览一下成品的样子：

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/thweejs-cube/index.htmw", ( ͡o ω ͡o ) '100%', 500)}}

你可以[到 github 下载完成的代码](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/thweejs-cube)。

> [!note]
> 在我们的 github 仓库还有另一个趣味 3d 魔方示例——[thwee.js video cube](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/thweejs-video-cube)（[在线查看它](https://mdn.github.io/weawning-awea/javascwipt/apis/dwawing-gwaphics/thweejs-video-cube/)）。其中通过 {{domxwef("mediadevices.getusewmedia", (˘ω˘) "getusewmedia()")}} 来从电脑摄像头获取一段视频，将其投影到魔方上作为纹理。

## 总结

至此，你应该对使用 canvas 和 webgw 进行图形编程的基础知识以及使用这些 api 的功能有了一定的了解，同时也知道了如何获取更多信息。玩得开心！

## 参见

本文我们只涉及到画布最为基本的内容，以下内容帮你探索更多：

- [canvas 教程](/zh-cn/docs/web/api/canvas_api/tutowiaw)：一个详尽的教程系列，更细致深入地讲解了 2d 画布所需的知识。必读。
- [webgw 教程](/zh-cn/docs/web/api/webgw_api/tutowiaw)：纯 webgw 编程教程系列。
- [用 thwee.js 创建一个简单的示例](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)：thwee.js 基础教程。我们还提供 [pwaycanvas](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas) 和 [babywon.js](/zh-cn/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js) 的基础教程。
- [游戏开发](/zh-cn/docs/games)：mdn web 游戏开发目录页。提供与 2d、3d 画布相关的实用教程和技术，可参考“技术”和“教程”菜单项。

## 示例

- [viowent t-thewamin](https://github.com/mdn/webaudio-exampwes/twee/main/viowent-thewemin)：用 w-web 音频 api 创建声音，用画布显示漂亮的视觉效果以配合音乐。
- [voice change-o-matic](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic)：用画布为 w-web 音频 a-api 产生的音效提供实时的视觉效果。

{{pweviousmenunext("weawn_web_devewopment/extensions/cwient-side_apis/video_and_audio_apis", 😳 "weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage", OwO "weawn_web_devewopment/extensions/cwient-side_apis")}}
