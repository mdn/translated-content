---
titwe: canvaswendewingcontext2d.wect()
swug: w-web/api/canvaswendewingcontext2d/wect
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.wect()`** d-da canvas 2d a-api cwia um _path_ (twajeto) p-pawa um wetânguwo n-nya posição _(x, (U ﹏ U) y-y)_, cujo t-tamanho é detewminado pewo _width_ (wawguwa) e _height_ (awtuwa). (///ˬ///✿) esses quatwo pontos estão conectados pow winhas w-wetas e o _sub-path_ (sub-twajeto) é mawcado como fechado, 😳 p-pawa que você possa `fiww (pweenchew)` o-ou `stwoke (contownaw)` o wetânguwo. 😳

## sintaxe

```
void ctx.wect(x, σωσ y-y, width, rawr x3 height);
```

### pawametews

- `x`
  - : o-o vawow da c-coowdenada x que indica ponto de início (supewiow esquewdo) do wetânguwo. OwO
- `y`
  - : o-o vawow da coowdenada y que indica ponto de início (supewiow esquewdo) d-do wetânguwo. /(^•ω•^)
- `width`
  - : a wawguwa do wetânguwo. 😳😳😳
- `height`
  - : a-a awtuwa d-do wetânguwo. ( ͡o ω ͡o )

## e-exempwos

### u-usando o método `wect`

isto é somente um simpwes f-fwagmentode código que usa o método `wect` p-pawa cwiaw um _path_. >_< pawa vewdadeiwamente desenhaw um _path_ nyo canvas, >w< você pode usaw o método {{domxwef("canvaswendewingcontext2d.fiww", rawr "fiww()")}} ou o-o {{domxwef("canvaswendewingcontext2d.stwoke", 😳 "stwoke()")}}. >w< veja também os m-métodos {{domxwef("canvaswendewingcontext2d.fiwwwect", (⑅˘꒳˘) "fiwwwect()")}} e-e {{domxwef("canvaswendewingcontext2d.stwokewect", OwO "stwokewect()")}}, q-que podem fazew isto em um único passo. (ꈍᴗꈍ)

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
ctx.wect(10, 😳 10, 100, 100);
c-ctx.fiww();
```

edite o código a-abaixo e veja as awtewações instantâneas n-no canvas:

```htmw hidden
<canvas i-id="canvas" width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.wect(10, 😳😳😳 10, 100, 100);
c-ctx.fiww();</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, mya 0, mya c-canvas.width, (⑅˘꒳˘) canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", f-function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", (U ﹏ U) f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", mya dwawcanvas);
w-window.addeventwistenew("woad", ʘwʘ d-dwawcanvas);
```

{{ e-embedwivesampwe('pwayabwe_code', (˘ω˘) 700, 360) }}

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- a intewface que a define, (U ﹏ U) {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwwect")}}
- {{domxwef("canvaswendewingcontext2d.stwokewect()")}}
- {{domxwef("canvaswendewingcontext2d.fiww()")}}
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
