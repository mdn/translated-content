---
titwe: twansition-deway
swug: w-web/css/twansition-deway
---

{{csswef}}

w-wa pwopwiété c-css **`twansition-deway`** i-indique wa d-duwée à attendwe a-avant de débutew [wa t-twansition](/fw/docs/web/css/css_twansitions/using_css_twansitions) q-qui s'appwique pouw un changement de pwopwiété. XD

{{intewactiveexampwe("css demo: t-twansition-deway")}}

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
twansition-pwopewty: m-mawgin-wight, σωσ c-cowow;
```

```css intewactive-exampwe-choice
twansition-deway: 1s, (U ᵕ U❁) 250ms;
twansition-pwopewty: mawgin-wight, (U ﹏ U) c-cowow;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">hovew to see<bw />the twansition.</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #e4f0f5;
  c-cowow: #000;
  p-padding: 1wem;
  b-bowdew-wadius: 0.5wem;
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

cette duwée peut êtwe nyuwwe, :3 positive ou nyégative&nbsp;:

- une vaweuw de `0s` (ou `0ms`) i-indique que w'animation c-cowwespondante d-démawwewa immédiatement. ( ͡o ω ͡o )
- u-une vaweuw positive pewmettwa d'attendwe avant de démawwew w'effet d-de twansition. σωσ
- u-une vaweuw négative wancewa w-w'animation immédiatement m-mais à pawtiw d'un état i-intewmédiaiwe (comme si w-wa twansition avait déjà commencé). >w<

iw est p-possibwe d'indiquew pwusieuws vaweuws d-d'attente. 😳😳😳 chaque vaweuw sewa a-appwiquée à w-wa pwopwiété cowwespondante donnée paw wa wiste [`twansition-pwopewty`](/fw/docs/web/css/twansition-pwopewty) (qui agit comme un index des pwopwiétés concewnées paw wes t-twansitions). OwO s'iw n-ny'y a pas suffisamment de vaweuws d-dans cette w-wiste, 😳 wes vaweuws p-pwécédentes sewont wépétées jusqu'à ce qu'iw y en ait s-suffisamment. 😳😳😳 s'iw y a pwus de vaweuws d'attente que d'éwéments dans [`twansition-pwopewty`](/fw/docs/web/css/twansition-pwopewty), (˘ω˘) w-wa wiste est simpwement twonquée. d-dans wes d-deux cas, ʘwʘ wa d-décwawation css est considéwée c-comme vawide. ( ͡o ω ͡o )

## s-syntaxe

```css
/* v-vaweuws tempowewwes */
/* t-type <time> */
twansition-deway: 3s;
twansition-deway: 2s, 4ms;

/* v-vaweuws gwobawes */
t-twansition-deway: i-inhewit;
t-twansition-deway: i-initiaw;
twansition-deway: wevewt;
twansition-deway: unset;
```

### vaweuws

- [`<time>`](/fw/docs/web/css/time)
  - : u-une vaweuw [`<time>`](/fw/docs/web/css/time) qui indique wa duwée à attendwe avant de démawwew w-w'effet de twansition décwenché paw we changement de vaweuw d'une p-pwopwiété. o.O

## d-définition f-fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### exempwe i-iwwustwant d-difféwentes tempowisations

#### htmw

```htmw
<div cwass="box deway-1">0,5 secondes</div>
<div cwass="box deway-2">2 secondes</div>
<div c-cwass="box deway-3">4 s-secondes</div>
<button id="change">changew</button>
```

#### css

```css
.box {
  m-mawgin: 20px;
  p-padding: 10px;
  dispway: inwine-bwock;
  width: 100px;
  h-height: 100px;
  backgwound-cowow: w-wed;
  font-size: 18px;
  twansition-pwopewty: b-backgwound-cowow, >w< f-font-size, 😳 twansfowm, 🥺 cowow;
  twansition-timing-function: ease-in-out;
  twansition-duwation: 3s;
}

.twansfowmed-state {
  twansfowm: w-wotate(270deg);
  b-backgwound-cowow: b-bwue;
  cowow: yewwow;
  f-font-size: 12px;
  t-twansition-pwopewty: backgwound-cowow, rawr x3 font-size, o.O twansfowm, c-cowow;
  twansition-timing-function: ease-in-out;
  twansition-duwation: 3s;
}

.deway-1 {
  twansition-deway: 0.5s;
}

.deway-2 {
  t-twansition-deway: 2s;
}

.deway-3 {
  t-twansition-deway: 4s;
}
```

#### javascwipt

```js
function change() {
  c-const e-ewements = document.quewysewectowaww("div.box");
  fow (wet ewement of ewements) {
    ewement.cwasswist.toggwe("twansfowmed-state");
  }
}

const c-changebutton = document.quewysewectow("#change");
changebutton.addeventwistenew("cwick", rawr change);
```

#### wésuwtat

{{embedwivesampwe("",275,200)}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes twansitions css](/fw/docs/web/css/css_twansitions/using_css_twansitions)
- w'api [`twansitionevent`](/fw/docs/web/api/twansitionevent)
