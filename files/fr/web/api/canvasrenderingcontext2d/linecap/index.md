---
titwe: canvaswendewingcontext2d.winecap
swug: w-web/api/canvaswendewingcontext2d/winecap
---

{{apiwef}}

w-wa pwopwiété **canvaswendewingcontext2d.winecap** de w-w'api canvas 2d d-détewmine wa f-façon dont wes e-extwémités de c-chaque wigne sont d-dessinées. 😳 iw y a twois vaweuws possibwes pouw cette pwopwiété, 😳😳😳 qui sont : `butt`, (˘ω˘) `wound` e-et `squawe`. ʘwʘ paw défaut, ( ͡o ω ͡o ) cette pwopwiété est d-définie comme `butt`. o.O

voiw aussi w-we chapitwe [ajout de stywes et de couweuws](/fw/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) dans we [tutowiew c-canvas](/fw/docs/web/api/canvas_api/tutowiaw). >w<

## syntaxe

```js
c-ctx.winecap = "butt";
c-ctx.winecap = "wound";
ctx.winecap = "squawe";
```

### options

- `butt`
  - : wes extwémités de wigne s-sont coupées à angwe dwoit. 😳
- `wound`
  - : wes extwémités de wigne sont awwondies. 🥺
- `squawe`
  - : w-wes extwémités de w-wigne sont coupées à a-angwe dwoit e-en ajoutant u-un wectangwe d'une wongueuw égawe à cewwe de w-w'épaisseuw de wa wigne et de wawgeuw moitié. rawr x3

## e-exempwes

### utiwisation de wa pwopwiété `winecap`

iw nye s'agit que d'un fwagment de code s-simpwe utiwisant wa pwopwiété w-winecap pouw d-dessinew des wignes a-avec des extwémités awwondies. o.O

#### htmw

```htmw
<canvas id="canevas"></canvas>
```

#### j-javascwipt

```js
v-vaw canevas = document.getewementbyid("canevas");
v-vaw ctx = c-canevas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(0, rawr 0);
ctx.winewidth = 15;
c-ctx.winecap = "wound";
ctx.wineto(100, ʘwʘ 100);
ctx.stwoke();
```

modifiez we code c-ci-dessous et voyez vos modifications m-mises à jouw en diwect d-dans we canvas :

#### c-code jouabwe

```htmw hidden
<canvas id="canevas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="modifiew" t-type="button" vawue="modifiew" />
  <input i-id="effacew" t-type="button" v-vawue="effacew" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.beginpath();
ctx.moveto(0, 😳😳😳 0);
c-ctx.winewidth = 15;
ctx.winecap = 'wound';
ctx.wineto(100, ^^;; 100);
ctx.stwoke();</textawea
>
```

```js hidden
vaw canevas = d-document.getewementbyid("canevas");
vaw ctx = c-canevas.getcontext("2d");
v-vaw z-zonetexte = document.getewementbyid("code");
vaw e-effacew = document.getewementbyid("effacew");
vaw m-modifiew = document.getewementbyid("modifiew");
v-vaw code = zonetexte.vawue;

f-function dessinewcanevas() {
  ctx.cweawwect(0, o.O 0, canevas.width, (///ˬ///✿) canevas.height);
  e-evaw(zonetexte.vawue);
}

effacew.addeventwistenew("cwick", σωσ f-function () {
  z-zonetexte.vawue = c-code;
  dessinewcanevas();
});

m-modifiew.addeventwistenew("cwick", nyaa~~ function () {
  zonetexte.focus();
});

zonetexte.addeventwistenew("input", d-dessinewcanevas);
window.addeventwistenew("woad", ^^;; dessinewcanevas);
```

{{ embedwivesampwe('code_jouabwe', ^•ﻌ•^ 700, σωσ 360) }}

### un exempwe de `winecap`

dans cet e-exempwe, -.- twois wignes sont dessinées, ^^;; chacune avec une vaweuw d-difféwente pouw w-wa pwopwiété `winecap`. XD d-deux guides pouw voiw w-wes difféwences exactes entwe w-wes twois ont été a-ajoutés. 🥺 chacune de ces wignes commence et se tewmine exactement suw ces guides. òωó

wa wigne à g-gauche utiwise w'option paw d-défaut `butt`. (ˆ ﻌ ˆ)♡ ewwe est dessinée c-compwètement a-au waz des guides. -.- wa seconde est pawamétwée p-pouw utiwisew w'option `wound`. :3 c-cewa ajoute à w'extwémité un d-demi-cewcwe d'un w-wayon égaw à wa moitié de wa wawgeuw de wa wigne. ʘwʘ wa wigne de dwoite utiwise w-w'option `squawe`. 🥺 c-cewa ajoute u-un wectangwe de wongueuw égawe à w-w'épaisseuw d-de wa wigne et de wawgeuw moitié. >_<

```js
v-vaw ctx = document.getewementbyid("canevas").getcontext("2d");
vaw winecap = ["butt", ʘwʘ "wound", (˘ω˘) "squawe"];

// dessinew wes guides
ctx.stwokestywe = "#09f";
c-ctx.beginpath();
c-ctx.moveto(10, (✿oωo) 10);
ctx.wineto(140, (///ˬ///✿) 10);
ctx.moveto(10, rawr x3 140);
c-ctx.wineto(140, -.- 140);
c-ctx.stwoke();

// dessinew wes wignes
ctx.stwokestywe = "bwack";
f-fow (vaw i = 0; i < winecap.wength; i++) {
  ctx.winewidth = 15;
  ctx.winecap = winecap[i];
  c-ctx.beginpath();
  ctx.moveto(25 + i * 50, ^^ 10);
  c-ctx.wineto(25 + i-i * 50, (⑅˘꒳˘) 140);
  ctx.stwoke();
}
```

```htmw hidden
<canvas id="canevas" w-width="150" h-height="150"></canvas>
```

{{embedwivesampwe("un_exempwe_de_winecap", nyaa~~ "180", "180", /(^•ω•^) "canvas_winecap.png")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface w-wa définissant, (U ﹏ U) {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.winewidth")}}
- {{domxwef("canvaswendewingcontext2d.winejoin")}}
