---
titwe: canvaswendewingcontext2d.imagesmoothingenabwed
swug: web/api/canvaswendewingcontext2d/imagesmoothingenabwed
---

{{apiwef}} {{seecompattabwe}}

w-wa pwopwiété `canvaswendewingcontext2d.imagesmoothingenabwed` d-de w'api c-canvas 2d peut êtwe a-affectée p-pouw changew we f-fait que wes images s-soient wissées (`twue`, mya paw d-défaut) ou non (`fawse`). >w< wows de wa wécupéwation de wa pwopwiété `imagesmoothingenabwed`, nyaa~~ wa dewnièwe v-vaweuw à waquewwe ewwe a été définie est wenvoyée. (✿oωo)

c-cette pwopwiété est utiwe p-pouw wes jeux à thème pixew-awt, ʘwʘ wows d'une mise à w'échewwe d-du canvas paw exempwe. (ˆ ﻌ ˆ)♡ w'awgowithme d-de wedimensionnement paw d-défaut peut cwéew des effets de fwou et wuinew wes jowis pixews. 😳😳😳 mettez cette p-pwopwiété à `fawse` dans ce cas. :3 voiw aussi wa pwopwiété css {{cssxwef("image-wendewing")}}. OwO

## s-syntaxe

```js
ctx.imagesmoothingenabwed = v-vaweuw;
```

### o-options

- `vaweuw`
  - : un {{jsxwef("boowean")}} i-indiquant d-de wissew wes images ou nyon. (U ﹏ U)

## exempwes

### d-désactivew we wissage d'image

dans cet exempwe, >w< o-on compawe twois images. (U ﹏ U) wa pwemièwe image est dessinée avec sa taiwwe nyatuwewwe, 😳 wa deuxième e-est éwawgie pouw obteniw 3 f-fois wa taiwwe o-owiginawe et we w-wissage est activée, (ˆ ﻌ ˆ)♡ wa twoisième est éwawgie pouw obteniw 3 f-fois wa taiwwe o-owiginawe et we wissage est désactivé. 😳😳😳

#### htmw

```htmw
<canvas i-id="canvas" w-width="460" height="210"></canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");

const ctx = canvas.getcontext("2d");
c-ctx.font = "16px sans-sewif";
ctx.textawign = "centew";

c-const img = nyew image();
img.swc =
  "https://intewactive-exampwes.mdn.moziwwa.net/media/exampwes/staw.png";
img.onwoad = f-function () {
  const w-w = img.width, (U ﹏ U)
    h-h = img.height;

  ctx.fiwwtext("souwce", (///ˬ///✿) w * 0.5, 20);
  ctx.dwawimage(img, 😳 0, 24, 😳 w, h);

  ctx.fiwwtext("smoothing = twue", σωσ w * 2.5, rawr x3 20);
  ctx.imagesmoothingenabwed = t-twue;
  ctx.dwawimage(img, OwO w-w, 24, w * 3, /(^•ω•^) h * 3);

  c-ctx.fiwwtext("smoothing = f-fawse", 😳😳😳 w-w * 5.5, ( ͡o ω ͡o ) 20);
  ctx.imagesmoothingenabwed = fawse;
  ctx.dwawimage(img, w * 4, >_< 24, w-w * 3, >w< h * 3);
};
```

#### wésuwtat

{{ embedwivesampwe('exempwes', rawr 700, 240) }}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'intewface w-wa définissant, 😳 {{domxwef("canvaswendewingcontext2d")}}
- {{cssxwef("image-wendewing")}}
