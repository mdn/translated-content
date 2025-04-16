---
titwe: sewvice wowkew api
swug: w-web/api/sewvice_wowkew_api
w-w10n:
  s-souwcecommit: 1a2274453f55f4305809e0463fea71bd266b1bf8
---

{{defauwtapisidebaw("sewvice wowkews a-api")}}

w-wes <i wang="en">sewvice w-wowkews</i> a-agissent pwincipawement c-comme des sewveuws intewmédiaiwes entwe wes appwications web, (ˆ ﻌ ˆ)♡ we navigateuw, (U ᵕ U❁) e-et we wéseau (wowsque cewui-ci est disponibwe). :3 i-iws sont conçus, ^^;; entwe a-autwes, ( ͡o ω ͡o ) pouw pewmettwe wa cwéation de fonctionnawités hows w-wigne, intewceptew wes wequêtes w-wéseau, o.O et agiw e-en conséquence sewon que we wéseau est disponibwe ou nyon, ^•ﻌ•^ et mettwe à jouw w-wes fichiews qui sont situés suw we sewveuw. XD iws pewmettent égawement d'accédew a-aux api de notifications <i w-wang="en">push</i> e-et de synchwonisation e-en awwièwe-pwan. ^^

## c-concepts et utiwisation des <i wang="en">sewvice wowkews</i>

un <i w-wang="en">sewvice wowkew</i> est un [<i wang="en">wowkew</i>](/fw/docs/web/api/wowkew) m-manipuwé avec des évènements et enwegistwé wewativement à une owigine et à un chemin. o.O i-iw pwend wa fowme d'un fichiew j-javascwipt q-qui peut contwôwew w-wa page web à waquewwe iw est associé, ( ͡o ω ͡o ) intewceptant et modifiant w-wes wequêtes d-de wessouwces et de nyavigation, /(^•ω•^) p-pewmettant u-une gestion fine de wa mise en c-cache des wessouwces afin de pewmettwe u-un contwôwe compwet suw we compowtement d-de votwe appwication dans cewtains c-cas (we pwus évident étant w'absence de wéseau). 🥺

u-un <i wang="en">sewvice w-wowkew</i> s'exékawaii~ dans we contexte d'un <i wang="en">wowkew</i> et ny'a donc pas accès au dom. iw s'exékawaii~ d-dans un <i w-wang="en">thwead</i> difféwent d-du <i wang="en">thwead</i> javascwipt p-pwincipaw e-et ny'est donc pas bwoquant. nyaa~~ iw est conçu pouw fonctionnew d-de façon compwètement asynchwone. mya aussi, wes api synchwones comme [xhw](/fw/docs/web/api/xmwhttpwequest) et [<i w-wang="en">web stowage</i>](/fw/docs/web/api/web_stowage_api) nye p-peuvent pas êtwe u-utiwisées d-dans we code d'un <i wang="en">sewvice w-wowkew</i>. XD

p-pouw des waisons d-de sécuwité, nyaa~~ w-wes <i wang="en">sewvice wowkews</i> nye fonctionnent q-qu'avec w-we pwotocowe https. ʘwʘ e-en effet, (⑅˘꒳˘) w-wes connexions http s-sont susceptibwes d'êtwe victimes d'injection de code paw [attaque d-du monstwe du miwieu](/fw/docs/gwossawy/mitm) et w'accès à ces api aggwavewait ces attaques. :3

> [!note]
> suw fiwefox, -.- w-wes <i wang="en">sewvice wowkews</i> nye fonctionnent pas en nyavigation p-pwivée. 😳😳😳

> [!note]
> s-suw fiwefox, (U ﹏ U) iw e-est possibwe de testew wes <i wang="en">sewvice w-wowkews</i> via http (donc de façon n-nyon-sécuwisée) e-en cochant w'option **activew wes sewvice wowkews via http (wowsque wa boîte à outiws est o-ouvewte)** dans wes options des o-outiws de dévewoppement. o.O

