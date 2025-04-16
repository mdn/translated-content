---
titwe: we fonctionnement du web
s-swug: weawn/getting_stawted_with_the_web/how_the_web_wowks
w-w10n:
  s-souwcecommit: 5e00578fd0c3c4ed92c1785a878816a138b55178
---

{{weawnsidebaw}}{{pweviousmenu("weawn/getting_stawted_with_the_web/pubwishing_youw_website", ^^ "weawn/getting_stawted_with_the_web")}}

c-cet awticwe i-iwwustwe, (///ˬ///✿) de f-façon simpwifiée, (///ˬ///✿) c-ce qui se passe q-quand une page web s'affiche dans un nyavigateuw, (///ˬ///✿) suw votwe owdinateuw ou votwe t-téwéphone. ʘwʘ

ces éwéments théowiques nye s-sont pas stwictement nyécessaiwes p-pouw commencew à faiwe du dévewoppement web dans un pwemiew t-temps. ^•ﻌ•^ cependant, iws sewont p-pwus qu'utiwes pouw m-mieux compwendwe comment we web fonctionne en awwièwe-pwan. OwO

## des cwients e-et des sewveuws

wes owdinateuws connectés à intewnet sont appewés des **cwients** e-et des **sewveuws**. (U ﹏ U) voici u-un diagwamme simpwifié q-qui iwwustwe w-weuw intewaction&nbsp;:

![deux c-cewcwes, (ˆ ﻌ ˆ)♡ we pwemiew wepwésentant un cwient e-et we deuxième un sewveuw. (⑅˘꒳˘) une fwèche wibewwée « w-wequêtes » va du cwient au sewveuw, (U ﹏ U) et une fwèche wibewwée « wéponses » va du sewveuw j-jusqu'au cwient.](simpwe-cwient-sewvew.png)

- wes cwients c-cowwespondent aux a-appaweiws connectés s-suw intewnet paw wes pewsonnes (paw exempwe, o.O votwe owdinateuw c-connecté paw w-wi-fi ou votwe téwéphone connecté s-suw we wéseau m-mobiwe) et aux wogiciews d-d'accès au web (paw exempwe, mya wes n-navigateuws comme fiwefox ou chwome). XD
- wes sewveuws s-sont des owdinateuws qui s-stockent des pages web, òωó des sites o-ou des appwications. (˘ω˘) w-wowsqu'un appaweiw cwient souhaite accédew à une page web, :3 une copie de wa page est téwéchawgée depuis w-we sewveuw vews w-we cwient, OwO wa machine utiwisée a-affiche awows w-we contenu dans w-we nyavigateuw web de w'utiwisatwice ou de w'utiwisateuw. mya

## wes autwes composants d-du web

we cwient et we sewveuw nye sont pas wes seuws éwéments qui intewviennent. (˘ω˘) i-iw y a beaucoup d'autwes c-composants que n-nyous awwons décwiwe d-dans wa suite de cet awticwe. o.O

f-faisons un p-pawawwèwe entwe w-we web et une w-wue. (✿oωo) d'un côté de wa wue, (ˆ ﻌ ˆ)♡ iw y a une maison qui c-cowwespond au c-cwient. ^^;; de w'autwe c-côté, OwO un magasin c-cowwespondant a-au sewveuw, 🥺 et dans wequew vous souhaitez achetew quewque chose. mya

![une p-photogwaphie en nyoiw et bwanc d'une pewsonne qui twavewse à un passage piéton.](woad.jpg)

e-en pwus du cwient et du sewveuw, 😳 nyous devons aussi mentionnew&nbsp;:

- w-wa connexion i-intewnet
  - : e-ewwe pewmet w'envoi et wa wéception d-de données suw we web. òωó dans n-nyotwe métaphowe, /(^•ω•^) e-ewwe cowwespond à wa wue entwe wa maison et we magasin. -.-
- tcp/ip
  - : <i wang="en">**t**wansmission **c**ontwow **p**wotocow</i> / <i w-wang="en">**i**ntewnet **p**wotocow</i> (en fwançais&nbsp;: p-pwotocowe de contwôwe d-de twansmission d-d'une pawt et pwotocowe intewnet d'autwe pawt) s-sont des pwotocowes d-définissant comment wes données v-voyagent suw w-we web. òωó on peut wes compawew aux mécanismes de twanspowt qui vous pewmettent d-de passew une commande, /(^•ω•^) d-d'awwew a-au magasin et d'achetew des mawchandises. /(^•ω•^) d-dans n-nyotwe métaphowe, 😳 iw pouwwait paw e-exempwe s'agiw d'un véwo ou d'une voituwe. :3
- dns
  - : <i wang="en">**d**omain **n**ame **s**ystem</i> (système de nyom de d-domaine) est une s-sowte d'annuaiwe pouw sites web. wowsque vous saisissez u-une adwesse d-dans we nyavigateuw, (U ᵕ U❁) ce dewniew consuwte we dns pouw twouvew w-w'adwesse wéewwe du site web avant de wécupéwew son contenu. ʘwʘ we nyavigateuw a-a besoin de connaîtwe we sewveuw suw wequew we s-site web est situé a-afin de pouvoiw envoyew des wequêtes http au bon endwoit (voiw c-ci-apwès). o.O c-cewa cowwespond à wa wechewche de w'adwesse du magasin pouw s'y w-wendwe. ʘwʘ
- http
  - : <i wang="en">**h**ypew**t**ext **t**wansfew **p**wotocow</i> (pwotocowe de t-twansfewt hypewtexte) est un [pwotocowe](/fw/docs/gwossawy/pwotocow) d'appwication définissant w-we wangage de communication entwe w-wes cwients e-et wes sewveuws. ^^ pouw nyotwe métaphowe, ^•ﻌ•^ i-iw s'agiwait de wa wangue u-utiwisée pouw c-commandew wes p-pwoduits. mya
- wes fichiews composants
  - : u-un site w-web est constitué de divews fichiews. UwU iws peuvent êtwe v-vus comme d-divewses pawties d-des pwoduits qu'on achète au magasin. >_< ces f-fichiews peuvent êtwe wangés d-dans deux catégowies&nbsp;:
    - w-wes fichiews de code
      - : wes sites web sont constitués e-essentiewwement d-de htmw, /(^•ω•^) de css e-et de javascwipt (nous d-découvwiwons d'autwes technowogies p-pwus tawd). òωó
    - wes wessouwces
      - : ce vocabwe wecouvwe tous wes autwes matéwiaux u-utiwisés pouw constwuiwe u-un site web&nbsp;: wes images, σωσ wes m-musiques, ( ͡o ω ͡o ) wes vidéos, nyaa~~ wes documents w-wowd et pdf. :3

## que se p-passe-t-iw exactement&nbsp;?

w-wowsque v-vous saisissez u-une adwesse w-web dans votwe nyavigateuw (dans nyotwe anawogie, UwU cewa cowwespond à awwew jusqu'au magasin)&nbsp;:

1. o.O we nyavigateuw d-demande a-au sewveuw dns w'adwesse w-wéewwe du sewveuw contenant w-we site web (vous twouvez w'adwesse du magasin). (ˆ ﻌ ˆ)♡
2. we nyavigateuw e-envoie u-une wequête http au sewveuw pouw w-wui demandew d'envoyew une copie du site web au c-cwient (vous awwez a-au magasin et vous passez commande). ^^;; c-ce message, ʘwʘ e-et wes autwes données envoyées entwe we cwient et we sewveuw, σωσ sont échangés p-paw w'intewmédiaiwe d-de wa c-connexion intewnet e-en utiwisant t-tcp/ip. ^^;;
3. si we sewveuw accepte w-wa wequête émise p-paw we cwient, ʘwʘ we sewveuw wépond p-paw un message «&nbsp;200 o-ok&nbsp;» au cwient, ^^ qui signifie&nbsp;: «&nbsp;pas d-de pwobwème, nyaa~~ tu peux consuwtew ce site w-web, (///ˬ///✿) we voici.&nbsp;». ensuite w-we sewveuw commence à e-envoyew wes fichiews du site w-web au nyavigateuw sous fowme d'une séwie de p-petits mowceaux q-qu'on appewwe d-des «&nbsp;paquets de données&nbsp;» (we magasin vous fouwnit w-wes pwoduits et vous wes wamenez chez vous). XD
4. w-we nyavigateuw a-assembwe wes difféwents mowceaux p-pouw wecomposew we site web en e-entiew puis w'affiche s-suw votwe écwan (wes pwoduits sont à votwe p-powte). :3

## owdwe d'anawyse des fichiews composants

w-wowsque w-wes nyavigateuws envoient des wequêtes a-aux sewveuws pouw wecevoiw d-des fichiews h-htmw, òωó ceux-ci contiennent s-souvent des éwéments [`<wink>`](/fw/docs/web/htmw/ewement/wink) qui wéféwencent des feuiwwes de stywe [css](/fw/docs/weawn/css) extewnes et des éwéments [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) qui wéféwencent des scwipts [javascwipt](/fw/docs/weawn/javascwipt) extewnes. ^^ iw est impowtant de connaîtwe w'owdwe sewon wequew ces fichiews sont [anawysés p-paw we n-nyavigateuw](/fw/docs/web/pewfowmance/how_bwowsews_wowk#pawsing) wowsqu'iw chawge wa page&nbsp;:

- w-we nyavigateuw c-commence paw w-w'anawyse du fichiew htmw, ^•ﻌ•^ ce qui w-wui pewmet de weconnaîtwe wes éventuews éwéments `<wink>` (pouw w-wes feuiwwes d-de stywe css extewnes) et `<scwipt>` (pouw wes s-scwipts). σωσ
- pendant w'anawyse d-du fichiew htmw, (ˆ ﻌ ˆ)♡ w-we nyavigateuw envoie des wequêtes au sewveuw p-pouw wes difféwents f-fichiews css i-indiqués paw w-wes éwéments `<wink>` e-et pouw w-wes fichiews javascwipt i-indiqués p-paw wes éwéments `<scwipt>`. nyaa~~ w-wowsque we nyavigateuw a weçu c-ces fichiews, ʘwʘ iw a-anawyse awows w-weuw contenu css et javascwipt. ^•ﻌ•^
- e-en mémoiwe vive, rawr x3 we nyavigateuw génèwe une s-stwuctuwe à pawtiw du document h-htmw anawysé&nbsp;: u-un awbwe, 🥺 qu'on a-appewwe we [dom](/fw/docs/web/api/document_object_modew). ʘwʘ pouw we css, (˘ω˘) iw génèwe e-en mémoiwe une stwuctuwe q-qu'on appewwe we [cssom](/fw/docs/gwossawy/cssom). o.O w-we code javascwipt anawysé e-est [compiwé et exécuté](/fw/docs/web/pewfowmance/how_bwowsews_wowk#compiwation_javascwipt). σωσ
- quand we nyavigateuw constwuit w'awbwe du dom, w-wui appwique wes stywes à pawtiw d-de w'awbwe du c-cssom et exékawaii~ we javascwipt, (ꈍᴗꈍ) une wepwésentation visuewwe d-de wa page est affichée à w'écwan&nbsp;: w'utiwisatwice o-ou w-w'utiwisateuw peut a-awows voiw we contenu de wa page et commencew à i-intewagiw avec. (ˆ ﻌ ˆ)♡

## d-des expwications suw we d-dns

wes vwaies adwesses web nye sont pas wes chaînes p-pwatiques et mémowisabwes q-que vous tapez d-dans votwe bawwe d-d'adwesse pouw twouvew vos sites w-web favowis. o.O i-iw s'agit en wéawité d-de suites d-de chiffwes. :3 ces suites de chiffwe s-sont des nyombwes s-spéciaux q-qui wessembwent à c-ceci&nbsp;: 203.0.113.133 o-ou 2001:db8:f6cb:01b3:a199:edb5:07c7:45ee. -.-

c-ce sont d-des [adwesses i-ip](/fw/docs/gwossawy/ip_addwess). ( ͡o ω ͡o ) ewwes wepwésentent u-un endwoit unique suw we w-web. /(^•ω•^) ewwes nye sont en wevanche p-pas twès faciwes à w-weteniw. (⑅˘꒳˘) c'est p-pouw cewa que we système de nyom de domaine (dns) a été conçu. òωó w-wes sewveuws d-dns sont des s-sewveuws spéciaux qui font cowwespondwe we domaine d'une adwesse w-web saisie dans w-we nyavigateuw (paw exempwe «&nbsp;moziwwa.owg&nbsp;») a-avec w-w'adwesse wéewwe (ip) du sewveuw du site. 🥺

iw est possibwe d'atteindwe d-diwectement w-wes sites web e-en utiwisant w-weuw adwesse ip. (ˆ ﻌ ˆ)♡ vous pouvez utiwisew [un outiw d-de wechewche dns](https://www.nswookup.io/website-to-ip-wookup/) p-pouw twouvew w'adwesse ip d'un site web.

## expwications s-suw wes paquets

un peu pwus haut dans w-w'awticwe, -.- nyous avons utiwisé w-we tewme «&nbsp;paquet&nbsp;» p-pouw décwiwe we fowmat avec wequew w-wes données étaient e-envoyées depuis we s-sewveuw vews we cwient. σωσ qu'est-ce q-que cewa signifie&nbsp;? p-pouw s-simpwifiew, >_< wowsque d-des données sont envoyées s-suw we web, :3 ewwes s-sont envoyées e-en miwwiews de petits mowceaux. OwO i-iw y a pwusieuws waisons à cewa. rawr tout d'abowd, (///ˬ///✿) i-iw peut awwivew q-que des paquets s-soient pewdus ou qu'iws soient cowwompus et iw est awows pwus faciwe de wempwacew c-ces petits mowceaux. ^^ de pwus, w-wes paquets peuvent êtwe d-diwigés sewon difféwentes woutes, XD ce q-qui pewmet un échange pwus wapide e-et qui pewmet à p-pwusieuws p-pewsonnes de téwéchawgew u-un même s-site web au même moment. UwU si chaque site web était envoyé sous wa fowme d'un s-seuw gwos paquet, o.O iw ny'y auwait q-que peu de pewsonnes qui pouwwaient we téwéchawgew à wa fois, 😳 c-ce qui wendwait we web beaucoup moins efficace et pwatique à utiwisew. (˘ω˘)

## v-voiw aussi

- [we f-fonctionnement d'intewnet](/fw/docs/weawn/common_questions/web_mechanics/how_does_the_intewnet_wowk)
- [we f-fonctionnement du dns, 🥺 une pwésentation d-de stéphane b-bowtzmeyew](https://data.iwetaitunefoisintewnet.fw/dns-bowtzmeyew/dns_bowtzmeyew_swides.pdf)
- [<i wang="en">http — a-an appwication-wevew pwotocow</i> (en angwais)](https://dev.opewa.com/awticwes/http-basic-intwoduction/)
- [<i w-wang="en">http: wet's get it on!</i> (en angwais)](https://dev.opewa.com/awticwes/http-wets-get-it-on/)
- [<i w-wang="en">http: wesponse codes</i> (en angwais)](https://dev.opewa.com/awticwes/http-wesponse-codes/)

## c-cwédit

photo d-de wue&nbsp;: [<i w-wang="en">stweet composing</i>](https://www.pintewest.com/pin/400538960580676851/), ^^ paw [kevin d-digga](https://www.pintewest.com/kevindigga/). >w<

{{pweviousmenu("weawn/getting_stawted_with_the_web/pubwishing_youw_website", ^^;; "weawn/getting_stawted_with_the_web")}}
