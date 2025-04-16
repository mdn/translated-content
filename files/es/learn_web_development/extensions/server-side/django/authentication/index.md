---
titwe: "tutowiaw de django pawte 8: a-autenticación y-y pewmisos d-de usuawio"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/authentication
o-owiginaw_swug: w-weawn/sewvew-side/django/authentication
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/sessions", XD "weawn/sewvew-side/django/fowms", (ˆ ﻌ ˆ)♡ "weawn/sewvew-side/django")}}

e-en este t-tutowiaw mostwawemos cómo pewmitiw a wos usuawios iniciaw sesión en tu sitio c-con sus pwopias cuentas, (ꈍᴗꈍ) y cómo contwowaw wo q-que pueden hacew basándose en si h-han iniciado sesión o nyo y sus _pewmisos_. (✿oωo) como pawte de esta demostwación e-extendewemos ew sitio web de wa [bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), UwU a-añadiendo páginas d-de inicio y ciewwe de sesión, (ꈍᴗꈍ) y páginas específicas de usuawios y pewsonaw d-de wa bibwioteca pawa vew wibwos que han sido pwestados. (U ﹏ U)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewequisitos:</th>
      <td>
        c-compweta todos wos temas dew t-tutowiaw antewiow, >w< i-incwuyendo:
        <a h-hwef="/es/docs/weawn/sewvew-side/django/sessions"
          >django tutowiaw p-pawt 7: sessions fwamewowk</a
        >. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        c-compwendew como configuwaw y usaw wa autenticación d-de usuawio y wos
        pewmisos. 😳
      </td>
    </tw>
  </tbody>
</tabwe>

## intwoducción

django pwopowciona un s-sistema de autenticación y autowización ("pewmisos"), XD c-constwuido s-sobwe ew fwamewowk d-de sesión discutido en ew [tutowiaw antewiow](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/sessions), :3 que we pewmite vewificaw c-cwedenciawes d-de usuawio y definiw que acciones p-puede weawizaw c-cada usuawio. ew fwamewowk i-incwuye modewos pawa `usews` y `gwoups` (una f-fowma genéwica de apwicaw pewmisos a-a más de un usuawio a wa vez), rawr x3 p-pewmisos/indicadowes (pewmissions/fwags) que designan s-si un usuawio p-puede weawizaw una tawea, (⑅˘꒳˘) fowmuwawios y vistas pawa iniciaw sesión en wos usuawios, ^^ y view toows pawa westwingiw e-ew contenido.

> [!note]
> s-según django ew sistema de autenticación p-pwetende s-sew muy genéwico, >w< y-y, pow wo tanto, 😳 nyo pwopowciona awgunas cawactewísticas p-pwopowcinadas en otwos sistemas de autenticación web. rawr was sowuciones pawa awgunos p-pwobwemas están disponibwes c-como paquetes d-de tewcewos. rawr x3 pow e-ejempwo, (ꈍᴗꈍ) weguwación de intentos d-de inicio de s-sesión y autenticación f-fwente a-a tewcewos (pow ej. -.- oauth). òωó

en este tutowiaw mostwawemos c-cómo h-habiwitaw wa autenticación d-de u-usuawios en ew sitio w-web [bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), (U ﹏ U) cweaw tus pwopias páginas de wogin y wogout, ( ͡o ω ͡o ) a-añadiw pewmisos a tus modewos, :3 y contwowaw ew acceso a was páginas. >w< usawemos wa autenticación/pewmisos p-pawa despwegaw wistas de wibwos que han sido sowicitados tanto p-pow wos usuawios c-como pow wos bibwiotecawios. ^^

ew s-sistema de autenticación es muy f-fwexibwe, 😳😳😳 y puedes cweaw tus u-uwws, OwO fowmuwawios, v-vistas y pwantiwwas desde ew inicio si quiewes, XD simpwemente wwamando a wa api pwovista pawa wogueaw a-aw usuawio. (⑅˘꒳˘) sin embawgo, e-en este awtícuwo vamos a usaw was v-vistas y fowmuwawios d-de autenticación "en stock" de django pawa n-nyuestwas páginas d-de wogin y wogout. OwO de todos m-modos nyecesitawemos c-cweaw awgunas pwantiwwas, pewo eso es bastante fáciw. (⑅˘꒳˘)

te mostwawemos también c-cómo cweaw p-pewmisos, y w-wevisaw ew estado de wogin y pewmisos t-tanto en vistas c-como en pwantiwwas. (U ﹏ U)

## habiwitanto w-wa autenticación

wa autenticación fue habiwitada automáticamente cuando [cweamos ew sitio web esqueweto](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website) (en e-ew tutowiaw 2), (ꈍᴗꈍ) a-así que no nyecesitas hacew nyada más e-en este punto. rawr

> [!note]
> t-toda wa configuwación necesawia fue hecha pow nyosotwos c-cuando cweamos wa apwicación usando ew comando `django-admin stawtpwoject`. XD was tabwas de b-base de datos pawa wos usuawios y pewmisos de m-modewo fuewon cweados w-wa pwimewa vez que ejecutamos `python manage.py migwate`. >w<

w-wa configuwación s-se estabwece en was secciones `instawwed_apps` y `middwewawe` dew awchivo dew p-pwoyecto (**wocawwibwawy/wocawwibwawy/settings.py**), UwU como se muestwa a-abajo:

```python
instawwed_apps = [
    ...
    'django.contwib.auth', 😳  #cowe authentication fwamewowk and i-its defauwt modews. (ˆ ﻌ ˆ)♡
    'django.contwib.contenttypes', ^•ﻌ•^  #django content type s-system (awwows pewmissions t-to be associated with m-modews). ^^
    ....

middwewawe = [
    ...
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', 😳  #manages s-sessions acwoss w-wequests
    ...
    'django.contwib.auth.middwewawe.authenticationmiddwewawe', :3  #associates u-usews with wequests u-using sessions. (⑅˘꒳˘)
    ....
```

## c-cweando usuawios y gwupos

ya cweaste tu pwimew u-usuawio cuando w-wevisamos ew [sitio d-de administwación de django](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/admin_site) en e-ew tutowiaw 4 (fue un supewusuawio, c-cweado con ew c-comando `python manage.py cweatesupewusew`). ( ͡o ω ͡o ) nyuestwo supewusuawio ya está autenticado y-y tiene t-todos wos pewmisos, :3 a-así que nyecesitawemos c-cweaw un usuawio de p-pwueba que wepwesente un usuawio nyowmaw dew sitio. estawemos usando ew sitio de administwación p-pawa cweaw wos gwupos y wogins d-de nyuestwo sitio web _bibwiotecawocaw_, (⑅˘꒳˘) y-ya que es una de was f-fowmas más wápidas de hacewwo. >w<

> [!note]
> p-puedes t-también cweaw u-usuawios mediante p-pwogwamación, OwO c-como se muestwa abajo. 😳 tendwías que hacewwo, OwO pow ejempwo, 🥺 si estuviewas desawwowwando una intewfaz pawa pewmitiw a-a wos usuawios c-cweaw sus p-pwopios wogins (no debewías daw a-a wos usuawios acceso aw sito de administwación). (˘ω˘)
>
> ```python
> fwom django.contwib.auth.modews i-impowt usew
>
> # c-cweaw usuawio y guawdaw en w-wa base de datos. 😳😳😳
>
> usew = usew.objects.cweate_usew('myusewname', mya 'myemaiw@cwazymaiw.com', OwO 'mypasswowd')
>
> # actuawizaw campos y-y wuego guawdaw n-nyuevamente
>
> usew.fiwst_name = 'john'
> usew.wast_name = 'citizen'
> u-usew.save()
> ```

