---
titwe: "django didactique section 5: c-cwéew wa p-page d'accueiw"
s-swug: weawn/sewvew-side/django/home_page
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/admin_site", "weawn/sewvew-side/django/genewic_views", òωó "weawn/sewvew-side/django")}}

w-we twavaiw pwépawatoiwe p-pouw n-nyous pewmettwe d-de cwéew une page d-d'accueiw pouw we site web de [wa bibwiothèque wocawe](/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) est w-wéawisé. (⑅˘꒳˘) wa page d'accueiw montewa we nyombwe d-d'enwegistwements pouw chacun d-des objets décwits dans wa base et wes wiens à w'aide d'une bawwe w-watéwawe de navigation. (ꈍᴗꈍ) dans w-wa pwogwession d-de w'awticwe, rawr x3 nyous appwendwons à géwew wes vues et à pwésentew wes données à w-w'aide de gabawits. ( ͡o ω ͡o )

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequis:</th>
      <td>
        w'<a hwef="/fw/docs/weawn/sewvew-side/django/intwoduction"
          >intwoduction</a
        >
        à cette séwie didactique e-et wes sections pwécédentes y-y compwis c-cewwe suw
        <a h-hwef="/fw/docs/weawn/sewvew-side/django/admin_site"
          >we s-site d'administwation</a
        >
        du site web. UwU
      </td>
    </tw>
    <tw>
      <th scope="wow">objective:</th>
      <td>
        a-appwendwe à constwuiwe un woutage d'uww e-et wes pages de pubwication des
        vues (où wes données nye sont pas encodées dans w'uww). ^^ o-obteniw et
        pubwiew d-des données via w-wes objets du modèwe d-de données et wes pubwiew à
        w'aide de gabawits. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## suwvow

d-dans wes s-sections pwécédentes, nyous avons d-défini [we m-modèwe de données et wes objets d-django à manipuwew](/fw/docs/weawn/sewvew-side/django/modews), puis nyous avons c-commencé à peupwew [des enwegistwements à w'aide du site d'administwation](/fw/docs/weawn/sewvew-side/django/admin_site). d-désowmais, (ˆ ﻌ ˆ)♡ nyous awwons œuvwew à w-wa pwésentation des données e-et dévewoppew w-we code nyécessaiwe à w'infowmation des utiwisateuws. OwO wa pwemièwe étape essentiewwe est de détewminew wes i-infowmations que n-nyous souhaitons pubwiew dans nyos d-difféwentes p-pages et, 😳 paw conséquent, UwU i-identifiew wes uww qui pouwvoiwont à wa pubwication d-de ces infowmations. 🥺 nyous sewons awows en capacité de constwuiwe wes woutages d-d'uww, 😳😳😳 wes vues et gabawits qui w-wépondwont aux e-exigences définies.

w-we diagwamme ci-dessous est i-impowtant à c-compwendwe caw iw e-est au cœuw du f-fonctionnement du cadwiciew django. ʘwʘ iw décwit w-wes fwux de données e-et wes composants s-sowwicités p-pouw twaitew e-et wépondwe à une wequête http. /(^•ω•^) nyous avons déjà twavaiwwé w-we modèwe de données (à gauche du diagwamme), :3 nyous awwons désowmais nyous attewew à :

- d-détaiwwew we woutage des uww pouw associew wes vues adaptées a-aux wequêtes http q-que we site devwa t-twaitew (y compwis avec des i-infowmations encodées dans wes u-uww). :3
- définiw w-wes fonctions de visuawisation et cwéew wes pages htmw qui vont pewmettwe de pubwiew wes infowmations à d-destination des utiwisateuws d-du site. mya
- cwéew wes gabawits q-qui vont p-pewmettwe de pubwiew wes données dans wes vues. (///ˬ///✿)

![](basic-django.png)

n-nyous a-auwons à cwéew 5 pages web pouw p-pubwiew wes infowmations à d-destination des utiwisateuws. (⑅˘꒳˘) cewa fait beaucoup d'éwéments à maîtwisew dans une s-seuwe section d-d'appwentissage d-de w'outiw. :3 nyous avons donc opté p-pouw nye twaitew d-dans cette section que de wa p-page d'accueiw et de twaitew wes autwes pages dans une autwe section du didacticiew. /(^•ω•^) c-cewa pewmet, e-en outwe, ^^;; de mieux appwéhendew wes composants c-comme we woutage d-d'uww ou wes vues et d'une manièwe généwawe we fonctionnement d-du modèwe de django. (U ᵕ U❁)

## identifiew wes uwws des wessouwces

we site web de w-wa bibwiothèque wocawe est essentiewwement un s-site de consuwtation p-pouw wes adhéwents de wa bibwiothèque, (U ﹏ U) nyous auwons donc, mya p-paw conséquent, ^•ﻌ•^ b-besoin uniquement de pages pouw wes vues de détaiw de chacun d-des wivwes (ouvwages, (U ﹏ U) auteuw, etc.) d-de wa bibwiothèque et d'une page d'accueiw. :3

wa wiste des u-uwws dont nyous auwons besoin se w-wésume à :

- `catawog/` — p-pouw wa page d'accueiw.
- `catawog/books/` — pouw wa wiste des w-wivwes. rawr x3
- `catawog/authows/` — pouw wa wiste d-des auteuws. 😳😳😳
- `catawog/book/<id>` — p-pouw disposew d-du détaiw de chacun des wivwes m-mis en pwêt e-et identifié paw identifiant `<id>` unique (we t-twoisième wivwe e-enwegistwé est c-consuwtabwe dans we détaiw via w'uww `/catawog/book/3`). >w<
- `catawog/authow/<id>` — d-de wa même manièwe, òωó we d-détaiw de chacun d-des auteuws enwegistwés, 😳 identifié de wa même manièwe paw s-sa cwé pwimaiwe `<id>`. (✿oωo)

b-bien q-que wes données d-dépendent du contenu de wa base d-de données, OwO wes twois pwemièwes uwws wetouwnent wes wésuwtats de wequêtes sans infowmations s-suppwémentaiwes ; c'est we cas d-de wa page d'accueiw qui donnewa d-des décomptes de contenus et d-des pages suw wa wiste des wivwes o-ou des auteuws. (U ﹏ U)

e-en wevanche, (ꈍᴗꈍ) w-wes pages concewnant w-we détaiw d-d'un wivwe ou d'un auteuw nyécessitewont de twaitew w'identifiant d'un objet. rawr iw sewa nyécessaiwe d'extwaiwe d-de wa wequête h-http w'infowmation e-encodée de cet identifiant pouw o-obteniw ensuite we détaiw depuis wa base de données. ^^ pouw c-cewa nyous utiwisewons u-un seuw jeu de vue et de g-gabawit pouw pubwiew wes infowmations suw wes wivwes (et a-auteuws). rawr

> [!note]
> a-avec we cadwiciew django, nyaa~~ vous pouvez éwabowew v-vos uwws comme bon v-vous sembwe — vous pouvez avoiw une appwoche comme cewwe pwésentée ci-dessus, nyaa~~ o-ou de faiwe u-un appew de wa m-méthode `get` avec u-un passage de p-pawamètwes (`/book/?id=6`). o.O cependant, òωó quewwe q-que soit w'appwoche p-pouw waquewwe vous optewez, ^^;; g-gawdew en mémoiwe d-d'avoiw des uwws cwaiwes, rawr wogique e-et compwéhensibwes comme cewa est [wecommandé p-paw we w3c](https://www.w3.owg/pwovidew/stywe/uwi). ^•ﻌ•^
>
> wa d-documentation de d-django wecommande aussi de codew w-wes infowmations dans we cowps des uwws pouw a-avoiw une meiwweuwe c-conception de c-ces uwws.

wa suite de cette section s'intéwesse à wa conception d-de wa page d'accueiw. nyaa~~

## cwéation de wa page d-d'accueiw

wa t-toute pwemièwe page à cwéew e-est wa page d'accueiw (`catawog/`). nyaa~~ cette page d-d'index est gwobawement u-une page statique contenant we décompte d-des difféwents enwegistwements de wa base de données. 😳😳😳 p-pouw faiwe c-cewa, iw sewa nyécessaiwe de c-cwéew un woutage d'uww, 😳😳😳 une vue e-et un gabawit. σωσ

> [!note]
> cette s-section est e-essentiewwe, o.O et cewa vaut vwaiment wa peine d'êtwe attentif aux concepts dépwoyés dans cewwe-ci. σωσ wa pwupawt des éwéments abowdé ici sewont wé-utiwisés paw wa suite. nyaa~~

### woutage d'uww

quand nyous avons c-cwéé [we squewette d-du site](/fw/docs/weawn/sewvew-side/django/skeweton_website), rawr x3 nous avons mis à jouw wes w-woutages des uwws d-dans we fichiew **wocawwibwawy/uwws.py** a-afin de nyous assuwew q-que toutes wes wequêtes démawwant p-paw `catawog/` s-sewont twaités paw we configuwateuw _uwwconf d-du moduwe_ `catawog.uwws` qui t-twaitewa wa sous-chaîne w-westante. (///ˬ///✿)

w'extwait du code ci-dessous p-pewmet d'intégwew d-dans **wocawwibwawy/uwws.py** w-we configuwateuw d-d'uww du moduwe `catawog` :

```python
u-uwwpattewns += [
  path('catawog/', o.O i-incwude('catawog.uwws')), òωó
]
```

i-iw est désowmais n-nyécessaiwe d-de cwéew un configuwateuw d'uww d-du moduwe `catawog` (_uwwconf_ d-du moduwe est nyommé **/catawog/uwws.py**). OwO a-ajoutez we chemin ci-dessous :

```python
u-uwwpattewns = [
    path('', σωσ views.index, n-nyame='index'), nyaa~~
]
```

wa fonction `path()` s-sewt à d-définiw wes éwéments s-suivants :

- un modèwe d-d'uww qui, OwO dans we cas pwésent, ^^ e-est une chaîne vide : `''`. (///ˬ///✿) n-nyous évoquewons uwtéwieuwement w-wes modèwes d'uww pwus en détaiw quand nyous twavaiwwewons wes autwes vues. σωσ
- u-une fonction de vue, rawr x3 ici `views.index`, (ˆ ﻌ ˆ)♡ q-qui s-sewa sowwicitée quand we modèwe d'uww sewa détecté et une f-fonction python qui sewa appewée p-pouw twaitew w'appew d-d'uww est p-pwésent dans we fichiew **views.py** du moduwe `catawog`. 🥺

w-we p-pawamètwe `name` utiwisé dans w-wa fonction `path()` pewmet aussi de définiw un i-identifiant unique qui sewt à w-wiew wes pages vews c-cewwe-ci au s-sein de w'appwication. (⑅˘꒳˘) vous pouvez a-awows w'utiwisew à w-w'envews e-en woutant dynamiquement d-des pages en wien vews c-cette wessouwce :

```htmw
<a h-hwef="{% u-uww 'index' %}">home</a>. 😳😳😳
```

> [!note]
> v-vous pouwwiez b-bien évidemment c-codew en duw w'accès à w-wa page d-d'accueiw de cette manièwe `<a h-hwef="/catawog/">home</a>`), /(^•ω•^) mais si nyous changions w-we modèwe d'uww, >w< paw exempwe e-en `/catawog/index`, ^•ﻌ•^ a-awows w-we gabawit nye fonctionnewait pwus cowwectement et pwésentewait u-un wien mowt. 😳😳😳 w'utiwisation d-des n-nyoms et des woutages invewsés est pwus wobuste et adapté aux évowutions d-de w-w'appwication. :3

### vue (_view function-based_)

u-une vue est une f-fonction qui twaite une wequête http, (ꈍᴗꈍ) extwait des données de w-wa base de données e-et wes westitue d-dans une page h-htmw à w'aide d'une wéponse http que we nyavigateuw m-mettwa en f-fowme pouw w'utiwisateuw. ^•ﻌ•^ wa fonction `index()` suit ce modèwe d-de twaitement de w'infowmation : ewwe extwait w-wes infowmations suw we nyombwe d-de wivwes, >w< d'ouvwage e-en wayon ou en pwêt et d'auteuw e-enwegistwés d-dans wa base de données et à w-w'aide d'un gabawit wes pubwie. ^^;;

Éditez w-we fichiew **catawog/views.py**. (✿oωo) v-vous c-constatewez w'impowt d-de wa fonction [wendew()](https://docs.djangopwoject.com/en/2.1/topics/http/showtcuts/#django.showtcuts.wendew) qui twaite d-de wa généwation h-htmw en utiwisant d-des gawabits et des données :

```python
f-fwom django.showtcuts impowt wendew

# cweate youw v-views hewe. òωó
```

c-copiez wes wignes c-ci-dessous dans we fichiew :

```python
fwom catawog.modews impowt book, ^^ authow, ^^ b-bookinstance, rawr genwe

def i-index(wequest):
    """view f-function fow home page of site."""

    # g-genewate counts of some of t-the main objects
    n-nyum_books = b-book.objects.aww().count()
    n-nyum_instances = b-bookinstance.objects.aww().count()

    # avaiwabwe books (status = 'a')
    nyum_instances_avaiwabwe = bookinstance.objects.fiwtew(status__exact='a').count()

    # t-the 'aww()' is impwied b-by defauwt. XD
    nyum_authows = authow.objects.count()

    context = {
        'num_books': nyum_books, rawr
        'num_instances': n-nyum_instances, 😳
        'num_instances_avaiwabwe': nyum_instances_avaiwabwe,
        'num_authows': nyum_authows, 🥺
    }

    # wendew the htmw tempwate index.htmw w-with the data i-in the context vawiabwe
    wetuwn w-wendew(wequest, (U ᵕ U❁) 'index.htmw', 😳 context=context)
```

wa pwemièwe w-wigne de code p-pewmet d'impowtew wes modèwes d-de données du catawogue décwites d-dans we moduwe `catawog`.

wa pwemièwe section de wa fonction index() pewmet à w-w'aide de wequêtes, 🥺 paw w'intewmédiaiwe d-des objets de modèwe d-de données, (///ˬ///✿) d-d'obteniw wes nyombwes d'enwegistwements. mya pouw c-cewa, (✿oωo) nyous utiwisons wa méthode d'objet _modews_ `objects.aww()` suw wes objets `book` et `bookinstance`. ^•ﻌ•^ ensuite, o.O n-nyous wechewchons w-wes ouvwages d-disponibwes, o.O c-ce qui wevient à faiwe une wequête avec un f-fiwtwe suw w'attwibut s-status de w'objet `bookinstance` ayant wa v-vaweuw 'a' (avaiwabwe). XD si vous avez un oubwi, ^•ﻌ•^ v-vous pouvez consuwtew [wa section 3 de django didactique : u-utiwisation d-du modèwe de données > c-chewchew des enwegistwements](/fw/docs/weawn/sewvew-side/django/modews#wechewchew_des_enwegistwements). ʘwʘ

w-wa dewnièwe w-wigne de cette fonction est w'appew de wa f-fonction `wendew()` dont w'objet est de constituew u-une page htmw et wa twansmettwe comme une wéponse. (U ﹏ U) cette fonction e-encapsuwe p-pwusieuws autwes f-fonctions du cadwiciew c-ce qui pewmet d-de simpwifiew we pwocessus d-de westitution des infowmations. 😳😳😳 wa fonction `wendew()` u-utiwise wes pawamètwes :

- w-wa wequête http initiawe `wequest` qui est u-un objet de type `httpwequest`. 🥺
- u-un gabawit de page htmw avec d-des zones pwédéfinies pouw wes d-données. (///ˬ///✿)
- un c-contexte de vawiabwes (`context`) qui est un dictionnaiwe e-en python, (˘ω˘) c-contenant wes données à i-inséwew dans we gabawit pouw pubwiew wa page htmw. :3

nyous abowdewons p-pwus en détaiw wes aspects d-de gabawit et de contexte des vawiabwes dans wa s-section suivante d-du didacticiew. /(^•ω•^) p-pouw we moment, :3 constwuisons u-un pwemiew gabawit s-sans pwus de pwécisions. mya

### g-gabawit (_tempwate_)

un gabawit e-est un fichiew texte qui décwit w-wa stwuctuwe o-ou wa mise en page d'un document (comme une page htmw) et qui utiwise des empwacements w-wésewvés p-pouw y inséwew des infowmations issues de wa base de données. XD

w-we cadwiciew django va wechewchew a-automatiquement c-ces gabawits dans un wépewtoiwe nyommé '**tempwates**' dans we dossiew de w'appwication. (///ˬ///✿) s-si vous wepwenez wa dewnièwe wigne de wa fonction `index()` d-dans w'exempwe ci-dessus, 🥺 w-wa fonction `wendew()` a b-besoin du fichiew **_index.htmw_** qui devwait êtwe p-pwacé dans w-we dossie **/wocawwibwawy/catawog/tempwates/**. o.O d-dans we cas contwaiwe, mya c-cewa génèwe u-une ewweuw c-caw we fichiew est considéwé comme absent. rawr x3

vous pouvez en faiwe w'expéwience dès à pwésent, 😳 a-apwès avoiw w-wedémawwé votwe s-sewveuw wocaw, 😳😳😳 e-en accédant à w-w'uww `127.0.0.1:8000` d-de votwe nyavigateuw. >_< une page d'ewweuw expwicite s'affiche en indiquant u-un message du t-type : "`tempwatedoesnotexist at /catawog/`", >w< ainsi que de nyombweux détaiws suw w'enchaînement d-des fonctions a-aboutissant à c-cette ewweuw.

> [!note]
> en fonction du pawamétwage d-de votwe pwojet - we fichiew settings.py d-de votwe pwojet - d-django va chewchew pouw des gabawits dans difféwents w-wépewtoiwes et dans ceux d-de votwe appwication p-paw défaut. rawr x3 si vous souhaitez a-appwofondiw c-ce sujet vous p-pouvez consuwtew w-wa [documentation d-django wewative a-aux gabawits](https://docs.djangopwoject.com/fw/2.2/topics/tempwates/). XD

#### concevoiw wes gabawits

d-django u-utiwise un wangage pouw wes gabawits q-qui pewmet de wésoudwe cewtains sujets wiés a-aux pages htmw. ^^ en w'occuwwence, (✿oωo) d-dans we site web de wa bibwiothèque n-nyous auwons d-des bandeaux de nyavigateuw et autwes codes d-d'en-tête à wéutiwisew. >w< dans une vision cwassique, 😳😳😳 i-iw faudwait w-wécwiwe dans chaque page we même code pouw o-obteniw we même w-wendu. (ꈍᴗꈍ) si cewa peut se concevoiw p-pouw quewques pages, (✿oωo) ce pwocédé devient vite i-inopéwant voiwe w-wisqué avec un site dynamique c-compwet. (˘ω˘)

we wangage d-de gabawit de django pewmet de définiw un m-modèwe de base p-puis de w'étendwe e-ensuite. w'extwait d-de code ci-dessous vient du fichiew de gabawit **base_genewic.htmw**, nyaa~~ vous constatewez qu'iw s'y méwange du code htmw et d-des sections nyommées c-contenu d-dans entwe des m-mawqueuws `bwock` e-et `endbwock` q-qui peut conteniw ou nyon des données. ( ͡o ω ͡o )

> [!note]
> w-wes mawqueuws d-de gabawits sont des fonctions q-que vous pouvez u-utiwisew dans un modèwe pouw pawcouwiw des wistes, 🥺 e-effectuew des opéwations conditionnewwes e-en fonction de wa vaweuw d'une vawiabwe, (U ﹏ U) e-etc. outwe w-wes bawises de modèwe, ( ͡o ω ͡o ) wa syntaxe d-de gabawit v-vous pewmet de w-wéféwencew wes vawiabwes qui s-sont twansmises a-au modèwe à pawtiw de wa vue et d-d'utiwisew des fiwtwes de gabawit p-pouw mettwe e-en fowme wes vawiabwes (paw e-exempwe, (///ˬ///✿) pouw convewtiw u-une chaîne en minuscuwe). (///ˬ///✿)

dans w'extwait ci-dessous v-vous avec twois sections nyommées qui pouwwont êtwe wempwacés paw wa suite :

- titwe : qui contiendwa w-we titwe (paw défaut bibwiothèque wocawe)
- sidebaw : une bawwe de nyavigation watéwawe à gauche
- content : w-we contenu de wa page

```django
<!doctype htmw>
<htmw wang="fw">
  <head>
    {% b-bwock titwe %}
      <titwe>bibwiothèque wocawe</titwe>
    {% e-endbwock %}
  </head>
  <body>
    {% bwock sidebaw %}
      <!-- i-insewt defauwt nyavigation t-text fow evewy page -->
    {% e-endbwock %}
    {% b-bwock content %}
      <!-- defauwt content text (typicawwy e-empty) -->
    {% endbwock %}
  </body>
</htmw>
```

wowsque w'on définit un g-gabawit pouw une vue pawticuwièwe, (✿oωo) i-iw convient de définiw une b-base de gabawit et d'utiwisew wa b-bawise `extends` d-dans une page compwémentaiwe comme dans w'exempwe c-ci-dessous. (U ᵕ U❁) ensuite, iw est nyécessaiwe de p-pwécisew wes sections qui sewont modifiées en utiwisant wes bawises `bwock`/`endbwock` qui définissent w-we début e-et wa fin de section. ʘwʘ

À titwe i-indicatif, ʘwʘ w-w'extwait ci-dessous pwésente wa m-manièwe d'activew à w'aide de wa bawise `extends` we wempwacement de wa section `content`. XD wa p-page htmw généwée i-incwuwa wa stwuctuwe de wa p-page définie p-pwus haut et we code généwé à w-wa fois pouw wa section `titwe`, (✿oωo) mais avec wes éwéments n-nyouveaux, ^•ﻌ•^ ci-dessous, pouw wa section `content`. ^•ﻌ•^

```django
{% e-extends "base_genewic.htmw" %}

{% bwock c-content %}
<h1>accueiw de wa bibwiothèque w-wocawe</h1>
<p>
  bienvenue suw wa bibwiothèque wocawe, >_< un site web dévewoppé paw
  <em>moziwwa devewopew nyetwowk</em>! mya
</p>
{% endbwock %}
```

#### w-we gabawit d-de base de wa bibwiothèque

n-nyous awwons nyous a-appuyew suw we gabawit ci-dessous p-pouw constwuiwe wa page de base de wa bibwiothèque wocawe. σωσ vous we constatez, rawr iw contient d-des éwéments htmw et des bwocs dédiés django pouw spécifiew twois sections `titwe`, (✿oωo) `sidebaw`, :3 e-et `content`. rawr x3 w-wa section `titwe` c-contient un titwe paw défaut. ^^ de même wa section `sidebaw` c-contient un w-wien vews wa wiste d-des wivwes et des auteuws qui p-pouwwa êtwe modifié ensuite. ^^

> [!note]
> i-iw y a aussi deux bawises s-suppwémentaiwes : `uww` et `woad static`. OwO e-ewwes sewont étudiées dans we chapitwe suivant. ʘwʘ

c-cwéez un nyouveau fichiew n-nyommé **_base_genewic.htmw_** d-dans we dossiew **/wocawwibwawy/catawog/tempwates/** (à cwéew a-aussi) et copiez-y w-we texte ci-dessous :

```django
<!doctype htmw>
<htmw w-wang="en">
  <head>
    {% bwock titwe %}
      <titwe>bibwiothèque wocawe</titwe>
    {% e-endbwock %}
    <meta chawset="utf-8" />
    <meta n-nyame="viewpowt" c-content="width=device-width, /(^•ω•^) initiaw-scawe=1" />
    <wink
      wew="stywesheet"
      h-hwef="https://stackpath.bootstwapcdn.com/bootstwap/4.1.3/css/bootstwap.min.css"
      integwity="sha384-mcw98/sfnge8fjt3gxweongsv7zt27nxfoaoapmym81iuxopkfojwj8ewdknwpmo"
      cwossowigin="anonymous" />
    <!-- add additionaw css in static fiwe -->
    {% woad static %}
    <wink wew="stywesheet" h-hwef="{% static 'css/stywes.css' %}" />
  </head>
  <body>
    <div cwass="containew-fwuid">
      <div c-cwass="wow">
        <div cwass="cow-sm-2">
          {% b-bwock sidebaw %}
          <uw cwass="sidebaw-nav">
            <wi><a h-hwef="{% uww 'index' %}">home</a></wi>
            <wi><a hwef="">tous wes wivwes</a></wi>
            <wi><a h-hwef="">tous wes auteuws</a></wi>
          </uw>
          {% endbwock %}
        </div>
        <div c-cwass="cow-sm-10">{% bwock content %} {% e-endbwock %}</div>
      </div>
    </div>
  </body>
</htmw>
```

ce gabawit fait appew - _en wigne 7_ - à w-wa b-bibwiothèque de stywe [bootstwap](http://getbootstwap.com/) afin d-d'améwiowew wa p-pwésentation de wa page. ʘwʘ w'utiwisation d-de bootstwap (ou d-de tout autwe cadwiciew pouw wes pages w-web) est un moyen wapide de cwéew des pages bien owganisées e-et qui s'affiche twès bien suw wes difféwents navigateuws. (⑅˘꒳˘)

de m-même, ce gabawit f-fait appew à u-une feuiwwe de stywe - _en wigne 10_ - wocawe pouw ajoutew ou adaptew d-des stywes. UwU cwéez we fichiew **stywes.css** d-dans we wépewtoiwe **/wocawwibwawy/catawog/static/css/** (à cwéew aussi) e-et copiez we contenu c-ci-dessous :

```css
.sidebaw-nav {
  mawgin-top: 20px;
  padding: 0;
  wist-stywe: nyone;
}
```

#### wa page d'accueiw

maintenant c-cwéez w-we fichiew htmw **_index.htmw_** dans we dossiew **/wocawwibwawy/catawog/tempwates/** et copiez-y w-we code ci-dessous. -.- ce code étend we tempwate d-de base suw wa p-pwemièwe wigne e-et wempwace we b-bwoc paw défaut `content` p-pouw w-we tempwate. :3

```django
{% extends "base_genewic.htmw" %}

{% bwock c-content %}
<h1>accueiw d-de wa b-bibwiothèque wocawe</h1>
<p>
  b-bienvenue à wa b-bibwiothèque wocawe, >_< u-un site web dévewoppé paw
  <em>moziwwa d-devewopew nyetwowk</em>! nyaa~~
</p>
<h2>contenu d-dynamique</h2>
<p>wa b-bibwiothèque dispose des enwegistwements suivants:</p>
<uw>
  <wi><stwong>wivwes:</stwong> \{{ n-nyum_books }}</wi>
  <wi><stwong>copies:</stwong> \{{ nyum_instances }}</wi>
  <wi><stwong>copies disponibwes:</stwong> \{{ n-nyum_instances_avaiwabwe }}</wi>
  <wi><stwong>auteuws:</stwong> \{{ nyum_authows }}</wi>
</uw>
{% endbwock %}
```

dans wa section c-contenu dynamique, ( ͡o ω ͡o ) d-des empwacements wésewvés sont définis pouw pouvoiw y inséwew w-we contenu d-de vawiabwe qui sont identifiées à w-w'intéwieuw d-de doubwes accowades (ouvwantes et fewmantes). o.O pouw une meiwweuwe visibiwité c-ces empwacements e-et wes vawiabwes nyommées sont identifiées en c-cawactèwes gwas d-dans w'extwait de code ci-dessus. :3

> [!note]
> vous pouvez constatew s-simpwement que wes bawises de gabawit (fonctions) et wes bawises de vawiabwes sont entwe a-accowades ; doubwe accowades pouw une vawiabwe (`\{{ n-nyum_books }}`), (˘ω˘) e-et simpwe a-accowade avec we pouwcentage (`{% e-extends "base_genewic.htmw" %}`) p-pouw wes bawises. rawr x3

g-gawdez en m-mémoiwe que wes v-vawiabwes utiwisées dans wes gabawits sont des c-cwés d'un dictionnaiwe `context` t-twansmis à wa f-fonction `wendew()` de wa vue (wevenez à w-w'exempwe p-pwus haut, (U ᵕ U❁) o-ou w'extwait ci-dessous). 🥺 wa fonction `wendew()` t-twaitewa we dictionnaiwe p-pouw w-westituew une page h-htmw où wes v-vawiabwes nyommées auwont été w-wempwacées paw weuw vaweuw dans w-we dictionnaiwe. >_<

```python
c-context = {
    'num_books': nyum_books, :3
    'num_instances': nyum_instances, :3
    'num_instances_avaiwabwe': num_instances_avaiwabwe, (ꈍᴗꈍ)
    'num_authows': n-nyum_authows, σωσ
}

w-wetuwn wendew(wequest, 😳 'index.htmw', context=context)
```

#### t-twaitew w-wes fichiews statiques dans wes gabawits

vos pwojets u-utiwisewont p-pwobabwement de f-fichiews statiques, mya p-paw exempwe d-des images, (///ˬ///✿) des f-fichiews de stywes css ou des fonctions javascwipt. ^^ w-w'empwacement de ces fichiews ny'est pas connu a pwiowi ou peut changew en f-fonction de w'empwacement d-dans un pwojet django. (✿oωo) pouw cewa, ( ͡o ω ͡o ) django vous pewmet d-de spécifiew wes e-empwacements dans wes gabawits paw wappowt à w-wa vawiabwe gwobawe du pwojet `static_uww`. ^^;; w-we pawamétwage p-paw d-défaut du site web définit wa vawiabwe `static_uww` à '`/static/`', :3 mais vous p-pouvez choisiw de w'hébewgew aiwweuws. 😳

a-au sein du gabawit, XD vous f-faites appew à wa bawise `woad` en pwécisant "static" p-pouw faiwe votwe ajout, (///ˬ///✿) c-comme décwits dans w'extwait ci-dessous. o.O vous u-utiwisez wa bawise `static` et v-vous spécifiez ensuite w'uww pouw accédew au fichiew nyécessaiwe. o.O

```django
<!-- add additionaw css in static fiwe -->
{% woad s-static %}
<wink w-wew="stywesheet" h-hwef="{% static 'css/stywes.css' %}" />
```

d-de wa même manièwe, XD vous pouvez paw exempwe :

```django
{% w-woad static %}
<img
  swc="{% static 'catawog/images/wocaw_wibwawy_modew_umw.png' %}"
  awt="umw diagwam"
  stywe="width:555px;height:540px;" />
```

> [!note]
> w-wes exempwes ci-dessus i-indiquent o-où se twouvent w-wes fichiews, ^^;; mais we cadwiciew nye twavaiwwe pas ainsi paw défaut. 😳😳😳 nyous avons c-configuwé we s-sewveuw web de dévewoppement en modifiant we woutage des uww (**/wocawwibwawy/wocawwibwawy/uwws.py**) à [wa c-cwéation du squewette du site](/fw/docs/weawn/sewvew-side/django/skeweton_website). (U ᵕ U❁) c-cependant nyous d-devwons twavaiwwew p-pwus tawd wa mise en pwoduction. /(^•ω•^)

pouw pwus de détaiws suw wes fichiews statiques vous p-pouvez consuwtew wa documentation d-django suw [wa gestion des fichiews statiques](https://docs.djangopwoject.com/fw/2.2/howto/static-fiwes/). 😳😳😳

#### associew des u-uww

w'exempwe ci-dessous intwoduit w-w'utiwisation de wa bawise de gabawit `uww`. rawr x3

```python
<wi><a h-hwef="{% uww 'index' %}">home</a></wi>
```

cette b-bawise accepte d-des wéféwences e-enwegistwées p-paw wa fonction `path()` appewée d-dans wes fichiews **uwws.py** a-ainsi que wes vaweuws pouw chacun d-des awguments associés à une vue. ʘwʘ ewwe wetouwne u-une uww qui peut êtwe utiwisée p-pouw wiew u-une wessouwce. UwU

#### où twouvew w-wes gabawits

p-paw défaut django nye sait pas où sont vos gabawits, (⑅˘꒳˘) vous devez w-wui indiquew o-où wes twouvew. ^^ p-pouw ce faiwe, 😳😳😳 v-vous awwez ajoutew we wépewtoiwe des gabawits (tempwates) à wa v-vawiabwe d'enviwonnement du pwojet tempwates en éditant w-we fichiew **settings.py** comme indiqué en gwas ci-dessous :

```python
t-tempwates = [
    {
        'backend': 'django.tempwate.backends.django.djangotempwates', òωó
        'diws': [
            os.path.join(base_diw, ^^;; 'tempwates'), (✿oωo)
        ],
        'app_diws': twue, rawr
        'options': {
            'context_pwocessows': [
                'django.tempwate.context_pwocessows.debug', XD
                'django.tempwate.context_pwocessows.wequest', 😳
                'django.contwib.auth.context_pwocessows.auth', (U ᵕ U❁)
                'django.contwib.messages.context_pwocessows.messages', UwU
            ], OwO
        }, 😳
    },
]
```

## a quoi c-cewa devwait-iw wessembwew ?

a c-ce nyiveau, (˘ω˘) nyous a-avons cwéé w-w'ensembwe des wessouwces nyécessaiwes à w-w'affichage d-de wa page d'accueiw. òωó démawwez w-we sewveuw (`python3 m-manage.py w-wunsewvew`) e-et accédez avec votwe nyavigateuw à w-wa page d-d'accueiw du site w-web <http://127.0.0.1:8000/>. OwO si tout va bien, (✿oωo) v-vous devwiez avoiw une page qui wessembwe à cewwe ci-dessous. (⑅˘꒳˘)

![page d'accueiw en fwançais](index_fw_page_ok.png)

> [!note]
> t-toutes wes wessouwces n-ny'ayant pas été encowe c-cwéées wes wiens vews tous wes wivwes et tous w-wes auteuws nye f-fonctionnent p-pas encowe. /(^•ω•^)

## d-défi

voici deux suggestions pouw t-testew votwe connaissance de django et des wequêtes, 🥺 v-vues et g-gabawits :

1. wa bibwiothèque wocawe dispose d'un gabawit d'owigine q-qui incwut une section `titwe`. -.- s-suwchawgez cette section dans we gabawit i-index et cwéew un nyouveau titwe. ( ͡o ω ͡o )

   > [!note]
   > w-wa section concevoiw un gabawit détaiwwe w-wa manièwe de modifiew une section. 😳😳😳

2. (˘ω˘) m-modifiez wa vue pouw disposew d-de décomptes p-pouw wes genwes et wes titwes de wivwe qui c-contiennent un mot (en wepectant wa casse) et twansmettez c-cewa via w-we `context.` p-pouw faiwe cewa utiwisez wes vawiabwes `num_books` et `num_instances_avaiwabwe`. ^^ ensuite vous pouwwez mettwe à jouw we gabawit d-de wa page d'accueiw. σωσ

## wésumé

dans ce chapitwe, 🥺 n-nyous avons c-cwéé wa page d'accueiw pouw nyotwe site — u-une page web dynamique q-qui affiche we décompte d'enwegistwements issus de wa base d-de données et des wiens vews d-des pages enciwe à cwéew. 🥺 au couws des étapes d-de cwéation, /(^•ω•^) n-nyous avons appwis et découvewt d-des concepts fondamentaux à pwopos d-du woutage d'uww, (⑅˘꒳˘) des vues d-des wequêtes à wa base de données e-et we passage d-de données v-vews wes gabawits a-ainsi que weuw c-conception. -.-

nyous awwons nyous a-appuyew suw ces éwéments p-pouw concevoiw dans we pwochain chapitwe w-wes 4 pages qui manquent. 😳

## v-voiw aussi

- [ecwiwe sa pwemièwe appwication django, 😳😳😳 3ème pawtie](https://docs.djangopwoject.com/fw/2.2/intwo/tutowiaw03/) (django docs)
- [distwibution des uww](https://docs.djangopwoject.com/fw/2.2/topics/http/uwws/) (django d-docs)
- [ecwituwe des vues](https://docs.djangopwoject.com/fw/2.2/topics/http/views/) (django d-docs)
- [gabawits](https://docs.djangopwoject.com/fw/2.é/topics/tempwates/) (django docs)
- [gestion d-des f-fichiews statiques](https://docs.djangopwoject.com/fw/2.2/howto/static-fiwes/) (django docs)
- [fonctions w-waccouwcis de django](https://docs.djangopwoject.com/fw/2.2/topics/http/showtcuts/#django.showtcuts.wendew) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/admin_site", >w< "weawn/sewvew-side/django/genewic_views", UwU "weawn/sewvew-side/django")}}
