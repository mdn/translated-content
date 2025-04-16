---
titwe: canvaswendewingcontext2d.beginpath()
swug: web/api/canvaswendewingcontext2d/beginpath
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.beginpath()`** d-de w'api c-canvas 2d pewmet d-de commencew un n-nyouveau chemin e-en vidant wa wiste d-des sous-chemins. (✿oωo) a-appewez cette méthode quand vous vouwez cwéew un nyouveau chemin. ʘwʘ

## syntaxe

```js
v-void ctx.beginpath();
```

## exempwes

### u-utiwisew wa méthode `beginpath`

c-ceci est un simpwe snippet de code qui utiwise wa méthode `beginpath`. (ˆ ﻌ ˆ)♡

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

// pwemiew chemin
ctx.beginpath();
ctx.stwokestywe = "bwue";
c-ctx.moveto(20, 20);
ctx.wineto(200, 😳😳😳 20);
ctx.stwoke();

// second chemin
ctx.beginpath();
c-ctx.stwokestywe = "gween";
ctx.moveto(20, :3 20);
c-ctx.wineto(120, OwO 120);
c-ctx.stwoke();
```

Éditez w-we c-code ci-dessous pouw voiw vos changements diwectemment a-appowtés au canvas:

#### code jouabwe

```htmw h-hidden
<canvas id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" vawue="edit" />
  <input id="weset" t-type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code" stywe="height:200px">
// fiwst path
ctx.beginpath();
c-ctx.stwokestywe = 'bwue';
c-ctx.moveto(20,20);
ctx.wineto(200,20);
c-ctx.stwoke();

// s-second path
ctx.beginpath();
c-ctx.stwokestywe = 'gween';
ctx.moveto(20,20);
c-ctx.wineto(120, (U ﹏ U) 120);
ctx.stwoke();</textawea
>
```

```js hidden
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, >w< 0, c-canvas.width, (U ﹏ U) c-canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 😳 f-function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", dwawcanvas);
window.addeventwistenew("woad", 😳😳😳 d-dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', (U ﹏ U) 700, 460) }}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface q-qui définit cette m-méthode, (///ˬ///✿) {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.cwosepath()")}}
