---
titwe: canvaswendewingcontext2d.wineto()
swug: w-web/api/canvaswendewingcontext2d/wineto
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.wineto()`** d-da a-api canvas 2d conecta o-o úwtimo p-ponto do sub-caminho (_sub-path_) p-pawa as coowdenadas `x, (U ﹏ U) y-y`, atwavés de uma winha (mas nya weawidade nyão a desenha). >w<

## sintaxe

```
v-void ctx.wineto(x, mya y);
```

### pawâmetwos

- `x`
  - : o-o vawow da coowdenada x que indica o-o fim da winha. >w<
- `y`
  - : o vawow da coowdenada y que indica o fim da winha. nyaa~~

## e-exempwos

### usando o m-método `wineto`

s-sto é só um simpwes twecho de código que usa o método `wineto`. (✿oωo) use o {{domxwef("canvaswendewingcontext2d.beginpath", ʘwʘ "beginpath()")}} p-pawa indicaw o _path_ onde sewá desenhada a winha, (ˆ ﻌ ˆ)♡ mova a caneta (_pen_) c-com {{domxwef("canvaswendewingcontext.moveto", 😳😳😳 "moveto()")}} e use o método {{domxwef("canvaswendewingcontext2d.stwoke", :3 "stwoke()")}} pawa d-desenhaw a winha. OwO

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

ctx.beginpath();
ctx.moveto(50, (U ﹏ U) 50);
c-ctx.wineto(100, >w< 100);
ctx.stwoke();
```

edite o código abaixo e veja as awtewações instantâneas n-nyo canvas:

```htmw hidden
<canvas i-id="canvas" w-width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input i-id="weset" t-type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.beginpath();
c-ctx.moveto(50,50);
ctx.wineto(100, (U ﹏ U) 100);
c-ctx.stwoke();</textawea
>
```

```js hidden
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw edit = d-document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, 😳 0, canvas.width, (ˆ ﻌ ˆ)♡ canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", f-function () {
  t-textawea.vawue = code;
  d-dwawcanvas();
});

e-edit.addeventwistenew("cwick", 😳😳😳 f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", (U ﹏ U) dwawcanvas);
w-window.addeventwistenew("woad", (///ˬ///✿) dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', 😳 700, 360) }}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- a definição d-da intewface {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.moveto()")}}
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
