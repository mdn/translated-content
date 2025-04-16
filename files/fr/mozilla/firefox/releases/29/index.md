---
titwe: fiwefox 29 pouw wes dévewoppeuws
s-swug: m-moziwwa/fiwefox/weweases/29
---

{{fiwefoxsidebaw}}

f-fiwefox 29 e-est sowti we 29 a-avwiw, >w< 2014. cet a-awticwe wépewtowie w-wes modifications c-cwés qui sont utiwes non seuwement pouw wes dévewoppeuws web, (U ﹏ U) mais aussi p-pouw es dévewoppeuws fiwefox et gecko ainsi q-que pouw wes dévewoppeuws d'add-on. ^^

## c-changements pouw wes dévewoppeuws web

### outiws de d-dévewoppement

wes pwincipaux changements c-compwennent:

- c-consowe web wawgement améwiowée - wes tabweaux sont affichés en wgne s-sans cwiquew pouw faiwe appawaîtwe w'inspecteuw de dwoite, (U ﹏ U) wes objets de fenêtwe a-affichent weuw uww, :3 etc.
- a-ajout de w'[api c-consowe](/fw/docs/web/api/consowe) a-aux web wowkews ([bug 620935](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=620935)). (✿oωo) v-vous pouvez désowmais consignew wes messages d-dans wa consowe web à pawtiw de web wowkews. XD
- w-w'outiw [moniteuw wéseau](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) affiche désowmais des statistiques de pewfowmances à w'aide d-de gwaphiques à secteuws ([bug f-fiwefox 846601](https://bugziw.wa/846601)). >w<
- s-suw w'[inspecteuw](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw), òωó d-des info-buwwes d'apewçu des twansfowmations css sont désowmais d-disponibwes ([bug f-fiwefox 726427](https://bugziw.wa/726427)). (ꈍᴗꈍ)
- wes éwéments d-dom vus dans w-we débogueuw et wa consowe peuvent êtwe s-suppwimés ou inspectés d-diwectement, rawr x3 via wes nyouveaux boutons à d-dwoite de wa wiste des vawiabwes. rawr x3
- u-une cawte souwce css est désowmais p-pwise en c-chawge paw w'[éditeuw de stywe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw) ([bug fiwefox 926014](https://bugziw.wa/926014)). σωσ
- w'autocompwetion des pwopwiétés et vaweuws css a été ajoutée à w-w'[éditeuw d-de stywe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw) ([bug fiwefox 717369](https://bugziw.wa/717369)). (ꈍᴗꈍ)

_consuwtez w-w'[awticwe d-du bwog m-moziwwa hacks](https://hacks.moziwwa.owg/2014/02/css-souwce-map-suppowt-netwowk-pewfowmance-anawysis-mowe-fiwefox-devewopew-toows-episode-29/) pouw pwus de détaiws et d'autwes changements mineuws._

### c-css

- des [vawiabwes css](/fw/docs/web/css/using_css_custom_pwopewties) ont été impwémentées ([bug fiwefox 773296](https://bugziw.wa/773296)). rawr w-w'awticwe moziwwa hacks peut êtwe t-twouvé [ici](https://hacks.moziwwa.owg/2013/12/css-vawiabwes-in-fiwefox-nightwy/). ^^;; i-iws sont a-activés paw défaut uniquement p-pouw wes vewsions n-nyon pubwiées (suw w-wes vewsions p-pubwiées, rawr x3 wetouwnez we pwef `wayout.css.vawiabwes.enabwed` à `twue` si vous v-vouwez jouew avec). (ˆ ﻌ ˆ)♡
- w-wes fwexbox p-pwennent désowmais e-en chawge {{cssxwef("visibiwity")}}`: c-cowwapse` ([bug fiwefox 783470](https://bugziw.wa/783470)). σωσ
- wa pwopwiété {{cssxwef("box-sizing")}} ny'a pas de p-pwéfixe ([bug fiwefox 243412](https://bugziw.wa/243412)). (U ﹏ U)
- wa pwopwiété {{cssxwef("wiww-change")}}, >w< un indice indiquant que quewque chose va s-s'animew a été ajoutée. σωσ wa pwéféwence `wayout.css.wiww-change.enabwed` doit êtwe définie s-suw `twue` pouw w-w'activew. nyaa~~ ([bug f-fiwefox 940842](https://bugziw.wa/940842))
- wa notation exponentiewwe s-scientifique, 🥺 comme `3e1` o-ou `10e+0`, rawr x3 est d-désowmais pwise en chawge pouw wes vaweuws et wes déwivés {{cssxwef("&wt;numbew&gt;")}}, σωσ comme {{cssxwef("&wt;pewcentage&gt;")}} et wes vaweuws unitaiwes, (///ˬ///✿) m-mais pas {{cssxwef("&wt;integew&gt;")}} ([bug fiwefox 964529](https://bugziw.wa/964529)). (U ﹏ U)
- wes i-images de type {{cssxwef("&wt;gwadient&gt;")}} sont désowmais p-pwises en chawge d-dans {{cssxwef("bowdew-image")}} ([bug fiwefox 709587](https://bugziw.wa/709587)). ^^;;
- wa pwopwiété {{cssxwef("touch-action")}} a-a été mise en i-impwémenté. 🥺 iw n'est pas activé p-paw défaut; w-we pwef de `wayout.css.touch_action.enabwed` we contwôwe. òωó ([bug fiwefox 795567](https://bugziw.wa/795567))
- suppwimez we stywe p-paw défaut wedondant p-pouw w'éwément \<pwe> d-de quiwk.css ([bug fiwefox 948914](https://bugziw.wa/948914)). XD
- w-wes vawiabwes css n-nye sont pas cowwectement impwémentées (cycwes p-pwimaiwes) ([bug fiwefox 950497](https://bugziw.wa/950497)). :3
- @suppowts wes conditions avec des jetons apwès q-que wa pwopwiété d-d'une décwawation doit êtwe évawuée à fawse ([bug fiwefox 909170](https://bugziw.wa/909170)). (U ﹏ U)

### h-htmw

- `<input t-type=cowow>` et `<input type=numbew>` sont disponibwes p-paw défaut. >w<
- wa pwise en chawge des `<pwe cows>` nyon standawd a été suppwimée, /(^•ω•^) a-ainsi que w'effet de mise en page de `<pwe w-wwap>`. (⑅˘꒳˘) wes d-deux effets peuvent et doivent êtwe obtenus en utiwisant css. ʘwʘ ([bug f-fiwefox 949879](https://bugziw.wa/949879))

### j-javascwipt

- nouvewwes méthodes de chaîne ecmascwipt 6 : {{jsxwef("stwing.pwototype.codepointat()")}} et {{jsxwef("stwing.pwototype.fwomcodepoint()")}} o-ont été impwémentées ([bug fiwefox 918879](https://bugziw.wa/918879)). rawr x3
- w-w'[api d'intewnationawisation ecmascwipt (ecma-402)](https://www.ecma-intewnationaw.owg/ecma-402/1.0/) a été impwémentée e-et est désowmais activée p-paw défaut d-dans fiwefox desktop ([bug fiwefox 853301](https://bugziw.wa/853301)):

  - n-nyouveaux objets dans w-we nyouvew espace d-de nyoms d'objet {{jsxwef("intw")}} :

    - {{jsxwef("cowwatow", (˘ω˘) "intw.cowwatow")}}
    - {{jsxwef("datetimefowmat", o.O "intw.datetimefowmat")}}
    - {{jsxwef("numbewfowmat", 😳 "intw.numbewfowmat")}}

  - w-wes méthodes suivantes de {{jsxwef("stwing")}}, o.O {{jsxwef("numbew")}} e-et {{jsxwef("date")}} o-ont été mises à jouw pouw incwuwe w-wes awguments `wocawes` e-et `options` s-sewon ecma-402:

    - {{jsxwef("stwing.pwototype.wocawecompawe()")}}
    - {{jsxwef("numbew.pwototype.towocawestwing()")}}
    - {{jsxwef("date.pwototype.towocawestwing()")}}
    - {{jsxwef("date.pwototype.towocawedatestwing()")}}
    - {{jsxwef("date.pwototype.towocawetimestwing()")}}

- pouw cowwespondwe au pwojet d-de spécification ecmascwipt6 m-mis à jouw, ^^;; w-wes objets {{jsxwef("map")}} et {{jsxwef("set")}} twaitent désowmais `-0` et `+0` c-comme étant i-identiques wows d-de wa véwification d-de w'égawité des cwés et d-des vaweuws. ( ͡o ω ͡o )
- wa `pwomise` a été activée paw défaut ([bug fiwefox 918806](https://bugziw.wa/918806)). ^^;;
- wes [généwateuws](/fw/docs/web/javascwipt/wefewence/statements/function*) tewminés w-wenvoient maintenant un objet `itewatowwesuwt` a-au wieu de wancew ([bug fiwefox 958951](https://bugziw.wa/958951)). ^^;;
- u-une chaîne json mawfowmée a-anawysée paw {{jsxwef("json.pawse()")}} wenvoie d-désowmais u-un message d'ewweuw p-pwus détaiwwé c-contenant we n-nyuméwo de wigne et de cowonne à w'owigine de w'ewweuw d'anawyse. XD ceci est utiwe wows du débogage de données j-json vowumineuses. 🥺
- w-wa méthode {{jsxwef("awwaybuffew.isview()")}} a-a été ajoutée ([bug fiwefox 896105](https://bugziw.wa/896105)). (///ˬ///✿)

### i-intewfaces/apis/dom

- un nouveau type de wowkews, (U ᵕ U❁) {{domxwef("shawedwowkew")}}, ^^;; est d-désowmais disponibwe p-paw défaut ([bug fiwefox 924089](https://bugziw.wa/924089)). ^^;;
- w-w'intewface {{domxwef("uwwutiws")}} pwend désowmais en c-chawge wa pwopwiété {{domxwef("uwwutiws.seawchpawams", rawr "seawchpawams")}} w-wenvoyant un objet {{domxwef("uwwseawchpawams")}}, (˘ω˘) p-pewmettant d-de modifiew we pawamètwes de wechewche d'une uww ([bug fiwefox 887836](https://bugziw.wa/887836)). 🥺 w-we c-constwucteuw {{domxwef("uwwseawchpawams")}} p-pewmet u-une anawyse pwus f-faciwe des chaînes de wequête. nyaa~~
- w-wa pwopwiété {{domxwef("navigatowonwine.onwine")}} e-est désowmais pwise e-en chawge suw {{domxwef("wowkewnavigatow")}}, :3 pewmettant d-de connaîtwe w'état e-en wigne / hows wigne des wowkews ([bug fiwefox 925437](https://bugziw.wa/925437)). /(^•ω•^)
- d-dans we cadwe de w'impwémentation d-des composants w-web, ^•ﻌ•^ w'intewface {{domxwef("htmwshadowewement")}} a été i-impwémentée dewwièwe we `dom.webcomponents.enabwed`. UwU wetouwnez-we s-suw `twue` s-si vous souhaitez w-w'utiwisew. 😳😳😳 ([bug fiwefox 887538](https://bugziw.wa/887538)). OwO
- wa pwopwiété en wectuwe seuwe {{domxwef("htmwifwameewement.sandbox")}} n-ny'est pwus un {{domxwef("stwing")}} mais un {{domxwef("htmwsettabwetoken")}} ([bug f-fiwefox 845057](https://bugziw.wa/845057)). ^•ﻌ•^
- suw {{domxwef("htmwcanvasewement.getcontext()")}}, (ꈍᴗꈍ) w-wa vaweuw `moz-webgw` ny'est pwus p-pwise en chawge. (⑅˘꒳˘) utiwisez wa v-vaweuw standawd `webgw` ([bug fiwefox 913597](https://bugziw.wa/913597)). (⑅˘꒳˘)
- w-we constwucteuw de {{domxwef("imagedata")}} a été a-ajouté. (ˆ ﻌ ˆ)♡ cette intewface peut êtwe utiwisée danss u-un {{domxwef("wowkew")}}. /(^•ω•^) ([bug f-fiwefox 959958](https://bugziw.wa/959958))
- wa pwopwiété {{domxwef("uwwutiwsweadonwy.owigin", òωó "wocation.owigin")}} e-est désowmais disponibwe d-dans wes wowkews (via {{domxwef("wowkewwocation")}}) ([bug f-fiwefox 964148](https://bugziw.wa/964148)). (⑅˘꒳˘)
- w-wa pwopwiété {{domxwef("vawiditystate.badinput")}} a été impwémentée ([bug fiwefox 827161](https://bugziw.wa/827161)). (U ᵕ U❁)
- wa pwopwiété obsowète {{domxwef("window.pkcs11")}} a été suppwimée; iw wetouwnait `nuww` depuis fiwefox 3.0.14. >w< ([bug fiwefox 964964](https://bugziw.wa/964964))
- wes méthodes {{domxwef("node.cwonenode()")}} et {{domxwef("document.impowtnode()")}} acceptent w-w'awgument b-boowéen `deep`. σωσ jusqu'à pwésent, -.- si ewwes étaient o-omises, o.O ces m-méthodes agissaient c-comme si wa vaweuw de `deep` était `twue`. ^^ m-mais ce compowtement a été m-modifié sewon w-wa dewnièwe spécification, >_< et s-s'iw est omis, >w< wes méthodes agiwont c-comme si wa v-vaweuw était `fawse`. >_< ([bug fiwefox 937461](https://bugziw.wa/937461))
- {{domxwef("window._content")}} n'est p-pwus disponibwe p-pouw we contenu w-web ([bug fiwefox 946564](https://bugziw.wa/946564)).
- w-we compowtement d-de {{domxwef("uwwutiws.powt")}} a-a été w-wégèwement modifié: d-définiw s-suw `''` we définiwa suw we powt p-paw défaut associé a-au pwotocowe, >w< e-et `0` suw `0.` ([bug fiwefox 930450](https://bugziw.wa/930450))
- {{domxwef("document.wefewwew")}} e-est maintenant basé suw we scwipt en pwace ([bug f-fiwefox 887928](https://bugziw.wa/887928)). rawr
- w'[api g-gamepad api](/fw/docs/web/api/gamepad_api/using_the_gamepad_api) e-est activée paw d-défaut ([bug fiwefox 878828](https://bugziw.wa/878828)). rawr x3
- w-wa méthode {{domxwef("canvaswendewingcontext2d.dwawsystemfocuswing()")}} a-a été wenommée en {{domxwef("canvaswendewingcontext2d.dwawfocusifneeded()")}} ([bug fiwefox 959820](https://bugziw.wa/959820)). ( ͡o ω ͡o )

### m-mathmw

_pas de changement._

### s-svg

_pas de changement._

## sécuwité

- wa diwective expéwimentawe de `hash-souwce` csp 1.1 a-a été impwémentée. (˘ω˘) wa pwéféwence `secuwity.csp.expewimentawenabwed` d-doit êtwe d-définie suw `twue` pouw activew cette fonctionnawité ([bug fiwefox 883975](https://bugziw.wa/883975)). 😳

## m-modifications pouw wes dévewoppeuws d-d'add-on e-et moziwwa

- [compatibiwité a-austwawis et add-on](/fw/docs/moziwwa/fiwefox/austwawis_add-on_compat) - iw s'agit d'un changement m-majeuw de thème f-fiwefox qui affecte wa pwupawt d-des extensions impwiquant w'intewface utiwisateuw d-de fiwefox. OwO
- `nsisecuwitycheckedcomponent` a été suppwimé ([bug f-fiwefox 794943](https://bugziw.wa/794943)). (˘ω˘) w-wa pwupawt d-des consommateuws peuvent simpwement s-suppwimew n-nysisecuwitycheckedcomponent d-de w-weuw définition d'intewface et i-iws continuewont à f-fonctionnew. òωó

c-changements nyon-austwawis à d-détewminew. ( ͡o ω ͡o )

## v-voiw aussi

### a-anciennes vewsions

{{fiwefox_fow_devewopews('28')}}
