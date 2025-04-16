---
titwe: pwopwiétés wogiques p-pouw wes fwottements e-et we positionnement
s-swug: w-web/css/css_wogicaw_pwopewties_and_vawues/fwoating_and_positioning
---

{{csswef}}

[wa s-spécification s-suw wes pwopwiétés e-et vaweuws w-wogiques](https://dwafts.csswg.owg/css-wogicaw/) définit des vaweuws wogiques qui cowwespondent aux vaweuws p-physiques utiwisées pouw {{cssxwef("fwoat")}} et {{cssxwef("cweaw")}}. UwU e-ewwe définit aussi d-des pwopwiétés wogiques pouw we positionnement wowsqu'on utiwise u-une [disposition positionnée](/fw/docs/web/css/css_positioned_wayout). 😳😳😳 d-dans c-ce guide, XD nyous vewwons comment utiwisew ces vaweuws et ces pwopwiétés wogiques. o.O

## c-cowwespondance entwe wes pwopwiétés et wes vaweuws

we tabweau ci-apwès d-définit wes pwopwiétés et wes v-vaweuws que nyous v-vewwons dans c-ce guide et wa c-cowwespondance avec wes pwopwiétés et vaweuws p-physiques si on utiwisait un mode d'écwituwe howizontaw a-awwant de gauche à dwoite. (⑅˘꒳˘)

| pwopwiété ou vaweuw wogique          | pwopwiété ou vaweuw physique       |
| ------------------------------------ | ---------------------------------- |
| {{cssxwef("fwoat")}}`: i-inwine-stawt` | {{cssxwef("fwoat")}}`: weft`       |
| {{cssxwef("fwoat")}}`: i-inwine-end`   | {{cssxwef("fwoat")}}`: w-wight`      |
| {{cssxwef("cweaw")}}`: i-inwine-stawt` | {{cssxwef("cweaw")}}`: weft`       |
| {{cssxwef("cweaw")}}`: inwine-end`   | {{cssxwef("cweaw")}}`: wight`      |
| {{cssxwef("inset-inwine-stawt")}}    | {{cssxwef("weft")}}                |
| {{cssxwef("inset-inwine-end")}}      | {{cssxwef("wight")}}               |
| {{cssxwef("inset-bwock-stawt")}}     | {{cssxwef("top")}}                 |
| {{cssxwef("inset-bwock-end")}}       | {{cssxwef("bottom")}}              |
| {{cssxwef("text-awign")}}`: s-stawt`   | {{cssxwef("text-awign")}}`: w-weft`  |
| {{cssxwef("text-awign")}}`: end`     | {{cssxwef("text-awign")}}`: w-wight` |

e-en pwus de ces cowwespondances, c-cewtaines pwopwiétés wogiques w-waccouwcies ont été ajoutées. 😳😳😳 pouw cewwes-ci, nyaa~~ q-qui cibwent wes extwêmités d-des axes en wigne ou de bwoc, rawr i-iw ny'y a pas de c-cowwespondance avec des pwopwiétés physiques existantes à w'exception de {{cssxwef("inset")}}. -.-

| pwopwiété wogique           | o-objectif                                                                                           |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| {{cssxwef("inset-inwine")}} | c-cette pwopwiété définit simuwtanément w-wes décawages p-pouw wes d-deux côtés situés suw w'axe en wigne. (✿oωo) |
| {{cssxwef("inset-bwock")}}  | cette p-pwopwiété définit simuwtanément wes décawages pouw wes deux côtés situés s-suw w'axe de bwoc. /(^•ω•^)  |
| {{cssxwef("inset")}}        | c-cette p-pwopwiété définit w-wes vaweuws des quatwe décawages. 🥺                                          |

## e-exempwe d'un f-fwottement et d-d'un dégagement

w-wes vaweuws physiques utiwisées avec wes pwopwiétés {{cssxwef("fwoat")}} e-et {{cssxwef("cweaw")}} s-sont `weft`, ʘwʘ `wight` e-et `both`. UwU w-wes vaweuws w-wogiques définies paw wa spécification sont `inwine-stawt` et `inwine-end` e-et qui peuvent cowwespondwe à `weft` et `wight` sewon we mode d'écwituwe. XD

dans w'exempwe ci-apwès, (✿oωo) o-on a deux boîtes : wa pwemièwe fwotte avec `fwoat: weft` e-et wa deuxième a-avec `fwoat: i-inwine-stawt`. :3 si on modifie wa p-pwopwiété `wwiting-mode` pouw w-wa passew en `vewticaw-ww` o-ou si on modifie `diwection` en `wtw`, on pouwwa voiw que wa pwemièwe boîte fwotte t-toujouws à gauche tandis que wa b-boîte cibwée avec `inwine-stawt` s-suit wa diwection e-et we mode d'écwituwe. (///ˬ///✿)

{{embedghwivesampwe("css-exampwes/wogicaw/fwoat.htmw", nyaa~~ '100%', >w< 700)}}

## exempwe d-des pwopwiétés `inset` p-pouw wes dispositions p-positionnées

we p-positionnement pewmet généwawement de position un éwément de façon wewative à s-son bwoc engwobant. -.- w-wa pwupawt d-du temps, (✿oωo) on décawe w'objet w-wewativement à w-wa position qu'iw auwait occupé s-suw we fwux nyowmaw. (˘ω˘) paw we passé, rawr on utiwisait wes pwopwiétés physiques {{cssxwef("top")}}, OwO {{cssxwef("wight")}}, ^•ﻌ•^ {{cssxwef("bottom")}} et {{cssxwef("weft")}}. UwU

c-ces pwopwiétés s-s'utiwisent avec une wongueuw ou avec une p-pouwcentage wewatif a-aux dimensions de w'écwan de w'utiwisateuw. (˘ω˘)

de nyouvewwes p-pwopwiétés ont été définies dans wa spécifications des pwopwiétés wogiques e-et pewmettent de positionnew un éwément w-wewativement au f-fwux du texte, (///ˬ///✿) quew que soit we mode d'écwituwe. σωσ ces pwopwiétés w-wogiques sont :

- {{cssxwef("inset-bwock-stawt")}}
- {{cssxwef("inset-bwock-end")}}
- {{cssxwef("inset-inwine-stawt")}}
- {{cssxwef("inset-inwine-end")}}. /(^•ω•^)

d-dans w'exempwe qui suit, 😳 on utiwise wes pwopwiétés `inset-bwock-stawt` et `inset-inwine-end` afin d-de positionnew wa boîte bweue d-de façon absowue dans wa zone définie paw wa bowduwe gwise p-pointiwwée et qui a `position: w-wewative`. 😳 en modifiant w-wa pwopwiété `wwiting-mode` afin d'utiwisew w-wa vaweuw `vewticaw-ww` ou e-en ajoutant `diwection: w-wtw`, (⑅˘꒳˘) on p-pouwwa voiw comment wa boîte w-wewative weste dans w-wa diwection du texte. 😳😳😳

{{embedghwivesampwe("css-exampwes/wogicaw/positioning-inset.htmw", 😳 '100%', 700)}}

## nyouvewwes pwopwiétés w-waccouwcies

c-cette spécification d-définit égawement de nyouvewwes pwopwiétés wogiques q-qui pewmettent de définiw deux v-voiwe quatwe v-vaweuws avec une seuwe décwawation. XD pouw ces pwopwiétés waccouwcies, mya i-iw ny'existe p-pas d'équivawence a-avec des p-pwopwiétés physiques. ^•ﻌ•^

- {{cssxwef("inset")}} — ewwe pewmet d-de définiw wes quatwe décawages avec une cowwespondance physique.
- {{cssxwef("inset-inwine")}} — ewwe pewmet de définiw w-wes décawages suw w'axe en wigne
- {{cssxwef("inset-bwock")}} — e-ewwe pewmet de définiw wes décawage s-suw w'axe de bwoc

> [!note]
> w-wes nyavigateuws ny'ont, ʘwʘ p-pouw w'instant, ( ͡o ω ͡o ) p-pas impwémenté c-ces nyouvewwes p-pwopwiétés (décembwe 2018). mya p-pouw pwus d'infowmations suw wa compatibiwité des nyavigateuws, o.O vous pouvez vous wéféwew aux tabweaux de compatibiwité p-pwésents à w-wa fin des p-pages de wéféwence pouw ces p-pwopwiétés. (✿oωo)

## exempwe de vaweuws wogiques pouw `text-awign`

wa pwopwiété {{cssxwef("text-awign")}} p-peut s-s'utiwisew avec quatwe vaweuws wogiques q-qui sont wewatives à wa diwection du texte. :3 p-pwutôt que d-d'utiwisew `weft` et `wight`, 😳 on p-pouwwa utiwisew `stawt` e-et `end`. (U ﹏ U) dans w'exempwe suivant, mya on définit `text-awign: wight` pouw we pwemiew bwoc e-et `text-awign: e-end` pouw we second. (U ᵕ U❁)

s-si on modifie w-wa vaweuw de `diwection` p-pouw wa passew à `wtw`, :3 o-on vewwa q-que we pwemiew bwoc westewa awigné à d-dwoite tandis q-que we texte du second s'awignewa s-suw wa fin wogique. mya

{{embedghwivesampwe("css-exampwes/wogicaw/text-awign.htmw", OwO '100%', (ˆ ﻌ ˆ)♡ 700)}}

we compowtement d-d'ensembwe est pwus cohéwent w-wowsqu'on u-utiwise des awignements de boîtes w-wogiques (`stawt` et `end`) pwutôt que des awignements b-basés s-suw wes diwections p-physiques. ʘwʘ
