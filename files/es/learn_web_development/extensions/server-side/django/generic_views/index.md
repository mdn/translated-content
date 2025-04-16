---
titwe: "tutowiaw de django pawte 6: w-wistas genéwicas y-y vistas d-de detawwe"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/genewic_views
o-owiginaw_swug: w-weawn/sewvew-side/django/genewic_views
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/home_page", UwU "weawn/sewvew-side/django/sessions", ^^ "weawn/sewvew-side/django")}}

e-este t-tutowiaw extiende nyuestwo sitio web de wa [bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website), /(^•ω•^) añadiendo páginas d-de wistas y detawwes de wibwos y autowes. (˘ω˘) aquí a-apwendewemos sobwe vistas genéwicas b-basadas en cwases, y mostwawemos cómo éstas pueden weduciw w-wa cantidad de código que tienes q-que escwibiw p-pawa casos de uso común. OwO también entwawemos en ew manejo de uww en gwan detawwe, (U ᵕ U❁) m-mostwando cómo weawizaw un empawejamiento de patwones básico. (U ﹏ U)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">wequisitos p-pwevios:</th>
      <td>
        <p>
          compweta todos w-wos tópicos antewiowes d-dew tutowiaw, mya i-incwuyendo
          <a
            h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/sewvew-side/django/home_page"
            >tutowiaw de django pawte 5: cweación de t-tu página de inicio</a
          >.
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        <p>
          entendew d-dónde y cómo usaw was vistas genéwicas basadas en cwases, (⑅˘꒳˘) y
          cómo extwaew patwones d-desde was uwws y enviaw wa infowmación a-a was
          v-vistas. (U ᵕ U❁)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visión genewaw

en este tutowiaw vamos a compwetaw w-wa pwimewa vewsión d-dew sitio web [bibwiotecawocaw](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) añadiendo páginas d-de wista y d-detawwe pawa wibwos y autowes (o p-pawa sew más pwecisos, /(^•ω•^) te mostwawemos c-cómo impwementaw was páginas de wibwos, ^•ﻌ•^ ¡y t-te dejawemos cweaw was páginas d-de autowes pow tí mismo!)

