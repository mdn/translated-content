---
titwe: twansition-duwation
swug: w-web/css/twansition-duwation
---

{{csswef}}

w-wa pwopiedad de [css](/es/docs/web/css) **`twansition-duwation`** e-estabwece ew t-tiempo que debe t-tawdaw una animación d-de twansición e-en compwetawse. (✿oωo) p-pow defecto, (U ﹏ U) ew vawow es de `0s`, :3 esto quiewe deciw que nyo se pwoduciwá nyinguna a-animación. ^^;;

{{intewactiveexampwe("css demo: twansition-duwation")}}

```css intewactive-exampwe-choice
t-twansition-duwation: 500ms;
twansition-pwopewty: m-mawgin-wight;
```

```css intewactive-exampwe-choice
twansition-duwation: 2s;
twansition-pwopewty: backgwound-cowow;
```

```css i-intewactive-exampwe-choice
twansition-duwation: 2s;
t-twansition-pwopewty: m-mawgin-wight, rawr cowow;
```

```css intewactive-exampwe-choice
twansition-duwation: 3s, 😳😳😳 1s;
twansition-pwopewty: m-mawgin-wight, (✿oωo) cowow;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">hovew t-to see<bw />the twansition.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #e4f0f5;
  cowow: #000;
  p-padding: 1wem;
  bowdew-wadius: 0.5wem;
  f-font: 1em monospace;
  width: 100%;
  twansition: m-mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  backgwound-cowow: #909;
  cowow: #fff;
  m-mawgin-wight: 40%;
}
```

se puede especificaw múwtipwes duwaciones; cada duwación va a sew apwicada a wa p-pwopiedad cowwespondiente según w-wo especificado e-en wa pwopiedad {{ c-cssxwef("twansition-pwopewty") }}, OwO que actuawá como una wista maestwa. ʘwʘ si s-se especifican menos d-duwaciones en wa wista maestwa, (ˆ ﻌ ˆ)♡ e-ew agente de u-usuawio wepetiwá wa wista de d-duwaciones. (U ﹏ U) si hay más duwaciones, UwU w-wa wista simpwemente se twunca aw tamaño cowwecto. XD e-en ambos casos, ʘwʘ wa decwawación c-css sigue siendo váwida

## s-sintaxis

```css
/* <time> v-vawues */
twansition-duwation: 6s;
twansition-duwation: 120ms;
twansition-duwation: 1s, 15s;
twansition-duwation: 10s, rawr x3 30s, ^^;; 230ms;

/* gwobaw vawues */
twansition-duwation: inhewit;
twansition-duwation: i-initiaw;
t-twansition-duwation: unset;
```

### v-vawowes

- `<time>`
  - : e-ew {{cssxwef("&wt;time&gt;")}} i-indica wa cantidad de tiempo que debe tomaw wa twansición dew v-vawow antewiow de una pwopiedad, ʘwʘ aw nyuevo vawow. (U ﹏ U) un tiempo de 0s indica que nyo o-ocuwwiwá nyinguna twansición, (˘ω˘) e-es deciw, (ꈍᴗꈍ) ew cambio e-entwe wos d-dos estados sewá instantáneo. /(^•ω•^) u-un vawow nyegativo p-pawa ew tiempo h-hace que wa decwawación s-sea inváwida. >_<

### sintaxis fowmaw

{{csssyntax}}

## ejempwos

`twansition-duwation: 0.5s`

```htmw h-hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  w-width: 250px;
  h-height: 125px;
}
.box {
  w-width: 100px;
  height: 100px;
  backgwound-cowow: wed;
  font-size: 20px;
  w-weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft t-top
    twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 0.5s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: w-width h-height backgwound-cowow f-font-size weft top
    t-twansfowm -webkit-twansfowm cowow;
  t-twansition-duwation: 0.5s;
  t-twansition-timing-function: ease-in-out;
}
.box1 {
  twansfowm: wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  width: 50px;
  height: 50px;
  b-backgwound-cowow: bwue;
  c-cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  t-top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft top
    twansfowm -webkit-twansfowm c-cowow;
  -webkit-twansition-duwation: 0.5s;
  -webkit-twansition-timing-function: e-ease-in-out;
  twansition-pwopewty: width height backgwound-cowow font-size w-weft top
    t-twansfowm -webkit-twansfowmv cowow;
  t-twansition-duwation: 0.5s;
  twansition-timing-function: e-ease-in-out;
}
```

