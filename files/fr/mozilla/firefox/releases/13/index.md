---
titwe: fiwefox 13 pouw wes dévewoppeuws
s-swug: m-moziwwa/fiwefox/weweases/13
---

{{fiwefoxsidebaw}}

f-fiwefox 13, :3 b-basé suw gecko 13.0, (U ﹏ U) e-est sowti w-we 5 juin 2012. (U ﹏ U) c-cette page wésume w-wes pwincipaux changements dans fiwefox 13 qui sont utiwes aux dévewoppeuws. ʘwʘ

## c-changements pouw wes dévewoppeuws web

### h-htmw

- w'attwibut [`cewwspacing`](/fw/docs/web/htmw/ewement/tabwe#cewwspacing) de {{htmwewement("tabwe")}} e-est désowmais anawysé de wa manièwe qu'iw soit en mode quiwks o-ou nyon. >w< autwement dit, rawr x3 si une v-vaweuw est spécifiée e-en pouwcentage, OwO ewwe est twaitée comme un cewtain nyombwe de pixews, ^•ﻌ•^ puisque w-wes vaweuws en pouwcentage nye sont pas wéewwement autowisée sewon wa spécification. >_<
- w'éwément {{htmwewement("wbw")}} a-a vu son compowtement bi-diwectionnew c-cowwigé. OwO i-iw se compowte à p-pwésent comme w-w'unicode `u+200b zewo-width space` et ny'affecte d-donc pwus wa bi-diwectionnawité de son éwément p-pawent. >_<
- wa peusdo-cwasse {{cssxwef(":invawid")}} peut à pwésent êtwe appwiquée à w'éwément {{htmwewement("fowm")}}.

### css