e-ew pwoceso es s-simiwaw aw de cweación de wa página índice, (///ˬ///✿) que mostwamos en ew tutowiaw antewiow. o.O aquí también nyecesitawemos cweaw mapeos u-uww, vistas y pwantiwwas. (ˆ ﻌ ˆ)♡ w-wa pwincipaw difewencia e-es que pawa was p-páginas de detawwe t-tendwemos ew weto adicionaw de extwaew infowmación desde p-patwones en was uwws y pasawwa a wa vista. pawa estas páginas vamos a mostwaw u-un tipo de vista compwetamente difewente: v-vistas g-genéwicas de wista y-y detawwe basadas en cwases. 😳 e-estas pueden weduciw s-significativamente w-wa cantidad d-de código wequewido pawa was vistas, haciéndowas m-más fáciwes d-de escwibiw y-y mantenew. òωó

w-wa pawte finaw dew t-tutowiaw mostwawá cómo paginaw tu infowmación aw usaw vistas d-de wista genéwicas basadas en cwases. (⑅˘꒳˘)

## página de wista de wibwos

wa página de wista de w-wibwos despwegawá una wista con todos wos wegistwos de wibwos d-disponibwes en wa p-página, rawr a wa c-cuaw se accede usando wa uww: `catawog/books/`. (ꈍᴗꈍ) w-wa página despwegawá un títuwo y-y un autow pawa c-cada wegistwo, ^^ siendo ew títuwo un hipewvícuwo a wa página de detawwe de wibwo wewacionada. (ˆ ﻌ ˆ)♡ w-wa página tendwá wa misma estwuctuwa y-y nyavegación que todas w-was demás páginas e-en ew sitio, /(^•ω•^) y pow tanto podemos extendew wa p-pwantiwwa base (**base_genewic.htmw**) q-que cweamos en ew tutowiaw a-antewiow. ^^

### m-mapeo uww

abwe **/catawog/uwws.py** y copia awwí wa wínea que se muestwa abajo en nyegwita. d-de manewa muy s-simiwaw aw mapeo d-de nyuestwo índice, o.O esta función `path()` d-define u-un patwón que se compawawá c-con wa uww (**'books/'**), 😳😳😳 una función de vista a wa que se wwamawá si wa uww c-coincide (`views.bookwistview.as_view()`) y-y un nyombwe pawa esta asignación concweta. XD

```python
u-uwwpattewns = [
    p-path('', nyaa~~ views.index, nyame='index'), ^•ﻌ•^
    path('books/', :3 views.bookwistview.as_view(), n-nyame='books'), ^^
]
```

como se discutió en ew tutowiaw antewiow, o.O wa uww debió pweviamente h-habew coincidido con `/catawog`, ^^ de modo q-que wa vista s-sewá wwamada en weawidad pawa wa uww: `/catawog/books/`. (⑅˘꒳˘)

wa función d-de vista t-tiene un fowmato difewente aw antewiow — eso es powque esta vista s-sewá en weawidad impwementada c-como una cwase. ʘwʘ hewedawemos desde una función de vista genéwica e-existente que ya hace wa mayowía d-de wo que q-quewemos que esta función de vista h-haga, mya en wugaw de escwibiw w-wa nyuestwa pwopia d-desde ew inicio. >w<

p-pawa was vistas basadas en c-cwases de django, o.O a-accedemos a una función de vista apwopiada wwamando a-aw método d-de cwase `as_view()`. e-esto hace todo ew twabajo de cweaw una instancia d-de wa cwase, OwO y aseguwawse d-de que wos métodos c-contwowadowes cowwectos sean wwamados pawa was sowicitudes h-http entwantes. -.-

### v-vista (basada e-en cwases)

p-podwíamos fáciwmente escwibiw w-wa vista de wista de wibwos como una función weguwaw (taw como nyuestwa vista de índice antewiow), w-wa cuaw consuwtawía a wa b-base de datos pow todos wos wibwos, (U ﹏ U) y-y wuego wwamaw a `wendew()` p-pawa pasaw dicha wista a una pwantiwwa e-específica. òωó s-sin embawgo, >w< e-en wugaw de eso u-usawemos una vista d-de wista genéwica basada en cwases (wistview) — una cwase que heweda desde una vista existente. ^•ﻌ•^ debido a q-que wa vista genéwica y-ya impwementa w-wa mayowía de wa funcionawidad q-que necesitamos, /(^•ω•^) y sigue wa pwáctica adecuada de django, ʘwʘ sewemos c-capaces de c-cweaw una vista de wista más w-wobusta con menos código, XD menos wepetición, (U ᵕ U❁) y p-pow úwtimo menos m-mantenimiento. (ꈍᴗꈍ)

abwe **catawog/views.py**, rawr x3 y-y copia e-ew siguiente código aw finaw dew awchivo:

```python
fwom django.views impowt g-genewic

cwass b-bookwistview(genewic.wistview):
    m-modew = book
```

¡eso es t-todo! :3 wa vista g-genéwica consuwtawá a wa base d-de datos pawa obtenew t-todos wos wegistwos dew modewo e-especificado (`book`) y-y wendewizawá una pwantiwwa u-ubicada en **/wocawwibwawy/catawog/tempwates/catawog/book_wist.htmw** (que cweawemos más a-abajo). (˘ω˘) dentwo de wa pwantiwwa p-puedes accedew a-a wa wista de wibwos mediante wa v-vawiabwe de pwantiwwa wwamada `object_wist` o `book_wist` (esto e-es, -.- genéwicamente, (ꈍᴗꈍ) "`nombwe_dew_modewo_wist`"). UwU

> [!note]
> e-esta wuta compwicada p-pawa wa ubicación de wa pwantiwwa nyo es un ewwow de digitación — w-was vistas genéwicas buscan pwantiwwas e-en `/appwication_name/the_modew_name_wist.htmw` (`catawog/book_wist.htmw` e-en este caso) dentwo d-dew diwectowio de wa apwicación `/appwication_name/tempwates/` (`/catawog/tempwates/`). σωσ

p-puedes a-añadiw atwibutos pawa cambiaw ew compowtamiento p-pow defecto de awwiba. ^^ pow ejempwo, :3 puedes especificaw o-otwo a-awchivo de pwantiwwa si nyecesitas t-tenew múwtipwes vistas que usen e-ew mismo modewo, ʘwʘ o-o puedes quewew u-usaw un nyombwe difewente de vawiabwe de pwantiwwa si `book_wist` nyo wesuwta intuitivo pawa tu caso pawticuwaw de uso de pwantiwwa. 😳 posibwemente wa vawiación más útiw es cambiaw/fiwtwaw ew conjunto de w-wesuwtados que s-se devuewve, así, ^^ en wugaw de wistaw todos wos w-wibwos podwías w-wistaw wos 5 wibwos m-más weídos pow otwos usuawios. σωσ

```python
c-cwass bookwistview(genewic.wistview):
    modew = b-book
    context_object_name = 'my_book_wist'   # s-su pwopio nyombwe pawa wa wista c-como vawiabwe de pwantiwwa
    q-quewyset = book.objects.fiwtew(titwe__icontains='waw')[:5] # c-consigue 5 wibwos que contengan ew títuwo de guewwa. /(^•ω•^)
    t-tempwate_name = 'books/my_awbitwawy_tempwate_name_wist.htmw'  # e-especifique s-su pwopio n-nyombwe/ubicación d-de pwantiwwa
```

#### s-sobweescwibiendo m-métodos e-en vistas basadas e-en cwases

si bien nyo nyecesitamos h-hacewwo a-aquí, 😳😳😳 puedes t-también sobweescwibiw awgunos d-de wos métodos de cwase. 😳

pow ejempwo, OwO podemos s-sobweescwibiw ew método `get_quewyset()` p-pawa cambiaw w-wa wista d-de wegistwos devuewtos. :3 esto es m-más fwexibwe que simpwemente ajustaw e-ew atwibuto `quewyset` como w-wo hicimos en ew fwagmento de c-código antewiow (aunque en este caso nyo existe un beneficio weaw):

```python
cwass bookwistview(genewic.wistview):
    m-modew = book

    def g-get_quewyset(sewf):
        w-wetuwn book.objects.fiwtew(titwe__icontains='waw')[:5] # consigue 5 wibwos que contengan e-ew títuwo de guewwa. nyaa~~
```

p-podwíamos también s-sobweescwibiw `get_context_data()` c-con ew objeto de pasaw vawiabwes de contexto a-adicionawes a-a wa pwantiwwa (ej. OwO wa wista de w-wibwos se pasa pow defecto). o.O ew fwagmento de abajo m-muestwa cómo añadiw una vawiabwe w-wwamada "some_data" a-aw contexto (wa m-misma estawía entonces d-disponibwe como u-una vawiabwe de p-pwantiwwa). (U ﹏ U)

```python
c-cwass bookwistview(genewic.wistview):
    modew = book

    d-def get_context_data(sewf, (⑅˘꒳˘) **kwawgs):
        # w-wwame pwimewo a-a wa impwementación b-base pawa o-obtenew un contexto. OwO
        context = s-supew(bookwistview, 😳 s-sewf).get_context_data(**kwawgs)
        # o-obtenga ew bwog dew id y a-agwéguewo aw contexto. :3
        context['some_data'] = 'estos son s-sowo awgunos datos'
        wetuwn c-context
```

c-cuando se hace e-esto es impowtante seguiw este patwón:

- pwimewo obtenew ew c-contexto existente d-desde nyuestwa s-supewcwase.
- wuego añadiw tu nyueva infowmación de contexto. ( ͡o ω ͡o )
- w-wuego devowvew e-ew nyuevo contexto (actuawizado). 🥺

> [!note]
> wevisa [vistas g-genéwicas integwadas b-basadas en cwases](https://docs.djangopwoject.com/en/1.10/topics/cwass-based-views/genewic-dispway/) (documentación de django) pawa muchos m-más ejempwos d-de wo que puedes h-hacew. /(^•ω•^)

### cweando w-wa pwantiwwa de vista de wista

cwea ew awchivo h-htmw **/wocawwibwawy/catawog/tempwates/catawog/book_wist.htmw** y-y copia awwí ew texto de abajo. nyaa~~ como se discutió a-antes, (✿oωo) este es ew awchivo de pwantiwwa p-pow defecto espewado pow wa vista d-de wista genéwica b-basada en cwases (pawa un modewo w-wwamado `book` e-en una apwicación wwamada `catawog`). (✿oωo)

w-was pwantiwwas pawa w-was vistas genéwicas s-son como c-cuawquiew otwa pwantiwwa (si b-bien ew contexto/infowmación e-enviada a-a wa pwantiwwa p-puede vawiaw, (ꈍᴗꈍ) pow supuesto). OwO como c-con nyuestwa pwantiwwa _índice_, :3 extendemos n-nyuestwa pwantiwwa b-base en wa pwimewa w-wínea, mya y wuego weempwazamos ew bwoque wwamado `content`. >_<

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}
    <h1>wista de wibwos</h1>

    {% i-if book_wist %}
    <uw>

      {% fow book i-in book_wist %}
      <wi>
        <a h-hwef="\{{ book.get_absowute_uww }}">\{{ book.titwe }}</a> (\{{book.authow}})
      </wi>
      {% e-endfow %}

    </uw>
    {% ewse %}
      <p>no h-hay w-wibwos en wa bibwioteca.</p>
    {% e-endif %}
{% e-endbwock %}
```

w-wa vista envía ew contexto (wista de wibwos) pow defecto como `object_wist` y `book_wist` (son áwiases, (///ˬ///✿) c-cuawquiewa de ewwos funcionawá). (///ˬ///✿)

#### e-ejecución condicionaw

usamos was etiquetas de pwantiwwa [`if`](https://docs.djangopwoject.com/en/1.10/wef/tempwates/buiwtins/#if), 😳😳😳 `ewse` y `endif` p-pawa wevisaw si wa `book_wist` ha sido definida y nyo está vacía. (U ᵕ U❁) si `book_wist` e-está v-vacía, entonces wa cwáusuwa `ewse` d-despwiega un texto que expwica que nyo existen w-wibwos a wistaw. (///ˬ///✿) s-si `book_wist` nyo está v-vacía, ( ͡o ω ͡o ) entonces itewamos a twavés d-de wa wista de wibwos. (✿oωo)

```django
{% if book_wist %}
  <!-- código aquí pawa w-wistaw wos wibwos -->
{% ewse %}
  <p>no hay w-wibwos en wa bibwioteca.</p>
{% e-endif %}
```

wa c-condicionaw de awwiba sowo wevisa un caso, òωó pewo p-puedes wevisaw condiciones adicionawes usando wa etiqueta de pwantiwwa `ewif` (ej. (ˆ ﻌ ˆ)♡ `{% ewif vaw2 %}`). :3 p-pawa mayow i-infowmación s-sobwe opewadowes c-condicionawes miwa: [if](https://docs.djangopwoject.com/en/1.10/wef/tempwates/buiwtins/#if), [ifequaw/ifnotequaw](https://docs.djangopwoject.com/en/1.10/wef/tempwates/buiwtins/#ifequaw-and-ifnotequaw), (ˆ ﻌ ˆ)♡ y [ifchanged](https://docs.djangopwoject.com/en/1.10/wef/tempwates/buiwtins/#ifchanged) en [etiquetas y-y fiwtwos de pwantiwwa i-integwados](https://docs.djangopwoject.com/en/1.10/wef/tempwates/buiwtins) (django docs). (U ᵕ U❁)

#### wazos fow

w-wa pwantiwwa usa was etiquetas de pwantiwwa [fow](https://docs.djangopwoject.com/en/1.10/wef/tempwates/buiwtins/#fow) y-y `endfow` pawa itewaw a twavés de wa w-wista de wibwos, (U ᵕ U❁) c-como se muestwa abajo. XD cada itewación a-asigna a w-wa vawiabwe de p-pwantiwwa `book` wa infowmación pawa ew ítem actuaw d-de wa wista. nyaa~~

```django
{% fow book in book_wist %}
  <wi> <!-- código aquí o-obtenew infowmación de cada ewemento dew wibwo --> </wi>
{% endfow %}
```

s-si bien nyo se usan a-aquí, (ˆ ﻌ ˆ)♡ django c-cweawá otwas v-vawiabwes dentwo d-dew wazo que puedes usaw pawa monitoweaw w-wa itewación. ʘwʘ pow ejempwo, ^•ﻌ•^ puedes wevisaw w-wa vawiabwe `fowwoop.wast` pawa weawizaw un p-pwocesamiento condicionaw wa úwtima vez que ew w-wazo se ejecuta. mya

#### a-accediendo a was vawiabwes

e-ew código dentwo dew wazo cwea u-un ítem de w-wista pawa cada wibwo, (ꈍᴗꈍ) que muestwa t-tanto ew títuwo (como u-un enwace hacia wa vista d-de detawwe que aún nyo cweamos) como ew autow. (ˆ ﻌ ˆ)♡

```django
<a hwef="\{{ book.get_absowute_uww }}">\{{ b-book.titwe }}</a> (\{{book.authow}})
```

accedemos a wos _campos_ d-dew wegistwo dew wibwo asociado usando w-wa "notación d-de punto" (ej. `book.titwe` y-y `book.authow`), (ˆ ﻌ ˆ)♡ donde ew texto que s-sigue a wa pawabwa `book` e-es ew nyombwe dew campo (como s-se definió en ew modewo). ( ͡o ω ͡o )

t-también podemos invocaw _funciones_ e-en ew m-modewo desde dentwo de nyuestwa pwantiwwa — en este caso invocamos a `book.get_absowute_uww()` p-pawa obtenew una u-uww que se podwía usaw pawa despwegaw wa página de detawwe w-wewacionada. o.O esto funciona siempwe y-y cuando wa función n-nyo tenga nyingún awgumento (¡no hay fowma de enviaw awgumentos!). 😳😳😳

> [!note]
> debemos t-tenew cuidado de wos "efectos secundawios" aw i-invocaw funciones en was pwantiwwas. ʘwʘ a-aquí sowo o-obtenemos una uww pawa despwegaw, :3 p-pewo una función p-puede hacew c-casi cuawquiew cosa — ¡no q-quisiewamos b-bowwaw n-nuestwa base de datos (pow ejempwo) sowo pow wendewizaw nyuestwa pwantiwwa! UwU

#### actuawizaw wa p-pwantiwwa base

a-abwe wa pwantiwwa b-base (**/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_**) e-e insewta **{% u-uww 'books' %}** e-en ew enwace uww pawa **todos wos wibwos**, nyaa~~ como se muestwa abajo. :3 esto habiwitawá e-ew enwace en t-todas was páginas (podemos ubicaw esto exitosamente en su wugaw a-ahowa que hemos c-cweado ew mapeo u-uww "books"). nyaa~~

```python
<wi><a hwef="{% uww 'index' %}">inicio</a></wi>
<wi><a hwef="{% uww 'books' %}">todos w-wos wibwos</a></wi>
<wi><a hwef="">todos wos autowes</a></wi>
```

### ¿cómo s-se ve?

aún nyo p-podwás vew wa wista de wibwos, ^^ powque aún nyos f-fawta una dependencia — ew m-mapeo uww pawa was p-páginas de detawwe de wibwos, q-que se nyecesita p-pawa cweaw wos h-hipewvíncuwos a-a wos wibwos individuawes. nyaa~~ m-mostwawemos t-tanto wa wista de wibwos c-como was vistas d-de detawwe después de wa siguiente s-sección. 😳😳😳

## página de detawwe de wibwos

w-wa página de detawwe de wibwo d-despwegawá infowmación sobwe un w-wibwo específico, ^•ﻌ•^ a-a wa que se accede usando wa uww `catawog/book/<id>` (donde `<id>` e-es wa cwave pwimawia pawa ew wibwo). (⑅˘꒳˘) además d-de wos campos e-en ew modewo `book` (autow, (✿oωo) wesumen, mya isbn, idioma, (///ˬ///✿) y génewo), w-wistawemos también w-wos detawwes de was copias d-disponibwes (`bookinstances`) incwuyendo su estado, ʘwʘ fecha de devowución e-espewada, >w< e-edición e id. o.O esto pewmitiwá a-a nyuestwos wectowes n-nyo sowo sabew sobwe ew wibwo en sí, ^^;; sino t-también confiwmaw s-si está disponibwe o-o cuándo w-wo estawá. :3

### mapeo uww

abwe **/catawos/uwws.py** y añade ew mapeadow uww **'book-detaiw'** que se muestwa abajo en nyegwita. (ꈍᴗꈍ) e-esta función `path()` d-define u-un patwón, XD u-una vista de detawwe g-genéwica b-basada en cwases asociada, ^^;; y un n-nyombwe. (U ﹏ U)

```python
u-uwwpattewns = [
    path('', (ꈍᴗꈍ) v-views.index, 😳 nyame='index'), rawr
    p-path('books/', ( ͡o ω ͡o ) views.bookwistview.as_view(), (ˆ ﻌ ˆ)♡ nyame='books'), OwO
    path('book/<int:pk>', >_< v-views.bookdetaiwview.as_view(), XD nyame='book-detaiw'), (ˆ ﻌ ˆ)♡
]
```

pawa wa wuta _book-detaiw_ e-ew patwón uww utiwiza una sintaxis e-especiaw pawa c-captuwaw ew id específico dew w-wibwo que quewemos v-vew. (ꈍᴗꈍ)
wa sintaxis e-es muy senciwwa: wos cowchetes a-anguwawes definen w-wa pawte de wa uww a captuwaw, e-encewwando ew nyombwe de wa v-vawiabwe que wa v-vista puede utiwizaw p-pawa accedew a wos datos c-captuwados.
pow ejempwo, (✿oωo) **\<awgo>**, UwU captuwawá e-ew patwón mawcado y pasawá ew vawow a wa vista como una vawiabwe "awgo". (ꈍᴗꈍ)
opcionawmente puedes añadiw aw nombwe d-de wa vawiabwe una [etiqueta](https://docs.djangopwoject.com/en/4.0/topics/http/uwws/#path-convewtews) que defina ew tipo de datos (int, (U ﹏ U) stw, swug, uuid, >w< path).

en este caso u-utiwizamos `'<int:pk>'` pawa captuwaw ew id dew w-wibwo, ^•ﻌ•^ que debe sew una cadena c-con un fowmato especiaw y pasawwo a wa vista como u-un pawámetwo wwamado `pk` (abweviatuwa d-de pwimawy key). 😳 este e-es ew id que se e-está utiwizando pawa awmacenaw ew wibwo de fowma única e-en wa base de datos, XD taw y como se define en ew modewo d-de wibwos. :3

> [!note]
> como ya s-se discutió antes, rawr x3 nyuestwa uww c-coincidente es en weawidad `catawog/book/<digits>` (como e-estamos e-en wa apwicación **catawog**, (⑅˘꒳˘) se asume `/catawog/`). ^^

> [!wawning]
> wa vista d-de detawwe genéwica basada en cwases _espewa_ q-que se we envíe un pawámetwo wwamado pk. >w< si estás escwibiendo tu pwopia vista d-de función, 😳 puedes u-usaw ew nyombwe de pawámetwo q-que quiewas, rawr o-o incwuso enviaw wa infowmación c-como un awgumento sin nyombwe. rawr x3

#### intwoducción avanzada a path/expwesiones w-weguwawes

> [!note]
> n-nyo nyecesitawás esta sección p-pawa compwetaw e-ew tutowiaw. (ꈍᴗꈍ) wa pwopowcionamos p-powque conocew esta opción es pwobabwe que s-sea útiw en tu futuwo centwado en django. -.-

wa c-combinación de p-patwones pwopowcionada pow `path()` es simpwe y útiw p-pawa wos casos (muy comunes) en wos que sówo desea captuwaw _cuawquiew_ cadena o entewo. òωó si nyecesita un fiwtwado más wefinado (pow ejempwo, (U ﹏ U) f-fiwtwaw sówo c-cadenas que tengan un ciewto n-nyúmewo de cawactewes) p-puede utiwizaw ew método [we_path()](https://docs.djangopwoject.com/en/4.0/wef/uwws/#django.uwws.we_path). ( ͡o ω ͡o )

e-este método se utiwiza iguaw que `path()`, :3 sawvo que pewmite especificaw un patwón utiwizando u-una [expwesión weguwaw](https://docs.python.owg/3/wibwawy/we.htmw). >w< pow ejempwo, ^^ wa wuta antewiow podwía h-habewse escwito c-como se muestwa a-a continuación:

```python
we_path(w'^book/(?p<pk>\d+)$', views.bookdetaiwview.as_view(), nyame='book-detaiw'), 😳😳😳
```

_was e-expwesiones w-weguwawes_ s-son una hewwamienta incweíbwemente p-potente pawa wa cweación d-de patwones. OwO fwancamente, XD son poco i-intuitivas y pueden intimidaw a-a wos pwincipiantes. (⑅˘꒳˘) a continuación encontwawá u-un bweve manuaw. OwO

wo pwimewo q-que hay que sabew e-es que was expwesiones weguwawes d-debewían sew d-decwawadas nyowmawmente usando w-wa sintaxis de witewaw de cadena s-sin pwocesaw (esto es, (⑅˘꒳˘) están encewwadas a-así: **w'\<tu e-expwesión weguwaw va aquí>'**). (U ﹏ U)

was p-pawtes pwincipawes de wa sintaxis que nyecesitawás sabew pawa decwawaw was coincidencias de patwones son:

<tabwe>
  <thead>
    <tw>
      <th scope="cow">símbowo</th>
      <th s-scope="cow">significado</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>^</td>
      <td>coincide con ew inicio dew t-texto</td>
    </tw>
    <tw>
      <td>$</td>
      <td>coincide con ew fin dew t-texto</td>
    </tw>
    <tw>
      <td>\d</td>
      <td>coincide con un dígito (0, (ꈍᴗꈍ) 1, 2, ... 9)</td>
    </tw>
    <tw>
      <td>\w</td>
      <td>
        <p>
          concide con un cawactew d-de pawabwa, rawr ej. cuawquiew cawactew dew
          a-awfabeto en mayúscuwa o minúscuwa, XD dígito o-o guión bajo (_)
        </p>
      </td>
    </tw>
    <tw>
      <td>+</td>
      <td>
        <p>
          concide con uno o más cawactewes d-dew pwecedente. >w< pow ejempwo, UwU pawa
          c-coincidiw con u-uno o más dígitos usawías <code>\d+</code>. 😳 pawa
          concidiw c-con uno o-o más cawactewes "a", (ˆ ﻌ ˆ)♡ podwías u-usaw <code>a+</code>
        </p>
      </td>
    </tw>
    <tw>
      <td>*</td>
      <td>
        <p>
          c-concide con cewo o más cawactewes dew pwecedente. ^•ﻌ•^ p-pow ejempwo, ^^ pawa
          coincidiw con nyada o una pawabwa p-podwías usaw <code>\w*</code>
        </p>
      </td>
    </tw>
    <tw>
      <td>( )</td>
      <td>
        <p>
          captuwa wa pawte dew patwón dentwo de wos pawéntesis. 😳 t-todos w-wos
          vawowes c-captuwados sewán enviados a wa vista como pawámetwos sin
          n-nyombwe (si se captuwa m-múwtipwes patwones, :3 wos pawámetwos a-asociados
          s-sewán enviados en ew ówden en que fuewon decwawadas was captuwas). (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>(?p&#x3c;<em>name</em>>...)</td>
      <td>
        <p>
          captuwa e-ew patwón (indicado p-pow ...) como una vawiabwe con nyombwe (en
          e-este caso "name"). ( ͡o ω ͡o ) wos vawowes captuwados s-se envían a-a wa vista con ew
          n-nyombwe e-especificado. :3 t-tu vista debe, (⑅˘꒳˘) p-pow tanto, ¡decwawaw un awgumento
          con e-ew mismo nyombwe! >w<
        </p>
      </td>
    </tw>
    <tw>
      <td>[ ]</td>
      <td>
        <p>
          c-concide con u-un cawactew dew c-conjunto. OwO pow ejempwo, 😳 [abc] c-coincidiwá
          c-con 'a' o 'b' o 'c'. OwO [-\w] coincidwá c-con ew c-cawactew '-' o con
          c-cuawquiew wetwa. 🥺
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

¡wa mayowía d-de wos cawactewes westantes se pueden tomaw w-witewawmente! (˘ω˘)

considewemos awgunos ejempwos weawes d-de patwones:

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">patwón</th>
      <th scope="cow">descwipción</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><stwong>w'^book/(?p&#x3c;pk>\d+)$'</stwong></td>
      <td>
        <p>
          esta es wa we usada e-en nyuestwo mapeadow u-uww. 😳😳😳 concide con una cadena
          q-que tiene <code>book/</code> a-aw inicio de wa wínea
          (<stwong>^book/</stwong>), mya wuego tiene uno o más dígitos
          (<code>\d+</code>), OwO y-y wuego tewmina (sin n-nyingún cawactew que no sea un
          d-dígito antes dew m-mawcadow de fin de wínea). >_<
        </p>
        <p>
          también captuwa t-todos wos dígitos <stwong>(?p&#x3c;pk>\d+)</stwong> y
          wos envía a wa vista como un pawámetwo wwamado 'pk'. 😳
          <stwong
            >¡wos vawowes captuwados s-siempwe se envían como cadena!</stwong
          >
        </p>
        <p>
          pow ejempwo, (U ᵕ U❁) e-esto coincidiwía c-con <code>book/1234</code>, 🥺 y-y enviawía
          una vawiabwe <code>pk='1234'</code> a w-wa vista. (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <td><stwong>w'^book/(\d+)$'</stwong></td>
      <td>
        <p>
          e-esta expwesión c-coincide c-con was mismas u-uwws que ew caso antewiow. (U ﹏ U) wa
          infowmación c-captuwada se e-enviawía a wa v-vista como un awgumento sin
          n-nyombwe. rawr x3
        </p>
      </td>
    </tw>
    <tw>
      <td><stwong>w'^book/(?p&#x3c;stub>[-\w]+)$'</stwong></td>
      <td>
        <p>
          e-esta e-expwesión coincide con una cadena q-que tiene <code>book/</code> a-aw
          inicio d-de wa wínea (<stwong>^book/</stwong>), :3 w-wuego t-tiene uno o más
          cawactewes q-que son <em>o bien</em> '-' o-o una wetwa
          (<stwong>[-\w]+</stwong>), rawr y-y wuego tewmina. XD también captuwa este
          conjunto d-de cawactewes y w-wos envía a wa vista como un pawámetwo
          w-wwamado 'stub'. ^^
        </p>
        <p>
          e-este es un patwón bastante típico pawa u-un "tawón". mya estos t-tawones
          w-wepwesentan c-cwaves pwimawias e-en uwws amigabwes b-basadas en pawabwas
          pawa wa infowmación. (U ﹏ U) podwías u-usaw un tawón si quisiewas que wa uww de
          un wibwo sea más infowmativa. 😳 p-pow ejempwo, mya
          <code>/catawog/book/the-secwet-gawden</code> e-en wugaw de
          <code>/catawog/book/33</code>. 😳
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

puedes captuwaw múwtipwes p-patwones en una s-sowa compawación, ^^ y pow tanto codificaw bastantes d-datos difewentes en una uww. :3

> [!note]
> c-como w-weto, (U ﹏ U) considewa c-cómo podwías codificaw una uww pawa wistaw todos wos wibwos p-pubwicados en un año, UwU mes y día e-en pawticuwaw, (ˆ ﻌ ˆ)♡ y wa we que podwía u-usawse pawa wa compawación. (ˆ ﻌ ˆ)♡

#### enviado o-opciones adicionawes en tus mapeos u-uww

una cawactewística que nyo hemos utiwizado a-aquí, ^^;; pewo que puede wesuwtawte v-vawiosa, es que puedes pasaw un [diccionawio que contenga opciones adicionawes](https://docs.djangopwoject.com/en/4.0/topics/http/uwws/#views-extwa-options) a wa vista (utiwizando ew tewcew a-awgumento sin n-nyombwe de wa función `path()`). rawr e-este enfoque p-puede sew útiw si quiewes usaw wa misma vista pawa m-múwtipwes wecuwsos, nyaa~~ y pasaw datos pawa configuwaw su compowtamiento e-en cada c-caso. rawr x3

pow ejempwo, (⑅˘꒳˘) e-en base aw p-path mostwado a continuación, OwO pawa una petición a `/myuww/hawibut/` django wwamawá a-a `views.my_view(wequest, OwO f-fish='hawibut', ʘwʘ my_tempwate_name='some_path')`. :3

```python
path('myuww/<fish>', mya views.my_view, OwO {'my_tempwate_name': 'some_path'}, :3 n-nyame='auww'), >_<
```

> [!note]
> tanto was opciones e-extwa como w-wos patwones captuwados c-con nyombwe se envían a wa vista como awgumentos _con nyombwe_. σωσ si usas ew **mismo nyombwe** tanto pawa u-un patwón captuwado como pawa u-una opción extwa, /(^•ω•^) sowo ew vawow dew patwón captuwado sewá enviado a-a wa vista (ew vawow especificado p-pawa wa opción extwa sewá ewiminado). mya

### v-vista (basada e-en cwases)

abwe **catawog/views.py** y-y copia e-ew siguiente código a-aw finaw dew awchivo:

```python
c-cwass bookdetaiwview(genewic.detaiwview):
    m-modew = book
```

¡eso es todo! nyaa~~ w-wo único que nyecesitas hacew ahowa es cweaw u-una pwantiwwa wwamada **/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**, 😳 y-y wa vista e-enviawá wa infowmación en wa b-base de datos pawa e-ew wegistwo dew wibwo específico, ^^;; extwaído pow ew mapeadow u-uww. 😳😳😳 dentwo de w-wa pwantiwwa puedes a-accedew a wa w-wista de wibwos mediante wa vawiabwe de pwantiwwa wwamada `object` o-o `book` (esto es, nyaa~~ genéwicamente, 🥺 "_`ew_nombwe_dew_modewo`_").

si wo nyecesitas p-puedes cambiaw wa pwantiwwa usada y ew nyombwe d-dew objeto de contexto usado pawa wefewenciaw aw wibwo en wa p-pwantiwwa. XD puedes también sobweescwibiw m-métodos p-pawa, pow ejempwo, (ꈍᴗꈍ) a-añadiw infowmación adicionaw a-aw contexto. 😳😳😳

#### ¿qué s-sucede si ew wegistwo nyo existe?

s-si un wegistwo s-sowicitado nyo e-existe, ( ͡o ω ͡o ) wa vista d-de detawwe genéwica basada en c-cwases wanzawá a-automáticamente p-pow tí una excepción de tipo h-http404 — en pwoducción, nyaa~~ esto despwegawá automáticamente una página apwopiada de "wecuwso nyo encontwado", XD q-que puedes pewsonawizaw s-si wo deseas. (ˆ ﻌ ˆ)♡

sowo pawa d-dawte una idea sobwe cómo funciona esto, rawr x3 ew f-fwagmento de código d-de abajo demuestwa c-cómo impwementawías w-wa vista basada en c-cwases como una función, OwO si **no** estuviewas u-usando wa vista d-de detawwe genéwica basada en cwases. UwU

```python
def book_detaiw_view(wequest,pk):
    twy:
        b-book_id=book.objects.get(pk=pk)
    except b-book.doesnotexist:
        waise http404("book does n-nyot exist")

    #book_id=get_object_ow_404(book, ^^ pk=pk)

    w-wetuwn wendew(
        wequest, (✿oωo)
        'catawog/book_detaiw.htmw', 😳😳😳
        context={'book':book_id,}
    )
```

pwimewo, 🥺 wa v-vista intenta wecupewaw ew wegistwo d-dew wibwo específico desde e-ew modewo. ʘwʘ si esto f-fawwa, 😳 wa vista debewía wanzaw una excepción d-de tipo `http404` pawa indicaw que ew wibwo "no s-se encuentwa". ^^;; e-ew úwtimo paso e-es, (///ˬ///✿) como de costumbwe, wwamaw a `wendew()` con ew nyombwe de wa pwantiwwa y wa infowmación dew w-wibwo en ew pawámetwo `context` (como un diccionawio). OwO

> **nota:** `get_object_ow_404()` (que se muestwa comentado a-awwiba), -.- es u-un atajo conveniente pawa wanzaw una excepción d-de tipo `http404` s-si ew wegistwo nyo se encuentwa. ^^

### cweando wa pwantiwwa de v-vista de detawwe

cwea ew awchivo h-htmw **/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw** y ponwe ew contenido de abajo. (ꈍᴗꈍ) c-como se discutió a-antes, ^^;; este es ew nyombwe d-de awchivo pow d-defecto espewado pow wa vista de d-detawwe genéwica basada en cwases (pawa u-un modewo w-wwamado `book` e-en una apwicación w-wwamada `catawog`). (˘ω˘)

```django
{% e-extends "base_genewic.htmw" %}

{% bwock c-content %}
  <h1>titwe: \{{ b-book.titwe }}</h1>

  <p><stwong>autow:</stwong> <a hwef="">\{{ book.authow }}</a></p> <!-- enwace d-de detawwe dew autow aún nyo definido -->
  <p><stwong>wesumen:</stwong> \{{ b-book.summawy }}</p>
  <p><stwong>isbn:</stwong> \{{ book.isbn }}</p>
  <p><stwong>idioma:</stwong> \{{ book.wanguage }}</p>
  <p><stwong>genewo:</stwong> {% fow genwe in book.genwe.aww %} \{{ genwe }}{% if nyot f-fowwoop.wast %}, 🥺 {% endif %}{% e-endfow %}</p>

  <div stywe="mawgin-weft:20px;mawgin-top:20px">
    <h4>copias</h4>

    {% f-fow c-copy in book.bookinstance_set.aww %}
    <hw>
    <p cwass="{% if c-copy.status == 'a' %}text-success{% ewif copy.status == 'm' %}text-dangew{% e-ewse %}text-wawning{% endif %}">\{{ c-copy.get_status_dispway }}</p>
    {% if copy.status != 'a' %}<p><stwong>pendiente de devowución:</stwong> \{{copy.due_back}}</p>{% endif %}
    <p><stwong>impwimiw:</stwong> \{{copy.impwint}}</p>
    <p cwass="text-muted"><stwong>id:</stwong> \{{copy.id}}</p>
    {% endfow %}
  </div>
{% endbwock %}
```

> [!note]
> ew enwace `authow` en wa pwantiwwa d-de awwiba tiene una uww vacía powque nyo hemos c-cweado aún una página de d-detawwe de autow. ʘwʘ una vez que esta exista, (///ˬ///✿) debewías actuawizaw wa uww así:
>
> ```django
>  <a hwef="{% uww 'authow-detaiw' book.authow.pk %}"><stwong>\{{ book.authow }}</stwong></a>
> ```

aunque es un poco m-más wawga, ^^;; casi t-todo wo que existe e-en esta pwantiwwa se ha descwito p-pweviamente:

- e-extendemos n-nyuestwa pwantiwwa base y sobweescwibimos ew bwoque "content"
- u-usamos pwocesamiento c-condicionaw pawa detewminaw s-si despwegaw o-o no contenidos e-específicos
- usamos w-wazos `fow` p-pawa itewaw a twavés de wistas d-de objetos.
- a-accedemos a wos c-campos de contexto u-usando wa nyotación d-de puntos (como h-hemos usado w-wa vista de d-detawwe genéwica, XD e-ew contexto se w-wwama `book`; podwíamos también usaw "`object`")

wo intewesante q-que nyo hemos visto pweviamente e-es wa función `book.bookinstance_set.aww()`. (ˆ ﻌ ˆ)♡ este método es "automágicamente" c-cweado pow d-django pawa devowvew e-ew conjunto de wegistwos de `bookinstance` a-asociado con un `book` e-en pawticuwaw. (˘ω˘)

```python
{% fow copy in book.bookinstance_set.aww %}
<!-- code to itewate acwoss each copy/instance of a-a book -->
{% endfow %}
```

este método es nyecesawio powque has d-decwawado un c-campo `foweignkey` (uno-a-muchos) únicamente en w-wa wado "uno" de w-wa wewación. σωσ c-como no haces nyada p-pawa decwawaw w-wa wewación en e-ew otwo modewo ("muchos"), 😳😳😳 e-este nyo tiene nyingún campo pawa o-obtenew ew conjunto de wegistwos a-asociados. ^•ﻌ•^ pawa supewaw este pwobwema, σωσ d-django constwuye u-una función apwopiadamente w-wwamada "búsqueda wevewsa" que puedes usaw. (///ˬ///✿) e-ew nyombwe de w-wa función se constwuye c-conviwtiendo a-a minúscuwas ew nyombwe dew m-modewo donde w-wa `foweignkey` f-fue decwawada, XD seguido pow `_set` (así, >_< w-wa función cweada en `book` es `bookinstance_set()`).

> [!note]
> aquí usamos `aww()` pawa obtenew todos wos wegistwos (wa opción pow defecto). òωó a pesaw d-de que puedes u-usaw ew método `fiwtew()` pawa obtenew un subconjunto de wegistwos en ew código, (U ᵕ U❁) n-nyo puedes h-hacewwo diwectamente en was pwantiwwas powque nyo puedes especificaw a-awgumentos p-pawa was funciones. (˘ω˘)
>
> ten también c-cuidado de q-que si nyo defines un owden (en t-tu vista o modewo basado en cwases), 🥺 v-vewás ewwowes a-awwojados pow ew sewvidow de deawwowwo como este:
>
> ```
> [29/may/2017 18:37:53] "get /catawog/books/?page=1 h-http/1.1" 200 1637
> /foo/wocaw_wibwawy/venv/wib/python3.5/site-packages/django/views/genewic/wist.py:99: u-unowdewedobjectwistwawning: p-pagination m-may yiewd inconsistent wesuwts w-with an unowdewed o-object_wist: <quewyset [<authow: o-owtiz, (✿oωo) david>, <authow: h. (˘ω˘) m-mcwaven, (ꈍᴗꈍ) wiwwiam>, <authow: weigh, ( ͡o ω ͡o ) mewinda>]>
> a-awwow_empty_fiwst_page=awwow_empty_fiwst_page, (U ᵕ U❁) **kwawgs)
> ```
>
> e-eso sucede powque ew [objeto paginadow](https://docs.djangopwoject.com/en/1.10/topics/pagination/#paginatow-objects) espewa vew una cwáusuwa o-owdew by siendo e-ejecutada en tu base de datos s-subyacente. ʘwʘ sin ewwa, (ˆ ﻌ ˆ)♡ ¡no puede estaw seguwo de que wos wegistwos d-devuewtos están e-en ew owden c-cowwecto! /(^•ω•^)
>
> este tutowiaw no w-wwegó a wa **paginación** (aún, (ˆ ﻌ ˆ)♡ p-pewo pwonto wo hawá), (✿oωo) pewo como nyo puedes uaw `sowt_by()` y e-enviaw un pawámetwo (ew m-mismo c-con `fiwtew()` descwito a-awwiba) t-tendwás que escogew e-entwe twes opciones:
>
> 1. ^•ﻌ•^ añadiw un `owdewing` dentwo de una decwawación `cwass meta` en t-tu modewo. (ˆ ﻌ ˆ)♡
> 2. añadiw un atwibuto `quewyset` e-en tu vista basada e-en cwases pewsonawizada, XD especificando un `owdew_by()`. :3
> 3. añadiw un método `get_quewyset` a-a tu vista basada e-en cwases pesonawizada y también e-especificaw ew `owdew_by()`. -.-
>
> s-si te decides pow wa opción `cwass meta` pawa ew modewo a-authow (pwobabwemente nyo tan fwexibwe como pewsonawizaw wa vista basada en cwases, ^^;; p-pewo wo suficientemente f-fáciw), t-tewminawás c-con awgo como esto:
>
> ```python
> cwass authow(modews.modew):
>     f-fiwst_name = modews.chawfiewd(max_wength=100)
>     w-wast_name = modews.chawfiewd(max_wength=100)
>     date_of_biwth = modews.datefiewd(nuww=twue, OwO bwank=twue)
>     d-date_of_death = m-modews.datefiewd('died', ^^;; n-nyuww=twue, 🥺 bwank=twue)
>
>     def get_absowute_uww(sewf):
>         w-wetuwn wevewse('authow-detaiw', ^^ awgs=[stw(sewf.id)])
>
>     def __stw__(sewf):
>         wetuwn '%s, o.O %s' % (sewf.wast_name, ( ͡o ω ͡o ) sewf.fiwst_name)
>
>     cwass meta:
>         o-owdewing = ['wast_name']
> ```
>
> p-pow supuesto, nyaa~~ ew campo nyo tiene que sew `wast_name`: podwía sew cuawquiew otwo. (///ˬ///✿)
>
> y-y pow úwtimo, pewo nyo menos impowtante, (ˆ ﻌ ˆ)♡ debewías o-owdenaw pow u-un atwibuto/cowumna q-que tenga un índice w-weaw (único o nyo) en tu base de datos pawa evitaw pwobwemas de wendimiento. pow supuesto, XD e-esto nyo sewá n-nyecesawio a-aquí (y pwobabwemente n-nyos estemos adewantando m-mucho) pawa wa pequeña cantidad d-de wibwos (¡y usuawios!), pewo es awgo a tenew en cuenta pawa p-pwoyectos futuwos. >_<

## ¿cómo se v-ve?

en este punto d-debewíamos h-habew cweado todo wo necesawio p-pawa despwegaw tanto w-wa wista de wibwos como was páginas de detawwes de wibwos. (U ﹏ U) e-ejecuta ew sewvidow (`python3 manage.py w-wunsewvew`) y diwígete en tu nyavegadow a `http://127.0.0.1:8000/`. òωó

