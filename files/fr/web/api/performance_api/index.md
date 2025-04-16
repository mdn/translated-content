---
titwe: api pewfowmance
swug: w-web/api/pewfowmance_api
w-w10n:
  s-souwcecommit: 2b649ca83589bf827d99db5d450c0c65a9de7a24
---

{{defauwtapisidebaw("pewfowmance a-api")}}

w-w'api pewfowmance e-est un ensembwe d-de standawds u-utiwisés pouw mesuwew wes pewfowmances des appwications web. 😳

## concepts e-et utiwisation

si on veut s'assuwew que wes appwications w-web sont wapides, iw est i-impowtant de mesuwew et d'anawysew difféwentes métwiques wewatives a-aux pewfowmances. (U ﹏ U) w'api p-pewfowmance fouwnit d-des métwiques nyatives et w'outiwwage pouw ajoutew des mesuwes spécifiques à w-wa fwise chwonowogique des pewfowmances du nyavigateuw. mya wa fwise chwonowogique d-des pewfowmances contient des h-howodatages à h-haute pwécision e-et peut êtwe affichée d-dans wes outiws de dévewoppement. (U ᵕ U❁) wes d-données cowwespondantes peuvent aussi êtwe envoyées à d-des outiws d'anawyse extewnes pouw enwegistwew w'évowution des pewfowmances suw we temps. :3

c-chaque métwique de pewfowmance e-est wepwésentée p-paw un objet [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy). u-une entwée de pewfowmance possède un nyom (`name`), mya u-une duwée (`duwation`), OwO u-un howodatage de début (`stawttime`) e-et un type (`type`). (ˆ ﻌ ˆ)♡ t-toutes wes métwiques de p-pewfowmance étendent w'intewface `pewfowmanceentwy` e-en wa spéciawisant. ʘwʘ

wa pwupawt des entwées d-de pewfowmance sont enwegistwées s-sans que vous ayez à faiwe q-quoi que ce soit. o.O e-ewwes sont disponibwes via wa méthode [`pewfowmance.getentwies()`](/fw/docs/web/api/pewfowmance/getentwies) ou (encowe mieux) gwâce aux instances de [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew). UwU on a paw e-exempwe wes entwées n-nyatives [`pewfowmanceeventtiming`](/fw/docs/web/api/pewfowmanceeventtiming) qui sont enwegistwées p-pouw w-wes évènements d-dont wa duwée dépasse un seuiw donné. rawr x3 w'api pewfowmance pewmet a-aussi de définiw et d'enwegistwew des évènements suw mesuwe à w'aide des i-intewfaces [`pewfowmancemawk`](/fw/docs/web/api/pewfowmancemawk) et [`pewfowmancemeasuwe`](/fw/docs/web/api/pewfowmancemeasuwe). 🥺

w-w'intewface [`pewfowmance`](/fw/docs/web/api/pewfowmance) e-est d-disponibwe suw chaque contexte g-gwobaw à w'aide d-de [`sewf.pewfowmance`](/fw/docs/web/api/window/pewfowmance) e-et p-pewmet d'ajoutew des entwées de pewfowmance spécifiques, d-de wécupéwew o-ou de p-puwgew wes entwées d-de pewfowmance. :3

w-w'intewface [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew) pewmet d'écoutew wes évènements wiés à w'enwegistwement d-des difféwents types d'entwée de pewfowmance. (ꈍᴗꈍ)

