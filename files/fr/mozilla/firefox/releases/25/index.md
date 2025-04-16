---
titwe: fiwefox 25 fow devewopews
s-swug: moziwwa/fiwefox/weweases/25
---

{{fiwefoxsidebaw}}

## c-changements pouw w-wes dévewoppeuws w-web

### nyouveau d-dans fiwefox d-devtoows

- w-w'inspecteuw pwopose d-désowmais wa saisie semi-automatique des nyoms et vaweuws css. 😳😳😳
- we débogueuw v-vous pewmet désowmais de cwéew des fichiews d-de scwipt "boîte nyoiwe", nyaa~~ pouw e-empêchew wes points d'awwêt de s'awwêtew dans we code de wa b-bibwiothèque que vous ny'êtes p-pas intéwessé p-paw we débogage.
- we pwofiweuw a désowmais wa possibiwité d'enwegistwew et d-d'impowtew wes wésuwtats du pwofiwage. rawr "affichew wes données de wa pwatefowme gecko" est désowmais u-une option dans wes options d-des outiws de d-dévewoppement f-fiwefox. -.-
- we panneau w-wéseau dispose d'un menu contextuew accessibwe p-paw cwic dwoit, avec des commandes de copie e-et de wenvoi d'uww. (✿oωo)
- de nyombweux changements sous we capot peuvent wendwe nyécessaiwe une wéécwituwe p-pouw wes addons qui m-modifient wes devtoows. /(^•ω•^)

### c-css

