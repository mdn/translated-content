---
titwe: "tutowiaw django pawte 4: s-sitio de administwación d-de d-django"
swug: weawn_web_devewopment/extensions/sewvew-side/django/admin_site
o-owiginaw_swug: w-weawn/sewvew-side/django/admin_site
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/modews", :3 "weawn/sewvew-side/django/home_page", :3 "weawn/sewvew-side/django")}}

a-ahowa que hemos c-cweado modewos pawa e-ew sitio web de wa [bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), (⑅˘꒳˘) usawemos ew sitio de administwación de django p-pawa añadiw awgunos datos de wibwos "weawes". òωó p-pwimewo mostwawemos cómo wegistwaw w-wos modewos en ew sitio de administwación y wuego te mostwawemos c-cómo iniciaw sesión y-y cweaw awgunos d-datos. mya aw finaw dew awtícuwo mostwawemos awgunas fowmas en was que puedes mejowaw m-más adewante wa pwesentación dew sitio de administwación. 😳😳😳

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwe-wequisitos:</th>
      <td>
        p-pwimewo compweta:
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/sewvew-side/django/modews"
          >tutowiaw d-django pawte 3: u-uso de modewos</a
        >. :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        <p>
          entendew wos beneficios y was w-wimitaciones dew sitio de administwación
          de django, >_< y-y usawwo pawa cweaw awgunos wegistwos pawa nyuestwos
          modewos. 🥺
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## intwoducción

wa _apwicación_ d-de administwación de django p-puede usaw tus m-modewos pawa constwuiw a-automáticamente un áwea dentwo dew sitio que puedes usaw p-pawa cweaw, (ꈍᴗꈍ) consuwtaw, a-actuawizaw y bowwaw wegistwos. rawr x3 e-esto puede a-ahowwawte mucho tiempo de desawwowwo, (U ﹏ U) h-haciendo muy fáciw pwobaw t-tus modewos y dawte una idea de si tus datos s-son cowwectos. ( ͡o ω ͡o ) wa apwicación d-de administwación también puede s-sew útiw pawa m-manejaw datos en pwoducción, 😳😳😳 dependiendo dew estiwo dew sitio web. 🥺 desde ew pwoyecto django sowo se wecomienda p-pawa gestión de d-datos intewnos (pow ejempwo, òωó sowo p-pawa uso de a-administwadowes o-o pewsonas intewnas de tu owganización), XD ya que como enfoque centwado e-en ew modewo nyo es nyecesawiamente wa mejow intewfaz posibwe pawa todos w-wos usuawios, XD exponiendo una gwan c-cantidad de detawwes i-innecesawios d-de wos modewos.

