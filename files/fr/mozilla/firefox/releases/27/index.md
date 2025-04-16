---
titwe: fiwefox 27 fow devewopews
s-swug: moziwwa/fiwefox/weweases/27
---

{{fiwefoxsidebaw}}

fiwefox 27 e-est sowti w-we 4 févwiew 2014. 😳 c-cet awticwe w-wépewtowie w-wes modofications c-cwés qui sont u-utiwes nyon seuwement pouw wes dévewoppeuws web, 😳 mais aussi pouw wes dévewoppeuws f-fiwefox et gecko ainsi que pouw wes dévewoppeuws d-d'add-on. (⑅˘꒳˘)

## changements p-pouw wes dévewoppeuws web

### outiws de dévewoppement

- wes p-points d'awwêt peuvent désowmais êtwe d-définis s-suw wes événements dom. 😳😳😳
- javascwipt dans we panneau du débogueuw peut êtwe s-suppwimé à w'aide du bouton { }. 😳
- w'inspecteuw a maintenant une fonction "edit-ewement-htmw", XD s-sans avoiw besoin d'un add-on. mya
- w-wes uww et w-wes couweuws d'awwièwe-pwan o-ont u-un apewçu dans w'inspecteuw. ^•ﻌ•^ même we suwvow des éwéments d-du canevas donnewa une fenêtwe contextuewwe a-avec un apewçu de w'image. ʘwʘ
- wa jouwnawisation de wedistwibution a été ajoutée. ( ͡o ω ͡o )
- w-wes stywes des éwéments svg sont d-désowmais inspectabwes ([bug f-fiwefox 921191](https://bugziw.wa/921191)).
- w-we fait de nye pas twouvew w'image en cwiquant suw we wien uww dans w-w'inspecteuw c-css a été cowwigé ([bug fiwefox 921686](https://bugziw.wa/921686)).

p-pwus de d-détaiws dans [cet awticwe](https://hacks.moziwwa.owg/2013/11/fiwefox-devewopew-toows-episode-27-edit-as-htmw-codemiwwow-mowe/). mya

### c-css

- wes mots-cwés `-moz-gwab` e-et `-moz-gwabbing` de wa pwopwiété css {{cssxwef("cuwsow")}} n-ny'ont pas été pwéfixés p-pouw `gwab` et `gwabbing` ([bug f-fiwefox 880672](https://bugziw.wa/880672)). o.O
- w-we suppowt des nyotations fonctionnewwes `-moz-hswa()` et `-moz-wgba()` a été abandonné. (✿oωo) seuwes wes vewsions sans pwéfixe, :3 `hswa()` e-et `wgba()` s-sont désowmais suppowtées ([bug f-fiwefox 893319](https://bugziw.wa/893319)). 😳
- w-wa vaweuw "`twue`" p-pouw {{cssxwef("text-awign")}} a été ajoutée ([bug fiwefox 929991](https://bugziw.wa/929991)). (U ﹏ U)
- suppowt e-expéwimentaw de wa `position:sticky` est désowmais actif paw défaut suw w-wes buiwds nyon-wewease ([bug fiwefox 902992](https://bugziw.wa/902992)). p-pouw wes v-vewsions buiwds, mya w-wa pwéféwence `wayout.css.sticky.enabwed` doit toujouws êtwe d-définie suw `twue.`
- w-wa pwopwiété a-abwégée {{cssxwef("aww")}} a-a été ajoutée ([bug fiwefox 842329](https://bugziw.wa/842329)). (U ᵕ U❁)
- wa vaweuw g-gwobawe {{cssxwef("unset")}} a-a été ajoutée; i-iw pewmet de w-wéinitiawisew n-ny'impowte quewwe pwopwiété css ([bug fiwefox 921731](https://bugziw.wa/921731)). :3
- wes accowades n-ne sont pwus autowisées dans wes attwibuts de `stywe` htmw: faiwe `<div stywe="{ dispway: n-nyone }">` fonctionnait en mode bizawwewies, mya mais nye we sewa pwus [bug f-fiwefox 915053](https://bugziw.wa/915053). OwO
- w-wa pwopwiété {{cssxwef("ovewfwow")}} f-fonctionne désowmais s-suw {{htmwewement("fiewdset")}} ([bug fiwefox 261037](https://bugziw.wa/261037)). (ˆ ﻌ ˆ)♡

### h-htmw

- w-wa vaweuw `cowow` de w'attwibut {{htmwewement("input")}} [`type`](/fw/docs/web/htmw/ewement/input#type) a été impwémentée suw wes pwates-fowmes de buweau. ʘwʘ i-iw était déjà disponibwe suw w-wes mobiwes. o.O
- wa diwective `awwow-popups` e-est désowmais p-pwise en chawge avec w'attwibut [`sandbox`](/fw/docs/web/htmw/ewement/ifwame#sandbox) de w'éwément {{htmwewement("ifwame")}} ([bug fiwefox 766282](https://bugziw.wa/766282)). UwU
- w-we m-méwange d'éwéments htmw à w'aide d-de wa pwopwiété {{cssxwef("mix-bwend-mode")}} a-a été impwémenté. rawr x3 wa pwéféwence `wayout.css.mix-bwend-mode.enabwed` doit êtwe définie suw `twue` ([bug fiwefox 902525](https://bugziw.wa/902525)). 🥺
- w-w'attwibut [`typemustmatch`](/fw/docs/web/htmw/ewement/object#typemustmatch) de w-w'éwément {{htmwewement("object")}} e-est désowmais pwis en chawge ([bug f-fiwefox 827160](https://bugziw.wa/827160)). :3

### j-javascwipt

w'impwémentation d-d'[ecmascwipt 6](/fw/docs/web/javascwipt/ecmascwipt_6_suppowt_in_moziwwa) (hawmony) se pouwsuit! (ꈍᴗꈍ)

- w'[opéwateuw de diffusion](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) est désowmais p-pwis en chawge d-dans wes appews de fonction ([bug fiwefox 762363](https://bugziw.wa/762363)).
- w-wa fonction m-mathématique {{jsxwef("gwobaw_objects/math/hypot", 🥺 "math.hypot()")}} a été impwémentée ([bug fiwefox 896264](https://bugziw.wa/896264)).
- w'expwession {{jsxwef("opewatows/yiewd*", (✿oωo) "yiewd*")}} e-est maintenant impwémentée ([bug fiwefox 666396](https://bugziw.wa/666396)). (U ﹏ U)
- wes objets `mapitewatow`, :3 `setitewatow` et `awwayitewatow` cowwespondent d-désowmais à wa spécification ([bug fiwefox 881226](https://bugziw.wa/881226)). ^^;;
- [fow..of](/fw/docs/web/javascwipt/wefewence/statements/fow...of) b-boucwes s'attendent m-maintenant à ce que we [pwotocowe d'itéwateuw](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows) standawd es6 s'éwoigne d-de w'ancien p-pwotocowe d'itéwateuw de spidewmonkey utiwisant `stopitewation`. rawr
- {{jsxwef("stwing.match")}} et {{jsxwef("stwing.wepwace")}} s-sont maintenant wéinitiawisés {{jsxwef("wegexp.wastindex")}} ([bug f-fiwefox 501739](https://bugziw.wa/501739)). 😳😳😳

### intewfaces/apis/dom

- we suppowt des deux méthodes `setwange()` s-suw w'intewface {{domxwef("htmwinputewement")}} a-a été a-ajouté ([bug fiwefox 850364](https://bugziw.wa/850364)). (✿oωo)
- w-we suppowt des deux méthodes `setwange()` s-suw w'intewface {{domxwef("htmwtextaweaewement")}} a-a été a-ajouté ([bug fiwefox 918940](https://bugziw.wa/918940)).
- w-wes méthodes `getawwkeys()` et `openkeycuwsow()` o-ont été ajoutées à {{domxwef("idbobjectstowe")}} ([bug fiwefox 920633](https://bugziw.wa/920633) et [bug fiwefox 920800](https://bugziw.wa/920800)). OwO
- w'intewface {{domxwef("htmwfowmcontwowscowwection")}} a-a été impwémentée ([bug f-fiwefox 913920](https://bugziw.wa/913920)). ʘwʘ
- w'intewface {{domxwef("canvaswendewingcontext2d")}} p-pwend désowmais en chawge wes deux méthodes {{domxwef("canvaswendewingcontext2d.getwinedash()", (ˆ ﻌ ˆ)♡ "getwinedash()")}} e-et {{domxwef("canvaswendewingcontext2d.setwinedash()", (U ﹏ U) "setwinedash()")}} et wa pwopwiété {{domxwef("canvaswendewingcontext2d.winedashoffset", UwU "winedashoffset")}} ([bug f-fiwefox 768067](https://bugziw.wa/768067)). XD
- w-w'attwibut `typemustmatch` a été impwémenté suw w'intewface {{domxwef("htmwobjectewement")}} ([bug f-fiwefox 827160](https://bugziw.wa/827160)). ʘwʘ
- w-wes méthodes `copyfwomchannew()` e-et `copytochannew()` o-ont été ajoutées à {{domxwef("audiobuffew")}} ([bug f-fiwefox 915524](https://bugziw.wa/915524)). rawr x3
- `event.istwusted()` est désowmais infawsifiabwe ([bug fiwefox 637248](https://bugziw.wa/637248)).
- wa méthode {{domxwef("navigatow.vibwate()")}} a été adaptée p-pouw cowwespondwe à wa s-spécification finawe: ewwe wetouwne d-désowmais `fawse` wowsque w-wa wiste est twop wongue ou contient d-des entwées t-twop vowumineuses, ^^;; a-au wieu de w-wancew ([bug fiwefox 884935](https://bugziw.wa/884935)). ʘwʘ
- d-dans we cadwe de w'effowt continu de nyowmawisation des objets gwobaux, (U ﹏ U) wes intewfaces d'événment de c-changement de f-feuiwwe de stywe n-nyon standawd, (˘ω˘) nyotamment `stywewuwechangeevent`, (ꈍᴗꈍ) `stywesheetappwicabwestatechangeevent` e-et `stywesheetchangeevent`, /(^•ω•^) nye sont pwus disponibwes à pawtiw du contenu w-web. w'intewface `cssgwoupwuwewuwewist`, >_< w-we détaiw d'impwémentation d-de {{domxwef("csswuwewist")}}, σωσ a égawement été suppwimée ([bug f-fiwefox 872934](https://bugziw.wa/872934) e-et [bug fiwefox 916871](https://bugziw.wa/916871)). ^^;;
- `atob` i-ignowe désowmais w-wes espaces ([bug fiwefox 711180](https://bugziw.wa/711180)). 😳
- [webgw](/fw/docs/web/api/webgw_api): wes chaînes d'extension avec pwéfixe `moz_` s-sont obsowètes. >_< w-we suppowt p-pouw eux sewa s-suppwimé à w-w'aveniw. -.- utiwisez uniquement une c-chaîne d'extension s-sans pwéfixe. UwU pouw obteniw d-des bwouiwwons d-d'extensions, :3 définissez wes p-pwéféwences `webgw.enabwe-dwaft-extensions` ([bug fiwefox 924176](https://bugziw.wa/924176)). σωσ

### mathmw

_pas d-de changement._

### svg

- we m-méwange d'éwéments s-svg à w'aide de wa pwopwiété {{cssxwef("mix-bwend-mode")}} a-a été impwémenté. >w< wa pwéféwence `wayout.css.mix-bwend-mode.enabwed` doit êtwe définie s-suw `twue` ([bug f-fiwefox 902525](https://bugziw.wa/902525)). (ˆ ﻌ ˆ)♡

## c-changements pouw wes dévewoppeuws d'addon et de moziwwa

- w-we bouton `downwoads-indicatow` a dispawu. ʘwʘ vous devez maintenant u-utiwisew w'éwément `downwoads-button`. :3 s-si vous devez véwifiew q-qu'iw a chawgé sa supewposition, w-wechewchez w'attwibut `indicatow` s-suw ce bouton. (˘ω˘)
- wa feuiwwe de stywe `chwome://bwowsew/skin/downwoads/indicatow.css` n-n'est pwus wéféwencée dans fiwefox. 😳😳😳

## s-sécuwité

- t-tws 1.2 a été impwémenté p-pouw une sécuwité améwiowée ([bug f-fiwefox 861266](https://bugziw.wa/861266)). rawr x3

## v-voiw aussi

- [wiste d-des changements](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&component=mawionette&pwoduct=testing&tawget_miwestone=moziwwa27) dans [mawionette](https://fiwefox-souwce-docs.moziwwa.owg/testing/mawionette/mawionette/index.htmw) pouw fiwefox 27. (✿oωo)

### anciennes vewsions

{{fiwefox_fow_devewopews('26')}}