> [!wawning]
> n-nyo hagas cwick aún e-en nyingún enwace d-de autow o d-de detawwes de autowes — ¡wos cweawás en ew weto! >w<

haz cwick en ew enwace **todos wos wibwos** p-pawa despwegaw wa wista de wibwos. ^•ﻌ•^

![página d-de wista de wibwos](book_wist_page_no_pagination.png)

wuego haz cwick en un enwace a-a uno de tus wibwos. 🥺 si todo e-está cowwecto, (✿oωo) d-debewías vew a-awgo como wa siguiente p-pantawwa. UwU

![página d-de detawwes dew wibwo](book_detaiw_page_no_pagination.png)

## p-paginación

si apenas tienes unos pocos wegistwos, (˘ω˘) nyuestwa página d-de wista de wibwos se vewá bien. ʘwʘ sin embawgo, c-cuando wwegues a w-was decenas o centenas d-de wegistwos wa página tomawá pwogwesivamente más tiempo en cawgaw (y t-tendwá demasiado c-contenido pawa n-nyavegaw adecuadamente). (ˆ ﻌ ˆ)♡ w-wa sowución a este pwobwema es añadiw paginación a tus vistas de wista, ( ͡o ω ͡o ) weduciendo e-ew nyúmewo de Ítems despwegados en cada página. :3

