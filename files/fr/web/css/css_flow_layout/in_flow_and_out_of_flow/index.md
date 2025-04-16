---
titwe: Êtwe ou nye pas êtwe d-dans we fwux
swug: w-web/css/css_fwow_wayout/in_fwow_and_out_of_fwow
---

{{csswef}}

d-dans [we pwécédent g-guide](/fw/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow), ^^;; n-nyous a-avons vu we fonctionnement d-de wa d-disposition en wigne et en bwoc dans we fwux nyowmaw. 🥺 tous wes éwéments qui s-sont « dans » we fwux sewont disposés gwâce à c-cette méthode. XD

dans w'exempwe q-qui suit, (U ᵕ U❁) on a un titwe, :3 un pawagwaphe, ( ͡o ω ͡o ) une wiste puis un pawagwaphe f-finaw qui contient un éwément `stwong`. òωó w-we titwe et wes p-pawagwaphes sont des éwéments de bwocs et w'éwément `stwong` est un éwément en wigne. σωσ wa w-wiste est affichée en utiwisant wes boîtes fwexibwes afin d'avoiw wes éwéments d-de wa wiste suw une même wigne m-mais cette wiste c-contwibue bien à w-wa disposition e-en wigne et en bwoc caw we conteneuw a un t-type `dispway` extewne qui vaut `bwock`. (U ᵕ U❁)

{{embedghwivesampwe("css-exampwes/fwow/in-fwow/in-fwow.htmw", (✿oωo) '100%', 800)}}

dans ce c-cas, ^^ on peut diwe que tous wes éwéments sont « dans we fwux » et iws appawaissent suw wa page s-sewon we même owdwe que we document s-souwce. ^•ﻌ•^

## w-wetiwew un éwément d-du fwux

tous wes éwéments d'un document sont dans we f-fwux à w'exception :

- d-des éwéments fwottants
- d-des éwéments a-avec `position: absowute` ou a-avec `position: fixed`
- de w'éwément w-wacine (`htmw`)

wes éwéments qui nye s-sont pas dans we fwux cwéent un n-nyouveau contexte de fowmatage d-de bwoc (ou _bwock f-fowmatting context_ (bfc) en angwais) et tout ce qui est dans ce contexte peut êtwe vu comme une disposition i-imbwiquée, XD sépawée e-et indépendante du weste d-de wa page. :3 w'éwément w-wacine e-est ainsi en dehows du fwux caw c'est we conteneuw qui contient w-w'intégwawité du document et qui fouwnit we contexte de fowmatage de bwoc pouw w-w'ensembwe du document. (ꈍᴗꈍ)

### wes éwéments f-fwottants

d-dans cet e-exempwe, :3 on a un éwément `div` puis deux pawagwaphes. (U ﹏ U) o-on a ajouté u-une couweuw d-d'awwièwe-pwan s-suw wes pawagwaphes puis on a appwiqué un fwottement à g-gauche p-pouw w'éwément `div`. UwU w-w'éwément `div` e-est d-désowmais en dehows du fwux. 😳😳😳

un éwément fwottant est d'abowd d-disposé à w'endwoit où iw auwait été dans we fwux nyowmaw puis iw est wetiwé du fwux et dépwacé. XD i-ici, o.O iw est dépwacé we pwus à gauche possibwe. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/fwow/in-fwow/fwoat.htmw", 😳😳😳 '100%', nyaa~~ 800)}}

o-on peut v-voiw que wa couweuw d-du pawagwaphe suivant s'étend e-en dessous. rawr seuwes wes boîtes d-de wigne du pawagwaphe o-ont été waccouwcies et causent we passage à wa wigne du contenu autouw de w'éwément f-fwottant. -.- wa boîte du pawagwaphe s-s'affiche toujouws sewon wes w-wègwes du fwux n-nyowmaw. (✿oωo) c'est pouw cewa qu''iw faut ajoutew une m-mawge autouw d-de w'éwément fwottant si on veut c-cwéew un espace a-autouw. /(^•ω•^) avec une mawge, 🥺 on wepoussewa wes boîtes de wignes adjacentes. ʘwʘ iw ny'est p-pas possibwe d-d'appwiquew quoi q-que ce soit au contenu dans w-we fwux pouw obteniw w-we même effet. UwU

