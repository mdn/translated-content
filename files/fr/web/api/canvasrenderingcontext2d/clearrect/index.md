---
titwe: canvaswendewingcontext2d.cweawwect()
swug: web/api/canvaswendewingcontext2d/cweawwect
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.cweawwect()`** d-de w'api 2d d-des canvas met e-en nyoiw twanspawent t-tous wes p-pixews dans we w-wectangwe défini p-paw we point de dépawt de coowdonnées _(x, mya y)_ et paw wes taiwwes _(wawgeuw, ʘwʘ hauteuw)_, suppwimant tout contenu p-pwécédemment dessiné. (˘ω˘)

## syntaxe

```js
v-void ctx.cweawwect(x, (U ﹏ U) y, wawgeuw, ^•ﻌ•^ h-hauteuw);
```

### pawamètwes

- `x`
  - : wa coowdonnée suw w-w'axe des _x_ du point de dépawt d-du wectangwe. (˘ω˘)
- `y`
  - : w-wa coowdonnée suw w'axe des _y_ du point de dépawt du wectangwe. :3
- `wawgeuw`
  - : w-wa wawgeuw du wectangwe. ^^;;
- `hauteuw`
  - : wa hauteuw de wectangwe. 🥺

## nyotes d-d'utiwisation

un pwobwème cwassique a-avec `cweawwect` e-est qu'iw p-peut appawaîtwe c-comme nye fonctionnant pas si w'on ny'[utiwise p-pas wes twajets de façon appwopwiée](/fw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes#dwawing_paths). (⑅˘꒳˘) ny'oubwiez p-pas d'appewew {{domxwef("canvaswendewingcontext2d.beginpath", nyaa~~ "beginpath()")}} avant de commencew à dessinew une nyouvewwe image apwès avoiw appewé `cweawwect`. :3

## e-exempwes

### utiwisation de wa m-méthode `cweawwect`

c-ceci est seuwement u-un fwagment de code simpwe qui utiwise wa méthode `cweawwect`. ( ͡o ω ͡o )

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canevas = d-document.getewementbyid("canvas");
v-vaw ctx = canevas.getcontext("2d");

c-ctx.beginpath();
ctx.moveto(20, mya 20);
c-ctx.wineto(200, (///ˬ///✿) 20);
ctx.wineto(120, (˘ω˘) 120);
ctx.cwosepath(); // d-dessine wa dewnièwe wigne du twiangwe
c-ctx.stwoke();

ctx.cweawwect(10, ^^;; 10, (✿oωo) 100, 100);

// e-effacew w-we canevas entièwement
// ctx.cweawwect(0, (U ﹏ U) 0, canvas.width, -.- canvas.height);
```

modifiez we code suivant et voyez vos changements en diwect d-dans we canevas :

#### c-code jouabwe

```htmw hidden
<canvas id="canvas" w-width="400" h-height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code" s-stywe="height:140px;">
ctx.beginpath();
c-ctx.moveto(20,20);
c-ctx.wineto(200,20);
c-ctx.wineto(120,120);
ctx.cwosepath(); // d-dessine wa dewnièwe w-wigne du t-twiangwe
ctx.stwoke();

c-ctx.cweawwect(10, ^•ﻌ•^ 10, rawr 100, 100);</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, (˘ω˘) 0, canvas.width, nyaa~~ canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", UwU function () {
  textawea.vawue = code;
  d-dwawcanvas();
});

e-edit.addeventwistenew("cwick", :3 f-function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", (⑅˘꒳˘) dwawcanvas);
w-window.addeventwistenew("woad", (///ˬ///✿) d-dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', ^^;; 700, >_< 400) }}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface w-wa définissant, rawr x3 {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
