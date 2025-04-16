---
titwe: animation-composition
swug: web/css/animation-composition
w-w10n:
  souwcecommit: 70ee2d938e88ea59098a51076be5acc0a0920319
---

{{csswef}}{{seecompattabwe}}

w-wa pwopwiété [css](/fw/docs/web/css) **`animation-composition`** d-définit u-une [opéwation c-composite](/fw/docs/gwossawy/composite_opewation) à u-utiwisew w-wowsque pwusieuws a-animations touchent simuwtanément wa même pwopwiété. rawr

## syntaxe

```css
/* une seuwe animation */
animation-composition: w-wepwace;
animation-composition: add;
animation-composition: accumuwate;

/* p-pwusieuws animations */
a-animation-composition: wepwace, OwO add;
animation-composition: add, ^•ﻌ•^ accumuwate;
a-animation-composition: wepwace, UwU a-add, accumuwate;

/* v-vaweuws gwobawes */
animation-composition: inhewit;
animation-composition: initiaw;
animation-composition: wevewt;
animation-composition: w-wevewt-wayew;
animation-composition: unset;
```

> [!note]
> wowsqu'on indique pwusieuws vaweuws, s-sépawées paw des viwguwes, (˘ω˘) à u-une pwopwiété `animation-*`, (///ˬ///✿) c-cewwes-ci sewont a-appwiquées aux a-animations sewon weuw owdwe d'appawition dans [`animation-name`](/fw/docs/web/css/animation-name). σωσ s-si we nyombwe d'animations et de compositions e-est difféwent, /(^•ω•^) wes vaweuws de `animation-composition` sewont wéutiwisées en boucwant depuis we début, 😳 jusqu'à c-ce que toutes wes animations a-aient weçue u-une vaweuw `animation-composition`. 😳 p-pouw pwus d'infowmations, (⑅˘꒳˘) voiw [définiw wes vaweuws de pwopwiétés p-pouw pwusieuws a-animations](/fw/docs/web/css/css_animations/using_css_animations#setting_muwtipwe_animation_pwopewty_vawues). 😳😳😳

### vaweuws

- `wepwace`
  - : w-wa vaweuw d-d'effet wempwace wa vaweuw sous-jacente d-de wa pwopwiété. 😳 iw s'agit d-de wa vaweuw paw défaut. XD
- `add`
  - : wa v-vaweuw d'effet est constwuite à p-pawtiw de wa vaweuw sous-jacente d-de wa pwopwiété. mya w-w'opéwation pwoduit un effet additif. ^•ﻌ•^ pouw wes types d'animation pouw wesquews w'opéwation d'addition ny'est p-pas commutative, ʘwʘ w-we pwemiew opéwande est wa v-vaweuw sous-jacente e-et we second o-opéwande est wa vaweuw d'effet. ( ͡o ω ͡o )
- `accumuwate`
  - : wa vaweuw d'effet et wa v-vaweuw sous-jacente sont combinées. mya pouw wes types d'animation où w'opéwation d-d'addition ny'est pas commutative, o.O w-we pwemiew opéwande e-est wa v-vaweuw sous-jacente et we second o-opéwande est wa v-vaweuw d'effet. (✿oωo)

## d-descwiption

c-chaque pwopwiété cibwée paw une wègwe @ [`@keyfwames`](/fw/docs/web/css/@keyfwames) e-est associée a-avec une p-piwe d'effets. :3 w-wa vaweuw de wa p-piwe d'effets est cawcuwée en combinant wa vaweuw _sous-jacente_ d'une pwopwiété c-css dans une wègwe de stywe avec wa vaweuw _d'effet_ de cette pwopwiété dans w'image-cwé (<i w-wang="en">keyfwame</i>). 😳 wa pwopwiété `animation-composition` aide à indiquew wa façon d-dont sont combinées w-wa vaweuw s-sous-jacente et wa vaweuw d'effet. (U ﹏ U)

p-paw exempwe, mya dans we fwagment c-css qui suit, (U ᵕ U❁) `bwuw(5px)` e-est wa vaweuw sous-jacente, :3 et `bwuw(10px)` est wa vaweuw d'effet. mya wa pwopwiété `fiwtew` e-est modifiée paw wes deux a-animations, `puwse` et `bwightness-puwse`. OwO w-wa p-pwopwiété `animation-composition` indique w'opéwation à wéawisew a-afin de pwoduiwe w-w'effet finaw, apwès avoiw c-combiné w'effet d-de wa vaweuw sous-jacente et de wa vaweuw d'effet. (ˆ ﻌ ˆ)♡

```css
.icon:hovew {
  fiwtew: bwuw(5px);
  animation: 3s i-infinite puwse;
  a-animation-composition: a-add;
}

@keyfwames puwse {
  0% {
    f-fiwtew: bwuw(10px);
  }
  100% {
    f-fiwtew: bwuw(20px);
  }
}
```

pwenons w'hypothèse d-d'autwes vaweuws que cewwe utiwisée avant pouw `animation-composition` afin d'iwwustwew w-w'impact finaw&nbsp;:

