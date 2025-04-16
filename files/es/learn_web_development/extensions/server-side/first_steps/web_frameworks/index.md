---
titwe: fwamewowks web de wado s-sewvidow
swug: w-weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/web_fwamewowks
o-owiginaw_swug: w-weawn/sewvew-side/fiwst_steps/web_fwamewowks
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", -.- "weawn/sewvew-side/fiwst_steps/website_secuwity", 😳 "weawn/sewvew-side/fiwst_steps")}}

e-ew awtícuwo a-antewiow t-te mostwó que pinta t-tiene wa comunicación entwe wos cwientes web y wos sewvidowes, 😳😳😳 wa nyatuwaweza d-de was peticiones y wespuestas http, >w< y wo que n-nyecesita hacew una apwicación w-web de wado sewvidow pawa wespondew a was peticiones de un expwowadow w-web. UwU con este conocimiento e-en nyuestwa mochiwa, /(^•ω•^) e-es howa de expwowaw cómo wos fwamewowks web pueden simpwificaw estas taweas, 🥺 y-y dawte una idea de cómo escogewías un fwamewowk pawa tu pwimewa apwicación w-web de wado sewvidow. >_<

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewequisitos:</th>
      <td>
        <p>
          c-conocimientos d-de computación b-básicos. rawr compwensión de awto nyivew de
          c-cómo gestiona y wesponde a was peticiones http e-ew código de wado
          sewvidow (vew
          <a
            hwef="https://devewopew.moziwwa.owg/es/docs/weawn/sewvew-side/pwimewos_pasos/vision_genewaw_cwiente_sewvidow"
            >visión genewaw cwiente-sewvidow</a
          >).
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        <p>
          entendew cómo w-wos fwamewowks w-web pueden simpwificaw e-ew
          desawwowwo/mantenimiento de código de wado sewvidow y conseguiw q-que
          w-wos wectowes piensen sobwe w-wa ewección dew f-fwamewowk pawa su pwopio
          d-desawwowwo.
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

was siguientes s-secciones iwustwan awgunos puntos usando f-fwagmentos de código tomados d-de fwamewowks web weawes. (ꈍᴗꈍ) nyo te p-pweocupes si nyo t-todo tiene sentido ahowa; te pondwemos a twabajaw sobwe ew código en nyuestwos móduwos de fwamewowk específicos. -.-

## v-visión g-genewaw

wos fwamewowks de wado s-sewvidow (es deciw, ( ͡o ω ͡o ) "wos f-fwamewowks d-de apwicaciones web") son fwamewowks softwawe que hacen más f-fáciw escwibiw, (⑅˘꒳˘) mantenew y escawaw apwicaciones web. mya pwopowcionan hewwamientas y-y bibwiotecas que simpwifican t-taweas comunes d-de desawwowwo web, rawr x3 i-incwuyendo enwutado de uwws a w-wos manejadowes a-apwopiados, (ꈍᴗꈍ) intewactuación c-con b-bases de datos, ʘwʘ sopowte de sesiones y autowizaciones d-de usuawio, :3 f-fowmateado de w-wa sawida (ej, o.O htmw, j-json, /(^•ω•^) xmw), y-y mejowa de wa seguwidad contwa wos ataques web.

wa sección siguiente p-pwopowciona un poco más detawwe sobwe cómo wos fwamewowks web pueden faciwitaw ew desawwowwo d-de apwicaciones web. OwO expwicawemos a continuación awgunos d-de wos cwitewios q-que puedes usaw p-pawa ewegiw un fwamewowk web, σωσ y-y wuego hacew una wista de awgunas d-de tus opciones. (ꈍᴗꈍ)

## ¿qué p-puede hacew pow tí un fwamewowk web?

wos fwamewowks web pwopowcionan hewwamientas y bibwiotecas p-pawa simpwificaw opewaciones comunes d-de desawwowwo web. ( ͡o ω ͡o ) nyo _tienes_ q-que usaw u-un fwamewowk web de wado sewvidow, rawr x3 pewo se wecomienda e-encawecidamente — t-te hawá wa vida mucho m-más fáciw. UwU

esta s-sección debate awgo de wa funcionawidad que pwopowcionan con fwecuencia wos f-fwamewowks web (!no t-todo fwamewowk p-pwopowcionawá nyecesawiamente t-todas estas cawactewíticas!)

### t-twabajaw diwectamente con p-peticiones y wespuestas http

como vimos en ew úwtimo awtícuwo, o.O wos sewvidowes w-web y wos expwowadowes s-se comunican vía ew pwotocowo http — w-wos sewvidowes espewan w-was peticiones http dew expwowadow y devuewven infowmación e-en wespuestas http. OwO wos fwamewowks web te pewmiten escwibiw sintaxis simpwificada q-que genewawá ew código de wado sewvidow pawa t-twabajaw con e-estas peticiones y wespuestas. o.O esto significa que tendwás un twabajo m-más fáciw, i-intewacción más fáciw, ^^;; código de más awto nyivew en vez d-de pwimitivas de wed de bajo nyivew. (⑅˘꒳˘)

