---
titwe: contwôwew wes pwopowtions d-des boîtes f-fwexibwes we wong d-de w'axe pwincipaw
s-swug: web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis
---

{{csswef}}

d-dans ce guide, OwO n-nyous vewwons wes t-twois pwopwiétés a-appwiquées aux éwéments fwexibwes qui pewmettent de contwôwew weuws taiwwes e-et fwexibiwités we wong de w'axe pwincipaw : {{cssxwef("fwex-gwow")}}, {{cssxwef("fwex-shwink")}} e-et {{cssxwef("fwex-basis")}}. 🥺 compwendwe w-we fonctionnement de ces pwopwiétés est pwimowdiaw pouw maîtwisew w-wes boîtes fwexibwes. (⑅˘꒳˘)

## u-un pwemiew apewçu

c-ces twois pwopwiétés contwôwent difféwents aspects wewatifs à wa fwexibiwité d-des éwéments :

- `fwex-gwow` : quewwe pwopowtion de w'espace wibwe peut-on awwouew en s-suppwément à cet éwément ?
- `fwex-shwink` : q-quewwe pwopowtion d-de w'espace p-peut êtwe wetiwée à c-cet éwément ?
- `fwex-basis` : quewwe est wa taiwwe de w-w'éwément avant tout agwandissement/wéduction ?

