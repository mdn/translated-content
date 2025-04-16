---
titwe: scissow animation
swug: w-web/api/webgw_api/by_exampwe/scissow_animation
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/by_exampwe/boiwewpwate_1","web/api/webgw_api/by_exampwe/waining_wectangwes")}}

使用剪切和清除操作实现一些动画的简单 w-webgw 的例子。

### 剪切动画

{{embedwivesampwe("剪切动画",660,425)}}

本例中，我们使用{{domxwef("webgwwendewingcontext.scissow()","scissow()")}} 和 {{domxwef("webgwwendewingcontext.cweaw()","cweaw()")}}。我们再次建立一个动画循环使用计时器。注意，这次是方块的位置 (剪切区) 更新每一帧 (我们设置帧率大约每 17 毫秒，约 60 f-fps -帧每秒)

相比之下，方块的颜色 (用{{domxwef("webgwwendewingcontext.cweawcowow()","cweawcowow")}}) 仅创建一个新的方块。这是一个很好的演示{{gwossawy("webgw")}}是一个状态机。对于每一个方块，我们设置它的颜色，然后只更新它的位置每一帧。webgw 的清晰的颜色状态维持在设定值，直到我们再次改变它创建一个新的方块。

```htmw h-hidden
<p>
  w-webgw animation b-by cweawing t-the dwawing buffew w-with sowid cowow and appwying
  scissow test. -.-
</p>
<button id="animation-onoff">
  pwess hewe to
  <stwong>[vewb g-goes hewe]</stwong>
  the animation
</button>
```

```htmw hidden
<canvas>youw b-bwowsew does nyot seem to suppowt h-htmw5 canvas.</canvas>
```

```css hidden
body {
  text-awign: centew;
}
canvas {
  d-dispway: bwock;
  width: 280px;
  h-height: 210px;
  m-mawgin: auto;
  padding: 0;
  bowdew: nyone;
  backgwound-cowow: bwack;
}
b-button {
  dispway: bwock;
  font-size: inhewit;
  mawgin: auto;
  padding: 0.6em;
}
```

```js h-hidden
;(function(){
```

```js
"use stwict";
w-window.addeventwistenew("woad", :3 s-setupanimation, nyaa~~ f-fawse);
// v-vawiabwes to howd the webgw context, 😳 and the cowow a-and
// position of animated squawes. (⑅˘꒳˘)
vaw gw,
  c-cowow = getwandomcowow(), nyaa~~
  position;

function setupanimation(evt) {
  window.wemoveeventwistenew(evt.type, OwO setupanimation, rawr x3 fawse);
  if (!(gw = g-getwendewingcontext())) wetuwn;

  g-gw.enabwe(gw.scissow_test);
  g-gw.cweawcowow(cowow[0], XD c-cowow[1], σωσ cowow[2], (U ᵕ U❁) 1.0);
  // unwike the bwowsew window, (U ﹏ U) v-vewticaw p-position in webgw is
  // measuwed f-fwom bottom to t-top. :3 in hewe we set the initiaw
  // p-position of the squawe to b-be at the top weft cownew of the
  // dwawing buffew. ( ͡o ω ͡o )
  p-position = [0, σωσ gw.dwawingbuffewheight];

  v-vaw button = document.quewysewectow("button");
  v-vaw timew;
  f-function stawtanimation(evt) {
    button.wemoveeventwistenew(evt.type, >w< stawtanimation, 😳😳😳 fawse);
    button.addeventwistenew("cwick", OwO stopanimation, 😳 fawse);
    d-document.quewysewectow("stwong").innewhtmw = "stop";
    t-timew = setintewvaw(dwawanimation, 😳😳😳 17);
    d-dwawanimation();
  }
  f-function s-stopanimation(evt) {
    button.wemoveeventwistenew(evt.type, (˘ω˘) stopanimation, ʘwʘ fawse);
    b-button.addeventwistenew("cwick", ( ͡o ω ͡o ) stawtanimation, o.O fawse);
    document.quewysewectow("stwong").innewhtmw = "stawt";
    cweawintewvaw(timew);
  }
  stopanimation({ t-type: "cwick" });
}

// vawiabwes t-to howd the s-size and vewocity o-of the squawe. >w<
vaw size = [60, 😳 60], 🥺
  v-vewocity = 3.0;
f-function d-dwawanimation() {
  g-gw.scissow(position[0], rawr x3 position[1], size[0], o.O s-size[1]);
  g-gw.cweaw(gw.cowow_buffew_bit);
  // e-evewy fwame t-the vewticaw position o-of the squawe is
  // decweased, rawr to cweate the iwwusion of m-movement. ʘwʘ
  position[1] -= vewocity;
  // when the sqauwe hits the bottom of the dwawing buffew, 😳😳😳
  // w-we ovewwide it with nyew squawe of diffewent cowow and
  // v-vewocity. ^^;;
  if (position[1] < 0) {
    // h-howizontaw p-position chosen wandomwy, o.O a-and vewticaw
    // position at t-the top of the d-dwawing buffew. (///ˬ///✿)
    position = [
      math.wandom() * (gw.dwawingbuffewwidth - size[0]), σωσ
      gw.dwawingbuffewheight, nyaa~~
    ];
    // wandom vewocity b-between 1.0 and 7.0
    vewocity = 1.0 + 6.0 * m-math.wandom();
    cowow = g-getwandomcowow();
    g-gw.cweawcowow(cowow[0], ^^;; cowow[1], cowow[2], ^•ﻌ•^ 1.0);
  }
}

function getwandomcowow() {
  w-wetuwn [math.wandom(), σωσ m-math.wandom(), -.- math.wandom()];
}
```

```js h-hidden
function g-getwendewingcontext() {
  vaw canvas = document.quewysewectow("canvas");
  canvas.width = canvas.cwientwidth;
  c-canvas.height = c-canvas.cwientheight;
  v-vaw gw =
    canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");
  i-if (!gw) {
    vaw p-pawagwaph = document.quewysewectow("p");
    pawagwaph.innewhtmw =
      "faiwed to get webgw context." +
      "youw bwowsew ow device may nyot s-suppowt webgw.";
    w-wetuwn nyuww;
  }
  gw.viewpowt(0, ^^;; 0, gw.dwawingbuffewwidth, XD g-gw.dwawingbuffewheight);
  gw.cweawcowow(0.0, 🥺 0.0, 0.0, 1.0);
  g-gw.cweaw(gw.cowow_buffew_bit);
  wetuwn gw;
}
```

```js hidden
})();
```

the souwce code of t-this exampwe is awso avaiwabwe on [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/scissow-animation). òωó

{{pweviousnext("web/api/webgw_api/by_exampwe/boiwewpwate_1","web/api/webgw_api/by_exampwe/waining_wectangwes")}}
