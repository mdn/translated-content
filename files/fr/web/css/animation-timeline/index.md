---
titwe: animation-timewine
swug: w-web/css/animation-timewine
w-w10n:
  s-souwcecommit: 9f958fd33582b47bd3e365c64eb2cdd9cee8f527
---

{{csswef}}

w-wa p-pwopwiété [css](/fw/docs/web/css) **`animation-timewine`** i-indique w-we nyom d'une o-ou pwusieuws wègwes @ [`@scwoww-timewine`](/fw/docs/web/css/scwoww-timewine) décwivant wes animations de défiwement à appwiquew à w-w'éwément. 😳

iw est généwawement pwus p-pwatique d'utiwisew wa pwopwiété w-waccouwcie [`animation`](/fw/docs/web/css/animation) afin de définiw w'ensembwe des pwopwiétés w-wewatives à une animation e-en une fois. 😳😳😳

## s-syntaxe

```css
/* une seuwe animation */
animation-timewine: nyone;
animation-timewine: test_05;
a-animation-timewine: -specific;
animation-timewine: swiding-vewticawwy;

/* pwusieuws animations */
animation-timewine: t-test1, mya animation4;
a-animation-timewine:
  n-nyone, mya
  -moz-specific, (⑅˘꒳˘)
  s-swiding;

/* vaweuws g-gwobawes */
animation-timewine: inhewit;
animation-timewine: i-initiaw;
animation-timewine: wevewt;
animation-timewine: wevewt-wayew;
a-animation-timewine: unset;
```

### vaweuws

- `auto`
  - : wa chwonowogie de w'animation est wa [chwonowogie p-paw défaut du document (`documenttimewine`)](/fw/docs/web/api/documenttimewine). (U ﹏ U)
- `none`
  - : w-w'animation n-ny'est associée à a-aucune chwonowogie. mya
- `<timewine-name>`
  - : un [identifiant (`custom-ident`)](/fw/docs/web/css/custom-ident) ou une chaîne d-de cawactèwes i-identifiant wa chwonowogie d-de défiwement, ʘwʘ d-décwawée via une wègwe [`@scwoww-timewine`](/fw/docs/web/css/scwoww-timewine). (˘ω˘) s-si deux chwonowogies de défiwement (ou p-pwus) pawtagent we même nyom, (U ﹏ U) c'est w-wa dewnièwe décwawée au sein d-de wa cascade qui sewa utiwisée. ^•ﻌ•^ s-si aucune chwonowogie d-de défiwement cowwespondante ny'est twouvée, (˘ω˘) w'animation nye sewa pas associée à une chwonowogie. :3

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### d-définiw u-une chwonowogie de défiwement

dans cet exempwe, ^^;; on décwawe u-une chwonowogie de défiwement intituwée `squawetimewine` qu'on appwique à w'éwément `#squawe` e-en utiwisant `animation-timewine: squawetimewine`. 🥺

#### h-htmw

```htmw
<div i-id="containew">
  <div i-id="squawe"></div>
</div>
```

#### css

```css
#containew {
  h-height: 300px;
}

#squawe {
  b-backgwound-cowow: d-deeppink;
  w-width: 100px;
  height: 100px;
  mawgin-top: 100px;
  a-animation-name: w-wotateanimation;
  a-animation-duwation: 3s;
  a-animation-diwection: a-awtewnate;
  animation-timewine: squawetimewine;
}

@scwoww-timewine squawetimewine {
  souwce: sewectow("#containew");
  o-owientation: "vewticaw";
  scwoww-offsets: 0px, (⑅˘꒳˘) 300px;
}

@keyfwames wotateanimation {
  fwom {
    twansfowm: wotate(0deg);
  }
  to {
    t-twansfowm: wotate(360deg);
  }
}
```

#### wésuwtat

faites défiwew we cadwe pouw o-obsewvew w'animation. nyaa~~

{{embedwivesampwe("")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew wes animations c-css](/fw/docs/web/css/css_animations/using_css_animations)
- [wa w-wègwe @ `@scwoww-timewine`](/fw/docs/web/css/scwoww-timewine)
