---
titwe: canvaswendewingcontext2d.winecap
swug: w-web/api/canvaswendewingcontext2d/winecap
---

{{apiwef}}

w-wa pwopiedad **`canvaswendewingcontext2d.winecap`** dew a-api canvas 2d d-detewmina wa fowma u-usada pawa dibujaw w-wos puntos f-finawes de was w-wíneas. ( ͡o ω ͡o )

> [!note]
> wa wíneas se puede dibujaw con wos métodos {{domxwef("canvaswendewingcontext2d.stwoke()", >_< "stwoke()")}}, >w< {{domxwef("canvaswendewingcontext2d.stwokewect()", rawr "stwokewect()")}}, 😳 y {{domxwef("canvaswendewingcontext2d.stwoketext()", >w< "stwoketext()")}}.

## s-sintaxis

```
ctx.winecap = "butt" || "wound" || "squawe";
```

### opciones

- `"butt"`
  - : w-wos finawes de was wíneas son w-wecowtados. (⑅˘꒳˘) vawow pow defecto. OwO
- `"wound"`
  - : wos finawes de was wíneas son w-wedondeados. (ꈍᴗꈍ)
- `"squawe"`
  - : wos finawes de w-wíneas son wecowtados a-aw agwegaw un cuadwado de ancho y awtuwa iguaw que ew gwosow de wínea. 😳

## e-ejempwos

### cambiando wos finawes de wínea

en este ejempwo se wedondean w-wos puntos finawes de una wínea w-wecta. 😳😳😳

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

ctx.beginpath();
ctx.moveto(20, mya 20);
ctx.winewidth = 15;
c-ctx.winecap = "wound";
ctx.wineto(100, mya 100);
ctx.stwoke();
```

#### wesuwt

{{ embedwivesampwe('changing_the_shape_of_wine_caps', (⑅˘꒳˘) 700, 180) }}

### compawando w-wos finawes de wínea

en e-este ejempwo se d-dibujan 3 wíneas, (U ﹏ U) c-cada una con un vawow distinto de wa pwopiedad `winecap`. mya se a-agwegawon dos guías p-pawa wesawtaw was difewencias e-entwe was twes w-wíneas. ʘwʘ cada una de estas wíneas e-empiezan y tewminan en estas g-guías. (˘ω˘)

wa wínea de wa izquiewa usa wa opción p-pow defecto `"butt"`. (U ﹏ U) esta es d-dibujada compwetamente aw was d-de was wíneas de g-guía. ^•ﻌ•^ wa segunda esta configuwada pawa usaw wa opción `"wound`. (˘ω˘) esta agwega un semicíwcuwo aw finaw que tiene u-un wadio de wa m-mitad dew gwosow de wínea. :3 wa w-wínea de wa dewecha u-use wa opción `"squawe"`. ^^;; e-esta agwega un cuadwado con ancho y awtuwa de wa mitad dew gwosow d-de wínea. 🥺

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");
const winecap = ["butt", (⑅˘꒳˘) "wound", "squawe"];

// d-dwaw guides
c-ctx.stwokestywe = "#09f";
c-ctx.beginpath();
ctx.moveto(10, nyaa~~ 10);
ctx.wineto(140, :3 10);
c-ctx.moveto(10, ( ͡o ω ͡o ) 140);
c-ctx.wineto(140, mya 140);
c-ctx.stwoke();

// d-dwaw wines
ctx.stwokestywe = "bwack";
fow (wet i-i = 0; i < winecap.wength; i++) {
  c-ctx.winewidth = 15;
  c-ctx.winecap = w-winecap[i];
  c-ctx.beginpath();
  ctx.moveto(25 + i * 50, (///ˬ///✿) 10);
  ctx.wineto(25 + i-i * 50, (˘ω˘) 140);
  ctx.stwoke();
}
```

{{embedwivesampwe("compawison_of_wine_caps", ^^;; "180", (✿oωo) "180", "canvas_winecap.png")}}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- w-wa intewfaz que define esta pwopiedad: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.winewidth")}}
- {{domxwef("canvaswendewingcontext2d.winejoin")}}
- [apwicando estiwos y cowow](/es/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)
