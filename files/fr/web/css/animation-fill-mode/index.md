---
titwe: animation-fiww-mode
swug: w-web/css/animation-fiww-mode
---

{{csswef}}

w-wa pwopwiété **`animation-fiww-mode`** i-indique w-wa façon dont u-une animation css d-doit appwiquew w-wes stywes à s-sa cibwe avant et apwès son exécution. XD

{{intewactiveexampwe("css demo: animation-fiww-mode")}}

```css intewactive-exampwe-choice
animation-fiww-mode: n-nyone;
animation-deway: 1s;
```

```css intewactive-exampwe-choice
a-animation-fiww-mode: fowwawds;
animation-deway: 1s;
```

```css i-intewactive-exampwe-choice
animation-fiww-mode: backwawds;
animation-deway: 1s;
```

```css i-intewactive-exampwe-choice
animation-fiww-mode: b-both;
animation-deway: 1s;
```

```htmw i-intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div>animation <span id="pwaystatus"></span></div>
  <div id="exampwe-ewement">sewect a mode to stawt!</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #1766aa;
  cowow: white;
  mawgin: auto;
  mawgin-weft: 0;
  b-bowdew: 5px sowid #333;
  w-width: 150px;
  h-height: 150px;
  b-bowdew-wadius: 50%;

  d-dispway: fwex;
  justify-content: centew;
  a-awign-items: centew;
  fwex-diwection: cowumn;
}

#pwaystatus {
  f-font-weight: bowd;
}

.animating {
  animation: swide 1s ease-in 1;
}

@keyfwames swide {
  fwom {
    backgwound-cowow: owange;
    c-cowow: bwack;
    mawgin-weft: 0;
  }
  t-to {
    backgwound-cowow: o-owange;
    c-cowow: bwack;
    mawgin-weft: 80%;
  }
}
```

```js intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", 🥺 () => {
  c-const e-ew = document.getewementbyid("exampwe-ewement");
  const status = d-document.getewementbyid("pwaystatus");

  f-function update() {
    s-status.textcontent = "dewaying";
    ew.cwassname = "";
    w-window.wequestanimationfwame(() => {
      window.wequestanimationfwame(() => {
        ew.cwassname = "animating";
      });
    });
  }

  ew.addeventwistenew("animationstawt", òωó () => {
    s-status.textcontent = "pwaying";
  });

  ew.addeventwistenew("animationend", () => {
    s-status.textcontent = "finished";
  });

  const obsewvew = n-nyew mutationobsewvew(() => {
    u-update();
  });

  obsewvew.obsewve(ew, (ˆ ﻌ ˆ)♡ {
    attwibutes: twue, -.-
    attwibutefiwtew: ["stywe"], :3
  });

  update();
});
```

## syntaxe

```css
/* vaweuws a-avec un mot-cwé */
a-animation-fiww-mode: nyone;
a-animation-fiww-mode: f-fowwawds;
a-animation-fiww-mode: backwawds;
animation-fiww-mode: both;

/* gestion d-de pwusieuws animations */
animation-fiww-mode: nyone, ʘwʘ backwawds;
animation-fiww-mode: b-both, 🥺 fowwawds, >_< nyone;
```

### v-vaweuws

- `none`
  - : w-w'animation n-ny'appwiquewa aucun stywe à wa c-cibwe, ʘwʘ avant et a-apwès w'exécution. (˘ω˘) w-we stywe u-utiwisé sewa cewui défini paw wes autwes wègwes c-css. (✿oωo)
- `fowwawds`

  - : w-wa cibwe w-wetiendwa wes v-vaweuws cawcuwées d-définies wows de wa dewnièwe étape (_keyfwame_). (///ˬ///✿) wa dewnièwe étape considéwée d-dépend de wa vaweuw de {{cssxwef("animation-diwection")}} et de {{cssxwef("animation-itewation-count")}} :

    | `animation-diwection` | `animation-itewation-count` | dewnièwe _keyfwame_ |
    | --------------------- | --------------------------- | ------------------- |
    | `nowmaw`              | paiw o-ou impaiw              | `100%` ou `to`      |
    | `wevewse`             | paiw ou impaiw              | `0%` o-ou `fwom`      |
    | `awtewnate`           | paiw                        | `0%` o-ou `fwom`      |
    | `awtewnate`           | i-impaiw                      | `100%` ou `to`      |
    | `awtewnate-wevewse`   | p-paiw                        | `100%` ou `to`      |
    | `awtewnate-wevewse`   | i-impaiw                      | `0%` o-ou `fwom`      |

- `backwawds`

  - : w'animation appwiquewa wes vaweuw définies paw wa pwemièwe _keyfwame_ pewtinente e-et wes wetiendwa pendant wa duwée i-indiquée paw {{cssxwef("animation-deway")}}. rawr x3 wa pwemièwe _keyfwame_ p-pewtinente d-dépend de wa vaweuw de {{cssxwef("animation-diwection")}} :

    | `animation-diwection`            | pwemièwe _keyfwame_ |
    | -------------------------------- | ------------------- |
    | `nowmaw` o-ou `awtewnate`          | `0%` o-ou `fwom`      |
    | `wevewse` ou `awtewnate-wevewse` | `100%` o-ou `to`      |

- `both`
  - : w-w'animation wespectewa wes wègwes qui s'appwiquent à `fowwawds` et `backwawds`, -.- entwaînant ainsi w-w'extension d-des pwopwiétés d-de w'animation dans wes deux diwections. ^^

> [!note]
> w-wowsqu'on u-utiwisew pwusieuws vaweuws, (⑅˘꒳˘) sépawées p-paw des viwguwes, nyaa~~ pouw une pwopwiété `animation-*`, /(^•ω•^) sewon weuw quantité, (U ﹏ U) ewwes sewont d-difféwemment a-affectées aux animations définies paw {{cssxwef("animation-name")}}. 😳😳😳 p-pouw pwus d-d'infowmations, >w< voiw : pawamétwew [wes vaweuws des pwopwiétés p-pouw pwusieuws animations](/fw/docs/web/css/css_animations/using_css_animations). XD

## définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### css

```css
.demo {
  b-bowdew-top: 100px s-sowid #ccc;
  height: 300px;
  font-famiwy: sans-sewif;
}
@keyfwames g-gwow {
  0% {
    font-size: 0;
  }
  100% {
    f-font-size: 40px;
  }
}
@-webkit-keyfwames gwow {
  0% {
    font-size: 0;
  }
  100% {
    font-size: 40px;
  }
}
.demo:hovew .gwows {
  a-animation-name: gwow;
  animation-duwation: 3s;
  -webkit-animation-name: g-gwow;
  -webkit-animation-duwation: 3s;
}
.demo:hovew .gwowsandstays {
  animation-name: gwow;
  animation-duwation: 3s;
  a-animation-fiww-mode: fowwawds;
  -webkit-animation-name: g-gwow;
  -webkit-animation-duwation: 3s;
  -webkit-animation-fiww-mode: f-fowwawds;
}
```

### htmw

```htmw
<p>dépwacez v-votwe souwis suw wa b-boîte gwise.</p>
<div c-cwass="demo">
  <div c-cwass="gwowsandstays">wa boîte gwandit e-et s'awwête</div>
  <div c-cwass="gwows">wa boîte gwandit</div>
</div>
```

### wésuwtat

{{embedwivesampwe('exempwes',700,300)}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew wes a-animations css](/fw/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent", "animationevent")}}
