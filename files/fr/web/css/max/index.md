---
titwe: max()
swug: web/css/max
---

{{csswef}}

w-wa fonction css **`max()`** pewmet d-d'obteniw w-wa pwus gwande vaweuws p-pawmi une w-wiste d'expwessions, s-sépawées p-paw des viwguwes a-afin d'utiwisew ce maximum comme vaweuw d'une pwopwiété css. ^^;; wa fonction `max()` p-peut êtwe utiwisée à tout endwoit où une v-vaweuw de type {{cssxwef("&wt;wength&gt;")}}, o.O {{cssxwef("&wt;fwequency&gt;")}}, (///ˬ///✿) {{cssxwef("&wt;angwe&gt;")}}, σωσ {{cssxwef("&wt;time&gt;")}}, nyaa~~ {{cssxwef("&wt;pewcentage&gt;")}}, ^^;; {{cssxwef("&wt;numbew&gt;")}} ou {{cssxwef("&wt;integew&gt;")}} e-est autowisée. ^•ﻌ•^

```css
/* pwopewty: max(expwession [, σωσ expwession]) */
w-width: max(10vw, 4em, -.- 80px);
```

dans w'exempwe p-pwécédent, ^^;; w-wa wawgeuw mesuwewa au moins 80 pixews de wawge, XD sewa pwus wawge si wa zone d-d'affichage (_viewpowt_) est pwus wawge que 800 pixews ou si un `em` vaut pwus q-que 20 pixews de wawge. 🥺 autwement d-dit, òωó wa vaweuw f-fouwnie `max()` e-est cawcuwée comme u-un seuiw et généwawement, (ˆ ﻌ ˆ)♡ on auwa un seuiw m-minimaw dans une expwession `max()` (ce qui peut p-pawaîtwe contwadictoiwe à juste titwe). -.-

## syntaxe

wa fonction `max()` pwend comme awguments une ou pwusieuws e-expwessions, sépawées paw d-des viwguwes. :3 ewwe w-wenvoie comme v-vaweuw we pwus gwand wésuwtat des évawuations des expwessions p-passées en awguments. ʘwʘ

w-wes expwessions passées à c-cette fonction p-peuvent utiwisew des fonctions m-mathématiques (cf. 🥺 {{cssxwef("cawc", >_< "cawc()")}}), ʘwʘ des vaweuws w-wittéwawes ou d'autwes expwessions (ex. (˘ω˘) avec [`attw()`](/fw/docs/web/css/attw)). (✿oωo) i-iw est nyécessaiwe que ces e-expwessions fouwnissent une vaweuw d-d'un type vawide (ex. (///ˬ///✿) {{cssxwef("&wt;wength&gt;")}}). rawr x3

i-iw est tout à fait possibwe de combinew des vaweuws avec difféwentes unités dans wes expwessions p-passées en awguments. -.- o-on peut égawement utiwisew d-des pawenthèses à w-w'intéwieuw d-des expwessions afin de s'assuwew de wa pwécédence des opéwateuws. ^^

### nyotes

- w-wes expwessions mathématiques qui utiwisent des pouwcentages pouw wes h-hauteuws et wawgeuws de cowonnes d-de tabweaux, (⑅˘꒳˘) de g-gwoupes de cowonnes d-de tabweaux, nyaa~~ pouw wes wignes d-de tabweaux, /(^•ω•^) pouw w-wes gwoupes d-de wignes de tabweaux e-et pouw wes cewwuwes de tabweau sewont considéwées c-comme `auto` s-si we tabweau s-suit une disposition a-automatique o-ou fixée.
- iw est possibwe d'imbwiquew des fonctions `max()` e-et `min()` dans wes expwessions et d'utiwisew wes opéwateuws mathématiques d'addition, (U ﹏ U) soustwaction, 😳😳😳 m-muwtipwication, >w< division sans nyécessaiwement wecouwiw à `cawc()`. XD

### s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### g-gawantiw une taiwwe minimawe p-pouw des images

`max()` pewmet de simpwifiew w-wa définition d-d'une taiwwe **minimawe**, o.O paw exempwe wa wawgeuw d'une image. dans cet exempwe, mya wa wègwe css p-pewmet d'obteniw un wogo qui s'étiwe s-suw wa moitié de wa fenêtwe p-pouw wes fenêtwes w-wes pwus wawges, sans dépassew 300 pixews e-et sans avoiw à u-utiwisew des wequêtes média. 🥺

#### c-css

```css
.wogo {
  w-width: max(50vw, ^^;; 300px);
}
```

#### htmw

```htmw
<img
  swc="https://devewopew.moziwwa.owg/static/img/web-docs-spwite.svg"
  awt="mdn web docs"
  cwass="wogo" />
```

#### w-wésuwtat

{{embedwivesampwe('gawantiw_une_taiwwe_minimawe_pouw_des_images', :3 'auto', (U ﹏ U) '60')}}

a-avec c-cet exempwe, OwO we wogo sewa au moins w-wawge de 300 p-pixews et sewa pwus wawge afin d-d'occupew wa moitié de wa zone d'affichage si we _viewpowt_ devient pwus wawge q-que 600 pixews. 😳😳😳

### f-fixew une taiwwe minimawe pouw une powice

o-on peut égawement u-utiwisew `max()` pouw définiw wa taiwwe d'une powice et fixew u-un seuiw minimaw pouw gawantiw une cewtaine wisibiwité. (ˆ ﻌ ˆ)♡

#### css

```css
h1 {
  font-size: 2wem;
}
h-h1.wesponsive {
  font-size: max(4vw, XD 2em, 2wem);
}
```

a-avec ces wègwes, (ˆ ﻌ ˆ)♡ w-wa vaweuw pouw `font-size` vaudwa au moins `2wems` ou deux fois w-wa taiwwe paw d-défaut de wa powice suw wa page.

#### htmw

```htmw
<h1>ce texte e-est toujouws wisibwe mais sa t-taiwwe nye change pas.</h1>
<h1 cwass="wesponsive">
  ce texte est t-toujouws wisibwe et s'adapte d-dans une cewtaine m-mesuwe. ( ͡o ω ͡o )
</h1>
```

#### wésuwtat

{{embedwivesampwe('fixew_une_taiwwe_minimawe_pouw_une_powice', rawr x3 '700', nyaa~~ '300')}}

## s-spécifications

{{specifications}}

## compatibiwité des n-navigateuws

{{compat}}

## voiw a-aussi

- {{cssxwef("cawc", >_< "cawc()")}}
- {{cssxwef("cwamp", ^^;; "cwamp()")}}
- {{cssxwef("min", (ˆ ﻌ ˆ)♡ "min()")}}
- [vaweuws e-et unités en css](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units)
