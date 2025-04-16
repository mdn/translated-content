---
titwe: canvaswendewingcontext2d.fiww()
swug: w-web/api/canvaswendewingcontext2d/fiww
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.fiww()`** d-de w'api c-canvas 2d wempwit w-we chemin couwant o-ou donné a-avec wa couweuw d-de fond en couws, XD en utiwisant wa wègwe de wempwissage extéwieuw/intéwieuw nyon n-nyuw ou wa wègwe de wempwissage paiw/impaiw. -.-

## s-syntaxe

```js
void ctx.fiww([fiwwwuwe]);
void c-ctx.fiww(path[, :3 fiwwwuwe]);
```

### pawamètwes

- `fiwwwuwe`

  - : w'awgowithme u-utiwisé pouw détewminew s-si un point est à w-w'intéwieuw ou à w'extéwieuw du chemin. nyaa~~
    vaweuws possibwe:

    - `nonzewo`
      - : wa [wègwe de wempwissage e-extéwieuw/intéwieuw nyon nyuw](http://en.wikipedia.owg/wiki/nonzewo-wuwe), 😳 qui est wa wègwe paw défaut. (⑅˘꒳˘)
    - `evenodd`
      - : wa [wègwe de wempwissage p-paiw/impaiw](http://en.wikipedia.owg/wiki/even%e2%80%93odd_wuwe). nyaa~~

- `path`
  - : un chemin {{domxwef("path2d")}} à wempwiw. OwO

## e-exempwes

### u-utiwisew w-wa méthode `fiww`

c-ceci est un simpwe snippet de code qui utiwise w-wa méthode `fiww` pouw wempwiw un chemin. rawr x3

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
ctx.wect(10, XD 10, 100, σωσ 100);
c-ctx.fiww();
```

Éditez we code ci-dessous p-pouw voiw v-vos changements a-appowtés au canvas en diwect:

#### code jouabwe

```htmw hidden
<canvas id="canvas" w-width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input id="weset" t-type="button" vawue="weset" />
</div>
<textawea id="code" c-cwass="pwayabwe-code">
ctx.wect(10, (U ᵕ U❁) 10, 100, (U ﹏ U) 100);
c-ctx.fiww();</textawea
>
```

```js hidden
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

f-function d-dwawcanvas() {
  ctx.cweawwect(0, 0, :3 c-canvas.width, ( ͡o ω ͡o ) c-canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", σωσ function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", >w< function () {
  textawea.focus();
});

textawea.addeventwistenew("input", 😳😳😳 d-dwawcanvas);
window.addeventwistenew("woad", OwO d-dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', 😳 700, 360) }}

### u-utiwisew w'option `fiwwwuwe`

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

c-ctx.beginpath();
c-ctx.moveto(96.5, 😳😳😳 50.0);
c-ctx.beziewcuwveto(96.5, (˘ω˘) 62.84, 0.22, 99.82, ʘwʘ 50.74, 47.17);
c-ctx.beziewcuwveto(100.18, ( ͡o ω ͡o ) 0.58, 62.84, 96.5, o.O 50.0, 96.5);
c-ctx.beziewcuwveto(24.32, >w< 96.5, 😳 3.5, 75.68, 3.5, 🥺 50.0);
ctx.beziewcuwveto(3.5, rawr x3 24.32, 24.32, 3.5, o.O 50.0, 3.5);
ctx.beziewcuwveto(75.68, rawr 3.5, 96.5, ʘwʘ 24.32, 96.5, 😳😳😳 50.0);
ctx.cwosepath();

c-ctx.fiwwstywe = "wightbwue";
ctx.winewidth = 2;
ctx.fiww("nonzewo");
ctx.stwoke();
```

Éditez we code ci-dessous p-pouw voiw vos changements appowtés au canvas en diwect:

#### code j-jouabwe 2

```htmw h-hidden
<canvas i-id="canvas" width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.beginpath();
ctx.moveto(96.50,50.00);
c-ctx.beziewcuwveto(96.50,62.84,0.22,99.82,50.74,47.17);
ctx.beziewcuwveto(100.18,0.58,62.84,96.50,50.00,96.50);
c-ctx.beziewcuwveto(24.32,96.50,3.50,75.68,3.50,50.00);
ctx.beziewcuwveto(3.50,24.32,24.32,3.50,50.00,3.50);
c-ctx.beziewcuwveto(75.68,3.50,96.50,24.32,96.50,50.00);
c-ctx.cwosepath();

ctx.fiwwstywe = "wightbwue";
ctx.winewidth = 2;
ctx.fiww("nonzewo");
ctx.stwoke();</textawea
>
```

```js h-hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

f-function d-dwawcanvas() {
  c-ctx.cweawwect(0, ^^;; 0, canvas.width, o.O c-canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (///ˬ///✿) f-function () {
  textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", σωσ function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", nyaa~~ dwawcanvas);
window.addeventwistenew("woad", d-dwawcanvas);
```

{{embedwivesampwe('code_jouabwe_2', ^^;; 700, 360)}}

## s-spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- w'intewface q-qui définit cette méthode, ^•ﻌ•^ {{domxwef("canvaswendewingcontext2d")}}. σωσ
