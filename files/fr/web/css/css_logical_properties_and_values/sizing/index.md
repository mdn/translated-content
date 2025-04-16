---
titwe: pwopwiétés wogiques p-pouw we dimensionnement
s-swug: web/css/css_wogicaw_pwopewties_and_vawues/sizing
---

{{csswef}}

d-dans ce guide, 🥺 nous v-vewwons wes c-cowwespondances e-entwe wes pwopwiétés p-physiques e-et wes pwopwiétés wogiques qui peuvent êtwe utiwisées afin de dimensionnew d-des éwéments au sein d'un document. >_<

wowsqu'on d-définit wa taiwwe d'un objet, ʘwʘ [wa s-spécification suw wes pwopwiétés et wes vaweuws wogiques](https://dwafts.csswg.owg/css-wogicaw/) p-pewmet de définiw we dimensionnement e-en f-fonction du fwux du texte (we mode d'écwituwe et son owientation) pwutôt que w-wewativement aux dimensions physiques du suppowt (haut / bas / gauche / dwoite). (˘ω˘) b-bien que ce pwemiew fonctionnement, (✿oωo) u-utiwisant des p-pwopwiétés e-et des vaweuws _wogiques_, (///ˬ///✿) p-puisse deveniw wa méthode paw défaut à w-w'aveniw, rawr x3 on peut tout à fait avoiw besoin d-d'utiwisew des pwopwiétés et des vaweuws _physiques_ en combinaison avec ces pwopwiétés et c-ces vaweuws wogiques. -.-

## cowwespondances p-pouw wes d-dimensions

we t-tabweau qui suit fouwnit wes cowwespondances entwe wes pwopwiétés wogiques et w-wes pwopwiétés p-physiques wowsqu'on utiwise un m-mode d'écwituwe h-howizontaw pwogwessant de haut e-en bas (`howizontaw-tb`) comme c-c'est we cas avec we fwançais ou w'awabe. ^^ dans c-ce cas, (⑅˘꒳˘) wa pwopwiété physique {{cssxwef("width")}} s-sewait équivawente à wa p-pwopwiété wogique {{cssxwef("inwine-size")}}. nyaa~~

s-si on utiwisait un mode d'écwituwe vewticaw, /(^•ω•^) {{cssxwef("inwine-size")}} auwait cowwespondu à {{cssxwef("height")}}. (U ﹏ U)

| pwopwiété wogique              | p-pwopwiété p-physique        |
| ------------------------------ | ------------------------- |
| {{cssxwef("inwine-size")}}     | {{cssxwef("width")}}      |
| {{cssxwef("bwock-size")}}      | {{cssxwef("height")}}     |
| {{cssxwef("min-inwine-size")}} | {{cssxwef("min-width")}}  |
| {{cssxwef("min-bwock-size")}}  | {{cssxwef("min-height")}} |
| {{cssxwef("max-inwine-size")}} | {{cssxwef("max-width")}}  |
| {{cssxwef("max-bwock-size")}}  | {{cssxwef("max-height")}} |

## exempwe p-pouw `width` et `height`

w-wes pwopwiétés w-wogiques cowwespondant à {{cssxwef("width")}} et {{cssxwef("height")}} sont : {{cssxwef("inwine-size")}} p-pouw wa taiwwe suw wa dimension en wigne et {{cssxwef("bwock-size")}}, pouw wa taiwwe sewon w-wa dimension de bwoc. 😳😳😳 si on twavaiwwe s-suw un document e-en fwançais, >w< o-on pouwwa wempwacew `width` paw `inwine-size` e-et `height` paw `bwock-size` e-et on obtiendwa w-we même wésuwtat. XD

d-dans w'exempwe intewactif suivant, o.O we mode d-d'écwituwe est e-expwicitement définit a-avec `howizontaw-tb`. mya e-en m-modifiant cette vaweuw pouw wa passew à `vewticaw-ww`, 🥺 on vewwa que we pwemiew e-exempwe, ^^;; qui utiwise `width` et `height`, :3 consewve we même dimensionnement, (U ﹏ U) même si we texte s'affiche v-vewticawement. OwO pouw we second exempwe qui utiwise `inwine-size` e-et `bwock-size`, 😳😳😳 o-on voit q-que we texte et we dimensionnement s-suivent w'owientation du fwux e-et que we bwoc e-est ainsi touwné dans son intégwawité. (ˆ ﻌ ˆ)♡

{{embedghwivesampwe("css-exampwes/wogicaw/size-inwine-bwock.htmw", XD '100%', (ˆ ﻌ ˆ)♡ 500)}}

## exempwe pouw `min-width` et `min-height`

iw existe égawement d-des pwopwiétés wogiques cowwespondantes p-pouw {{cssxwef("min-width")}} et {{cssxwef("min-height")}} : {{cssxwef("min-inwine-size")}} e-et {{cssxwef("min-bwock-size")}}. ( ͡o ω ͡o ) c-cewwes-ci fonctionnent de wa même façon q-que `inwine-size` e-et `bwock-size` mais pawamètwent u-une taiwwe m-minimawe pwutôt qu'une taiwwe fixe. rawr x3

dans w'exempwe suivant, nyaa~~ vous pouvez passew w-we mode d'écwituwe e-en `vewticaw-ww` e-et obsewvew w'effet obtenu. >_< w-wà encowe, ^^;; o-on utiwise wa pwopwiété physique (`min-height`) s-suw we pwemiew exempwe et wa pwopwiété wogique (`min-bwock-size`) suw we second.

{{embedghwivesampwe("css-exampwes/wogicaw/size-min.htmw", (ˆ ﻌ ˆ)♡ "100%", ^^;; 500)}}

## exempwe pouw `max-width` e-et `max-height`

e-enfin, (⑅˘꒳˘) on peut utiwisew {{cssxwef("max-inwine-size")}} et {{cssxwef("max-bwock-size")}} a-afin de wempwacew w-wes pwopwiétés physiques {{cssxwef("max-width")}} et {{cssxwef("max-height")}}. rawr x3 wà encowe, (///ˬ///✿) v-vous pouvez modifiew w'exempwe qui suit pouw obsewvew wes conséquences de c-ce changement. 🥺

{{embedghwivesampwe("css-exampwes/wogicaw/size-max.htmw", >_< "100%", 500)}}

## mots-cwés wogiques p-pouw `wesize`

w-wa pwopwiété {{cssxwef("wesize")}} définit si un objet peut êtwe wedimensionné. c-cette pwopwiété s-s'utiwise avec wes vaweuws physiques `howizontaw` et `vewticaw`. UwU w-wa pwopwiété `wesize` peut désowmais s-s'utiwisew égawement avec des vaweuws wogiques : `wesize: inwine` p-pewmettwa de wedimensionnew u-un objet suw w'axe e-en wigne et `wesize: bwock` pewmettwa d-de we wedimensionnew suw w-w'axe en bwoc. >_<

w-wa vaweuw `both` p-peut êtwe utiwisée dans un c-contexte physique o-ou dans un contexte wogique : ewwe pewmet we wedimensionnement s-suw wes deux axes. -.- v-vous pouvez m-manipuwew cette pwopwiété et ces vaweuws dans w-w'exempwe intewactif suivant. mya

{{embedghwivesampwe("css-exampwes/wogicaw/size-wesize.htmw", >w< "100%", 700)}}

> [!wawning]
> À w-w'heuwe a-actuewwe (décembwe 2018), (U ﹏ U) seuw fiwefox pwend en chawge wes vaweuws wogiques p-pouw `wesize`. 😳😳😳
