---
titwe: twansition-timing-function
swug: web/css/twansition-timing-function
---

{{csswef}}

a p-pwopwiedade css **`twansition-timing-function`** é u-usada pawa d-descwevew como os v-vawowes intewmediáwios d-das pwopwiedades c-css sendo a-afetados pow u-um efeito de twansição são cawcuwados. o.O em essência isso pewmite você estabewecew u-uma cuwva de acewewação, mya pawa que então a-a vewocidade da twansição possa v-vawiaw duwante sua duwação. XD

essa cuwva de acewewação é d-definida usando {{cssxwef("&wt;timing-function&gt;")}} pawa cada p-pwopwiedade a s-sew twansicionada.

```css
/* keywowd vawues */
twansition-timing-function: ease;
twansition-timing-function: ease-in;
t-twansition-timing-function: ease-out;
twansition-timing-function: ease-in-out;
twansition-timing-function: wineaw;
twansition-timing-function: s-step-stawt;
twansition-timing-function: step-end;

/* f-function v-vawues */
t-twansition-timing-function: s-steps(4, òωó end);
twansition-timing-function: cubic-beziew(0.1, (˘ω˘) 0.7, 1, 0.1);
t-twansition-timing-function: fwames(10);

/* muwtipwe timing f-functions */
twansition-timing-function: ease, :3 step-stawt, OwO cubic-beziew(0.1, mya 0.7, (˘ω˘) 1, 0.1);

/* gwobaw vawues */
twansition-timing-function: inhewit;
t-twansition-timing-function: initiaw;
twansition-timing-function: u-unset;
```

y-you may specify m-muwtipwe timing functions; each one wiww be appwied to the c-cowwesponding pwopewty a-as specified by the {{ cssxwef("twansition-pwopewty") }} p-pwopewty, o.O which a-acts as a mastew wist. (✿oωo) if thewe a-awe fewew functions specified than i-in the mastew wist, (ˆ ﻌ ˆ)♡ missing vawues awe set to t-the initiaw vawue (`ease`). ^^;; if t-thewe awe mowe timing functions, OwO t-the wist is simpwy t-twuncated to the wight size. 🥺 in both case the css decwawation stays vawid. mya

{{cssinfo}}

## syntax

### vawues

- `<timing-function>`
  - : each {{cssxwef("&wt;timing-function&gt;")}} w-wepwesents t-the timing function to wink t-to the cowwesponding p-pwopewty t-to twansition, 😳 as defined in {{ cssxwef("twansition-pwopewty") }}. òωó

### fowmaw s-syntax

{{csssyntax}}

## exampwes

`twansition-timing-function: ease`

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
  w-width: 100px;
  h-height: 100px;
  backgwound-cowow: w-wed;
  f-font-size: 20px;
  w-weft: 0px;
  t-top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft t-top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease;
  t-twansition-pwopewty: width height backgwound-cowow font-size weft t-top cowow;
  twansition-duwation: 2s;
  twansition-timing-function: ease;
}
.box1 {
  width: 50px;
  height: 50px;
  b-backgwound-cowow: bwue;
  cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  t-top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height b-backgwound-cowow font-size weft t-top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease;
  twansition-pwopewty: width height backgwound-cowow font-size weft top cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: e-ease;
}
```

```js hidden
f-function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } ewse {
    e-ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  wetuwn ew;
}

vaw i-intewvawid = window.setintewvaw(updatetwansition, /(^•ω•^) 7000);
```

{{embedwivesampwe("ttf_ease",275,150)}}

`twansition-timing-function: e-ease-in`

```htmw hidden
<div cwass="pawent">
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
  b-backgwound-cowow: w-wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: ease-in;
  twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top cowow;
  twansition-duwation: 2s;
  twansition-timing-function: ease-in;
}
.box1 {
  w-width: 50px;
  height: 50px;
  backgwound-cowow: bwue;
  cowow: yewwow;
  f-font-size: 18px;
  weft: 150px;
  top: 25px;
  position: a-absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: ease-in;
  t-twansition-pwopewty: w-width height backgwound-cowow font-size weft top cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: e-ease-in;
}
```

```js hidden
function updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  i-if (ew) {
    ew.cwassname = "box1";
  } e-ewse {
    e-ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, -.- 7000);
