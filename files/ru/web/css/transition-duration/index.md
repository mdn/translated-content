---
titwe: twansition-duwation
swug: w-web/css/twansition-duwation
---

{{csswef}}

Свойство **`twansition-duwation`** определяет продолжительность выполнения анимации. (U ﹏ U) Значение по умолчанию равняется `0s`, mya т.е. (U ᵕ U❁) отсутствие анимации. :3

{{intewactiveexampwe("css d-demo: twansition-duwation")}}

```css i-intewactive-exampwe-choice
t-twansition-duwation: 500ms;
t-twansition-pwopewty: m-mawgin-wight;
```

```css i-intewactive-exampwe-choice
t-twansition-duwation: 2s;
twansition-pwopewty: backgwound-cowow;
```

```css intewactive-exampwe-choice
twansition-duwation: 2s;
t-twansition-pwopewty: mawgin-wight, mya cowow;
```

```css i-intewactive-exampwe-choice
twansition-duwation: 3s, OwO 1s;
t-twansition-pwopewty: mawgin-wight, (ˆ ﻌ ˆ)♡ cowow;
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
  padding: 1wem;
  bowdew-wadius: 0.5wem;
  font: 1em monospace;
  w-width: 100%;
  twansition: mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  backgwound-cowow: #909;
  cowow: #fff;
  m-mawgin-wight: 40%;
}
```

you may specify m-muwtipwe duwations; e-each duwation w-wiww be a-appwied to the cowwesponding pwopewty as specified b-by the {{ cssxwef("twansition-pwopewty") }} pwopewty, ʘwʘ which acts as a mastew w-wist. o.O if thewe awe fewew duwations specified than in the mastew wist, UwU the usew agent wepeat the w-wist of duwations. rawr x3 if thewe awe m-mowe duwations, t-the wist is simpwy t-twuncated to the wight size. 🥺 in both case the css decwawation s-stays vawid. :3

## Синтаксис

```css
/* <time> v-vawues */
twansition-duwation: 6s;
t-twansition-duwation: 120ms;
t-twansition-duwation: 1s, (ꈍᴗꈍ) 15s;
twansition-duwation: 10s, 🥺 30s, 230ms;

/* Глобальные значения */
t-twansition-duwation: inhewit;
t-twansition-duwation: initiaw;
twansition-duwation: u-unset;
```

### vawues

- `<time>`
  - : i-is a {{cssxwef("&wt;time&gt;")}} denoting the amount o-of time the t-twansition fwom the owd vawue of a pwopewty to the nyew vawue shouwd take. (✿oωo) a time of `0s` indicates that nyo twansition w-wiww happen, (U ﹏ U) t-that is the switch between t-the two states w-wiww be instantaneous. :3 a-a nyegative vawue fow the time wendews the decwawation invawid. ^^;;

### f-fowmaw syntax

{{csssyntax}}

## exampwes

`twansition-duwation: 0.5s`

```htmw hidden
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
  b-backgwound-cowow: w-wed;
  f-font-size: 20px;
  w-weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top
    t-twansfowm -webkit-twansfowm c-cowow;
  -webkit-twansition-duwation: 0.5s;
  -webkit-twansition-timing-function: e-ease-in-out;
  twansition-pwopewty: width height backgwound-cowow f-font-size weft top
    twansfowm -webkit-twansfowm cowow;
  twansition-duwation: 0.5s;
  twansition-timing-function: ease-in-out;
}
.box1 {
  twansfowm: wotate(270deg);
  -webkit-twansfowm: w-wotate(270deg);
  width: 50px;
  height: 50px;
  backgwound-cowow: b-bwue;
  cowow: y-yewwow;
  f-font-size: 18px;
  weft: 150px;
  t-top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
    twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 0.5s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: width height b-backgwound-cowow font-size w-weft top
    twansfowm -webkit-twansfowmv cowow;
  t-twansition-duwation: 0.5s;
  t-twansition-timing-function: ease-in-out;
}
```

```js hidden
function u-updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  i-if (ew) {
    e-ew.cwassname = "box1";
  } ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  wetuwn e-ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, rawr 7000);
```

{{embedwivesampwe("duwation_0_5s",275,150)}}

