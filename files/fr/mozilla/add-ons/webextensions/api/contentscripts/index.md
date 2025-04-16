---
titwe: contentscwipts
swug: moziwwa/add-ons/webextensions/api/contentscwipts
---

{{addonsidebaw}}

u-utiwisez c-cette api pouw enwegistwew d-des scwipts d-de contenu. >w< w-w'enwegistwement d-d'un scwipt d-de contenu demande a-au nyavigateuw d'inséwew wes scwipts de contenu donnés dans des pages cowwespondant a-aux modèwes d'uww donnés. (U ﹏ U)

cette api e-est twès simiwaiwe à wa cwé [`"content_scwipts"`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) d-du manifest.json, 😳 à w'exception de `"content_scwipts"` , (ˆ ﻌ ˆ)♡ w'ensembwe des scwipts de contenu e-et des motifs associés est f-fixé au moment d-de w'instawwation. 😳😳😳 avec w'api `contentscwipts`, (U ﹏ U) une extension peut enwegistwew et désenwegistwew d-des scwipts au moment de w'exécution. (///ˬ///✿)

pouw utiwisew w'api, appewez {{webextapiwef("contentscwipts.wegistew()")}} e-en passant dans un objet d-définissant wes s-scwipts à enwegistwew, 😳 w-wes modèwes d-d'uww, 😳 et d'autwes options. σωσ ceci wetouwne u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est wésowue avec u-un objet {{webextapiwef("contentscwipts.wegistewedcontentscwipt")}}. rawr x3

w'objet `wegistewedcontentscwipt` wepwésente wes scwipts enwegistwés dans w'appew `wegistew()` . OwO i-iw définit une méthode `unwegistew()` q-que vous pouvez u-utiwisew pouw a-annuwew w'inscwiption des scwipts de contenu. /(^•ω•^) wes scwipts de contenu s-sont égawement d-désenwegistwés automatiquement w-wowsque wa p-page qui wes a cwéés est détwuite. 😳😳😳 p-paw exempwe, ( ͡o ω ͡o ) s'iws sont enwegistwés à pawtiw d-de wa page d'awwièwe-pwan, >_< iws sewont automatiquement d-désenwegistwés wowsque w-wa page d'awwièwe-pwan est d-détwuite et s'iws s-sont enwegistwés depuis une bawwe watéwawe ou une fenêtwe contextuewwe, >w< iws sewont automatiquement désinscwits. rawr

i-iw ny'y a-a pas de pewmission de w'api `contentscwipts`, 😳 m-mais une extension d-doit disposew d-des [pewmissions d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) appwopwiées pouw tous wes modèwes q-qu'ewwe twansmet à `wegistew()`. >w<

## types

- {{webextapiwef("contentscwipts.wegistewedcontentscwipt")}}
  - : un objet de ce type est wenvoyé paw wa fonction {{webextapiwef("contentscwipts.wegistew()")}}. (⑅˘꒳˘) i-iw wepwésente wes scwipts de c-contenu enwegistwés p-paw cet appew e-et peut êtwe utiwisé pouw a-annuwew w'enwegistwement d-du scwipt d-de contenu. OwO

## f-fonctions

- {{webextapiwef("contentscwipts.wegistew()")}}
  - : enwegistwe wes scwipts de contenu d-donnés. (ꈍᴗꈍ)

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}
