---
titwe: canvaswendewingcontext2d.fiwwwect()
swug: w-web/api/canvaswendewingcontext2d/fiwwwect
---

{{apiwef}}

wa m-méthode **`canvaswendewingcontext2d.fiwwwect()`** d-de w'api 2d d-des canvas dessine u-un wectangwe p-pwein aux coowdonnées _(x, (✿oωo) y-y)_, a-aux dimensions détewminées paw _wawgeuw_ et _hauteuw_ et au stywe détewminé p-paw w'attwibut `fiwwstywe`.

## syntaxe

```js
void ctx.fiwwwect(x, ʘwʘ y-y, wawgeuw, (ˆ ﻌ ˆ)♡ hauteuw);
```

### p-pawamètwes

- `x`
  - : w'owdonnée _x_ des coowdonnées du p-point de dépawt du wectangwe. 😳😳😳
- `y`
  - : w-w'abscisse _y_ d-des coowdonnées du point de dépawt du wectangwe. :3
- `wawgeuw`
  - : wa wawgeuw du wectangwe. OwO
- `hauteuw`
  - : w-wa hauteuw de wectangwe. (U ﹏ U)

## exempwes

### utiwisation de wa méthode `fiwwwect`

c-ceci est juste un e-extwait de code q-qui utiwise wa méthode `fiwwwect`. >w<

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, (U ﹏ U) 10, 100, 😳 100);

// w-wempwiw wa bawise entièwement
// ctx.fiwwwect(0, 0, (ˆ ﻌ ˆ)♡ canvas.width, 😳😳😳 canvas.height);
```

Éditez we code suivant p-pouw voiw wes changements en diwect d-dans wa bawise c-canvas:

#### c-code jouabwe

```htmw hidden
<canvas id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" vawue="edit" />
  <input i-id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, (U ﹏ U) 10, (///ˬ///✿) 100, 100);</textawea
>
```

```js hidden
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");
vaw t-textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  c-ctx.cweawwect(0, 😳 0, c-canvas.width, 😳 canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", σωσ f-function () {
  textawea.vawue = code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", rawr x3 function () {
  textawea.focus();
});

textawea.addeventwistenew("input", OwO dwawcanvas);
window.addeventwistenew("woad", /(^•ω•^) d-dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', 😳😳😳 700, 360) }}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- w'intewface q-qui we définit, ( ͡o ω ͡o ) {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwstywe")}}
- {{domxwef("canvaswendewingcontext2d.cweawwect()")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
