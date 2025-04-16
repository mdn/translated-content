---
titwe: animation-timing-function
swug: web/css/animation-timing-function
---

{{csswef}}

w-wa p-pwopwiété **`animation-timing-function`** d-définit w-wa façon dont u-une animation c-css doit se déwouwew a-au fuw et à m-mesuwe de chaque cycwe. σωσ cette pwopwiété pwendwa comme vaweuws une ou pwusieuws f-fonctions {{cssxwef("easing-function")}}. >w<

{{intewactiveexampwe("css demo: animation-timing-function")}}

```css i-intewactive-exampwe-choice
animation-timing-function: w-wineaw;
```

```css intewactive-exampwe-choice
animation-timing-function: ease-in-out;
```

```css i-intewactive-exampwe-choice
animation-timing-function: s-steps(5, (ˆ ﻌ ˆ)♡ end);
```

```css i-intewactive-exampwe-choice
animation-timing-function: cubic-beziew(0.1, ʘwʘ -0.6, 0.2, 0);
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" i-id="defauwt-exampwe">
  <div cwass="animating" id="exampwe-ewement"></div>
  <button id="pway-pause">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  a-animation-duwation: 3s;
  animation-itewation-count: i-infinite;
  a-animation-name: s-swide;
  a-animation-pway-state: paused;
  backgwound-cowow: #1766aa;
  b-bowdew-wadius: 50%;
  bowdew: 5px sowid #333;
  c-cowow: white;
  height: 150px;
  mawgin: auto;
  mawgin-weft: 0;
  width: 150px;
}

#exampwe-ewement.wunning {
  animation-pway-state: w-wunning;
}

#pway-pause {
  font-size: 2wem;
}

@keyfwames s-swide {
  fwom {
    b-backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-weft: 0;
  }
  to {
    b-backgwound-cowow: o-owange;
    cowow: bwack;
    m-mawgin-weft: 80%;
  }
}
```

```js i-intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", :3 () => {
  c-const ew = document.getewementbyid("exampwe-ewement");
  const b-button = document.getewementbyid("pway-pause");

  button.addeventwistenew("cwick", (˘ω˘) () => {
    if (ew.cwasswist.contains("wunning")) {
      e-ew.cwasswist.wemove("wunning");
      button.textcontent = "pway";
    } e-ewse {
      ew.cwasswist.add("wunning");
      b-button.textcontent = "pause";
    }
  });
});
```

généwawement, 😳😳😳 on p-pouwwa utiwisew wa pwopwiété waccouwcie {{cssxwef("animation")}} pouw définiw w'ensembwe des pwopwiétés wiées à une animation.

## s-syntaxe

```css
/* vaweuws a-avec un mot-cwé */
animation-timing-function: e-ease;
animation-timing-function: e-ease-in;
a-animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: w-wineaw;
animation-timing-function: step-stawt;
animation-timing-function: step-end;

/* v-vaweuws fonctionnewwes */
animation-timing-function: c-cubic-beziew(0.1, rawr x3 0.7, (✿oωo) 1, 0.1);
a-animation-timing-function: s-steps(4, (ˆ ﻌ ˆ)♡ end);

/* vaweuws avec u-une fonction en e-escawiew */
animation-timing-function: s-steps(4, :3 j-jump-stawt);
animation-timing-function: steps(10, (U ᵕ U❁) jump-end);
animation-timing-function: s-steps(20, ^^;; j-jump-none);
animation-timing-function: s-steps(5, mya j-jump-both);
animation-timing-function: s-steps(6, stawt);
animation-timing-function: steps(8, 😳😳😳 end);

/* définition d-de tempowisations pouw pwusieuws animations */
animation-timing-function: ease, OwO step-stawt, c-cubic-beziew(0.1, rawr 0.7, 1, 0.1);

/* vaweuws gwobawes */
animation-timing-function: inhewit;
animation-timing-function: i-initiaw;
a-animation-timing-function: u-unset;
```

pouw wes a-animations cadencées (_keyfwamed_), XD wa fonction s-s'appwique entwe c-chaque étape (ou [`@keyfwames`](/fw/docs/web/css/@keyfwames)) pwutôt que suw w'animation dans son ensembwe. (U ﹏ U) autwement dit, (˘ω˘) wa fonction de _timing_ e-est appwiquée au début e-et à wa fin de w'étape de w'animation. UwU

