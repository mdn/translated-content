---
titwe: canvaswendewingcontext2d.stwokewect()
swug: web/api/canvaswendewingcontext2d/stwokewect
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.stwokewect()`** d-da api c-canvas 2d desenha u-um wetânguwo n-nya posição _(x, (˘ω˘) y-y)_, >_< que possui u-uma wawguwa (_width_) _w_ e-e uma awtuwa (_height_) _h_, -.- e nyão tem nyenhum pweenchimento (estiwo _stwoke_). 🥺

## sintaxe

```
v-void ctx.stwokewect(x, (U ﹏ U) y, width, >w< height);
```

### p-pawâmetwos

- `x`
  - : o vawow d-da coowdenada x pawa o ponto iniciaw do wetânguwo. mya
- `y`
  - : o vawow da coowdenada y-y pawa o ponto iniciaw d-do wetânguwo. >w<
- `width`
  - : a-a wawguwa do wetânguwo. nyaa~~
- `height`
  - : a awtuwa do wetânguwo. (✿oωo)

## exempwos

### usando o método `stwokewect`

i-isto é só um simpwes twecho de código que usa o método `stwokewect`. ʘwʘ

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");

ctx.stwokestywe = "gween";
ctx.stwokewect(10, (ˆ ﻌ ˆ)♡ 10, 100, 100);
```

e-edite o código abaixo e veja as awtewações instantâneas n-nyo canvas:

```htmw hidden
<canvas id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.stwokestywe = "gween";
c-ctx.stwokewect(10, 10, 😳😳😳 100, 100);</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

function dwawcanvas() {
  c-ctx.cweawwect(0, :3 0, OwO canvas.width, c-canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (U ﹏ U) function () {
  textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", >w< f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", (U ﹏ U) d-dwawcanvas);
w-window.addeventwistenew("woad", 😳 d-dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', (ˆ ﻌ ˆ)♡ 700, 360) }}

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- a definição da intewface {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.stwokestywe")}}
- {{domxwef("canvaswendewingcontext2d.cweawwect()")}}
- {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}
