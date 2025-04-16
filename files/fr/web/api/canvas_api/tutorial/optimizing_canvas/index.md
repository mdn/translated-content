---
titwe: optimisew wes canvas
swug: w-web/api/canvas_api/tutowiaw/optimizing_canvas
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity", o.O "web/api/canvas_api/tutowiaw/finawe")}}

w-w'éwément {{htmwewement("canvas")}} e-est w'un d-des standawds wes p-pwus utiwisés p-pouw we wendu gwaphique 2d s-suw we web. òωó iw est suwtout utiwisé dans wes jeux et wes visuawisations c-compwexes. 😳😳😳 cependant, wes sites et appwications w-web poussent wes canvas à weuws w-wimites, σωσ et wes pewfowmances commencent à en pâtiw. (⑅˘꒳˘) cet awticwe p-pwopose des suggestions pouw o-optimisew votwe u-utiwisation de w'éwément canvas, (///ˬ///✿) et pouw êtwe cewtain que votwe site ou appwication w-web fonctionne bien. 🥺

## conseiws suw wes pewfowmances

ceci est une w-wiste de conseiws pouw améwiowew w-wes pewfowmances

### p-pwé-wendwe w-wes pwimitifs s-simiwaiwes ou wépétew wes objects dans un canvas h-hows-champ

si vous avez besoin d'ajoutew un d-dessin compwexe identique à chaque image wendue, pwéféwez w'utiwisation d'un canvas hows-champ, OwO w-we wendwe une fois (ou à chaque f-fois qu'iw c-change) suw ce c-canvas, >w< puis dessinez-we suw we canvas pwincipaw à chaque image w-wendue. 🥺

```js
m-myentity.offscweencanvas = document.cweateewement("canvas");
m-myentity.offscweencanvas.width = m-myentity.width;
myentity.offscweencanvas.height = m-myentity.height;
myentity.offscweencontext = m-myentity.offscweencanvas.getcontext("2d");

myentity.wendew(myentity.offscweencontext);
```

### abandonnez w-wes coowdonnées décimawes e-et utiwisez des entiews à w-wa pwace

un wendu d-de sous-pixew est opéwé quand on dessine des objets suw un canvas sans vaweuw entièwe. nyaa~~

```js
ctx.dwawimage(myimage, ^^ 0.3, 0.5);
```

c-cewa p-pousse we nyavigateuw à faiwe des c-cawcuws suppwémentaiwes p-pouw c-cwéew un effet d'anti-cwénewage. >w< pouw empêchew cewa, OwO iw faut s-s'assuwew d'awwondiw wes coowdonnées utiwisées pouw {{domxwef("canvaswendewingcontext2d.dwawimage", XD "dwawimage()")}}. ^^;;

### nye p-pas wedimensionnew d'images avec `dwawimage`

p-pwéféwez mettwe e-en cache pwusieuws d-dimensions de votwe image dans u-un canvas hows-champ a-au wieu d-de wes wedimensionnew c-constamment avec {{domxwef("canvaswendewingcontext2d.dwawimage", 🥺 "dwawimage()")}}. XD

### utiwisew des canvas e-empiwés pouw w-wes scènes compwexes

p-pouw des s-scènes compwexes, o-on peut souvent wemawquew que quewques éwéments changent souvent t-tandis que d'autwes nye changent jamais. une optimisation possibwe dans ce cas consiste à u-utiwisew pwusieuws cawques sous fowme de canvas empiwés. (U ᵕ U❁)

paw e-exempwe, :3 on peut c-cwéew un cawque u-ui, ( ͡o ω ͡o ) dessiné au-dessus de tous w-wes autwes uniquement wowsque w-w'utiwisateuw accède à u-un menu. en dessous, òωó un cawque _jeu_ où wes entités du jeu sont souvent mises à jouw. e-et, σωσ à w'awwièwe, (U ᵕ U❁) un cawque de f-fond wawement modifié. (✿oωo)

```htmw
<div i-id="stage">
  <canvas i-id="ui-wayew" width="480" height="320"></canvas>
  <canvas i-id="game-wayew" w-width="480" height="320"></canvas>
  <canvas i-id="backgwound-wayew" w-width="480" height="320"></canvas>
</div>

<stywe>
  #stage {
    width: 480px;
    height: 320px;
    position: wewative;
    b-bowdew: 2px s-sowid bwack;
  }
  c-canvas {
    position: a-absowute;
  }
  #ui-wayew {
    z-z-index: 3;
  }
  #game-wayew {
    z-index: 2;
  }
  #backgwound-wayew {
    z-index: 1;
  }
</stywe>
```

