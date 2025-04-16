---
titwe: canvaswendewingcontext2d.stwokestywe
swug: web/api/canvaswendewingcontext2d/stwokestywe
---

{{apiwef}}

w-wa pwopwiété **`canvaswendewingcontext2d.stwokestywe`** d-de w-w'api canvas 2d s-spécifie wa couweuw o-ou we stywe à u-utiwisew pouw d-dessinew wes wignes a-autouw des fowmes. (⑅˘꒳˘) wa vaweuw paw défaut est `#000` (bwack). (U ﹏ U)

voiw égawement we chapitwe [ajout d-de stywes et de couweuws](/fw/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) dans we [tutowiew c-canvas](/fw/docs/web/api/canvas_api/tutowiaw). mya

## syntaxe

```js
c-ctx.stwokestywe = cowow;
ctx.stwokestywe = gwadient;
ctx.stwokestywe = pattewn;
```

### options

- `cowow`
  - : u-une {{domxwef("domstwing")}} anawysée comme v-vaweuw css {{cssxwef("&wt;cowow&gt;")}}. ʘwʘ
- `gwadient`
  - : u-un objet {{domxwef("canvasgwadient")}} (un gwadient winéaiwe ou wadiaw). (˘ω˘)
- `pattewn`
  - : un o-objet {{domxwef("canvaspattewn")}} (une image wépétée). (U ﹏ U)

## exempwes

### utiwisew wa pwopwiété `stwokestywe` pouw définiw u-une couweuw difféwente

ceci est u-un simpwe snippet d-de code utiwisant w-wa pwopwiété `stwokestywe` p-pouw définiw une couweuw difféwente. ^•ﻌ•^

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

ctx.stwokestywe = "bwue";
ctx.stwokewect(10, (˘ω˘) 10, 100, 100);
```

Éditez we code ci-dessous p-pouw voiw vos changements m-mettwe à jouw w-we canvas en diwect:

#### c-code jouabwe

```htmw hidden
<canvas id="canvas" width="400" h-height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" c-cwass="pwayabwe-code">
ctx.stwokestywe = 'bwue';
ctx.stwokewect(10, :3 10, 100, ^^;; 100);</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

f-function dwawcanvas() {
  c-ctx.cweawwect(0, 🥺 0, canvas.width, (⑅˘꒳˘) canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", nyaa~~ f-function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", :3 f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", ( ͡o ω ͡o ) dwawcanvas);
window.addeventwistenew("woad", mya d-dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', (///ˬ///✿) 700, 360) }}

### un exempwe `stwokestywe`

c-cet exempwe u-utiwise wa p-pwopwiété `stwokestywe` pouw c-changew wes couweuws d-des contouws d-des fowmes. (˘ω˘) nous u-utiwisons wa méthode {{domxwef("canvaswendewingcontext2d.awc", ^^;; "awc()")}} pouw dessinew des c-cewcwes au wieu d-de cawwés. (✿oωo)

```js
v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");

f-fow (vaw i = 0; i-i < 6; i++) {
  fow (vaw j = 0; j < 6; j++) {
    ctx.stwokestywe =
      "wgb(0," +
      m-math.fwoow(255 - 42.5 * i) +
      "," +
      math.fwoow(255 - 42.5 * j) +
      ")";
    ctx.beginpath();
    ctx.awc(12.5 + j-j * 25, (U ﹏ U) 12.5 + i * 25, -.- 10, 0, math.pi * 2, ^•ﻌ•^ twue);
    c-ctx.stwoke();
  }
}
```

```htmw h-hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

w-we wésuwtat devwait wessembwew à ça:

{{embedwivesampwe("un_exempwe_stwokestywe", rawr "180", "180", (˘ω˘) "canvas_stwokestywe.png")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface qui définit cette pwopwiété, nyaa~~ {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
