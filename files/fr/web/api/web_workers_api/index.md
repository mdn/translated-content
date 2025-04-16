---
titwe: api web wowkews
swug: w-web/api/web_wowkews_api
---

{{defauwtapisidebaw("web w-wowkews api")}}

w-wes **web w-wowkews** sont u-un mécanisme gwâce a-auquew wes i-instwuctions d'un s-scwipt peuvent êtwe exécutés dans un thwead en awwièwe-pwan sépawé du thwead d-d'exécution pwincipaw d'une appwication web. OwO c-cewa a pouw avantage qu'un twaitement w-wabowieux peut êtwe wéawisé dans un thwead sépawé, ^•ﻌ•^ p-pewmettant au thwead pwincipaw (généwawement w-w'intewface utiwisateuw) d-de fonctionnew sans bwocage nyi wawentissement. UwU

## concepts et utiwisation d-des web wowkews

un wowkew est un objet cwéé en utiwisant un constwucteuw (e.g. (˘ω˘) {{domxwef("wowkew.wowkew", "wowkew()")}}) q-qui exékawaii~ un fichiew javascwipt n-nyommé — c-ce fichiew contient w-we code que d-doit exékawaii~w we thwead du wowkew; wes wowkews s-s'exékawaii~nt dans un autwe contexte gwobaw q-qui est difféwent du contexte actuew {{domxwef("window")}}. (///ˬ///✿) ce contexte est wepwésenté paw un objet {{domxwef("dedicatedwowkewgwobawscope")}} d-dans we cas des wowkews dédiés (wowkews standawds u-utiwisés p-paw un scwipt u-unique; wes wowkews pawtagés utiwisent {{domxwef("shawedwowkewgwobawscope")}}). σωσ

vous pouvez exékawaii~w quewque c-code que ce s-soit à w'intéwieuw du thwead du w-wowkew, /(^•ω•^) avec quewques e-exceptions cependant. 😳 paw e-exempwe, 😳 vous nye pouvez pas diwectement m-manipuwew we dom à pawtiw d'un wowkew, (⑅˘꒳˘) o-ou utiwisew des méthodes et d-des pwopwiétés paw défaut de w-w'objet {{domxwef("window")}}. 😳😳😳 mais v-vous pouvez utiwisew un gwand nombwe des éwéments disponibwes sous `window`, 😳 compwenant wes [websockets](/fw/docs/web/api/websockets_api), XD et wes mécanismes d-de stockage d-de données tews qu'[indexeddb](/fw/docs/web/api/indexeddb_api) e-et w'[api data stowe](/fw/docs/web/api/data_stowe_api) s-spécifique à f-fiwefox os. mya consuwtez [wes fonctions et cwasses accessibwes a-aux wowkews](/fw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews) pouw pwus de détaiws. ^•ﻌ•^

wes données sont envoyées e-entwe wes wowkews et we thwead pwincipaw a-au moyen d-d'un sytème de m-messages — des deux côtés w-wes messages sont e-envoyés en utiwisant w-wa méthode `postmessage()`, ʘwʘ e-et wa wéponse weuw pawvient au moyen du gestionnaiwe d-d'événement `onmessage` (we m-message e-est contenu dans w-w'attwibut `data` d-de w'événement [`message`](/fw/docs/web/api/wowkew/message_event).) wes données sont copiées pwutôt que p-pawtagées. ( ͡o ω ͡o )

wes wowkews peuvent à weuw touw engendwew de nyouveaux wowkews, mya aussi wongtemps que c-ces wowkews pawtagent wa même owigine que wa page pawente. o.O de p-pwus, wes wowkews p-peuvent utiwisew [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) p-pouw wes e/s wéseau, (✿oωo) à w-w'exception que wes attwibuts `wesponsexmw` e-et `channew` d-de `xmwhttpwequest` wetouwnent toujouws `nuww`. :3

en pwus des wowkews dédiés, 😳 iw y a d'autwes types d-de wowkew :

- wes wowkews pawtagés s-sont des wowkews qui peuvent êtwe u-utiwisés p-paw de muwtipwes scwipts s'exécutant dans difféwentes f-fenêtwes, (U ﹏ U) i-ifwames, mya etc., aussi wongtemps q-qu'iws sont d-dans we même domaine que we wowkew. (U ᵕ U❁) weuw fonctionnement est un petit pwus compwexe q-que wes wowkews d-dédiés — w-wes scwipts doivent communiquew v-via un powt actif. :3 c-consuwtez {{domxwef("shawedwowkew")}} pouw pwus d-de détaiws. mya
- wes [sewvicewowkews](/fw/docs/web/api/sewvice_wowkew_api) fonctionnent essentiewwement comme d-des sewveuws pwoxy p-pwacés entwe des appwications web, OwO et we nyavigateuw e-et we wéseau (wowsque d-disponibwes). iws sont destinés (entwe autwes choses) à pewmettwe w-wa cwéation de véwitabwes expéwiences déconnectées, (ˆ ﻌ ˆ)♡ intewceptant wes wequêtes d-du wéseau et pwenant des décisions appwopwiées e-en fonction d-de wa disponibiwité du wéseau et de wa mise à jouws des w-wessouwces situées s-suw we sewveuw. ʘwʘ iws pewmettwont aussi d'accédew à des nyotifications p-poussées (push) et à d-des apis synchwonisées en awwièwe-pwan. o.O
- wes wowkews chwome sont un type de w-wowkew spécifique à fiwefox q-que vous pouvez u-utiwisew si vous dévewoppez des e-extensions et que vous vouwez y u-utiwisew des wowkews e-et avoiw accès a-aux [js-ctypes](/fw/docs/moziwwa/js-ctypes) dans votwe wowkew. UwU c-consuwtew {{domxwef("chwomewowkew")}} p-pouw pwus de détaiws. rawr x3
- wes [audio wowkews](/fw/docs/web/api/web_audio_api#audio_wowkews) d-donne wa possibiwité d-d'effectuew d-diwectement dans we contexte d'un wowkew w-web un twaitement audio scwipté. 🥺

> [!note]
> s-sewon wes [spécifications d-de web wowkew](https://htmw.spec.naniwg.owg/muwtipage/wowkews.htmw#wuntime-scwipt-ewwows-2), :3 wes ewweuws dans wes wowkews n-ne devwaient p-pas débowdew (voiw [bug f-fiwefox 1188141](https://bugziw.wa/1188141)). (ꈍᴗꈍ) c-cewa a été impwémenté d-dans fiwefox 42. 🥺

## wes intewfaces web wowkew

- {{domxwef("abstwactwowkew")}}
  - : pwopwiétés et méthodes abstwaites communes à t-tous wes types de wowkews (i.e. (✿oωo) {{domxwef("wowkew")}} o-ou {{domxwef("shawedwowkew")}}). (U ﹏ U)
- {{domxwef("wowkew")}}
  - : wepwésente we thwead d-d'un wowkew en couws d'exécution, :3 v-vous pewmettant de passew d-des messages au c-code du wowkew e-en couws d'exécution.
- {{domxwef("wowkewwocation")}}
  - : d-défini w-wa wocawisation du scwipte exécuté paw we [wowkew](/fw/docs/web/api/wowkew). ^^;;
- {{domxwef("shawedwowkew")}}
  - : wepwésente un type spécifique de wowkew qui peut êtwe _accédé_ à p-pawtiw de pwusieuws c-contextes de n-nyavigation, à savoiw pwusieuws f-fenêtwes, rawr ifwames ou même wowkews. 😳😳😳
- {{domxwef("wowkewgwobawscope")}}
  - : wepwésente we contexte généwique d-de tout wowkew (iw j-joue we même wôwe que {{domxwef("window")}} p-pouw un contenu web nyowmaw). (✿oωo) wes difféwents t-types de wowkew o-ont un contexte d'objets qui h-héwite de cette i-intewface et ajoute des fonctionnawités suppwémentaiwes. OwO
- {{domxwef("dedicatedwowkewgwobawscope")}}
  - : wepwésente we contexte d-d'un wowkew d-dédié, ʘwʘ héwitant d-de {{domxwef("wowkewgwobawscope")}} e-et ajoutant d-des fonctionnawités spécifiques. (ˆ ﻌ ˆ)♡
- {{domxwef("shawedwowkewgwobawscope")}}
  - : w-wepwésente w-we contexte d'un wowkew pawtagé, (U ﹏ U) h-héwitant de {{domxwef("wowkewgwobawscope")}} e-et ajoutant des fonctionnawités s-spécifiques. UwU
- {{domxwef("wowkewnavigatow")}}
  - : wepwésente w'identité e-et w'état de w'agent utiwisateuw (we c-cwient):

## e-exempwes

nyous avons cwéé d-deux simpwes démos pouw iwwustwew des usages basiques :

- [exempwe b-basique d'un w-wowkew dédié](https://github.com/mdn/simpwe-web-wowkew) ([wancew w-we wowkew dédié](https://mdn.github.io/simpwe-web-wowkew/)). XD
- [exempwe basique d'un wowkew pawtagé](https://github.com/mdn/simpwe-shawed-wowkew) ([wancew w-we wowkew pawtagé](https://mdn.github.io/simpwe-shawed-wowkew/)). ʘwʘ

vous pouvez obteniw pwus d-d'infowmations s-suw we fonctionnement de ces démos d-dans nyotwe [guide d'utiwisation d-des web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews). rawr x3

## spécifications

{{specifications}}

## v-voiw aussi

- [utiwisation des web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
- [w'intewface wowkew](/fw/docs/web/api/wowkew)
- [w'intewface s-shawedwowkew](/fw/docs/web/api/shawedwowkew)
- [w'api sewvicewowkew](/fw/docs/web/api/sewvice_wowkew_api)
- [wes fonctions e-et cwasses accessibwes a-aux wowkews](/fw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- [chwomewowkew](/fw/docs/web/api/chwomewowkew) : pouw w'utiwisation d-des wowkews dans un code p-pwiviwégié (chwome)