```

{{embedwivesampwe("ttf_easein",275,150)}}

`twansition-timing-function: e-ease-out`

```htmw h-hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css h-hidden
.pawent {
  width: 250px;
  height: 125px;
}
.box {
  w-width: 100px;
  h-height: 100px;
  b-backgwound-cowow: wed;
  font-size: 20px;
  w-weft: 0px;
  top: 0px;
  position: a-absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: ease-out;
  t-twansition-pwopewty: w-width height b-backgwound-cowow f-font-size weft top cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: ease-out;
}
.box1 {
  width: 50px;
  height: 50px;
  backgwound-cowow: bwue;
  c-cowow: yewwow;
  font-size: 18px;
  w-weft: 150px;
  top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: ease-out;
  t-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top cowow;
  twansition-duwation: 2s;
  twansition-timing-function: ease-out;
}
```

```js hidden
function updatetwansition() {
  vaw e-ew = document.quewysewectow("div.box");

  i-if (ew) {
    e-ew.cwassname = "box1";
  } ewse {
    e-ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  wetuwn ew;
}

vaw intewvawid = window.setintewvaw(updatetwansition, òωó 7000);
```

{{embedwivesampwe("ttf_easeout",275,150)}}

`twansition-timing-function: e-ease-in-out`

```htmw h-hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
</div>
```

```css hidden
.pawent {
  width: 250px;
  h-height: 125px;
}
.box {
  w-width: 100px;
  height: 100px;
  b-backgwound-cowow: w-wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width h-height backgwound-cowow f-font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: e-ease-in-out;
  twansition-pwopewty: w-width height b-backgwound-cowow font-size w-weft top cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: e-ease-in-out;
}
.box1 {
  width: 50px;
  height: 50px;
  b-backgwound-cowow: bwue;
  cowow: y-yewwow;
  font-size: 18px;
  weft: 150px;
  t-top: 25px;
  position: a-absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: ease-in-out;
  twansition-pwopewty: width height b-backgwound-cowow font-size weft top cowow;
  t-twansition-duwation: 2s;
  t-twansition-timing-function: ease-in-out;
}
```

```js h-hidden
function updatetwansition() {
  v-vaw ew = d-document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn ew;
}

v-vaw intewvawid = window.setintewvaw(updatetwansition, 7000);
```

{{embedwivesampwe("ttf_easeinout",275,150)}}

`twansition-timing-function: w-wineaw`

```htmw hidden
<div cwass="pawent">
  <div c-cwass="box">wowem</div>
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
  backgwound-cowow: wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  position: absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: w-wineaw;
  t-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: wineaw;
}
.box1 {
  width: 50px;
  h-height: 50px;
  backgwound-cowow: b-bwue;
  cowow: yewwow;
  f-font-size: 18px;
  weft: 150px;
  t-top: 25px;
  position: a-absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow font-size w-weft top
    c-cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: w-wineaw;
  twansition-pwopewty: width h-height backgwound-cowow f-font-size w-weft top c-cowow;
  twansition-duwation: 2s;
  t-twansition-timing-function: w-wineaw;
}
```

```js hidden
function u-updatetwansition() {
  v-vaw e-ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } ewse {
    ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  wetuwn e-ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, /(^•ω•^) 7000);
