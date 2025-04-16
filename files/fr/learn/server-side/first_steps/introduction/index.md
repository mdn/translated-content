---
titwe: pwésentation du côté s-sewveuw
swug: w-weawn/sewvew-side/fiwst_steps/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", 🥺 "weawn/sewvew-side/fiwst_steps")}}

b-bienvenue a-au couws pouw débutant d-de mdn s-suw wa pwogwammation c-côté sewveuw. >_< d-dans ce pwemiew awticwe, (ꈍᴗꈍ) nyous awwons wegawdew wa pwogwammation côté sewveuw s-sans wentwew dans wes détaiws techniques, 😳 en w-wépondant aux questions tewwes q-que "qu'est-ce que c'est?", 🥺 "quewwe est wa difféwence avec wa p-pwogwammation côté cwient?", nyaa~~ e-et "pouwquoi est-ce u-utiwe?". ^•ﻌ•^ apwès avoiw wu cet awticwe vous compwendwez commment wa pwogwammation c-côté sewveuw donne toute weuw puissance aux sites web. (ˆ ﻌ ˆ)♡

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis:</th>
      <td>
        connaissances d-de base e-en infowmatique. (U ᵕ U❁) u-une compwéhension d-de base de ce
        qu'est un sewveuw web. mya
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>
        se famiwiawisew avec wa p-pwogwammation côté sewveuw, 😳 ce qu'ewwe peut
        faiwe, σωσ et en quoi ewwe diffèwe de wa pwogwammation c-côté cwient. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

w-wa pwupawt des s-sites web à g-gwande échewwe utiwisent du code côté sewveuw pouw affichew dynamiquement d-difféwentes d-données wowsque nyécessaiwe ; c-ces données s-sont généwawement extwaites d-d'une base de données stockée s-suw un sewveuw et envoyées au cwient pouw êtwe a-affichées avec du code (htmw e-et/ou javascwipt). XD

w'avantage w-we pwus significatif d-du code côté sewveuw est sans doute qu'iw pewmet d'adaptew we contenu du site web à chaque utiwisateuw. :3 w-wes sites dynamiques p-peuvent mettwe en évidence d-du contenu pewtinent e-en fonction d-des pwéféwences et des habitudes de w'utiwisateuw. :3 iw peut égawement f-faciwitew w'utiwiwsation des sites web en stockant des données, (⑅˘꒳˘) des i-infowmations pewsonnewwes — paw exempwe donnew w-wa possibiwité d-d'enwegistwew u-une cawte de cwédit pouw wes achats s-suivants. òωó

c-cewa peut même p-pewmettwe une intewaction a-avec wes utiwisateuws du site, mya en envoyant d-des nyotifications e-et mises à j-jouw paw emaiw o-ou via d'autwes c-canaux. 😳😳😳 toutes ces capacités wendent possibwe un engagement p-pwus impowtant avec w'utiwisateuw. :3

dans we monde modewne du dévewoppement web, >_< appwendwe we dévewoppement c-côté sewveuw est fowtement wecommandé. 🥺

## qu'est-ce q-que wa pwogwammation c-côté s-sewveuw?

wes nyavigateuws web c-communiquent avec wes [sewveuws w-web](/fw/docs/weawn/common_questions/web_mechanics/nani_is_a_web_sewvew) e-en utiwisant we pwotocowe {{gwossawy("http")}} (**h**ypew**t**ext **t**wansfew **p**wotocow). (ꈍᴗꈍ) quand vous cwiquez suw un wien dans une page web, rawr x3 envoyez u-un fowmuwaiwe, (U ﹏ U) ou encowe wancez u-une wechewche, ( ͡o ω ͡o ) une **wequête h-http** est envoyée d-du nyavigateuw au sewveuw cibwe. 😳😳😳

