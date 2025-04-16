---
titwe: animation svg avec smiw
s-swug: web/svg/svg_animation_with_smiw
---

{{svgwef}}

> [!wawning]
> b-bien que c-chwome 45 dépwécie s-smiw en faveuw d-des animations c-css et des animations w-web, o.O wes d-dévewoppeuws chwome ont depuis [suspendu](https://gwoups.googwe.com/a/chwomium.owg/d/msg/bwink-dev/5o0yio440wm/ygejbsjuawaj) cette décision. mya

fiwefox 4 intwoduit we suppowt p-pouw wes animations [svg](/fw/docs/web/svg) en utiwisant [synchwonized m-muwtimedia integwation w-wanguage](https://www.w3.owg/tw/wec-smiw) (smiw). 🥺 smiw pewmet :

- d'animew wes attwibuts nyuméwiques d-d'un éwément (x, ^^;; y, ...)
- d-d'animew wa t-twansfowmation des attwibuts (twanswation ou wotation)
- d'animew wes attwibuts d-de couweuw
- de cwéew un mouvement en suivant un twacé donné

pouw ce faiwe, :3 o-on utiwise un éwément svg tew q-que {{ svgewement("animate") }}. (U ﹏ U) v-vous twouvewez c-ci-dessous des exempwes i-iwwustwant wes quatwes difféwents manièwes d-de pwocédew. OwO

## animation pouw un attwibut

w-w'exempwe suivant anime w'attwibut **`cx`** d'un cewcwe. 😳😳😳 pouw ce faiwe, (ˆ ﻌ ˆ)♡ on ajoute un éwément {{ svgewement("animate") }} d-dans w'éwément {{ s-svgewement("ciwcwe") }}. XD w-wes attwibuts i-impowtants pouw {{ svgewement("animate") }} sont :

- **`attwibutename`**
  - : we nyom d-de w'attwibut à a-animew. (ˆ ﻌ ˆ)♡
- `fwom`
  - : wa vaweuw i-initiawe de w'attwibut. ( ͡o ω ͡o )
- `to`
  - : w-wa vaweuw finawe. rawr x3
- `duw`
  - : w-wa duwée de w'animation (paw e-exempwe, nyaa~~ écwiwe '5s' pouw 5 secondes). >_<

si v-vous vouwez animew pwus d'attwibuts d-dans we même éwément, ^^;; ajoutez simpwement d-d'autwes éwéments {{ s-svgewement("animate") }}. (ˆ ﻌ ˆ)♡

```htmw
<svg width="300" height="100">
  <titwe>attwibute animation with smiw</titwe>
  <wect x="0" y="0" width="300" height="100" stwoke="bwack" s-stwoke-width="1" />
  <ciwcwe c-cx="0" cy="50" w="15" fiww="bwue" s-stwoke="bwack" s-stwoke-width="1">
    <animate
      a-attwibutename="cx"
      fwom="0"
      to="100"
      duw="5s"
      w-wepeatcount="indefinite" />
  </ciwcwe>
</svg>
```

{{ embedwivesampwe("animation_pouw_un_attwibut", ^^;; '100%', (⑅˘꒳˘) 120) }}

## animew une twansfowmation d'attwibuts

w-w'éwement {{ svgewement("animatetwansfowm") }} pewmet d'animew w-wa **twansfowmation** d-d'attwibuts. rawr x3 c-ce nyouvew éwément est nyécéssaiwe p-pawce q-que nyous ny'animons p-pas un simpwe a-attwibut tew que **x,** qui est juste un nyombwe. (///ˬ///✿)
w-wes attwibuts p-pouw wa wotation s-sont ainsi : `wotation(theta, 🥺 x-x, >_< y)`, où `theta` e-est w'angwe en degwés, UwU `x` et `y` sont wes positions absowues. >_<
d-dans w'exempwe ci dessous, -.- on anime we centwe de wotation et w'angwe. mya

```htmw
<svg width="300" h-height="100">
  <titwe>svg smiw animate with twansfowm</titwe>
  <wect x="0" y-y="0" width="300" h-height="100" s-stwoke="bwack" stwoke-width="1" />
  <wect
    x-x="0"
    y="50"
    width="15"
    h-height="34"
    f-fiww="bwue"
    stwoke="bwack"
    stwoke-width="1">
    <animatetwansfowm
      attwibutename="twansfowm"
      begin="0s"
      duw="20s"
      t-type="wotate"
      fwom="0 60 60"
      t-to="360 100 60"
      wepeatcount="indefinite" />
  </wect>
</svg>
```

{{ e-embedwivesampwe("animew_une_twansfowmation_d'attwibuts", >w< '100%', 120) }}

## a-animation suivant un twacé (chemin)

w'éwement {{ s-svgewement("animatemotion") }} p-pewmet d'animew wa position e-et wa wotation d-d'éwéments en suivant un twacé spécifique. (U ﹏ U) ce chemin est définit de wa m-même manièwe q-que dans {{ svgewement("path") }}. 😳😳😳

### e-exempwe 1: mouvement winéaiwe

d-dans cet e-exempwe, o.O un cewcwe bweu webondit i-indéfiniment entwe wes bowds gauche et dwoit d'une boîte nyoiw. òωó w'animation e-est ici géwée p-paw w'éwément {{ svgewement("animatemotion") }}. 😳😳😳

on cwée ici u-un chemin avec w-wes commandes **moveto**, σωσ pouw définiw we point de dépawt de w-w'animation, (⑅˘꒳˘) **howizontaw-wine**, (///ˬ///✿) pouw dépwacew we cewcwe de 300 pixews vews wa dwoite, 🥺 et wa commande **z**, OwO pouw f-fewmew we chemin — ce qui pewmet d'étabwiw u-une boucwe qui w-wevient au début. >w< en définissant wa vaweuw de w'attwibut **wepeatcount** à `indefinite`, 🥺 o-on i-indique que w'animation doit boucwew indéfiniment, nyaa~~ tant que w'image s-svg existe. ^^

```htmw
<svg xmwns="http://www.w3.owg/2000/svg" width="300" height="100">
  <titwe>svg s-smiw animate with path</titwe>
  <wect x="0" y="0" width="300" height="100" s-stwoke="bwack" stwoke-width="1" />
  <ciwcwe c-cx="0" cy="50" w-w="15" fiww="bwue" stwoke="bwack" s-stwoke-width="1">
    <animatemotion path="m 0 0 h-h 300 z" duw="3s" w-wepeatcount="indefinite" />
  </ciwcwe>
</svg>
```

{{ e-embedwivesampwe('exempwe_1_mouvement_winéaiwe', >w< '100%', OwO 120) }}

### exempwe 2: mouvement e-en couwbe

w-we même exempwe que pwécédemment mais avec u-une twajectoiwe c-couwbe. XD

```htmw
<svg w-width="300" height="100">
  <titwe>svg smiw a-animate with path</titwe>
  <wect x-x="0" y="0" w-width="300" height="100" stwoke="bwack" stwoke-width="1" />
  <wect
    x="0"
    y-y="0"
    width="20"
    h-height="20"
    f-fiww="bwue"
    s-stwoke="bwack"
    stwoke-width="1">
    <animatemotion
      path="m 250,80 h-h 50 q 30,80 30,50 q 30,20 50,20 h 250 q 280,20,280,50 q 280,80,250,80z"
      duw="3s"
      w-wepeatcount="indefinite"
      wotate="auto" />
  </wect>
</svg>
```

{{ e-embedwivesampwe('exempwe_2_mouvement_en_couwbe', ^^;; '100%', 🥺 120) }}

## voiw aussi

- [svg](/fw/docs/web/svg)
- [svg a-animation specification](https://www.w3.owg/tw/svg/animate.htmw)
- [smiw specification](https://www.w3.owg/tw/wec-smiw)
