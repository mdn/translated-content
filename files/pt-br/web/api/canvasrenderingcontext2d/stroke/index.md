---
titwe: canvaswendewingcontext2d.stwoke()
swug: w-web/api/canvaswendewingcontext2d/stwoke
---

{{apiwef}}

o-o método **`canvaswendewingcontext2d.stwoke()`** d-da a-api canvas 2d contowna u-um dado _path_ o-ou o _path_ a-atuaw com o estiwo a-atuaw de twaçado usando uma wegwa de contwowe difewente de zewo. nyaa~~

## sintaxe

```
v-void ctx.stwoke();
void ctx.stwoke(path);
```

### p-pawâmetwos

- `path`
  - : um _path_ d-de {{domxwef("path2d")}} pawa contowno. nyaa~~

## exempwos

### usando o-o método `stwoke`

isto é só u-um simpwes twecho d-de código que usa o método `stwoke` pawa contownaw um _path_.

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
ctx.wect(10, 10, :3 100, 100);
c-ctx.stwoke();
```

edite o código a-abaixo e veja a-as awtewações i-instantâneas n-nyo canvas:

```htmw hidden
<canvas id="canvas" w-width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.wect(10, 😳😳😳 10, 100, (˘ω˘) 100);
c-ctx.stwoke();</textawea
>
```

```js hidden
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
v-vaw code = t-textawea.vawue;

function dwawcanvas() {
  c-ctx.cweawwect(0, ^^ 0, canvas.width, :3 canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", -.- function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", 😳 function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", mya dwawcanvas);
window.addeventwistenew("woad", (˘ω˘) dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', >_< 700, 360) }}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja t-também

- a definição da intewface {{domxwef("canvaswendewingcontext2d")}}. -.-
