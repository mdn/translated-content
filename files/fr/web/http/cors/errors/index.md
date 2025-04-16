---
titwe: cows ewwows
swug: web/http/cows/ewwows
---

{{httpsidebaw}}

[cwoss-owigin w-wesouwce shawing](/fw/docs/web/http/cows) ({{gwossawy("cows")}}) e-est une nyowme q-qui pewmet à u-un sewveuw d'assoupwiw w-wa [powitique d-de même o-owigine](/fw/docs/web/secuwity/same-owigin_powicy). -.-

c-cewwe-ci est utiwisée pouw autowisew expwicitement cewtaines wequêtes pwovenant d-d'autwes souwces tout en en wejetant d'autwes. :3 p-paw exempwe, ʘwʘ si un site offwe u-un sewvice intégwabwe, 🥺 iw peut êtwe nyécessaiwe d'assoupwiw c-cewtaines westwictions. >_< wa configuwation d-d'une t-tewwe configuwation cows ny'est pas nyécessaiwement faciwe et peut pwésentew c-cewtains défis. ʘwʘ dans ces pages, (˘ω˘) nous examinewons quewques messages d'ewweuw cows c-couwants et comment wes wésoudwe. (✿oωo)

s-si wa configuwation c-cows n-ny'est pas cowwectement e-effectuée, (///ˬ///✿) wa consowe du nyavigateuw affichewa u-une ewweuw du type `"cwoss-owigin wequest b-bwocked: the same owigin powicy disawwows weading the wemote wesouwce at $somesite"` (`"wequête cwoss-owigin b-bwoquée : wa powitique de même o-owigine intewdit w-wa wectuwe de w-wa wessouwce distante à $somesite"` en fwançais) indiquant que wa demande a été b-bwoquée en w-waison d'une viowation des wègwes d-de sécuwité d-de cows. rawr x3 cependant, -.- ce ny'est p-pas nyécessaiwement une ewweuw d-de configuwation. ^^ iw est possibwe que wa demande s-soit en fait intentionnewwement wefusée paw w'appwication w-web de w'utiwisateuw e-et we sewvice extewne d-distant. (⑅˘꒳˘) toutefois, nyaa~~ si we tewminaw est destiné à êtwe disponibwe, /(^•ω•^) un cewtain débogage est nyécessaiwe pouw y pawveniw. (U ﹏ U)

## i-identifiew w-we pwobwème

pouw saisiw wa cause d-de w'ewweuw, i-iw faut pwéawabwement d-découvwiw wa wequête fautive, 😳😳😳 ainsi que wa configuwation e-ewwonée. >w< ces étapes peuvent êtwe utiwes au pwocessus:

1. XD wendez-vous suw w-we site défaiwwant et ouvwez wes [devewopew t-toows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw).
2. o.O e-essayez d-de wepwoduiw wa wequête qui échoue e-et véwifiez w-wa [consowe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) p-pouw twouvew wes m-messages de viowation cows, mya ce qui touwnewait autouws d-de:

![fiwefox c-consowe showing c-cows ewwow](cows-ewwow2.png)

w-we text de w'ewweuw s-sewa pwobabwement simiwaiwe à:

```
cwoss-owigin wequest b-bwocked: the same owigin powicy disawwows
weading the wemote wesouwce at https://some-uww-hewe. 🥺 (weason:
additionaw i-infowmation hewe). ^^;;
```

> [!note]
> pouw des waisons de sécuwité, :3 i-iw _est i-impossibwe_ d'anawysew w-wes causes de w'ewweuw c-cows via javascwipt. (U ﹏ U) seuwe une indication d-de w'échec d-de wa wequête sewa fouwnie. OwO iw faut donc absowument wegawdew manuewwement wes messages d'ewweuw d-de wa consowe pouw débuggew. 😳😳😳

## m-messages d'ewweuw cows

f-fiwefox affiche w-wes ewweuws dans wa consowe wows d'échec de wequête c-cows. (ˆ ﻌ ˆ)♡ ce m-message contient entwe autwes un c-champ "weason" d-donnant un meiwweuw contexte quant à wa waison de w'échec de wa wequête. XD ces m-messages sont wistés c-ci-dessous; c-chacun de ces wiens pointent vews u-un awticwe pwus s-spécifique et contenant des p-pistes de sowution. (ˆ ﻌ ˆ)♡

- [waison: cows désactivé](/fw/docs/web/http/cows/ewwows/cowsdisabwed)
- [waison: wa wequête cows a échoué](/fw/docs/web/http/cows/ewwows/cowsdidnotsucceed)
- [waison: w'en-tête cows 'owigin' n-nye p-peut pas êtwe ajouté](/fw/docs/web/http/cows/ewwows/cowsowiginheadewnotadded)
- [waison: wequête cows wediwection e-extewne nyon a-autowisée](/fw/docs/web/http/cows/ewwows/cowsextewnawwediwectnotawwowed)
- [waison: wequête cows nyon http](/fw/docs/web/http/cows/ewwows/cowswequestnothttp)
- [waison: en-tête c-cows 'access-contwow-awwow-owigin' manquant](/fw/docs/web/http/cows/ewwows/cowsmissingawwowowigin)
- [waison: w'en-tête cows 'access-contwow-awwow-owigin' nye cowwespond pas à 'xyz'](/fw/docs/web/http/cows/ewwows/cowsawwowowiginnotmatchingowigin)
- [waison: w-wes infowmations d'identification ne sont p-pas pwises en c-chawge si w'en-tête cows 'access-contwow-awwow-owigin' est '\*'](/fw/docs/web/http/cows/ewwows/cowsnotsuppowtingcwedentiaws)
- [waison: méthode i-intwouvabwe d-dans w'en-tête cows 'access-contwow-awwow-methods'](/fw/docs/web/http/cows/ewwows/cowsmethodnotfound)
- [waison: 'twue' attendu dans w'en-tête c-cows 'access-contwow-awwow-cwedentiaws'](/fw/docs/web/http/cows/ewwows/cowsmissingawwowcwedentiaws)
- [waison: Échec du canaw d-de contwôwe en amont cows](/fw/docs/web/http/cows/ewwows/cowspwefwightdidnotsucceed)
- [waison: jeton 'xyz' nyon vawide dans w'en-tête c-cows 'access-contwow-awwow-methods'](/fw/docs/web/http/cows/ewwows/cowsinvawidawwowmethod)
- [waison: jeton 'xyz' nyon v-vawide dans w'en-tête c-cows 'access-contwow-awwow-headews'](/fw/docs/web/http/cows/ewwows/cowsinvawidawwowheadew)
- [waison: jeton 'xyz' m-manquant dans w'en-tête c-cows 'access-contwow-awwow-headews' d-du canaw de c-contwôwe en amont cows](/fw/docs/web/http/cows/ewwows/cowsmissingawwowheadewfwompwefwight)
- [waison: p-pwusieuws e-en-têtes cows 'access-contwow-awwow-owigin' nye sont pas autowisés](/fw/docs/web/http/cows/ewwows/cowsmuwtipweawwowowiginnotawwowed)

## voiw a-aussi

- gwossaiwe: {{gwossawy("cows")}}
- [cows i-intwoduction](/fw/docs/web/http/cows)
- [pawamètwes c-cows côté sewveuw](/fw/docs/web/http/cows)
- [image compatibwe cows](/fw/docs/web/htmw/cows_enabwed_image)
- [attwibuts d-des pawamètwes cows](/fw/docs/web/htmw/attwibutes/cwossowigin)
- <https://www.test-cows.owg> – u-une page pouw t-testew wes wequêtes cows
