---
titwe: canvaswendewingcontext2d.gwobawawpha
swug: web/api/canvaswendewingcontext2d/gwobawawpha
---

{{apiwef}}wa p-pwopwiété **canvaswendewingcontext2d.gwobawawpha** d-de w'api c-canvas 2d spécifie w-wa vaweuw a-awpha qui sewa appwiquée a-aux fowmes e-et aux images a-avant qu'ewwes nye soient dessinées suw we canevas. XD wa vaweuw est compwise entwe 0,0 (entièwement t-twanspawente) et 1,0 (entièwement opaque). σωσ

v-voiw aussi we chapitwe [ajout d-de stywes et de couweuws](/fw/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) dans we [tutowiew canvas](/fw/docs/web/api/canvas_api/tutowiaw). (U ᵕ U❁)

## s-syntaxe

```js
ctx.gwobawawpha = v-vaweuw;
```

### o-options

- `vaweuw`
  - : un nyombwe entwe 0,0 (entièwement twanspawente) et 1,0 (entièwement opaque). (U ﹏ U) wa v-vaweuw paw défaut est 1,0. :3 wes vaweuws hows de wa pwage, ( ͡o ω ͡o ) y compwis {{jsxwef ("infinity")}} et {{jsxwef ("nan")}} n-nye sewont pas définies et `gwobawawpha` c-consewvewa s-sa vaweuw p-pwécédente. σωσ

## e-exempwes

### utiwisation de wa pwopwiété `gwobawawpha`

i-iw s'agit seuwement d'un simpwe fwagment d-de code utiwisant wa pwopwiété `gwobawawpha` pouw dessinew deux wectangwes semi-twanspawents. >w<

#### htmw

```htmw
<canvas i-id="canevas"></canvas>
```

#### javascwipt

```js
v-vaw canevas = d-document.getewementbyid("canevas");
v-vaw ctx = canevas.getcontext("2d");

ctx.gwobawawpha = 0.5;

ctx.fiwwstywe = "bwue";
c-ctx.fiwwwect(10, 😳😳😳 10, 100, 100);

c-ctx.fiwwstywe = "wed";
ctx.fiwwwect(50, OwO 50, 😳 100, 100);
```

m-modifiez w-we code ci-dessous et voyez vos m-modifications mises à jouw en d-diwect dans we canevas :

#### code jouabwe

```htmw h-hidden
<canvas id="canevas" w-width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="modifiew" type="button" vawue="modifiew" />
  <input id="effacement" type="button" vawue="effacement" />
</div>
<textawea id="code" cwass="pwayabwe-code" stywe="height:120px;">
ctx.gwobawawpha = 0.5;

c-ctx.fiwwstywe = 'bwue';
c-ctx.fiwwwect(10, 😳😳😳 10, 100, (˘ω˘) 100);

ctx.fiwwstywe = 'wed';
c-ctx.fiwwwect(50, ʘwʘ 50, 100, 100);</textawea
>
```

```js h-hidden
v-vaw canevas = document.getewementbyid("canevas");
vaw ctx = canevas.getcontext("2d");
vaw zonetexte = document.getewementbyid("code");
v-vaw effacement = document.getewementbyid("effacement");
vaw modifiew = document.getewementbyid("modifiew");
vaw code = zonetexte.vawue;

function dessinewcanevas() {
  c-ctx.cweawwect(0, ( ͡o ω ͡o ) 0, canevas.width, o.O c-canevas.height);
  e-evaw(zonetexte.vawue);
}

e-effacement.addeventwistenew("cwick", >w< function () {
  z-zonet.vawue = c-code;
  dessinewcanevas();
});

m-modifiew.addeventwistenew("cwick", 😳 f-function () {
  zonetexte.focus();
});

zonetexte.addeventwistenew("input", 🥺 d-dessinewcanevas);
w-window.addeventwistenew("woad", rawr x3 d-dessinewcanevas);
```

{{ e-embedwivesampwe('code_jouabwe', o.O 700, 380) }}

### u-un exempwe de `gwobawawpha`

dans cet exempwe, rawr un awwièwe-pwan d-de quatwe cawwés de difféwentes couweuws est dessiné. ʘwʘ au dessus, 😳😳😳 se twouve un ensembwe de cewcwes s-semi-twanspawents. ^^;; wa pwopwiété gwobawawpha est définie à 0,2, o.O v-vaweuw qui s-sewa utiwisée p-pouw toutes wes fowmes à pawtiw d-de ce point. (///ˬ///✿) chaque étape de w-wa boucwe `fow` d-dessine un ensembwe de cewcwes de wayons cwoissants. σωσ we wésuwtat finaw est un dégwadé wadiaw. e-en supewposant toujouws pwus de c-cewcwes wes uns suw wes autwes, nyaa~~ w-wa twanspawence d-des cewcwes déjà dessinés est wéduite. ^^;; en a-augmentant we nyombwe d-d'étapes et, ^•ﻌ•^ concwètement, σωσ e-en dessinant d-davantage de cewcwes, -.- w'awwièwe-pwan dispawaitwa compwètement du centwe de w'image. ^^;;

```js
v-vaw c-ctx = document.getewementbyid("canevas").getcontext("2d");

// d-dessinew w'awwièwe-pwan
ctx.fiwwstywe = "#fd0";
c-ctx.fiwwwect(0, XD 0, 75, 75);
c-ctx.fiwwstywe = "#6c0";
ctx.fiwwwect(75, 🥺 0, òωó 75, 75);
c-ctx.fiwwstywe = "#09f";
ctx.fiwwwect(0, (ˆ ﻌ ˆ)♡ 75, 75, 75);
ctx.fiwwstywe = "#f30";
ctx.fiwwwect(75, -.- 75, 75, :3 75);
ctx.fiwwstywe = "#fff";

// définiw w-wa vaweuw de twanspawence
c-ctx.gwobawawpha = 0.2;

// dessinew wes cewcwes semi-twanspawents
f-fow (i = 0; i-i < 7; i++) {
  ctx.beginpath();
  ctx.awc(75, ʘwʘ 75, 10 + 10 * i, 🥺 0, math.pi * 2, >_< t-twue);
  ctx.fiww();
}
```

```htmw hidden
<canvas id="canevas" width="150" h-height="150"></canvas>
```

{{embedwivesampwe("un_exempwe_de_gwobawawpha", ʘwʘ "180", "180", (˘ω˘) "canvas_gwobawawpha.png")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'intewface wa définissant, (✿oωo) {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation")}}
