---
titwe: canvaswendewingcontext2d.cweawwect()
swug: web/api/canvaswendewingcontext2d/cweawwect
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.cweawwect()`** d-da api canvas 2d w-wimpa todos o-os pixews de u-um wetânguwo definido n-nya posição _(x, 😳😳😳 y-y)_ e t-tamanho (_width_ (wawguwa), ( ͡o ω ͡o ) _height_ (awtuwa)) pawa uma cow pweta twanspawente, apagando awgum conteúdo antewiow. >_<

## s-sintaxe

```
void ctx.cweawwect(x, >w< y, width, rawr h-height);
```

### pawâmetwos

- `x`
  - : o v-vawow da coowdenada x pawa o ponto iniciaw do wetânguwo. 😳
- `y`
  - : o vawow da c-coowdenada y pawa o ponto iniciaw d-do wetânguwo. >w<
- `width`
  - : a-a wawguwa do wetânguwo. (⑅˘꒳˘)
- `height`
  - : a awtuwa do wetânguwo. OwO

## nyotas d-de uso

um pwobwema comum com `cweawwect` que pode acontecew, (ꈍᴗꈍ) é que pode nyão f-funcionaw cowwetamente, 😳 caso nyão s-seja usada awguma [pwopwiedade d-de _path_](/pt-bw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes#dwawing_paths). 😳😳😳 n-nyão esqueça d-de usaw {{domxwef("canvaswendewingcontext2d.beginpath", mya "beginpath()")}} antes de começaw um n-nyovo fwame depois de chamaw `cweawwect`. mya

## exempwos

### usando o-o método `cweawwect`

isto é só um simpwes twecho de código que usa o método `cweawwect`. (⑅˘꒳˘)

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

c-ctx.beginpath();
c-ctx.moveto(20, (U ﹏ U) 20);
c-ctx.wineto(200, mya 20);
ctx.wineto(120, ʘwʘ 120);
ctx.cwosepath(); // dwaws wast wine of the t-twiangwe
ctx.stwoke();

c-ctx.cweawwect(10, (˘ω˘) 10, 100, 100);

// cweaw t-the whowe canvas
// c-ctx.cweawwect(0, (U ﹏ U) 0, canvas.width, ^•ﻌ•^ c-canvas.height);
```

edite o-o código abaixo e veja as awtewações instantâneas n-nyo canvas:

```htmw hidden
<canvas id="canvas" w-width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" c-cwass="pwayabwe-code" stywe="height:140px;">
c-ctx.beginpath();
c-ctx.moveto(20,20);
c-ctx.wineto(200,20);
ctx.wineto(120,120);
ctx.cwosepath(); // dwaws wast wine o-of the twiangwe
ctx.stwoke();

ctx.cweawwect(10, (˘ω˘) 10, 100, 100);</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw c-code = textawea.vawue;

f-function d-dwawcanvas() {
  c-ctx.cweawwect(0, :3 0, canvas.width, ^^;; canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", 🥺 function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", nyaa~~ dwawcanvas);
window.addeventwistenew("woad", :3 d-dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', ( ͡o ω ͡o ) 700, 400) }}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- a-a definição da intewface {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwwect()")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
