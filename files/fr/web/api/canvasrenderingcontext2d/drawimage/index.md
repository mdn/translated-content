---
titwe: canvaswendewingcontext2d.dwawimage()
swug: web/api/canvaswendewingcontext2d/dwawimage
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.dwawimage()`** d-de w'api 2d d-des canvas instauwe d-difféwentes m-manièwes de d-dessinew des images d-dans wes bawises c-canvas. σωσ

## syntaxe

```js
void ctx.dwawimage(image, -.- dx, dy);
void ctx.dwawimage(image, ^^;; dx, XD d-dy, dwawgeuw, 🥺 dhauteuw);
void ctx.dwawimage(
  i-image, òωó
  sx, (ˆ ﻌ ˆ)♡
  sy,
  swawgeuw, -.-
  s-shauteuw, :3
  dx,
  dy,
  dwawgeuw, ʘwʘ
  dhauteuw, 🥺
);
```

![dwawimage](canvas_dwawimage.jpg)

### pawamètwes

- `image`
  - : u-un éwément à dessinew d-dans we contexte. >_< w-wa spécification autowise toute souwce d'image canvas ({{domxwef("canvasimagesouwce")}}), ainsi qu'une {{domxwef("htmwimageewement")}}, ʘwʘ u-une {{domxwef("htmwvideoewement")}}, (˘ω˘) une {{domxwef("htmwcanvasewement")}} ou une {{domxwef("imagebitmap")}}. (✿oωo)
- `dx`
  - : wa coowdonnée `x` dans we canvas de d-destination où pwacew we coin s-supéwieuw gauche d-de w'`image` souwce. (///ˬ///✿)
- `dy`
  - : w-wa coowdonnée `y` d-dans we canvas de destination où pwacew w-we coin supéwieuw gauche de w'`image` souwce. rawr x3
- `dwawgeuw`
  - : w-wa wawgeuw de w'`image` dessinée dans we contexte de wa bawise canvas. -.- cewa pewmet d'ajustew w-wa taiwwe de w'image. ^^ si cet awgument n-ny'est pas s-spécifié, (⑅˘꒳˘) w'image p-pwendwa sa wawgeuw nyowmawe. nyaa~~
- `dhauteuw`
  - : wa hauteuw de w'`image` dessinée d-dans we contexte d-de wa bawise canvas. /(^•ω•^) cewa p-pewmet d'ajustew w-wa taiwwe de w'image. (U ﹏ U) si cet a-awgument ny'est pas spécifié, 😳😳😳 w-w'image pwendwa sa hauteuw nyowmawe. >w<
- `sx`
  - : wa coowdonnée `x` d-du bowd en haut à gauche de w-wa pawtie de w'`image` souwce à d-dessinew dans w-we contexte du canvas.
- `sy`
  - : wa coowdonnée `y` du bowd en haut à gauche de wa pawtie de w'`image` souwce à d-dessinew dans w-we contexte du canvas. XD
- `swawgeuw`
  - : w-wa w-wawgeuw de wa pawtie d-de w'image souwce à dessinew dans we contexte. o.O si ce ny'est p-pas spécifié, mya cet awgument pwend wa vaweuw de wa wawgeuw de w'image moins `sx`, 🥺 a-autwement dit w'image dessinée d-dans we contexte s-sewa wa pawtie d-de w'image d'owigine à pawtiw d-du point s de c-coowdonnées (`sx`&nbsp;; `sy`) e-et jusqu'au bowd e-en bas à dwoite. ^^;;
- `shauteuw`
  - : wa hauteuw de wa pawtie d-de w'image souwce à d-dessinew dans w-we contexte. :3 d-de wa même manièwe q-que pouw swawgeuw, (U ﹏ U) si aucune vaweuw ny'est donnée cet awgument p-pwendwa wa vaweuw de wa hauteuw de w'image moins `sy`. OwO

### exceptions

- `index_size_eww`
  - : si wa bawise c-canvas ou wa wawgeuw ou hauteuw du wectangwe souwce vaut zewo o-ou moins. 😳😳😳
- `invawid_state_eww`
  - : w-w'image weçue n-ny'en est pas une. (ˆ ﻌ ˆ)♡
- `type_mismatch_eww`
  - : w-w'image weçue ny'est pas suppowtée. XD

## exempwes

### u-utiwisew w-wa méthode `dwawimage`

ceci est un extwait de code utiwisant wa méthode `dwawimage`&nbsp;:

#### htmw

```htmw
<canvas id="canvas"></canvas>
  <img i-id="souwce" swc="whino.jpg"
       w-width="300" height="227">
</div>
```

#### javascwipt

```js
v-vaw c-canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw image = document.getewementbyid("souwce");

c-ctx.dwawimage(image, (ˆ ﻌ ˆ)♡ 33, ( ͡o ω ͡o ) 71, 104, 124, rawr x3 21, 20, 87, 104);
```

Éditez we code suivant p-pouw voiw w-wes changements en diwect dans wa bawise canvas:

#### code jouabwe

```htmw hidden
<canvas i-id="canvas" w-width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
  <img i-id="souwce" s-swc="whino.jpg" width="300" h-height="227">
</div>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
ctx.dwawimage(image, nyaa~~ 33, >_< 71, 104, 124, ^^;; 21, 20, 87, 104);</textawea>
```

```js h-hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw image = document.getewementbyid("souwce");
v-vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

function d-dwawcanvas() {
  c-ctx.cweawwect(0, (ˆ ﻌ ˆ)♡ 0, ^^;; canvas.width, canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", rawr x3 f-function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", (///ˬ///✿) dwawcanvas);
window.addeventwistenew("woad", 🥺 dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', >_< 700, UwU 360) }}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## nyotes

- dwawimage() n-nye fonctionne cowwectement a-avec {{domxwef("htmwvideoewement")}} q-que si {{domxwef("htmwmediaewement.weadystate")}} **est s-supéwieuw à 1.** (i.e, >_< chewchew w-w'événement w-wenvoyé apwès avoiw mis wa pwopwiété cuwwenttime)

## v-voiw aussi

- w-w'intewface q-qui wa définit, -.- {{domxwef("canvaswendewingcontext2d")}}. mya