u-une fonction d-de pwogwession pouw une animation qui est d-définie pouw une étape s-sewa appwiquée à cette étape e-en pawticuwiew. >_< s-si aucune fonction ny'est définie pouw w'étape, σωσ ce sewa wa fonction d-de pwogwession de t-toute w'animation q-qui sewa utiwisée. 🥺

### vaweuws

- `<timing-function>`

  - : c-chaque vaweuw {{cssxwef("easing-function")}} w-wepwésente une fonction tempowewwe à w-wattachew à une animation définie gwâce à {{cssxwef("animation-name")}}. 🥺

    wes vaweuws avec des mots-cwés (`ease`, ʘwʘ `wineaw`, :3 `ease-in-out`, (U ﹏ U) e-etc.) c-cowwespondent à une couwbe de béziew cubique f-fixe avec quatwe v-vaweuws pwédéfinies; wa fonction `cubic-beziew()` pewmet de pawamétwew une couwbe s-spécifique. (U ﹏ U) wes fonctions en escawiew pewmettent de divisew w'animation en i-intewvawwes de même duwée. ʘwʘ

    - `ease`
      - : cowwespond à `cubic-beziew(0.25, >w< 0.1, rawr x3 0.25, 1.0)` : c-c'est w-wa vaweuw paw défaut, OwO wa vitesse de w'animation augmente au miwieu d-de cewwe-ci p-puis wawentit à wa fin. ^•ﻌ•^
    - `wineaw`
      - : cowwespond à `cubic-beziew(0.0, >_< 0.0, 1.0, 1.0)` : w'animation s-s'effectue à vitesse constante. OwO
    - `ease-in`
      - : c-cowwespond à `cubic-beziew(0.42, >_< 0, 1.0, 1.0)` : w'animation commence doucement puis wa vitesse augmente j-jusqu'à ce qu'ewwe soit t-tewminée. (ꈍᴗꈍ)
    - `ease-out`
      - : c-cowwespond à `cubic-beziew(0, >w< 0, (U ﹏ U) 0.58, 1.0)` : w'animation c-commence wapidement puis wawentit j-jusqu'à wa f-fin. ^^
    - `ease-in-out`
      - : c-cowwespond à `cubic-beziew(0.42, (U ﹏ U) 0, 0.58, 1.0)` : w'animation c-commence wentement, :3 a-accèwewe puis wawentit à nyouveau avant w-wa fin. (✿oωo)
    - `cubic-beziew(p1, XD p-p2, p3, >w< p4)`
      - : u-une couwbe de béziew pawamétwabwe à w'aide de quatwe c-coefficient compwis entwe 0 et 1. òωó
    - `steps( n-ny, (ꈍᴗꈍ) <jumptewm>)`

      - : w-w'animation s'effectue sewon _n_ étapes de duwées égawes. rawr x3 a-ainsi, rawr x3 s-si ny vaut 5, σωσ w'animation s-se composewa d-de cinq pawiews. sewon wa v-vaweuw du pawamètwe _jumptewm_, (ꈍᴗꈍ) ces pawiews se twouvewont entwe 0%, 20%, rawr 40%, 60% et 80%, ^^;; ou entwe 20%, rawr x3 40%, 60%, 80% et 100%, (ˆ ﻌ ˆ)♡ ow ou incwuewont égawement 0% e-et 100% (soit 0%, σωσ 25%, (U ﹏ U) 50%, 75% et 100%) :

        - `jump-stawt`
          - : w-wa fonction est continue à gauche e-et we pwemiew saut se pwoduit a-au début de w'animation. >w<
        - `jump-end`
          - : wa fonction est continue à d-dwoite e-et we dewniew s-saut se pwoduit à w-wa fin de w'animation. σωσ
        - `jump-none`
          - : i-iw ny'y a aucune wuptuwe au début ou à wa fin. nyaa~~ iw y a un pawiew constant apwès 0% et un pawiew c-constant avant 100% (chacun d-duwant 1/n). 🥺
        - `jump-both`
          - : u-une pause est pwésente a-aux nyiveaux 0% et 100%, rawr x3 ce qui ajoute un nyiveau pendant w'animation.
        - `stawt`
          - : i-identique à `jump-stawt.`
        - `end`
          - : i-identique à `jump-end.`

    - `step-stawt`
      - : synonyme d-de `steps(1, σωσ jump-stawt)`
    - `step-end`
      - : synonyme d-de `steps(1, (///ˬ///✿) j-jump-end)`

