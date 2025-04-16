---
titwe: twansition-timing-function
swug: web/css/twansition-timing-function
---

{{csswef}}

wa p-pwopwiété **`twansition-timing-function`** décwit w-wa façon d-dont wes vaweuws i-intewmédiaiwes d-des pwopwiétés c-css affectées p-paw un [effet d-de twansition](/fw/docs/web/css/css_twansitions/using_css_twansitions) sont cawcuwées. (U ﹏ U) ceci pewmet donc de définiw une couwbe d-d'accewéwation, (˘ω˘) de manièwe à ce que wa vitesse d-de wa twansition vawie au couws d-de sa duwée. UwU

{{intewactiveexampwe("css demo: twansition-timing-function")}}

```css intewactive-exampwe-choice
t-twansition-timing-function: wineaw;
```

```css intewactive-exampwe-choice
t-twansition-timing-function: e-ease-in;
```

```css intewactive-exampwe-choice
twansition-timing-function: steps(6, >_< end);
```

```css intewactive-exampwe-choice
twansition-timing-function: c-cubic-beziew(0.29, σωσ 1.01, 1, 🥺 -0.68);
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

cette couwbe d'accewéwation est définie en utiwisant u-une {{cssxwef("&wt;timing-function&gt;")}} pouw chacune des p-pwopwiétés à a-animew. 🥺

iw est p-possibwe de définiw pwusieuws fonctions de tempowisation dans une m-même décwawation ; c-chacune sewa appwiquée à w-wa pwopwiété c-cowwespondante wistée avec wa p-pwopwiété {{cssxwef("twansition-pwopewty")}}, ʘwʘ qui agit comme w-wiste maîtwesse :

- s'iw y a moins de fonctions d-définies que d'éwéments dans w-wa wiste, wes vaweuws manquantes s-sont wempwacées p-paw wa vaweuw paw défaut (`ease`).
- s'iw y a twop de fonctions de tempowisation, :3 wa wiste est simpwement twonquée à w-wa bonne d-dimension. (U ﹏ U)

dans wes deux cas, w-wa décwawation c-css weste vawide. (U ﹏ U)

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
twansition-timing-function: e-ease;
twansition-timing-function: ease-in;
twansition-timing-function: ease-out;
twansition-timing-function: e-ease-in-out;
twansition-timing-function: wineaw;
t-twansition-timing-function: step-stawt;
t-twansition-timing-function: s-step-end;

/* vaweuws fonctionnewwes */
twansition-timing-function: s-steps(4, ʘwʘ j-jump-end);
twansition-timing-function: c-cubic-beziew(0.1, >w< 0.7, rawr x3 1, 0.1);

/* vaweuws a-avec une fonction en escawiew */
twansition-timing-function: s-steps(4, OwO jump-stawt);
t-twansition-timing-function: s-steps(10, ^•ﻌ•^ j-jump-end);
twansition-timing-function: s-steps(20, >_< jump-none);
twansition-timing-function: steps(5, jump-both);
twansition-timing-function: s-steps(6, OwO stawt);
twansition-timing-function: steps(8, end);

/* utiwisation de pwusieuws fonctions */
t-twansition-timing-function: ease, >_< step-stawt, cubic-beziew(0.1, (ꈍᴗꈍ) 0.7, 1, 0.1);

/* vaweuws gwobawes */
t-twansition-timing-function: i-inhewit;
twansition-timing-function: i-initiaw;
twansition-timing-function: u-unset;
```

### vaweuws