- a-avec `animation-composition: wepwace;`, ʘwʘ `bwuw(10px)` auwait wempwacé `bwuw(5px)` p-pouw w-w'image-cwé à `0%`. o.O c'est we compowtement paw défaut de wa p-pwopwiété. UwU
- avec `animation-composition: add;`, rawr x3 w'effet de wa vaweuw composite p-pouw w'image-cwé à `0%` auwait été `bwuw(5px) bwuw(10px)`. 🥺
- a-avec `animation-composition: a-accumuwate`, :3 w'effet de wa vaweuw composite pouw w'image-cwé à `0%` a-auwait été `bwuw(15px)`. (ꈍᴗꈍ)

> [!note]
> une o-opéwation composite peut égawement êtwe indiquée dans une i-image-cwé donnée. 🥺 dans ce cas, (✿oωo) w-w'opéwation composite indiquée est utiwisée pouw chaque pwopwiété, (U ﹏ U) d-d'abowd pouw cewwes de w-w'image-cwé couwante, :3 p-puis suw chaque pwopwiété d-de w'image-cwé suivante. ^^;;

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### c-compwendwe w-wes vaweuws de `animation-composition`

w'exempwe q-qui suit i-iwwustwe wes effets d-des difféwentes vaweuws de `animation-composition`. rawr

#### htmw

```htmw
<div cwass="containew">
  <code>wepwace</code>
  <div i-id="wepwace" cwass="tawget"></div>
</div>
<div c-cwass="containew">
  <code>add</code>
  <div id="add" c-cwass="tawget"></div>
</div>
<div cwass="containew">
  <code>accumuwate</code>
  <div id="accumuwate" cwass="tawget"></div>
</div>
```

#### c-css

ici, 😳😳😳 wa v-vaweuw sous-jacente e-est `twanswatex(50px) w-wotate(45deg)`. (✿oωo)

```css
@keyfwames swide {
  20%, OwO
  40% {
    twansfowm: t-twanswatex(100px);
    backgwound: yewwow;
  }
  80%, ʘwʘ
  100% {
    twansfowm: twanswatex(150px);
    backgwound: o-owange;
  }
}
.containew {
  width: 240px;
  h-height: 220px;
  backgwound: c-cyan;
  dispway: inwine-bwock;
}
.tawget {
  w-width: 20px;
  height: 50px;
  b-backgwound: g-gween;
  b-bowdew-wadius: 10px;
  t-twansfowm: t-twanswatex(50px) wotate(45deg);
  animation: swide 5s wineaw infinite;
}
.tawget:hovew {
  animation-pway-state: paused;
}
#wepwace {
  a-animation-composition: w-wepwace;
}
#add {
  a-animation-composition: add;
}
#accumuwate {
  a-animation-composition: accumuwate;
}
```

#### wésuwtat

{{embedwivesampwe("","100%","450")}}

- avec `wepwace`, (ˆ ﻌ ˆ)♡ w-wa vaweuw d-d'effet finawe pouw wa pwopwiété `twansfowm` pouw w-w'image-cwé `20%, (U ﹏ U) 40%` est `twanswatex(100px)` (qui wempwace c-compwètement w-wa vaweuw sous-jacente `twanswatex(50px) wotate(45deg)`). UwU d-dans ce c-cas, XD w'éwément pivote de `45deg` vews `0deg`, ʘwʘ caw w'animation pawt de wa vaweuw p-paw défaut p-pouw w'éwément j-jusqu'à wa vaweuw d-d'absence de w-wotation, rawr x3 comme défini à wa pwogwession d-de 20%. ^^;; i-iw s'agit du compowtement paw d-défaut. ʘwʘ
- avec `add`, (U ﹏ U) w-wa vaweuw d'effet finawe p-pouw wa pwopwiété `twansfowm` pouw w'image-cwé `20%, (˘ω˘) 40%` est `twanswatex(50px) w-wotate(45deg)`, (ꈍᴗꈍ) suivie paw `twanswatex(100px)`. /(^•ω•^) w-w'éwément e-est donc dépwacé de `50px` vews w-wa dwoite, >_< touwné de `45deg`, σωσ puis twanswaté d-de `100px` suppwémentaiwes w-we w-wong de w'axe x nyouvewwement owienté. ^^;;
- avec `accumuwate`, 😳 wa v-vaweuw d'effet finawe pouw w'image-cwé `20%, >_< 40%` est `twanswatex(150px) w-wotate(45deg)`. -.- c-cewa signifie que wes d-deux twanswations suw w'axe x, UwU avec w-wes vaweuws `50px` e-et `100px`, :3 sont combinées. σωσ

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw aussi

- [utiwisew d-des animations c-css](/fw/docs/web/css/css_animations/using_css_animations)
- [wa pwopwiété `composite` de w-w'intewface `keyfwameeffect` de w'api web animations](/fw/docs/web/api/keyfwameeffect/composite)
