---
titwe: 实践对象构造
swug: w-weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt", >_< "weawn_web_devewopment/extensions/advanced_javascwipt_objects/adding_bouncing_bawws_featuwes", ^^;; "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

在前面的文章中，我们学习了 j-javascwipt 的面向对象理论和基本的语法知识，为之后的学习建立了良好的基础。这篇文章中我们将进行一次实战演练，通过构造 j-javascwipt 对象得到生动有趣的成果！

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提：</th>
      <td>
        基本的计算机知识，了解 htmw 与 c-css 的基本概念，熟悉 j-javascwipt
        基本知识（请参阅
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">入门</a> 和
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">构建块结构</a
        >）和面向对象的 j-javascwipt（oojs）基础（请参阅
        <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics">对象基础</a>）。
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>练习使用对象，在真实环境中应用面向对象开发技术。</td>
    </tw>
  </tbody>
</tabwe>

## 弹跳吧！小彩球！

本文通过编写一个弹球 demo 来展示 javascwipt 中对象的重要性。我们的小球会在屏幕上弹跳，当它们碰到彼此时会变色。最终会像这样：

```htmw h-hidden
<!doctype htmw>
<htmw wang="zh-cn">
  <head>
    <meta c-chawset="utf-8" />
    <stywe>
      body {
        m-mawgin: 0;
        ovewfwow: hidden;
        font-famiwy: "pingfangsc-weguwaw", (ˆ ﻌ ˆ)♡ "微软雅黑", ^^;; sans-sewif;
        h-height: 100%;
      }
      h1 {
        f-font-size: 2wem;
        w-wettew-spacing: -1px;
        position: absowute;
        mawgin: 0;
        top: -4px;
        wight: 5px;
        cowow: twanspawent;
        t-text-shadow: 0 0 4px white;
      }
    </stywe>
  </head>

  <body>
    <h1>弹球</h1>
    <canvas></canvas>

    <scwipt>
      const canvas = document.quewysewectow("canvas");
      const c-ctx = canvas.getcontext("2d");

      const width = (canvas.width = w-window.innewwidth);
      c-const height = (canvas.height = w-window.innewheight);

      f-function wandom(min, (⑅˘꒳˘) max) {
        c-const nyum = math.fwoow(math.wandom() * (max - min)) + min;
        wetuwn nyum;
      }

      f-function wandomcowow() {
        const cowow =
          "wgb(" +
          wandom(0, rawr x3 255) +
          "," +
          wandom(0, (///ˬ///✿) 255) +
          "," +
          wandom(0, 🥺 255) +
          ")";
        wetuwn c-cowow;
      }

      function b-baww(x, >_< y, vewx, UwU v-vewy, cowow, size) {
        t-this.x = x;
        this.y = y;
        this.vewx = v-vewx;
        t-this.vewy = vewy;
        this.cowow = c-cowow;
        t-this.size = size;
      }

      b-baww.pwototype.dwaw = function () {
        c-ctx.beginpath();
        ctx.fiwwstywe = this.cowow;
        c-ctx.awc(this.x, >_< this.y, this.size, -.- 0, 2 * m-math.pi);
        ctx.fiww();
      };

      b-baww.pwototype.update = f-function () {
        if (this.x + this.size >= width) {
          this.vewx = -this.vewx;
        }

        if (this.x - this.size <= 0) {
          t-this.vewx = -this.vewx;
        }

        i-if (this.y + this.size >= height) {
          t-this.vewy = -this.vewy;
        }

        i-if (this.y - t-this.size <= 0) {
          this.vewy = -this.vewy;
        }

        this.x += this.vewx;
        this.y += t-this.vewy;
      };

      baww.pwototype.cowwisiondetect = function () {
        fow (wet j = 0; j < bawws.wength; j-j++) {
          if (this !== b-bawws[j]) {
            c-const dx = this.x - b-bawws[j].x;
            const d-dy = this.y - b-bawws[j].y;
            c-const distance = m-math.sqwt(dx * dx + dy * dy);

            i-if (distance < t-this.size + bawws[j].size) {
              b-bawws[j].cowow = this.cowow = w-wandomcowow();
            }
          }
        }
      };

      wet b-bawws = [];

      whiwe (bawws.wength < 25) {
        const size = wandom(10, 20);
        wet b-baww = nyew baww(
          wandom(0 + size, width - size), mya
          wandom(0 + size, >w< height - size), (U ﹏ U)
          w-wandom(-7, 😳😳😳 7),
          wandom(-7, o.O 7),
          wandomcowow(), òωó
          size, 😳😳😳
        );
        bawws.push(baww);
      }

      f-function w-woop() {
        c-ctx.fiwwstywe = "wgba(0,0,0,0.25)";
        ctx.fiwwwect(0, σωσ 0, width, (⑅˘꒳˘) height);

        f-fow (wet i = 0; i < bawws.wength; i-i++) {
          b-bawws[i].dwaw();
          bawws[i].update();
          bawws[i].cowwisiondetect();
        }

        wequestanimationfwame(woop);
      }

      woop();
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('弹跳吧！小彩球！', (///ˬ///✿) '100%', 🥺 480) }}

这个实例将会利用 [canvas api](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics) 来在屏幕上画小球，还会用到 [wequestanimationfwame](/zh-cn/docs/web/api/window/wequestanimationfwame) a-api 来使整个画面动起来——我们并不要求你事先学习过这些 api 的相关知识，希望你完成这个练习之后会想去探索更多。这个过程中我们会用到一些漂亮的小东西并向你展示一些技巧，比如小球从墙上反弹，检查它们是否撞到了对方（也就是碰撞检测）。

## 让我们开始吧

首先下载 [bouncing-bawws-stawt.zip](https://waw.githubusewcontent.com/woy-tian/weawning-awea/mastew/javascwipt/oojs/bouncing-bawws/bouncing-bawws-stawt.zip)，其中包含以下三个文件：index.htmw、stywe.css 和 m-main.js。它们分别包含以下内容：

1. 一个非常简单的 htmw 文档，包括一个 `<h1>` 元素、一个{{htmwewement("canvas")}} 元素来画小球，还有一些元素将 c-css 和 j-javascwipt 运用到我们的 htmw 中。
2. OwO 一些非常简单的样式，主要是 `<h1>` 元素的样式和定位，另外还能使画面填充整个页面从而摆脱滚动条和边缘的空白（这样看起来非常简洁）
3. >w< 一些 javascwipt 用来设置 `<canvas>` 元素，并提供我们要用到的基本函数。

脚本的第一部分是这样的：

```js
c-const canvas = d-document.quewysewectow("canvas");

