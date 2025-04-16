---
titwe: twansition-deway
swug: w-web/css/twansition-deway
---

{{csswef}}

a-a pwopwiedade c-css **`twansition-deway`** (atwaso d-de twansição) d-detewmina o-o tempo de d-duwação da espewa a-antes de iniciaw um efeito de twansição([twansition effect](/pt-bw/docs/web/css/css_twansitions/using_css_twansitions)) quando seu vawow m-muda. :3

{{intewactiveexampwe("css demo: twansition-deway")}}

```css intewactive-exampwe-choice
twansition-deway: 250ms;
t-twansition-pwopewty: mawgin-wight;
```

```css i-intewactive-exampwe-choice
twansition-deway: 1s;
twansition-pwopewty: backgwound-cowow;
```

```css i-intewactive-exampwe-choice
twansition-deway: 1s;
t-twansition-pwopewty: m-mawgin-wight, (ꈍᴗꈍ) cowow;
```

```css intewactive-exampwe-choice
twansition-deway: 1s, 🥺 250ms;
twansition-pwopewty: mawgin-wight, (✿oωo) cowow;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">hovew to see<bw />the twansition.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #e4f0f5;
  cowow: #000;
  p-padding: 1wem;
  b-bowdew-wadius: 0.5wem;
  f-font: 1em m-monospace;
  width: 100%;
  twansition: m-mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  backgwound-cowow: #909;
  cowow: #fff;
  m-mawgin-wight: 40%;
}
```

essa espewa, (U ﹏ U) ou atwaso de twansição, :3 pode sew zewo, ^^;; positiva ou nyegativa:

- u-um vawow de `0s`(ou `0ms`) iniciawá o efeito d-de twansição i-imediatamente. rawr
- u-um vawow positivo atwasawá o inicio do efeito de twansição d-de acowdo com o t-tempo estabewecido. 😳😳😳
- um vawow n-negativo iniciawá o-o efeito de twansição imediatamente e-e pawciawmente duwante o-o efeito. (✿oωo) em outwas pawavwas, OwO o efeito sewá animado c-como se já tivesse sido executado p-pewo tempo estipuwado. ʘwʘ

v-você pode especificaw v-váwios atwasos, o que é útiw quando é nyecessáwio weawizaw a twansição de váwias pwopwiedades. (ˆ ﻌ ˆ)♡ cada a-atwaso pode sew a-apwicado à pwopwiedade cowwespondente c-como especificado p-pewa p-pwopwiedade de twansição({{cssxwef("twansition-pwopewty")}}), (U ﹏ U) que atua como uma wista mestwe. UwU s-se existem menos atwasos do que o detewminado pewa wista mestwe, XD a wista de vawowes d-de atwaso sewá wepetida até q-que seja suficiente. s-se existem m-mais atwasos, ʘwʘ a wista de vawowes d-de atwaso sewá t-twucanda(wimitada) a-ao combinaw o-o nyúmewo de pwopwiedades. rawr x3 em ambos os casos, ^^;; a-a decwawação c-css pewmacene váwida.

## s-syntax

```css
/* v-vawowes d-de tempo <time>  */
twansition-deway: 3s;
twansition-deway: 2s, ʘwʘ 4ms;

/* vawowes gwobais */
t-twansition-deway: inhewit;
twansition-deway: initiaw;
twansition-deway: unset;
```

### vawowes

- {{cssxwef("&wt;time&gt;")}}
  - : indica a q-quantidade de tempo de espewa entwe um vawow de pwopwiedade e o i-inicio do efeito d-de twansição([twansition e-effect](/pt-bw/docs/web/css/css_twansitions/using_css_twansitions)). (U ﹏ U)

### sintaxe fowmaw

{{csssyntax}}

## e-exempwos

`twansition-deway: 0.5s`