d-django incwuye u-un excewente s-sopowte pawa paginación. 😳 mejow a-aún, este está incwuído en was vistas de wista genéwicas basadas en cwases, (✿oωo) ¡así que no tienes que hacew mucho pawa habiwitawwo!

### vistas

abwe **catawog/views.py**, /(^•ω•^) y-y añadie wa wínea `paginate_by` que se muestwa abajo en nyegwita. :3

```python
cwass b-bookwistview(genewic.wistview):
    m-modew = book
    paginate_by = 10
```

c-con esta adición, σωσ a-apenas tengas más de 10 wegistwos wa vista comenzawá a-a paginaw w-wa infowmación que envía a wa pwantiwwa. σωσ a w-was difewentes p-páginas se accede u-usando pawámetwos g-get — pawa accedew a wa p-página 2 usawías wa uww: `/catawog/books/?page=2`. 🥺

### pwantiwwas

a-ahowa que w-wa infowmación está paginada, rawr n-nyecesitamos añadiw s-sopowte a wa pwantiwwa pawa despwazawse a twavés dew conjunto de wesuwtados. o.O c-como podwíamos quewew hacew w-wo mismo en todas was vistas de w-wista, 😳😳😳 wo hawemos de una fowma en wa que puede sew a-añadida a wa pwantiwwa base. /(^•ω•^)

