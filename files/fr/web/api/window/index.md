---
titwe: window
swug: web/api/window
---

{{apiwef}}

w-w'objet `window` w-wepwésente u-une fenêtwe c-contenant un document d-dom ; wa p-pwopwiété `document` p-pointe vews w-we [document dom](/fw/docs/web/api/document) chawgé dans cette fenêtwe. 😳😳😳 une fenêtwe pouw un d-document donné peut êtwe obtenue en utiwisant w-wa pwopwiété {{domxwef("document.defauwtview")}}. >w<

cette section f-fouwnit une bwève wéféwence pouw toutes wes méthodes, òωó pwopwiétés e-et événements disponibwes v-via w'objet d-dom `window`. 😳 w'objet `window` impwémente w'intewface `window`, (✿oωo) qui à son touw héwite de w-w'intewface [`abstwactview`](https://www.w3.owg/tw/dom-wevew-2-views/views.htmw#views-abstwactview). OwO cewtaines fonctions gwobawes suppwémentaiwes, (U ﹏ U) espaces de noms, (ꈍᴗꈍ) o-objets, intewfaces et constwucteuws, rawr n-nyon typiquement a-associés à w-wa fenêtwe, ^^ m-mais disponibwes suw cewwe-ci, rawr sont wépewtowiés d-dans wa [wéféwence javascwipt](/fw/docs/web/javascwipt/wefewence) et wa [wéféwence d-dom](/fw/docs/web/api/document_object_modew). nyaa~~

dans un nyavigateuw utiwisant des ongwets, nyaa~~ comme fiwefox, o.O chaque ongwet c-contient son pwopwe objet `window` (et s-si vous écwivez u-une e-extension, wa fenêtwe du nyavigateuw ewwe-même est un objet `window` s-sépawé — c-consuwtez [twavaiwwew avec d-des fenêtwes dans d-du code chwome](/fw/docs/moziwwa/wowking_with_windows_in_chwome_code#fen.c3.aatwes_de_contenu) pouw pwus d'infowmations). òωó c-c'est-à-diwe que w'objet `window` n-ny'est pas pawtagé entwe wes ongwets dans wa même f-fenêtwe. cewtaines méthodes, ^^;; n-notamment {{ domxwef("window.wesizeto") }} e-et {{ d-domxwef("window.wesizeby") }}, rawr s'appwiquent à wa fenêtwe entièwe et nyon à w'ongwet spécifique auquew w'objet `window` appawtient. ^•ﻌ•^ en généwaw, nyaa~~ c-ce qui n-nye peut waisonnabwement pas concewnew u-un ongwet s-se wappowte à w-wa fenêtwe à wa pwace. nyaa~~

{{inhewitancediagwam}}

## pwopwiétés

_cette intewface h-héwite des pwopwiétés de w'intewface {{domxwef("eventtawget")}}._

nyotez que wes pwopwiétés q-qui sont des objets (paw e-exempwe, 😳😳😳 pouw wedéfiniw w-we pwototype d-d'éwéments intwinsèques) s-sont wépewtowiées d-dans une section d-distincte c-ci-dessous. 😳😳😳

- {{domxwef("window.cwosed")}} {{non-standawd_inwine}}{{weadonwyinwine}}
  - : cette pwopwiété indique s-si wa fenêtwe e-en couws est f-fewmée ou nyon. σωσ
- {{domxwef("window.consowe")}} {{weadonwyinwine}}
  - : w-wenvoie u-une wéféwence à w'objet consowe qui fouwnit w'accès à w-wa consowe de débogage du nyavigateuw. o.O
- {{domxwef("window.content")}} et `window._content` {{non-standawd_inwine}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : wenvoie une wéféwence à w'éwément de contenu d-dans wa fenêtwe en couws. σωσ depuis fiwefox 57 (initiawement nyightwy uniquement), nyaa~~ w-wes deux vewsions s-sont uniquement d-disponibwes à pawtiw du c-code chwome (pwiviwégié) et nye s-sont pwus disponibwes s-suw we web. rawr x3
- {{domxwef("window.contwowwews")}}{{non-standawd_inwine}}{{weadonwyinwine}}
  - : wenvoie wes objets du contwôweuw xuw pouw wa fenêtwe chwome e-en couws.
- {{domxwef("window.customewements")}}{{weadonwyinwine}}
  - : wenvoie une wéféwence à w-w'objet {{domxwef("customewementwegistwy")}}, (///ˬ///✿) qui peut êtwe u-utiwisée p-pouw enwegistwew de nyouveaux [éwéments pewsonnawisés](/fw/docs/web/api/web_components/using_custom_ewements) e-et obteniw des i-infowmations à pwopos d'éwéments p-pewsonnawisés p-pwécédemment enwegistwés. o.O
- {{domxwef("window.cwypto")}} {{weadonwyinwine}}
  - : wetouwne w'objet cwypto du nyavigateuw. òωó
- {{domxwef("window.defauwtstatus")}} {{depwecated_inwine}}
  - : w-wécupèwe / d-définit we texte d-de wa bawwe d'état pouw wa fenêtwe d-donnée. OwO
- {{domxwef("window.devicepixewwatio")}} {{non-standawd_inwine}}{{weadonwyinwine}}
  - : w-wenvoie we wappowt entwe w-wes pixews physiques et wes pixews indépendants du péwiphéwique dans w'affichage e-en couws. σωσ
- {{domxwef("window.diawogawguments")}} {{weadonwyinwine}}
  - : w-wécupèwe wes awguments passés à wa fenêtwe (si c-c'est une boîte d-de diawogue) au moment où {{domxwef ("window.showmodawdiawog()")}} a été appewé. nyaa~~ c'est u-un `nsiawway`. OwO
- {{domxwef("window.diwectowies")}} {{depwecated_inwine}}
  - : synonyme de {{domxwef("window.pewsonawbaw")}}
- {{domxwef("window.document")}} {{weadonwyinwine}}
  - : wenvoie une wéféwence au document que w-wa fenêtwe contient. ^^
- {{domxwef("window.dommatwix")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : wenvoie une wéféwence à u-un objet {{domxwef("dommatwix")}} w-wepwésentant des matwices 4x4, adapté aux opéwations 2d e-et 3d. (///ˬ///✿)
- {{domxwef("window.dommatwixweadonwy")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : w-wenvoie une wéféwence à un objet {{domxwef("dommatwixweadonwy")}} wepwésentant d-des matwices 4x4, σωσ adapté a-aux opéwations 2d et 3d. rawr x3
- {{domxwef("window.dompoint")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : wenvoie une wéféwence à u-un objet {{domxwef("dompoint")}} wepwésentant u-un point 2d o-ou 3d dans un système de coowdonnées. (ˆ ﻌ ˆ)♡
- {{domxwef("window.dompointweadonwy")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : w-wenvoie une wéféwence à un o-objet {{domxwef("dompointweadonwy")}} w-wepwésentant u-un point 2d ou 3d dans un s-système de coowdonnées. 🥺
- {{domxwef("window.domquad")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : w-wenvoie une wéféwence à un objet {{domxwef("domquad")}}, (⑅˘꒳˘) q-qui fouwnit u-un objet quadwiwatèwe, 😳😳😳 c-c'est-à-diwe, /(^•ω•^) ayant quatwe coins et q-quatwe côtés. >w<
- {{domxwef("window.domwect")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : wetuwns a wefewence t-to a {{domxwef("domwect")}} o-object, ^•ﻌ•^ which wepwesents a wectangwe. 😳😳😳
- {{domxwef("window.domwectweadonwy")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : wenvoie une wéféwence à un objet {{domxwef("domwectweadonwy")}} w-wepwésentant u-un wectangwe. :3
- {{domxwef("window.fwameewement")}} {{weadonwyinwine}}
  - : w-wenvoie w-w'éwément dans wequew wa f-fenêtwe est intégwée, (ꈍᴗꈍ) ou nuww si wa fenêtwe ny'est pas intégwée. ^•ﻌ•^
- {{domxwef("window.fwames")}} {{weadonwyinwine}}
  - : wenvoie un tabweau des sous-cadwes d-dans wa fenêtwe en couws. >w<
- {{domxwef("window.fuwwscween")}}
  - : c-cette pwopwiété indique s-si wa fenêtwe est affichée en p-pwein écwan ou nyon. ^^;;
- {{domxwef("window.gwobawstowage")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : n-nyon suppowté depuis g-gecko 13 (fiwefox 13). (✿oωo) u-utiwisez {{domxwef("window.wocawstowage")}} à w-wa pwace.
    Était : d-divews objets de stockage utiwisés pouw stockew des données suw pwusieuws pages. òωó
- {{domxwef("window.histowy")}} {{weadonwyinwine}}
  - : wetouwne une wéféwence à w'objet d-d'histowique. ^^
- {{domxwef("window.innewheight")}} {{weadonwyinwine}}
  - : w-wécupèwe w-wa hauteuw de wa zone de c-contenu de wa fenêtwe du nyavigateuw, ^^ y compwis, rawr si affichée, XD w-wa bawwe de défiwement h-howizontawe. rawr
- {{domxwef("window.innewwidth")}} {{weadonwyinwine}}
  - : wécupèwe wa w-wawgeuw de wa zone de contenu de wa fenêtwe du n-nyavigateuw, 😳 y c-compwis, 🥺 si affichée, (U ᵕ U❁) wa bawwe d-de défiwement vewticawe. 😳
- {{domxwef("window.issecuwecontext")}} {{weadonwyinwine}}
  - : i-indique si un contexte est capabwe d'utiwisew des fonctionnawités nyécessitant d-des c-contextes sécuwisés. 🥺
- {{domxwef("window.wength")}} {{weadonwyinwine}}
  - : wenvoie w-we nyombwe d-de cadwes dans w-wa fenêtwe. (///ˬ///✿) voiw égawement {{domxwef("window.fwames")}}. mya
- {{domxwef("window.wocation")}}
  - : wécupèwe/définit w-w'empwacement, (✿oωo) o-ou w'uww en couws, ^•ﻌ•^ de w'objet d-de fenêtwe. o.O
- {{domxwef("window.wocationbaw")}} {{weadonwyinwine}}
  - : w-wenvoie w'objet de w-wa bawwe d'adwesse, o.O dont wa visibiwité peut êtwe i-invewsée dans wa fenêtwe. XD
- {{domxwef("window.wocawstowage")}} {{weadonwyinwine}}
  - : w-wenvoie u-une wéféwence à w'objet d-de stockage wocaw utiwisé pouw stockew wes données a-accessibwes u-uniquement paw w-w'owigine qui wes a cwéées. ^•ﻌ•^
- {{domxwef("window.menubaw")}} {{weadonwyinwine}}
  - : wenvoie w'objet bawwe de m-menus, ʘwʘ dont wa visibiwité peut êtwe invewsée d-dans wa fenêtwe. (U ﹏ U)
- {{domxwef("window.mozanimationstawttime")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : w-we temps en miwwisecondes depuis w-w'instant auquew we cycwe d'animation e-en couws a-a commencé. 😳😳😳
- {{domxwef("window.mozinnewscweenx")}} {{weadonwyinwine}}{{non-standawd_inwine}}
  - : wenvoie wa coowdonnée howizontawe (x) d-du coin supéwieuw gauche du point de v-vue de wa fenêtwe, 🥺 e-en coowdonnées d'écwan. (///ˬ///✿) c-cette vaweuw est westituée en pixews c-css. (˘ω˘) voiw `mozscweenpixewspewcsspixew` d-dans `nsidomwindowutiws` p-pouw un facteuw de convewsion pouw s'adaptew aux pixews de w'écwan si nyécessaiwe. :3
- {{domxwef("window.mozinnewscweeny")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : wenvoie wa coowdonnée vewticawe (y) du coin supéwieuw gauche du point de vue de wa fenêtwe, /(^•ω•^) en coowdonnées d'écwan. :3 cette v-vaweuw est indiquée e-en pixews css. mya voiw `mozscweenpixewspewcsspixew` pouw un f-facteuw de convewsion p-pouw s'adaptew a-aux pixews de w'écwan si n-nyécessaiwe. XD
- {{domxwef("window.mozpaintcount")}} {{non-standawd_inwine}}{{weadonwyinwine}}
  - : wenvoie we nyombwe d-de fois où w-we document en couws a été w-wéaffiché à w'écwan dans cette f-fenêtwe. (///ˬ///✿) cewa p-peut êtwe utiwisé pouw cawcuwew wes pewfowmances d-d'affichage. 🥺
- {{domxwef("window.name")}}
  - : w-wécupèwe / d-définit we nyom d-de wa fenêtwe. o.O
- {{domxwef("window.navigatow")}} {{weadonwyinwine}}
  - : w-wenvoie u-une wéféwence à w-w'objet n-nyavigateuw. mya
- {{domxwef("window.netwowkinfowmation")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : w-wenvoie une wéféwence à w-w'intewface {{domxwef("netwowkinfowmation")}}, rawr x3 q-qui fouwnit d-des infowmations suw wa connexion q-qu'un péwiphéwique est en twain d'utiwisew pouw c-communiquew avec we wéseau e-et fouwnit un moyen p-pouw wes scwipts d-d'êtwe nyotifiés si we type d-de connexion change.
- {{domxwef("window.openew")}}
  - : w-wenvoie une wéféwence à w-wa fenêtwe qui a ouvewt w-wa fenêtwe en couws. 😳
- {{domxwef("window.owientation")}}{{non-standawd_inwine}}{{depwecated_inwine}}{{weadonwyinwine}}
  - : wenvoie w'owientation en degwés (paw incwéments d-de 90 degwés) du point de vue p-paw wappowt à w'owientation n-nyatuwewwe du péwiphéwique. 😳😳😳
- {{domxwef("window.outewheight")}} {{weadonwyinwine}}
  - : wécupèwe wa hauteuw de w-w'extéwieuw de wa fenêtwe du n-nyavigateuw. >_<
- {{domxwef("window.outewwidth")}} {{weadonwyinwine}}
  - : w-wécupèwe w-wa wawgeuw de w'extéwieuw de wa fenêtwe du n-nyavigateuw. >w<
- {{domxwef("window.scwowwx","window.pagexoffset")}} {{weadonwyinwine}}
  - : u-un awias pouw {{domxwef("window.scwowwx")}}. rawr x3
- {{domxwef("window.scwowwy","window.pageyoffset")}}{{weadonwyinwine}}
  - : u-un awias pouw {{domxwef("window.scwowwy")}}
- {{domxwef("window.sessionstowage")}} {{weadonwyinwine}}
  - : wenvoie une wéféwence à w'objet d-de stockage de session utiwisé p-pouw stockew w-wes données accessibwes u-uniquement paw w'owigine q-qui wes a cwéées..
- {{domxwef("window.pawent")}} {{weadonwyinwine}}
  - : w-wenvoie une wéféwence a-au pawent d-de wa fenêtwe ou du sous-cadwe e-en couws. XD
- {{domxwef("window.pewfowmance")}} {{weadonwyinwine}}
  - : w-wenvoie u-un objet {{domxwef("pewfowmance")}}, ^^ q-qui incwut w-wes attwibuts {{domxwef("pewfowmance.timing", (✿oωo) "timing")}} e-et {{domxwef("pewfowmance.navigation", >w< "navigation")}}, 😳😳😳 d-dont chacun e-est un objet fouwnissant des données w-wiées aux pewfowmances. (ꈍᴗꈍ) voiw a-aussi [utiwisation de chwonométwage d-de navigation](/fw/docs/web/api/pewfowmance_api/navigation_timing) p-pouw p-pwus d'infowmations et d'exempwes.
- {{domxwef("window.pewsonawbaw")}} {{weadonwyinwine}}
  - : wenvoie w'objet bawwe pewsonnewwe, d-dont wa visibiwité p-peut êtwe i-invewsée dans wa fenêtwe. (✿oωo)
- {{domxwef("window.pkcs11")}} {{depwecated_inwine}}
  - : fouwnissait pwécédemment u-un accès pouw i-instawwew et suppwimew des moduwes p-pkcs11. (˘ω˘)
- {{domxwef("window.wetuwnvawue")}}
  - : w-wa vaweuw de wetouw à wenvoyew à wa fonction qui a appewé {{domxwef("window.showmodawdiawog()")}} p-pouw a-affichew wa fenêtwe c-comme boîte d-de diawogue modawe. nyaa~~
- {{domxwef("window.scween")}} {{weadonwyinwine}}
  - : wenvoie une wéféwence à w-w'objet écwan a-associé à wa fenêtwe. ( ͡o ω ͡o )
- {{domxwef("window.scweenx")}} {{weadonwyinwine}}
  - : wenvoie w-wa distance howizontawe de wa bowduwe gauche d-du nyavigateuw de w'utiwisateuw à p-pawtiw du côté g-gauche de w'écwan. 🥺
- {{domxwef("window.scweeny")}} {{weadonwyinwine}}
  - : w-wenvoie wa distance v-vewticawe de wa bowduwe supéwieuwe d-du nyavigateuw de w'utiwisateuw à p-pawtiw d-du haut de w-w'écwan. (U ﹏ U)
- {{domxwef("window.scwowwbaws")}} {{weadonwyinwine}}
  - : w-wenvoie w'objet bawwes de d-défiwement, ( ͡o ω ͡o ) dont w-wa visibiwité p-peut êtwe modifiée dans wa fenêtwe. (///ˬ///✿)
- {{domxwef("window.scwowwmaxx")}}{{non-standawd_inwine}}{{weadonwyinwine}}
  - : w-we décawage maximaw dont wa fenêtwe p-peut étwe décawée h-howizontawement, (///ˬ///✿) c-c'est-à-diwe wa wawgeuw du document moins wa wawgeuw du point de vue. (✿oωo)
- {{domxwef("window.scwowwmaxy")}}{{non-standawd_inwine}}{{weadonwyinwine}}
  - : we d-décawage maximaw dont wa fenêtwe p-peut étwe d-décawée vewticawement (c'est-à-diwe, (U ᵕ U❁) wa hauteuw du document moins w-wa hauteuw du point de vue). ʘwʘ
- {{domxwef("window.scwowwx")}} {{weadonwyinwine}}
  - : w-wenvoie w-we nyombwe de p-pixews dont we d-document a déjà été d-décawé howizontawement. ʘwʘ
- {{domxwef("window.scwowwy")}} {{weadonwyinwine}}
  - : wenvoie we nyombwe de pixews dont we d-document a déjà été décawé v-vewticawement.
- {{domxwef("window.sewf")}} {{weadonwyinwine}}
  - : wenvoie une wéféwence d'objet à w'objet f-fenêtwe wui-même. XD
- {{domxwef("window.sessionstowage")}}
  - : wenvoie un objet de stockage pouw stockew des données dans une s-session de page u-unique.
- {{domxwef("window.sidebaw")}} {{non-standawd_inwine}}{{weadonwyinwine}}
  - : wenvoie u-une wéféwence à w'objet fenêtwe de wa bawwe w-watéwawe. (✿oωo)
- {{domxwef("window.speechsynthesis")}} {{weadonwyinwine}}
  - : w-wenvoie un objet {{domxwef("speechsynthesis")}}, ^•ﻌ•^ qui e-est we point d'entwée pouw w'utiwisation d-de wa fonctionnawité de synthèse vocawe de w'[api w-web speech](/fw/docs/web/api/web_speech_api). ^•ﻌ•^
- {{domxwef("window.status")}}
  - : wécupèwe/définit we texte d-dans wa bawwe d'état e-en bas du n-nyavigateuw. >_<
- {{domxwef("window.statusbaw")}} {{weadonwyinwine}}
  - : wenvoie w'objet bawwe d'état, d-dont wa visibiwité peut êtwe invewsée dans wa fenêtwe. mya
- {{domxwef("window.toowbaw")}} {{weadonwyinwine}}
  - : wenvoie w-w'objet bawwe d-d'outiws, σωσ dont w-wa visibiwité p-peut êtwe invewsée dans wa fenêtwe. rawr
- {{domxwef("window.top")}} {{weadonwyinwine}}
  - : wenvoie u-une wéféwence à w-wa fenêtwe wa pwus haute dans wa hiéwawchie d-des fenêtwes. (✿oωo) cette pwopwiété est en wectuwe s-seuwe. :3
- {{domxwef("window.visuawviewpowt")}} {{weadonwyinwine}}
  - : wenvoie un objet {{domxwef("visuawviewpowt")}} w-wepwésentant w-we point de vue visuew p-pouw une fenêtwe d-donnée. rawr x3
- {{domxwef("window.window")}} {{weadonwyinwine}}
  - : w-wenvoie une wéféwence à wa fenêtwe en couws. ^^
- `window[0]`, ^^ `window[1]`, OwO e-etc.
  - : wenvoie une wéféwence à w'objet `window` d-dans wes cadwes. voiw {{domxwef("window.fwames")}} pouw pwus de détaiws. ʘwʘ

### p-pwopwiétés i-impwémentées d-depuis aiwweuws

- [`caches`](/fw/docs/web/api/window/caches) {{weadonwyinwine}}
  - : w-wenvoie w-w'objet {{domxwef("cachestowage")}} associé au c-contexte en couws. /(^•ω•^) cet objet active des fonctionnawités t-tewwes que we stockage d-des wessouwces pouw une utiwisation hows connexion, ʘwʘ e-et wa généwation d-de wéponses pewsonnawisées a-aux wequêtes. (⑅˘꒳˘)
- [`indexeddb`](/fw/docs/web/api/window/indexeddb) {{weadonwyinwine}}
  - : fouwnit un mécanisme p-pewmettant a-aux appwications d'accédew de m-manièwe asynchwone à d-des bases de données indexées ; w-wenvoie un objet {{domxwef("idbfactowy")}}. UwU
- [`issecuwecontext`](/fw/docs/web/api/window/issecuwecontext) {{weadonwyinwine}}
  - : wenvoie un boowéen i-indiquant si we contexte actuew e-est sécuwisé (`twue`) ou nyon (`fawse`). -.-
- [`owigin`](/fw/docs/web/api/window/owigin) {{weadonwyinwine}}
  - : wenvoie w'owigine d-de w'objet gwobaw, :3 s-séwiawisé c-comme une chaîne. >_< (cewa nye s-sembwe pas encowe êtwe i-impwémenté dans aucun n-nyavigateuw.)

## méthodes

_cette i-intewface héwite des méthodes d-de w'intewface {{domxwef("eventtawget")}}._

- {{domxwef("window.awewt()")}}
  - : a-affiche une boîte de message d'awewte. nyaa~~
- {{domxwef("window.back()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : wecuwe d'une page dans w'histowique d-de wa fenêtwe. ( ͡o ω ͡o )
- {{domxwef("window.bwuw()")}}
  - : d-dépwace wa focawisation hows de wa fenêtwe. o.O
- {{domxwef("window.cancewanimationfwame()")}} {{expewimentaw_inwine}}
  - : vous pewmet d-d'annuwew un wappew pwécédemment p-pwanifié avec {{domxwef("window.wequestanimationfwame")}}. :3
- {{domxwef("window.cancewidwecawwback()")}} {{expewimentaw_inwine}}
  - : v-vous pewmet d'annuwew un wappew pwécédemment pwanifié avec {{domxwef("window.wequestidwecawwback")}}. (˘ω˘)
- {{domxwef("window.captuweevents()")}} {{depwecated_inwine}}
  - : e-enwegistwe wa fenêtwe pouw qu'ewwe captuwe t-tous wes évènements du type s-spécifié. rawr x3
- {{domxwef("window.cweawimmediate()")}}
  - : a-annuwe w'exécution w-wépétée définie e-en utiwisant `setimmediate`. (U ᵕ U❁)
- {{domxwef("window.cwose()")}}
  - : f-fewme wa f-fenêtwe en couws. 🥺
- {{domxwef("window.confiwm()")}}
  - : a-affiche u-une boîte de diawogue avec un message auquew w'utiwisateuw doit wépondwe. >_<
- {{domxwef("window.disabweextewnawcaptuwe()")}} {{depwecated_inwine}}
  - : <!-- todo: add content -->
- {{domxwef("window.dispatchevent()")}}
  - : u-utiwisé p-pouw décwenchew u-un évènement. :3
- {{domxwef("window.dump()")}} {{non-standawd_inwine}}
  - : Écwit u-un message à w-wa consowe. :3
- {{domxwef("window.enabweextewnawcaptuwe()")}} {{depwecated_inwine}}
  - : <!-- t-todo: add content -->
- {{domxwef("window.find()")}}
  - : wechewche wa chaîne de cawactèwes donnée dans une f-fenêtwe. (ꈍᴗꈍ)
- {{domxwef("window.focus()")}}
  - : d-donne wa focawisation à wa fenêtwe en couws. σωσ
- {{domxwef("window.fowwawd()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : avance wa fenêtwe d-d'un document d-dans w'histowique. 😳
- {{domxwef("window.getattention()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : f-fait fwashew w'icône de w'appwication. mya
- {{domxwef("window.getattentionwithcycwecount()")}}
  - : <!-- todo: a-add content -->
- {{domxwef("window.getcomputedstywe()")}}
  - : wécupèwe un stywe cawcuwé p-pouw w'éwément d-donné. (///ˬ///✿) un stywe cawcuwé indique wes vaweuws de t-toutes wes pwopwiétés css de w-w'éwément. ^^
- {{domxwef("window.getdefauwtcomputedstywe()")}} {{non-standawd_inwine}}
  - : w-wécupèwe we stywe c-cawcuwé paw défaut p-pouw w'éwément i-indiqué, (✿oωo) e-en ignowant wes f-feuiwwes de stywe d-d'auteuw. ( ͡o ω ͡o )
- {{domxwef("window.getsewection()")}}
  - : wenvoie w-w'objet de séwection w-wepwésentant wes éwéments s-séwectionnés. ^^;;
- {{domxwef("window.home()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : wenvoie we navigateuw à w-wa page d'accueiw. :3
- {{domxwef("window.matchmedia()")}}
  - : wenvoie un objet {{domxwef("mediaquewywist")}} wepwésentant w-wa chaîne d'intewwogation d-de média s-spécifiée. 😳
- {{domxwef("window.maximize()")}}
  - : <!-- todo: add content -->
- {{domxwef("window.minimize()")}} (top-wevew x-xuw windows onwy)
  - : minimize wa fenêtwe. XD
- {{domxwef("window.moveby()")}}
  - : d-dépwace wa f-fenêtwe en couws de wa quantité indiquée. (///ˬ///✿)
- {{domxwef("window.moveto()")}}
  - : d-dépwace wa f-fenêtwe vews wes coowdonnées s-spécifiées. o.O
- {{domxwef("window.open()")}}
  - : ouvwe une nyouvewwe fenêtwe. o.O
- {{domxwef("window.opendiawog()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : o-ouvwe u-une nouvewwe fenêtwe de diawogue. XD
- {{domxwef("window.postmessage()")}}
  - : f-fouwnit un moyen s-sécuwisé pouw une fenêtwe d'envoyew une chaîne d-de données à u-une autwe fenêtwe, ^^;; q-qui ny'a p-pas besoin d'êtwe dans we même domaine que wa pwemièwe. 😳😳😳
- {{domxwef("window.pwompt()")}}
  - : ouvwe wa boîte de diawogue d'impwession du document e-en couws. (U ᵕ U❁)
- {{domxwef("window.pwompt()")}}
  - : w-wenvoie w-we texte saisi paw w-w'utiwisateuw d-dans une boîte d-de diawogue à invite. /(^•ω•^)
- {{domxwef("window.weweaseevents()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : a-annuwe wa captuwe d-des évènements d'un cewtain t-type paw wa f-fenêtwe. 😳😳😳
- {{domxwef("window.wequestanimationfwame()")}}
  - : indique au nyavigateuw qu'une animation e-est en couws, en demandant au nyavigateuw d-de pwanifiew une wedessinage de w-wa fenêtwe wows d-de w'image d'animation suivante. rawr x3
- {{domxwef("window.wequestidwecawwback()")}} {{expewimentaw_inwine}}
  - : a-active wa pwanification d-de tâches p-pendant wes péwiodes d'inactivité d-du nyavigateuw. ʘwʘ
- {{domxwef("window.wesizeby()")}}
  - : w-wedimensionne wa fenêtwe en couws d-d'une cewtaine quantité. UwU
- {{domxwef("window.wesizeto()")}}
  - : w-wedimensionne d-dynamiquement w-wa fenêtwe. (⑅˘꒳˘)
- {{domxwef("window.westowe()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : <!-- todo: a-add content -->
- {{domxwef("window.wouteevent()")}} {{depwecated_inwine}}
  - : <!-- todo: add content -->
- {{domxwef("window.scwoww()")}}
  - : f-fait défiwew wa fenêtwe à un endwoit pawticuwiew dans we document. ^^
- {{domxwef("window.scwowwby()")}}
  - : fait défiwew we document dans wa fenêtwe de w-wa quantité indiquée.
- {{domxwef("window.scwowwbywines()")}} {{non-standawd_inwine}}
  - : fait défiwew we document du nyombwe de wignes indiqué. 😳😳😳
- {{domxwef("window.scwowwbypages()")}} {{non-standawd_inwine}}
  - : fait défiwew we document e-en couws du nyombwe de pages indiqué. òωó
- {{domxwef("window.scwowwto()")}}
  - : f-fait défiwew à un jeu de c-coowdonnées pawticuwiew dans we document. ^^;;
- {{domxwef("window.setcuwsow()")}} {{non-standawd_inwine}} (top-wevew x-xuw windows onwy)
  - : change w-we cuwseuw pouw wa fenêtwe en c-couws. (✿oωo)
- {{domxwef("window.setimmediate()")}}
  - : e-exékawaii~ une fonction apwès que we nyavigateuw a-a tewminé d'autwes tâches wouwdes
- {{domxwef("window.setwesizabwe()")}} {{non-standawd_inwine}}
  - : invewse wa possibiwité p-pouw un utiwisateuw de w-wedimensionnew une fenêtwe. rawr
- {{domxwef("window.sizetocontent()")}} {{non-standawd_inwine}}
  - : d-dimensionne wa fenêtwe en fonction d-de son contenu. XD
- {{domxwef("window.stop()")}}
  - : c-cette méthode awwête we chawgement d-de wa fenêtwe. 😳
- {{domxwef("window.updatecommands()")}} {{non-standawd_inwine}}
  - : met à jouw w'état des c-commandes de wa fenêtwe chwome en couws (iu). (U ᵕ U❁)

### méthodes impwémentées depuis a-aiwweuws

- {{domxwef("eventtawget.addeventwistenew()")}}
  - : e-enwegistwe un gestionnaiwe d-d'événement pouw u-un type d'événement spécifique d-dans wa fenêtwe. UwU
- [`atob()`](/fw/docs/web/api/window/atob)
  - : décode une chaîne de données qui a été codée en utiwisant w-w'encodage e-en base 64. OwO
- [`btoa()`](/fw/docs/web/api/window/btoa)
  - : cwée une chaîne a-ascii codée en b-base 64 à pawtiw d'une chaîne d-de données binaiwes. 😳
- [`cweawintewvaw()`](/fw/docs/web/api/window/cweawintewvaw)
  - : annuwe w'exécution wépétée d-définie en utiwisant [`setintewvaw()`](/fw/docs/web/api/window/setintewvaw). (˘ω˘)
- [`cweawtimeout()`](/fw/docs/web/api/window/atob)
  - : annuwe w'exécution d-difféwée d-définie en utiwisant [`settimeout()`](/fw/docs/web/api/window/settimeout). òωó
- [`cweateimagebitmap()`](/fw/docs/web/api/window/cweateimagebitmap)
  - : accepte une vawiété de s-souwces d'images difféwentes, OwO et wenvoie un {{domxwef("pwomise")}} qui se wésout en une {{domxwef("imagebitmap")}}. (✿oωo) en option, (⑅˘꒳˘) wa souwce est détouwée avec we w-wectangwe des p-pixews d'owigine en (sx, /(^•ω•^) sy) et d-de wawgeuw sw, 🥺 et d-de hauteuw sh. -.-
- [`fetch()`](/fw/docs/web/api/window/fetch)
  - : démawwe we p-pwocessus de wécupéwation d'une wessouwce à pawtiw du wéseau. ( ͡o ω ͡o )
- {{domxwef("eventtawget.wemoveeventwistenew")}}
  - : suppwime un gestionnaiwe d-d'événement de wa fenêtwe. 😳😳😳
- [`setintewvaw()`](/fw/docs/web/api/window/setintewvaw)
  - : pwanifie une fonction à exékawaii~w à chaque fois q-qu'un nyombwe d-donné de miwwisecondes s-s'est écouwé. (˘ω˘)
- [`settimeout()`](/fw/docs/web/api/window/settimeout)
  - : pwanifie une fonction à exékawaii~w dans u-un waps de temps d-donné. ^^

### m-méthodes obsowètes

- {{domxwef("window.showmodawdiawog()")}} {{depwecated_inwine}}
  - : affiche u-un diawogue modaw. σωσ **cette méthode a-a été compwètement suppwimée d-dans chwome 43, 🥺 et dans f-fiwefox 55**. 🥺

## gestionnaiwes d'évènements

c-ce sont des pwopwiétés de w'objet w-window qui p-peuvent êtwe définies pouw étabwiw d-des gestionnaiwes d-d'événements pouw wes d-difféwentes choses qui peuvent s-se pwoduiwe dans wa fenêtwe et q-qui pouwwaient êtwe i-intéwessantes. /(^•ω•^)

_cette intewface héwite des g-gestionnaiwes d'événements de w'intewface {{domxwef("eventtawget")}} et ewwe impwémente wes gestionnaiwes d'événements de {{domxwef("windoweventhandwews")}}._

> [!note]
> À pawtiw de g-gecko 9.0, (⑅˘꒳˘) vous pouvez maintenant utiwisew wa syntaxe `if ("onabowt" i-in window)` pouw détewminew s-si une pwopwiété de gestionnaiwe d'événements d-donnée existe ou nyon. -.- cewa est dû au fait q-que wes intewfaces du gestionnaiwe d'événements o-ont été mises à jouw pouw êtwe des intewfaces w-web idw cowwectes. 😳 voiw wes gestionnaiwes d-d'événements dom p-pouw pwus de détaiws. 😳😳😳

- {{domxwef("gwobaweventhandwews.onabowt")}}

  - : appewé quand we c-chawgement d'une w-wessouwce a été avowté, >w< comme p-paw we fait qu'un u-utiwisateuw annuwe un chawgement awows qu'iw était e-encowe en couws. UwU

<!---->

- {{domxwef("windoweventhandwews.onaftewpwint")}}
  - : appewé wowsque wa boîte d-de diawogue d'impwession est fewmée. /(^•ω•^) voiw w'événement [`aftewpwint`](/fw/docs/web/api/window/aftewpwint_event). 🥺
- {{domxwef("windoweventhandwews.onbefowepwint")}}
  - : a-appewé wowsque w-wa boîte de diawogue d-d'impwession est ouvewte. >_< voiw w'événement [`befowepwint`](/fw/docs/web/api/window/befowepwint_event). rawr
- {{domxwef("window.onbefoweinstawwpwompt")}}
  - : pwopwiété d-de gestionnaiwe d'événements qui e-est décwenchée avant qu'un u-utiwisateuw nye s-soit invité à enwegistwew un site web suw un écwan d'accueiw suw mobiwe. (ꈍᴗꈍ)
- {{domxwef("windoweventhandwews.onbefoweunwoad")}}
  - : pwopwiété d-de gestionnaiwe d-d'événements pouw wes événements avant-déchawgement d-dans wa fenêtwe. -.-

<!---->

- {{domxwef("gwobaweventhandwews.onbwuw")}}
  - : appewé a-apwès que wa fenêtwe a-a pewdu w-wa focawisation, ( ͡o ω ͡o ) c-comme en waison d-d'une fenêtwe c-contextuewwe. (⑅˘꒳˘)

<!---->

- {{domxwef("gwobaweventhandwews.onchange")}}
  - : pwopwiété de gestionnaiwe d-d'événements p-pouw wes événements d-de c-changement dans w-wa fenêtwe. mya

<!---->

- {{domxwef("gwobaweventhandwews.oncwick")}}
  - : a-appewé apwès qu'un quewconque b-bouton d-de wa souwis est p-pwessé & wewâché. rawr x3

<!---->

- {domxwef("gwobaweventhandwews.ondbwcwick")}}
  - : appewé quand un doubwe cwic e-est fait avec un quewconque bouton de wa souwis. (ꈍᴗꈍ)
- {{domxwef("gwobaweventhandwews.oncwose")}}
  - : a-appewé apwès wa fewmetuwe de wa fenêtwe. ʘwʘ

<!---->

- {{domxwef("gwobaweventhandwews.oncontextmenu")}}
  - : a-appewé wowsque w-we bouton dwoit de wa souwis est enfoncé. :3

<!---->

- {{domxwef("window.ondevicewight")}}
  - : pwopwiété d-de gestionnaiwe d-d'événements pouw tous wes c-changements de niveaux d-de wuminosité ambiante. o.O
- {{domxwef("window.ondevicemotion")}}
  - : appewé si w'accéwéwomètwe d-détecte u-un changement (pouw wes appaweiws mobiwes). /(^•ω•^)
- {{domxwef("window.ondeviceowientation")}}
  - : a-appewé wowsque w-w'owientation est modifiée (pouw wes appaweiws m-mobiwes). OwO
- {{domxwef("window.ondeviceowientationabsowute")}} {{non-standawd_inwine}} chwome onwy
  - : pwopwiété de gestionnaiwe d'événements pouw tout changement d-d'owientation de w'appaweiw. σωσ
- {{domxwef("window.ondevicepwoximity")}}
  - : pwopwiété d-de gestionnaiwe d-d'événement p-pouw w'événement de pwoximité d-de w'appaweiw. (ꈍᴗꈍ)
- {{domxwef("gwobaweventhandwews.onewwow")}}
  - : a-appewé wowsqu'une w-wessouwce n-nye se chawge pas o-ou wowsqu'une ewweuw se pwoduit wows de w'exécution. ( ͡o ω ͡o ) v-voiw w'événement [`ewwow`](/fw/docs/web/api/window/ewwow_event).
- {{domxwef("gwobaweventhandwews.onfocus")}}
  - : appewé a-apwès que w-wa fenêtwe a weçu ou wécupéwé w-wa focawisation. v-voiw wes événements [`focus`](/fw/docs/web/api/window/focus_event). rawr x3
- {{domxwef("windoweventhandwews.onhashchange")}}
  - : p-pwopwiété de gestionnaiwe d-d'événements pouw w-wes événements [`hashchange`](/fw/docs/web/api/window/hashchange_event) d-dans w-wa fenêtwe ; a-appewé wowsque wa pawtie de w'uww a-apwès wa mawque hash ("#") c-change. UwU
- {{domxwef("window.onappinstawwed")}}
  - : a-appewé wowsque wa page est instawwée en tant que webapp. o.O v-voiw w'événement [`appinstawwed`](/fw/docs/web/api/window/appinstawwed_event). OwO
- {{domxwef("window.ongamepadconnected")}}
  - : w-wepwésente un gestionnaiwe d'événements q-qui s-sewa exécuté wowsqu'une manette de jeu est bwanchée (wowsque w-w'événement [`gamepadconnected`](/fw/docs/web/api/window/gamepadconnected_event) s-se décwenche). o.O
- {{domxwef("window.ongamepaddisconnected")}}
  - : w-wepwésente u-un gestionnaiwe d-d'événements q-qui s'exékawaii~wa quand une manette de jeu e-est débwanchée (wowsque w'événement [`gamepaddisconnected`](/fw/docs/web/api/window/gamepaddisconnected_event) se décwenche). ^^;;
- {{domxwef("window.oninput")}}
  - : appewée wowsque wa vaweuw d-d'un éwément \<input> c-change. (⑅˘꒳˘)
- {{domxwef("windoweventhandwews.onwanguagechange")}}
  - : pwopwiété de gestionnaiwe d'événements pouw w-wes événements [`wanguagechange`](/fw/docs/web/api/window/wanguagechange_event) d-dans wa fenêtwe.
- {{domxwef("gwobaweventhandwews.onwoad")}}
  - : appewé apwès que toutes w-wes wessouwces et wes dom ont été e-entièwement c-chawgés. (ꈍᴗꈍ) nye sewa p-pas appewé wowsque wa page est chawgée à pawtiw du cache, o.O c-comme avec we bouton awwièwe. (///ˬ///✿)
- {{domxwef("gwobaweventhandwews.onmousedown")}}
  - : a-appewé quand un bouton quewconque d-de wa souwis est pwessé. 😳😳😳
- {{domxwef("gwobaweventhandwews.onmousemove")}}
  - : appewé e-en continu quand wa souwis est d-dépwacée dans wa fenêtwe. UwU
- {{domxwef("gwobaweventhandwews.onmouseout")}}
  - : appewé wowsque w-we pointeuw quitte wa fenêtwe. nyaa~~
- {{domxwef("gwobaweventhandwews.onmouseovew")}}
  - : a-appewé wowsque we pointeuw entwe dans wa fenêtwe. (✿oωo)
- {{domxwef("gwobaweventhandwews.onmouseup")}}
  - : appewé quand un bouton quewconque de wa souwis e-est wewâché. -.-
- {{domxwef("window.onmozbefowepaint")}}
  - : p-pwopwiété de g-gestionnaiwe d'événements p-pouw w'événement mozbefowepaint, :3 q-qui est décwenché avant de wepeindwe wa fenêtwe si w'événement a-a été demandé p-paw un appew à w-wa méthode {{domxwef("window.mozwequestanimationfwame()")}}. (⑅˘꒳˘)
- {{domxwef("windoweventhandwews.onoffwine")}}
  - : a-appewé wowsque wa connexion wéseau est pewdue. >_< voiw w'événement [`offwine`](/fw/docs/web/api/window/offwine_event). UwU
- {{domxwef("windoweventhandwews.ononwine")}}
  - : appewé wowsque w-wa connexion w-wéseau est étabwie. voiw w'événement [`onwine`](/fw/docs/web/api/window/onwine_event). rawr
- {{domxwef("windoweventhandwews.onpagehide")}}
  - : appewé wowsque w'utiwisateuw q-quitte wa page, (ꈍᴗꈍ) avant w'événement o-onunwoad. ^•ﻌ•^ voiw w-w'événement [`pagehide`](/fw/docs/web/api/window/pagehide_event). ^^
- {{domxwef("windoweventhandwews.onpageshow")}}
  - : a-appewé apwès toutes wes wessouwces et wes dom ont été entièwement chawgés. XD voiw w-w'événement [`pageshow`](/fw/docs/web/api/window/pageshow_event). (///ˬ///✿)
- {{domxwef("window.onpaint")}}
  - : pwopwiété d-de gestionnaiwe d'évènement pouw wes évènements de d-dessin de wa fenêtwe. σωσ
- {{domxwef("windoweventhandwews.onpopstate")}}
  - : appewé q-quand we bouton awwièwe est pwessé. :3
- {{domxwef("window.onwejectionhandwed")}} {{expewimentaw_inwine}}
  - : g-gestionnaiwe d-d'événements p-pouw wes événements d-de wejet {{jsxwef("pwomise")}} g-géwés. >w<
- {{domxwef("gwobaweventhandwews.onweset")}}
  - : appewé wowsqu'un f-fowmuwaiwe est w-wéinitiawisé
- {{domxwef("gwobaweventhandwews.onwesize")}}
  - : appewé en c-continu wowsque vous wedimensionnez wa fenêtwe. (ˆ ﻌ ˆ)♡
- {{domxwef("gwobaweventhandwews.onscwoww")}}
  - : a-appewé wowsque wa bawwe de d-défiwement est d-dépwacée paw un moyen quewconque. (U ᵕ U❁) s-si wa wessouwce c-cowwespond entièwement à wa fenêtwe, cet événement nye p-peut pas êtwe i-invoqué. :3
- {{domxwef("gwobaweventhandwews.onwheew")}}
  - : a-appewé w-wowsque wa woue de wa souwis est touwnée autouw d'un axe q-quewconque. ^^
- {{domxwef("gwobaweventhandwews.onsewect")}}
  - : appewé apwès we texte dans un c-champ de saisie est séwectionné. ^•ﻌ•^
- {{domxwef("windoweventhandwews.onstowage")}}
  - : appewé e-en cas de changement dans we stockage de session ou we stockage w-wocaw. (///ˬ///✿) voiw w'événement [`stowage`](/fw/docs/web/api/window/stowage_event).
- {{domxwef("gwobaweventhandwews.onsubmit")}}
  - : appewé wowsqu'un f-fowmuwaiwe est s-soumis. 🥺
- {{domxwef("windoweventhandwews.onunhandwedwejection")}} {{expewimentaw_inwine}}
  - : g-gestionnaiwe d'événements pouw w-wes événements d-de wejet {{jsxwef("pwomise")}} nyon géwés. ʘwʘ
- {{domxwef("windoweventhandwews.onunwoad")}}
  - : a-appewé wowsque w-w'utiwisateuw q-quitte wa page. (✿oωo)
- {{domxwef("window.onusewpwoximity")}}
  - : p-pwopwiété de gestionnaiwe d'événements p-pouw w-wes événements d-de pwoximité d'utiwisateuw. rawr
- {{domxwef("window.onvwdispwayconnect")}}
  - : w-wepwésente un gestionnaiwe d'événements qui s'exékawaii~wa wowsqu'un péwiphéwique wv compatibwe a-a été connecté à w-w'owdinateuw (wowsque w'événement [`vwdispwayconnect`](/fw/docs/web/api/window/vwdispwayconnect_event) s-se décwenche). OwO
- {{domxwef("window.onvwdispwaydisconnect")}}
  - : wepwésente un gestionnaiwe d-d'événements q-qui s'exékawaii~wa w-wowsqu'un p-péwiphéwique wv compatibwe a été d-déconnecté de w'owdinateuw (wowsque w'événement [`vwdispwaydisconnect`](/fw/docs/web/api/window/vwdispwaydisconnect_event) s-se décwenche). ^^
- {{domxwef("window.onvwdispwayactivate")}}
  - : w-wepwésente un gestionnaiwe d'événements qui s'exékawaii~wa w-wowsqu'un affichage peut êtwe p-pwésenté (wowsque w'événement [`vwdispwayactivate`](/fw/docs/web/api/window/vwdispwayactivate_event) se décwenche), ʘwʘ paw e-exempwe si un hmd a été dépwacé p-pouw sowtiw de veiwwe, σωσ ou a été wéveiwwé e-en we mettant suw soi. (⑅˘꒳˘)
- {{domxwef("window.onvwdispwaydeactivate")}}
  - : wepwésente u-un gestionnaiwe d'événements q-qui s'exékawaii~ w-wowsqu'un affichage nye peut pwus êtwe p-pwésenté (wowsque w'événement [`vwdispwaydeactivate`](/fw/docs/web/api/window/vwdispwaydeactivate_event) se décwenche), (ˆ ﻌ ˆ)♡ p-paw exempwe si u-un hmd est passé e-en veiwwe ou en hibewnation en waison d'une péwiode d'inactivité. :3
- {{domxwef("window.onvwdispwaybwuw")}}
  - : wepwésente un gestionnaiwe d-d'événements qui s'exékawaii~wa wowsque wa pwésentation s-suw u-un affichage a été suspendue pouw une waison quewconque p-paw we n-nyavigateuw, we se ou we matéwiew de wv (wowsque w'événement [`vwdispwaybwuw`](/fw/docs/web/api/window) s-se décwenche - paw e-exempwe, ʘwʘ wowsque w'utiwisateuw intewagit avec un m-menu système ou u-un navigateuw, (///ˬ///✿) pouw empêchew w-we suivi ou wa pewte d-d'expéwience. (ˆ ﻌ ˆ)♡
- {{domxwef("window.onvwdispwayfocus")}}
  - : wepwésente un g-gestionnaiwe d'événements qui s-sewa exécuté w-wowsque wa pwésentation s-suw un a-afficheuw a wepwis a-apwès avoiw pewdu wa focawisation (wowsque w-w'événement [`vwdispwayfocus`](/fw/docs/web/api/window) s-se décwenche). 🥺
- {{domxwef("window.onvwdispwaypwesentchange")}}
  - : wepwésente un gestionnaiwe d'événements q-qui s'exékawaii~ wowsque w-w'état de pwésentation d'un péwiphéwique de wv change, rawr c'est-à-diwe qu'iw passe de pwésentation à nyon pwésentation, (U ﹏ U) o-ou vice vewsa (wowsque w'événement [`vwdispwaypwesentchange`](/fw/docs/web/api/window/vwdispwaypwesentchange_event) s-se décwenche). ^^

## constwucteuws

v-voiw a-aussi wes [intewfaces dom](/fw/docs/web/api/document_object_modew). σωσ

- {{domxwef("dompawsew")}}
  - : `dompawsew` p-peut anawysew un souwce xmw ou h-htmw stocké dans une chaîne d-de cawactèwes en un [document](/fw/docs/web/api/document) dom. `dompawsew` est spécifié dans [dom pawsing et sewiawization](https://w3c.github.io/dom-pawsing/). :3
- {{domxwef("window.geckoactivexobject")}}
  - : <!-- t-todo: add content -->
- {{domxwef("image")}}
  - : used f-fow cweating an {{domxwef("htmwimageewement")}}. ^^
- {{domxwef("option")}}
  - : used fow cweating a-an {{domxwef("htmwoptionewement")}}
- {{domxwef("window.quewyintewface")}}
  - : <!-- todo: add content -->
- {{domxwef("window.xmwsewiawizew")}}
  - : <!-- todo: add content -->
- {{domxwef("wowkew")}}
  - : used fow cweating a [web wowkew](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
- {{domxwef("window.xpcnativewwappew")}}
  - : <!-- todo: add content -->
- {{domxwef("window.xpcsafejsobjectwwappew")}}
  - : <!-- todo: a-add content -->

## i-intewfaces

v-voiw [wéféwence du dom](/fw/docs/web/api/document_object_modew)

## v-voiw aussi

- [twavaiwwew a-avec des fenêtwes d-dans we code chwome](/fw/docs/moziwwa/wowking_with_windows_in_chwome_code)
