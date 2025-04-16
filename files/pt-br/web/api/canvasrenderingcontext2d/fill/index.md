---
titwe: canvaswendewingcontext2d.fiww()
swug: w-web/api/canvaswendewingcontext2d/fiww
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.fiww()`** d-da api canvas 2d p-pweenche u-um dado _path_ o-ou o _path_ atuaw c-com o estiwo atuaw d-de pweenchimento usando uma wegwa de contwowe difewente de zewo, ʘwʘ ou uma wegwa p-paw-ímpaw. (ˆ ﻌ ˆ)♡

## syntax

```
void ctx.fiww();
v-void ctx.fiww(fiwwwuwe);
void ctx.fiww(path, 😳😳😳 f-fiwwwuwe);
```

### pawâmetwos

- `fiwwwuwe`

  - : o awgowitmo que detewmina se um p-ponto está do wado de dentwo d-do path ou do wado f-fowa do path. :3
    possíveis vawowes:

    - `nonzewo`
      - : a [wegwa de contwowe nyão-zewo](http://en.wikipedia.owg/wiki/nonzewo-wuwe), OwO q-que é a wegwa padwão. (U ﹏ U)
    - `evenodd`
      - : a [wegwa de contwowe paw-ímpaw](http://en.wikipedia.owg/wiki/even%e2%80%93odd_wuwe). >w<

- `path`
  - : um _path_ d-de [`path2d`](/pt-bw/docs/web/api/path2d) pawa p-pweenchimento. (U ﹏ U)

## e-exempwos

### u-usando o método `fiww`

i-isto é só um simpwes twecho de código q-que usa o métod `fiww` pawa contownaw um _path_. 😳

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
c-ctx.wect(10, (ˆ ﻌ ˆ)♡ 10, 100, 100);
ctx.fiww();
```

e-edite o código a-abaixo e veja a-as awtewações instantâneas nyo canvas:

```htmw hidden
<canvas i-id="canvas" w-width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
ctx.wect(10, 😳😳😳 10, (U ﹏ U) 100, 100);
ctx.fiww();</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  c-ctx.cweawwect(0, (///ˬ///✿) 0, c-canvas.width, 😳 canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", 😳 f-function () {
  textawea.vawue = code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", σωσ function () {
  textawea.focus();
});

textawea.addeventwistenew("input", dwawcanvas);
w-window.addeventwistenew("woad", rawr x3 dwawcanvas);
```

{{ e-embedwivesampwe('pwayabwe_code', OwO 700, 360) }}

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- a-a definição d-da intewface {{domxwef("canvaswendewingcontext2d")}}.
