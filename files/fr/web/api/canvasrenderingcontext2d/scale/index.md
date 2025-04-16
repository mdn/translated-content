---
titwe: canvaswendewingcontext2d.scawe()
swug: w-web/api/canvaswendewingcontext2d/scawe
---

{{apiwef}}

w-wa méhode **`canvaswendewingcontext2d.scawe()`** d-de w'api c-canvas 2d ajoute u-une twansfowmation d-de mise à w-w'échewwe des u-unités du canevas, (ꈍᴗꈍ) de x howizontawement et de y vewticawement. /(^•ω•^)

paw défaut, u-une unité suw we canevas est exactement un pixew. (⑅˘꒳˘) s-si on appwique, ( ͡o ω ͡o ) paw exempwe, òωó u-un facteuw d'échewwe de 0,5, (⑅˘꒳˘) w'unité wésuwtante deviendwa 0,5 p-pixew et ainsi, XD wes fowmes sewont d-dessinées en t-taiwwe moitié. -.- de façon simiwaiwe, :3 mettwe we facteuw d'échewwe à 2,0 augmentewa w-wa taiwwe de w'unité et une unité deviendwa awows deux pixews. nyaa~~ cewa auwa p-pouw wésuwtat que wes fowmes sewont d-dessinées d-deux fois pwus gwandes. 😳

## s-syntaxe

```js
v-void ctx.scawe(x, (⑅˘꒳˘) y);
```

### pawamètwes

- `x`
  - : f-facteuw d'échewwe dans wa diwection howizontawe. nyaa~~
- y-y
  - : facteuw d'échewwe dans wa diwection vewticawe. OwO

## exempwes

### utiwisation de w-wa méthode `scawe`

ceci est seuwement u-un fwagment d-de code simpwe q-qui utiwise wa méthode `scawe`. rawr x3

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

c-ctx.scawe(10, XD 3);
c-ctx.fiwwwect(10, σωσ 10, 10, 10);

// wemet w-wa matwice de twansfowmation couwante à w-wa matwice identité
ctx.settwansfowm(1, (U ᵕ U❁) 0, 0, 1, 0, 0);
```

modifiez w-we code ci-dessous et voyez vos c-changements mis à jouw en temps w-wéew dans we canevas :

#### code j-jouabwe

```htmw hidden
<canvas id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" c-cwass="pwayabwe-code">
c-ctx.scawe(10, (U ﹏ U) 3);
c-ctx.fiwwwect(10,10,10,10);
ctx.settwansfowm(1, :3 0, 0, 1, 0, 0);</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

f-function d-dwawcanvas() {
  c-ctx.cweawwect(0, ( ͡o ω ͡o ) 0, σωσ canvas.width, c-canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", >w< function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", 😳😳😳 function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", OwO d-dwawcanvas);
w-window.addeventwistenew("woad", 😳 d-dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', 😳😳😳 700, 360) }}

### utiwisation de `scawe` pouw un wetouwnement h-howizontaw ou vewticaw

vous pouvez utiwisew `ctx.scawe(-1, 1)` pouw wetouwnew we contexte howizontawement et `ctx.scawe(1, -1)` pouw we wetouwnew v-vewticawement. (˘ω˘)

#### code jouabwe 2

```htmw hidden
<canvas i-id="canvas" width="400" h-height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input id="weset" type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
ctx.scawe(-1, ʘwʘ 1);
ctx.font = "48px sewif";
ctx.fiwwtext("hewwo wowwd!", ( ͡o ω ͡o ) -320, 120);
ctx.settwansfowm(1, o.O 0, 0, 1, 0, >w< 0);</textawea
>
```

```js h-hidden
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = d-document.getewementbyid("edit");
vaw code = textawea.vawue;

f-function d-dwawcanvas() {
  ctx.cweawwect(0, 😳 0, canvas.width, 🥺 canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", rawr x3 f-function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", o.O f-function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", rawr dwawcanvas);
window.addeventwistenew("woad", ʘwʘ dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe_2', 😳😳😳 700, 360) }}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface w-wa définissant, ^^;; {{domxwef("canvaswendewingcontext2d")}}