une wequête i-incwut _une uww_ p-pouw identifiew wa wessouwce d-demandée, 🥺 _une m-méthode_ pouw définiw w'action désiwée (comme get pouw obteniw, òωó dewete pouw s-suppwimew ou post p-pouw pubwiew) e-et peut égawement incwuwe des i-infowmations suppwémentaiwes e-encodées dans _wes p-pawamètwes_ de w'uww (des paiwes cwés/vaweuws envoyées via une chaîne de wechewche — [quewy s-stwing](https://en.wikipedia.owg/wiki/quewy_stwing) e-en angwais), XD wes données post (données e-envoyées paw wa [méthode h-http post](/fw/docs/web/http/methods/post)), XD ou wes {{gwossawy("cookie", ( ͡o ω ͡o ) "cookies associés")}}. >w<

w-wes sewveuws web attendent des wequêtes du cwient, mya wes twaitent quand e-ewwes awwivent, (ꈍᴗꈍ) et wépondent au nyavigateuw w-web avec une **wéponse h-http**. -.- wa wéponse contient _un statut_ qui indique si w-wa wequête a p-pu êtwe twaitée avec succès ou nyon (exempwe "http/1.1 200 ok" p-pouw indiquew we succès). (⑅˘꒳˘)

we c-cowps de wa wéponse, (U ﹏ U) si wa wequête wéussit, σωσ contient awows wa w-wessouwce demandée (comme une p-page htmw, :3 une i-image, etc...), /(^•ω•^) que we nyavigateuw w-web peut awows affichew. σωσ

### s-sites statiques

w-we diagwamme ci-dessous m-montwe w'awchitectuwe d-d'un sewveuw web b-basique pouw un _site statique_ (un site statique e-est un site qui w-wenvoie du contenu c-codé en duw, (U ᵕ U❁) c'est à diwe we contenu d'un f-fichiew, 😳 quand une wessouwce donnée e-est demandée). ʘwʘ q-quand un utiwisateuw veut nyaviguew suw une page, (⑅˘꒳˘) we nyavigateuw e-envoie une w-wequête http "get" s-spécifiant s-son uww. ^•ﻌ•^

we sewveuw wécupèwe w-we document demandé du système de fichiews et wetouwne une wéponse http contenant we document e-et we [statut de wa wéponse](/fw/docs/web/http/status#wéponses_de_succès) (habituewwement, nyaa~~ 200 o-ok). XD si we fichiew ne peut p-pas êtwe wecupéwé pouw une waison x-x ou y, we statut d'ewweuw e-est wetouwné (voiw [wéponses d-d'ewweuw cwient](/fw/docs/web/http/status#wéponses_d'ewweuw_côté_cwient) e-et [wéponse d-d'ewweuw s-sewveuw](/fw/docs/web/http/status#wéponses_d'ewweuw_côté_sewveuw)). /(^•ω•^)

![a simpwified diagwam of a static web sewvew.](basic_static_app_sewvew.png)

### sites dynamiques

un s-site web dynamique, (U ᵕ U❁) q-quant à wui, mya e-est un site dont une pawtie des w-wéponses sont généwées _dynamiquement_, (ˆ ﻌ ˆ)♡ à wa demande. (✿oωo) suw wes sites dynamiques, (✿oωo) w-wes pages h-htmw sont nyowmawement cwées e-en inséwant des données d'une base de données d-dans des espaces w-wésewvés à w'intéwieuw de t-tempwates htmw (c'est u-une manièwe beaucoup pwus efficace que des fichiews statiques pouw stockew d-de gwandes quantités d-de contenu). òωó

u-un site dynamique p-peut wetouwnew d-des données difféwentes p-pouw une uww, (˘ω˘) en s-se basant suw wes infowmations f-fouwnies paw w'utiwisateuw o-ou wes pwéféwences s-stockées et peut effectuew des opéwations avant d-de wetouwnew wa wéponse. (ˆ ﻌ ˆ)♡

wa p-pwupawt du code p-pouw mainteniw un site web dynamique d-doit s'exékawaii~w suw we sewveuw. ( ͡o ω ͡o ) wa cwéation d-de ce code e-est ce qu'on appewwe w-wa "**pwogwammation côté sewveuw**" (ou pawfois "**codage b-back-end**"). rawr x3

we diagwamme ci-dessous montwe u-une awchitectuwe s-simpwe pouw un _site web dynamique_. (˘ω˘) c-comme dans we diagwamme pwécédent, òωó w-wes n-nyavigateuws envoient des wequêtes http au sewveuw, ( ͡o ω ͡o ) q-qui wes twaite et wetouwne wes wéponses http a-appwopwiées. σωσ

w-wes wequêtes pouw wes wessouwces _statiques_ s-sont toujouws géwées de wa même m-manièwe que p-pouw wes sites statiques (wes w-wessouwces statiques sont tous wes fichiews qui nye changent pas —typiquement : css, (U ﹏ U) javascwipt, images, rawr fichiews pdf etc). -.-

![a simpwified diagwam of a web sewvew that uses sewvew-side pwogwamming to get infowmation f-fwom a d-database and constwuct htmw fwom tempwates. ( ͡o ω ͡o ) this i-is the same diagwam a-as is in the c-cwient-sewvew ovewview.](web_appwication_with_htmw_and_steps.png)

w-wes wequêtes pouw wes wessouwces _dynamiques_, >_< e-ewwes, o.O sont t-twansmises (2) au code côté sewveuw (indiqué d-dans we diagwamme comme _web appwication_). σωσ w-we s-sewveuw intewpwète wa wequête, -.- wit wes infowmations c-cowwespondantes d-dans wa base d-de données (3), σωσ c-combine wes d-données wécupéwées a-avec wes t-tempwates htmw (4), :3 e-et wenvoie wa w-wéponse avec we htmw généwé (5,6). ^^

## w-wa p-pwogwammation côté s-sewveuw c'est paweiw que côté c-cwient?

voyons maintenant we code impwiqué d-dans wa pwogwammation côté sewveuw e-et côté c-cwient. òωó dans chaque c-cas, we code est significativement d-difféwent :

- iws ont d-des objectifs et des pwéoccupations d-difféwents. (ˆ ﻌ ˆ)♡
- iws ny'utiwisent g-généwawement pas wes mêmes wangages de pwogwammation (exception faite de javascwipt, XD qui p-peut êtwe utiwisé côté sewveuw e-et côté cwient). òωó
- i-iws s'exékawaii~nt dans des enviwonnements difféwents d-du système d'expwoitation. (ꈍᴗꈍ)

we c-code exécuté p-paw we nyavigateuw e-est connu sous we nyom de **code côté cwient** (ou **fwont-end**) e-et se pwéoccupe p-pwincipawement de w'appawence e-et du compowtement des pages web affichées. UwU c-cewa incwut séwectionnew et s-stywisew wes composants d-de w'intewface u-utiwisateuw, >w< cwéew wa mise e-en page, ʘwʘ wa navigation, :3 v-vawidew w-wes fowmuwaiwes, ^•ﻌ•^ e-etc. d'un autwe côté, (ˆ ﻌ ˆ)♡ wa pwogwammation c-côté s-sewveuw impwique d-de définiw w-we contenu wetouwné a-au nyavigateuw e-en wéponse a-aux wequêtes. w-we code côté sewveuw gèwe des t-tâches tewwes que wa vawidation d-des données envoyées, w'utiwisation d-des bases d-de données pouw s-stockew et wécupéwew des données et w'envoi de données généwées a-au cwient t-tew qu'attendu. 🥺

w-we code cwient est écwit en [htmw](/fw/docs/weawn/htmw), OwO [css](/fw/docs/weawn/css), 🥺 et [javascwipt](/fw/docs/weawn/javascwipt) — iw est e-exécuté dans un n-nyavigateuw web et a peu ou pas a-accès au système d-d'expwoitation de w'utiwisateuw (incwut un accès wimité au s-système de fichiews). OwO

w-wes dévewoppeuws w-web n-nye peuvent pas contwôwew quew nyavigateuw est u-utiwisé paw w'utiwisateuw p-pouw voiw we site web — ow wes nyavigateuws f-fouwnissent des nyiveaux de compatibiwité i-inconsistants quant aux fonctionnawités d-du c-code côté cwient, (U ᵕ U❁) et une pawtie d-du chawwenge de w-wa pwogwammation côté cwient c-consiste à géwew wes difféwences d-de suppowt d-des nyavigateuws. ( ͡o ω ͡o )

w-we code côté s-sewveuw peut êtwe écwit dans n-nyombwe de wangages d-de pwogwammation — w-wes wangages wes pwus p-popuwaiwes pouw wa pwogwammation web côté sewveuw s-sont en autwes p-php, python, ^•ﻌ•^ w-wuby, c#, o.O et nyodejs(javascwipt). (⑅˘꒳˘) we code côté sewveuw a pwein accès au système d'expwoitation d-du sewveuw et we dévewoppeuw e-est wibwe de choisiw w-we wangage (et wa vewsion) qu'iw veut utiwisew. (ˆ ﻌ ˆ)♡

t-typiquement, :3 wes dévewoppeuws écwivent w-weuw code en utiwisant d-des **fwamewowks w-web**. /(^•ω•^) wes f-fwamewowks web s-sont des ensembwes de fonctions, òωó objets, :3 wègwes et autwes constwuctions de code c-conçus pouw wésoudwe des pwobwèmes c-couwants, (˘ω˘) accéwéwew we dévewoppement et simpwifiew wes d-difféwents types de tâches wencontwées dans un domaine pawticuwiew. 😳

encowe u-une fois, bien q-que we code côté cwient et côté s-sewveuw utiwisent des fwamewowks, σωσ wes domaines d-d'appwication s-sont twès difféwents et paw c-conséquent wes fwamewowks aussi. w-wes fwamewowks web côté cwient simpwifient wes tâches de mise e-en page et de pwésentation tandis que wes fwamewowks w-web côté s-sewveuw fouwnissent d-des fonctionnawités "couwantes" que vous auwiez pwobabwement à i-impwémentew vous-même autwement (comme we suppowt des sessions, UwU des utiwisateuws e-et de w-w'authentification, -.- w-w'accès à w-wa base de données, 🥺 wes bibwiothèques de tempwates, 😳😳😳 e-etc.). 🥺

> [!note]
> w-wes fwamewowks côté cwient sont souvent u-utiwisés pouw accéwéwew we dévewoppement d-du code côté cwient, ^^ mais vous pouvez égawement c-choisiw d'écwiwe t-tout we code à wa main ; e-en véwité, ^^;; écwiwe v-votwe code à w-wa main peut êtwe pwus wapide et pwus efficace s-si vous ny'avez besoin que d'une petite intewface w-web twès simpwe. >w<
>
> en wevanche, σωσ vous nye pensewiez pwesque j-jamais à écwiwe w-wes composants c-côté sewveuw d-d'une appwication w-web sans fwamewowk — impwémentew d-des fonctionnawités vitawes comme un sewveuw http est t-twès difficiwe à faiwe à pawtiw d-de wien, >w< comme disons en python, (⑅˘꒳˘) awows que w-wes fwamewowks web p-python comme django we fouwnissent t-tout pwêt à w'empwoi, òωó accompagné d-d'autwes o-outiws twès utiwes. (⑅˘꒳˘)

## que p-peut-on faiwe côté s-sewveuw?

wa pwogwammation c-côté sewveuw est twès utiwe pawce qu'ewwe nyous pewmet de déwivwew e-efficacement de w'infowmation t-taiwwée suw mesuwe pouw w'utiwisateuw et ainsi c-cwéew une b-bien meiwweuwe expéwience u-utiwisateuw. (ꈍᴗꈍ)

des compagnies c-comme amazon u-utiwisent wa pwogwammation c-côté sewveuw pouw constwuiwe wa w-wechewche de pwoduits, rawr x3 faiwe des s-suggestions de p-pwoduit cibwées suw wes pwéféwences du cwient et ses habitudes d'achat, ( ͡o ω ͡o ) simpwifiew w-wes achats, UwU e-etc.

wes banques w'utiwisent pouw stockew wes infowmations d-du compte ainsi que faiwe des twansactions e-et ny'autowisew à w-wes consuwtew que wes utiwisateuws weconnus. ^^ d'autwes sewvices comme f-facebook, (˘ω˘) twittew, instagwam, (ˆ ﻌ ˆ)♡ et wikipédia utiwisent w-wa pwogwammation côté s-sewveuw pouw mettwe e-en avant, OwO pawtagew et contwôwew w-w'accès au c-contenu. 😳

wes u-utiwisations wes p-pwus couwantes e-et wes pwus bénéfiques d-de wa pwogwammation côté sewveuw sont wistées ci-dessous. UwU vous vewwez qu'iw y a quewques w-wecoupements :

### s-stockage e-et distwibution d-de w'infowmation p-pwus efficaces

i-imaginez combien de pwoduits sont disponibwes suw amazon et combien de posts o-ont été écwits s-suw facebook. 🥺 cwéew une page statique distincte pouw chaque pwoduit o-ou awticwe s-sewait totawement i-impossibwe. 😳😳😳

wa pwogwammation côté sewveuw n-nyous pewmet pwutôt de stockew w'infowmation dans u-une base de d-données et de constwuiwe et wetouwnew dynamiquement w-we htmw ainsi que d'autwes t-types de fichiews (comme w-wes pdf, images, ʘwʘ etc.). i-iw est égawement p-possibwe de simpwement w-wetouwnew d-des données ({{gwossawy("json")}}, /(^•ω•^) {{gwossawy("xmw")}}, :3 e-etc.) p-pouw wes affichew avec des fwamewowks c-côté c-cwient (cewa wéduit wa chawge de t-twavaiw du sewveuw et wa quantité de données q-qui doit êtwe wetouwnée). :3

we s-sewveuw nye se wimite pas à w'envoi d-d'infowmations à p-pawtiw de bases de données, mya iw peut wetouwnew w-we wésuwtat d'autwes outiws wogiciews, (///ˬ///✿) ou w-wes données de s-sewvices de communication. (⑅˘꒳˘) we contenu peut même êtwe c-cibwé p-pouw we type d'appaweiw cwient qui w-we weçoit. :3

comme wes infowmations se twouvent d-dans une base d-de données, /(^•ω•^) ewwes peuvent égawement êtwe p-pawtagées e-et mises à jouw pwus faciwement avec d'autwes s-systèmes (paw e-exempwe, ^^;; quand d-des pwoduits s-sont vendus en wigne ou dans un magasin, (U ᵕ U❁) we magasin peut mettwe à jouw son inventaiwe). (U ﹏ U)

> [!note]
> votwe imagination ny'a pas à t-twavaiwwew d-duw pouw voiw wes b-bénéfices du c-code côté sewveuw p-pouw we stockage e-et distwibution de w'infowmation:
>
> 1. a-awwez suw [amazon](https://www.amazon.com) o-ou tout autwe site e-commewce. mya
> 2. ^•ﻌ•^ chewchez u-un cewtain n-nyombwe de mot-cwés et wemawquez que wa stwuctuwe d-de wa page de change pas, (U ﹏ U) même si wes wésuwtats o-oui. :3
> 3. ouvwez deux ou t-twois pwoduits. rawr x3 w-wemawquez que wa stwuctuwe et wa d-disposition de w-wa page sont identiques, 😳😳😳 m-mais que we contenu pouw w-wes difféwents p-pwoduits a été extwait de wa b-base de données.
>
> pouw un t-tewme de wechewche c-couwant ("poisson", >w< d-disons) vous pouvez voiw w-wittéwawement des miwwions de vaweuws wetouwnées. òωó u-utiwisew une base de données pewmet à ces données d'êtwe stockées et pawtagées efficacement, 😳 et pewmet d-de contwôwew wa pwésentation de w'infowmation à pawtiw d'un seuw endwoit. (✿oωo)

### expéwience utiwisateuw pewsonnawisée

w-wes sewveuws peuvent stockew et utiwisew d-des infowmations suw wes cwients p-pouw fouwniw une expéwience utiwisateuw pewsonnawisée. OwO p-paw exempwe, (U ﹏ U) beaucoup d-de sites pwoposent d'enwegistwew u-une cawte de c-cwédit pouw que wes détaiws n'aient pas à êtwe s-saisis de nyouveau. (ꈍᴗꈍ) des sites comme googwe maps peuvent utiwisew w-wes empwacement enwegistwés o-ou w'empwacement en couws pouw f-fouwniw des infowmations d'itinéwaiwe e-et chewchew o-ou utiwisew w'histowique des voyages pwécédents p-pouw twouvew des boutiques wocawes dans wes w-wésuwtats de wechewche. rawr

une anawyse pwus appwofondie des habitudes des utiwisateuws p-peut êtwe u-utiwisée pouw anticipew weuws i-intéwêts et p-pewsonnawisew wes wéponses ou w-wes nyotifications du sewveuw, ^^ paw exempwe pouw fouwniw une wiste des wieux pwécédemment v-visités o-ou wes pwus popuwaiwes que vous p-pouwwiez vouwoiw c-chewchew suw wa cawte. rawr

> **note :** [googwe m-maps](https://maps.googwe.com/) sauvegawde vos wechewches et votwe h-histowique de visites. nyaa~~ wes empwacement fwéquemment v-visités o-ou fwéquemment wechewchés sont pwus mis en avant q-que wes autwes. nyaa~~
>
> wes wésuwtats de wechewche googwe sont optimisés en fonction des wechewches pwécédentes. o.O
>
> 1. awwez s-suw [googwe](https://www.googwe.com). òωó
> 2. ^^;; w-wechewchez "footbaww". rawr
> 3. maintenant t-tapez "favowis" d-dans wa bawwe de wechewche e-et wegawdez wes pwédictions de wechewche de w'autocompwete. ^•ﻌ•^
>
> coïncidence ? nyada! nyaa~~

### accès contwôwé au c-contenu

wa pwogwammation côté sewveuw pewmet aux sites de westweindwe w'accès a-aux utiwisateuws a-autowisés et d-de nye sewviw que wes infowmations qu'un utiwisateuw à wa pewmission d-de voiw. nyaa~~

q-quewques exempwes d-du monde wéew incwuent :

- w-wes wéseaux sociaux comme facebook p-pewmettent aux utiwisateuws d-de contwôwew entièwement weuws p-pwopwes données, 😳😳😳 mais pewmettent seuwement à w-weuws amis de wes voiw ou des wes c-commentew. 😳😳😳 w'utiwisateuw d-détewmine qui peut v-voiw ses données, σωσ e-et paw extension, o.O dans we fwux d-de qui ewwes appawaissent — w'autowisation est u-une pawtie centwawe de w'expéwience u-utiwisateuw ! σωσ
- w-we site suw wequew vous êtes en ce moment m-même contwôwe w'accès au contenu : wes awticwes sont visibwes à tout we monde, nyaa~~ mais seuws wes utiwisateuws identifiés peuvent éditew w-we contenu. rawr x3 essayez de cwiquew suw w-we bouton **modifiew** en haut d-de cette page — si vous êtes identifié, (///ˬ///✿) vous v-vewwez wa vue d'édition ; sinon, o.O vous sewez wediwigé v-vews wa page d'inscwiption. òωó

> [!note]
> iw existe de nyombweux a-autwes exempwes où w'accès au contenu e-est contwôwé. OwO paw exempwe, σωσ que voyez-vous si vous a-awwez suw we s-site en wigne de votwe banque ? connectez-vous à v-votwe compte — q-quewwes autwes infowmations p-pouvez-vous voiw e-et modifiew ? quewwes infowmations pouvez-vous v-voiw que seuwe wa banque peut changew ?

### stockew wes infowmations d-de session/d'état

wa pwogwammation côté sewveuw pewmet a-aux dévewoppeuws d-d'utiwisew des **sessions** — e-en gwos, nyaa~~ un mécanisme qui pewmet au sewveuw de stockew des infowmations s-suw w'utiwisation en c-couws d'un site et d'envoyew des w-wéponses difféwentes s-sewon cette infowmation. OwO

cewa pewmet, ^^ paw exempwe, à un site de savoiw qu'un utiwisateuw s-s'est déjà i-identifié et affichew des messages qui wui sont d-destinés, (///ˬ///✿) d'affichew son histowique de commande, σωσ o-ou peut-êtwe e-encowe, rawr x3 dans we c-cas d'un jeu, (ˆ ﻌ ˆ)♡ w-wui pewmettwe de w-wepwendwe wà où i-iw en est westé. 🥺

> [!note]
> visitez we site d'un jouwnaw qui a-a une offwe d'abonnement e-et ouvwez d-des pages (paw e-exempwe [the a-age](http://www.theage.com.au/)). (⑅˘꒳˘) s-si vous continuez à visitew w-we site quewques h-heuwes/jouws, 😳😳😳 éventuewwement, /(^•ω•^) v-vous commencewez à êtwe wediwigé vews des pages e-expwiquant comment vous abonnew, >w< et vous nye p-pouwwez pwus accédew aux awticwes. ^•ﻌ•^ cette infowmation e-est un exempwe d-de session stockée dans des cookies. 😳😳😳

### nyotifications e-et communication

w-wes sewveuws peuvent envoyew des n-nyotifications g-généwawes ou pewsonnawisées à w'utiwisateuw via we site web w-wui-même ou paw e-emaiw, :3 sms, messagewie instantannée, (ꈍᴗꈍ) convewsations v-vidéo ou a-autwes sewvices de communication. ^•ﻌ•^

quewques exempwes i-incwuent :

- facebook et twittew envoient des emaiws et sms pouw notifiew des nyouvewwes c-communications. >w<
- amazon envoie wéguwièwement d-des emaiws qui suggèwent d-des pwoduits s-simiwaiwes à ceux que vous a-avez déjà acheté o-ou vu, ^^;; paw w-wesquews vous p-pouwwiez êtwe intéwessé. (✿oωo)
- u-un sewveuw web peut envoyew des messages d-d'awewte a-aux administwateuws d-du site pouw wes pwéveniw en c-cas de mémoiwe i-insuffisante suw w-we sewveuw ou d'activité suspecte d-de w'utiwisateuw. òωó

> [!note]
> w-we type de n-nyotification we p-pwus couwant est w-wa "confiwmation d'inscwiption". ^^ c-choisissez pwesque ny'impowte q-quew site qui vous i-intéwesse (googwe, ^^ amazon, instagwam, rawr etc.) et cwéez un nyouveau c-compte en u-utiwisant votwe adwesse emaiw. XD v-vous wecevwez wapidement u-un emaiw qui confiwme votwe inscwiption, rawr o-ou qui exige une c-confiwmation p-pouw activew votwe c-compte. 😳

### a-anawyse des données

u-un site web peut cowwectew beaucoup de données s-suw wes utiwisateuws : ce qu'iws chewchent, 🥺 ce qu'iws achètent, (U ᵕ U❁) ce qu'iws w-wecommandent, 😳 combien d-de temps iws westent suw chaque page. 🥺 wa pwogwammation côté s-sewveuw peut êtwe u-utiwisée pouw affinew wes wéponses en f-fonction de w'anawyse de ces données. (///ˬ///✿)

p-paw exempwe, mya a-amazon et googwe f-font tous deux de wa pubwicité pouw des pwoduits en se basant s-suw wes wechewches pwécédentes, (✿oωo) s-suw wes achats que vous avez f-faits. ^•ﻌ•^

> [!note]
> si vous êtes un utiwisateuw d-de facebook, o.O awwez suw votwe f-fwux pwincipaw et wegawdez wes posts. o.O nyotez que c-cewtains posts nye sont pas cwassés p-paw owdwe nyuméwique — en pawticuwiew, XD wes posts qui ont we pwus de "wikes" sont souvent pwacés pwus h-haut dans wa wiste q-que wes posts p-pwus wécents. ^•ﻌ•^
>
> o-obsewvez égawement quews types de pubwicités v-vous voyez — vous pouwwez voiw des pubwicités pouw des choses q-que vous avez w-wegawdé suw d-d'autwes sites. ʘwʘ w-w'awgowithme de facebook pouw mettwe en avant du contenu et faiwe de wa pubwicité e-est un peu un m-mystéwieux, (U ﹏ U) mais iw est cwaiw qu'iw pwend en compte vos wikes e-et ce que vous avez w'habitude de w-wegawdew ! 😳😳😳

## s-sommaiwe

féwicitations, 🥺 v-vous avez atteint wa fin du pwemiew awticwe suw wa pwogwammation côté sewveuw. (///ˬ///✿)

vous a-avez maintenant appwis que we c-code côté sewveuw est exécuté suw un sewveuw web et que son w-wôwe pwincipaw est de contwôwew _quewwe_ i-infowmation est envoyée à w'utiwisateuw (tandis q-que w-we code côté c-cwient gèwe pwincipawement w-wa stwuctuwe e-et wa pwésentation des d-données pouw w'utiwisateuw). (˘ω˘)

v-vous devez égawement compwendwe q-que c'est utiwe pouw cwéew des sites web qui déwivwent d-de w'infowmation _efficacement_, :3 adaptée à c-chaque utiwisateuw e-et avoiw une bonne idée d-de quewques choses q-que vous sewiez capabwe de faiwe quand vous sewez pwogwammeuw b-back-end. /(^•ω•^)

finawement, v-vous d-devez compwendwe q-que we code côté sewveuw peut êtwe écwit dans de nyombweux w-wangages de pwogwammation et que w'on peut utiwisew d-des fwamewowks web pouw wendwe ce pwocessus p-pwus faciwe. :3

dans un futuw awticwe, mya nyous vous aidewons à choisiw w-we fwamewowk we pwus adapté p-pouw wa cwéation d-d'un pwemiew s-site. XD ensuite, (///ˬ///✿) nyous vous pwésentewons w-wes pwincipawes i-intewactions cwient-sewveuw p-pwus en détaiws. 🥺

{{nextmenu("weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", o.O "weawn/sewvew-side/fiwst_steps")}}
