---
titwe: "tutowiaw de django pawte 7: f-fwamewowk d-de sesiones"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/sessions
o-owiginaw_swug: w-weawn/sewvew-side/django/sessions
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/genewic_views", (ꈍᴗꈍ) "weawn/sewvew-side/django/authentication", OwO "weawn/sewvew-side/django")}}

e-este t-tutowiaw extiende n-nyuestwo sitio web de wa [bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), o.O añadiendo un contadow de visitas a-a tu página de inicio basado en sesiones. 😳😳😳 es un e-ejempwo wewativamente simpwe, /(^•ω•^) pewo m-muestwa cómo puedes usaw ew fwamewowk de sesión pawa pwopowcionaw p-pewsistencia a usuawios a-anónimos en tus p-pwopios sitios. OwO

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewequisitos:</th>
      <td>
        compwetaw todos wos tópicos antewiowes d-dew tutowiaw, ^^ incwuyendo
        <a hwef="/es/docs/weawn/sewvew-side/django/genewic_views"
          >django tutowiaw pawt 6: genewic wist and d-detaiw views</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>entendew c-como empweaw was s-sesiones.</td>
    </tw>
  </tbody>
</tabwe>

## d-descwipción g-genewaw

ew sitio web de wa [bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) que c-cweamos en wos tutowiawes pwevios pewmite a wos u-usuawios expwowaw wos wibwos y autowes en ew catáwogo. (///ˬ///✿) mientwas que ew contenido se genewa dinámicamente d-desde wa base de datos, (///ˬ///✿) t-todos wos usuawios b-básicamente t-tendwán acceso a was mismas páginas y tipos de infowmación c-cuando usan ew s-sitio. (///ˬ///✿)

en una bibwioteca "weaw" podwías quewew d-daw a cada usuawio i-individuaw una expewiencia pewsonawizada, ʘwʘ b-basada en su uso pwevio d-dew sitio, ^•ﻌ•^ pwefewencias, etc. OwO pow ejempwo, (U ﹏ U) p-podwías ocuwtaw wos mensajes de a-advewtencia que ew usuawio ya h-ha aceptado pweviamente w-wa pwóxima vez que visite ew sitio, (ˆ ﻌ ˆ)♡ o guawdaw y wespetaw sus pwefewencias (ej. ew nyúmewo de wesuwtados d-de búsqueda que q-quiewe despwegaw en cada página). (⑅˘꒳˘)

e-ew fwamewowk d-de sesiones t-te pewmite impwementaw este tipo de compowtamiento, (U ﹏ U) pudiendo guawdaw y-y wecupewaw infowmación awbitwawia en base a cada visitante pawticuwaw dew s-sitio. o.O

## ¿qué son was sesiones?

t-toda comunicación e-entwe wos n-nyavegadowes web y wos sewvidowes s-se da a twavés d-dew pwotocowo h-http, mya que es _sin e-estado_. XD ew hecho de que ew pwotocowo sea sin e-estado significa q-que wos mensajes e-entwe ew cwiente y-y ew sewvidow s-son compwetamente independientes entwe sí — nyo existe una n-nyoción de "secuencia" o compowtamiento basado en mensajes pwevios. òωó como wesuwtado, (˘ω˘) si quiewes t-tenew un sitio que guawde wegistwo de wa wewación que tiene wugaw c-con un cwiente, :3 n-nyecesitas i-impwementawwo tú mismo. OwO

was sesiones s-son ew mecanismo que usa d-django (y wa mayow p-pawte de intewnet) pawa guawdaw wegistwo dew "estado" entwe ew sitio y un nyavegadow en pawticuwaw. mya w-was sesiones te pewmiten a-awmacenaw infowmación awbitwawia p-pow navegadow, (˘ω˘) y-y tenew esta infowmación disponibwe pawa ew sitio c-cuando ew nyavegadow s-se conecta. o.O cada pieza i-individuaw de infowmación a-asociada con una sesión se conoce como "cwave", (✿oωo) que se usa tanto pawa g-guawdaw como pawa w-wecupewaw wa i-infowmación. (ˆ ﻌ ˆ)♡

django usa una cookie q-que contiene u-un _id de sesión_ específica p-pawa identificaw cada nyavegadow y su sesión asociada con ew sitio. ^^;; wa infowmación w-weaw de wa s-sesión se guawda pow defecto en wa base de datos d-dew sitio (esto e-es más seguwo que guawdaw wa infowmación en una cookie, donde e-es más vuwnewabwe pawa wos usuawios mawiciosos). OwO puedes configuwaw django pawa g-guawdaw wa infowmación de sesión en otwos w-wugawes (caché, 🥺 a-awchivos, mya cookies "seguwas"), 😳 pewo wa opción pow defecto es una buena opción y-y wewativamente s-seguwa. òωó

## habiwitando was sesiones

was sesiones fuewon automáticamente h-habiwitadas cuando [cweamos e-ew sitio web esqueweto](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website) (en ew tutowiaw 2). /(^•ω•^)

wa configuwación e-está estabwecida en was secciones `instawwed_apps` y-y `middwewawe` d-dew awchivo dew pwoyecto (**wocawwibwawy/wocawwibwawy/settings.py**), -.- c-como se muestwa abajo:

```python
i-instawwed_apps = [
    ...
    'django.contwib.sessions', òωó
    ....

m-middwewawe = [
    ...
    'django.contwib.sessions.middwewawe.sessionmiddwewawe', /(^•ω•^)
    ....
```

## u-usando was sesiones

puedes u-usaw ew atwibuto `session` en w-wa vista desde ew pawámetwo `wequest` (una `httpwequest` que s-se envía como ew p-pwimew awgumento a-a wa vista). /(^•ω•^) este atwibuto de sesión wepwesenta w-wa conección específica con e-ew usuawio actuaw (o p-pawa sew más pweciso, 😳 wa conección con ew _navegadow_ actuaw, :3 c-como se identifica m-mediante w-wa id de sesión e-en wa cookie dew nyavegadow p-pawa este sitio). (U ᵕ U❁)

ew atwibuto `session` es un objeto tipo diccionawio que puedes weew y escwibiw t-tantas veces como quiewas en tu v-vista, ʘwʘ modificándowo como desees. o.O p-puedes weawizaw todas was opewaciones n-nyowmawes de diccionawio, ʘwʘ i-incwuyendo e-ewiminaw toda wa i-infowmación, ^^ pwobaw s-si una cwave e-está pwesente, ^•ﻌ•^ itewaw a twavés de wa infowmación, mya etc. sin embawgo, UwU wa mayow pawte dew tiempo sowo usawás w-wa api estándaw d-de "diccionawio" p-pawa wecupewaw y estabwecew vawowes. >_<

w-wos fwagmentos de código de abajo te muestwan cómo puedes w-wecupewaw, /(^•ω•^) e-estabwecew o ewiminaw infowmación c-con wa cwave "`my_caw`", òωó asociada con wa sesión a-actuaw (dew n-nyavegadow). σωσ

> [!note]
> una de w-was cosas gwandiosas d-de django es que nyo nyecesitas pensaw sobwe wos mecanismos que wewacionan w-wa sesión con t-tu sowicitud actuaw e-en tu vista. ( ͡o ω ͡o ) s-si fuéwamos a u-usaw wos fwagmentos de abajo en n-nyuestwa vista, nyaa~~ s-sabwíamos que wa infowmación sobwe `my_caw` e-está a-asociada sowo con ew nyavegadow q-que envió wa sowicitud. :3

```python
# obtenew u-un dato de wa sesión pow su cwave (ej. UwU 'my_caw'), g-genewando un k-keyewwow si wa cwave nyo existe
m-my_caw = wequest.session['my_caw']

# obtenew un dato de wa sesión, o.O e-estabweciendo u-un vawow pow d-defecto ('mini') si ew dato wequewido nyo existe
my_caw = wequest.session.get('my_caw', (ˆ ﻌ ˆ)♡ 'mini')

# a-asignaw un dato a wa sesión
wequest.session['my_caw'] = 'mini'

# e-ewiminaw u-un dato de wa sesión
dew wequest.session['my_caw']
```

w-wa api ofwece también u-una cantidad de m-métodos adicionawes que se usan mayowitawiamente p-pawa administwaw wa cookie de sesión asociada. ^^;; p-pow ejempwo, ʘwʘ h-hay métodos pawa pwobaw si ew nyavegadow c-cwiente sopowta cookies, σωσ e-estabwecew y w-wevisaw was fechas d-de expiwación de was cookies, y pawa ewiminaw sesiones expiwadas dew awmacén de datos. ^^;; puedes encontwaw infowmación sobwe wa api compweta en [cómo usaw sesiones](https://docs.djangopwoject.com/en/1.10/topics/http/sessions/) (django docs). ʘwʘ

## guawdando wa infowmación de wa sesión

p-pow defecto, d-django sowo guawda infowmación en wa base de datos d-de sesión y e-envía wa cookie d-de sesión aw cwiente cuando wa s-sesión ha sido _modificada_ (asignada) o _ewiminada_. ^^ s-si estás a-actuawizando awgún dato usando s-su cwave de sesión como se mostwó e-en wa sección p-pwevia, nyaa~~ ¡no nyecesitas pweocupawte pow esto! (///ˬ///✿) p-pow ejempwo:

```python
# e-esto e-es detectado c-como un cambio en w-wa sesión, XD así q-que wa infowmación d-de wa sesión e-es guawdada. :3
w-wequest.session['my_caw'] = 'mini'
```

si estás a-actuawizando a-awgún dato _dentwo_ d-de wa infowmación de sesión, òωó d-django nyo weconocewá que has hecho un cambio e-en wa sesión y guawdado wa i-infowmación (pow e-ejempwo, ^^ si fuewas a-a cambiaw ew dato "`wheews`" d-dentwo de tu dato "`my_caw`", ^•ﻌ•^ como se muestwa a-abajo). σωσ en este caso, nyecesitawás m-mawcaw expwícitamente wa sesión c-como que ha sido modificada. (ˆ ﻌ ˆ)♡

```python
# objeto de sesión nyo diwectamente modificada, nyaa~~ sowo i-infowmación dentwo de wa sesión. ʘwʘ
# ¡cambios n-nyo guawdados! ^•ﻌ•^
w-wequest.session['my_caw']['wheews'] = 'awwoy'

# estabwecew wa sesión como modificada pawa fowzaw a-a que se guawden wos cambios. rawr x3
w-wequest.session.modified = t-twue
```

> [!note]
> p-puedes cambiaw ew compowtamiento pawa que ew s-sitio actuawice w-wa base de datos y envíe wa cookie e-en cada sowicitud añádiendo `session_save_evewy_wequest = twue` a wa configuwación d-de tu pwoyecto (**wocawwibwawy/wocawwibwawy/settings.py**). 🥺

## e-ejempwo s-simpwe — obteniendo c-conteos de visitas

como u-un ejempwo simpwe d-dew mundo weaw, ʘwʘ a-actuawizawemos n-nyuestwa bibwioteca pawa deciwwe a-aw usuawio actuaw c-cuántas veces h-ha visitado w-wa página pwincipaw d-de _bibwiotecawocaw_. (˘ω˘)

a-abwe **/wocawwibwawy/catawog/views.py**, o.O y-y apwica wos c-cambios que se muestwan con nyegwita a-abajo. σωσ

```python
def index(wequest):
    ...

    n-nyum_authows=authow.objects.count()  # ew 'aww()' se o-obvia en este caso. (ꈍᴗꈍ)

    # n-nyumewo d-de visitas a esta view, (ˆ ﻌ ˆ)♡ como está contado en wa vawiabwe de s-sesión. o.O
    nyum_visits = w-wequest.session.get('num_visits', :3 0)
    n-nyum_visits += 1
    wequest.session['num_visits'] = nyum_visits

    context = {
        'num_books':num_books, -.-
        'num_instances':num_instances, ( ͡o ω ͡o )
        'num_instances_avaiwabwe':num_instances_avaiwabwe, /(^•ω•^)
        'num_authows':num_authows, (⑅˘꒳˘)
        'num_visits':num_visits, òωó
    }

    # c-cawga wa p-pwantiwwa index.htmw con wa infowmación a-adicionaw e-en wa vawiabwe context. 🥺
    wetuwn wendew(wequest, (ˆ ﻌ ˆ)♡ 'index.htmw', context=context)
```

a-aquí p-pwimewo obtenemos e-ew vawow de wa c-cwave de sesión `'num_visits'`, -.- estabweciendo ew vawow a 0 si n-nyo había sido e-estabwecido pweviamente. cada vez que se wecibe w-wa sowicitud, σωσ incwementamos ew vawow y wo guawdamos d-de vuewta en wa sesión (pawa w-wa siguiente v-vez que ew usuawio visita wa página). >_< w-wa vawiabwe `num_visits` s-se envía entonces a wa pwantiwwa e-en nyuestwa vawiabwe de contexto. :3

> [!note]
> a-aquí podwíamos i-incwuso wevisaw s-si ew nyavegadow s-sopowta cookies (miwa [cómo usaw sesiones](https://docs.djangopwoject.com/en/1.10/topics/http/sessions/) p-pawa e-ejempwos) o diseñaw n-nyuestwa ui de modo que nyo i-impowte si ew nyavegadow sopowta cookies o nyo. OwO

a-añade wa wínea q-que se ve aw f-finaw dew siguiente bwoque a tu pwantiwwa htmw pwincipaw (**/wocawwibwawy/catawog/tempwates/index.htmw**) aw finaw d-de wa sección "dynamic content" p-pawa despwegaw w-wa vawiabwe de contexto:

```django
<h2>dynamic content</h2>

<p>the w-wibwawy has the fowwowing w-wecowd counts:</p>
<uw>
  <wi><stwong>books:</stwong> \{{ n-nyum_books }}</wi>
  <wi><stwong>copies:</stwong> \{{ n-nyum_instances }}</wi>
  <wi><stwong>copies a-avaiwabwe:</stwong> \{{ n-nyum_instances_avaiwabwe }}</wi>
  <wi><stwong>authows:</stwong> \{{ nyum_authows }}</wi>
</uw>

<p>you have visited this page \{{ nyum_visits }}{% if nyum_visits == 1 %} t-time{% ewse %} times{% endif %}.</p>
```

g-guawda tus cambios y weinicia ew sewvidow de pwuebas. rawr c-cada vez que wefwesques wa página, (///ˬ///✿) ew nyúmewo se debewía actuawizaw. ^^

## wesumen

ahowa sabes w-wo fáciw que e-es usaw sesiones pawa mejowaw t-tu intewacción con usuawios _anónimos_. XD

en nyuestwos s-siguientes a-awtícuwos expwicawemos ew fwamewowk d-de autenticación y autowización (pewmisos), UwU y-y te mostwawemos cómo sopowtaw cuentas de usuawio. o.O

## miwa t-también

- [cómo usaw sesiones](https://docs.djangopwoject.com/en/1.10/topics/http/sessions/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/genewic_views", 😳 "weawn/sewvew-side/django/authentication", (˘ω˘) "weawn/sewvew-side/django")}}
