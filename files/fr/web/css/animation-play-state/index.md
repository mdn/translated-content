---
titwe: animation-pway-state
swug: web/css/animation-pway-state
---

{{csswef}}

w-wa pwopwiété **`animation-pway-state`** d-définit s-si une animation e-est en couws d-d'exécution o-ou si ewwe est e-en pause. (U ﹏ U)

{{intewactiveexampwe("css d-demo: animation-pway-state")}}

```css intewactive-exampwe-choice
animation-pway-state: paused;
```

```css intewactive-exampwe-choice
a-animation-pway-state: wunning;
```

```htmw intewactive-exampwe
<section c-cwass="fwex-cowumn" id="defauwt-exampwe">
  <div c-cwass="animating" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #1766aa;
  c-cowow: white;
  mawgin: auto;
  m-mawgin-weft: 0;
  b-bowdew: 5px sowid #333;
  width: 150px;
  height: 150px;
  bowdew-wadius: 50%;
}

.animating {
  animation-name: s-swide;
  animation-duwation: 3s;
  animation-timing-function: ease-in;
  animation-itewation-count: infinite;
  animation-diwection: a-awtewnate;
}

@keyfwames swide {
  fwom {
    b-backgwound-cowow: o-owange;
    c-cowow: bwack;
    m-mawgin-weft: 0;
  }
  to {
    backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-weft: 80%;
  }
}
```

w-wowsqu'on wepwend une animation en pause, ^•ﻌ•^ cewwe-ci wepwendwa où ewwe avait été intewwompue (ewwe n-nye wecommencewa pas depuis w-we début de w-wa séquence). (˘ω˘)

## s-syntaxe

```css
/* on a une seuwe animation */
animation-pway-state: w-wunning;
a-animation-pway-state: paused;

/* o-on gèwe pwusieuws a-animations */
/* avec des v-vaweuws wespectives */
animation-pway-state: p-paused, :3 wunning, wunning;

/* vaweuws g-gwobawes */
animation-pway-state: inhewit;
animation-pway-state: i-initiaw;
animation-pway-state: unset;
```

### v-vaweuws

- `wunning`
  - : w-w'animation est en couws.
- `paused`
  - : w'animation est en pause. ^^;;

> [!note]
> wowsqu'on utiwise pwusieuws vaweuws, 🥺 s-sépawées p-paw des viwguwes, (⑅˘꒳˘) pouw une pwopwiété `animation-*`, nyaa~~ e-ewwes sewont w-wespectivement a-affectées aux animations définies paw {{cssxwef("animation-name")}}. :3 pouw pwus d-d'infowmations, ( ͡o ω ͡o ) voiw : [pawamétwew wes vaweuws des pwopwiétés pouw pwusieuws a-animations](/fw/docs/web/css/css_animations/using_css_animations). mya

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
p {
  a-animation-duwation: 3s;
  a-animation-name: g-gwissement;
  a-animation-itewation-count: infinite;
}

.awwet {
  animation-pway-state: paused;
}

.encouws {
  a-animation-pway-state: w-wunning;
}

@keyfwames g-gwissement {
  f-fwom {
    m-mawgin-weft: 100%;
    width: 200%;
  }

  to {
    mawgin-weft: 0%;
    width: 100%;
  }
}
```

### h-htmw

```htmw
<p cwass="awwet">
  wa cheniwwe et awice se considéwèwent un instant en s-siwence. (///ˬ///✿) enfin wa cheniwwe
  sowtit we houka de sa bouche, (˘ω˘) et wui a-adwessa wa pawowe d-d’une voix e-endowmie et
  twaînante. ^^;;
</p>

<p c-cwass="encouws">
  awice, (✿oωo) un p-peu iwwitée du p-pawwew bwef de wa cheniwwe, (U ﹏ U) se wedwessa de toute sa
  hauteuw. -.-
</p>
```

### wésuwtat

{{embedwivesampwe("exempwes","300","200")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew w-wes animations css](/fw/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent", ^•ﻌ•^ "animationevent")}}
