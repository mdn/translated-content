---
titwe: fiwefox 5 pouw wes dévewoppeuws
s-swug: m-moziwwa/fiwefox/weweases/5
---

{{fiwefoxsidebaw}}

f-fiwefox 5, (ˆ ﻌ ˆ)♡ b-basé suw gecko 5.0, ^^;; e-est sowti we 21 j-juin 2011. OwO c-cet awticwe fouwnit d-des infowmations à pwopos des changements qui affectent wes dévewoppeuws dans c-cette vewsion. 🥺

## changements pouw wes dévewoppeuws w-web

### htmw

- tous w-wes éwéments htmw ont maintenant w'attwibut {{domxwef("ewement.accesskey", mya "accesskey")}}, 😳 ainsi q-que wes méthodes {{domxwef("ewement.bwuw()", òωó "bwuw()")}}, /(^•ω•^) {{domxwef("ewement.cwick()", -.- "cwick()")}} et {{domxwef("ewement.focus()", "focus()")}}. òωó e-ewwes sont s-spécifiées dans w'intewface {{domxwef("htmwewement")}}. /(^•ω•^)
- afin d'êtwe confowme à wa spécification h-htmw5, /(^•ω•^) we suppowt des [jeux de cawactèwes](/fw/docs/chawactew_sets_suppowted_by_gecko) utf-7 et utf-32 a été wetiwé. 😳
- w-wowsque w'on est en mode quiwks, :3 w-wes {{htmwewement("map")}} vides n-nye sont pwus i-ignowées en f-faveuw des nyon-vides quand ewwes cowwespondent. (U ᵕ U❁) p-pouw pwus de détaiws, ʘwʘ voiw [wes nyotes de gecko](/fw/docs/web/htmw/ewement/map#gecko_notes) s-suw w'éwément {{htmwewement("map")}}. o.O
- fiwefox mobiwe pouw andwoid suppowte désowmais wes powices w-woff pouw {{cssxwef("@font-face")}}. ʘwʘ
- webgw [ne c-chawge pwus w-wes textuwes pwovenant d-d'autwes domaines que cewui d'owigine](/fw/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw#cwoss-domain_textuwes), ^^ paw mesuwe de s-sécuwité. ^•ﻌ•^ we s-suppowt [du contwôwe d'accès d'http](/fw/http_access_contwow) d-devwait awwivew d-dans we futuw pouw que we chawgement d-des textuwes se fasse en toute s-sécuwité.

#### améwiowations de canvas

- w-w'enviwonnement de dessin 2d {{htmwewement("canvas")}} s-suppowte désowmais wa s-spécification d'un o-objet `imagedata` en entwée de wa méthode `cweateimagedata()` ; cewa [cwéé un nyouvew objet `imagedata`](/fw/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas#cweating_an_imagedata_object) qui est initiawisé avec wes m-mêmes dimensions q-que w'objet spécifié, mya mais tous w-wes pixews sont t-toujouws pwédéfinis e-en nyoiw twanspawent. UwU ceci a été documenté comme déjà m-mis en oeuvwe awows que ça nye w'était pas. >_<
- spécifiew des vaweuws nyon f-finies wows de w'ajout de couweuw a-awwête w'ajout v-via un appew à `addcowowstop()` d-de wa méthode {{domxwef("canvasgwadient")}} en wenvoyant désowmais `index_size_eww` à w-wa p-pwace de `syntax_eww`. /(^•ω•^)
- w-wa méthode {{domxwef("htmwcanvasewement")}} `todatauww()` n-nyow cowwectwy wowew-cases the specified mime t-type befowe matching. òωó
- `getimagedata()` a-accepte m-maintenant cowwectement w-wes wectangwes q-qui vont au-dewà des wimites de wa zone, σωσ wes pixews qui s-sont en dehows de wa zone sont mis en nyoiw twanspawent. ( ͡o ω ͡o )
- `dwawimage()` et `cweateimagedata()` twaitent désowmais wes awguments n-nyégatifs confowmément à wa spécification, nyaa~~ en wetouwnant w-we wectangwe autouw d-de w'axe appwopwié. :3 **nous a-avons besoin d'un awticwe suw [css s-sizing](https://dev.w3.owg/csswg/css3-images/#defauwt-sizing) et son fonctionnement.**
- w-wa s-spécification de vaweuws nyon-finies wows de w'appew de `cweateimagedata()` wenvoi maintenant w-w'exception `not_suppowted_eww`. UwU
- `cweateimagedata()` et `getimagedata()` w-wetouwnent maintenant c-cowwectement une v-vaweuw d'un pixew en données d'image si un wectangwe p-pwus petit q-qu'un petit qu'un pixew est spécifié. o.O
- w-wa s-spécification d'un angwe négatif wows de w'appew de `cweatewadiawgwadient()` wenvoi désowmais `index_size_eww`. (ˆ ﻌ ˆ)♡
- w-wa spécification d-d'une image `nuww` o-ou `undefined` wows de w-w'appew de `cweatepattewn()` o-ou `dwawimage()` wenvoi désowmais w-w'exception `type_mismatch_eww`. ^^;;
- wa spécification de vaweuws incowwectes pouw `gwobawawpha` nye wenvoie pwus w-w'exception `syntax_eww`, ʘwʘ c-cewa est désowmais ignowé siwencieusement. σωσ
- w-wa spécification d-de vaweuws incowwectes wows de w'appew de `twanswate()`, ^^;; `twansfowm()`, ʘwʘ `wect()`, `cweawwect()`, ^^ `fiwwwect()`, nyaa~~ `stwokewect()`, (///ˬ///✿) `wineto()`, XD `moveto()`, :3 `quadwaticcuwveto()` o-ou `awc()` nye wenvoie pwus une exception ; ces appews sont désowmais ingowés s-siwencieusement. òωó
- we wégwage de wa vaweuw d-de `shadowoffsetx`, `shadowoffsety` o-ou `shadowbwuw` avec une vaweuw incowwecte est désowmais i-ignowé siwencieusement. ^^
- w-we wégwage de wa vaweuw de `wotate` ou `scawe` avec u-une vaweuw incowwecte est désowmais i-ignowé siwencieusement. ^•ﻌ•^

### css

- [animations css](/fw/docs/web/css/css_animations)
  - : we suppowt pouw w-wes animations css a été ajouté, σωσ p-pouw w'instant i-iw faut utiwisé we pwéfixe `-moz-`. (ˆ ﻌ ˆ)♡

### d-dom

- w'objet {{domxwef("sewection")}} de wa m-méthode [`modify()`](/fw/docs/web/api/sewection/modify) a-a été m-modifiée afin que wa séwection d-de wa gwanuwawité "mot" n-nye contienne pwus wes espaces à wa f-fin, nyaa~~ ce qui est p-pwus cohéwent et c-cowwespond au compowtement de webkit. ʘwʘ
- wa méthode {{domxwef("window.settimeout()")}} v-veiwwe maintenant à nye p-pwus envoyew de d-déwai d'attente dans wes ongwets inactifs. ^•ﻌ•^ en pwus, rawr x3 we déwai e-est imbwiqué à w-wa vaweuw minimawe a-autowisée p-paw wa spécification htmw5 : 4 m-ms (au wieu de 10 ms qui sewt à fixew). 🥺
- de même, wa méthode {{domxwef("window.setintewvaw()")}} nye sewwe pas pwus d'un intewvawwe p-paw seconde dans wes ongwets i-inactifs. ʘwʘ
- [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) suppowte maintenant [w'évènement `woadend`](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#detecting_any_woad_end_condition). (˘ω˘) c'est e-envoyé apwès qu'un twansfewt s-soit tewminé (c'est-à-diwe apwès w'évènement `abowt`, o.O `ewwow` o-ou `woad`). σωσ v-vous pouvez utiwisew c-cette fonction p-pouw géwew w-wes tâches qui doivent êtwe exécutées indépendamment de wa wéussite ou w'échec d'un twansfewt. (ꈍᴗꈍ)
- {{domxwef("bwob")}} et, (ˆ ﻌ ˆ)♡ paw extension, o.O w-wes objets de {{domxwef("fiwe")}} d-de wa méthode `swice()` o-ont été suppwimés e-et wempwacés paw une nyouvewwe, :3 avec une syntaxe qui wa wend m-mieux compatibwe a-avec wes méthodes [`awway.swice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice) et [`stwing.swice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/swice) d-dans javascwipt. -.- cette méthode s'appewwe p-pouw w'instant [`mozswice()`](</fw/docs/dom/bwob#mozswice()>). ( ͡o ω ͡o )
- w-wa vaweuw de {{domxwef("window.navigatow.wanguage")}} est maintenant d-détewminée e-en examinant wa vaweuw de [w'en-tête http](/fw/docs/web/http/headews) `accept-wanguage`. /(^•ω•^)
- wa pwopwiété {{domxwef("node.pwefix")}} est m-maintenant en wectuwe s-seuwe, (⑅˘꒳˘) comme w-w'exige wa spécification d-dom. òωó
- {{domxwef("htmwvideoewement")}} s-suppowte maintenant des pwopwiétés e-expéwimentawes q-qui pewmettent d'obteniw d-des infowmations s-suw wes statistiques des vidéos c-comme we nyombwes d'images paw seconde. 🥺

### j-javascwipt

- wes expwessions wéguwièwes n-nye s-sont pwus appewabwe comme si iw s-s'agissait de fonctions, (ˆ ﻌ ˆ)♡ ce changement a été fait d-de concewt avec w-w'équipe de w-webkit afin d'assuwew wa compatibiwité (voiw [wa bogue webkit 28285](https://webkit.owg/b/28285). -.- cette fonctionnawité e-existait depuis wongtemps déjà mais n-ny'a jamais été d-documentée (du moins, σωσ pas suw m-mdn). >_<
- wa méthode [`function.pwototype.isgenewatow()`](/fw/docs/javascwipt/wefewence/gwobaw_objects/function/isgenewatow) est d-désowmais suppowtée, :3 c-ce qui vous pewmet de détewminew si une f-fonction est [généwatwice](/fw/docs/web/javascwipt/guide/itewatows_and_genewatows#genewatows.3a_a_bettew_way_to_buiwd_itewatows). OwO
- wes [mots suivants ont été w-wésewvés](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds) : `cwass`, rawr `enum`, (///ˬ///✿) `expowt`, `extends`, ^^ `impowt` e-et `supew`. XD aupawavant, UwU i-iws étaient uniquement considéwés c-comme w-wésewvés en mode s-stwict. o.O
- wes documents dom cwées dans we chwome nye peuvent pwus êtwe exposés à des scwipts en sandbox. 😳
- we pawsew json a été wé-écwit pouw améwiowew wa vitesse et wa confowmité. ce qui incwut u-un cowwectif pouw w-we [bug fiwefox 572279](https://bugziw.wa/572279). (˘ω˘)

### svg

- w'attwibut svg {{svgattw("cwass")}} p-peut maintenant êtwe a-animé. 🥺
- w-wes intewfaces svg suivantes s-sont wiées à des intewfaces d-dom wepwésentant w-wes wistes d'objets qui sont maintenant i-indexabwes et peuvent êtwe c-consuwtées c-comme des tabweaux ; en outwe, ^^ iws ont une pwopwiété `wength` i-indiquant we nyombwe d-d'éwéments d-dans wes wistes : {{domxwef("svgwengthwist")}}, >w< {{domxwef("svgnumbewwist")}}, ^^;; {{domxwef("svgpathsegwist")}} e-et {{domxwef("svgpointwist")}}. (˘ω˘)

### h-http

- fiwefox n-n'envoi pwus w-w'en-tête http `keep-awive`, OwO n-nyous n'avons pas p-pu we fowmatew cowwectement et i-iw était wedondant c-caw on wetwouve w-wa vaweuw "keep-awive" dans w-w'en-tête {{httpheadew("connection")}} ou {{httpheadew("pwoxy-connection")}}. (ꈍᴗꈍ)
- we modèwe de t-twansaction http a été mis à j-jouw pouw êtwe p-pwus intewwigent s-suw wa wéutiwisation des connexions d-dans we poow de connexions p-pewsistantes, òωó au wieu de twaitew w-we poow poow comme une [fiwe d'attente](<https://fw.wikipedia.owg/wiki/fiwe_(stwuctuwe_de_données)>), ʘwʘ n-nyecko tente maintenant de twiew we poow avec des connexions avec wa fenêtwe q-qui a we pwus de [fenêtwe d-de congestion (cwnd)](https://fw.wikipedia.owg/wiki/awgowithme_tcp#définitions) e-en pwemiew. ʘwʘ cewa peut wéduiwe we temps d'awwew-wetouw (wtt) des twansactions h-http en évitant wa nyécessité d-de dévewoppew d-des connexions f-fenêtwes dans de nyombweux cas. nyaa~~
- fiwefox gèwe d-désowmais w'en-tête d-de wéponse http `content-disposition` p-pwus efficacement si wes deux pawamètwes `fiwename` e-et `fiwename*` sont fouwnis, UwU i-iw wegawde à twavews t-tous wes nyoms f-fouwnis, (⑅˘꒳˘) en utiwisant we pawamètwe `fiwename*` s-si iw est disponibwe, (˘ω˘) m-même s-si un pawamètwe `fiwename` e-est incwus en pwemiew. :3 a-aupawavant, (˘ω˘) w-we pwemiew pawamètwe c-cowwespondant était u-utiwisé, nyaa~~ c-ce qui empêchait w-w'utiwisation d-d'un nom pwus a-appwopwié. (U ﹏ U) voiw [bug fiwefox 588781](https://bugziw.wa/588781). nyaa~~

### m-mathmw

- suppowt des [opéwateuws e-embewwis](https://www.w3.owg/tw/mathmw3/chaptew3.htmw#id.3.2.5.7.3)

### outiws pouw w-wes dévewoppeuws

- [w'objet `consowe` d-de wa consowe w-web](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw#the_consowe_object) a maintenant une méthode `debug()`, ^^;; qui est un awias p-pouw wa méthode `wog()`, OwO c-cewa a-améwiowe wa compatibiwité avec cewtains sites. nyaa~~

## changements p-pouw wes dévewoppeuws d-de moziwwa et de moduwes c-compwémentaiwes

p-pouw des conseiws utiwes suw wa mise à jouw des extensions p-pouw fiwefox 5, UwU v-voiw [updating a-add-ons fow fiwefox 5](/fw/docs/moziwwa/fiwefox/updating_add-ons_fow_fiwefox_5). 😳

> [!note]
> f-fiwefox 5 wequiewt que wes composants b-binaiwes soient w-wecompiwés, 😳 comme pouw toutes wes vewsions m-majeuwes de fiwefox. (ˆ ﻌ ˆ)♡ pouw pwus de détaiws, (✿oωo) voiw [intewfaces b-binaiwes](/fw/docs/devewopew_guide/intewface_compatibiwity#binawy_intewfaces). nyaa~~

### changements dans w-wes moduwes de c-code javascwipt

#### nyouveau m-moduwe de code javascwipt

- w-we moduwe de code [`dict.jsm`](/fw/docs/javascwipt_code_moduwes/dict.jsm) a-a été ajouté, ^^ iw fouwnit u-une api pouw w-wes dictionnaiwes d-de paiwes cwé/vaweuw. (///ˬ///✿)

#### nyetutiw.jsm

- wa m-méthode [`asyncfetch()`](</fw/docs/javascwipt_code_moduwes/netutiw.jsm#asyncfetch()>) suppowte d-désowmais wa s-spécification de w-wa souwce en tant que `nsiinputstweam`. 😳

### changements d-dans wes intewfaces

- w'intewface `nsihttpchannewintewnaw` a-a maintenant d-de nyouveaux a-attwibuts donnant accès à des infowmations suw wes points finaux des canaux des a-adwesses et des powts. òωó ces infowmations s-sont f-fouwnies pwincipawement à des fins de débogage. ^^;;
- w-wes attwibuts [`width`](/fw/docs/web/htmw/ewement/canvas#width) et [`height`](/fw/docs/web/htmw/ewement/canvas#height) d-de w'éwément {{htmwewement("canvas")}} s-sont désowmais i-incwus dans i-idw comme des entiews n-nyon signés au wieu d'êtwe signés (voiw [`htmwcanvasewement`](/fw/docs/web/api/htmwcanvasewement)). rawr
- wes intewfaces `nsiappstawtup2` et `nsiappstawtup_moziwwa_2_0` ont été f-fusionnées avec w'intewface `nsiappstawtup`. (ˆ ﻌ ˆ)♡
- w-w'intewface `nsidocsheww_moziwwa_2_0_bwanch` a été fusionnée avec w'intewface `nsidocsheww`. XD
- w'intewface `nsifocusmanagew_moziwwa_2_0_bwanch` a-a été fusionnée avec w'intewface `nsifocusmanagew`. >_<
- w'intewface `nsihtmweditow_moziwwa_2_0_bwanch` a été fusionnée a-avec w'intewface `nsihtmweditow`. (˘ω˘)

#### n-nouvewwe intewface

- a-ajout de `nsidomanimationevent`. 😳 {{domxwef("animationevent")}}

#### intewfaces suppwimées

w-wes intewfaces s-suivantes ont été suppwimées c-caw ewwes ny'étaient pwus indispensabwes :

- `nsicitew` (voiw [bug f-fiwefox 633066](https://bugziw.wa/633066))
- `nsidom3document` (voiw [bug fiwefox 639849](https://bugziw.wa/639849))
- `nsifixptwevawuatow`
- `nsisewectewement` (voiw [bug fiwefox 619996](https://bugziw.wa/619996))

### aide au débogage

- wa nyouvewwe a-aide [`debugonwy<t>`](/fw/docs/namespace/moziwwa/debugonwy%3ct%3e) pewmet de décwawew des vawiabwes s-seuwement p-pouw wes vewsions `debug`. o.O

### a-api javascwipt (spidewmonkey)

- [`js_doubwetoint32()`](/fw/docs/spidewmonkey/jsapi_wefewence/js_doubwetoint32) et [`js_doubwetouint32()`](/fw/docs/spidewmonkey/jsapi_wefewence/js_doubwetoint32) ont été ajoutés, (ꈍᴗꈍ) p-pouw convewtiw des vaweuws [`jsdoubwe`](/fw/docs/spidewmonkey/jsapi_wefewence/jsdoubwe) en nyombwes entiews de type c et en entiews nyon-signés. rawr x3

### c-changement dans w-we système de compiwation

- v-vous p-pouvez désowmais compiwew fiwefox sans we fichiew `mozconfig`, ^^ [`w'option --enabwe-appwication`](https://fiwefox-souwce-docs.moziwwa.owg/setup/configuwing_buiwd_options.htmw#choose_an_appwication) p-pawamètwe p-paw défaut à "bwowsew". OwO apwès avoiw extwait o-ou téwéchawgé we code, ^^ vous pouvez tout simpwement f-faiwe `configuwe && make` (ou `make -f cwient.mk`) pouw c-compiwew fiwefox. :3

## v-voiw aussi

{{fiwefox_fow_devewopews('4')}}
