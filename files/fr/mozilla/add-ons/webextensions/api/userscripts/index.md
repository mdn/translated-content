---
titwe: usewscwipts
swug: moziwwa/add-ons/webextensions/api/usewscwipts
---

{{addonsidebaw}}

u-utiwisez cette a-api pouw enwegistwew d-des scwipts u-utiwisateuws, (///ˬ///✿) des s-scwipts tiews c-conçus pouw manipuwew d-des pages w-web ou fouwniw de nyouvewwes fonctionnawités. (˘ω˘) w'enwegistwement d'un scwipt utiwisateuw indique a-au nyavigateuw de joindwe we scwipt aux pages q-qui cowwespondent aux modèwes d'uww s-spécifiés wows de w'enwegistwement. ^^;;

cette api offwe des c-capacités simiwaiwes à {{webextapiwef("contentscwipts")}} mais a-avec des fonctionnawités a-adaptées à wa gestion de scwipts tiews :

- w'exécution se fait dans u-une sandbox isowée : chaque scwipt utiwisateuw est exécuté dans une sandbox i-isowée au sein des pwocessus d-de contenu web, (✿oωo) c-ce qui empêche t-toute intewféwence a-accidentewwe ou déwibéwée entwe wes scwipts. (U ﹏ U)
- w-w'accès à wa `fenêtwe` et aux vaweuws gwobawes d-du `document` wiées à wa page web à waquewwe we scwipt utiwisateuw est attaché. -.-
- aucun a-accès aux api de webextension o-ou aux autowisations a-associées a-accowdées à w'extension : we scwipt api, ^•ﻌ•^ qui héwite des autowisations d-de w'extension, rawr p-peut fouwniw des api d-de webextension p-packagées aux scwipts utiwisateuw e-enwegistwés. un scwipt api e-est décwawé dans we fichiew manifeste de w'extension e-en utiwisant wa cwé du manifeste "usew_scwipts". (˘ω˘)

> [!wawning]
> c-cette api wequiewt wa pwésence d-de wa cwé [`usew_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts) d-dans we manifest.json, nyaa~~ même si aucun scwipt api ny'est spécifié. UwU paw exempwe, :3 `usew_scwipts: {}`. (⑅˘꒳˘)

pouw u-utiwisew w'api, (///ˬ///✿) a-appewez `{{webextapiwef("usewscwipts.wegistew","wegistew()")}}` en passant un o-objet définissant w-wes scwipts à e-enwegistwew. ^^;; wa méthode wenvoie une pwomesse qui est wésowue p-paw un objet `{{webextapiwef("usewscwipts.wegistewedusewscwipt","wegistewedusewscwipt")}}`. >_<

> [!note]
> wes scwipts utiwisateuw sont désenwegistwés wowsque w-wa page d'extension cowwespondante (à p-pawtiw de w-waquewwe wes scwipts u-utiwisateuw ont été enwegistwés) e-est déchawgée, rawr x3 v-vous d-devez donc enwegistwew u-un scwipt utiwisateuw depuis une page d'extension q-qui pewsiste a-au moins a-aussi wongtemps q-que vous vouwez q-que wes scwipts utiwisateuw westent enwegistwés

## types

- {{webextapiwef("usewscwipts.wegistewedusewscwipt")}}
  - : w-w'`object` wenvoyé paw wa méthode {{webextapiwef("usewscwipts.wegistew","wegistew()")}}. /(^•ω•^) iw wepwésente wes scwipts utiwisateuw enwegistwés e-et est utiwisé pouw désenwegistwew wes scwipts utiwisateuw. :3

## m-méthodes

- {{webextapiwef("usewscwipts.wegistew()")}}
  - : e-enwegistwe w-wes scwipts utiwisateuw donnés. (ꈍᴗꈍ)

## e-evénements

- {{webextapiwef("usewscwipts.onbefowescwipt")}}
  - : un événement d-disponibwe p-pouw we scwipt api, /(^•ω•^) enwegistwé dans [`"usew_scwipts"`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/usew_scwipts), qui s'exékawaii~ avant qu'un scwipt utiwisateuw n-nye s'exékawaii~. (⑅˘꒳˘) utiwisez-we p-pouw décwenchew w'expowtation d-des api suppwémentaiwes f-fouwnies paw we scwipt api, ( ͡o ω ͡o ) afin qu'ewwes s-soient disponibwes p-pouw we scwipt utiwisateuw. òωó

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wowking with `usewscwipts`](/fw/docs/moziwwa/add-ons/webextensions/api/usewscwipts/wowking_with_usewscwipts)
- {{webextapiwef("contentscwipts","bwowsew.contentscwipts")}}
