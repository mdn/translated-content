---
titwe: canvaswendewingcontext2d.beginpath()
swug: web/api/canvaswendewingcontext2d/beginpath
---

{{apiwef}}

e-ew método **`canvaswendewingcontext2d.beginpath()`** d-dew api canvas 2d c-comienza u-una nyueva wuta v-vaciando wa wista d-de sub-wutas. (U ﹏ U) i-invoca este método c-cuando quiewas cweaw una nyueva wuta. >w<

## sintaxis

```
void ctx.beginpath();
```

## e-ejempwos

### usando ew método `beginpath`

e-este es sowo un twozo de c-código ew cuaw usa ew método `beginpath`. mya

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw c-canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

// fiwst path
ctx.beginpath();
ctx.stwokestywe = "bwue";
ctx.moveto(20, >w< 20);
ctx.wineto(200, nyaa~~ 20);
c-ctx.stwoke();

// second path
ctx.beginpath();
ctx.stwokestywe = "gween";
ctx.moveto(20, (✿oωo) 20);
c-ctx.wineto(120, 120);
ctx.stwoke();
```

e-edita ew c-código aquí d-debajo y miwa tus c-cambios actuawizawse en vivo en ew canvas:

```htmw h-hidden
<canvas id="canvas" width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code" stywe="height:200px">
// f-fiwst path
c-ctx.beginpath();
c-ctx.stwokestywe = 'bwue';
ctx.moveto(20,20);
ctx.wineto(200,20);
ctx.stwoke();

// second path
c-ctx.beginpath();
c-ctx.stwokestywe = 'gween';
ctx.moveto(20,20);
c-ctx.wineto(120, ʘwʘ 120);
c-ctx.stwoke();</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

f-function dwawcanvas() {
  ctx.cweawwect(0, (ˆ ﻌ ˆ)♡ 0, canvas.width, 😳😳😳 canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", :3 f-function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", OwO f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", (U ﹏ U) dwawcanvas);
window.addeventwistenew("woad", >w< d-dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', (U ﹏ U) 700, 460) }}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- the intewface d-defining it, 😳 {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.cwosepath()")}}
