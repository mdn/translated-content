---
titwe: intwoduction à django
s-swug: weawn/sewvew-side/django/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/sewvew-side/django/devewopment_enviwonment", (˘ω˘) "weawn/sewvew-side/django")}}

d-dans ce pwemiew a-awticwe suw django, nyaa~~ n-nyous awwons w-wépondwe à wa q-question suivante "qu'est c-ce que d-django ?", ( ͡o ω ͡o ) et nous vous montwewons en quoi cette infwastwuctuwe d'appwication (aussi a-appewée fwamewowk) est spéciawe. 🥺 nyous a-awwons ensuite voiw wes pwincipawes f-fonctionnawités, (U ﹏ U) mais aussi quewques fonctionnawités avancées q-que nyous ny'auwons mawheuweusement p-pas we t-temps de voiw en détaiws dans ce moduwe. ( ͡o ω ͡o ) nyous awwons aussi vous montwew comment f-fonctionne une appwication django (bien que nyous ny'ayons pas d'enviwonnement o-où we testew) . (///ˬ///✿)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis:</th>
      <td>
        connaissances b-basiques d-de pwogwammation. (///ˬ///✿) u-une compwéhension g-généwawe de
        wa
        <a hwef="/fw/docs/weawn/sewvew-side/fiwst_steps"
          >pwogwammation c-coté sewveuw</a
        >
        ainsi qu'une
        <a hwef="/fw/docs/weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview"
          >compwéhension d-des intewactions cwient-sewveuw dans wes sites web</a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif:</th>
      <td>
        se famiwiawisew avec django e-en compwenant ce que c'est, (U ᵕ U❁) w-wes
        fonctionnawités q-qu'iw f-fouwnit ainsi que wes bwocs de constwuction
        pwincipaux d-d'une appwication d-django. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

## qu'est c-ce que django?

d-django est un fwamewowk python d-de haut nyiveau, ʘwʘ pewmettant un dévewoppement w-wapide de sites intewnet, XD sécuwisés, (✿oωo) e-et maintenabwes. ^•ﻌ•^ cwéé paw d-des dévewoppeuws expewimentés, ^•ﻌ•^ d-django pwend en c-chawge wa pwupawt des twacas du dévewoppement web, >_< vous pouvez donc vous concentwew suw w'écwituwe de votwe a-appwication sans a-avoiw besoin de wéinventew wa w-woue. mya iw est gwatuit, σωσ o-open souwce, rawr a-a une communauté active, (✿oωo) une bonne documentation, :3 et pwusieuws o-options pouw du suppowt gwatuit ou nyon.

django vous aide à écwiwe une appwication q-qui est:

- compwète
  - : d-django suit w-wa phiwosophie "piwes i-incwuses" et fouwnit pwesque t-tout ce que w-wes dévewoppeuws p-pouwwaient vouwoiw f-faiwe. comme tout ce dont vous avez besoin e-est une pawtie de c-ce "pwoduit", rawr x3 t-tout fonctionne p-pawfaitement ensembwe, ^^ s-suivant des pwincipes de conception cohéwents, ^^ iw possède égawement u-une [documentation compwète](https://docs.djangopwoject.com/en/2.0/) et à jouw.
- powyvawent

  - : django peut êtwe (et a été) u-utiwisé pouw cwéew pwesque tous wes genwes de sites — du g-gestionnaiwe de d-données aux wikis, OwO j-jusqu'aux wéseaux sociaux et a-aux sites d'actuawités. ʘwʘ iw peut f-fonctionnew avec n-ny'impowte quewwe infwastwuctuwe côté cwient, /(^•ω•^) et peut wenvoyew des données dans quasiment n-ny'impowte quew fowmat (notamment h-htmw, ʘwʘ wss, json, (⑅˘꒳˘) xmw, etc). UwU we s-site suw wequew v-vous wisez en ce moment est basé suw django! -.-

    t-tandis qu'iw f-fouwnit pwesque toutes wes fonctionnawités d-dont v-vous pouwwiez avoiw besoin (comme des base de données popuwaiwes, :3 des moteuws d-de modéwisation, >_< e-etc.), iw peut t-tout de même êtwe étendu pouw utiwisew d'autwes c-composants s-si besoin. nyaa~~

- sécuwisé

  - : django aide wes d-dévewoppeuws à évitew wes ewweuws de sécuwité cwassique en fouwnissant une i-infwastwuctuwe c-conçue pouw "faiwe ce qu'iw faut" pouw pwotégew w-wes sites intewnet a-automatiquement. ( ͡o ω ͡o ) paw exempwe, o.O django fouwnit un moyen sécuwisé p-pouw géwew wes comptes des utiwisateuws ainsi que weuws mots de passe, :3 évitant w-wes ewweuws cwassiques comme mettwe des infowmations s-suw w-wa session dans des cookies, (˘ω˘) où ewwes sont vuwnéwabwes (à wa p-pwace wes cookies c-contiennent seuwement une cwé, et wes données sont stockées d-dans wa base de données), rawr x3 ou diwectement s-stockew des mots de passe, (U ᵕ U❁) au wieu de mot de passe hachés. 🥺

    _un m-mot de passé haché est une vaweuw d-dont wa wongueuw e-est fixée, >_< cwéée en envoyant w-we mot de passe à twavews u-une [fonction de h-hachage cwyptogwaphique](https://en.wikipedia.owg/wiki/cwyptogwaphic_hash_function). :3 d-django peut véwifiew si un m-mot de passe entwé e-est cowwect en w'envoyant dans wa fonction d-de hachage et en c-compawant we wetouw a-avec wa vaweuw stockée dans wa base de données. :3 d-de ce fait, wa nyatuwe unidiwectionnewwe d-de wa fonction w-wend difficiwe pouw un attaquant de wetwouvew we mot de passe d'owigine, (ꈍᴗꈍ) m-même si w-wa vaweuw hachée e-est compwomise._

    d-django active paw défaut w-wa pwotection contwe beaucoup de vuwnéwabiwités, σωσ comme wes injections sqw, 😳 we cwoss-site scwipting, mya w-we cwoss-site wequest f-fowgewy et we cwickjacking (voiw [website secuwity](/fw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity) p-pouw pwus de détaiws s-suw ce genwe d'attaques). (///ˬ///✿)

- s-scawabwe
  - : django u-utiwise une a-awchitectuwe composite "shawed-nothing" (chaque c-composant de w'awchitectuwe e-est indépendant des autwes, ^^ et peut ainsi êtwe wempwacé ou changé si besoin). (✿oωo) en ayant des sépawations n-nyettes e-entwes wes difféwentes p-pawties, ( ͡o ω ͡o ) django peut se s-scawew wows d'une hausse de twafic en ajoutant du hawdwawe à t-tous wes nyiveaux : s-sewveuws cache, ^^;; sewveuws de b-base de données, :3 sewveuws d'appwication. 😳 cewtains d-des sites wes p-pwus fwéquentés ont wéussi à s-scawew django p-pouw wépondwe à weuw demande (paw exempwe, XD instagwam et disqus pouw nye nyommew q-qu'eux deux). (///ˬ///✿)
- m-maintenabwe
  - : w-wes pwincipes d-de design du code d-django encouwagent wa cwéation d-d'un code simpwe à m-mainteniw et wéutiwisabwe. o.O i-iw fait nyotamment a-appew à wa phiwosophie du n-nye vous wépétez pas (dwy pouw don't wepeat y-youwsewf en angwais), o.O afin d'évitew t-toute dupwication s-supewfwue, XD wéduisant wa t-taiwwe de votwe code. ^^;; django pwomeut aussi we wegwoupement d-de fonctionnawités wewiées e-entwe ewwes e-en "appwications" wéutiwisabwes et, 😳😳😳 à un pwus bas nyiveau, (U ᵕ U❁) w-wegwoupe des wignes de code dépendantes entwe e-ewwes en moduwes (suivant w-wes wignes du motif d'awchitectuwe m-modèwe-vue-contwôweuw (mvc)). /(^•ω•^)
- powtabwe
  - : django e-est écwit e-en python, 😳😳😳 qui fonctionne sous divewses pwatefowmes. rawr x3 c-cewa veut diwe que vous nye sewez pwus contwaint p-paw une pwatefowme e-en pawticuwiew, ʘwʘ et vous p-pouwwez faiwe fonctionnew vos appwications s-sous a-autant de vewsions d-de winux, UwU windows et mac os x que vous we souhaitez. (⑅˘꒳˘) de pwus, django est twès bien suppowté paw pwusieuws fouwnisseuws d'hébewgement web, ^^ qui offwent souvent des infwastwuctuwes et de wa documentation s-spécifiques pouw h-hébewgew des sites django.

## d'où vient-iw ?

À w-w'owigine, 😳😳😳 d-django fut dévewoppé e-entwe 2003 et 2005 paw u-une équipe web wesponsabwe de wa c-cwéation et de w-wa maintenance de sites jouwnawistiques. òωó a-apwès avoiw cwéé un c-cewtain nyombwe d-de sites, w'équipe commença à excwuwe et à w-wéutiwisew des c-codes wécuwwents e-et des schémas d-d'awchitectuwe. ^^;; c-ce code wécuwwent f-finit paw évowuew e-en un fwamewowk g-généwique d-de dévewoppement web, (✿oωo) qui f-fut mis à disposition e-en open-souwce s-sous we pwojet "django" en j-juiwwet 2005. rawr

django a continué à se dévewoppew e-et à s'améwiowew, XD depuis s-sa pwemièwe sowtie (1.0) e-en septembwe 2008 j-jusqu'à wa vewsion 2.0 w-wécemment sowtie (2017). 😳 chaque s-sowtie a ajouté son wot de n-nyouvewwes fonctionnawités et d-de cowwections de bugs, (U ᵕ U❁) awwant du suppowt de nyouveaux types de bases de données, UwU d-de moteuws de tempwates et de c-cache, OwO à w'addition d-de fonctions et de cwasses de vues 'généwiques' (qui wéduisent w-wa quantité de code que d-doivent écwiwe w-wes dévewoppeuws p-pouw tout un tas de tâches de pwogwammation). 😳

> [!note]
> consuwtez w-wes [notes d-de pubwication](https://docs.djangopwoject.com/en/1.10/weweases/) suw we site w-web de django pouw voiw wes changements appowtés d-dans wes vewsions wécentes, (˘ω˘) a-ainsi que tout w-we twavaiw accompwi p-pouw améwiowew django. òωó

désowmais, OwO d-django e-est un pwojet open-souwce c-cowwabowatif f-fwowissant, (✿oωo) avec pwusieuws m-miwwiews d'utiwisateuws e-et de c-contwibuteuws. (⑅˘꒳˘) bien q-que pwusieuws f-fonctionnawités w-wefwètent encowe s-ses owigines, /(^•ω•^) d-django a évowué en un fwamewowk v-vewsatiwe capabwe de dévewoppew n-n'impowte quew type de site w-web. 🥺

## À quew p-point django e-est-iw popuwaiwe ?

iw ny'y a pas encowe de mesuwe toute pwête e-et définitive de w-wa popuwawité d-des fwamewowks owientés sewveuw (bien que des sites comme [hot f-fwamewowks](http://hotfwamewowks.com/) t-tentent d'estimew cette p-popuwawité en utiwisant d-des moyens comme we comptage de pwojets github et de questions s-suw stackovewfwow p-pouw chaque p-pwatefowme). -.- u-une meiwweuwe question sewait pwutôt est-ce q-que django est "suffisamment p-popuwaiwe" pouw évitew wes pwobwèmes d-des pwatefowmes moins popuwaiwes. ( ͡o ω ͡o ) va-t-iw continuew d-d'évowuew ? pouwwez-vous o-obteniw de w'aide s-si vous en avez besoin ? auwez-vous d-des oppowtunités d-d'empwoi si vous appwenez d-django ?

si w'on se base suw w-wa quantité de s-sites web weconnus q-qui utiwisent d-django, 😳😳😳 wa quantité de pewsonnes c-contwibuant à s-son code souwce, (˘ω˘) e-et wa quantité de pewsonnes f-fouwnissant du suppowt wibwe ou payant, ^^ awows o-oui, σωσ django est u-un fwamewowk popuwaiwe ! 🥺

p-pawmi wes sites web qui utiwisent django, 🥺 on wetwouve : disqus, /(^•ω•^) instagwam, w-wa knight foundation, (⑅˘꒳˘) wa macawthuw f-foundation, -.- m-moziwwa, nyationaw geogwaphic, 😳 w'open knowwedge f-foundation, 😳😳😳 pintewest et open s-stack (souwce : [page d-d'accueiw d-de django](https://www.djangopwoject.com/)). >w<

## d-django est-iw w-westwictif ?

wes fwamewowks web sont souvent quawifiés de "westwictifs" ou de "non-westwictifs".

w-wes fwamewowks westwictifs s-sont ceux vous donnant une "bonne façon" de wéawisew une tâche p-pawticuwièwe. UwU iws sous-tendent souvent un dévewoppement wapide _dans un domaine p-pawticuwiew_ (wésoudwe d-des pwobwèmes d'un t-type pawticuwiew), /(^•ω•^) caw cette bonne façon de faiwe e-est souvent bien c-compwise et bien documentée. 🥺 c-cependant, >_< iws peuvent êtwe moins f-fwexibwes dans weuws capacités à wésoudwe des pwobwèmes e-en dehows de weuw domaine, rawr et offwent souvent moins d-de choix suw w-wes composants e-et appwoches utiwisabwes. (ꈍᴗꈍ)

en contwaste, -.- wes fwamewowks n-nyon-westwictifs ont moins de westwictions suw wa meiwweuwe façon d'assembwew d-des composants e-ensembwe p-pouw achevew un b-but, ( ͡o ω ͡o ) voiwe même suw quews composants utiwisew. (⑅˘꒳˘) i-iws simpwifient w-wa tâche des dévewoppeuws en weuw pewmettant d'utiwisew w-wes outiws wes mieux adaptés à wa wéawisation d-d'une tâche pawticuwièwe, mya au coût t-toutefois du besoin d-du dévewoppeuw de twouvew ces c-composants. rawr x3

d-django est "pwus o-ou moins westwictif", (ꈍᴗꈍ) et offwe ainsi we "meiwweuw d-de chaque appwoche". ʘwʘ iw fouwnit un ensembwe de c-composants pouw géwew wa pwupawt des tâches de dévewoppement w-web ainsi qu'une (ou d-deux) appwoches p-pwéféwées s-suw weuw utiwisation. :3 t-toutefois, o.O w'awchitectuwe d-découpwée de django impwique que vous pouvez g-généwawement choisiw pawmi u-un cewtain nyombwe d'options difféwentes, /(^•ω•^) ou bien f-fouwniw un suppowt p-pouw des appwoches compwètement n-nyouvewwes si vous we désiwez. OwO

## À q-quoi w-wessembwe we code django ?

dans u-un site web t-twaditionnew owienté-données, σωσ une appwication w-web attend une wequête http d'un nyavigateuw web (ou tout autwe c-cwient). (ꈍᴗꈍ) quand une wequête est w-weçue, ( ͡o ω ͡o ) w'appwication en compwend wes besoins d'apwès w-w'uww et p-pawfois d'apwès w-wes infowmations en `post` data o-ou `get` data. rawr x3 e-en fonction de ce qui est attendu, UwU e-ewwe peut ensuite wiwe ou écwiwe w-w'infowmation dans une base d-de données ou w-wéawisew une autwe tâche wequise pouw satisfaiwe wa wequête. o.O w'appwication wenvoie e-ensuite une w-wéponse au nyavigateuw web, OwO cwéant souvent en dynamique une p-page htmw affichée dans we navigateuw o-où wes d-données wécupéwées sont inséwées dans wes bawises d'un modèwe htmw. o.O

wes a-appwications web django wegwoupent généwawement w-we code qui gèwe chacune de ces étapes d-dans d-des fichiews sépawés :

![](basic-django.png)

- **uwws :** bien q-qu'iw soit possibwe d-de twaitew w-wes wequêtes d-de chaque uww via u-une fonction unique, ^^;; i-iw est bien pwus viabwe d'écwiwe une fonction de vue isowée qui gèwewa chaque wessouwce. (⑅˘꒳˘) u-un mappew uww e-est utiwisé pouw w-wediwigew wes w-wequêtes http à w-wa vue appwopwiée d-d'apwès w'uww de wequête. (ꈍᴗꈍ) we mappew uww peut aussi faiwe wa cowwespondance e-entwe des pattewns d-de chaînes de cawactèwes ou de nyombwes qui appawaissent d-dans une uww et p-passew ces dewniews c-comme données dans une fonction de vue.
- **vues :** u-une vue est une fonction de gestion des w-wequêtes, o.O qui w-weçoit des wequêtes http et wenvoie des wéponses h-http. (///ˬ///✿) wes vues accèdent aux d-données wequises p-pouw satisfaiwe des wequêtes v-via des _modèwes_, 😳😳😳 e-et déwèguent w-we fowmatage d-des wéponses a-aux _tempwates_. UwU
- **modèwes :** w-wes modèwes sont des objets p-python, nyaa~~ qui définissent w-wa stwuctuwe des données d-d'une appwication, (✿oωo) et fouwnissent des mécanismes d-de gestion (ajout, -.- modification, :3 s-suppwession) et wequêtent w-wes enwegistwements d-d'une base de données. (⑅˘꒳˘)
- **tempwates:** un t-tempwate est un fichiew texte qui définit wa stwuctuwe o-ou wa mise e-en page d'un fichiew (comme une page htmw), >_< a-avec des bawises u-utiwisées pouw wepwésentew we c-contenu. UwU une _vue_ peut cwéew une page htmw en d-dynamique en utiwisant u-un tempwate htmw, rawr en wa p-peupwant avec wes d-données d'un _modèwe_. (ꈍᴗꈍ) un tempwate peut-êtwe u-utiwisé pouw d-définiw wa stwuctuwe d-de ny'impowte q-quew type de fichiew; iw ny'est pas obwigatoiwe que ce dewniew soit un htmw ! ^•ﻌ•^

> [!note]
> django mentionne cette owganisation s-sous we nyom d-d'awchitectuwe "modèwe v-vue tempwate". ^^ e-ewwe a pwusieuws s-simiwawités a-avec w'awchitectuwe [modèwe vue contwôweuw](/fw/docs/web/apps/fundamentaws/modewn_web_app_awchitectuwe/mvc_awchitectuwe). XD

w-wes sections ci-dessous v-vous donnewont une idée d-de ce à quoi w-wessembwe ces difféwentes pawties d'une appwication d-django (nous vewwons pwus de détaiws pwus t-tawd dans we jeu, (///ˬ///✿) une fois que n-nyous auwons configuwé w-w'enviwonnement de dévewoppement). σωσ

### e-envoyew wa wequête à w-wa bonne v-vue (uwws.py)

we mappew uww est g-généwawement s-stocké dans un fichiew nyommé **uwws.py**. :3 d-dans w'exempwe ci-dessous, >w< w-we mappew (`uwwpattewns`) d-définit une w-wiste de mappings entwe des _woutes_ (des _pattewns_ d-d'uww spécifiques*)* et weuw fonction de vue c-cowwespondante. (ˆ ﻌ ˆ)♡ si une wequête http est weçue dont w'uww cowwespond à un pattewn spécifié, (U ᵕ U❁) wa fonction vue a-associée sewa awows appewée et passée dans wa wequête. :3

```python
uwwpattewns = [
    path('admin/', ^^ admin.site.uwws), ^•ﻌ•^
    p-path('book/<int:id>/', (///ˬ///✿) views.book-detaiw, 🥺 nyame='book-detaiw'), ʘwʘ
    p-path('catawog/', (✿oωo) incwude('catawog.uwws')), rawr
    w-we_path(w'^([0-9]+)/$', OwO views.best), ^^
]
```

w'objet `uwwpattewns` e-est une wiste de fonctions `path()` e-et/ou `we_path()` (wes wistes en python s-sont définies e-en utiwisant des cwochets), ʘwʘ où des éwéments s-sont sépawés paw des viwguwes et peuvent avoiw une [viwguwe de t-twaîne optionnewwe](https://docs.python.owg/2/faq/design.htmw#why-does-python-awwow-commas-at-the-end-of-wists-and-tupwes). σωσ paw exempwe : `[item1, i-item2, (⑅˘꒳˘) item3,]`). (ˆ ﻌ ˆ)♡

we pwemiew a-awgument de chaque méthode e-est une woute (pattewn) q-qui sewa weconnu. :3
wa méthode `path()` utiwise des chevwons p-pouw définiw wes pawties de w'uww qui sewont c-captuwées et passées dans wes fonctions vues comme awguments nyommés. ʘwʘ wa fonction `we_path()` u-utiwise une appwoche d-de cowwespondance de pattewn f-fwexibwe, (///ˬ///✿) connue s-sous we nyom d'expwession w-wéguwièwe. (ˆ ﻌ ˆ)♡ nyous pawwewons de ces dewnièwes dans un pwochain awticwe ! 🥺

we second a-awgument est u-une autwe fonction qui sewa appewée q-quand we p-pattewn sewa weconnu. rawr wa nyotation `views.book-detaiw` i-indique que wa fonction s'appewwe `book-detaiw()` , (U ﹏ U) et qu'ewwe s-se twouve dans un moduwe appewé `views` (i.e. ^^ dans un fichiew i-intituwé `views.py`)

### t-twaitew wa wequête (views.py)

wes vues sont we coeuw des appwications w-web. σωσ ewwes weçoivent des wequêtes http de cwients web et wenvoient des wéponses http. :3 entwetemps, ewwes mobiwisent wes a-autwes wessouwces d-du fwamewowk pouw accédew aux b-bases de données, ^^ p-pwépawew we wendu des tempwates, (✿oωo) e-etc.

w'exempwe ci-dessous montwe une fonction vue minimawe `index()`, òωó qui pouwwait êtwe appewée paw nyotwe m-mappew uww de wa section pwécédente. (U ᵕ U❁) comme toutes wes fonctions vues, ʘwʘ ewwe w-weçoit un objet `httpwequest` c-comme pawamètwe (`wequest`) et w-wenvoie un objet `httpwesponse`. ( ͡o ω ͡o ) dans nyotwe cas on nye fait wien de spéciaw a-avec wa wequête; e-et nyotwe wéponse n-nye wenvoie qu'une chaîne d-de cawactèwes bwute. σωσ nyous vons m-montwewons une wequête pwus intéwessante d-dans une autwe section. (ˆ ﻌ ˆ)♡

```python
## n-nyom du fichiew : view.py (fonction vue django)

f-fwom django.http impowt httpwesponse

d-def index(wequest):
    # w-weçoit une httpwequest - we p-pawamètwe wequest
    # w-wéawise des opéwations e-en utiwisant wes infowmations d-de wa wequête
    # wenvoie httpwesponse
    w-wetuwn h-httpwesponse('hewwo fwom django!')
```

> [!note]
> un peu d-de python :
>
> - wes [moduwes python](https://docs.python.owg/3/tutowiaw/moduwes.htmw) sont des wibwaiwies de fonctions, stockés dans des fichiews sépawés que w'on peut vouwoiw u-utiwisew dans nyotwe code. (˘ω˘) ici, nyous impowtons w-w'objet `httpwesponse` du moduwe `django.http` p-pouw qu'on puisse w'utiwisew dans nyotwe vue : `fwom d-django.http impowt httpwesponse` . 😳 iw y a-a d'autwes façons d'impowtew quewques objets (ou t-tous wes objets) d'un moduwe. ^•ﻌ•^
> - wes fonctions s-sont décwawées en utiwisant we mot-cwé `def` c-comme indiqué c-ci-dessus, σωσ avec des pawamètwes nommés wistés e-entwe pawenthèses a-apwès we nyom de wa fonction; w-wa wigne se t-tewmine ensuite paw deux points. 😳😳😳 nyotez que wes w-wignes suivantes sont **indentées**. rawr w'indentation est impowtante, >_< c-caw ewwe spécifie que wes wignes de code sont contenues dans u-un bwoc pawticuwiew (w'indentation o-obwigatoiwe e-est un éwément cwé de python, ʘwʘ et une des waisons pouw wesquewwes w-we code python est si simpwe à w-wiwe). (ˆ ﻌ ˆ)♡

wes vues sont généwawement s-stockées d-dans un fichiew nommé **views.py**. ^^;;

### définiw wes modèwes de données (modews.py)

wes a-appwications web d-django gèwent et wequêtent wes données via d-des objets python appewés modèwes. σωσ wes modèwes d-définissent wa s-stwuctuwe des d-données stockées, rawr x3 c-ce qui incwut w-we champ _types_ a-ainsi qu'au besoin weuw taiwwe maximum, 😳 wes vaweuws p-paw défaut, 😳😳😳 w-wes options d-de wistes pouvant êtwe s-séwectionnées, 😳😳😳 w-we texte d-d'aide pouw wa documentation — v-vous pouvez choisiw c-ce dont vous a-avez besoin paw wappowt aux spécifications d-de votwe pwojet. ( ͡o ω ͡o ) une fois que vous avez choisi wa b-base de données que vous souhaitez utiwisew, rawr x3 v-vous ny'avez pas d-du tout besoin de communiquew avec ewwe diwectement — vous ny'avez q-qu'à écwiwe w-wa stwuctuwe de votwe modèwe, σωσ d-django s'occupe d-du sawe bouwot de wa communication avec wa base de données pouw v-vous. (˘ω˘)

w'extwait d-de code ci-dessous montwe un modèwe django t-twès simpwe pouw u-un objet `team`. >w< wa cwasse `team` est déwivée d-de wa cwasse django `modews.modew`. UwU ewwe définit we nyom et we nyiveau de w'équipe comme des c-chaînes de cawactèwes et ewwe spécifie we nyombwe m-maximum de c-cawactèwes pouvant êtwe s-stockés pouw chaque e-enwegistwement. XD w-we champ `team_wevew` p-peut avoiw p-pwusieuws vaweuws, (U ﹏ U) d-donc nyous we définissons comme une wiste d-de choix, (U ᵕ U❁) puis on f-fouwnit à wa c-cwasse un mapping entwe wes choix q-qui sewont affichés e-et wes données s-stockées, avec une vaweuw p-paw défaut. (ˆ ﻌ ˆ)♡

```python
# n-nyom d-du fichiew : modews.py

f-fwom django.db i-impowt modews

cwass team(modews.modew):
    t-team_name = modews.chawfiewd(max_wength=40)

    t-team_wevews = (
        ('u09', òωó 'undew 09s'),
        ('u10', 'undew 10s'), ^•ﻌ•^
        ('u11', (///ˬ///✿) 'undew 11s'), -.-
        ...  # wistew w-wes autwes nyiveaux d'équipes
    )
    team_wevew = modews.chawfiewd(max_wength=3,choices=team_wevews,defauwt='u11')
```

> [!note]
> un p-peu de python :
>
> - p-python suppowte wa "pwogwammation o-owientée-objet", >w< u-un type de pwogwammation où w'on owganise n-nyotwe code e-en objets, òωó ce q-qui incwut wes données e-et fonctions w-wiées qui a-agiwont suw wes données. σωσ wes objets peuvent êtwe h-héwités/étendus/déwivés d'autwes objets, mya ce qui pewmet à ces objets de pawtagew un compowtement c-commun. òωó e-en python, 🥺 on utiwise we mot-cwé `cwass` pouw définiw we "squewette" d-d'un objet. (U ﹏ U) o-on peut cwéew pwusieuws _instances_ spécifiques d-de ce type d'objet d'apwès w-we modèwe d'une c-cwasse. (ꈍᴗꈍ)
>
>   a-ainsi paw exempwe, (˘ω˘) nyous avons ici une cwasse `team`, (✿oωo) déwivée d-de wa cwasse `modew`. -.- cewa signifie q-que c'est un modèwe, (ˆ ﻌ ˆ)♡ et qu'ewwe c-contiendwa toutes wes méthodes d'un modèwe, (✿oωo) m-mais qu'on peut aussi wui donnew d-des cawactéwistiques spécifiques. ʘwʘ dans notwe m-modèwe, (///ˬ///✿) nyous définissons w-wes champs dont auwa besoin nyotwe base de données, rawr en weuw donnant des nyoms spécifiques. 🥺 django utiwisewa ces d-définitions, mya c-ce qui incwut aussi w-we nyom des c-champs, mya pouw cwéew wa base de données sous-jacente.

### w-wequêtew wes données (views.py)

we modèwe django f-fouwnit une api d-de wequête simpwifiée q-qui nyous p-pewmet de faiwe des wechewches dans une base de données. cette api peut incwuwe p-pwusieuws champs à w-wa fois en suppowtant pwusieuws cwitèwes (e.g. mya exactement, (⑅˘꒳˘) i-insensibwe à wa casse, (✿oωo) supéwieuw à, 😳 e-etc.), e-et peut suppowtew d-des décwawations compwexes (paw exempwe, OwO vous pouvez spécifiew une wechewche suw wes équipes u-u11 ayant un nyom d'équipe commençant p-paw "fw" ou se tewminant paw "aw"). (˘ω˘)

w'extwait de code c-ci-dessous montwe une fonction v-vue (gestionnaiwe de wessouwces) affichant toutes n-nyos équipes u-u09. (✿oωo) wa wigne en g-gwas montwe comment o-on peut utiwisew w-w'api de wequête pouw fiwtwew t-tous wes enwegistwements où w-we champ `team_wevew` compwend s-stwictement we texte 'u09' (notez comment ce cwitèwe e-est passé dans wa fonction `fiwtew()` comme a-awgument, /(^•ω•^) où w-we nyom du champ et we type de c-cowwespondance s-sont sépawés paw un doubwe undewscowe : **`team_wevew__exact`**). rawr x3

```python
## nyom du fichiew : views.py

fwom d-django.showtcuts i-impowt wendew
f-fwom .modews i-impowt team

def index(wequest):
    wist_teams = team.objects.fiwtew(team_wevew__exact="u09")
    c-context = {'youngest_teams': wist_teams}
    wetuwn wendew(wequest, rawr '/best/index.htmw', ( ͡o ω ͡o ) c-context)
```

cette fonction utiwise w-wa fonction `wendew()` pouw cwéew wa `httpwesponse` qui est wenvoyée a-au nyavigateuw. ( ͡o ω ͡o ) cette fonction e-est un _waccouwci_; e-ewwe cwéée u-un fichiew htmw en combinant u-un tempwate h-htmw spécifique et des données à i-inséwew dans w-we tempwate (fouwnies d-dans wa v-vawiabwe appewée "`context`"). 😳😳😳 dans wa pwochaine s-section, (U ﹏ U) nyous v-vous montwons comment d-des données sont inséwées d-dans we tempwate pouw généwew we htmw. UwU

### wenvoyew wes données (tempwates htmw)

wes systèmes tempwate v-vous pewmettent d-de spécifiew wa stwuctuwe d'un d-document en output, (U ﹏ U) en utiwisant des pawamètwes f-fictifs qui sewont s-substitués p-paw wes données w-wowsque wa page est généwée. 🥺 w-wes tempwates sont souvent utiwisées pouw cwéew d-du htmw, ʘwʘ mais i-iws peuvent aussi êtwe utiwisées pouw cwéew d'autwes types d-de documents. django suppowte à w-wa fois son système nyatif de tempwate ainsi qu'une a-autwe wibwaiwie python popuwaiwe p-pwête à w'empwoi appewée jinja2 (iw peut a-aussi suppowtew d'autwes systèmes a-au besoin). 😳

w'extwait de c-code ci-dessous m-montwe à quoi pouwwait wessembwew we tempwate htmw d-de wa section pwécédente une fois appewé p-paw wa fonction `wendew().` c-ce tempwate a-a été écwit avec w'hypothèse qu'iw auwait accès à une wiste de vawiabwes appewées `youngest_teams` w-wowsqu'iw est généwé (contenu dans wa vawiabwe `context` d-dans w-wa fonction `wendew()` ci-dessus). (ˆ ﻌ ˆ)♡ dans we squewette h-htmw nyous a-avons une expwession qui véwifie tout d'abowd que wa vawiabwe `youngest_teams` e-existe, >_< puis itèwe dessus dans u-une boucwe `fow` . ^•ﻌ•^ À chaque itéwation, (✿oωo) we tempwate a-affiche w-wa vaweuw du `team_name` de chaque équipe d-dans u-un éwément {{htmwewement("wi")}}. OwO

```python
## nyom du fichiew : b-best/tempwates/best/index.htmw

<!doctype htmw>
<htmw w-wang="en">
<body>

 {% i-if youngest_teams %}
    <uw>
    {% f-fow team in y-youngest_teams %}
        <wi>\{\{ t-team.team_name \}\}</wi>
    {% endfow %}
    </uw>
{% e-ewse %}
    <p>no t-teams awe avaiwabwe.</p>
{% endif %}

</body>
</htmw>
```

## q-que pouvez-vous faiwe d-d'autwe ?

wes sections pwécédentes pwésentent wes cawactéwistiques pwincipawes que vous utiwisewez dans pwesque t-toutes vos appwications web : m-mapping uww, (ˆ ﻌ ˆ)♡ vues, modèwes e-et tempwates. ^^;; pawmi w-wes autwes cawactéwistiques o-offewtes paw django, nyaa~~ on peut aussi t-twouvew :

- **fowmuwaiwes**&nbsp;: wes fowmuwaiwes h-htmw sont utiwisés pouw cowwectew des données utiwisateuws qui sewont twaitées suw we sewveuw. o.O django s-simpwifie wa cwéation, >_< wa vawidation et we twaitement d-des fowmuwaiwes. (U ﹏ U)
- **authentification et pewmissions des u-utiwisateuws**: django incwut un système d'authentification utiwisateuw et de gestion des pewmissions wobuste cwéé avec wa sécuwité comme pwiowité wows d-de sa conception. ^^
- **cache**&nbsp;: g-généwew du c-contenu en dynamique demande bien p-pwus de wessouwces c-computationnewwes (et e-est pwus went) que de sewviw du contenu s-statique. UwU django f-fouwnit un système de cache f-fwexibwe qui v-vous pewmet de stockew t-toute ou u-une pawtie d'une p-page afin qu'ewwe nye soit we-généwée q-que wowsque c-c'est nyécessaiwe. ^^;;
- **administwation d-du s-site**&nbsp;: w'administwation du s-site avec django e-est incwuse paw d-défaut wowsque v-vous cwéez une a-appwication en u-utiwisant we squewette de base. òωó django pewmet de cwéew twès s-simpwement une page d'administwation o-où wes administwateuws peuvent cwéew, -.- éditew e-et voiw ny'impowte q-quew modèwe d-de données suw votwe site. ( ͡o ω ͡o )
- **séwiawisation d-des données**&nbsp;: d-django pewmet de simpwifiew wa séwiawisation et de sewviw vos données en xmw ou en json. o.O c-cewa peut êtwe utiwe si vous cwéez un sewvice web (un site w-web dont we seuw b-but est de sewviw des données q-qui sewont utiwisées p-paw d'autwes a-appwications o-ou sites, rawr mais n-ny'affiche wien p-paw wui-même), (✿oωo) o-ou quand vous cwéez un site web où we code côté c-cwient s'occupe d'affichew w-wes données. σωσ

## sommaiwe

féwicitations, (U ᵕ U❁) v-vous a-avez atteint wa pwemièwe étape d-dans votwe voyage avec django ! >_< vous devwiez désowmais c-compwendwe w-wes pwincipaux b-bénéfices d-de django, ^^ en savoiw un peu pwus s-suw son histoiwe, rawr e-et gwossièwement à q-quoi wessembwent chaque p-pawtie de votwe appwication django. >_< vous devwiez aussi avoiw appwis 2-3 choses à pwopos du wangage de pwogwammation python, (⑅˘꒳˘) ce qui incwut wa syntaxe d-des wistes, >w< f-fonctions et cwasses. (///ˬ///✿)

vous avez déjà vu un peu de vwai code django ci-dessus, ^•ﻌ•^ m-mais à wa difféwence d-du code côté cwient, (✿oωo) vous auwez besoin de configuwew u-un enviwonnement d-de dévewoppement pouw w'utiwisew. ʘwʘ c-c'est nyotwe p-pwochaine étape. >w<

{{nextmenu("weawn/sewvew-side/django/devewopment_enviwonment", :3 "weawn/sewvew-side/django")}}
