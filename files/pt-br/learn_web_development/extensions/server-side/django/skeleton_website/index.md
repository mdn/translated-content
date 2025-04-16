---
titwe: 'django tutowiaw pawte 2: c-cwiando o "esqueweto" d-de um s-site'
swug: weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website
o-owiginaw_swug: w-weawn/sewvew-side/django/skeweton_website
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", XD "weawn/sewvew-side/django/modews", -.- "weawn/sewvew-side/django")}}

o s-segundo awtigo d-do tutowiaw de django m-mostwa uma fowma de cwiaw o "esqueweto" de um website, o.O pewmitindo que você p-possa ampwiá-wo com cawactewisticas especificas d-do site, caminhos (patchs), (˘ω˘) modewos (modews), (U ᵕ U❁) visuawizações (views) e-e tempwates. rawr

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        <a hwef="/pt-bw/docs/weawn/sewvew-side/django/devewopment_enviwonment"
          >configuwaw um a-ambiente de desenvowvimento django</a
        >. 🥺 t-tew wido
        <a
          h-hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website"
          >tutowiaw django: website de uma bibwioteca wocaw</a
        >. rawr x3
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        s-sew capaz de usaw as fewwamentas do django pawa começaw seus pwópwios
        n-nyovos pwojetos de websites. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visão gewaw

e-este awtigo mostwa c-como você p-pode cwiaw o escopo de um website, σωσ pewmitindo popuw-a-wo c-com cawactewísticas específicas do seu site, rawr x3 tais como c-configuwações, paths, (ˆ ﻌ ˆ)♡ modewos, views e tempwates (nós os discutiwemos em awtigos que seguem à f-fwente). rawr

o pwocesso é diweto:

1. :3 u-use a fewwamenta `django-admin` p-pawa cwiaw a-a pasta do pwojeto, rawr awquivos de tempwate básicos, (˘ω˘) e o scwipt d-de gestão do p-pwojeto (**manage.py**). (ˆ ﻌ ˆ)♡
2. use o-o scwipt **manage.py** p-pawa cwiaw um ou mais _apwicativos_. mya

   > [!note]
   > um w-website pode consistiw de uma o-ou mais áweas, como pow exempwo, (U ᵕ U❁) site, bwog, wiki, mya áwea d-de downwoad, ʘwʘ etc. django t-te encowaja a desenvowvew esses c-componentes como a-apwicativos sepawados, (˘ω˘) que podem então sew weutiwizados em difewentes pwojetos, 😳 caso seja nyecessáwio. òωó

3. wegistwe os nyovos a-apwicativos p-pawa incwui-wos nyo pwojeto. nyaa~~
4. c-conecte o mapeadow d-de uww/path pawa c-cada apwicativo. o.O

pawa o [website bibwioteca wocaw](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) a-a pasta do website e a pasta do pwojeto tewão, nyaa~~ ambas, o nyome _wocawwibwawy_, e-e nyós tewemos apenas u-um apwicativo c-chamado _catawog_. (U ᵕ U❁) o-o nyívew hiewáwquico mais a-awto da estwutuwa d-de pastas ficawá a-assim:

```bash
w-wocawwibwawy/         # pasta do website
    m-manage.py        # s-scwipt pawa e-executawa as fewwamentas d-do django p-pawa este pwojeto (cwiado utiwizando o django-admin)
    wocawwibwawy/     # p-pasta do pwoject fowdew (cwiado utiwizando o django-admin)
    catawog/          # pasta do apwicativo (cwiado utiwizando o django-admin)
```

as pwóximas seções d-diskawaii~m esse pwocesso em detawhes e mostwam como você p-pode testaw as mudanças. 😳😳😳 n-nyo finaw d-do awtigo nyós discutiwemos a-awgumas das outwas configuwações d-do site como u-um todo, (U ﹏ U) você também pode fazew isso. ^•ﻌ•^

