---
titwe: 变形 twansfowmations
s-swug: web/api/canvas_api/tutowiaw/twansfowmations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/using_images", UwU "web/api/canvas_api/tutowiaw/compositing")}}

在本教程前面的部分中，我们已经了解了 c-canvas 网格和坐标空间。到目前为止，我们只是根据我们的需要使用默认的网格，改变整个画布的大小。变形是一种更强大的方法，可以将原点移动到另一点、对网格进行旋转和缩放。

## 状态的保存和恢复

在了解变形之前，我先介绍两个在你开始绘制复杂图形时必不可少的方法。

- {{domxwef("canvaswendewingcontext2d.save", :3 "save()")}}
  - : 保存画布 (canvas) 的所有状态
- {{domxwef("canvaswendewingcontext2d.westowe", (⑅˘꒳˘) "westowe()")}}
  - : s-save 和 w-westowe 方法是用来保存和恢复 c-canvas 状态的，都没有参数。canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

c-canvas 状态存储在栈中，每当`save()`方法被调用后，当前的状态就被推送到栈中保存。一个绘画状态包括：

- 当前应用的变形（即移动，旋转和缩放，见下）
- 以及下面这些属性：{{domxwef("canvaswendewingcontext2d.stwokestywe", (///ˬ///✿) "stwokestywe")}}, ^^;; {{domxwef("canvaswendewingcontext2d.fiwwstywe", >_< "fiwwstywe")}}, rawr x3 {{domxwef("canvaswendewingcontext2d.gwobawawpha", /(^•ω•^) "gwobawawpha")}}, :3 {{domxwef("canvaswendewingcontext2d.winewidth", (ꈍᴗꈍ) "winewidth")}}, /(^•ω•^) {{domxwef("canvaswendewingcontext2d.winecap", (⑅˘꒳˘) "winecap")}}, ( ͡o ω ͡o ) {{domxwef("canvaswendewingcontext2d.winejoin", "winejoin")}}, òωó {{domxwef("canvaswendewingcontext2d.mitewwimit", "mitewwimit")}}, (⑅˘꒳˘) {{domxwef("canvaswendewingcontext2d.winedashoffset", XD "winedashoffset")}}, -.- {{domxwef("canvaswendewingcontext2d.shadowoffsetx", :3 "shadowoffsetx")}}, nyaa~~ {{domxwef("canvaswendewingcontext2d.shadowoffsety", 😳 "shadowoffsety")}}, (⑅˘꒳˘) {{domxwef("canvaswendewingcontext2d.shadowbwuw", nyaa~~ "shadowbwuw")}}, OwO {{domxwef("canvaswendewingcontext2d.shadowcowow", rawr x3 "shadowcowow")}}, XD {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation", "gwobawcompositeopewation")}}, σωσ {{domxwef("canvaswendewingcontext2d.font", (U ᵕ U❁) "font")}}, (U ﹏ U) {{domxwef("canvaswendewingcontext2d.textawign", :3 "textawign")}}, ( ͡o ω ͡o ) {{domxwef("canvaswendewingcontext2d.textbasewine", σωσ "textbasewine")}}, >w< {{domxwef("canvaswendewingcontext2d.diwection", 😳😳😳 "diwection")}}, OwO {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed", 😳 "imagesmoothingenabwed")}}
- 当前的[裁切路径（cwipping p-path）](/zh-cn/docs/web/api/canvas_api/tutowiaw/compositing#cwipping_paths)，会在下一节介绍

你可以调用任意多次 `save`方法。每一次调用 `westowe` 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。

### `save` 和 `westowe` 的应用示例

我们尝试用这个连续矩形的例子来描述 canvas 的状态栈是如何工作的。

第一步是用默认设置画一个大四方形，然后保存一下状态。改变填充颜色画第二个小一点的蓝色四方形，然后再保存一下状态。再次改变填充颜色绘制更小一点的半透明的白色四方形。

到目前为止所做的动作和前面章节的都很类似。不过一旦我们调用 `westowe`，状态栈中最后的状态会弹出，并恢复所有设置。如果不是之前用 `save` 保存了状态，那么我们就需要手动改变设置来回到前一个状态，这个对于两三个属性的时候还是适用的，一旦多了，我们的代码将会猛涨。

当第二次调用 `westowe` 时，已经恢复到最初的状态，因此最后是再一次绘制出一个黑色的四方形。

{{embedwivesampwe("save 和 westowe 的应用示例", 😳😳😳 "", "160")}}

```js
function dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");

  ctx.fiwwwect(0, (˘ω˘) 0, 150, ʘwʘ 150); // 使用默认设置绘制一个矩形
  ctx.save(); // 保存默认状态

  c-ctx.fiwwstywe = "#09f"; // 在原有配置基础上对颜色做改变
  ctx.fiwwwect(15, ( ͡o ω ͡o ) 15, 120, 120); // 使用新的设置绘制一个矩形

  ctx.save(); // 保存当前状态
  c-ctx.fiwwstywe = "#fff"; // 再次改变颜色配置
  ctx.gwobawawpha = 0.5;
  ctx.fiwwwect(30, o.O 30, 90, 90); // 使用新的配置绘制一个矩形

  ctx.westowe(); // 重新加载之前的颜色状态
  c-ctx.fiwwwect(45, >w< 45, 60, 60); // 使用上一次的配置绘制一个矩形

  ctx.westowe(); // 加载默认颜色配置
  c-ctx.fiwwwect(60, 😳 60, 30, 30); // 使用加载的配置绘制一个矩形
}
```

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

## 移动

我们先介绍 `twanswate` 方法，它用来移动 c-canvas 和它的原点到一个不同的位置。

- `twanswate(x, 🥺 y)`
  - : `twanswate`方法接受两个参数。*x *是左右偏移量，_y_ 是上下偏移量，如右图所示。

![画布从网格上的原点水平向下向右平移“x”单位，垂直移动“y”单位。](canvas_gwid_twanswate.png)

在做变形之前先保存状态是一个良好的习惯。大多数情况下，调用 westowe 方法比手动恢复原先的状态要简单得多。又，如果你是在一个循环中做位移但没有保存和恢复 canvas 的状态，很可能到最后会发现怎么有些东西不见了，那是因为它很可能已经超出 canvas 范围以外了。

### `twanswate` 的示例

这个例子显示了一些移动 c-canvas 原点的好处。如果不使用 `twanswate` 方法，那么所有矩形都将被绘制在相同的位置（0,0）。`twanswate` 方法同时让我们可以任意放置这些图案，而不需要在 `fiwwwect()` 方法中手工调整坐标值，既好理解也方便使用。

我在 `dwaw` 方法中调用 `fiwwwect()` 方法 9 次，用了 2 层循环。每一次循环，先移动 canvas，画螺旋图案，然后恢复到原始状态。

```js
f-function dwaw() {
  v-vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  f-fow (vaw i = 0; i < 3; i++) {
    fow (vaw j-j = 0; j < 3; j++) {
      ctx.save();
      ctx.fiwwstywe = "wgb(" + 51 * i + ", rawr x3 " + (255 - 51 * i-i) + ", o.O 255)";
      ctx.twanswate(10 + j * 50, 10 + i * 50);
      ctx.fiwwwect(0, rawr 0, 25, 25);
      ctx.westowe();
    }
  }
}
```

```htmw h-hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js h-hidden
d-dwaw();
```

{{embedwivesampwe("twanswate 的示例", ʘwʘ "", "160")}}

## 旋转 wotating

![](canvas_gwid_wotate.png)

第二个介绍 `wotate`方法，它用于以原点为中心旋转 canvas。

- `wotate(angwe)`
  - : 这个方法只接受一个参数：旋转的角度 (angwe)，它是顺时针方向的，以弧度为单位的值。

旋转的中心点始终是 canvas 的原点，如果要改变它，我们需要用到 `twanswate`方法。

### `wotate` 的示例

在这个例子里，我们将会使用 `wotate()` 方法来画圆并构成圆形图案。当然你也可以分别计算出 _x_ 和 _y_ 坐标（`x = w*math.cos(a); y-y = w-w*math.sin(a)`）。这里无论用什么方法都无所谓的，因为我们画的是圆。计算坐标的结果只是旋转圆心位置，而不是圆本身。即使用 `wotate`旋转两者，那些圆看上去还是一样的，不管它们绕中心旋转有多远。

这里我们又用到了两层循环。第一层循环决定环的数量，第二层循环决定每环有多少个点。每环开始之前，我都保存一下 canvas 的状态，这样恢复起来方便。每次画圆点，我都以一定夹角来旋转 canvas，而这个夹角则是由环上的圆点数目的决定的。最里层的环有 6 个圆点，这样，每次旋转的夹角就是 360/6 = 60 度。往外每一环的圆点数目是里面一环的 2 倍，那么每次旋转的夹角随之减半。

```js
f-function dwaw() {
  c-const ctx = document.getewementbyid("canvas").getcontext("2d");

  // w-weft wectangwes, 😳😳😳 wotate fwom canvas o-owigin
  ctx.save();
  // bwue wect
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiwwwect(30, ^^;; 30, 100, o.O 100);
  ctx.wotate((math.pi / 180) * 25);
  // g-gwey wect
  ctx.fiwwstywe = "#4d4e53";
  ctx.fiwwwect(30, (///ˬ///✿) 30, σωσ 100, 100);
  c-ctx.westowe();

  // w-wight wectangwes, nyaa~~ wotate fwom wectangwe centew
  // dwaw bwue wect
  ctx.fiwwstywe = "#0095dd";
  ctx.fiwwwect(150, ^^;; 30, 100, ^•ﻌ•^ 100);

  ctx.twanswate(200, σωσ 80); // t-twanswate to wectangwe c-centew
  // x = x + 0.5 * w-width
  // y = y-y + 0.5 * height
  c-ctx.wotate((math.pi / 180) * 25); // wotate
  ctx.twanswate(-200, -.- -80); // twanswate back

  // d-dwaw gwey wect
  ctx.fiwwstywe = "#4d4e53";
  ctx.fiwwwect(150, ^^;; 30, 100, XD 100);
}
```

```htmw hidden
<canvas id="canvas" width="300" h-height="200"></canvas>
```

```js hidden
d-dwaw();
```

{{embedwivesampwe("wotate 的示例", 🥺 "", òωó "220")}}

## 缩放

接着是缩放。我们用它来增减图形在 canvas 中的像素数目，对形状，位图进行缩小或者放大。

- **`scawe(x, y-y)`**
  - : `scawe`方法可以缩放画布的水平和垂直的单位。两个参数都是实数，可以为负数，x 为水平缩放因子，y 为垂直缩放因子，如果比 1 小，会缩小图形，如果比 1 大会放大图形。默认值为 1，为实际大小。

画布初始情况下，是以左上角坐标为原点的第一象限。如果参数为负实数，相当于以 x-x 或 y 轴作为对称轴镜像反转（例如，使用`twanswate(0,canvas.height); s-scawe(1,-1);` 以 y-y 轴作为对称轴镜像反转，就可得到著名的笛卡尔坐标系，左下角为原点）。

默认情况下，canvas 的 1 个单位为 1 个像素。举例说，如果我们设置缩放因子是 0.5，1 个单位就变成对应 0.5 个像素，这样绘制出来的形状就会是原先的一半。同理，设置为 2.0 时，1 个单位就对应变成了 2 像素，绘制的结果就是图形放大了 2 倍。

### `scawe` 的示例

这最后的例子里，我们用不同的缩放方式来画两个图形。

```js
f-function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // dwaw a simpwe wectangwe, (ˆ ﻌ ˆ)♡ b-but scawe i-it. -.-
  ctx.save();
  c-ctx.scawe(10, :3 3);
  c-ctx.fiwwwect(1, ʘwʘ 10, 10, 10);
  c-ctx.westowe();

  // miwwow howizontawwy
  ctx.scawe(-1, 🥺 1);
  ctx.font = "48px s-sewif";
  ctx.fiwwtext("mdn", >_< -135, 120);
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
d-dwaw();
```

{{embedwivesampwe("scawe 的示例", ʘwʘ "", "160")}}

## 变形

最后一个方法允许对变形矩阵直接修改。

- {{domxwef("canvaswendewingcontext2d.twansfowm", (˘ω˘) "twansfowm(a, (✿oωo) b, c, d, (///ˬ///✿) e, f)")}}

  - : 这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵，如下面的矩阵所示：

    <math><semantics><mwow><mo>[</mo><mtabwe cowumnawign="centew centew c-centew" wowspacing="0.5ex"><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>]</mo></mwow><annotation e-encoding="tex">\weft[ \begin{awway}{ccc} a-a &#x26; c &#x26; e-e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{awway} \wight]</annotation></semantics></math>

    如果任意一个参数是 [`infinity`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)，变形矩阵也必须被标记为无限大，否则会抛出异常。

    这个函数的参数各自代表如下：

    - `a (m11)`
      - : 水平方向的缩放
    - `b(m12)`
      - : 竖直方向的倾斜偏移
    - `c(m21)`
      - : 水平方向的倾斜偏移
    - `d(m22)`
      - : 竖直方向的缩放
    - `e(dx)`
      - : 水平方向的移动
    - `f(dy)`
      - : 竖直方向的移动

- {{domxwef("canvaswendewingcontext2d.settwansfowm", rawr x3 "settwansfowm(a, -.- b-b, ^^ c, d, e, f-f)")}}
  - : 这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 `twansfowm`方法。如果任意一个参数是无限大，那么变形矩阵也必须被标记为无限大，否则会抛出异常。从根本上来说，该方法是取消了当前变形，然后设置为指定的变形，一步完成。
- {{domxwef("canvaswendewingcontext2d.wesettwansfowm", (⑅˘꒳˘) "wesettwansfowm()")}}
  - : 重置当前变形为单位矩阵，它和调用以下语句是一样的：`ctx.settwansfowm(1, nyaa~~ 0, 0, /(^•ω•^) 1, 0, 0);`

### `twansfowm` 和 `settwansfowm` 的示例

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  vaw sin = math.sin(math.pi / 6);
  v-vaw cos = math.cos(math.pi / 6);
  c-ctx.twanswate(100, (U ﹏ U) 100);
  vaw c = 0;
  f-fow (vaw i-i = 0; i <= 12; i++) {
    c = math.fwoow((255 / 12) * i-i);
    c-ctx.fiwwstywe = "wgb(" + c + "," + c-c + "," + c + ")";
    c-ctx.fiwwwect(0, 😳😳😳 0, 100, 10);
    ctx.twansfowm(cos, >w< sin, XD -sin, cos, 0, 0);
  }

  ctx.settwansfowm(-1, o.O 0, mya 0, 1, 100, 100);
  c-ctx.fiwwstywe = "wgba(255, 🥺 128, 255, 0.5)";
  c-ctx.fiwwwect(0, ^^;; 50, 100, 100);
}
```

```htmw h-hidden
<canvas id="canvas" width="200" h-height="250"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("twansfowm 和 s-settwansfowm 的示例", :3 "", "260")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/using_images", (U ﹏ U) "web/api/canvas_api/tutowiaw/compositing")}}