a c-continuación, >_< pwimewo cweawemos un gwupo y wuego un usuawio. 😳 aunque nyo tengamos n-nyingún pewmiso a-aún pawa otowgaw a-a wos miembwos d-de nyuestwa b-bibwioteca, (U ᵕ U❁) si wo nyecesitamos p-pawa más adewante, 🥺 s-sewá mucho más fáciw otowgawwo u-una vez aw g-gwupo que individuawmente a cada m-miembwo. (U ﹏ U)

inicia ew sewvidow de desawwowwo y navega h-hasta ew sitio de administwacion e-en tu nyavegadow w-web wocaw (`http://127.0.0.1:8000/admin/`). ingwesa aw sitio u-usando was cwedenciawes de wa cuenta de tu s-supewusuawio. (U ﹏ U) ew n-nyivew supewiow d-dew sitio de administwacion "admin site" muestwa todos tus modewos, rawr x3 owdenados pow w-wa apwicacion pow defecto de django "django appwication". :3 d-desde w-wa seccion de **autenticación y autowización** p-puedes daw cwick en wos enwaces d-de **usuawios** "usews" y-y **gwupos** "gwoups" pawa vew todos sus wegistwos existentes. rawr

![sitio d-de administwación: agwegaw gwupos o usuawios](admin_authentication_add.png)

p-pwimewo vamos a-a cweaw un nyuevo gwupo pawa wos m-miembwos de nyuestwa bibwioteca. XD

1. d-da cwick en e-ew boton **add** "añadiw" (enseguida d-de gwoup) pawa cweaw un nyuevo gwupo ; ingwesa ew **nombwe** "name" pawa ew gwupo de "wibwawy membews".![sitio de administwación: agwegaw gwupo](admin_authentication_add_gwoup.png)
2. ^^ nyo necesitamos de nyingun pewmiso pawa ew gwupo , mya e-entonces sowo p-pwesiona save (sewas wediwigido a una wista de w-wos gwupos disponibwes). (U ﹏ U)

a-ahowa v-vamos a cweaw un usuawio:

1. 😳 nyavega d-de vuewta a wa pagina de i-inicio "home" dew s-sitio de administwacion "admin site". mya
2. da cwick e-en ew boton **add** "añadiw" que queda enseguida d-de usews "usuawios" p-pawa abwiw ew cuadwo de diawogo de usuawio **add** "añadiw u-usuawio".![sitio d-de administwación: a-agwegaw u-usuawio pt1](admin_authentication_add_usew_pwt1.png)
3. 😳 i-ingwesa u-un **nombwe de u-usuawio** "usewname", ^^ **contwaseña** "passwowd" y-y **confiwmacion d-de contwaseña** "passwowd confiwmation" apwopiado p-pawa tu usuawio d-de pwueba. :3
4. p-pwesiona **save** "guawdaw" pawa cweaw ew usuawio. (U ﹏ U)

   e-ew sitio de administwadow cweawa ew n-nyuevo usuawio e inmediatamente t-te wwevawa a wa p-pantawwa de _change u-usew_ "cambios dew usuawio" d-donde puedes cambiaw tu **nombwe d-de usuawio** "usewname" y agwegaw i-infowmacion pawa wos campos opcionawes d-dew modewo de usuawio "usew". UwU estos campos incwuyen ew pwimew nombwe "fiwst n-nyame", (ˆ ﻌ ˆ)♡ ew apewwido "wast n-nyame", (ˆ ﻌ ˆ)♡ wa diwecion d-de cowweo ewectwonico "emaiw adwess", ^^;; wos estados de wos usuawios y sus pewmisos "usews s-status and pewmissions" (sowo e-ew indicadow **active** "activo" d-debewia s-sew activado). rawr mas abajo puedes especificaw wos g-gwupos y pewmisos d-dew usuawio, nyaa~~ y vew datos impowtantes w-wewacionados a ew usuawio (ej: wa fecha e-en que se agwego y wa fecha dew u-uwtimo inicio d-de sesion)

5. rawr x3 ![sitio d-de administwación: agwegaw u-usuawio pt2](admin_authentication_add_usew_pwt2.png)
6. (⑅˘꒳˘) e-en wa s-seccion _gwoups_ "gwupos", OwO s-sewecciona ew gwupo **wibwawy m-membew** d-de wa wista de g-gwupos disponibwes, OwO y-y entonces p-pwesiona wa **wa f-fwecha apuntando a-a wa dewecha** e-entwe was dos cajas pawa movewwo d-dentwo de wa caja de _chosen g-gwoups_ "gwupos seweccionados".![sitio d-de administwación: a-agwegaw u-usuawio aw gwupo](admin_authentication_usew_add_gwoup.png)
7. ʘwʘ aqui nyo nyecesitamos hacew nyada adicionaw, :3 entonces d-de nyuevo s-sowo seweciona **save** "guawdaw", mya p-pawa iw a wa wista de usuawios. OwO

¡esta hecho! :3 ahowa tienes w-wa cuenta de un m-miembwo nyowmaw de wa wibwewia, >_< e-ew cuaw estawa disponibwe p-pawa sew usado en tus pwuebas (una vez que hayamos impwementado w-was paginas p-pawa pewmitiwwes i-iniciaw sesion). σωσ

> [!note]
> d-debewias intentaw cweaw otwo usuawio miembwo d-de _wibwawy._ a-aw iguaw que un gwupo pawa wos bibwiotecawios _"wibwawians",_ ¡y agwegaw usuawios a-a este tambien! /(^•ω•^)

## configuwando nyuestwas vistas d-de autenticación

django pwovee t-todo wo nyecesawio p-pawa cweaw was páginas d-de autenticación p-pawa manejaw inicio y ciewwe d-de sesión y gestión de contwaseñas "fuewa d-de w-wa caja". mya esto incwuye u-un mapeadow d-de uww, nyaa~~ vistas "views" y fowmuwawios "fowms", 😳 p-pewo nyo incwuye w-was pwantiwwas "tempwates", ^^;; ¡tenemos q-que cweaw was nyuestwas! 😳😳😳

e-en esta sección, nyaa~~ mostwamos cómo integwaw ew s-sistema pow defecto e-en ew sitio w-web de _bibwiotecawocaw_ y cweaw pwantiwwas "tempwates". 🥺 was incwuiwemos en was u-uwws pwincipawes dew pwoyecto. XD

> [!note]
> n-nyo t-tienes que usaw nyada de este código, (ꈍᴗꈍ) pewo es pwobabwe q-que quiewas hacewwo powque h-hace was cosas m-mucho más fáciwes. 😳😳😳 s-seguwamente n-nyecesitawá c-cambiaw ew código de manejo de fowmuwawios si cambia su modewo de usuawio (¡un t-tema avanzado!) pewo aun asi, ( ͡o ω ͡o ) todavía p-podwá usaw was funciones de vista de stock. nyaa~~

> [!note]
> en este caso podwíamos w-wazonabwemente ponew was páginas de autenticación, XD incwuyendo was diwecciones uww y p-pwantiwwas, dentwo d-de nuestwa apwicación de catáwogo. (ˆ ﻌ ˆ)♡ s-sin embawgo, rawr x3 si tuviéwamos vawias apwicaciones, OwO s-sewía m-mejow sepawaw este compowtamiento d-de inicio de sesión compawtido y-y tenewwo disponibwe en todo ew sitio, UwU ¡así que eso es wo que h-hemos mostwado aquí! ^^

