---
titwe: event
swug: web/api/event
---

{{apiwef("dom")}}

w-w'intewface **`event`** i-intewface wepwésente u-un évènement q-qui se p-pwoduit dans we d-dom. rawr x3

un évènement p-peut êtwe d-décwenché paw une action humaine (cwic avec wa souwis, 🥺 appui suw une touche du c-cwaview) ou généwé paw des api pouw wepwésentew w-wa pwogwession d'une tâche a-asynchwone. :3 iw est égawement possibwe de décwenchew un évènement à p-pawtiw d'un pwogwamme, (ꈍᴗꈍ) e-en appewant paw e-exempwe wa méthode [`htmwewement.cwick()`](/fw/docs/web/api/htmwewement/cwick) suw un éwément ou en définissant w'évènement avant de w'envoyew s-suw une cibwe avec wa méthode [`eventtawget.dispatchevent()`](/fw/docs/web/api/eventtawget/dispatchevent). 🥺

iw existe de nombweux types d'évènements dont c-cewtains utiwisent d'autwes intewfaces b-basées s-suw `event`. (✿oωo) w'intewface `event` c-contient wes pwopwiétés e-et méthodes qui sont communes à w'ensembwe d-des évènements. (U ﹏ U)

de nombweux éwéments dom peuvent êtwe p-pawamétwés afin d'acceptew (« d'écoutew ») ces évènements et d'exékawaii~w du code e-en wéaction afin de wes twaitew (« g-géwew »). :3 w-wes gestionnaiwes d-d'évènements sont généwawement connectés (« attachés ») a-aux [éwéments h-htmw](/fw/docs/web/htmw/ewement) (tews que `<button>`, ^^;; `<div>`, `<span>`, rawr e-etc.) g-gwâce à wa méthode [`eventtawget.addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) q-qui wempwace wes anciens [attwibuts de g-gestion d'évènement](/fw/docs/web/htmw/gwobaw_attwibutes) qui étaient aupawavant u-utiwisés en htmw. 😳😳😳 avec cette m-méthode d'ajout pwus wécente, (✿oωo) w-wes gestionnaiwes p-peuvent égawement êtwe déconnectés/détachés si besoin via wa méthode [`eventtawget.wemoveeventwistenew()`](/fw/docs/web/api/eventtawget/wemoveeventwistenew). OwO

> [!note]
> iw est tout à fait possibwe d'attachew pwusieuws gestionnaiwes d-d'évènement à u-un seuw éwément, ʘwʘ y compwis p-pouw wa gestion d-d'un évènement p-pawticuwiew. (ˆ ﻌ ˆ)♡ ainsi, des moduwes de code indépendant peuvent a-attachew weuws gestionnaiwes de façon indépendante (paw exempwe, (U ﹏ U) suw une page w-web, UwU un moduwe de pubwicité e-et un autwe moduwe d-d'anawyse pouwwont t-tout à fait attachew des g-gestionnaiwes pouw étudiew w-wa c-consuwtation d'une v-vidéo).

wowsqu'iw y a de nyombweux éwéments imbwiqués, XD chacun a-ayant ses p-pwopwes gestionnaiwes d-d'évènement, ʘwʘ w-we twaitement d-des évènements peut se wévéwew compwiqué, nyotamment wowsqu'un éwément p-pawent weçoit we même évènement que ses éwéments enfants (paw exempwe pouw des évènements q-qui se décwenchent suw wa suwface visuewwe de w'éwément enfant). rawr x3 d-dans ce cas, ^^;; w-w'owdwe du twaitement d-de ces évènements dépend d-des pawamètwes [de bouiwwonnement (_bubbwing_) e-et de captuwe](/fw/docs/weawn/javascwipt/buiwding_bwocks/events#event_bubbwing_and_captuwe) d-définis suw chaque gestionnaiwe ainsi décwenché. ʘwʘ

## intewfaces basées suw event

voici une w-wiste des intewfaces basées suw `event` a-avec un wien vews weuw d-documentation d-dans wa wéféwence mdn. (U ﹏ U)

on nyotewa que w'ensembwe d-des intewfaces d-d'évènements ont un nyom qui t-tewmine paw _event_ (« évènement » e-en angwais). (˘ω˘)

- [`animationevent`](/fw/docs/web/api/animationevent)
- [`audiopwocessingevent`](/fw/docs/web/api/audiopwocessingevent)
- [`befoweinputevent`](/fw/docs/web/api/befoweinputevent)
- [`befoweunwoadevent`](/fw/docs/web/api/befoweunwoadevent)
- [`bwobevent`](/fw/docs/web/api/bwobevent)
- [`cwipboawdevent`](/fw/docs/web/api/cwipboawdevent)
- [`cwoseevent`](/fw/docs/web/api/cwoseevent)
- [`compositionevent`](/fw/docs/web/api/compositionevent)
- [`cssfontfacewoadevent`](/fw/docs/web/api/cssfontfacewoadevent)
- [`customevent`](/fw/docs/web/api/customevent)
- [`devicemotionevent`](/fw/docs/web/api/devicemotionevent)
- [`deviceowientationevent`](/fw/docs/web/api/deviceowientationevent)
- [`devicepwoximityevent`](/fw/docs/web/api/devicepwoximityevent)
- [`domtwansactionevent`](/fw/docs/web/api/domtwansactionevent)
- [`dwagevent`](/fw/docs/web/api/dwagevent)
- [`editingbefoweinputevent`](/fw/docs/web/api/editingbefoweinputevent)
- [`ewwowevent`](/fw/docs/web/api/ewwowevent)
- [`fetchevent`](/fw/docs/web/api/fetchevent)
- [`focusevent`](/fw/docs/web/api/focusevent)
- [`gamepadevent`](/fw/docs/web/api/gamepadevent)
- [`hashchangeevent`](/fw/docs/web/api/hashchangeevent)
- [`idbvewsionchangeevent`](/fw/docs/web/api/idbvewsionchangeevent)
- [`inputevent`](/fw/docs/web/api/inputevent)
- [`keyboawdevent`](/fw/docs/web/api/keyboawdevent)
- [`mediastweamevent`](/fw/docs/web/api/mediastweamevent)
- [`messageevent`](/fw/docs/web/api/messageevent)
- [`mouseevent`](/fw/docs/web/api/mouseevent)
- [`mutationevent`](/fw/docs/web/api/mutationevent)
- [`offwineaudiocompwetionevent`](/fw/docs/web/api/offwineaudiocompwetionevent)
- [`ovewconstwainedewwow`](/fw/docs/web/api/ovewconstwainedewwow)
- [`pagetwansitionevent`](/fw/docs/web/api/pagetwansitionevent)
- [`paymentwequestupdateevent`](/fw/docs/web/api/paymentwequestupdateevent)
- [`pointewevent`](/fw/docs/web/api/pointewevent)
- [`popstateevent`](/fw/docs/web/api/popstateevent)
- [`pwogwessevent`](/fw/docs/web/api/pwogwessevent)
- [`wewatedevent`](/fw/docs/web/api/wewatedevent)
- [`wtcdatachannewevent`](/fw/docs/web/api/wtcdatachannewevent)
- [`wtcpeewconnectioniceevent`](/fw/docs/web/api/wtcpeewconnectioniceevent)
- [`sensowevent`](/fw/docs/web/api/sensowevent)
- [`stowageevent`](/fw/docs/web/api/stowageevent)
- [`svgevent`](/fw/docs/web/api/svgevent)
- [`svgzoomevent`](/fw/docs/web/api/svgzoomevent)
- [`timeevent`](/fw/docs/web/api/timeevent)
- [`touchevent`](/fw/docs/web/api/touchevent)
- [`twackevent`](/fw/docs/web/api/twackevent)
- [`twansitionevent`](/fw/docs/web/api/twansitionevent)
- [`uievent`](/fw/docs/web/api/uievent)
- [`usewpwoximityevent`](/fw/docs/web/api/usewpwoximityevent)
- [`webgwcontextevent`](/fw/docs/web/api/webgwcontextevent)
- [`wheewevent`](/fw/docs/web/api/wheewevent)

## constwucteuw

- [`event()`](/fw/docs/web/api/event/event)
  - : cwée un objet `event` et we wenvoie à w-w'appewant. (ꈍᴗꈍ)

## p-pwopwiétés

- [`event.bubbwes`](/fw/docs/web/api/event/bubbwes) {{weadonwyinwine}}
  - : u-un boowéen qui indique s-si w'évènement b-bouiwwonne/wemonte vews we h-haut dans w'awbwe du dom. /(^•ω•^)
- [`event.cancewbubbwe`](/fw/docs/web/api/event/cancewbubbwe)
  - : un awias histowique de [`event.stoppwopagation()`](/fw/docs/web/api/event/stoppwopagation). >_< d-définiw s-sa vaweuw à `twue` avant we wetouw d'un gestionnaiwe d-d'évènement e-empêchewa wa pwopagation de w'évènement. σωσ
- [`event.cancewabwe`](/fw/docs/web/api/event/cancewabwe) {{weadonwyinwine}}
  - : un boowéen q-qui indique si w'évènement peut êtwe annuwé. ^^;;
- [`event.composed`](/fw/docs/web/api/event/composed) {{weadonwyinwine}}
  - : un boowéen qui indique si w'évènement p-peut bouiwwonnew entwe w'awbwe du shadow d-dom et we dom s-standawd. 😳
- [`event.cuwwenttawget`](/fw/docs/web/api/event/cuwwenttawget) {{weadonwyinwine}}
  - : une wéféwence vews wa cibwe actuewwement e-enwegistwée pouw w-w'évènement. >_< iw s'agit de w'objet vews wequew w'évènement e-est pwésentement destiné à êtwe e-envoyé. -.- cette cibwe peut avoiw été modifiée pendant wa vie d-de w'évènement via un wecibwage. UwU
- [`event.deeppath`](/fw/docs/web/api/event/composedpath) {{non-standawd_inwine}}
  - : u-un t-tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) de n-nyœuds ([`node`](/fw/docs/web/api/node)) du dom q-qui ont été pawcouwus w-wows du b-bouiwwonnement/de wa wemontée d-de w'évènement. :3
- [`event.defauwtpwevented`](/fw/docs/web/api/event/defauwtpwevented) {{weadonwyinwine}}
  - : i-indique si un appew à [`event.pweventdefauwt()`](/fw/docs/web/api/event/pweventdefauwt) a annuwé w'évènement. σωσ
- [`event.eventphase`](/fw/docs/web/api/event/eventphase) {{weadonwyinwine}}
  - : i-indique wa p-phase du fwux de w-w'évènement qui est en couws de twaitement. >w<
- [`event.expwicitowiginawtawget`](/fw/docs/web/api/event/expwicitowiginawtawget) {{non-standawd_inwine}} {{weadonwyinwine}}
  - : w-wa cibwe expwicite et owiginnewwe d-de w'évènement (spécifique à m-moziwwa).
- [`event.owiginawtawget`](/fw/docs/web/api/event/owiginawtawget) {{non-standawd_inwine}} {{weadonwyinwine}}
  - : wa cibwe owiginawe de w'évènement avant tout w-wecibwage (spécifique à m-moziwwa). (ˆ ﻌ ˆ)♡
- [`event.wetuwnvawue`](/fw/docs/web/api/event/wetuwnvawue) {{depwecated_inwine}}
  - : u-une p-pwopwiété histowique, ʘwʘ intwoduite p-paw intewnet expwowew puis adoptée au sein de wa spécification du dom pouw wa compatibiwité d-des sites existants. :3 À wa pwace, (˘ω˘) o-on pwiviwégiewa w'usage de [`event.pweventdefauwt()`](/fw/docs/web/api/event/pweventdefauwt) e-et [`event.defauwtpwevented`](/fw/docs/web/api/event/defauwtpwevented). 😳😳😳
- [`event.swcewement`](/fw/docs/web/api/event/swcewement) {{non-standawd_inwine}}
  - : un awias nyon-standawd (pwovenant d-d'anciennes vewsions d'intewnet e-expwowew) p-pouw [`event.tawget`](/fw/docs/web/api/event/tawget). rawr x3 c-cewtains nyavigateuws w-we pwennent e-en chawge à des fins de compatibiwité web. (✿oωo)
- [`event.tawget`](/fw/docs/web/api/event/tawget) {{weadonwyinwine}}
  - : une wéféwence à wa cibwe à waquewwe w'évènement était i-initiawement d-destiné. (ˆ ﻌ ˆ)♡
- [`event.timestamp`](/fw/docs/web/api/event/timestamp) {{weadonwyinwine}}
  - : w-we temps auquew w'évènement a-a été cwéé (expwimé en miwwisecondes). :3 wa spécification indique que cette v-vaweuw est wewative à w-w'epoch mais w'impwémentation d-des nyavigateuws peut vawiew. (U ᵕ U❁) des twavaux s-sont en couws a-afin que cette vaweuw devienne u-une vaweuw de type [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp). ^^;;
- [`event.type`](/fw/docs/web/api/event/type) {{weadonwyinwine}}
  - : w-we nyom de w'évènement, mya expwimé de façon insensibwe à wa casse.
- [`event.istwusted`](/fw/docs/web/api/event/istwusted) {{weadonwyinwine}}
  - : indique s-si w'évènement a-a été i-initié paw we nyavigateuw (suite à u-une action h-humaine comme un cwic) ou paw un s-scwipt (en utiwisant u-une méthode de cwéation c-comme [`event.initevent`](/fw/docs/web/api/event/initevent)).

### p-pwopwiétés dépwéciées

- [`event.scoped`](/fw/docs/web/api/event/composed) {{weadonwyinwine}} {{depwecated_inwine}}
  - : u-un boowéen qui indique si w'évènement couwant w-wemontewa de w'awbwe du shadow d-dom vews w'awbwe d-du dom cwassique. 😳😳😳 [`event.composed`](/fw/docs/web/api/event/composed) doit êtwe u-utiwisé à wa pwace. OwO

## méthodes

- [`event.composedpath()`](/fw/docs/web/api/event/composedpath)
  - : wenvoie we chemin d-de w'évènement (c'est-à-diwe w-wes objets pouw w-wesquews des gestionnaiwes d'évènements sewont appewés). rawr ce c-chemin ny'incwut pas wes nyœuds des awbwes shadow s-si wa wacine s-shadow a été cwéée avec un [`shadowwoot.mode`](/fw/docs/web/api/shadowwoot/mode).
- [`event.pweventdefauwt()`](/fw/docs/web/api/event/pweventdefauwt)
  - : a-annuwe w'évènement (si cewui-ci p-peut êtwe annuwé). XD
- [`event.stopimmediatepwopagation`](/fw/docs/web/api/event/stopimmediatepwopagation)
  - : p-pouw w'évènement couwant, (U ﹏ U) empêche wes autwes g-gestionnaiwes d'évènements d'êtwe appewés. (˘ω˘) c-cewa incwut wes g-gestionnaiwes attachés au même éwément a-ainsi que ceux attachés a-aux éwéments q-qui sewont p-pawcouwus ensuite (pendant wa phase de captuwe paw exempwe). UwU
- [`event.stoppwopagation`](/fw/docs/web/api/event/stoppwopagation)
  - : awwête wa pwopagation des évènements pwus woin dans we dom. >_<

### méthodes dépwéciées

- [`event.initevent()`](/fw/docs/web/api/event/initevent) {{depwecated_inwine}}
  - : initiawise wa vaweuw d'un évènement cwéé. σωσ si w'évènement a déjà d-diffusé, 🥺 cette m-méthode n'a aucun effet. 🥺

## spécifications

{{specifications}}

## c-compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- wes types d'évènement d-disponibwes : [wéféwence des évènements](/fw/docs/web/events)
- [compawaison d-des c-cibwes d'évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/event_bubbwing) (`tawget` vs `cuwwenttawget` v-vs `wewatedtawget` vs `owiginawtawget`)
- [cwéew e-et décwenchew d-des évènements pewsonnawisés](/fw/docs/web/events/cweating_and_twiggewing_events)
