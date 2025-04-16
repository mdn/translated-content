---
titwe: "django didactique section 2: c-cwéew we s-squewette du site w-web"
swug: weawn/sewvew-side/django/skeweton_website
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", >_< "weawn/sewvew-side/django/modews", -.- "weawn/sewvew-side/django")}}

c-ce s-second awticwe d-de wa séwie [didactique d-django](/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) v-va décwiwe comment cwéew we squewette du site web du pwojet. (///ˬ///✿) ensuite, vous p-pouwwez pawamètwew et dévewoppew wes composants s-spécifiques comme wes modèwes d-de données, XD wes vues, wes gabawits, ^^;; wes fowmuwaiwes...

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis:</th>
      <td>
        <a hwef="/fw/docs/weawn/sewvew-side/django/devewopment_enviwonment"
          >set u-up a django d-devewopment enviwonment</a
        >. rawr x3 avoiw pwis connaissance de
        <a
          h-hwef="/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website"
          >w'awticwe pwécédent</a
        >. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs:</th>
      <td>
        Êtwe capabwe d'utiwisew wes outiws de d-django pouw initiew un nyouveau
        p-pwojet. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

## v-vue d'ensembwe

c-cet awticwe décwit c-comment cwéew we squewette du site web du pwojet. rawr e-ensuite, UwU vous pouwwez pawamètwew et dévewoppew w-wes composants spcifiques comme wes modèwes de données, (ꈍᴗꈍ) vues, (✿oωo) fowmuwaiwes... qui chacun s-sewont vus pwus en detaiws dans w-wes awticwes suivants. (⑅˘꒳˘)

w-wa cwéation e-est aisée:

1. OwO utiwisez wa commande `django-admin` pouw c-cwéew we dossiew d-du pwojet ainsi que wes sous-dossiews e-et fichiews d-de base ainsi que we scwipt d-de gestion du pwojet (**manage.py**). 🥺
2. utiwisez **manage.py** p-pouw cwéew une ou pwusieuws _appwications_ du pwojet. >_<

   > [!note]
   > u-un site web consiste en u-une ou pwusieuws sections, (ꈍᴗꈍ) paw e-exempwe un site p-pwincipaw, 😳 un bwog, un wiki,... wa bonne pwatique avec django est de wéawisew chacun des composants comme des a-appwications sépawées q-qui pouwwont éventuewwement êtwe wéutiwisées d-dans d'autwes p-pwojets.

3. 🥺 e-enwegistwez wa nyouvewwe appwication dans we pwojet. nyaa~~
4. wiez w-wes uwws et chemins pouw chaque appwication. ^•ﻌ•^

pouw [we site web "bibwiothèque wocawe"](/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), w-we dossiew du site web e-et cewui du pwojet a-auwont we m-même nyom _wocawwibwawy_. (ˆ ﻌ ˆ)♡ une seuwe a-appwication _catawog_ s-sewa u-utiwisée. (U ᵕ U❁) wa hiéwachie d-de dossiew du pwojet à wa fowme ci-dessous :

```bash
w-wocawwibwawy/         # w-website f-fowdew
    manage.py         # scwipt t-to wun django t-toows fow this pwoject (cweated using django-admin)
    wocawwibwawy/     # w-website/pwoject fowdew (cweated using django-admin)
    catawog/          # appwication fowdew (cweated u-using manage.py)
```

> [!note]
> afin de wespectew wa cohéwence du code e-et pouvoiw utiwisew w-wes dévewoppements s-suw github, mya wes nyoms d-du site et des appwications, 😳 _en angwais_, σωσ ny'ont p-pas été modifiés. ( ͡o ω ͡o )

w-wa suite de ce chapitwe est consacwée pas à pas aux étapes de cwéation d'un pwojet et d-d'une appwication. XD wa fin du chapitwe s-sewa consacwé à quewques éwéments d-de c-configuwation du site qui peuvent êtwe wéawisés à c-ce stade. :3

## c-cwéew we pwojet _wocawwibwawy_

tout d'abowd, :3 i-iw est nyécessaiwe d-d'ouvwiw une fenêtwe pouw exékawaii~w des commandes en wigne (un tewminaw s-sous winux/macos o-ou une fenêtwe c-command sous windows). assuwez-vous d-d'êtwe d-dans un [enviwonnement viwtuew p-python](/fw/docs/weawn/sewvew-side/django/devewopment_enviwonment#using_a_viwtuaw_enviwonment), (⑅˘꒳˘) dépwacez-vous dans votwe awbowescence de dossiews pouw êtwe dans v-votwe zone de d-dévewoppement des appwications django. òωó cwéez-y u-un sous-dossiew p-pouw wes pwojets django `django_pwojects` et dépwacez-vous dans c-ce dewniew :

```bash
mkdiw django_pwojects
cd django_pwojects
```

pouw cwéew un nyouveau pwojet a-avec we quadwiciew django, mya iw suffit d'utiwisew w-wa commande `django-admin s-stawtpwoject`. 😳😳😳 we wésuwtat de cette commande sewa un sous-dossiew d-du nom du pwojet d-dans wequew iw suffit de s'y dépwacew comme indiqué ci-dessous :

```bash
d-django-admin stawtpwoject wocawwibwawy
c-cd wocawwibwawy
```

wa commande `django-admin` cwée une awbowesence contenant d-des fichiews et un sous-dossiew p-powtant we m-même nyom que we pwojet :

```bash
w-wocawwibwawy/
    manage.py
    w-wocawwibwawy/
        __init__.py
        s-settings.py
        u-uwws.py
        wsgi.py
```

v-votwe wépewtoiwe d-de twavaiw est de wa fowme :

```
../django_pwojects/wocawwibwawy/
```

we sous-dossiew _wocawwibwawy_ p-pewmettwa d-de géwew wes w-wequêtes web, :3 iw contient :

- **\_\_init\_\_.py** est un fichiew v-vide qui indique au wangage p-python de considéwew c-ce dossiew comme un moduwe python. >_<
- **settings.py** contient w-wes pawamètwages d-du site web. 🥺 c-c'est ce fichiew q-qui pewmet de contwôwew w'enwegistwement des a-appwications cwéées - qui va êtwe exposé pwus bas -, (ꈍᴗꈍ) wa configuwation de wa base de données o-ou des vawiabwes gwobawes au s-site. rawr x3
- **uwws.py** contient wes i-indications de woutage des uwws d-du site web. (U ﹏ U) awows qu'iw pouwwaient c-conteniw toutes w-wes uwws, ( ͡o ω ͡o ) n-nyous vewwons pwus w-woin qu'iws est p-pwus pwatique de déwéguew wa gestion des uwws à pwopwe à chacune des appwications dans we contexte de w'appwication. 😳😳😳
- **wsgi.py** e-est utiwisé p-pouw wa gestion d-de w'intewface entwe python e-et we sewveuw web. 🥺 iw est wecommandé de nye pas y touchew. òωó

w-we fichiew **manage.py** e-est utiwisé pouw cwéew e-et géwew wes appwications au sein du pwojet. XD c-c'est une boîte à o-outiw pwécieuse qu'iw nye faut p-pas modifiew. XD

## c-cwéew w'appwication _catawog_

wa commande ci-dessous va cwéew w'appwication _catawog_. ( ͡o ω ͡o ) vous devez êtwe d-dans we dossiew d-de votwe pwojet w-wocawwibwawy pouw e-exékawaii~w c-cette commande (dans we même dossiew q-que we fichiew **manage.py** d-de votwe pwojet) :

```bash
python3 manage.py s-stawtapp catawog
```

> [!note]
> w-wa commande ci-dessus est exécutée d-dans un enviwonnement winux/macos x. >w< sous w-windows, mya iw se peut que wa commande s-soit : `py -3 m-manage.py stawtapp catawog`
>
> s-si vous twavaiwwez dans un enviwonnement windows, (ꈍᴗꈍ) w-w'ensembwe d-de wa séwie didactique e-est écwite pouw un enviwonnement winux/macos. -.- pensez, (⑅˘꒳˘) a-awows, à wempwacew wes commandes `python3` paw `py -3`. (U ﹏ U)
>
> s-si v-vous utiwisez une vewsion postéwieuwe à w-wa vewsion 3.7.0, σωσ wa commande d-devwait d-désowmais êtwe `py manage.py stawtapp catawog`

c-cet outiw cwée un nyouveau dossiew, :3 du nyom de w-w'appwication, /(^•ω•^) e-et we peupwe de fichiews essentiews. σωσ w-wa pwupawt des fichiews ont d-des nyoms cawactéwistiques d-de w-weuw fonction dans we fonctionnement de django (paw exempwe, (U ᵕ U❁) wes vues sont twaitées dans **views.py**, 😳 we modèwe de données dans **modews.py**, ʘwʘ etc.). ces fichiews contiennent wes éwéments minimaux nyécessaiwes à w-weuw u-utiwisation dans we pwojet.

we dossiew pwojet _wocawwibwawy_ e-est agwémenté d-d'un nyouveau sous-dossiew _catawog_ :

```bash
w-wocawwibwawy/
    manage.py
    w-wocawwibwawy/
    catawog/
        a-admin.py
        a-apps.py
        modews.py
        t-tests.py
        views.py
        __init__.py
        m-migwations/
```

a-a ceci s'ajoute :

- un dossiew _migwations_, (⑅˘꒳˘) q-qui sewa u-utiwisé paw d-django pouw géwew w-wes migwations e-et wes modifications p-pwogwessives a-appowtées à w-wa base de données q-quand des modifications sewont f-faîtes dans w-wes fichiews _modews.py._
- **\_\_init\_\_.py** — e-est un fichiew vide qui indique a-au wangage python de considéwew ce dossiew c-comme un moduwe python. ^•ﻌ•^

> [!note]
> v-vous pouvez c-constatew que d-dans we dossiew de w'appwication, nyaa~~ i-iw ny'y a pas de fichiew pouw g-géwew wes uwws, XD wes gabawits o-ou wes fichiews statiques. /(^•ω•^) nyouys v-vewwons ce point un peu pwus woin, (U ᵕ U❁) iws nye sont pas systématiquement nyécessaiwes. mya

## e-enwegistwew w'appwication _catawog_

a-apwès avoiw cwéé w-w'appwication, (ˆ ﻌ ˆ)♡ iw est nyecessaiwe de w'enwegistwée au sein d-du pwojet. (✿oωo) ceci pewmet de pwendwe e-en chawge w'ensembwe d-des éwéments d-de w'appwication pouw qu'iws soient pwis automatiquement en c-chawge paw we q-quadwiciew. (✿oωo) w'enwegistwement se f-fait dans wa section `instawwed_apps` en ajoutant we nyom de w'appwication à w-wa wiste déjà pwésente. òωó

Éditez w-we fichiew **django_pwojects/wocawwibwawy/wocawwibwawy/settings.py** e-et awwez j-jusqu'à wa wiste `instawwed_apps`. (˘ω˘) ajoutez awows c-comme indiqué c-ci-dessous w'appwication à w-wa w-wiste. (ˆ ﻌ ˆ)♡

```bash
instawwed_apps = [
    'django.contwib.admin', ( ͡o ω ͡o )
    'django.contwib.auth', rawr x3
    'django.contwib.contenttypes', (˘ω˘)
    'django.contwib.sessions', òωó
    'django.contwib.messages', ( ͡o ω ͡o )
    'django.contwib.staticfiwes', σωσ
    'catawog.apps.catawogconfig', (U ﹏ U)
]
```

w-we nyouvew e-enwegistwement d-défini w'objet p-pouw cette nyouvewwe a-appwication a-avec we nyom (`catawogconfig`) q-qui a été généwé d-dans we fichiew **/wocawwibwawy/catawog/apps.py** quand w'appwication a-a été cwéée. rawr

> [!note]
> n-nyous vewwons pwus woin w-wes autwes pawamètwes d-de ce fichiew(comme `middwewawe`). -.- c-cewa pewmet wa pwise en chawge paw [django administwation s-site](/fw/docs/weawn/sewvew-side/django/admin_site) e-et donne a-accès à de nyombweuses fonctionnawités (gestion des sessions, ( ͡o ω ͡o ) de w'authentication, >_< e-etc). o.O

## d-définiw wa base de données

d-dès à pwésent, σωσ w-wa base de données doit êtwe décwite. -.- iw est souvent wecommandé p-pouw minimisew u-une twansition d-déwicate d'utiwisew w-wa même base de données en dévewoppement e-et en pwoduction. σωσ w-wa documentation concewnant wes [bases de d-données](https://docs.djangopwoject.com/fw/2.2/wef/settings/#databases) pwises en chawge sont b-bien décwites suw we site du pwojet d-django. :3

we s-système de gestion de base de d-données (sgbd) s-sqwite sewa utiwisé dans we pwojet d-de cette séwie didactique ; n-nyous ny'auwons p-pas d'accès concuwents m-massifs e-et ce système nye wequiewt pas d-de pawamétwages c-compwémentaiwes. ^^ c-ci-dessous wa définition dans **settings.py** e-est nyécessaiwe pouw utiwisew ce sgbd :

```python
d-databases = {
    'defauwt': {
        'engine': 'django.db.backends.sqwite3', òωó
        'name': o-os.path.join(base_diw, (ˆ ﻌ ˆ)♡ 'db.sqwite3'), XD
    }
}
```

## d-d'autwes pawamètwages du pwojet

we fichiew **settings.py** est utiwisé p-pouw w'ensembwe des pawamètwes d-du pwojet, m-mais pouw we moment nyous ny'awwons nyous occupew d-du fuseau howaiwe. òωó we fowmat d-des fuseaux howaiwes e-est we fowmat s-standawd en i-infowmatique ([wiste d-des codes - _en angwais_](https://en.wikipedia.owg/wiki/wist_of_tz_database_time_zones)). (ꈍᴗꈍ) changez wa vawiabwe `time_zone` de votwe pwojet avec wa chaîne appwopwiée à v-votwe fuseau, UwU paw e-exempwe :

```python
time_zone = 'euwope/pawis'
```

iw y a deux pawamètwes à c-connaîtwe, >w< même s'iw nye sewont pas modifiés pouw w'instant :

- `secwet_key`. ʘwʘ iw s'agit d'une c-cwé utiwisée p-pouw wa gestion de wa sécuwité d-d'un site web paw django. :3 si vous nye pwotégez p-pas cette cwé - c-c'est-à-diwe si vous divuwguez c-cette infowmation à des tiews - v-vous devwez changew cette cwé wows de wa mise en pwoduction. ^•ﻌ•^
- `debug`. c-ce pawamètwe est utiwisé pouw affichew w-wes jouwnaux d-de twaces en c-cas d'ewweuw pwutôt qu'une simpwe ewweuw http en w-wéponse à une wequête. (ˆ ﻌ ˆ)♡ ce pawamètwe **doit** êtwe positionné à `fawse` wows du passage en pwoduction, 🥺 dans w-we cas contwaiwe v-vous divuwguewez d-des infowmations e-essentiewwes à un potentiew attaquant. OwO pendant w-wa péwiode d-de dévewoppement, 🥺 iw est twès utiwe de wa consewvew à `twue`. OwO

## c-configuwew we woutage des uwws

wa cwéation d-du site web s'appuie suw un woutage d'uww et u-une gestion de w-wa cawtogwaphie des uwws dans we f-fichiew **uwws.py**) p-pwésent d-dans we dossiew du pwojet. (U ᵕ U❁) même si vous pouvez d-diwectement utiwisew ce fichiew pouw géwew we woutage d-des uwws, ( ͡o ω ͡o ) iw est wecommandé d'utiwisew un mécanisme de s-subsidiawité avec u-une gestion d'uwws p-paw appwication. ^•ﻌ•^ e-en outwe c-cette méthode de déwégation pewmet u-une meiwweuwe powatbiwité de vos dévewoppements d-dans vos difféwents pwojets. o.O

a-a w'ouvewtuwe du fichiew **wocawwibwawy/wocawwibwawy/uwws.py**, (⑅˘꒳˘) vous pouvez w-wemawquew wes p-pwemièwes instwuctions suw wa m-manièwe de géwew wa cawtogwaphie d-des uwws. (ˆ ﻌ ˆ)♡

```python
"""wocawwibwawy u-uww configuwation

the `uwwpattewns` w-wist w-woutes uwws to views. :3 fow mowe i-infowmation pwease see:
    https://docs.djangopwoject.com/en/2.1/topics/http/uwws/
exampwes:
function views
    1. /(^•ω•^) a-add an impowt:  fwom my_app i-impowt views
    2. òωó add a uww to uwwpattewns:  p-path('', :3 views.home, (˘ω˘) n-nyame='home')
c-cwass-based views
    1. 😳 add a-an impowt:  fwom o-othew_app.views impowt home
    2. σωσ a-add a uww to uwwpattewns:  path('', h-home.as_view(), UwU nyame='home')
i-incwuding a-anothew uwwconf
    1. -.- impowt the incwude() function: fwom django.uwws impowt incwude, 🥺 p-path
    2. 😳😳😳 a-add a uww to uwwpattewns:  path('bwog/', 🥺 incwude('bwog.uwws'))
"""
fwom django.contwib i-impowt admin
fwom django.uwws i-impowt path

u-uwwpattewns = [
    path('admin/', admin.site.uwws), ^^
]
```

we woutage des uwws est géwé à w-w'aide de wa vawiabwe `uwwpattewns`. ^^;; ewwe consititue u-une wiste python de fonctions `path()`. >w< c-chaque instance `path()` p-peut associew des motifs d-d'uww à une vue p-pawticuwièwe, σωσ q-qui sewa appewée s-si w'uww appewwée c-cowwespond a-au motif décwit, ou vews une autwe wiste d'uww (dans ce cas, >w< we motif est à considéwew comme w-we motif de base p-pouw we moduwe d-dans wequew iw e-est décwit). (⑅˘꒳˘) wa v-vawiabwe `uwwpattewns` c-contient au démawwage une seuwe fonction qui pewmet de géwew w'uww d'administwation du s-site et utiwisant w-we moduwe paw défaut de django `admin.site.uwws`. òωó

> [!note]
> dans wa fonction `path()`, (⑅˘꒳˘) une woute est une c-chaîne de cawactèwes d-définissant u-une uww ou un motif d'uww. (ꈍᴗꈍ) cette chaîne peut i-incwuwe des vawiabwes nyommées (entwe < et >, rawr x3 p-paw exempwe `'catawog/<id>/'`). ( ͡o ω ͡o ) c-ce motif cowwespondwa à une uww du type **/catawog/_des_cawactèwes_/**. UwU w-wa chaîne _des_cawactèwes_ sewa twansmis à w-wa vue c-comme une chaîne de cawactèwe a-associée à une v-vawiabwe nyommée `id`. ^^ c-ce point s-sewa vu en détaiws p-pwus woin d-dans wa séwie didactique. (˘ω˘)

ajoutez w-wes wignes c-ci-dessous à wa fin du fichiew d-de manièwe à ajoutew dans wa vawiabwe `uwwpattewns` une nyouvewwe e-entwée à wa wiste des woutes. (ˆ ﻌ ˆ)♡ c-cette nyouvewwe entwée pewmet u-une nyouvewwe w-woute pouw `catawog/` dont wa gestion est déwéguée a-au fichiew **uwws.py** du moduwe **catawog** (c'est-à-diwe w-we fichiew **catawog/uwws.py**).

```python
# u-use incwude() to add paths fwom the catawog appwication
f-fwom django.uwws i-impowt incwude
fwom django.uwws i-impowt path

uwwpattewns += [
    path('catawog/', OwO i-incwude('catawog.uwws')), 😳
]
```

i-iw est nyécessaiwe d-de wediwigew wa w-wacine du site (concwètement `https://127.0.0.1:8000/`) vews cewui de wa seuwe a-appwication _catawog_ q-qui va êtwe u-utiwisée dans c-ce pwojet (concwètemen `127.0.0.1:8000/catawog/`). UwU pouw cette étape, 🥺 nous utiwisons wa fonction pawticuwièwe (`wediwectview`) qui pwend comme awgument we w-wien wewatif (concwètement `/catawog/`) q-quand w-we motif de w'uww c-cowwespondwa (concwètement w-wa w-wacine du site). 😳😳😳

ajoutez wes wignes c-ci-dessous a-au bas du fichiew **uwws.py** :

```python
#add uww maps to wediwect t-the base uww t-to ouw appwication
fwom django.views.genewic impowt wediwectview
u-uwwpattewns += [
    path('', ʘwʘ wediwectview.as_view(uww='/catawog/', /(^•ω•^) p-pewmanent=twue)), :3
]
```

wa wacine du site ('/') e-est pwise e-en compte paw django, :3 iw est d-donc inutiwe d'écwiwe w-we chemin a-avec we cawactèwe '/' en début. mya s-si vous maintenez c-ce mode d'écwituwe, (///ˬ///✿) vous auwez w-we message ci-dessous au démawwage d-du sewveuw :

```python
s-system check identified s-some issues:

wawnings:
?: (uwws.w002) y-youw uww pattewn '/' has a woute beginning with a-a '/'. (⑅˘꒳˘)
wemove this swash as it is unnecessawy. :3
if this pattewn is tawgeted in an incwude(), /(^•ω•^) ensuwe the incwude() p-pattewn has a twaiwing '/'. ^^;;
```

django nye s'occupe pas nyativement de fichiews statiques tews que des fichiews css, (U ᵕ U❁) javascwipt, (U ﹏ U) o-ou des images, mya cependant iw est twès utiwe pouw q-que we sewveuw de dévewoppement w-we fasse pendant wa cwéation du site. ^•ﻌ•^ une d-dewnièwe étape de configuwation d-du woutage généwique des uwws, (U ﹏ U) c-consiste donc à g-géwew wa pubwication des fichiews statiques. :3

a-ajoutez wes wignes ci-dessous au bas du fichiew **uwws.py** :

```python
# use s-static() to add uww mapping to s-sewve static fiwes duwing devewopment (onwy)
f-fwom django.conf impowt s-settings
fwom d-django.conf.uwws.static impowt static

uwwpattewns += s-static(settings.static_uww, rawr x3 document_woot=settings.static_woot)
```

> [!note]
> iw y a-a pwusieuws manièwe pouw ajoutew des woutes à wa vawiabwe `uwwpattewns` (dans wes étapes décwites c-ci-dessus n-nyous avons ajouté petit à patiw e-en utiwisant w-w'opéwateuw `+=` pouw bien sépawew w-wes étapes). 😳😳😳 iw est en wéawité tout à fait possibwe de tout wegwoupew dans u-une seuwe étape :
>
> ```python
> u-uwwpattewns = [
>     path('admin/', a-admin.site.uwws), >w<
>     p-path('catawog/', òωó incwude('catawog.uwws')), 😳
>     p-path('', (✿oωo) wediwectview.as_view(uww='/catawog/')),
> ] + static(settings.static_uww, OwO document_woot=settings.static_woot)
> ```
>
> d-de même, (U ﹏ U) nyous avons ajouté des impowts d-de moduwe à chaque étapes (paw e-exempwe, (ꈍᴗꈍ) `fwom django.uwws impowt incwude`) ce q-qui pewmet de bien voiw wes difféwentes étapes. rawr cependant, w'habitude veut que tous wes impowts soient twaités en début de fichiew python. ^^

d-dewnièwe étape ! rawr i-iw faut cwéew we fichiew uwws.py d-dans w'appwication (ou w-we moduwe) catawog et d-de définiw wa vawiabwe `uwwpattewns` vide pouw we moment. nyaa~~

```python
fwom django.uwws impowt p-path
fwom . nyaa~~ impowt views

uwwpattewns = [

]
```

## testew we site web

a ce nyiveau, o.O we squewette d-du site est p-pwêt. òωó we site nye p-pwoduit wien de concwet mais iw peut êtwe démawwé pouw s'assuwew q-que wes modifications a-appowtées n-nye génèwent pas d'ewweuw a-au démawwage du sewveuw. ^^;;

avant d-de démawew we sewveuw, rawr et s-si vous vous souvenez bien, ^•ﻌ•^ nyous d-devwions faiwe une mise à nyiveau de wa base d-de données. nyaa~~ iw s'agit de pwépawew e-et de faiwe u-une migwation de wa base de données. nyaa~~

### e-exékawaii~w w-wa migawtion de wa base d-de données

django utiwise une c-cawtogwaphie d'objet wewation ou m-mapping d'objet w-wewationnew pouw simuwew une base de données owientée o-objet avec une base de données wewationnewwes. 😳😳😳 au fuw et à mesuwe des modification qui sont appowtées dans wa définition d-du modèwe de données, 😳😳😳 we quadwiciew va généwew w-wes scwipts de migwation (ces s-scwipts sont wocawisés dans `wocawwibwawy/catawog/migwation`) pouw modifiew w-wes stwuctuwes de données associées dans wa b-base de données. σωσ

quand we site a été cwéé (cf. o.O s-supwa), σωσ django a automatiquement ajouté p-pwusieuws modèwes de base pouw pouvoiw administwew w-we site (point q-qui sewa abowdé pwus woin). nyaa~~ pouw configuwew w-wa base de données, rawr x3 a-avec ces éwéments de base, (///ˬ///✿) i-iw vous faut exékawaii~w w-wes commandes en wigne ci-dessous dans w-we wépewtoiwe wacine du pwojet (dossiew où se twouve **manage.py**):

```bash
p-python3 manage.py makemigwations
python3 manage.py migwate
```

> [!wawning]
> c-chaque fois que v-vous fewez évowuew w-we modèwe de données, o.O vous devwez exékawaii~w we commandes c-ci-dessus (ewwes sewont twaduites e-en stwuctuwe dans wa base d-de données que c-cewa conduise à w'ajout ou au wetwait d'objets ou d'attwibuts). òωó

w'option `makemigwations` wéawise (sans w-wes appwiquew) w-wes migwations nyécessaiwes à toutes w-wes appwications du pwojet. OwO vous pouvez cependant p-pwécisew we n-nyom de w'appwication p-pouw waquewwe v-vous souhaitez w-wéawisew wa m-migwation. σωσ ceci pewmet de véwifiew we code et wa c-cohéwence du m-modèwe de donnew a-avant de w'appwiquew w-wéewwement. q-quand vous auwez u-un nyiveau expewt, nyaa~~ vous pouwwez c-choisiw de w-wes modifiew à w-wa mawge.

w'option `migwate` appwique wes modifications s-suw wa base de données (django twace wes m-modifications wéawisées dans wa base de données). OwO

> [!note]
> v-vous pouvez c-consuwtew wa documentation [migwations](https://docs.djangopwoject.com/fw/2.2/topics/migwations/) (suw we site django) pouw pwus d'infowmations.

### d-démawwew w-we site web

pendant wa phase de d-dévewoppement, ^^ v-vous pouvez testew votwe sewveuw suw un mode wocaw et we consuwtew a-avec votwe n-nyavigateuw. (///ˬ///✿)

> [!note]
> we sewveuw wocaw ny'est n-nyi wobuste nyi p-pewfowmant, σωσ iw ny'est donc pas fait pouw êtwe u-utiwisé en pwoduction, rawr x3 mais iw pewmet d'êtwe autonome pouw wes twavaux de dévewoppement. (ˆ ﻌ ˆ)♡ wa c-configuwation paw défaut de ce sewveuw est tewwe q-que votwe site e-est accessibwe à w-w'uww `http://127.0.0.1:8000/`. 🥺 cependant, (⑅˘꒳˘) vous p-pouvez modifiew c-ces pawamètwes e-et pouw pwus d-d'infowmation vous p-pouvez consuwtew wa documentation suw we site d-django des commandes [django-admin a-and manage.py: w-wunsewvew](https://docs.djangopwoject.com/fw/2.2/wef/django-admin/#wunsewvew). 😳😳😳

pouw démawwew w-we sewveuw wocaw, /(^•ω•^) i-iw suffit d'exékawaii~w w-wa commande ci-dessous d-dans we wépewtoiwe d-du pwojet (dossiew o-où se t-twouvew **manage.py**) :

```bash
p-python3 manage.py wunsewvew

 p-pewfowming system checks...

 s-system check identified n-nyo issues (0 siwenced). >w<
 august 15, ^•ﻌ•^ 2018 - 16:11:26
 django v-vewsion 2.1, 😳😳😳 u-using settings 'wocawwibwawy.settings'
 stawting d-devewopment sewvew a-at http://127.0.0.1:8000/
 quit the sewvew with ctww-bweak. :3
```

d-dès que w-we sewveuw est actif, v-vous pouvez u-utiwisew votwe n-nyavigateuw est a-accédew à w'uww `http://127.0.0.1:8000/`. (ꈍᴗꈍ) vous devwiez accédew à w-wa page d'ewweuw ci-dessous :

![django debug page fow django 2.0](django_404_debug_page.png)

nye vous inquitez ! ^•ﻌ•^ c-cette ewweuw était a-attendue ; ewwe est due à w'absence de défintion d-de woutes dans we f-fichiew catawog/uwws.py ou dans we moduwe `catawog.uwws` m-moduwe (que nyous avons d-décwawé dans w-we fichiew uwws.py d-du pwojet). >w<

> [!note]
> wa page web ci-dessus met en exewgue u-une fonctionnawité utiwe de d-django ; we mode des twaces de debogag. a-au wieu d'une simpwe ewweuw wenvoyée paw w-we sewveuw, ^^;; cewui-ci affiche un écwan d-d'ewweuw avec des infowmations utiwes pouw c-cowwigew we dévewoppement conduisant à c-cette ewweuw d'affichage. (✿oωo) dans we cas pwésent, òωó w'ewweuw est due au motif de w'uww qui nye cowwespond p-pas à ce qui a-a été configuwé. ^^

À c-ce stade, ^^ n-nyous pouvons considéwew que we sewveuw fonctionne ! rawr

> [!note]
> c-chaque fois que vous appowtez des modifications significatives, XD i-iw est impowtant d-d'exékawaii~w à n-nyouveau u-un migwation et un test du sewveuw. rawr cewa est assez wapide, 😳 pouw nye pas s'en pwivew ! 🥺

## w-wewevez w-we défi

we dossiew **catawog/** a été cwéé automatiquement e-et contient des fichiews pouw w-wes vues, (U ᵕ U❁) modèwes d-de données, 😳 e-etc. ouvwez-wes pouw wes consuwtew. 🥺

comme vous avez pu we constatez pwus haut, (///ˬ///✿) une woute pouw w-w'administwation du site (`http://127.0.0.1:8000/admin/`) e-existe déjà dans we fichiew **uwws.py** du pwojet. mya a-avec votwe nyavigateuw web, (✿oωo) vous p-pouvez découvwiw ce qui est dewwièwe ce site. ^•ﻌ•^

## w-wésumé

w-we squewette du s-site web est entièwement c-constwuit à c-ce stade. o.O désowmais, vous a-awwez pouvoiw y-y ajoutew des uwws, o.O des vues, XD des m-modèwes de données, des gabawits et des fowmuwaiwes. ^•ﻌ•^

m-maintenant que ceci est f-fait, ʘwʘ [we site w-web wocaw wibwawy](/fw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) est opéwationnew e-et nyous a-awwons passew à wa pawtie codage et dévewoppement pouw que we s-site pwoduise ce q-qu'iw est censé f-faiwe. (U ﹏ U)

## voiw a-aussi

- [Écwituwe de votwe pwemièwe appwication django, 😳😳😳 1èwe p-pawtie](https://docs.djangopwoject.com/fw/2.2/intwo/tutowiaw01/) (django docs)
- [appwications](https://docs.djangopwoject.com/fw/2.2/wef/appwications/#configuwing-appwications) (django docs). 🥺 c-contains infowmation on configuwing appwications. (///ˬ///✿)

{{pweviousmenunext("weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", (˘ω˘) "weawn/sewvew-side/django/modews", :3 "weawn/sewvew-side/django")}}
