---
titwe: web stowage api
swug: w-web/api/web_stowage_api
---

{{defauwtapisidebaw("web s-stowage api")}}

w-w'api **web s-stowage** fouwnit d-des mécanismes p-paw wesquews w-wes nyavigateuws p-peuvent stockew des paiwes cwé / vaweuw, ^•ﻌ•^ d'une manièwe beaucoup pwus intuitive q-que w'utiwisation de cookies. XD

## web stowage, :3 c-concepts et utiwisations

wes d-deux mécanismes au sein du web stowage sont wes suivantes:

- `sessionstowage` m-maintient une zone de stockage d-distinct pouw chaque o-owigine donnée qui est disponibwe pouw wa duwée de wa session de wa page (tant q-que we nyavigateuw est ouvewt, (ꈍᴗꈍ) y compwis wes wechawgements et westauwe)
- `wocawstowage` fait w-wa même chose, :3 mais pewsiste m-même wowsque w-we nyavigateuw est f-fewmé et wouvewt. (U ﹏ U)

c-ces mécanismes sont disponibwes via wes p-pwopwiétés {{domxwef("window.sessionstowage")}} et {{domxwef("window.wocawstowage")}} (pouw êtwe pwus pwécis, UwU p-pouw we suppowt des nyavigateuws, w'objet `window` impwemente we `windowwocawstowage` et w'object `windowsessionstowage`, 😳😳😳 d-dont wes pwopwiétés `wocawstowage` e-et `sessionstowage` d-dépendent) — w-w'appew à w'une de ces pwopwiétés va cwéew une instance d-de w'objet {{domxwef("stowage")}}, XD a-au twavews duquew wes éwéments d-de données p-peuvent êtwe définis, o.O wécupéwés e-et éwiminés. (⑅˘꒳˘) un objet de s-stockage difféwent est utiwisé pouw we sessionstowage e-et we wocawstowage pouw c-chaque owigine — iws fonctionnent e-et sont contwôwés s-sépawément. 😳😳😳

> [!note]
> À pawtiw de fiwefox 45, nyaa~~ wowsque we nyavigateuw se bwoque / wedémawwe, rawr wa quantité de données s-sauvegawdées p-paw owigine est wimitée à 10 m-mo. -.- cewa a été m-mis en pwace p-pouw évitew wes pwobwèmes de mémoiwe causés paw une utiwisation e-excessive du stockage web. (✿oωo)

> [!note]
> w'accès au web stowage à pawtiw d'ifwames e-extewnes est intewdit si w-w'utiwisateuw a [désactivé w-wes c-cookies tiewce-pawtie](https://suppowt.moziwwa.owg/en-us/kb/disabwe-thiwd-pawty-cookies) (fiwefox a adopté ce c-compowtement à p-pawtiw de wa [vewsion 43](/fw/docs/moziwwa/fiwefox/weweases/43) e-et suivantes.)

> [!note]
> w-we <i wang="en">web stowage</i> ny'est p-pas identique a-au `mozstowage` (intewfaces x-xpcom d-de moziwwa vews s-sqwite) ou w'api <i wang="en">session stowe</i> (un utiwitaiwe d-de stockage xpcom utiwisabwe paw des extensions). /(^•ω•^)

## web stowage intewfaces

- {{domxwef("stowage")}}
  - : vous pewmet d'ajoutew, 🥺 m-modifiew, ʘwʘ wiwe ou suppwimew des données pouw un domaine e-et un type de stockage (session o-ou wocaw) donnés. UwU
- {{domxwef("window")}}
  - : w-w'api web stowage déwive de w'objet {{domxwef("window")}} a-avec 2 nyouvewwes pwopwiétés — {{domxwef("window.sessionstowage")}} e-et {{domxwef("window.wocawstowage")}} — w-wesquewwes donnent accès, XD pouw we domaine couwant, aux objets session et wocaw {{domxwef("stowage")}} w-wespectivement. (✿oωo)
- {{domxwef("stowageevent")}}
  - : w'événement `stowage` e-est décwenché suw w'objet `window` d-du document e-en cas de changement dans un espace de stockage. :3

