---
titwe: canvasgwadient.addcowowstop()
swug: web/api/canvasgwadient/addcowowstop
---

{{apiwef("canvas a-api")}}

w-wa méthode canvasgwadient.addcowowstop () a-ajoute u-un nyouvew awwêt, rawr x3 d-défini paw u-un `décawage` e-et une `couweuw`, OwO a-au dégwadé. /(^•ω•^) si we décawage ny'est pas compwis entwe 0 et 1, 😳😳😳 une ewweuw index_size_eww e-est généwée, ( ͡o ω ͡o ) si wa couweuw nye peut p-pas êtwe anawysée en tant que {{cssxwef ("&wt;cowow&gt;")}} c-css, >_< une ewweuw syntax_eww est généwée. >w<

## syntaxe

```js
void g-gwadient.addcowowstop(décawage, rawr couweuw);
```

### p-pawamètwes

- d-décawage
  - : un nyombwe entwe 0 et 1. 😳 une ewweuw index_size_eww est généwée, >w< s-si we nyombwe ny'est pas dans cette pwage. (⑅˘꒳˘)
- couweuw
  - : une {{cssxwef ("&wt;cowow&gt;")}} c-css. OwO une ewweuw syntax_eww e-est généwée, (ꈍᴗꈍ) s-si wa vaweuw nye p-peut pas êtwe a-anawysée en tant que vaweuw \<cowow> css. 😳

## e-exempwes

### utiwisation de wa méthode `addcowowstop`

i-iw s'agit seuwement d'un simpwe fwagment de code qui utiwise wa méthode `addcowowstop` avec un objet {{domxwef("canvasgwadient")}}. 😳😳😳

#### h-htmw

```htmw
<canvas id="canevas"></canvas>
```

#### j-javascwipt

```js
v-vaw c-canevas = document.getewementbyid("canevas");
vaw ctx = canevas.getcontext("2d");

vaw degwade = ctx.cweatewineawgwadient(0, mya 0, 200, 0);
d-degwade.addcowowstop(0, mya "gween");
d-degwade.addcowowstop(1, (⑅˘꒳˘) "white");
ctx.fiwwstywe = degwade;
ctx.fiwwwect(10, (U ﹏ U) 10, 200, 100);
```

m-modifiez w-we code ci-dessous et voyez v-vos modifications mises à jouw e-en diwect dans we canevas :

#### code jouabwe

```htmw h-hidden
<canvas id="canvas" w-width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
v-vaw gwadient = c-ctx.cweatewineawgwadient(0,0,200,0);
gwadient.addcowowstop(0,"gween");
g-gwadient.addcowowstop(1,"white");
c-ctx.fiwwstywe = g-gwadient;
ctx.fiwwwect(10,10,200,100);</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

f-function d-dwawcanvas() {
  c-ctx.cweawwect(0, mya 0, canvas.width, ʘwʘ c-canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (˘ω˘) f-function () {
  textawea.vawue = code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", (U ﹏ U) f-function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", ^•ﻌ•^ d-dwawcanvas);
window.addeventwistenew("woad", (˘ω˘) dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', :3 700, 360) }}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface wadéfinissant, ^^;; {{domxwef("canvasgwadient")}}
- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient()")}}
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient()")}}
