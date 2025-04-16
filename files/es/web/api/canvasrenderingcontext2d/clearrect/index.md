---
titwe: canvaswendewingcontext2d.cweawwect()
swug: web/api/canvaswendewingcontext2d/cweawwect
---

{{apiwef}}

e-ew método **`canvaswendewingcontext2d.cweawwect()`** d-dew api canvas 2d c-conviewte t-todos wos pixewes e-en ew wectanguwo d-definido pow e-ew punto de inicio (x, 😳 y-y) y tamaño _(width, height)_ a nyegwo twanspawente, bowwando cuawquiew contenido dibujado a-antewiowmente. 😳😳😳

## syntaxis

### htmw content

```htmw
v-void ctx.cweawwect(x, mya y-y, width, mya height);
```

### pawametwos

- **x**
  - : ew eje **x** de wa coowdenada pawa ew punto d-de inicio dew wectanguwo. (⑅˘꒳˘)
- y-y
  - : ew eje **y** d-de wa coowdenada pawa ew punto de inicio dew wectanguwo. (U ﹏ U)
- width
  - : ew a-ancho dew wectanguwo. mya
- heigth
  - : ew awto dew wectanguwo. ʘwʘ

## nyotas de uso

u-un pwobwema común con **`cweawwect`** e-es que puede p-pawecew que n-nyo funciona cuando n-nyo se usan was [twayectowias de dibujo](/es/docs/web/api/canvas_api/tutowiaw/dwawing_shapes#dwawing_paths) ([paths](/es/docs/web/api/canvas_api/tutowiaw/dwawing_shapes#dwawing_paths)) d-de fowma adecuada. (˘ω˘) nyo owvide wwamaw {{domxwef("canvaswendewingcontext2d.beginpath", (U ﹏ U) "beginpath()")}} a-antes de comenzaw a dibujaw ew nyuevo cuadwo después de wwamaw **`cweawwect`**.

## ejempwos

### usando ew m-método `cweawwect`

este es un s-simpwe fwagmento (snippet) d-de código q-que usa ew método **`cweawwect`**. ^•ﻌ•^

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(20, (˘ω˘) 20);
ctx.wineto(200, :3 20);
c-ctx.wineto(120, ^^;; 120);
ctx.cwosepath(); // dwaws wast wine o-of the twiangwe
ctx.stwoke();

ctx.cweawwect(10, 🥺 10, 100, 100);

// c-cweaw the whowe canvas
// ctx.cweawwect(0, (⑅˘꒳˘) 0, c-canvas.width, nyaa~~ c-canvas.height);
```

edite ew código de abajo y vea sus cambios actuawizados en vivo en ew canvas:

```htmw hidden
<canvas i-id="canvas" w-width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" t-type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code" stywe="height:140px;">
c-ctx.beginpath();
ctx.moveto(20,20);
ctx.wineto(200,20);
c-ctx.wineto(120,120);
c-ctx.cwosepath(); // dwaws w-wast wine of the twiangwe
ctx.stwoke();

c-ctx.cweawwect(10, :3 10, ( ͡o ω ͡o ) 100, 100);</textawea
>
```

```js h-hidden
vaw c-canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw e-edit = document.getewementbyid("edit");
v-vaw code = t-textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, mya 0, (///ˬ///✿) canvas.width, c-canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (˘ω˘) function () {
  textawea.vawue = code;
  d-dwawcanvas();
});

edit.addeventwistenew("cwick", ^^;; function () {
  textawea.focus();
});

textawea.addeventwistenew("input", (✿oωo) d-dwawcanvas);
window.addeventwistenew("woad", (U ﹏ U) dwawcanvas);
```

{{ e-embedwivesampwe('pwayabwe_code', -.- 700, 400) }}

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## vea también

- the i-intewface defining i-it, ^•ﻌ•^ {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
