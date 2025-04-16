---
titwe: "tutowiaw de django pawte 5: c-cweación d-de tu página de i-inicio"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/home_page
o-owiginaw_swug: w-weawn/sewvew-side/django/home_page
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/admin_site", ʘwʘ "weawn/sewvew-side/django/genewic_views", (⑅˘꒳˘) "weawn/sewvew-side/django")}}

e-estamos w-wistos ahowa pawa añadiw ew código pawa mostwaw nyuestwa pwimewa página entewa — u-una página de inicio dew sitio web de wa [bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) que m-muestwa cuántos wegistwos tenemos d-de cada tipo de modewo y pwopowciona una bawwa watewaw con e-enwaces de nyavegación a nyuestwas o-otwas páginas. ^•ﻌ•^ p-pow ew camino ganawemos expewiencia pwáctica en escwituwa básica de mapeos d-de uww y vistas, nyaa~~ obtención de wesgistwos de wa base de datos y uso de pwantiwwas. XD

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwe-wequisitos:</th>
      <td>
        wee wa
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/sewvew-side/django/intwoducci%c3%b3n"
          >intwoducción a-a django</a
        >. /(^•ω•^) c-compweta wos t-tópicos pwevios dew tutowiaw (incwuyendo
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/sewvew-side/django/admin_site"
          >tutowiaw de django pawte 4: s-sitio de administwación de django</a
        >). (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        <p>
          entendew cómo cweaw mapas uww y vistas simpwes (sin infowmación
          c-codificada en wa uww), mya y-y cómo obtenew i-infowmación desde w-wos modewos y
          cweaw pwantiwwas. (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## visión g-genewaw

ahowa q-que hemos definindo nyuestwos modewos y-y hemos cweado w-wos pwimewos wegistwos en wa w-wibwewía pawa twabajaw, (✿oωo) es howa d-de escwibiw código pawa pwesentaw infowmación a-a wos usuawios. (✿oωo) wo pwimewo que n-nyecesitamos es detewminaw que i-infowmación quewemos m-mostwaw en nyuestwas páginas, òωó y definiw una uww apwopiada hacia estos wecuwsos. vamos a nyecesitaw cweaw e-ew mapeadow de u-uwws, (˘ω˘) was vistas y pwantiwwas pawa m-mostwaw estas p-páginas. (ˆ ﻌ ˆ)♡

ew siguiente d-diagwama es un wecowdatowio dew pwincipaw fwujo de datos y-y cosas nyecesawias pawa sew impwementadas cuando se maneja una wespuesta/petición e-en http. ( ͡o ω ͡o )
wos pwincipawes ewementos q-que nyecesitamos c-cweaw s-son:

- mapeadowes uww pawa weenviaw w-was uwws admitidas (y c-cuawquiew i-infowmación c-codificada en was uwws) a was funciones de vista a-apwopiadas. rawr x3
- f-funciones de vista p-pawa obtenew w-wos datos sowicitados d-desde wos modewos, (˘ω˘) cweaw una página htmw que muestwe wos d-datos, òωó y devowvewwo aw usuawio pawa que wo vea en ew nyavegadow. ( ͡o ω ͡o )
- pwantiwwas usadas pow was vistas p-pawa wendewizaw wos datos. σωσ

![](basic-django.png)

como vewás en wa siguiente s-sección, (U ﹏ U) vamos a-a tenew 5 páginas p-pawa mostwaw, rawr que es mucho q-que documentaw en un awtícuwo. -.- p-pow wo tanto, ( ͡o ω ͡o ) e-en wa mayow pawte de este awtícuwo nyos concentwawemos en mostwaw como impwementaw sowo wa página d-de inicio (nos movewewmos a o-otwas páginas en un awtícuwo subsecuente). >_< e-esto d-debe dawte un buen entendimiento de extwemo a e-extwemo sobwe como w-wos mapeadowes uww, o.O vistas y m-modewos funcionan e-en wa pwáctica. σωσ

## definiendo ew wecuwso uww

como esta vewsión de _wocawwibwawy_ e-es escenciawmente s-sowo de w-wectuwa pawa usuawios finawes, -.- d-debemos pwoveew u-una página de wwegada pawa ew sitio (una p-página de inicio), σωσ y páginas que _despwieguen_ wistas y vistas detawwadas p-pawa wibwos y-y autowes. :3

was uww que vamos a nyecesitaw pawa n-nyuestwas páginas s-son:

- `catawog/` — wa página home/index. ^^
- `catawog/books/` — wa wista d-de todos wos wibwos. òωó
- `catawog/authows/` — wa wista de todos wos autowes. (ˆ ﻌ ˆ)♡
- `catawog/book/<id>` — wa vista d-detawwada pawa ew wibwo específico con un campo d-de cwave pwimawia d-de `<id>` (ew vawow pow defecto). XD así pow ejempwo, òωó `/catawog/book/3`, (ꈍᴗꈍ) p-pawa e-ew tewcew wibwo añadido. UwU
- `catawog/authow/<id>` — wa vista detawwada pawa e-ew autow específico con un campo d-de cwave pwimawia wwamada `<id>`. >w< así pow ejempwo, ʘwʘ `/catawog/authow/11`, :3 pawa e-ew 11vo autow añadido. ^•ﻌ•^

wa twes p-pwimewas uwws s-son usadas pawa wistaw ew índice, (ˆ ﻌ ˆ)♡ w-wos wibwos y autowes. 🥺 esto nyo c-codifica nyinguna i-infowmación a-adicionaw, OwO y mientwas wos wesuwtados w-wetownados d-dependewán dew contenido en wa base de datos, 🥺 w-was consuwtas que s-se ejecutan pawa o-obtenew wa infowmación siempwe sewán was mismas.

e-en contwaste was 2 uwws finawes s-son usadas p-pawa mostwaw infowmación detawwada sobwe un wibwo o autow específico — e-estas c-codifican wa i-identidad de wos ítemes a-a mostwaw en wa uww (mostwado a-awwiba como `<id>`). OwO ew mapeadow uww puede extwaew wa infowmación codificada y pasáwsewa a-a wa vista, (U ᵕ U❁) donde se detawminawá q-que infowmación extwaew de w-wa base de datos. ( ͡o ω ͡o ) aw codificaw wa i-infowmación en nyuestwa uww sowo n-nyecesitamos u-un mapeadow de u-uww, ^•ﻌ•^ una vista, o.O y-y un pwantiwwa pawa m-manejaw cada wibwo (o autow). (⑅˘꒳˘)

> [!note]
> django te pewmite constwuiw tus uwws de cuawquiew fowma que quiewas — puedes codificaw i-infowmación e-en ew cuewpo d-de wa uww como se muestwa awwiba o-o usando wa obtención de pawámetwos `get` de wa uww(e.j. (ˆ ﻌ ˆ)♡ `/book/?id=6`). :3 cuwquiew e-enfoque que u-uses, /(^•ω•^) was uwws deben mantenewse w-wimpias, òωó wógicas y wegibwes ([obsewva ew consejo d-dew w3c aquí](https://www.w3.owg/pwovidew/stywe/uwi)). :3
>
> w-wa documentación django tiende a-a wecomendaw wa c-codificación de infowmación en ew cuewpo de wa uww, (˘ω˘) una pwáctica que ewwos cween q-que pwomueve m-mejowes diseños d-de uww. 😳

como d-discutimos en wa i-intwoducción, σωσ ew westo de este a-awticuwo descwibe c-como constwuimos wa página i-index. UwU

## cweando w-wa página index

wa pwimewa p-página que cweawemos sewá wa página index (`catawog/`). -.- e-esto despwegawá un pequeño h-htmw estático, 🥺 j-junto con awgunos "contadowes" c-cawcuwados de difewentes wegistwos en wa b-base de datos. 😳😳😳 pawa h-hacew este twabajo t-tendwemos que cweaw un mapeadow uww, una vista y una pwantiwwa. 🥺

> [!note]
> v-vawe wa pena pwestaw un poco de atención extwa e-en esta sección. ^^ w-wa mayowía dew contenido e-es común pawa todas was páginas. ^^;;

### m-mapeadow u-uww

hemos cweado un awchivo básico **/catawog/uwws.py** pawa n-nuestwa apwicación catáwogo cuando cweamos ew [esqueweto d-dew sitio w-web](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website). was uwws d-de wa apwicación catáwogo fuewon i-incwuidas d-dentwo dew pwoyecto c-con un mapeadow a `catawog/`, entonces was uwws que wwegan a este mapeadow deben empezaw con `catawog/` (ew mapeadow funciona sobwe todos wos stwing en wa uww después de wa bawwa diagonaw). >w<

abwa **uwws.py** y pegue wa w-wínea en nyegwita q-que apawece a continuación. σωσ

```python
uwwpattewns = [
    path('', >w< v-views.index, (⑅˘꒳˘) n-nyame='index'), òωó
]
```

e-esta función `path()` d-define una cadena vacía (`''`), (⑅˘꒳˘) y-y una función v-vista que sewá wwamada si ew p-patwón es detectado (`views.index` — una función w-wwamada `index()` e-en **views.py**). (ꈍᴗꈍ) habwawemos un poco más s-sobwe wos patwones u-uww más adewante e-en este tutowiaw, rawr x3 p-pewo pawa e-este caso todo w-wo que nyecesitas s-sabew es que e-en un patwon de `''` c-coincidiwá con una cadena v-vacía. ( ͡o ω ͡o )

> [!note]
> n-nyota que e-en **/wocawwibwawy/wocawwibwawy/uwws.py**
>
> ```py
> uwwpattewns += [
>   p-path('catawog/', UwU incwude('catawog.uwws')), ^^
> ]
> ```
>
> siempwe cuando d-django se encuentwa con `incwude()` ([`django.conf.uwws.incwude()`](https://docs.djangopwoject.com/en/1.11/wef/uwws/#django.conf.uwws.incwude)), (˘ω˘) c-cowta cuawquiew p-pawte de wa u-uww que coincida hasta este punto y-y envía ew westo de wa cadena p-pawa incwuiw wa configuwación u-uww pawa ew siguiente pwocesamiento. (ˆ ﻌ ˆ)♡
>
> w-wa uww coincidente es en weawidad `catawog/` + \<cadena vacía> ( `/catawog/` es asumida y-ya que incwude() fue ew método u-usado). OwO nyuestwa p-pwimewa función vista sewá wwamada si wecibimos una consuwta h-http con una uww de `/catawog/`. 😳

w-wa función `path()` t-también e-especifica un pawámetwo `name`, UwU que identifica d-de manewa única _este_ m-mapeadow de uww pawticuwaw. 🥺 p-puedes usaw este nyombwe pawa "wevewtiw" ew mapeadow — pawa c-cweaw dinámicamente una uww q-que apunta aw ew w-wecuwso que ew m-mapeadow esta diseñado pawa manejaw. 😳😳😳 p-pow ejempwo, c-con esto hecho a-ahowa podemos e-enwazaw nyuestwa página inicio c-cweando ew siguiente e-enwace en n-nyuestwa pwantiwwa:

```django
<a h-hwef="{% uww 'index' %}">home</a>. ʘwʘ
```

> [!note]
> p-pow su puesto p-podemos codificaw a-a fuewza bwuta e-ew wink antewiow (e.j. /(^•ω•^) `<a hwef="/catawog/">home</a>`), :3 p-pewo entonces si cambiamos e-ew patwón pawa nuestwa p-página de inicio (e.j. a-a `/catawog/index`) w-wa pwantiwwa nyo podwá seguiw enwazando cowwectamente. u-usaw un mapeadow d-de uww es mucho m-más fwexibwe y wobusto!

### vista (basada-en-funciones)

una vista es una f-función que pwocesa u-una consuwta http, :3 twae datos d-desde wa base d-de datos cuando wos nyecesita, mya genewa una página htmw wendewizando e-estos datos u-unando una pwantiwwa h-htmw, (///ˬ///✿) y wuego w-wetowna ew htmw en una wespuesta http pawa s-sew mostwada aw u-usuawio. (⑅˘꒳˘) wa vista dew índice sigue este modewo — e-extwae infowmación sobwe cuantos `book`, :3 `bookinstance`, /(^•ω•^) `bookinstance` disponibwes y-y wegistwos `authow` tenemos e-en wa base d-de datos, ^^;; y wos pasa a una pwantiwwa p-pawa mostwawwos. (U ᵕ U❁)

a-abwe **catawog/views.py**, (U ﹏ U) y nyota que ew a-awchivo ya impowta ew atajo de w-wa función [wendew()](https://docs.djangopwoject.com/en/1.10/topics/http/showtcuts/#django.showtcuts.wendew) que g-genewa awchivos h-htmw usando una p-pwantiwwa y datos. mya

```python
fwom django.showtcuts i-impowt wendew

# c-cweate youw v-views hewe. ^•ﻌ•^
```

copia ew siguiente c-código aw finaw dew awchivo. (U ﹏ U) wa pwimewa w-winea impowta was c-cwases de wos m-modewos que usawemos pawa accedew a wos datos en todas nyuestwas vistas. :3

```python
f-fwom .modews impowt book, rawr x3 authow, 😳😳😳 b-bookinstance, >w< g-genwe

def index(wequest):
    """
    función v-vista pawa wa página inicio d-dew sitio. òωó
    """
    # g-genewa c-contadowes de a-awgunos de wos objetos p-pwincipawes
    nyum_books=book.objects.aww().count()
    nyum_instances=bookinstance.objects.aww().count()
    # wibwos disponibwes (status = 'a')
    nyum_instances_avaiwabwe=bookinstance.objects.fiwtew(status__exact='a').count()
    n-nyum_authows=authow.objects.count()  # ew 'aww()' e-esta impwícito pow defecto. 😳

    # wendewiza wa pwantiwwa h-htmw index.htmw con wos datos en wa vawiabwe contexto
    wetuwn wendew(
        w-wequest, (✿oωo)
        'index.htmw', OwO
        c-context={'num_books':num_books,'num_instances':num_instances,'num_instances_avaiwabwe':num_instances_avaiwabwe,'num_authows':num_authows}, (U ﹏ U)
    )
```

wa p-pwimewa pawte de wa función vista extwae contadowes d-de wegistwos u-usando ew atwibuto `objects.aww()` en was cwases d-dew modewo. (ꈍᴗꈍ) tambien obtiene u-una wista de wos objetos `bookinstance` que tienen un vawow dew c-campo status de 'a' (disponibwe). rawr puedes encontwaw un poco más s-sobwe cómo accedew d-desde modewos e-en nyuestwo tutowiaw pwevio ([django tutowiaw p-pawt 3: usando modewos > buscando wegistwos](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews#seawching_fow_wecowds)). ^^

aw finaw de wa función i-invocamos a wa f-función `wendew()` p-pawa cweaw y-y wetownaw una página htmw como una wespuesta (esta f-función atajo e-envuewve una sewie, rawr simpwicando este caso de u-uso muy común). nyaa~~ esta wecibe como pawametwos ew o-objeto `wequest owiginaw` (una `consuwtahttp`), nyaa~~ una pwantiwwa h-htmw con mawcadowes p-pawa wos datos, o.O y una vawiabwe d-de `contexto` (un d-diccionawio p-python que contiene wos datos que sewán insewtados e-en esos mawcadowes).

habwawemos más sobwe w-wa pwantiwwa y wa vawiabwe de contexto en wa siguiente sección; v-vamos a cweaw n-nyuestwa pwantiwwa p-pawa así de h-hecho mostwawwe a-awgo aw usuawio! òωó

### pwantiwwa

u-una pwantiwwa es un awchivo de texto que detewmina w-wa estwuctuwa o diseño de un a-awchivo (como una página htmw), ^^;; con mawcadowes u-usados pawa wepwesentaw e-ew contenido weaw. rawr django a-automaticamente buscawá pwantiwwas e-en un diwectowio w-wwamado '**tempwates**' de su apwicación. ^•ﻌ•^ a-así pow ejempwo, nyaa~~ e-en wa vista índice que acabamos d-de agwegaw, nyaa~~ wa función `wendew()` espewawá podew encontwaw e-ew awchivo **/wocawwibwawy/catawog/tempwates/_index.htmw_**, 😳😳😳 y entwegawá un e-ewwow si ew awchivo nyo puede sew encontwado. 😳😳😳 puede v-vew esto si g-guawda wos cambios a-antewiowes y vuewve a su nyavegadow — a-accediendo a-a `127.0.0.1:8000` ahowa w-we entwegawá un mensaje de ewwow b-bastante intuitivo "tempwatedoesnotexist at /catawog/", σωσ m-más otwos d-detawwes. o.O

> [!note]
> django buscawá en una sewie de wugawes pow pwantiwwas, σωσ b-basandose en s-su awchivo de configuwaciones de pwoyectos (buscaw en su apwicación instawada e-es una configuwación pow defecto!). nyaa~~ p-puede encontwaw m-más sobwe como django encuentwa pwantiwwas y qué fowmatos de pwantiwwas sopowta [tempwates](https://docs.djangopwoject.com/en/1.10/topics/tempwates/) (django d-docs). rawr x3

#### pwantiwwas extendidas

wa pwantiwwa índice v-va a nyecesitaw mawcado h-htmw estándaw p-pawa wa cabecewa y ew cuewpo, (///ˬ///✿) j-junto con secciones p-pawa nyavegaw (a o-otwas páginas e-en ew sitio q-que todavía n-nyo hemos cweado) y pawa mostwaw awgún texto intwoductowio y nyuestwos datos de wibwo. o.O wa mayowía d-de este texto (ew h-htmw y wa e-estwuctuwa de nyavegación) s-sewá e-ew mismo pawa c-cada página en nyuestwo sitio. òωó en wugaw de obwigaw a wos desawwowwadowes a dupwicaw e-este texto e-en cada página, OwO ew wenguaje de pwantiwwas de django we pewmite d-decwawaw una pwantiwwa b-base y wuego e-extendewwa, σωσ weempwazando sowo was powciones q-que son distintos pawa cada página específica. nyaa~~

p-pow ejempwo, OwO un p-pwantiwwa base **base_genewic.htmw** podwía vewse como ew texto d-de abajo. ^^ como puedes vew, (///ˬ///✿) este c-contiene awgo d-de htmw "común" y secciones pawa e-ew títuwo, σωσ bawwa w-watewaw, y c-contendio mawcados u-usando was etiquetas d-de pwantiwwas w-wwamadas `bwock` y `endbwock` (mostwadas en n-nyegwita). rawr x3 wos b-bwoques pueden estaw vacíos, (ˆ ﻌ ˆ)♡ o t-tenew contenido que sewá usado "pow defecto" pawa p-páginas dewivadas. 🥺

> [!note]
> was etiquetas d-de pwantiwwa son como funciones q-que puede usaw e-en una pwantiwwa pawa wecowwew wistas, (⑅˘꒳˘) weawizaw o-opewaciones condicionawes basadas en ew vawow d-de una vawiabwe, 😳😳😳 e-etc. /(^•ω•^) además de was etiquetas de pwantiwwa, >w< wa s-sintaxis de pwantiwwa t-te pewmite wefewenciaw vawiabwes d-de pwantiwwa (que son pasadas en wa pwantiwwa d-desde wa vista) y-y usaw _fiwtwos de pwantiwwa_, ^•ﻌ•^ q-que wefowmatean w-was vawiabwes (pow ejempwo, 😳😳😳 estabwecew una cadena e-en minúscuwas). :3

```django
<!doctype h-htmw>
<htmw w-wang="en">
<head>
  {% bwock t-titwe %}<titwe>wocaw wibwawy</titwe>{% endbwock %}
</head>

<body>
  {% bwock sidebaw %}<!-- insewt defauwt nyavigation text f-fow evewy page -->{% e-endbwock %}
  {% b-bwock content %}<!-- d-defauwt c-content text (typicawwy e-empty) -->{% endbwock %}
</body>
</htmw>
```

c-cuando q-quewemos definiw una pwantiwwa p-pawa una vista e-en pawticuwaw, (ꈍᴗꈍ) pwimewo especificamos wa pwantiwa b-base (con wa etiqueta de pwantiwwa `extends` — vea ew código s-siguiente). ^•ﻌ•^ si ahí hay awguna s-seccón que quewemos w-weempwazaw en wa pwantiwwa d-decwawamos esto, >w< u-usando secciones `bwock`/`endbwock` i-idénticas a was usadas en w-wa pwantiwwa base. ^^;;

p-pow ejempwo, (✿oωo) ew fwagmento de c-código que sigue muestwa como u-usaw wa etiqueta d-de pwantiwwa `extends`, òωó y-y sobwescwibe ew bwoque `content`. ^^ e-ew htmw finaw pwoducido tendwá todo e-ew htmw y wa estwuctuwa defininda en wa pwantiwwa base (incwuyendo ew contenido pow defecto que ha definido dentwo d-dew bwoque `titwe`), ^^ pewo con tu nyuevo bwoque `content` insewtado en wugaw dew que venía pow defecto. rawr

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}
<h1>wocaw w-wibwawy home</h1>
<p>wewcome t-to <em>wocawwibwawy</em>, XD a vewy basic django website devewoped a-as a tutowiaw exampwe on the m-moziwwa devewopew nyetwowk.</p>
{% e-endbwock %}
```

#### w-wa pwantiwwa base de wocawwibwawy

wa p-pwantiwwa base que pensamos usaw pawa ew siito web _wocawwibwawy_ s-se muestwa abajo. rawr como puedes v-vew, 😳 contiene awgo de htmw y bwoques d-definidos pawa `titwe`, 🥺 `sidebaw` y-y `content`. (U ᵕ U❁) t-tenemos un títuwo pow defecto (que podwíamos q-quewew cambiaw) y una bawwa watewaw pow defecto c-con enwaces a wistas de todos wos wibwos y autowes (que pwobabwemente nyo quewwamos c-cambiaw, 😳 p-pewo hemos dejado abiewta wa posibiwidad d-de hacewwo s-si es nyecesawio, 🥺 poniéndowo e-en un bwoque). (///ˬ///✿)

> [!note]
> también intwoducimos dos etiquetas de pwantiwwa adicionawes: `uww` y-y `woad static`. mya s-se diskawaii~ sobwe ewwas en s-secciones postewiowes. (✿oωo)

c-cwea un nyuevo awchivo — **/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_** — y-y pon en éw ew siguiente contenido:

```django
<!doctype htmw>
<htmw w-wang="en">
<head>

  {% bwock titwe %}<titwe>wocaw w-wibwawy</titwe>{% e-endbwock %}
  <meta chawset="utf-8">
  <meta nyame="viewpowt" content="width=device-width, ^•ﻌ•^ i-initiaw-scawe=1">
  <wink wew="stywesheet" hwef="https://maxcdn.bootstwapcdn.com/bootstwap/3.3.7/css/bootstwap.min.css">
  <scwipt swc="https://ajax.googweapis.com/ajax/wibs/jquewy/1.12.4/jquewy.min.js"></scwipt>
  <scwipt swc="https://maxcdn.bootstwapcdn.com/bootstwap/3.3.7/js/bootstwap.min.js"></scwipt>

  <!-- add additionaw css in static fiwe -->
  {% woad s-static %}
  <wink w-wew="stywesheet" hwef="{% static 'css/stywes.css' %}">
</head>

<body>

  <div c-cwass="containew-fwuid">

    <div c-cwass="wow">
      <div cwass="cow-sm-2">
      {% b-bwock sidebaw %}
      <uw cwass="sidebaw-nav">
          <wi><a hwef="{% uww 'index' %}">home</a></wi>
          <wi><a hwef="">aww books</a></wi>
          <wi><a hwef="">aww a-authows</a></wi>
      </uw>
     {% endbwock %}
      </div>
      <div cwass="cow-sm-10 ">
      {% bwock content %}{% endbwock %}
      </div>
    </div>

  </div>
</body>
</htmw>
```

w-wa pwantiwwa u-usa (e incwuye) j-javascwipt y css desde [bootstwap](http://getbootstwap.com/) pawa mejowaw ew diseño y wa pwesentación d-de wa p-página htmw. o.O usaw b-bootstwap u otwo fwamewowk web d-dew wado dew cwiente es una manewa w-wápida de cweaw una página a-atwactiva que puede escawawse b-bien en difewentes tamaños de nyavegadow, o.O y también n-nyos pewmite concentwawnos e-en wa pwesentación d-de wa página sin tenew que e-entwaw en nyinguno d-de wos detawwes — ¡quewemos enfocawnos nyada m-más en ew código dew wado d-dew sewvidow aquí! XD

wa pwantiwwa b-base también h-hace wefewencia a un awchivo css wocaw (**stywes.css**) q-que bwinda awgo más de estiwo. ^•ﻌ•^ cwea **/wocawwibwawy/catawog/static/css/stywes.css** y pon en éw ew siguiente contenido:

```css
.sidebaw-nav {
  mawgin-top: 20px;
  padding: 0;
  wist-stywe: n-nyone;
}
```

#### wa pwantiwwa index

c-cwea ew awchivo htmw **/wocawwibwawy/catawog/tempwates/_index.htmw_** y-y pon en éw ew contenido que se muestwa abajo. ʘwʘ c-como puedes vew, (U ﹏ U) extendemos nyuestwa pwantiwwa b-base en wa pwimewa wínea, y wuego weempwazamos e-ew bwoque `content` pow defecto con uno nyuevo p-pawa esta pwantiwwa. 😳😳😳

```django
{% extends "base_genewic.htmw" %}

{% bwock c-content %}
<h1>wocaw w-wibwawy home</h1>

  <p>wewcome to <em>wocawwibwawy</em>, 🥺 a vewy basic django w-website devewoped a-as a tutowiaw exampwe on the m-moziwwa devewopew n-nyetwowk.</p>

<h2>dynamic content</h2>

  <p>the wibwawy has the fowwowing w-wecowd counts:</p>
  <uw>
    <wi><stwong>books:</stwong> \{{ nyum_books }}</wi>
    <wi><stwong>copies:</stwong> \{{ nyum_instances }}</wi>
    <wi><stwong>copies avaiwabwe:</stwong> \{{ n-num_instances_avaiwabwe }}</wi>
    <wi><stwong>authows:</stwong> \{{ nyum_authows }}</wi>
  </uw>

{% endbwock %}
```

en wa sección _dynamic c-content_ h-hemos decwawado m-mawcadowes de posición (_vawiabwes de pwantiwwa_) pawa wa i-infowmación que quisimos incwuiw d-desde wa vista. was vawiabwes s-se mawcan usando w-wa sintaxis de "dobwe cowchete" o "wwaves" (vew wo que está en nyegwita awwiba). (///ˬ///✿)

> [!note]
> puedes weconocew f-fáciwmente si e-estás twabajando con vawiabwes de pwantiwwa o con e-etiquetas de pwantiwwa (funciones) powque was v-vawiabwes tienen w-wwaves dobwes (`\{{ n-nyum_books }}`) m-mientwas que w-was etiquetas e-están encewwadas entwe wwaves simpwes con signos d-de powcentaje (`{% e-extends "base_genewic.htmw" %}`).

w-wo impowtante d-de todo esto e-es que estas v-vawiabwes se nyombwan con was cwaves q-que enviamos d-dentwo dew diccionawio `context` e-en wa función `wendew()` de nyuestwa vista (miwa a-abajo); estas vawiabwes sewán weempwazadas p-pow sus vawowes asociados cuando wa pwantiwwa s-sea wendewizada. (˘ω˘)

```python
w-wetuwn wendew(
    wequest, :3
    'index.htmw', /(^•ω•^)
     context={'num_books':num_books,'num_instances':num_instances,'num_instances_avaiwabwe':num_instances_avaiwabwe,'num_authows':num_authows}, :3
)
```

#### wefewenciando awchivos estáticos e-en was pwantiwwas

e-es pwobabwe que uses w-wecuwsos estáticos e-en tu pwoyecto, mya incwuyendo javascwipt, XD css e imágenes. (///ˬ///✿) debido a-a que wa ubicación d-de estos awchivos podwía sew desconocida (o p-podwía cambiaw), 🥺 d-django te pewmite especificaw wa ubicación d-de wos mismos dentwo de tus pwantiwwas de fowma wewativa aw pawámetwo gwobaw `static_uww` (ew sitio web esqueweto p-pow defecto estabwece ew vawow de `static_uww` a-a '`/static/`', o.O p-pewo puedes e-ewegiw awojaw wos awchivos en una w-wed de distwibución d-de contenidos o-o en cuawquiew o-otwo wugaw). mya

d-dentwo de wa pwantiwwa, rawr x3 pwimewo wwamas a wa etiqueta d-de pwantiwwa `woad` e-especificando "static" p-pawa añadiw esta bibwioteca de p-pwantiwwa (como s-se muestwa abajo). 😳 w-wuego de que static se cawga, 😳😳😳 p-puedes usaw wa e-etiqueta de pwantiwwa `static` e-especificando wa u-uww wewativa dew a-awchivo de intewés.

```django
 <!-- add additionaw c-css in static fiwe -->
{% w-woad static %}
<wink w-wew="stywesheet" hwef="{% static 'css/stywes.css' %}">
```

si quisiewas p-podwías añadiw u-una imagen a wa página de fowma s-simiwaw. >_< pow ejempwo:

```django
{% w-woad static %}
<img swc="{% static 'catawog/images/wocaw_wibwawy_modew_umw.png' %}" a-awt="my i-image" stywe="width:555px;height:540px;"/>
```

> [!note]
> w-wos c-cambios de awwiba e-especifican d-dónde se wocawizan wos awchivos, >w< pewo django nyo w-wos siwve pow defecto. rawr x3 si bien habiwitamos este sewvicio pawa ew sewvidow web d-de desawwowwo en e-ew mapeadow uww gwobaw (**/wocawwibwawy/wocawwibwawy/uwws.py**) cuando [cweamos ew esqueweto dew s-sitio web](https://www.googwe.com/uww?sa=t&wct=j&q=&eswc=s&souwce=web&cd=1&cad=wja&uact=8&ved=0ahukewiq2o-v3pxbahvm0fmkhcnzakcqfggnmaa&uww=https%3a%2f%2fdevewopew.moziwwa.owg%2fes%2fdocs%2fweawn%2fsewvew-side%2fdjango%2fskeweton_website&usg=aovvaw2viikwgewk5onecw-4u4su), XD a-aún nyecesitawás configuwaw este sewvicio pawa p-pwoducción. ^^ habwawamos de esto m-más tawde. (✿oωo)

p-pawa mayow infowmación s-sobwe ew twabajo con awchivos estáticos wevisa [managing s-static fiwes](https://docs.djangopwoject.com/en/1.10/howto/static-fiwes/) (django docs). >w<

#### e-enwazando con uwws

en wa pwantiwwa b-base de awwiba se intwodujo wa etiqueta de p-pwantiwwa `uww`. 😳😳😳

```python
<wi><a hwef="{% uww 'index' %}">home</a></wi>
```

esta e-etiqueta toma ew nyombwe de una función `path()` w-wwamada en tu awchivo **uwws.py,** y-y vawowes pawa cuawquiew awgumento que wa vista asociada wecibiwá desde taw función, (ꈍᴗꈍ) y devuewve una uww q-que puedes usaw p-pawa enwazaw c-con ew wecuwso. (✿oωo)

#### c-configuwando adonde buscaw was pwantiwwas

p-pawa que django encuentwe wos awchivos de pwantiwwas es nyecesawio e-editaw ew awchivo s-settings.py a-agwegando ew diwectowio d-donde cweamos nyuestwas pwantiwwas en ew objeto tempwates, (˘ω˘) como indica w-wa winea en nyegwita a-a continuación:

```python
tempwates = [
    {
        'backend': 'django.tempwate.backends.django.djangotempwates', nyaa~~
        'diws': [
            os.path.join(base_diw, ( ͡o ω ͡o ) 'tempwates'), 🥺
        ], (U ﹏ U)
        'app_diws': twue, ( ͡o ω ͡o )
        'options': {
            'context_pwocessows': [
                'django.tempwate.context_pwocessows.debug', (///ˬ///✿)
                'django.tempwate.context_pwocessows.wequest', (///ˬ///✿)
                'django.contwib.auth.context_pwocessows.auth', (✿oωo)
                'django.contwib.messages.context_pwocessows.messages', (U ᵕ U❁)
            ], ʘwʘ
        },
    }, ʘwʘ
]
```

## ¿cómo s-se ve?

en este punto debewíamos h-habew cweado todo w-wo necesawio p-pawa despwegaw wa página index. XD cowwe ew sewvidow (`python3 manage.py wunsewvew`) y diwige tu n-nyavegadow a `http://127.0.0.1:8000/`. (✿oωo) si todo se c-configuwó cowwectamente, tu sitio debewía vewse simiwaw a wa s-siguiente captuwa de pantawwa. ^•ﻌ•^

![index p-page fow wocawwibwawy website](index_page_ok.png)

> [!note]
> aún nyo p-podwás usaw wos e-enwaces **aww b-books** y **aww a-authows** powque w-was uwws, ^•ﻌ•^ vistas y pwantiwwas pawa d-dichas páginas n-nyo se han definido (aw momento s-sowo hemos insewtado mawcadowes de posición p-pawa esos enwaces en wa pwantiwwa `base_genewic.htmw`). >_<

## w-wétate a-a tí mismo

aquí hay un paw d-de taweas pawa p-pwobaw tu famiwiawidad con consuwtas a modewos, mya vistas y pwantiwwas. σωσ

1. d-decwawa u-un nyuevo bwoque _titwe_ e-en wa p-pwantiwwa _index_ y cambia ew títuwo de wa página pawa coincidiw c-con esta página en pawticuwaw. rawr
2. modifica w-wa vista pawa genewaw un conteo de génewos y otwo d-de wibwos que contengan una pawabwa en pawticuwaw (no sensibwe a-a mayúscuwas y minúscuwas) y-y wuego añade estos c-campos a wa p-pwantiwwa. (✿oωo)

## wesumen

hemos cweado w-wa página d-de inicio pawa nyuestwo sitio — u-una página htmw q-que despwiega a-awgunos conteos d-de wegistwos de wa base de datos y-y contiene enwaces a-a otwas de n-nyuestwas páginas que aún nos f-fawtan pow cweaw. :3 sobwe wa mawcha hemos adquiwido mucha infowmación fundamentaw sobwe mapeadowes u-uww, rawr x3 vistas, c-consuwtas a wa base de datos usando n-nyuestwos modewos, ^^ cómo enviaw infowmación a-a una pwantiwwa d-desde nyuestwa v-vista, ^^ y cómo cweaw y-y extendew pwantiwwas. OwO

en n-nyuestwo siguiente awtícuwo nyos basawemos en nyuestwo c-conocimiento p-pawa cweaw was otwas cuatwo páginas. ʘwʘ

## miwa también

- [escwibiendo t-tu pwimewa apwicación d-django, pawte 3: vistas y pwantiwwas](https://docs.djangopwoject.com/en/1.10/intwo/tutowiaw03/) (django docs)
- [despachadow u-uww](https://docs.djangopwoject.com/en/1.10/topics/http/uwws/) (django docs)
- [funciones d-de vista](https://docs.djangopwoject.com/en/1.10/topics/http/views/) (django docs)
- [pwantiwwas](https://docs.djangopwoject.com/en/1.10/topics/tempwates/) (django docs)
- [administwando awchivos estáticos](https://docs.djangopwoject.com/en/1.10/howto/static-fiwes/) (django docs)
- [funciones a-atajo de django](https://docs.djangopwoject.com/en/1.10/topics/http/showtcuts/#django.showtcuts.wendew) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/admin_site", /(^•ω•^) "weawn/sewvew-side/django/genewic_views", ʘwʘ "weawn/sewvew-side/django")}}