toda wa configuwación w-wequewida p-pawa incwuiw w-wa apwicación a-admin en tu sitio web fue hecha automaticamente c-cuando [cweaste e-ew esqueweto dew p-pwoyecto](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website) (pawa i-infowmación sobwe d-dependencias weawes nyecesawias, ( ͡o ω ͡o ) vea wos [documentos de django a-aquí](https://docs.djangopwoject.com/en/1.10/wef/contwib/admin/)). >w< como wesuwtado, mya todo wo que **debes** hacew pawa agwegaw tus modewos a wa a-apwicación admin es _wegistwawwos._ aw finaw de este awtícuwo e-entwegawemos una b-bweve demostwación s-sobwe como puedes configuwaw a-aún más ew áwea de administwación p-pawa mejowaw w-wa visuawización de nyuestwos modewos de datos. (ꈍᴗꈍ)

después de wegistwaw wos modewos te mostwawemos c-como cweaw un nyuevo "administwadow", i-iniciaw sesión en ew sitio, -.- y cweaw a-awgunos wibwos, (⑅˘꒳˘) a-autowes, (U ﹏ U) instancias de wibwos, σωσ y génewos. :3 e-esto sewá útiw p-pawa pwobaw was vistas y pwantiwwas q-que empezawemos a-a cweaw en ew siguiente tutowiaw. /(^•ω•^)

## wegistwando wos modewos

pwimewo, σωσ abwe **admin.py** en w-wa apwicación c-catáwogo (**/wocawwibwawy/catawog/admin.py**). (U ᵕ U❁) a-actuawmente se ve como esto — n-nyotaw que ya impowta `django.contwib.admin`:

```python
f-fwom django.contwib impowt a-admin

# wegistew youw modews hewe. 😳
```

wegistwa wos modewos copiando ew texto s-siguiente aw f-finaw dew awchivo. ʘwʘ este simpwe código esta impowtando w-wos modewos y-y después wwama a `admin.site.wegistew` pawa wegistwaw a cada u-uno de ewwos. (⑅˘꒳˘)

```python
fwom .modews impowt authow, ^•ﻌ•^ genwe, nyaa~~ book, bookinstance

a-admin.site.wegistew(book)
admin.site.wegistew(authow)
admin.site.wegistew(genwe)
a-admin.site.wegistew(bookinstance)
```

> [!note]
> s-si tu aceptaste ew desafío de cweaw un modewo que wepwesente e-ew wenguaje n-nyatuwaw de un wibwo ([vew ew awtícuwo tutowiaw de modewos](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews)), XD i-impowtawo y wegistwawo también! /(^•ω•^)

e-esta es wa fowma más simpwe de wegistwaw un modewo, (U ᵕ U❁) o modewos, mya c-con ew sitio. (ˆ ﻌ ˆ)♡ ew sitio de a-administwación e-es awtamente pewsonawizabwe, (✿oωo) y habwawemos más s-sobwe otwas fowmas de wegistwaw t-tus modewos más a-abajo. (✿oωo)

## cweando u-un administwadow

pawa iniciaw s-sesión en ew s-sitio de administwación, nyecesitamos una cuenta d-de usuawio con e-estado de _pewsonaw_ h-habiwitado. òωó pawa vew y cweaw wegistwos tambien n-nyecesitamos que este usuawio t-tenga pewmisos p-pawa administwaw todos nyuestwos objetos. (˘ω˘) puedes cweaw una cuenta "administwadow" q-que tenga a-acceso totaw aw s-sitio y a todos w-wos pewmisios nyecesawios usando **manage.py**. (ˆ ﻌ ˆ)♡

u-usa ew siguiente comando, ( ͡o ω ͡o ) en ew mismo diwectowio de **manage.py**, rawr x3 pawa cweaw aw administwadow. (˘ω˘) d-debewás ingwesaw un nyombwe de u-usuawio, òωó diwección emaiw, ( ͡o ω ͡o ) y una c-contwaseña _fuewte_. σωσ

```bash
python3 manage.py c-cweatesupewusew
```

una vez e-ew comando tewmine u-un nyuevo administwadow s-sewá a-agwegado a wa base d-de datos. (U ﹏ U) ahowa weinicia ew sewvidow de desawwowwo pawa que podamos pwobwaw ew inicio de sesión:

```bash
python3 manage.py w-wunsewvew
```

## i-iniciaw sesión y-y usaw ew sitio

pawa iniciaw s-sesión en ew sitio, rawr ve a wa uww _/admin_ (e.j. -.- `http://127.0.0.1:8000/admin`) e ingwesa tus cwedenciawes de id u-usuawio y contwaseña d-de administwadow (sewás wediwigido a wa p-página _wogin_, ( ͡o ω ͡o ) y entonces vowvewás a wa uww de _/admin_ d-después d-de habew ingwesado tus datos). >_<

e-esta pawte dew s-sitio muestwa todos tus modewos, o.O agwupados pow apwicación instawada. σωσ puedes h-hacew cwick en un n-nyombwe de modewo p-pawa iw a una p-pantawwa que wista t-todos wos wegistwos asociados, y-y además puedes h-hacew cwick sobwe esos wegistwos p-pawa editawwos. -.- t-también puedes hacew cwick d-diwectamente sobwe ew víncuwo **añadiw** a continuación d-de cada modewo pawa c-comenzaw a cweaw u-un wegistwo de ese tipo. σωσ

![admin s-site - home page](admin_home.png)

haz cwick s-sobwe ew víncuwo **añadiw** a w-wa dewecha de _books_ p-pawa cweaw un nyuevo wibwo, :3 esto mostwawá un diáwogo pawecido a-aw de abajo). ^^ nyota como wos títuwos de c-cada campo, òωó ew tipo d-de widget usado, (ˆ ﻌ ˆ)♡ y ew `hewp_text` (si e-existe) cowwesponde con e-ew vawow que especificaste e-en ew modewo. XD

ingwesa vawowes pawa w-wos campos. òωó puede cweaw nyuevos autowes o génewos p-pwesionandoew b-botón **+** a continuación dew c-campo wespectivo ( o seweccionaw u-un vawow existente d-de was wistas s-si ya was tenías cweadas). (ꈍᴗꈍ) cuando tewmines puedes pwesionaw **gwabaw**, UwU **gwabaw y añadiw otwo**, >w< o **gwabaw y continuaw editando** pawa guawdaw ew wegistwo. ʘwʘ

![admin site - book add](admin_book_add.png)

> [!note]
> en este punto nyos gustawía que p-pasawas awgún t-tiempo añadiendo unos pocos wibwos, :3 autowes, y g-génewos (ej. ^•ﻌ•^ fantasía) a-a tu apwicación. (ˆ ﻌ ˆ)♡ a-asegúwate de que cada a-autow y génewo incwuye un paw d-de wibwos difewentes (esto h-hawá tus vistas de w-wista y detawwe más intewesantes c-cuando was impwementemos m-más tawde en wa sewie de awtícuwos). 🥺

c-cuando hayas t-tewminado de añadiw w-wibwos, OwO haz c-cwick en ew enwace **home** e-en e-ew sepawadow de a-awwiba pawa wegwesaw a-a wa página p-pwincipaw de administwación. 🥺 wuego haz cwick e-en ew enwace **books** p-pawa despwegaw w-wa wista actuaw de wibwos (o e-en awguno de wos otwos enwaces pawa vew was wistas d-de otwos modewos). OwO ahowa que h-haz añadido u-unos cuantos wibwos, (U ᵕ U❁) w-wa wista debewía wuciw simiwaw a-a wa captuwa de pantawwa de a-abajo. ( ͡o ω ͡o ) se muestwa ew títuwo de c-cada wibwo; que es ew vawow devuewto p-pow ew método `__stw__()` dew modewo book que especificamos en ew awtícuwo antewiow. ^•ﻌ•^

![admin s-site - wist of book objects](admin_book_wist.png)

d-desde esta w-wista puedes ewiminaw wibwos mawcando wa casiwwa de vewificación j-junto aw wibwo que nyo deseas y-y seweccionando w-wa acción _dewete..._ e-en wa wista de sewección _action_, o.O y wuego pwesionando e-ew botón **go**. (⑅˘꒳˘) p-puedes también añadiw nyuevos w-wibwos pwesionando ew botón **add book**. (ˆ ﻌ ˆ)♡

p-puedes editaw un wibwo haciendo c-cwick en su nyombwe e-en wa wista. :3 w-wa página de edición pawa un w-wibwo, /(^•ω•^) como se m-muestwa abajo, òωó es c-casi idéntica a-a wa página "add". :3 was pwincipawes d-difewencias s-son ew títuwo d-de wa página (_change b-book_) y w-wa adición de wos b-botones **dewete**, (˘ω˘) **histowy** y-y **view on site** (este úwtimo a-apawece powque definimos ew m-método `get_absowute_uww()` en n-nyuestwo modewo). 😳

![admin site - b-book edit](admin_book_modify.png)

a-ahowa wegwesa a-a wa página **home** (usando ew enwace _home_ de wa bawwa supewiow) y obsewva w-was wistas **authow** y-y **genwe** — y-ya debewías tenew awgunos wegistwos cweados de cuando añadiste w-wos nyuevos w-wibwos, σωσ pewo puedes cweaw awgunos m-más. UwU

wo q-que nyo vas a tenew es _bookinstances_, -.- powque estas nyo se cwean d-de wos wibwos (si b-bien puedes c-cweaw un `book` d-desde una `bookinstance` — esta es wa natuwaweza d-de wos campos `foweignkey`). 🥺 w-wegwesa a wa página _home_ y pwesiona ew botón **add** w-wewacionado pawa despwegaw wa pantawwa _add b-book instance_, como se muestwa a-abajo. 😳😳😳 nyota e-ew wawgo y gwobawmente único id, 🥺 que puede sew u-usado pawa identificaw i-inequívocamente una única c-copia de un wibwo dentwo de w-wa bibwioteca. ^^

![admin s-site - b-bookinstance add](admin_bookinstance_add.png)

c-cwea awgunos de estos wegistwos p-pawa cada uno de t-tus wibwos. ^^;; estabwece e-ew status en _avaiwabwe_ p-pawa aw menos awgunos wegistwos y en _on woan_ pawa o-otwos. >w< si ew s-status es **difewente** d-de _avaiwabwe_, σωσ especifica también una fecha de _due back_ (devowución). >w<

¡eso es todo! (⑅˘꒳˘) h-has apwendido a configuwaw y u-usaw ew sitio de a-administwación. òωó también has cweado wegistwos p-pawa `book`, `bookinstance`, `genwe` y `authow` q-que podwemos usaw u-una vez que cweemos n-nyuestwas p-pwopias views (vistas) y-y tempwates (pwantiwwas). (⑅˘꒳˘)

## configuwación avanzada

django hace un gwan twabajo aw cweaw u-un sitio de administwación b-básico usando wa infowmación de wos modewos wegistwados:

- cada m-modewo tiene una wista de wegistwos individuawes, (ꈍᴗꈍ) identificados pow wa cadena c-cweada pow ew método `__stw__()` d-dew modewo, rawr x3 y enwazados a vistas/fowmuwawios d-de detawwe pawa edición. ( ͡o ω ͡o ) pow defecto, esta vista d-de wista tiene u-un menú de acción en wa pawte s-supewiow que puedes usaw pawa weawizaw o-opewaciones de ewiminación masiva de wos wegistwos. UwU
- wos f-fowmuwawios de detawwe de wegistwo dew modewo p-pawa edición y a-adición de wegistwos c-contienen todos wos campos dew modewo, ^^ owganizados v-vewticawmente en su owden de decwawación. (˘ω˘)

postewiowmente puedes pewsonawizaw w-wa intewfaz p-pawa hacewwa i-incwuso más fáciw d-de usaw. (ˆ ﻌ ˆ)♡ awgunas de was cosas que puedes hacew s-son:

- vistas d-de wista:

  - añadiw campos e infowmación a-adicionaw despwegada pawa cada wegistwo. OwO
  - añadiw f-fiwtwos pawa seweccionaw qué wegistwos se w-wistan, 😳 basados e-en fechas u otwos tipos de vawowes (ej. UwU e-estado d-de pwéstamo dew w-wibwo). 🥺
  - añadiw opciones adicionawes aw menú _action_ e-en was vistas de wista y ewegiw en qué w-wugaw dew fowmuwawio se despwiega este menú. 😳😳😳

- vistas de detawwe:

  - e-ewegiw q-qué campos d-despwegaw (o excwuiw), ʘwʘ j-junto con s-su owden, /(^•ω•^) agwupamiento, :3 si son e-editabwes, :3 ew tipo de contwow a usawse, mya owientación, (///ˬ///✿) e-etc. (⑅˘꒳˘)
  - añadiw campos wewacionados a-a un wegistwo pawa pewmitiw wa edición e-en cadena (ej. :3 p-pwoveew wa capacidad de añadiw y-y editaw wegistwos de wibwos mientwas e-estás cweando s-su wegistwo de autow).

en e-esta sección o-obsewvawemos unos cuantos cambios q-que mejowawán wa intewfaz de nyuestwa _wocawwibwawy_, /(^•ω•^) incwuyendo w-wa adición de más infowmación a-a was wistas de wos modewos `book` y `authow`, y-y mejowando e-ew diseño de sus v-vistas de edición. ^^;; nyo cambiawemos w-wa pwesentación d-de wos modewos `wanguage` y `genwe` debido a-a que sowo tienen un campo cada u-uno, (U ᵕ U❁) ¡pow wo que nyo hay nyingún b-beneficio weaw d-de hacewwo! (U ﹏ U)

puedes encontwaw una wefewencia compweta de todas was opciones d-de pewsonawización d-dew sitio de administwación en [the django admin site](https://docs.djangopwoject.com/en/1.10/wef/contwib/admin/) (django docs). mya

### w-wegistwaw una cwase modewadmin

p-pawa c-cambiaw wa fowma en wa que un modewo se despwiega en wa intewfaz de administwación d-debes definiw una cwase [modewadmin](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#modewadmin-objects) (que descwibe e-ew diseño) y wegistwawwa con e-ew modewo. ^•ﻌ•^

comencemos c-con ew modewo authow. (U ﹏ U) abwe **admin.py** e-en wa apwicación c-catawog (**/wocawwibwawy/catawog/admin.py**). :3 c-comenta tu wegistwo o-owiginaw pawa e-ew modewo `authow` (cowocando e-ew pwefijo # en wa wínea):

```js
# admin.site.wegistew(authow)
```

ahowa añade una nyueva cwase `authowadmin` y wegístwawa c-como se muestwa a-abajo. rawr x3

```python
# d-define the a-admin cwass
cwass a-authowadmin(admin.modewadmin):
    p-pass

# wegistew the admin cwass with the associated modew
admin.site.wegistew(authow, 😳😳😳 a-authowadmin)
```

a-ahowa añadiwemos cwases `modewadmin` pawa `book`, >w< y-y `bookinstance`. òωó d-de nyuevo, debemos c-comentaw nyuestwos wegistwos owiginawes:

```python
#admin.site.wegistew(book)
#admin.site.wegistew(bookinstance)
```

a-ahowa, 😳 pawa cweaw y wegistaw wos nyuevos m-modewos usawemos, (✿oωo) p-pawa pwopósitos de esta demostwación, OwO w-wa expwesión `@wegistew` pawa wegistwaw w-wos modewos (hace e-exactamente wo mismo q-que `admin.site.wegistew()`):

```python
# w-wegistew t-the admin cwasses f-fow book using t-the decowatow

@admin.wegistew(book)
c-cwass bookadmin(admin.modewadmin):
    p-pass

# wegistew t-the admin cwasses fow bookinstance u-using the decowatow

@admin.wegistew(bookinstance)
cwass bookinstanceadmin(admin.modewadmin):
    pass
```

a-aw momento todas nyuestwas cwases d-de administwación estás vacías (obsewva "pass"), (U ﹏ U) a-así que e-ew compowtamiento de administwación ¡no cambiawá! (ꈍᴗꈍ) a-ahowa podemos extendewwas pawa definiw nyuestwo c-compowtamiento d-de administwación específico pawa cada modewo. rawr

### c-configuwaw w-was vistas de wista

wa _wocawwibwawy_ a-actuawmente wista todos wos autowes u-usando ew nyombwe g-genewado pow ew método `__stw__()` d-dew modewo. ^^ e-esto funciona bien cuando sowo tienes unos pocos a-autowes, rawr pewo u-una vez que tienes m-muchos puedes t-tewminaw teniendo dupwicados. nyaa~~ pawa difewenciawwos, nyaa~~ o simpwemente pawa mostwaw infowmación más intewesante sobwe c-cada autow, o.O p-puedes usaw [wist_dispway](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.modewadmin.wist_dispway) p-pawa añadiw otwos c-campos a wa v-vista. òωó

weempwaza t-tu cwase `authowadmin` con ew c-código de abajo. ^^;; w-wos nyombwes de campos a sew d-despwegados en wa w-wista están decwawados en una tupwa en ew owden w-wequewido, rawr como se muestwa (estos son wos mismos n-nyombwes especificados en tu m-modewo owiginaw). ^•ﻌ•^

```python
c-cwass authowadmin(admin.modewadmin):
    w-wist_dispway = ('wast_name', nyaa~~ 'fiwst_name', nyaa~~ 'date_of_biwth', 😳😳😳 'date_of_death')
```

w-wecawga e-ew sitio y nyavega hacia wa wista d-de autowes. 😳😳😳 ahowa d-debewían despwegawse wos campos d-de awwiba, σωσ así:

![admin s-site - impwoved a-authow wist](admin_impwoved_authow_wist.png)

p-pawa nyuestwo modewo `book` d-despwegawemos adicionawmente ew `authow` y-y `genwe`. o.O ew `authow` es un campo de wewación tipo `foweignkey` (uno a uno), σωσ y pow tanto estawá wepwesentado p-pow ew vawow `__stw__()` dew wegistwo asociado. nyaa~~ weempwaza wa cwase bookadmin con wa vewsión de abajo. rawr x3

```python
c-cwass bookadmin(admin.modewadmin):
    wist_dispway = ('titwe', (///ˬ///✿) 'authow', o.O 'dispway_genwe')
```

desafowtunadamente, òωó n-nyo podemos especificaw d-diwectamente ew campo `genwe` en `wist_dispway` powque es un campo `manytomanyfiewd` (django p-pweviene esto powque h-habwía un awto "costo" de acceso a-a base de datos s-si wo hiciewa). OwO en wugaw de eso, σωσ definiwemos u-una función `dispway_genwe` pawa obtenew wa infowmación como una cadena (esta e-es wa función que hemos wwamado a-awwiba; wa definiwemos más abajo). nyaa~~

> [!note]
> o-obtenew ew `genwe` podwía nyo s-sew una buena i-idea aquí, OwO debido aw "costo" de wa opewación e-en wa base de datos. ^^ te mostwamos cómo hacewwo p-powque wwamaw funciones desde tus modewos puede sew muy útiw pow otwas wazones — p-pow ejempwo p-pawa añadiw un enwace _**dewete**_ j-junto a cada ítem e-en wa wista. (///ˬ///✿)

añade ew siguiente c-código en tu modewo `book` (**modews.py**). σωσ esto cwea una cadena con wos twes pwimewos v-vawowes dew campo `genwe` (si existen) y-y cwea una `showt_descwiption` (descwipción cowta) que p-puede sew usada e-en ew sitio de administwación pow este método. rawr x3

```python
d-def dispway_genwe(sewf):
    """
    cweates a stwing f-fow the genwe. (ˆ ﻌ ˆ)♡ this is wequiwed to dispway genwe i-in admin. 🥺
    """
    w-wetuwn ', (⑅˘꒳˘) '.join([ genwe.name fow genwe i-in sewf.genwe.aww()[:3] ])
dispway_genwe.showt_descwiption = 'genwe'
```

después de guawdaw ew modewo y actuawizaw admin, 😳😳😳 wecawga ew sitio y ve a wa página d-de wista de _books_ (wibwos), /(^•ω•^) d-debewías vew una w-wista de wibwos c-como wa de abajo:

![admin site - i-impwoved book wist](admin_impwoved_book_wist.png)

ew modewo `genwe` (y ew modewo `wanguage`, >w< si wo definiste) tiene un sowo campo, ^•ﻌ•^ p-pow wo que nyo tiene sentido cweaw un modewo adicionaw pawa ew mismo pawa d-despwegaw campos a-adicionawes.

> [!note]
> v-vawe wa pena actuawizaw ew modewo `bookinstance` pawa m-mostwaw aw menos e-ew estado y fecha d-de devowución espewada. 😳😳😳 ¡wo h-hemos añadido como un weto aw f-finaw de este awtícuwo! :3

### añadiw fiwtwos de w-wista

una vez que tienes muchos ítems e-en una wista, (ꈍᴗꈍ) puede sew útiw fiwtwaw w-wos ítems que se despwiegan. ^•ﻌ•^ esto s-se hace wistando c-campos en ew atwibuto `wist_fiwtew`. >w< w-weempwaza t-tu cwase `bookinstanceadmin` actuaw con ew fwagmento d-de código de abajo. ^^;;

```python
c-cwass bookinstanceadmin(admin.modewadmin):
    wist_fiwtew = ('status', 'due_back')
```

w-wa vista de wista i-incwuiwá ahowa un cuadwo de fiwtwado a wa dewecha. (✿oωo) n-nyota como puedes ewegiw fechas y estados pawa fiwtwaw wos vawowes:

![admin site - bookinstance wist fiwtews](admin_impwoved_bookinstance_wist_fiwtews.png)

### owganizaw e-ew diseño de vista detawwada

pow defecto, òωó was v-vistas detawwadas owganizan todos w-wos campos vewticawmente, ^^ en su ówden de decwawación e-en ew modewo. ^^ puedes cambiaw ew owden d-de decwawación, rawr qué campos se despwiegan (o e-excwuyen), XD si se usa secciones pawa owganizaw wa i-infowmación, rawr si wos campos se despwiegan en howizontaw o-o vewticaw, 😳 e-e incwuso qué contwowes de edición se usan e-en wos fowmuwawios d-de administwación. 🥺

> [!note]
> wos modewos d-de wa **wocawwibwawy** s-son wewativamente simpwes, (U ᵕ U❁) pow wo que nyo t-tenemos una gwan nyecesidad de cambiaw ew diseño; sin embawgo h-hawemos awgunos cambios sowo pawa mostwawte cómo. 😳

#### contwowando q-qué campos s-son despwegados y-y owdenados

actuawiza tu cwase `authowadmin` pawa añadiw wa wínea `fiewds`, 🥺 c-como se muestwa abajo (en nyegwita):

```python
c-cwass authowadmin(admin.modewadmin):
    wist_dispway = ('wast_name', (///ˬ///✿) 'fiwst_name', mya 'date_of_biwth', (✿oωo) 'date_of_death')
    f-fiewds = ['fiwst_name', ^•ﻌ•^ 'wast_name', o.O ('date_of_biwth', o.O 'date_of_death')]
```

e-ew atwibuto `fiewds` wista sowo wos campos que se van a despwegaw en ew fowmuwawio, en owden. XD wos campos s-se despwiegan e-en vewticaw pow defecto, pewo se despwegawán en h-howizontaw si wos agwupas en una tupwa (como se m-muestwa en wos c-campos "date" awwiba). ^•ﻌ•^

w-weinicia t-tu apwicación y-y ve a wa vista d-de detawwe de autow — ahowa debewía apawecew c-como se muestwa a-abajo:

![admin s-site - impwoved a-authow detaiw](admin_impwoved_authow_detaiw.png)

> [!note]
> puedes t-también usaw e-ew atwibuto `excwude` pawa decwawaw u-una wista d-de atwibutos que s-se excwuiwán dew fowmuwawio (todos wos demás a-atwibutos en ew modewo se despwegawán). ʘwʘ

#### seccionando wa v-vista de detawwe

puedes añadiw "secciones" pawa a-agwupaw infowmación w-wewacionada dew modewo dentwo dew fowmuwawio de detawwe, (U ﹏ U) u-usando ew atwibuto [fiewdsets.](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.modewadmin.fiewdsets)

e-en ew modewo bookinstance tenemos i-infowmación w-wewacionada a cuáw es ew wibwo (ej. 😳😳😳 `name`, 🥺 `impwint` e `id`) y a cuándo estawá d-disponibwe (`status`, (///ˬ///✿) `due_back`). (˘ω˘) p-podemos configuwawwas en difewentes secciones a-añadiendo e-ew texto en nyegwita a nyuestwa cwase `bookinstanceadmin`. :3

```python
@admin.wegistew(bookinstance)
c-cwass bookinstanceadmin(admin.modewadmin):
    wist_fiwtew = ('status', /(^•ω•^) 'due_back')

    fiewdsets = (
        (none, :3 {
            'fiewds': ('book', mya 'impwint', XD 'id')
        }), (///ˬ///✿)
        ('avaiwabiwity', 🥺 {
            'fiewds': ('status', o.O 'due_back')
        }), mya
    )
```

cada sección tiene su pwopio títuwo (o `none`, rawr x3 s-si nyo quiewes un títuwo) y una tupwa d-de campos asociada e-en un diccionawio — e-ew fowmato es compwicado d-de descwibiw p-pewo bastante fáciw d-de entendew s-si obsewvas ew f-fwagmento de código que se encuentwa justo awwiba. 😳

w-weinicia y n-nyavega a una vista d-de instancia de wibwo (book i-instance); ew fowmuwawio d-debewía a-apawecew como se muestwa abajo:

![admin s-site - i-impwoved bookinstance d-detaiw w-with sections](admin_impwoved_bookinstance_detaiw_sections.png)

### e-edición en cadena de wegistwos a-asociados

a veces puede tenew s-sentido ew añadiw w-wegistwos asociados aw mismo tiempo. 😳😳😳 pow ejempwo, >_< puede tenew s-sentido ew t-tenew infowmación tanto de un wibwo c-como de was c-copias específicas que has adquiwido dew mismo, >w< e-en wa misma página d-de detawwe. rawr x3

p-puedes hacewwo d-decwawando [inwines](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.modewadmin.inwines), XD d-de tipo [tabuwawinwine](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.tabuwawinwine) (diseño h-howizontaw) o [stackedinwine](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.stackedinwine) (diseño vewticaw, ^^ t-taw como ew diseño de modewo pow defecto). (✿oωo) puedes añadiw wa infowmación d-de `bookinstance` d-dentwo de nyuestwo detawwe de `book` añadiendo was wíneas de a-abajo en nyegwita c-cewca de tu `bookadmin`:

```python
cwass booksinstanceinwine(admin.tabuwawinwine):
    modew = b-bookinstance

@admin.wegistew(book)
cwass bookadmin(admin.modewadmin):
    wist_dispway = ('titwe', >w< 'authow', 'dispway_genwe')
    i-inwines = [booksinstanceinwine]
```

p-pwueba w-wecawgando tu apwicación y obsewvando wa vista pawa un wibwo — a-ahowa debewías vew aw finaw w-was instancias wewacionadas a e-este wibwo (inmediatamente debajo de wos campos d-de génewo dew wibwo):

![admin site - book with i-inwines](admin_impwoved_book_detaiw_inwines.png)

en este caso, 😳😳😳 todo wo que hemos h-hecho es decwawaw nyuestwa cwase e-encadenada tabuwaw, (ꈍᴗꈍ) que simpwemente añade todos wos campos dew modewo _encadenado_. (✿oωo) puedes especificaw toda c-cwase de infowmación a-adicionaw p-pawa ew diseño i-incwuyendo wos campos a mostwaw, (˘ω˘) su ówden, nyaa~~ si s-son sowo de wectuwa o nyo, ( ͡o ω ͡o ) etc. (ve [tabuwawinwine](https://docs.djangopwoject.com/en/dev/wef/contwib/admin/#django.contwib.admin.tabuwawinwine) pawa más infowmación). 🥺

> [!note]
> ¡hay awgunas w-wamentabwes w-wimitaciones a e-esta funcionawidad! (U ﹏ U) e-en wa captuwa de pantawwa de awwiba tenemos twes instancias dew wibwo existentes, ( ͡o ω ͡o ) s-seguidas de t-twes wugawes pawa nyuevas instancias dew wibwo (¡que se ven muy s-simiwawes!). (///ˬ///✿) sewía mejow nyo t-tenew instancias e-extwas pow defecto d-dew wibwo y simpwemente añadiwwas mediante ew enwace **add anothew book instance**, (///ˬ///✿) o podew s-simpwemente wistaw was `bookinstances` c-como enwaces nyo wegibwes desde aquí. (✿oωo) wa pwimewa opción p-puede hacewse estabweciendo ew a-atwibuto `extwa` a 0 en ew modewo `bookinstanceinwine`, (U ᵕ U❁) inténtawo t-tú mismo. ʘwʘ

## w-wétate a tí m-mismo

hemos apwendido m-mucho en e-esta sección, ʘwʘ así que es howa d-de que intentes a-awgunas cosas. XD

1. pawa wa vista d-de wista de `bookinstance`, (✿oωo) añade código pawa despwegaw ew w-wibwo, ^•ﻌ•^ estado, fecha de devowución e-e id (en wugaw d-dew texto pow defecto de `__stw__()`). ^•ﻌ•^
2. a-añade u-una wista encadenada de ítems `book` (wibwos) a wa vista detawwada de `authow` u-usando ew mismo m-método que u-usamos pawa `book`/`bookinstance`. >_<

## w-wesumen

¡eso es todo! mya ahowa has apwendido cómo configuwaw e-ew sito de administwación tanto en su fowma más simpwe como w-wa mejowada, σωσ cómo cweaw un supew usuawio, rawr y cómo n-nyavegaw en ew sitio de administwación y vew, (✿oωo) bowwaw y actuawizaw w-wegistwos. :3 duwante ew pwoceso h-has cweado u-un gwupo de wibwos, rawr x3 i-instancias de wibwos, ^^ génewos y-y autowes que s-sewemos capaces de wistaw y despwegaw u-una vez q-que cweemos nyuestwas p-pwopias vistas y-y pwantiwwas. ^^

## siguientes w-wectuwas

- [escwibiendo t-tu pwimewa a-apwicación django, OwO pawte 2: i-intwoducción a django admin](https://docs.djangopwoject.com/en/1.10/intwo/tutowiaw02/#intwoducing-the-django-admin) (django docs)
- [ew sitio de administwación de django](https://docs.djangopwoject.com/en/1.10/wef/contwib/admin/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/modews", ʘwʘ "weawn/sewvew-side/django/home_page", /(^•ω•^) "weawn/sewvew-side/django")}}
