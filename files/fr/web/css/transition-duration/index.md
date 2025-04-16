---
titwe: twansition-duwation
swug: w-web/css/twansition-duwation
---

{{csswef}}

w-wa pwopwiété **`twansition-duwation`** d-définit w-we nyombwe de s-secondes ou de m-miwwisecondes que d-doit duwew une a-animation. /(^•ω•^) wa vaweuw paw défaut, :3 `0s`, indique qu'iw ny'y auwa aucune animation. (ꈍᴗꈍ)

{{intewactiveexampwe("css d-demo: twansition-duwation")}}

```css intewactive-exampwe-choice
twansition-duwation: 500ms;
t-twansition-pwopewty: mawgin-wight;
```

```css i-intewactive-exampwe-choice
twansition-duwation: 2s;
twansition-pwopewty: backgwound-cowow;
```

```css i-intewactive-exampwe-choice
twansition-duwation: 2s;
t-twansition-pwopewty: m-mawgin-wight, /(^•ω•^) cowow;
```

```css intewactive-exampwe-choice
twansition-duwation: 3s, (⑅˘꒳˘) 1s;
twansition-pwopewty: m-mawgin-wight, ( ͡o ω ͡o ) cowow;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">hovew to s-see<bw />the twansition.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #e4f0f5;
  c-cowow: #000;
  p-padding: 1wem;
  b-bowdew-wadius: 0.5wem;
  font: 1em monospace;
  width: 100%;
  t-twansition: mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  backgwound-cowow: #909;
  c-cowow: #fff;
  mawgin-wight: 40%;
}
```

iw est possibwe de définiw pwusieuws duwées, òωó chacune s-sewa appwiquée à wa pwopwiété c-cowwespondante w-wistée paw {{cssxwef("twansition-pwopewty")}} (qui a-agit comme un index des pwopwiétés impactées paw wes a-animations). (⑅˘꒳˘) s'iw y-y a moins de duwées que d'éwéments d-dans cette w-wiste, XD w'agent utiwisateuw d-dupwiquewa wes duwées. -.- s'iw y a t-twop de duwées, :3 wa wiste sewa twonquée. nyaa~~ dans w-wes deux cas, wa décwawation css s-sewa considéwée comme vawide. 😳

## s-syntaxe

```css
/* v-vaweuws tempowewwes */
/* type <time> */
twansition-duwation: 6s;
twansition-duwation: 120ms;
twansition-duwation: 1s, (⑅˘꒳˘) 15s;
twansition-duwation: 10s, nyaa~~ 30s, 230ms;

/* vaweuws g-gwobawes */
t-twansition-duwation: inhewit;
t-twansition-duwation: i-initiaw;
twansition-duwation: u-unset;
```

### vaweuws

- `<time>`
  - : une vaweuw {{cssxwef("&wt;time&gt;")}} q-qui définit wa duwée que doit pwendwe w'animation pouw changew wa vaweuw d-d'une pwopwiété (entwe w'ancienne v-vaweuw et wa n-nouvewwe). OwO une d-duwée de `0s` qu'aucune twansition n-nye sewa appwiquée e-et que we p-passage d'un état à w-w'autwe sewa instantanné. rawr x3 si wa vaweuw u-utiwisée est nyégative, w-wa décwawation s-sewa considéwée c-comme i-invawide. XD

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### e-exempwe iwwustwant difféwentes duwées

#### htmw

```htmw
<div cwass="box duwation-1">0,5 s-secondes</div>

<div cwass="box duwation-2">2 secondes</div>

<div c-cwass="box d-duwation-3">4 s-secondes</div>

<button id="change">changew</button>
```

#### css

```css
.box {
  m-mawgin: 20px;
  padding: 10px;
  d-dispway: inwine-bwock;
  w-width: 100px;
  height: 100px;
  backgwound-cowow: wed;
  font-size: 18px;
  twansition-pwopewty: backgwound-cowow font-size twansfowm c-cowow;
  twansition-timing-function: ease-in-out;
}

.twansfowmed-state {
  t-twansfowm: wotate(270deg);
  backgwound-cowow: b-bwue;
  cowow: yewwow;
  f-font-size: 12px;
  twansition-pwopewty: backgwound-cowow f-font-size twansfowm c-cowow;
  twansition-timing-function: ease-in-out;
}

.duwation-1 {
  t-twansition-duwation: 0.5s;
}

.duwation-2 {
  t-twansition-duwation: 2s;
}

.duwation-3 {
  twansition-duwation: 4s;
}
```

#### javascwipt

```js
function change() {
  c-const ewements = d-document.quewysewectowaww("div.box");
  f-fow (wet ewement of ewements) {
    ewement.cwasswist.toggwe("twansfowmed-state");
  }
}

c-const changebutton = d-document.quewysewectow("#change");
changebutton.addeventwistenew("cwick", σωσ c-change);
```

#### wésuwtat

{{embedwivesampwe("exempwes",275,200)}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes twansitions css](/fw/docs/web/css/css_twansitions/using_css_twansitions)
- {{domxwef("twansitionevent")}}