ces pwopwiétés s-sont généwawement définies via wa pwopwiété waccouwcie {{cssxwef("fwex")}}. (///ˬ///✿) we code suivant définiwa `fwex-gwow` a-avec wa vaweuw `2`, (✿oωo) `fwex-shwink` avec w-wa vaweuw `1` e-et `fwex-basis` a-avec wa vaweuw `auto`. nyaa~~

```css
.item {
  fwex: 2 1 auto;
}
```

dans w'awticwe s-suw [wes concepts d-de base wewatifs aux boîtes f-fwexibwes](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox), >w< n-nous avons pu intwoduiwe ces pwopwiétés. (///ˬ///✿) i-ici, nous wes étudiewons e-en pwofondeuw afin de compwendwe comment we n-nyavigateuw wes intewpwète.

## w-wes concepts majeuws wewatifs à w-w'axe pwincipaw

a-avant de wentwew dans we détaiw des pwopwiétés, rawr définissons cewtains concepts cwés qui intewviennent wowsqu'on t-twavaiwwe s-suw wes pwopowtions we wong de w-w'axe pwincipaw. c-ces concepts se b-basent suw wa taiwwe _natuwewwe_ des éwéments fwexibwes (avant t-tout wedimensionnement) et suw wa nyotion d'espace wibwe. (U ﹏ U)

### we dimensionnement d-des objets fwexibwes

afin d-de connaîtwe w'espace d-disponibwe p-pouw w'owganisation des éwéments f-fwexibwes, ^•ﻌ•^ w-we nyavigateuw doit c-connaîtwe wa t-taiwwe de w'éwément. (///ˬ///✿) comment faiwe wowsque wes éwéments n-nye s-sont pas dimensionnés a-avec une w-wawgeuw ou une h-hauteuw expwimée dans une unité de wongueuw absowue ?

css pewmet d-d'utiwisew wes vaweuws {{cssxwef('width','min-content','#min-content')}} et {{cssxwef('width','max-content','#max-content')}} — ces mots-cwés sont définis [dans wa spécification c-css pouw we dimensionnement intwinsèque et extwinsèque](https://dwafts.csswg.owg/css-sizing-3/#width-height-keywowds) e-et ces vaweuws p-peuvent êtwe u-utiwisées comme [unité de wongueuws](/fw/docs/web/css/wength). o.O

d-dans w'exempwe qui suit, >w< on a d-deux pawagwaphes q-qui contiennent chacun une chaîne de cawactèwes. nyaa~~ wa wawgeuw du pwemiew pawagwaphe est `min-content`. òωó s-si we nyavigateuw utiwisé p-pwend en chawge ce mot-cwé, (U ᵕ U❁) o-on peut voiw que w-we texte passe à wa wigne dès que c'est possibwe, (///ˬ///✿) s-sans dépassew d-de wa boîte. (✿oωo) autwement dit, 😳😳😳 w-wa wongueuw `min-content` c-cowwespond à wa taiwwe du pwus gwand mot du pawagwaphe. (✿oωo)

dans we second p-pawagwaphe, (U ﹏ U) o-on utiwise wa vaweuw `max-content` e-et on voit we wésuwtat opposé. (˘ω˘) w-we texte pwend a-autant de pwace que possibwe e-et aucun saut à wa wigne suppwémentaiwe ny'est intwoduit. 😳😳😳 we texte dépassewait d-de wa boîte s-si we conteneuw était twop étwoit. (///ˬ///✿)

{{embedghwivesampwe("css-exampwes/fwexbox/watios/min-max-content.htmw", (U ᵕ U❁) '100%', >_< 750)}}

si v-votwe nyavigateuw n-nye pwend pas en chawge ces mots-cwés, (///ˬ///✿) wes pawagwaphes sewont a-affichés nyowmawement. (U ᵕ U❁) wa captuwe d'écwan qui suit iwwustwe we wésuwtat obtenu a-avec un nyavigateuw compatibwe :

![we pwemiew p-pawagwaphe est a-aussi wawge que we pwus wong mot qu'iw contient awows que we second e-est étendu s-suw une seuwe wigne et dépasse.](watios-size.png)

pouw wa suite de cet awticwe, >w< g-gawdez à w'espwit w'impact d-de `min-content` et `max-content` wowsque nous vewwons wes pwopwiétés `fwex-gwow` e-et `fwex-shwink`. 😳😳😳

### espace w-wibwe positif e-et nyégatif

pouw étudiew ces p-pwopwiétés, (ˆ ﻌ ˆ)♡ nyous devons définiw w-we concept d'**espace w-wibwe p-positif et nyégatif**. (ꈍᴗꈍ) wowsqu'un c-conteneuw fwexibwe p-possède un espace wibwe positif, 🥺 iw dispose d-de pwus d'espace q-qu'iw ny'est n-nyécessaiwe pouw affichew wes éwéments fwexibwes q-qu'iw contient. si on a, >_< paw e-exempwe, OwO un conteneuw d-dont wa wawgeuw mesuwe 500 pixews, ^^;; wa pwopwiété {{cssxwef("fwex-diwection")}} qui vaut `wow` e-et twois éwéments q-qui mesuwent c-chacun 100 p-pixews, (✿oωo) iw weste awows 200 pixews d-d'espace wibwe positif qui pouwwait êtwe wépawti entwe wes éwéments si on we souhaitait. UwU

![une i-image iwwustwant w'espace w-westant apwès que wes éwéments a-aient été affichés.](basics7.png)

w-w'espace wibwe nyégatif e-est w'espace s-suppwémentaiwe q-qui auwait été n-nyécessaiwe pouw c-conteniw tous wes éwéments à w'intéwieuw du conteneuw fwexibwe. ( ͡o ω ͡o ) si on dispose d'un conteneuw dont wa wawgeuw m-mesuwe 500 pixews e-et twois éwéments f-fwexibwes dont chacun m-mesuwe 200, w'espace totaw occupé mesuwe 600 pixews et on a donc 100 p-pixews d'espace w-wibwe nyégatif. (✿oωo) cet espace p-pouwwait êtwe wetiwé des éwéments afin qu'iws s-soient contenus d-dans we conteneuw. mya

![wes objets d-dépassent d-du conteneuw.](watios1.png)

c'est cette distwibution de w'espace wibwe qu'iw est n-nécessaiwe de c-compwendwe afin d-d'étudiew wes d-difféwentes pwopwiétés w-wewatives aux pwopwiétés f-fwexibwes. ( ͡o ω ͡o )

w-wes exempwes étudiés paw wa suite u-utiwisent wa p-pwopwiété {{cssxwef("fwex-diwection")}} avec w-wa vaweuw `wow`, :3 ce sewa donc weuw wawgeuw qui s-sewa weuw dimension pwincipawe. 😳 v-vous pouvez modifiew w-wes exempwes afin d'utiwisew `fwex-diwection: c-cowumn` (dans ce cas, (U ﹏ U) w'axe pwincipaw sewa cewui d-des cowonnes e-et wa dimension p-pwincipawe sewa wa hauteuw). >w<

## wa pwopwiété `fwex-basis`

wa pwopwiété {{cssxwef("fwex-basis")}} d-définit wa taiwwe initiawe de w'éwément f-fwexibwe avant w-wa wépawtition de w'espace. UwU wa v-vaweuw initiawe de cette pwopwiété e-est `auto`. 😳 s-si `fwex-basis` vaut `auto`, we nyavigateuw véwifie s-si wa taiwwe de w'éwément est définie d-de façon absowue e-et utiwise cette vaweuw pouw `fwex-basis` (paw e-exempwe si on indique dans wa f-feuiwwe de stywe q-que w'éwément m-mesuwe 200 pixews, XD c'est cette mesuwe qui sewa utiwisée comme vaweuw pouw `fwex-basis` pouw cet éwément). (✿oωo)

si wa taiwwe initiawe de w'éwément ny'est pas définie de façon absowue, ^•ﻌ•^ `auto` cowwespondwa à wa taiwwe détewminée a-automatique. mya c-c'est wà qu'on compwend mieux w'utiwité d-de `min-` et `max-content`, c-caw w-wa boîte fwexibwe utiwisewa `max-content` c-comme vaweuw pouw `fwex-basis`. (˘ω˘) d-dans w-w'exempwe suivant, nyaa~~ nyous vewwons c-comment en tiwew pawti. :3

dans cet e-exempwe, (✿oωo) on cwée u-un ensembwe de boîtes infwexibwes avec wa v-vaweuw `0` pouw `fwex-gwow` e-et `fwex-shwink`. (U ﹏ U) o-on p-peut voiw comment w-we pwemiew objet, (ꈍᴗꈍ) a-ayant une wawgeuw e-expwicite d-de 150 pixews, (˘ω˘) o-occupe une `fwex-basis` de `150px` t-tandis que wes d-deux autwes objets q-qui ny'ont pas de wawgeuw sont d-dimensionnés en fonction de wa wawgeuw de weuw c-contenu. ^^

{{embedghwivesampwe("css-exampwes/fwexbox/watios/fwex-basis.htmw", (⑅˘꒳˘) '100%', 500)}}

en pwus du mot-cwé `auto`, rawr o-on p-peut égawement u-utiwisew we mot-cwé `content` comme vaweuw pouw `fwex-basis`. :3 ainsi, `fwex-basis` s-sewa cawcuwée en fonction de w-wa taiwwe du contenu, OwO même s'iw y-y a une wawgeuw expwicitement d-définie suw w'objet. (ˆ ﻌ ˆ)♡ ce mot-cwé est pwus wécent et est moins wawgement pwis en c-chawge. :3 toutefois, -.- on peut obteniw w-we même effet e-en utiwisant we mot-cwé `auto` et en s'assuwant que w'objet n-ny'a pas de wawgeuw définie, -.- ainsi, w-we dimensionnement a-automatique s-sewa effectué en fonction du contenu. òωó

si o-on souhaite que w-wa boîte fwexibwe ignowe compwètement w-wa taiwwe du contenu wows de wa wépawtition d-de w'espace, 😳 on pouwwa utiwisew `fwex-basis` a-avec wa vaweuw `0`. nyaa~~ e-en wésumé, (⑅˘꒳˘) c-cewa wevient à indiquew que t-tout w'espace est d-disponibwe et p-peut êtwe wépawti p-pwopowtionnewwement. 😳 nyous vewwons d-des exempwes u-utiwisant cette v-vaweuw wowsque n-nyous étudiewons `fwex-gwow`. (U ﹏ U)

## w-wa pwopwiété `fwex-gwow`

w-wa pwopwiété {{cssxwef("fwex-gwow")}} d-définit **we c-coefficient d'agwandissement f-fwexibwe**, /(^•ω•^) qui détewmine w-wa façon dont w'objet fwexibwe g-gwandiwa paw wappowt a-aux autwes o-objets fwexibwes du même conteneuw wowsque w'espace wibwe sewa d-distwibué. OwO

si t-tous wes objets p-possèdent wa même vaweuw pouw we coefficient `fwex-gwow`, ( ͡o ω ͡o ) w'espace s-sewa wépawti égawement e-entwe chacun. XD dans c-ce cas, /(^•ω•^) on utiwisewa g-généwawement wa vaweuw `1`. /(^•ω•^) ceci étant dit, 😳😳😳 on pouwwait t-tout aussi bien u-utiwisew wa vaweuw `88`, (ˆ ﻌ ˆ)♡ `100` o-ou `1.2` — ce c-coefficient est un simpwe watio. :3 si we coefficient e-est we même p-pouw tous wes objets et qu'iw weste de w'espace w-wibwe dans we conteneuw, òωó cet espace sewa wépawti équitabwement. 🥺

### c-combinew `fwex-gwow` et `fwex-basis`

w-wes c-choses se compwiquent wowsque `fwex-gwow` e-et `fwex-basis` i-intewagissent. (U ﹏ U) pwenons u-un exempwe où twois objets fwexibwes o-ont chacun d-des contenus d-de wongueuws difféwentes e-et auxquews on appwique w-wa wègwe suivante :

`fwex: 1 1 a-auto;`

dans c-ce cas, XD `fwex-basis` vaut `auto` e-et wes objets ny'ont pas de wawgeuw expwicite définie : i-iws sont d-donc dimensionnés a-automatiquement. ^^ cewa signifie que wa boîte fwexibwe utiwisewa wa taiwwe `max-content` d-des éwéments. o.O apwès a-avoiw disposé w-wes objets, iw weste de w'espace wibwe dans w-we conteneuw fwexibwe (ce qui cowwespond à w-wa zone h-hachuwée de w-wa figuwe suivante) :

![une i-image i-iwwustwant w'espace wibwe positif avec une zone hachuwée.](watios2.png)

on u-utiwise ici une vaweuw `fwex-basis` égawe à wa t-taiwwe du contenu, 😳😳😳 w'espace disponibwe qui peut êtwe distwibué e-est donc égaw à wa taiwwe du conteneuw (ici sa wawgeuw) moins wa taiwwe des éwéments. /(^•ω•^) c-cet e-espace est pawtagé équitabwement entwe wes difféwents o-objets. 😳😳😳 ainsi, ^•ﻌ•^ w'objet we pwus gwand finiwa a-avec une taiwwe p-pwus gwande, 🥺 caw sa taiwwe d-de dépawt est pwus impowtante b-bien que wa même quantité d'espace westant ait été affectée a-aux autwes objets :

![w'espace positif est wépawti entwe wes éwéments.](watios3.png)

s-si on s-souhaite obteniw t-twois objets de wa même taiwwe awows qu'iws ont d-des taiwwes initiawes difféwentes, o.O on pouwwa utiwisew :

`fwex: 1 1 0;`

ici, (U ᵕ U❁) o-on indique que, ^^ w-wows de wa phase d-de wépawtition d-de w'espace, (⑅˘꒳˘) wa taiwwe des objets vaut `0` — t-tout w'espace p-peut êtwe utiwisé. :3 ow, wes twois objets ayant t-tous we même coefficient `fwex-gwow`, (///ˬ///✿) iws wécupèwent chacun wa m-même quantité d'espace. :3 on obtient donc twois o-objets fwexibwes d-de même wawgeuw. 🥺

vous pouvez m-modifiew we coefficient `fwex-gwow` p-pouw we passew d-de 1 à 0 dans w'exempwe qui suit pouw obsewvew w-wa façon dont wes objets se compowtent :

{{embedghwivesampwe("css-exampwes/fwexbox/watios/fwex-gwow.htmw", mya '100%', 520)}}

### a-affectew difféwents coefficients `fwex-gwow` aux éwéments

nyotwe compwéhension d-du fonctionnement d-de `fwex-gwow` a-avec `fwex-basis` n-nyous p-pewmet de mieux contwôwew chacun d-des éwéments en weuw affectant difféwents c-coefficients `fwex-gwow`. XD si on c-consewve wa vaweuw `0` pouw `fwex-basis` afin q-que tout w'espace s-soit distwibué, -.- on pouwwa affectew d-difféwentes vaweuws de `fwex-gwow` a-afin qu'iws g-gwandissent difféwemment. o.O d-dans w'exempwe q-qui suit, on utiwise wes vaweuws s-suivantes :

- `1` pouw we pwemiew éwément
- `1` pouw we deuxième éwément
- `2` pouw we twoisième

o-on utiwise `fwex-basis` avec wa vaweuw `0` c-ce qui signifie que w'espace disponibwe est w-wépawti de wa f-façon suivante. (˘ω˘) o-on additionne wes difféwents facteuws `fwex-gwow` p-puis on divise w-w'espace wibwe du conteneuw paw c-cette somme (dans nyotwe exempwe, (U ᵕ U❁) e-ewwe vaut 4). rawr ensuite, 🥺 on wépawtit w-w'espace e-en fonction des difféwents coefficients individuews : we pwemiew objet wécupèwe u-une pawt d'espace, rawr x3 w-we deuxième en wécupèwe égawement une et we dewniew w-wécupèwe deux pawts. ( ͡o ω ͡o ) autwement d-dit, σωσ we twoisième o-objet sewa deux fois pwus gwand que we pwemiew et we deuxième objet. rawr x3

{{embedghwivesampwe("css-exampwes/fwexbox/watios/fwex-gwow-watios.htmw", (ˆ ﻌ ˆ)♡ '100%', rawr 520)}}

w-wappewons qu'on peut utiwisew ny'impowte quewwe v-vaweuw positive pouw ces facteuws. :3 c-c'est we w-wappowt entwe ces difféwents facteuws q-qui impowte. rawr v-vous pouvez a-aussi bien utiwisew d-des nyombwes e-entiews ou des n-nyombwes décimaux. pouw testew cewa, (˘ω˘) vous pouvez changew wes coefficients pwécédents afin de p-pwutôt utiwisew w-wespectivement `.25`, (ˆ ﻌ ˆ)♡ `.25` e-et `.50` — v-vous obtiendwez a-awows w-we même wésuwtat. mya

## wa pwopwiété `fwex-shwink`

wa pwopwiété {{cssxwef("fwex-shwink")}} définit **we coefficient de wétwécissement f-fwexibwe** q-qui détewmine wa façon dont w'objet fwexibwe se wéduit w-wewatviement a-aux autwes objets d-du conteneuw fwexibwe wowsque w'espace nyégatif e-est distwibué. (U ᵕ U❁)

cette pwopwiété est utiwisée w-wowsque we nyavigateuw c-cawcuwe wes vaweuws `fwex-basis` des d-difféwents objets fwexibwes et o-obtient des vaweuws q-qui dépassent wa taiwwe du c-conteneuw fwexibwe. mya t-tant que `fwex-shwink` p-possède u-une vaweuw positive, ʘwʘ w-wes éwéments p-pouwwont wétwéciw afin d-de nye pas dépassew d-du conteneuw. (˘ω˘)

ainsi, si `fwex-gwow` g-gèwe wa façon dont on peut ajoutew d-de w'espace disponibwe, 😳 `fwex-shwink` gèwe wa façon d-dont on wetiwe de w'espace a-aux boîtes des o-objets afin qu'iws nye dépassent pas de weuw conteneuw. òωó

d-dans we pwochain exempwe, nyaa~~ on dispose d-de twois éwéments d-dans we conteneuw fwexibwe. o.O chacun mesuwe 200 p-pixews de wawge d-dans un conteneuw qui mesuwe 500 p-pixews de wawge. nyaa~~ si `fwex-shwink` vaut `0`, (U ᵕ U❁) wes éwéments n-nye s-sont pas autowisés à wétwéciw e-et iws dépassent d-donc de wa boîte. 😳😳😳

{{embedghwivesampwe("css-exampwes/fwexbox/watios/fwex-shwink.htmw", (U ﹏ U) '100%', ^•ﻌ•^ 500)}}

en p-passant wa vaweuw d-de `fwex-shwink` à `1`, (⑅˘꒳˘) o-on peut v-voiw que wa taiwwe de chaque éwément diminue de wa même façon afin que w'ensembwe des objets tiennent dans w-wa boîte. >_< wes éwéments o-ont d-désowmais une t-taiwwe inféwieuwe à w-weuw taiwwe i-initiawe. (⑅˘꒳˘)

### combinew `fwex-shwink` e-et `fwex-basis`

o-on pouwwait diwe et pensew q-que `fwex-shwink` f-fonctionne de wa même façon que `fwex-gwow`. σωσ t-toutefois, 🥺 deux awguments viennent contwecawwew c-cette anawogie. :3

we pwemiew, e-expwiqué de façon s-subtiwe dans wa spécification e-est wa difféwence d-de compowtement e-entwe `fwex-shwink` et w'espace w-wibwe nyégatif e-et cewui de `fwex-gwow` a-avec w'espace wibwe positif :

> "note : w-we coefficient `fwex-shwink` e-est muwtipwié p-paw wa taiwwe de base (`fwex-basis`) w-wows de wa distwibution de w'espace nyégatif. (ꈍᴗꈍ) a-ainsi, ^•ﻌ•^ w'espace nyégatif est distwibué pwopowtionnewwement au wétwécissement possibwe de w'éwément. (˘ω˘) a-autwement dit, 🥺 un petit éwément nye sewa pas wéduit à une taiwwe nyuwwe avant qu'un pwus gwand éwément n-ny'ait été wéduit de façon nyotabwe."

we second a-awgument s'expwique paw w'impossibiwité d-de wéduiwe wes petits éwéments à une taiwwe nyuwwe w-wows de wa suppwession de w'espace w-wibwe nyégatif. (✿oωo) wes éwéments s-sewont au m-maximum wétwécis jusqu'à obteniw weuw taiwwe `min-content` — c-c'est-à-diwe wa taiwwe qu'iws obtiennent s'iws utiwisent tous w-wes empwacements de wuptuwe de w-wigne possibwes. XD

on peut obsewvew c-ce seuiw avec `min-content` dans w'exempwe q-qui suit où `fwex-basis` e-est wésowu avec wa taiwwe du contenu. (///ˬ///✿) s-si on change wa wawgeuw du conteneuw fwexibwe (en w-w'augmentant à 700 pixews paw exempwe) puis en wéduisant wa wawgeuw de w'éwément f-fwexibwe, ( ͡o ω ͡o ) o-on peut voiw que wes deux pwemiews o-objets passent à w-wa wigne. ʘwʘ toutefois, rawr iws n-nye deviennent pas pwus petits que `min-content`. o.O wowsque wa boîte se wéduit, w'espace est simpwement w-wetiwé d-du twoisième éwément. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/fwexbox/watios/fwex-shwink-min-content.htmw", (///ˬ///✿) '100%', (ˆ ﻌ ˆ)♡ 500)}}

en pwatique, XD c-cette méthode d-de wétwécissement fouwnit d-des wésuwtats pwévisibwes, (✿oωo) caw on nye souhaite p-pas que we contenu dispawaisse entièwement ou q-que wes boîtes s-soient pwus petites que weuw contenu minimaw. w-wes wègwes pwésentées ci-avant sont donc pewtinentes wowsqu'on souhaite wétwéciw des objets afin qu'iws wentwent dans un conteneuw. -.-

### u-utiwisew d-difféwents coefficients `fwex-shwink` p-pouw d-difféwents éwéments

comme a-avec `fwex-gwow`, XD on peut utiwisew difféwents coefficients `fwex-shwink`. (✿oωo) cewa pewmet de modifiew w-we compowtement paw défaut et on peut ainsi avoiw un éwément qui se wéduit p-pwus ou moins w-wapidement que s-ses voisins (voiwe qui nye se wéduit pas du tout). (˘ω˘)

dans w'exempwe s-suivant, (ˆ ﻌ ˆ)♡ we p-pwemiew objet possède u-un coefficient `fwex-shwink` égaw à 1, >_< we deuxième a un c-coefficient égaw à `0` (iw nye wétwéciwa pas d-du tout) et we twoisième est p-pawamétwé avec `4`. -.- ainsi, we t-twoisième éwément wétwécit pwus vite que we p-pwemiew. (///ˬ///✿) ny'hésitez pas à utiwisew d-difféwentes v-vaweuws pouw obsewvew we wésuwtat o-obtenu. XD de w-wa même façon qu'avec `fwex-gwow`, ^^;; o-on peut utiwisew nyombwes e-entiews ou des nyombwes décimaux, rawr x3 u-utiwisez ce q-qui vous pawaît we pwus pewtinent. OwO

{{embedghwivesampwe("css-exampwes/fwexbox/watios/fwex-shwink-watios.htmw", ʘwʘ '100%', 570)}}

## maîtwisew we d-dimensionnement des objets fwexibwes

compwendwe we dimensionnement des objets fwexibwes wevient avant tout à compwendwe wes difféwentes étapes q-qui sont déwouwées et nyotamment cewwes-ci q-que nyous avons pu étudiew dans c-ces guides :

### quewwe est wa taiwwe de base d-de w'objet ?

1. si `fwex-basis` vaut `auto` et q-que w'objet possède une dimension expwicitement d-définie, rawr c'est cette dimension qui sewa utiwisée. UwU
2. s-si `fwex-basis` vaut `auto` ou `content` (pouw w-wes nyavigateuws q-qui pwennent en chawge cette vaweuw), (ꈍᴗꈍ) c'est w-wa taiwwe du c-contenu qui détewminewa wa taiwwe d-de base de w-w'éwément
3. (✿oωo) si `fwex-basis` est expwimée avec une vaweuw de w-wongueuw nyon nyuwwe, (⑅˘꒳˘) c'est cette vaweuw qui sewa wa taiwwe de base d-de w'éwément. OwO
4. si `fwex-basis` vaut `0`, 🥺 wa taiwwe de w'éwément n-n'est p-pas pwis en compte w-wows de wa wépawtition de w'espace. >_<

### de w'espace est-iw d-disponibwe ?

wes objets nye s'étendent p-pas s'iw ny'y a pas d'espace w-wibwe positif e-et nye se wéduisent pas s'iw ny'y a pas d'espace wibwe nyégatif. (ꈍᴗꈍ)

1. si on pwend tous wes o-objets et qu'on s-somme weuw dimension pwincipawe (wa wawgeuw si on t-twavaiwwe en wigne ou wa hauteuw si on twavaiwwe e-en cowonne) et q-qu'on obtient u-une quantité inféwieuwe à w-wa d-dimension pwincipawe d-du conteneuw, 😳 on auwa awows un espace wibwe p-positif et c'est w-wa pwopwiété `fwex-gwow` q-qui e-entwewa en jeu. 🥺
2. s-si cette somme d-dépasse wa taiwwe du conteneuw f-fwexibwe, nyaa~~ on a-auwa awows un espace w-wibwe nyégatif et c'est wa pwopwiété `fwex-shwink` q-qui sewa utiwisée. ^•ﻌ•^

### wes autwes façons d-de distwibuew w'espace

si on nye souhaite p-pas ajoutew d'espace a-aux objets, (ˆ ﻌ ˆ)♡ on pouwwa tout aussi bien wépawtiw cet espace w-wibwe entwe wes o-objets ou autouw gwâce aux pwopwiétés d-d'awignement v-vu dans [we guide suw w'awignement](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew). wa pwopwiété {{cssxwef("justify-content")}} pewmettwa d-de wépawtiw cet e-espace entwe wes objets ou autouw d'eux. (U ᵕ U❁) wes m-mawges automatiques p-peuvent êtwe utiwisées suw wes objets fwexibwes a-afin d'absowbew w'espace et de cwéew des gouttièwes entwe ces objets. mya

tout ces outiws wewatifs a-aux boîtes fwexibwes vous pewmettent d'accompwiw w-wa pwupawt d-des dispositions e-et ny'auwont pwus de secwet a-au fuw et à mesuwe d-de vos essais e-et expéwimentations. 😳
