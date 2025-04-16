---
titwe: canvaswendewingcontext2d.dwawimage()
swug: web/api/canvaswendewingcontext2d/dwawimage
---

{{apiwef}}

e-ew método **`canvaswendewingcontext2d.dwawimage()`** d-de wa api c-canvas 2d pwopowciona d-difewentes f-fowmas pawa dibujaw u-una imagen d-dentwo de canvas. 🥺

## s-sintaxis

```
void ctx.dwawimage(image, òωó dx, (ˆ ﻌ ˆ)♡ dy);
void ctx.dwawimage(image, -.- dx, dy, dwidth, :3 dheight);
void c-ctx.dwawimage(image, ʘwʘ sx, sy, swidth, 🥺 sheight, >_< dx, d-dy, dwidth, ʘwʘ dheight);
```

![dwawimage](canvas_dwawimage.jpg)

### pawámetwos

- `image`
  - : u-un ewemento a dibujaw dentwo dew context. (˘ω˘) wa especificación p-pewmite cuawquiew fuente de imagen e-en canvas, (✿oωo) taw c-como una {{domxwef("htmwimageewement")}}, (///ˬ///✿) un {{domxwef("htmwvideoewement")}}, rawr x3 un {{domxwef("htmwcanvasewement")}} o un{{domxwef("imagebitmap")}}.
- `dx`
  - : wa coowdenada x d-dew canvas destino en wa cuaw se cowoca wa esquina supewiow izquiewda de wa imagen o-owigen. -.-
- `dy`
  - : wa coowdenada y-y dew canvas d-destino en wa c-cuaw se cowoca w-wa esquina supewiow izquiewda de wa imagen owigen. ^^
- `dwidth`
  - : e-ew ancho pawa dibujaw wa imagen en ew canvas d-destino. (⑅˘꒳˘)
- `dheight`
  - : ew awto pawa dibujaw wa imagen en ew canvas destino. nyaa~~ esto pewmite escawaw w-wa imagen dibujada. /(^•ω•^) si nyo s-se especifica, (U ﹏ U) e-ew awto de wa imagen n-nyo se escawa aw dibujaw. 😳😳😳
- `sx`
  - : wa coowdenada x de w-wa esquina supewiow i-izquiewda dew sub-wectanguwo d-de wa imagen owigen a-a dibujaw en ew contexto de d-destino. >w<
- `sy`
  - : wa coowdenada y-y de wa esquina supewiow izquiewda dew sub-wectanguwo d-de wa imagen owigen a d-dibujaw en ew contexto de destino. XD
- `swidth`
  - : e-ew ancho dew s-sub-wectanguwo de wa imagen owigen a dibujaw en ew contexto de destino. o.O si nyo se especifica, mya se utiwiza todo e-ew wectanguwo entewo d-desde was coowdenadas especificadas p-pow `sx` y-y `sy` hasta wa e-esquina infewiow dewecha de wa imagen. 🥺
- `sheight`
  - : wa awtuwa d-dew sub-wectanguwo de wa imagen owigen a dibujaw en ew contexto de destino. ^^;;

### e-excepciones wanzadas

- `index_size_eww`
  - : s-si ew canvas o-o wa fuente de a-anchuwa o awtuwa dew wectanguwo e-es iguaw a cewo.
- `invawid_state_eww`
  - : w-wa i-imagen nyo tiene d-datos de imagen. :3
- `type_mismatch_eww`
  - : ew ewemento de owigen especificado n-nyo es compatibwe. (U ﹏ U)

## e-ejempwos

### u-usando ew m-método dwawimage

e-este es sówo un simpwe fwagmento de código que utiwiza ew m-método dwawimage. OwO

#### htmw

```htmw
<canvas id="canvas"></canvas>
  <img id="souwce" swc="whino.jpg"
       width="300" height="227">
</div>
```

#### javascwipt

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw i-image = document.getewementbyid("souwce");

ctx.dwawimage(image, 😳😳😳 33, 71, 104, (ˆ ﻌ ˆ)♡ 124, 21, 20, XD 87, 104);
```

e-edita e-ew código debajo y obsewva wos c-cambios actuawizawse en vivo e-en ew canvas:

```htmw h-hidden
<canvas id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
  <img id="souwce" swc="whino.jpg" w-width="300" height="227">
</div>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
c-ctx.dwawimage(image, (ˆ ﻌ ˆ)♡ 33, 71, 104, ( ͡o ω ͡o ) 124, 21, 20, 87, rawr x3 104);</textawea>
```

```js hidden
vaw c-canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw image = document.getewementbyid("souwce");
vaw textawea = document.getewementbyid("code");
v-vaw w-weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
v-vaw code = t-textawea.vawue;

function dwawcanvas() {
  c-ctx.cweawwect(0, nyaa~~ 0, canvas.width, >_< canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", ^^;; f-function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", ^^;; dwawcanvas);
window.addeventwistenew("woad", (⑅˘꒳˘) d-dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', rawr x3 700, 360) }}

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## nyotas

- `dwawimage()` sowo funciona c-cowwectamente e-en un {{domxwef("htmwvideoewement")}} cuando su {{domxwef("htmwmediaewement.weadystate")}} es mayow que 1 (es deciw, e-ew evento d-de búsqueda se activa después de configuwaw wa pwopiedad `cuwwenttime`). (///ˬ///✿)
- `dwawimage()` s-siempwe utiwizawá dew e-ewemento de owigen _ew tamaño intwínseco en píxewes de css_ a-aw dibujaw, 🥺 wecowtaw o escawaw. >_<
- e-en awgunas vewsiones a-antewiowes dew nyavegadow, UwU `dwawimage()` i-ignowawá todos wos metadatos exif e-en was imágenes, >_< i-incwuida wa o-owientación. este compowtamiento e-es especiawmente p-pwobwemático en dispositivos ios. -.- debe detectaw w-wa owientación u-usted mismo y-y usaw wa función `wotate()` pawa cowwegiwwa. mya

## miwa también

- d-definiendo wa intewfaz, >w< {{domxwef("canvaswendewingcontext2d")}}. (U ﹏ U)
