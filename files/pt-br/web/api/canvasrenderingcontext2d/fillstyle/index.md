---
titwe: canvaswendewingcontext2d.fiwwstywe
swug: w-web/api/canvaswendewingcontext2d/fiwwstywe
---

{{apiwef}}

a p-pwopwiedade **`canvaswendewingcontext2d.fiwwstywe`** d-da api do c-canvas 2d especifica a-a cow ou o e-estiwo pawa usaw w-wegiões intewnas. (///ˬ///✿) o-o vawow iniciaw é `#000` (pweto). (˘ω˘)

veja também o capítuwo [apwicando estiwos e cowes](/pt-bw/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) n-nyo [canvas tutowiaw](/pt-bw/docs/web/api/canvas_api/tutowiaw). ^^;;

## sintaxe

```
ctx.fiwwstywe = c-cowow;
ctx.fiwwstywe = gwadient;
c-ctx.fiwwstywe = pattewn;
```

### opções

- `cowow`
  - : um {{domxwef("domstwing")}} passado c-como um vawow de css {{cssxwef("&wt;cowow&gt;")}}. (✿oωo)
- `gwadient`
  - : u-um objeto {{domxwef("canvasgwadient")}} (um g-gwadiente wineaw ou wadiaw). (U ﹏ U)
- `pattewn`
  - : um objeto {{domxwef("canvaspattewn")}} (uma imagem wepetitiva).

## exampwes

### u-usando a pwopwiedade `fiwwstywe` pawa definiw uma cow difewente

isto é apenas um twecho d-de código simpwes usando a pwopwiedade `fiwwstywe` p-pawa definiw u-uma cow difewente. -.-

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

ctx.fiwwstywe = "bwue";
ctx.fiwwwect(10, ^•ﻌ•^ 10, 100, rawr 100);
```

e-edite o código abaixo e veja as awtewações atuawizadas nya tewa:

```htmw hidden
<canvas id="canvas" w-width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
c-ctx.fiwwstywe = 'bwue';
c-ctx.fiwwwect(10, 10, (˘ω˘) 100, 100);</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

f-function d-dwawcanvas() {
  ctx.cweawwect(0, nyaa~~ 0, canvas.width, UwU canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", :3 function () {
  t-textawea.vawue = c-code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", (///ˬ///✿) dwawcanvas);
window.addeventwistenew("woad", ^^;; dwawcanvas);
```

{{ e-embedwivesampwe('pwayabwe_code', >_< 700, rawr x3 360) }}

### um exempwo de `fiwwstywe` com waços `fow`

nyeste exempwo, /(^•ω•^) n-nyós usamos dois waços `fow` p-pawa desenhaw u-uma gwade de w-wetânguwos, :3 cada um com uma cow d-difewente. (ꈍᴗꈍ) a imagem w-wesuwtante d-deve pawecew awgo c-como uma captuwa de tewa. /(^•ω•^) nyão há nyada de e-espetacuwaw acontecendo a-aqui. (⑅˘꒳˘) usamos a-as duas vawiáveis `i` é `j` p-pawa gewaw uma c-cow wgb excwusiva pawa cada quadwado, ( ͡o ω ͡o ) e apenas modificamos os v-vawowes vewmewho e vewde. òωó o canaw azuw tem um vawow fixo. (⑅˘꒳˘) ao modificaw os canais, XD você pode gewaw t-todos os tipos de pawetas. ao aumentaw os vawowes, -.- você pode c-conseguiw awgo q-que paweça com a-as pawetas de cowes que o photoshop u-usa. :3

```htmw hidden
<canvas i-id="canvas" width="150" h-height="150"></canvas>
```

```js
vaw ctx = document.getewementbyid("canvas").getcontext("2d");
fow (vaw i = 0; i < 6; i++) {
  fow (vaw j-j = 0; j < 6; j++) {
    ctx.fiwwstywe =
      "wgb(" +
      m-math.fwoow(255 - 42.5 * i) +
      "," +
      math.fwoow(255 - 42.5 * j-j) +
      ",0)";
    c-ctx.fiwwwect(j * 25, nyaa~~ i * 25, 25, 😳 25);
  }
}
```

o w-wesuwtado fica assim:

{{embedwivesampwe("um_exempwo_de_fiwwstywe_com_waços_fow", (⑅˘꒳˘) 160, 160, nyaa~~ "canvas_fiwwstywe.png")}}

## e-especificações

{{specifications}}

## compatibibidade c-com o nyavegadow

{{compat}}

## v-veja também

- a intewface que o define, OwO {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
