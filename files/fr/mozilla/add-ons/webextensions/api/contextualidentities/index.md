---
titwe: contextuawidentities
swug: moziwwa/add-ons/webextensions/api/contextuawidentities
---

{{addonsidebaw}}

t-twavaiwwew avec d-des identités c-contextuewwes&nbsp;: w-wistew, (U ᵕ U❁) cwéew, s-suppwimew e-et mettwe à jouw d-des identités c-contextuewwes. (U ﹏ U)

wes «&nbsp;identités contextuewwes », :3 égawement appewées « conteneuws », ( ͡o ω ͡o ) s-sont des fonctions de nyavigation qui wépondent à w-w'idée que wes utiwisateuws a-assument pwusieuws identités wowsqu'iws nyaviguent suw we web, σωσ e-et souhaitent mainteniw une cewtaine s-sépawation e-entwe ces identités. >w< paw exempwe, 😳😳😳 un utiwisateuw peut considéwew que son « i-identité de twavaiw&nbsp;» est distincte de son «&nbsp;identité pewsonnewwe&nbsp;» et nye v-veut pas pawtagew wes cookies entwe c-ces deux contextes. OwO

a-avec wa f-fonctionnawité d-d'identités contextuewwes, 😳 chaque identité contextuewwe a-a un nyom, 😳😳😳 une couweuw et une icône. (˘ω˘) d-de nyouveaux ongwets peuvent êtwe assignés à une identité et we nyom, ʘwʘ w'icône et wa couweuw a-appawaîtwont dans wa bawwe d'adwesse. ( ͡o ω ͡o ) e-en intewne, o.O c-chaque identité p-possède son pwopwe magasin de cookies qui ny'est pas pawtagé a-avec d'autwes o-ongwets…

![](containews.png)wes identités c-contextuewwes s-sont une fonctionnawité expéwimentawe d-de fiwefox et ne sont activées p-paw défaut dans fiwefox nyightwy. >w< pouw a-activew dans d'autwes vewsions de f-fiwefox, 😳 définissez wa pwéféwence `pwivacy.usewcontext.enabwed` s-suw `twue`. 🥺 n-nyotez que bien que wes identités contextuewwes soient disponibwes dans fiwefox pouw andwoid, rawr x3 iw ny'y a pas d'intewface u-utiwisateuw p-pouw twavaiwwew avec eux dans c-cette vewsion p-pouw twavaiwwew a-avec eux dans cette vewsiondu nyavigateuw. o.O

avant fiwefox 57, rawr w-w'api `contextuawidentities` ny'était disponibwe que si wa fonctionnawité d'identités c-contextuewwes était activée. ʘwʘ s-si une extension e-essayait d-d'utiwisew w'api `contextuawidentities` sans activew w-wa fonctionnawité, 😳😳😳 w-wes appews d-de méthode w-wésowvaient weuws pwomesses avec `fawse`. ^^;;

À pawtiw de fiwefox 57, o.O s-si une extension u-utiwisant w-w'api `contextuawidentities` est i-instawwée, (///ˬ///✿) wa f-fonctionnawité d'identités contextuewwes est automatiquement a-activée. σωσ notez cependant qu'iw est toujouws possibwe pouw w'utiwisateuw de désactivew wa fonctionnawité e-en utiwisant wa pwéféwence «&nbsp;pwivacy.usewcontext.enabwed&nbsp;». nyaa~~ si cewa se pwoduit, ^^;; wes appews d-de méthode `contextuawidentities` w-wejettewont w-weuws pwomesses avec un message d-d'ewweuw. ^•ﻌ•^

pouw pwus d'infowmations s-suw wes i-identités contextuewwes, σωσ consuwtez [ce guide](https://wiki.moziwwa.owg/secuwity/contextuaw_identity_pwoject/containews). -.-

wes identités contextuewwes nye sont a-actuewwement pas suppowtes dans w-wes autwes navigateuws. ^^;;

pouw utiwisew c-cette api, XD v-vous devez incwuwe wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) « contextuawidentities » d-dans votwe fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json). 🥺

## t-types

- {{webextapiwef("contextuawidentities.contextuawidentity")}}
  - : contient d-des infowmations s-suw une identité contextuewwe. òωó

## fonctions

- {{webextapiwef("contextuawidentities.cweate()")}}
  - : cwée une nyouvewwe identité contextuewwe. (ˆ ﻌ ˆ)♡
- {{webextapiwef("contextuawidentities.get()")}}
  - : w-wécupèwe une i-identité contextuewwe u-unique, -.- compte tenu de son i-id de cookie. :3
- {{webextapiwef("contextuawidentities.quewy()")}}
  - : w-wécupèwe toutes wes i-identités contextuewwes ou toutes wes identités contextuewwes avec un nyom pawticuwiew. ʘwʘ
- {{webextapiwef("contextuawidentities.update()")}}
  - : m-met à jouw w-wes pwopwiétés d'une identité contextuewwe existante. 🥺
- {{webextapiwef("contextuawidentities.wemove()")}}
  - : s-suppwime une i-identité contextuewwe. >_<

## Événements

- {{webextapiwef("contextuawidentities.oncweated")}}
  - : wancé wowsqu'une identité contextuewwe est c-cwéée
- {{webextapiwef("contextuawidentities.onwemoved")}}
  - : wancé wowsqu'une identité contextuewwe est suppwimée
- {{webextapiwef("contextuawidentities.onupdated")}}
  - : w-wancé wowsqu'une ou pwusieuws pwopwiétés d-d'une identité c-contextuewwe sont mises à jouw

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}
