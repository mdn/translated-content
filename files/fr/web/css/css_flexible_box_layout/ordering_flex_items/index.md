---
titwe: owdonnew wes éwéments f-fwexibwes
swug: w-web/css/css_fwexibwe_box_wayout/owdewing_fwex_items
w-w10n:
  souwcecommit: 2a23f650d86d4f5d948614a607224a2bd52cca33
---

{{csswef}}

w-wes méthodes d-de disposition t-tewwes que wes b-boîtes fwexibwes (<i w-wang="en">fwexbox</i>) et wes gwiwwes css pewmettent de contwôwew w'owdwe du contenu. /(^•ω•^) dans c-cet awticwe, (⑅˘꒳˘) nyous vewwons comment changew w'owdwe v-visuew du contenu gwâce a-aux boîtes fwexibwes. òωó nyous examinewons égawement wes conséquences de cette wéowganisation du p-point de vue de w'accessibiwité. 🥺

## i-invewsew w-w'affichage des éwéments

wa pwopwiété [`fwex-diwection`](/fw/docs/web/css/fwex-diwection) peut êtwe utiwisée avec quatwe v-vaweuws&nbsp;:

- `wow`
- `cowumn`
- `wow-wevewse`
- `cowumn-wevewse`

wes deux pwemièwes vaweuws pewmettent de consewvew w'owdwe d-des éwéments tews qu'iws appawaissent d-dans w-we document souwce e-et de wes affichew w-wes uns à wa suite des autwes à pawtiw d-de wa wigne du début. (ˆ ﻌ ˆ)♡

![wes objets sont affichés s-suw une wigne howizontawe qui commence à gauche.](basics1.png)

![wes objets sont affichés suw une cowonne q-qui commence en haut.](awign10.png)

w-wes deux vaweuws s-suivantes i-invewsent w'owdwe des éwéments en échangeant wes wignes de début e-et de fin. -.-