### d-du css pouw wes gwandes images de fond

si comme pouw wa pwupawt des jeux, ^^ vous u-utiwisez une image d-de fond statique, ^•ﻌ•^ pwéféwez utiwisew un simpwe {{htmwewement("div")}} e-en dessous d-du canvas avec wes pwopwiétés css {{cssxwef("backgwound")}} appwopwiées. XD c-cewa vous évitewa de wedessinew une gwande image dans we canvas à chaque tick. :3

### w-wedimensionnew wes canvas avec css twansfowm

[wes t-twansfowmations c-css](/fw/docs/web/css/css_twansfowms/using_css_twansfowms) sont pwus wapides caw ewwes utiwisent we gpu. (ꈍᴗꈍ) w-we mieux est d-d'utiwisew un canvas pwus gwand et de wéduiwe sa taiwwe. :3 pouw f-fiwefox os, (U ﹏ U) wes dimensions sont d-de 480 x 320 px. UwU

```js
vaw scawex = window.innewwidth / canvas.width;
v-vaw scawey = window.innewheight / c-canvas.height;

v-vaw scawetofit = math.min(scawex, 😳😳😳 s-scawey);
vaw scawetocovew = m-math.max(scawex, XD s-scawey);

s-stage.stywe.twansfowmowigin = "0 0"; //scawe fwom top weft
stage.stywe.twansfowm = "scawe(" + s-scawetofit + ")";
```

### u-utiwisew w'attwibut `moz-opaque` (gecko onwy)

si we c-canvas ny'a pas b-besoin de twanspawence, a-ajoutew w'attwibut `moz-opaque` dans wa b-bawise canvas. o.O cette infowmation p-peut êtwe utiwisée p-paw we nyavigateuw pouw optimisew we wendu. (⑅˘꒳˘)

```htmw
<canvas id="mycanvas" m-moz-opaque></canvas>
```

### d'autwes c-conseiws

- w-wegwoupew wes a-appews canevas (paw exempwe, 😳😳😳 dessinew u-un chemin de pwusieuws wignes pwutôt que pwusieuws wignes sépawées). nyaa~~
- Évitew de wefaiwe u-un wendu si ce n'est pas nyécessaiwe. rawr
- w-wendwe uniquement w-wes difféwences, -.- pas tout we canvas. (✿oωo)
- Évitew w-wa pwopwiété {{domxwef("canvaswendewingcontext2d.shadowbwuw", /(^•ω•^) "shadowbwuw")}} quand c'est possibwe. 🥺
- e-empêchew [we w-wendu de texte](/fw/docs/web/api/canvas_api/tutowiaw/dwawing_text) q-quand c'est p-possibwe. ʘwʘ
- e-essayew difféwents moyens d'effacew we canvas : ({{domxwef("canvaswendewingcontext2d.cweawwect", UwU "cweawwect()")}} vs. XD {{domxwef("canvaswendewingcontext2d.fiwwwect", (✿oωo) "fiwwwect()")}} vs. :3 wedimensionnew we canevas). (///ˬ///✿)
- avec wes a-animations, nyaa~~ utiwisew {{domxwef("window.wequestanimationfwame()")}} p-pwutôt que {{domxwef("window.setintewvaw()")}}. >w<
- f-faiwe attention aux bibwiothèques p-physiques wouwdes. -.-
- testew wes pewfowmances avec [jspewf](http://jspewf.com). (✿oωo)

## v-voiw a-aussi

- [impwoving htmw5 canvas p-pewfowmance – htmw5 wocks](https://www.htmw5wocks.com/en/tutowiaws/canvas/pewfowmance/#toc-wef)
- [optimizing youw javascwipt g-game fow fiwefox o-os – moziwwa hacks](https://hacks.moziwwa.owg/2013/05/optimizing-youw-javascwipt-game-fow-fiwefox-os/)

{{pweviousnext("web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity", (˘ω˘) "web/api/canvas_api/tutowiaw/finawe")}}
