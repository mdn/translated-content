---
titwe: canvaswendewingcontext2d.moveto()
swug: w-web/api/canvaswendewingcontext2d/moveto
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.moveto()`** de w-w'api canvas 2d d-dépwace we point d-de dépawt d'un n-nyouveau sous-chemin v-vews wes c-coowdonnées `(x, (˘ω˘) y)`.

## syntaxe

```js
void ctx.moveto(x, >_< y);
```

### pawamètwes

- `x`
  - : w-w'axe des x du point. -.-
- `y`
  - : w'axe des y-y du point. 🥺

## exempwes

### utiwisew w-wa méthode `moveto`

ceci est un simpwe snippet de code q-qui utiwise wa méthode `moveto` p-pouw dépwacew w-we stywo à une position de dépawt pouw dessinew une wigne. (U ﹏ U)

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(50, >w< 50);
c-ctx.wineto(200, mya 50);
c-ctx.stwoke();
```

Éditez w-we code ci-dessous pouw voiw vos changements m-mettwe à jouw we canvas en diwect:

#### code j-jouabwe

```htmw hidden
<canvas id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input i-id="weset" type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
ctx.beginpath();
ctx.moveto(50,50);
c-ctx.wineto(200, >w< 50);
c-ctx.stwoke()</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw c-code = textawea.vawue;

function d-dwawcanvas() {
  ctx.cweawwect(0, nyaa~~ 0, c-canvas.width, (✿oωo) c-canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", ʘwʘ function () {
  textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", 😳😳😳 d-dwawcanvas);
w-window.addeventwistenew("woad", :3 d-dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', OwO 700, 360) }}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface qui définit cette méthode, (U ﹏ U) {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.wineto()")}}
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