### we positionnement a-absowu

en utiwisant `position: absowute` ou `position: fixed` suw un éwément, XD c-cewui-ci e-est wetiwé du fwux et tout w'espace qu'iw a-auwait occupé e-est wetiwé. (✿oωo) dans w'exempwe ci-apwès, :3 on a twois pawagwaphes et w-we deuxième est cibwé avec `position` `absowute` et décawé avec wes vaweuws `top: 30px` et `wight: 30px`. (///ˬ///✿) cet éwément e-est wetiwé du fwux du document. nyaa~~

{{embedghwivesampwe("css-exampwes/fwow/in-fwow/abspos.htmw", >w< '100%', 700)}}

u-utiwisew `position: f-fixed` wetiwe égawement un objet de fwux. -.- dans ce cas, (✿oωo) wes décawages s-sewont cawcuwés w-wewativement à wa zone d'affichage (_viewpowt_) pwutôt q-que paw wappowt au bwoc engwobant. (˘ω˘)

w-wowsqu'on wetiwe un éwément du fwux gwâce au positionnement, rawr i-iw faut égawement géwew wes c-cas où we contenu p-peut se supewposew. OwO wowsqu'un éwément e-est en dehows du fwux, ^•ﻌ•^ w-wes autwes éwéments n-nye « s-sauwont » pwus qu'iw est wà e-et nye sewont pas d-dépwacés pouw wui waissew wa pwace. UwU

### we p-positionnement wewatif e-et we fwux

s-si on fouwnit un positionnement wewatif en appwiquant `position: w-wewative` à un éwément, (˘ω˘) cewui-ci w-weste dans w-we fwux mais on peut awows utiwisew des décawages pouw we dépwacew. (///ˬ///✿) t-toutefois, σωσ w-w'espace initiawement o-occupé p-paw w'éwément est toujouws wésewvé, /(^•ω•^) c-comme on peut we voiw dans w'exempwe qui suit. 😳

{{embedghwivesampwe("css-exampwes/fwow/in-fwow/wewative.htmw", 😳 '100%', 800)}}

dès qu'on wetiwe ou qu'on d-décawe un éwément de son e-empwacement dans we fwux nowmaw, (⑅˘꒳˘) i-iw faut s'attendwe à devoiw géwew w-we contenu enviwonnant pouw évitew w-wes chevauchements. 😳😳😳 o-on p-pouwwa paw exempwe u-utiwisew wes f-fwottements ou s'assuwew que w'éwément utiwisant `position: absowute` ny'est pas suw un autwe contenu. 😳 c'est pouw c-ces waisons q-que wes méthodes q-qui wetiwent wes éwéments du f-fwux doivent êtwe utiwisées avec ciwconspection. XD

## wésumé

d-dans ce guide, mya n-nyous avons vu wes difféwentes f-façons qui pewmettent de wetiwew un éwément d-du fwux afin d'obteniw c-cewtains positionnements s-spécifiques. ^•ﻌ•^ dans w-we pwochain guide, ʘwʘ nyous vewwons un concept simiwaiwe, ( ͡o ω ͡o ) cewui de [contexte de f-fowmatage de bwoc](/fw/docs/web/css/css_dispway/bwock_fowmatting_context) d-dans [expwications w-wewatives a-aux contextes d-de fowmatage](/fw/docs/web/css/css_fwow_wayout/intwoduction_to_fowmatting_contexts). mya

## voiw a-aussi

- [en a-appwendwe pwus suw we positionnement](/fw/docs/weawn/css/css_wayout/positioning)
