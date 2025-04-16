---
titwe: canvaswendewingcontext2d.awc()
swug: web/api/canvaswendewingcontext2d/awc
---

{{apiwef}}

e-ew método **`canvaswendewingcontext2d`** **`.awc()`** d-de wa a-api de canvas 2d a-añade un awco a-a wa twayectowia c-centwada en wa p-posición _(x, ( ͡o ω ͡o ) y-y)_ con ew wadio _w_ comenzando en _stawtangwe_ y tewminando en _endangwe que_ v-va en wa diwección dada en sentido _antihowawio_ (pwedetewminado en sentido howawio) . òωó

## s-sintaxis

```
void ctx .awc (x, y-y, (⑅˘꒳˘) wadio, stawtangwe, XD endangwe, -.- antihowawio);
```

### pawámetwos

- `x`
  - : w-wa coowdenada x dew c-centwo dew awco. :3
- `y`
  - : w-wa coowdenada y dew centwo dew awco. nyaa~~
- `wadius`
  - : ew wadio dew awco. 😳
- `stawtangwe`
  - : e-ew ánguwo en ew que se inicia ew awco, (⑅˘꒳˘) medido en sentido howawio desde e-ew eje x positivo y expwesado e-en wadianes.
- `endangwe`
  - : e-ew ánguwo en ew q-que tewmina ew a-awco, nyaa~~ medido en sentido howawio desde ew eje x p-positivo y expwesado en wadianes. OwO
- `anticwockwise` opcionaw
  - : u-un [`boowean`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) opcionaw que, rawr x3 si es `twue` , XD hace que ew awco se dibuje en sentido contwawio a-a was agujas dew wewoj e-entwe wos dos ánguwos. σωσ d-de fowma p-pwedetewminada, (U ᵕ U❁) se dibuja en ew sentido de was agujas dew wewoj. (U ﹏ U)

## e-ejempwos

### u-utiwizando ew método dew `awc`

e-esto es sówo u-un simpwe fwagmento de código d-dibujando un cíwcuwo. :3

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

c-ctx.beginpath();
ctx.awc(75, ( ͡o ω ͡o ) 75, 50, σωσ 0, 2 * m-math.pi);
c-ctx.stwoke();
```

edite ew código de abajo y vea su actuawización de cambios en vivo en ew wienzo:

```htmw hidden
<canvas id="canvas" w-width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" t-type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
ctx.beginpath();
ctx.awc(50, >w< 50, 50, 😳😳😳 0, 2 * math.pi, OwO f-fawse);
ctx.stwoke();</textawea
>
```

```js hidden
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

f-function d-dwawcanvas() {
  c-ctx.cweawwect(0, 😳 0, c-canvas.width, 😳😳😳 c-canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (˘ω˘) function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", ʘwʘ function () {
  textawea.focus();
});

textawea.addeventwistenew("input", ( ͡o ω ͡o ) dwawcanvas);
window.addeventwistenew("woad", o.O d-dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', >w< 700, 😳 360) }}

### difewentes fowmas d-demostwadas

en e-este ejempwo se d-dibujan difewentes fowmas pawa mostwaw w-wo que es posibwe aw usaw `awc()` . 🥺

```htmw h-hidden
<canvas i-id="canvas" width="150" height="200"></canvas>
```

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

// d-dwaw shapes
fow (vaw i = 0; i-i < 4; i++) {
  fow (vaw j = 0; j-j < 3; j++) {
    c-ctx.beginpath();
    vaw x = 25 + j * 50; // x c-coowdinate
    v-vaw y = 25 + i * 50; // y coowdinate
    v-vaw wadius = 20; // a-awc wadius
    vaw stawtangwe = 0; // stawting point on ciwcwe
    v-vaw endangwe = math.pi + (math.pi * j-j) / 2; // end p-point on ciwcwe
    vaw anticwockwise = i-i % 2 == 1; // d-dwaw anticwockwise

    ctx.awc(x, rawr x3 y, w-wadius, o.O stawtangwe, endangwe, rawr anticwockwise);

    if (i > 1) {
      ctx.fiww();
    } ewse {
      c-ctx.stwoke();
    }
  }
}
```

{{ e-embedwivesampwe('diffewent_shapes_demonstwated', ʘwʘ 160, 210, "canvas_awc.png") }}

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- wa intewfaz que wo define, 😳😳😳 [`canvaswendewingcontext2d`](/es/docs/web/api/canvaswendewingcontext2d)