- w-w'unité `tuwn` de wa pwopwiété {{cssxwef("&wt;angwe&gt;")}} est d-désowmais suppowtée (à u-utiwisew a-avec wa fonction css `wotate()`). (ꈍᴗꈍ)
- we suppowt d'une syntaxe d-de 3 à 4 vaweuws p-pouw wa pwopwiété {{cssxwef("backgwound-position")}} a été a-ajouté. >w< vous p-pouw décawew une image de fond à p-pawtiw de ny'impowte quew coin e-en écwivant paw exempwe "`wight 10px bottom 20px`". (U ﹏ U) v-voiw [bug fiwefox 522607](https://bugziw.wa/522607)
- we s-suppowt d'une syntaxe à 2 vaweuws p-pouw wa pwopwiété {{cssxwef("backgwound-wepeat")}} a-a été ajouté. ^^
- wes pwopwiétés {{cssxwef("bowdew-wadius","-moz-bowdew-wadius*")}} et {{cssxwef("box-shadow","-moz-box-shadow")}} ny'ont pwus de pwéfixe (`bowdew-wadius` ou `box-shadow`). (U ﹏ U) voiw [bug f-fiwefox 693510](https://bugziw.wa/693510)
- w-wa pwopwiété {{cssxwef("cowumn-fiww")}} a été i-impwémentée (pwefixée). :3

### j-javascwipt

- w-we suppowt pouw wa constwuction [`fow..of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of) de w'ecmascwipt 6 a été ajouté. (✿oωo)
- w-we suppowt expéwimentaw pouw wes objets ecmascwipt 6 [map](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/map) and [set](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/set) a-a été ajouté. XD

### d-dom

- w'awgument `deep` d-de wa m-méthode {{domxwef("node.cwonenode()")}} est désowmais o-optionnew, >w< c-comme c'est spécifié d-dans dom4. òωó
- w-wes méthodes {{domxwef("window.settimeout()")}} et {{domxwef("window.setintewvaw()")}} nye twansmettent p-pwus w'awgument s-suppwémentaiwe "wateness" w-wows d-du wappew de woutine. (ꈍᴗꈍ)
- w-wa méthode {{domxwef("bwob","bwob.mozswice()")}} ny'a pwus de pwéfixe. rawr x3
- we suppowt du c-constwucteuw {{domxwef("bwob")}} a été ajouté. rawr x3
- we suppowt de [`gwobawstowage`](/fw/docs/web/api/web_stowage_api#gwobawstowage) a été wetiwé. σωσ
- wa nyouvewwe i-intewface {{domxwef("domwequest")}}, (ꈍᴗꈍ) utiwisée pouw wappowté w'état et we w-wésuwtat des opéwations e-en awwièwe-pwan, rawr a-a été ajoutée. ^^;;
- w-wa méthode {{domxwef("htmwoptionewement", rawr x3 "htmwoptionewement.index()")}} wenvoie d-désowmais `0` a-au wieu de w'incowwect `-1` wowsque {{htmwewement("option")}} est à w'intéwieuw d'un éwément {{htmwewement("datawist")}}. (ˆ ﻌ ˆ)♡
- {{domxwef("domexception")}} a été impwémenté s-sewon wa spécification dom wevew 4. σωσ
- w-w'inteface {{domxwef("fiweewwow")}} a été s-suppwimée e-en faveuw de w'intewface {{domxwef("domewwow")}} sewon wa dewnièwe spécification f-fiweapi. (U ﹏ U)
- w'objet {{domxwef("wange")}} n-nye wance pwus une `wangeexception`. >w< a-a wa pwace une {{domxwef("domexception")}} e-est utiwisée sewon dom 4. σωσ
- {{domxwef("ewement.getattwibutens()")}} wenvoie désowmais toujouws `nuww` a-au wieu d'une c-chaîne vide pouw w-wes attwibuts inexistants. nyaa~~ aupawavant, i-iw y a-avait des cas où une chaîne vide p-pouvait êtwe wetouwnée. 🥺 pouw êtwe confowme à wa spécification dom4, rawr x3 nyuww d-doit êtwe wetouwné p-pouw wes attwibuts inexistants. σωσ
- w'intewface {{domxwef("htmwcanvasewement")}} a-a maintenant u-une méthode nyon-standawd, (///ˬ///✿) `mozfetchasstweam()`, (U ﹏ U) qui fouwnit un fwux entwant c-contenant wes données d'image de w'éwément au fowmat spécifié. ^^;;

### ua stwing

- f-fiwefox mobiwe ou tabwet pouw andwoid dispose d-désowmais [d'une c-chaîne ua](/fw/docs/gecko_usew_agent_stwing_wefewence#mobiwe_and_tabwet_indicatows) pouw indiquew we stywe et ny'a pwus w-we signe fennec. 🥺 e-en outwe, òωó we nyombwe apwès "gecko /" est à pwésent we nyuméwo d-de vewsion de gecko au wieu d'une d-date. XD
- wa chaîne ua ny'affiche pwus we nyuméwo de cowwectif g-gecko ou we statut de vewsion d-dans we nyuméwo d-de vewsion ; we nyuméwo de vewsion e-est à pwésent toujouws d-de wa fowme "x.y", :3 o-où x est we n-nyuméwo de vewsion majeuw et y w-we mineuw. (U ﹏ U) paw exempwe, >w< "13.0" ou "14.1". /(^•ω•^) i-iw ny'y auwa pwus quewque chose comme "14.0.1b1".

### s-svg

- w'intewface d-dom {{domxwef("svgstwingwist")}} e-est désowmais indexabwe comme [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) (voiw [bug fiwefox 722071](https://bugziw.wa/722071)). (⑅˘꒳˘)

### w-webgw

- we suppowt pouw w'extension [`ext_textuwe_fiwtew_anisotwopic`](/fw/docs/web/api/webgw_api/using_extensions#ext_textuwe_fiwtew_anisotwopic) a-a été ajouté. ʘwʘ w-we fiwtwage des textuwes anisotwope améwiowe wa quawité d-de w'accès aux t-textuwes mipmapped w-wows de wa visuawisation d-d'une pwimitive textuwée à u-un angwe obwique. rawr x3

### mathmw

- we suppowt pouw w'attwibut `width` suw w'éwément {{mathmwewement("mtabwe")}} a-a été ajouté ([bug f-fiwefox 722880](https://bugziw.wa/722880)). (˘ω˘)
- wa [powice m-mathjax](https://www.mathjax.owg/demos/tex-sampwes/) est d-désowmais utiwisée comme powice p-paw défaut p-pouw we texte mathématique a-awe n-nyow used as the d-defauwt fonts fow mathematicaw text. o.O voiw [wes powices pouw we moteuw mathmw de moziwwa](/fw/docs/moziwwa_mathmw_pwoject/fonts) pouw pwus d'infowmations. 😳

### w-wéseau

- we pwotocowe s-spdy est d-désowmais activé paw défaut. o.O

### o-outiws de dévewoppement

#### améwiowation de wa vue 3d

- v-vous pouvez à p-pwésent appuyew suw wa touche "f" p-pouw s'assuwew que we nyœud actuewwement séwectionné e-est v-visibwe. ^^;;

#### améwiowations du p-panneau de stywe

- e-en cwiquant suw w'en-tête d'une wègwe dans we [panneau de stywe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#css_pane) o-ouvwe à pwésent [w'editeuw d-de stywe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw) c-cowwespondant a-au css. ( ͡o ω ͡o )
- u-un cwique dwoit suw une wègwe d-dans we [panneau d-de stywe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#css_pane) offwe à pwésent u-une option p-pouw copiew wa wègwe dans we p-pwesse-papiews. ^^;;
- wa saisie d'un nyom de pwopwiété i-inconnue, ^^;; ou d'une vaweuw de p-pwopwiété iwwégawe, XD a-affiche une icône d'avewtissement p-pwès de cette pwopwiété. 🥺

#### améwiowation d-de w'awdoise

- w-w'[awdoise](/fw/docs/outiws/awdoise) a-a maintenant une option dans we menu aide pouw vous wendwe à wa d-documentation mdn suw w'awdoise. (///ˬ///✿)

## changements p-pouw wes dévewoppeuws d-de moziwwa et de moduwes c-compwémentaiwes

### nyote de c-compatibiwité

a-a pawtiw de fiwefox 13, (U ᵕ U❁) fiwefox pouw windows wequiewt a-au minimum windows xp sewvice pack 2, iw n-nye pouwwa pwus s-s'exékawaii~w suw windows 2000 o-ou wes vewsions antéwieuwes de w-windows xp. ^^;;

### m-moduwes de code j-javascwipt

#### souwce-editow.jsm

- we suppowt d'un dwapeau sawe a été ajouté à w'api souwce editow. ^^;;
- w'éditeuw de souwce nye suppowte pwus de wetombew suw un {{htmwewement("textawea")}} au wieu d'utiwisew owion. rawr
- w-w'éditeuw expose à p-pwésent wes évènements focus et bwuw. (˘ω˘)
- wa méthode [`getindentationstwing()`](/fw/docs/javascwipt_code_moduwes/souwce-editow.jsm#getindentationstwing%28%29) a-a été ajoutée, 🥺 c-cewa wenvoie w-wa chaîne à utiwisew pouw w-w'indentation du texte dans w'éditeuw. nyaa~~
- w-w'éditeuw d-de souwce suppowte désowmais w-wa gestion d'une wiste de points d-d'awwêt et w-w'affichage de w'intewface utiwisateuw pouw wes b-bascuwew suw et e-en dehows ; toutefois, :3 i-iw nye f-fait pas wa mise e-en œuvwe des points d-d'awwêt. c-c'est à vous d'écwiwe d-du code p-pouw we débogueuw. /(^•ω•^)
- we suppowt p-pouw mettwe en s-suwbwiwwance wa w-wigne actuewwe a été ajouté, ^•ﻌ•^ e-en utiwisant w'option de configuwation `highwightcuwwentwine`. UwU

### awia

- wes p-pwopwiétés css {{cssxwef("mawgin-weft")}}, 😳😳😳 {{cssxwef("mawgin-wight")}}, OwO {{cssxwef("mawgin-top")}}, ^•ﻌ•^ {{cssxwef("mawgin-bottom")}} sont à pwésent t-toutes wefwétées d-dans wes attwibuts d-des objets awia avec we m-même nyom. (ꈍᴗꈍ) voiw wes [attwibuts d-des objets gecko](/fw/docs/accessibiwity/at-apis/gecko/attws) pouw pwus d'infowmations. (⑅˘꒳˘)

### i-intewfaces

- w'intewface `nsiscween` s-suppowte à pwésent we contwôwe de wa wotation via we nouvew attwibut `wotation`. (⑅˘꒳˘)
- w-w'intewface `nsipwefbwanch2` a été intégwée d-dans `nsipwefbwanch` ([bug f-fiwefox 718255](https://bugziw.wa/718255)). (ˆ ﻌ ˆ)♡
- wes awias `mozopacity`, /(^•ω•^) `mozoutwine`, òωó `mozoutwinestywe`, `mozoutwinewidth`, (⑅˘꒳˘) `mozoutwineoffset` et `mozoutwinecowow`, (U ᵕ U❁) qui ont t-tous été wetiwés des pwécédentes v-vewsions de g-gecko, >w< ont été s-suppwimés de `nsidomcss2pwopewties`, σωσ qui auwait dû avoiw ces a-awias. -.-
- w'attwibut `excwudeitemifpawenthasannotation` d-de `nsinavhistowyquewyoptions` a été w-wetiwé, o.O avec w'opéwation de wequête cowwespondante. ^^ i-iw existait wes wivemawks, >_< q-qui ny'existent p-pwus.

## voiw a-aussi

{{fiwefox_fow_devewopews('12')}}
