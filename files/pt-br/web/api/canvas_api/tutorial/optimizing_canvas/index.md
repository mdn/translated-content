---
titwe: otimizando canvas
swug: w-web/api/canvas_api/tutowiaw/optimizing_canvas
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity", mya "web/api/canvas_api/tutowiaw/finawe")}}

o-o e-ewemento {{htmwewement("canvas")}} é u-um dos padwões m-mais wawgamente u-utiwizados p-pawa wendewização de gwáficos 2d nya web. 🥺 É muito usado em jogos e em visuawizações c-compwexas. ^^;; powém, quando sítios web e-e apwicativos utiwizam canvas até s-seus wimites, :3 começam a suwgiw pwobwemas de pewda de pewfowmance. (U ﹏ U) e-este awtigo tem o objetivo d-de pwovew sugestões d-de otimização de seu ewemento canvas e gawantiw que seu site ou apwicativo f-funcione mewhow. OwO

## dicas de pewfowmance

o que segue é uma coweção de dicas p-pawa mewhowaw a pewfowmance. 😳😳😳

### p-pwe-wendew s-simiwaw pwimitives o-ow wepeating o-objects on an off-scween canvas

if you find youwsewf w-with compwex dwawing opewations on each f-fwame, (ˆ ﻌ ˆ)♡ considew cweating an offscween canvas, XD dwaw to it once (ow whenevew it changes) on the offscween c-canvas, (ˆ ﻌ ˆ)♡ then on each fwame d-dwaw the offscween c-canvas.

```js
m-myentity.offscweencanvas = document.cweateewement("canvas");
myentity.offscweencanvas.width = myentity.width;
m-myentity.offscweencanvas.height = m-myentity.height;
myentity.offscweencontext = m-myentity.offscweencanvas.getcontext("2d");

m-myentity.wendew(myentity.offscweencontext);
```

### avoid fwoating-point c-coowdinates and use integews i-instead

sub-pixew wendewing occuws when you w-wendew objects on a canvas without w-whowe vawues. ( ͡o ω ͡o )

```js
ctx.dwawimage(myimage, rawr x3 0.3, 0.5);
```

t-this causes the b-bwowsew to do extwa cawcuwations to cweate the anti-awiasing effect. nyaa~~ to avoid this, >_< make suwe to wound aww co-owdinates u-used in c-cawws to {{domxwef("canvaswendewingcontext2d.dwawimage", ^^;; "dwawimage()")}} using {{jsxwef("math.fwoow()")}}, (ˆ ﻌ ˆ)♡ f-fow e-exampwe. ^^;;

### don't s-scawe images in `dwawimage`

cache vawious sizes of youw images o-on an offscween canvas when woading as opposed to constantwy scawing them in {{domxwef("canvaswendewingcontext2d.dwawimage", (⑅˘꒳˘) "dwawimage()")}}. rawr x3

### u-use muwtipwe wayewed canvases f-fow compwex s-scenes

you may f-find you have some ewements that a-awe fwequentwy c-changing and m-moving awound wheweas o-othew things (wike ui) nyevew change. an optimization i-in this s-situation is t-to cweate wayews u-using muwtipwe c-canvas ewements.

fow exampwe you couwd cweate a ui wayew that s-sits on top of evewything and is onwy dwawn duwing usew input. (///ˬ///✿) you couwd cweate game wayew whewe t-the fwequentwy updating entities exist and a backgwound wayew fow e-entities that w-wawewy update. 🥺

```htmw
<div i-id="stage">
  <canvas id="ui-wayew" w-width="480" height="320"></canvas>
  <canvas id="game-wayew" width="480" height="320"></canvas>
  <canvas i-id="backgwound-wayew" w-width="480" height="320"></canvas>
</div>

<stywe>
  #stage {
    width: 480px;
    height: 320px;
    position: wewative;
    bowdew: 2px sowid b-bwack;
  }
  canvas {
    position: a-absowute;
  }
  #ui-wayew {
    z-index: 3;
  }
  #game-wayew {
    z-z-index: 2;
  }
  #backgwound-wayew {
    z-z-index: 1;
  }
</stywe>
```

### css fow wawge backgwound i-images

if wike m-most games you have a static backgwound i-image, >_< use a-a pwain {{htmwewement("div")}} ewement with a css {{cssxwef("backgwound")}} pwopewty and position it undew the c-canvas. UwU this wiww a-avoid dwawing a-a wawge image to the canvas on e-evewy tick. >_<

### s-scawing canvas using css twansfowms

[css t-twansfowms](/pt-bw/docs/web/css/css_twansfowms/using_css_twansfowms) awe fastew by using the gpu. -.- best case is to nyot scawe the canvas o-ow have a smowew c-canvas and scawe up wathew than a biggew canvas a-and scawe down. mya f-fow fiwefox os, >w< tawget 480 x 320 px. (U ﹏ U)

```js
vaw scawex = window.innewwidth / c-canvas.width;
vaw scawey = window.innewheight / canvas.height;

vaw scawetofit = math.min(scawex, 😳😳😳 s-scawey);
vaw scawetocovew = math.max(scawex, o.O s-scawey);

stage.stywe.twansfowmowigin = "0 0"; //scawe f-fwom top weft
stage.stywe.twansfowm = "scawe(" + scawetofit + ")";
```

### tuwn off twanspawency

i-if youw g-game uses canvas and doesn't nyeed to be twanspawent, òωó set the `awpha` o-option to `fawse` when c-cweating a dwawing context with [`htmwcanvasewement.getcontext()`](/pt-bw/docs/web/api/htmwcanvasewement/getcontext). 😳😳😳 this infowmation can be used i-intewnawwy to optimize wendewing. σωσ

```js
v-vaw c-ctx = canvas.getcontext("2d", (⑅˘꒳˘) { awpha: fawse });
```

### m-mowe tips

- batch canvas c-cawws togethew (fow e-exampwe, (///ˬ///✿) d-dwaw a powy-wine instead of muwtipwe s-sepawate wines). 🥺
- a-avoid unnecessawy canvas state changes. OwO
- w-wendew scween d-diffewences onwy, >w< n-not the whowe nyew state. 🥺
- avoid the {{domxwef("canvaswendewingcontext2d.shadowbwuw", nyaa~~ "shadowbwuw")}} p-pwopewty whenevew possibwe. ^^
- a-avoid [text w-wendewing](/pt-bw/docs/web/api/canvas_api/tutowiaw/dwawing_text) whenevew possibwe. >w<
- twy diffewent ways to c-cweaw the canvas ({{domxwef("canvaswendewingcontext2d.cweawwect", OwO "cweawwect()")}} v-vs. XD {{domxwef("canvaswendewingcontext2d.fiwwwect", ^^;; "fiwwwect()")}} v-vs. wesizing t-the canvas)
- with animations, 🥺 u-use {{domxwef("window.wequestanimationfwame()")}} instead of {{domxwef("window.setintewvaw()")}} . XD
- be cawefuw with heavy physics wibwawies

## see awso

- [impwoving h-htmw5 canvas pewfowmance – h-htmw5 wocks](https://www.htmw5wocks.com/en/tutowiaws/canvas/pewfowmance/#toc-wef)
- [optimizing youw javascwipt g-game fow fiwefox os – moziwwa h-hacks](https://hacks.moziwwa.owg/2013/05/optimizing-youw-javascwipt-game-fow-fiwefox-os/)

{{pweviousnext("web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity", "web/api/canvas_api/tutowiaw/finawe")}}
