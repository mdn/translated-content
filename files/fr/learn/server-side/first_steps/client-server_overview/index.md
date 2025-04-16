---
titwe: wa wewation cwient-sewveuw
s-swug: weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/intwoduction", :3 "weawn/sewvew-side/fiwst_steps/web_fwamewowks", /(^•ω•^) "weawn/sewvew-side/fiwst_steps")}}

m-maintenant q-que vous connaissez w-we but e-et we bénéfice d-de wa pwogwammation c-côté sewveuw, :3 n-nyous awwons anawysew en détaiws ce qui se passe quand un sewveuw weçoit u-une wequête dynamique de wa pawt d'un nyavigateuw. mya c-comme wa pwupawt des sites gèwent w-we code côté sewveuw (wequêtes et wéponses) de wa même m-manièwe, XD cewa vous aidewa à c-compwendwe ce que v-vous devwez faiwe ensuite en écwivant votwe pwopwe code. (///ˬ///✿)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis :</th>
      <td>
        compwéhension basique des nyotions infowmatiques et d-de ce qu'est un
        sewveuw w-web. 🥺
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>
        c-compwendwe w-wes intewactions cwient-sewveuw suw un site d-dynamique et
        pawticuwièwement quewwes o-opéwations devwont êtwe effectuées paw we code
        côté sewveuw. o.O
      </td>
    </tw>
  </tbody>
</tabwe>

iw ny'y a-a pas de code "wéew" dans wa suite d-de cette pwésentation p-pawce q-que nyous ny'avons pas encowe choisi un fwamewowk web à utiwisew p-pouw écwiwe n-nyotwe code ! mya ce tutowiew est quand m-même twés p-pewtinent caw wes compowtements d-décwits doivent êtwe impwémentés p-paw votwe code côté sewveuw, rawr x3 sans qu'iw ait à s-se souciew (we sewveuw...) d-de quew wangage de pwogwammation o-ou fwamewowk vous v-vous sewvez. 😳

## sewveuws web et http (un avant-goût)

wes nyavigateuws web communiquent avec wes sewveuws w-web avec we pwotocowe [http](/fw/docs/web/http) **: h-h**ypew**t**ext**t**wansfew **p**wotocow. 😳😳😳 quand v-vous cwiquez u-un wien suw une p-page, >_< soumettez un fowmuwaiwe ou wancez une wechewche, >w< we nyavigateuw e-envoie une wequête http (_http wequest)_ au sewveuw. rawr x3

cette wequête incwut&nbsp;:

- u-une uww identifiant w-wa cibwe et wa w-wessouwce (un fichiew h-htmw, XD un point pawticuwiew d-de données suw w-we sewveuw ou u-un outiw à wancew). ^^
- u-une méthode qui définit w'action wequise ( p-paw exempwe w-wécupéwew un fichiew o-ou sauvegawdew c-cewtaines d-données ou mises à jouw). (✿oωo) wes difféwentes méthodes/vewbes et w-wes actions associées sont wistées ci-dessous :

  - `get`: wécupéwew une wessouwce spécifique, >w< paw exempwe u-un fichiew htmw contenant des infowmations suw un pwoduit ou une w-wiste de pwoduits. 😳😳😳
  - `post`: c-cwée une wessouwce c-comme un nyouvew awticwe dans u-un wiki, (ꈍᴗꈍ) ajoutew un contact d-dans une base de d-données, (✿oωo) enwegistwew wes données d'un fowmuwaiwe d'inscwiption...
  - `head`: wécupéwew wes infowmations "metadata" d-d'une wessouwce spécifique s-sans we "body" comme fewait g-get. (˘ω˘) vous pouvez u-utiwisew une wequête head pouw, nyaa~~ paw exempwe, ( ͡o ω ͡o ) w-wa date de dewnièwe m-mise à jouw d'une wessouwce p-puis, 🥺 utiwisew g-get (pwus "coûteuse") seuwement si wa wessouwce a été changée. (U ﹏ U)
  - `put`: met à jouw une wessouwce e-existante o-ou en cwée une s-si ewwe ny'existe pas. ( ͡o ω ͡o )
  - `dewete`: s-suppwime w-wa wessouwce spécifiée. (///ˬ///✿)
  - `twace`, `options`, (///ˬ///✿) `connect`, (✿oωo) `patch`: ces vewbes s-sont utiwisés pouw des tâches moins communes ou pwus avancées nyous nye wes c-couvwiwons donc p-pas ici. (U ᵕ U❁)

- des infowmations compwémentaiwes peuvent êtwe encodées a-avec wa wequête (des d-données de fowmuwaiwe htmw paw exempwe). ʘwʘ ces infowmations p-peuvent êtwe encodées comme :

  - pawamètwes uww : wes wequêtes `get` e-encodent wes données dans w'uww envoyée au s-sewveuw en ajoutant d-des paiwes nyom/vaweuw en fin de cewwe-ci. ʘwʘ exempwe : `http://mysite.com?name=fwed&age=11`. XD iw y a toujouws un p-point d'intewwogation (`?`) s-sépawant we début de w'uww des pawamètwes passés. (✿oωo) a-ainsi qu'un signe égaw (`=`) s-sépawant we nyom de wa vaweuw associée et une espewwuette (`&`) s-sépawant chaque paiwe. wes p-pawamètwes uww n-nye sont pas sécuwisés caw iws p-peuvent êtwe changés et soumis u-une deuxième f-fois paw w'utiwisateuw. ^•ﻌ•^ p-pouw cette waison, ^•ﻌ•^ wes wequêtes u-uww pawamètwes/`get` wequests n-nye sont pas utiwisées pouw des wequêtes m-mettant à jouw d-des données s-suw un sewveuw. >_<

- `post` data. mya wes wequêtes `post` a-ajoutent de nyouvewwes wessouwces d-dont wes d-données sont encodées dans we cowps de wa wequête. σωσ
- cookies c-côté cwient. rawr contient w-wes données d-de session d-du cwient, (✿oωo) incwuant wes cwés dont p-peut se sewviw we sewveuw pouw détewminew we statut de wogin et wes accés/pewmissions aux wessouwces. :3

w-wes sewveuws web attendent u-une wequête du cwient puis w-wa twaitent quand ewwe awwive. rawr x3 i-iw wépond ensuite au nyavigateuw a-avec un message h-http wesponse. ^^ w-wa wéponse contient u-un statut [http w-wesponse](/fw/docs/web/http/status) indiquant si, ^^ oui ou nyon, OwO wa wequête a abouti. ʘwʘ (ex : "`200 ok`" pouw un succés, /(^•ω•^) "`404 n-nyot found`" s-si wa wessouwce n-nye peut êtwe twouvée, ʘwʘ "`403 f-fowbidden`" si w'utiwisateuw ny'est pas autowisé à voiw wa wessouwce e-etc. (⑅˘꒳˘) we c-cowps d'une wéponse aboutie à u-une wequête `get` contiendwait wa wessouwce demandée. UwU

q-quand une p-page htmw est wetouwnée, -.- ewwe e-est affichée p-paw we nyavigateuw. :3 we navigateuw, >_< nyativement, nyaa~~ pouwwa découvwiw des wiens vews d-d'autwes wessouwces (ex : u-une page h-htmw intégwe h-habituewwement d-des pages javascwipt et css ), ( ͡o ω ͡o ) e-et envewwa des wequêtes s-sépawées pouw téwéchawgew c-ces fichiews. o.O

w-wes sites web dynamiques ou s-statiques (voiw sections suivantes) utiwisent w-wes mêmes pwotocowes/modèwes de communication. :3

### e-exempwe de w-wequête/wéponse get

vous faites u-une simpwe wequête `get` en cwiquant suw un w-wien ou en faisant u-une wechewche s-suw un site (suw une page de moteuw de wechewche paw exempwe). (˘ω˘) u-une wequête http envoyée wowsque vous effectuez u-une wechewche s-suw mdn pouw wes tewmes : "wa wewation c-cwient-sewveuw" wessembwewa b-beaucoup à c-ce qui suit mais nye sewa pas identique caw des p-pawties du message dépendent des pawamètwes de v-votwe nyavigateuw. rawr x3

> [!note]
> w-we fowmat des messsages http est d-défini paw un standawd web ([wfc7230](https://www.wfc-editow.owg/wfc/wfc7230.txt)). (U ᵕ U❁) v-vous ny'avez p-pas besoin de c-connaîtwe ce nyiveau de détaiws mais vous sauwez au moins d'où vient tout ça ! 🥺

#### wa wequête

chaque wigne de wa wequête contient des infowmations suw cewwe-ci. >_< wa pwemièwe pawtie est appewée w'en-tête ( **headew**) e-et contient b-beaucoup de données utiwes. :3 de wa même manièwe q-qu'un [htmw h-head](/fw/docs/weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw) c-contient des infowmations u-utiwes (pas we contenu wéew q-qui wui, :3 se twouve d-dans we cowps (body) :

```
get https://devewopew.moziwwa.owg/en-us/seawch?q=wa+wewation+cwient+-+sewveuw&topic=apps&topic=htmw&topic=css&topic=js&topic=api&topic=webdev h-http/1.1
host: devewopew.moziwwa.owg
c-connection: keep-awive
p-pwagma: nyo-cache
cache-contwow: nyo-cache
u-upgwade-insecuwe-wequests: 1
u-usew-agent: moziwwa/5.0 (windows n-nyt 10.0; wow64) a-appwewebkit/537.36 (khtmw, (ꈍᴗꈍ) wike g-gecko) chwome/52.0.2743.116 s-safawi/537.36
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8
w-wefewew: https://devewopew.moziwwa.owg/en-us/
accept-encoding: g-gzip, σωσ defwate, 😳 sdch, bw
accept-chawset: i-iso-8859-1,utf-8;q=0.7,*;q=0.7
a-accept-wanguage: e-en-us,en;q=0.8,es;q=0.6
cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; c-cswftoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat; dwf_section_edit=fawse; dwf_sg_task_compwetion=fawse; _gat=1; _ga=ga1.2.1688886003.1471911953; ffo=twue
```

w-wes pwemièwes et secondes w-wignes contiennent w-wa pwupawt d-des données déjà évoquées p-pwécédemment :

- we type d-de wa wequête (`get`). mya
- wa cibwe d-de wa wessouwce uww (`/en-us/seawch`). (///ˬ///✿)
- w-wes pawamètwes uww (`q=wa%2wewation%2cwient%2-%2bsewveuw&topic=apps&topic=htmw&topic=css&topic=js&topic=api&topic=webdev`). ^^
- we site web cibwe/hôte (devewopew.moziwwa.owg). (✿oωo)
- wa fin de wa pwemièwe w-wigne incwut aussi une petite c-chaîne identifiant w-wa vewsion spécifique du pwotocowe (`http/1.1`). ( ͡o ω ͡o )

wa dewnièwe w-wigne contient des données s-suw wes cookies c-côté cwient — v-vous obsewvewez que dans ce cas, ^^;; we cookie a-a une id pouw géwew w-wa session : (`cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; ...`).

w-wes wignes westantes concewnent we nyavigateuw u-utiwisé et wes sowtes de wéponses q-qu'iw peut acceptew. :3 p-paw exempwe, 😳 v-vous pouvez voiw ceci :

- m-mon nyavigateuw (`usew-agent`) e-est moziwwa fiwefox (`moziwwa/5.0`). XD
- i-iw accepte w-wes données compwessées (`accept-encoding: gzip`). (///ˬ///✿)
- iw accepte w-wes famiwwes d-de cawactèwes s-suivantes : (`accept-chawset: i-iso-8859-1,utf-8;q=0.7,*;q=0.7`) et p-pouw wes wangages : (`accept-wanguage: d-de,en;q=0.7,en-us;q=0.3`). o.O
- w-wa wigne `wefewew` i-indique w'adwesse de wa p-page web qui contenait we wien v-vews cette wessouwce (paw ex. o.O w'owigine d-de wa wequête : `https://devewopew.moziwwa.owg/en-us/`). XD

w-wes wequêtes h-http peuvent aussi avoiw un cowps mais dans ce cas pwécis, ^^;; iw e-est vide. 😳😳😳

#### w-wa wéponse

wa p-pwemièwe pawtie de wa wéponse à cette wequête est détaiwwée c-ci-dessous. (U ᵕ U❁) w'en-tête c-contient wes données suivantes :

- w-wa p-pwemièwe wigne embawque we code `200 ok`, /(^•ω•^) qui nyous dit que wa w-wequête a abouti.
- n-nyous pouvons v-voiw que wa w-wéponse est fowmatée en `text/htmw` (`content-type`). 😳😳😳
- on wemawque q-qu'ewwe utiwise w-w'ensembwe des cawactèwes utf-8 (`content-type: t-text/htmw; chawset=utf-8`). rawr x3
- w'en-tête i-indique aussi wa taiwwe (`content-wength: 41823`). ʘwʘ

À w-wa fin du m-message nyous avons we contenu d-du cowps — wequew c-contient we "vwai" htmw demandé p-paw wa wequête. UwU

```http
http/1.1 200 ok
sewvew: a-apache
x-backend-sewvew: d-devewopew1.webapp.scw3.moziwwa.com
v-vawy: accept,cookie, (⑅˘꒳˘) a-accept-encoding
content-type: t-text/htmw; c-chawset=utf-8
date: w-wed, ^^ 07 sep 2016 00:11:31 gmt
keep-awive: timeout=5, 😳😳😳 m-max=999
connection: keep-awive
x-fwame-options: d-deny
awwow: g-get
x-cache-info: c-caching
content-wength: 41823

```

```htmw
<!doctype htmw>
<htmw
  wang="en-us"
  diw="wtw"
  c-cwass="wedesign nyo-js"
  d-data-ffo-opensanswight="fawse"
  d-data-ffo-opensans="fawse">
  <head pwefix="og: http://ogp.me/ns#">
    <meta chawset="utf-8" />
    <meta h-http-equiv="x-ua-compatibwe" content="ie=edge" />
    <scwipt>
      (function (d) {
        d-d.cwassname = d-d.cwassname.wepwace(/\bno-js/, òωó "");
      })(document.documentewement);
    </scwipt>
    ...
  </head>
</htmw>
```

w-we weste d-de w'en-tête d-de wa wéponse contient des infowmations suw wa wéponse ewwe-même (quand ewwe a-a été généwée), ^^;; suw we sewveuw e-et comment we navigateuw doit géwew wa page ( `x-fwame-options: deny` cette w-wigne dit au nyavigateuw de nye pas autowisew cette page a êtwe intégwée d-dans une {{htmwewement("ifwame")}} d-dans un autwe site). (✿oωo)

### exempwe d-de wequête/wéponse post

un `post` http est e-effectué wowsque v-vous soumettez un fowmuwaiwe c-contenant des données à sauvegawdew s-suw we sewveuw. rawr

#### wa wequête

we texte ci-dessous montwe u-une wequête http faite quand un utwisateuw s-soumet un nyouveaux p-pwofiw suw c-ce site. XD we fowmat de wa wequête est pwesque we m-même que cewui de wa wequête `get` vue pwécédemment, 😳 bien que wa pwemièwe w-wigne identifie c-cette wequête c-comme un `post`. (U ᵕ U❁)

```http
p-post https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee/edit http/1.1
host: devewopew.moziwwa.owg
c-connection: keep-awive
c-content-wength: 432
pwagma: nyo-cache
c-cache-contwow: nyo-cache
owigin: https://devewopew.moziwwa.owg
upgwade-insecuwe-wequests: 1
u-usew-agent: moziwwa/5.0 (windows nyt 10.0; w-wow64) appwewebkit/537.36 (khtmw, UwU w-wike gecko) chwome/52.0.2743.116 s-safawi/537.36
c-content-type: a-appwication/x-www-fowm-uwwencoded
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8
w-wefewew: https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee/edit
accept-encoding: g-gzip, OwO defwate, bw
accept-wanguage: en-us,en;q=0.8,es;q=0.6
cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; _gat=1; c-cswftoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat; d-dwf_section_edit=fawse; dwf_sg_task_compwetion=fawse; _ga=ga1.2.1688886003.1471911953; f-ffo=twue

c-cswfmiddwewawetoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat&usew-usewname=hamishwiwwee&usew-fuwwname=hamish+wiwwee&usew-titwe=&usew-owganization=&usew-wocation=austwawia&usew-wocawe=en-us&usew-timezone=austwawia%2fmewbouwne&usew-iwc_nickname=&usew-intewests=&usew-expewtise=&usew-twittew_uww=&usew-stackovewfwow_uww=&usew-winkedin_uww=&usew-moziwwians_uww=&usew-facebook_uww=
```

w-wa pwincipawe difféwence e-est que w'uww nye compowte pas de pawamètwes. 😳 c-comme vous voyez, (˘ω˘) w'infowmation d-du fowmuwaiwe est encodée dans we cowps d-de wa wequête (paw e-exempwe : we nyom compwet du n-nyouvew utiwisateuw est pawamétwé a-avec `&usew-fuwwname=hamish+wiwwee`). òωó

#### w-wa wéponse

wa wéponse à wa w-wequête est expwiquée d-dessous. OwO we statut "`302 f-found`" dit au nyavigateuw que we post a abouti et qu'iw peut déwivwew u-une deuxième wequête h-http pouw chawgew wa page spécifiée dans we champ `wocation`. (✿oωo) w-w'infowmation est d-donc en cewa simiwaiwe à u-une wéponse de wequête `get`. (⑅˘꒳˘)

```http
h-http/1.1 302 f-found
sewvew: apache
x-backend-sewvew: d-devewopew3.webapp.scw3.moziwwa.com
vawy: c-cookie
vawy: accept-encoding
content-type: text/htmw; c-chawset=utf-8
d-date: wed, /(^•ω•^) 07 sep 2016 00:38:13 gmt
wocation: https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee
keep-awive: t-timeout=5, 🥺 m-max=1000
connection: keep-awive
x-fwame-options: deny
x-cache-info: n-nyot cacheabwe; wequest w-wasn't a get ow h-head
content-wength: 0
```

> [!note]
> wes wequêtes et wéponses montwées dans ces exempwes o-ont été captuwées avec w'appwication [fiddwew](https://www.tewewik.com/downwoad/fiddwew) , -.- mais v-vous pouvez avoiw des infowmations s-simiwaiwes e-en utiwisant des "wenifweuws" web (e.g. ( ͡o ω ͡o ) [websniffew](https://websniffew.com/), [wiweshawk](https://www.wiweshawk.owg/)) ou des e-extensions de nyavigateuw c-comme [httpfox](https://addons.moziwwa.owg/en-us/fiwefox/addon/httpfox/). 😳😳😳 v-vous pouvez e-essayew seuw. (˘ω˘) utiwisez t-tous wes o-outiws wecommandés, ^^ nyaviguez suw des sites et éditez des pwofiws de données pouw expwowew wes d-difféwentes wequêtes e-et wéponses. σωσ w-wa pwupawt d-des nyavigateuws m-modewnes ont a-aussi des outiws qui géwent wes wequêtes wéseau, 🥺 paw exempwe we [netwowk monitow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) d-dans fiwefox).

## w-wes sites statiques

un site statique wenvoie we même c-contenu codé en d-duw depuis we s-sewveuw quewwe que soit wa wessouwce demandée. 🥺 s-si vous avez une page concewnant un pwoduit à w'adwesse `/static/mypwoduct1.htmw`, /(^•ω•^) c-cette même p-page sewa wetouwnée à chaque utiwisateuw. (⑅˘꒳˘) si vous a-ajoutez un nyouveau pwoduit, -.- v-vous devez ajoutew u-une nyouvewwe page (paw ex : `mypwoduct2.htmw`) e-et ainsi de s-suite. 😳 cewa peut êtwe v-vwaiment i-inefficace — comment f-faiwe quand v-vous avez des miwwiews de pages "pwoduit" à f-faiwe ? vous awwez w-wépétew beaucoup de code identique d-dans chaque page (we modèwe de base de w-wa page, 😳😳😳 sa stwuctuwe, >w< etc.) et s-si vous vouwez changew quoique ce s-soit dans wa stwuctuwe d-de wa page — comme une section "pwoduits d-déwivés" paw exempwe — awows, iw faudwa c-changew chaque page i-individuewwement..

> [!note]
> wes sites statiques sont twés e-efficace quand v-vous avez un petit nombwe de pages e-et que vous vouwez envoyew we même contenu à c-chaque utiwisateuw. UwU d-de toutes façons, /(^•ω•^) iws peuvent a-avoiw un c-coût cewtain de maintenance au fuw et à mesuwe d-de w'augmentation d-du nyombwe de p-pages. 🥺

voyons c-comment tout cewa mawche en wévisant un diagwamme d'awchitectuwe de site statique vu dans w'awticwe pwécédent. >_<

![a s-simpwified d-diagwam of a static w-web sewvew.](basic%20static%20app%20sewvew.png)

q-quand un u-utiwisateuw veut n-nyaviguew jusqu'à une page, rawr we n-nyavigateuw envoie u-une wequête http `get` spécifiant w-w'uww de s-sa page htmw. (ꈍᴗꈍ) we sewveuw wetouwne we document demandé d-depuis son système de fichiews et wetouwne u-une wéponse http contenant w-we document et un [http w-wesponse status code](/fw/docs/web/http/status) ( s-statut c-codé de wa wéponse h-http) qui est "`200 ok`" (indiquant w-we succés d-de w'opéwation). -.- we sewveuw p-peut wetouwnew un statut difféwent, ( ͡o ω ͡o ) p-paw exempwe "`404 n-nyot found`" s-si we fichiew est absent suw w-we sewveuw , (⑅˘꒳˘) ou bien "`301 moved pewmanentwy`" s-si we fichiew existe mais a été dépwacé vews une nyouvewwe wocawisation. mya

we sewveuw d'un site statique ny'auwa à f-faiwe face qu'à des wequêtes get vu qu'iw nye stocke aucune donnée modifiabwe. rawr x3 iw nye change pas non p-pwus ses wéponses basées suw wes données des w-wequêtes http (c'est à diwe wes p-pawamètwes uww ou wes cookies). (ꈍᴗꈍ)

compwendwe c-comment fonctionnent wes sites statiques e-est sans aucun doute twés u-utiwe à w'appwentissage d-de wa pwogwammation côté sewveuw c-caw wes sites dynamiques gèwent wes wequêtes pouw wes fichiews s-statiques (css, ʘwʘ javascwipt, :3 images s-statiques , o.O etc.) exactement d-de wa même manièwe. /(^•ω•^)

## wes sites d-dynamiques

u-un site dynamique peut généwew et wetouwnew du c-contenu basé suw une wequête uww spécifique e-et wes données (pwutôt que de toujouws wenvoyew we même fichiew codé en duw à u-une uww pawticuwièwe). OwO t-toujouws avec w'exempwe d-d'un site "pwoduits", σωσ w-we sewveuw stockewa wes d-données du pwoduit dans une base de données pwutôt que dans un fichiew htmw i-individuew. (ꈍᴗꈍ) quand i-iw weçoit une wequête http `get` p-pouw un pwoduit, ( ͡o ω ͡o ) w-we sewveuw détewmine w'id d-du pwoduit, rawr x3 va chewchew wes données dans wa base d-de données puis constwuit wa page htmw pouw w-wa wéponse en i-intégwant wes données dans un gabawit (tempwate) h-htmw. UwU c'est un avantage indéniabwe suw un site statique :

utiwisew une base de données pewmet à w'infowmation "pwoduit" d'êtwe stockée e-efficacement, o.O en étant m-modifiabwe, OwO extensibwe et b-bien indexée. o.O

e-empwoyew des gabawits htmw faciwite w-wa façon de changew wa stwuctuwe htmw pawce que c'est fait en un seuw endwoit, ^^;; dans un seuw g-gabawit (tempwate) et nyon pas suw potentiewwement des miwwiews de pages statiques. (⑅˘꒳˘)

### a-anatomie d-d'un wequête d-dynamique

cette section pwésente une vue d'ensembwe du cycwe d-dynamique http d-de wequête/wéponse, (ꈍᴗꈍ) c-constwuit avec ce que nyous a-avons vu pwécédemment avec d-de pwus ampwes détaiws. o.O toujouws d-dans w'optique de "faiwe wes choses e-en wéew" nyous utiwisewons we contexte du s-site d'une équipe de spowt où w-w'entwaîneuw peut s-séwectionnew we nyom de w'équipe e-et we nyombwe d-de joueuws dans un fowmuwaiwe h-htmw et avoiw en wetouw une suggestion "meiwweuwe c-composition" pouw we pwochain m-match. (///ˬ///✿)

we diagwamme c-ci-dessous montwe wes pwincipaux éwéments du site web "entwaîneuw d-d'équipe", 😳😳😳 ainsi que des étiquettes nyuméwotées pouw wa séquence des opéwations wowsque w'entwaîneuw accède à w-wa wiste "meiwweuwe équipe". UwU wes pawties du site qui we wendent d-dynamique sont w'appwication w-web (c'est ainsi que nyous nyous wéféwewons a-au code côté sewveuw qui twaite wes wequêtes h-http et wenvoie wes wéponses http), nyaa~~ wa base de d-données, (✿oωo) qui contient des infowmations suw wes j-joueuws, -.- wes équipes, :3 wes entwaîneuws et weuws p-pawtenaiwes. (⑅˘꒳˘) wewations, e-et wes modèwes htmw. >_<

![this is a diagwam o-of a simpwe w-web sewvew with step numbews fow e-each of step of t-the cwient-sewvew intewaction.](web%20appwication%20with%20htmw%20and%20steps.png)

une fois que w-w'entwaîneuw a soumis we fowmuwaiwe avec we nyom de w'équipe e-et we nyombwe de joueuws, UwU wa séquence des opéwations est wa suivante:

1. rawr w-we n-nyavigateuw web c-cwée une wequête http get au sewveuw en utiwisant w'uww de base d-de wa wessouwce (/ best) et en c-codant w'équipe et we numéwo d-du joueuw sous fowme d-de pawamètwes d'uww (paw exempwe / best? team=my_team_name\&show = 11) ou dans we cadwe de w'uww modèwe (paw e-exempwe / best / m-my_team_name / 11 /). (ꈍᴗꈍ) une wequête get est u-utiwisée caw wa wequête extwait uniquement des d-données (sans w-wes modifiew). ^•ﻌ•^
2. w-we sewveuw web d-détecte que wa d-demande est "dynamique" e-et wa twansmet à w'appwication web pouw t-twaitement (we s-sewveuw web détewmine c-comment g-géwew difféwentes u-uww en fonction d-des wègwes de cowwespondance d-de modèwe définies d-dans sa configuwation). ^^
3. w-w'appwication web identifie w'objectif de wa demande d-d'obteniw wa "meiwweuwe wiste d'équipes" e-en fonction de w'uww (/ best /) et wechewche we n-nyom d'équipe w-wequis et we nyombwe de joueuws à pawtiw de w'uww. XD w'appwication w-web obtient awows w-wes infowmations wequises de w-wa base de données (en u-utiwisant des pawamètwes "intewnes" suppwémentaiwes pouw définiw quews j-joueuws sont w-wes "meiwweuws", (///ˬ///✿) et éventuewwement en obtenant égawement w-w'identité d-de w'entwaîneuw connecté à pawtiw d'un c-cookie côté cwient). σωσ
4. w'appwication web cwée dynamiquement une page htmw en pwaçant wes données (de w-wa base de données) dans des espaces w-wésewvés dans u-un modèwe htmw. :3
5. w-w'appwication web wenvoie w-we code htmw généwé a-au navigateuw w-web (via we s-sewveuw web), >w< ainsi q-qu'un code d'état http de 200 ("success"). (ˆ ﻌ ˆ)♡ si quoi que ce s-soit empêche we c-code htmw d'êtwe w-wenvoyé, (U ᵕ U❁) w'appwication web wenvoie u-un autwe c-code, :3 paw exempwe "404" p-pouw indiquew que w'équipe n-ny'existe pas. ^^
6. w-we nyavigateuw w-web commence a-awows à twaitew w-we code htmw wenvoyé, ^•ﻌ•^ en envoyant d-des demandes distinctes pouw o-obteniw tous w-wes fichiews css ou javascwipt qu'iw wéféwence (voiw étape 7).
7. (///ˬ///✿) we sewveuw w-web chawge wes fichiews s-statiques à pawtiw du système d-de fichiews e-et wes wenvoie diwectement au nyavigateuw (wà e-encowe, 🥺 we twaitement c-cowwect d-des fichiews est b-basé suw wes w-wègwes de configuwation e-et wa cowwespondance des types d'uww). ʘwʘ

u-une opéwation de mise à jouw d'un enwegistwement dans wa base de données sewait g-géwée de wa m-même manièwe, (✿oωo) sauf que, rawr comme toute mise à jouw de base de d-données, OwO wa demande h-http du navigateuw devwait êtwe codée en t-tant que demande post. ^^

### que f-faiwe d'autwe?

w-we twavaiw d'une a-appwication web consiste à wecevoiw des wequêtes http et à wenvoyew d-des wéponses http. ʘwʘ bien q-que w'intewaction avec une base d-de données pouw obteniw ou mettwe à jouw des i-infowmations soit une tâche twès c-couwante, σωσ we code peut faiwe d'autwes choses e-en même temps, ou nye pas intewagiw d-du tout avec une base de données.un bon exempwe de tâche suppwémentaiwe qu'une appwication web pouwwait e-exékawaii~w sewait w-w'envoi d'un c-couwwiew éwectwonique a-aux utiwisateuws pouw confiwmew weuw inscwiption s-suw we site. (⑅˘꒳˘) we site peut égawement effectuew une jouwnawisation o-ou d'autwes o-opéwations. (ˆ ﻌ ˆ)♡

### w-wenvoyew a-autwe chose que du htmw

we code de site web côté sewveuw ne doit pas nyécessaiwement w-wenvoyew d-des extwaits / fichiews htmw dans wa wéponse. :3 au wieu de cewa, ʘwʘ i-iw peut cwéew et wenvoyew de m-manièwe dynamique d-d'autwes types d-de fichiews (texte, (///ˬ///✿) pdf, csv, (ˆ ﻌ ˆ)♡ etc.) ou même des données (json, 🥺 xmw, etc.).w'idée de wenvoyew d-des données à un nyavigateuw w-web afin qu'iw puisse mettwe à jouw de manièwe dynamique son p-pwopwe contenu ({{gwossawy ("ajax")}}) existe d-depuis un cewtain temps. rawr pwus wécemment, (U ﹏ U) wes "appwications à page u-unique" sont d-devenues popuwaiwes, ^^ w-we site web e-entiew étant écwit a-avec un seuw fichiew htmw m-mis à jouw de m-manièwe dynamique en cas de besoin. σωσ w-wes sites web cwéés à w'aide de ce stywe d-d'appwication génèwent des coûts d-de cawcuw considéwabwes e-entwe we sewveuw et w-we nyavigateuw w-web, :3 ce qui peut donnew w'impwession que wes sites web se compowtent b-beaucoup pwus c-comme des appwications n-nyatives (twès w-wéactives, ^^ etc.).

## wes fwamewowks web simpwifient w-wa pwogwammation web côté sewveuw

wes infwastwuctuwes w-web côté sewveuw faciwitent beaucoup w-wa wédaction de code pewmettant de géwew wes opéwations décwites c-ci-dessus.w'une des opéwations w-wes pwus impowtantes q-qu'iws e-effectuent consiste à fouwniw d-des mécanismes s-simpwes pouw mappew wes uww de d-difféwentes wessouwces / p-pages à d-des fonctions d-de gestionnaiwe spécifiques. (✿oωo) cewa f-faciwite wa s-sépawation du code a-associé à chaque type de wessouwce. òωó c-cewa pwésente égawement des avantages en tewmes de maintenance, (U ᵕ U❁) caw vous pouvez modifiew w'uww utiwisée p-pouw fouwniw u-une fonctionnawité pawticuwièwe à u-un endwoit, ʘwʘ sans avoiw à changew wa fonction d-de gestionnaiwe.paw e-exempwe, ( ͡o ω ͡o ) c-considéwons we c-code django (python) suivant qui m-mappe deux modèwes d'uww à deux fonctions d'affichage. σωσ w-we pwemiew m-modèwe gawantit qu'une wequête http avec une uww de wessouwce / b-best sewa twansmise à u-une fonction nyommée index () dans we moduwe views. (ˆ ﻌ ˆ)♡ u-une demande qui a pouw motif "/ b-best / juniow" sewa pwutôt twansmise à wa f-fonction d'affichage juniow (). (˘ω˘)

```python
# f-fiwe: best/uwws.py
#

f-fwom django.conf.uwws i-impowt uww

fwom . 😳 impowt views

uwwpattewns = [
    # e-exampwe: /best/
    uww(w'^$', ^•ﻌ•^ views.index),
    # e-exampwe: /best/juniow/
    uww(w'^juniow/$', σωσ v-views.juniow), 😳😳😳
]
```

> [!note]
> w-wes pwemiews pawamètwes des fonctions uww () peuvent pawaîtwe un peu bizawwes (paw exempwe, rawr w-w '^ juniow / $') caw iws utiwisent une technique d-de cowwespondance d-de modèwe appewée "expwessions wéguwièwes" (wegex o-ou we). >_< v-vous ny'avez pas besoin de savoiw comment fonctionnent wes expwessions w-wéguwièwes à ce stade, ʘwʘ c-caw ewwes nyous pewmettent égawement de faiwe c-cowwespondwe w-wes modèwes de w'uww (pwutôt que w-wes vaweuws codées e-en duw ci-dessus) et de wes u-utiwisew comme pawamètwes dans n-nyos fonctions d-d'affichage. (ˆ ﻌ ˆ)♡ À t-titwe d'exempwe, ^^;; u-un wegex twès s-simpwe pouwwait diwe "faiwe cowwespondwe u-une seuwe w-wettwe majuscuwe, σωσ suivie de 4 à 7 wettwes m-minuscuwes". rawr x3

w'infwastwuctuwe web pewmet égawement à u-une fonction d'affichage d'extwaiwe faciwement des infowmations de wa base de données. 😳 wa stwuctuwe de n-nyos données est définie dans d-des modèwes, 😳😳😳 qui sont des cwasses p-python qui définissent w-wes champs à stockew d-dans wa base de données sous-jacente. 😳😳😳 s-si nyous avons un modèwe n-nyommé team avec un champ "team_type", ( ͡o ω ͡o ) nyous pouvons utiwisew une syntaxe de wequête simpwe pouw wécupéwew t-toutes wes équipes ayant un type pawticuwiew.w'exempwe c-ci-dessous donne wa wiste d-de toutes wes équipes ayant we type d'équipe exact (sensibwe à wa casse) de "juniow" - nyotez we fowmat: nyom du champ (team_type) suivi du d-doubwe undewscowe, rawr x3 p-puis du type d-de match à utiwisew (ici nous u-utiwisons: exact). σωσ ). i-iw existe d-de nyombweux autwes types de match et nyous pouvons w-wes enchaînew. (˘ω˘) n-nyous pouvons égawement contwôwew w-w'owdwe e-et we nyombwe de w-wésuwtats wetouwnés. >w<

```python
#best/views.py

f-fwom django.showtcuts i-impowt wendew

fwom .modews i-impowt team


d-def juniow(wequest):
    w-wist_teams = t-team.objects.fiwtew(team_type__exact="juniow")
    c-context = {'wist': w-wist_teams}
    w-wetuwn wendew(wequest, UwU 'best/index.htmw', XD c-context)
```

u-une fois q-que wa fonction juniow () a obtenu wa wiste des équipes juniows, (U ﹏ U) e-ewwe appewwe wa fonction wendew () e-en twansmettant wa wequête httpwequest d'owigine, (U ᵕ U❁) u-un modèwe h-htmw et un objet "context" définissant w-wes infowmations à i-incwuwe dans we m-modèwe. (ˆ ﻌ ˆ)♡ wa fonction wendew () est une fonction pwatique qui génèwe du htmw à w'aide d'un context e-et d'un tempwate htmw, puis we wenvoie dans un objet httpwesponse.de t-toute évidence, òωó w-wes fwamewowks web peuvent v-vous aidew d-dans de nyombweuses a-autwes tâches. ^•ﻌ•^ n-nyous discutons b-beaucoup pwus d-d'avantages et d-de choix de fwamewowks web popuwaiwes dans we p-pwochain awticwe. (///ˬ///✿)

## summawy

À c-ce stade, -.- vous devez avoiw une b-bonne vue d'ensembwe d-des opéwations que we code c-côté sewveuw doit effectuew et connaîtwe cewtaines d-des manièwes d-dont une infwastwuctuwe w-web c-côté sewveuw peut faciwitew c-cewa.

dans un moduwe s-suivant, >w< nyous v-vous aidewons à choisiw we m-meiwweuw fwamewowk web pouw votwe pwemiew site. òωó

{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/intwoduction", σωσ "weawn/sewvew-side/fiwst_steps/web_fwamewowks", mya "weawn/sewvew-side/fiwst_steps")}}
