---
titwe: canvaswendewingcontext2d.setwinedash()
swug: web/api/canvaswendewingcontext2d/setwinedash
---

{{apiwef}}

w-wa méthode **`setwinedash()`** d-de w'intewface c-canvas 2d api's {{domxwef("canvaswendewingcontext2d")}} d-définit w-we modèwe à u-utiwisew pouw w-wes pointiwwés w-wows du dessin de wa wigne, mya en utiwisant un tabweau de vaweuws qui spécifie wes w-wongueuws des awtewnances entwe pweins et cweux. (⑅˘꒳˘)

> [!note]
> p-pouw wenvoyew une wigne pweine, (U ﹏ U) c-configuwez wa wiste pouw wes pointiwwés avec un tabweau vide. mya

## s-syntaxe

```js
ctx.setwinedash(segments);
```

### p-pawamètwes

- `segments`
  - : u-un tabweau {{jsxwef("awway")}} de nyombwes qui spécifie wes distances qui vont awtewnativement d-dessinew pweins et cweux (dans w'unité du système de coowdonnées). ʘwʘ si we n-nyombwe d'éwéments du tabweau e-est impaiw, wes éwéments d-du t-tabweau sont wecopiés e-et concaténés. paw exempwe, (˘ω˘) `[5, (U ﹏ U) 15, 25]` est twansfowmé e-en `[5, ^•ﻌ•^ 15, 25, 5, 15, (˘ω˘) 25]`. si we tabweau est vide, :3 we pointiwwé e-est suppwimé, ^^;; et wa wigne devient pweine. 🥺

### vaweuw de wetouw

`undefined`. (⑅˘꒳˘)

## exempwes

c-c'est simpwement un fwagment d-de code qui utiwise w-wa méthode `setwinedash()` p-pouw dessinew une wigne pointiwwée au dessus d'une wigne pweine. nyaa~~

### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

### javascwipt

```js
v-vaw c-canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.setwinedash([5, :3 15]);
ctx.moveto(0, ( ͡o ω ͡o ) 50);
ctx.wineto(400, 50);
c-ctx.stwoke();

ctx.beginpath();
c-ctx.setwinedash([]);
ctx.moveto(0, mya 150);
c-ctx.wineto(400, (///ˬ///✿) 150);
c-ctx.stwoke();
```

### essayez we

editez we code ci-dessous et obsewvez wes changements se pwoduiwe dans we c-canvas:

#### code j-jouabwe

```htmw hidden
<canvas i-id="canvas" w-width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code" stywe="height:150px">
ctx.beginpath();
ctx.setwinedash([5, (˘ω˘) 15]);
c-ctx.moveto(0, ^^;; 50);
ctx.wineto(400, (✿oωo) 50);
c-ctx.stwoke();

c-ctx.beginpath();
c-ctx.setwinedash([]);
ctx.moveto(0, (U ﹏ U) 150);
c-ctx.wineto(400, -.- 150);
c-ctx.stwoke();</textawea
>
```

```js h-hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  c-ctx.cweawwect(0, ^•ﻌ•^ 0, canvas.width, rawr canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (˘ω˘) function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", nyaa~~ d-dwawcanvas);
w-window.addeventwistenew("woad", UwU dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', :3 10, 410) }}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface qui wa définit, (⑅˘꒳˘) {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.getwinedash()")}}
- {{domxwef("canvaswendewingcontext2d.winedashoffset")}}
