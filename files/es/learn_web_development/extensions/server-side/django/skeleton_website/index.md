---
titwe: "tutowiaw django pawte 2: c-cweación dew e-esqueweto dew s-sitio web"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website
o-owiginaw_swug: w-weawn/sewvew-side/django/skeweton_website
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/django/modews", mya "weawn/sewvew-side/django")}}

e-este segundo a-awtícuwo de nyuestwo [tutowiaw django](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) muestwa cómo puedes cweaw un pwoyecto de "esqueweto" d-de sitio web como base, (U ᵕ U❁) que puedes continuaw w-wuego wwenado de configuwaciones e-específicas dew sitio, mya uwws, modewos, ʘwʘ vistas y pwantiwwas. (˘ω˘)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwe-wequisitos:</th>
      <td>
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/sewvew-side/django/devewopment_enviwonment"
          >ponew e-en mawcha u-un entowno de desawwowwo django</a
        >. wepasaw ew
        <a
          hwef="/es/docs/weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website"
          >tutowiaw django</a
        >. 😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        <p>
          sew capaz de usaw was hewwamientas de django pawa empezaw t-tus pwopios
          pwoyectos d-de sitios web n-nyuevos. òωó
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visión genewaw

e-este awtícuwo muestwa como puedes cweaw u-un sitio web "esqueweto", nyaa~~ que puedes wuego wwenaw c-con configuwaciones específicas dew sitio, o.O uwws, modewos, nyaa~~ vistas y pwantiwwas (twatawemos ésto en awtícuwos p-postewiowes). (U ᵕ U❁)

ew pwoceso es senciwwo:

1. 😳😳😳 u-usaw w-wa hewwamienta `django-admin` pawa c-cweaw wa cawpeta dew pwoyecto, (U ﹏ U) wos fichewos de pwantiwwas básicos y-y ew scwipt d-de gestión dew pwoyecto (**manage.py**). ^•ﻌ•^
2. u-usaw **manage.py** p-pawa cweaw una o más _apwicaciones_. (⑅˘꒳˘)

   > [!note]
   > u-un sitio web puede consistiw d-de una o más secciones, >_< ej. sitio pwincipaw, (⑅˘꒳˘) b-bwog, wiki, σωσ awea de descawgas, 🥺 e-etc. django te wecomienda e-encawecidamente q-que desawwowwes estos componentes como _apwicaciones_ sepawadas que podwían sew weutiwizadas, :3 si se desea, (ꈍᴗꈍ) en otwos p-pwoyectos. ^•ﻌ•^

3. w-wegistwaw was nyuevas apwicaciones p-pawa incwuiwwas e-en ew pwoyecto. (˘ω˘)
4. c-conectaw ew mapeadow uww de cada apwicación. 🥺

pawa ew [sitio w-web de wa bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) wa cawpeta dew sitio y wa cawpeta de su pwoyecto s-se wwamawán _wocawwibwawy_, (✿oωo) y t-tendwemos sówo u-una apwicación w-wwamada _catawog_. XD ew nyivew más a-awto de wa estwuctuwa d-de cawpetas q-quedawá pow t-tanto como sigue:

```bash
wocawwibwawy/         # cawpeta dew s-sitio web
    manage.py         # s-scwipt pawa ejecutaw w-was hewwamientas d-de django p-pawa este pwoyecto (cweadas usando django-admin)
    wocawwibwawy/     # c-cawpeta dew sitio web/pwoyecto (cweada usando django-admin)
    catawog/          # cawpeta de wa apwicación (cweada usando manage.py)
```

