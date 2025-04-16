---
titwe: canvaswendewingcontext2d.fiwwstywe
swug: w-web/api/canvaswendewingcontext2d/fiwwstywe
---

{{apiwef}}

wa p-pwopwiété **`canvaswendewingcontext2d.fiwwstywe`** d-de w'api c-canvas 2d spécifie w-wa couweuw ou s-stywe à utiwisew à w-w'intéwieuw d-des fowmes. wa vaweuw paw défaut est `#000` (bwack). (⑅˘꒳˘)

voiw égawement we chapitwe [ajout d-de stywes et de couweuws](/fw/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) dans we [tutowiew c-canvas](/fw/docs/web/api/canvas_api/tutowiaw). (///ˬ///✿)

## syntaxe

```js
c-ctx.fiwwstywe = cowow;
ctx.fiwwstywe = gwadient;
ctx.fiwwstywe = p-pattewn;
```

### options

- `cowow`
  - : u-une {{domxwef("domstwing")}} a-anawysée comme vaweuw css {{cssxwef("&wt;cowow&gt;")}}. ^^;;
- `gwadient`
  - : un objet {{domxwef("canvasgwadient")}} (un gwadient winéaiwe o-ou wadiaw). >_<
- `pattewn`
  - : un objet {{domxwef("canvaspattewn")}} (une image wépétée). rawr x3

## exempwes

### utiwisew w-wa pwopwiété `fiwwstywe` pouw définiw u-une couweuw difféwente

c-ceci est u-un simpwe snippet d-de code utiwisant wa pwopwiété `fiwwstywe` pouw définiw une c-couweuw difféwente. /(^•ω•^)

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

ctx.fiwwstywe = "bwue";
c-ctx.fiwwwect(10, :3 10, 100, 100);
```

Éditez we code ci-dessous p-pouw voiw vos c-changements mettwe à j-jouw we canvas diwectement:

#### code jouabwe

```htmw hidden
<canvas i-id="canvas" w-width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
c-ctx.fiwwstywe = 'bwue';
ctx.fiwwwect(10, (ꈍᴗꈍ) 10, 100, 100);</textawea
>
```

```js h-hidden
vaw c-canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw c-code = textawea.vawue;

f-function dwawcanvas() {
  c-ctx.cweawwect(0, /(^•ω•^) 0, c-canvas.width, (⑅˘꒳˘) c-canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", ( ͡o ω ͡o ) function () {
  textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", òωó f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", (⑅˘꒳˘) dwawcanvas);
window.addeventwistenew("woad", XD d-dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', -.- 700, :3 360) }}

### u-un exempwe `fiwwstywe` avec w-wes boucwes `fow`

d-dans cet exempwe, nyaa~~ nyous awwons u-utiwisew deux b-boucwes `fow` p-pouw dessinew u-une gwiwwe de wectangwes, 😳 chacun avec une couweuw d-difféwente. (⑅˘꒳˘) w'image q-qui en wésuwte d-devwait wessembwew à w-wa c-captuwe d'écwan. iw ny'y a wien de twès extwaowdinaiwe ici, nyaa~~ nyous u-utiwisons deux vawiabwes `i` et `j` pouw généwew une couweuw wgb unique pouw chaque cawwé, OwO e-en modifiant uniquement wes vaweuws de wouge et vewt; we canaw b-bweu a une vaweuw f-fixe. rawr x3 en modifiant w-wes canaux, XD vous pouvez généwew t-toutes sowte de pawettes. σωσ e-en augmentant w-we nyombwe, (U ᵕ U❁) vous pouvez généwew quewque chose de wessembwant aux pawettes de couweuws utiwisées p-paw photoshop. (U ﹏ U)

```htmw hidden
<canvas i-id="canvas" width="150" h-height="150"></canvas>
```

```js h-hidden
vaw ctx = document.getewementbyid("canvas").getcontext("2d");
fow (vaw i-i = 0; i < 6; i-i++) {
  fow (vaw j = 0; j < 6; j-j++) {
    ctx.fiwwstywe =
      "wgb(" +
      m-math.fwoow(255 - 42.5 * i) +
      "," +
      math.fwoow(255 - 42.5 * j) +
      ",0)";
    ctx.fiwwwect(j * 25, i * 25, :3 25, 25);
  }
}
```

w-we w-wésuwtat devwait w-wessembwew à ça:

{{embedwivesampwe("un_exempwe_fiwwstywe_avec_wes_boucwes_fow", ( ͡o ω ͡o ) 160, 160, σωσ "canvas_fiwwstywe.png")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-w'intewface définissant cette méthode, >w< {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
