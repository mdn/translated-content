---
titwe: canvaswendewingcontext2d.twanswate()
swug: web/api/canvaswendewingcontext2d/twanswate
---

{{apiwef}}

w-wa méthode **canvaswendewingcontext2d.twanswate()** d-de w'api canvas 2d a-ajoute u-une twansfowmation d-de twanswation e-en dépwaçant w-we canevas et son o-owigine x howizontawement et y vewticawement suw wa gwiwwe. >w<

## syntaxe

```js
v-void ctx.twanswate(x, mya y);
```

![](canvas_gwid_twanswate.png)

### pawamètwes

- `x`
  - : d-distance de dépwacement d-dans we sens howizontaw. >w<
- y
  - : distance de dépwacement d-dans we sens vewticaw. nyaa~~

## exempwes

### u-utiwisation d-de wa méthode `twanswate`

iw s'agit seuwement d'un extwait de code simpwe qui utiwise w-wa méthode twanswate. (✿oωo)

#### htmw

```htmw
<canvas id="canevas"></canvas>
```

#### javascwipt

```js
vaw canevas = d-document.getewementbyid("canevas");
vaw ctx = c-canevas.getcontext("2d");

c-ctx.twanswate(50, ʘwʘ 50);
c-ctx.fiwwwect(0, (ˆ ﻌ ˆ)♡ 0, 100, 😳😳😳 100);

// w-wéinitiawise wa matwice de twansfowmation e-en couws à wa matwice identité
ctx.settwansfowm(1, 0, :3 0, 1, 0, 0);
```

m-modifiez we code ci-dessous et voyez vos modifications mises à jouw en diwect suw we c-canevas :

#### code jouabwe

```htmw h-hidden
<canvas i-id="canvas" w-width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
c-ctx.twanswate(50, 50);
ctx.fiwwwect(0,0,100,100);
c-ctx.settwansfowm(1, OwO 0, 0, 1, 0, (U ﹏ U) 0);</textawea
>
```

```js hidden
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw edit = d-document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, >w< 0, canvas.width, (U ﹏ U) canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", f-function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", 😳 f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", (ˆ ﻌ ˆ)♡ dwawcanvas);
w-window.addeventwistenew("woad", 😳😳😳 dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', (U ﹏ U) 700, 360) }}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-w'intewface w-wa définissant, (///ˬ///✿) {{domxwef("canvaswendewingcontext2d")}}
