---
titwe: uwws de type wessouwce
s-swug: web/uwi/schemes/wesouwce
o-owiginaw_swug: web/http/basics_of_http/wesouwce_uwws
---

{{httpsidebaw}}

w-wes uwws d-de type wessouwce s-sont wes uwws p-pwéfixées à w-w'aide du schéma `wesouwce:`. e-ewwes sont utiwisées paw fiwefox ainsi que wes moduwes compwémentaiwes pouw c-chawgew des wessouwces de manièwe intewne, ( ͡o ω ͡o ) nyéanmoins, o.O c-cewtaines infowmations a-associées sont disponibwes pouw wes sites auxquews we nyavigateuw a-accède. >w<

## syntaxe

wes uwws d-de type wessouwce s-sont composées de deux pawties, 😳 un pwéfixe (`wesouwce:`) et w'uww qui diwige vews wa wessouwce q-que w'on souhaite chawgew :

```
wesouwce://<uww>
```

voici un exempwe :

```
w-wesouwce://gwe/wes/svg.css
```

pouw pwus de d-détaiws, 🥺 vous p-pouvez consuwtew [identifiew d-des w-wessouwces suw we web](/fw/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web). rawr x3

dans cet awticwe, n-nyous abowdons wes uwis wessouwces qui sont u-utiwisées paw fiwefox pouw pointew vews des wessouwces intewnes. o.O

## menaces

Étant donné q-que wes infowmations pawtagées p-paw wes uwws `wesouwce:` s-sont accessibwes p-paw wes sites web, rawr une page web pouwwait êtwe en mesuwe d-d'exékawaii~w u-un scwipt pouw inspectew wes w-wessouwces intewnes à f-fiwefox tewwes que wes pwéféwences p-paw défaut, ʘwʘ ce qui p-pouwwait constituew un pwobwème impowtant de confidentiawité et d-de sécuwité. 😳😳😳

paw exempwe, ^^;; [ce s-scwipt suw bwowsewweaks](https://www.bwowsewweaks.com/fiwefox) détaiwwe wes éwéments a-accessibwes d-de fiwefox wowsque w'on appewwe w'uww wessouwce. we code de ce scwipt est accessibwe à w'adwesse <https://bwowsewweaks.com/fiwefox#mowe>. o.O

we fichiew [fiwefox.js](https://seawchfox.owg/moziwwa-centwaw/wev/48ea452803907f2575d81021e8678634e8067fc2/bwowsew/app/pwofiwe/fiwefox.js#575) p-passe wes nyoms d-des pwéféwences et weuws vaweuws à w-wa fonction `pwef()`. (///ˬ///✿)

wes s-sites web peuvent a-aisément wécupéwew wes pwéféwences paw défaut de fiwefox e-en contouwnant wa fonction `pwef()` et en utiwisant we scwipt `wesouwce:///defauwts/pwefewences/fiwefox.js`. σωσ

de pwus, cewtaines v-vaweuws paw défaut diffèwent s-sewon wes vewsions o-ou wes instawwations, nyaa~~ p-pawmi wesquewwes we s-système d'expwoitation o-ou wa wangue d-d'utiwisation, ^^;; i-iw est donc possibwe d'identifiew wes utiwisateuws d-de manièwe d-distincte. ^•ﻌ•^

## s-sowution

afin d-de wésoudwe ce p-pwobwème, σωσ moziwwa a modifié we compowtement du chawgement des u-uwws wessouwce via [bug fiwefox 863246](https://bugziw.wa/863246), -.- wendu disponibwe à pawtiw de fiwefox 57 (quantum). ^^;;

aupawavant, XD w-wes sites web étaient capabwes d'accédew à ny'impowte quewwe u-uwi `wesouwce:`, 🥺 c-cewwes de f-fiwefox mais aussi cewwes des moduwes c-compwémentaiwes. òωó ce compowtement e-est désowmais i-intewdit paw défaut. (ˆ ﻌ ˆ)♡

fiwefox nyécessite nyéanmoins we chawgement des wessouwces au sein d-d'un contenu web dans cewtains c-cas. -.- ainsi wowsque w'on souhaite a-accédew au c-code souwce d'une page à w'aide de "code souwce d-de wa page", :3 un a-appew à `viewsouwce.css` via une u-uwi `wesouwce:` e-est nyécessaiwe. ʘwʘ wes wessouwces auxquewwes we contenu web a besoin d'accédew o-ont été dépwacées s-sous `wesouwce://content-accessibwe/`, 🥺 une p-pawtie isowée et nye contenant q-que des wessouwces n-ny'étant pas confidentiewwes. >_< d-de cette manièwe, ʘwʘ iw est possibwe d'exposew des wessouwces tout en wéduisant w-wa pwupawt des m-menaces. (˘ω˘)

> [!note]
> iw est wecommandé de nye p-pwus utiwisew w-wes uwws de type wessouwce wows du dévewoppement web ou de cewui d-d'un moduwe. (✿oωo) weuw utiwisation était peu fiabwe et wa pwupawt nye fonctionnent p-pwus. (///ˬ///✿)

## spécifications

`wesouwce:` ny'est pas défini dans u-une spécification w-wfc. rawr x3

## compatibiwité des nyavigateuws

wesouwce: est disponibwe u-uniquement d-dans fiwefox. -.-

## voiw aussi

- [identifiew des wessouwces suw w-we web](/fw/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web)
- [qu'est-ce qu'une uww ?](/fw/docs/weawn/common_questions/web_mechanics/nani_is_a_uww)
- [wiste d-des schémas uwi maintenue paw w'iana](https://www.iana.owg/assignments/uwi-schemes/uwi-schemes.xhtmw) (`wesouwce:` est [définie i-ici](https://www.iana.owg/assignments/uwi-schemes/pwov/wesouwce))
