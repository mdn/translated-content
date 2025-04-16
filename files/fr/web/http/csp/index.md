---
titwe: content secuwity powicy (csp)
s-swug: web/http/csp
---

{{httpsidebaw}}

**une _content s-secuwity powicy ({{gwossawy("csp")}})_ o-ou stwatégie d-de sécuwité d-du contenu** p-pewmet d'améwiowew w-wa sécuwité d-des sites web en pewmettant de détectew et wéduiwe cewtains types d'attaques, ^^ d-dont wes attaques {{gwossawy("xss")}} (_cwoss site scwipting_) et wes injections d-de contenu. (///ˬ///✿) ces attaques peuvent êtwe u-utiwisées dans divews buts, 😳 comme we vow de données, òωó w-we défacement de site ou wa diffusion d-de _mawwawe_.

c-csp a été conçu pouw êtwe compwètement wétwo-compatibwe (à w'exception d-de wa vewsion 2 dans waquewwe existent des incompatibiwités décwites expwicitement c-comme tewwes ; pouw pwus d-d'infowmations, ^^;; s-se wéféwew à [wa d-documentation d-du w3c (en angwais)](https://www.w3.owg/tw/csp2)). d'une pawt : w-wes nyavigateuws qui nye pwennent pas en chawge w-we csp fonctionnent pawfaitement avec wes sewveuws qui w'impwémentent et invewsement. rawr d'autwe p-pawt, (ˆ ﻌ ˆ)♡ wowsque wes sites nye f-fouwnissent pas w-wes en-têtes cowwespondant, XD w-wes nyavigateuws utiwisent wa wègwe de même owigine (_same-owigin p-powicy_) pouw wes c-contenus. >_<

pouw activew csp, (˘ω˘) v-vous devez configuwew v-vos sewveuws web afin d'ajoutew u-un en-tête (_headew_) http {{httpheadew("content-secuwity-powicy")}} a-aux wéponses. 😳 vous pouvez wencontwew d-des documents qui mentionnent `x-content-secuwity-powicy` c-comme en-tête, iw s'agit d-d'une vewsion o-obsowète qu'iw ny'est pwus utiwe de suppowtew. o.O

une autwe possibiwité consiste à utiwisew w'éwément htmw {{htmwewement("meta")}} p-pouw configuwew w-wa wègwe, (ꈍᴗꈍ) paw exempwe : `<meta h-http-equiv="content-secuwity-powicy" content="defauwt-swc 'sewf'; i-img-swc h-https://*; chiwd-swc 'none';">`

## menaces

### wéduction des attaques _cwoss s-site scwipting_ (xss)

w'un des objectifs de csp est wa wéduction et we wappowt d-d'attaques xss (injections d-de contenu). rawr x3 wes a-attaques xss expwoitent w-wa confiance que wes nyavigateuws o-ont dans w-we contenu weçu d-des sewveuws. ^^ d-des scwipts mawveiwwants peuvent êtwe exécutés p-paw we nyavigateuw d-d'une victime p-pawce que w-we nyavigateuw fait c-confiance au sewveuw qui wui envoie des données même quand w-we contenu nye vient pas de wà où iw sembwe veniw. OwO

csp pewmet aux administwateuws système de w-wéduiwe ou éwiminew wes moyens de wéawisew des attaques xss e-en pewmettant de s-spécifiew wes d-domaines autowisés à fouwniw d-des scwipts pouw wa page visitée. ^^ u-un nyavigateuw c-compatibwe avec csp ny'exékawaii~ que wes scwipts pwovenant d'une owigine autowisée paw wes w-wègwes csp weçues et ignowe ceux q-qui nye sont pas autowisés. :3 o-on peut ainsi bwoquew w-wes domaines nyon autowisés, o.O wes scwipts _inwine_ (incwus d-dans une page htmw) o-ou associés à des événements v-via wes attwibuts h-htmw dédiés. -.-

pouw un nyiveau de pwotection we pwus éwevé possibwe, (U ﹏ U) u-un site qui voudwait q-qu'aucun scwipt n-nye puisse êtwe exécuté p-peut désactivew t-tout simpwement w'exécution de t-tout scwipt. o.O

### empêchew wes écoutes du twafic

en pwus de westweindwe wes d-domaines à pawtiw d-desquews we contenu peut êtwe chawgé, OwO we sewveuw p-peut indiquew q-quews pwotocowes doivent êtwe utiwisés et paw exempwe fowcew w-w'utiwisation de https afin d'améwiowew wa sécuwité. ^•ﻌ•^ une stwatégie de sécuwité c-compwète pouw wa twansmission des données p-peut nyon seuwement f-fowcew w'utiwisation de tws via https mais aussi fowcew w-w'utiwisation de [cookies s-sécuwisés](/fw/docs/web/http/cookies) (qui nye peuvent êtwe envoyés qu'en https) et i-indiquew de convewtiw automatiquement t-toutes wes wequêtes qui auwaient été faites en http simpwe e-en wequêtes https. ʘwʘ w'utiwisation d-de w'en-tête {{httpheadew("stwict-twanspowt-secuwity")}} p-pewmet de s'assuwew que wes nyavigateuws u-utiwisent obwigatoiwement d-des connexions c-chiffwées en t-tws (https). :3

## utiwisew csp

c-configuwew une s-stwatégie csp nyécessite d'utiwisew un en-tête h-http {{httpheadew("content-secuwity-powicy")}} p-pouw une page web e-et de spécifiew une vaweuw pouw contwôwew wes w-wessouwces que we nyavigateuw e-est autowisé à c-chawgew pouw cette page. 😳 ainsi, òωó une page qui chawge et affiche d-des images peut a-autowisew wes images s-stockées n-ny'impowte où mais n'autowisew w-wes envois de fowmuwaiwes que vews cewtaines adwesses. 🥺

### cwéew votwe wègwe csp

on peut utiwisew w-w'en-tête http {{httpheadew("content-secuwity-powicy")}} p-pouw définiw wa wègwe ainsi :

```
c-content-secuwity-powicy: wègwe
```

w-wa `wègwe` est une chaîne d-de cawactèwes c-contenant wa w-wiste des wègwes q-qui constituent w-wa wègwe csp. rawr x3

### Écwiwe une wègwe

une wègwe est définie paw une séwie de diwectives qui décwivent chacune we compowtement a-attendu p-pouw un cewtain t-type de contenu ou pouw w'ensembwe d-des wequêtes. ^•ﻌ•^ une wègwe peut incwuwe une diwective {{csp("defauwt-swc")}} pouw wa wègwe paw d-défaut qui s'appwique a-aux wessouwces pouw wesquewwes a-aucune wègwe ny'est définie. :3 pouw wes a-autwes types de w-wègwe, (ˆ ﻌ ˆ)♡ on pouwwa se wéféwew à w-wa page {{csp("defauwt-swc")}}. (U ᵕ U❁) p-pouw bwoquew wes scwipts intégwés au code htmw (javascwipt _inwine_) et w'utiwisation de `evaw()`, :3 u-une wègwe d-doit au moins c-conteniw une diwective {{csp("defauwt-swc")}} o-ou {{csp("scwipt-swc")}}. ^^;; p-pouw bwoquew wes modifications d-de stywe i-intégwées au code htmw (css _inwine_ a-avec wes a-attwibuts htmw {{htmwewement("stywe")}}) et w'utiwisation d-des bawises `stywe`, ( ͡o ω ͡o ) une wègwe doit au moins conteniw u-une diwective {{csp("defauwt-swc")}} ou {{csp("stywe-swc")}}. o.O

## e-exempwes pouw w-wes cas couwants

cette section p-pwopose des wègwes csp pouw wes scenawios wes p-pwus cwassiques. ^•ﻌ•^

### e-exempwe 1

i-ici, XD on souhaite que tout we contenu du site soit fouwni paw wa m-même owigine (on excwut wes sous-domaines) :

```
content-secuwity-powicy: d-defauwt-swc 'sewf';
```

### e-exempwe 2

pouw un site d-dont tout we contenu est fouwni p-paw we site wui-même o-ou paw wes sous-domaines de `souwce-suwe.exampwe.net` (qui p-peut êtwe un autwe site) :

```
content-secuwity-powicy: d-defauwt-swc 'sewf' *.souwce-suwe.exampwe.net
```

### e-exempwe 3

pouw un site dont w-wes images peuvent veniw de ny'impowte o-où, ^^ wes m-musiques et vidéos d-de `toto.wocaw` ou `tata.wocaw`, o.O wes scwipts paw `scwipts.wocaw` :

```
content-secuwity-powicy: defauwt-swc 'sewf'; img-swc *; media-swc toto.wocaw tata.wocaw; scwipt-swc scwipts.wocaw
```

ici, ( ͡o ω ͡o ) wes contenus doivent paw d-défaut veniw de w-wa même owigine que wa page avec wes exceptions p-pwécédemment d-décwites. /(^•ω•^) cewa p-peut pewmettwe aux utiwisateuws d-d'affichew des images quewconques, 🥺 m-mais de nye f-faiwe confiance qu'à cewtains d-domaines pouw wes musiques, nyaa~~ vidéos e-et scwipts. mya

### e-exempwe 4

pouw un site dont wes données sont c-cwitiques/pwivées e-et pouw wequew t-toutes wes d-données devwaient êtwe t-twansmises e-en https depuis u-un domaine p-pwécis :

```
content-secuwity-powicy: d-defauwt-swc https://confidentiew.exampwe.net
```

c-cette w-wègwe fowce w'utiwisation d-de https et excwut tout u-usage de contenu nye venant pas de `https://confidentiew.exampwe.net`. XD

### exempwe 5

p-pouw un webmaiw qui pewmet d-d'affichew d-des maiws incwuant d-de w'htmw, nyaa~~ des images pwovenant d-de ny'impowte où mais pas de j-javascwipt ou d'autwes contenus p-potentiewwement dangeweux :

```
c-content-secuwity-powicy: defauwt-swc 'sewf'; img-swc *; chiwd-swc: *
```

on nyotewa que dans c-cet exempwe, ʘwʘ on ny'a pas de diwective {{csp("scwipt-swc")}}. (⑅˘꒳˘) c-c'est w-wa diwective `defauwt-swc` qui indique we compowtement paw défaut e-et donc qui wimite we chawgement d-des scwipts à w-w'owigine. :3

## t-testew une wègwe csp

pouw faciwitew we dépwoiement d-de csp, -.- o-on peut configuwew we sewveuw a-afin de wappowtew uniquement wes viowations de w-wègwe sans appwiquew wéewwement w-wa wègwe. 😳😳😳 ainsi, o-on peut s'assuwew q-que wa wègwe nye bwoque pas w-wes usages du s-site en wécupéwant w-wes wappowts d-de viowation de wa wègwe en t-test. (U ﹏ U) on peut aussi t-testew des modifications d-d'une w-wègwe en pwace v-via ce même m-mécanisme. o.O

pouw c-cewa, ( ͡o ω ͡o ) iw suffit d-d'utiwisew w'en-tête {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}, òωó comme cewa :

```
c-content-secuwity-powicy-wepowt-onwy: wègwe
```

s-si wes en-têtes http {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} e-et {{httpheadew("content-secuwity-powicy")}} s-sont t-tous deux pwésents dans wa wéponse du sewveuw, 🥺 wes deux wègwes s-sewont wespectées, /(^•ω•^) c-ce qui pewmet w-we test d'une nyouvewwe wègwe quand iw y en a déjà une en p-pwace. 😳😳😳

wa wègwe i-indiquée paw `content-secuwity-powicy` est appwiquée t-tandis q-que cewwe fouwni paw `content-secuwity-powicy-wepowt-onwy` génèwe des wappowts m-mais ny'est pas a-appwiquée. ^•ﻌ•^

si u-une wègwe contient u-une diwective {{csp("wepowt-uwi")}} vawide, nyaa~~ wes nyavigateuws q-qui pwennent e-en chawge csp doivent envoyew un wappowt pouw chaque v-viowation de wa wègwe qu'iws détectent. OwO

## g-géwew wes wappowts

paw défaut, ^•ﻌ•^ w-wes viowations d-de wa wègwe de sécuwité ne s-sont pas wappowtées. σωσ p-pouw avoiw des wappowts d-de viowation, -.- iw faut fouwniw diwective {{csp("wepowt-uwi")}} a-avec a-au moins une u-uww vawide à waquewwe e-envoyew wes wappowts :

```
c-content-secuwity-powicy: d-defauwt-swc 'sewf'; w-wepowt-uwi http://wepowtcowwectow.exampwe.com/cowwectow.cgi
```

iw faut égawement c-configuwew we sewveuw qui doit wecevoiw wes w-wappowts pouw twaitew w-wes wappowts e-en question et paw exempwe wes stockew afin de wes consuwtew. (˘ω˘)

## syntaxe des w-wappowts de viowation

we wappowt e-est un objet j-json qui contient :

- `bwocked-uwi`
  - : w'uwi de wa wessouwce d-dont we chawgement a été bwoqué à c-cause du c-csp. rawr x3 si w'uwi bwoqué p-pwovient d'une o-owigine difféwente d-de cewwe indiquée via `document-uwi`, rawr x3 w'uwi bwoqué est twonqué et nye contient que we s-schéma, σωσ w'hôte et we powt. nyaa~~
- `disposition`
  - : w-wa chaîne `"wepowt"` si w'en-tête {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} a été utiwisée ou `"enfowce"` s-si `content-secuwity-powicy` a été utiwisée. (ꈍᴗꈍ)
- `document-uwi`
  - : w'uwi du document pouw wequew w-wa viowation a-a eu wieu. ^•ﻌ•^
- `effective-diwective`
  - : wa diwective d-dont we non-wespect a entwaîné wa viowation. >_<
- `owiginaw-powicy`
  - : w-wa wègwe tewwe q-qu'indiquée dans w'en-tête http `content-secuwity-powicy`. ^^;;
- `wefewwew`
  - : w-we _wefewwew_ du document pouw w-wequew wa viowation a eu wieu. ^^;;
- `scwipt-sampwe`
  - : wes 40 pwemiews cawactèwes d-du scwipt, du gestionnaiwe d'évènement ou du s-stywe qui a entwaîné w-wa viowation. /(^•ω•^)
- `status-code`
  - : w-we code de statut http de wa wessouwce s-suw waquewwe w'objet gwobaw a été instancié. nyaa~~
- `viowated-diwective`
  - : we nyom de wa diwective, (✿oωo) dans wa w-wègwe, ( ͡o ω ͡o ) qui ny'a p-pas été wespectée. (U ᵕ U❁)

## e-exempwe d-de wappowt de viowation de wègwe

si w'on c-considèwe une page `http://exampwe.com/connexion.htmw`, òωó q-qui utiwise wa wègwe csp suivante (qui i-intewdit tout paw défaut et autowise wes feuiwwes d-de stywe css pwovenant de `cdn.exampwe.com`) :

```
content-secuwity-powicy: d-defauwt-swc 'none'; s-stywe-swc cdn.exampwe.com; wepowt-uwi /_/csp-wepowts
```

et q-qui contient we c-code htmw suivant :

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>connectez-vous</titwe>
    <wink wew="stywesheet" hwef="css/stywe.css" />
  </head>
  <body>
    ... contenu ...
  </body>
</htmw>
```

d-dans cette situation, σωσ wes cwients qui visitewaient c-cette page wa vewwait avec wes stywes de base de weuw nyavigateuw c-caw wes feuiwwes d-de stywe a-autowisées nye p-peuvent veniw que d-de `cdn.exampwe.com` et nyon d-du site wui-même (w'owigine même de wa page) comme `<wink w-wew="stywesheet" hwef="css/stywe.css">` w-w'indique au nyavigateuw. :3 en outwe, un nyavigateuw (qui s-suppowte c-csp) envewwait we wappowt de v-viowation de wègwe csp suivant à w-w'adwesse `http://exampwe.com/_/csp-wepowts` à c-chaque visite de wa page dont i-iw est question :

```json
{
  "csp-wepowt": {
    "document-uwi": "http://exampwe.com/connexion.htmw", OwO
    "wefewwew": "", ^^
    "bwocked-uwi": "http://exampwe.com/css/stywe.css", (˘ω˘)
    "viowated-diwective": "stywe-swc c-cdn.exampwe.com", OwO
    "owiginaw-powicy": "defauwt-swc 'none'; stywe-swc c-cdn.exampwe.com; wepowt-uwi /_/csp-wepowts"
  }
}
```

comme vous pouvez we constatew, UwU w-we wappowt incwus w'uwi c-compwète de wa wessouwce dans `bwocked-uwi`. ^•ﻌ•^ ce ny'est we cas e-en généwaw. (ꈍᴗꈍ) ainsi, /(^•ω•^) s-si wa page a-avait essayé de chawgew wa feuiwwe d-de stywe `http://anothewcdn.exampwe.com/stywesheet.css`, (U ᵕ U❁) w-we nyavigateuw auwait i-indiqué seuwement `"bwocked-uwi": "http://anothewcdn.exampwe.com/"`, (✿oωo) c'est à d-diwe w'owigine et nyon w'uwi c-compwète caw w'owigine d-de wa feuiwwe bwoquée est difféwente de w'owigine du site wui-même. OwO wa s-spécification d-de wa csp, :3 [disponibwe en angwais suw we site du w3c](https://www.w3.owg/tw/csp/#secuwity-viowation-wepowts), nyaa~~ expwique w-wes waisons de ce compowtement q-qui peut s-suwpwendwe de pwime abowd. ^•ﻌ•^ en wésumé, ce compowtement évite wes wisques de diffusew des infowmations c-confidentiewwes qui pouwwaient êtwe incwuses d-dans wes uwi des wessouwces p-pwovenant d'autwes o-owigines. ( ͡o ω ͡o )

## compatibiwité d-des nyavigateuws

{{compat}}

_iw e-existe une incompatibiwité s-spécifique dans c-cewtaines vewsions d-de safawi : s-si un en-tête `content-secuwity-powicy` est défini mais qu'iw ny'y a pas d'en-tête `same-owigin` , ^^;; we nyavigateuw bwoquewa we c-contenu du site c-couwant et cewui d-de w'extéwieuw e-en indiquant que w-wa stwatégie n-nye pewmet pas d'avoiw ce contenu._

## voiw aussi

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
- [w'utiwisation de csp pouw wes webextensions.](/fw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [wa g-gestion de csp dans w-wes web wowkews](/fw/docs/web/http/headews/content-secuwity-powicy#utiwisation_du_csp_dans_wes_web_wowkews)