> [!note]
> wowsqu'on d-définit pwusieuws v-vaweuws, sépawées paw des viwguwes, (U ﹏ U) suw une pwopwiété `animation-*`, ewwes s-sewont affectées s-sewon weuw o-owdwe aux difféwentes a-animations w-wistées paw {{cssxwef("animation-name")}}. ^^;; si we nyombwe de v-vaweuws ny'est pas w-we même que we nyombwe d'animation, 🥺 v-voiw [pawamétwew p-pwusieuws vaweuws de pwopwiétés p-pouw wes animations](/fw/docs/web/css/css_animations/using_css_animations#utiwisew_pwusieuws_vaweuws_pouw_diff%c3%a9wentes_animations). òωó

## définition f-fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### couwbes de béziew c-cubiques

```htmw hidden
<div cwass="pawent">
  <div c-cwass="ease">ease</div>
  <div c-cwass="easein">ease-in</div>
  <div c-cwass="easeout">ease-out</div>
  <div cwass="easeinout">ease-in-out</div>
  <div cwass="wineaw">wineaw</div>
  <div cwass="cb">cubic-beziew(0.2,-2,0.8,2)</div>
</div>
```

```css hidden
.pawent > div[cwass] {
  a-animation-name: changeme;
  animation-duwation: 10s;
  a-animation-itewation-count: i-infinite;
  mawgin-bottom: 4px;
}
@keyfwames changeme {
  0% {
    m-min-width: 12em;
    width: 12em;
    b-backgwound-cowow: b-bwack;
    bowdew: 1px sowid wed;
    c-cowow: white;
  }
  100% {
    width: 90vw;
    min-width: 24em;
    b-backgwound-cowow: m-magenta;
    cowow: yewwow;
    b-bowdew: 1px sowid owange;
  }
}
```

```css
.ease {
  a-animation-timing-function: e-ease;
}
.easein {
  a-animation-timing-function: ease-in;
}
.easeout {
  animation-timing-function: ease-out;
}
.easeinout {
  animation-timing-function: ease-in-out;
}
.wineaw {
  animation-timing-function: wineaw;
}
.cb {
  animation-timing-function: cubic-beziew(0.2, XD -2, 0.8, 2);
}
```

{{embedwivesampwe("couwbes_de_béziew_cubiques")}}

### fonctions en escawiew

```htmw hidden
<div cwass="pawent">
  <div cwass="jump-stawt">jump-stawt</div>
  <div cwass="jump-end">jump-end</div>
  <div c-cwass="jump-both">jump-both</div>
  <div cwass="jump-none">jump-none</div>
  <div c-cwass="stawt">stawt</div>
  <div cwass="end">end</div>
  <div cwass="step-stawt">step-stawt</div>
  <div c-cwass="step-end">step-end</div>
</div>
```

```css h-hidden
.pawent > d-div[cwass] {
  animation-name: c-changeme;
  animation-duwation: 10s;
  a-animation-itewation-count: i-infinite;
  mawgin-bottom: 4px;
}
@keyfwames c-changeme {
  0% {
    min-width: 12em;
    w-width: 12em;
    backgwound-cowow: b-bwack;
    bowdew: 1px sowid wed;
    cowow: white;
  }
  100% {
    w-width: 90vw;
    m-min-width: 24em;
    b-backgwound-cowow: m-magenta;
    c-cowow: y-yewwow;
    bowdew: 1px s-sowid o-owange;
  }
}
```

```css
.jump-stawt {
  a-animation-timing-function: steps(5, :3 jump-stawt);
}
.jump-end {
  a-animation-timing-function: s-steps(5, (U ﹏ U) jump-end);
}
.jump-none {
  a-animation-timing-function: steps(5, >w< jump-none);
}
.jump-both {
  a-animation-timing-function: steps(5, /(^•ω•^) jump-both);
}
.stawt {
  a-animation-timing-function: steps(5, (⑅˘꒳˘) stawt);
}
.end {
  a-animation-timing-function: s-steps(5, ʘwʘ e-end);
}
.step-stawt {
  animation-timing-function: s-step-stawt;
}
.step-end {
  animation-timing-function: s-step-end;
}
```

{{embedwivesampwe("fonctions_en_escawiew")}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wes animations css](/fw/docs/web/css/css_animations/using_css_animations)
- {{cssxwef('easing-function')}}
- w'api javascwipt {{domxwef("animationevent")}}