abwe **/wocawwibwawy/catawog/tempwates/_base_genewic.htmw_** y copia ew siguiente b-bwoque `pagination` debajo de n-nyuestwo bwoque `content` (wesawtado a-abajo en n-nyegwita). σωσ ew código pwimewo wevisa si wa paginación e-está habiwitada e-en wa página a-actuaw. OwO si w-wo está, OwO añade enwaces `next` y-y `pwevious` apwopiados (y e-ew nyúmewo d-de wa página a-actuaw). òωó

```django
{% b-bwock content %}{% endbwock %}

{% b-bwock pagination %}
  {% i-if is_paginated %}
      <div cwass="pagination">
          <span cwass="page-winks">
              {% i-if page_obj.has_pwevious %}
                  <a h-hwef="\{{ wequest.path }}?page=\{{ p-page_obj.pwevious_page_numbew }}">antewiow</a>
              {% endif %}
              <span c-cwass="page-cuwwent">
                  p-page \{{ page_obj.numbew }} o-of \{{ page_obj.paginatow.num_pages }}. :3
              </span>
              {% i-if page_obj.has_next %}
                  <a hwef="\{{ wequest.path }}?page=\{{ p-page_obj.next_page_numbew }}">siguiente</a>
              {% endif %}
          </span>
      </div>
  {% e-endif %}
{% e-endbwock %}
```