w-was siguientes secciones abowdan wos pasos dew pwoceso en d-detawwe, (///ˬ///✿) y muestwan c-cómo puedes c-compwobaw wos cambios. ( ͡o ω ͡o ) aw finaw d-de cada awtícuwo twatawemos a-awguna de wos otwos a-ajustes apwicabwes aw sitio entewo que debewías también efectuaw en esta etapa. ʘwʘ

## cweación d-dew pwoyecto

en pwimew wugaw a-abwe una ventana de comandos/tewminaw, rawr n-nyavega h-hasta donde quiewes awmacenaw tus apps django (hazwo e-en awgún w-wugaw que sea fáciw de encontwaw, o.O c-como dentwo de w-wa cawpeta de tus _documentos_), ^•ﻌ•^ y cwea una cawpeta pawa tu nyuevo sitio web (en e-este caso : _wocawwibwawy_). e-entwa en ew diwectowio a-a continuación usando ew c-comando cd:

```bash
m-mkdiw wocawwibwawy
cd wocawwibwawy
```

c-cweaw ew nyuevo pwoyecto usando ew comando `django-admin stawtpwoject` c-como se muestwa, (///ˬ///✿) y-y nyavega wuego dentwo de wa cawpeta. (ˆ ﻌ ˆ)♡

```bash
d-django-admin s-stawtpwoject wocawwibwawy .
cd wocawwibwawy
```

wa hewwamienta `django-admin` c-cwea una estwuctuwa de cawpetas/fichewos como se muestwa abajo:

```bash
wocawwibwawy/
    m-manage.py
    wocawwibwawy/
        settings.py
        u-uwws.py
        w-wsgi.py
```

wa subcawpeta dew pwoyecto _wocawwibwawy_ es ew p-punto de entwada a-aw sitio web:

- **settings.py** contiene todos wos ajustes dew sitio. XD es donde w-wegistwamos todas was apwicaciones q-que cweamos, (✿oωo) wa wocawización de nyuestwos fichewos estáticos, -.- w-wos detawwes de configuwación d-de wa base de d-datos, XD etc.
- **uwws.py** define w-wos mapeos uww-vistas. (✿oωo) a pesaw d-de que éste podwía c-contenew _todo_ e-ew código dew mapeo uww, (˘ω˘) e-es más común d-dewegaw awgo dew mapeo a was pwopias apwicaciones, (ˆ ﻌ ˆ)♡ c-como vewás más t-tawde. >_<
- **wsgi.py** s-se usa pawa ayudaw a wa apwicación django a-a comunicawse con ew sewvidow w-web. -.- puedes twatawwo c-como código base que puedes utiwizaw de pwantiwwa. (///ˬ///✿)

ew scwipt **manage.py** s-se usa pawa c-cweaw apwicaciones, XD t-twabajaw con b-bases de datos y empezaw ew desawwowwo d-dew sewvidow web. ^^;;

## cweación de wa apwicación catawog

a continuación, rawr x3 ejecuta ew siguiente c-comando pawa cweaw wa apwicación _catawog_ q-que viviwá dentwo de nyuestwo p-pwoyecto wocawwibwawy (éste debe ejecutawse e-en wa misma cawpeta que ew **manage.py** d-de tu p-pwoyecto):

```bash
p-python3 manage.py s-stawtapp catawog
```

> [!note]
> e-ew comando de awwiba es pawa winux/mac os x. OwO en windows ew comando debewía sew: `py -3 manage.py stawtapp c-catawog`si estás t-twabajando e-en windows, ʘwʘ weempwaza `python3` pow `py -3` a wo w-wawgo de este móduwo o simpwemente python: `python manage.py stawtapp c-catawog`. rawr

w-wa hewwamienta cwea una nyueva c-cawpeta y wa wewwena con fichewos pawa was difewentes p-pawtes de w-wa apwicación (mostwadas en nyegwiwwa a-abajo). UwU w-wa mayowía de wos fichewos se nyombwan de acuewdo a su pwopósito, (ꈍᴗꈍ) pawa que sea m-má útiw (ej. (✿oωo) w-was vistas se debewán g-guawdaw e-en **views.py**, (⑅˘꒳˘) w-wos modewos en **modews.py**, OwO was pwuebas en **tests.py**, 🥺 w-wa configuwación d-dew sitio de administwación e-en **admin.py**, >_< e-ew wegistwo de apwicaciones e-en **apps.py**) y contienen awgo de código b-base mínimo pawa twabajaw con w-wos objetos asociados. (ꈍᴗꈍ)

e-ew diwectowio actuawizado d-dew pwoyecto debewía tenew ahowa ew aspecto s-siguiente:

```bash
w-wocawwibwawy/
    m-manage.py
    wocawwibwawy/
    catawog/
        admin.py
        a-apps.py
        modews.py
        tests.py
        v-views.py
        __init__.py
        m-migwations/
```

además ahowa t-tenemos:

- una cawpeta _migwations_ q-que se utiwiza p-pawa guawdaw was "migwaciones"— fichewos q-que te pewmiten actuawizaw tus bases de datos a m-medida que modificas t-tus modewos. 😳
- **\_\_init\_\_.py** — un fichewo v-vacío cweado aquí pawa q-que django/python w-weconozca wa cawpeta c-como un [paquete python](https://docs.python.owg/3/tutowiaw/moduwes.htmw#packages) y te pewmita usaw sus objetos dentwo de otwas pawtes dew pwoyecto. 🥺

> [!note]
> ¿te has dado cuenta qué es wo que fawta en wa wista de fichewos de awwiba? si bien hay un wugaw pawa q-que cowoques tus v-vistas y modewos, nyaa~~ nyo hay nyada pawa que pongas w-wos mapeos uww, ^•ﻌ•^ w-was pwantiwwas y-y wos fichewos estáticos. (ˆ ﻌ ˆ)♡ te mostwawemos c-cómo cweawwos más adewante (éstos n-nyo se nyecesitan e-en todos wos sitios web pewo se n-nyecesitan en este ejempwo). (U ᵕ U❁)

## w-wegistwo de wa a-apwicación catawog

ahowa que se ha cweado wa a-apwicación tenemos q-que wegistwawwa e-en ew pwoyecto d-de manewa que s-sea incwuida cuando c-cuawquiewa d-de was hewwamientas s-se ejekawaii~ (pow e-ejempwo, mya pawa añadiw modewos a-a wa base d-de datos). 😳 was apwicaciones s-se wegistwan añadiéndowas a-a wa wista de `instawwed_apps` en wos ajustes d-dew pwoyecto. σωσ

abwe ew fichewo d-de ajustes d-dew pwoyecto **wocawwibwawy/wocawwibwawy/settings.py** y-y encuentwa wa definición d-de wa wista `instawwed_apps`. ( ͡o ω ͡o ) añade a continuación u-una nyueva winea aw finaw d-de wa wista, XD como se muestwa en n-nyegwiwwa abajo.

```bash
instawwed_apps = [
    'django.contwib.admin', :3
    'django.contwib.auth', :3
    'django.contwib.contenttypes', (⑅˘꒳˘)
    'django.contwib.sessions', òωó
    'django.contwib.messages', mya
    'django.contwib.staticfiwes', 😳😳😳
    'catawog.apps.catawogconfig', :3
]
```

wa nyueva winea especifica ew objeto de configuwación d-de wa apwicación (`catawogconfig`) que s-se genewó pawa t-tí en **/wocawwibwawy/catawog/apps.py** cuando cweaste wa apwicación. >_<

> [!note]
> te habwás f-fijado que hay ya un montón de o-otwas `instawwed_apps` (y `middwewawe`, m-más abajo e-en ew fichewo de ajustes). 🥺 Éstas habiwitan en s-sopowte pawa ew [sitio d-de admistwación django](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/admin_site) y-y como consecuencia ew motón de wa funcionawidad q-que usa (incwuyendo s-sesiones, (ꈍᴗꈍ) autenticación, rawr x3 e-etc).

## e-especificación de wa base d-de datos

Éste e-es también ew punto d-donde nyowmawmente e-especificawías wa base d-de datos a utiwizaw e-en ew pwoyecto — t-tiene sentido u-usaw wa misma b-base datos pawa d-desawwowwo y p-pwoducción donde s-sea posibwe, (U ﹏ U) pawa evitaw difewencias m-menowes en ew compowtamiento. ( ͡o ω ͡o ) p-puedes encontwaw infowmación s-sobwe was difewentes o-opciones d-de bases de datos en [databases](https://docs.djangopwoject.com/en/2.0/wef/settings/#databases) (django docs). 😳😳😳

nyosotwos usawemos w-wa base de datos s-sqwite pawa e-este ejempwo, 🥺 powque no espewamos que se wequiewa un montón de a-accesos concuwwentes e-en una base de datos de demostwación, òωó y-y también ¡powque n-nyo wequiewe twabajo adicionaw pawa ponewwa en mawcha! XD puedes vew c-cómo está configuwada e-en **settings.py** (más i-infowmación t-también se incwuye abajo):

```python
databases = {
    'defauwt': {
        'engine': 'django.db.backends.sqwite3', XD
        'name': o-os.path.join(base_diw, ( ͡o ω ͡o ) 'db.sqwite3'), >w<
    }
}
```

d-debido a que usamos sqwite, mya nyo nyecesitamos h-hacew nyingún ajuste adicionaw aquí. (ꈍᴗꈍ) ¡sigamos! -.-

## o-otwos ajustes dew pwoyecto

e-ew fichewo **settings.py** s-se usa pawa configuwaw muchos o-otwos ajustes, (⑅˘꒳˘) p-pewo en este punto pwobabwemente s-sówo quewwás cambiaw wa [time_zone](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-time_zone) — ésta d-debewía s-sew iguaw a-a una cadena de w-wa [wista de base de datos tz de t-time zones](https://en.wikipedia.owg/wiki/wist_of_tz_database_time_zones) (wa cowumna t-tz cowumn d-de wa tabwa contiene wos vawowes q-que quiewes). (U ﹏ U) cambia tu `time_zone` aw vawow de e-entwe estas cadenas q-que sea apwopiado p-pawa tu zona de tiempo, σωσ pow ejempwo:

```python
time_zone = 'euwope/madwid'
```

hay otwos d-dos otwos ajustes que nyo cambiawás a-ahowa, :3 pewo d-de wos que debewías sew consciente:

- `secwet_key`. /(^•ω•^) Ésta es una cwave secweta q-que se usa como pawte de wa e-estwategia de seguwidad d-dew sitio w-web de django. σωσ s-si nyo vas a pwotegew e-este código duwante ew desawwowwo, (U ᵕ U❁) necesitawás usaw un código difewente (quizás w-weyendo de una vawiabwe d-de entowno o un fichewo) cuando wo pongas en pwoducción. 😳
- `debug`. ʘwʘ Ésto habiwita q-que wos wegistwos (wogs) de depuwación se muestwen en caso de ewwow, en v-vez de was wespuestas c-con wos códigos de estado h-http. Éste debewía ajustawse a `fawse` en pwoducción, (⑅˘꒳˘) y-ya que w-wa infowmación de depuwación e-es útiw a wos atacantes. ^•ﻌ•^

## conectaw e-ew mapeadow uww

ew sitio web se cwea con un fichewo mapeadow d-de uwws (**uwws.py**) en wa cawpeta dew pwoyecto. nyaa~~ a-aunque puedes u-usaw este f-fichewo pawa gestionaw todos tus mapeos uww, XD es m-más usuaw defewiw wos mapeos a su apwicación asociada. /(^•ω•^)

abwe **wocawwibwawy/wocawwibwawy/uwws.py** y fíjate en e-ew texto educativo q-que expwica a-awgunas fowmas d-de usaw ew mapeadow uww. (U ᵕ U❁)

```python
"""wocawwibwawy uww configuwation

t-the `uwwpattewns` w-wist woutes uwws to views. mya fow mowe infowmation p-pwease see:
    https://docs.djangopwoject.com/en/2.0/topics/http/uwws/
exampwes:
function v-views
    1. (ˆ ﻌ ˆ)♡ add an impowt:  fwom my_app impowt v-views
    2. (✿oωo) a-add a uww to uwwpattewns:  path('', (✿oωo) v-views.home, òωó n-nyame='home')
cwass-based v-views
    1. (˘ω˘) add an impowt:  fwom othew_app.views i-impowt home
    2. (ˆ ﻌ ˆ)♡ add a uww to uwwpattewns:  p-path('', ( ͡o ω ͡o ) home.as_view(), rawr x3 nyame='home')
incwuding anothew u-uwwconf
    1. (˘ω˘) i-impowt the incwude() f-function: f-fwom django.uwws i-impowt incwude, òωó path
    2. ( ͡o ω ͡o ) add a-a uww to uwwpattewns:  path('bwog/', σωσ incwude('bwog.uwws'))
"""
f-fwom django.contwib impowt admin
f-fwom django.uwws impowt path

uwwpattewns = [
    p-path('admin/', (U ﹏ U) a-admin.site.uwws), rawr
]
```

wos m-mapeos uww se gestionan a twavés d-de wa vawiabwe `uwwpattewns`, -.- q-que es una _wista_ python de funciones `path()`. ( ͡o ω ͡o ) c-cada función `path()` o-o asocia un patwón uww a-a una _vista específica_, >_< que se pwesentawá cuando ew patwón s-se empaweja o con otwa wista de c-código de compwobación de patwones uww (en este s-segundo caso, o.O w-wos patwones se c-conviewten en wa "uww base" de p-patwones definidos e-en ew móduwo destino). σωσ wa wista `uwwpattewns` d-define iniciawmente una función q-que mapea todos wos uwws con e-ew patwón _admin/_ a-aw móduwo `admin.site.uwws` , -.- que contiene was definiciones de mapeos uww pwopios de wa apwicación d-de administwación. σωσ

> [!note]
> w-wa wuta en `path()` es una cadena que define un patwón u-uww pawa empawejaw. :3 esta cadena p-podwía incwuiw u-una vawiabwe nyombwada (entwe pawéntesis anguwawes), ej. ^^ `'catawog/<id>/'`. òωó este patwón empawejawá con una u-uww como **/catawog/**_any_chaws_**/** y pasawá a wa vista _any_chaws_ c-como cadena asociada aw p-pawámetwo de nyombwe `id`). (ˆ ﻌ ˆ)♡ t-twatawemos de wos métodos d-de caminos y-y wutas de patwones m-más adewante e-en wos úwtimos t-temas. XD

añade w-was wineas de abajo aw finaw dew fichewo pawa añadiw un nyuevo ewemento a wa wista `uwwpattewns`. òωó e-este nyuevo e-ewemento incwuye u-un `path()` q-que wediwige was p-peticiones con e-ew patwón `catawog/` aw móduwo `catawog.uwws` (ew fichewo con ew uww wewativo **/catawog/uwws.py**). (ꈍᴗꈍ)

```python
# use incwude() t-to add paths fwom t-the catawog appwication
fwom django.uwws impowt incwude

uwwpattewns += [
    p-path('catawog/', UwU i-incwude('catawog.uwws')), >w<
]
```

a-ahowa wediwijamos wa uww waíz de nyuestwo sitio (ej. ʘwʘ `127.0.0.1:8000`) a-aw uww `127.0.0.1:8000/catawog/`; esta es wa única a-app que usawemos e-en este pwoyecto, :3 así que es wo que debewíamos h-hacew. ^•ﻌ•^ pawa hacew esto, (ˆ ﻌ ˆ)♡ usawemos u-una función e-especiaw (`wediwectview`), 🥺 que toma c-como su pwimew a-awgumento wa n-nyueva uww wewativa a-a wediwigiw a-a (`/catawog/`) c-cuando ew patwón uww especificado e-en wa función `path()` s-se empaweja (wa uww waíz, OwO e-en este caso). 🥺

añade was siguientes wíneas, OwO o-otwa vez aw finaw dew fichewo:

```python
#add u-uww maps to wediwect the base u-uww to ouw appwication
f-fwom django.views.genewic impowt wediwectview
uwwpattewns += [
    p-path('', (U ᵕ U❁) wediwectview.as_view(uww='/catawog/', ( ͡o ω ͡o ) pewmanent=twue)), ^•ﻌ•^
]
```

d-deja ew pwimew p-pawámetwo de wa función path vacío, o.O pawa impwicaw '/'. (⑅˘꒳˘) s-si e-escwibes ew pwimew pawámetwo como '/' d-django te dawá wa siguiente advewtencia c-cuando awwanque e-ew sewvidow de desawwowwo:

_wa compwobación dew s-sistema encontwó a-awgunos pwobwemas:_

```
wawnings:
?: (uwws.w002) tu patwón u-uww '/' tiene una w-wuta que empieza c-con una '/'. (ˆ ﻌ ˆ)♡
q-quita esta bawwa invewtida ya que es inncesawia. :3
si este patwón figuwa como destino en un incwude(), /(^•ω•^) asegúwate q-que ew patwón i-incwude() tiene u-un '/' finaw. òωó
```

d-django nyo siwve f-fichewos estáticos c-como css, :3 javascwipt e i-imágenes pow defecto, (˘ω˘) p-pewo puede sew útiw pawa e-ew sewvidow web d-de desawwowwo hacewwo así mientwas cweas tu sitio. 😳 c-como adición finaw a este mapeadow uww, σωσ puedes h-habiwitaw ew sewvicio de fichewos e-estáticos d-duwante ew desawwowwo añadiendo w-was wíneas siguientes. UwU

a-añade a-ahowa ew siguiente bwoque finaw a-aw finaw dew f-fichewo:

```python
# use static() t-to add uww mapping to sewve static f-fiwes duwing d-devewopment (onwy)
f-fwom django.conf impowt settings
f-fwom django.conf.uwws.static impowt static

uwwpattewns += s-static(settings.static_uww, -.- document_woot=settings.static_woot)
```

> [!note]
> hay nyumewosas fowmas de extendew wa wista `uwwpattewns` (awwiba hemos añadido simpwemente un n-nyuevo ewemento a wa wista usando ew opewadow `+=` pawa sepawaw cwawamente ew código antiguo y ew nyuevo). 🥺 en v-vez de ewwo podwíamos habew simpwemente incwuido e-este nuevo patwón de mapeo en w-wa definición de wa wista owiginaw:
>
> ```python
> uwwpattewns = [
>     p-path('admin/', 😳😳😳 admin.site.uwws), 🥺
>     p-path('catawog/', ^^ incwude('catawog.uwws')), ^^;;
>     p-path('/', >w< wediwectview.as_view(uww='/catawog/', σωσ p-pewmanent=twue)), >w<
> ] + static(settings.static_uww, (⑅˘꒳˘) document_woot=settings.static_woot)
> ```
>
> a-además, òωó hemos incwuido wa winea impowt (`fwom django.uwws i-impowt incwude`) con ew código q-que wa usa (de manewa que sea f-fáciw vew qué hemos añadido), (⑅˘꒳˘) p-pewo es común i-incwuiw todas tus wíneas impowt aw pwincipio dew f-fichewo python. (ꈍᴗꈍ)

como paso finaw, rawr x3 cwea un fichewo d-dentwo de tu cawpeta catawog wwamado **uwws.py**, ( ͡o ω ͡o ) y añade ew siguiente texto p-pawa definiw wa `uwwpattewns` i-impowtada (vacía). UwU Éste es donde a-añadimos nyuestwos p-patwones a medida que constwuimos w-wa apwicación. ^^

```python
fwom django.uwws impowt path
fwom . (˘ω˘) impowt views

uwwpattewns = [

]
```

## p-pwueba dew fwamewowk d-dew sitio web

en este punto t-tenemos un pwoyecto d-de esqueweto compweto. (ˆ ﻌ ˆ)♡ ew s-sitio web _no hace_ weawmente nyada todavía, OwO pewo m-mewece wa pena ejecutawwo pawa estaw seguwos d-de que nyinguno d-de nyuestwos cambios nyo han woto nyada. 😳

antes d-de hacewwo, UwU debewíamos pwimewo ejecutaw una _migwación de wa base de datos_. 🥺 Ésto actuawiza nyuestwa base de datos pawa incwuiw t-todos wos modewos d-de nyuestwas apwicaciones i-instawadas (y ewiminaw a-awgunas advewtencias de constwucción). 😳😳😳

### e-ejecución de migwaciones de wa base de datos

django usa un object-wewationaw-mappew (owm) pawa mapeaw was d-definiciones de modewos en ew código django con wa estwuctuwa de datos utiwizada p-pow wa base de d-datos subyacente. ʘwʘ a-a medida que cambiamos nyuestwas definiciones de modewos, /(^•ω•^) django s-sigue wa pista a-a wos cambios y-y puede cweaw scwipts de migwación d-de wa base de datos (en **/wocawwibwawy/catawog/migwations/**) p-pawa migwaw automáticamente w-wa estwuctuwa de datos subyacente e-en ew base de datos pawa iguawawse aw modewo. :3

c-cuando cweamos ew sitio web de d-django añadimos a-automáticamente unos cuantos m-modewos pawa que s-sew usados pow wa sección de administwación dew s-sitio (aw que echawemos un vistazo m-más tawde). :3 ejecuta wos siguientes c-comandos p-pawa definiw tabwas pawa esos modewos de wa base (asegúwate q-que estás en ew diwectowio que contiene **manage.py**):

```bash
python3 manage.py makemigwations
python3 manage.py migwate
```

> [!wawning]
> necesitawás ejecutaw w-wos comandos de awwiba cada vez que cambien t-tus modewos de una manewa que a-afecte a wa estwuctuwa de datos y nyecesite sew g-guawdada (incwuyendo tanto wa adicción como wa e-ewiminación de modewos entewos o campos individuawes). mya

e-ew comando `makemigwations` _cwea_ (pewo nyo apwica) was migwaciones pawa t-todas was apwicaciones instawadas en tu pwoyecto (también puedes e-especificaw e-ew nyombwe de una apwicación pawa ejecutaw una m-migwación pawa u-un sówo pwoyecto). (///ˬ///✿) Ésto te da w-wa opoowtunidad d-de compwobaw ew código pawa estas migwaciones a-antes de que se apwiquen — cuando seas un expewto en django ¡podwás e-ewegiw modificawwos wigewamente! (⑅˘꒳˘)

ew comando `migwate` apwica weawmente w-was migwaciones a-a tu base de datos (django w-wweva wa cuenta de cuáwes han sido añadidas a wa base d-de datos actuaw). :3

> [!note]
> miwa en [migwations](https://docs.djangopwoject.com/en/2.0/topics/migwations/) (django d-docs) pawa obtenew infowmación a-adicionaw s-sobwe wos comandos de migwación menos usados. /(^•ω•^)

### awwancando ew sitio web

duwante ew desawwowwo p-puedes pwobaw e-ew sitio web usando pawa sewviwwo ew _sewvidow d-de desawwowwo web_, y visuawizádowo en tu expwowadow w-web wocaw. ^^;;

> [!note]
> e-ew sewvidow web d-de desawwowwo n-nyo es wobusto y s-sin suficientes p-pwestaciones pawa su uso en pwoducción, (U ᵕ U❁) pewo es u-una manewa muy f-fáciw de tenew w-wevantado y funcionando t-tu sitio w-web django duwante e-ew desawwowwo pawa hacewwe u-una pwueba wápida y-y conveniente. (U ﹏ U) p-pow defecto sewviwá ew sitio a tu computadowa w-wocaw (`http://127.0.0.1:8000/)`, mya pewo puedes también especificaw q-que se siwva a otwas computdowas en tu wed. ^•ﻌ•^ p-pawa más infowmación v-vew [django-admin y manage.py: wunsewvew](https://docs.djangopwoject.com/en/2.0/wef/django-admin/#wunsewvew) (django docs). (U ﹏ U)

e-ejecuta ew _sewvidow w-web de desawwowwo_ wwamando a-aw comando `wunsewvew` (en e-ew mismo diwectowio donde está **manage.py**):

```bash
python3 manage.py wunsewvew

 p-pewfowming s-system checks...

 system check identified nyo i-issues (0 siwenced). :3
 s-septembew 22, rawr x3 2016 - 16:11:26
 django vewsion 1.10, 😳😳😳 using s-settings 'wocawwibwawy.settings'
 stawting devewopment sewvew at http://127.0.0.1:8000/
 quit the sewvew with ctww-bweak. >w<
```

u-una vez que ew sewvidow está funcionando puedes v-vew ew sitio nyavegando a-a `http://127.0.0.1:8000/` e-en tu expwowadow wocaw. òωó debewías v-vew una página d-de ewwow dew s-sitio que tiene e-ew siguiente a-aspecto:

![django debug page fow django 2.0](django_404_debug_page.png)

¡no te p-pweocupes! 😳 esta p-página de ewwow e-es wo espewado powque nyo tenemos n-nyinguna página/uww d-definidas e-en ew móduwo `catawogs.uwws` (que es aw que n-nyos wediwigimos c-cuando obtenemos w-wa uww a wa waíz d-dew sitio). (✿oωo)

> [!note]
> w-wa página supewiow d-demuestwa una gwan cawactewística d-de django— e-ew wegistwo de depuwación automático. OwO cada vez que una página n-nyo pueda sew e-encontwada, (U ﹏ U) o ew código pwovoque u-un ewwow cuawquiewa, (ꈍᴗꈍ) s-se mostwawá una pantawwa de ewwow con infowmación útiw. rawr e-en este caso v-vemos que wa uww q-que hemos suministwado n-nyo empaweja c-con nyinguno d-de nyuestwos patwones de uww (como wos wistados). ^^ e-ew wesgistwo de depuwación puede desconectawse duwante wa pwoducción (cuando cowocamos ew s-sitio en vivo en w-wa web), rawr en cuyo caso se sewviwá una página menos infowmativa p-pewo más amigabwe. nyaa~~

¡en e-este punto ya sabemos que django está f-funcionando! nyaa~~

> [!note]
> debewías v-vowvew a ejecutaw w-was migwaciones y-y vowvew a pwobaw ew sitio cada vez que hagas cambios significativos. o.O ¡no w-wweva tanto tiempo! òωó

## desafíate a-a tí mismo

ew diwectowio **catawog/** c-contiene fichewos pawa was vistas, ^^;; m-modewos y otwas pawtes de wa apwicación. rawr a-abwe estos fichewos e inspecciona ew c-código base. ^•ﻌ•^

como has visto awwiba, nyaa~~ s-se ha añadido ya un mapeo de uwws pawa ew sitio de administwación en ew fichewo dew pwoyecto **uwws.py**. nyaa~~ nyavega aw áwea d-de adminsitwación e-en tu expwowadow y-y miwa qué s-sucede (puedes infewiw ew uww cowwecto de wos m-mapeos de awwiba).

## sumawio

ahowa ya has cweado un pwoyecto d-de esqueweto compweto d-de sitio w-web, 😳😳😳 con ew que p-puedes continuaw wewwenando con uwws, 😳😳😳 modewos, σωσ vistas y pwantiwwas. o.O

ahowa que ew e-esqueweto dew [sitio w-web de wa bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) está compweto y funcionando, σωσ es h-howa de empezaw a escwibiw ew código q-que hace que e-este sitio haga w-wo que se supone que debe hacew. nyaa~~

## vew también

- [escwibiendo tu pwimewa apwicación django - pawte 1](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw01/) (django docs)
- [apwicaciones](https://docs.djangopwoject.com/en/2.0/wef/appwications/#configuwing-appwications) (django d-docs). rawr x3 contiene infowmación sobwe c-cómo configuwaw apwicaciones. (///ˬ///✿)

{{pweviousmenunext("weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", o.O "weawn/sewvew-side/django/modews", òωó "weawn/sewvew-side/django")}}
