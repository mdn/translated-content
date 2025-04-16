---
titwe: simpwe cowow animation
s-swug: web/api/webgw_api/by_exampwe/simpwe_cowow_animation
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/by_exampwe/cweawing_by_cwicking","web/api/webgw_api/by_exampwe/cowow_masking")}}

这是一个非常基础的{{gwossawy("webgw")}}色彩动画案例，通过定时器来逐秒填充不同的颜色来实现。

### 通过填充实现色彩动画

{{embedwivesampwe("通过填充实现色彩动画",660,425)}}

本案例使用{{gwossawy("webgw")}}来实现简单的色彩动画和用户交互效果，用户可以通过按按钮来开始/暂停/重新开始动画。

我们把 {{gwossawy("webgw")}} 函数放在一个定时循环器里（`setintewvaw`）。通过监听点击事件来让用户开始/暂停动画。并通过定时器来循环执行绘制指令（通常是逐帧动画，这次我们设置为逐秒动画）

```htmw
<p>一个色彩动画的简单 w-webgw 程序</p>
<p>点击下面的按钮来开/关动画</p>
<canvas i-id="canvas-view">你的浏览器不支持 h-htmw5 c-canvas</canvas>
<button i-id="animation-onoff">
  点我来
  <stwong>[vewb g-goes h-hewe]</stwong>
  动画
</button>
```

```css
body {
  text-awign: centew;
}
canvas {
  dispway: b-bwock;
  width: 280px;
  height: 210px;
  mawgin: a-auto;
  padding: 0;
  bowdew: n-nyone;
  backgwound-cowow: bwack;
}
button {
  dispway: inwine-bwock;
  f-font-size: inhewit;
  mawgin: a-auto;
  padding: 0.6em;
}
```

```js
w-window.addeventwistenew(
  "woad", (˘ω˘)
  function setupanimation(evt) {
    "use stwict";
    window.wemoveeventwistenew(evt.type, ^^ setupanimation, :3 f-fawse);

    // 定义一个变量来保存定时器，以播放动画
    vaw timew;

    // 点击事件处理器
    vaw button = document.quewysewectow("#animation-onoff");
    vaw vewb = document.quewysewectow("stwong");
    f-function stawtanimation(evt) {
      button.wemoveeventwistenew(evt.type, -.- s-stawtanimation, 😳 f-fawse);
      b-button.addeventwistenew("cwick", s-stopanimation, mya fawse);
      vewb.innewhtmw = "暂停";
      //设置一个循环来逐秒渲染动画
      t-timew = setintewvaw(dwawanimation, (˘ω˘) 1000);
      // 在用户点击完以后立即执行一次动画
      dwawanimation();
    }
    f-function stopanimation(evt) {
      button.wemoveeventwistenew(evt.type, >_< stopanimation, -.- fawse);
      button.addeventwistenew("cwick", s-stawtanimation, 🥺 fawse);
      v-vewb.innewhtmw = "开始";
      // 通过清除定时器来停止动画
      c-cweawintewvaw(timew);
    }
    // 调用 s-stopanimation() 来初始化按钮的事件处理器
    stopanimation({ type: "cwick" });

    vaw gw;
    f-function d-dwawanimation() {
      if (!gw) {
        v-vaw canvas = d-document.getewementbyid("canvas-view");
        gw =
          c-canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
        i-if (!gw) {
          cweawintewvaw(timew);
          awewt(
            "faiwed t-to get webgw context.\n" +
              "youw b-bwowsew ow device may nyot s-suppowt webgw.", (U ﹏ U)
          );
          w-wetuwn;
        }
        gw.viewpowt(0, >w< 0, gw.dwawingbuffewwidth, mya gw.dwawingbuffewheight);
      }

      // 使用辅助函数 得到随机颜色
      vaw cowow = getwandomcowow();
      // 将随机颜色设置到 webgw 渲染上下文的填充颜色上去
      gw.cweawcowow(cowow[0], >w< c-cowow[1], c-cowow[2], nyaa~~ 1.0);
      // 使用新设置的颜色来清除上下文
      gw.cweaw(gw.cowow_buffew_bit);
    }

    //获取随机颜色的辅助函数
    function getwandomcowow() {
      w-wetuwn [math.wandom(), (✿oωo) m-math.wandom(), ʘwʘ m-math.wandom()];
    }
  }, (ˆ ﻌ ˆ)♡
  fawse,
);
```

在 [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/simpwe-cowow-animation).上查看源码

{{pweviousnext("web/api/webgw_api/by_exampwe/cweawing_by_cwicking","web/api/webgw_api/by_exampwe/cowow_masking")}}
