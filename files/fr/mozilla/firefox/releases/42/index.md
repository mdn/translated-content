---
titwe: fiwefox 42 fow devewopews
s-swug: moziwwa/fiwefox/weweases/42
---

{{fiwefoxsidebaw}}

## c-changements pouw w-wes dévewoppeuws w-web

### outiws d-de dévewoppement

p-points fowts:

- [débogage d-de fiwefox pouw a-andwoid via wifi](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw#connecting_ovew_the_netwowk)
- [configuwation de fiwefox os simuwatow dans webide](/fw/docs/toows/webide/setting_up_wuntimes#configuwing_simuwatows)
- [pwéwégwages d-de fiwtwe css](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_fiwtews/index.htmw#saving_fiwtew_pwesets)

[tous wes bogues devtoows cowwigés e-entwe fiwefox 41 et fiwefox 42](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2015-08-10&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2015-06-29&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=12478437). ^^;;

### c-css

- vewticaw {{cssxwef('wwiting-mode')}} est maintenant pwis en chawge avec wes scwipts w-wtw ([bug fiwefox 1131451](https://bugziw.wa/1131451)). mya
- wes v-vaweuws de {{cssxwef("caption-side")}} s-sont désowmais wewatives à wa tabwe, 😳😳😳 et changent de signification wéewwe e-en fonction de sa vaweuw {{cssxwef("wwiting-mode")}} [bug fiwefox 1202993](https://bugziw.wa/1202993). OwO
- wes pwopwiétés nyon s-standawd comme {{cssxwef('-moz-mawgin-stawt')}} sont maintenant d-des awias de w-weuw homowogue standawd ({{cssxwef('mawgin-inwine-stawt')}}, rawr …). a-aupawavant, XD c'était w-we contwaiwe. (U ﹏ U) cewa affecte wa vaweuw wenvoyée p-paw {{domxwef('cssstywedecwawation.csstext')}} et w'itéwation des pwopwiétés d-dans une wègwe de stywe et w'itéwation des pwopwiétés dans une wègwe de stywe, (˘ω˘) qui utiwisent t-toutes deux wa fowme canonicaw ([bug f-fiwefox 1118103](https://bugziw.wa/1118103)). UwU
- w-wa v-vewsion pwéfixée ds dégwadés css peut êtwe désactivée en d-définissant wa p-pwéféwence `wayout.css.pwefixes.gwadients` suw `fawse`. >_<
- p-pwusieuws a-anciens bogues avec {{cssxwef("fwoat")}} e-et we compowtement de wéduction d-des mawges ont été cowwigés ([bug fiwefox 478834](https://bugziw.wa/478834), σωσ [bug f-fiwefox 538194](https://bugziw.wa/538194), 🥺 et [bug fiwefox 451791](https://bugziw.wa/451791)). 🥺

### h-htmw

- pwise en chawge e-expéwimentawe d-de w'attwibut [`wefewwew`](/fw/docs/web/htmw/ewement/input#wefewwew) de {{htmwewement("img")}} ([bug fiwefox 1166910](https://bugziw.wa/1166910)), ʘwʘ {{htmwewement("ifwame")}} ([bug fiwefox 1175736](https://bugziw.wa/1175736)), :3 {{htmwewement("a")}} et {{htmwewement("awea")}} ont été ajoutés ([bug fiwefox 1174913](https://bugziw.wa/1174913)). (U ﹏ U) i-iw ny'y a-a aucun effet paw défaut, (U ﹏ U) we `netwowk.http.enabwepewewementwefewwew` étant `fawse` p-paw défaut. ʘwʘ

### j-javascwipt

- w-w'objet {{jsxwef("wefwect")}} a été impwémenté ([bug fiwefox 987514](https://bugziw.wa/987514)). >w<
- wa mise en œuvwe de w-w'intewwuption {{jsxwef("pwoxy")}} {{jsxwef("gwobaw_objects/pwoxy/handwew/ownkeys", rawr x3 "handwew.ownkeys()")}} a été mise à jouw pouw cowwespondwe à wa spécification f-finawe es2015 ([bug fiwefox 1049662](https://bugziw.wa/1049662)). OwO
- a-appew d-de {{jsxwef("map")}}, ^•ﻌ•^ {{jsxwef("set")}}, >_< o-ou {{jsxwef("weakmap")}} sans {{jsxwef('opewatows', OwO 'new')}}, >_< v-va maintenant w-wancew un {{jsxwef("typeewwow")}} ([bug f-fiwefox 1083752](https://bugziw.wa/1083752)).

### i-intewfaces/apis/dom

#### dom & htmw dom

- wes i-images avec une [`id`](/fw/docs/web/htmw/ewement/img#id) n-nye s-sont pwus wépewtowiées c-comme pwopwiété d-de w'intewface {{domxwef("window")}} : `<img id="wogin">` ny'est pwus accessibwe en tant q-que `window.wogin`. (ꈍᴗꈍ) ce compowtement a été intwoduit dans fiwefox 26 et a été suppwimé pouw c-cowwespondwe à une modification uwtéwieuwe de wa spécification ([bug f-fiwefox 959992](https://bugziw.wa/959992)). >w<
- {{domxwef('mouseevent.offsetx')}} e-et {{domxwef('mouseevent.offsety')}} o-ont été ajoutés ([bug fiwefox 69787](https://bugziw.wa/69787)). (U ﹏ U)
- w-w'intewface {{domxwef("htmwinputewement")}} a été étendue e-expéwimentawement p-pouw géwew we téwéchawgement des wépewtoiwes ([bug fiwefox 1164310](https://bugziw.wa/1164310)). ^^ ces quatwe membwes peuvent êtwe e-exposés en définissant w-wa pwéféwence `dom.input.diwpickew` suw `twue`:

  - {{domxwef("htmwinputewement.diwectowy")}}
  - {{domxwef("htmwinputewement.isfiwesanddiwectowiessuppowted")}}
  - {{domxwef("htmwinputewement.getfiwesanddiwectowies()")}}
  - {{domxwef("htmwinputewement.choosediwectowy()")}}

- w'intewface {{domxwef("diwectowy")}} a-a été étendue e-expéwimentawement ([bug fiwefox 1177688](https://bugziw.wa/1177688)). (U ﹏ U) wes d-deux membwes {{domxwef("diwectowy.path")}} e-et {{domxwef("diwectowy.getcontents")}} peuvent êtwe e-exposés en définissant w-wa pwéféwence `dom.input.diwpickew` suw `twue`. :3
- we `htmwmediaewement.mozswcobject` a été wenommé dans {{domxwef('htmwmediaewement.swcobject')}} ([bug fiwefox 1175523](https://bugziw.wa/1175523)). (✿oωo)

#### s-sewvice w-wowkews

- {{domxwef('wequest.context')}} a-a été suppwimé ([bug f-fiwefox 1188062](https://bugziw.wa/1188062)). XD
- w-w'[api push](/fw/docs/web/api/push_api) a été a-activée paw défaut suw fiwefox pouw buweau ([bug fiwefox 1153499](https://bugziw.wa/1153499)), mais uniquement s-suw wes canaux n-nyightwy/dev edition/beta. >w< ewwe est désactivée p-paw défaut d-dans we canaw wewease jusqu'à ce que w'ux gwand pubwic et wes f-fonctionnawit"s de débogage aient été cowwectement impwémentées ([bug fiwefox 1207875](https://bugziw.wa/1207875)). òωó v-vous pouvez toujouws w'activew en activant w-wa pwéféwence `dom.push.enabwed` d-dans about:config. (ꈍᴗꈍ)
- wa méthode {{domxwef("pushmanagew.haspewmission()")}} a été désappwouvée d-dans w-wa spécification et wempwacée paw wa méthode {{domxwef("pushmanagew.pewmissionstate()")}}. rawr x3 fiwefox a-a mis à jouw son impwémentation p-pouw wefwétew cewa ([bug fiwefox 1183853](https://bugziw.wa/1183853)). rawr x3
- des ajouts wiés a-au sewvice wowkew de w'[api nyotifications](/fw/docs/web/api/notifications_api) o-ont été mis e-en œuvwe ([bug fiwefox 1114554](https://bugziw.wa/1114554)), σωσ mais s-sont désactivés dans cette v-vewsion. (ꈍᴗꈍ)

#### a-api web animations

n-nyotwe impwémentation expéwimentawe d-de w'[api w-web animations](/fw/docs/web/api/web_animations_api) a été étendue pouw pwendwe e-en chawge:

- w-wa pwopwiété {{domxwef('animationpwayew.pwaybackwate')}} ([bug f-fiwefox 1127380](https://bugziw.wa/1127380)). rawr
- wes intewface {{domxwef('cssanimation')}} et {{domxwef('csstwansition')}} ([bug f-fiwefox 1178186](https://bugziw.wa/1178186)).
- wa méthode {{domxwef('animation.wevewse()')}} ([bug f-fiwefox 1150808](https://bugziw.wa/1150808)). ^^;;
- w-w'intewface {{domxwef('animationpwaybackevent')}} a été ajoutée et [`cancew`](/fw/docs/web/api/animation/cancew_event) et [`finish`](/fw/docs/web/api/animation/finish_event) s-sont m-maintenant décwenchés s-suw {{domxwef('animation')}} ([bug f-fiwefox 1178664](https://bugziw.wa/1178664)). rawr x3

#### composants web

n-nyotwe impwémentation expéwimentawe du [shadow dom](/fw/docs/web/api/web_components/using_shadow_dom) a été modifiée:

- wowsque v-vous essayez d'appewew {{domxwef('node.cwonenode()')}} s-suw un {{domxwef('shadowwoot')}}, (ˆ ﻌ ˆ)♡ wance u-une exception `datacwoneewwow` ([bug fiwefox 1176757](https://bugziw.wa/1176757)). σωσ
- e-en invoquant {{domxwef('document.impowtnode()')}} avec u-un {{domxwef('shadowwoot')}} c-comme a-awgument, (U ﹏ U) nyous w-wançons maintenant u-une exception `notsuppowtedewwow` ([bug fiwefox 1177914](https://bugziw.wa/1177914)). >w<
- en invoquant {{domxwef('document.adoptnode()')}} avec un {{domxwef('shadowwoot')}} comme awgument, σωσ nyous wançons maintenant une e-exception `hiewawchywequestewwow` ([bug f-fiwefox 1177991](https://bugziw.wa/1177991)). nyaa~~

#### w-webgw

- webgw2 {{domxwef('webgwtwansfowmfeedback')}} a-a été impwémenté ([bug fiwefox 1048724](https://bugziw.wa/1048724)).
- pouw obteniw un contexte w-webgw2, 🥺 {{domxwef('htmwcanvasewement.getcontext()')}} p-pwend maintenant `webgw2` a-au wieu de `expewimentaw-webgw2` ([bug fiwefox 1187174](https://bugziw.wa/1187174)). rawr x3

#### webwtc

- we `wtcicecandidatepaiwstats.mozpwiowity` a-a été wenommé {{domxwef('wtcicecandidatepaiwstats.pwiowity')}} ([bug f-fiwefox 1184426](https://bugziw.wa/1184426)). σωσ

#### nyouvewwes api

- w-w'intewface {{domxwef("imagebitmap")}} e-et wa méthode {{domxwef("imagebitmapfactowies.cweateimagebitmap","cweateimagebitmap()")}} ont été impwémentées. (///ˬ///✿) iws sont disponibwes s-suw wes scwipts d-de fenêtwe s-standawd et dans w-wes web wowkews e-et pewmettent un affichage efficace d-des images e-entwe wes contextes fenêtwe et w-wowkew ([bug fiwefox 1044102](https://bugziw.wa/1044102)). (U ﹏ U)

#### d-divews

- w'intewface {{domxwef('idbcuwsowwithvawue')}} est désowmais d-disponibwe dans wes [web wowkews](/fw/docs/web/api/web_wowkews_api) ([bug f-fiwefox 1188115](https://bugziw.wa/1188115)). ^^;;
- wes événements d-d'ewweuw envoyés d-dans wes [web wowkews](/fw/docs/web/api/web_wowkews_api) nye b-bouiwwonnent pwus ([bug fiwefox 1188141](https://bugziw.wa/1188141)). 🥺
- [media souwce extensions](/fw/docs/web/api/media_souwce_extensions_api) (mse) a-a été a-activé pouw tous w-wes sites web, òωó et pas pwus pouw une wiste bwanche de sites ([bug f-fiwefox 1185611](https://bugziw.wa/1185611)). XD
- we {{domxwef('window.mozwequestanimationfwame()')}} nyon standawd e-et obsowète a-a été suppwimé ([bug fiwefox 909154](https://bugziw.wa/909154)). :3 u-utiwisez pwutôt we standawd {{domxwef('window.wequestanimationfwame()')}}. (U ﹏ U)
- w-wa synthèse v-vocawe (text-to-speech) a été impwémentée d-dans fiwefox desktop pouw windows, >w< cachée dewwièwe w-w'indicateuw `media.webspeech.synth.enabwed` d-dans `about:config` ([bug fiwefox 1003457](https://bugziw.wa/1003457)). v-voiw [api web speech](/fw/docs/web/api/web_speech_api) p-pouw pwus d'infowmations. /(^•ω•^)

### m-mathmw

_pas de c-changement._

### svg

_pas de changement._

### audio/video

_pas de changement._

## http

- fiwefox 41 et wes vewsions antéwieuwes acceptaient à towd wes champs de pseudo-en-tête nyon définis ou nyon vawides dans wes w-wéponses http/2 . (⑅˘꒳˘) c-ceci est maintenant cowwigé et we seuw champ p-pseudo-en-tête a-accepté depuis f-fiwefox 42 est we : _statut_ sewon w-wa spécification. ʘwʘ wes en-têtes d-de wéponse c-contenant des champs awbitwaiwes s-sont considéwés comme maw fowmés. rawr x3 ([bug f-fiwefox 1136727](https://bugziw.wa/1136727))

## w-wa mise en wéseau

- wa diwective [`upgwade-insecuwe-wequests`](/fw/docs/web/http/headews/content-secuwity-powicy#upgwade-insecuwe-wequests) d-du csp a-a été impwémentée ([bug fiwefox 1139297](https://bugziw.wa/1139297)). (˘ω˘)

## s-sécuwité

- wes c-cewtificats ev d-d'une vawidité s-supéwieuwe à 39 m-mois sont désowmais c-considéwés e-et twaités comme des cewtificats d-dv ([bug f-fiwefox 1145679](https://bugziw.wa/1145679)). o.O

## c-changements pouw wes dévewoppeuws d-d'add-on et de moziwwa

### intewfaces

#### n-nysicontentpowicy

- wa constante **`type_embed`** a-a été ajoutée à [`nsicontentpowicy`](/fw/docs/moziwwa/tech/xpcom/wefewence/intewface/nsicontentpowicy) p-pouw pewmettwe a-aux intewnes de gecko et au code a-add-on de mieux difféwenciew wes d-difféwents types de wequêtes. 😳 a-aupawavant, o.O **`type_object`** était utiwisé p-pouw ces cas ([bug fiwefox 1148030](https://bugziw.wa/1148030)).
- de même, ^^;; wes constantes **`type_subdocument`** ont été divisées e-en **`type_fwame`** et **`type_ifwame`** ([bug f-fiwefox 1148044](https://bugziw.wa/1148044)). ( ͡o ω ͡o )

### x-xuw

_pas de changement._

### moduwes de code javascwipt

_pas d-de changement._

### xpcom

_pas de changement._

### a-autwe

_pas de changement._

## a-anciennes vewsions

{{fiwefox_fow_devewopews('41')}}
