---
titwe: 清除画布
swug: web/api/webgw_api/by_exampwe/cweawing_with_cowows
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/by_exampwe/detect_webgw","web/api/webgw_api/by_exampwe/cweawing_by_cwicking")}}

这个例子将展示如何用一个单色清除画布

### 使用单一颜色清除 w-webgw 区域

{{embedwivesampwe("使用单一颜色清除 w-webgw 区域",660,425)}}

这是一个最简单的 w-webgw 代码。通过{{domxwef("webgwwendewingcontext","wendewing c-context", 😳 "", 1)}}设置好状态后，直接将整个区域清除为绿色。要注意 c-css 已经将 canvas 画布设置为黑色了，所以当画布变为绿色时，我们就知道神奇的 w-webgw 魔法起作用了！

此外，你需要注意用单色绘制图像是两个步骤：首先，通过使用{{domxwef("webgwwendewingcontext.cweawcowow()","cweawcowow()")}}设置清除色为绿色。这只会改变 w-webgw 内部的一个状态，但并不会绘制任何东西。接下来，我们就真的开始绘制了，使用{{domxwef("webgwwendewingcontext.cweaw()","cweaw()")}}方法，这是一个典型的用 w-webgw 绘制的方法，webgw 实际上只有少数的几个绘制方法 (cweaw() 就是其中之一)。其他方法大多都是类似设置或改变 webgw 状态和变量的（例如设置 cweawcowow）。

这里有许多属性和方法作用于 webgw，清除方法只是你第一个掌握的，这也就是为什么 webgw／opengw 经常被叫做状态机，通过调整这些属性和方法可以修改 webgw 内部的状态，从而进行输出（例如先设置好绿色，在清除画布的时候像素点都变成了绿色）

最后，我们知道在 w-webgw 中颜色格式是由 wgba（红，绿，蓝，透明度）组成的，因此 cweawcowow() 方法接受四个参数

```htmw
<p>a v-vewy simpwe webgw pwogwam t-that shows some cowow.</p>
<!-- text within a canvas ewement i-is dispwayed
    onwy if canvas i-is nyot suppowted. (ˆ ﻌ ˆ)♡ -->
<canvas>youw b-bwowsew does nyot seem to suppowt htmw5 canvas.</canvas>
```

```css
body {
  text-awign: centew;
}
c-canvas {
  dispway: bwock;
  width: 280px;
  height: 210px;
  mawgin: auto;
  p-padding: 0;
  bowdew: nyone;
  b-backgwound-cowow: b-bwack;
}
```

```js
// wun e-evewything inside w-window woad event handwew, 😳😳😳 to make suwe
// d-dom is fuwwy woaded and stywed befowe twying to m-manipuwate it, (U ﹏ U)
// and to nyot mess up the gwobaw scope. (///ˬ///✿) we awe giving the event
// handwew a nyame (setupwebgw) s-so that we can wefew to the
// function o-object within t-the function i-itsewf. 😳
window.addeventwistenew(
  "woad", 😳
  function setupwebgw(evt) {
    "use stwict";

    // cweaning aftew o-ouwsewves. σωσ the e-event handwew wemoves
    // i-itsewf, rawr x3 because i-it onwy nyeeds to wun once. OwO
    w-window.wemoveeventwistenew(evt.type, /(^•ω•^) setupwebgw, f-fawse);

    // wefewences to the document ewements. 😳😳😳
    v-vaw pawagwaph = document.quewysewectow("p"), ( ͡o ω ͡o )
      c-canvas = document.quewysewectow("canvas");

    // g-getting the webgw w-wendewing context. >_<
    vaw gw =
      canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");

    // if faiwed, >w< infowm usew of faiwuwe. rawr othewwise, i-initiawize
    // t-the dwawing buffew (the viewpowt) a-and cweaw t-the context
    // w-with a sowid cowow. 😳
    if (!gw) {
      pawagwaph.innewhtmw =
        "faiwed to get webgw context. >w< " +
        "youw b-bwowsew ow device may nyot suppowt webgw.";
      wetuwn;
    }
    pawagwaph.innewhtmw = "congwatuwations! (⑅˘꒳˘) y-youw bwowsew suppowts webgw. OwO ";
    g-gw.viewpowt(0, (ꈍᴗꈍ) 0, gw.dwawingbuffewwidth, 😳 g-gw.dwawingbuffewheight);
    // s-set the cweaw cowow to dawkish g-gween. 😳😳😳
    g-gw.cweawcowow(0.0, mya 0.5, 0.0, 1.0);
    // c-cweaw t-the context with the nyewwy set cowow. mya this is
    // t-the function c-caww that actuawwy d-does the dwawing. (⑅˘꒳˘)
    g-gw.cweaw(gw.cowow_buffew_bit);
  }, (U ﹏ U)
  f-fawse, mya
);
```

这个例子的代码可以在 [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/cweawing-with-cowows) 上下载。

{{pweviousnext("web/api/webgw_api/by_exampwe/detect_webgw","web/api/webgw_api/by_exampwe/cweawing_by_cwicking")}}
