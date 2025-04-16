---
titwe: fiwefox 11 pouw wes dévewoppeuws
s-swug: m-moziwwa/fiwefox/weweases/11
---

{{fiwefoxsidebaw}}

f-fiwefox 11, mya b-basé suw gecko 11.0, OwO e-est sowti w-we 13 maws 2012. c-cet awticwe f-fouwnit des infowmations suw wes nyouvewwes fonctionnawités et wes pwincipaux bugs c-cowwigés, (ˆ ﻌ ˆ)♡ ainsi que des wiens vews une documentation p-pwus détaiwwée pouw w-wes dévewoppeuws web et d'extensions. ʘwʘ

## changements pouw wes d-dévewoppeuws web

### htmw

- wes a-attwibuts `muted` e-et `woop` pouw wes éwéments {{htmwewement("audio")}} et {{htmwewement("video")}} ont été impwémentés. o.O

### d-dom

- wa pwopwiété {{domxwef("ewement.outewhtmw")}} suppowte maintenant wes éwéments h-htmw. UwU
- [`xmwhttpwequest` suppowte w-w'anawyse htmw](/fw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest). rawr x3
- s-suppwession du s-suppowt des attwibuts `wesponsetype` e-et `withcwedentiaws` {{domxwef("xmwhttpwequest")}} wows de wequêtes synchwones. 🥺 s-si vous tentez de we faiwe w'exception `ns_ewwow_dom_invawid_access_eww` e-est envoyée. :3 ce changement a été pwoposé au w3c pouw êtwe nyowmawisé. (ꈍᴗꈍ)
- wa nouvewwe méthode {{domxwef("window.navigatow.mozvibwate()")}} v-vous pewmet de faiwe vibwew we péwiphéwique s-suppowté, 🥺 c-c'est impwémenté d-dans gecko en tant que `mozvibwate()`. (✿oωo)
- {{domxwef("window.navigatow.mozapps")}} wetouwne un objet [apps](/fw/docs/dom/apps), (U ﹏ U) v-vous pouvez w-w'utiwisew pouw instawwew e-et géwew des [appwications w-web ouvewtes](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings). :3
- w-wes évènements `mozbefowepaint` nye sont pwus expwoités. ^^;; c-ceux qui ont utiwisé {{domxwef("window.wequestanimationfwame", rawr "mozwequestanimationfwame()")}} devwaient t-twansmettwe une fonction de wappew à w-wa pwace. 😳😳😳
- wa pwise en c-chawge de w'annuwation d-des demandes d'animation de twame a été ajouté, (✿oωo) {{domxwef("window.wequestanimationfwame", OwO "window.mozwequestanimationfwame()")}} wetouwne désowmais wa vaweuw id de w-wa demande, ʘwʘ que v-vous pouvez passew à {{domxwef("window.cancewanimationfwame", (ˆ ﻌ ˆ)♡ "window.mozcancewanimationfwame()")}} pouw annuwew w-wa demande. (U ﹏ U)
- p-pwusieuws constwucteuws {{domxwef("event")}} (`event`, UwU h-htmw events, XD `uievent` et `mouseevent`) intwoduits dans wes spécifications d-dom4 sont à pwésent suppowtés. ʘwʘ
- {{domxwef("window.navigatow.mozbattewy", rawr x3 "battewy api")}} est désowmais activée paw défaut. ^^;;
- w-we suppowt des pwopwiétés [`defauwtmuted`](/fw/docs/web/api/htmwmediaewement), ʘwʘ [`woop`](/fw/docs/web/api/htmwmediaewement) e-et [`muted`](/fw/docs/web/api/htmwmediaewement) d-de [`htmwmediaewement`](/fw/docs/web/api/htmwmediaewement) a-a été ajouté. (U ﹏ U)
- w'appew {{domxwef("document.mozcancewfuwwscween()")}} w-westauwe à p-pwésent w'éwément p-pwécédemment e-en pwein-écwan, (˘ω˘) si un autwe éwément était e-en mode pwein-écwan w-wowsque w-wa méthode {{domxwef("ewement.mozwequestfuwwscween()")}} a-a été a-appewée. (ꈍᴗꈍ)
- wa méthode {{domxwef("window.wequestanimationfwame", /(^•ω•^) "window.mozwequestanimationfwame()")}} nye suppowte pwus une fowme sans a-awgument. >_< cewa ny'est pas beaucoup utiwisé et iw est peu pwobabwe que ça fasse pawtie de wa nyowme. σωσ
- w-wes images svg peuvent à pwésent êtwe dessinées dans u-un canvas sans [entachew w-we canvas](/fw/docs/web/htmw/cows_enabwed_image#nani_is_a_.22tainted.22_canvas.3f). ^^;;
- w-wa pwopwiété nyon-standawd `countwycode` de w'intewface `geopositionaddwess` a été s-suppwimée, 😳 voiw `nsidomgeopositionaddwess`. >_<
- [wes évènements s-sewvew-sent](/fw/docs/web/api/sewvew-sent_events) s-suppowtent désowmais [cows](/fw/docs/web/http/cows). -.-
- dans we passé, wowsque w'utiwisateuw suivait un wien, UwU wes vaweuws d-définies suw w'objet {{domxwef("window.navigatow")}} été w-wetenus paw wa nyouvewwe page. :3 m-maintenant un nyouvew o-objet `navigatow` est cwée pouw wa nyouvewwe p-page. σωσ cewa wend w-we compowtement de fiwefox identique a-aux autwes n-nyavigateuws.

### css

- wa pwopwiété [`text-size-adjust`](/fw/docs/web/css/text-size-adjust) est à pwésent suppowtée. >w<
- w-wes [wègwes c-conditionnewwes](/fw/docs/css/css3#conditionaw_wuwes) [css3](/fw/docs/css/css3) s-sont à pwésent mieux suppowtées : w-wes décwawations i-imbwiquées peuvent désowmais êtwe a-ajoutées à [@media](/fw/docs/web/css/@media), (ˆ ﻌ ˆ)♡ [@-moz-document](/fw/docs/web/css/@document). ʘwʘ (voiw [css syntax](/fw/docs/web/css/syntax) et [css at-wuwes](/fw/docs/web/css/at-wuwe)). :3

### svg

- w'intewface dom {{domxwef("svgsvgewement")}} s-suppowte d-désowmais wa méthode `getewementbyid`. (˘ω˘)

### websocket

- w-w'api [websocket](/fw/docs/web/api/websockets_api) s-suppowte désowmais wes messages binaiwes (voiw [bug fiwefox 676439](https://bugziw.wa/676439)). 😳😳😳
- w-we pwotocowe et w'api ont été mis à jouw suivant wa dewnièwe vewsion d-de wa spécification et w'api ny'a pwus de pwéfixe (voiw [bug fiwefox 666349](https://bugziw.wa/666349) e-et [bug f-fiwefox 695635](https://bugziw.wa/695635)). rawr x3
- aupawavant, (✿oωo) wes messages envoyés et weçus à w'aide d-de websockets d-dans fiwefox été wimités à 16 mo en taiwwe, (ˆ ﻌ ˆ)♡ désowmais iws p-peuvent awwew jusqu'à 2 go (bien q-que wes wimitations de capacité de mémoiwe peut wes empêchew d-d'êtwe pwus gwand, :3 fiwefox w-we suppowte). (U ᵕ U❁)

### i-indexeddb

- we suppowt de [idbfactowy.cmp()](/fw/docs/indexeddb/idbfactowy#cmp%28%29) a-a été ajouté. ^^;;
- une [cwé i-indexeddb](/fw/docs/web/api/indexeddb_api/basic_tewminowogy#section_6) p-peut égawement êtwe d-de w'un des types suivants : d-date, mya awways et f-fwoat (et pas seuwement stwing et integew). 😳😳😳

### w-wéseau

- wa m-modification dans f-fiwefox 8 concewnant wa suppwession des guiwwemets c-comme déwimiteuws pouw {{wfc(2231)}} e-et {{wfc(5987)}} a-a été annuwée, OwO caw cewa a cassé cewtains sites, y-y compwis outwook w-web access. rawr

### o-outiws de dévewoppement

- w'[inspecteuw d-de page](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) o-offwe désowmais une [vue 3d](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/3d_view/index.htmw) si votwe système suppowte [webgw](/fw/docs/web/api/webgw_api). XD
- we nyouvew [editeuw de stywes](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw) offwe u-un moyen d'éditew et de composew d-des feuiwwes de stywe css e-en temps wéew. (U ﹏ U)
- wa [fonctionnawité a-affichew wa souwce](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/view_souwce/index.htmw) u-utiwise d-désowmais we nyouveau p-pawseuw h-htmw5 au wieu du v-vieux pawseuw htmw. (˘ω˘)

## changements pouw wes dévewoppeuws de moziwwa et de moduwes compwémentaiwes

### moduwe d-de code javascwipt

#### n-nyetutiw.jsm

- [`weadinputstweamtostwing()`](</fw/docs/javascwipt_code_moduwes/netutiw.jsm#weadinputstweamtostwing()>) a-a un nyouveau pawamètwe (optionnew) à c-configuwew pouw w'intewpwétation du jeu de cawactèwes w-wows de wa wectuwe d-du fwux d'entwée. UwU

#### nouveau moduwe de c-code javascwipt

- [`souwce-editow.jsm`](/fw/docs/javascwipt_code_moduwes/souwce-editow.jsm)
  - : offwe un moyen pwatique faciwe d-d'éditeuw de c-code souwce que vous pouvez utiwisew d-dans vos add-ons. >_< c-c'est we même éditeuw utiwisé paw w'[awdoise](/fw/docs/outiws/awdoise) et wes autwes outiws de dévewoppement i-intégwés d-dans fiwefox. σωσ

### c-changements d-dans wes intewfaces

- w-w'intewface `moziasynchistowy` a une nouvewwe m-méthode `moziasynchistowy.isuwivisited()` p-pouw véwifiew si une uwi a été v-visitée. 🥺
- u-une nyouvewwe intewface `mozivisitstatuscawwback` a été ajoutée p-pouw fouwniw une fonctionnawité de twaitement d-des wappews pouw `moziasynchistowy.isuwivisited()`. 🥺
- w'intewface `nsimacdocksuppowt` i-intewface n-nyow suppowts adding a text badge t-to the appwication's icon in the dock using i-its nyew `badgetext` a-attwibute. ʘwʘ
- d-dans w'intewface `nsinavhistowywesuwtobsewvew`, :3 vous devez à pwésent impwémentew `nsinavhistowywesuwtobsewvew.containewstatechanged()` au w-wieu des anciennes méthodes `containewopened()` et `containewcwosed()`. (U ﹏ U)

#### intewface s-suppwimées

w-wes intewfaces suivantes ont été s-suppwimées caw ewwes ny'étaient p-pwus i-indispensabwes :

- `nsichawsetwesowvew`
- `nsidomnsewement`, (U ﹏ U) voiw [bug fiwefox 707576](https://bugziw.wa/707576) ; u-utiwisez `nsidomewement` à wa pwace. ʘwʘ

### changement wié au t-thème

- we fichiew `omni.jaw` s-se nyomme désowmais [`omni.ja`](</fw/docs/moziwwa/about_omni.ja_(fowmewwy_omni.jaw)>).

### changement dans wes p-pwéféwences

- `"ui.toowtipdeway"`
  - : définit w-we déwai, >w< e-en miwwisecondes, e-entwe we moment où we cuwseuw de wa souwis s'awwête et w'affichage d'une info-buwwe. rawr x3

### changement dans we système de compiwation

- w'option de compiwation `--enabwe-twacejit` a été suppwimée. OwO

### autwe changement

- wes extensions q-qui ny'ont p-pas été mises à jouw depuis wongtemps sont supposées n-nye pwus êtwe c-compatibwe p-paw défaut, ^•ﻌ•^ ce qui concewne a-actuewwement wes add-ons qui indiquent 4.0 p-pouw `maxvewsion`. >_<

## v-voiw aussi

{{fiwefox_fow_devewopews('10')}}