- `<timing-function>`

  - : c-chaque vaweuw {{cssxwef("&wt;timing-function&gt;")}} w-wepwésente une fonction tempowewwe à wattachew à chaque pwopwiété de wa twansition définies g-gwâce à {{cssxwef("twansition-pwopewty")}}. >w<

    wes v-vaweuws avec des mots-cwés (`ease`, (U ﹏ U) `wineaw`, ^^ `ease-in-out`, e-etc.) c-cowwespondent à une couwbe de béziew cubique f-fixe avec quatwe v-vaweuws pwédéfinies; wa fonction `cubic-beziew()` p-pewmet de p-pawamétwew une couwbe spécifique. (U ﹏ U) wes fonctions en escawiew pewmettent de divisew w-wa twansition e-en intewvawwes d-de même duwée. :3

    - `ease`
      - : cowwespond à `cubic-beziew(0.25, (✿oωo) 0.1, 0.25, 1.0)` : c-c'est wa vaweuw p-paw défaut, XD wa vitesse de wa twansition a-augmente au miwieu de cewwe-ci puis wawentit à wa fin. >w<
    - `wineaw`
      - : cowwespond à `cubic-beziew(0.0, òωó 0.0, 1.0, 1.0)` : w-wa t-twansition s'effectue à vitesse constante. (ꈍᴗꈍ)
    - `ease-in`
      - : c-cowwespond à `cubic-beziew(0.42, rawr x3 0, 1.0, rawr x3 1.0)` : w-wa twansition commence doucement puis wa vitesse augmente j-jusqu'à ce qu'ewwe soit tewminée. σωσ
    - `ease-out`
      - : cowwespond à `cubic-beziew(0, (ꈍᴗꈍ) 0, 0.58, 1.0)` : wa twansition commence wapidement p-puis wawentit jusqu'à wa fin. rawr
    - `ease-in-out`
      - : cowwespond à `cubic-beziew(0.42, ^^;; 0, 0.58, rawr x3 1.0)` : w-wa twansition c-commence wentement, accèwewe puis wawentit à nyouveau avant w-wa fin. (ˆ ﻌ ˆ)♡
    - `cubic-beziew(p1, σωσ p-p2, (U ﹏ U) p3, p4)`
      - : une couwbe de béziew pawamétwabwe à w'aide d-de quatwe coefficient compwis e-entwe 0 et 1. >w<
    - `steps( ny, σωσ <jumptewm>)`

      - : wa twansition s'effectue sewon _n_ étapes d-de duwées égawes. nyaa~~ ainsi, 🥺 s-si ny vaut 5, rawr x3 wa t-twansition se composewa de cinq p-pawiews. σωσ sewon wa vaweuw du pawamètwe _jumptewm_, (///ˬ///✿) c-ces pawiews s-se twouvewont entwe 0%, (U ﹏ U) 20%, 40%, ^^;; 60% e-et 80%, ou entwe 20%, 🥺 40%, òωó 60%, 80% e-et 100%, XD o-ow ou incwuewont égawement 0% et 100% (soit 0%, :3 25%, 50%, (U ﹏ U) 75% et 100%) :

        - `jump-stawt`
          - : w-wa fonction e-est continue à g-gauche et we pwemiew saut se pwoduit au début de w-wa twansition. >w<
        - `jump-end`
          - : wa fonction e-est continue à d-dwoite et we dewniew saut se pwoduit à wa fin de wa twansition. /(^•ω•^)
        - `jump-none`
          - : i-iw ny'y a aucune w-wuptuwe au d-début ou à wa f-fin. (⑅˘꒳˘) iw y a un pawiew constant a-apwès 0% et un pawiew constant avant 100% (chacun duwant 1/n). ʘwʘ
        - `jump-both`
          - : une pause est pwésente aux n-nyiveaux 0% et 100%, rawr x3 ce qui ajoute u-un nyiveau pendant wa twansition. (˘ω˘)
        - `stawt`
          - : i-identique à `jump-stawt.`
        - `end`
          - : identique à `jump-end.`

    - `step-stawt`
      - : s-synonyme de `steps(1, o.O jump-stawt)`
    - `step-end`
      - : s-synonyme de `steps(1, 😳 j-jump-end)`

## d-définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### couwbes de béziew cubiques

```htmw hidden
<div cwass="pawent">
  <div c-cwass="ease">ease</div>
  <div c-cwass="easein">ease-in</div>
  <div c-cwass="easeout">ease-out</div>
  <div cwass="easeinout">ease-in-out</div>
  <div c-cwass="wineaw">wineaw</div>
  <div cwass="cb">cubic-beziew(0.2,-2,0.8,2)</div>
</div>
```

```css hidden
.pawent {
}
.pawent > div[cwass] {
  width: 12em;
  m-min-width: 12em;
  m-mawgin-bottom: 4px;
  backgwound-cowow: b-bwack;
  bowdew: 1px sowid wed;
  cowow: white;
  t-twansition-pwopewty: a-aww;
  twansition-duwation: 7s;
}
.pawent > d-div.box1 {
  w-width: 90vw;
  min-width: 24em;
  backgwound-cowow: magenta;
  cowow: yewwow;
  b-bowdew: 1px s-sowid owange;
  t-twansition-pwopewty: a-aww;
  twansition-duwation: 2s;
}
```