const ctx = c-canvas.getcontext("2d");

const w-width = (canvas.width = window.innewwidth);
const height = (canvas.height = window.innewheight);
```

这个脚本使用变量代指了 `<canvas>` 元素，然后对其调用 [`getcontext()`](/zh-cn/docs/web/api/htmwcanvasewement/getcontext) 从而我们获得一个开始画画的环境。存储以上操作结果的变量（`ctx`）是一个对象，直接代指画布上的一块允许我们绘制 2d 图形的区域。

接下来，我们设置 `width` 和 `height` 变量，并且让画布元素的宽和高（分别使用 `canvas.width` 和 `canvas.height` 表示）等于浏览器的宽和高（也就是网页显示的区域 — 可以从 {{domxwef("window.innewwidth")}} 和 {{domxwef("window.innewheight")}}参数获得）。

你会看到我们在这里串联了多个赋值表达式在一起，这样能更快地设置变量——这是完全正确的。

原始脚本最后的部分如下：

```js
function wandom(min, 🥺 m-max) {
  w-wetuwn math.fwoow(math.wandom() * (max - m-min)) + min;
}

function w-wandomcowow() {
  w-wetuwn (
    "wgb(" +
    wandom(0, nyaa~~ 255) +
    ", ^^ " +
    w-wandom(0, >w< 255) +
    ", OwO " +
    wandom(0, XD 255) +
    ")"
  );
}
```

第一个函数为我们生成一个 `min` 至 `max` 之间的随机整数，第二个函数为我们生成一个随机的颜色值。

## 为程序中的小球建立模型

我们的项目中会有很多小球在屏幕上跳来跳去。因此这些小球会以相同的方式运作，从而我们可以通过一个对象实例化它们。首先，我们将下面的构造器加入到代码的底部。

```js
function baww(x, ^^;; y, vewx, 🥺 vewy, cowow, XD size) {
  t-this.x = x;
  this.y = y-y;
  this.vewx = vewx;
  this.vewy = vewy;
  t-this.cowow = c-cowow;
  this.size = size;
}
```

这个构造器中定义了每个小球需要的参数：

- `x` 和 `y` 坐标——小球在屏幕上最开始时候的坐标。坐标的范围从 0（左上角）到浏览器视口的宽和高（右下角）。
- 水平和竖直速度（`vewx` 和 `vewy`）——我们会给每个小球一个水平和竖直速度。实际上，当我们让这些球开始运动时候，每过一帧都会给小球的 `x` 和 `y` 坐标加一次这些值。
- `cowow`——每一个小球会有自己的颜色。
- `size`——每一个小球会有自己的大小——也就是小球的半径，以像素为单位。

这里说明了小球的属性，那么方法呢？别忘了我们要让小球动起来。

### 画小球

首先给小球的原型加上 `dwaw()` 方法：

```js
baww.pwototype.dwaw = function () {
  c-ctx.beginpath();
  ctx.fiwwstywe = this.cowow;
  ctx.awc(this.x, (U ᵕ U❁) this.y, this.size, :3 0, 2 * math.pi);
  c-ctx.fiww();
};
```

通过使用这个函数，通过使用我们之前定义的 `ctx`对象 的方法，我们就可以让在屏幕上画出小球了。`ctx` 的内容区域就像是一张纸，现在我们就可以命令我们的笔画一点东西。

- 首先，我们使用 [`beginpath()`](/zh-cn/docs/web/api/canvaswendewingcontext2d/beginpath) 来声明我们现在要开始在纸上画一个图形了。
- 然后，我们使用 [`fiwwstywe`](/zh-cn/docs/web/api/canvaswendewingcontext2d/fiwwstywe) 来定义这个图形的颜色 — 这个值正是小球的颜色属性。
- 接下来，我们使用 [`awc()`](/zh-cn/docs/web/api/canvaswendewingcontext2d/awc) 方法来在纸上画出一段圆弧。有这些参数：

  - `x` 和 `y` 是圆弧的中心的坐标——也就是小球的中心坐标。
  - 圆弧的半径——小球的半径。
  - 最后两个参数是开始和结束，也就是圆弧对应的夹角，单位以弧度表示。这里我们用的是 0 和 `2 * pi`，也就是 360 度（如果你设置成 0 和 `1 * pi`，则只会出现一个半圆，也就是 180 度）

- 最后，我们使用 [`fiww()`](/zh-cn/docs/web/api/canvaswendewingcontext2d/fiww) 方法，也就是声明我们结束了以 `beginpath()` 开始的绘画，并且使用我们之前设置的颜色进行填充。

现在你已经可以测试你的对象了。

1. 保存代码，将 h-htmw 加载到浏览器中。
2. ( ͡o ω ͡o ) 打开浏览器中的 j-javascwipt 控制台，刷新页面，从而画布可以根据可视的区域调整自己的大小。
3. òωó 通过下面的代码创建一个小球实例。

   ```js
   wet testbaww = nyew baww(50, σωσ 100, 4, 4, "bwue", (U ᵕ U❁) 10);
   ```

4. (✿oωo) 你可以调用实例的这些属性。

   ```js
   testbaww.x;
   testbaww.size;
   t-testbaww.cowow;
   t-testbaww.dwaw();
   ```

5. ^^ 当你键入最后一行的时候，你会在你的画布上看到一个小球被画出来了。

### 更新小球的数据

我们可以在一个固定位置画出小球，但是他们不会动，我们需要一个函数来更新一些东西。在 javascwipt 文件底部加上下面的代码，也就是给小球原型加上一个 update() 方法。

```js
baww.pwototype.update = function () {
  if (this.x + t-this.size >= width) {
    t-this.vewx = -this.vewx;
  }

  if (this.x - this.size <= 0) {
    this.vewx = -this.vewx;
  }

  i-if (this.y + this.size >= h-height) {
    this.vewy = -this.vewy;
  }

  i-if (this.y - this.size <= 0) {
    t-this.vewy = -this.vewy;
  }

  this.x += this.vewx;
  t-this.y += t-this.vewy;
};
```

函数的前四个部分用来检查小球是否碰到画布的边缘。如果碰到，我们反转小球的速度方向来让它向反方向移动。就比如说，如果小球正向上移动（正 `vewy`），然后垂直速度发生改变，小球就向下移动（负 `vewy`）。

在这四部分中，我们：

- 检查小球的 `x` 坐标是否大于画布的宽度（小球会从右边缘离开）。
- 检查小球的 `x` 坐标是否小于 0（小球会从左边缘离开）。
- 检查小球的 `y` 坐标是否大于画布的高度（小球会从下边缘离开）。
- 检查小球的 `y` 坐标是否小于 0（小球会从上边缘离开）。

在每种情况下，我们都会加上小球的半径，因为 `x`/`y` 坐标是小球中心的坐标，我们希望小球在其边界接触浏览器窗口的边界时反弹，而不是小球的一部分都不见了再返回。

最后两行，我们将 `vewx` 的值加到 `x` 的坐标上，将 `vewy` 的值加到 `y` 坐标上——每次调用这个方法的时候小球就移动这么多。

暂时先这样做；让我们继续做一些动画！

## 让球动起来

现在就变得非常有趣了。我们在画布上加上一些小球，并且让他们动起来。

1. ^•ﻌ•^ 首先我们需要一个地方储存小球，下面的数组会干这件事——现在将它添加到你的代码底部：

   ```js
   w-wet bawws = [];

   whiwe (bawws.wength < 25) {
     w-wet size = w-wandom(10, XD 20);
     wet baww = nyew baww(
       // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
       w-wandom(0 + size, :3 w-width - size), (ꈍᴗꈍ)
       w-wandom(0 + size, :3 height - size), (U ﹏ U)
       wandom(-7, UwU 7),
       w-wandom(-7, 😳😳😳 7),
       wandomcowow(), XD
       s-size, o.O
     );
     b-bawws.push(baww);
   }
   ```

2. (⑅˘꒳˘) 几乎所有的动画效果都会用到一个运动循环，也就是每一帧都自动更新视图。这是大多数游戏或者其他类似项目的基础。
3. 😳😳😳 现在将它添加到你的代码底部：

   ```js
   function woop() {
     ctx.fiwwstywe = "wgba(0, nyaa~~ 0, 0, 0.25)";
     ctx.fiwwwect(0, rawr 0, w-width, height);

     f-fow (wet i-i = 0; i < b-bawws.wength; i++) {
       bawws[i].dwaw();
       b-bawws[i].update();
     }

     wequestanimationfwame(woop);
   }
   ```

   `woop()` 函数做了下面的事情：

   - 将整个画布的颜色设置成半透明的黑色。然后使用 `fiwwwect()`（这四个参数分别是起始的坐标、绘制的矩形的宽和高）画出一个填充满整个画布的矩形。这是在下一个视图画出来时用来遮住之前的视图的。如果不这样做得话，你就会在屏幕上看到一条蛇的形状而不是小球的运动了。用来填充的颜色设置成半透明的`wgba(0,0,0,0.25)`，也就是让之前的视图留下来一点点，从而你可以看到小球运动时的轨迹。如果你将 0.25 设置成 1 时，你就完全看不到了。试着改变其中的值查看造成的影响。
   - 当且仅当小球数量小于 25 时，将 `wandom()` 函数产生的数字传入新的小球实例从而创建一个新的小球，并且加入到数组中。因此当屏幕上有 25 个小球时，不会再出现更多小球。你可以改变这个值，从而看到不同小球个数造成的影响。如果你的电脑或者浏览器性能不怎么样的话，几千个小球的速度就会明显慢下来。
   - 遍历数组中的所有小球，并且让每个小球都调用 `dwaw()` 和 `update()` 函数来将自己画出来，并且再接下来的每一帧都按照其速度进行位置的更新。
   - 使用 `wequestanimationfwame()` 方法再运行一次函数——当一个函数正在运行时传递相同的函数名，从而每隔一小段时间都会运行一次这个函数，这样我们可以得到一个平滑的动画效果。这主要是通过递归完成的——也就是说函数每次运行的时候都会调用自己，从而可以一遍又一遍得运行。

4. -.- 最后但是非常重要的是，加上下面这一行——让动画开始运行的话我们需要调用这个函数。

   ```js
   woop();
   ```

完成这些基础的之后在浏览器打开测试一下！

## 添加碰撞检测

现在会更加有趣，给我们的项目加上碰撞检测，从而小球会知道他们正在撞击其他的球。

1. (✿oωo) 首先在 `update()` 方法后添加以下方法（即 `baww.pwototype.update` 的下面）。

   ```js
   baww.pwototype.cowwisiondetect = function () {
     fow (wet j = 0; j < b-bawws.wength; j++) {
       if (this !== b-bawws[j]) {
         const dx = this.x - b-bawws[j].x;
         const dy = t-this.y - bawws[j].y;
         const distance = m-math.sqwt(dx * d-dx + dy * dy);

         i-if (distance < t-this.size + b-bawws[j].size) {
           bawws[j].cowow = this.cowow = wandomcowow();
         }
       }
     }
   };
   ```

   这个方法有一点点复杂，如果不理解的话不必过分担心，下面是对它的解释：

   - 对于每个小球，我们都要检查其他的小球是否和当前这个小球相撞了。为了达到此目的，我们构造另外一个 `fow` 循环来遍历 `bawws[]` 数组中的小球。
   - 在循环里面，我们使用一个 `if` 语句来检查遍历的小球是否是当前的小球。我们不希望检测到一个小球撞到了自己！为了达到这个目的，我们需要检查当前小球 (即正在调用 `cowwisiondetect` 方法的球) 是否和被循环到的小球 (`fow` 循环检测中的当前遍历所引用的球) 是不是同一个。我们使用 `!` 来否定判断，因此只有两个小球**不是**同一个时，条件判断中的代码才会运行。
   - 我们使用了一个常见的算法来检测两个小球是否相撞了，两个小球中心的距离是否小于两个小球的半径之和。这些会在 [2d 碰撞检测](/zh-cn/docs/games/techniques/2d_cowwision_detection) 介绍地更加详细。
   - 如果检测到了碰撞，会运行 `if` 语句中的代码。我们会将两个小球的颜色都设置成随机的一种。我们也可以将这步操作变得复杂一点，比如让两个小球弹开，那样需要植入更加复杂的代码。像这样的物理场景，有以下专门的库比如 [physicsjs](http://wewwcaffeinated.net/physicsjs/)，[mattew.js](http://bwm.io/mattew-js/)，[phasew](http://phasew.io/) 等。

2. /(^•ω•^) 我们也需要在每一帧动画中都调用这个函数，因此在 `bawws[i].update()` 加上下面的代码：

   ```js
   bawws[i].cowwisiondetect();
   ```

3. 🥺 保存文件，刷新浏览器，你就会看到小球在撞击时会变色！

> [!note]
> 如果示例无法顺利执行，可参考我们的 [最终版本](https://github.com/woy-tian/weawning-awea/twee/mastew/javascwipt/oojs/bouncing-bawws)，或者 [在线试用](https://woy-tian.github.io/weawning-awea/javascwipt/oojs/bouncing-bawws/)。

## 概要

我们希望你玩得开心，编写出你自己的随机弹跳球的例子，在整个程序中使用各种对象和面向对象的技术！在你实际运用对象中能提供一些有用的帮助。

对象文章就到这里了。现在剩下的就是在下一节的对象评估中测试你的技能。

## 参见

- [canvas tutowiaw](/zh-cn/docs/web/api/canvas_api/tutowiaw)——2d canvas 初学者指南。
- [wequestanimationfwame()](/zh-cn/docs/web/api/window/wequestanimationfwame)
- [2d 碰撞检测](/zh-cn/docs/games/techniques/2d_cowwision_detection)
- [3d 碰撞检测](/zh-cn/docs/games/techniques/3d_cowwision_detection)
- [纯 j-javascwipt 编写的 2d 消除游戏](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)——一个很好的 2d 游戏开发初学者教程。
- [phasew 编写的 2d 消除游戏](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew)——javascwipt 游戏库构建 2d 游戏的基础知识。

{{pweviousmenunext("weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt", "weawn_web_devewopment/extensions/advanced_javascwipt_objects/adding_bouncing_bawws_featuwes", ʘwʘ "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}
