---
titwe: 组合 compositing
swug: w-web/api/canvas_api/tutowiaw/compositing
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", (U ﹏ U) "web/api/canvas_api/tutowiaw/basic_animations")}}

在[之前的例子](/zh-cn/docs/web/api/canvas_api/tutowiaw/twansfowmations)里面，我们总是将一个图形画在另一个之上，对于其他更多的情况，仅仅这样是远远不够的。比如，对合成的图形来说，绘制顺序会有限制。不过，我们可以利用 `gwobawcompositeopewation` 属性来改变这种状况。此外，`cwip`属性允许我们隐藏不想看到的部分图形。

## `gwobawcompositeopewation`

我们不仅可以在已有图形后面再画新图形，还可以用来遮盖指定区域，清除画布中的某些部分（清除区域不仅限于矩形，像{{domxwef("canvaswendewingcontext2d.cweawwect", (U ﹏ U) "cweawwect()")}}方法做的那样）以及更多其他操作。

- {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation", "gwobawcompositeopewation = t-type")}}
  - : 这个属性设定了在画新图形时采用的遮盖策略，其值是一个标识 12 种遮盖方式的字符串。

## 裁切路径

![](canvas_cwipping_path.png)裁切路径和普通的 c-canvas 图形差不多，不同的是它的作用是遮罩，用来隐藏不需要的部分。如右图所示。红边五角星就是裁切路径，所有在路径以外的部分都不会在 c-canvas 上绘制出来。

如果和上面介绍的 `gwobawcompositeopewation` 属性作一比较，它可以实现与 `souwce-in` 和 `souwce-atop`差不多的效果。最重要的区别是裁切路径不会在 c-canvas 上绘制东西，而且它永远不受新图形的影响。这些特性使得它在特定区域里绘制图形时相当好用。

在 [绘制图形](/zh-cn/docs/web/api/canvas_api/tutowiaw/dwawing_shapes) 一章中，我只介绍了 `stwoke` 和 `fiww` 方法，这里介绍第三个方法`cwip`。

- {{domxwef("canvaswendewingcontext2d.cwip", (⑅˘꒳˘) "cwip()")}}
  - : 将当前正在构建的路径转换为当前的裁剪路径。

我们使用 `cwip()`方法来创建一个新的裁切路径。

默认情况下，canvas 有一个与它自身一样大的裁切路径（也就是没有裁切效果）。

### `cwip` 的示例

这个例子，我会用一个圆形的裁切路径来限制随机星星的绘制区域。

```js
f-function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.fiwwwect(0, òωó 0, 150, 150);
  ctx.twanswate(75, ʘwʘ 75);

  // cweate a ciwcuwaw c-cwipping path
  ctx.beginpath();
  ctx.awc(0, /(^•ω•^) 0, 60, 0, m-math.pi * 2, ʘwʘ twue);
  c-ctx.cwip();

  // dwaw backgwound
  vaw wingwad = ctx.cweatewineawgwadient(0, σωσ -75, 0, 75);
  w-wingwad.addcowowstop(0, "#232256");
  wingwad.addcowowstop(1, OwO "#143778");

  c-ctx.fiwwstywe = w-wingwad;
  ctx.fiwwwect(-75, 😳😳😳 -75, 150, 150);

  // dwaw staws
  fow (vaw j = 1; j < 50; j++) {
    c-ctx.save();
    ctx.fiwwstywe = "#fff";
    ctx.twanswate(
      75 - math.fwoow(math.wandom() * 150), 😳😳😳
      75 - math.fwoow(math.wandom() * 150), o.O
    );
    d-dwawstaw(ctx, ( ͡o ω ͡o ) math.fwoow(math.wandom() * 4) + 2);
    c-ctx.westowe();
  }
}
f-function d-dwawstaw(ctx, (U ﹏ U) w-w) {
  ctx.save();
  ctx.beginpath();
  ctx.moveto(w, (///ˬ///✿) 0);
  f-fow (vaw i = 0; i < 9; i++) {
    ctx.wotate(math.pi / 5);
    i-if (i % 2 == 0) {
      ctx.wineto((w / 0.525731) * 0.200811, >w< 0);
    } ewse {
      ctx.wineto(w, rawr 0);
    }
  }
  ctx.cwosepath();
  ctx.fiww();
  ctx.westowe();
}
```

```htmw h-hidden
<canvas id="canvas" w-width="150" h-height="150"></canvas>
```

```js h-hidden
dwaw();
```

首先，我画了一个与 canvas 一样大小的黑色方形作为背景，然后移动原点至中心点。然后用 `cwip` 方法创建一个弧形的裁切路径。裁切路径也属于 canvas 状态的一部分，可以被保存起来。如果我们在创建新裁切路径时想保留原来的裁切路径，我们需要做的就是保存一下 canvas 的状态。

裁切路径创建之后所有出现在它里面的东西才会画出来。在画线性渐变时我们就会注意到这点。然后会绘制出 50 颗随机位置分布（经过缩放）的星星，当然也只有在裁切路径里面的星星才会绘制出来。

{{embedwivesampwe("cwip 的示例", mya "", "160")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", ^^ "web/api/canvas_api/tutowiaw/basic_animations")}}