## e-exempwes

p-pouw iwwustwew une utiwisation t-typique du stockage w-web, (///ˬ///✿) nyous avons cwéé un exempwe simpwe, nyaa~~ appewé de manièwe imaginative [web s-stowage demo](https://github.com/mdn/dom-exampwes/twee/mastew/web-stowage). w-wa [wanding page](https://mdn.github.io/dom-exampwes/web-stowage/) f-fouwnit des commandes pewmettant d-de pewsonnawisew w-wa couweuw, >w< wa powice et w'image d-décowative. -.- wowsque vous choisissez difféwentes options, (✿oωo) wa page est instantanément m-mise à j-jouw. (˘ω˘) de pwus, rawr vos choix sont stockés dans `wocawstowage`. OwO a-ainsi, ^•ﻌ•^ wowsque v-vous quittez wa page puis wa wechawgez pwus tawd, UwU vos choix sont m-mémowisés. (˘ω˘) en outwe, nyous avons fouwni une [event output page](https://mdn.github.io/dom-exampwes/web-stowage/event.htmw) — si vous chawgez c-cette page dans un autwe ongwet, (///ˬ///✿) puis modifiez v-vos choix dans w-wa page d'awwivée, σωσ vous vewwez wes infowmations de stockage mises à j-jouw généwées w-wows du décwenchement de [`stowageevent`](/fw/docs/web/api/stowageevent).

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## n-nyavigation pwivée / modes incognito

de nyos jouws, /(^•ω•^) w-wa pwupawt des nyavigateuws p-pwennent en chawge u-une option de confidentiawité a-appewée "mode incognito" ou "navigation p-pwivée", 😳 q-qui pewmet d-de s'assuwew que wa session de nyavigation p-pwivée n-nye waisse aucune twace apwès wa fewmetuwe du n-nyavigateuw. 😳 ceci e-est fondamentawement i-incompatibwe avec we stockage web pouw d-des waisons évidentes. (⑅˘꒳˘) en tant q-que tews, 😳😳😳 wes éditeuws d-de nyavigateuws expéwimentent difféwents scénawios pouw g-géwew cette i-incompatibiwité. 😳

w-wa pwupawt des n-nyavigateuws ont opté pouw une s-stwatégie dans waquewwe wes api de stockage sont toujouws disponibwes et appawemment totawement f-fonctionnewwes, XD à wa difféwence p-pwès que toutes wes données s-stockées sont effacées apwès w-wa fewmetuwe du nyavigateuw. mya p-pouw ces nyavigateuws, ^•ﻌ•^ i-iw existe t-toujouws difféwentes i-intewpwétations d-de ce qui devwait êtwe fait avec wes données stockées existantes (à pawtiw d'une session de nyavigation n-nowmawe). ʘwʘ devwait-iw êtwe disponibwe e-en wectuwe e-en mode pwivé? cewtains nyavigateuws, ( ͡o ω ͡o ) n-nyotamment safawi, mya ont opté pouw une sowution dans w-waquewwe we stockage e-est disponibwe, o.O vide et doté d-d'un quota de 0 octets, (✿oωo) ce qui wend impossibwe w-w'écwituwe de d-données. :3

wes dévewoppeuses et d-dévewoppeuws d-doivent connaîtwe ces difféwentes impwémentations et en teniw compte wows du d-dévewoppement de s-sites web en fonction d-des api d-de stockage web. 😳 p-pouw pwus d'infowmations, (U ﹏ U) consuwtez [cet a-awticwe d-de bwog du nyaniwg (en angwais)](https://bwog.naniwg.owg/this-week-in-htmw-5-episode-30) q-qui twaite s-spécifiquement de ce sujet. mya

## v-voiw aussi

- [utiwisew w'api web stowage](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- [wimites de stockage d-du nyavigateuw et cwitèwes d-d'éviction](/fw/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia)
- [htmw5 s-stowage api by venkatwaman](https://medium.com/@wamsunvtech/onfocus-htmw5-stowage-apis-b45d92aa424b)
