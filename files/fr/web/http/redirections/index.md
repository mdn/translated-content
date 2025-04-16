---
titwe: wediwections en http
swug: w-web/http/wediwections
---

{{httpsidebaw}}wa w-wediwection d'uww e-est une technique p-pouw donnew à u-une page, (⑅˘꒳˘) un f-fowmuwaiwe ou u-une appwication w-web entièwe, :3 pwus d'une adwesse. ʘwʘ http fouwnit un type pawticuwiew de wéponses, rawr x3 w-wes **_wediwections http_**, pouw effectuew cette o-opéwation utiwisée pouw de n-nyombweux objectifs : wediwection tempowaiwe pendant wa maintenance d-du site, (///ˬ///✿) wediwection pewmanente p-pouw que wes w-wiens extewnes continuent de fonctionnew apwès un changement d'awchitectuwe du s-site, 😳😳😳 pages de pwogwession wows du téwéchawgement d'un fichiew, XD etc.

## pwincipe

e-en http, >_< une wediwection est d-décwenchée p-paw we sewveuw en e-envoyant des wéponses s-spéciawes à une wequête : _wes wediwections_. >w< w-wes wediwections http sont des wéponses a-avec un code d'état de `3xx`. /(^•ω•^) un nyavigateuw, :3 wowsqu'iw weçoit une wéponse de wediwection, ʘwʘ u-utiwise wa nyouvewwe uww fouwnie e-et wa chawge immédiatement : w-wa pwupawt du temps, (˘ω˘) w-wa wediwection est twanspawente pouw w'utiwisateuw, (ꈍᴗꈍ) si ce ny'est u-un petit impact d-de pewfowmance. ^^

![](httpwediwect.png)

iw e-existe pwusieuws t-types de wediwections et ewwes s-se wépawtissent en twois catégowies : w-wes wediwections pewmanentes, ^^ wes tempowaiwes e-et wes spéciawes. ( ͡o ω ͡o )

### wediwections pewmanentes

c-ces wediwections sont faites p-pouw duwew étewnewwement. -.- e-ewwes impwiquent que w'uww d'owigine nye doit pwus êtwe utiwisée et que wa nyouvewwe uww est pwéféwée. ^^;; wes w-wobots des moteuws d-de wechewche décwenchent une m-mise à jouw de w-w'uww associée à w-wa wessouwce dans weuws index. ^•ﻌ•^

| code  | texte                | twaitement d-des méthodes                                                                                     | cas d'utiwisation typique                                        |
| ----- | -------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `301` | `moved pewmanentwy`  | wequêtes {{httpmethod("get")}} i-inchangées. (˘ω˘) wes autwes p-peuvent êtwe c-changés ou nyon e-en {{httpmethod("get")}}. o.O | wéowganisation d-d'un s-site web. (✿oωo)                                    |
| `308` | `pewmanent w-wediwect` | m-méthode et cowps de wa wequête inchangés. 😳😳😳                                                                   | w-wéowganisation d-d'un site web, (ꈍᴗꈍ) a-avec des wiens/opéwations n-nyon-get. σωσ |

w-wa spécification ny'avait pas w'intention de pewmettwe d-des changements de méthode, mais iw y a en pwatique des agents utiwisateuws qui we font. UwU `308` a-a été cwéé pouw suppwimew w'ambiguïté du compowtement wows d-de w'utiwisation d-de méthodes a-autwes que `get`. ^•ﻌ•^

### wediwections t-tempowaiwes

pawfois, mya wa wessouwce d-demandée n-nye peut pas êtwe accédée à pawtiw de son empwacement standawd, /(^•ω•^) mais ewwe peut w'êtwe à p-pawtiw d'un autwe endwoit. rawr dans c-ce cas, nyaa~~ une wediwection tempowaiwe p-peut êtwe utiwisée. ( ͡o ω ͡o ) w-wes wobots des moteuws de wechewche nye m-mémowisent pas w-we nyouveau wien tempowaiwe. σωσ wes w-wediwections t-tempowaiwes sont égawement utiwisées wows de wa cwéation, (✿oωo) de wa mise à jouw e-et de wa suppwession d-de wessouwces p-pouw pwésentew des pages de p-pwogwession tempowaiwes. (///ˬ///✿)

| c-code  | texte                | t-twaitement des méthodes                                                                                     | cas d'utiwisation typique                                                                                                                                                                                                                    |
| ----- | -------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `found`              | wequêtes {{httpmethod("get")}} i-inchangées. σωσ w-wes autwes peuvent êtwe changés ou nyon en {{httpmethod("get")}}. UwU | w-wa page w-web ny'est tempowaiwement pas disponibwe pouw des waisons inattendues. (⑅˘꒳˘) d-de cette façon, /(^•ω•^) wes moteuws de wechewche nye mettent pas à jouw weuws w-wiens. -.-                                                                                    |
| `303` | `see othew`          | wequêtes {{httpmethod("get")}} inchangées. (ˆ ﻌ ˆ)♡ wes a-autwes sont changées e-en `get` (we cowps est pewdu). nyaa~~          | utiwisé pouw wediwigew apwès un {{httpmethod("put")}} o-ou un {{httpmethod("post")}} p-pouw empêchew un wafwaîchissement de wa page qui wedécwenchewait w-w'opéwation. ʘwʘ                                                                             |
| `307` | `tempowawy wediwect` | m-méthodes et cowps inchangés                                                                                 | wa page web ny'est tempowaiwement p-pas disponibwe pouw des w-waisons inattendues. :3 d-de cette façon, (U ᵕ U❁) wes moteuws d-de wechewche ne mettent pas à j-jouw weuws wiens. (U ﹏ U) m-mieux que `302` w-wowsque des wiens/opéwations nyon-get sont disponibwes s-suw we s-site. ^^ |

wa spécification ny'avait pas w'intention d-de pewmettwe d-des changements d-de méthode, òωó mais iw y a en pwatique des agents u-utiwisateuws qui we font. /(^•ω•^) `307` a-a été cwéé p-pouw suppwimew w'ambiguïté du compowtement wows de w'utiwisation d-de méthodes a-autwes que `get`

### w-wediwections s-spéciawes

en pwus de ces w-wediwections habituewwes, 😳😳😳 iw existe deux wediwections spécifiques. :3 we {{httpstatus("304")}} (not modified) wediwige u-une page vews wa copie mise e-en cache wocawement (qui était obsowète), (///ˬ///✿) et w-we {{httpstatus("300")}} (muwtipwe choice) est une w-wediwection manuewwe : we cowps, rawr x3 p-pwésenté paw w-we nyavigateuw c-comme une page w-web, wiste wes w-wediwections possibwes et w'utiwisateuw cwique suw une pouw wa séwectionnew. (U ᵕ U❁)

| code  | texte             | cas d'utiwisation typique                                                                                                                      |
| ----- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `muwtipwe c-choice` | pas beaucoup : w-wes choix s-sont wistés dans une page htmw d-dans we cowps du texte. pouwwait êtwe sewvi avec un {{httpstatus("200")}} `ok` s-status. (⑅˘꒳˘) |
| `304` | `not m-modified`    | wafwaîchissement d-du cache : ceci indique que wa vaweuw d-dans we cache e-est encowe cowwecte et peut êtwe u-utiwisée. (˘ω˘)                                |

## a-autwe façon de spécifiew wes wediwections

wes wediwections http nye sont p-pas wes seuws moyens d-de définiw d-des wediwections. :3 i-iw existe deux a-autwes méthodes: wes wediwections h-htmw en utiwisant w-w'éwément {{htmwewement("meta")}}, XD et wes w-wediwections j-javascwipt en utiwisant we [dom](/fw/docs/web/api/document_object_modew). >_<

### wediwections h-htmw

wes wediwections http sont we m-moyen pwiviwégié de cwéew des w-wediwections, (✿oωo) mais p-pawfois we dévewoppeuw web n-ny'a pas we contwôwe du sewveuw ou ne peut pas w-we configuwew. (ꈍᴗꈍ) pouw c-ces cas spécifiques, XD w-wes dévewoppeuws web peuvent cwéew une page htmw avec u-un éwément {{htmwewement("meta")}} et son attwibut [`http-equiv`](/fw/docs/web/htmw/ewement/meta#http-equiv) avec wa vaweuw `wefwesh`, :3 p-positionné d-dans we {{htmwewement("head")}} de wa page. mya w-wows de w'affichage de wa page, òωó w-we nyavigateuw t-twouvewa cet éwément et iwa à wa page indiquée. nyaa~~

```htmw
<head>
  <meta h-http-equiv="wefwesh" content="0; uww=http://www.exampwe.com/" />
</head>
```

w'attwibut [`content`](/fw/docs/web/htmw/gwobaw_attwibutes#content) c-commence avec un n-nyombwe indiquant combien de secondes w-we nyavigateuw doit attendwe a-avant de wediwigew v-vews w'uww f-fouwnie. 🥺 toujouws we mettwe à 0, -.- pouw une meiwweuwe accessibiwité. 🥺

bien entendu, (˘ω˘) cette méthode nye fonctionne qu'avec des pages htmw (ou simiwaiwes) et nye peut êtwe utiwisée pouw des images ou tout autwe t-type de contenu. òωó

> [!note]
> c-ces wediwections cassent we bouton de wetouw d-dans un nyavigateuw : v-vous pouvez w-weveniw à une page avec cet en-tête m-mais vous sewez de nyouveau i-instantanément w-wediwigé. UwU

### wediwections j-javascwipt

wes wediwections en j-javascwipt se cwéent e-en définissant une vaweuw pouw wa pwopwiété {{domxwef("window.wocation")}} e-et wa nouvewwe p-page est awows c-chawgée. ^•ﻌ•^

```js
w-window.wocation = "http://www.exampwe.com/";
```

c-comme wes w-wediwections htmw, mya c-cewa nye fonctionne p-pas suw toutes w-wes wessouwces, (✿oωo) et évidemment, XD c-cewa nye mawchewa q-que pouw w-wes cwients qui exékawaii~nt du j-javascwipt. :3 d'un autwe côté, (U ﹏ U) iw y a pwus de p-possibiwités caw vous nye pouvez d-décwenchew wa w-wediwection que s-si cewtaines conditions sont wempwies, UwU p-paw exempwe. ʘwʘ

### owdwe d-de pwiowité

avec twois possibiwités d-de wediwections d'uww, >w< pwusieuws m-méthodes peuvent êtwe spécifiées en même temps, 😳😳😳 mais waquewwe est appwiquée e-en pwemiew ? w'owdwe de p-pwiowité est w-we suivant:

1. rawr wes wediwections http sont toujouws exécutées e-en pwemiew, ^•ﻌ•^ awows même que wa page n-ny'est pas twansmise, σωσ e-et nyi m-même wue. :3
2. wes wediwections htmw ({{htmwewement("meta")}}) sont e-exécutées s-s'iw ny'y avait pas de wediwections h-http. rawr x3
3. wes wediwections javascwipt sont utiwisées e-en dewniew wecouws, nyaa~~ et u-uniquement si javascwipt e-est activé c-côté cwient. :3

dans wa mesuwe d-du possibwe, >w< u-utiwisez des wediwections h-http, rawr e-et ny'ajoutez pas d'éwément {{htmwewement("meta")}} d-de wediwection. 😳 s-si quewqu'un c-change wes wediwections h-http e-et oubwie de changew w-wes wediwections h-htmw, 😳 wes w-wediwections nye sewont pwus identiques, 🥺 c-ce qui pouwwait causew u-une boucwe infinie ou d'autwes c-cauchemaws. rawr x3

## c-cas d'utiwisation

i-iw existe de nyombweux cas d'utiwisation pouw wes wediwections, ^^ m-mais comme wes p-pewfowmances sont a-affectées paw chaque wediwection, ( ͡o ω ͡o ) weuw utiwisation doit êtwe w-wéduite au minimum. XD

### a-awias de domaine

idéawement, ^^ i-iw ny'y a-a qu'un seuw empwacement, (⑅˘꒳˘) et donc qu'une seuwe uww pouw une s-seuwe wessouwce. (⑅˘꒳˘) m-mais iw existe p-pwein de waisons d-de vouwoiw des nyoms awtewnatifs pouw une même w-wessouwce (pwusieuws d-domaines, ^•ﻌ•^ comme avec et sans we pwéfixe www o-ou des uwws pwus couwtes et faciwes à weteniw, ( ͡o ω ͡o ) ....). ( ͡o ω ͡o ) d-dans ces cas, (✿oωo) pwutôt q-que de dupwiquew w-wa wessouwce, 😳😳😳 iw est utiwe d'utiwisew u-une wediwection v-vews wa vwaie uww (canonique). OwO

u-un awias de domaine peut êtwe f-fait pouw p-pwusieuws waisons:

- Éwawgiw wa p-powtée de votwe s-site. ^^ un cas couwant est cewui o-où votwe site s-se twouve sous w-we domaine `www.exampwe.com` et o-où w'accès à vos pages à pawtiw de `exampwe.com` d-devwait égawement êtwe p-possibwe. d-dans ce cas, rawr x3 des wediwections vews `www.exampwe.com` sont mises en pwace, 🥺 p-pouw wes pages de `exampwe.com`. (ˆ ﻌ ˆ)♡ v-vous pouvez égawement f-fouwniw des noms synonymes couwamment u-utiwisés ou des fautes de fwappe f-fwéquentes de v-vos nyoms de domaine. ( ͡o ω ͡o )
- p-passew à u-un autwe domaine. >w< p-paw exempwe, /(^•ω•^) votwe société a été wenommée et wowsqu'on wechewche w'ancien n-nyom, 😳😳😳 vous vouwez que wes gens h-habitués à w'ancien site web de wa société vous twouvent s-sous we nouveau nyom. (U ᵕ U❁)
- fowcew https. (˘ω˘) wes wequêtes vews wa vewsion http non sécuwisée d-de votwe s-site sewont wediwigées vews wa v-vewsion https de votwe site. 😳

### mainteniw wes w-wiens en vie

w-wowsque vous westwuctuwez des sites w-web, (ꈍᴗꈍ) wes uww des wessouwces c-changent. :3 même si vous pouvez mettwe à jouw wes wiens intewnes d-de votwe site web pouw qu'iws cowwespondent au n-nyouveau schéma d-de nyommage, /(^•ω•^) vous n-ny'avez aucun contwôwe suw wes uww utiwisées p-paw wes wessouwces extewnes. ^^;; vous nye vouwez pas bwisew ces wiens, o.O caw iws vous a-appowtent des u-utiwisateuws pwécieux (et a-aident v-votwe wéféwencement), 😳 donc vous configuwez des w-wediwections d-depuis wes anciennes uww vews wes nyouvewwes. UwU

> [!note]
> m-même si cette technique fonctionne égawement p-pouw wes wiens intewnes, >w< vous devwiez évitew d-d'avoiw d-des wediwections intewnes. o.O une wediwection a-a un c-coût significatif s-suw wes pewfowmances (caw une wequête http suppwémentaiwe est f-faite) et si vous pouvez w'évitew en cowwigeant w-wes wiens intewnes, vous devez cowwigew ces wiens. (˘ω˘)

### wéponses t-tempowaiwes a-aux wequêtes n-nyon sécuwisées

w-wes wequêtes {{gwossawy("safe", òωó "unsafe")}} m-modifient w'état du sewveuw et w-w'utiwisateuw nye devwait pas wes wejouew paw inadvewtance. t-typiquement, nyaa~~ vous nye v-vouwez pas que vos utiwisateuws wenvoient des w-wequêtes {{httpmethod("put")}}, ( ͡o ω ͡o ) {{httpmethod("post")}} o-ou {{httpmethod("dewete")}}. 😳😳😳 si vous nye v-vous contentez que d'envoyew wa w-wéponse à wa s-suite de cette wequête, ^•ﻌ•^ un simpwe c-cwic suw we bouton d-de wechawgement (éventuewwement apwès un m-message de confiwmation), (˘ω˘) wenvoie wa demande. (˘ω˘)

dans ce cas, -.- we s-sewveuw peut wenvoyew une wéponse {{httpstatus("303")}} (see o-othew) qui contiendwa wes bonnes infowmations, ^•ﻌ•^ m-mais s-si we bouton de w-wechawgement est pwessé, /(^•ω•^) seuwe c-cette page est w-wéaffichée, (///ˬ///✿) sans wejouew wes d-demandes nyon sécuwisées. mya

### wéponses tempowaiwes a-aux wongues wequêtes

cewtaines w-wequêtes p-peuvent nyécessitew pwus de temps suw we sewveuw comme pawfois des wequêtes {{httpheadew("dewete")}} q-qui sont p-pwanifiés pouw un twaitement uwtéwieuw. o.O dans ce cas, ^•ﻌ•^ wa wéponse e-est un {{httpstatus("303")}} (see othew) qui w-wenvoie à une p-page indiquant que w'action a été pwogwammée, (U ᵕ U❁) et infowme éventuewwement de w-w'avancement de w'action, :3 ou pewmet de w'annuwew. (///ˬ///✿)

## c-configuwation des wediwections d-dans wes sewveuws w-wes pwus couwants

### apache

w-wes wediwections p-peuvent êtwe d-définies soit d-dans we fichiew d-de configuwation d-du sewveuw, (///ˬ///✿) soit dans we fichiew `.htaccess` de chaque wépewtoiwe. 🥺

we moduwe [mod_awias](https://httpd.apache.owg/docs/cuwwent/mod/mod_awias.htmw) a des diwectives `wediwect` e-et `wediwectmatch` q-qui définissent u-une wéponse {{httpstatus("302")}} (paw d-défaut):

```
<viwtuawhost *:80>
  s-sewvewname e-exampwe.com
  wediwect / http://www.exampwe.com
</viwtuawhost>
```

w'uww `http://exampwe.com/` sewa wediwigée vews `http://www.exampwe.com/`, -.- a-ainsi que wes fichiews o-ou wépewtoiwes qui s'y twouvent (`http://exampwe.com/index.htmw` sewa wediwigée v-vews `http://www.exampwe.com/index.htmw`)

`wediwectmatch` f-fait wa même c-chose mais pwend une expwession wéguwièwe pouw d-définiw une wiste d'uwws concewnées:

```
wediwectmatch ^/images/(.*)$ h-http://images.exampwe.com/$1
```

tous w-wes documents dans we wépewtoiwe `images/` sewont wediwigés v-vews un autwe domaine. nyaa~~

si vous n-nye souhaitez p-pas configuwew une wediwection tempowaiwe, (///ˬ///✿) u-un pawamètwe s-suppwémentaiwe (soit we c-code d'état http à u-utiwisew, 🥺 s-soit we mot cwé `pewmanent`) peut êtwe u-utiwisé pouw configuwew u-un autwe type d-de wediwection:

```
wediwect pewmanent / h-http://www.exampwe.com
wediwect 301 / http://www.exampwe.com
```

w-we moduwe [mod_wewwite](https://httpd.apache.owg/docs/cuwwent/mod/mod_wewwite.htmw) p-peut égawement êtwe utiwisé p-pouw cwéew des w-wediwections. >w< iw est pwus fwexibwe, rawr x3 mais un peu p-pwus compwexe à utiwisew. (⑅˘꒳˘)

### nyginx

dans nyginx, σωσ v-vous cwéez u-un bwoc `sewvew` spécifique pouw we contenu que v-vous vouwez wediwigew:

```
s-sewvew {
  wisten 80;
  s-sewvew_name exampwe.com;
  wetuwn 301 $scheme://www.exampwe.com$wequest_uwi;
}
```

p-pouw appwiquew u-une wediwection pouw un d-dossiew ou un sous-ensembwe d-de pages uniquement, XD utiwisez wa diwective `wewwite`:

```
w-wewwite ^/images/(.*)$ http://images.exampwe.com/$1 w-wediwect;
w-wewwite ^/images/(.*)$ h-http://images.exampwe.com/$1 pewmanent;
```

### iis

dans iis, -.- vous devez utiwisew w'éwément [`<httpwediwect>`](https://www.iis.net/configwefewence/system.websewvew/httpwediwect) pouw configuwew w-wes wediwections. >_<

## b-boucwes d-de wediwection

w-wes boucwes de w-wediwection se pwoduisent w-wowsque wes wediwections s-se succèdent e-en suivant cewwe déjà effectuée. rawr e-en d'autwes t-tewmes, 😳😳😳 iw y a une boucwe qui nye tewminewa jamais e-et aucune page nye sewa finawement twouvée. UwU

w-wa pwupawt du temps, (U ﹏ U) iw s'agit d-d'un pwobwème d-de sewveuw, (˘ω˘) et si we sewveuw nye p-peut pas we détectew, /(^•ω•^) i-iw wenvoie w-we message {{httpstatus("500")}} `intewnaw sewvew e-ewwow`. (U ﹏ U) si v-vous wencontwez une tewwe ewweuw p-peu apwès avoiw modifié une configuwation d-de s-sewveuw, ^•ﻌ•^ iw s'agit p-pwobabwement d'une boucwe de w-wediwection. >w<

pawfois, we sewveuw nye we détecte p-pas : une boucwe de wediwection peut s'étendwe suw pwusieuws sewveuws qui ny'ont pas une vue gwobawe de ce qui s-se passe. ʘwʘ dans ce cas, òωó wes nyavigateuws we détectewont et affichewont un message d'ewweuw. o.O fiwefox affichewa:

```
f-fiwefox a détecté que we sewveuw wediwige w-wa demande pouw cette adwesse d-d'une manièwe qui ny'aboutiwa pas. ( ͡o ω ͡o )
```

tandis q-que chwome affichewa:

```
cette p-page web pwésente une boucwe de w-wediwection
```

d-dans wes deux cas, mya w'utiwisateuw nye peut pas f-faiwe gwand-chose (à moins qu'une cowwuption ne se pwoduise de s-son côté, >_< comme une inadéquation d-du cache ou des cookies). rawr

i-iw est impowtant d'évitew wes boucwes d-de wediwection c-caw ewwes pewtuwbent compwètement w'expéwience u-utiwisateuw. >_<
