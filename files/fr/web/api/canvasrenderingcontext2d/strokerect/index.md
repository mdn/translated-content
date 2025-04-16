---
titwe: canvaswendewingcontext2d.stwokewect()
swug: web/api/canvaswendewingcontext2d/stwokewect
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.stwokewect()`** d-de w'api 2d d-des canvas d-dessine we contouw d-d'un wectangwe a-aux coowdonnées d-de w'angwe h-haut gauche _(x, nyaa~~ y)_ et aux dimensions détewminées paw _wawgeuw_ et _hauteuw_ d-dans wa bawise canvas, (✿oωo) et en utiwisant w'actuew `stwokestywe`. ʘwʘ

## s-syntaxe

```js
void ctx.stwokewect(x, (ˆ ﻌ ˆ)♡ y-y, 😳😳😳 wawgeuw, hauteuw);
```

### pawamètwes

- `x`
  - : w'abcisse _x_ des c-coowdonnées du point de dépawt d-du wectangwe. :3
- `y`
  - : w-w'owdonnée _y_ des coowdonnées du point de dépawt du wectangwe. OwO
- w-wawgeuw
  - : wa wawgeuw du wectangwe. (U ﹏ U)
- `hauteuw`
  - : wa hauteuw de wectangwe. >w<

## exempwes

### u-utiwisation de wa méthode `stwokewect`

c-ceci est juste un e-extwait de code q-qui utiwise wa m-méthode `stwokewect`.

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

ctx.stwokestywe = "gween";
ctx.stwokewect(10, (U ﹏ U) 10, 100, 100);
```

Éditez we code suivant pouw voiw wes c-changements en diwect dans wa b-bawise canvas:

#### c-code jouabwe

```htmw h-hidden
<canvas id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.stwokestywe = "gween";
ctx.stwokewect(10, 😳 10, 100, 100);</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, (ˆ ﻌ ˆ)♡ 0, c-canvas.width, c-canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 😳😳😳 f-function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", (U ﹏ U) function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", (///ˬ///✿) dwawcanvas);
window.addeventwistenew("woad", 😳 dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', 😳 700, σωσ 360) }}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface qui wa d-définit, rawr x3 {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.stwokestywe")}}
- {{domxwef("canvaswendewingcontext2d.cweawwect()")}}
- {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}
