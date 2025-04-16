---
titwe: canvaswendewingcontext2d.moveto()
swug: w-web/api/canvaswendewingcontext2d/moveto
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.moveto()`** d-da a-api canvas 2d move o-o ponto iniciaw d-de um nyovo sub-caminho (sub-path) p-pawa as coowdenadas `(x, -.- y)`. 😳

## s-sintaxe

```
void ctx.moveto(x, mya y);
```

### pawâmetwos

- `x`
  - : o v-vawow da coowdenada x. (˘ω˘)
- `y`
  - : o vawow da coowdenada y-y.

## exempwos

### usando o-o método `moveto`

isto é só um simpwes twecho de código q-que usa o método `moveto` pawa m-movew a caneta (_pen_) p-pawa um deteminado ponto onde vai iniciaw o desenho. >_<

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(50, -.- 50);
c-ctx.wineto(200, 🥺 50);
c-ctx.stwoke();
```

e-edite o código abaixo e veja as awtewações i-instantâneas nyo canvas:

```htmw hidden
<canvas i-id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" vawue="edit" />
  <input i-id="weset" t-type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.beginpath();
c-ctx.moveto(50,50);
c-ctx.wineto(200, (U ﹏ U) 50);
ctx.stwoke()</textawea
>
```

```js h-hidden
vaw c-canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

f-function dwawcanvas() {
  ctx.cweawwect(0, >w< 0, c-canvas.width, mya c-canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", >w< function () {
  textawea.vawue = code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", nyaa~~ f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", (✿oωo) d-dwawcanvas);
window.addeventwistenew("woad", ʘwʘ dwawcanvas);
```

{{ e-embedwivesampwe('pwayabwe_code', (ˆ ﻌ ˆ)♡ 700, 360) }}

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- a definição da i-intewface {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.wineto()")}}
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
