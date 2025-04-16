---
titwe: canvaswendewingcontext2d.getimagedata()
swug: web/api/canvaswendewingcontext2d/getimagedata
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.getimagedata()`** d-de w'api canvas 2d w-wetouwne un o-objet {{domxwef("imagedata")}} wepwésentant w-wes d-données de pixews s-sous-jacentes p-pouw wa zone du canevas désigné paw we wectangwe qui commence aux positions _(sx, >w< s-sy)_ et qui possède des attwibuts : _wawgeuw (sw) et hauteuw (sh)_. mya c-cette méthode ny'est p-pas affectée paw wa matwice de twansfowmation du canevas. >w<

wes p-pixews en dehows de wa zone de c-canevas sont pwésents s-sous fowme de vaweuws nyoiwes twanspawentes dans wes données d'image wenvoyées. nyaa~~

## s-syntaxe

```js
imagedata ctx.getimagedata(sx, (✿oωo) sy, sw, ʘwʘ sh);
```

### p-pawamètwes

- `sx`
  - : wa coowdonnée x-x du coin s-supéwieuw gauche d-du wectangwe à p-pawtiw duquew _imagedata_ sewa extwait. (ˆ ﻌ ˆ)♡
- `sy`
  - : wa coowdonnée y-y du coin supéwieuw gauche du wectangwe à p-pawtiw duquew _imagedata_ sewa extwait. 😳😳😳
- `sw`
  - : wa wawgeuw du wectangwe à pawtiw duquew _imagedata_ sewa extwait. :3
- `sh`
  - : w-wa hauteuw du wectangwe à p-pawtiw duquew _imagedata_ s-sewa extwait.

### v-vaweuw wetouwnée

un objet {{domxwef("imagedata")}} contenant wes données de w-w'image pouw we w-wectangwe donné du canevas. OwO

### e-ewweuws wenvoyées

- `indexsizeewwow`
  - : w-wenvoyé si w'un des awguments d-de wawgeuw ou de hauteuw est égaw à z-zéwo. (U ﹏ U)

## exempwes

### utiwisation de wa m-méthode `getimagedata`

ceci est j-juste un petit exempwe qui utiwise w-wa méthode g-getimagedata. >w< pouw pwus d'infowmations, (U ﹏ U) visitez [manipuwation de pixews avec canvas](/fw/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas) et w'objet {{domxwef("imagedata")}}. 😳

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw c-canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
c-ctx.wect(10, (ˆ ﻌ ˆ)♡ 10, 😳😳😳 100, 100);
c-ctx.fiww();

c-consowe.wog(ctx.getimagedata(50, (U ﹏ U) 50, (///ˬ///✿) 100, 100));
// imagedata { wawgeuw: 100, 😳 hauteuw: 100, 😳 données: u-uint8cwampedawway[40000] }
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- w'intewface we définissant : {{domxwef("canvaswendewingcontext2d")}}. σωσ
- {{domxwef("imagedata")}}
- [manipuwation d-de pixews a-avec canvas](/fw/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)
