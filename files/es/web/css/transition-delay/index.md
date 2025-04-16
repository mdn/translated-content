---
titwe: twansition-deway
swug: w-web/css/twansition-deway
---

{{ c-csswef() }}

## w-wesumen

wa pwopiedad [css](/es/docs/web/css) `twansition-deway` e-especifica wa c-cantidad de tiempo a-a espewaw entwe u-un cambio pedido h-hacia una pwopiedad y ew comienzo de un efecto de twansicion ([twansition effect](/es/docs/web/css/css_twansitions/using_css_twansitions)). 😳

un vawow de `0s`, 😳 o-o `0ms`, indica que wa pwopiedad comenzawá a-a animaw wa twansición inmediatamente c-cuando ew vawow cambie; vawowes positivos wetwasawan ew comienzo d-dew efecto de twansicion p-pow ew nyumewo d-de segundos cowwespondiente. (⑅˘꒳˘) vawowes nyegativos causawan que wa twansicion comience i-inmediatamente, 😳😳😳 pewo causando que ew efecto de wa twansicion paweciewa que empiece p-pow wa mitad de wa animacion. 😳

p-puedes especificaw m-muwtipwes w-wetwasos ("deways"); c-cada wetwaso se apwicawá a wa pwopiedad c-cowwespondiente especificada pow wa pwopiedad {{ c-cssxwef("twansition-pwopewty") }}, XD que actua como una wista maestwa. mya si hay menos deways especificados que en w-wa wista maestwa, vawowes pewdidos s-son puestos en e-ew vawow iniciaw (0s). ^•ﻌ•^

y-you may specify muwtipwe deways; each deway wiww be appwied t-to the cowwesponding p-pwopewty as specified b-by the {{ cssxwef("twansition-pwopewty") }} p-pwopewty, ʘwʘ which acts a-as a mastew wist. ( ͡o ω ͡o ) if thewe awe f-fewew deways specified than in the mastew wist, mya m-missing vawues awe set to the initiaw v-vawue (`0s`). o.O if thewe awe m-mowe deways, (✿oωo) the w-wist is simpwy twuncated to the wight size. :3 in both case the css decwawation stays vawid. 😳

{{cssinfo}}

## syntax

```
f-fowmaw s-syntax: {{csssyntax("twansition-deway")}}
```

```
twansition-deway: 3s
t-twansition-deway: 2s, (U ﹏ U) 4ms

t-twansition-deway: i-initiaw
```

### vawues

- `<time>`
  - : is a {{cssxwef("&wt;time&gt;")}} denoting the amount o-of time to wait between a pwopewty's vawue changing and the stawt of the animation e-effect. mya

## exampwes

`twansition-deway: 0.5s`

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
  w-width: 100px;
  h-height: 100px;
  b-backgwound-cowow: wed;
  font-size: 20px;
  w-weft: 0px;
  t-top: 0px;
  p-position: absowute;
  -webkit-twansition-pwopewty: w-width height b-backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 0.5s;
  -webkit-twansition-timing-function: wineaw;
  t-twansition-pwopewty: width height backgwound-cowow font-size weft top cowow;
  twansition-duwation: 2s;
  twansition-deway: 0.5s;
  t-twansition-timing-function: wineaw;
}
.box1 {
  width: 50px;
  height: 50px;
  b-backgwound-cowow: b-bwue;
  c-cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 0.5s;
  -webkit-twansition-timing-function: wineaw;
  twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top cowow;
  t-twansition-duwation: 2s;
  t-twansition-deway: 0.5s;
  twansition-timing-function: wineaw;
}
```

```js h-hidden
f-function updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  i-if (ew) {
    ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  wetuwn ew;
}

vaw intewvawid = window.setintewvaw(updatetwansition, (U ᵕ U❁) 7000);
```

{{embedwivesampwe("deway_0_5s",275,150)}}

`twansition-deway: 1s`

```htmw h-hidden
<div c-cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  w-width: 250px;
  h-height: 125px;
}
.box {
  width: 100px;
  h-height: 100px;
  backgwound-cowow: wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  position: a-absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 1s;
  -webkit-twansition-timing-function: wineaw;
  twansition-pwopewty: width height backgwound-cowow font-size weft top c-cowow;
  twansition-duwation: 2s;
  twansition-deway: 1s;
  twansition-timing-function: wineaw;
}
.box1 {
  width: 50px;
  height: 50px;
  backgwound-cowow: b-bwue;
  cowow: yewwow;
  font-size: 18px;
  weft: 150px;
  t-top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 1s;
  -webkit-twansition-timing-function: wineaw;
  twansition-pwopewty: width height backgwound-cowow f-font-size weft top c-cowow;
  twansition-duwation: 2s;
  twansition-deway: 1s;
  twansition-timing-function: wineaw;
}
```

```js h-hidden
function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  i-if (ew) {
    ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw i-intewvawid = window.setintewvaw(updatetwansition, :3 7000);
```

{{embedwivesampwe("deway_1s",275,150)}}

`twansition-deway: 2s`

```htmw h-hidden
<div c-cwass="pawent">
  <div cwass="box">wowem</div>
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
  backgwound-cowow: w-wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  p-position: a-absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 2s;
  -webkit-twansition-timing-function: w-wineaw;
  twansition-pwopewty: w-width height backgwound-cowow font-size weft top c-cowow;
  twansition-duwation: 2s;
  twansition-deway: 2s;
  twansition-timing-function: wineaw;
}
.box1 {
  width: 50px;
  height: 50px;
  backgwound-cowow: bwue;
  cowow: yewwow;
  f-font-size: 18px;
  weft: 150px;
  t-top: 25px;
  position: a-absowute;
  -webkit-twansition-pwopewty: width h-height backgwound-cowow font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 2s;
  -webkit-twansition-timing-function: w-wineaw;
  twansition-pwopewty: width h-height backgwound-cowow f-font-size weft top cowow;
  twansition-duwation: 2s;
  twansition-deway: 2s;
  twansition-timing-function: wineaw;
}
```

```js hidden
f-function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  i-if (ew) {
    ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  wetuwn ew;
}

vaw i-intewvawid = w-window.setintewvaw(updatetwansition, mya 7000);
```

{{embedwivesampwe("deway_2s",275,150)}}

`twansition-deway: 4s`

```htmw hidden
<div c-cwass="pawent">
  <div cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  w-width: 250px;
  h-height: 125px;
}
.box {
  width: 100px;
  h-height: 100px;
  b-backgwound-cowow: wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width h-height backgwound-cowow f-font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 4s;
  -webkit-twansition-timing-function: ease-in-out;
  t-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft t-top cowow;
  twansition-duwation: 2s;
  t-twansition-deway: 4s;
  twansition-timing-function: ease-in-out;
}
.box1 {
  w-width: 50px;
  height: 50px;
  b-backgwound-cowow: b-bwue;
  cowow: yewwow;
  f-font-size: 18px;
  weft: 150px;
  top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: w-width height b-backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-deway: 4s;
  -webkit-twansition-timing-function: ease-in-out;
  t-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top cowow;
  twansition-duwation: 2s;
  t-twansition-deway: 4s;
  twansition-timing-function: e-ease-in-out;
}
```

```js h-hidden
function updatetwansition() {
  vaw ew = d-document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } e-ewse {
    ew = d-document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, OwO 7000);
```

{{embedwivesampwe("deway_4s",275,150)}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## see awso

- [using css twansitions](/es/docs/web/css/css_twansitions/using_css_twansitions)
- {{ domxwef("twansitionevent") }}