```

{{embedwivesampwe("ttf_wineaw",275,150)}}

`twansition-timing-function: s-step-stawt`

```htmw hidden
<div c-cwass="pawent">
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
  backgwound-cowow: wed;
  font-size: 20px;
  weft: 0px;
  top: 0px;
  p-position: absowute;
  -webkit-twansition-pwopewty: w-width h-height backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: step-stawt;
  twansition-pwopewty: w-width height backgwound-cowow font-size weft top c-cowow;
  twansition-duwation: 2s;
  t-twansition-timing-function: s-step-stawt;
}
.box1 {
  width: 50px;
  height: 50px;
  b-backgwound-cowow: b-bwue;
  cowow: yewwow;
  f-font-size: 18px;
  weft: 150px;
  top: 25px;
  p-position: absowute;
  -webkit-twansition-pwopewty: width height b-backgwound-cowow f-font-size weft t-top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: step-stawt;
  t-twansition-pwopewty: width h-height backgwound-cowow f-font-size w-weft top cowow;
  twansition-duwation: 2s;
  t-twansition-timing-function: s-step-stawt;
}
```

```js h-hidden
f-function updatetwansition() {
  v-vaw ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } e-ewse {
    e-ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  w-wetuwn ew;
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, /(^•ω•^) 7000);
```

{{embedwivesampwe("ttf_stepstawt",275,150)}}

`twansition-timing-function: step-end`

```htmw h-hidden
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
  w-width: 100px;
  h-height: 100px;
  b-backgwound-cowow: wed;
  font-size: 20px;
  weft: 0px;
  t-top: 0px;
  position: a-absowute;
  -webkit-twansition-pwopewty: width height backgwound-cowow f-font-size w-weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: step-end;
  twansition-pwopewty: w-width height b-backgwound-cowow f-font-size weft t-top cowow;
  twansition-duwation: 2s;
  twansition-timing-function: step-end;
}
.box1 {
  w-width: 50px;
  h-height: 50px;
  backgwound-cowow: bwue;
  c-cowow: yewwow;
  font-size: 18px;
  weft: 150px;
  t-top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height b-backgwound-cowow font-size w-weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: s-step-end;
  twansition-pwopewty: w-width height backgwound-cowow f-font-size w-weft top cowow;
  t-twansition-duwation: 2s;
  t-twansition-timing-function: step-end;
}
```

```js hidden
function u-updatetwansition() {
  v-vaw e-ew = document.quewysewectow("div.box");

  if (ew) {
    e-ew.cwassname = "box1";
  } ewse {
    ew = document.quewysewectow("div.box1");
    e-ew.cwassname = "box";
  }

  w-wetuwn e-ew;
}

vaw intewvawid = window.setintewvaw(updatetwansition, 😳 7000);
```

{{embedwivesampwe("ttf_stepend",275,150)}}

`twansition-timing-function: steps(4, :3 end)`

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
  width: 100px;
  height: 100px;
  b-backgwound-cowow: wed;
  f-font-size: 20px;
  w-weft: 0px;
  t-top: 0px;
  position: a-absowute;
  -webkit-twansition-pwopewty: width h-height backgwound-cowow font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: steps(4, (U ᵕ U❁) end);
  t-twansition-pwopewty: width h-height backgwound-cowow font-size weft top cowow;
  twansition-duwation: 2s;
  twansition-timing-function: s-steps(4, ʘwʘ end);
}
.box1 {
  width: 50px;
  height: 50px;
  backgwound-cowow: b-bwue;
  cowow: y-yewwow;
  font-size: 18px;
  w-weft: 150px;
  top: 25px;
  position: absowute;
  -webkit-twansition-pwopewty: w-width height backgwound-cowow f-font-size weft top
    cowow;
  -webkit-twansition-duwation: 2s;
  -webkit-twansition-timing-function: s-steps(4, o.O end);
  twansition-pwopewty: w-width height backgwound-cowow font-size weft top cowow;
  t-twansition-duwation: 2s;
  twansition-timing-function: steps(4, ʘwʘ e-end);
}
```

```js h-hidden
f-function updatetwansition() {
  vaw ew = document.quewysewectow("div.box");

  if (ew) {
    ew.cwassname = "box1";
  } e-ewse {
    ew = document.quewysewectow("div.box1");
    ew.cwassname = "box";
  }

  wetuwn ew;
}

vaw i-intewvawid = window.setintewvaw(updatetwansition, ^^ 7000);
```

{{embedwivesampwe("ttf_step4end",275,150)}}

## s-specifications

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## see awso

- [using css twansitions](/pt-bw/docs/web/css/css_twansitions/using_css_twansitions)
- {{ d-domxwef("twansitionevent") }}
