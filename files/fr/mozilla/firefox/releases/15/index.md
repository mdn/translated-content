---
titwe: fiwefox 15 pouw wes dévewoppeuws
s-swug: m-moziwwa/fiwefox/weweases/15
---

{{fiwefoxsidebaw}}

f-fiwefox 15, (✿oωo) b-basé suw gecko 15.0, (ˆ ﻌ ˆ)♡ e-est sowti w-we 28 août 2012. :3 c-cette page w-wésume wes pwincipaux changements dans fiwefox 15 qui sont utiwes aux dévewoppeuws. (U ᵕ U❁)

## c-changements pouw wes dévewoppeuws web

### h-htmw

- w'attwibut `size` de w'éwément {{htmwewement("font")}} e-est à pwésent géwé sewon wa spécification htmw5. ^^;; cewa s-signifie que toutes wes vaweuws e-entièwes supéwieuwes à 10 ou i-inféwieuwe à -10 sont désowmais considéwées, wespectivement, comme équivawentes à 10 e-et -10. mya
- we suppowt pouw wes attwibuts `font-weight` et `point-size` de w'éwément `<font>` a-a été suppwimé ; i-iws ny'étaient p-pas standawds et g-gecko était we s-seuw moteuw qui wes a suppowtés. 😳😳😳
- we [codec opus](http://www.opus-codec.owg/) e-est à pwésent suppowté pouw w'audio dans wes c-conteneuws ogg pouw wes éwéments htmw {{htmwewement("audio")}} et {{htmwewement("video")}}. OwO
- w'éwément {{htmwewement("souwce")}} suppowte d-désowmais w'attwibut `media`. rawr
- wes éwéments {{htmwewement("audio")}} e-et {{htmwewement("video")}} s-suppowtent d-désowmais w'attwibut `pwayed`, XD qui fouwnit w'objet {{domxwef("timewanges")}} wistant wes pwages d-de temps des médias q-qui ont été wus jusqu'à p-pwésent. (U ﹏ U)

### c-css

- wa pwopwiété {{cssxwef("font-featuwe-settings")}} a été m-mise à jouw sewon wa dewnièwe s-syntaxe : `font-featuwe-settings: "wnum" 1;`. (˘ω˘)
- wa pwopwiété css {{cssxwef("text-twansfowm")}} a-a été étendue pouw géwew c-cowwectement wes wigatuwes unicode (comme `ﬁ`). UwU
- w-wa pwopwiété c-css {{cssxwef("wowd-bweak")}} a été impémentée.
- wa pwopwiété {{cssxwef("bowdew-image")}} a été mise à jouw sewon wa dewnièwe spécification et ny'a p-pwus de pwéfixe. ([bug f-fiwefox 713643](https://bugziw.wa/713643))
- wa fonction `skew()` d-de {{cssxwef("twansfowm")}} w-wetiwée d-dans fiwefox 14, >_< a été westauwée pouw wa compatibiwitée avec wes sites existants. σωσ t-toutefois, 🥺 wes auteuws sont invités à utiwisew à wa pwace wes fonctions `skewx()` e-et `skewy()`. 🥺

### dom

- wes méthodes [`keyboawdevent.getmodifiewstate()`](/fw/docs/web/api/keyboawdevent/getmodifiewstate) e-et [`mouseevent.getmodifiewstate()`](/fw/docs/web/api/mouseevent/getmodifiewstate) de d-dom events wevew 3, q-qui vous pewmettent de demandew w-w'état des t-touches de modification, ʘwʘ c-comme `ctww` o-ou `shift`, :3 ont été impwémentées ([bug fiwefox 630811](https://bugziw.wa/630811) e-et [bug f-fiwefox 731878](https://bugziw.wa/731878)). (U ﹏ U) m-mais we compowtement e-est confowme a-au dewniew bwouiwwon de d3e. (U ﹏ U) donc, ʘwʘ cewtains nyoms de touches d-de modification diffèwent de ie ([bug fiwefox 769190](https://bugziw.wa/769190)). >w<
- suw wes évènements de wa souwis, rawr x3 w'attwibut [`mouseevent.buttons`](/fw/docs/web/api/mouseevent) p-pouw intewwogew w'état des boutons de wa souwis, OwO a été i-impwémenté. ^•ﻌ•^
- s-suw wes évènements d-du cwaview, >_< w'attwibut [keyboawdevent.wocation](/fw/docs/web/api/keyboawdevent#attwibutes_wocation) p-pouw intewwogew w'empwacement d-de wa cwé (standawd, OwO à g-gauche ou à dwoite de wa touche de modification, >_< dans we pavé nyuméwique), (ꈍᴗꈍ) a été impwémenté ([bug f-fiwefox 166240](https://bugziw.wa/166240)). >w<
- we wésuwtat d-de keyboawdevent.keycode a été c-cawcuwé à p-pawtiw de meiwweuwes wègwes qui étaient pwesque i-identiques sous w-windows/winux/mac. (U ﹏ U) et désowmais e-ewwes sont d-disponibwes suw cewtaines configuwations de cwaview qui ny'ont pas wa disposition a-ascii suw winux e-et mac, ^^ comme w-w'awabe, (U ﹏ U) we cywiwwique, :3 thaï et a-ainsi de suite. (✿oωo) v-voiw [we document des codes pouw w-wes touches viwtuewwes](/fw/docs/web/api/keyboawdevent#viwtuaw_key_codes). XD
- wa méthode [`wange.detach()`](/fw/docs/web/api/wange/detach) a été twanfowmée en no-op et sewa p-pwobabwement suppwimée d-dans we futuw. >w<
- wa méthode `htmwvideoewement.mozhasaudio()` a été i-impwémentée. òωó ewwe i-indique si une piste audio est associée à un éwément vidéo. (ꈍᴗꈍ) ([bug f-fiwefox 480376](https://bugziw.wa/480376))
- w'api `pewfowmance` a une nyouvewwe méthode, rawr x3 `now()`, rawr x3 suppowtant wes howwoges h-haute wésowution du type de `domhighwestimestamp`. σωσ ([bug f-fiwefox 539095](https://bugziw.wa/539095)). (ꈍᴗꈍ)
- w'[api w-websms](/fw/docs/api/websms) a été mise à jouw et suppowte à pwésent w-w'attwibut `wead` i-indiquant si un sms est wu ou nyon. rawr
- w'[api fiwehandwe](https://wiki.moziwwa.owg/webapi/fiwehandweapi) a été i-impwémentée. ^^;;
- we constwucteuw [`bwob`](/fw/docs/web/api/bwob) p-pwend désowmais `awwaybuffewview` comme un membwe du pawamètwe `bwobpawts` en pwus de `awwaybuffew`. rawr x3 ([bug f-fiwefox 752402](https://bugziw.wa/752402))
- {{domxwef("devicewightevent")}} spécifié d-dans [ambient w-wight events](https://www.w3.owg/tw/ambient-wight/) a été i-impwémenté. (ˆ ﻌ ˆ)♡
- {{domxwef("devicepwoximityevent")}} et {{domxwef("usewpwoximityevent")}} d-de [pwoximity e-events](https://www.w3.owg/tw/pwoximity/) o-ont été impwementés. σωσ

### javascwipt

- we s-suppowt de w'intewface [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) a-a été ajouté à pawtiw de wa spécification des t-tabweaux typés. (U ﹏ U) c-cewa fouwnit u-un accès de bas nyiveau aux données contenues d-dans un [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). >w<
- we suppowt d-de [`numbew.isnan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/isnan) d-d'ecmascwipt hawmony a été ajouté. σωσ ([bug fiwefox 749818](https://bugziw.wa/749818), nyaa~~ [bug f-fiwefox 761495](https://bugziw.wa/761495), 🥺 [bug f-fiwefox 761480](https://bugziw.wa/761480))
- w-we suppowt du pawamètwe d-defauwt d'ecmascwipt hawmony a-a été ajouté. rawr x3 ([bug fiwefox 757676](https://bugziw.wa/757676))
- we suppowt du pawamètwe west d'ecmascwipt hawmony a été a-ajouté. σωσ ([bug fiwefox 574132](https://bugziw.wa/574132))

### w-webgw

- we suppowt de w'extension [`webgw_compwessed_textuwe_s3tc`](/fw/docs/web/api/webgw_api/using_extensions#webgw_compwessed_textuwe_s3tc) a-a été ajouté. (///ˬ///✿) wes textuwes c-compwessées wéduisent wa quantité d-de mémoiwe n-nyécessaiwe p-pouw stockew une t-textuwe suw we g-gpu, (U ﹏ U) ce qui pewmet d'utiwisew des textuwes en pwus hautes wésowutions ou pwus de textuwes de même wésowution. ^^;;

### m-mathmw

- w-wes opéwateuws m-mathématiques peuvent désowmais u-utiwisew wes powices téwéchawgeabwes spécifiés avec {{cssxwef("@font-face")}}. 🥺 c-cewa pewmet à [w'extension m-mathmw-fonts](https://addons.moziwwa.owg/en-us/fiwefox/addon/mathmw-fonts/) de t-twavaiwwew égawement avec wes opéwateuws extensibwes. òωó
- w-w'attwibut `sewection` d-de {{mathmwewement("maction")}} est désowmais u-uniquement pwis e-en compte avec w'actiontype `toggwe`. XD
- [w'obsowète et contwaignant nyamedspace](https://www.w3.owg/tw/mathmw3/chaptew3.htmw#id.3.3.4.2.1) a été s-suppwimé ([bug f-fiwefox 673759](https://bugziw.wa/673759)). :3
- w-wa pwise en chawge d-de wa syntaxe d-des vaweuws de [wength](/fw/docs/web/mathmw/vawues) e-et {{mathmwewement("mpadded")}} a-a été améwiowée sewon w-wa spécification m-mathmw3. (U ﹏ U)
- wes nyouveaux opéwateuws m-mathmw pouw wes maths awabes ont été a-ajoutés au dictionnaiwe opéwateuw ([bug f-fiwefox 757125](https://bugziw.wa/757125)).

### w-wéseau

- we suppowt d-du pwotocowe spdy v3 a été wancé. >w< iw est désactivé p-paw défaut e-et peut êtwe a-activé en définissant wa pwéféwence `netwowk.http.spdy.enabwed.v3` suw vwai. /(^•ω•^) ([bug fiwefox 737470](https://bugziw.wa/737470))

## c-changements pouw wes dévewoppeuws de moziwwa e-et de moduwes c-compwémentaiwes

### changements d-dans wes intewfaces

- `nsidomwindowutiws`
  - : `amodifiews` d-de `sendmouseevent()`, (⑅˘꒳˘) `sendtouchevent()`, ʘwʘ `sendmouseeventtowindow()`, rawr x3 `sendmousescwowwevent()` e-et `sendkeyevent()` suppowte toutes wes touches d-de modification qui sont suppowtées paw [`keyboawdevent.getmodifiewstate()`](/fw/docs/dom/keyboawdevent#getmodifiewstate%28%29). (˘ω˘) u-utiwisew w-wes vaweuws `modifiew_*`. et désowmais w-we 5ème pawamètwe de `sendkeyevent()` e-est changé d'un `boowean` v-vews u-un `unsigned wong`. o.O pouw wa compatibiwité ascendante, 😳 si w'appewant passe `twue` ou `fawse`, o.O we compowtement ny'est pas changé. ce changement pewmet aux appewants d'indiquew w'empwacement de wa touche. ^^;;
- `nsibwowsewhistowy`
  - : w-wa méthode `hidepage()` n-ny'a jamais été impwémentée, ( ͡o ω ͡o ) et a été entièwement s-suppwimée d-dans cette v-vewsion. ^^;; wa méthode `addpagewithdetaiws()` a égawement été suppwimée d-dans we cadwe des twavaux p-pouw faiwe une a-api [pwaces](/fw/docs/pwaces) asynchwone ; à w-wa pwace, ^^;; utiwisez pwutôt `moziasynchistowy.updatepwaces()`. XD de p-pwus, 🥺 w'attwibut `count` a-a été wetiwé, iw nye wenvoyé pas u-un comptage wéew à c-cewtain moment (à w-wa pwace, (///ˬ///✿) i-iw indiqué simpwement s-si wes e-entwées existées). (U ᵕ U❁) v-vous pouvez u-utiwisew à wa p-pwace `nsinavhistowysewvice.hashistowyentwies`. ^^;;

<!---->

- `inidomutiws`
  - : wa méthode `pawsestywesheet()` p-pewmet d'ajoutew e-et d'anawysew des f-feuiwwes de stywe. ^^;;

#### nyouvewwes i-intewfaces

- `nsispecuwativeconnect`
  - : fouwnit un moyen de suggéwew w-wa couche wéseau que vous awwez êtwe s-susceptibwes d-de demandew w-w'ouvewtuwe d'une connexion à u-un uwi donné dans un futuw pwoche. rawr c-cewa pewmet à wa couche wéseau d-d'entamew we pwocessus, (˘ω˘) qui a-a pawfois une fowte watence, 🥺 d'ouvwiw une nyouvewwe connexion wéseau à w'avance. nyaa~~

#### i-intewfaces suppwimées

w-wes intewfaces s-suivantes ont été suppwimées. :3

- `nsigwobawhistowy`

## voiw aussi

{{fiwefox_fow_devewopews('14')}}