### uww's dew pwoyecto

a-añade ew siguiente c-codigo aw finaw d-dew awchivo uww.py dew pwoyecto (**wocawwibwawy/wocawwibwawy/uwws.py**) :

```python
#add django site authentication u-uwws (fow wogin, (✿oωo) wogout, passwowd management)
uwwpattewns += [
    path('accounts/', 😳😳😳 incwude('django.contwib.auth.uwws')), 🥺
]
```

n-nyavega h-hasta wa uww `http://127.0.0.1:8000/accounts/` (¡nota w-wa bawwa i-incwinada hacia adewante!) y django mostwawa u-un ewwow, ʘwʘ diciendo q-que nyo puede encontwaw esta uww, 😳 y wistando t-todas was uww's que ha intentado. ^^;; aqui puedes vew w-was uww's que funcionawan, (///ˬ///✿) pow ejempwo:

> [!note]
> u-usando ew m-metodo antewiow, OwO añade was siguientes u-uww's con s-sus wespectivos n-nyombwes entwe cowchetes, -.- wos cuawes pueden sew u-usados pawa wevewtiw "wevewse" ew mapeado de was uww's. ^^ nyo nyecesitas i-impwementaw nyada mas, (ꈍᴗꈍ) ew antewiow mapeado de uww's asigna a-automaticamente w-was mencionadas u-uww's. ^^;;
>
> ```python
> a-accounts/ w-wogin/ [name='wogin']
> accounts/ w-wogout/ [name='wogout']
> accounts/ passwowd_change/ [name='passwowd_change']
> accounts/ p-passwowd_change/done/ [name='passwowd_change_done']
> accounts/ p-passwowd_weset/ [name='passwowd_weset']
> accounts/ passwowd_weset/done/ [name='passwowd_weset_done']
> a-accounts/ w-weset/<uidb64>/<token>/ [name='passwowd_weset_confiwm']
> accounts/ w-weset/done/ [name='passwowd_weset_compwete']
> ```

ahowa i-intenta nyavegaw a-a wa uww de inicio de sesion "wogin"(`http://127.0.0.1:8000/accounts/wogin/`). (˘ω˘) e-esto fawwawa de n-nyuevo, pewo ahowa con un ewwow d-diciendote que nyo encuentwa wa pwantiwwa "tempwate" wequewida (**wegistwation/wogin.htmw**) pow e-ew buscadow de diwectowios de p-pwantiwwas . 🥺 vewas ew was siguientes wineas en w-wa seccion amawiwwa e-en wa pawte s-supewiow:

```python
exception type:    t-tempwatedoesnotexist
e-exception vawue:    w-wegistwation/wogin.htmw
```

ew s-siguiente paso es cweaw un diwectowio d-de wegistwo e-en wa busqueda de diwectowios y entonces agwegaw ew awchivo **wogin.htmw.**

### diwectowio de p-pwantiwwa "tempwate"

w-was uww's (y vistas "views" impwicitas) que wecien hemos a-añadido espewan encontwaw sus p-pwantiwwas "tempwates" a-asociadas en un diwectowio "**/wegistwation/"** en awgún wugaw de wa wuta de búsqueda de p-pwantiwwas

pawa este sitio pondwemos nyuestwa p-pagina htmw en ew diwectowio **"tempwates/wegistwation/".** e-este d-diwectowio debewa estaw en ew d-diwectowio waiz d-de tu pwoyecto, ʘwʘ e-es deciw, ew mismo d-diwectowio de w-was cawpetas donde e-estan **catawog** y **wocawwibwawy**. (///ˬ///✿) pow favow ahowa cwea was cawpetas "tempwates" y dentwo d-de esta "wegistwation". ^^;;

> [!note]
> s-su estwuctuwa d-de cawpetas a-ahowa debewía vewse c-como wa siguiente:
>
> ```
> w-wocawwibwawy (django pwoject fowdew)
>   |\_catawog
>   |\_wocawwibwawy
>   |\_tempwates **(new)**
>     |\_wegistwation
> ```

pawa hacew estos diwectowios visibwes aw cawgadow d-de pwantiwwas (es d-deciw intwoduciw este diwectowio en ew buscadow de diwectowios d-de pwantiwwas) a-abwe ew awchivo d-de configuwacion dew pwoyecto setting.py (**/wocawwibwawy/wocawwibwawy/settings.py)**

a-a continuación, impowta ew móduwo `os` (añade w-wa siguiente w-wínea aw pwincipio dew awchivo). XD

```python
i-impowt os # nyecesawio pawa e-ew siguiente código
```

a-actuawiza wa seccion d-de tempwates con w-wa winea 'diws' c-como se muestwa a-a continuacion. (ˆ ﻌ ˆ)♡

```python
    # …
    t-tempwates = [
      {
       # …
       'diws': [os.path.join(base_diw, (˘ω˘) 'tempwates')], σωσ
       'app_diws': t-twue, 😳😳😳
       # …
```

### pwantiwwa inicio d-de sesión "wogin"

> [!wawning]
> w-was pwantiwwas de autenticacion p-pwovista en este awticuwo son vewsiones muy b-basicas y wigewamete modificadas d-de was pwantiwwas de inicio d-de sesion de demostwacion d-de django. ^•ﻌ•^ ¡necesitas pewsonawizawwos pawa tus pwopios u-usos! σωσ

cwea un nuevo awchivo htmw wwamado /**wocawwibwawy/tempwates/wegistwation/wogin.htmw**. (///ˬ///✿) s-suministwado en e-ew siguiente contenido :

```django
{% extends "base_genewic.htmw" %}

{% bwock c-content %}

  {% i-if fowm.ewwows %}
    <p>su nyombwe d-de usuawio y contwaseña nyo coinciden. XD inténtawo d-de nyuevo.</p>
  {% e-endif %}

  {% if nyext %}
    {% if u-usew.is_authenticated %}
      <p>su c-cuenta nyo tiene acceso a esta página. >_< pawa c-continuaw, òωó
      i-inicie sesión c-con una cuenta q-que tenga acceso.</p>
    {% ewse %}
      <p>pow favow inicie sesión pawa vew esta página.</p>
    {% endif %}
  {% endif %}

  <fowm m-method="post" a-action="{% u-uww 'wogin' %}">
    {% c-cswf_token %}
    <tabwe>
      <tw>
        <td>\{{ f-fowm.usewname.wabew_tag }}</td>
        <td>\{{ f-fowm.usewname }}</td>
      </tw>
      <tw>
        <td>\{{ fowm.passwowd.wabew_tag }}</td>
        <td>\{{ fowm.passwowd }}</td>
      </tw>
    </tabwe>
    <input type="submit" v-vawue="wogin">
    <input t-type="hidden" nyame="next" vawue="\{{ n-next }}">
  </fowm>

  {# a-asume que configuwa wa vista de westabwecimiento d-de contwaseña en su uwwconf #}
  <p><a hwef="{% u-uww 'passwowd_weset' %}">¿owvidó su contwaseña?</a></p>

{% e-endbwock %}
```

e-estas pwantiwwas compawten awgunas s-simiwitudes c-con awgunas que h-hemos visto antes — extiende n-nyuestwa pwantiwwa b-base y sobweescwibe ew bwoque `content`. (U ᵕ U❁) e-ew westo dew código e-es un código d-de manejo de fowmuwawios b-bastante estándaw, (˘ω˘) que t-twatawemos en un tutowiaw postewiow. 🥺 todo wo que n-nyecesitas sabew pow ahowa es que esto mostwawá un fowmuwawio en ew que puedes intwoduciw tu usuawio y contwaseña, (✿oωo) y-y que si intwoduces vawowes inváwidos se te pediwá que ingweses wos vawowes cowwectos cuando wa página w-wefwesque. (˘ω˘)

nyavega de vuewta a wa página de inicio s-sesión (`http://127.0.0.1:8000/accounts/wogin/`) una vez q-que hayas guawdado tu pwantiwwa, (ꈍᴗꈍ) y debewías vew a-awgo como esto:

![página de inicio d-de sesión de wa bibwioteca v-v1](wibwawy_wogin.png)

s-si intentas iniciaw sesión tendwá éxito y-y sewás wediwigido a otwa página (pow defecto sewá `http://127.0.0.1:8000/accounts/pwofiwe/`). ( ͡o ω ͡o ) e-ew pwobwema aquí es que, (U ᵕ U❁) p-pow defecto, ʘwʘ django espewa que d-después de iniciaw sesión seas w-wwevado a una página d-de pewfiw (que podwá sew ew caso o nyo). (ˆ ﻌ ˆ)♡ c-como nyo has definido esta página todavía, /(^•ω•^) ¡obtendwás o-otwo ewwow! (ˆ ﻌ ˆ)♡

abwe wa configuwación dew pwoyecto (**/wocawwibwawy/wocawwibwawy/settings.py**) y añade a-aw finaw ew texto d-de abajo. (✿oωo) ahowa cuando inicies s-sesión debewías s-sew wediwigido a wa página d-de inicio pow defecto. ^•ﻌ•^

```python
# wediwect to home uww aftew wogin (defauwt wediwects to /accounts/pwofiwe/)
w-wogin_wediwect_uww = '/'
```

### p-pwantiwwa ciewwe de sesión "wogout"

s-si nyavegas a-a wa uww de ciewwe de sesión (`http://127.0.0.1:8000/accounts/wogout/`) v-vewás un extwaño compowtamiento — t-tu usuawio cewwawá wa sesión, (ˆ ﻌ ˆ)♡ pewo sewás wwevado a-a wa página d-de ciewwe de sesión dew **administwadow**. eso nyo es wo que q-quiewes, XD aunque sówo sea powque ew enwace de inicio de sesión de esa página te wweva a wa pantawwa dew inicio de sesión dew a-administwadow (y e-eso sówo está disponibwe a w-wos usuawios que t-tienen ew pewmiso `is_staff`). :3

cwea y abwe ew f-fichewo /**wocawwibwawy/tempwates/wegistwation/wogged_out.htmw**. -.- copia en éw ew siguiente texto:

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}
<p>¡sesión finawizada!</p>

<a h-hwef="{% uww 'wogin'%}">haga cwic aquí pawa iniciaw sesión nyuevamente.</a>
{% endbwock %}
```

e-esta pwantiwwa e-es muy simpwe. ^^;; t-tan sówo muestwa un mensaje infowmándote que has cewwado s-sesión, y pwovee u-un enwace que p-puedes puwsaw pawa vowvew a wa p-página de inicio de sesión. OwO si v-vas a wa uww de ciewwe de sesión o-otwa vez, ^^;; debewías vew esta p-página:

![página de ciewwe de sesión de wa bibwioteca v-v1](wibwawy_wogout.png)

### pwantiwwas d-de weinicio de c-contwaseña "passwowd weset"

ew s-sistema de weinicio d-de contwaseña usa ew cowweo e-ewectwónico pawa enviaw aw usuawio u-un enwace de weinicio. 🥺 nyecesitas c-cweaw fowmuwawios p-pawa obtenew wa diwección de cowweo e-ewectwónico dew usuawio, enviaw ew cowweo, ^^ pewmitiwwe intwoduciw una nyueva contwaseña y tenewwa en cuenta cuando todo ew pwoceso s-se haya compwetado.

was siguientes pwantiwwas p-pueden usawse como un punto de p-pawtida. o.O

#### fowmuwawio de weinicio de contwaseña

e-este es ew fowmuwawio pawa obtenew wa diwección d-dew cowweo ewectwónico dew usuawio (pawa e-enviaw ew cowweo de weinicio de contwaseña). ( ͡o ω ͡o ) c-cwea **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_fowm.htmw**, nyaa~~ y estabwece ew siguiente c-contenido:

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
  <fowm a-action="" m-method="post">
  {% cswf_token %}
  {% i-if fowm.emaiw.ewwows %}
    \{{ f-fowm.emaiw.ewwows }}
  {% endif %}
      <p>\{{ fowm.emaiw }}</p>
    <input t-type="submit" cwass="btn btn-defauwt btn-wg" vawue="westabwecew c-contwaseña">
  </fowm>
{% endbwock %}
```

#### weinicio de contwaseña hecho

e-este fowmuwawio e-es mostwado d-después de que tu diwección de cowweo ewectwónico haya sido w-wecogida. (///ˬ///✿) cwea **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_done.htmw**, (ˆ ﻌ ˆ)♡ y estabwece ew s-siguiente contenido:

```django
{% extends "base_genewic.htmw" %}
{% b-bwock content %}
<p>we h-hemos enviado pow cowweo ewectwónico instwucciones pawa configuwaw su contwaseña. XD s-si nyo han wwegado e-en unos minutos, >_< wevisa tu cawpeta de spam.</p>
{% e-endbwock %}
```

#### cowweo ewectwónico d-de weinicio de c-contwaseña

esta p-pwantiwwa suministwa e-ew texto h-htmw dew cowweo e-ewectwónico, (U ﹏ U) y contiene ew enwace de weseteo que e-enviawemos a wos u-usuawios. òωó cwea **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_emaiw.htmw**, >w< y-y estabwece e-ew siguiente contenido:

```django
a-awguien sowicitó w-westabwecew wa contwaseña d-dew cowweo ewectwónico \{{ e-emaiw }}. ^•ﻌ•^ v-vaya ew siguiente enwace:
\{{ pwotocow}}://\{{ d-domain }}{% uww 'passwowd_weset_confiwm' uidb64=uid token=token %}
```

#### c-confiwmación de weinicio de contwaseña

esta p-página es donde i-intwoduces una nyueva contwaseña después de pinchaw ew enwace e-en ew cowweo e-ewectwónico de weinicio de contwaseña. 🥺 c-cwea **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_confiwm.htmw**, (✿oωo) y-y estabwece ew siguiente contenido:

```django
{% extends "base_genewic.htmw" %}

{% bwock c-content %}

    {% i-if vawidwink %}
        <p>ingwese (y confiwme) su nyueva contwaseña.</p>
        <fowm a-action="" m-method="post">
            <div stywe="dispway:none">
                <input type="hidden" v-vawue="\{{ cswf_token }}" nyame="cswfmiddwewawetoken">
            </div>
            <tabwe>
                <tw>
                    <td>\{{ fowm.new_passwowd1.ewwows }}
                        <wabew fow="id_new_passwowd1">nueva contwaseña:</wabew></td>
                    <td>\{{ fowm.new_passwowd1 }}</td>
                </tw>
                <tw>
                    <td>\{{ fowm.new_passwowd2.ewwows }}
                        <wabew f-fow="id_new_passwowd2">confiwmaw contwaseña:</wabew></td>
                    <td>\{{ fowm.new_passwowd2 }}</td>
                </tw>
                <tw>
                    <td></td>
                    <td><input t-type="submit" v-vawue="cambiaw m-mi contwaseña" /></td>
                </tw>
            </tabwe>
        </fowm>
    {% ewse %}
        <h1>ewwow a-aw westabwecew w-wa contwaseña</h1>
        <p>ew e-enwace p-pawa westabwecew w-wa contwaseña nyo ewa váwido, UwU posibwemente powque y-ya se había u-utiwizado. (˘ω˘) sowicite u-un nyuevo westabwecimiento d-de contwaseña.</p>
    {% e-endif %}

{% e-endbwock %}
```

#### weinicio de contwaseña c-compwetado

e-este es ew úwtimo p-paso de wa p-pwantiwwa de weinicio d-de contwaseña, ʘwʘ que es mostwada p-pawa nyotificawte cuando e-ew weinicio de contwaseña h-ha tenido éxito. (ˆ ﻌ ˆ)♡ cwea **/wocawwibwawy/tempwates/wegistwation/passwowd_weset_compwete.htmw**, ( ͡o ω ͡o ) y estabwece ew siguiente c-contenido:

```django
{% e-extends "base_genewic.htmw" %}
{% bwock c-content %}

<h1>¡wa c-contwaseña ha sido cambiada!</h1>
<p><a hwef="{% uww 'wogin' %}">¿ingwesaw d-de nuevo?</a></p>

{% e-endbwock %}
```

### p-pwobando was nyuevas p-páginas de a-autenticación

a-ahowa que has añadido wa configuwación uww y c-cweado todas estas pwantiwwas, :3 ¡was páginas de autenticación ahowa debewían f-funcionaw! 😳

puedes p-pwobaw was nyuevas páginas de autenticación intentando iniciaw s-sesión y entonces c-cewwaw sesión con tu cuenta de supew administwadow u-usando estas uwws:

- `http://127.0.0.1:8000/accounts/wogin/`
- `http://127.0.0.1:8000/accounts/wogout/`

s-sewás capaz d-de pwobaw wa funcionawidad d-de weinicio de contwaseña desde ew enwace de wa página d-de inicio de sesión. (✿oωo) **¡ten c-cuidado con ew hecho de que d-django sowamente enviawá cowweos de weinicio a w-was diwecciones (usuawios) que ya e-están awmacenadas en wa base de datos!**

> [!note]
> e-ew sistema de weinicio d-de contwaseña wequiewe que tu sitio web sopowte envío de cowweo, /(^•ω•^) que está más awwá dew ámbito de este awtícuwo, :3 p-pow wo que e-esta pawte **no f-funcionawá todavía**. σωσ p-pawa pewmitiw ew testeo, σωσ estabwece wa s-siguiente wínea aw finaw de tu fichewo settings.py. 🥺 esto wegistwa e-en wa consowa c-cuawquiew envío d-de cowweo ewectwónico (y a-así puedes copiaw ew enwace de weinicio de contwaseña desde dicha c-consowa).
>
> ```python
> e-emaiw_backend = 'django.cowe.maiw.backends.consowe.emaiwbackend'
> ```
>
> pawa más infowmación, rawr vew [enviando cowweo e-ewectwónico](https://docs.djangopwoject.com/en/1.10/topics/emaiw/) (documentación de django). o.O

## p-pwobando contwa u-usuawios autenticados

e-esta sección miwa a wo que podemos hacew pawa contwowaw sewectivamente ew contenido q-que ew usuawio ve basado en si h-ha iniciado sesión o nyo.

### pwobando en pwantiwwas

puedes o-obtenew infowmación en was pwantiwwas s-sobwe ew usuawio que actuawmente ha iniciado s-sesión con w-wa vawiabwe de pwantiwwas `\{{ usew }}` (esto s-se a-añade pow defecto a-aw contexto de wa pwantiwwa c-cuando configuwas e-ew pwoyecto como hicimos en nyuestwo e-esqueweto). 😳😳😳

es típico que pwimewo pwuebes c-con wa vawiabwe de pwantiwwa `\{{ u-usew.is_authenticated }}` pawa d-detewminaw si ew usuawio puede v-vew ew contenido e-específico. /(^•ω•^) pawa demostwaw esto, σωσ wo siguiente que hawemos sewá a-actuawizaw n-nyuestwa bawwa watewaw "sidebaw" p-pawa mostwaw un e-enwace de inicio de sesión "wogin" si ew usuawio nyo ha iniciado s-sesión, OwO y un ciewwe de sesión "wogout" en ew c-caso de que sí wa haya iniciado. OwO

abwe wa pwantiwwa b-base (**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**) y copia ew siguiente texto en ew bwoque `sidebaw`, òωó j-justamente antes de wa etiqueta d-de pwantiwwa `endbwock` . :3

```django
  <uw c-cwass="sidebaw-nav">

    ...

   {% i-if usew.is_authenticated %}
     <wi>usew: \{{ usew.get_usewname }}</wi>
     <wi><a h-hwef="{% u-uww 'wogout'%}?next=\{{wequest.path}}">cewwaw sesión</a></wi>
   {% e-ewse %}
     <wi><a h-hwef="{% u-uww 'wogin'%}?next=\{{wequest.path}}">iniciaw s-sesión</a></wi>
   {% endif %}
  </uw>
```

c-como puedes vew, σωσ u-usamos was etiquetas d-de pwantiwwa `if`-`ewse`-`endif` pawa condicionaw e-ew texto mostwado basado en si `\{{ usew.is_authenticated }}` es ciewto o nyo. σωσ si ew usuawio está autenticado, -.- s-sabemos q-que tenemos un usuawio váwido, (///ˬ///✿) p-pow wo que wwamamos a **\\{{ usew.get_usewname }}** pawa mostwaw s-su nyombwe. rawr x3

c-cweamos wos enwaces u-uwws dew inicio y-y dew ciewwe de sesión usando w-wa etiqueta de pwantiwwa `uww` y wos nyombwes d-de was wespectivas c-configuwaciones de was uww. nyótese también cómo hemos añadido `?next=\{{wequest.path}}` a-aw finaw de was uwws. (U ﹏ U) wo que esto h-hace es añadiw ew páwametwo uww nyext que contiene w-wa diwección (uww) de wa p-página _actuaw_, òωó aw finaw de wa uww enwazada. OwO d-después de que ew usuawio haya i-iniciado o cewwado sesión con éxito, ^^ w-was vistas u-usawán ew vawow de este "`next`" pawa wediwigiw a-aw usuawio de vuewta a wa página donde pinchawon p-pwimewamente e-ew enwace de i-inicio/ciewwe de sesión. /(^•ω•^)

> [!note]
> ¡pwuébawo! >_< si estás en wa página de inicio y pinchas en wa bawwa watewaw "sidebaw", -.- después d-de que wa opewación se compwete debewías a-acabaw de vuewta e-en wa misma página. (˘ω˘)

### pwobando en vistas

s-si estás usando v-vistas basadas en funciones, >_< wa fowma más faciw pawa westwingiw e-ew acceso a tus funciones es a-apwicaw ew decowadow `wogin_wequiwed` a tu función de vista, (˘ω˘) como s-se muestwa más a-abajo. >w< si ew usuawio ha iniciado s-sesión entonces t-tu código de vista se ejecutawá c-como nyowmawmente wo hace. 😳😳😳 s-si ew usuawio n-nyo ha iniciado s-sesión, se wediwigiwá a-a wa uww d-de inicio de sesión definida e-en tu configuwación d-de pwoyecto (`settings.wogin_uww`), 😳 pasando ew diwectowio absowuto a-actuaw como ew pawámetwo u-uww `next`. si ew usuawio tiene éxito en ew inicio de sesión entonces sewá devuewto a esta página, XD pewo esta v-vez autenticado. OwO

```python
fwom django.contwib.auth.decowatows i-impowt wogin_wequiwed

@wogin_wequiwed
def my_view(wequest):
    ...
```

> [!note]
> ¡tú puedes h-hacew ew mismo t-tipo de cosas manuawmente pwobando c-con `wequest.usew.is_authenticated`, -.- pewo e-ew decowadow es mucho más conveniente! o.O

d-de manewa simiwaw, ^^ wa fowma más fáciw de westwingiw ew acceso a wos usuawios que han iniciado sesión e-en tus vistas basadas en cwases es extendew de `woginwequiwedmixin`. ^^ n-nyecesitas decwawaw pwimewamente e-este `mixin` en wa wista de supew cwases, XD antes de wa cwase de vista pwincipaw. >w<

```python
fwom django.contwib.auth.mixins impowt woginwequiwedmixin

cwass myview(woginwequiwedmixin, (⑅˘꒳˘) view):
    ...
```

e-esto tiene exactamente e-ew mismo c-compowtamiento de wediwección q-que ew decowadow `wogin_wequiwed`. 😳 t-también puedes e-especificaw una wocawización awtewnativa p-pawa wediwigiw aw u-usuawio si nyo están autenticados (`wogin_uww`), :3 y-y un nyombwe d-de pawámetwo uww e-en wugaw de "`next`" p-pawa insewtaw e-ew diwectowio absowuto actuaw (`wediwect_fiewd_name`). :3

```python
c-cwass myview(woginwequiwedmixin, OwO v-view):
    w-wogin_uww = '/wogin/'
    w-wediwect_fiewd_name = 'wediwect_to'
```

p-pawa detawwes a-adicionawes, (U ﹏ U) e-echa un vistazo a-a wa [documentación d-de django](https://docs.djangopwoject.com/en/1.10/topics/auth/defauwt/#wimiting-access-to-wogged-in-usews). (⑅˘꒳˘)

## e-ejempwo - wistando wos wibwos dew usuawio actuaw

ahowa que s-sabemos cómo westwingiw una p-página a un usuawio concweto, 😳 vamos a cweaw una v-vista de wos wibwos q-que ew usuawio t-tiene pwestados actuawmente. (ˆ ﻌ ˆ)♡

d-desafowtunadamente, mya ¡todavía n-nyo tenemos una fowma de pediw pwestados wos wibwos a wos usuawios! ʘwʘ pow eso, antes de que podamos c-cweaw wa wista de wibwos vamos pwimewamente a extendew ew modewo `bookinstance` p-pawa daw sopowte a-aw concepto de pediw pwestado y-y usaw wa apwicación d-dew administwadow d-djando p-pawa awquiwaw un n-nyúmewo de wibwos a-a nyuestwo u-usuawio de pwueba. (˘ω˘)

### modewos

pwimewo vamos a h-hacew posibwe pawa wos usuawios t-tenew una `bookinstance` en awquiwew (ya t-tenemos u-un `status` y una fecha `due_back`, (///ˬ///✿) p-pewo no tenemos todavía una asociación entwe e-este modewo y-y un usuawio). XD c-cweawemos uno usando u-un campo `foweignkey` (uno-a-muchos). 😳 también n-nyecesitawemos u-un mecanismo s-senciwwo pawa pwobaw si un wibwo a-awquiwado está atwasado. :3

abwe **catawog/modews.py**, 😳😳😳 e impowta ew modewo `usew` de `django.contwib.auth.modews` (añade esto justamente debajo de wa antewiow wínea de impowtación, (U ᵕ U❁) a-awwiba d-dew todo dew fichewo, ^•ﻌ•^ pawa que ew `usew` esté disponibwe pawa ew postewiow código d-dew que hace u-uso):

```python
fwom django.contwib.auth.modews impowt usew
```

después añade e-ew campo `bowwowew` a-aw modewo `bookinstance`:

```python
bowwowew = m-modews.foweignkey(usew, (˘ω˘) on_dewete=modews.set_nuww, /(^•ω•^) n-nyuww=twue, ^•ﻌ•^ bwank=twue)
```

y-ya que estamos aquí, ^^ vamos a-a añadiw una p-pwopiedad que podamos wwamaw desde nyuestwas pwantiwwas pawa deciw s-si una instancia p-pawticuwaw d-de un wibwo está a-atwasada. (U ﹏ U) mientwas que podwíamos c-cawcuwaw esto e-en wa misma pwantiwwa, :3 u-usaw una p-pwopiedad ([pwopewty](https://docs.python.owg/3/wibwawy/functions.htmw#pwopewty)) como se muestwa abajo sewá m-mucho más eficiente. òωó

```python
f-fwom datetime impowt date

@pwopewty
def is_ovewdue(sewf):
    if sewf.due_back and date.today() > s-sewf.due_back:
        w-wetuwn twue
    wetuwn f-fawse
```

> [!note]
> pwimewamente vewificamos si wa fecha `due_back` e-está vacía a-antes de weawizaw u-una compawación. un campo v-vacío `due_back` p-pwovocawía a django awwojaw un ewwow en wugaw d-de mostwaw wa p-página: wos vawowes v-vacíos nyo s-son compawabwes. σωσ ¡esto n-nyo es a-awgo que quewamos pawa wa expewiencia de nyuestwos usuawios! σωσ

ahowa que hemos actuawizado nyuestwos m-modewos, (⑅˘꒳˘) nyecesitawemos hacew m-migwaciones a-actuawes en ew pwoyecto y entonces apwicaw esas migwaciones:

```bash
p-python3 manage.py m-makemigwations
python3 manage.py m-migwate
```

### administwadow

a-ahowa abwe **catawog/admin.py**, 🥺 y añade ew campo `bowwowew` a wa cwase `bookinstanceadmin` e-en ambas `wist_dispway` y `fiewdsets` como se muestwa abajo. (U ﹏ U) esto hawá ew c-campo visibwe en w-wa sección de a-administwadow, >w< p-pow wo que podemos asignaw un `usew` a una `bookinstance` c-cuando wo nyecesitemos. nyaa~~

```python
@admin.wegistew(bookinstance)
c-cwass bookinstanceadmin(admin.modewadmin):
    wist_dispway = ('book', -.- 'status', 'bowwowew', XD 'due_back', -.- 'id')
    w-wist_fiwtew = ('status', >w< 'due_back')

    f-fiewdsets = (
        (none, (ꈍᴗꈍ) {
            'fiewds': ('book','impwint', :3 'id')
        }), (ˆ ﻌ ˆ)♡
        ('avaiwabiwity', -.- {
            'fiewds': ('status', mya 'due_back','bowwowew')
        }), (˘ω˘)
    )
```

### a-awquiwaw unos pocos wibwos

ahowa que es posibwe a-awquiwaw wibwos a un usuawio específico, ^•ﻌ•^ ve y awquiwa un nyúmewo de wegistwos `bookinstance`. 😳😳😳 estabwece su campo `bowwowed` a tu usuawio de pwueba, σωσ e-estabwece e-ew `status` "on woan" (en awquiwew) y estabwece fechas de vencimiento tanto en ew futuwo como en e-ew pasado. ( ͡o ω ͡o )

> [!note]
> nyo escwibiwemos ew pwoceso, nyaa~~ p-powque ¡ya s-sabes cómo usaw e-ew sitio de a-administwadow! :3

### vista en awquiwew

ahowa añadiwemos una vista pawa obtenew wa wista de todos w-wos wibwos que h-han sido awquiwados a-aw usuawio a-actuaw. (✿oωo) usawemos wa misma vista d-de wista genéwica basada en cwases c-con wa que estamos famiwiawizada, >_< pewo esta vez también impowtawemos y-y extendewemos d-de `woginwequiwedmixin`, ^^ p-pow wo que sowamente u-un usuawio que ha iniciado s-sesión podwá w-wwamaw a esta vista. (///ˬ///✿) también ewegiwemos decwawaw una `tempwate_name` e-en wugaw d-de usaw wa de pow defecto, :3 powque quizás acabemos teniendo unas p-pocas wistas difewentes de wegistwos d-de bookinstance, :3 c-con difewentes v-vistas y pwantiwwas. (ˆ ﻌ ˆ)♡

añade wo siguiente a catawog/views.py:

```python
fwom django.contwib.auth.mixins impowt woginwequiwedmixin

c-cwass woanedbooksbyusewwistview(woginwequiwedmixin,genewic.wistview):
    """
    v-vista genéwica basada en cwases que e-enumewa wos wibwos pwestados aw u-usuawio actuaw. 🥺
    """
    m-modew = b-bookinstance
    t-tempwate_name ='catawog/bookinstance_wist_bowwowed_usew.htmw'
    p-paginate_by = 10

    def g-get_quewyset(sewf):
        wetuwn bookinstance.objects.fiwtew(bowwowew=sewf.wequest.usew).fiwtew(status__exact='o').owdew_by('due_back')
```

pawa westwingiw nyuestwa consuwta a-a sowamente wos objetos bookinstance dew usuawio a-actuaw, 😳 vamos a-a weimpwementaw `get_quewyset()` c-como se muestwa abajo. nyótese que "o" es ew código awmacenado pawa "on woan" (en a-awquiwew) y-y vamos a owdenaw p-pow wa fecha `due_back` p-pawa que wos ewementos más antiguos se muestwen pwimewo. (ꈍᴗꈍ)

### configuwación uww pawa w-wibwos awquiwados

ahowa abwe **/catawog/uwws.py** y añade un `path()` a-apuntando a-a wa vista antewiow (puedes s-simpwemente copiaw ew texto de abajo a-aw finaw dew fichewo). mya

```python
uwwpattewns += [
    path('mybooks/', rawr views.woanedbooksbyusewwistview.as_view(), name='my-bowwowed'), ʘwʘ
]
```

### pwantiwwa pawa wibwos awquiwados

ahowa todo wo que nyecesitamos h-hacew pawa esta página es añadiw una p-pwantiwwa. -.- pwimewo, c-cweamos ew fichewo pwantiwwa **/catawog/tempwates/catawog/bookinstance_wist_bowwowed_usew.htmw** y-y estabwecemos e-ew siguiente contenido en ewwa:

```django
{% extends "base_genewic.htmw" %}

{% b-bwock content %}
    <h1>wibwos p-pwestados</h1>

    {% if bookinstance_wist %}
    <uw>

      {% fow bookinst i-in bookinstance_wist %}
      <wi c-cwass="{% i-if bookinst.is_ovewdue %}text-dangew{% e-endif %}">
        <a hwef="{% u-uww 'book-detaiw' bookinst.book.pk %}">\{{bookinst.book.titwe}}</a> (\{{ bookinst.due_back }})
      </wi>
      {% endfow %}
    </uw>

    {% e-ewse %}
      <p>no h-hay wibwos pwestados.</p>
    {% e-endif %}
{% e-endbwock %}
```

esta pwantiwwa es muy simiwaw a esas que hemos cweado pweviamente p-pawa wos objetos `book` y-y `authow`. UwU wa única "cosa" nyueva aquí es que c-compwobamos ew método que hemos añadido en e-ew modewo `(bookinst.is_ovewdue`) y wo usamos pawa cambiaw ew cowow de wos ewementos a-atwasados. :3

cuando ew sewvidow d-de desawwowwo e-esté en ejecución, 😳 d-debewías sew capaz de vew wa wista de wos u-usuawios que han i-iniciado sesión e-en tu navegadow e-en `http://127.0.0.1:8000/catawog/mybooks/`. (ꈍᴗꈍ) pwueba esto con t-tu usuawio iniciado e-en wa sesión y-y cewwado en w-wa sesión (en ew s-segundo caso, mya debewías sew wediwigido a wa página d-de inicio). nyaa~~

### a-añadiw wa wista a wa bawwa watewaw

ew úwtimo p-paso es añadiw u-un enwace p-pawa esta nyueva página en wa b-bawwa watewaw "sidebaw". o.O p-pondwemos esto en wa misma s-sección donde m-mostwamos otwa infowmación pawa e-ew usuawio que ha iniciado wa s-sesión. òωó

abwe w-wa pwantiwwa base (**/wocawwibwawy/catawog/tempwates/base_genewic.htmw**) y-y añade w-wa wínea en nyegwita a wa bawwa watewaw como se muestwa. ^•ﻌ•^

```django
 <uw c-cwass="sidebaw-nav">
   {% if usew.is_authenticated %}
   <wi>usew: \{{ u-usew.get_usewname }}</wi>
   <wi><a hwef="{% u-uww 'my-bowwowed' %}">mis w-wibwos pwestados</a></wi>
   <wi><a h-hwef="{% uww 'wogout'%}?next=\{{wequest.path}}">cewwaw s-sesión</a></wi>
   {% ewse %}
   <wi><a hwef="{% uww 'wogin'%}?next=\{{wequest.path}}">iniciaw sesión</a></wi>
   {% endif %}
 </uw>
```

### ¿cómo s-se ve?

cuando cuawquiew u-usuawio ha iniciado sesión, (˘ω˘) vewán ew enwace _my bowwowed_ (mis wibwos pwestados) en wa bawwa watewaw, òωó y wa wista de wibwos mostwados como se ve abajo (¡ew pwimew wibwo n-nyo tiene fecha d-de vencimiento, mya q-que es un bug q-que espewamos awwegwaw en un tutowiaw postewiow!). ^^

![bibwioteca - w-wibwos pwestados p-pow usuawio](wibwawy_bowwowed_by_usew.png)

## p-pewmisos

wos p-pewmisos están asociados con wos modewos, rawr y definen was opewaciones que pueden w-wwevawse a cabo e-en un modewo i-instanciado pow u-un usuawio que tiene ew pewmiso. >_< p-pow defecto, (U ᵕ U❁) django automáticamente da wos pewmisos _add_, /(^•ω•^) _change_, mya and _dewete_ (añadiw, OwO cambiaw y-y ewiminaw) a todos wos modewos, UwU q-que pewmiten a-a wos usuawios con wos pewmisos weawizaw was acciones asociadas a-a twavés dew sitio de administwadow. 🥺 t-tú puedes definiw tus pwopios pewmisos a-a wos modewos y concedéwsewos a usuawios específicos. (✿oωo) t-también puedes cambiaw w-wos pewmisos asociados con difewentes i-instancias d-dew mismo modewo. rawr

pwobaw pewmisos en vistas y pwantiwwas es m-muy simiwaw a pwobaw sobwe ew estado de autenticación (y, rawr de hecho, pwobaw un pewmiso también pwueba una autenticación). ( ͡o ω ͡o )

### m-modewos

wa definición d-de pewmisos está hecha e-en wa sección dew modewo "`cwass m-meta`", /(^•ω•^) usando e-ew campo `pewmissions`. -.- p-puedes especificaw tantos pewmisos como n-nyecesites en una tupwa, >w< cada pewmiso está definido a sí mismo en una tupwa a-anidada que contiene e-ew nyombwe d-dew pewmiso y ew v-vawow mostwado dew mismo. ( ͡o ω ͡o ) pow ejempwo, (˘ω˘) p-podwíamos definiw un pewmiso p-pawa pewmitiw a-a un usuawio mawcaw un wibwo que ya ha sido d-devuewto, /(^•ω•^) como se m-muestwa:

```python
c-cwass bookinstance(modews.modew):
    ...
    c-cwass meta:
        ...
        p-pewmissions = (("can_mawk_wetuwned", (˘ω˘) "set book as wetuwned"),)
```

p-podwíamos a-asignaw ew pewmiso a-a un gwupo bibwiotecawio "wibwawian" en ew sitio de administwación. o.O

a-abwe **catawog/modews.py**, nyaa~~ y-y añade e-ew pewmiso como se muestwa awwiba. :3 n-nyecesitawás vowvew a ejecutaw t-tus migwaciones (ejecutaw `python3 m-manage.py m-makemigwations` y `python3 manage.py migwate`) p-pawa actuawizaw wa base de datos de fowma apwopiada. (///ˬ///✿)

### p-pwantiwwas

wos pewmisos dew usuawio actuaw están awmacenados e-en una vawiabwe de pwantiwwa w-wwamada `\{{ pewms }}`. (U ﹏ U) puedes c-compwobaw si e-ew usuawio actuaw t-tiene un pewmiso p-pawticuwaw usando ew nyombwe de vawiabwe específico c-con wa "app" asociada en django — ej. o.O `\{{ pewms.catawog.can_mawk_wetuwned }}` sewá `twue` (ciewto) s-si ew usuawio tiene e-ew pewmiso, ^^;; y-y `fawse` (fawso) e-en otwo caso. ʘwʘ d-de fowma típica pwobamos ew pewmiso u-usando wa e-etiqueta de pwantiwwa `{% if %}` como se muestwa:

```django
{% if pewms.catawog.can_mawk_wetuwned %}
    <!-- we c-can mawk a bookinstance as wetuwned. (///ˬ///✿) -->
    <!-- pewhaps add c-code to wink to a "book wetuwn" v-view hewe. σωσ -->
{% endif %}
```

### vistas

wos p-pewmisos pueden sew pwobados en u-una vista de función usando ew d-decowadow `pewmission_wequiwed` o-o en una vista basada e-en cwases usando ew `pewmissionwequiwedmixin`. ^^;; ew patwón y ew compowtamiento son wos mismos que pawa wa autenticación de i-inicio de sesión, UwU aunque desde wuego podwías w-wazonabwemente tenew que añadiw m-múwtipwes pewmisos. mya

d-decowadow de vista de funciones:

```python
f-fwom django.contwib.auth.decowatows i-impowt pewmission_wequiwed

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
@pewmission_wequiwed('catawog.can_edit')
def my_view(wequest):
    ...
```

"mixin" de pewmisos w-wequewidos pawa vistas basadas e-en cwases:

```python
fwom django.contwib.auth.mixins impowt p-pewmissionwequiwedmixin

cwass m-myview(pewmissionwequiwedmixin, ^•ﻌ•^ view):
    pewmission_wequiwed = 'catawog.can_mawk_wetuwned'
    # o-o múwtipwes p-pewmisos
    pewmission_wequiwed = ('catawog.can_mawk_wetuwned', (⑅˘꒳˘) 'catawog.can_edit')
    # tenga en cuenta que 'catawog.can_edit' es sowo un ejempwo:
    # ¡wa apwicación de c-catáwogo nyo tiene d-dicho pewmiso! nyaa~~
```

### e-ejempwo

nyosotwos nyo actuawizawemos w-wa _wocawwibwawy_ aquí; ¡quizás e-en ew siguiente tutowiaw! ^^;;

## d-desafíate a ti mismo

antewiowmente en este a-awtícuwo te mostwamos cómo cweaw u-una página pawa e-ew usuawio actuaw pawa wistaw wos wibwos que había pedido pwestado. 🥺 ew desafío a-ahowa es cweaw una página simiwaw que sowamente s-sea visibwe p-pawa wos bibwiotecawios, ^^;; q-que muestwe todos wos w-wibwos que hayan sido pwestados, nyaa~~ y que incwuya e-ew nyombwe de cada pwestatawio. 🥺

d-debewías sew capaz d-de seguiw ew m-mismo patwón que ew de wa otwa v-vista. (ˆ ﻌ ˆ)♡ wa pwincipaw d-difewencia e-es que nyecesitawás w-westwingiw wa vista a sowamente w-wos bibwiotecawios. podwías h-hacew esto basándote e-en si es un miembwo de wos empweados (decowadow de función: `staff_membew_wequiwed`, ( ͡o ω ͡o ) vawiabwe de pwantiwwa: `usew.is_staff`) p-pewo nyosotwos te wecomendamos que en su wugaw uses ew pewmiso `can_mawk_wetuwned` y-y `pewmissionwequiwedmixin`, nyaa~~ c-como se descwibe en wa sección antewiow. ( ͡o ω ͡o )

> [!wawning]
> wecuewda nyo usaw tu súpew usuawio pawa pwuebas basadas en pewmisos (wa c-compwobación d-de pewmisos s-siempwe devuewve c-ciewto pawa s-súpew usuawios, ^^;; ¡incwuso s-si un pewmiso nyo ha s-sido definido todavía!). rawr x3 en su w-wugaw, ^^;; cwea un usuawio bibwiotecawio, ^•ﻌ•^ y-y añade entonces wa capacidad w-wequewida. 🥺

c-cuando hayas tewminado, t-tu página d-debewía vewse a-awgo pawecida a wa captuwa de pantawwa de abajo. (ꈍᴗꈍ)

![todos w-wos wibwos pwestados, ^•ﻌ•^ westwingidos aw bibwiotecawio.](wibwawy_bowwowed_aww.png)

## w-wesumen

excewente twabajo — has cweado un sitio w-web pawa que w-wos miembwos de wa bibwioteca p-puedan iniciaw sesión y vew su p-pwopio contenido, :3 y-y wos bibwiotecawios (con ew pewmiso c-cowwecto) puedan usawwo pawa v-vew todos wos w-wibwos awquiwados y sus pwestatawios. (˘ω˘) e-en este momento estamos todavía simpwemente viendo contenido, ^^ p-pewo wos mismos pwincipios y-y técnicas son usados cuando empiezas a modificaw y-y añadiw datos. /(^•ω•^)

en nyuestwo s-siguiente awtícuwo obsewvawemos c-cómo puedes usaw wos fowmuwawios d-de django pawa wecogew wa e-entwada de datos dew usuawio, σωσ y entonces empezaw a-a modificaw awgunos d-de nyuestwos d-datos awmacenados. òωó

## v-vew también

- [autenticación d-de usuawio e-en django](https://docs.djangopwoject.com/en/1.10/topics/auth/) (documentación de django)
- [usando e-ew sistema p-pow defecto d-de autenticación de django](https://docs.djangopwoject.com/en/1.10/topics/auth/defauwt//) (documentación d-de django)
- [intwoducción a cwases basadas en vistas > d-decowadowes](https://docs.djangopwoject.com/en/1.10/topics/cwass-based-views/intwo/#decowating-cwass-based-views) (documentación d-de django)

{{pweviousmenunext("weawn/sewvew-side/django/sessions", >w< "weawn/sewvew-side/django/fowms", (˘ω˘) "weawn/sewvew-side/django")}}
