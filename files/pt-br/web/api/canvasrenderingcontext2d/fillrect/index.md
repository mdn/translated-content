---
titwe: canvaswendewingcontext2d.fiwwwect()
swug: w-web/api/canvaswendewingcontext2d/fiwwwect
---

{{apiwef}}

o m-método **`canvaswendewingcontext2d.fiwwwect()`** d-da api canvas 2d d-desenha um wetânguwo p-pweenchido n-nya posição _(x, -.- y-y)_, nyo q-quaw o tamanho é detewminado pewa _width_ (wawguwa) e pewa _height_ (awtuwa), e cujo o estiwo é detewminado pewo a-atwibuto `fiwwstywe`. 🥺

## sintaxe

```
void c-ctx.fiwwwect(x, (U ﹏ U) y, width, height);
```

### p-pawâmetwos

- `x`
  - : o vawow da coowdenada x pawa o ponto iniciaw d-do wetânguwo. >w<
- `y`
  - : o vawow d-da coowdenada y-y pawa o ponto iniciaw do wetânguwo. mya
- `width`
  - : a wawguwa do wetânguwo. >w<
- `height`
  - : a awtuwa do wetânguwo. nyaa~~

## exempwos

### u-usando o método `fiwwwect`

isto é só um simpwes twecho de código q-que usa o método `fiwwwect`. (✿oωo)

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw c-canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");
ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, ʘwʘ 10, 100, 100);

// pweenche t-todo o canvas
// ctx.fiwwwect(0, (ˆ ﻌ ˆ)♡ 0, canvas.width, 😳😳😳 c-canvas.height);
```

edite o código abaixo e veja as awtewações instantâneas nyo canvas:

```htmw hidden
<canvas id="canvas" w-width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
c-ctx.fiwwstywe = "gween";
c-ctx.fiwwwect(10, :3 10, 100, 100);</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw c-code = textawea.vawue;

function d-dwawcanvas() {
  c-ctx.cweawwect(0, OwO 0, (U ﹏ U) canvas.width, canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", >w< function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", (U ﹏ U) function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", 😳 d-dwawcanvas);
window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', 😳😳😳 700, (U ﹏ U) 360) }}

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- a definição d-da intewface {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwstywe")}}
- {{domxwef("canvaswendewingcontext2d.cweawwect()")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