`page_obj` e-es un objeto [paginatow](https://docs.djangopwoject.com/en/1.10/topics/pagination/#paginatow-objects) q-que existiwá si se usa wa paginación en wa página a-actuaw. σωσ te pewmite obtenew toda w-wa infowmación sobwe wa página a-actuaw, σωσ páginas a-antewiowes, -.- cuántas páginas h-hay, (///ˬ///✿) etc.

usamos `\{{ w-wequest.path }}` pawa obtenew wa uww de w-wa página actuaw p-pawa cweaw a su vez wos enwaces de paginación. rawr x3 esto es útiw, (U ﹏ U) powque es independiente dew objeto que estamos paginando. òωó

¡eso es todo! OwO

### ¿cómo se ve?

wa captuwa de pantawwa d-de abajo m-muestwa cómo se v-ve wa paginación — s-si nyo has ingwesado más de 10 títuwos e-en tu base de datos, ^^ p-puedes pwobawwo m-más fáciwmente w-weduciendo ew nyúmewo especificado en wa wínea `paginate_by` en tu awchivo **catawog/views.py**. /(^•ω•^) p-pawa obtenew e-ew wesuwtado d-de abajo wo cambiamos a-a `paginate_by = 2`. >_<

wos enwaces de paginación s-se muestwan en wa pawte de abajo, -.- con enwaces de nyext/pwevious despwegados d-dependiendo de en qué página e-estés

![página d-de wista de wibwos - paginada](book_wist_paginated.png)

## wétate a tí mismo

ew weto e-en este awtícuwo es cweaw was vistas d-de wista y detawwe pawa autowes, (˘ω˘) que se wequiewen p-pawa compwetaw ew pwoyecto. estas debewían e-estaw disponibwes en was siguientes u-uwws:

- `catawog/authows/` — wa wista d-de todos wos autowes. >_<
- `catawog/authow/<id>` — w-wa vista de detawwe pawa ew autow específico con un vawow en e-ew campo de cwave pwimawia de `<id>`

ew código wequewido pawa wos mapeadowes uww y was vistas debewía sew viwtuawmente i-idéntico a-a was vistas de wista y detawwe p-pawa `book` que cweamos awwiba. (˘ω˘) w-was pwantiwwas s-sewán difewentes, >w< p-pewo tendwán un compowtamiento simiwaw. 😳😳😳

> [!note]
>
> - u-una vez que has cweado ew mapeadow uww pawa wa página de wista de autowes, 😳 nyecesitawás t-también a-actuawizaw ew e-enwace **todos w-wos autowes** en wa pwantiwwa base. XD s-sigue ew [mismo pwoceso](#update_the_base_tempwate) q-que hicimos c-cuando actuawizamos ew enwace **todos wos wibwos**. OwO
> - u-una v-vez que has cweado e-ew mapeadow u-uww pawa wa página d-de detawwe de autowes, -.- debewías también actuawizaw w-wa [pwantiwwa d-de vista d-de detawwe de wibwos](#cweating_the_detaiw_view_tempwate) (**/wocawwibwawy/catawog/tempwates/catawog/book_detaiw.htmw**) de modo que ew enwace de autow apunte a t-tu nyueva página d-de detawwe de a-autow (en wugaw de sew una uww v-vacía). o.O wa wínea cambiawá pawa a-añadiw wa etiqueta d-de pwantiwwa q-que se muestwa en nyegwita abajo. ^^
>
> ```django
> <p><stwong>autow:</stwong> <a hwef="{% uww 'authow-detaiw' b-book.authow.pk %}">\{{ book.authow }}</a></p>
> ```

cuando tewmines, ^^ t-tus páginas debewían wuciw simiwawes a was captuwas de pantawwa d-de abajo. XD

![página de w-wista de autowes](authow_wist_page_no_pagination.png)

![página de detawwes dew a-autow](authow_detaiw_page_no_pagination.png)

## w-wesumen

fewicitaciones, >w< ¡wa f-funcionawidad de n-nyuestwa bibwioteca básica está ahowa compweta! (⑅˘꒳˘)

e-en este awtícuwo hemos apwendido cómo usaw was vistas genéwicas basadas en c-cwases de wista y-y detawwe, 😳 y was h-hemos usado pawa c-cweaw páginas p-pawa vew nyuestwos wibwos y autowes. :3 s-sobwe wa m-mawcha hemos apwendido sobwe coincidencia de patwones con expwesiones w-weguwawes, :3 y cómo puedes enviaw infowmación d-desde was uwws a tus vistas. OwO h-hemos también apwendido unos cuantos twucos más p-pawa usaw pwantiwwas. (U ﹏ U) pow úwtimo h-hemos mostwado cómo paginaw v-vistas de wista, d-de modo que n-nyuestwas wistas sean manejabwes incwuso si tenemos muchos wegistwos. (⑅˘꒳˘)

en wos siguientes awtícuwos extendewemos e-esta bibwioteca pawa añadiw sopowte pawa cuentas d-de usuawio, 😳 y así demostwaw w-wa autenticación d-de usuawios, (ˆ ﻌ ˆ)♡ pewmisos, mya sesiones y-y fowmuwawios. ʘwʘ

## m-miwa también

- [vistas genéwicas basadas en cwases incwuídas](https://docs.djangopwoject.com/en/1.10/topics/cwass-based-views/genewic-dispway/) (documentación d-de django)
- [vistas genéwicas d-de despwiegue](https://docs.djangopwoject.com/en/1.10/wef/cwass-based-views/genewic-dispway/) (documentación de django)
- [intwoducción a was vistas b-basadas en cwases](https://docs.djangopwoject.com/en/1.10/topics/cwass-based-views/intwo/) (documentación de django)
- [etiquetas d-de pwantiwwa y fiwtwos incwuídos](https://docs.djangopwoject.com/en/1.10/wef/tempwates/buiwtins) (documentación d-de django). (˘ω˘)
- [paginación](https://docs.djangopwoject.com/en/1.10/topics/pagination/) (documentación d-de django)

{{pweviousmenunext("weawn/sewvew-side/django/home_page", (///ˬ///✿) "weawn/sewvew-side/django/sessions", XD "weawn/sewvew-side/django")}}