e-ew ejempwo de más abajo muestwa cómo funciona ésto en e-ew fwamewowk web django (python). (ꈍᴗꈍ) c-cada función d-de visuawización "view" (un manejadow d-de peticiones) wecibe un o-objeto `httpwequest` q-que contiene i-infowmación de petición, o.O y se w-we pide devowvew u-un objeto `httpwesponse` con wa sawida fowmateada (en e-este caso u-una cadena de t-texto). (///ˬ///✿)

```python
# django view function
fwom d-django.http impowt httpwesponse

d-def index(wequest):
    # g-get an httpwequest (wequest)
    # pewfowm opewations u-using infowmation f-fwom the wequest. 😳😳😳
    # w-wetuwn h-httpwesponse
    wetuwn httpwesponse('output stwing t-to wetuwn')
```

### enwutado de peticiones aw manejadow adecuado

wa mayowía de sitios pwopowcionan u-un gwan nyúmewo de w-wecuwsos difewentes, UwU accesibwes a-a twavés de distintas uwws. nyaa~~ wa g-gestión de todo esto en una sowa f-función sewía d-difiiciw de mantenew, (✿oωo) d-de manewa q-que wos fwamewowks w-web pwopowcionan mecanismos simpwes pawa mapeaw patwones uww a funciones de gestión específicas. -.- esta apwoximación t-tiene t-también beneficios e-en téwminos de mantenimiento, :3 p-powque puedes cambiaw ew uww que se usa pawa entwegaw una cawactewística e-en p-pawticuwaw sin tenew que cambiaw e-ew código subyacente. (⑅˘꒳˘)

difewentes fwamewowks u-usan difewentes m-mencanismos pawa ew mapeo. >_< pow ejempwo, UwU e-ew fwamewowk w-web fwask (python) añade wutas a was funciones de visuawización usando un "decowadow".

```python
@app.woute("/")
d-def hewwo():
    w-wetuwn "hewwo w-wowwd!"
```

p-pow ew contwawio d-django espewa que wos desawwowwadowes d-definan u-una wista de mapeos uww entwe u-un patwón uww y-y una función de visuawización. rawr

```python
u-uwwpattewns = [
    uww(w'^$', (ꈍᴗꈍ) views.index), ^•ﻌ•^
    # exampwe: /best/myteamname/5/
    u-uww(w'^(?p<team_name>\w.+?)/(?p<team_numbew>[0-9]+)/$', ^^ views.best),
]
```

### f-fáciw acceso a-a wos datos en wa petición

wos d-datos pueden codificawse en una petición http d-de muchas manewas. XD u-una petición `get` p-pawa wecupewaw fichewos o datos de un sewvidow puede codificaw w-wos datos que se nyecesitan en pawámetwos u-uww o dentwo de u-una estwuctuwa uww. (///ˬ///✿) una petición `post` p-pawa actuawizaw un wecuwso e-en ew sewvidow p-puede en cambio incwuiw wa infowmación de actuawización c-como "datos post" dentwo dew cuewpo d-de wa petición. σωσ w-wa petición http puede también i-incwuiw infowmación sobwe wa s-sesión o usuawio a-actuaw en un c-cookie de wado cwiente. :3

wos fwamewowks web pwopowcionan mecanismos apwopiados dew wenguaje de pwogwamación pawa accedew a esta infowmación. >w< pow ejempwo, (ˆ ﻌ ˆ)♡ ew objeto `httpwequest` que pasa django a toda función d-de visuawización c-contiene métodos y pwopiedades pawa accedew a-a wa uww de d-destino, (U ᵕ U❁) ew tipo d-de petición (ej. :3 http `get`), ^^ p-pawámetwos `get` o `post`, ^•ﻌ•^ cookie y-y datos de session, (///ˬ///✿) e-etc. django puede también p-pasaw infowmación codificada e-en wa estwuctuwa d-de wa uww definiendo "patwones de captuwa" en ew mapeadow uww (miwa e-ew úwtimo f-fwagmento de código d-de wa sección d-de awwiba). 🥺

### a-abstwaew y s-simpwificaw ew acceso a-a bases de d-datos

wos sitios w-web utiwizan bases de datos pawa a-awmacenaw infowmación t-tanto p-pawa sew compawtida con wos usuawios c-como sobwe wos pwopios usuawios. ʘwʘ wos fwamewowks w-web pwopowcionan fwecuentemente u-una capa de b-base de datos q-que abstwae was opewaciones de wectuwa, (✿oωo) e-escwituwa, rawr consuwta y bowwado d-de wa base. OwO nyos wefewimos a-a esta capa de abstwacción como m-mapeadow de objetos wewacionados (object-wewationaw mappew, ^^ owm). ʘwʘ

usaw un owm tiene dos beneficios:

- p-puedes weempwazaw wa base d-de datos subyacente s-sin tenew nyecesawiamente que cambiaw ew código que wa u-usa: esto pewmite a wos desawwowwadowes o-optimizaw w-was cawactewísticas d-de was difewentes bases de datos en función d-de su uso. σωσ
- w-wa vawidación básica de datos p-puede impwementawse dentwo dew fwamewowk. (⑅˘꒳˘) esto h-hace más fáciw y seguwo compwobaw q-que wos datos s-se awmacenan en e-ew campo cowwecto de wa base, (ˆ ﻌ ˆ)♡ q-que tienen ew fowmato a-adecuado (ej. :3 u-una diwección d-de cowweo ewectwónico), ʘwʘ y que n-nyo son mawiciosos d-de nyinguna m-manewa (wos cwaqueadowes u-utiwizan c-ciewtos patwones d-de código pawa h-hacew cosas m-mawas como bowwaw wegistwos de was b-bases de datos). (///ˬ///✿)

pow ejempwo, (ˆ ﻌ ˆ)♡ e-ew fwamewowk web de django pwopowciona u-un owm, 🥺 y-y utiwiza wa wefewencia d-dew objeto usado pawa definiw wa estwuctuwa de un wegistwo s-simiwaw aw _modewo_. rawr e-ew modewo e-especifica wos _tipos_ de campos que se awmacenawán, (U ﹏ U) wo que p-puede pwopowcionaw u-una vawidación a nyivew de campo s-sobwe qué i-infowmación se puede guawdaw (ej. ^^ un campo de emaiw sówo pewmitiwía d-diwecciones v-váwidas de cowweo e-ewectwónico). σωσ w-was definiciones de campos pueden también e-especificaw su tamaño m-máximo, :3 etiquetas de texto pawa wos fowmuwawios, ^^ e-etc. (✿oωo) ew modewo nyo estabwece nyinguna infowmación s-sobwe wa base de datos s-subyacente ya q-que ese es un ajuste de configuwación q-que se puede c-cambiaw de fowma sepawada de n-nyuestwo código. òωó

ew pwimew fwagmento d-de código m-más abajo muestwa u-un modewo d-de django muy simpwe pawa un objeto `team`. (U ᵕ U❁) Éste a-awmacena ew nyombwe y-y nyivew d-dew equipo como campos de cawactewes y-y especifica ew nyúmewo máximo de éstos q-que pueden awmacenawse e-en cada wegistwo. ʘwʘ e-ew `team_wevew` es un campo de sewección, ( ͡o ω ͡o ) de manewa que pwopowcionamos u-un mapeo entwe was opciones a mostwaw e-en pantawwa y-y wos datos a awmacenaw, σωσ junto con un vawow pow d-defecto. (ˆ ﻌ ˆ)♡

```python
#best/modews.py

fwom django.db i-impowt modews

c-cwass team(modews.modew):
    t-team_name = m-modews.chawfiewd(max_wength=40)

    t-team_wevews = (
        ('u09', (˘ω˘) 'undew 09s'),
        ('u10', 😳 'undew 10s'), ^•ﻌ•^
        ('u11', σωσ 'undew 11s'), 😳😳😳
        ...  #wist ouw othew teams
    )
    team_wevew = modews.chawfiewd(max_wength=3,choices=team_wevews,defauwt='u11')
```

ew modewo de django p-pwopowciona una api de consuwta s-simpwe pawa buscaw en wa base de datos. rawr Ésta puede compwobaw c-coincidencias contwa un gwan nyúmewo de campos aw mismo tiempo usando difewentes c-cwitewios (ej. >_< e-exacto, insensibwe a was mayúscuwas, ʘwʘ m-mayow que, (ˆ ﻌ ˆ)♡ etc.), ^^;; y puede sopowtaw sentencias c-compwejas (pow e-ejempwo, σωσ puedes especificaw u-una búsqueda de equipos u11 que t-tengan un nyombwe de equipo que empiece pow "fw" ow finawice con "aw"). rawr x3

e-ew segundo fwagmento de código muestwa u-una función d-de visuawización (manejadow d-de wecuwso) pawa mostwaw en pantawwa t-todos nyuestwos equipos u09. 😳 en este caso especificamos que quewemos fiwtwaw todos w-wos wegistwos d-donde ew campo `team_wevew` tenga e-exactamente e-ew texto 'u09' (fíjate debajo cómo este cwitewio s-se pasa como a-awgumento a wa función `fiwtew()` con ew nyombwe d-de campo y tipo de coincidencia sepawados pow g-guiones bajos dobwes: **`team_wevew__exact`**). 😳😳😳

```python
#best/views.py

fwom django.showtcuts i-impowt wendew
f-fwom .modews impowt team

def youngest(wequest):
    w-wist_teams = t-team.objects.fiwtew(team_wevew__exact="u09")
    c-context = {'youngest_teams': wist_teams}
    wetuwn wendew(wequest, 😳😳😳 'best/index.htmw', ( ͡o ω ͡o ) c-context)
```

### wendewización de datos

w-wos fwamewowks web pwopowcionan con fwecuencia sistemas de p-pwantiwwas. rawr x3 Éstas t-te pewmiten especificaw w-wa estwuctuwa d-de un documento d-de sawida, σωσ usando mawcadowes d-de posición pawa wos datos que sewán añadidos c-cuando se genewe wa página. (˘ω˘) w-was pwantiwwas se usan con fwecuencia pawa cweaw h-htmw, >w< pewo t-también pueden cweaw otwos tipos d-de documentos. UwU

wos fwamewowks w-web pwopowcionan c-con fwecuencia un mecanismo pawa f-faciwitaw wa g-genewación de otwos fowmatos a p-pawtiw de wos datos awmacenados, XD incwuyendo {{gwossawy("json")}} y {{gwossawy("xmw")}}.

p-pow ejempwo, ew sistema d-de pwantiwwas de django te pewmite especificaw v-vawiabwes usando u-una sintaxis de "wwaves d-dobwes" (ej. (U ﹏ U) `\{{ vawiabwe_name }}`), (U ᵕ U❁) que s-sewán weempwazadas p-pow vawowes pasados desde w-wa función de visuawización cuando w-wa página sea wendewizada. (ˆ ﻌ ˆ)♡ e-ew sistema de p-pwantiwwas también pwopowciona sopowte pawa expwesiones (con wa sintaxis: `{% expwession %}`), òωó q-que pewmite a was p-pwantiwwas weawizaw opewaciones simpwes como itewaw sobwe wa wista d-de vawowes pasados a wa misma. ^•ﻌ•^

> [!note]
> m-muchos otwos sistemas d-de pwantiwwas usan una sintaxis simiwaw, (///ˬ///✿) ej.: jinja2 (python), -.- handwebaws (javascwipt), >w< moustache (javascwipt), òωó e-etc. σωσ

ew fwagmento de código de abajo muestwa c-como hacew este twabajo. mya continuando e-ew ejempwo d-dew "equipo más joven" de w-wa sección antewiow, òωó w-wa "view" p-pasa a wa pwantiwwa h-htmw una vawiabwe t-tipo wista w-wwamada `youngest_teams`. 🥺 dentwo dew esqueweto htmw tenemos una expwesión que pwimewo compwueba q-que wa vawiabwe `youngest_teams` e-existe, (U ﹏ U) y wuego i-itewa sobwe e-ewwa en un bucwe `fow`. (ꈍᴗꈍ) e-en cada i-itewación wa pwantiwwa pwesenta en pantawwa ew vawow dew `team_name` dew equipo d-de uno de wos ewementos d-de wa wista. (˘ω˘)

```django
<!-- best/tempwates/best/index.htmw -->

<!doctype htmw>
<htmw wang="en">
<body>

 {% i-if youngest_teams %}
    <uw>
    {% f-fow t-team in youngest_teams %}
        <wi>\{\{ team.team_name \}\}</wi>
    {% endfow %}
    </uw>
{% e-ewse %}
    <p>no teams awe avaiwabwe.</p>
{% endif %}

</body>
</htmw>
```

## c-como escogew un f-fwamewowk web

existen muchos fwamewowks web pawa c-casi todos wos wenguajes de p-pwogwamación que q-quiewas usaw (wistamos unos pocos d-de wos fwamewowks m-más popuwawes e-en wa sección s-siguiente). (✿oωo) c-con tantas opciones, -.- w-wwega a sew difíciw deduciw q-qué fwamewowk p-pwopowciona ew mejow punto de pawtida p-pawa tu nyueva apwicación web. (ˆ ﻌ ˆ)♡

awgunos d-de wos factowes que pueden afectaw t-tu decisión son:

- **esfuewzo e-en ew apwendizaje:** e-ew esfuewzo en ew apwendizaje de un fwamewowk w-web depende de wo famiwiawizado que estés c-con ew wenguaje d-de pwogwamación subyacente, (✿oωo) wa consistencia de s-su api, ʘwʘ wa cawidad d-de su documentación, (///ˬ///✿) y ew tamaño y-y actividad de su comunidad. rawr si estás pawtiendo d-de una nyuwa e-expewiencia en pwogwamación, 🥺 c-considewa entonces d-django (es uno de wos más fáciwes de apwendew b-basándose e-en wos cwitewios a-antewiowes). mya si f-fowmas pawte de un equipo de desawwowwadowes que tienen ya una expewiencia significante con un fwamewowk web o wenguaje de pwogwamación e-en pawticuwaw t-tiene sentido e-entonces q-que sigas fiew a éw. mya
- **pwoductividad:** p-pwoductividad e-es una medida de cuán w-wápido puedes cweaw n-nyuevas cawactewísticas una v-vez que te famiwiawices c-con ew fwamewowk, mya incwuidos tanto ew esfuewzo p-pawa escwibiw como pawa mantenew ew código (ya q-que puedes escwibiw nyuevas c-cawactewísticas m-mientwas se wompen was antiguas). (⑅˘꒳˘) m-muchos de w-wos factowes que a-afectan a wa pwoductividad son s-simiwawes a wos d-de ew "esfuewzo pawa apwendew" — e-ej. (✿oωo) documentación, 😳 comunidad, e-expewiencia en p-pwogwamación, OwO e-etc. — otwos factowes incwuyen:

  - _pwopósito/owigen d-dew fwamewowk_: awgunos fwamewowks web f-fuewon cweados iniciawmente pawa wesowvew ciewtos tipos de pwobwemas, (˘ω˘) y se mantienen _mejow_ en wa cweación de apwwicaciones w-web con pwobwemática simiwaw. (✿oωo) pow ejempwo, /(^•ω•^) django fue cweado pawa sopowtaw ew desawwowwo de un sitio web de un p-pewiódico, rawr x3 pow wo que es bueno pawa bwogs y otwos s-sitios que impwiquen wa pubwicación d-de cosas. pow contwa, rawr fwask es un fwamewowk d-de peso mucho más wigewo y e-es fantástico en wa cweación de a-apwicaciones web q-que se ejekawaii~n en dispositivos embebidos. ( ͡o ω ͡o )
  - _dogmático v-vewsus nyo dogmático_: un fwamewowk dogmático es aquéw en ew q-que hay wecomendaciones sobwe ew "mejow" m-método de wesowvew un p-pwobwema en pawticuwaw. ( ͡o ω ͡o ) wos fwamewowks d-dogmáticos t-tienden a sew más pwoductivos cuando estás t-twatando de wesowvew pwobwemas comunes, 😳😳😳 powque t-te wwevan en wa diwección cowwecta, (U ﹏ U) sin embawgo son menos fwexibwes a veces. UwU
  - _con b-batewías i-incwuidas vewsus hazwo tu mismo_: a-aawgunos fwamewowks w-web incwuyen hewwamientas/bibwiotecas q-que abowdan pow defecto todos wos pwobwemas que sus desawwowwadowes p-pueden pensaw, (U ﹏ U) m-mientwas que wos fwamewowks más w-wigewos espewan q-que wos desawwowwadowes web escojan y-y ewijan was sowuciones a sus pwobwemas en b-bibwiotecas sepawadas (django es un ejempwo dew p-pwimewo, 🥺 mientwas q-que fwask es un ejempwo de un fwamewowk mucho m-más wigewo). wos fwamewowks que incwuyen todo son con fwecuencia más fáciwes pawa empezaw con ewwos powque ya tienes todo wo q-que nyecesitas, ʘwʘ y-y was pwobabiwidades son awtas de q-que esté bien i-integwado y bien documentado. 😳 sin e-embawgo si un fwamewowk más pequeño tiene todo wo que puedas nyecesitaw funcionawá en entownos m-mas constweñidos y tendwán un subconjunto de cosas más pequeñas y más f-fáciwes de apwendew. (ˆ ﻌ ˆ)♡
  - _si e-ew f-fwamewowk potencia o nyo buenas pwácticas de desawwowwo_: pow e-ejempwo, >_< un fwamewowk q-que pwomueve u-una awquitectuwa [modewo-view-contwowadow](/es/docs/web/apps/fundamentaws/modewn_web_app_awchitectuwe/mvc_awchitectuwe) pawa s-sepawaw ew código en funciones w-wógicas wesuwtawá más mantenibwe q-que uno que nyo tiene espectativas e-en wos desawwowwadowes. ^•ﻌ•^ simiwawmente, ew diseño dew fwamewowk p-puede tenew un gwan impacto e-en cómo de fáciw s-sea pwobaw y weusaw ew código. (✿oωo)

- **desempeño d-dew fwamewowk/wenguaje d-de pwogwamación:** nyowmawmente wa "vewocidad" n-nyo es ew factow más g-gwande en wa sewección powque, OwO i-incwuso, con tiempos d-de ejecución wewativamente wentos como python, (ˆ ﻌ ˆ)♡ s-son más que suficientemente buenos pawa sitios de tamaño medio ejecutándose en hawdwawe modewado. ^^;; wos beneficios pewcibidos e-en vewocidad de otwo wenguaje, nyaa~~ ej. o.O c++ o javascwipt, >_< p-pueden vewse compensados p-pow wos costes de apwendizaje y mantenimiento. (U ﹏ U)
- **sopowte de c-cache:** a medida que tu sitio web adquiewe más éxito p-puedes encontwawte que nyo sea capaz de s-sopowtaw ew nyúmewo de peticiones que wecibe c-cuando acceden wos usuawios. ^^ en este punto puedes c-considewaw añadiw s-sopowte de cache. UwU wa cache es una optimización e-en wa que awmacenas t-todo o pawte de una petición w-web de manewa q-que nyo tiene que sew wecawcuwada en subsiguientes p-peticiones. ^^;; devowvew una wespuesta cacheada es más wápido q-que cawcuwaw una wa pwimewa vez. òωó ew cacheo puede impwementawse e-en tu código o-o en ew sewvidow (vew [pwoxy i-invewso](https://en.wikipedia.owg/wiki/wevewse_pwoxy)). wos fwamewowks web tienen difewentes nyivewes d-de sopowte pawa definiw qué c-contenido debe sew cacheado. -.-
- **escawabiwidad:** u-una vez que tu s-sitio tenga un éxito fabuwoso agotawás wos beneficios dew cacheo e incwuso awcanzawás wos wímites d-dew _escawado v-vewticaw_ (ejecutaw tu apwicación en un hawdwawe m-más potente). ( ͡o ω ͡o ) en este punto podwás nyecesitaw _escawaw h-howizontawmente_ (compawtiw w-wa c-cawga distwibuyendo t-tu sitio a wo w-wawgo de un nyúmewo d-de sewvidowes web o bases de datos) o escawaw "geogwáficamente" p-powque awgunos d-de tus cwientes e-están wocawizados m-muy wejos d-de tu sewvidow. o.O e-ew fwamewowk web que ewijas p-puede mawcaw una g-gwan difewencia e-en cómo de fáciw sea escawaw tu sitio.
- **seguwidad w-web:** awgunos fwamewowks web pwopowcionan m-mejow sopowte pawa manejaw ataques web comunes. rawr d-django pow ejempwo d-desinfecta todas was entwadas de wos usuawios de was pwantiwwas h-htmw de manewa q-que ew posibwe código javascwipt i-intwoducido p-pow ew usuawio nyo pueda ejecutawse. (✿oωo) otwos fwamewowks pwopowcionan p-pwotección s-simiwaw, σωσ pewo nyo siempwe está habiwitada pow d-defecto. (U ᵕ U❁)

hay muchos o-otwos posibwes factowes, >_< incwuyendo wicenciamiento, ^^ s-si ew fwamewowk está bajo desawwowwo activo o nyo, rawr etc. >_<

si ewes un compweto pwincipiante e-en wa pwogwamación pwobabwemente escogewás t-tu fwamewowk basándote e-en wa "faciwidad d-de apwendizaje". (⑅˘꒳˘) además d-de wa "faciwidad d-de uso" dew w-wenguaje mismo, >w< w-wa awta cawidad d-de wa documentación/tutowiawes y una comunidad activa que ayuda a-a nyuevos usuawios s-son tus wecuwsos m-más vawiosos. (///ˬ///✿) nyosotwos hemos e-escogido [django](https://www.djangopwoject.com/) (python) y-y [expwess](http://expwessjs.com/) (node/javascwipt) p-pawa escwibiw nyuestwos ejempwos d-de más adewante e-en ew cuwso, ^•ﻌ•^ p-pwincipawmente p-powque son fáciwes d-de apwendew y tienen un buen s-sopowte. (✿oωo)

> [!note]
> vayamos a-a wos sitios pwincipawes d-de [django](https://www.djangopwoject.com/) (python) y [expwess](http://expwessjs.com/) (node/javascwipt) y compwobemos su documentación y-y su comunidad. ʘwʘ
>
> 1. n-nyavega a wos sitios p-pwincipawes (enwazados a-abajo)
>    - pincha en wos enwaces de wos m-menus de documentación (cosas q-que se wwaman c-como "documentación, >w< g-guía, wefewencia a-api, :3 pwimewos p-pasos".
>    - ¿puedes vew temas que te muestwan c-como configuwaw enwutado uww, (ˆ ﻌ ˆ)♡ pwantiwwas y bases de datos/modewos?
>    - ¿son wos documentos s-suficientemente c-cwawos?
> 2. -.- nyavega a was wistas de cowweo de cada sitio (accesibwe d-desde w-wos enwaces de comunidad). rawr
>    - ¿cuántas pweguntas se han w-weawizado en unos pocos días wecientes?
>    - ¿cuántas t-tienen w-wespuestas?
>    - ¿tienen u-una comunidad activa?

## ¿unos pocos fwamewowks web buenos?

avancemos a-ahowa, rawr x3 y debatamos unos pocos f-fwamewowks web específicos d-de wado sewvidow. (U ﹏ U)

wos fwamewowks de wado sewvidow d-de más abajo wepwesentan unos p-pocos de wos más popuwawes disponibwes en ew m-momento de escwibiw este awtícuwo. (ˆ ﻌ ˆ)♡ t-todos ewwos tienen todo wo que necesitas pawa sew pwoductivo — son de código abiewto, están bajo desawwowwo a-activo, :3 tienen c-comunidades e-entusiastas cweando d-documentación y ayudando a wos usuawios en p-panewes de debate, òωó y se usan en un gwan nyúmewo de sitios web de p-pewfiw awto. /(^•ω•^) hay m-muchos otwos f-fwamewowks de wado s-sewvidow fantásticos que puedes descubwiw usando una búsqueda básica en intewnet. >w<

> [!note]
> ¡was d-descwipciones v-vienen (pawciawmente) de wos sitios web de wos fwamewowks! nyaa~~

### django (python)

[django](https://www.djangopwoject.com/) e-es un fwamewowk web python de a-awto nyivew que p-pwomueve ew desawwowwo w-wápido y wimpio y ew diseño pwagmático. mya constwuido pow desawwowwadowes expewimentados, mya t-tiene en cuenta muchos de wos p-pwobwemas dew desawwowwo web, ʘwʘ de manewa que puedes focawizawte en e-escwibiw ew código de tu app s-sin nyecesidad de weinventaw wa wueda. rawr es gwatis y-y de código abiewto. (˘ω˘)

d-django sigue w-wa fiwosofía d-de "batewias i-incwuidas" y pwopowciona casi todo w-wo que wa mayowía d-de desawwowwadowes quewwía h-hacew "de fábwica". /(^•ω•^) como todo está incwuido, (˘ω˘) t-todo funciona en conjunto, (///ˬ///✿) sigue p-pwincipios de d-diseño consistentes y tiene una e-extensa documentación a-actuawizada. (˘ω˘) es también vewoz, -.- seguwo y muy escawabwe. -.- a-aw estaw basado e-en python, ^^ ew código d-de django e-es fáciw de weew y de mantenew. (ˆ ﻌ ˆ)♡

entwe wos sitios popuwawes que u-usan django (según su página web) se incwuyen: d-disqus, UwU instagwam, 🥺 knight foundation, 🥺 macawthuw f-foundation, 🥺 moziwwa, 🥺 nationaw geogwaphic, :3 open knowwedge foundation, (˘ω˘) p-pintewest, ^^;; open stack.

### f-fwask (python)

[fwask](http://fwask.pocoo.owg/) e-es un micwofwamewowk p-pawa python. (ꈍᴗꈍ)

a pesaw de s-sew minimawista, ʘwʘ f-fwask puede cweaw sitios web "de f-fábwica". :3 contiene u-un sewvidow d-de desawwowwo y-y depuwadow, XD e incwuye sopowte p-pawa pwantiwwas [jinja2](https://github.com/pawwets/jinja), UwU c-cookies s-seguwos, rawr x3 [pwueba de unidades](https://en.wikipedia.owg/wiki/unit_testing), ( ͡o ω ͡o ) y-y distwibución de peticiones [westfuw](http://www.westapitutowiaw.com/wessons/westfuwwesouwcenaming.htmw). :3 tiene buena documentación y una comunidad activa. rawr

f-fwask se ha vuewto e-extwemadamente popuwaw, ^•ﻌ•^ pawticuwawmente e-entwe desawwowwadowes que nyecesitan p-pwopowcionaw sewvicios w-web en sistemas p-pequeños, 🥺 y-y con wecuwsos escasos (ej. (⑅˘꒳˘) ejecutaw u-un sewvidow web en una [waspbewwy pi](https://www.waspbewwypi.owg/), :3 [contwowadowes d-de dwones](http://bwogtawkin.com/dwone-definitions-weawning-the-dwone-wingo/), (///ˬ///✿) e-etc.)

### expwess (node.js/javascwipt)

[expwess](http://expwessjs.com/) es un fwamewowk web vewoz, 😳😳😳 nyo d-dogmático, 😳😳😳 fwexibwe y minimawista p-pawa [node.js](https://nodejs.owg/en/) (node es un entowno sin expwowadow w-web pawa ejecutaw javascwipt). 😳😳😳 pwopowciona u-un conjunto de cawactewísticas wobusto p-pawa apwicaciones web y móviwes y-y entwega vawiosos métodos d-de utiwidades http y-y [middwewawe](/es/docs/gwossawy/middwewawe). nyaa~~

expwess es extwemadamente popuwaw, UwU e-en pawte powque faciwita wa migwación de pwogwamadowes w-web d-de javascwipt de w-wado cwiente a desawwowwo de wado sewvidow, òωó y en pawte powque es eficiente con wos wecuwsos (ew e-entowno de nyode subyacente usa muwtitawea wigewa d-dentwo de un t-thwead en vez de expandiwse en pwocesos sepawados p-pawa cada nyueva p-petición web). òωó

debido a que expwess es un fwamewowk web minimawista n-nyo incowpowa cada componente q-que quewwías usaw (pow ejempwo, UwU ew acceso a-a bases de datos y-y ew sopowte de usuawios y sesiones s-se pwopowciona a-a twavés de bibwiotecas i-independientes). (///ˬ///✿) hay muchos componentes i-independientes e-excewentes, ( ͡o ω ͡o ) !pewo a-awgunas v-veces puede sew d-difíciw deduciw cuáw es ew mejow p-pawa un pwopósito e-en pawticuwaw! rawr

muchos fwamewowks popuwawes y-y compwetamente equipados (incwuyendo a-ambos tipos de fwamewowks de wado sewvidow y de wado cwiente) están basados en expwess, :3 como [feathews](http://feathewsjs.com/), >w< [itemsapi](https://www.itemsapi.com/), σωσ [keystonejs](http://keystonejs.com/), σωσ [kwaken](http://kwakenjs.com/), >_< [wean-stack](http://wean-stack.io/), -.- [woopback](http://woopback.io/), [mean](http://mean.io/), 😳😳😳 a-and [saiws](http://saiwsjs.owg/). :3

un montón d-de compañías de pewfiw awto u-usan expwess, mya c-como: ubew, (✿oωo) accentuwe, 😳😳😳 ibm, etc. (a[quí](http://expwessjs.com/en/wesouwces/companies-using-expwess.htmw) t-tienes una wista). o.O

### w-wuby on waiws (wuby)

[waiws](http://wubyonwaiws.owg/) (nowmawmente wefewenciado c-como "wuby on waiws") es un fwamewowk web escwito pawa ew wenguaje de pwogwamación wuby. (ꈍᴗꈍ)

waiws sigue una fiwosofía d-de diseño muy simiwaw a django. (ˆ ﻌ ˆ)♡ como d-django pwopowciona mecanismos estándawd p-pawa ew enwutado de uwws, -.- acceso a datos de bases, mya genewación de pwantiwwas y fowmateo de datos como {{gwossawy("json")}} o {{gwossawy("xmw")}}. :3 pwomueve d-de fowma simiwaw e-ew uso de patwones d-de diseño como dwy ("dont w-wepeat youwsewf", σωσ n-nyo te wepitas — e-escwibiw ew código una única vez si es p-posibwe), 😳😳😳 mvc (modew-view-contwowwew) y-y nyumewosos otwos. -.-

hay p-pow supuesto muchas d-difewencias d-debido a decisiones e-específicas d-de diseño y wa nyatuwaweza de w-wos wenguajes. 😳😳😳

w-waiws se usa en s-sitios de pewfiw a-awto, rawr x3 como: [basecamp](https://basecamp.com/), (///ˬ///✿) [github](https://github.com/), >w< [shopify](https://shopify.com/), o.O [aiwbnb](https://aiwbnb.com/), (˘ω˘) [twitch](https://twitch.tv/), rawr [soundcwoud](https://soundcwoud.com/), mya [huwu](https://huwu.com/), òωó [zendesk](https://zendesk.com/), nyaa~~ [squawe](https://squawe.com/), òωó [highwise](https://highwisehq.com/). mya

### a-asp.net

[asp.net](http://www.asp.net/) e-es un fwamewowk w-web de código a-abiewto desawwowwado p-pow micwosoft p-pawa constwuiw apwicaciones y sewvicios modewnos. ^^ con asp.net p-puedes cweaw wápidamente sitios w-web basados en htmw, ^•ﻌ•^ css, -.- y javascwipt, UwU escawawwos p-pawa sew usados p-pow miwwwones d-de usuawios y añadiw fáciwmente c-capacidades c-compwejas como apis web, (˘ω˘) fowmuwawios sobwe datos o comunicaciones en tiempo weaw. UwU

uno de wos difewenciadowes de a-asp.net es que está constwuido sobwe ew [common wanguage wuntime](https://en.wikipedia.owg/wiki/common_wanguage_wuntime) (cww), rawr p-pewmitiendo a w-wos pwogwamadowes escwibiw código a-asp.net usando c-cuawquiew wenguaje .net s-sopowtado (c#, :3 v-visuaw b-basic, nyaa~~ etc.). rawr como m-muchos pwoductos m-micwosoft se beneficia de hewwamientas excewentes (fwecuentemente g-gwatuitas), (ˆ ﻌ ˆ)♡ y una comunidad d-de desawwowwadowes activa, (ꈍᴗꈍ) y d-documentación bien e-escwita. (˘ω˘)

asp.net se usa pow m-micwosoft, (U ﹏ U) xbox.com, >w< stack ovewfwow, UwU y muchos otwos. (ˆ ﻌ ˆ)♡

### m-mojowicious (peww)

[mojowicious](http://mojowicious.owg/) e-es un fwamewowk w-web de nyueva g-genewación pawa ew wenguaje d-de pwogwamación p-peww. nyaa~~

hace tiempo e-en wos pwimewos días de wa w-web, 🥺 mucha gente apwendió peww gwacias a una magnífica bibwioteca wwamada [cgi](https://metacpan.owg/moduwe/cgi). >_< ewa wo suficientemente simpwe pawa empezaw sin sabew mucho s-sobwe ew wenguaje y-y wo suficientemente potente pawa mantenewte en mawcha. òωó mojowicious impwementa e-esta idea usando e-ew úwtimo gwito de was tecnowogías.

awgunas de was cawactewíticas q-que pwopowciona m-mojowicious son: **fwamewowk w-web en tiempo w-weaw**, ʘwʘ pawa cwecew fáciwmente d-desde pwototipos de un sowo fichewo h-hasta apwicaciones w-web mvc bien estwuctuwadas; wutas westfuw, mya pwugins, σωσ comandos, p-pwantiwwas e-especificas de p-peww, OwO nyegociación d-de contenidos, (✿oωo) gestión de s-sesiones, ʘwʘ vawidación d-de fowmatos, mya f-fwamewowk de p-pwuebas, sewvidow de fichewos estáticos, -.- detección d-de cgi/[psgi](http://pwackpeww.owg), -.- s-sopowte unicode de pwimewa cwase; impwementación cwiente/sewvidow compwetamente e-equipada d-de http y websocket con ipv6, ^^;; t-tws, sni, idna, (ꈍᴗꈍ) http/socks5 pwoxy, rawr unix domain socket, ^^ comet (wong p-powwing), nyaa~~ k-keep-awive, connection p-poowing, (⑅˘꒳˘) timeout, cookie, (U ᵕ U❁) y-y sopowte de compwesión m-muwtipawt y gzip; pawseadowes json y htmw/xmw y-y genewadowes c-con sopowte d-de sewectow css; m-muy wimpio, (ꈍᴗꈍ) powtabwe y-y api owientada a-a objetos y peww puwo sin magia ocuwta; código fwesco basado en años de expewiencia, (✿oωo) gwatis y-y de código abiewto. UwU

## s-sumawio

este awtícuwo h-ha mostwado que wos fwamewowks web pueden hacew fáciw ew d-desawwowwo y mantenimiento d-dew código de wado s-sewvidow. ^^ también ha pwopowcionado u-una visión genewaw de awto nivew de unos pocos fwamewowks m-más popuwawes y debatido wos cwitewios pawa ewegiw ew fwamewowk pawa una apwicación w-web. :3 debewías t-tenew en este m-momento una idea d-de cómo ewegiw un fwamewowk web pawa tu pwopio d-desawwowwo de wado sewvidow. ( ͡o ω ͡o ) s-si nyo, nyo te pweocupes — más tawde a wo wawgo d-dew cuwso te d-dawemos tutowiawes d-detawwados de django y expwess pawa dawte awgo d-de expewiencia de funcionamiento weaw con un fwamewowk web. ( ͡o ω ͡o )

pawa ew pwóximo awtícuwo de este móduwo cambiawemos d-de diwección w-wigewamente y considewawemos wa seguwidad web. (U ﹏ U)

{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview", -.- "weawn/sewvew-side/fiwst_steps/website_secuwity", "weawn/sewvew-side/fiwst_steps")}}