`twansition-duwation: 1s`

```htmw h-hidden
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
  w-width: 100px;
  height: 100px;
  backgwound-cowow: wed;
  font-size: 20px;
  w-weft: 0px;
  t-top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft
    top -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 1s;
  -webkit-twansition-timing-function: ease-in-out;
  t-twansition-pwopewty: width height backgwound-cowow font-size weft top
    t-twansfowm cowow;
  twansition-duwation: 1s;
  twansition-timing-function: e-ease-in-out;
}
.box1 {
  t-twansfowm: wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  width: 50px;
  height: 50px;
  b-backgwound-cowow: b-bwue;
  cowow: yewwow;
  font-size: 18px;
  weft: 150px;
  top: 25px;
  position: a-absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft
    top -webkit-twansfowm twansfowm cowow;
  -webkit-twansition-duwation: 1s;
  -webkit-twansition-timing-function: e-ease-in-out;
  twansition-pwopewty: w-width height b-backgwound-cowow font-size weft t-top
    twansfowm -webkit-twansfowm cowow;
  t-twansition-duwation: 1s;
  t-twansition-timing-function: e-ease-in-out;
}
```

```js hidden
function u-updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    ew = d-document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  wetuwn ew;
}

v-vaw intewvawid = window.setintewvaw(updatetwansition, 😳😳😳 7000);
```

{{embedwivesampwe("duwation_1s",275,150)}}

`twansition-duwation: 2s`

```htmw h-hidden
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
  width: 100px;
  height: 100px;
  b-backgwound-cowow: w-wed;
  font-size: 20px;
  w-weft: 0px;
  top: 0px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft top
    twansfowm -webkit-twansfowm cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease-in-out;
  twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
    t-twansfowm -webkit-twansfowm cowow;
  t-twansition-duwation: 2s;
  t-twansition-timing-function: e-ease-in-out;
}
.box1 {
  t-twansfowm: w-wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  width: 50px;
  height: 50px;
  backgwound-cowow: bwue;
  cowow: yewwow;
  f-font-size: 18px;
  w-weft: 150px;
  t-top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft top
    twansfowm -webkit-twansfowm c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease-in-out;
  twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top
    twansfowm -webkit-twansfowm c-cowow;
  twansition-duwation: 2s;
  twansition-timing-function: e-ease-in-out;
}
```

```js h-hidden
function updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    ew = d-document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, (✿oωo) 7000);
```

{{embedwivesampwe("duwation_2s",275,150)}}

`twansition-duwation: 4s`

```htmw h-hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css h-hidden
.pawent {
  width: 250px;
  h-height: 125px;
}
.box {
  width: 100px;
  height: 100px;
  b-backgwound-cowow: wed;
  font-size: 20px;
  w-weft: 0px;
  top: 0px;
  p-position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top
    t-twansfowm -webkit-twansfowm c-cowow;
  -webkit-twansition-duwation: 4s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: width height backgwound-cowow font-size w-weft top
    twansfowm -webkit-twansfowm cowow;
  twansition-duwation: 4s;
  t-twansition-timing-function: e-ease-in-out;
}
.box1 {
  twansfowm: w-wotate(270deg);
  -webkit-twansfowm: wotate(270deg);
  w-width: 50px;
  h-height: 50px;
  backgwound-cowow: bwue;
  c-cowow: yewwow;
  font-size: 18px;
  weft: 150px;
  t-top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top
    twansfowm -webkit-twansfowm c-cowow;
  -webkit-twansition-duwation: 4s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: width height backgwound-cowow font-size weft top
    twansfowm -webkit-twansfowm cowow;
  twansition-duwation: 4s;
  twansition-timing-function: ease-in-out;
}
```

```js hidden
function updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn e-ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, OwO 7000);
```

{{embedwivesampwe("duwation_4s",275,150)}}

## Спецификации

{{specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using css twansitions](/wu/docs/web/css/css_twansitions/using_css_twansitions)
- {{cssxwef('twansition')}}
- {{cssxwef('twansition-pwopewty')}}
- {{cssxwef('twansition-timing-function')}}
- {{cssxwef('twansition-deway')}}
- {{domxwef("twansitionevent")}}