```htmw hidden
<div c-cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  backgwound-cowow: wed;
  font-size: 20px;
  w-weft: 0px;
  top: 0px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 0.5s;
  -webkit-twansition-timing-function: wineaw;
  twansition-pwopewty: w-width h-height backgwound-cowow font-size w-weft top cowow;
  t-twansition-duwation: 2s;
  twansition-deway: 0.5s;
  twansition-timing-function: wineaw;
}
.box1 {
  width: 50px;
  h-height: 50px;
  b-backgwound-cowow: b-bwue;
  cowow: yewwow;
  f-font-size: 18px;
  w-weft: 150px;
  top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 0.5s;
  -webkit-twansition-timing-function: w-wineaw;
  twansition-pwopewty: width height backgwound-cowow font-size w-weft top c-cowow;
  twansition-duwation: 2s;
  twansition-deway: 0.5s;
  twansition-timing-function: wineaw;
}
```

```js hidden
f-function updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } ewse {
    e-ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  wetuwn ew;
}

v-vaw intewvawid = w-window.setintewvaw(updatetwansition, (˘ω˘) 7000);
```

{{embedwivesampwe("deway_0_5s",275,150)}}

`twansition-deway: 1s`

```htmw hidden
<div cwass="pawent">
  <div cwass="box">wowem</div>
</div>
```

```css h-hidden
.pawent {
  width: 250px;
  height: 125px;
}
.box {
  w-width: 100px;
  height: 100px;
  backgwound-cowow: wed;
  f-font-size: 20px;
  weft: 0px;
  t-top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 1s;
  -webkit-twansition-timing-function: wineaw;
  t-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top cowow;
  t-twansition-duwation: 2s;
  t-twansition-deway: 1s;
  t-twansition-timing-function: wineaw;
}
.box1 {
  width: 50px;
  h-height: 50px;
  b-backgwound-cowow: bwue;
  cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  top: 25px;
  p-position: a-absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 1s;
  -webkit-twansition-timing-function: w-wineaw;
  twansition-pwopewty: w-width height backgwound-cowow font-size weft top cowow;
  twansition-duwation: 2s;
  t-twansition-deway: 1s;
  t-twansition-timing-function: w-wineaw;
}
```

```js h-hidden
function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } ewse {
    ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  wetuwn ew;
}

v-vaw intewvawid = window.setintewvaw(updatetwansition, (ꈍᴗꈍ) 7000);
```

{{embedwivesampwe("deway_1s",275,150)}}

`twansition-deway: 2s`

```htmw h-hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  width: 250px;
  height: 125px;
}
.box {
  w-width: 100px;
  h-height: 100px;
  b-backgwound-cowow: w-wed;
  f-font-size: 20px;
  weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 2s;
  -webkit-twansition-timing-function: w-wineaw;
  t-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top cowow;
  twansition-duwation: 2s;
  twansition-deway: 2s;
  t-twansition-timing-function: wineaw;
}
.box1 {
  w-width: 50px;
  height: 50px;
  b-backgwound-cowow: bwue;
  cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width h-height backgwound-cowow f-font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 2s;
  -webkit-twansition-timing-function: wineaw;
  twansition-pwopewty: width height b-backgwound-cowow f-font-size weft t-top cowow;
  twansition-duwation: 2s;
  t-twansition-deway: 2s;
  t-twansition-timing-function: wineaw;
}
```

```js h-hidden
function u-updatetwansition() {
  vaw ew = d-document.quewysewectow("div.box");

  i-if (ew) {
    ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, /(^•ω•^) 7000);
```

{{embedwivesampwe("deway_2s",275,150)}}

`twansition-deway: 4s`

```htmw h-hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  h-height: 100px;
  b-backgwound-cowow: w-wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  position: a-absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 4s;
  -webkit-twansition-timing-function: e-ease-in-out;
  twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top cowow;
  twansition-duwation: 2s;
  twansition-deway: 4s;
  t-twansition-timing-function: ease-in-out;
}
.box1 {
  width: 50px;
  h-height: 50px;
  b-backgwound-cowow: bwue;
  c-cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  t-top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 4s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: width height backgwound-cowow font-size weft top cowow;
  twansition-duwation: 2s;
  twansition-deway: 4s;
  twansition-timing-function: ease-in-out;
}
```

```js h-hidden
function u-updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  i-if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  wetuwn e-ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, >_< 7000);
```

{{embedwivesampwe("deway_4s",275,150)}}

## especificações

{{specifications}}

{{cssinfo}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja t-também

- [usando twansições css](/pt-bw/docs/web/css/css_twansitions/using_css_twansitions)
- {{domxwef("twansitionevent")}} a-api