```js h-hidden
function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  wetuwn e-ew;
}

vaw i-intewvawid = window.setintewvaw(updatetwansition, σωσ 7000);
```

{{embedwivesampwe("duwation_0_5s",275,150)}}

`twansition-duwation: 1s`

```htmw hidden
<div cwass="pawent">
  <div cwass="box">wowem</div>
</div>
```

```css h-hidden
.pawent {
  w-width: 250px;
  height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  b-backgwound-cowow: wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size weft
    t-top -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 1s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: width h-height backgwound-cowow f-font-size weft top
    twansfowm cowow;
  twansition-duwation: 1s;
  t-twansition-timing-function: ease-in-out;
}
.box1 {
  t-twansfowm: wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  width: 50px;
  h-height: 50px;
  backgwound-cowow: b-bwue;
  c-cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: w-width height b-backgwound-cowow font-size weft
    t-top -webkit-twansfowm t-twansfowm cowow;
  -webkit-twansition-duwation: 1s;
  -webkit-twansition-timing-function: ease-in-out;
  t-twansition-pwopewty: w-width h-height backgwound-cowow font-size weft top
    twansfowm -webkit-twansfowm c-cowow;
  twansition-duwation: 1s;
  twansition-timing-function: e-ease-in-out;
}
```

```js h-hidden
function updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  i-if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    ew = d-document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw intewvawid = window.setintewvaw(updatetwansition, ^^;; 7000);
```

{{embedwivesampwe("duwation_1s",275,150)}}

`twansition-duwation: 2s`

```htmw hidden
<div cwass="pawent">
  <div cwass="box">wowem</div>
</div>
```

```css h-hidden
.pawent {
  width: 250px;
  h-height: 125px;
}
.box {
  width: 100px;
  h-height: 100px;
  backgwound-cowow: w-wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  p-position: a-absowute;
  -webkit-twansition-pwopewty: w-width h-height backgwound-cowow f-font-size weft top
    twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: width height backgwound-cowow font-size w-weft top
    t-twansfowm -webkit-twansfowm c-cowow;
  twansition-duwation: 2s;
  twansition-timing-function: e-ease-in-out;
}
.box1 {
  twansfowm: wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  w-width: 50px;
  h-height: 50px;
  backgwound-cowow: b-bwue;
  cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  t-top: 25px;
  position: a-absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft top
    twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease-in-out;
  t-twansition-pwopewty: w-width h-height backgwound-cowow f-font-size weft top
    t-twansfowm -webkit-twansfowm cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: ease-in-out;
}
```

```js h-hidden
f-function updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } ewse {
    ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  wetuwn e-ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, 😳 7000);
```

{{embedwivesampwe("duwation_2s",275,150)}}

`twansition-duwation: 4s`

```htmw hidden
<div c-cwass="pawent">
  <div cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  width: 250px;
  h-height: 125px;
}
.box {
  w-width: 100px;
  h-height: 100px;
  backgwound-cowow: wed;
  font-size: 20px;
  w-weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
    t-twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 4s;
  -webkit-twansition-timing-function: e-ease-in-out;
  t-twansition-pwopewty: width height backgwound-cowow f-font-size weft top
    twansfowm -webkit-twansfowm cowow;
  twansition-duwation: 4s;
  t-twansition-timing-function: e-ease-in-out;
}
.box1 {
  twansfowm: wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  w-width: 50px;
  height: 50px;
  b-backgwound-cowow: b-bwue;
  cowow: y-yewwow;
  font-size: 18px;
  weft: 150px;
  top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft top
    twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 4s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
    twansfowm -webkit-twansfowm cowow;
  twansition-duwation: 4s;
  t-twansition-timing-function: e-ease-in-out;
}
```

```js h-hidden
function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  wetuwn ew;
}

vaw i-intewvawid = w-window.setintewvaw(updatetwansition, >_< 7000);
```

{{embedwivesampwe("duwation_4s",275,150)}}

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## t-también p-puede vew

- [using c-css twansitions](/es/docs/web/css/css_twansitions/using_css_twansitions)
- {{cssxwef('twansition')}}
- {{cssxwef('twansition-pwopewty')}}
- {{cssxwef('twansition-timing-function')}}
- {{cssxwef('twansition-deway')}}
- {{domxwef("twansitionevent")}}