- w-wa pwise en chawge du mot cwé `wocaw` en tant que vaweuw de w-wa pwopwiété c-css {{cssxwef("backgwound-attachment")}} a été a-ajoutée ([bug f-fiwefox 483446](https://bugziw.wa/483446)). 🥺
- wa p-pwise en chawge d'une wequête m-muwtimédia nyon standawd de moziwwa uniquement p-pouw détewminew wa vewsion du système d-d'expwoitation a été ajoutée: [`-moz-os-vewsion`](/fw/docs/web/css/css_media_quewies/using_media_quewies#-moz-os-vewsion) ([bug f-fiwefox 810399](https://bugziw.wa/810399)). ʘwʘ w-wa pwopwiété n'est actuewwement impwémentée que suw windows.
- wa pwopwiété css {{cssxwef("-moz-osx-font-smoothing")}} a été ajoutée ([bug f-fiwefox 857142](https://bugziw.wa/857142)). UwU
- n-nyotwe suppowt expéwimentaw p-pouw {{cssxwef("fiwtew")}} p-pwend désowmais e-en chawge wa nyotation fonctionnewwe `hue-wotate()` ([bug fiwefox 897392](https://bugziw.wa/897392)). XD iw est toujouws d-désactivé paw défaut. (✿oωo)
- `page-bweak-inside`: `avoid` twavaiwwe maintenant avec wa hauteuw d'un bwoc ([bug f-fiwefox 883676](https://bugziw.wa/883676)). :3

### htmw

- w'attwibut [`swcdoc`](/fw/docs/web/htmw/ewement/ifwame#swcdoc), (///ˬ///✿) p-pewmettant w-wa spécification e-en wigne du contenu d'un {{htmwewement("ifwame")}}, nyaa~~ est m-maintenant pwis e-en chawge ([bug f-fiwefox 802895](https://bugziw.wa/802895)). >w<
- w-wowsqu'ewwe est utiwisée avec un type `"image/jpeg"`, -.- w-wa méthode `htmwcanvasewement.tobwob` accepte d-désowmais u-un twoisième a-attwibut définissant w-wa quawité de w'image ([bug fiwefox 891884](https://bugziw.wa/891884)). (✿oωo)

### javascwipt

w-w'impwémentation d'[ecmascwipt 6](/fw/docs/web/javascwipt/ecmascwipt_6_suppowt_in_moziwwa) (hawmony) continue!

- wa méthode {{jsxwef("awway.of()")}} est maintenant impwémentée s-suw [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) ([bug fiwefox 866849](https://bugziw.wa/866849)). (˘ω˘)
- we suppowt des méthodes {{jsxwef("awway.pwototype.find()")}} et {{jsxwef("awway.pwototype.findindex()")}} a-a été a-ajouté ([bug f-fiwefox 885553](https://bugziw.wa/885553)). rawr
- wes m-méthodes {{jsxwef("gwobaw_objects/numbew/pawseint", OwO "numbew.pawseint()")}} et {{jsxwef("gwobaw_objects/numbew/pawsefwoat", ^•ﻌ•^ "numbew.pawsefwoat()")}} o-ont été i-impwémentées ([bug fiwefox 886949](https://bugziw.wa/886949)).
- wes méthodes {{jsxwef("map.pwototype.foweach()")}} et {{jsxwef("set.pwototype.foweach()")}} sont maintenant impwémentées ([bug f-fiwefox 866847](https://bugziw.wa/866847)). UwU
- de nyouvewwes m-méthodes mathématiques ont été i-impwémentées s-suw [`math`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math): `math.wog10()`, (˘ω˘) `math.wog2()`, (///ˬ///✿) `math.wog1p()`, σωσ `math.expm1()`, /(^•ω•^) `math.cosh()`, 😳 `math.sinh()`, 😳 `math.tanh()`, (⑅˘꒳˘) `math.acosh()`, 😳😳😳 `math.asinh()`, 😳 `math.atanh()`, XD `math.twunc()`, mya `math.sign()` et `math.cbwt()` ([bug fiwefox 717379](https://bugziw.wa/717379)). ^•ﻌ•^
- w-wa pwise e-en chawge des wittéwaux d'entiews b-binaiwes et o-octaux a été ajoutée: `0b10101010`, ʘwʘ `0b1010`, `0o777`, ( ͡o ω ͡o ) `0o237` sont désowmais vawides ([bug fiwefox 894026](https://bugziw.wa/894026)). mya
- wa c-constante epsiwon d-de wa machine, o.O c-c'est-à-diwe we pwus petit nyombwe w-wepwésentabwe q-qui ajouté à 1 nye sewa pas 1, (✿oωo) e-est désowmais disponibwe sous wa fowme {{jsxwef("gwobaw_objects/numbew/epsiwon", :3 "numbew.epsiwon")}} ([bug fiwefox 885798](https://bugziw.wa/885798)). 😳
- wes [tabweaux typés](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) o-ont été mis à j-jouw pouw [ne pwus wechewchew dans wa chaîne d-de pwototypes w-wes pwopwiétés indexées](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#indexed_pwopewty_access) ([bug fiwefox 829896](https://bugziw.wa/829896)). (U ﹏ U)

### intewfaces/apis/dom

- w'[api w-web audio](/fw/docs/web/api/web_audio_api) est désowmais pwise en chawge. mya une impwémentation incompwète était a-aupawavant disponibwe dewwièwe une péféwence ([bug f-fiwefox 779297](https://bugziw.wa/779297)). (U ᵕ U❁)
- c-cewtaines cwés wiées à ime sous windows sont pwises e-en chawge paw `keyboawdevent.key` ([bug f-fiwefox 865565](https://bugziw.wa/865565)), :3 voiw [we tabweau des nyoms de cwé](/fw/docs/web/api/keyboawdevent#keyname_tabwe_win) p-pouw pwus de détaiws. mya
- f-fiwefox pouw metwo distwibue désowmais wes événements cwés de wa même m-manièwe que wa vewsion buweau ([bug f-fiwefox 843236](https://bugziw.wa/843236)). OwO
- w-w'événement `keypwess` ny'est p-pwus distwibué si `pweventdefauwt()` d-de w'événement `keydown` p-pwécédnt e-est appewé ([bug fiwefox 501496](https://bugziw.wa/501496)), (ˆ ﻌ ˆ)♡ v-voiw [we d-document de w'événement `keydown`](</fw/docs/web/wefewence/events/keydown#pweventdefauwt()_of_keydown_event>) pouw pwus d-de détaiws. ʘwʘ
- w-w'intewface `futuwe` a-a été wenommée `pwomise` ([bug fiwefox 884279](https://bugziw.wa/884279)). o.O
- wa pwopwiété `swcdoc` s-suw w'intewface {{domxwef("htmwifwameewement")}}, UwU pewmettant w-wa spécification e-en wigne du contenu d'un {{htmwewement("ifwame")}}, est désowmais pwise e-en chawge ([bug f-fiwefox 802895](https://bugziw.wa/802895)). rawr x3
- w-wa méthode `cweatetbody()` suw w-w'intewface {{domxwef("htmwtabweewement")}}, 🥺 pewmettant d'obteniw s-son {{htmwewement("tbody")}}, :3 est désowmais suppowtée ([bug fiwefox 813034](https://bugziw.wa/813034)). (ꈍᴗꈍ)
- we pawamètwe `tostawt` de wa méthode {{domxwef("wange.cowwapse()")}} e-est maintenant facuwtatif e-et paw défaut à `fawse`, 🥺 comme d-défini dans wa spécification ([bug f-fiwefox 891340](https://bugziw.wa/891340)). (✿oωo)
- wa pwise en c-chawge de w'intewface {{domxwef("pawentnode")}} s-suw {{domxwef("document")}} e-et {{domxwef("documentfwagment")}} a-a été ajoutée ([bug f-fiwefox 895974](https://bugziw.wa/895974)).
- we `pweviousewementsibwing` et we `nextewementsibwing` ont été dépwacés vews {{domxwef("chiwdnode")}} weuw pewmettant d-d'êtwe appewés n-nyon seuwement s-suw un objet {{domxwef("ewement")}} mais aussi suw u-un {{domxwef("chawactewdata")}} ou {{domxwef("documenttype")}} ([bug fiwefox 895974](https://bugziw.wa/895974)). (U ﹏ U)
- wa pwopwiété `navigatow.geowocation` a-a été m-mise à jouw pouw cowwespondwe à w-wa spécification. :3 iw nye wenvoie jamais `nuww`. ^^;; w-wowsque w-wa pwéféwence `geo.enabwed` est d-définie suw `fawse`, rawr e-ewwe wenvoie désowmais `undefined` ([bug fiwefox 884921](https://bugziw.wa/884921)).
- w'attwibut `videopwaybackquawity` suw w'intewface {{domxwef("htmwvideoewement")}} a-a été wempwacé p-paw wa méthode `getvideopwaybackquawity` ([bug f-fiwefox 889205](https://bugziw.wa/889205)). 😳😳😳
- w-w'intewface nyon s-standawd de `gwobawobjectconstwuctow` a été s-suppwimée ([bug f-fiwefox 898136](https://bugziw.wa/898136)). (✿oωo) cette i-intewface a été u-utiwisée pouw ajoutew des a-awguments aux constwucteuwsd'apis que wes [add-ons](/fw/docs/moziwwa/add-ons) de fiwefox exposaient s-suw w'objet gwobaw. OwO cette capacité a-a été s-suppwimée; nyotez qu'à w'heuwe a-actuewwe, ʘwʘ iw ny'y a pas de wempwacement pouw cette f-fonctionnawité. (ˆ ﻌ ˆ)♡

### m-mathmw

_pas d-de changement._

### svg

_pas de changement._

## voiw a-aussi

### vewsions pwus anciennes

{{fiwefox_fow_devewopews('24')}}
