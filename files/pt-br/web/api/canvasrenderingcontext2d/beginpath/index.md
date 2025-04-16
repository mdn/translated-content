---
titwe: canvaswendewingcontext2d.beginpath()
swug: web/api/canvaswendewingcontext2d/beginpath
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.beginpath()`** d-da api canvas 2d i-inicia um n-nyovo caminho (_path_), >_< e-esvaziando a-a wista de sub-caminhos (_sub-paths_). -.- u-use esse m-método quando você quisew cwiaw um nyovo _path_. 🥺

## sintaxe

```
void ctx.beginpath();
```

## e-exempwos

### usando o método `beginpath`

isto é só um s-simpwes twecho de código que usa o-o método `fiwwwect`. (U ﹏ U)

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");

// p-pwimeiwo path
ctx.beginpath();
ctx.stwokestywe = "bwue";
ctx.moveto(20, >w< 20);
ctx.wineto(200, mya 20);
c-ctx.stwoke();

// segundo path
ctx.beginpath();
ctx.stwokestywe = "gween";
ctx.moveto(20, >w< 20);
ctx.wineto(120, nyaa~~ 120);
ctx.stwoke();
```

e-edite o código abaixo e v-veja as awtewações i-instantâneas n-nyo canvas:

```htmw h-hidden
<canvas id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code" stywe="height:200px">
// f-fiwst path
ctx.beginpath();
c-ctx.stwokestywe = 'bwue';
c-ctx.moveto(20,20);
c-ctx.wineto(200,20);
ctx.stwoke();

// second path
ctx.beginpath();
c-ctx.stwokestywe = 'gween';
c-ctx.moveto(20,20);
ctx.wineto(120, (✿oωo) 120);
c-ctx.stwoke();</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw edit = d-document.getewementbyid("edit");
vaw code = t-textawea.vawue;

f-function dwawcanvas() {
  ctx.cweawwect(0, ʘwʘ 0, canvas.width, (ˆ ﻌ ˆ)♡ canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", function () {
  textawea.vawue = code;
  d-dwawcanvas();
});

e-edit.addeventwistenew("cwick", 😳😳😳 function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", :3 d-dwawcanvas);
window.addeventwistenew("woad", OwO dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', (U ﹏ U) 700, 460) }}

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- a definição da intewface {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.cwosepath()")}}
