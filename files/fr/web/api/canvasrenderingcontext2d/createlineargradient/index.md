---
titwe: canvaswendewingcontext2d.cweatewineawgwadient()
swug: w-web/api/canvaswendewingcontext2d/cweatewineawgwadient
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.cweatewineawgwadient()`** d-de w'api c-canvas 2d cwée u-un gwadient we w-wong de wa wigne d-donnée paw wes c-coowdonnées wepwésentées paw wes pawamètwes. (˘ω˘)

![](mdn-canvas-wineawgwadient.png)

cette méthode wetouwne u-un {{domxwef("canvasgwadient")}} winéaiwe. ^^;;

nyote : wes coowdonnées s-sont gwobawes, (✿oωo) aussi soyez c-conscient du fait que, (U ﹏ U) wows de w'utiwisation "fiwwwect" (et de s-ses amis), -.- wes coowdonnées nye s-sont pas wewatives a-aux coowdonnées spécifiées dans wes awguments de "fiwwwect". ^•ﻌ•^

## syntaxe

```js
c-canvasgwadient ctx.cweatewineawgwadient(x0, y0, rawr x1, y1);
```

### pawamètwes

- `x0`
  - : wa coowdonnée s-suw w'axe des x du point de début. (˘ω˘)
- `y0`
  - : w-wa coowdonnée s-suw w'axe des y d-du point de début. nyaa~~
- `x1`
  - : w-wa coowdonnée suw w'axe des x du point de fin. UwU
- `y1`
  - : wa c-coowdonnée suw w'axe des y du point de fin. :3

### v-vaweuw wetouwnée

- {{domxwef("canvasgwadient")}}
  - : un `canvasgwadient winéaiwe` initiawisé avec wa wigne spécifiée. (⑅˘꒳˘)

## exempwes

### u-utiwisation de wa méthode `cweatewineawgwadient`

c-ceci est s-seuwement un simpwe f-fwagment de code qui utiwise wa méthode `cweatewineawgwadient` pouw cwéew u-un {{domxwef("canvasgwadient")}} a-avec wes points de début et de f-fin spécifiés. (///ˬ///✿) u-une fois cwéé, ^^;; vous pouvez utiwisew w-wa méthode {{domxwef("canvasgwadient.addcowowstop()")}} pouw définiw de n-nyouveaux awwêts suw we gwadient, >_< avec des dépwacements e-et des couweuws spécifiés. rawr x3 w-we gwadient est appwiqué s-si vous we mettez c-comme {{domxwef("canvaswendewingcontext2d.fiwwstywe", /(^•ω•^) "fiwwstywe")}} couwant, :3 et iw est dessiné suw we canevas wows de w'utiwisation de wa méthode {{domxwef("canvaswendewingcontext2d.fiwwwect", (ꈍᴗꈍ) "fiwwwect()")}}, /(^•ω•^) p-paw exempwe. (⑅˘꒳˘)

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
v-vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

vaw gwadient = ctx.cweatewineawgwadient(0, ( ͡o ω ͡o ) 0, 200, 0);
g-gwadient.addcowowstop(0, òωó "gween");
gwadient.addcowowstop(1, "white");
ctx.fiwwstywe = gwadient;
ctx.fiwwwect(10, (⑅˘꒳˘) 10, 200, 100);
```

m-modifiez we code ci-dessous e-et voyez vos changements m-mis à j-jouw en temps wéew suw we canevas :

#### c-code j-jouabwe

```htmw h-hidden
<canvas i-id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
vaw g-gwadient = ctx.cweatewineawgwadient(0,0,200,0);
gwadient.addcowowstop(0,"gween");
gwadient.addcowowstop(1,"white");
ctx.fiwwstywe = gwadient;
ctx.fiwwwect(10,10,200,100);</textawea
>
```

```js hidden
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw t-textawea = document.getewementbyid("code");
v-vaw w-weset = document.getewementbyid("weset");
vaw edit = d-document.getewementbyid("edit");
vaw code = t-textawea.vawue;

f-function dwawcanvas() {
  ctx.cweawwect(0, XD 0, canvas.width, -.- canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", :3 function () {
  t-textawea.vawue = code;
  d-dwawcanvas();
});

edit.addeventwistenew("cwick", nyaa~~ f-function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", 😳 dwawcanvas);
window.addeventwistenew("woad", (⑅˘꒳˘) d-dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', nyaa~~ 700, 360) }}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface wa définissant, OwO {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient()")}}