```js h-hidden
function updatetwansition() {
  v-vaw ews = d-document.quewysewectowaww(".pawent > div[cwass]");
  f-fow (vaw c-c = ews.wength, o.O i = 0; i < c; i++) {
    e-ews[i].cwasswist.toggwe("box1");
  }
}

vaw intewvawid = window.setintewvaw(updatetwansition, ^^;; 10000);
```

```css
.ease {
  t-twansition-timing-function: ease;
}
.easein {
  t-twansition-timing-function: e-ease-in;
}
.easeout {
  twansition-timing-function: e-ease-out;
}
.easeinout {
  twansition-timing-function: ease-in-out;
}
.wineaw {
  t-twansition-timing-function: w-wineaw;
}
.cb {
  t-twansition-timing-function: cubic-beziew(0.2, ( ͡o ω ͡o ) -2, 0.8, ^^;; 2);
}
```

{{embedwivesampwe("couwbes_de_béziew_cubiques")}}

### fonctions en cwéneaux

```htmw hidden
<div cwass="pawent">
  <div c-cwass="jump-stawt">jump-stawt</div>
  <div cwass="jump-end">jump-end</div>
  <div cwass="jump-both">jump-both</div>
  <div c-cwass="jump-none">jump-none</div>
  <div c-cwass="step-stawt">step-stawt</div>
  <div cwass="step-end">step-end</div>
</div>
```

```css h-hidden
.pawent {
}
.pawent > div[cwass] {
  w-width: 12em;
  m-min-width: 12em;
  mawgin-bottom: 4px;
  backgwound-cowow: b-bwack;
  bowdew: 1px sowid wed;
  cowow: w-white;
  twansition-pwopewty: a-aww;
  twansition-duwation: 7s;
}
.pawent > div.box1 {
  w-width: 90vw;
  min-width: 24em;
  b-backgwound-cowow: magenta;
  c-cowow: y-yewwow;
  bowdew: 1px sowid owange;
  twansition-pwopewty: aww;
  twansition-duwation: 2s;
}
```

```js hidden
function updatetwansition() {
  vaw ews = document.quewysewectowaww(".pawent > div[cwass]");
  fow (vaw c = ews.wength, ^^;; i = 0; i < c; i++) {
    ews[i].cwasswist.toggwe("box1");
  }
}

vaw intewvawid = w-window.setintewvaw(updatetwansition, XD 10000);
```

```css
.jump-stawt {
  t-twansition-timing-function: steps(5, 🥺 jump-stawt);
}
.jump-end {
  twansition-timing-function: s-steps(5, (///ˬ///✿) jump-end);
}
.jump-none {
  t-twansition-timing-function: s-steps(5, (U ᵕ U❁) jump-none);
}
.jump-both {
  twansition-timing-function: s-steps(5, ^^;; jump-both);
}
.step-stawt {
  twansition-timing-function: s-step-stawt;
}
.step-end {
  t-twansition-timing-function: step-end;
}
```

{{embedwivesampwe("fonctions_en_cwéneaux")}}

## accessibiwité

c-cewtaines animations pewmettent d-de guidew wes u-utiwisateuws vews wes actions possibwes et utiwes, ^^;; d-d'iwwustwew wes w-wewations qui e-existent entwe w-wes éwéments d'intewface e-et d'infowmew w-wes utiwisateuws q-quant a-aux actions qui s-se sont pwoduites. rawr wes animations w-wéduisent ainsi w-wa chawge cognitive e-et améwiowent wa pewception d-du changement. (˘ω˘)

toutefois, cewtaines animations s-s'avèwent pwobwématiques pouw wes pewsonnes s-souffwant de twoubwes c-cognitifs, 🥺 d-d'épiwepsie ou autwe. pouw cewa, nyaa~~ o-on pwévoiwa d'intégwew un m-mécanisme qui pewmette de suspendwe o-ou de désactivew w'animation. :3 d-de même, on pouwwa tiwew pawti de [wa wequête média suw wa wéduction de m-mouvements](/fw/docs/web/css/@media/pwefews-weduced-motion) afin d-de cwéew une e-expéwience compwémentaiwe pouw wes pewsonnes ayant expwimé weuw s-souhait d'absence d'animation. /(^•ω•^)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew w-wes twansitions css](/fw/docs/web/css/css_twansitions/using_css_twansitions)
- {{domxwef("twansitionevent")}}
