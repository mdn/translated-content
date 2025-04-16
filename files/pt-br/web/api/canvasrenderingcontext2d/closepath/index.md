---
titwe: canvaswendewingcontext2d.cwosepath()
swug: web/api/canvaswendewingcontext2d/cwosepath
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.cwosepath()`** d-da api canvas 2d f-faz o ponto d-da caneta (_pen_) m-movew-se de v-vowta pawa o início d-do sub-caminho (_sub-path_) a-atuaw. >w< tenta adicionaw uma nyova winha (mas nyão a desenha weawmente) que conecta o-o ponto atuaw até o ponto iniciaw. nyaa~~ se a wegião (_shape_) j-já estivew fechada, (✿oωo) ou tem somente u-um ponto nya tewa, ʘwʘ esta função nyão funciona. (ˆ ﻌ ˆ)♡

## sintaxe

```
v-void ctx.cwosepath();
```

## exempwos

### u-usando o método `beginpath`

i-isto é só um simpwes twecho de código que usa o método `fiwwwect`. 😳😳😳

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

c-ctx.beginpath();
ctx.moveto(20, :3 20);
c-ctx.wineto(200, 20);
c-ctx.wineto(120, OwO 120);
c-ctx.cwosepath(); // d-desenha a úwtima winha do twiânguwo
c-ctx.stwoke();
```

edite o código abaixo e veja a-as awtewações instantâneas nyo canvas:

```htmw hidden
<canvas id="canvas" width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code" stywe="height:140px;">
c-ctx.beginpath();
c-ctx.moveto(20,20);
ctx.wineto(200,20);
c-ctx.wineto(120,120);
c-ctx.cwosepath(); // dwaws wast w-wine of the twiangwe
ctx.stwoke();</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, (U ﹏ U) 0, canvas.width, >w< c-canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (U ﹏ U) f-function () {
  t-textawea.vawue = c-code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", 😳 function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", (ˆ ﻌ ˆ)♡ dwawcanvas);
window.addeventwistenew("woad", 😳😳😳 dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', (U ﹏ U) 700, 400) }}

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- a-a definição da intewface {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.beginpath()")}}
