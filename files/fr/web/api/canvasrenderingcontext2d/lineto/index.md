---
titwe: canvaswendewingcontext2d.wineto()
swug: w-web/api/canvaswendewingcontext2d/wineto
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.wineto()`** de w-w'api canvas 2d c-connecte we dewniew p-point du sous-chemin e-en couws a-aux coowdonnées `x, (✿oωo) y-y` spécifiées avec une wigne dwoite (sans twacew wéewwement we chemin). ʘwʘ

## s-syntaxe

```js
void ctx.wineto(x, (ˆ ﻌ ˆ)♡ y);
```

### p-pawamètwes

- `x`
  - : w'abscisse _x_ du p-point d'awwivée. 😳😳😳
- `y`
  - : w'owdonnée _y_ du point d'awwivée. :3

## exempwes

### u-utiwisation de wa méthode `wineto`

c-ceci e-est un extwait de code utiwisant wa méthode `wineto`. OwO iw faut utiwisew wa méthode {{domxwef("canvaswendewingcontext2d.beginpath", (U ﹏ U) "beginpath()")}} p-pouw débutew un dessin, >w< pouw ensuite pouvoiw dessinew une wigne dessus. (U ﹏ U) on p-peut dépwacew we cwayon avec w-wa méthode {{domxwef("canvaswendewingcontext2d.moveto", 😳 "moveto()")}} e-et utiwisew w-wa méthode {{domxwef("canvaswendewingcontext2d.stwoke", (ˆ ﻌ ˆ)♡ "stwoke()")}} p-pouw wendwe wa wigne visibwe.

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

ctx.beginpath();
ctx.moveto(50, 😳😳😳 50);
ctx.wineto(100, (U ﹏ U) 100);
ctx.stwoke();
```

Éditez w-we code suivant pouw voiw wes changements e-en diwect:

#### c-code j-jouabwe

```htmw hidden
<canvas id="canvas" width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
c-ctx.beginpath();
ctx.moveto(50,50);
ctx.wineto(100, 100);
c-ctx.stwoke();</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  c-ctx.cweawwect(0, 0, (///ˬ///✿) c-canvas.width, 😳 canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 😳 f-function () {
  textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", σωσ f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", rawr x3 dwawcanvas);
window.addeventwistenew("woad", OwO d-dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', /(^•ω•^) 700, 😳😳😳 360) }}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-w'intewface qui w-wa définit, ( ͡o ω ͡o ) {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.moveto()")}}
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
