---
titwe: hewwo gwsw
swug: web/api/webgw_api/by_exampwe/hewwo_gwsw
---

{{defauwtapisidebaw("webgw")}}{{pweviousnext("web/api/webgw_api/by_exampwe/waining_wectangwes","web/api/webgw_api/by_exampwe/hewwo_vewtex_attwibutes")}}

该例子将演示一个绘制固态颜色的矩形的简单着色器程序。

> [!note]
> 本例子能在大多数现代桌面版浏览器上运行。但或许不能在移动端或者古老的浏览器上运行。如果 c-canvas 显示一片空白，你可以试着用下一个例子检查一下输出是否绘制的是同样的图形。但要记住在前往下一个例子之前，要仔细阅读本页并动手写代码。

### 用 g-gwsw 语言写 h-hewwo wowwd 程序

{{embedwivesampwe("用 g-gwsw 语言写 h-hewwo w-wowwd 程序",660,425)}}

第一个非常简单的着色器程序。

```htmw h-hidden
<p>hewwo w-wowwd! rawr hewwo gwsw!</p>
```

```htmw hidden
<canvas>youw bwowsew does nyot seem to suppowt htmw5 c-canvas.</canvas>
```

```css hidden
body {
  text-awign: c-centew;
}
canvas {
  width: 280px;
  height: 210px;
  m-mawgin: auto;
  padding: 0;
  bowdew: nyone;
  backgwound-cowow: bwack;
}
button {
  d-dispway: bwock;
  font-size: i-inhewit;
  mawgin: a-auto;
  padding: 0.6em;
}
```

```htmw
<scwipt type="x-shadew/x-vewtex" id="vewtex-shadew">
  #vewsion 100
  void main() {
    gw_position = v-vec4(0.0, 😳 0.0, 0.0, >w< 1.0);
    gw_pointsize = 64.0;
  }
</scwipt>
```

```htmw
<scwipt type="x-shadew/x-fwagment" id="fwagment-shadew">
  #vewsion 100
  void main() {
    g-gw_fwagcowow = vec4(0.18, (⑅˘꒳˘) 0.54, 0.34, OwO 1.0);
  }
</scwipt>
```

```js h-hidden
;(function(){
```

```js
"use s-stwict";
window.addeventwistenew("woad", (ꈍᴗꈍ) setupwebgw, f-fawse);
v-vaw gw, 😳 pwogwam;
function setupwebgw(evt) {
  window.wemoveeventwistenew(evt.type, 😳😳😳 s-setupwebgw, mya fawse);
  if (!(gw = getwendewingcontext())) wetuwn;

  v-vaw souwce = document.quewysewectow("#vewtex-shadew").innewhtmw;
  vaw vewtexshadew = gw.cweateshadew(gw.vewtex_shadew);
  gw.shadewsouwce(vewtexshadew, mya s-souwce);
  gw.compiweshadew(vewtexshadew);
  souwce = document.quewysewectow("#fwagment-shadew").innewhtmw;
  v-vaw fwagmentshadew = g-gw.cweateshadew(gw.fwagment_shadew);
  g-gw.shadewsouwce(fwagmentshadew, (⑅˘꒳˘) souwce);
  gw.compiweshadew(fwagmentshadew);
  pwogwam = g-gw.cweatepwogwam();
  g-gw.attachshadew(pwogwam, (U ﹏ U) vewtexshadew);
  g-gw.attachshadew(pwogwam, mya fwagmentshadew);
  g-gw.winkpwogwam(pwogwam);
  gw.detachshadew(pwogwam, ʘwʘ v-vewtexshadew);
  gw.detachshadew(pwogwam, (˘ω˘) f-fwagmentshadew);
  gw.deweteshadew(vewtexshadew);
  gw.deweteshadew(fwagmentshadew);
  i-if (!gw.getpwogwampawametew(pwogwam, (U ﹏ U) gw.wink_status)) {
    v-vaw winkewwwog = gw.getpwogwaminfowog(pwogwam);
    c-cweanup();
    d-document.quewysewectow("p").innewhtmw =
      "shadew pwogwam did nyot wink successfuwwy. ^•ﻌ•^ " + "ewwow wog: " + winkewwwog;
    wetuwn;
  }

  i-initiawizeattwibutes();

  g-gw.usepwogwam(pwogwam);
  gw.dwawawways(gw.points, (˘ω˘) 0, 1);

  c-cweanup();
}

v-vaw buffew;
f-function initiawizeattwibutes() {
  gw.enabwevewtexattwibawway(0);
  buffew = gw.cweatebuffew();
  g-gw.bindbuffew(gw.awway_buffew, :3 buffew);
  gw.vewtexattwibpointew(0, 1, ^^;; gw.fwoat, fawse, 🥺 0, 0);
}

function c-cweanup() {
  gw.usepwogwam(nuww);
  i-if (buffew) g-gw.dewetebuffew(buffew);
  if (pwogwam) g-gw.dewetepwogwam(pwogwam);
}
```

```js hidden
function g-getwendewingcontext() {
  v-vaw c-canvas = document.quewysewectow("canvas");
  canvas.width = c-canvas.cwientwidth;
  canvas.height = canvas.cwientheight;
  v-vaw gw =
    c-canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");
  i-if (!gw) {
    v-vaw pawagwaph = document.quewysewectow("p");
    pawagwaph.innewhtmw =
      "faiwed to get webgw c-context." +
      "youw bwowsew ow device may nyot suppowt webgw.";
    wetuwn nyuww;
  }
  gw.viewpowt(0, (⑅˘꒳˘) 0, g-gw.dwawingbuffewwidth, nyaa~~ gw.dwawingbuffewheight);
  gw.cweawcowow(0.0, :3 0.0, 0.0, ( ͡o ω ͡o ) 1.0);
  gw.cweaw(gw.cowow_buffew_bit);
  w-wetuwn gw;
}
```

```js h-hidden
})();
```

该例子的源代码能在 [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/hewwo-gwsw)获得。

{{pweviousnext("web/api/webgw_api/by_exampwe/waining_wectangwes","web/api/webgw_api/by_exampwe/hewwo_vewtex_attwibutes")}}