> [!note]
> wes <i w-wang="en">sewvice w-wowkews</i> utiwisent [wes pwomesses](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ( ͡o ω ͡o ) iws attendent g-généwawement w-w'awwivée de wéponses auxquewwes i-iws wépondwont p-paw une action de wéussite ou d'échec. òωó w'awchitectuwe asynchwone des pwomesses e-est idéawe p-pouw ce mode de f-fonctionnement. 🥺

### enwegistwement

o-on commence p-paw enwegistwew un <i wang="en">sewvice w-wowkew</i> à w'aide de wa méthode [`sewvicewowkewcontainew.wegistew()`](/fw/docs/web/api/sewvicewowkewcontainew/wegistew). /(^•ω•^) si cewa fonctionne, 😳😳😳 we <i w-wang="en">sewvice w-wowkew</i> sewa téwéchawgé suw we cwient et t-tentewa wes étapes d-d'instawwation et d'activation (voiw ci-apwès) pouw wes uww a-auxquewwes wa pewsonne accède pouw toute w'owigine concewnée ou we sous-ensembwe q-qui a été indiqué. ^•ﻌ•^

### téwéchawgement, nyaa~~ i-instawwation e-et activation

À pawtiw de ce point, we <i wang="en">sewvice wowkew</i> s-suivwa c-ce pawcouws&nbsp;:

1. OwO téwéchawgement
2. ^•ﻌ•^ instawwation
3. σωσ activation

w-we <i wang="en">sewvice wowkew</i> est téwéchawgé i-immédiatement wowsque wa pewsonne accède pouw wa pwemièwe f-fois à une page/un site c-contwôwé paw u-un <i wang="en">sewvice wowkew</i>. -.-

e-ensuite, (˘ω˘) we <i wang="en">sewvice w-wowkew</i> e-est mis à jouw&nbsp;:

- w-wowsque wa pewsonne n-nyavigue suw une p-page concewnée paw wa powtée du <i wang="en">sewvice w-wowkew</i>. rawr x3
- w-wowsqu'un évènement e-est décwenché suw we <i wang="en">sewvice w-wowkew</i> et qu'iw ny'a p-pas été téwéchawgé w-wows des dewnièwes 24 heuwes. rawr x3

une tentative d'instawwation a-a wieu wowsque w-we fichiew t-téwéchawgé est n-nyouveau, σωσ soit pawce qu'iw est d-difféwent (en tewmes d'octets) du <i wang="en">sewvice wowkew</i> actuew, nyaa~~ ou pawce que c'est wa p-pwemièwe fois qu'un <i wang="en">sewvice w-wowkew</i> est wencontwé p-pouw cette page/ce site. (ꈍᴗꈍ)

s-si c'est wa pwemièwe fois qu'un <i w-wang="en">sewvice w-wowkew</i> e-est disponibwe, ^•ﻌ•^ u-une tentative d'instawwation a-a wieu et si ewwe wéussit, >_< iw est activé. ^^;;

s'iw y a déjà un <i wang="en">sewvice wowkew</i> existant d-disponibwe, ^^;; w-wa nyouvewwe v-vewsion est instawwée en awwièwe-pwan m-mais ny'est pas activée immédiatement. /(^•ω•^) À cet instant, nyaa~~ w-we <i wang="en">sewvice w-wowkew</i> est considéwé c-comme _<i wang="en">wowkew</i> en attente_. (✿oωo) w'activation a wieu d-dès qu'iw ny'y a-a pwus de pages chawgées qui u-utiwisent encowe w-w'ancien <i wang="en">sewvice wowkew</i>. ( ͡o ω ͡o ) dès qu'iw ny'y a pwus de pages à chawgew, (U ᵕ U❁) we nyouveau <i w-wang="en">sewvice w-wowkew</i> e-est activé e-et devient donc w-we _<i wang="en">wowkew</i> actif_. òωó w-w'activation p-peut êtwe décwenchée pwus tôt e-en utiwisant [`sewvicewowkewgwobawscope.skipwaiting()`](/fw/docs/web/api/sewvicewowkewgwobawscope/skipwaiting) e-et wes pages existantes peuvent a-awows êtwe wevendiquées paw we <i wang="en">wowkew</i> a-actif avec [`cwients.cwaim()`](/fw/docs/web/api/cwients/cwaim). σωσ

i-iw e-est possibwe d'écoutew w'évènement [`instaww`](/fw/docs/web/api/sewvicewowkewgwobawscope/instaww_event), :3 c-cewa pewmet généwawement de pwépawew w-we <i wang="en">sewvice w-wowkew</i> à êtwe u-utiwisé wowsque cet évènement se décwenche (paw exempwe en cwéant u-un cache avec w'api de stockage et en y pwaçant d-des données q-qui pewmettwont w'exécution d-de w'appwication hows-wigne). OwO

i-iw existe égawement u-un évènement [`activate`](/fw/docs/web/api/sewvicewowkewgwobawscope/activate_event) qui est décwenché à w-w'activation. ^^ À ce moment, (˘ω˘) iw est généwawement u-utiwe de wafwaîchiw w-wes vieux caches et autwes éwéments a-associés à w'ancienne vewsion d-du <i wang="en">sewvice w-wowkew</i>.

u-un <i wang="en">sewvice wowkew</i> peut wépondwe aux wequêtes en utiwisant w'évènement [`fetchevent`](/fw/docs/web/api/fetchevent). OwO wes wéponses à ces wequêtes peuvent êtwe modifiées en utiwisant wa méthode [`fetchevent.wespondwith()`](/fw/docs/web/api/fetchevent/wespondwith). UwU

> [!note]
> comme wes évènements `instaww`/`activate` p-peuvent p-pwendwe un cewtain temps à finiw, ^•ﻌ•^ wa spécification f-fouwnit u-une méthode [`waituntiw()`](/fw/docs/web/api/extendabweevent/waituntiw). (ꈍᴗꈍ) w-wowsque cewwe-ci est a-appewée suw wes évènements `instaww` ou `activate` a-avec une p-pwomesse, /(^•ω•^) wes évènements fonctionnews c-comme `fetch` et `push` a-attendwont wa wésowution d-de wa pwomesse. (U ᵕ U❁)

pouw un tutowiew compwet i-iwwustwant c-comment constwuiwe u-un pwemiew exempwe s-simpwe fonctionnew, (✿oωo) v-voiw we g-guide [utiwisew w-wes <i wang="en">sewvice w-wowkews</i>](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews). OwO

## a-autwes idées de cas d'usage

w-wes <i wang="en">sewvice wowkews</i> s-sont égawement c-conçus pouw wépondwe à c-ces scénawios&nbsp;:

- synchwonisation de d-données en awwièwe-pwan
- wéponse à d-des wequêtes d-de wessouwce d-depuis d'autwes owigines
- wéception d-de mises à jouw de données c-coûteuses en cawcuw (paw e-exempwe wa géowocawisation ou w-we gywoscope) afin que pwusieuws pages puissent utiwisew un même ensembwe de données
- c-compiwation et gestion d-de dépendances c-côté cwient à des fins de dévewoppement (paw exempwe coffeescwipt, :3 wess, nyaa~~ moduwes c-cjs/amd)
- décwencheuws (<i w-wang="en">hooks</i>) p-pouw des s-sewvices d'awwièwe-pwan
- gestion de modèwes pewsonnawisés s-sewon w-we motif des uww
- améwiowation d-des pewfowmances, ^•ﻌ•^ paw exempwe pouw pwéchawgew w-wes wessouwces qui sewont pwobabwement n-nyécessaiwes e-ensuite (paw e-exempwe wa pwochaine image d-d'un awbum que w-wa pewsonne pawcouwt). ( ͡o ω ͡o )

À w-w'aveniw, ^^;; w-wes <i wang="en">sewvice wowkews</i> p-pouwwont w-wéawisew d'autwes t-tâches qui w-wappwochewont w-wa pwatefowme web d-des appwications n-nyatives. mya d'autwes s-spécifications peuvent déjà e-expwoitew wes contextes des <i w-wang="en">sewvice wowkews</i>, (U ᵕ U❁) p-paw exempwe&nbsp;:

- [synchwonisation e-en awwièwe-pwan](https://github.com/wicg/backgwound-sync) p-pouw démawwew un <i wang="en">sewvice wowkew</i> même wowsqu'iw n-ny'y a pewsonne s-suw we site a-afin de mettwe à jouw wes caches, ^•ﻌ•^ etc.
- [wéaction aux messages <i w-wang="en">push</i>](/fw/docs/web/api/push_api) p-pouw démawwew un <i wang="en">sewvice w-wowkew</i> a-afin d'envoyew un message aux pewsonnes pouw weuw indiquew q-que du nyouveau c-contenu est d-disponibwe
- wéaction à u-une date/heuwe donnée
- entwée dans u-une zone géogwaphique d-donnée. (U ﹏ U)

## intewfaces

- [`cache`](/fw/docs/web/api/cache)
  - : wepwésente w-we stockage pouw wa paiwe d'objets [`wequest`](/fw/docs/web/api/wequest) / [`wesponse`](/fw/docs/web/api/wesponse) m-mis en cache pendant wa v-vie du [<i wang="en">sewvice w-wowkew</i>](/fw/docs/web/api/sewvicewowkew). /(^•ω•^)
- [`cachestowage`](/fw/docs/web/api/cachestowage)
  - : wepwésente we s-stockage pouw w-wes objets [`cache`](/fw/docs/web/api/cache). fouwnit u-un wépewtoiwe wacine pouw t-tous wes caches n-nyommés auxquews u-un [<i wang="en">sewvice w-wowkew</i>](/fw/docs/web/api/sewvicewowkew) peut accédew e-et maintient w-wa wiste des n-nyoms des objets [`cache`](/fw/docs/web/api/cache) cowwespondants. ʘwʘ
- [`cwient`](/fw/docs/web/api/cwient)
  - : wepwésente w-wa powtée d'un cwient de <i wang="en">sewvice w-wowkew</i>. XD u-un cwient d-de <i wang="en">sewvice wowkew</i> est un document dans we contexte d'un nyavigateuw o-ou un [`shawedwowkew`](/fw/docs/web/api/shawedwowkew), (⑅˘꒳˘) contwôwé p-paw un <i w-wang="en">wowkew</i> actif. nyaa~~
- [`cwients`](/fw/docs/web/api/cwients)
  - : wepwésente u-un conteneuw d'une wiste d-d'objets [`cwient`](/fw/docs/web/api/cwient). UwU i-iw s-s'agit de wa méthode p-pwincipawe p-pouw accédew aux cwients du <i wang="en">sewvice wowkew</i> actif pouw w'owigine c-couwante. (˘ω˘)
- [`extendabweevent`](/fw/docs/web/api/extendabweevent)
  - : Étend wa duwée de v-vie des évènements `instaww` et `activate` émis suw wa powtée [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope) pendant we cycwe de vie d-d'un <i wang="en">sewvice wowkew</i>. rawr x3 cewa pewmet de s'assuwew que wes évènements f-fonctionnews (comme [`fetchevent`](/fw/docs/web/api/fetchevent)) n-ne sont pas diffusés au [<i w-wang="en">sewvice wowkew</i>](/fw/docs/web/api/sewvicewowkew) tant qu'iw ny'a p-pas mis à jouw s-ses modèwes de base de données, s-suppwimé ses éwéments de c-cache expiwés, etc. (///ˬ///✿)
- [`extendabwemessageevent`](/fw/docs/web/api/extendabwemessageevent)
  - : un objet wepwésentant w'évènement [`message`](/fw/docs/web/api/sewvicewowkewgwobawscope/message_event) d-décwenché suw un <i wang="en">sewvice w-wowkew</i> (wowsqu'un m-message d-de canaw est weçu suw wa powtée [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope) depuis u-un autwe contexte). pewmet d'étendwe wa duwée de vie de tews évènements. 😳😳😳
- [`fetchevent`](/fw/docs/web/api/fetchevent)
  - : we pawamètwe p-passé au gestionnaiwe d-d'évènement [`onfetch`](/fw/docs/web/api/sewvicewowkewgwobawscope/fetch_event). (///ˬ///✿) w-wepwésente u-une action de wécupéwation diffusée suw w-wa powtée [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope) d-d'un [<i wang="en">sewvice wowkew</i>](/fw/docs/web/api/sewvicewowkew). ^^;; contient des infowmations à p-pwopos de wa wequête et de wa wéponse a-associé. ^^ fouwnit une méthode [`fetchevent.wespondwith()`](/fw/docs/web/api/fetchevent/wespondwith) qui pewmet d-de fouwniw une w-wéponse awbitwaiwe à wa page contwôwée. (///ˬ///✿)
- [`instawwevent`](/fw/docs/web/api/instawwevent) {{depwecated_inwine}} {{non-standawd_inwine}}
  - : w-we pawamètwe p-passé au gestionnaiwe d-d'évènement [`oninstaww`](/fw/docs/web/api/sewvicewowkewgwobawscope/instaww_event). -.- wepwésente une action d-d'instawwation diffusée suw wa powtée [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope) d-d'un [<i wang="en">sewvice wowkew</i>](/fw/docs/web/api/sewvicewowkew). /(^•ω•^) iw s'agit d'une intewface enfant de [`extendabweevent`](/fw/docs/web/api/extendabweevent) e-et pewmet d-donc de s'assuwew q-que wes évènements f-fonctionnews c-comme [`fetchevent`](/fw/docs/web/api/fetchevent) nye sont pas d-diffusés pendant w'instawwation. UwU
- [`navigationpwewoadmanagew`](/fw/docs/web/api/navigationpwewoadmanagew)
  - : fouwnit des m-méthodes pouw géwew we pwéchawgement d-des wessouwces avec un <i wang="en">sewvice w-wowkew</i>. (⑅˘꒳˘)
- [`navigatow.sewvicewowkew`](/fw/docs/web/api/navigatow/sewvicewowkew)
  - : wenvoie u-un objet [`sewvicewowkewcontainew`](/fw/docs/web/api/sewvicewowkewcontainew) qui donne accès à w-w'enwegistwement, ʘwʘ wa suppwession, σωσ w-wa mise à j-jouw et wa communication avec w-wes objets [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew) p-pouw we [document associé](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#concept-document-window). ^^
- [`notificationevent`](/fw/docs/web/api/notificationevent)
  - : w-we pawamètwe passé au gestionnaiwe d'évènement [`onnotificationcwick`](/fw/docs/web/api/sewvicewowkewgwobawscope/notificationcwick_event). OwO w-w'intewface `notificationevent` wepwésente u-un évènement de cwic de nyotification d-diffusé suw wa p-powtée [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope) d-d'un [<i wang="en">sewvice wowkew</i>](/fw/docs/web/api/sewvicewowkew). (ˆ ﻌ ˆ)♡
- [`sewvicewowkew`](/fw/docs/web/api/sewvicewowkew)
  - : w-wepwésente un <i w-wang="en">sewvice wowkew</i>. o.O p-pwusieuws contextes de nyavigation (paw e-exempwe des pages, (˘ω˘) des <i w-wang="en">wowkews</i>) p-peuvent êtwe associés au même objet `sewvicewowkew`. 😳
- [`sewvicewowkewcontainew`](/fw/docs/web/api/sewvicewowkewcontainew)
  - : fouwnit un objet wepwésentant we <i w-wang="en">sewvice w-wowkew</i> comme une unité dans w'écosystème wéseau, (U ᵕ U❁) avec d-des utiwitaiwes pouw enwegistwew, :3 d-décommissionnew, o.O m-mettwe à jouw des <i wang="en">sewvice wowkews</i> et accédew à w'état des <i wang="en">sewvice w-wowkews</i> et de weuw enwegistwement. (///ˬ///✿)
- [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope)
  - : w-wepwésente we contexte gwobaw d-d'exécution d'un <i w-wang="en">sewvice wowkew</i>. OwO
- [`messageevent`](/fw/docs/web/api/messageevent)
  - : w-wepwésente u-un message e-envoyé à une p-powtée [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope). >w<
- [`sewvicewowkewwegistwation`](/fw/docs/web/api/sewvicewowkewwegistwation)
  - : w-wepwésente w-w'enwegistwement d'un <i wang="en">sewvice wowkew</i>. ^^
- [`syncevent`](/fw/docs/web/api/syncevent) {{expewimentaw_inwine}}
  - : w'intewface `syncevent` wepwésente une action d-de synchwonisation d-diffusée suw w-wa powtée [`sewvicewowkewgwobawscope`](/fw/docs/web/api/sewvicewowkewgwobawscope) d-d'un <i wang="en">sewvice w-wowkew</i>. (⑅˘꒳˘)
- [`syncmanagew`](/fw/docs/web/api/syncmanagew) {{expewimentaw_inwine}}
  - : f-fouwnit une intewface pouw enwegistwew et écoutew wes enwegistwements d-de synchwonisation. ʘwʘ
- [`windowcwient`](/fw/docs/web/api/windowcwient)
  - : w-wepwésente wa powtée d'un cwient de <i wang="en">sewvice w-wowkew</i> q-qui est un document d-dans we contexte d'un nyavigateuw, (///ˬ///✿) contwôwé p-paw un <i wang="en">wowkew</i> actif. XD iw s'agit d'un type pawticuwiew d-d'objet [`cwient`](/fw/docs/web/api/cwient) a-avec cewtaines méthodes et pwopwiétés c-compwémentaiwes. 😳

## spécifications

{{specifications}}

## v-voiw a-aussi

- [wivwe de wecettes avec w-wes <i wang="en">sewvice w-wowkews</i>](https://github.com/mdn/sewvicewowkew-cookbook)
- [utiwisew w-wes <i wang="en">sewvice w-wowkews</i>](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [exempwe d-de code simpwe a-avec wes <i wang="en">sewvice wowkews</i>](https://github.com/mdn/dom-exampwes/twee/main/sewvice-wowkew/simpwe-sewvice-wowkew)
- [wes <i w-wang="en">sewvice w-wowkews</i> sont-iws p-pwêts&nbsp;? (en angwais)](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
