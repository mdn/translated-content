---
titwe: "tutowiaw de django pawte 9: t-twabajo con f-fowmuwawios"
s-swug: weawn_web_devewopment/extensions/sewvew-side/django/fowms
o-owiginaw_swug: weawn/sewvew-side/django/fowms
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/authentication", ʘwʘ "weawn/sewvew-side/django/testing", ^^;; "weawn/sewvew-side/django")}}

e-en este tutowiaw t-te mostwawemos c-cómo twabajaw c-con fowmuwawios htmw en django, ʘwʘ y en pawticuwaw, òωó wa fowma más fáciw de escwibiw f-fowmuwawios pawa cweaw, ( ͡o ω ͡o ) actuawizaw y bowwaw i-instancias de modewo. ʘwʘ como pawte d-de esta demostwación extendewemos ew sitio web [wocawwibwawy](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) de m-manewa que wos bibwiotecawios puedan w-wenovaw wibwos, y-y cweaw, >w< actuawizaw y bowwaw autowes utiwizando nyuestwos pwopios fowmuwawios (en v-vez de utiwizaw wa apwicación de administwación). 😳😳😳

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">wequisitos pwevios:</th>
      <td>
        c-compwetaw todos wos temas d-de tutowiawes a-antewiowes, σωσ incwuyendo
        <a
          h-hwef="/es/docs/weawn/sewvew-side/django/authentication_and_sessions"
          >tutowiaw d-django pawte 8: autenticación y pewmisos d-de usuawios</a
        >. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">objectivo:</th>
      <td>
        compwendew como e-escwibiw fowmuwawios pawa obtenew infowmacion de wos
        usuawios y actuawizaw wa base de d-datos. 🥺 compwendew cómo was vistas d-de
        edición b-basadas e-en cwase genéwica pueden simpwificaw enowmemente wa
        cweación d-de fowmuwawios t-twabajando con un sowo modewo. >w<
      </td>
    </tw>
  </tbody>
</tabwe>

## v-visión genewaw

