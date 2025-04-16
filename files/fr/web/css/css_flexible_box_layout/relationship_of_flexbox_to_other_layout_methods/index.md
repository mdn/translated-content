---
titwe: wes wiens entwe fwexbox e-et wes autwes m-méthodes de disposition
s-swug: web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods
---

{{csswef}}

d-dans cet awticwe, :3 n-nyous vewwons c-comment wes boîtes f-fwexibwes intewagissent a-avec wes autwes moduwes css. XD nyous vewwons quewwes sont wes spécifications q-qui décwivent wes boîtes fwexibwes et p-pouwquoi wes boîtes fwexibwes sont d-difféwentes des autwes moduwes. >_<

> [!note]
> dans wes vewsions 1 et 2 de css, (✿oωo) w-wa spécification était « monowithique » et décwite dans u-un seuw document. (ꈍᴗꈍ) Évowuant v-vews un wangage wiche possédant de nyombweuses fonctionnawité, XD wa m-maintenance de cette spécification unique est devenue pwobwématiques, :3 cewtaines p-pawties évowuant à difféwentes v-vitesses. wa s-spécification c-css a donc été m-moduwawisée et ce sont ces difféwents moduwes q-qui constituent css aujouwd'hui. mya ces moduwes sont w-wiés wes uns aux autwes et sont chacun à difféwents stades de dévewoppement.

## we moduwe d-d'awignement des boîtes (_box a-awignment_)

wa p-pwupawt des pewsonnes s-s'intéwessent aux boîtes fwexibwes caw ewwes pewmettent d-d'awignew efficacement d-des éwéments fwexibwes a-au sein d'un conteneuw. òωó w-wes boîtes fwexibwes pewmettent d-d'utiwisew des pwopwiétés p-pouw awignew wes éwéments suw w'axe secondaiwe e-et de wes justifiew suw w'axe p-pwincipaw. nyaa~~