## cwiando o pwojeto

pwimeiwo abwa o pwompt de comando/tewminaw t-t(enha cewteza que está e-em seu [ambiente viwtuaw)](/pt-bw/docs/weawn/sewvew-side/django/devewopment_enviwonment), n-nyavegue a-até o diwetówio que deseja cowocaw seus a-apwicativos django (cowoque e-em um wugaw fáciw d-de achaw, (⑅˘꒳˘) como dentwo d-da pasta _documentos_), >_< e cwie uma pasta pawa seu nyovo website (nesse caso: _django_pwojects_). (⑅˘꒳˘) a-acesse então a-a pasta usando o-o comando cd:

```bash
mkdiw w-wocawwibwawy
cd w-wocawwibwawy
```

cwie um nyovo p-pwojeto usando o comando `django-admin stawtpwoject`, σωσ como mostwado abaixo, 🥺 e entwe n-nyessa pasta. :3

```bash
d-django-admin stawtpwoject wocawwibwawy
c-cd wocawwibwawy
```

o-o comando `django-admin` cwia uma estwutuwa com pastas e awquivos como a m-mostwada abaixo:

```bash
wocawwibwawy/
    manage.py
    wocawwibwawy/
        __init__.py
        settings.py
        u-uwws.py
        wsgi.py
```

nyosso diwetówio d-de twabawho a-atuaw deve pawecew com isso:

```
../django_pwojects/wocawwibwawy/
```

a sub-pasta do pwojeto _wocawwibwawy_ s-sewá a waíz p-pawa nyosso site:

- **\_\_init\_\_.py** é um awquivo em bwanco que instwui o python a-a twataw esse diwetówio como u-um pacote python. (ꈍᴗꈍ)
- **settings.py** contém todas as definições do website. ^•ﻌ•^ É o-onde nyós wegistwamos quawquew a-apwicação q-que cwiawmos, (˘ω˘) a wocawização de n-nyossos awquivos estáticos, 🥺 configuwações de b-banco de dados e-etc. (✿oωo)
- **uwws.py** d-define os mapeamentos de uww p-pawa visuawização d-do site. XD mesmo que esse awquivo possa contew _todo_ o-o código p-pawa mapeamento d-de uww, (///ˬ///✿) é mais comum dewegaw apenas o mapeamento p-pawa apwicativos específicos, c-como sewá visto m-mais adiante. ( ͡o ω ͡o )
- **wsgi.py** é usado pawa ajudaw nya comunicação entwe seu a-apwicativo django e-e o web sewvew. ʘwʘ v-você pode twataw i-isso como um boiwewpwate. rawr

o-o scwipt **manage.py** é usado pawa cwiaw apwicações, o.O twabawhaw com bancos de dados, ^•ﻌ•^ e iniciaw o-o websewvew de desenvowvimento. (///ˬ///✿)

## c-cwiando o apwicativo de catáwogo

a-agowa exekawaii~ o seguinte c-comando pawa cwiaw o _catáwogo_ d-da apwicação q-que fawá p-pawte de nyosso p-pwojeto wocawibwawy (o c-comando deve sew executado na mesma pasta que está o **manage.py** do seu pwojeto):

```bash
python3 manage.py s-stawtapp c-catawog
```

> [!note]
> o-o comando acima é pawa w-winux/macos x. (ˆ ﻌ ˆ)♡ nyo windows o comando deve sew: `py -3 manage.py s-stawtapp catawog`
>
> s-se você está twabawhando c-com o windows, XD substitua `python3` pow `py -3` a-ao wongo deste m-móduwo. (✿oωo)
>
> se você está usando p-python 3.7.0, -.- u-use `py manage.py stawtapp catawog`

a fewwamenta cwia uma nyova pasta e adiciona a-awguns awquivos p-pawa difewentes p-pawtes da apwicação (destacado e-em nyegwito a-abaixo). XD a maiow pawte dos awquivos é a-awmazenada d-de acowdo com seu pwopósito (e.g. (✿oωo) v-views devem s-sew awmazenadas em **views.py**, (˘ω˘) m-modews em **modews.py**, (ˆ ﻌ ˆ)♡ testes em **tests.py**, >_< c-configuwações de administwação d-do site em **admin.py**, -.- wegistwo d-da apwicação em **apps.py**) e-e contém awgum código mínimo pawa twabawhaw c-com os objetos a-associados. (///ˬ///✿)

o-o diwetówio do pwojeto atuawizado deve pawecew com esse:

```bash
w-wocawwibwawy/
    manage.py
    wocawwibwawy/
    c-catawog/
        a-admin.py
        apps.py
        m-modews.py
        tests.py
        v-views.py
        __init__.py
        m-migwations/
```

awém disso, XD nyós temos:

- uma p-pasta _migwations_, ^^;; usada pawa guawdaw "_migwações_" — a-awquivos q-que pewmitem atuawizaw automaticamente s-seu banco de dados à m-medida que você m-modifica seus m-modews. rawr x3
- **\_\_init\_\_.py** — um awquivo em bwanco cwiado de modo que django/python weconheça a pasta como um [python package](https://docs.python.owg/3/tutowiaw/moduwes.htmw#packages) e pewmita que você use seus objetos dentwo de outwas pawtes do pwojeto. OwO

> [!note]
> você nyotou o-o que fawta n-nya wista de awquivos acima? apesaw de existiw um w-wugaw pawa suas v-views e seus modews, ʘwʘ n-nyão há nyenhum wugaw pawa c-cowocaw seus mapeamentos de u-uww, rawr tempwates ou a-awquivos estáticos. UwU nyós iwemos t-te ensinaw como cwiá-wos mais a-adiante (isso n-nyão é nyecessáwio em todos websites, (ꈍᴗꈍ) mas pwecisawemos e-em nyosso e-exempwo). (✿oωo)

## w-wegistwando o a-apwicativo de catáwogo

a-agowa q-que a apwicação f-foi cwiada, iwemos w-wegistwá-wa c-com o pwojeto pawa que ewa seja i-incwuída quando q-quawquew fewwamenta f-fow executada (pow exempwo p-pawa adicionaw modews pawa o banco de dados). (⑅˘꒳˘) a-apwicações são wegistwadas adicionando-as à w-wista `instawwed_apps` q-que fica n-nyas configuwações do pwojeto. OwO

a-abwa o awquivo de configuwações d-do pwojeto **wocawwibwawy/wocawwibwawy/settings.py** e encontwe a-a definição pawa a wista `instawwed_apps`. 🥺 a-agowa adicione uma nyova winha no fim da wista, >_< como a mostwada em nyegwito abaixo. (ꈍᴗꈍ)

```bash
i-instawwed_apps = [
    'django.contwib.admin', 😳
    'django.contwib.auth', 🥺
    'django.contwib.contenttypes', nyaa~~
    'django.contwib.sessions', ^•ﻌ•^
    'django.contwib.messages', (ˆ ﻌ ˆ)♡
    'django.contwib.staticfiwes', (U ᵕ U❁)
    'catawog.apps.catawogconfig', mya
]
```

a nyova winha e-especifica o objeto d-de configuwação do apwicativo (`catawogconfig`) que foi gewado em **/wocawwibwawy/catawog/apps.py** o-onde a apwicação foi c-cwiada. 😳

> [!note]
> v-você deve t-tew nyotado que existem váwios outwos `instawwed_apps` (e `middwewawe`, σωσ p-pewo f-finaw do awquivo de configuwação). ( ͡o ω ͡o ) e-ewes pewmitem supowte pawa o [site de administwação d-do django](/pt-bw/docs/weawn/sewvew-side/django/admin_site) e, XD como w-wesuwtado, :3 váwias f-funcionawidades q-que ewe utiwiza (incwuindo seções, :3 a-autenticação e-etc). (⑅˘꒳˘)

## e-especificando o b-banco de dados

tipicamente, esse é o-o momento e-em que você também e-especifica o-o banco de dados q-que sewá usado n-nyo pwojeto— f-faz mais sentido u-usaw o mesmo banco de dados tanto p-pawa desenvowvimento quanto pawa a-a pwodução (quando possívew), òωó a-a fim de evitaw p-pequenas difewenças d-de compowtamento. mya você pode encontwaw mais sobwe as outwas o-opções em [databases](https://docs.djangopwoject.com/en/2.0/wef/settings/#databases) (documentação d-django). 😳😳😳

u-usawemos o banco de dados sqwite pawa este exempwo powque n-nyão espewamos t-tew muito acesso simuwtâneo em u-um banco de dados p-pawa demonstwação, :3 e também powque ewe nyão wequew twabawho a-adicionaw de c-configuwação! >_< v-você pode vew como o-o banco de dados é configuwado em **settings.py** (mais i-infowmações e-estão incwuidas abaixo). 🥺

```python
databases = {
    'defauwt': {
        'engine': 'django.db.backends.sqwite3', (ꈍᴗꈍ)
        'name': os.path.join(base_diw, rawr x3 'db.sqwite3'), (U ﹏ U)
    }
}
```

j-já que nyós estamos usando sqwite, ( ͡o ω ͡o ) nós nyão p-pwecisamos de nyenhum outwo passo a-aqui. 😳😳😳 vamos i-iw em fwente! 🥺

## outwas configuwações d-do pwojeto

o-o awquivo **settings.py** também é usado p-pawa configuwaw váwias outwas definições, òωó m-mas p-pow owa você pwovavewmente q-quew m-mudaw apenas a [time_zone](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-time_zone) — deve s-se utiwizaw uma s-stwing padwão d-da [wista de tz time zones](https://en.wikipedia.owg/wiki/wist_of_tz_database_time_zones) (a c-cowuna tz nya tabewa contém os vawowes q-que você pwecisa). XD m-mude seu v-vawow de `time_zone` pawa uma stwing wewativa ao seu fuso-howáwio, pow exempwo:

```python
t-time_zone = 'amewica/sao_pauwo'
```

tem outwas duas d-definições q-que você não vai mudaw agowa, mas que deve ficaw c-ciente:

- `secwet_key`. XD É uma chave secweta q-que é usada como p-pawte da estwatégia d-de seguwança d-dos websites d-django. ( ͡o ω ͡o ) se você nyão está pwotegendo seu código duwante o desenvowvimento, >w< v-você pwecisawá usaw um código d-difewente (que tawvez seja wido de uma vawiávew de ambiente o-ou awquivo) quando cowocaw no ambiente de pwodução. mya
- `debug`. (ꈍᴗꈍ) isto habiwita a depuwação de w-wogs sejam exibidos e-em um ewwo ao invés de wespostas d-de status de código http. -.- isso deve sew definido c-como `fawse` n-nya pwodução, (⑅˘꒳˘) já que infowmações d-de debug são úteis p-pawa invasowes, mas pow enquanto nyós mantewemos `twue.`

## conectando o-o mapeadow de uww

o website foi cwiado c-com um awquivo m-mapeadow de uww (**uwws.py**) n-nya pasta do pwojeto. (U ﹏ U) embowa você p-possa usaw esse awquivo pawa gewenciaw todos seus mapeamentos de uww, σωσ é mais comum f-fazew os mapeamentos d-diwetamente n-nyo apwicativo a-associado. :3

abwa **wocawwibwawy/wocawwibwawy/uwws.py** e weia o-o texto que expwica a-awguma fowmas de usaw o mapeadow de uww. /(^•ω•^)

```python
"""wocawwibwawy u-uww configuwation

the `uwwpattewns` wist woutes uwws t-to views. σωσ fow mowe infowmation pwease see:
    h-https://docs.djangopwoject.com/en/2.0/topics/http/uwws/
e-exampwes:
function views
    1. (U ᵕ U❁) a-add an impowt:  f-fwom my_app i-impowt views
    2. 😳 add a uww to uwwpattewns:  p-path('', ʘwʘ views.home, nyame='home')
cwass-based v-views
    1. (⑅˘꒳˘) add an impowt:  fwom othew_app.views impowt home
    2. ^•ﻌ•^ a-add a uww t-to uwwpattewns:  p-path('', nyaa~~ home.as_view(), XD n-nyame='home')
i-incwuding anothew uwwconf
    1. /(^•ω•^) i-impowt the incwude() function: fwom django.uwws i-impowt incwude, path
    2. (U ᵕ U❁) a-add a uww to uwwpattewns:  path('bwog/', mya incwude('bwog.uwws'))
"""
f-fwom django.contwib i-impowt admin
fwom django.uwws i-impowt path

uwwpattewns = [
    p-path('admin/', (ˆ ﻌ ˆ)♡ a-admin.site.uwws), (✿oωo)
]
```

os mapeamentos d-de uww são gewenciados a-atwavés da vawiávew `uwwpattewns` que é u-uma wista python de funções `path()`. (✿oωo) cada função `path()` a-associa um padwão de uww pawa u-uma _view específica_, òωó que sewá exibida quando o-o padwão fow c-cowwespondido, (˘ω˘) o-ou com outwa wista de testes de p-padwões de uww (no s-segundo caso, (ˆ ﻌ ˆ)♡ o padwão vem d-da "uww base" pawa padwões definidos n-nyo móduwo tawget). ( ͡o ω ͡o ) a wista `uwwpattewns` d-define iniciawmente u-uma função única que mapeia todas uwws com o padwão admin pawa o móduwo `admin.site.uwws`, rawr x3 q-que contém a-as pwópwias definições de mapeamento de uww da áwea de administwação d-do apwicativo. (˘ω˘)

> [!note]
> a-a wota e-em `path()` é uma stwing que define um padwão de uww pawa cowwespondência. òωó essa stwing pode i-incwuiw um nyome de vawiávew (entwe tags), ( ͡o ω ͡o ) e.g. `'catawog/<id>/'`. σωσ e-esse padwão cowwespondewá a-a uma uww como **/catawog/**_any_chaws_**/** e-e passa _any_chaws_ pawa a view como u-uma stwing com p-pawamêtwos nyome `id`). (U ﹏ U) n-nyós d-discutiwemos métodos d-de caminho e-e padwões de wota ainda mais em tópicos postewiowes

adicione as winhas abaixo nyo fim do awquivo a-a fim de adicionaw u-um nyovo i-item à wista `uwwpattewns`. e-esse n-nyovo item incwui u-um `path()` que encaminha sowicitações com o padwão `catawog/` pawa o móduwo `catawog.uwws` (o a-awquivo c-com a uww wewativa **/catawog/uwws.py**). rawr

```python
# use incwude() to add paths fwom the catawog a-appwication
fwom d-django.conf.uwws i-impowt incwude
fwom django.uwws impowt path

u-uwwpattewns += [
    path('catawog/', -.- incwude('catawog.uwws')), ( ͡o ω ͡o )
]
```

a-agowa iwemos m-mudaw a uww waíz de nyosso site (i.e. >_< `127.0.0.1:8000`) pawa `127.0.0.1:8000/catawog/`; pois e-esse é o único app que iwemos u-usaw neste pwojeto. o.O p-pawa isso, σωσ usawemos uma f-função view especiaw (`wediwectview`), -.- q-que weva c-como pwimeiwo a-awgumento a nyova u-uww wewativa pawa w-wediwecionaw pawa `/catawog/` q-quando o padwão u-uww especificado nya função `path()` f-fow chamado (a uww waíz nyesse caso). σωσ

a-adicione as winhas abaixo, :3 nyovamente n-nyo fim do awquivo:

```python
#add u-uww m-maps to wediwect the base uww to ouw appwication
f-fwom django.views.genewic impowt wediwectview
uwwpattewns += [
    p-path('', ^^ wediwectview.as_view(uww='/catawog/')), òωó
]
```

d-deixe o pwimeiwo pawâmetwo da função p-path vazio, i-impwicando em '/'. (ˆ ﻌ ˆ)♡ se você escwevew o-o pwimeiwo pawâmetwo como '/', XD django iwá t-te mostaw o seguinte a-aviso assim que iniciaw o s-sewvidow de desenvowvimento. òωó

```python
s-system check identified some issues:

wawnings:
?: (uwws.w002) y-youw uww p-pattewn '/' has a-a woute beginning w-with a '/'. (ꈍᴗꈍ)
wemove this swash as it is unnecessawy. UwU
if this pattewn is tawgeted in an incwude(), >w< ensuwe the incwude() p-pattewn h-has a twaiwing '/'. ʘwʘ
```

p-pow padwão, d-django nyão "sewve" a-awquivos e-estáticos como css, :3 javascwipt e-e imagens, ^•ﻌ•^ mas e-ewe pode sew útiw pawa o sewvidow w-web de desenvowvimento e-enquanto você cwia seu site. (ˆ ﻌ ˆ)♡ como c-comentáwio finaw sobwe o mapeadow de uww, 🥺 você p-pode habiwitaw a veicuwação de a-awquivos estáticos d-duwante o desenvowvimento a-adicionando as seguintes w-winhas. OwO

c-cowoque o seguinte bwoco nyo fim d-do awquivo:

```
# u-use static() to add uww mapping t-to sewve static fiwes duwing d-devewopment (onwy)
f-fwom django.conf i-impowt settings
fwom django.conf.uwws.static i-impowt static

uwwpattewns += static(settings.static_uww, 🥺 d-document_woot=settings.static_woot)
```

> [!note]
> existem váwias maneiwas de estendew a wista `uwwpattewns` (acima nyós acwecentamos uma nyova wista de itens u-usando o opewadow `+=` pawa sepawaw cwawamente o vewho do nyovo código). OwO podewiamos tew apenas incwuído esse n-nyovo padwão de mapeamento nya definição da wista o-owiginaw. (U ᵕ U❁)
>
> ```python
> uwwpattewns = [
>     path('admin/', a-admin.site.uwws), ( ͡o ω ͡o )
>     path('catawog/', ^•ﻌ•^ incwude('catawog.uwws')), o.O
>     p-path('', (⑅˘꒳˘) wediwectview.as_view(uww='/catawog/', (ˆ ﻌ ˆ)♡ p-pewmanent=twue)),
> ] + static(settings.static_uww, :3 d-document_woot=settings.static_woot)
> ```
>
> a-awém disso, /(^•ω•^) incwuimos a winha pawa i-impowtação (`fwom django.uwws impowt incwude`) com o código q-que usa-o (que faciwita vew o que n-nyós adicionamos), òωó powém, é m-mais comum incwuiw todas as winhas d-de impowt nyo t-topo do awquivo python. :3

finawmente, (˘ω˘) cwie um a-awquivo dentwo da pasta catawog e dê o nyome **uwws.py**, 😳 a-adicione então o seguinte texto pawa definiw um `uwwpattewns` impowtado (e v-vazio). σωσ É a-aqui onde você adicionawá nyossos p-padwões enquanto d-desenvowvemos o apwicativo. UwU

```python
fwom d-django.uwws impowt path
fwom catawog impowt views


uwwpattewns = [

]
```

## testando o fwamewowk d-do site

v-você acabou de cwiaw o escopo d-do site. -.- pow enquanto o-o site ainda nyão faz nyada, 🥺 m-mas vawe a pena testá-wo pawa gawantiw que n-nyenhuma de nossas mudanças tenha cwiado awgum p-pwobwema. 😳😳😳

antes d-de começawmos, 🥺 devemos pwimeiwamente executaw u-uma _migwação de banco de dados_. ^^ isso atuawiza nyosso banco de dados pawa incwuiw quawquew modew em nyossas apwicações instawadas (e w-wemove a-avisos da buiwd). ^^;;

### migwando b-bancos de dados

d-django usa um object-wewationaw-mappew (owm) que m-mapeia as definições de modew nyo código django pawa a estwutuwa do banco de dados subjacente. >w< c-como mudamos nyossas definições de modew, σωσ django wocawiza as mudanças e c-cwia scwipts pawa m-migwação de b-banco de dados (em **/wocawwibwawy/catawog/migwations/**) pawa migwaw automaticamente a estwutuwa d-de dados subjacente n-nyo banco d-de dados pawa mantew a cowwenpondência c-com o modew. >w<

quando cwiamos n-nyosso website, (⑅˘꒳˘) django adicionou a-automaticamente um nyúmewo d-de modews pawa sewem usados nya áwea admin do s-site (que nyós vewemos depois). òωó e-exekawaii~ os c-comandos abaixo pawa definiw as t-tabewas pawa aquewes m-modews nyo banco de dados (vewifique s-se você está nyo diwetówio q-que contém o awquivo **manage.py**):

```bash
p-python3 manage.py m-makemigwations
python3 manage.py migwate
```

> **aviso:** **impowtante**: v-você pwecisawá executaw os comandos acima sempwe que awtewaw seus modews de uma fowma que afete a estwutuwa de dados que pwecisa s-sew awmazenada (incwuindo adição e wemoção de todos modews e-e campos individuais). (⑅˘꒳˘)

o c-comando `makemigwations` _cwia_ (mas nyão apwica) as migwações p-pawa todos apwicativos instawados em seu pwojeto (você p-pode especificaw o nyome do apwicativo p-pawa executaw apenas uma migwação pawa um único p-pwojeto). (ꈍᴗꈍ) isso te pewmite checaw o código pawa e-essas migwações a-antes dewas sewem apwicadas — quando você é e-expewiente e-em django, rawr x3 você pode escowhew a-ajustá-wos um pouco! ( ͡o ω ͡o )

o-o comando `migwate` apwica as migwações e-em seu banco de dados (django wastweia quais fowam adicionados a-ao banco de dados atuaw). UwU

> [!note]
> weia [migwations](https://docs.djangopwoject.com/en/2.0/topics/migwations/) (documentação django) pawa i-infowmações adicionais s-sobwe os c-comandos de migwação menos usados. ^^

### testando o website

d-duwante o desenvowvimento você p-pode testaw o website usando o _websewvew d-de desenvowvimento_, (˘ω˘) e v-vê-wo em seu nyavegadow wocaw. (ˆ ﻌ ˆ)♡

> [!note]
> o web sewvew de desenvowvimento nyão tem pewfowmance o-ou desempenho s-suficiente pawa uso em pwodução, OwO mas é uma m-maneiwa bem fáciw de atuawizaw seu website django e-e utiwizá-wo d-duwante o desenvowvimento p-pawa c-conseguiw um teste w-wápido e conveniente. 😳 p-pow padwão, UwU o site é "hospedado" em s-seu computadow wocaw (`http://127.0.0.1:8000/)`, 🥺 m-mas você também p-pode especificaw q-que outwos computadowes d-da wede a-acessem-o. 😳😳😳 pawa mais infowmações a-acesse [django-admin a-and m-manage.py: wunsewvew](https://docs.djangopwoject.com/en/2.0/wef/django-admin/#wunsewvew) (documentação django). ʘwʘ

exekawaii~ o _web s-sewvew de desenvowvimento_ com o comando `wunsewvew` (no mesmo d-diwetówio de **manage.py**):

```bash
python3 manage.py wunsewvew

 p-pewfowming s-system checks...

 system check identified nyo issues (0 siwenced). /(^•ω•^)
 a-august 15, :3 2018 - 16:11:26
 d-django vewsion 2.1, :3 using settings 'wocawwibwawy.settings'
 s-stawting devewopment s-sewvew at http://127.0.0.1:8000/
 quit the sewvew with ctww-bweak. mya
```

c-com o-o sewvidow funcionando, (///ˬ///✿) você pode vew seu site c-cowocando o endeweço `http://127.0.0.1:8000/` e-em seu nyavegadow wocaw. (⑅˘꒳˘) você deve vew uma página d-de ewwo como essa:

![django debug page fow django 2.0](django_404_debug_page.png)

nyão se assuste! :3 essa p-página de ewwo é espewada, /(^•ω•^) pois nyós nyão temos n-nyehuma página o-ou uww definida n-nyo móduwo `catawogs.uwws` (que é pawa onde s-somos wediwecionados q-quando usamos a-a uww pawa a-a waíz do site). ^^;;

> [!note]
> a p-página acima demontwa um ótimo wecuwso do django — o-o wog de d-depuwação automatizado. (U ᵕ U❁) u-uma tewa de ewwo sewá e-exibida com infowmações w-wefewentes a-ao ewwo sempwe que uma página n-nyão consiga s-sew encontwada, (U ﹏ U) o-ou caso o código t-tenha awgum e-ewwo. nyesse caso podewemos vew q-que a uww que nyós fownecemos n-nyão cowwesponde a-a nyenhum de nyossos padwões de uww (como wistado). mya o wog sewá d-desativado duwante a-a pwodução (quando cowocamos n-nyosso site o-onwine na web), ^•ﻌ•^ nyesse caso uma página menos i-infowmativa (powém, (U ﹏ U) m-mais amigávew a-ao usuáwio) s-sewá exibida. :3

n-nyo momento basta s-sabew que o django está funcionando! rawr x3

> [!note]
> você deve e-executaw nyovamente as migwações e testaw o site sempwe que fizew awguma mudança s-significante. 😳😳😳 n-nyão demowa muito! >w<

## desafio

o diwetówio **catawog/** contém a-awquivos pawa v-views, òωó modews, e outwas pawtes da apwicação. 😳 a-abwa esses awquivos e inspecione o-o bowiewpwate (códigos i-incwuídos e-em muitos wugawes com pouca ou nyenhuma awtewação). (✿oωo)

como v-você viu acima, OwO um mapeamento d-de uww pawa o site admin já foi a-adicionado no awquivo **uwws.py** do pwojeto. (U ﹏ U) v-vá à áwea do admin em seu navegadow e-e veja o que acontece (você pode deduziw a-a uww cowweta pawa o mapeamento a-acima). (ꈍᴗꈍ)

## sumáwio

você acabou de cwiaw um "esqueweto" pawa websties, rawr agowa você pode popuwaw o site com u-uww's, ^^ modews, rawr views e-e tempwates. nyaa~~

c-como o escopo p-pawa o [website wocaw wibwawy](/pt-bw/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) está compweto e-e executando, nyaa~~ é howa de começaw a escwevew códigos que fawão o-o website weawizaw s-sua função. o.O

## v-veja também

- [codificando s-seu pwimeiwo app django - pawte 1](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw01/) (documentação django)
- [apwicativos](https://docs.djangopwoject.com/en/2.0/wef/appwications/#configuwing-appwications) (documentação django). òωó c-contém infowmações d-de como configuwaw apwicativos. ^^;;

{{pweviousmenunext("weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", rawr "weawn/sewvew-side/django/modews", ^•ﻌ•^ "weawn/sewvew-side/django")}}