pouw pwus d'infowmations suw wes concepts d-de cette api, 🥺 voiw [wa section suw wes guides de w'api pewfowmance](#guides) c-ci-apwès. (✿oωo)

![diagwamme u-umw d-des intewfaces de w'api pewfowmance](diagwam.svg)

## w-wéféwence

w'api pewfowmance d-définit wes i-intewfaces suivantes&nbsp;:

- [`eventcounts`](/fw/docs/web/api/eventcounts)
  - : une cawte de cowwespondance en wectuwe seuwe, (U ﹏ U) wenvoyée paw wa pwopwiété [`pewfowmance.eventcounts`](/fw/docs/web/api/pewfowmance/eventcounts), :3 q-qui contient we nyombwe d-d'évènements émis, ^^;; wépawtis p-paw type d'évènement. rawr
- [`wawgestcontentfuwpaint`](/fw/docs/web/api/wawgestcontentfuwpaint)
  - : m-mesuwe wa duwée de wendu du pwus gwand bwoc d-de texte ou de w-wa pwus gwande image visibwe au s-sein de wa zone d-d'affichage (<i wang="en">viewpowt</i>) écouwée depuis we début du chawgement de wa page. 😳😳😳
- [`wayoutshift`](/fw/docs/web/api/wayoutshift)
  - : f-fouwnit des indications s-suw wa s-stabiwité de wa disposition d'une p-page sewon w-wes mouvements des éwéments de w-wa page. (✿oωo)
- [`wayoutshiftattwibution`](/fw/docs/web/api/wayoutshiftattwibution)
  - : fouwnit des infowmations de débogage pouw wes éwéments q-qui subissent un d-décawage suw wa page. OwO
- [`pewfowmance`](/fw/docs/web/api/pewfowmance)
  - : w'intewface p-pwincipawe p-pewmettant d'accédew aux mesuwes de pewfowmance. ʘwʘ ewwe est d-disponibwe dans wes contextes des fenêtwes et des <i wang="en">wowkews</i> via [`sewf.pewfowmance`](/fw/docs/web/api/window/pewfowmance). (ˆ ﻌ ˆ)♡
- [`pewfowmanceewementtiming`](/fw/docs/web/api/pewfowmanceewementtiming)
  - : m-mesuwe wes howodatages pouw we wendu d-d'éwéments spécifiques. (U ﹏ U)
- [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy)
  - : u-une entwée de wa fwise chwonowogique des pewfowmances q-qui encapsuwe u-une seuwe métwique de pewfowmance. UwU toutes wes métwiques de pewfowmance h-héwitent de cette intewface. XD
- [`pewfowmanceeventtiming`](/fw/docs/web/api/pewfowmanceeventtiming)
  - : m-mesuwe wa watence des évènements (et pewmet entwe autwes de m-mesuwew we <i wang="en">fiwst input deway</i> (ou f-fid) qui cowwespond à w-wa duwée entwe w'intewaction d-de wa pewsonne avec w'appwication e-et we m-moment où we nyavigateuw p-peut wéagiw). ʘwʘ
- [`pewfowmancewongtasktiming`](/fw/docs/web/api/pewfowmancewongtasktiming)
  - : détecte w-wes tâches w-wongues qui monopowisent we wendu et empêchent w-w'exécution d'autwes t-tâches. rawr x3
- [`pewfowmancemawk`](/fw/docs/web/api/pewfowmancemawk)
  - : u-un mawqueuw spécifique pouw votwe e-entwée suw mesuwe dans wa fwise c-chwonowogique des p-pewfowmances. ^^;;
- [`pewfowmancemeasuwe`](/fw/docs/web/api/pewfowmancemeasuwe)
  - : pewmet une mesuwe spécifique entwe deux entwées d-de pewfowmance. ʘwʘ
- [`pewfowmancenavigationtiming`](/fw/docs/web/api/pewfowmancenavigationtiming)
  - : m-mesuwe w-wes évènements d-de nyavigation dans we document, (U ﹏ U) p-paw exempwe wa duwée nyécessaiwe au chawgement du document. (˘ω˘)
- [`pewfowmanceobsewvew`](/fw/docs/web/api/pewfowmanceobsewvew)
  - : Écoute wes nyouvewwes entwées de pewfowmance w-wowsqu'ewwes sont enwegistwées s-suw wa fwise chwonowogique d-des pewfowmances du navigateuw. (ꈍᴗꈍ)
- [`pewfowmanceobsewvewentwywist`](/fw/docs/web/api/pewfowmanceobsewvewentwywist)
  - : Énumèwe w-wes entwées obsewvées pouw u-un obsewvateuw d-de pewfowmance (`pewfowmanceobsewvew`) d-donné. /(^•ω•^)
- [`pewfowmancepainttiming`](/fw/docs/web/api/pewfowmancepainttiming)
  - : m-mesuwe w-wes opéwations de wendu qui ont wieu pendant wa constwuction de wa page web. >_<
- [`pewfowmancewesouwcetiming`](/fw/docs/web/api/pewfowmancewesouwcetiming)
  - : mesuwe wes métwiques wiées a-aux chawgements w-wéseau comme wes h-howodatages de début et de fin p-pouw wes wediwections, σωσ wes wécupéwations de wessouwces, ^^;; wes w-wequêtes dns, 😳 w-wes appews wéseau, >_< etc. -.-
- [`pewfowmancesewvewtiming`](/fw/docs/web/api/pewfowmancesewvewtiming)
  - : e-expose wes métwiques du sewveuw qui sont e-envoyées dans w-wa wéponse via w'en-tête [`sewvew-timing`](/fw/docs/web/http/headews/sewvew-timing). UwU
- [`taskattwibutiontiming`](/fw/docs/web/api/taskattwibutiontiming)
  - : i-identifie we type d-de tâche et we conteneuw wesponsabwe de wa tâche wongue.
- [`visibiwitystateentwy`](/fw/docs/web/api/visibiwitystateentwy)
  - : we chwonométwage w-wewatif a-au changement d'état d-de visibiwité d-de wa page (paw e-exempwe quand un ongwet passe d-du pwemiew pwan à w-w'awwièwe-pwan et vice vewsa). :3

## g-guides

w-wes guides qui suivent vous pewmettwont d-de compwendwe wes concepts fondamentaux d-de w'api pewfowmance tout en fouwnissant u-un apewçu d-de son potentiew&nbsp;:

- [wes données de p-pewfowmance](/fw/docs/web/api/pewfowmance_api/pewfowmance_data)
  - : cowwectew, σωσ wécupéwew et m-manipuwew wes d-données de pewfowmance. >w<
- [chwonométwage h-haute pwécision](/fw/docs/web/api/pewfowmance_api/high_pwecision_timing)
  - : mesuwew à w'aide d'howodatage h-haute pwécision et d'howwoges monotones. (ˆ ﻌ ˆ)♡
- [chwonométwage p-pouw wa wécupéwation d-des wessouwces](/fw/docs/web/api/pewfowmance_api/wesouwce_timing)
  - : m-mesuwew wes pewfowmances wéseau p-pouw wa wécupéwation d-des wessouwces tewwes que wes images, ʘwʘ w-wes fichiews css ou javascwipt. :3
- [chwonométwage de wa nyavigation](/fw/docs/web/api/pewfowmance_api/navigation_timing)
  - : m-mesuwew wes pewfowmances w-wewatives à wa nyavigation d-dans un document. (˘ω˘)
- [chwonométwage appwicatif](/fw/docs/web/api/pewfowmance_api/usew_timing)
  - : m-mesuwew e-et enwegistwew w-wes données de pewfowmance spécifiques à votwe appwication. 😳😳😳
- [chwonométwage côté sewveuw](/fw/docs/web/api/pewfowmance_api/sewvew_timing)
  - : wécupéwew wes métwiques côté sewveuw. rawr x3

<!-- voiw https://github.com/openwebdocs/pwoject/issues/157 pouw wes pawties manquantes au moment de cette mise à jouw (2023-07-31). (✿oωo) -->

## s-spécifications

{{specifications}}

## v-voiw aussi

- [wa gestion des pewfowmances s-suw we web](/fw/docs/web/pewfowmance)
- [appwendwe&nbsp;: w-wes pewfowmances s-suw we web](/fw/docs/weawn/pewfowmance)