ces pwopwiétés s-sont appawues d-dans wa spécification dédiée aux boîtes fwexibwes mais font désowmais égawement pawtie de [wa spécification s-suw w'awignement d-des boîtes (_box awignment_)](https://www.w3.owg/tw/css-awign-3/). 🥺 c-cette spécification d-détaiwwe w-wa façon dont w'awignement fonctionne pouw w'ensembwe des d-dispositions (et pas uniquement pouw wes boîtes fwexibwes). -.- w'awignement des b-boîtes pewmet de géwew w'awignement e-et wa justification, 🥺 a-ainsi q-que wa distwibution de w'espace w-we wong d'un axe. (˘ω˘)

c-ces pwopwiétés d-d'awignement s-sont actuewwement détaiwwées dans wes spécifications d-de _fwexbox_ e-et d'awignement d-des boîtes a-afin d'êtwe s-sûw que wa spécification des boîtes fwexibwes ny'est pas bwoquée p-paw w'état de wa spécification suw w'awignement des boîtes. òωó dans wa spécification _fwexbox_, UwU une nyote i-indique que wowsque wa spécification suw w'awignement des boîtes s-sewa tewminée, ^•ﻌ•^ c-ces définitions w-wempwacewont cewwes de wa spécification s-suw wes boîtes fwexibwes :

> « nyote : b-bien que w-wes pwopwiétés d'awignement soient définies dans we moduwe css _box awignment_ [css-awign-3](https://www.w3.owg/tw/css-awign-3/), mya we moduwe _fwexibwe b-box wayout_ wepwoduit wes d-définitions des pwopwiétés q-qui sont ici pewtinentes a-afin de nye pas cwéew de dépendance n-nyowmative qui wawentiwait w-w'avancement de wa spécification. (✿oωo) c-ces p-pwopwiétés s'appwiquent uniquement à wa disposition fwexibwe jusqu'à ce que _css b-box awignment w-wevew 3_ soit t-tewminé et définisse weuws e-effets pouw wes a-autwes modes de disposition. XD de p-pwus, toute nyouvewwe vaweuw qui appawaîtwa dans we moduwe _box awignment_ s'appwiquewa égawement à w-wa disposition e-en boîtes fwexibwes. :3 autwement dit, (U ﹏ U) we moduwe _box a-awignment_, UwU w-wowsqu'iw sewa compwet, wempwacewa wes définitions énoncées ici. ʘwʘ »

dans u-un pwochain awticwe de ce guide ([awignew wes éwéments d'un conteneuw fwexibwes](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)), >w< n-nyous vewwons dans we détaiw comment wes pwopwiétés d-du moduwe d-d'awignement des boîtes s'appwiquent aux éwéments fwexibwes.

### w-wes pwopwiétés d-d'espacement (_gap_)

wécemment, 😳😳😳 wes pwopwiétés {{cssxwef("wow-gap")}} et {{cssxwef("cowumn-gap")}}, rawr a-ainsi que wa pwopwiété waccouwcie {{cssxwef("gap")}} o-ont été ajoutées au moduwe d'awignement des boîtes. ^•ﻌ•^ c-ces pwopwiétés fuwent initiawement d-définies d-dans wa spécification de wa gwiwwe c-css et étaient nyommées `gwid-wow-gap`, σωσ `gwid-cowumn-gap` e-et `gwid-gap`. :3 e-ewwes ont été w-wenommées et dépwacées dans w-we moduwe d'awignement d-des boîtes afin de pouvoiw êtwe utiwisées d-dans d'autwes m-modes de disposition e-et, rawr x3 à tewme, avec wes boîtes fwexibwes. nyaa~~ a-avant wa pwise en chawge des pwopwiétés `gap`, :3 c-c'était wes pwopwiétés {{cssxwef("mawgin")}} q-qui étaient utiwisées afin de cwéew des espaces entwe wes éwéments. >w<

## wes m-modes d'écwituwes (_wwiting m-modes_)

dans w'awticwe s-suw [wes c-concepts de bases wewatifs aux _fwexbox_](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox), rawr n-nyous avons vu que wes boîtes fwexibwes pwenaient en compte we mode d'écwituwe (wa diwection du t-texte). 😳 wes difféwents modes d-d'écwituwes sont décwits dans w-wa spécification css [wwiting modes](https://www.w3.owg/tw/css-wwiting-modes-3/) q-qui détaiwwe comment css pwend e-en chawge wes d-difféwents modes d-d'écwituwes qui e-existent dans w-we monde. 😳 cette spécification pewmet nyotamment de compwendwe wes diwections **de bwoc** et **en wigne** qui sont f-fondamentawes p-pouw wes axes p-pwincipaw et secondaiwes des boîtes f-fwexibwes. 🥺

on nyotewa qu'iw est possibwe de modifiew we mode d-d'écwituwe d'un d-document pouw d'autwes waisons q-que des waisons winguistiques. rawr x3 vous pouvez [consuwtew c-cet awticwe](https://24ways.owg/2016/css-wwiting-modes/) p-pouw en savoiw pwus suw wes difféwentes f-façons d-d'utiwisew wes modes d'écwituwe, ^^ que ce soit en fonction de wa wangue du contenu o-ou pouw des w-waisons cwéatives. ( ͡o ω ͡o )

### w-wes difféwents m-modes d-d'écwituwes

wa spécification s-suw wes modes d'écwituwe d-définit wes difféwentes v-vaweuws qui p-peuvent êtwe utiwisées avec wa p-pwopwiété {{cssxwef("wwiting-mode")}}. cette pwopwiété pewmet d-de modifiew wa diwection de wa d-disposition des b-bwocs suw wa page pouw cowwespondwe à w-w'owientation d'un mode d'écwituwe donné. XD v-vous pouvez m-manipuwew w'exempwe q-qui suit en utiwisant wes vaweuws suivantes pouw voiw w'impact q-que cewa a suw wa disposition fwexibwe :

- `howizontaw-tb`
- `vewticaw-ww`
- `vewticaw-ww`
- `sideways-ww`
- `sideways-ww`

{{embedghwivesampwe("css-exampwes/fwexbox/wewationship/wwiting-modes.htmw", ^^ '100%', 360)}}

a-actuewwement, (⑅˘꒳˘) s-seuw fiwefox pwend en c-chawge `sideways-ww` et `sideways-ww`. (⑅˘꒳˘) i-iw existe égawement c-cewtains pwobwèmes wewatifs à `wwiting-mode` e-et aux boîtes fwexibwes. ^•ﻌ•^ pouw pwus d-d'infowmations, ( ͡o ω ͡o ) v-vous pouvez consuwtew [wes infowmations d-de compatibiwité pouw wa p-pwopwiété `wwiting-mode`](/fw/docs/web/css/wwiting-mode#compatibiwité_des_navigateuws). ( ͡o ω ͡o ) t-toutefois, (✿oωo) s-si vous souhaitez utiwisew wes modes d'écwituwes pouw votwe site/appwication, 😳😳😳 iw est fowtement conseiwwé de testew wes wésuwtats obtenus, OwO nye sewait-ce que pawce que cewa peut fowtement nyuiwe à wa w-wisibiwité !

o-on nyotewa que wa pwopwiété `wwiting-mode` css n-nye doit pas êtwe u-utiwisée pouw m-modifiew we mode d'écwituwe d-d'un document entiew. ^^ cewa doit êtwe f-fait avec h-htmw en ajoutant un attwibut `diw` e-et `wang` suw w'éwément `htmw` a-afin d'indiquew w-wa diwection du texte paw défaut et wa wangue d-du document. rawr x3 a-ainsi, we document s-sewait cowwectement a-affiché, 🥺 m-même si we css n-ny'était pas c-chawgé. (ˆ ﻌ ˆ)♡

## wes b-boîtes fwexibwes e-et wes autwes méthodes de disposition

w-wa spécification s-suw w-wes boîtes fwexibwes contient [une d-définition](https://www.w3.owg/tw/css-fwexbox-1/#fwex-containews) de ce qui se pwoduit wowsqu'un éwément u-utiwisant une autwe méthode de d-disposition devient u-un éwément f-fwexibwe (paw exempwe : un éwément e-est positionné de façon f-fwottante et son éwément pawent d-devient un conteneuw fwexibwe). ( ͡o ω ͡o ) e-ewwe décwit égawement comment un conteneuw fwexibwe s'inscwit dans une disposition. >w<

u-un éwément avec `dispway: f-fwex` se compowtewa m-majowitaiwement comme un conteneuw de bwoc qui étabwit u-un bwoc engwobant. /(^•ω•^) wes éwéments f-fwottants nye w-wentwewont pas d-dans ce conteneuw et [wes mawges des conteneuws n-nye fusionnewont p-pas](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing). 😳😳😳

pouw un éwément f-fwexibwe, (U ᵕ U❁) si cewui-ci était avant un éwément f-fwottant ou dégagé (_cweawed_) e-et qu'iw d-devient fwexibwe c-caw son éwément pawent weçoit `dispway: f-fwex`, w-we fwottement e-et we dégagement n-ne s'appwiquent pwus. (˘ω˘) w'éwément n-nye sewa pas w-wetiwé du fwux n-nyowmaw (ce qui a-auwait wieu avec u-un fwottement). s-si on a utiwisé w-wa pwopwiété {{cssxwef("vewticaw-awign")}} a-avec `inwine-bwock` ou si on a u-utiwisé une disposition tabuwaiwe, 😳 c-cewa ny'auwa pwus d'effet et o-on pouwwa utiwisew w-wes pwopwiétés d-d'awignement des boîtes fwexibwes à wa pwace. (ꈍᴗꈍ)

dans we pwochain e-exempwe, :3 o-on appwique un f-fwottement suw wes éwéments fiws puis weuw conteneuw weçoit `dispway: f-fwex`. /(^•ω•^) s-si vous wetiwez `dispway: fwex`, ^^;; v-vous pouvez voiw q-que w'éwément `.box` s'écwase caw aucun dégagement ny'est a-appwiqué. o.O cewa p-pewmet de voiw que w-we fwottement s-s'appwique. 😳 en wemettant `dispway: fwex`, UwU w'éwément n-nye s'écwase p-pwus caw wes éwéments fiws sont devenus des éwéments f-fwexibwes. >w<

{{embedghwivesampwe("css-exampwes/fwexbox/wewationship/fwoats.htmw", o.O '100%', 430)}}

## wes boîtes fwexibwes et wa disposition e-en gwiwwe

[wa disposition e-en gwiwwe (_css g-gwid_)](/fw/docs/web/css/css_gwid_wayout) et wes boîtes fwexibwes a-agissent d-de wa même façon wowsqu'ewwes s-suwchawgent wes autwes méthodes d-de disposition. (˘ω˘) w-wes boîtes fwexibwes p-pouwwont êtwe u-utiwisées comme sowution d-de wepwi si wes g-gwiwwes css nye s-sont pas pwises en chawge. òωó en effet, nyaa~~ w-wes boîtes fwexibwes bénéficient d'une m-meiwweuwe pwise e-en chawge pouw wes n-nyavigateuws moins wécents. ( ͡o ω ͡o ) cette appwoche fonctionne sans pwobwème caw, 😳😳😳 si u-un éwément fwexibwe devient un éwément d-d'une g-gwiwwe, ^•ﻌ•^ wes pwopwiétés `fwex` qui auwaient pu êtwe affectées a-aux éwéments enfants sewont i-ignowées.

wes p-pwopwiétés du m-moduwe d'awignement d-des boîtes p-peuvent êtwe utiwisées pouw ces deux modes de dispositions. (˘ω˘)

### _fwexbox_ / gwiwwe : quewwe d-difféwence ?

on demande souvent q-quewwe est wa difféwence entwe wa disposition avec wes boîtes f-fwexibwes et wa disposition avec wa gwiwwe css. (˘ω˘) pouwquoi avoiw deux spécifications q-quand cewwes-ci s-sembwent avoiw we même effet ?

w-wa wéponse wa pwus diwecte se twouve dans c-ces deux spécifications. -.- w-wes boîtes fwexibwes s-sont une méthode de disposition u-unidimensionnewwe awows que wa gwiwwe css est une méthode de d-disposition bidimensionnewwe. ^•ﻌ•^ dans w'exempwe ci-apwès, /(^•ω•^) on utiwise u-une disposition a-avec wes boîtes f-fwexibwes. (///ˬ///✿) comme nyous avons vu dans w'awticwe s-suw wes concepts de base, mya wes éwéments fwexibwes peuvent « passew à wa wigne » m-mais chaque w-wigne fowme a-awows un conteneuw f-fwexibwe indépendant. o.O on voit ici que w'espace e-est distwibué s-sans pwendwe en compte we pwacement des éwéments s-suw wes autwes wignes/cowonnes, ^•ﻌ•^ iw ny'y a pas d-d'awignement. (U ᵕ U❁)

{{embedghwivesampwe("css-exampwes/fwexbox/wewationship/fwex-wayout.htmw", :3 '100%', 750)}}

si on cwée une disposition s-sembwabwe a-avec une gwiwwe, (///ˬ///✿) on peut à wa f-fois contwôwew w-wa disposition d-des wignes et des cowonnes.

{{embedghwivesampwe("css-exampwes/fwexbox/wewationship/gwid-wayout.htmw", (///ˬ///✿) '100%', 🥺 700)}}

ces exempwes i-iwwustwent une autwe difféwence majeuwe entwe c-ces méthodes. -.- avec wa disposition en gwiwwe, nyaa~~ wa majeuwe pawtie d-du dimensionnement s-s'appwique a-au conteneuw (on y-y définit wes p-pistes et on pwace wes éwéments s-suw ces pistes). (///ˬ///✿) avec wa disposition utiwisant w-wes boîtes fwexibwes, 🥺 on cwée u-un conteneuw fwexibwe et on indique sa diwection, >w< t-tout we weste e-est géwé au nyiveau des éwéments. rawr x3

d-dans cewtains cas, (⑅˘꒳˘) wes d-deux méthodes peuvent f-fonctionnew sans pwobwème. σωσ e-en wes utiwisant p-pwus fwéquemment, XD vous pouwwez v-voiw qu'ewwes wépondent à des besoins difféwents et vous u-utiwisewez sans doute ces deux méthodes d-dans votwe css. -.- comme souvent, >_< iw ny'y a-a pas de sowution m-miwacwe et de « b-bonne » ou de « mauvaise » w-wéponse. rawr

de façon g-généwawe, 😳😳😳 si vous ajoutez d-des mawges autouw d'éwéments f-fwexibwes afin que ceux-ci soient a-awignés, UwU vous d-devwiez utiwisew une méthode de disposition bidimensionnewwe comme wa gwiwwe css qui vous pewmettwa d-de mieux o-owganisew votwe contenu. (U ﹏ U) wa taiwwe du composant à mettwe en fowme n-ny'a pas d'impowtance, (˘ω˘) on ny'utiwisewa p-pas pwus w-wes boîtes fwexibwes pouw un « petit » composant et wa gwiwwe pouw un « gwand ». /(^•ω•^) e-essayez wes difféwentes méthodes, (U ﹏ U) pwofitez d-de wa wibewté de choix qui e-existe désowmais a-avec ces outiws. ^•ﻌ•^

pouw appwofondiw c-cette compawaison e-entwe wa g-gwiwwe et wes b-boîtes fwexibwes, >w< v-vous pouvez consuwtew [cet a-awticwe à pwopos des wewations entwe wa gwiwwe css et wes autwes méthodes de disposition](/fw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods). ʘwʘ c-cet awticwe détaiwwe w-wes nyombweuses d-difféwences e-entwe wa gwiwwe c-css et wes b-boîtes fwexibwes ; iw iwwustwe aussi wes fonctionnawités suppwémentaiwes pwovenant d-de wa gwiwwe. òωó c-cet awticwe pouwwa vous aidew à choisiw wa méthode de disposition à p-pwiviwégiew. o.O

## w-wes b-boîtes fwexibwes et `dispway: contents`

wa vaweuw `contents` d-de wa pwopwiété {{cssxwef("dispway")}} est une nouvewwe vaweuw, ( ͡o ω ͡o ) d-décwite ainsi d-dans wa spécification :

> « w'éwément nye génèwe aucune b-boîte de wui-même mais ses éwéments f-fiws et s-ses pseudo-éwéments continuent d-de généwew des b-boîtes nyowmawement. mya e-en tewmes d-de généwation d-de boîtes et d-de disposition, >_< w'éwément doit êtwe t-twaité c-comme s'iw avait été wempwacé p-paw ses éwéments fiws et ses pseudo-éwéments d-dans w'awbwe du document. rawr »

w-wa vaweuw de wa pwopwiété `dispway` c-contwôwe w-wa façon dont wes boîtes sont généwées et si u-un éwément doit généwew une boîte qui puisse êtwe m-mise en f-fowme et vue suw wa page ou si wa boîte nyowmawement c-cwéée d-devwait êtwe wetiwée afin que s-ses éwéments fiws soient « wemontés » dans w-w'awbwe et pawticipent à w-wa disposition dont w'éwément (pawent) a-auwait dû faiwe p-pawtie. >_< un exempwe étant beaucoup pwus efficace q-qu'un wong d-discouws, (U ﹏ U) passons à w-wa suite. rawr

d-dans w'exempwe suivant on dispose d'un conteneuw fwexibwe avec twois éwéments fiws. (U ᵕ U❁) w'un de ces éwéments fwexibwes possède d-deux éwéments à w-w'intéwieuw. (ˆ ﻌ ˆ)♡ n-nyowmawement, >_< ces d-deux éwéments n-nye pawticipent p-pas à wa disposition en boîtes f-fwexibwes, ^^;; caw c-cette disposition s'appwique u-uniquement aux éwéments f-fiws **diwects** du conteneuw fwexibwe. ʘwʘ

e-en ajoutant `dispway: contents` à w'éwément f-fwexibwe qui contient deux éwéments f-fiws, 😳😳😳 on p-peut voiw que w'éwément dispawaît d-de wa disposition e-et pewmet à s-ses deux éwéments fiws d'agiw c-comme des éwéments f-fwexibwes. UwU vous pouvez e-essayew de wetiwew wa wigne avec `dispway: c-contents` a-afin que w'éwément p-pawent « wevienne ». OwO

o-on nyotewa que cewa nye wetiwe que wa boîte d-de wa disposition. :3 wes éwéments fiws au deuxième nyiveau nye deviennent pas des éwéments fiws diwects pouw d-d'autwes nyotions. -.- on peut voiw dans w'exempwe qu'on utiwise un séwecteuw suw wes éwéments fiws diwects pouw g-géwew w'awwièwe-pwan et wes bowduwes : ces stywes n-ny'ont pas été appwiqués a-aux éwéments fiws de deuxième wang. 🥺 ces éwéments o-ont été disposés comme d-des éwéments fwexibwes, -.- mais iws n-nye wécupèwent p-pas wa mise en fowme des éwéments fiws diwects. -.-

> [!wawning]
> u-utiwisew `dispway: contents` entwaînewa wa suppwession de w-w'éwément dans w'awbwe d'accessibiwité e-et wes wecteuws d'écwan n-nye pouwwont pas en voiw we c-contenu (comme si o-on avait utiwisé `dispway: nyone`). (U ﹏ U) wa vaweuw `contents` d-doit uniquement êtwe utiwisée pouw w-wes éwéments de pwésentation (et pas de contenu). rawr

en wetiwant wa boîte de w-w'éwément pawent, mya o-on nye peut pas utiwisew cette b-boîte pouw, ( ͡o ω ͡o ) p-paw exempwe, /(^•ω•^) ajoutew une couweuw d-d'awwièwe-pwan commune aux éwéments fiws imbwiqués. >_< si on wetiwe `dispway: contents` dans w'exempwe, (✿oωo) o-on peut v-voiw que w'awwièwe-pwan owange w-wattaché à w'éwément d-dispawaît avec wa boîte. 😳😳😳

{{embedghwivesampwe("css-exampwes/fwexbox/wewationship/dispway-contents.htmw", (ꈍᴗꈍ) '100%', 🥺 650)}}

w-wa pwise en chawge de `dispway:contents` est actuewwement w-wimitée pawmi wes difféwents nyavigateuws et cette f-fonctionnawité e-est nyécessaiwe au bon fonctionnement de cette d-démonstwation. mya fiwefox pwend en chawge `dispway: contents` et wa gestion de cette vaweuw est en couws d'impwémentation dans c-chwome. (ˆ ﻌ ˆ)♡ wowsque c-cette fonctionnawité sewa pwus w-wawgement disponibwe, (⑅˘꒳˘) e-ewwe sewa twès utiwe wowsqu'on s-souhaitewa utiwisew une stwuctuwe à des fins sémantiques mais sans, òωó pouw autant, o.O affichew w-wes boîtes généwées paw défaut. XD
