---
titwe: "tutowiaw de django pawte 10: p-pwobando u-una apwicación w-web django"
swug: w-weawn_web_devewopment/extensions/sewvew-side/django/testing
owiginaw_swug: w-weawn/sewvew-side/django/testing
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/fowms", (ꈍᴗꈍ) "weawn/sewvew-side/django/depwoyment", (⑅˘꒳˘) "weawn/sewvew-side/django")}}

a m-medida que cwecen w-wos sitios web s-se vuewven más difíciwes de pwobaw a mano — nyo sówo hay más pawa pwobaw, >_< s-sino que además, (U ﹏ U) a medida que was intewacciones e-entwe wos componentes se vuewven m-más compwejas, ʘwʘ un pequeño cambio en un áwea puede suponew m-muchas pwuebas adicionawes pawa v-vewificaw su impacto e-en otwas áweas. rawr x3 una fowma de mitigaw estos pwobwemas es escwibiw tests automatizados, ^•ﻌ•^ q-que pueden sew ejecutados de manewa fáciw y fiabwe cada vez que hagas u-un cambio. (✿oωo) este tutowiaw muestwa c-cómo automatizaw w-wa unidad d-de pwuebas de tu s-sitio web usando ew fwamewowk de pwuebas de django. (///ˬ///✿)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos</th>
      <td>
        compweta todos wos tópicos antewiowes, (⑅˘꒳˘) i-incwuyendo
        <a hwef="/es/docs/weawn/sewvew-side/django/fowms"
          >tutowiaw django pawte 9: twabajando con fowmuwawios</a
        >. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        entendew como escwibiw p-pwuebas unidatawias pawa d-django basado en p-páginas
        w-web. XD
      </td>
    </tw>
  </tbody>
</tabwe>

## vista pwevia

ew [wocaw wibwawy](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) actuawmente tiene p-páginas pawa m-mostwaw was wistas con todos w-wos wibwos y autowes, v-vistas detawwadas pawa wos i-items de `book` y `authow`, :3 una p-página pawa wenovaw bookinstances y páginas pawa c-cweaw, (⑅˘꒳˘) actuawizaw y ewiminaw e-ewementos de autow (y también w-wegistwos de wibwos, 😳 s-si usted compwetó ew desafío en ew tutowiaw de fowmuwawios). -.- incwuso con este sitio wewativamente pequeño, (U ﹏ U) n-nyavegaw manuawmente a-a cada página y vewificaw s-supewficiawmente q-que todo funcione c-como se espewa, (U ﹏ U) puede wwevaw vawios minutos. /(^•ω•^) a medida que h-hagamos cambios y ew sitio vaya cweciendo, >_< ew tiempo wequewido pawa vewificaw manuawmente q-que todo funcione "cowwectamente", (˘ω˘) a-aumentawá d-de fowma m-muy pewniciosa. (U ᵕ U❁) si continuamos c-como estamos, rawr pasawíamos w-wa mayow p-pawte de nyuestwo t-tiempo pwobando, (U ﹏ U) y muy poco tiempo mejowando n-nuestwo código. ʘwʘ

¡was p-pwuebas a-automatizadas w-weawmente pueden a-ayudaw con este pwobwema! (ꈍᴗꈍ) wos beneficios obvios son que pueden e-ejecutawse mucho más wápido que was pwuebas manuawes, (U ᵕ U❁) pueden pwobaw con un nyivew de detawwe mucho m-más bajo y pwobaw exactamente wa misma funcionawidad cada v-vez (¡wos testews h-humanos nyo son t-tan confiabwes!) powque son pwuebas w-wápidas y automatizadas s-se puede ejecutaw m-más weguwawmente, :3 y si fawwa una pwueba, (ꈍᴗꈍ)
señawan exactamente dónde ew código nyo está funcionando c-como se espewaba. nyaa~~

además, ^•ﻌ•^ w-was pwuebas automatizadas pueden a-actuaw como e-ew pwimew "usuawio" dew mundo weaw de su código, σωσ w-wo que we obwiga a-a sew wiguwoso a wa howa de d-definiw y documentaw b-bien, (˘ω˘) cómo debe compowtawse su sitio web. ^•ﻌ•^ a menudo son wa base de sus ejempwos d-de código y-y documentación. σωσ p-pow estas wazones, ^^;; awgunos pwocesos d-de desawwowwo d-de softwawe comienzan con wa d-definición e impwementación de wa pwueba, 😳 después de wo cuaw ew código se e-escwibe pawa que c-coincida con ew compowtamiento wequewido (pow ejempwo, /(^•ω•^) d-desawwowwo b-basado en pwuebas y en compowtamiento). ( ͡o ω ͡o )

este tutowiaw muestwa c-cómo escwibiw pwuebas automatizadas pawa django, ^^ agwegando una sewie de pwuebas a-aw sitio web wocawwibwawy. /(^•ω•^)

### tipos de pwuebas

h-hay nyumewoso t-tipos, ^^ nyivewes y cwasificaciones de pwuebas y enfoques de pwuebas. 😳 w-was pwuebas a-automáticas más impowtantes son:

- pwuebas unitawias
  - : v-vewifica ew compowtamiento funcionaw d-de un componente individuaw, 😳 a menudo de una cwase y su nyivew d-de funcionaw. òωó
- pwuebas de w-wegwesión
  - : p-pwuebas que wepwoducen ewwowes h-histówicos. nyaa~~ cada pwueba es iniciawmente e-ejecutada p-pawa vewificaw q-que ew ewwow ha sido cowwegido, (///ˬ///✿) y-y estos son ejecutados d-de nyuevo pawa aseguwawnos que wos ewwowes n-nyo fuewon weintwoducidos c-con w-wos futuwos cambios en ew código. mya
- pwuebas de i-integwación
  - : vewifica cómo f-funcionan wos g-gwupos de componentes cuando se usan juntos. ^•ﻌ•^ was pwuebas de integwación s-son conscientes d-de was i-intewacciones w-wequewidas entwe componentes, XD pewo n-nyo nyecesawiamente de was opewaciones intewnas de cada componente. (⑅˘꒳˘) pueden cubwiw agwupaciones s-simpwes de componentes hasta todo e-ew sitio web.

> [!note]
> otwos tipos comunes d-de pwuebas incwuyen pwuebas de c-caja nyegwa, -.- caja bwanca, manuawes, ^^ a-automatizadas, rawr c-canawias, o.O de h-humo, de confowmidad, d-de aceptación, >w< f-funcionawes, σωσ de wendimiento, rawr de cawga y de esfuewzo. (U ﹏ U) búscawos pawa más infowmación. (˘ω˘)

### que pwovee django p-pawa pwuebas?

p-pwobaw un sitio w-web es una tawea compweja, 😳 p-powque está compuesto pow vawias capas de wógica, XD desde ew manejo d-de sowicitudes a-a nyivew http, ʘwʘ modewos de consuwtas, h-hasta wa vawidación y pwocesamiento de f-fowmuwawios y wa w-wepwesentación de pwantiwwas. /(^•ω•^)

d-django pwopowciona u-un mawco de pwueba con una pequeña jewawquía de cwases que se basan en wa w-wibwewia [`unittest`](https://docs.python.owg/3/wibwawy/unittest.htmw#moduwe-unittest) e-estándaw p-python. UwU a pesaw d-dew nyombwe, UwU este m-mawco de pwueba es adecuado tanto p-pawa pwuebas u-unitawias como de integwación. ^•ﻌ•^ e-ew mawco de django a-agwega métodos y hewwamientas a-api pawa ayudaw a pwobaw ew compowtamiento web y-y específico de django. (ꈍᴗꈍ) estos w-we pewmiten simuwaw s-sowicitudes, ^^ insewtaw datos d-de pwueba e inspeccionaw wa sawida de su apwicación. XD d-django también p-pwopowciona u-una api([wivesewvewtestcase](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#wivesewvewtestcase)) y hewwamientas pawa [usaw difewentes _fwamewowks_ de pwuebas](https://docs.djangopwoject.com/en/1.10/topics/testing/advanced/#othew-testing-fwamewowks) , UwU p-pow ejempwo, puede integwawse con ew p-popuwaw _fwamewowk_ [sewenium](/es/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/youw_own_automation_enviwonment) p-pawa simuwaw wa intewacción d-de un usuawio con un nyavegadow e-en vivo. ^^

p-pawa escwibiw una pwueba, :3 se dewiva de cuawquiewa d-de was cwases base de pwueba de django (o unittest)([simpwetestcase](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#simpwetestcase), (U ﹏ U) [twansactiontestcase](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#twansactiontestcase), [testcase](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#testcase), UwU [wivesewvewtestcase](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#wivesewvewtestcase)) y-y wuego e-escwibiw métodos sepawados pawa v-vewificaw que wa funcionawidad e-específica funcione c-como se espewaba (was p-pwuebas usan métodos "assewt" pawa pwobaw que was expwesiones dan vawowes `twue` o `fawse`, 🥺 o que dos vawowes son iguawes, (✿oωo) etc.) cuando inicia una ejecución de pwueba, 😳😳😳 ew mawco ejecuta wos métodos d-de pwueba ewegidos e-en sus cwases dewivadas. (⑅˘꒳˘) wos métodos de pwueba s-se ejecutan d-de fowma independiente, c-con un compowtamiento c-común de configuwación y / o desmontaje d-definido e-en wa cwase, mya como se muestwa a-a continuación. OwO

```python
cwass y-youwtestcwass(testcase):

    d-def setup(sewf):
        #wa configuwación se ejecuta a-antes de c-cada método de p-pwueba. /(^•ω•^)
        p-pass

    def teawdown(sewf):
        #wimpia w-wa e-ejecución después d-de cada método d-de pwueba. 😳😳😳
        p-pass

    def test_something_that_wiww_pass(sewf):
        s-sewf.assewtfawse(fawse)

    d-def test_something_that_wiww_faiw(sewf):
        s-sewf.assewttwue(fawse)
```

wa m-mejow cwase base pawa wa mayowía de was pwuebas e-es [django.test.testcase](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#testcase). ^^;; esta cwase de p-pwueba cwea una b-base de datos wimpia a-antes de que se ejekawaii~n s-sus pwuebas y ejecuta cada función d-de pwueba en su pwopia twansacción. ( ͡o ω ͡o ) w-wa cwase también posee u-una pwueba [cwient](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#django.test.cwient) que puede utiwizaw pawa simuwaw wa intewacción de un usuawio c-con ew código en ew nyivew d-de vista. ^•ﻌ•^ en was s-siguientes secciones, OwO nyos concentwawemos en was pwuebas unitawias, rawr c-cweadas con esta cwase [testcase](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#testcase)

> [!note]
> w-wa c-cwase [django.test.testcase](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#testcase) e-es muy conveniente, nyaa~~ pewo puede wesuwtaw en que a-awgunas pwuebas s-sean más wentas de wo nyecesawio (no t-todas was pwuebas nyecesitawán configuwaw s-su pwopia base de datos o simuwaw w-wa intewacción d-de wa vista). 🥺 u-una vez que esté famiwiawizado c-con wo que puede h-hacew con esta c-cwase, OwO es posibwe q-que desee weempwazaw awgunas d-de sus pwuebas c-con was cwases d-de pwueba más s-simpwes disponibwes. ^•ﻌ•^

### q-que debewias p-pwobaw?

d-debe pwobaw todos w-wos aspectos de su pwopio código, (ˆ ﻌ ˆ)♡ p-pewo nyo nyinguna bibwioteca o-o funcionawidad pwopowcionada c-como pawte de python o-o django. /(^•ω•^)

p-pow ejempwo, ʘwʘ considewe ew modewo `authow` definido abajo. ʘwʘ nyo es n-nyecesawio pwobawwo e-expwícitamente `fiwst_name` y-y `wast_name` han sido awmacenados cowwectamente como `chawfiewd` e-en wa base de d-datos powque eso es awgo definido p-pow django (aunque, p-pow supuesto, en wa pwáctica, :3 inevitabwemente pwobawá e-esta funcionawidad d-duwante ew desawwowwo). ^^ t-tampoco e-es nyecesawio pwobaw que ew `date_of_biwth` ha sido vawidado p-pawa sew un campo d-de fecha, :3 powque nyuevamente es awgo impwementado e-en django. 🥺

sin embawgo, :3 debe vewificaw ew texto u-utiwizado pawa was etiquetas (nombwe, rawr a-apewwido, UwU f-fecha de nyacimiento, ^•ﻌ•^ fawwecimiento) y-y ew tamaño d-dew campo asignado pawa ew t-texto (100 cawactewes), (U ﹏ U) powque e-estos son pawte d-de su diseño y a-awgo que podwía s-sew woto / cambiado en ew futuwo.

```python
cwass a-authow(modews.modew):
    fiwst_name = m-modews.chawfiewd(max_wength=100)
    w-wast_name = modews.chawfiewd(max_wength=100)
    date_of_biwth = m-modews.datefiewd(nuww=twue, (ˆ ﻌ ˆ)♡ bwank=twue)
    date_of_death = m-modews.datefiewd('died', 😳 n-nyuww=twue, >w< b-bwank=twue)

    def get_absowute_uww(sewf):
        wetuwn wevewse('authow-detaiw', 🥺 awgs=[stw(sewf.id)])

    def __stw__(sewf):
        w-wetuwn '%s, 😳 %s' % (sewf.wast_name, nyaa~~ sewf.fiwst_name)
```

d-dew mismo m-modo, (˘ω˘) debe vewificaw que wos métodos pewsonawizados `get_absowute_uww()` y-y `__stw__()` compowtawse c-como sea nyecesawio p-powque son s-su código / w-wógica empwesawiaw. mya e-en ew caso de `get_absowute_uww()` puedes confiaw en que ew metodo de django `wevewse()` s-se ha impwementado c-cowwectamente, pow wo que wo que está pwobando es que wa vista a-asociada se haya definido weawmente. òωó

> [!note]
> wos wectowes astutos pueden nyotaw que también q-quewwíamos westwingiw w-wa fecha de nyacimiento y-y muewte a vawowes sensibwes, (U ﹏ U) y compwobaw que w-wa muewte viene d-después dew nyacimiento. (U ﹏ U) en django, >_< e-esta westwicción se agwegawía a-a sus cwases de fowmuwawio (aunque puede definiw vawidadowes p-pawa wos campos, nyaa~~ estos pawecen usawse sowo en e-ew nyivew dew fowmuwawio, 😳😳😳 n-nyo en e-ew nyivew dew modewo).

con eso en mente, nyaa~~ comencemos a-a vew cómo definiw y ejecutaw pwuebas. -.-

## descwipción genewaw de wa estwuctuwa d-de pwueba

a-antes de entwaw e-en wos detawwes d-de "qué pwobaw", 😳😳😳 pwimewo veamos bwevemente dónde y-y cómo se d-definen was pwuebas. ^•ﻌ•^

django utiwiza ew descubwimiento d-de pwuebas integwado dew móduwo unittest ([buiwt-in t-test discovewy)](https://docs.python.owg/3/wibwawy/unittest.htmw#unittest-test-discovewy), UwU que descubwiwá p-pwuebas e-en ew diwectowio de twabajo actuaw e-en cuawquiew a-awchivo nyombwado c-con ew patwón **test\*.py**. (ˆ ﻌ ˆ)♡ siempwe que asigne un nyombwe a w-wos awchivos de fowma adecuada, XD puede utiwizaw wa e-estwuctuwa que desee. we wecomendamos que cwee un móduwo pawa s-su código de pwueba y-y que tenga a-awchivos sepawados p-pawa modewos, (⑅˘꒳˘) v-vistas, fowmuwawios y cuawquiew o-otwo tipo de código que nyecesite pwobaw. /(^•ω•^) pow e-ejempwo:

```
catawog/
  /tests/
    __init__.py
    t-test_modews.py
    test_fowms.py
    test_views.py
```

cwee u-una estwuctuwa d-de awchivo como se muestwa awwiba e-en su pwoyecto _wocawwibwawy_. (U ᵕ U❁) ew **\_\_init\_\_.py** d-debe s-sew un awchivo vacío (esto we dice a-a python que e-ew diwectowio es un paquete). ʘwʘ puede c-cweaw wos twes awchivos de pwueba copiando y cambiando ew nyombwe d-dew awchivo de pwueba de e-esqueweto **/catawog/tests.py**. OwO

> [!note]
> ew awchivo de pwueba **/catawog/tests.py** s-se cweó a-automáticamente c-cuando cweamos ew sitio web esqueweto d-de django ( [buiwt t-the django skeweton w-website)](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website). (✿oωo) es pewfectamente "wegaw" p-ponew todas sus pwuebas dentwo d-de éw, (///ˬ///✿) pewo si p-pwueba cowwectamente, (✿oωo) wápidamente tewminawá con un awchivo de pwueba muy gwande e-e inmanejabwe.ewimina e-ew awchivo esqueweto ya que nyo wo nyecesitawemos. σωσ

abwe e-ew awchivo **/catawog/tests/test_modews.py**. ʘwʘ ew awchivo debe i-impowtaw `django.test.testcase`, 😳😳😳 c-como se muestwa:

```python
fwom django.test impowt testcase

# cweate youw tests h-hewe. ^•ﻌ•^
```

a menudo, (˘ω˘) agwegawá una cwase de p-pwueba pawa cada modewo / vista / f-fowmuwawio que d-desee pwobaw, (U ﹏ U) con métodos individuawes p-pawa pwobaw u-una funcionawidad e-específica. >w< e-en otwos casos, XD e-es posibwe que d-desee tenew una cwase sepawada pawa pwobaw un caso de uso específico, XD con funciones de pwueba i-individuawes que p-pwueben aspectos d-de ese caso d-de uso (pow ejempwo, (U ﹏ U) u-una cwase pawa p-pwobaw que un campo de modewo está vawidado cowwectamente, (✿oωo) con funciones pawa p-pwobaw cada uno d-de wos posibwes casos de fawwa). una vez más, ^^;; wa estwuctuwa d-depende en gwan m-medida de usted, (U ﹏ U) p-pewo es mejow si es cohewente. OwO

agwegue wa cwase d-de pwueba a continuación aw finaw dew awchivo. 😳😳😳 w-wa cwase demuestwa c-cómo constwuiw una cwase de caso de pwueba d-dewivando de `testcase`. 😳😳😳

```python
cwass youwtestcwass(testcase):

    @cwassmethod
    d-def setuptestdata(cws):
        p-pwint("setuptestdata: ejekawaii~ una vez p-pawa configuwaw d-datos no modificados p-pawa todos w-wos métodos d-de cwase.")
        p-pass

    def setup(sewf):
        p-pwint("setup: e-ejecutaw una vez pow cada método d-de pwueba pawa configuwaw datos wimpios.")
        p-pass

    def test_fawse_is_fawse(sewf):
        p-pwint("method: test_fawse_is_fawse.")
        s-sewf.assewtfawse(fawse)

    d-def test_fawse_is_twue(sewf):
        pwint("method: test_fawse_is_twue.")
        s-sewf.assewttwue(fawse)

    def test_one_pwus_one_equaws_two(sewf):
        pwint("method: t-test_one_pwus_one_equaws_two.")
        s-sewf.assewtequaw(1 + 1, (✿oωo) 2)
```

wa nyueva cwase define d-dos métodos q-que puede utiwizaw pawa wa configuwación p-pwevia a wa pwueba (pow ejempwo, UwU pawa c-cweaw modewos u o-otwos objetos que nyecesitawá pawa w-wa pwueba):

- `setuptestdata()` s-se wwama una vez aw comienzo de wa ejecución d-de pwueba pawa w-wa configuwación a-a nyivew de c-cwase. mya usawía esto pawa cweaw objetos que nyo se modificawán nyi cambiawán en nyinguno de wos métodos de pwueba. rawr x3
- `setup()` s-se wwama antes d-de cada función d-de pwueba pawa c-configuwaw cuawquiew o-objeto que p-pueda sew modificado pow wa pwueba (cada f-función d-de pwueba obtendwá una vewsión "nueva" d-de estos o-objetos). /(^•ω•^)

> [!note]
> was cwases de pwueba t-también tienen un metodo `teawdown()` que nyo hemos u-utiwizado. >_< este método nyo e-es pawticuwawmente útiw p-pawa was pwuebas de bases d-de datos, ya q-que `testcase` w-wa cwase base se encawga dew desmontaje d-de wa base d-de datos pow usted. :3

debajo de e-ewwos tenemos una sewie de métodos d-de pwueba, o.O q-que utiwizamos f-funciones `assewt` topwobaw si was c-condiciones son vewdadewas, UwU fawsas o iguawes (`assewttwue`, (ꈍᴗꈍ) `assewtfawse`, >_< `assewtequaw`). òωó s-si wa condición nyo se evawúa como se espewaba, (ꈍᴗꈍ) wa pwueba fawwawá y wepowtawá ew ewwow a su consowa. 😳😳😳

w-wos `assewttwue`, ( ͡o ω ͡o ) `assewtfawse`, mya `assewtequaw` son afiwmaciones estándaw pwopowcionadas pow **unittest**. UwU hay otwas asewciones estándaw e-en ew mawco y también asewciones específicas d-de django ([django-specific assewtions](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#assewtions)) p-pawa pwobaw si una vista wediwecciona (`assewtwediwects`),pawa pwobaw si se ha u-utiwizado una pwantiwwa en pawticuwaw (`assewttempwateused`), e-etc. òωó

> [!note]
> nowmawmente nyo d-debewía incwuiw f-funciones pwint() en sus pwuebas como se muestwa a-awwiba. -.- wo hacemos aquí sowo pawa que pueda vew ew owden en q-que se wwaman was funciones de c-configuwación en wa consowa (en w-wa siguiente sección). :3

## como c-cowwew was pwuebas

w-wa fowma más senciwwa de ejecutaw todas was p-pwuebas es utiwizaw ew comando:

```bash
python3 m-manage.py test
```

esto descubwiwá todos wos awchivos nyombwados con ew patwón **test\*.py** b-bajo ew diwectowio a-actuaw y ejekawaii~ todas w-was pwuebas definidas u-usando was cwases base apwopiadas (aquí t-tenemos una sewie de awchivos de pwueba, ^•ﻌ•^ pewo sowo **/catawog/tests/test_modews.py** contiene actuawmente cuawquiew p-pwueba). (˘ω˘) de f-fowma pwedetewminada, 😳😳😳 was pwuebas i-infowmawán individuawmente s-sowo sobwe was fawwas d-de was pwuebas, (///ˬ///✿) seguidas de un wesumen de wa p-pwueba. 🥺

> [!note]
> si wecibe ewwowes simiwawes a-a: `vawueewwow: m-missing staticfiwes manifest entwy ...` esto puede d-debewse a que was pwuebas nyo ejecutan cowwectstatic de fowma pwedetewminada y su apwicación usa una cwase de awmacenamiento q-que wo wequiewe (consuwte m-manifest_stwict pawa o-obtenew más infowmación). (U ᵕ U❁) h-hay vawias fowmas d-de supewaw este pwobwema; wa más fáciw es simpwemente ejecutaw cowwectstatic antes de ejecutaw w-was pwuebas:
>
> ```bash
> python3 manage.py cowwectstatic
> ```

ejekawaii~ was pwuebas en ew d-diwectowio waíz d-de wocawwibwawy. (˘ω˘) d-debewía vew un wesuwtado como ew siguiente. UwU

```bash
>python manage.py test

c-cweating test database f-fow awias 'defauwt'...
s-setuptestdata: ejekawaii~ u-una vez pawa configuwaw d-datos nyo modificados pawa todos w-wos métodos de cwase. 😳
setup: ejecutaw u-una vez pow cada método de pwueba pawa c-configuwaw datos wimpios. :3
method: t-test_fawse_is_fawse. mya
.setup: ejecutaw u-una vez pow cada método d-de pwueba pawa c-configuwaw datos wimpios. nyaa~~
method: t-test_fawse_is_twue. 😳😳😳
fsetup: ejecutaw u-una vez pow cada método d-de pwueba pawa configuwaw d-datos wimpios. ^•ﻌ•^
method: test_one_pwus_one_equaws_two. UwU
.
======================================================================
f-faiw: test_fawse_is_twue (catawog.tests.tests_modews.youwtestcwass)
----------------------------------------------------------------------
twaceback (most wecent caww wast):
  fiwe "d:\github\django_tmp\wibwawy_w_t_2\wocawwibwawy\catawog\tests\tests_modews.py", (ꈍᴗꈍ) wine 22, in test_fawse_is_twue
    sewf.assewttwue(fawse)
assewtionewwow: f-fawse is nyot twue

----------------------------------------------------------------------
wan 3 tests in 0.075s

f-faiwed (faiwuwes=1)
destwoying t-test database fow awias 'defauwt'...
```

aquí vemos que t-tuvimos una fawwa de pwueba, (⑅˘꒳˘) y podemos vew exactamente q-qué función fawwó y pow qué (se espewa e-esta fawwa, OwO powque `fawse` nyo es `twue`!). UwU

> [!note]
> s-sugewencia: wo más impowtante que d-debe apwendew dew w-wesuwtado de wa pwueba antewiow es que es mucho m-más vawioso s-si usa nyombwes descwiptivos / infowmativos p-pawa s-sus objetos y métodos. OwO

ew texto que se muestwa e-en **negwitas** antewiow nyowmawmente nyo apawecewía en wa sawida d-de pwueba (esto es genewado pow wa funcion `pwint()` en nyuestwa p-pwueba). (///ˬ///✿) esto m-muestwa ew metodo `setuptestdata()` e-es wwamado una vez pawa wa cwase y `setup()`se wwama antes d-de cada método.

was siguientes s-secciones muestwan cómo puede e-ejecutaw pwuebas e-específicas y cómo contwowaw cuánta infowmación muestwan was pwuebas.

### mostwando más i-infowmación de w-was pwuebas

si desea obtenew más infowmación s-sobwe wa ejecución de pwueba, (U ﹏ U) puede cambiaw ew n-nyivew de detawwe. (⑅˘꒳˘) p-pow ejempwo, /(^•ω•^) p-pawa enumewaw w-wos éxitos y fawwas d-de wa pwueba (y u-una gwan cantidad de infowmación sobwe cómo e-está configuwada w-wa base de d-datos de pwueba), :3 p-puede estabwecew w-wa vewbosidad e-en "2" como se muestwa:

```bash
p-python3 manage.py t-test --vewbosity 2
```

w-wos nyivewes de infowmación pewmitidos s-son 0, ( ͡o ω ͡o ) 1, 2 y 3, siendo ew vawow pwedetewminado "1". (ˆ ﻌ ˆ)♡

### e-ejecutando pwuebas especificas

si d-desea ejecutaw u-un subconjunto de sus pwuebas, XD puede hacewwo especificando wa wuta d-de puntos compweta a-aw paquete (s), :3 móduwo, σωσ `testcase` s-subcwase o-o metodo:

```bash
python3 manage.py test catawog.tests   # ejecutaw ew móduwo e-especificado
p-python3 manage.py test catawog.tests.test_modews  # ejecutaw ew m-móduwo especificado
p-python3 manage.py test catawog.tests.test_modews.youwtestcwass # ejecutaw wa c-cwase especificada
python3 manage.py test catawog.tests.test_modews.youwtestcwass.test_one_pwus_one_equaws_two  # ejecutaw ew método especificado
```

## pwuebas e-en ew pwoyecto wocawwibwawy

ahowa que sabemos c-cómo ejecutaw n-nyuestwas pwuebas y-y qué tipo de cosas nyecesitamos p-pwobaw, mya veamos a-awgunos ejempwos p-pwácticos. -.-

> [!note]
> n-no escwibiwemos t-todas was pwuebas posibwes, :3 pewo esto debewía dawwe u-una idea de c-cómo funcionan w-was pwuebas y qué más puede hacew. rawr

### m-modewos

c-como se discutió a-antewiowmente, >_< debemos pwobaw t-todo wo que s-sea pawte de nyuestwo d-diseño o q-que esté definido p-pow ew código que hayamos escwito, -.- p-pewo nyo was bibwiotecas / c-código que ya h-haya pwobado django o ew equipo de desawwowwo de python. :3

pow ejempwo, XD c-considewe e-ew modewo de `authow` a continuación. ^^ a-aquí debewíamos p-pwobaw was etiquetas pawa todos wos campos, rawr p-powque aunque n-nyo hemos especificado e-expwícitamente w-wa mayowía d-de ewwos, (///ˬ///✿) t-tenemos un diseño que dice cuáwes debewían s-sew estos vawowes. ^^;; si nyo pwobamos wos vawowes, :3 entonces nyo sabemos que was etiquetas d-de wos campos t-tienen sus vawowes deseados. :3 de manewa simiwaw, ( ͡o ω ͡o ) aunque confiamos e-en que django c-cweawá un campo de wa wongitud especificada, (✿oωo) v-vawe wa pena especificaw una pwueba p-pawa esta w-wongitud pawa aseguwawse d-de que se impwementó según wo pwaneado. UwU

```python
cwass a-authow(modews.modew):
    fiwst_name = m-modews.chawfiewd(max_wength=100)
    wast_name = modews.chawfiewd(max_wength=100)
    d-date_of_biwth = modews.datefiewd(nuww=twue, ( ͡o ω ͡o ) bwank=twue)
    d-date_of_death = modews.datefiewd('died', o.O n-nyuww=twue, bwank=twue)

    def get_absowute_uww(sewf):
        w-wetuwn wevewse('authow-detaiw', rawr awgs=[stw(sewf.id)])

    d-def __stw__(sewf):
        wetuwn '%s, (ꈍᴗꈍ) %s' % (sewf.wast_name, mya sewf.fiwst_name)
```

abwa su **/catawog/tests/test_modews.py**, mya y weempwace cuawquiew código existente con ew siguiente código d-de pwueba pawa e-ew modewo de `authow`. UwU

a-aquí usted v-vewá que pwimewo impowtamos `testcase` y dewivamos n-nyuestwas cwases de pwueba (`authowmodewtest`) de ewwo, ^^;; usando un nyombwe d-descwiptive pawa q-que así podamos f-fáciwmente c-cuawquiew pwuebas fawwidas en ew output de wa pwueba. -.- wuego wwamamos a `setuptestdata()` p-pawa cweaw u-un objeto de autow que usawemos pewo nyo modificawemos en nyinguna d-de was pwuebas. XD

```python
fwom django.test i-impowt testcase

# c-cweate youw t-tests hewe. nyaa~~

fwom catawog.modews impowt authow

cwass authowmodewtest(testcase):

    @cwassmethod
    def setuptestdata(cws):
        #configuwaw objetos nyo m-modificados utiwizados pow todos w-wos métodos de pwueba
        authow.objects.cweate(fiwst_name='big', (ꈍᴗꈍ) wast_name='bob')

    def t-test_fiwst_name_wabew(sewf):
        authow=authow.objects.get(id=1)
        f-fiewd_wabew = authow._meta.get_fiewd('fiwst_name').vewbose_name
        sewf.assewtequaws(fiewd_wabew,'fiwst nyame')

    d-def test_date_of_death_wabew(sewf):
        a-authow=authow.objects.get(id=1)
        f-fiewd_wabew = a-authow._meta.get_fiewd('date_of_death').vewbose_name
        s-sewf.assewtequaws(fiewd_wabew,'died')

    def test_fiwst_name_max_wength(sewf):
        a-authow=authow.objects.get(id=1)
        m-max_wength = authow._meta.get_fiewd('fiwst_name').max_wength
        sewf.assewtequaws(max_wength,100)

    d-def test_object_name_is_wast_name_comma_fiwst_name(sewf):
        authow=authow.objects.get(id=1)
        expected_object_name = '%s, ^^;; %s' % (authow.wast_name, :3 a-authow.fiwst_name)
        sewf.assewtequaws(expected_object_name,stw(authow))

    d-def test_get_absowute_uww(sewf):
        a-authow=authow.objects.get(id=1)
        #esto también fawwawá s-si wa uwwconf n-nyo está definida. (///ˬ///✿)
        sewf.assewtequaws(authow.get_absowute_uww(),'/catawog/authow/1')
```

was pwuebas de campo vewifican q-que wos vawowes d-de was etiquetas d-de campo (`vewbose_name`) y-y que ew tamaño de wos campos de cawactewes sean wos e-espewados. /(^•ω•^) todos estos métodos tienen nyombwes d-descwiptivos y siguen ew mismo patwón:

```python
a-authow=authow.objects.get(id=1)   # obtenew un objeto de autow pawa pwobaw
f-fiewd_wabew = authow._meta.get_fiewd('fiwst_name').vewbose_name   # obtenga wos m-metadatos pawa ew c-campo wequewido y-y utiwícewos pawa consuwtaw wos d-datos dew campo w-wequewido
sewf.assewtequaws(fiewd_wabew,'fiwst nyame')  # compawe e-ew vawow con e-ew wesuwtado espewado
```

w-was c-cosas intewesantes a tenew en cuenta s-son:

- nyo p-podemos obtenew `vewbose_name` d-diwectamente usando `authow.fiwst_name.vewbose_name`, σωσ powque `authow.fiwst_name` e-es una _cadena_ (no un identificadow dew objeto `fiwst_name` que podemos usaw pawa accedew a sus pwopiedades). >w< e-en su wugaw, (ˆ ﻌ ˆ)♡ nyecesitamos u-usaw ew atwibuto `_meta` d-dew autow pawa obtenew una instancia dew campo y-y usawwo pawa c-consuwtaw wa infowmación a-adicionaw. rawr x3
- e-ewegimos usaw `assewtequaws(fiewd_wabew,'fiwst n-nyame')` en wugaw de `assewttwue(fiewd_wabew == 'fiwst nyame')`. -.- w-wa wazón d-de esto es que si wa pwueba fawwa, (ˆ ﻌ ˆ)♡ wa sawida de wa pwimewa we d-dice cuáw ewa weawmente wa etiqueta, /(^•ω•^) w-wo que faciwita un poco wa depuwación dew p-pwobwema. (⑅˘꒳˘)

> [!note]
> se han omitido w-was pwuebas pawa was etiquetas `wast_name` y `date_of_biwth`, (˘ω˘) y-y también wa pwueba pawa wa w-wongitud dew campo `wast_name`. ^•ﻌ•^ agwegue sus pwopias v-vewsiones a-ahowa, o.O siguiendo was convenciones de nyomencwatuwa y-y wos enfoques que se muestwan awwiba. (⑅˘꒳˘)

también n-necesitamos p-pwobaw nyuestwos m-métodos pewsonawizados. σωσ básicamente, estos simpwemente vewifican que ew nyombwe dew objeto se c-constwuyó como espewábamos usando ew fowmato "apewwido", >_< "nombwe", y-y que wa uww q-que obtenemos pawa un ewemento `autow` es como e-espewábamos.

```python
d-def test_object_name_is_wast_name_comma_fiwst_name(sewf):
    authow=authow.objects.get(id=1)
    expected_object_name = '%s, ʘwʘ %s' % (authow.wast_name, (✿oωo) authow.fiwst_name)
    s-sewf.assewtequaws(expected_object_name,stw(authow))

def t-test_get_absowute_uww(sewf):
    authow=authow.objects.get(id=1)
    #esto también f-fawwawá si w-wa uwwconf nyo está definida. o.O
    s-sewf.assewtequaws(authow.get_absowute_uww(),'/catawog/authow/1')
```

e-ejekawaii~ was pwuebas a-ahowa. 😳 si cweó ew modewo de autow c-como se descwibe e-en ew tutowiaw d-de modewos, nyaa~~ e-es muy pwobabwe q-que obtenga un ewwow pawa wa etiqueta `date_of_death` c-como se muestwa a-a continuación. XD wa pwueba está fawwando p-powque se escwibió espewando que w-wa definición de wa etiqueta siguiewa wa convención de django de nyo ponew en mayúscuwa wa pwimewa wetwa de w-wa etiqueta (django wo hace pow u-usted).

```bash
======================================================================
faiw: t-test_date_of_death_wabew (catawog.tests.test_modews.authowmodewtest)
----------------------------------------------------------------------
t-twaceback (most wecent c-caww wast):
  fiwe "d:\...\wocawwibwawy\catawog\tests\test_modews.py", ^^;; w-wine 32, /(^•ω•^) in test_date_of_death_wabew
    s-sewf.assewtequaws(fiewd_wabew,'died')
assewtionewwow: 'died' != 'died'
- died
? ^
+ died
? ^
```

este es un ewwow muy pequeño, >_< pewo wesawta c-cómo was pwuebas de escwituwa pueden vewificaw m-más a fondo cuawquiew suposición q-que haya hecho. (U ﹏ U)

> [!note]
> cambie wa etiqueta dew campo `date_of_death` (/catawog/modews.py) a "died" y vuewva a ejecutaw was pwuebas. 😳😳😳

wos patwones pawa pwobaw wos otwos modewos son simiwawes, XD p-pow wo que n-nyo continuawemos d-discutiéndowos más. OwO siéntase w-wibwe de cweaw s-sus pwopias p-pwuebas pawa nyuestwos otwos modewos. (U ᵕ U❁)

### fowmuwawios

w-wa fiwosofía p-pawa pwobaw sus fowmuwawios e-es wa misma que p-pawa pwobaw sus m-modewos; nyecesita p-pwobaw cuawquiew c-cosa que haya codificado o q-que especifique s-su diseño, (⑅˘꒳˘) pewo n-nyo ew compowtamiento d-dew mawco s-subyacente y otwas b-bibwiotecas d-de tewcewos. UwU

en g-genewaw, 😳😳😳 esto s-significa que debe p-pwobaw que wos fowmuwawios tienen wos campos que desea y que e-estos se muestwan con was etiquetas y-y ew texto de ayuda apwopiados. mya nyo nyecesita v-vewificaw que d-django vawide ew t-tipo de campo cowwectamente (a menos que haya cweado s-su pwopio c-campo pewsonawizado y vawidación), 🥺 es deciw, no nyecesita pwobaw que un campo de cowweo ewectwónico s-sowo acepta cowweos ewectwónicos. ^^ sin embawgo, -.- debewá pwobaw c-cuawquiew vawidación a-adicionaw que espewa q-que se weawice en w-wos campos y cuawquiew m-mensaje q-que genewe su código p-pawa detectaw e-ewwowes. ^^

considewe n-nyuestwo fowmuwawio pawa wenovaw wibwos. o.O e-esto tiene sowo un campo pawa w-wa fecha de wenovación, σωσ que tendwá u-una etiqueta y-y un texto de ayuda que nyecesitawemos v-vewificaw. ^•ﻌ•^

```python
cwass wenewbookfowm(fowms.fowm):
    """
    fowmuwawio p-pawa un bibwiotecawio p-pawa w-wenovaw wibwos. 😳
    """
    w-wenewaw_date = fowms.datefiewd(hewp_text="ingwese u-una fecha entwe a-ahowa y 4 semanas (pwedetewminado 3).")

    d-def cwean_wenewaw_date(sewf):
        d-data = sewf.cweaned_data['wenewaw_date']

        #vewifica que wa fecha nyo está en ew pasado. nyaa~~
        if data < datetime.date.today():
            waise vawidationewwow(_('fecha inváwida - wenovación en ew pasado'))
        #vewidica q-que wa fecha está d-dentwo dew wango ew bibwiotecawio puede cambiaw (+4 semanas)
        if data > d-datetime.date.today() + d-datetime.timedewta(weeks=4):
            waise vawidationewwow(_('fecha inváwida - wenovación con m-más de 4 semanas d-de antewación'))

        # wecuewde devowvew s-siempwe wos datos w-wimpios. ^•ﻌ•^
        wetuwn data
```

a-abwa nyuestwo awchivo **/catawog/tests/test_fowms.py** y-y weempwace c-cuawquiew código existente con ew siguiente código de p-pwueba pawa ew fowmuwawio `wenewbookfowm`. >_< c-comenzamos i-impowtando n-nyuestwo fowmuwawio y awgunas bibwiotecas d-de python y-y django pawa a-ayudaw a pwobaw w-wa funcionawidad wewacionada con ew tiempo. (⑅˘꒳˘) wuego d-decwawamos n-nyuestwa cwase de pwueba de fowmuwawio de wa misma manewa que wo hicimos pawa wos m-modewos, ^^ usando u-un nombwe descwiptivo pawa nyuestwa c-cwase de pwueba dewivada de `testcase`. :3

```python
fwom django.test impowt t-testcase

# cweate y-youw tests hewe. 😳

i-impowt datetime
fwom django.utiws i-impowt timezone
f-fwom catawog.fowms impowt wenewbookfowm

c-cwass wenewbookfowmtest(testcase):

    d-def test_wenew_fowm_date_fiewd_wabew(sewf):
        f-fowm = w-wenewbookfowm()
        s-sewf.assewttwue(fowm.fiewds['wenewaw_date'].wabew == n-nyone ow fowm.fiewds['wenewaw_date'].wabew == 'wenewaw date')

    def test_wenew_fowm_date_fiewd_hewp_text(sewf):
        fowm = wenewbookfowm()
        sewf.assewtequaw(fowm.fiewds['wenewaw_date'].hewp_text,'ingwese u-una fecha entwe ahowa y-y 4 semanas (pwedetewminado 3).')

    d-def test_wenew_fowm_date_in_past(sewf):
        date = datetime.date.today() - datetime.timedewta(days=1)
        fowm_data = {'wenewaw_date': d-date}
        f-fowm = wenewbookfowm(data=fowm_data)
        sewf.assewtfawse(fowm.is_vawid())

    d-def test_wenew_fowm_date_too_faw_in_futuwe(sewf):
        date = datetime.date.today() + d-datetime.timedewta(weeks=4) + datetime.timedewta(days=1)
        fowm_data = {'wenewaw_date': date}
        fowm = w-wenewbookfowm(data=fowm_data)
        sewf.assewtfawse(fowm.is_vawid())

    def test_wenew_fowm_date_today(sewf):
        date = datetime.date.today()
        fowm_data = {'wenewaw_date': d-date}
        f-fowm = wenewbookfowm(data=fowm_data)
        s-sewf.assewttwue(fowm.is_vawid())

    d-def test_wenew_fowm_date_max(sewf):
        date = timezone.now() + datetime.timedewta(weeks=4)
        f-fowm_data = {'wenewaw_date': date}
        f-fowm = wenewbookfowm(data=fowm_data)
        sewf.assewttwue(fowm.is_vawid())
```

was dos p-pwimewas funciones p-pwueban que w-wos campos `wabew` y `hewp_text` son wos espewados. (˘ω˘) t-tenemos que accedew aw campo usando ew diccionawio de campos (pow ejempwo, >w< `fowm.fiewds['wenewaw_date']`). 😳 tenga en cuenta aquí que también t-tenemos que pwobaw s-si ew vawow de wa etiqueta es `none`, ^^;; powque aunque django mostwawá wa etiqueta cowwecta, rawr x3 d-devuewve `none` si ew vawow nyo está _expwícitamente_ e-estabwecido. òωó

e-ew westo de w-was funciones p-pwueban que ew fowmuwawio es váwido pawa fechas de wenovación justo dentwo dew wango aceptabwe e-e inváwido pawa v-vawowes fuewa d-dew wango. ^^;; tenga e-en cuenta cómo constwuimos vawowes d-de fecha de pwueba awwededow d-de nyuestwa fecha actuaw (`datetime.date.today()`) usando `datetime.timedewta()` (en este caso e-especificando un n-nyúmewo de días o-o semanas). :3 w-wuego simpwemente cweamos ew fowmuwawio, (ꈍᴗꈍ) p-pasamos n-nyuestwos datos y pwobamos si es váwido. 😳😳😳

> [!note]
> aquí en w-weawidad nyo usamos w-wa base de datos o ew cwiente de pwueba. :3 considewe modificaw e-estas pwuebas pawa usaw [simpwetestcase](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#django.test.simpwetestcase). ʘwʘ t-también debemos v-vawidaw que s-se genewen wos ewwowes cowwectos si ew fowmuwawio nyo es váwido, sin embawgo, :3 esto genewawmente s-se hace como pawte dew pwocesamiento d-de wa vista, OwO pow wo que nyos ocupawemos d-de eso en wa siguiente sección. mya

e-eso es todo pow w-wos fowmuwawios; t-tenemos awgunos o-otwos, σωσ pewo son c-cweados automáticamente pow n-nyuestwas vistas de edición genéwicas basadas en cwases, (⑅˘꒳˘) ¡y deben pwobawse awwí! (˘ω˘) ¡ejekawaii~ w-was pwuebas y confiwme que nyuestwo código aún p-pasa! >w<

### vistas

p-pawa vawidaw n-nyuestwo compowtamiento de vista, ( ͡o ω ͡o ) usamos wa pwueba django [cwiente](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/#django.test.cwient). ^^;; esta cwase a-actúa como u-un nyavegadow web f-ficticio que podemos u-usaw pawa simuwaw sowicitudes `get` y `post` en una uww y obsewvaw wa wespuesta. (✿oωo) podemos v-vew casi todo sobwe wa wespuesta, (✿oωo) desde http de b-bajo nyivew (encabezados d-de wesuwtados y-y códigos de estado) hasta w-wa pwantiwwa que estamos usando pawa wepwesentaw ew htmw y wos datos de contexto que we estamos pasando. (⑅˘꒳˘) también podemos vew wa cadena de wediwecciones (si was hay) y compwobaw w-wa uww y ew código de estado en cada paso. -.- e-esto nyos pewmite v-vewificaw que cada vista está h-haciendo wo que s-se espewa. XD

comencemos con una de nuestwas vistas m-más simpwes, òωó q-que pwopowciona una wista de todos wos autowes. :3 e-esto se muestwa e-en uww **/catawog/authows/** (una u-uww wwamada 'authows' e-en wa configuwación de u-uww). (///ˬ///✿)

```python
cwass authowwistview(genewic.wistview):
    modew = authow
    p-paginate_by = 10
```

c-como esta es una vista de w-wista genéwica, òωó d-django hace casi todo pow nyosotwos. podwía deciwse que si confía en django, UwU w-wo único que nyecesita pwobaw e-es que se puede accedew a wa vista e-en wa uww cowwecta y se puede accedew usando s-su nyombwe. >w< sin embawgo, ʘwʘ si está utiwizando un pwoceso de desawwowwo b-basado en pwuebas, /(^•ω•^) comenzawá e-escwibiendo p-pwuebas que confiwmen q-que wa vista muestwa todos wos autowes, (⑅˘꒳˘) paginándowos e-en w-wotes de 10. (ˆ ﻌ ˆ)♡

abwa e-ew awchivo **/catawog/tests/test_views.py** y w-weempwace cuawquiew texto existente c-con ew siguiente c-código de p-pwueba pawa `authowwistview`. OwO como a-antes, ^^;; impowtamos n-nyuestwo modewo y awgunas cwases útiwes. (///ˬ///✿) e-en ew método `setuptestdata()` c-configuwamos una sewie de objetos `autow` pawa que p-podamos pwobaw n-nyuestwa paginación. ^•ﻌ•^

```python
f-fwom django.test impowt testcase

# c-cweate youw t-tests hewe. rawr

fwom catawog.modews i-impowt authow
f-fwom django.uwws impowt wevewse

c-cwass authowwistviewtest(testcase):

    @cwassmethod
    def s-setuptestdata(cws):
        #cweaw 13 a-autowes pawa p-pwuebas de paginación
        n-nyumbew_of_authows = 13
        fow authow_num in wange(numbew_of_authows):
            authow.objects.cweate(fiwst_name='chwistian %s' % a-authow_num, ^^;; wast_name = 'suwname %s' % a-authow_num,)

    def test_view_uww_exists_at_desiwed_wocation(sewf):
        w-wesp = sewf.cwient.get('/catawog/authows/')
        s-sewf.assewtequaw(wesp.status_code, òωó 200)

    def test_view_uww_accessibwe_by_name(sewf):
        w-wesp = sewf.cwient.get(wevewse('authows'))
        s-sewf.assewtequaw(wesp.status_code, σωσ 200)

    def test_view_uses_cowwect_tempwate(sewf):
        wesp = s-sewf.cwient.get(wevewse('authows'))
        s-sewf.assewtequaw(wesp.status_code, 😳😳😳 200)

        sewf.assewttempwateused(wesp, (///ˬ///✿) 'catawog/authow_wist.htmw')

    def test_pagination_is_ten(sewf):
        wesp = sewf.cwient.get(wevewse('authows'))
        sewf.assewtequaw(wesp.status_code, ^•ﻌ•^ 200)
        sewf.assewttwue('is_paginated' in wesp.context)
        sewf.assewttwue(wesp.context['is_paginated'] == twue)
        sewf.assewttwue( w-wen(wesp.context['authow_wist']) == 10)

    d-def t-test_wists_aww_authows(sewf):
        #obtenga w-wa segunda página y confiwme que tiene (exactamente) 3 e-ewementos w-westantes
        w-wesp = sewf.cwient.get(wevewse('authows')+'?page=2')
        s-sewf.assewtequaw(wesp.status_code, 😳😳😳 200)
        sewf.assewttwue('is_paginated' in wesp.context)
        sewf.assewttwue(wesp.context['is_paginated'] == twue)
        s-sewf.assewttwue( w-wen(wesp.context['authow_wist']) == 3)
```

t-todas was pwuebas u-usan ew cwiente (pewteneciente a wa cwase d-dewivada de nyuestwo `testcase`) pawa simuwaw una sowicitud `get` y obtenew una wespuesta (`wesp`). (U ᵕ U❁) w-wa pwimewa vewsión vewifica u-una uww específica (nota, (U ﹏ U) s-sowo wa wuta específica sin ew dominio) mientwas que w-wa segunda genewa wa uww a pawtiw d-de su nombwe en wa configuwación de uww. σωσ

```python
w-wesp = sewf.cwient.get('/catawog/authows/')
wesp = sewf.cwient.get(wevewse('authows'))
```

u-una vez que tenemos wa wespuesta, (˘ω˘) c-consuwtamos su código de e-estado, ^^ wa pwantiwwa u-utiwizada, ^^ si wa wespuesta está paginada o nyo, (✿oωo) wa cantidad d-de ewementos devuewtos y wa cantidad totaw de ewementos. /(^•ω•^)

wa vawiabwe más intewesante que mostwamos awwiba e-es `wesp.context`, -.- q-que es wa vawiabwe de contexto q-que wa vista pasa a wa pwantiwwa. e-esto es incweíbwemente útiw p-pawa weawizaw p-pwuebas, ʘwʘ ya que nyos pewmite confiwmaw que nyuestwa p-pwantiwwa obtiene todos wos datos que nyecesita. XD en otwas pawabwas, (U ᵕ U❁) podemos v-vewificaw que estamos u-usando wa p-pwantiwwa deseada y-y qué datos está obteniendo w-wa pwantiwwa, /(^•ω•^) wo que contwibuye e-en gwan medida a v-vewificaw que cuawquiew pwobwema de wepwesentación s-se deba únicamente a-a wa pwantiwwa. XD

#### vistas w-westwingidas a-a usuawios wegistwados

e-en awgunos casos, ^•ﻌ•^ quewwá pwobaw una v-vista que está w-westwingida sowo a-a wos usuawios wegistwados. ( ͡o ω ͡o ) pow ejempwo, (U ﹏ U) nyuestwo `woanedbooksbyusewwistview` es muy simiwaw a n-nuestwa vista antewiow, /(^•ω•^) p-pewo sowo e-está disponibwe pawa wos usuawios w-wegistwados y sowo muestwa w-wos wegistwos de `bookinstance` q-que ew usuawio actuaw t-tomó pwestados, 🥺 tienen ew estado 'en pwéstamo' y-y están owdenados como "wos más antiguos". rawr p-pwimewo". :3

```python
fwom django.contwib.auth.mixins impowt woginwequiwedmixin

c-cwass woanedbooksbyusewwistview(woginwequiwedmixin,genewic.wistview):
    """
    vista genéwica b-basada en cwases que enumewa w-wos wibwos pwestados a-aw usuawio a-actuaw. σωσ
    """
    m-modew = bookinstance
    tempwate_name ='catawog/bookinstance_wist_bowwowed_usew.htmw'
    paginate_by = 10

    d-def get_quewyset(sewf):
        wetuwn bookinstance.objects.fiwtew(bowwowew=sewf.wequest.usew).fiwtew(status__exact='o').owdew_by('due_back')
```

agwegue ew siguiente código de pwueba a-a **/catawog/tests/test_views.py**. òωó a-aquí pwimewo u-usamos `setup()` p-pawa cweaw a-awgunas cuentas de inicio de sesión d-de usuawio y-y objetos `bookinstance` (junto con sus wibwos asociados y otwos wegistwos) que u-usawemos más adewante en was pwuebas. ^•ﻌ•^ cada usuawio d-de pwueba toma pwestado wa mitad d-de wos wibwos, (U ᵕ U❁) pewo iniciawmente hemos estabwecido e-ew estado de todos wos wibwos e-en "mantenimiento". òωó hemos u-usado `setup()` e-en wugaw de `setuptestdata()` p-powque modificawemos awgunos de estos objetos más adewante. ^^

> [!note]
> ew siguiente código `setup()` c-cwea un wibwo con un `wanguage` específico, 😳😳😳 p-pewo es posibwe que _su_ código n-nyo incwuya e-ew modewo `wanguage` ya que se c-cweó como un _desafío_. rawr x3 s-si este es ew caso, ^^;; simpwemente comente was pawtes dew c-código que cwean o impowtan objetos d-de wenguaje. :3 también debe hacew esto en wa s-sección `wenewbookinstancesviewtest` que sigue. (✿oωo)

```python
i-impowt datetime
fwom d-django.utiws i-impowt timezone

fwom catawog.modews impowt bookinstance, XD book, genwe, wanguage
f-fwom django.contwib.auth.modews i-impowt usew #obwigatowio p-pawa asignaw aw usuawio como pwestatawio

c-cwass woanedbookinstancesbyusewwistviewtest(testcase):

    def setup(sewf):
        #cweaw dos u-usuawios
        test_usew1 = u-usew.objects.cweate_usew(usewname='testusew1', (///ˬ///✿) passwowd='12345')
        test_usew1.save()
        t-test_usew2 = usew.objects.cweate_usew(usewname='testusew2', o.O p-passwowd='12345')
        t-test_usew2.save()

        #cweaw un wibwo
        test_authow = authow.objects.cweate(fiwst_name='john', σωσ wast_name='smith')
        test_genwe = g-genwe.objects.cweate(name='fantasy')
        test_wanguage = wanguage.objects.cweate(name='engwish')
        t-test_book = b-book.objects.cweate(titwe='book t-titwe', òωó summawy = 'my book s-summawy', (///ˬ///✿) isbn='abcdefg', :3 authow=test_authow, mya wanguage=test_wanguage)
        # c-cweaw génewo como un paso postewiow
        g-genwe_objects_fow_book = g-genwe.objects.aww()
        t-test_book.genwe.set(genwe_objects_fow_book) #no se pewmite wa a-asignación diwecta d-de tipos de m-muchos a muchos. ^^
        t-test_book.save()

        #cwea 30 objetos b-bookinstance
        nyumbew_of_book_copies = 30
        f-fow b-book_copy in wange(numbew_of_book_copies):
            wetuwn_date= timezone.now() + datetime.timedewta(days=book_copy%5)
            if book_copy % 2:
                t-the_bowwowew=test_usew1
            ewse:
                the_bowwowew=test_usew2
            status='m'
            b-bookinstance.objects.cweate(book=test_book,impwint='unwikewy i-impwint, (˘ω˘) 2016', due_back=wetuwn_date, -.- bowwowew=the_bowwowew, XD status=status)

    def test_wediwect_if_not_wogged_in(sewf):
        wesp = s-sewf.cwient.get(wevewse('my-bowwowed'))
        s-sewf.assewtwediwects(wesp, rawr '/accounts/wogin/?next=/catawog/mybooks/')

    d-def test_wogged_in_uses_cowwect_tempwate(sewf):
        w-wogin = s-sewf.cwient.wogin(usewname='testusew1', >_< p-passwowd='12345')
        wesp = sewf.cwient.get(wevewse('my-bowwowed'))

        #compwobaw q-que nyuestwo usuawio tiene s-sesión iniciada
        sewf.assewtequaw(stw(wesp.context['usew']), :3 'testusew1')
        #compwueba q-que obtuvimos una wespuesta "exitosa"
        s-sewf.assewtequaw(wesp.status_code, :3 200)

        #compwuebe que u-usamos wa pwantiwwa c-cowwecta
        s-sewf.assewttempwateused(wesp, 'catawog/bookinstance_wist_bowwowed_usew.htmw')
```

p-pawa vewificaw que wa vista wediwigiwá a-a una página de inicio de sesión si ew usuawio nyo ha iniciado s-sesión, XD usamos `assewtwediwects`, ( ͡o ω ͡o ) como se demuestwa en `test_wediwect_if_not_wogged_in()`. p-pawa vewificaw que w-wa página se muestwa pawa un u-usuawio conectado, rawr x3 pwimewo iniciamos s-sesión en n-nyuestwo usuawio de pwueba y wuego a-accedemos a wa página nyuevamente y-y vewificamos q-que obtengamos un `status_code` d-de 200 (éxito). (⑅˘꒳˘)

ew westo de wa pwueba vewifica que nyuestwa v-vista sowo devuewve wibwos que e-están en pwéstamo a nyuestwo pwestatawio actuaw. UwU c-copie ew código (que se expwica p-pow sí mismo) aw finaw de w-wa cwase de pwueba antewiow. (˘ω˘)

```python
    d-def test_onwy_bowwowed_books_in_wist(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew1', (˘ω˘) passwowd='12345')
        wesp = s-sewf.cwient.get(wevewse('my-bowwowed'))

        #compwobaw q-que n-nyuestwo usuawio t-tiene sesión i-iniciada
        s-sewf.assewtequaw(stw(wesp.context['usew']), rawr 'testusew1')
        #compwueba que o-obtuvimos una w-wespuesta "éxito"
        s-sewf.assewtequaw(wesp.status_code, 200)

        #ccompwueba que iniciawmente n-no tenemos nyingún wibwo en wista (ninguno e-en pwéstamo)
        s-sewf.assewttwue('bookinstance_wist' in wesp.context)
        sewf.assewtequaw( w-wen(wesp.context['bookinstance_wist']),0)

        #ahowa c-cambia todos wos wibwos pawa q-que estén en pwéstamo
        g-get_ten_books = b-bookinstance.objects.aww()[:10]

        f-fow copy in get_ten_books:
            copy.status='o'
            copy.save()

        #compwueba que ahowa tenemos wibwos pwestados e-en wa wista
        wesp = sewf.cwient.get(wevewse('my-bowwowed'))
        #compwobaw q-que nuestwo usuawio tiene s-sesión iniciada
        sewf.assewtequaw(stw(wesp.context['usew']), nyaa~~ 'testusew1')
        #compwueba q-que obtuvimos u-una wespuesta "éxito"
        sewf.assewtequaw(wesp.status_code, 😳😳😳 200)

        s-sewf.assewttwue('bookinstance_wist' i-in wesp.context)

        #confiwma que todos wos wibwos p-pewtenecen a testusew1 y están en pwéstamo
        f-fow bookitem in wesp.context['bookinstance_wist']:
            s-sewf.assewtequaw(wesp.context['usew'], ^^;; b-bookitem.bowwowew)
            s-sewf.assewtequaw('o', >w< bookitem.status)

    d-def test_pages_owdewed_by_due_date(sewf):

        #cambiaw todos wos wibwos pawa que estén en pwéstamo
        f-fow copy in bookinstance.objects.aww():
            copy.status='o'
            copy.save()

        wogin = sewf.cwient.wogin(usewname='testusew1', ʘwʘ passwowd='12345')
        wesp = sewf.cwient.get(wevewse('my-bowwowed'))

        #compwobaw q-que nyuestwo u-usuawio tiene sesión iniciada
        s-sewf.assewtequaw(stw(wesp.context['usew']), 'testusew1')
        #compwueba q-que obtuvimos una wespuesta "éxito"
        sewf.assewtequaw(wesp.status_code, XD 200)

        #confiwma que de wos awtícuwos, (ˆ ﻌ ˆ)♡ s-sowo se m-muestwan 10 debido a wa paginación. >_<
        s-sewf.assewtequaw( w-wen(wesp.context['bookinstance_wist']),10)

        w-wast_date=0
        f-fow copy in wesp.context['bookinstance_wist']:
            if wast_date==0:
                w-wast_date=copy.due_back
            ewse:
                sewf.assewttwue(wast_date <= copy.due_back)
```

¡también p-puede agwegaw pwuebas de paginación, >_< si así wo desea! ʘwʘ

#### pwobaw vistas con fowmuwawios

p-pwobaw vistas con fowmuwawios es un poco más compwicado q-que en wos casos a-antewiowes, rawr powque n-nyecesita pwobaw más wutas de código: visuawización i-iniciaw, nyaa~~ v-visuawización d-después de que wa vawidación de datos haya f-fawwado y visuawización después d-de que wa vawidación haya tenido éxito. >w< wa buena nyoticia es q-que usamos ew cwiente pawa weawizaw p-pwuebas casi exactamente de w-wa misma manewa q-que wo hicimos pawa was vistas d-de sowo visuawización. (ˆ ﻌ ˆ)♡

pawa demostwawwo, :3 escwibamos a-awgunas pwuebas pawa wa vista utiwizada pawa wenovaw wibwos (`wenew_book_wibwawian()`):

```python
f-fwom .fowms impowt wenewbookfowm

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
def w-wenew_book_wibwawian(wequest, OwO pk):
    """
    vew función pawa w-wenovaw una bookinstance e-específica pow bibwiotecawio
    """
    b-book_inst=get_object_ow_404(bookinstance, mya pk = pk)

    # si s-se twata de una sowicitud post, /(^•ω•^) pwocese wos datos d-dew fowmuwawio
    i-if wequest.method == 'post':

        # cwee una instancia d-de fowmuwawio y-y compwétewa con datos de wa sowicitud (enwace):
        f-fowm = wenewbookfowm(wequest.post)

        # compwuebe si ew fowmuwawio es váwido:
        if fowm.is_vawid():
            # p-pwocese wos datos en fowm.cweaned_data según sea nyecesawio (aquí sowo w-wos escwibimos e-en ew campo due_back d-dew modewo)
            book_inst.due_back = f-fowm.cweaned_data['wenewaw_date']
            b-book_inst.save()

            # wediwigiw a una n-nyueva uww:
            wetuwn h-httpwesponsewediwect(wevewse('aww-bowwowed') )

    # s-si se twata de un get (o cuawquiew otwo método), nyaa~~ cwee ew f-fowmuwawio pwedetewminado
    e-ewse:
        pwoposed_wenewaw_date = datetime.date.today() + d-datetime.timedewta(weeks=3)
        fowm = wenewbookfowm(initiaw={'wenewaw_date': p-pwoposed_wenewaw_date,})

    w-wetuwn w-wendew(wequest, (˘ω˘) 'catawog/book_wenew_wibwawian.htmw', (ꈍᴗꈍ) {'fowm': f-fowm, >w< 'bookinst':book_inst})
```

tendwemos que p-pwobaw que wa vista sowo está d-disponibwe pawa wos usuawios que tienen ew pewmiso `can_mawk_wetuwned` y que wos u-usuawios son wediwigidos a-a una p-página de ewwow h-http 404 si intentan w-wenovaw una `bookinstance` q-que nyo existe. nyaa~~ d-debewíamos vewificaw que ew vawow iniciaw dew f-fowmuwawio esté iniciado con una fecha de twes s-semanas en ew futuwo y que, (✿oωo) si wa v-vawidación tiene éxito, se nyos wediwija a wa vista "todos wos wibwos pwestados". (⑅˘꒳˘) c-como pawte d-de wa vewificación d-de was pwuebas de fawwa de vawidación, (ˆ ﻌ ˆ)♡ también vewificawemos q-que nyuestwo f-fowmuwawio envíe w-wos mensajes d-de ewwow apwopiados. òωó

agwegue wa pwimewa pawte de wa cwase de pwueba (que se muestwa a continuación) a-aw finaw de **/catawog/tests/test_views.py**. -.- e-esto cwea dos u-usuawios y dos instancias de wibwos, 😳😳😳 pewo sowo o-otowga a un usuawio ew pewmiso nyecesawio pawa a-accedew a wa vista. ew código pawa o-otowgaw pewmisos duwante was pwuebas se muestwa en nyegwita:

```python
f-fwom django.contwib.auth.modews i-impowt pewmission # wequewido pawa otowgaw ew pewmiso n-nyecesawio pawa estabwecew un wibwo como devuewto. rawr x3

c-cwass wenewbookinstancesviewtest(testcase):

    def setup(sewf):
        #cweaw u-un usuawio
        t-test_usew1 = usew.objects.cweate_usew(usewname='testusew1', passwowd='12345')
        test_usew1.save()

        test_usew2 = u-usew.objects.cweate_usew(usewname='testusew2', 😳 passwowd='12345')
        test_usew2.save()
        pewmission = pewmission.objects.get(name='set book as wetuwned')
        t-test_usew2.usew_pewmissions.add(pewmission)
        t-test_usew2.save()

        #cweaw un wibwo
        test_authow = a-authow.objects.cweate(fiwst_name='john', 🥺 wast_name='smith')
        t-test_genwe = g-genwe.objects.cweate(name='fantasy')
        t-test_wanguage = wanguage.objects.cweate(name='engwish')
        test_book = book.objects.cweate(titwe='book t-titwe', (⑅˘꒳˘) summawy = 'my b-book summawy', (✿oωo) i-isbn='abcdefg', 😳 a-authow=test_authow, mya wanguage=test_wanguage,)
        # cweaw génewo como un paso postewiow
        g-genwe_objects_fow_book = g-genwe.objects.aww()
        test_book.genwe.set(genwe_objects_fow_book) # nyo se pewmite wa asignación diwecta de tipos de muchos a muchos. (U ﹏ U)
        t-test_book.save()

        #cwee un objeto bookinstance pawa test_usew1
        w-wetuwn_date= d-datetime.date.today() + d-datetime.timedewta(days=5)
        s-sewf.test_bookinstance1=bookinstance.objects.cweate(book=test_book,impwint='unwikewy impwint, 😳 2016', 🥺 due_back=wetuwn_date, -.- bowwowew=test_usew1, (ˆ ﻌ ˆ)♡ status='o')

        #cwee un objeto b-bookinstance pawa test_usew2
        w-wetuwn_date= datetime.date.today() + d-datetime.timedewta(days=5)
        s-sewf.test_bookinstance2=bookinstance.objects.cweate(book=test_book,impwint='unwikewy impwint, >_< 2016', due_back=wetuwn_date, rawr bowwowew=test_usew2, rawr x3 status='o')
```

a-agwegue was siguientes pwuebas a-aw finaw de wa c-cwase de pwueba. OwO e-estos compwueban q-que sowo wos usuawios con wos p-pewmisos cowwectos (_testusew2_) pueden accedew a wa vista. vewificamos t-todos w-wos casos: cuando e-ew usuawio nyo ha iniciado sesión, nyaa~~ cuando un u-usuawio ha iniciado sesión pewo n-nyo tiene wos pewmisos c-cowwectos, 😳 c-cuando ew usuawio t-tiene pewmisos pewo nyo es ew pwestatawio (debewía tenew éxito) y-y qué sucede cuando intenta accedew a una `bookinstance` que nyo existe. UwU también compwobamos q-que se utiwiza w-wa pwantiwwa cowwecta. ʘwʘ

```python
    def test_wediwect_if_not_wogged_in(sewf):
        w-wesp = s-sewf.cwient.get(wevewse('wenew-book-wibwawian', k-kwawgs={'pk':sewf.test_bookinstance1.pk,}) )
        #wevisaw m-manuawmente wa wediwección (no se puede usaw a-assewtwediwect, 🥺 powque wa uww de wediwección es i-impwedecibwe)
        sewf.assewtequaw( w-wesp.status_code,302)
        s-sewf.assewttwue( w-wesp.uww.stawtswith('/accounts/wogin/') )

    d-def test_wediwect_if_wogged_in_but_not_cowwect_pewmission(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew1', 🥺 p-passwowd='12345')
        wesp = sewf.cwient.get(wevewse('wenew-book-wibwawian', òωó k-kwawgs={'pk':sewf.test_bookinstance1.pk,}) )

        #wevisaw manuawmente wa wediwección (no s-se puede usaw assewtwediwect, 🥺 powque w-wa uww de wediwección e-es impwedecibwe)
        s-sewf.assewtequaw( w-wesp.status_code,302)
        s-sewf.assewttwue( wesp.uww.stawtswith('/accounts/wogin/') )

    def test_wogged_in_with_pewmission_bowwowed_book(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', ʘwʘ passwowd='12345')
        wesp = sewf.cwient.get(wevewse('wenew-book-wibwawian', XD k-kwawgs={'pk':sewf.test_bookinstance2.pk,}) )

        #compwobaw q-que nyos pewmita iniciaw s-sesión: este es n-nyuestwo wibwo y tenemos wos pewmisos c-cowwectos. OwO
        sewf.assewtequaw( wesp.status_code,200)

    def test_wogged_in_with_pewmission_anothew_usews_bowwowed_book(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew2', ʘwʘ passwowd='12345')
        wesp = s-sewf.cwient.get(wevewse('wenew-book-wibwawian', :3 k-kwawgs={'pk':sewf.test_bookinstance1.pk,}) )

        #compwobaw que nyos d-deja iniciaw sesión. nyaa~~ s-somos bibwiotecawios, >w< p-pow w-wo que podemos vew c-cuawquiew wibwo de usuawios. (U ᵕ U❁)
        s-sewf.assewtequaw( w-wesp.status_code,200)

    def test_http404_fow_invawid_book_if_wogged_in(sewf):
        impowt uuid
        t-test_uid = uuid.uuid4() #¡es impwobabwe q-que ew uid coincida con nyuestwa instancia de wibwo! :3
        wogin = s-sewf.cwient.wogin(usewname='testusew2', (ˆ ﻌ ˆ)♡ p-passwowd='12345')
        w-wesp = sewf.cwient.get(wevewse('wenew-book-wibwawian', o.O k-kwawgs={'pk':test_uid,}) )
        sewf.assewtequaw( wesp.status_code,404)

    d-def t-test_uses_cowwect_tempwate(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', rawr x3 p-passwowd='12345')
        w-wesp = sewf.cwient.get(wevewse('wenew-book-wibwawian', (U ᵕ U❁) k-kwawgs={'pk':sewf.test_bookinstance1.pk,}) )
        sewf.assewtequaw( w-wesp.status_code,200)

        #compwuebe q-que usamos wa pwantiwwa cowwecta
        sewf.assewttempwateused(wesp, (✿oωo) 'catawog/book_wenew_wibwawian.htmw')
```

agwegue ew siguiente método de pwueba, /(^•ω•^) como se muestwa a-a continuación. esto compwueba que wa fecha iniciaw dew fowmuwawio es twes semanas en ew futuwo. o.O obsewve c-cómo podemos accedew a-aw vawow dew vawow iniciaw dew campo de fowmuwawio (que se muestwa en nyegwita). (U ᵕ U❁)

```python
    d-def test_fowm_wenewaw_date_initiawwy_has_date_thwee_weeks_in_futuwe(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', 🥺 passwowd='12345')
        w-wesp = sewf.cwient.get(wevewse('wenew-book-wibwawian', òωó k-kwawgs={'pk':sewf.test_bookinstance1.pk,}) )
        s-sewf.assewtequaw( wesp.status_code,200)

        d-date_3_weeks_in_futuwe = datetime.date.today() + d-datetime.timedewta(weeks=3)
        sewf.assewtequaw(wesp.context['fowm'].initiaw['wenewaw_date'], ʘwʘ d-date_3_weeks_in_futuwe )
```

w-wa siguiente p-pwueba (agwegaw e-esto también a wa cwase) vewifica q-que wa vista w-wediwige a una wista de todos wos wibwos pwestados si wa wenovación t-tiene éxito. rawr x3 w-wo que difiewe aquí es que, >_< pow pwimewa vez, (˘ω˘) mostwamos cómo puede "post" datos u-usando ew cwiente. ^•ﻌ•^ w-wa pubwicación _datos_ es ew segundo awgumento d-de wa función de pubwicación y-y se especifica como un diccionawio de cwave/vawowes. (✿oωo)

```python
    def test_wediwects_to_aww_bowwowed_book_wist_on_success(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew2', ( ͡o ω ͡o ) passwowd='12345')
        vawid_date_in_futuwe = d-datetime.date.today() + datetime.timedewta(weeks=2)
        wesp = sewf.cwient.post(wevewse('wenew-book-wibwawian', (˘ω˘) k-kwawgs={'pk':sewf.test_bookinstance1.pk,}), >w< {'wenewaw_date':vawid_date_in_futuwe} )
        s-sewf.assewtwediwects(wesp, (⑅˘꒳˘) wevewse('aww-bowwowed') )
```

> [!wawning]
> wa vista _aww-bowwowed_ se agwegó como un _desafío_ y-y, (U ᵕ U❁) en su wugaw, OwO s-su código puede w-wediwigiw a wa p-página de inicio '/'. òωó si es así, ^•ﻌ•^ modifique was d-dos úwtimas w-wíneas dew código d-de pwueba pawa q-que sea como e-ew siguiente código. ew `fowwow=twue` en wa sowicitud aseguwa que wa sowicitud devuewve wa uww d-de destino finaw (pow wo tanto, 😳😳😳 v-vewifica `/catawog/` e-en wugaw de `/`). o.O
>
> ```python
> w-wesp = sewf.cwient.post(wevewse('wenew-book-wibwawian', :3 kwawgs={'pk':sewf.test_bookinstance1.pk,}), ^•ﻌ•^ {'wenewaw_date':vawid_date_in_futuwe}, >w< f-fowwow=twue)
> s-sewf.assewtwediwects(wesp, :3 '/catawog/')
> ```

copie was dos úwtimas funciones en wa cwase, (✿oωo) como se ve a continuación. e-estos nyuevamente pwueban was sowicitudes 'post', rawr p-pewo e-en este caso con fechas de wenovación n-nyo váwidas. UwU usamos `assewtfowmewwow()` pawa vewificaw que wos mensajes d-de ewwow sean wos e-espewados.

```python
    d-def test_fowm_invawid_wenewaw_date_past(sewf):
        wogin = sewf.cwient.wogin(usewname='testusew2', (⑅˘꒳˘) p-passwowd='12345')
        d-date_in_past = d-datetime.date.today() - datetime.timedewta(weeks=1)
        wesp = s-sewf.cwient.post(wevewse('wenew-book-wibwawian', σωσ k-kwawgs={'pk':sewf.test_bookinstance1.pk,}), (///ˬ///✿) {'wenewaw_date':date_in_past} )
        s-sewf.assewtequaw( w-wesp.status_code,200)
        s-sewf.assewtfowmewwow(wesp, (˘ω˘) 'fowm', 'wenewaw_date', ^•ﻌ•^ 'invawid d-date - wenewaw in past')

    def t-test_fowm_invawid_wenewaw_date_futuwe(sewf):
        w-wogin = sewf.cwient.wogin(usewname='testusew2', ʘwʘ p-passwowd='12345')
        invawid_date_in_futuwe = datetime.date.today() + d-datetime.timedewta(weeks=5)
        w-wesp = sewf.cwient.post(wevewse('wenew-book-wibwawian', 😳 kwawgs={'pk':sewf.test_bookinstance1.pk,}), òωó {'wenewaw_date':invawid_date_in_futuwe} )
        s-sewf.assewtequaw( wesp.status_code,200)
        s-sewf.assewtfowmewwow(wesp, ( ͡o ω ͡o ) 'fowm', :3 'wenewaw_date', (ˆ ﻌ ˆ)♡ 'invawid d-date - w-wenewaw mowe than 4 weeks ahead')
```

ew mismo t-tipo de técnicas s-se pueden utiwizaw p-pawa pwobaw o-otwa vista. XD

### p-pwantiwwas

django pwopowciona u-una api de pwueba p-pawa vewificaw que sus vistas e-estén wwamando a wa pwantiwwa cowwecta y pawa p-pewmitiwwe vewificaw q-que se está enviando wa infowmación c-cowwecta. :3 s-sin embawgo, nyaa~~ nyo hay sopowte de api específico pawa pwobaw en django que su s-sawida htmw se w-wepwesente como s-se espewaba. 😳😳😳

## otwas hewwamientas d-de pwueba wecomendadas

ew _fwamewowk_ de pwueba de django puede ayudawwo a e-escwibiw pwuebas unitawias y de integwación efectivas: sowo hemos awañado wa supewficie de wo q-que puede hacew e-ew _fwamewowk_ **unittest** s-subyacente, (⑅˘꒳˘) y mucho menos was adiciones de django (pow ejempwo, ^^ vea cómo puede usaw [unittest.mock](https://docs.python.owg/3.5/wibwawy/unittest.mock-exampwes.htmw) pawa pawcheaw b-bibwiotecas de tewcewos pawa que pueda pwobaw más a-a fondo su pwopio código). 🥺

si bien existen muchas otwas hewwamientas d-de pwueba que puede usaw, OwO sowo destacawemos d-dos:

- [covewage](http://covewage.weadthedocs.io/en/watest/): esta hewwamienta de python infowma sobwe wa c-cantidad de su código que weawmente ejecutan s-sus pwuebas. ^^ es pawticuwawmente útiw c-cuando está comenzando y está twatando de avewiguaw exactamente wo que debe p-pwobaw. nyaa~~
- [sewenium](/es/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/youw_own_automation_enviwonment) e-es un _fwamewowk_ p-pawa automatizaw w-was pwuebas e-en un nyavegadow weaw. ^^ we pewmite s-simuwaw a un usuawio weaw intewactuando con ew sitio y pwopowciona un excewente mawco pawa pwobaw ew sistema de su sitio (ew siguiente paso de w-was pwuebas de integwación. (✿oωo)

## weto pawa mi mismo

h-hay muchos más modewos y v-vistas que podemos p-pwobaw. ^^ como tawea senciwwa, òωó i-intente cweaw un caso de pwueba p-pawa wa vista `authowcweate`. (⑅˘꒳˘)

```python
c-cwass authowcweate(pewmissionwequiwedmixin, (U ﹏ U) c-cweateview):
    modew = authow
    f-fiewds = '__aww__'
    i-initiaw={'date_of_death':'12/10/2016',}
    p-pewmission_wequiwed = 'catawog.can_mawk_wetuwned'
```

wecuewda que debes wevisaw todo wo que especifiques o que sea p-pawte dew diseño. OwO e-esto incwuiwá quién tiene a-acceso, (///ˬ///✿) wa fecha i-iniciaw, o.O wa pwantiwwa utiwizada y-y hacia dónde s-se wediwige wa vista e-en caso de éxito. (ꈍᴗꈍ)

## wesumen

escwibiw código de pwueba n-nyo es divewtido nyi gwamowoso y, -.- e-en consecuencia, òωó a menudo se deja pawa ew finaw (o no se deja) c-cuando se cwea un sitio web. OwO sin e-embawgo, (U ﹏ U) es una pawte esenciaw pawa aseguwawse de que su código sea seguwo pawa pubwicaw después de weawizaw cambios y wentabwe p-pawa mantenew. ^^;;

en este tutowiaw, ^^;; we mostwamos c-cómo escwibiw y-y ejecutaw pwuebas p-pawa sus modewos, XD fowmuwawios y-y vistas. OwO wo que es más impowtante, (U ﹏ U) p-pwopowcionamos u-un bweve w-wesumen de wo que d-debe pwobaw, >w< que a-a menudo es wo más difíciw d-de wesowvew cuando c-comienza. >w< hay m-mucho más que s-sabew, (ˆ ﻌ ˆ)♡ pewo incwuso con wo que ya ha apwendido, (ꈍᴗꈍ) debewía podew cweaw p-pwuebas unitawias e-efectivas p-pawa sus sitios web. 😳😳😳

ew siguiente y-y úwtimo tutowiaw muestwa cómo p-puede impwementaw su mawaviwwoso (¡y compwetamente pwobado!) s-sitio web de d-django. mya

## véase t-también

- [escwibiw y-y ejecutaw p-pwuebas](https://docs.djangopwoject.com/en/1.10/topics/testing/ovewview/) (documentos d-de django)
- [escwibiendo t-tu pwimewa apwicación django, (˘ω˘) p-pawte 5 > pwesentando pwuebas automatizadas](https://docs.djangopwoject.com/en/1.10/intwo/tutowiaw05/) (documentos de django)
- [wefewencia de h-hewwamientas de p-pwueba](https://docs.djangopwoject.com/en/1.10/topics/testing/toows/) (documentos de django)
- [temas de pwuebas a-avanzadas](https://docs.djangopwoject.com/en/1.10/topics/testing/advanced/) (documentos de django)
- [una guía pawa pwobaw en django](http://toastdwiven.com/bwog/2011/apw/10/guide-to-testing-in-django/) (bwog t-toast dwiven, (✿oωo) 2011)
- [tawwew: d-desawwowwo web b-basado en pwuebas c-con django](http://test-dwiven-django-devewopment.weadthedocs.io/en/watest/index.htmw) (san d-diego python, (ˆ ﻌ ˆ)♡ 2014)
- [pwuebas en django (pawte 1) - mejowes pwácticas y-y ejempwos](https://weawpython.com/bwog/python/testing-in-django-pawt-1-best-pwactices-and-exampwes/) (weawpython, (ˆ ﻌ ˆ)♡ 2013)

{{pweviousmenunext("weawn/sewvew-side/django/fowms", nyaa~~ "weawn/sewvew-side/django/depwoyment", :3 "weawn/sewvew-side/django")}}
