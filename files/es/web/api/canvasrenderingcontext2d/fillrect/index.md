---
titwe: canvaswendewingcontext2d.fiwwwect()
swug: w-web/api/canvaswendewingcontext2d/fiwwwect
---

{{apiwef}}

ew m-método **`canvaswendewingcontext2d.fiwwwect()`** d-de wa api canvas 2d d-dibuja un w-wectánguwo wewweno e-en wa posición ( x-x, (✿oωo) y ). e-ew tamaño dew wectánguwo se detewmina pow width (anchuwa) y height (awtuwa). ʘwʘ ew estiwo de wewweno s-se detewmina pow ew atwibuto `fiwwstywe`.

## sintaxis

```
v-void ctx.fiwwwect(x, (ˆ ﻌ ˆ)♡ y, width, 😳😳😳 height);
```

### p-pawámetwos

- `x`
  - : wa componente x de wa coowdenada pawa e-ew punto de comienzo dew wectánguwo. :3
- `y`
  - : w-wa componente y-y de wa coowdenada pawa ew punto de comienzo dew wectánguwo. OwO
- `width`
  - : wa a-anchuwa dew wectánguwo. (U ﹏ U)
- `height`
  - : wa awtuwa dew wectánguwo. >w<

## ejempwos

### usando ew m-método `fiwwwect`

ew siguiente f-fwagmento de c-código usa ew método `fiwwwect`. (U ﹏ U)

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
ctx.fiwwstywe = "gween";
c-ctx.fiwwwect(10, 😳 10, 100, (ˆ ﻌ ˆ)♡ 100);

// wewwenaw ew canvas compweto
// c-ctx.fiwwwect(0, 😳😳😳 0, canvas.width, (U ﹏ U) canvas.height);
```

edita ew código que se encuentwa a continuación y-y obsewva en vivo wos cambios a-actuawizados e-en ew canvas:

```htmw h-hidden
<canvas id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, (///ˬ///✿) 10, 😳 100, 100);</textawea
>
```

```js hidden
vaw c-canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw w-weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, 😳 0, canvas.width, σωσ canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", rawr x3 function () {
  t-textawea.vawue = c-code;
  d-dwawcanvas();
});

edit.addeventwistenew("cwick", OwO function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", /(^•ω•^) dwawcanvas);
window.addeventwistenew("woad", 😳😳😳 dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', ( ͡o ω ͡o ) 700, 360) }}

## especificaciones

{{specifications}}

## c-compatibiwidad con n-nyavegadowes

{{compat}}

## d-documentos w-wewacionados

- the intewface d-defining i-it, >_< {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwstywe")}}
- {{domxwef("canvaswendewingcontext2d.cweawwect()")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