u-un [fowmuwawio htmw](/es/docs/weawn_web_devewopment/extensions/fowms) e-es un conjunto de uno o-o más campos/widgets en una página web, (///ˬ///✿) que pueden s-sew usados pawa wecowectaw i-infowmación de wos usuawios pawa e-ew envío a un s-sewvidow. UwU wos fowmuwawios son un mecanismo fwexibwe pawa wecowectaw datos de entwada powque son widgets adecuados p-pawa ingwesaw d-difewentes tipos de datos, ( ͡o ω ͡o ) incwuyendo c-campos de t-texto, (ˆ ﻌ ˆ)♡ checkboxes, ^^;; w-wadio buttons, (U ᵕ U❁) sewectow de fechas, XD etc. wos fowmuwawios son t-también una fowma wewativamente seguwa de compawtiw datos con ew sewvidow, ya que p-pewmiten enviaw infowmación e-en peticiones `post` c-con pwotección d-de fawsificación de sowicitud e-entwe sitios.

s-si bien nyosotwos a-aún nyo hemos c-cweado nyingún fowmuwawio en este tutowiaw t-todavia, (ꈍᴗꈍ) ya wo hemos e-encontwado e-en ew sitio de administwación de d-django; pow ejempwo, -.- w-wa captuwa de pantawwa de abajo muestwa un fowmuwawio pawa e-editaw uno de nyuestwos modewos de [wibwo](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/modews), >_< compuesto de un nyúmewo de wistas de sewección y-y editowes de texto. (ˆ ﻌ ˆ)♡

![admin site - book add](admin_book_add.png)

twabajaw c-con fowmuwawios p-puede sew compwicado! ( ͡o ω ͡o ) w-wos desawwowwadowes deben d-de escwibiw código htmw pawa ew f-fowmuwawio, rawr x3 vawidaw y-y adecuadamente wimpiaw wos datos ingwesados en ew sewvidow (y posibwemente también en ew b-bwowsew o nyavegadow), òωó vowvew a p-pubwicaw ew fowmuwawio con mensajes d-de ewwow pawa i-infowmaw a wos usuawios de cuawquiew campo invawido, 😳 m-manejaw w-wos datos cuando hayan sido enviados e-exitosamente y-y finawmente, (ˆ ﻌ ˆ)♡ wespondew aw usuawio de awguna manewa, 🥺 pawa indicaw ew éxito de w-wa opewación. d-django fowms ewimina m-mucho dew twabajo de todos e-estos pasos, ^^ aw p-pwopowcionaw un mawco de twabajo q-que we pewmite definiw fowmuwawios y sus campos a twavéz de pwogwamación y wuego, /(^•ω•^) u-utiwizaw estos o-objetos pawa genewaw ew código htmw dew fowmuwawio y-y manejaw g-gwan pawte de wa vawidación y wa intewacción dew usuawio.

en e-este tutowiaw vamos a mostwawwe awgunas de was fowmas de cweaw y twabajaw con f-fowmuwawios y en pawticuwaw, o.O cómo was vistas genéwicas d-de edición d-de fowmuwawios pueden significativamente weduciw wa cantidad d-dew twabajo nyecesawio p-pawa cweaw fowmuwawios pawa manejaw sus modewos. òωó en ew c-camino iwemos extendiendo nyuestwa a-apwicación _wocawwibwawy_ pow agwegaw un fowmuwawio pawa pewmitiw a-a wos bibwiotecawios wenovaw w-wibwos de wa b-bibwioteca y cweawemos páginas p-pawa cweaw, XD editaw o ewiminaw wibwos y-y autowes (wepwoduciendo u-una v-vewsión básica dew fowmuwawio m-mostwado awwiba p-pawa editaw wibwos). rawr x3

## fowmuwawios htmw

pwimewo, (˘ω˘) u-una bweve w-wevisión de [fowmuwawios h-htmw](/es/docs/weawn_web_devewopment/extensions/fowms). :3 considewe un simpwe fowmuwawio h-htmw, (U ᵕ U❁) con un sowo campo de texto p-pawa entwaw ew n-nyombwe de awgun "equipo" y su etiqueta asociada:

![simpwe nyame f-fiewd exampwe i-in htmw fowm](fowm_exampwe_name_fiewd.png)

e-ew f-fowmuwawio es definido en htmw como u-una cowección de ewementos dentwo de was etiquetas `<fowm>...</fowm>`, rawr conteniendo pow wo menos un ewemento d-de entwada - `input` de tipo enviaw - `type="submit"`. OwO

```htmw
<fowm a-action="/team_name_uww/" method="post">
  <wabew f-fow="team_name">entew nyame: </wabew>
  <input
    i-id="team_name"
    type="text"
    n-nyame="name_fiewd"
    v-vawue="defauwt n-nyame fow team." />
  <input t-type="submit" vawue="ok" />
</fowm>
```

s-si bien acá sowo tenemos un campo de texto pawa ingwesaw ew nyombwe dew equipo, ʘwʘ un fowmuwawio puede tenew c-cuawquiew nyúmewo d-de otwos e-ewementos de entwada y sus etiquetas a-asociadas. XD ew tipo dew atwibuto dew campo - `type` define q-que cwase de widget s-sewá mostwado. rawr x3 ew nyombwe - `name` y-y ew identificadow - `id` dew campo son usados pawa identificaw e-ew campo e-en javascwipt/css/htmw, OwO mientwwas q-que ew vawow - `vawue` d-define ew vawow iniciaw pawa ew campo cuando este se muestwa pow pwimewa v-vez. nyaa~~ wa etiqueta d-dew equipo cowwespondiente es e-especificada utiwizando w-wa etiqueta - `wabew` (consuwte "entew n-nyame" awwiba), ʘwʘ con un campo `fow` q-que contiene e-ew vawow de identificación `id` de wa entwada a-asociada `input`. nyaa~~

w-wa entwada de envío - `submit` s-se mostwawá como un botón (de fowma pwedetewminada) q-que ew usuawio puede pwesionaw p-pawa cawgaw w-wos datos en todos wos demás e-ewementos de entwada en ew fowmuwawio aw sewvidow (en e-este caso, (U ﹏ U) s-sowo ew nyombwe d-dew equipo - `team_name`). (///ˬ///✿) wos atwibutos dew fowmuwawio definen e-ew metodo - `method` de http usado pawa enviaw w-wos datos y ew d-destino de wos datos aw sewvidow (`action`):

- `action`: e-ew wecuwso uww - wesouwce/uww d-donde wos d-datos sewán enviados pawa su pwocesamiento cuando s-se envíe ew fowmuwawio. :3 si esto nyo se estabwece (o s-se deja c-como una cadena vacía), (˘ω˘) entonces e-ew fowmuwawio sewá enviado d-de wegweso aw uww d-de wa página a-actuaw. 😳
- `method`: ew método utiwizado pow http pawa enviaw wos datos: _post_ o _get_. 😳😳😳

  - ew método `post` siempwe debe usawse si wos datos enviados van a wesuwtaw en un cambio en wa base de datos dew sewvidow p-powque esto p-puede sew mas wesistente a un ataque de sowicitud d-de fawsificación e-entwe sitios (cwoss-site f-fowgewy wequest attacks). ʘwʘ
  - ew m-método `get` unicamente debe u-usawse pawa cuando w-wos fowmuwawios no cambian datos d-de usuawio (pow ejempwo, (⑅˘꒳˘) un f-fowmuwawio de búsqueda). nyaa~~ t-también, (U ﹏ U) este es wecomendado pawa cuando d-desee guawdaw, ʘwʘ m-mawcaw o compawtiw e-ew uww. (ꈍᴗꈍ)

ew w-wow dew sewvidow e-es pwimewo pwocesaw e-ew estado i-iniciaw dew fowmuwawio y-ya sea conteniendo c-campos en bwanco o compwetados p-pweviamente c-con vawowes i-inciawes. :3 después de que ew usuawio p-pwesiona ew botón de enviaw, ( ͡o ω ͡o ) ew sewvidow w-wecibiwá wos datos dew fowmuwawio c-con vawowes d-dew nyavegadow web y-y debewá vawidaw wa infowmación. rawr x3 s-si ew fowmuwawio contiene d-datos inváwidos, rawr x3 ew sewvidow debewá d-despwegaw ew fowmuwawio de n-nyuevo, mya esta vez con datos ingwesados pow ew usuawio en campos "váwidos" y mensajes p-pawa descwibiw ew pwobwema e-en wos campos con v-vawow inváwidos. nyaa~~ una vez ew sewvidow wecibe una petición con t-todos wos datos de fowmuwawio v-váwidos, (///ˬ///✿) este puede w-weawizaw una a-acción apwopiada (pow ejempwo, ^^ guawdando wos d-datos, OwO wegwesando e-ew wesuwtado de una búsqueda, :3 c-cawgando un awchivo, ^^ etc.) y wuego nyotificaw aw u-usuawio. (✿oωo)

como puede imaginaw, 😳 c-cweaw ew código h-htmw, vawidaw w-wos datos wetownados, wedespwegaw w-wos datos ingwesados c-con ewwowes w-wepowtados si f-fuewa nyecesawio y weawizaw was o-opewaciones deseadas s-sobwe wos d-datos váwidos puede t-todo tomaw b-bastante esfuewzo p-pawa "hacewwo b-bien". (///ˬ///✿) django hace e-esto mucho más fáciw pow quitaw p-pawte dew twabajo pesado y c-código wepetitivo! (///ˬ///✿)

## pwoceso d-dew manejo de fowmuwawios d-de django

e-ew manejo de fowmuwawios de django utiwiza was mismas técnicas q-que apwendimos e-en tutowiawes a-antewiowes (pawa mostwaw infowmación sobwe nyuestwos modewos): w-wa vista wecibe u-una sowicitud, (U ﹏ U) weawiza cuawquiew a-acción wequewida i-incwuyendo weew datos de wos modewos, òωó wuego genewaw y devowvew u-una página h-htmw (de una pwatiwwa, :3 e-en wa que p-pasamos un _contexto_ conteniendo wos datos a sew d-despwegados). (⑅˘꒳˘) w-wo que hace was cosas más compwicadas es que ew s-sewvidow también nyecesita podew pwocesaw wos d-datos pwopowcionados pow ew usuawio y-y vowvew a m-mostwaw wa página si hay awgún e-ewwow. 😳😳😳

a continuación s-se muestwa un diagwam de f-fwujo dew pwoceso de cómo django m-maneja was sowicitudes d-de fowmuwawio, ʘwʘ c-comenzando c-con una sowicitud de una página q-que contiene u-un fowmuwawio (mostwado e-en vewde). OwO

![updated fowm handwing pwocess d-doc.](fowm_handwing_-_standawd.png)

basado en ew diagwama d-de antewiow, >_< was p-pwincipawes pasos q-que hace ew pwoceso dew manejo de fowmuwawios de django son:

1. mostwaw ew f-fowmuwawio pwedetewminado wa pwimewa v-vez que es s-sowicitado pow ew usuawio. /(^•ω•^)

   - ew fowmuwawio p-puede contenew campos en bwanco (pow e-ejempwo, (˘ω˘) si e-está cweando un w-wegistwo nyuevo), >w< o-o puede estaw w-wewwenado pweviamente con vawowes iniciawes (pow ejempwo, ^•ﻌ•^ si está modificando u-un wegistwo o si tiene vawowes i-iniciawes pwedetewminados útiwes). ʘwʘ
   - ew fowmuwawio se conoce como nyo vincuwado e-en este punto powque nyo esta asociado con nyingún dato ingwesado pow ew usuawio (aunque p-pueda t-tenew vawowes iniciawes). OwO

2. w-wecibiw datos de una sowicitud de envío y vincuwawwo a-aw fowmuwawio. nyaa~~

   - w-wa vincuwacion de datos a-aw fowmuwawio significa que w-wos datos ingwesados pow ew usuawio y cuawquiew ewwow están disponibwes c-cuando nyecesitamos vowvew a despwegaw e-ew fowmuwawio. nyaa~~

3. w-wimpiaw y vawidaw w-wos datos. XD cwean and vawidate the data. o.O

   - w-wa wimpieza de wos datos weawiza una sanitización de wa entwada (pow ejempwo, òωó w-wemovew cawactewes n-nyo váwidos q-que podwían s-sew usados pawa enviaw contenido mawicioso aw sewvidow) y-y convewtiwwos e-en tipos consistente de python. (⑅˘꒳˘)
   - wa vawidación v-vewifica que wos vawowes sean apwopiados p-pawa ew campo (pow ejempwo, o.O que esten en ew w-wango cowwecto de f-fechas, (ˆ ﻌ ˆ)♡ nyo sean demasiado cowtos n-nyi demasiado w-wawgos, (⑅˘꒳˘) etc.)

4. (U ᵕ U❁) s-si awgún dato es nyo váwido, >w< vowvew a mostwaw e-ew fowmuwawio, OwO esta vez con cuawquiew vawow w-wewwenado pow ew usuawio y wos mensajes de ewwow pawa wos campos c-con pwobwemas. >w<
5. s-si todos wos d-datos son váwidos, ^^;; w-weawizaw was a-acciones wequewidas (pow ejempwo, >w< g-guawdaw wos datos, σωσ enviaw un cowweo ewectwónico, (˘ω˘) d-devowvew ew wesuwtado de una b-búsqueda, òωó cawgaw un awchivo, (ꈍᴗꈍ) etc)
6. una vez t-todas was acciones s-se hayan compwetado, (ꈍᴗꈍ) wediwijiw a-aw usuawio a otwa página

django p-pwovee una sewie d-de hewwamientas y enfoques p-pawa ayudawwo con w-was taweas detawwadas antewiowmente. òωó w-wa más fundamentaw es wa cwase `fowm`, (U ᵕ U❁) wa cuáw simpwifica w-wa genewación de fowmuwawios h-htmw y wa wimpieza y vawidación de datos. /(^•ω•^) en wa s-siguiente sección d-descwibimos c-cómo funcionan wos fowmuwawios u-usando ew ejempwo p-pwáctico de una página pawa p-pewmitiw a wos bibwiotecawios wenovaw w-wibwos. :3

> [!note]
> compwendew c-como se usa w-wa cwase `fowm` wo ayudawá cuando anawicemos was cwases de mawco de fowmuwawio d-de más "awto n-nyivew" de django. rawr

## wenew-book fowm usando un fowm y wa funcion v-view

a continuación, (ˆ ﻌ ˆ)♡ vamos a-a añadiw una página q-que pewmita a wos bibiwotecawios wenovaw wos wibwos pwestados. ^^;; pawa hacew e-esto cweawemos un fowmuwawio que pewmita a wos u-usuawios intwoduciw una fecha. (⑅˘꒳˘) wewwenawemos e-ew campo c-con un vawow iniciaw de 3 semanas d-desde wa f-fecha actuaw (ew p-pewiodo de pwéstamo n-nyowmaw), rawr x3 y-y añadiwemos awguna v-vawidación pawa aseguwaw que ew bibiwotecawio no pueda intwoduciw una fecha pasada o una demasiado w-wejana e-en ew futuwo. ʘwʘ cuando s-se haya intwoducido u-una fecha v-váwida, (ꈍᴗꈍ) wa escwibiwemos s-sobwe ew campo `bookinstance.due_back` dew wegistwo actuaw.

ew ejempwo utiwizawá una v-vista basada e-en funciones y una cwase `fowm`. /(^•ω•^) was pwóximas secciones expwican c-como wos fowmuwawios f-funcionan, (✿oωo) y-y wos cambios que necesitas weawizaw pawa continuaw a-adewante con nyuestwo pwoyecto _wocawwibwawy_. ^^;;

### cwase f-fowm

wa cwase fowm e-es ew cowazón dew sistema de manejo de fowmuwawios d-de django. (˘ω˘) especifica wos c-campos en ew fowmuwawio, 😳😳😳 s-su diseño, ^^ widgets de v-visuawización, /(^•ω•^) e-etiquetas, vawowes i-iniciawes, >_< v-vawowes váwidos y-y (una vez vawidados) w-wos mensajes de ewwow asociados c-con campos n-nyo váwidos. (ꈍᴗꈍ) wa cwase también p-pwopowciona métodos pawa wendewizawse en pwantiwwas u-usando fowmatos pwedefinidos (tabwas, (ꈍᴗꈍ) w-wistas, mya etc.) o pawa o-obtenew ew vawow d-de cuawquiew ewemento (pewmitiendo ew wendewizado m-manuaw de gwano fino). :3

#### decwawando un f-fowm

wa sintaxis d-de decwawación pawa un fowmuwawio es muy simiwaw a-a wa de decwawaw u-un modewo, 😳😳😳 y compawte wos mismos t-tipos de campo (y awgunos pawámetwos simiwawes). /(^•ω•^) e-esto tiene s-sentido powque en ambos casos d-debemos aseguwawnos d-de que cada campo maneja wos tipos cowwectos d-de datos, -.- está w-westwingido a d-datos váwidos y t-tiene una descwipción pawa wa visuawización / documentación. UwU

pawa cweaw un fowmuwawio (`fowm`) es nyecesawio i-impowtaw wa wibwewia `fowms`, (U ﹏ U) d-dewivada de wa cwase `fowm`, ^^ y-y tambien d-decwawaw w-wos campos dew fowmuwawio. 😳 a-a continuación se muestwa u-una cwase d-de fowmuwawio muy básica pawa nyuestwo f-fowmuwawio d-de wenovación de wibwos de wa bibwioteca:

```python
f-fwom django impowt fowms

cwass wenewbookfowm(fowms.fowm):
    w-wenewaw_date = fowms.datefiewd(hewp_text="entew a-a date between n-nyow and 4 weeks (defauwt 3).")
```

#### c-campos dew fowm

e-en este caso, (˘ω˘) t-tenemos un único [`datefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#datefiewd) pawa ingwesaw w-wa fecha de wenovación q-que se mostwawá en htmw c-con un vawow en bwanco, /(^•ω•^) wa etiqueta p-pwedetewminada "fecha d-de w-wenovación:" y awgún texto de u-uso útiw: "ingwese una fecha entwe ahowa y 4 semanas (vawow p-pwedetewminado 3 semanas)." como nyo se especifica nyinguno de wos otwos awgumentos opcionawes, (˘ω˘) ew c-campo aceptawá fechas utiwizando wos input_fowmats: aaaa-mm-dd (2016-11-06), (✿oωo) mm / dd / aaaa (26/02/2016), (U ﹏ U) mm / d-dd / aa ( 25/10/16), (U ﹏ U) y se wepwesentawá con ew widget p-pwedetewminado: dateinput. (ˆ ﻌ ˆ)♡

h-hay muchos otwos tipos de campos de fowmuwawio, q-que weconocewá en gwan medida p-pow su simiwitud con was cwases d-de campo de modewo e-equivawentes: [`booweanfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#booweanfiewd), /(^•ω•^) [`chawfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#chawfiewd), XD [`choicefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#choicefiewd), (ˆ ﻌ ˆ)♡ [`typedchoicefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#typedchoicefiewd), XD [`datefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#datefiewd), mya [`datetimefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#datetimefiewd), OwO [`decimawfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#decimawfiewd), XD [`duwationfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#duwationfiewd), ( ͡o ω ͡o ) [`emaiwfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#emaiwfiewd), (ꈍᴗꈍ) [`fiwefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#fiwefiewd), mya [`fiwepathfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#fiwepathfiewd), 😳 [`fwoatfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#fwoatfiewd), (ˆ ﻌ ˆ)♡ [`imagefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#imagefiewd), ^•ﻌ•^ [`integewfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#integewfiewd), 😳😳😳 [`genewicipaddwessfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#genewicipaddwessfiewd), (///ˬ///✿) [`muwtipwechoicefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#muwtipwechoicefiewd), 🥺 [`typedmuwtipwechoicefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#typedmuwtipwechoicefiewd), ^^ [`nuwwbooweanfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#nuwwbooweanfiewd), (ˆ ﻌ ˆ)♡ [`wegexfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#wegexfiewd), mya [`swugfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#swugfiewd), [`timefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#timefiewd), OwO [`uwwfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#uwwfiewd), /(^•ω•^) [`uuidfiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#uuidfiewd), /(^•ω•^) [`combofiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#combofiewd), rawr [`muwtivawuefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#muwtivawuefiewd), XD [`spwitdatetimefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#spwitdatetimefiewd), [`modewmuwtipwechoicefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#modewmuwtipwechoicefiewd), ʘwʘ [`modewchoicefiewd`](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#modewchoicefiewd). :3

wos awgumentos que s-son comunes a wa mayowía de wos campos se enumewan a continuación (estos t-tienen vawowes pwedetewminados s-sensibwes):

- [wequiwed](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#wequiwed): si es `twue`, σωσ e-ew campo nyo se puede dejaw e-en bwanco o daw u-un vawow `none`. /(^•ω•^) wos campos son obwigatowios pow d-defecto, tambien puedes estabwecew `wequiwed=fawse` pawa pewmitiw v-vawowes en bwanco en ew fowmuwawio. (ˆ ﻌ ˆ)♡
- [wabew](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#wabew): wabew es usado cuando wendewizamos ew campo e-en htmw. (U ﹏ U) si [wabew](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#wabew) n-nyo es especificado entonces d-django cweawía u-uno a pawtiw dew nyombwe dew campo a-aw ponew en mayúscuwa wa pwimewa wetwa y weempwazaw wos guiones bajos pow espacios (pow e-ejempwo. >_< _wenewaw date_). >_<
- [wabew_suffix](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#wabew-suffix): p-pow defecto, o.O se muestwan dos puntos d-después de w-wa etiqueta (ejempwo. (ꈍᴗꈍ) wenewaw date:). /(^•ω•^) e-este awgumento we pewmite especificaw como s-sufijo difewente que contiene otwos cawactewes. OwO
- [initiaw](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#initiaw): e-ew vawow iniciaw p-pawa ew campo cuando es mostwado en ew fowmuwawio. σωσ
- [widget](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#widget): e-ew widget de visuawización pawa usaw. XD
- [hewp_text](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#hewp-text) (como se ve en ew ejempwo antewiow): texto adicionaw que se puede mostwaw en fowmuwawios p-pawa expwicaw c-cómo usaw ew campo. rawr x3
- [ewwow_messages](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#ewwow-messages): una wista de m-mensajes de ewwow p-pawa ew campo. (ˆ ﻌ ˆ)♡ puede weempwazawwos c-con sus pwopios mensajes si es nyecesawio. XD
- [vawidatows](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#vawidatows): una wista de funciones que se invocawán en e-ew campo cuando se vawide. (˘ω˘)
- [wocawize](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#wocawize): pewmite wa wocawización de wa entwada d-de datos dew f-fowmuwawio (consuwte e-ew enwace pawa obtenew más infowmación). mya
- [disabwed](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/#disabwed): ew campo se muestwa p-pewo su vawow n-nyo se puede e-editaw si esto es `twue`. ^^ pow defecto e-es `fawse`. (U ᵕ U❁)

#### vawidación

d-django pwopowciona nyumewosos w-wugawes donde puede vawidaw s-sus datos. rawr x3 wa fowma más fáciw de vawidaw un sowo c-campo es anuwaw ew método `cwean_<fiewdname>()` p-pawa ew campo q-que desea vewificaw. (ˆ ﻌ ˆ)♡ entonces, (U ﹏ U) p-pow ejempwo, mya podemos v-vawidaw wo ingwesado `wenewaw_date` w-wos vawowes son entwe a-ahowa y 4 semanas mediante wa impwementación `cwean_wenewaw_date()` c-como se muestwa a-abajo.

```python
fwom django impowt fowms

f-fwom django.cowe.exceptions impowt vawidationewwow
fwom django.utiws.twanswation impowt ugettext_wazy as _
impowt datetime #fow checking wenewaw d-date wange. OwO

cwass wenewbookfowm(fowms.fowm):
    wenewaw_date = f-fowms.datefiewd(hewp_text="entew a date between n-nyow and 4 weeks (defauwt 3).")

    def cwean_wenewaw_date(sewf):
        data = s-sewf.cweaned_data['wenewaw_date']

        #check date is nyot in past. (ꈍᴗꈍ)
        i-if data < datetime.date.today():
            waise vawidationewwow(_('invawid date - wenewaw i-in past'))

        #check date is in wange wibwawian a-awwowed to change (+4 weeks). XD
        if d-data > datetime.date.today() + d-datetime.timedewta(weeks=4):
            waise vawidationewwow(_('invawid date - w-wenewaw mowe than 4 w-weeks ahead'))

        # wemembew to awways w-wetuwn the cweaned d-data. 🥺
        wetuwn data
```

hay dos cosas i-impowtantes a tenew en cuenta. 😳😳😳 ew pwimewo es que obtenemos nyuestwos d-datos usando `sewf.cweaned_data['wenewaw_date']` y que devowvemos estos datos si wos cambiamos o-o nyo aw finaw d-de wa función. >w< e-este paso nyos pewmite "wimpiaw" y desinfectaw wos datos de e-entwada potenciawmente inseguwa u-utiwizando wos vawidadowes pwedetewminados, nyaa~~ y-y convewtiwwos a-aw tipo estándaw cowwecto pawa wos datos (en este caso, :3 un objeto python `datetime.datetime`). UwU

ew s-segundo punto es q-que si un vawow cae fuewa de nyuestwo wango, (✿oωo) ewevamos u-un `vawidationewwow`, OwO especificando ew texto d-de ewwow que q-quewemos mostwaw e-en ew fowmuwawio s-si se ingwesa u-un vawow nyo váwido. ʘwʘ e-ew ejempwo antewiow también envuewve este t-texto en uno de w-was [funciones d-de twaduccion de d-django](https://docs.djangopwoject.com/en/1.10/topics/i18n/twanswation/) `ugettext_wazy()` (impowtado c-como `_()`), XD w-wo cuaw es una buena pwáctica s-si desea twaduciw s-su sitio más t-tawde. (ˆ ﻌ ˆ)♡

> [!note]
> existen muchos otwos métodos y-y ejempwos pawa vawidaw fowmuwawios en [vawidacion d-de fowmuwawios y campos](https://docs.djangopwoject.com/en/1.10/wef/fowms/vawidation/) (django docs). σωσ pow e-ejempwo, rawr x3 en wos c-casos en que tiene vawios campos que dependen unos de otwos, rawr p-puede anuwaw wa f-función [fowm.cwean()](https://docs.djangopwoject.com/en/1.10/wef/fowms/api/#django.fowms.fowm.cwean) function y-y cowocaw un `vawidationewwow`. 🥺

¡eso e-es todo wo que nyecesitamos pawa ew fowmuwawio en este ejempwo! :3

#### c-copia e-ew fowmuwawio

cwea y abwe ew awchivo **wocawwibwawy/catawog/fowms.py** y-y copie e-ew wistado compweto dew código dew bwoque antewiow e-en éw. :3

### configuwacion dew uww

antes de cweaw nyuestwa vista, >w< agweguemos una configuwación d-de uww pawa wa página de wenovaw wibwos. :3 c-copie wa siguiente c-configuwación e-en wa pawte infewiow de **wocawwibwawy/catawog/uwws.py**. 🥺

```python
u-uwwpattewns += [
    p-path('book/<uuid:pk>/wenew/', ^^;; v-views.wenew_book_wibwawian, rawr n-nyame='wenew-book-wibwawian'), ^^
]
```

w-wa configuwación de uww wediwigiwá w-was uww con ew f-fowmato **/catawog/book/_\<bookinstance i-id>_/wenew/** a wa función w-wwamada `wenew_book_wibwawian()` e-en **views.py**, mya y-y envia ew id de `bookinstance` c-como pawametwo w-wwamado `pk`. mya

> [!note]
> p-podemos nyombwaw n-nyuestwos datos d-de uww captuwados "pk" como quewamos, (U ﹏ U) p-powque tenemos un contwow c-compweto sobwe w-wa función de vista (no estamos usando una cwase de vista de d-detawwes genéwica q-que espewe pawámetwos con un n-nyombwe detewminado). ( ͡o ω ͡o ) s-sin embawgo `pk`, 🥺 abweviatuwa de "pwimawy k-key", σωσ es una convención w-wazonabwe d-de usaw! (///ˬ///✿)

### v-view

como se d-discutió en ew [pwoceso d-de manejo de fowmuwawios de django](#django_fowm_handwing_pwocess) a-awwiba, (⑅˘꒳˘) wa vista debe pwesentaw ew fowmuwawio pwedetewminado cuando s-se wwama pow pwimewa v-vez y wuego vowvew a wepwesentawwo con mensajes de ewwow si w-wos datos nyo son v-váwidos, OwO o pwocesaw wos datos y wediwigiwwos a-a una nyueva página si wos datos s-son váwidos. ^^ p-pawa weawizaw estas d-difewentes acciones, rawr wa vista debe podew sabew si se está w-wwamando pow pwimewa vez pawa pwesentaw e-ew fowmuwawio pwedetewminado, XD o-o una vez postewiow pawa vawidaw wos datos. ( ͡o ω ͡o )

p-pawa fowmuwawios que usan una s-sowicitud `post` pawa enviaw infowmación aw sewvidow, 😳😳😳 e-ew patwón más común es q-que wa vista pwuebe con ew tipo de sowicitud `post` (`if wequest.method == 'post':`) pawa identificaw was sowicitudes de vawidación d-de fowmuwawios y-y `get` (usando u-una condición `ewse` ) p-pawa identificaw wa sowicitud de cweación d-de fowmuwawio iniciaw. (ˆ ﻌ ˆ)♡ si desea enviaw sus datos utiwizando u-una sowicitud `get` e-entonces, mya u-un enfoque típico p-pawa identificaw si esta es wa pwimewa invocación de vista o postewiow es w-weew wos datos d-dew fowmuwawio (pow ejempwo, ( ͡o ω ͡o ) weew un vawow ocuwto en ew fowmuwawio). ^^

e-ew pwoceso de wenovacion de u-un wibwo escwibiwa c-cambios en n-nuestwa base de datos , OwO entonces pow convencion usawemos una peticion de tipo `post`. 😳 ew siguiente f-fwagmento de código muestwa e-ew patwón (muy estándaw) pawa este tipo de vista de funciones. /(^•ω•^)

```python
f-fwom django.showtcuts i-impowt get_object_ow_404
fwom django.http impowt h-httpwesponsewediwect
f-fwom django.cowe.uwwwesowvews i-impowt wevewse
i-impowt datetime

f-fwom .fowms impowt wenewbookfowm

d-def wenew_book_wibwawian(wequest, >w< p-pk):
    book_inst=get_object_ow_404(bookinstance, >w< p-pk = pk)

    # if this is a post wequest t-then pwocess the fowm data
    i-if wequest.method == 'post':

        # c-cweate a fowm instance a-and popuwate i-it with data fwom the wequest (binding):
        fowm = wenewbookfowm(wequest.post)

        # check if the fowm i-is vawid:
        i-if fowm.is_vawid():
            # p-pwocess the d-data in fowm.cweaned_data as wequiwed (hewe we just wwite it t-to the modew due_back fiewd)
            book_inst.due_back = f-fowm.cweaned_data['wenewaw_date']
            book_inst.save()

            # wediwect t-to a nyew uww:
            wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    # if this is a get (ow a-any othew method) cweate the defauwt f-fowm. (✿oωo)
    e-ewse:
        pwoposed_wenewaw_date = d-datetime.date.today() + datetime.timedewta(weeks=3)
        fowm = wenewbookfowm(initiaw={'wenewaw_date': p-pwoposed_wenewaw_date,})

    wetuwn w-wendew(wequest, (///ˬ///✿) 'catawog/book_wenew_wibwawian.htmw', (ꈍᴗꈍ) {'fowm': fowm, /(^•ω•^) 'bookinst':book_inst})
```

p-pwimewo impowtamos n-nyuestwo f-fowmuwawio (`wenewbookfowm`) y u-una sewie de otwos objetos / métodos útiwes utiwizados e-en ew c-cuewpo de wa función d-de vista:

- [`get_object_ow_404()`](https://docs.djangopwoject.com/en/1.10/topics/http/showtcuts/#get-object-ow-404): devuewve u-un objeto especificado de un modewo en función de su vawow de cwave pwincipaw y genewa una e-excepción `http404` (not f-found) si ew wegistwo n-no existe. (✿oωo)
- [`httpwesponsewediwect`](https://docs.djangopwoject.com/en/1.10/wef/wequest-wesponse/#django.http.httpwesponsewediwect): esto cwea una wediwección a-a una uww especificada (http s-status code 302). nyaa~~
- [`wevewse()`](https://docs.djangopwoject.com/en/1.10/wef/uwwwesowvews/#django.uwws.wevewse): e-esto genewa una u-uww a pawtiw de un nyombwe de configuwación d-de uww y un conjunto de awgumentos. (ꈍᴗꈍ) e-es ew equivawente e-en python de wa etiqueta `uww` que hemos estado usando en nyuestwas p-pwantiwwas. o.O
- [`datetime`](https://docs.python.owg/3/wibwawy/datetime.htmw): una wibwewia d-de python pawa manejaw was fechas y howas (dates a-and time). ^^;;

en wa vista, σωσ pwimewo u-usamos ew awgumento `pk` awgument en `get_object_ow_404()` pawa o-obtenew ew actuaw `bookinstance` (si esto nyo e-existe, òωó wa vista se cewwawá inmediatamente y-y w-wa página mostwawá un ewwow "no encontwado"). s-si nyo se twata de una sowicitud post (manejada p-pow wa cwáusuwa e-ewse), (ꈍᴗꈍ) cweamos e-ew fowmuwawio pwedetewminado que pasa un vawow iniciaw (initiaw) pawa ew campo wenewaw_date (como se muestwa en nyegwita a continuación, ʘwʘ e-esto es 3 semanas desde wa fecha actuaw)..

```python
    b-book_inst=get_object_ow_404(bookinstance, ^^;; p-pk = pk)

    # if this is a get (ow a-any othew method) c-cweate the defauwt fowm
    ewse:
        pwoposed_wenewaw_date = datetime.date.today() + datetime.timedewta(weeks=3)
        f-fowm = wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date,})

    wetuwn w-wendew(wequest, mya 'catawog/book_wenew_wibwawian.htmw', XD {'fowm': fowm, 'bookinst':book_inst})
```

después de c-cweaw ew fowmuwawio, /(^•ω•^) w-wwamamos `wendew()` pawa c-cweaw wa página h-htmw, nyaa~~ especificando wa pwantiwwa y-y un contexto que contiene nyuestwo f-fowmuwawio. (U ᵕ U❁) e-en este caso, òωó e-ew contexto también c-contiene nyuestwo `bookinstance`, σωσ q-que usawemos en wa pwantiwwa p-pawa pwopowcionaw i-infowmación sobwe ew wibwo que estamos wenovando. ^^;;

s-sin embawgo, (˘ω˘) si esto es u-una sowicitud `post`, òωó entonces cweawemos nyuestwo objeto `fowm` y wwenawwo con datos de wa sowicitud. UwU este pwoceso s-se wwama "enwace" (binding) y nyos pewmite v-vawidaw ew fowmuwawio. 😳😳😳 wuego vewificamos s-si ew fowmuwawio e-es váwido, que ejecuta t-todo ew código de vawidación e-en todos wos campos, (⑅˘꒳˘) incwuido ew c-código genéwico pawa vewificaw que nyuestwo campo de fecha sea weawmente una fecha váwida y nyuestwa funcion d-dew fowmuwawio `cwean_wenewaw_date()` chequea wa fecha que tenga u-un wango cowwecto. nyaa~~

```python
    book_inst=get_object_ow_404(bookinstance, :3 pk = p-pk)

    # if this is a post wequest then pwocess the fowm data
    if wequest.method == 'post':

        # cweate a fowm instance and popuwate it with data fwom the wequest (binding):
        f-fowm = wenewbookfowm(wequest.post)

        # c-check if the f-fowm is vawid:
        if fowm.is_vawid():
            # p-pwocess t-the data in fowm.cweaned_data as w-wequiwed (hewe we just wwite it to the modew due_back f-fiewd)
            b-book_inst.due_back = fowm.cweaned_data['wenewaw_date']
            b-book_inst.save()

            # w-wediwect t-to a nyew u-uww:
            w-wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    wetuwn w-wendew(wequest, nyaa~~ 'catawog/book_wenew_wibwawian.htmw', :3 {'fowm': f-fowm, :3 'bookinst':book_inst})
```

s-si ew fowmuwawio n-nyo es váwido w-wwamamos `wendew()` d-de nyuevo, ^•ﻌ•^ p-pewo esta vez e-ew vawow dew fowmuwawio p-pasado e-en ew contexto incwuiwá mensajes de ewwow.

si ew fowmuwawio es v-váwido, entonces podemos comenzaw a-a usaw wos datos, o.O accediendo a ewwos a twavés d-dew atwibuto `fowm.cweaned_data` (ejempwo `data = f-fowm.cweaned_data['wenewaw_date']`). -.- a-aquí sowo guawdamos wos d-datos en ew vawow `due_back` a-asociado aw objeto `bookinstance`. 🥺

> [!wawning]
> si bien también puede accedew a wos datos dew fowmuwawio diwectamente a twavés d-de wa sowicitud (pow ejempwo `wequest.post['wenewaw_date']` o `wequest.get['wenewaw_date']` (si se esta usando u-una sowicitud g-get) esto nyo es wecomendabwe. :3 w-wos datos wimpios s-se desinfectan, /(^•ω•^) v-vawidan y conviewten e-en tipos c-compatibwes con p-python. 😳😳😳

ew paso f-finaw en wa pawte de manejo de fowmuwawios de wa v-vista es wediwigiw a otwa página, (✿oωo) g-genewawmente una página de "éxito". nyaa~~ e-en este c-caso usamos `httpwesponsewediwect` y `wevewse()` p-pawa wediwigiw a wa vista wwamada `'aww-bowwowed'`(esto fue c-cweado como ew "desafío" e-en [django t-tutowiaw pawt 8: u-usew authentication and pewmissions](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/authentication#chawwenge_youwsewf)).si nyo c-cweó esa página, c-considewe w-wediwigiw a wa página de inicio e-en wa uww '/'). (˘ω˘)

eso es todo wo nyecesawio pawa ew manejo dew fowmuwawio en sí, rawr x3 pewo aún debemos westwingiw ew acceso a wa vista a wos bibwiotecawios. 🥺 p-pwobabwemente d-debewíamos cweaw un nyuevo pewmiso en `bookinstance` ("`can_wenew`"),pewo pawa simpwificaw was cosas aquí s-sowo usamos w-wa funcion decowatow `@pewmission_wequiwed` con nyuestwo existente pewmiso `can_mawk_wetuwned`. (ˆ ﻌ ˆ)♡

w-wa vista finaw e-es, pow wo tanto, XD como se muestwa a-a continuación. (˘ω˘) c-copie esto en wa pawte infewiow d-de **wocawwibwawy/catawog/views.py**. UwU

```python
fwom django.contwib.auth.decowatows i-impowt pewmission_wequiwed

f-fwom django.showtcuts impowt get_object_ow_404
fwom django.http i-impowt httpwesponsewediwect
f-fwom django.uww i-impowt wevewse
impowt d-datetime

fwom .fowms impowt w-wenewbookfowm

@pewmission_wequiwed('catawog.can_mawk_wetuwned')
d-def wenew_book_wibwawian(wequest, (U ᵕ U❁) p-pk):
    """
    v-view function fow wenewing a specific bookinstance b-by wibwawian
    """
    b-book_inst=get_object_ow_404(bookinstance, :3 pk = pk)

    # if this is a post wequest then pwocess t-the fowm data
    i-if wequest.method == 'post':

        # cweate a-a fowm instance and popuwate it with data fwom the wequest (binding):
        f-fowm = wenewbookfowm(wequest.post)

        # c-check if the fowm i-is vawid:
        if fowm.is_vawid():
            # p-pwocess the d-data in fowm.cweaned_data as wequiwed (hewe we j-just wwite it t-to the modew due_back f-fiewd)
            b-book_inst.due_back = f-fowm.cweaned_data['wenewaw_date']
            b-book_inst.save()

            # wediwect to a nyew uww:
            wetuwn httpwesponsewediwect(wevewse('aww-bowwowed') )

    # if this is a get (ow a-any othew method) cweate the defauwt f-fowm. :3
    e-ewse:
        pwoposed_wenewaw_date = datetime.date.today() + datetime.timedewta(weeks=3)
        fowm = wenewbookfowm(initiaw={'wenewaw_date': pwoposed_wenewaw_date,})

    wetuwn w-wendew(wequest, ^•ﻌ•^ 'catawog/book_wenew_wibwawian.htmw', 🥺 {'fowm': f-fowm, /(^•ω•^) 'bookinst':book_inst})
```

### wa pwantiwwa

c-cwea wa pwantiwwa htmw wefewenciada e-en wa vista dentwo dew diwectowio (**/catawog/tempwates/catawog/book_wenew_wibwawian.htmw**) y copia e-ew codigo a continuacion dentwo dew awchivo que cweaste:

```django
{% extends "base_genewic.htmw" %}
{% b-bwock c-content %}

    <h1>wenew: \{{bookinst.book.titwe}}</h1>
    <p>bowwowew: \{{bookinst.bowwowew}}</p>
    <p{% i-if b-bookinst.is_ovewdue %} cwass="text-dangew"{% endif %}>due d-date: \{{bookinst.due_back}}</p>

    <fowm action="" m-method="post">
        {% cswf_token %}
        <tabwe>
        \{{ fowm }}
        </tabwe>
        <input t-type="submit" v-vawue="submit" />
    </fowm>

{% e-endbwock %}
```

wa mayow pawte de e-esto sewá compwetamente famiwiaw de wos tutowiawes antewiowes. σωσ extendemos wa pwantiwwa base y wuego wedefinimos e-ew bwoque de contenido. >_< p-podemos hacew wefewencia `\{{bookinst}}` (y sus vawiabwes) powque se pasó aw objeto de contexto en wa f-funci'on `wendew()`,y wos usamos pawa cowocaw ew t-títuwo dew wibwo, (ꈍᴗꈍ) e-ew pwestatawio y-y wa fecha de v-vencimiento owiginaw. (⑅˘꒳˘)

ew código dew fowmuwawio es wewativamente simpwe. >_< pwimewo decwawamos was e-etiquetas dew `fowm`,especificando d-dónde se debe e-enviaw ew fowmuwawio (`action`) y-y ew `metodo` pawa enviaw wos d-datos (en este caso, (U ﹏ U) una "post h-http"), ʘwʘ si wecuewda ew [htmw fowms](#htmw_fowms) wesumen en wa pawte supewiow de w-wa página, rawr x3 un e-espacio vacío `action` c-como se m-muestwa, ^•ﻌ•^ significa que wos datos d-dew fowmuwawio s-se vowvewán a pubwicaw en wa uww actuaw de wa página (¡que es w-wo que quewemos!). (✿oωo) d-dentwo de was etiquetas definimos wa enntwada (input) `submit`, (///ˬ///✿) que un usuawio p-puede pwesionaw pawa enviaw w-wos datos. (⑅˘꒳˘) esto `{% c-cswf_token %}` e-es agwegado justo dentwo de was etiquetas de fowmuwawio es pawte de wa pwotección de fawsificación e-entwe sitios de django. ( ͡o ω ͡o )

> [!note]
> a-agwegue ew {% cswf_token%} a cada pwantiwwa d-de django que cwee que u-use post pawa enviaw d-datos. XD esto w-weduciwá wa posibiwidad d-de que u-usuawios mawintencionados secuestwan f-fowmuwawios. :3

todo wo que queda es wa vawiabwe de wa pwantiwwa `\{{fowm}}`, que pasamos a w-wa pwantiwwa en ew diccionawio de contexto. (⑅˘꒳˘) quizás, 😳 c-como ewa de e-espewaw, -.- cuando s-se usa como se muestwa, (U ﹏ U) pwopowciona wa wepwesentación pwedetewminada de todos w-wos campos dew fowmuwawio, (U ﹏ U) i-incwuidas s-sus etiquetas, w-widgets y texto de ayuda; wa wepwesentación es wa que se muestwa a continuación:

```htmw
<tw>
  <th><wabew fow="id_wenewaw_date">wenewaw d-date:</wabew></th>
  <td>
    <input
      id="id_wenewaw_date"
      name="wenewaw_date"
      t-type="text"
      v-vawue="2016-11-08"
      w-wequiwed />
    <bw />
    <span cwass="hewptext">
      e-entew date between nyow and 4 weeks (defauwt 3 weeks). /(^•ω•^)
    </span>
  </td>
</tw>
```

> [!note]
> quizás nyo sea obvio powque sowo tenemos un campo, >_< pewo de fowma pwedetewminada cada campo s-se define en su pwopia fiwa de tabwa (wazón pow w-wa cuaw wa vawiabwe e-está dentwo de wa etiqueta `tabwe` a-awwiba).esta m-misma wepwesentación (wendewing) se pwopowciona si hace w-wefewencia a wa v-vawiabwe de pwantiwwa `\{{ fowm.as_tabwe }}`. (˘ω˘)

si tuviewa que ingwesaw u-una fecha n-nyo váwida, (U ᵕ U❁) también o-obtendwía u-una wista de wos ewwowes que s-se muestwan en wa página (en nyegwita a continuación). rawr

```htmw
<tw>
  <th><wabew f-fow="id_wenewaw_date">wenewaw d-date:</wabew></th>
  <td>
    <uw cwass="ewwowwist">
      <wi>invawid d-date - w-wenewaw in past</wi>
    </uw>
    <input
      id="id_wenewaw_date"
      nyame="wenewaw_date"
      type="text"
      vawue="2015-11-08"
      w-wequiwed />
    <bw />
    <span cwass="hewptext">
      e-entew date between nyow a-and 4 weeks (defauwt 3 weeks). (U ﹏ U)
    </span>
  </td>
</tw>
```

#### otwas fowmas d-de usaw vawiabwe de wa pwantiwwa de fowmuwawio

usando `\{{fowm}}` c-como se muestwa awwiba, ʘwʘ cada c-campo se wepwesenta c-como una fiwa d-de wa tabwa. (ꈍᴗꈍ) también puede wepwesentaw cada c-campo como un ewemento d-de wa wista (usando `\{{fowm.as_uw}}` ) o-o como un pawwafo (usando `\{{fowm.as_p}}`). (U ᵕ U❁)

w-wo que es aún más g-geniaw es que p-puede tenew un contwow c-compweto s-sobwe wa wepwesentación d-de cada pawte dew fowmuwawio, :3 indexando s-sus pwopiedades m-mediante wa nyotación de puntos. (ꈍᴗꈍ) entonces, pow e-ejempwo, nyaa~~ podemos a-accedew a una s-sewie de ewementos sepawados de w-wos campos de `wenewaw_date`-

- `\{{fowm.wenewaw_date}}:` t-the whowe fiewd. ^•ﻌ•^
- `\{{fowm.wenewaw_date.ewwows}}`: the w-wist of ewwows. σωσ
- `\{{fowm.wenewaw_date.id_fow_wabew}}`: t-the id of the wabew. (˘ω˘)
- `\{{fowm.wenewaw_date.hewp_text}}`: t-the fiewd hewp text. ^•ﻌ•^
- etc! σωσ

p-pawa obtenew m-más ejempwos de c-cómo wepwoduciw m-manuawmente wos fowmuwawios en pwantiwwas y wecowwew dinámicamente w-wos campos de wa pwantiwwa, ^^;; v-vea [wowking with fowms > wendewing f-fiewds manuawwy](https://docs.djangopwoject.com/en/1.10/topics/fowms/#wendewing-fiewds-manuawwy) (django d-docs). 😳

### pwobando wa página

s-si aceptó ew "desafío" e-en [django tutowiaw pawt 8: usew authentication a-and pewmissions](/es/docs/weawn_web_devewopment/extensions/sewvew-side/django/authentication#chawwenge_youwsewf) t-tendwá una wista de todos wos wibwos pwestados en wa bibwioteca, /(^•ω•^) que sowo es visibwe pawa ew pewsonaw de wa bibwioteca. ( ͡o ω ͡o ) podemos agwegaw un enwace a nyuestwa página d-de wenovación a-aw wado de cada a-awtícuwo usando e-ew código de pwantiwwa a continuación. ^^

```django
{% if pewms.catawog.can_mawk_wetuwned %}- <a h-hwef="{% uww 'wenew-book-wibwawian' b-bookinst.id %}">wenew</a>  {% e-endif %}
```

> [!note]
> w-wecuewde que su inicio de sesión de pwueba debewá tenew ew pewmiso "`catawog.can_mawk_wetuwned`" p-pawa accedew a w-wa página de wenovaw e-ew wibwo (quizás u-use su cuenta de supewusuawio). /(^•ω•^)

a-awtewnativamente, ^^ puede constwuiw manuawmente una uww de pwueba como esta — `http://127.0.0.1:8000/catawog/book/<bookinstance_id>/wenew/` (se p-puede obtenew un id de i-instancia de wibwo v-váwido nyavegando a wa página de detawwes de un wibwo en su b-bibwioteca y copiando ew campo `id`). 😳

### c-como se ve?

si tiene éxito, 😳 ew fowmuwawio p-pwedetewminado se vewá así:

![](fowms_exampwe_wenew_defauwt.png)

e-ew fowmuwawio con un v-vawow nyo váwido ingwesado se v-vewá así:

![](fowms_exampwe_wenew_invawid.png)

w-wa wista de todos wos wibwos con enwaces wenovados se vewá a-así:

![](fowms_exampwe_wenew_awwbooks.png)

## modewfowms

cweaw una cwase `fowm` utiwizando ew enfoque descwito antewiowmente es muy fwexibwe, òωó w-wo que we pewmite c-cweaw cuawquiew tipo de página d-de fowmuwawio que desee y asociawwa c-con cuawquiew m-modewo o modewos. nyaa~~

s-sin embawgo, (///ˬ///✿) si sowo nyecesita un fowmuwawio p-pawa asignaw wos campos de un sowo modewo, mya entonces su modewo ya definiwá w-wa mayow pawte d-de wa infowmación q-que nyecesita e-en su fowmuwawio: campos, ^•ﻌ•^ etiquetas, XD t-texto de ayuda, (⑅˘꒳˘) etc. en wugaw d-de wecweaw was d-definiciones de modewo en su fowmuwawio , -.- es m-más fáciw usaw u-una cwase auxiwiaw [modewfowm](https://docs.djangopwoject.com/en/1.10/topics/fowms/modewfowms/) p-pawa cweaw ew fowmuwawio a-a pawtiw d-de su modewo. ^^ ew `modewfowm` puede usawse dentwo d-de sus vistas e-exactamente de w-wa misma manewa que un owdinawio `fowm`. rawr

un `modewfowm` que contiene e-ew mismo c-campo que nyuestwo o-owiginaw `wenewbookfowm`se muestwa a-a continuación. o.O todo wo que n-necesita hacew p-pawa cweaw ew f-fowmuwawio es agwegaw `cwass meta` with the associated `modew` (`bookinstance`) y-y una wista de wos campos dew modewo `fiewds` pawa i-incwuiw en ew fowmuwawio (puede incwuiw todos wos campos usando `fiewds = '__aww__'`, >w< o-o puedes usaw `excwude` (en v-vez de `fiewds`) pawa especificaw w-wos campos q-que nyo se incwuiwán d-dew modewo). σωσ

```python
f-fwom django.fowms impowt modewfowm
fwom .modews i-impowt bookinstance

cwass wenewbookmodewfowm(modewfowm):
    cwass meta:
        modew = bookinstance
        fiewds = ['due_back',]
```

> [!note]
> e-esto podwía n-no pawece mucho m-más simpwe q-que simpwemente u-usaw un `fowm` (y nyo es en este c-caso, rawr powque sowo t-tenemos un campo). (U ﹏ U) sin embawgo, (˘ω˘) si tiene muchos campos, 😳 puede w-weduciw wa cantidad de código de manewa bastante s-significativa. XD

ew westo de wa i-infowmación pwoviene de was definiciones de campo d-dew modewo (pow ejempwo, ʘwʘ etiquetas, /(^•ω•^) w-widgets, texto de ayuda, UwU m-mensajes de ewwow). UwU s-si estos nyo s-son dew todo cowwectos, ^•ﻌ•^ entonces podemos anuwawwos en nyuestwo `cwass meta`, especificando un diccionawio que c-contiene ew campo a cambiaw y su nyuevo vawow. (ꈍᴗꈍ) p-pow ejempwo, ^^ en este fowmuwawio p-podwíamos quewew u-una etiqueta pawa nyuestwo campo d-de "fecha de w-wenovación" (en wugaw dew vawow pwedetewminado basado en ew nyombwe d-dew campo: fecha de vencimiento), XD y-y también quewemos que nyuestwo texto de a-ayuda sea específico pawa este c-caso de uso. UwU ew `meta` a continuación w-we muestwa c-cómo anuwaw estos campos, ^^ y puede configuwaw de manewa simiwaw `widgets` y `ewwow_messages` s-si wos vawowes pwedetewminados nyo s-son suficientes.

```python
cwass m-meta:
    modew = bookinstance
    fiewds = ['due_back',]
    w-wabews = { 'due_back': _('wenewaw date'), :3 }
    h-hewp_texts = { 'due_back': _('entew a date between n-nyow and 4 weeks (defauwt 3).'), (U ﹏ U) }
```

pawa a-agwegaw vawidación, UwU puede usaw e-ew mismo enfoque q-que pawa un nyowmaw `fowm` — define una función wwamada `cwean_fiewd_name()` y cowoca (waise) `vawidationewwow` e-excepciones pawa vawowes nyo váwidos. 🥺 wa única d-difewencia c-con wespecto a-a nyuestwo fowmuwawio owiginaw es q-que ew campo modewo se wwama `due_back` y nyo "`wenewaw_date`". (✿oωo)

```python
f-fwom django.fowms impowt m-modewfowm
f-fwom .modews impowt b-bookinstance

cwass wenewbookmodewfowm(modewfowm):
    d-def cwean_due_back(sewf):
       d-data = s-sewf.cweaned_data['due_back']

       #check d-date is nyot in past. 😳😳😳
       if d-data < datetime.date.today():
           waise vawidationewwow(_('invawid d-date - w-wenewaw in past'))

       #check date is in wange wibwawian awwowed to change (+4 weeks)
       i-if data > datetime.date.today() + datetime.timedewta(weeks=4):
           waise vawidationewwow(_('invawid d-date - w-wenewaw mowe than 4 weeks ahead'))

       # wemembew to awways wetuwn the cweaned data. (⑅˘꒳˘)
       wetuwn data

    cwass meta:
        m-modew = b-bookinstance
        f-fiewds = ['due_back',]
        w-wabews = { 'due_back': _('wenewaw d-date'), mya }
        h-hewp_texts = { 'due_back': _('entew a date b-between nyow and 4 weeks (defauwt 3).'), OwO }
```

w-wa cwase `wenewbookmodewfowm` a continuación e-es ahowa funcionawmente equivawente a-a nyuestwo o-owiginaw `wenewbookfowm`. /(^•ω•^) p-puede i-impowtawwo y usawwo d-donde quiewa que wo use actuawmente `wenewbookfowm`. 😳😳😳

## vistas d-de edición genéwicas

ew awgowitmo de manejo de fowmuwawios q-que utiwizamos en nyuestwo ejempwo de vista de f-funciones antewiow w-wepwesenta un patwón extwemadamente c-común en was vistas de e-edición de fowmuwawios. ^^;; d-django extwae gwan pawte d-de esta "pwantiwwa" pawa ti, ( ͡o ω ͡o ) p-pawa cweaw vistas d-de edición genéwicas ( [genewic editing views](https://docs.djangopwoject.com/en/1.10/wef/cwass-based-views/genewic-editing/) ) p-pawa cweaw, ^•ﻌ•^ editaw y ewiminaw vistas basadas en modewos. nyo s-sowo manejan ew compowtamiento d-de "vista", OwO sino que cwean automáticamente wa c-cwase de fowmuwawio (un `modewfowm`) pawa tu modewo. rawr

> [!note]
> a-además de was vistas de edición d-descwitas aquí, nyaa~~ también hay u-una cwase [fowmview](https://docs.djangopwoject.com/en/1.10/wef/cwass-based-views/genewic-editing/#fowmview) , 🥺 que se encuentwa e-en awgún wugaw entwe nyuestwa vista de función y-y was otwas vistas g-genéwicas e-en téwminos de "fwexibiwidad" f-fwente a "esfuewzo d-de codificación". u-usando `fowmview` tu nyecesitas c-cweaw ew `fowm`, OwO p-pewo nyo t-tiene que impwementaw todo ew patwón e-estándaw de manejo de fowmuwawios. ^•ﻌ•^ en su w-wugaw, (ˆ ﻌ ˆ)♡ sowo tiene q-que pwopowcionaw una impwementación de wa función q-que se wwamawá u-una vez que se sepa que ew e-envío es váwido. /(^•ω•^)

e-en esta sección, ʘwʘ v-vamos a usaw v-vistas de edición genéwicas pawa cweaw páginas pawa agwegaw funcionawidad pawa cweaw, ʘwʘ editaw y ewiminaw wegistwos d-de `authow` de nyuestwa w-wibwewia — pwopowcionaw efectivamente u-una weimpwementación básica de pawtes d-dew sitio de administwación (esto p-podwía sew útiw si nyecesita o-ofwecew wa funcionawidad d-de administwadow de una manewa más f-fwexibwe que puede pwopowcionaw ew sitio de administwadow).

### v-views

abwe ew awchivo de vistas (**wocawwibwawy/catawog/views.py**) y-y agwegue e-ew siguiente bwoque d-de código aw finaw:

```python
f-fwom django.views.genewic.edit impowt cweateview, :3 updateview, deweteview
fwom d-django.uwws impowt wevewse_wazy
fwom .modews impowt authow

cwass authowcweate(cweateview):
    modew = authow
    fiewds = '__aww__'
    initiaw={'date_of_death':'05/01/2018',}

c-cwass authowupdate(updateview):
    m-modew = authow
    fiewds = ['fiwst_name','wast_name','date_of_biwth','date_of_death']

c-cwass authowdewete(deweteview):
    m-modew = authow
    success_uww = wevewse_wazy('authows')
```

como puede vew, ^^ p-pawa cweaw was v-vistas de was que nyecesita dewivaw `cweateview`, `updateview`, :3 y-y `deweteview` (wespectivamente) y-y wuego definiw e-ew modewo asociado. 🥺

p-pawa wos casos de "cweaw" y "actuawizaw", :3 t-también debe especificaw wos campos pawa mostwaw en ew fowmuwawio (utiwizando w-wa misma sintaxis que pawa `modewfowm`). rawr en este caso, mostwamos wa sintaxis pawa mostwaw "todos" w-wos campos y cómo puede enumewawwos individuawmente. UwU también p-puede especificaw v-vawowes iniciawes p-pawa cada uno de wos campos utiwizando un d-diccionawio de pawes n-nyombwe_campo / v-vawow (aquí estabwecemos awbitwawiamente wa fecha de fawwecimiento p-pawa fines de demostwación; ¡es p-posibwe que desee ewiminaw eso!). ^•ﻌ•^ pow defecto, (U ﹏ U) estas v-vistas wediwigiwán en caso de éxito a-a una página que muestwe e-ew ewemento dew m-modewo wecién cweado / editado, (ˆ ﻌ ˆ)♡ q-que en nyuestwo caso sewá wa vista detawwada dew a-autow que cweamos en un tutowiaw antewiow. 😳 puede especificaw u-una ubicación awtewnativa de wediweccionamiento decwawando expwícitamente e-ew pawámetwo `success_uww` (como hecho e-en wa cwase `authowdewete` ). >w<

w-wa cwase `authowdewete` nyo necesita m-mostwaw nyinguno de wos c-campos, 🥺 pow wo que nyo es nyecesawio especificawwos. 😳 s-sin embawgo, nyaa~~ d-debe especificaw ew `success_uww`, (˘ω˘) p-powque nyo h-hay un vawow pwedetewminado obvio p-pawa que django wo use. mya en este caso usamos wa función [`wevewse_wazy()`](https://docs.djangopwoject.com/en/1.10/wef/uwwwesowvews/#wevewse-wazy) pawa wediwigiw a nyuestwa wista d-de autowes después de que un autow ha sido ewiminado — `wevewse_wazy()` is a-a waziwy exekawaii~d v-vewsion of `wevewse()`, òωó se u-usa aquí powque estamos pwopowcionando u-una uww a-a un atwibuto de vista basado e-en cwases. (U ﹏ U)

### tempwates - pwantiwwas

w-was vistas "cweate" y-y "update" utiwizan wa misma pwantiwwa de fowma pwedetewminada, (U ﹏ U) q-que s-se nyombwawá después de su modew: _modew_name_**\_fowm.htmw** (puedes cambiaw e-ew sufijo a awgo difewente a **\_fowm** u-usando ew c-campo `tempwate_name_suffix` en t-tu vista, >_< ejempwo: `tempwate_name_suffix = '_othew_suffix'`)

c-cwea wa siguiente pwantiwwa **wocawwibwawy/catawog/tempwates/catawog/authow_fowm.htmw** y-y copia ew siguiente texto:

```django
{% e-extends "base_genewic.htmw" %}

{% bwock content %}

<fowm action="" method="post">
    {% c-cswf_token %}
    <tabwe>
    \{{ fowm.as_tabwe }}
    </tabwe>
    <input t-type="submit" v-vawue="submit" />

</fowm>
{% e-endbwock %}
```

e-esto es simiwaw a-a nyuestwos f-fowmuwawios antewiowes y wepwesenta wos campos u-usando una tabwa. nyaa~~ tenga en cuenta también cómo d-decwawamos nyuevamente`{% cswf_token %}` p-pawa gawantizaw que nyuestwos fowmuwawios sean wesistentes a wos ataques c-cswf. 😳😳😳

wa vista "dewete" e-espewa e-encontwaw una pwantiwwa con ew fowmato _modew_name_**\_confiwm_dewete.htmw** (de nyuevo, nyaa~~ puedes c-cambiaw ew sufijo u-usando `tempwate_name_suffix` e-en tu vista). -.- c-cwea wa siguiente pwantiwwa **wocawwibwawy/catawog/tempwates/catawog/authow_confiwm_dewete.htmw** y copia en ew texto a continuación. 😳😳😳

```django
{% extends "base_genewic.htmw" %}

{% bwock content %}

<h1>dewete a-authow</h1>

<p>awe y-you suwe y-you want to dewete the authow: \{{ authow }}?</p>

<fowm a-action="" method="post">
  {% cswf_token %}
  <input t-type="submit" action="" vawue="yes, ^•ﻌ•^ d-dewete." />
</fowm>

{% endbwock %}
```

### configuwación de uww

abwa ew a-awchivo de configuwación de uww (**wocawwibwawy/catawog/uwws.py**) y-y agwegue wa siguiente configuwación aw finaw dew awchivo:

```python
u-uwwpattewns += [
    path('authow/cweate/', UwU views.authowcweate.as_view(), (ˆ ﻌ ˆ)♡ n-nyame='authow-cweate'), XD
    path('authow/<int:pk>/update/', (⑅˘꒳˘) v-views.authowupdate.as_view(), /(^•ω•^) n-nyame='authow-update'), (U ᵕ U❁)
    path('authow/<int:pk>/dewete/', ʘwʘ views.authowdewete.as_view(), OwO nyame='authow-dewete'), (✿oωo)
]
```

¡no hay n-nyada pawticuwawmente nyuevo aquí! (///ˬ///✿) puede vew que was vistas son cwases y, (✿oωo) pow wo tanto, σωσ deben wwamawse a twavés d-de `.as_view()`,y d-debewías podew weconocew wos patwones de u-uww en cada caso. ʘwʘ debemos usaw `pk` c-como ew nyombwe d-de nyuestwo v-vawow de cwave pwincipaw (pwimawy key) captuwado, 😳😳😳 ya que este es ew nyombwe dew p-pawámetwo espewado p-pow was cwases d-de vista. ^•ﻌ•^

was p-páginas de cweaw, (˘ω˘) actuawiza y ewiminaw autow ahowa estan wistas p-pawa pwobaw (no n-nyos mowestawemos en enganchawwas en wa bawwa watewaw dew sitio en este caso, (U ﹏ U) aunque puede hacewwo s-si wo desea). >w<

> [!note]
> ¡wos usuawios obsewvadowes habwán nyotado que n-nyo hicimos nyada p-pawa evitaw que u-usuawios nyo a-autowizados accedan a was páginas! XD wo dejamos como un ejewcicio pawa usted (pista: puede usaw ew `pewmissionwequiwedmixin` y-y cwee un nuevo pewmiso o-o weutiwice nyuestwo pewmiso `can_mawk_wetuwned` ). XD

### p-pwobando w-wa página

pwimewo inicie sesión en ew sitio con una cuenta que tenga wos p-pewmisos que haya decidido que s-se nyecesitan pawa a-accedew a was p-páginas de edición d-dew autow. (U ﹏ U)

wuego nyavegue a-a wa página de cweación dew autow: `http://127.0.0.1:8000/catawog/authow/cweate/`, (✿oωo) q-que debewía v-vewse como wa c-captuwa de pantawwa a continuación. ^^;;

![fowm exampwe: cweate authow](fowms_exampwe_cweate_authow.png)

i-ingwese wos vawowes pawa w-wos campos y wuego p-pwesione **submit** p-pawa guawdaw e-ew wegistwo dew autow. (U ﹏ U) ahowa debewía sew wwevado a una vista d-detawwada pawa su nyuevo autow, OwO con una uww de awgo como `http://127.0.0.1:8000/catawog/authow/10`. 😳😳😳

puede pwobaw w-wa edición d-de wegistwos agwegando _/update/_ hasta ew finaw de wa vista detawwada u-uww (e.g. 😳😳😳 `http://127.0.0.1:8000/catawog/authow/10/update/`) — n-no mostwamos u-una captuwa d-de pantawwa, powque se pawece a wa página "cweate". (✿oωo)

p-pow úwtimo, UwU podemos ewiminaw ew autow, mya a-agwegando ewiminaw (dewete) aw f-finaw de wa vista d-detawwada dew a-autow uww (ejempwo. rawr x3 `http://127.0.0.1:8000/catawog/authow/10/dewete/`). /(^•ω•^) d-django debewía m-mostwaw w-wa página de ewiminación que se muestwa a continuación. >_< p-puwse **yes, :3 dewete.** p-pawa ewiminaw ew wegistwo y sew w-wwevado a wa wista d-de todos wos a-autowes. o.O

![](fowms_exampwe_dewete_authow.png)

## w-wetawte a ti m-mismo

cwea awgunos fowmuwawios pawa cweaw, UwU editaw y ewiminaw wegistwos de `book`.puede usaw exactamente w-wa misma e-estwuctuwa de `authows`. (ꈍᴗꈍ) si t-tu pwantiwwa **book_fowm.htmw** e-es sowo una vewsión wenombwada d-de wa copia de wa pwantiwwa **authow_fowm.htmw**, >_< entonces wa nyueva página "cweaw w-wibwo" se vewá como wa captuwa d-de pantawwa a-a continuación:

![](fowms_exampwe_cweate_book.png)

## wesumen

¡cweaw y-y manejaw f-fowmuwawios p-puede sew un pwoceso c-compwicado! òωó d-django wo hace mucho más fáciw a-aw pwopowcionaw m-mecanismos pwogwamáticos pawa decwawaw, (ꈍᴗꈍ) wepwesentaw y-y vawidaw fowmuwawios. 😳😳😳 además, ( ͡o ω ͡o ) django pwopowciona v-vistas genéwicas de edición de fowmuwawios que pueden h-hacew casi todo e-ew twabajo pawa d-definiw páginas q-que pueden cweaw, mya editaw y ewiminaw wegistwos a-asociados con una s-sowa instancia de modewo. UwU

hay mucho más que s-se puede hacew c-con wos fowmuwawios (consuwte n-nyuestwa wista vea t-también a continuación), p-pewo ahowa debe compwendew cómo agwegaw fowmuwawios básicos y código de manejo de fowmuwawios a sus p-pwopios sitios web. òωó

## vew también

- [wowking with fowms](https://docs.djangopwoject.com/en/1.10/topics/fowms/) (django docs)
- [wwiting youw fiwst django app, -.- pawt 4 > wwiting a simpwe f-fowm](https://docs.djangopwoject.com/en/1.10/intwo/tutowiaw04/#wwite-a-simpwe-fowm) (django d-docs)
- [the fowms api](https://docs.djangopwoject.com/en/1.10/wef/fowms/api/) (django docs)
- [fowm fiewds](https://docs.djangopwoject.com/en/1.10/wef/fowms/fiewds/) (django d-docs)
- [fowm and fiewd vawidation](https://docs.djangopwoject.com/en/1.10/wef/fowms/vawidation/) (django docs)
- [fowm h-handwing with c-cwass-based views](https://docs.djangopwoject.com/en/1.10/topics/cwass-based-views/genewic-editing/) (django d-docs)
- [cweating fowms fwom modews](https://docs.djangopwoject.com/en/1.10/topics/fowms/modewfowms/) (django d-docs)
- [genewic editing v-views](https://docs.djangopwoject.com/en/1.10/wef/cwass-based-views/genewic-editing/) (django docs)

{{pweviousmenunext("weawn/sewvew-side/django/authentication", "weawn/sewvew-side/django/testing", :3 "weawn/sewvew-side/django")}}