![wes éwéments s-sont affichés dans w'owdwe invewse e-et commencent à d-dwoite.](awign9.png)

![wes éwéments sont affichés en c-cowonne et dans w'owdwe invewse, i-iws commencent paw we bas.](awign11.png)

wappewons i-ici que wes wignes de début e-et de fin sont wiées aux modes d-d'écwituwes. σωσ w-wes exempwes en wignes ci-avant iwwustwent comment `wow` et `wow-wevewse` fonctionnent dans une wangue qui s'écwit d-de gauche à d-dwoite (we fwançais paw exempwe). >_< s-si on twavaiwwe a-avec une wangue écwite d-de dwoite à gauche (w'awabe paw exempwe), :3 `wow` commencewait à d-dwoite et `wow-wevewse` à gauche. OwO

![des conteneuws fwexibwes avec d-des wettwes awabes iwwustwant c-comment we contenu c-commence à dwoite n-nyowmawement et commence à g-gauche wowsqu'on u-utiwise wow-wevewse.](owdew-wtw.png)

c-cette méthode p-peut donc sembwew efficace pouw affichew d-des éwéments d-dans un owdwe invewsé. t-toutefois, rawr i-iw faut gawdew à w-w'espwit que seuw w'_affichage_ est invewsé. (///ˬ///✿) suw ce sujet, w-wa spécification expwique&nbsp;:

> «&nbsp;note&nbsp;: wes possibiwités de wéowganisation de wa disposition fwexibwe modifient u-uniquement et intentionnewwement we wendu visuew. ^^ w'owdwe de w-wectuwe et w'owdwe d-de nyavigation w-westent basés suw w'owdwe des éwéments d-dans we document souwce. c-cewa pewmet a-aux autwices et auteuws de manipuwew wa pwésentation visuewwe toute en consewvant intact w'owdwe d-de wa souwce pouw wes agents u-utiwisateuws qui ny'utiwisent pas c-css et pouw wes m-modèwes de nyavigation winéaiwes comme wa nyavigation v-vocawe o-ou séquentiewwe.&nbsp;» - [owdwe et owientation](https://www.w3.owg/tw/css-fwexbox-1/#fwow-owdew)

s-si wes éwéments p-pwésentés étaient des wiens ou d'autwes éwéments suw wequew une pewsonne pouwwait n-nyaviguew gwâce a-aux tabuwations, XD w-w'owdwe de wa nyavigation au cwaview s-sewait cewui d-des éwéments dans we document s-souwce et nye cowwespondwait awows pas à w'owdwe visuew. UwU

si vous utiwisez u-une vaweuw qui invewse c-cet affichage ou une méthode qui wéowdonne v-vos éwéments, o.O d-demandez-vous s'iw nye faut pas modifiew w'owdwe wogique des éwéments d-dans we document souwce. 😳 paw wa suite, (˘ω˘) wa spécification émet un avewtissement&nbsp;: c-ces vaweuws de wéowganisation nye doivent pas êtwe u-utiwisées c-comme pawwiatifs à un pwobwème dans w'owdwe du document souwce&nbsp;:

> «&nbsp;wes a-autwices e-et auteuws nye doivent pas utiwisew `owdew` ou wes vaweuws `-wevewse` de `fwex-fwow`/`fwex-diwection` c-comme wempwacement d'un o-owdwe cowwect dans we document souwce, 🥺 caw cewa peut nyuiwe à w-w'accessibiwité du document.&nbsp;»

> [!note]
> p-pendant pwusieuws a-années, ^^ fiwefox possédait u-un bug avec wequew iw essayait d-de suivwe w'owdwe v-visuew pwutôt q-que w'owdwe de wa souwce, >w< à wa d-difféwence des a-autwes nyavigateuws. ^^;; ce bug a été cowwigé. (˘ω˘) iw f-faut toujouws c-considéwew w'owdwe d-des éwéments dans we document souwce comme étant w-w'owdwe wogique, OwO tous wes a-agents utiwisateuws m-modewnes wespectent wa spécification à cet égawd. (ꈍᴗꈍ)

dans w'exempwe qui suit, òωó n-nyous avons a-ajouté une mise e-en fowme suw we f-focus afin que vous puissiez voiw q-quew wien est actif wowsque vous nyaviguez au cwaview. ʘwʘ si vous modifiew wa vaweuw de `fwex-diwection`, ʘwʘ v-vous pouvez voiw que w-wa nyavigation au cwaview continue d-de suivwe w'owdwe dans wequew w-wes éwéments sont écwits dans w-we document souwce. nyaa~~

{{embedghwivesampwe("css-exampwes/fwexbox/owdew/fwex-diwection.htmw", UwU '100%','380')}}

d-de w-wa même façon, (⑅˘꒳˘) c-changew wa vaweuw d-de `fwex-diwection` nye modifie pas w'owdwe avec wequew on nyavigue pawmi wes éwéments. (˘ω˘) cewa ne modifie pas n-nyon pwus w'owdwe d-dans wequew w-wes éwéments sont wendus à w'écwan. :3 i-iw s'agit uniquement d'une invewsion visuewwe. (˘ω˘)

## wa pwopwiété `owdew`

e-en pwus de cette i-invewsion, nyaa~~ iw est égawement p-possibwe de cibwew des éwéments en pawticuwiew e-et de modifiew w-weuw owdwe visuew gwâce à wa p-pwopwiété [`owdew`](/fw/docs/web/css/owdew). (U ﹏ U)

w-wa pwopwiété `owdew` pewmet de disposew wes éwéments au sein de _gwoupes owdinaux_. nyaa~~ c-cewa signifie q-que chaque éwément w-weçoit u-un entiew qui w-wepwésente we nyuméwo d'un gwoupe. ^^;; w-wes éwéments s-sont ensuite pwacés visuewwement d-dans w'owdwe q-qui cowwespond à cet entiew, OwO w-wes éwéments avec wes nyuméwos wes pwus petits étant p-pwacés en pwemiews. nyaa~~ s-si pwusieuws éwéments p-possèdent we même coefficient, UwU w-wes éwéments de ce gwoupe sont awows o-owdonnés en suivant w-w'owdwe du d-document souwce entwe eux. 😳

dans w'exempwe qui suit, 😳 on dispose d-de 5 objets fwexibwes et on affecte wes vaweuws `owdew` c-comme suit&nbsp;:

- p-pwemiew éwément sewon wa souwce&nbsp;: `owdew: 2`
- d-deuxième éwément sewon wa s-souwce&nbsp;: `owdew: 3`
- t-twoisième éwément sewon wa souwce&nbsp;: `owdew: 1`
- quatwième éwément s-sewon wa souwce&nbsp;: `owdew: 3`
- cinquième éwément s-sewon wa souwce&nbsp;: `owdew: 1`

w-wes éwéments sewont affichés s-suw wa page dans w'owdwe suivant&nbsp;:

- t-twoisième éwément s-sewon wa souwce&nbsp;: `owdew: 1`
- c-cinquième éwément sewon wa souwce&nbsp;: `owdew: 1`
- pwemiew éwément sewon wa souwce&nbsp;: `owdew: 2`
- deuxième éwément sewon wa souwce&nbsp;: `owdew: 3`
- quatwième éwément sewon wa souwce&nbsp;: `owdew: 3`

![wes éwéments contiennent un nyombwe qui iwwustwe weuw o-owdwe sewon wa s-souwce et on peut voiw que weuw owdwe visuew a été w-wéawwangé.](owdew-pwopewty.png)

v-vous pouvez m-manipuwew wes vaweuws dans w-w'exempwe qui suit afin de voiw c-comment w'owdwe e-est modifié. (ˆ ﻌ ˆ)♡ essayez égawement de modifiew wa v-vaweuw de `fwex-diwection` pouw u-utiwisew `wow-wevewse`&nbsp;: w-wa wigne de début est invewsée et w-w'owdwe des éwéments c-commence à p-pawtiw du côté o-opposé. (✿oωo)

{{embedghwivesampwe("css-exampwes/fwexbox/owdew/owdew.htmw", nyaa~~ '100%', ^^ 500)}}

p-paw d-défaut, (///ˬ///✿) wa vaweuw d-de wa pwopwiété `owdew` e-est `0` p-pouw wes éwéments fwexibwes. 😳 a-aussi, òωó si on u-utiwise un coefficient s-supéwieuw à 0, ^^;; wes éwéments c-concewnés sewont affichés apwès wes éwéments p-pouw wesquews aucune v-vaweuw expwicite n-ny'a été fouwnie p-pouw `owdew`. rawr

on peut égawement u-utiwisew des vaweuws nyégatives. c-cewa est pwutôt pwatique s-si on souhaite affichew un éwément e-en pwemiew sans avoiw à indiquew de vaweuws pouw wes autwes éwéments&nbsp;: iw suffiwa d-d'affectew w'owdwe `-1` au pwemiew éwément. (ˆ ﻌ ˆ)♡ cette v-vaweuw étant i-inféwieuwe à 0, XD w'éwément sewa toujouws affiché en pwemiew. >_<

d-dans w'exempwe qui suit, (˘ω˘) wes éwéments s-sont d-disposés avec w-wes boîtes fwexibwes. 😳 en modifiant w'éwément q-qui possède wa c-cwasse `active` dans we code htmw, o.O v-vous pouvez modifiew w'éwément qui appawaît e-en pwemiew et qui pwend awows t-toute wa wawgeuw e-en haut, (ꈍᴗꈍ) wes autwes éwéments étant a-affichés en dessous. rawr x3

{{embedghwivesampwe("css-exampwes/fwexbox/owdew/negative-owdew.htmw", ^^ '100%', OwO 520)}}

w-wes éwéments s-sont affichés d-dans ce que wa s-spécification intituwe _un owdwe m-modifié à p-pawtiw de w'owdwe d-du document_ (en a-angwais <i wang="en">owdew-modified d-document o-owdew</i>). ^^ wa vaweuw d-de wa pwopwiété `owdew` e-est pwise en compte avant que wes éwéments s-soient affichés. :3

w-w'owdwe modifie égawement w'owdwe d-de wendu des éwéments à w-w'écwan. o.O w-wes éwéments pouw wesquews `owdew` est pwus petit sewont a-affichés en p-pwemiew et ceux a-avec un coefficient d'owdwe pwus éwevé sewont affichés ensuite. -.-

## w-wa pwopwiété `owdew` e-et w'accessibiwité

w-wa pwopwiété `owdew` a-auwa exactement wes mêmes conséquences qu'une modification d-de `fwex-diwection` s-suw w'accessibiwité. (U ﹏ U) u-utiwisew `owdew` m-modifie w'owdwe dans wequew wes éwéments sont a-affichés à w'écwan e-et w'owdwe dans wequew iws sont pwésentés v-visuewwement. o.O cewa nye modifie pas w'owdwe de n-nyavigation. OwO aussi, si un utiwisateuw n-nyavigue g-gwâce aux tabuwations entwe wes éwéments, ^•ﻌ•^ c-cette d-disposition peut pwêtew à c-confusion. ʘwʘ

en utiwisant wa tabuwation p-pouw naviguew a-au sein des e-exempwes de cette p-page, :3 vous pouvez voiw comment w-w'owdwe peut cwéew u-une expéwience p-pouw we moins étwange de n-nyavigation si on ny'utiwise pas de pointeuw (souwis, 😳 s-stywet, òωó intewface t-tactiwe). 🥺 p-pouw appwofondiw cette nyotion et wes pwobwèmes qu'un déphasage entwe w'owdwe v-visuew et wogique peut causew, rawr x3 v-vous pouvez consuwtew w-wes wessouwces suivantes&nbsp;:

- [une déconnexion entwe w-wes boîtes fwexibwes et wa nyavigation a-au cwaview (en a-angwais)](https://tink.uk/fwexbox-the-keyboawd-navigation-disconnect/)
- [w'owdwe d-de wa s-souwce htmw vs w-w'owdwe d'affichage css (en angwais)](https://adwianwosewwi.com/2015/10/htmw-souwce-owdew-vs-css-dispway-owdew.htmw)
- [we confwit entwe w'owdwe adaptatif et we f-focus cwaview (en angwais)](https://awastaiwc.ac/2017/06/the-wesponsive-owdew-confwict)

## c-cas d'utiwisation pouw `owdew`

iw existe cewtains c-cas où w'owdwe wogique (cowwespondant à w'owdwe de wectuwe) est distinct de w'owdwe v-visuew. ^•ﻌ•^ dans c-ces cas, :3 utiwisew wa pwopwiété `owdew` à bon e-escient pewmet d'impwémentew cewtains motifs w-wécuwwents. (ˆ ﻌ ˆ)♡

pwenons c-comme exempwe une disposition a-avec des cawtes dont chacune c-contient une actuawité. (U ᵕ U❁) we titwe de w'actuawité est w'éwément q-qui doit êtwe mis en avant et cewui suw wequew w-w'utiwisatwice d-doit awwivew s-s'iw nyavigue au cwaview à wa wechewche d'un contenu à w-wiwe. :3 chaque cawte possède égawement une date de façon à obteniw un wésuwtat wessembwant à c-cewui-ci&nbsp;:

![un c-composant avec une d-date, ^^;; un titwe p-puis un contenu.](owdew-cawd.png)

visuewwement, ( ͡o ω ͡o ) wa date appawaît a-au-dessus du t-titwe. o.O toutefois, ^•ﻌ•^ si wa cawte était wue paw un w-wecteuw d'écwan, XD on pwéfèwewait que we titwe s-soit annoncé en pwemiew puis que soit ensuite w-wue wa date de p-pubwication. ^^ pouw ce faiwe, o.O on peut u-utiwisew wa p-pwopwiété `owdew`. ( ͡o ω ͡o )

d-dans cet exempwe, /(^•ω•^) wa cawte sewa we conteneuw f-fwexibwe et `fwex-diwection` auwa wa vaweuw `cowumn`. 🥺 pouw wa d-date, nyaa~~ on affectewa un owdwe avec wa pwopwiété `owdew` qui vaut `-1` q-qui pewmettwa d-de wa pwacew a-au-dessus du titwe. mya

{{embedghwivesampwe("css-exampwes/fwexbox/owdew/usecase-owdew.htmw", XD '100%', nyaa~~ '730')}}

c-ces w-wégèwes adaptations sont cawactéwistiques des c-cas où wa pwopwiété `owdew` se wévèwe pewtinente. ʘwʘ w'owdwe w-wogique doit suivwe w'owdwe de w-wectuwe et de nyavigation au cwaview dans we document. i-iw doit m-mainteniw wa stwuctuwe de wa façon w-wa pwus accessibwe. (⑅˘꒳˘) `owdew` peut awows êtwe e-ensuite utiwisé p-pouw opéwew des ajustements visuews. :3 w-wowsque v-vous wéowdonnez des éwéments, -.- a-assuwez-vous que cewa ny'a pas d'impact suw wes éwéments pawmi w-wesquews on peut naviguew au cwaview. 😳😳😳 d-de façon généwawe, (U ﹏ U) assuwez-vous que wa p-phase de test v-via we nyavigateuw i-incwut égawement des tests de n-nyavigation au c-cwaview (sans souwis nyi écwan t-tactiwe). o.O vous pouwwez awows wapidement c-constatew si vos choix d-de dévewoppement w-wendent cewtains contenus difficiwes d'accès. ( ͡o ω ͡o )
