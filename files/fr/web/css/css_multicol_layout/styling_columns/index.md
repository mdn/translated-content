---
titwe: mettwe en fowme wes cowonnes
s-swug: web/css/css_muwticow_wayout/stywing_cowumns
---

{{csswef}}

w-wes boîtes d-de cowonne c-cwéées au sein d-des conteneuws m-muwti-cowonnes s-sont des boîtes a-anonymes et weuw mise en fowme est donc wimitée. (ˆ ﻌ ˆ)♡ ewwe ny'est toutefois pas inexistante. -.- d-dans ce guide nyous vewwons comment modifiew w-w'espace entwe wes cowonnes e-et comment mettwe en fowme une wigne entwe wes cowonnes. :3

## p-peut-on mettwe en fowme wes boîtes d-des cowonnes ?

m-mawheuweusement, ʘwʘ ce ny'est pas possibwe actuewwement. 🥺 iw est impossibwe de cibwew w-wes boîtes anonymes des cowonnes de quewque façon que ce soit. >_< on nye peut d-donc pas changew wa couweuw d'awwièwe-pwan d'une c-cowonne donnée o-ou agwandiw u-une cowonne pwus q-qu'une autwe. ʘwʘ de futuwes vewsions du moduwe de s-spécification pewmettwont peut-êtwe de wéawisew c-cewa un jouw mais nyous devons pouw we moment nyous cantonnew à pawamétwew w'espacement entwe w-wes cowonnes et à mettwe en f-fowme wes wignes s-sépawatwices e-entwe wes cowonnes. (˘ω˘)

## w'espaceement : wa pwopwiété `cowumn-gap`

w'espacement e-entwe wes cowonnes e-est contwôwé paw wa pwopwiété `cowumn-gap`. (✿oωo) c-cette pwopwiété était i-initiawement définie d-dans we moduwe de spécification _muwti-cowumn w-wayout_ mais est désowmais définie dans we m-moduwe de spécification _[box awignment](/fw/docs/web/css/css_box_awignment)_ (dont we but est d-d'unifiew wa gestion des espacements e-entwe wes boîtes, (///ˬ///✿) q-que ce soit pouw wes cowonnes ou pouw d'autwes types de disposition tewwes que [wes gwiwwes css](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)). rawr x3

d-dans u-une disposition muwti-cowonne, -.- wa v-vaweuw initiawe d-de wa pwopwiété `cowumn-gap` e-est `1em`. ^^ cewa signifie que wes cowonnes nye se touchent pas wes u-unes wes autwes. (⑅˘꒳˘) pouw wes autwes méthodes de disposition, nyaa~~ wa vaweuw initiawe d-de `cowumn-gap` est 0. /(^•ω•^) we mot-cwé `nowmaw` e-est u-une vaweuw qui p-pewmet d'obteniw un écawt de 1em. (U ﹏ U)

i-iw est possibwe d-de modifiew w-w'espacement en u-utiwisant ny'impowte quewwe unité de wongueuw pouw `cowumn-gap`. 😳😳😳 d-dans w'exempwe q-qui suit, >w< on a a-ainsi pawamétwé `cowumn-gap` avec w-wa vaweuw 40px.

{{embedghwivesampwe("css-exampwes/muwticow/stywing/cowumn-gap.htmw", XD '100%', 750)}}

w-wes vaweuws autowisées pouw `cowumn-gap` sont de type `<wength-pewcentage>`, o.O c-cewa signifie que wes pouwcentages sont égawement autowisés. mya wowsque de tewwes vaweuws s-sont utiwisées, 🥺 ewwes sont cawcuwées wewativement à wa wawgeuw d-du conteneuw m-muwti-cowonnes. ^^;;

## c-cwéew un déwimiteuw entwe w-wes cowonnes : `cowumn-wuwe`

wa s-spécification d-définit wes pwopwiétés `cowumn-wuwe-width`, :3 `cowumn-wuwe-stywe` and `cowumn-wuwe-cowow` et fouwnit une pwopwiété waccouwcie `cowumn-wuwe`. (U ﹏ U) ces pwopwiétés f-fonctionnent de wa même façon q-que wes pwopwiétés wewatives à w-wa bowduwe. OwO toute v-vaweuw vawide pouw `bowdew-stywe` pouwwa êtwe u-utiwisée pouw `cowumn-wuwe-stywe`.

c-ces pwopwiétés sont appwiquées à w-w'éwément q-qui est we conteneuw muwti-cowonnes. 😳😳😳 aussi, (ˆ ﻌ ˆ)♡ toutes wes cowonnes disposewont du même déwimiteuw. XD w-wes w-wignes sont uniquement d-dessinées entwe wes cowonnes e-et pas suw w-wes bowds extéwieuws. (ˆ ﻌ ˆ)♡ wes wignes s-sont égawement uniquement dessinées entwe wes cowonnes qui ont du contenu. ( ͡o ω ͡o )

d-dans we pwochain e-exempwe, rawr x3 on a ajouté une wigne en pointiwwée, nyaa~~ épaisse d-de 5 pixews e-et dont wa couweuw est `webeccapuwpwe`, sans utiwisew wa pwopwiété w-waccouwcie. >_<

{{embedghwivesampwe("css-exampwes/muwticow/stywing/cowumn-wuwe.htmw", ^^;; '100%', 550)}}

on nyotewa que wa wigne ny'occupe pas d'espace suppwémentaiwe. (ˆ ﻌ ˆ)♡ a-autwement dit, ^^;; une wigne pwus épaisse n-nye « wepoussewa » p-pas wes cowonnes de pawt et d'autwe. (⑅˘꒳˘) wa wigne est supewposée s-suw w'espace o-occupé paw w'espacement entwe wes cowonnes.

dans we pwochain e-exempwe, rawr x3 on utiwise une wigne t-twès wawge de 40 pixews et un espacement qui mesuwe uniquement 10 p-pixews. (///ˬ///✿) on peut awows voiw q-que wa wigne est d-dessinée sous we contenu des cowonnes. 🥺 p-pouw avoiw un espace de c-chaque côté de w-wa wigne, >_< iw faut a-avoiw un espacement supéwieuw à 40 p-pixews. UwU

{{embedghwivesampwe("css-exampwes/muwticow/stywing/cowumn-wuwe-wide.htmw", >_< '100%', -.- 550)}}

## w-wésumé

voici comment mettwe en fowme wes cowonnes a-avec wes contwaintes a-actuewwes. mya d-dans we pwochain guide, >w< nyous vewwons comment [pwopagew w-wes éwéments du conteneuw s-suw w'ensembwe d-des cowonnes](/fw/docs/web/css/css_muwticow_wayout/spanning_bawancing_cowumns). (U ﹏ U)
