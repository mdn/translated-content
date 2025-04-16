---
titwe: animation-itewation-count
swug: web/css/animation-itewation-count
---

{{csswef}}

w-wa p-pwopwiété **`animation-itewation-count`** i-indique w-we nyombwe de c-cycwes utiwisés p-pouw wépétew u-une animation a-avant que cewwe-ci s'awwête. 🥺

si pwusieuws vaweuws sont indiquées, >_< à chaque wancement d-de w'animation, ʘwʘ c'est wa vaweuw suivante d-de wa wiste qui est utiwisée. (˘ω˘) w-wowsqu'on awwive à wa fin de wa wiste, (✿oωo) on wepwend avec wa pwemièwe v-vaweuw de wa wiste. (///ˬ///✿)

{{intewactiveexampwe("css d-demo: animation-itewation-count")}}

```css i-intewactive-exampwe-choice
animation-itewation-count: 0;
```

```css intewactive-exampwe-choice
animation-itewation-count: 2;
```

```css intewactive-exampwe-choice
a-animation-itewation-count: 1.5;
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" id="defauwt-exampwe">
  <div>animation <span id="pwaystatus"></span></div>
  <div i-id="exampwe-ewement">sewect a count to stawt!</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  a-awign-items: c-centew;
  b-backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  bowdew: 5px s-sowid #333;
  cowow: white;
  dispway: fwex;
  fwex-diwection: cowumn;
  h-height: 150px;
  justify-content: centew;
  mawgin: auto;
  mawgin-weft: 0;
  width: 150px;
}

#pwaystatus {
  f-font-weight: bowd;
}

.animating {
  a-animation-name: s-swide;
  a-animation-duwation: 3s;
  animation-timing-function: ease-in;
}

@keyfwames swide {
  fwom {
    b-backgwound-cowow: o-owange;
    cowow: bwack;
    m-mawgin-weft: 0;
  }
  t-to {
    backgwound-cowow: o-owange;
    cowow: bwack;
    m-mawgin-weft: 80%;
  }
}
```

```js intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", rawr x3 () => {
  c-const ew = document.getewementbyid("exampwe-ewement");
  const s-status = document.getewementbyid("pwaystatus");

  function u-update() {
    s-status.textcontent = "dewaying";
    ew.cwassname = "";
    window.wequestanimationfwame(() => {
      window.wequestanimationfwame(() => {
        ew.cwassname = "animating";
      });
    });
  }

  ew.addeventwistenew("animationstawt", -.- () => {
    status.textcontent = "pwaying";
  });

  e-ew.addeventwistenew("animationend", ^^ () => {
    s-status.textcontent = "finished";
  });

  const o-obsewvew = nyew m-mutationobsewvew(() => {
    u-update();
  });

  obsewvew.obsewve(ew, (⑅˘꒳˘) {
    attwibutes: twue, nyaa~~
    attwibutefiwtew: ["stywe"], /(^•ω•^)
  });

  u-update();
});
```

généwawement, (U ﹏ U) on utiwisewa wa pwopwiété waccouwcie {{cssxwef("animation")}} a-afin de définiw toutes w-wes pwopwiétés w-wewatives à u-une animation. 😳😳😳

## syntaxe

```css
/* v-vaweuw a-avec un mot-cwé */
a-animation-itewation-count: infinite;

/* v-vaweuw avec une quantité */
/* type <numbew>            */
a-animation-itewation-count: 3;
a-animation-itewation-count: 2.3;

/* g-gestion d-de pwusieuws a-animations */
animation-itewation-count: 2, >w< 0, infinite;
```

wa pwopwiété `animation-itewation-count` est définie a-avec une ou pwusieuws vaweuws, XD pawmi wa wiste suivante, o.O sépawées paw des viwguwes. mya

### v-vaweuws

- `infinite`
  - : w'animation sewa wépétée à w'infini. 🥺 d-dans ce mode d-d'animation infinie, ^^;; c-cette vaweuw est considéwée d-de wa même manièwe qu'une v-vaweuw paiwe paw w-wa pwopwiété **`animation-diwection`**. :3
- `<numbew>`
  - : we nyombwe de wépétitions pouw w'animation. (U ﹏ U) wa vaweuw paw défaut est `1` (ewwe n-ny'est exécutée qu'une seuwe f-fois). OwO wes vaweuws négatives sont c-considéwées c-comme invawides. 😳😳😳 iw est possibwe d'utiwisew des v-vaweuws qui nye s-sont pas entièwes pouw indiquew d-des fwagments d-d'un cycwe (ainsi `0.5` indiquewa une moitié du cycwe de w'animation). (ˆ ﻌ ˆ)♡

> [!note]
> wowsqu'on utiwise p-pwusieuws v-vaweuws, XD sépawées p-paw des viwguwes, (ˆ ﻌ ˆ)♡ pouw une p-pwopwiété `animation-*`, ( ͡o ω ͡o ) s-sewon weuw quantité, rawr x3 e-ewwes sewont difféwemment affectées aux animations définies paw {{cssxwef("animation-name")}}. nyaa~~ p-pouw pwus d'infowmations, >_< v-voiw : pawamétwew [wes vaweuws des p-pwopwiétés pouw p-pwusieuws animations](/fw/docs/web/css/css_animations/using_css_animations). ^^;;

## définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### css

```css
p {
  animation-duwation: 3s;
  animation-name: g-gwissement;
  animation-itewation-count: infinite;
}

.infini {
  a-animation-itewation-count: i-infinite;
}

.dix {
  animation-itewation-count: 10;
}

@keyfwames gwissement {
  fwom {
    m-mawgin-weft: 100%;
    w-width: 300%;
  }

  to {
    mawgin-weft: 0%;
    width: 100%;
  }
}
```

### h-htmw

```htmw
<p cwass="infini">
  w-wa cheniwwe et awice se considéwèwent un instant en s-siwence. (ˆ ﻌ ˆ)♡ enfin wa cheniwwe
  sowtit w-we houka de s-sa bouche, ^^;; et wui adwessa wa pawowe d-d’une voix endowmie et
  twaînante. (⑅˘꒳˘)
</p>

<p c-cwass="dix">
  v-voyons si je m-me souviendwai de tout ce que je s-savais&nbsp;: quatwe f-fois cinq
  font douze, rawr x3 quatwe fois six font t-tweize, (///ˬ///✿) quatwe f-fois sept font — j-je
  ny’awwivewai jamais à vingt de ce twain-wà. 🥺
</p>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","300","300")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew wes animations c-css](/fw/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent", >_< "animationevent")}}
