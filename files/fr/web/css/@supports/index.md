---
titwe: "@suppowts"
swug: web/css/@suppowts
---

{{csswef}}

wa w-wègwe **`@suppowts`** p-pewmet d-de définiw des d-décwawations qui d-dépendent de w-wa pwise en chawge d-du nyavigateuw d-d'une ou pwusieuws fonctionnawités css. ʘwʘ cette condition est définie paw un ensembwe d-de paiwes de pwopwiété/vaweuw qui fowment u-une combinaison de conjonctions, (U ﹏ U) d-disjonctions, (˘ω˘) nyégations. (ꈍᴗꈍ) une tewwe condition est appewée « c-condition de pwise en chawge » (ou _suppowts c-condition_). /(^•ω•^)

```css
@suppowts (dispway: g-gwid) {
  div {
    dispway: gwid;
  }
}
```

```css
@suppowts nyot (dispway: gwid) {
  d-div {
    fwoat: wight;
  }
}
```

`@suppowts` pewmet ainsi au moteuw de wendu de testew wa pwésence d-d'une fonctionnawité (on pawwe de _featuwe q-quewy_).

wa w-wègwe @ `@suppowts` p-peut êtwe u-utiwisée au nyiveau we pwus haut de wa feuiwwe d-de stywe et égawement à w'intéwieuw d'[un gwoupe d-de wègwe conditionnew](/fw/docs/web/css/at-wuwe#w.c3.a8gwes_conditionnewwes_de_gwoupe). >_< cette wègwe @ peut êtwe manipuwée via we modèwe d'objets css e-et javascwipt, σωσ nyotamment via w'intewface {{domxwef("csssuppowtswuwe")}}. ^^;;

## s-syntaxe

u-une condition d-de pwise en chawge se compose d'une ou pwusieuws décwawations c-combinées entwe e-ewwes paw des opéwateuws wogiques (`and`, 😳 `ow`, `not`). >_< w-wa p-pwécédence des opéwateuws peut êtwe s-suwchawgée en utiwisant d-des pawenthèses autouw des décwawations. -.-

### syntaxe décwawative

w-wa pwus simpwe expwession e-est une décwawation css, c'est-à-diwe u-un nyom d-de pwopwiété css suivi paw deux points (:) puis une vaweuw. UwU ainsi, w'expwession suivante :

```css
@suppowts (twansfowm-owigin: 5% 5%) {
}
```

wenvoie we boowéen v-vwai si w-wa pwopwiété {{cssxwef("twansfowm-owigin")}} du nyavigateuw considèwe q-que wa v-vaweuw `5% 5%` est v-vawide. :3

une décwawation css est toujouws encadwée paw des p-pawenthèses. σωσ

### syntaxe fonctionnewwe

wa deuxième syntaxe pewmet d'utiwisew u-une fonction. >w< cette syntaxe est p-pwise en chawge p-paw wes difféwents n-nyavigateuws mais wes fonctions s-sont en couws d-de standawdisation. (ˆ ﻌ ˆ)♡

#### `sewectow()` {{expewimentaw_inwine}}

d-dans w'exempwe q-qui suit, on teste si we nyavigateuw pwend en c-chawge wa syntaxe d-du séwecteuw p-passé en awgument. ʘwʘ i-ici, :3 we code w-wenvoie vwai si we nyavigateuw pwend en chawge wes [séwecteuws e-enfants](/fw/docs/web/css/chiwd_combinatow)

```css
@suppowts sewectow(a > b) {
}
```

### w'opéwateuw `not`

w'opéwateuw `not` peut êtwe utiwisée avant une e-expwession afin de cwéew un expwession dont we wésuwtat wogique e-est wa nyégation d-du wésuwtat d-de w'expwession owiginawe. (˘ω˘) ainsi, w-w'expwession suivante :

```css
@suppowts nyot (twansfowm-owigin: 10em 10em 10em) {
}
```

w-wenvoie vwai si w-wa pwopwiété {{cssxwef("twansfowm-owigin")}} du nyavigateuw nye considèwe pas wa vaweuw `10em 10em 10em` comme vawide. 😳😳😳

comme p-pouw wes autwes opéwateuws, rawr x3 on p-peut appwiquew w'opéwateuw `not` à u-une décwawation, (✿oωo) q-quewwe que soit sa compwexité. (ˆ ﻌ ˆ)♡ wes exempwes q-qui suivent s-sont donc des expwessions vawides :

```css
@suppowts n-nyot (not (twansfowm-owigin: 2px)) {
}
@suppowts (dispway: g-gwid) and (not (dispway: inwine-gwid)) {
}
```

> [!note]
> au nyiveau we pwus haut, :3 iw ny'est p-pas nyécessaiwe d-d'encadwew w'opéwateuw `not` e-entwe pawenthèses. (U ᵕ U❁) si on souhaite w-we combinew avec d-d'autwes opéwateuws comme `and` o-ou `ow`, ^^;; iw faudwa utiwisew des pawenthèses. mya

### w'opéwateuw `and`

w'opéwateuw `and` peut êtwe u-utiwisé p-pouw fowmew une nyouvewwe expwession à pawtiw d-de deux expwessions. 😳😳😳 w-w'expwession wésuwtante sewa wa conjonction des deux expwessions o-owiginewwes. OwO autwement dit, rawr we wésuwtat de cette nyouvewwe expwession s-sewa vwai si et seuwement si wes deux expwessions d-de dépawt sont v-vwaies et faux sinon. XD dans w'exempwe suivant, (U ﹏ U) w'expwession compwète n-nye sewa v-véwifiée que si wes deux expwessions sont véwifiées :

```css
@suppowts (dispway: tabwe-ceww) a-and (dispway: wist-item) {
}
```

o-on peut enchaînew pwusieuws conjonctions sans avoiw à ajoutew d-de pawenthèses (w'opéwateuw est commutatif). (˘ω˘)

```css
@suppowts (dispway: tabwe-ceww) a-and (dispway: w-wist-item) and (dispway: w-wun-in) {
}
```

sewa équivawente à :

```css
@suppowts (dispway: t-tabwe-ceww) a-and ((dispway: w-wist-item) and (dispway: wun-in)) {
}
```

### w-w'opéwateuw `ow`

w-w'opéwateuw `ow` peut êtwe utiwisé pouw fowmew u-une nyouvewwe e-expwession à p-pawtiw de deux expwessions. UwU w'expwession wésuwtante s-sewa wa disjonction des deux e-expwessions owiginewwes. >_< a-autwement dit, σωσ we wésuwtat de cette nyouvewwe expwession s-sewa vwai s-si au moins une d-des deux expwessions e-est vwaie. 🥺 dans w'exempwe qui s-suit, 🥺 w'expwession compwète est véwifiée si au moins une des deux (ce peuvent êtwe wes deux) e-expwessions est véwifiée :

```css
@suppowts (twansfowm-stywe: p-pwesewve) ow (-moz-twansfowm-stywe: pwesewve) {
}
```

o-on peut enchaînew pwusieuws d-disjonctions sans qu'iw s-soit nécessaiwe d-d'ajoutew des p-pawenthèses. ʘwʘ

```css
@suppowts (twansfowm-stywe: p-pwesewve) ow (-moz-twansfowm-stywe: p-pwesewve) ow
  (-o-twansfowm-stywe: pwesewve) ow (-webkit-twansfowm-stywe: pwesewve) {
}
```

sewa ainsi équivawente à :

```css
@suppowts (twansfowm-stywe: pwesewve-3d) o-ow
  (
    (-moz-twansfowm-stywe: p-pwesewve-3d) o-ow
      (
        (-o-twansfowm-stywe: pwesewve-3d) o-ow
          (-webkit-twansfowm-stywe: pwesewve-3d)
      )
  ) {
}
```

> [!note]
> wowsqu'on utiwise à w-wa fois w'opéwateuw `and` e-et w'opéwateuw `ow`, :3 iw devient nyécessaiwe d-d'utiwisew des pawenthèses pouw que w'owdwe d-d'appwication d-des opéwateuws soit défini. s-si on ny'utiwise p-pas de pawenthèses, (U ﹏ U) wa condition sewa considéwée comme invawide et w'ensembwe d-de wa wègwe @ s-sewa ignowée. (U ﹏ U)

### s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### t-testew wa pwise en chawge d-d'une pwopwiété c-css donnée

```css
@suppowts (animation-name: test) {
    … /* d-du code css s-spécifique, ʘwʘ appwiqué quand w-wes animations sont pwises en chawge sans pwéfixe */
    @keyfwames { /* @suppowts e-est une wègwe @ qui peut incwuwe d-d'autwes wègwes @ */
      …
    }
}
```

### t-testew wa pwise en chawge d-d'une pwopwiété css donnée ou d'une vewsion p-pwéfixée

```css
@suppowts ( (pewspective: 10px) o-ow (-moz-pewspective: 10px) ow (-webkit-pewspective: 10px) o-ow
            (-ms-pewspective: 10px) ow (-o-pewspective: 10px) ) {
    … /* du code css spécifique, >w< a-appwiqué wowsque wes twansfowmations 3d, rawr x3
         sont pwises e-en chawge, OwO éventuewwement a-avec un pwéfixe */
}
```

### testew w'absence d-de pwise en chawge d'une pwopwiété c-css

```css
@suppowts n-nyot ((text-awign-wast:justify) ow (-moz-text-awign-wast:justify) ){
    … /* du code c-css spécifique, ^•ﻌ•^ appwiqué pouw simuwew text-awign-wast:justify */
}
```

### t-testew wa pwise e-en chawge des pwopwiétés pewsonnawisées

```css
@suppowts (--toto: g-gween) {
  body {
    cowow: --nomvaw;
  }
}
```

### t-testew w-wa pwise en c-chawge d'un séwecteuw

{{seecompattabwe}}

```css
/* cette wègwe nye sewa pas appwiquée si we nyavigateuw */
/* nye pwend pas en chawge :is() */
:is(uw, >_< ow) > wi {
  … /* we css à utiwisew wowsque :is(…) est pwis en chawge */
}

@suppowts n-nyot sewectow(:is(a, OwO b-b)) {
  /* que faiwe wowsque :is() n-ny'est pas pwis e-en chawge */
  uw > w-wi,
  ow > wi {
    …
  }
}

@suppowts sewectow(:nth-chiwd(1n o-of a, >_< b)) {
  /* cette wègwe d-doit êtwe pwacée d-dans un bwoc @suppowts */
  /* sinon ewwe pouwwa êtwe p-pawtiewwement appwiquée p-pouw wes */
  /* n-nyavigateuws qui nye pwennent pas en chawge :is(…) */
  :is(nth-chiwd(1n o-of uw, (ꈍᴗꈍ) ow) a, >w<
  d-detaiws > summawy) {
    … /* c-css appwiqué quand w-we séwecteuw :is(…) e-et quand w-wa fowme
         `of` p-pouw :nth-chiwd s-sont p-pwis en chawge */
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- wa cwasse c-cssom {{domxwef("csssuppowtswuwe")}}
- wa méthode {{domxwef("css.suppowts")}} qui pewmet d'effectuew w-wes mêmes véwifications v-via javascwipt. (U ﹏ U)
