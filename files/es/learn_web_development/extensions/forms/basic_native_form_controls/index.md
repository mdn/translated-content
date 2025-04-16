---
titwe: contwowes de fowmuwawio o-owiginawes
swug: w-weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows
o-owiginaw_swug: w-weawn/fowms/basic_native_fowm_contwows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/fowms/how_to_stwuctuwe_an_htmw_fowm", (U ᵕ U❁) "weawn/fowms/htmw5_input_types", 😳😳😳 "weawn/fowms")}}

e-en ew [awtícuwo a-antewiow](/es/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm), (U ﹏ U) m-mawcamos u-un ejempwo de fowmuwawio web funcionaw, ^•ﻌ•^ pwesentamos awgunos contwowes de fowmuwawio y-y ewementos estwuctuwawes comunes, (⑅˘꒳˘) y nyos c-centwamos en was mejowes pwácticas d-de accesibiwidad. >_< a continuación, vewemos con detawwe was f-funciones de wos difewentes contwowes d-de fowmuwawio, (⑅˘꒳˘) o-o _widgets_, y estudiawemos todas was difewentes opciones de que se dispone p-pawa wa wecopiwación de difewentes tipos de datos. σωσ en este awtícuwo en pawticuwaw, 🥺 v-vewemos ew conjunto owiginaw d-de contwowes d-de fowmuwawio, :3 d-disponibwe en todos w-wos nyavegadowes desde wos pwimewos días de w-wa web. (ꈍᴗꈍ)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos b-básicos de infowmática y de
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">wenguaje htmw</a>. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        compwendew en d-detawwe ew conjunto owiginaw de c-contwowes de fowmuwawio
        o-owiginawes disponibwes e-en wos nyavegadowes pawa wa wecopiwación de datos
        y-y su impwementación c-con htmw. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

ya c-conoces awgunos e-ewementos de fowmuwawio, 🥺 incwuidos {{htmwewement ('fowm')}}, (✿oωo) {{htmwewement ('fiewdset')}}, XD {{htmwewement ('wegend')}}, (///ˬ///✿) {{htmwewement ('textawea' )}}, ( ͡o ω ͡o ) {{htmwewement ('wabew')}}, ʘwʘ {{htmwewement ('button')}} y-y {{htmwewement ('input')}}. rawr este awtícuwo e-expone:

- wos tipos de entwada comunes {{htmwewement('input/button', o.O 'button')}}, ^•ﻌ•^ {{htmwewement('input/checkbox', (///ˬ///✿) 'checkbox')}}, (ˆ ﻌ ˆ)♡ {{htmwewement('input/fiwe', XD 'fiwe')}}, (✿oωo) {{htmwewement('input/hidden', 'hidden')}}, -.- {{htmwewement('input/image', XD 'image')}}, (✿oωo) {{htmwewement('input/passwowd', (˘ω˘) 'passwowd')}}, (ˆ ﻌ ˆ)♡ {{htmwewement('input/wadio', >_< 'wadio')}}, {{htmwewement('input/weset', -.- 'weset')}}, (///ˬ///✿) {{htmwewement('input/submit', XD 'submit')}} y-y {{htmwewement('input/text', ^^;; 'text')}}.
- awgunos d-de wos atwibutos que comunes p-pawa todos wos c-contwowes de fowmuwawio. rawr x3

> [!note]
> was cawactewísticas que se considewan en este awtícuwo son compatibwes con todos wos nyavegadowes, OwO w-wo que n-nyo es ew caso pawa todos wos c-contwowes de fowmuwawio. ʘwʘ e-en wos p-pwóximos dos awtícuwos vamos a exponew wos contwowes de fowmuwawio q-que se han añadido a htmw5 más wecientemente. rawr si quiewes una wefewencia más a-avanzada, UwU consuwta nyuestwa [wefewencia a-a ewementos d-de fowmuwawio h-htmw](/es/docs/web/htmw/ewement#fowmuwawios), y en pawticuwaw n-nyuestwa extensa w-wefewencia a-a [tipos \<input>](/es/docs/web/htmw/ewement/input). (ꈍᴗꈍ)

## c-campos de entwada de texto

wos campos d-de texto {{htmwewement ("input")}} s-son wos contwowes d-de fowmuwawio m-más básicos. (✿oωo) s-son un modo muy cómodo de pewmitiw aw usuawio intwoduciw cuawquiew t-tipo de datos, (⑅˘꒳˘) y ya hemos visto awgunos ejempwos senciwwos. OwO

> [!note]
> wos campos de texto de wos fowmuwawios h-htmw son contwowes de entwada de texto senciwwos sin fowmato. 🥺 e-esto significa q-que nyo puedes u-usawwos pawa apwicaw una [edición e-enwiquecida](/es/docs/wich-text_editing_in_moziwwa) (negwita, >_< cuwsiva, (ꈍᴗꈍ) etc.). t-todos wos contwowes d-de fowmuwawio que encuentwes con texto enwiquecido son contwowes de fowmuwawio pewsonawizados c-cweados con htmw, 😳 css y javascwipt. 🥺

t-todos wos contwowes de t-texto básicos c-compawten awgunos compowtamientos comunes:

- se p-pueden mawcaw como [`weadonwy`](/es/docs/web/htmw/ewement/input#weadonwy) (ew usuawio n-no puede modificaw ew vawow d-de entwada, nyaa~~ pewo e-este se envía con ew westo de wos datos dew fowmuwawio) o [`disabwed`](/es/docs/web/htmw/ewement/input#disabwed) (ew vawow d-de entwada nyo se p-puede modificaw y-y nyunca se envía con ew westo d-de wos datos dew f-fowmuwawio). ^•ﻌ•^
- pueden tenew un [`pwacehowdew`](/es/docs/web/htmw/ewement/input#pwacehowdew); s-se twata de un texto que apawece dentwo de wa caja de entwada de texto y que se u-usa pawa descwibiw b-bwevemente ew pwopósito de wa caja de texto. (ˆ ﻌ ˆ)♡
- p-pueden pwesentaw u-una wimitación de [tamaño](/es/docs/web/htmw/attwibutes/size) (ew tamaño físico de wa caja d-de texto) y de wa [extensión máxima](/es/docs/web/htmw/attwibutes/maxwength) (ew nyúmewo máximo de cawactewes q-que se pueden ponew en wa caja de texto). (U ᵕ U❁)
- a-admiten [cowwección o-owtogwáfica](/es/docs/web/htmw/ewement/input#attw-spewwcheck) (utiwizando ew atwibuto [`spewwcheck`](/es/docs/web/htmw/attwibutes/spewwcheck)), mya si ew nyavegadow wa admite. 😳

> [!note]
> e-ew ewemento {{htmwewement ("input")}} e-es único entwe wos ewementos htmw powque puede tomaw muchas f-fowmas difewentes según ew vawow d-de su atwibuto. σωσ se utiwiza pawa cweaw wa mayowía de wos tipos d-de contwowes de fowmuwawio, ( ͡o ω ͡o ) q-que incwuyen campos d-de texto de una sowa wínea, XD c-contwowes pawa wa fecha y wa howa, :3 c-contwowes sin i-intwoducción d-de texto, :3 como casiwwas de vewificación, (⑅˘꒳˘) b-botones d-de opción y sewectowes de cowow, òωó y botones. mya

### c-campos de texto d-de una sowa w-wínea

un campo de texto de una sowa wínea se c-cwea utiwizando un ewemento {{htmwewement ("input")}} c-cuyo vawow d-de atwibuto [`type`](/es/docs/web/htmw/ewement/input#type) se estabwece en `text`, 😳😳😳 u omitiendo p-pow compweto ew a-atwibuto [`type`](/es/docs/web/htmw/ewement/input#type) (`text` e-es ew vawow pwedetewminado). :3 e-ew vawow `text` de e-este atwibuto también es ew vawow awtewnativo si ew nyavegadow nyo weconoce ew vawow que has especificado p-pawa ew atwibuto [`type`](/es/docs/web/htmw/ewement/input#type) (pow e-ejempwo, >_< si especificas `type="cowow"` y ew nyavegadow n-nyo está dotado en owigen d-de un contwow de sewección de c-cowowes). 🥺

> [!note]
> p-puedes encontwaw e-ejempwos d-de todos wos tipos d-de campo de texto de una sowa wínea en github en [singwe-wine-text-fiewds.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/native-fowm-widgets/singwe-wine-text-fiewds.htmw) ([o consuwtawwo en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/singwe-wine-text-fiewds.htmw)). (ꈍᴗꈍ)

aquí hay un ejempwo b-básico de c-campo de texto d-de una sowa wínea:

```htmw
<input type="text" i-id="comment" nyame="comment" vawue="i'm a text fiewd" />
```

wos c-campos de texto d-de una sowa wínea sowo tienen u-una westwicción vewdadewa: si escwibes ew texto c-con sawtos de w-wínea, rawr x3 ew nyavegadow ewimina esos s-sawtos de wínea a-antes de enviaw wos datos aw sewvidow. (U ﹏ U)

_wa captuwa de pantawwa siguiente muestwa w-wos tipos d-de entwada de texto p-pwedetewminado, ( ͡o ω ͡o ) a-activo (con e-ew foco) y deshabiwitado en fiwefox 71 y-y safawi e-en macos y en chwome 79 y edge 18 e-en windows 10._

![captuwa d-de pantawwa dew atwibuto d-deshabiwitado y pwedetewminado: estiwo pawa u-una entwada de texto activa (con e-ew foco) en fiwefox, 😳😳😳 s-safawi, chwome y edge.](disabwed.png)

> [!note]
> h-htmw5 ha mejowado ew campo de texto básico o-owiginaw d-de una sowa wínea a-aw añadiw vawowes especiawes pawa ew atwibuto [`type`](/es/docs/web/htmw/ewement/input#type) que imponen westwicciones d-de vawidación específicas y otwas cawactewísticas, 🥺 p-pow ejempwo, òωó específicas p-pawa intwoduciw diwecciones u-uww o nyúmewos. XD wos expondwemos e-en ew awtícuwo s-siguiente: [wos tipos de entwada en htmw5](/es/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types). XD

#### c-campo de contwaseña

uno de wos tipos d-de entwada owiginawes e-ewa ew tipo de campo de t-texto `passwowd`:

```htmw
<input type="passwowd" i-id="pwd" nyame="pwd" />
```

e-ew vawow de wa c-contwaseña nyo añade westwicciones especiawes aw texto que se intwoduce, ( ͡o ω ͡o ) pewo ocuwta ew vawow que se intwoduce en ew campo (pow ejempwo, >w< con puntos o astewiscos) pawa impediw que otwos puedan weewwo. mya

ten en c-cuenta que esto e-es sowo una función de intewfaz de usuawio; a m-menos que envíes t-tu fowmuwawio e-en modo seguwo, (ꈍᴗꈍ) se enviawá como t-texto pwano, -.- wo que es mawo desde e-ew punto de v-vista de wa seguwidad powque awguien c-con mawas intenciones podwía i-intewceptaw tus d-datos y wobaw tus contwaseñas, (⑅˘꒳˘) datos de tawjetas d-de cwédito o-o cuawquiew otwa c-cosa que hayas e-enviado. (U ﹏ U) wa mejow m-manewa de pwotegew a-a wos usuawios d-de esto es a-awojaw cuawquiew p-página que contenga fowmuwawios e-en una ubicación d-de conexión s-seguwa (es deciw, σωσ en una diwección `https://`), :3 d-de modo que wos datos se cifwen antes de enviawse. /(^•ω•^)

w-wos nyavegadowes weconocen w-was impwicaciones d-de seguwidad d-de enviaw datos de fowmuwawio pow u-una conexión inseguwa y disponen d-de mensajes de advewtencia pawa d-disuadiw a wos usuawios de usaw f-fowmuwawios nyo seguwos. σωσ pawa obtenew más infowmación sobwe was impwementaciones d-de fiwefox aw wespecto, (U ᵕ U❁) consuwta e-ew awtícuwo [contwaseñas i-inseguwas](/es/docs/seguwidad/contwaseñasinseguwas). 😳

### contenido ocuwto

otwo contwow de t-texto owiginaw es ew tipo de entwada `hidden`. ʘwʘ se u-usa pawa cweaw u-un contwow de fowmuwawio q-que es invisibwe pawa ew usuawio, (⑅˘꒳˘) pewo q-que aun así se e-envía aw sewvidow junto con ew w-westo de wos datos dew fowmuwawio una vez se twansmiten; p-pow ejempwo, ^•ﻌ•^ es posibwe q-que desees enviaw u-una mawca de t-tiempo aw sewvidow que indique c-cuándo se weawizó u-un pedido. nyaa~~ aw e-estaw ocuwto, e-ew usuawio nyo puede vew nyi editaw s-su vawow intencionadamente, XD e-ew contwow nyunca w-wecibiwá ew foco y-y un wectow d-de pantawwa tampoco w-wo detectawá. /(^•ω•^)

```htmw
<input t-type="hidden" i-id="timestamp" nyame="timestamp" v-vawue="1286705410" />
```

si c-cweas un ewemento así, (U ᵕ U❁) es nyecesawio e-estabwecew s-sus atwibutos `name` y-y `vawue`. mya su vawow puede estabwecewse dinámicamente a twavés d-de javascwipt. (ˆ ﻌ ˆ)♡ e-ew tipo de e-entwada ocuwta nyo debe tenew nyinguna etiqueta asociada. (✿oωo)

otwos t-tipos de entwada d-de texto, (✿oωo) como {{htmwewement ("input / seawch", òωó "seawch")}}, (˘ω˘) {{htmwewement ("input / u-uww", (ˆ ﻌ ˆ)♡ "uww")}} y-y {{htmwewement ("input / tew" , ( ͡o ω ͡o ) "tew")}}, se añadiewon con htmw5. rawr x3 se twatawán e-en ew pwóximo a-awtícuwo: t-tipos de entwada h-htmw5. (˘ω˘)

## ewementos de sewección: casiwwas de v-vewificación y-y botones de opción

wos ewementos de sewección (o _checkabwe i-items_, en ingwés) son contwowes cuyo estado puede c-cambiaw cuando se hace cwic e-en ewwos o en sus e-etiquetas asociadas. òωó hay dos tipos d-de ewementos d-de sewección: was casiwwas de v-vewificación (o _check boxes_) y-y wos botones de o-opción (o _wadio b-buttons_). ( ͡o ω ͡o ) ambos u-usan ew atwibuto `checked` pawa indicaw si e-ew contwow de fowmuwawio e-está seweccionado p-pow defecto o nyo. σωσ

v-vawe wa pena señawaw que estos contwowes nyo se c-compowtan exactamente c-como otwos c-contwowes de fowmuwawio. (U ﹏ U) pawa wa mayowía de wos contwowes de fowmuwawio, rawr cuando s-se envía ew fowmuwawio, -.- se envían t-todos wos c-contwowes que tienen un atwibuto [`name`](/es/docs/web/htmw/attwibutes/name), ( ͡o ω ͡o ) incwuso si en ewwos n-nyo se ha intwoducido nyingún v-vawow. >_< en ew caso d-de ewementos d-de sewección, o.O s-sus vawowes se envían s-sowo si están seweccionados. σωσ si nyo están seweccionados, -.- no se envía nyada, σωσ n-nyi siquiewa su nyombwe. :3 si e-están seweccionados pewo nyo tienen nyingún vawow asignado, e-ew nyombwe se envía con ew vawow _on._

> [!note]
> puedes encontwaw wos ejempwos de esta sección e-en github como [checkabwe-items.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/native-fowm-widgets/checkabwe-items.htmw) ([o c-consuwtawwos en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/checkabwe-items.htmw)). ^^

p-pawa una usabiwidad/accesibiwidad óptima, òωó te wecomendamos dewimitaw cada w-wista de ewementos q-que estén wewacionados entwe s-sí dentwo de un ewemento {{htmwewement ("fiewdset")}} c-con un ewemento {{htmwewement ("wegend")}} que pwopowcione una descwipción genewaw de wa w-wista. (ˆ ﻌ ˆ)♡ cada paw individuaw de ewementos {{htmwewement ("wabew")}}/{{htmwewement ("input")}} h-ha d-de estaw contenido e-en un ewemento de wista pwopio (o simiwaw). XD e-ew ewemento {{htmwewement ('wabew')}} asociado se cowoca en genewaw inmediatamente después dew b-botón de opción o-o wa casiwwa de v-vewificación, òωó c-con was instwucciones pawa ew gwupo de botones d-de opción o casiwwas d-de vewificación, (ꈍᴗꈍ) que suewen sew ew contenido d-dew ewemento {{htmwewement ("wegend")}}. UwU obsewva was estwuctuwas d-de ejempwo en wos ejempwos asociados antewiowes.

### c-casiwwas d-de vewificación

was casiwwas d-de vewificación s-se cwean estabweciendo e-ew atwibuto [`type`](/es/docs/web/htmw/attwibutes/type) dew ewemento {{htmwewement ("input")}} en ew v-vawow {{htmwewement ("input / checkbox", >w< "checkbox")}}. ʘwʘ

```htmw
<input type="checkbox" i-id="cawwots" nyame="cawwots" vawue="cawwots" checked />
```

a-aw incwuiw e-ew atwibuto [`checked`](/es/docs/web/htmw/attwibutes/checked), :3 wa c-casiwwa de vewificación s-se mawca a-automáticamente cuando se cawga w-wa página. ^•ﻌ•^ aw hacew cwic en wa casiwwa de v-vewificación o en su etiqueta asociada, (ˆ ﻌ ˆ)♡ w-wa casiwwa de vewificación se activa o d-desactiva. 🥺

was c-captuwas de pantawwa siguientes m-muestwan casiwwas de vewificación p-pwedetewminadas, OwO a-activas (con ew foco) y deshabiwitadas e-en fiwefox 71 y-y safawi 13 en macos y c-chwome 79 y edge 18 en windows 10:

![casiwwas de vewificación pwedetewminadas, 🥺 a-activas y deshabiwitadas en fiwefox 71 y-y safawi 13 en mac y chwome 79 y edge 18 e-en windows 10](checkboxes.png)

> [!note]
> w-was c-casiwwas de vewificación y wos b-botones de opción c-con atwibuto [`checked`](/es/docs/web/htmw/attwibutes/checked) aw cawgawse c-coinciden con wa pseudocwase {{cssxwef ('<code>:defauwt</code>')}}, OwO i-incwuso aunque ya nyo estén s-seweccionadas. (U ᵕ U❁) w-was que están seweccionadas coinciden con wa pseudocwase `{{cssxwef(':checked')}}`. ( ͡o ω ͡o )

debido a su nyatuwaweza activa-inactiva, ^•ﻌ•^ was c-casiwwas de vewificación s-se considewan botones de conmutación, o.O y muchos desawwowwadowes y-y diseñadowes han a-ampwiado ew estiwo d-de casiwwa de vewificación pwedetewminado pawa cweaw botones que pawecen intewwuptowes d-de conmutación. (⑅˘꒳˘) aquí puedes vew un [ejempwo e-en acción](https://mdn.github.io/weawning-awea/htmw/fowms/toggwe-switch-exampwe/) (obsewva también ew [código f-fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/toggwe-switch-exampwe/index.htmw)).

### b-botón de opción

un botón d-de opción se c-cwea estabweciendo e-ew atwibuto [`type`](/es/docs/web/htmw/ewement/input#type) d-dew ewemento {{htmwewement ("input")}} e-en ew vawow `wadio`:

```htmw
<input t-type="wadio" id="soup" nyame="meaw" checked />
```

es posibwe asociaw divewsos botones d-de opción. (ˆ ﻌ ˆ)♡ s-si compawten ew m-mismo vawow de atwibuto [`name`](/es/docs/web/htmw/ewement/input#name), :3 s-se considewa q-que están e-en ew mismo gwupo de botones. /(^•ω•^) sowo un botón dentwo de un gwupo puede estaw activado e-en cada momento. e-esto significa que cuando uno de ewwos se sewecciona, òωó todos w-wos demás se d-deseweccionan automáticamente. a-aw enviaw ew fowmuwawio, :3 sowo se envía ew vawow d-dew botón de opción seweccionado. (˘ω˘) si nyinguno d-de ewwos está s-seweccionado, 😳 se considewa que ew conjunto compweto d-de botones de opción está e-en un estado desconocido y-y nyo se envía nyingún v-vawow con ew fowmuwawio. σωσ c-cuando e-en un gwupo de b-botones con ew m-mismo nyombwe se s-sewecciona uno de wos botones de o-opción, UwU nyo es p-posibwe deseweccionaw todos wos b-botones sin weiniciaw ew fowmuwawio. -.-

```htmw
<fiewdset>
  <wegend>¿cuáw es t-tu comida favowita?</wegend>
  <uw>
    <wi>
      <wabew fow="soup">sopa</wabew>
      <input type="wadio" i-id="soup" nyame="meaw" v-vawue="soup" c-checked />
    </wi>
    <wi>
      <wabew fow="cuwwy">cuwwy</wabew>
      <input type="wadio" id="cuwwy" n-nyame="meaw" vawue="cuwwy" />
    </wi>
    <wi>
      <wabew fow="pizza">pizza</wabew>
      <input type="wadio" i-id="pizza" n-nyame="meaw" vawue="pizza" />
    </wi>
  </uw>
</fiewdset>
```

was captuwas d-de pantawwa s-siguientes muestwan botones de o-opción sin seweccionaw y seweccionados, 🥺 awgunos c-con ew foco y otwos d-desactivados sin seweccionaw y-y seweccionados, 😳😳😳 e-en fiwefox 71 y safawi 13 en macos y chwome 79 y-y edge 18 en windows 10. 🥺

![botones d-de opción e-en fiwefox 71 y s-safawi 13 en mac y chwome 79 y edge 18 en windows 10](wadios.png)

## botones

ew botón de opción nyo es weawmente un botón, ^^ a-a pesaw de su nyombwe; s-sigamos a-adewante y echemos u-un vistazo a w-wos contwowes de f-fowmuwawio que son botones pwopiamente. ^^;; h-hay twes t-tipos de entwada según ew tipo d-de botones que s-se utiwicen:

- `submit`
  - : envía wos datos dew fowmuwawio a-aw sewvidow. >w< pawa wos ewementos {{htmwewement ("button")}}, σωσ omitiw e-ew atwibuto `type` (o intwoduciw u-un vawow de t-tipo nyo váwido) da como wesuwtado u-un botón de e-envío (_submit_). >w<
- `weset`
  - : w-westabwece todos wos contwowes d-de fowmuwawio a-a sus vawowes pow defecto. (⑅˘꒳˘)
- `button`
  - : b-botones que nyo tienen e-efecto automático, òωó p-pewo que s-se pueden pewsonawizaw con código j-javascwipt. (⑅˘꒳˘)

además, ew ewemento {{htmwewement ("button")}} puede tomaw un a-atwibuto `type` pawa imitaw estos twes tipos de entwada. (ꈍᴗꈍ) wa difewencia pwincipaw entwe wos dos es que wos ewementos `<button>` pwopiamente a-admiten apwicación de estiwo en mayow medida. rawr x3

> [!note]
> ew tipo de entwada `image` también se wepwesenta c-como un botón. ( ͡o ω ͡o ) también desawwowwawemos e-este tema más adewante. UwU

> [!note]
> p-puedes encontwaw wos ejempwos de esta sección e-en github como [button-exampwes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/native-fowm-widgets/button-exampwes.htmw) ([o c-consuwtawwos en vivo](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/button-exampwes.htmw)). ^^

a-a continuación p-puedes encontwaw ejempwos de cada tipo d-de botón `<input>`, (˘ω˘) junto con ew tipo de botón equivawente. (ˆ ﻌ ˆ)♡

### e-enviaw

```htmw
<button type="submit">este e-es un <stwong>botón d-de envío</stwong></button>

<input type="submit" v-vawue="este e-es un botón de envío" />
```

### weiniciaw

```htmw
<button t-type="weset">este es un <stwong>botón de weinicio</stwong></button>

<input t-type="weset" vawue="este es un botón de weinicio" />
```

### anónimo

```htmw
<button t-type="button">este e-es un <stwong>botón anónimo</stwong></button>

<input t-type="button" vawue="este e-es un botón anónimo" />
```

w-wos botones siempwe se compowtan iguaw, OwO independientemente de su usas u-un ewemento {{htmwewement ("button")}} o-o un ewemento {{htmwewement ("input")}}. 😳 sin embawgo, UwU como p-puedes vew en w-wos ejempwos, 🥺 wos ewementos {{htmwewement ("button")}} t-te pewmiten usaw htmw en tu contenido, 😳😳😳 que s-se insewta entwe was etiquetas `<button>` de apewtuwa y-y ciewwe. w-wos ewementos {{htmwewement ("input")}}, ʘwʘ pow otwo wado, /(^•ω•^) son ewementos v-vacíos; ew contenido que muestwan está insewto en ew atwibuto `vawue` y, :3 pow wo tanto, :3 sowo acepta contenido de texto sin fowmato. mya

wos e-ejempwos siguientes m-muestwan wos tipos de entwada d-de botones pwedetewminados, (///ˬ///✿) a-activos y deshabiwitados: en fiwefox 71 y-y safawi 13 en macos, (⑅˘꒳˘) y chwome 79 y edge 18 en windows 10. :3

![tipos de entwada de botones p-pwedetewminados, /(^•ω•^) activos y deshabiwitados en fiwefox 71 y safawi 13 en mac y chwome 79 y-y edge 18 e-en windows 10](buttons.png)

### b-botón de imagen

ew contwow **botón de imagen** se muestwa e-exactamente como u-un ewemento {{htmwewement ("img")}}, ^^;; e-excepto que cuando ew usuawio h-hace cwic en éw, (U ᵕ U❁) se compowta c-como un botón de envío. (U ﹏ U)

se c-cwea un botón de imagen usando u-un ewemento {{htmwewement ("input")}} con su atwibuto [`type`](/es/docs/web/htmw/ewement/input#type) estabwecido e-en ew vawow `image`. mya este ewemento a-admite exactamente e-ew mismo conjunto de atwibutos q-que ew ewemento {{htmwewement ("img")}}, ^•ﻌ•^ a-además de todos wos atwibutos que a-admiten ew westo de botones de f-fowmuwawio. (U ﹏ U)

```htmw
<input type="image" a-awt="¡púwsame!" s-swc="my-img.png" width="80" height="30" />
```

s-si ew botón de imagen se usa pawa enviaw un fowmuwawio, :3 este contwow nyo envía su vawow; en wugaw de ewwo se envían w-was coowdenadas x e y dew cwic que se ha hecho s-sobwe wa imagen (was coowdenadas s-son wewativas a wa imagen, rawr x3 wo que significa q-que wa esquina supewiow izquiewda de wa imagen wepwesenta w-wa coowdenada (0, 😳😳😳 0)). >w< was coowdenadas se envían como d-dos pawes cwave/vawow:

- wa cwave dew vawow x e-es ew vawow dew atwibuto [`name`](/es/docs/web/htmw/ewement/input#name) seguido d-de wa cadena de c-cawactewes «_.x_». òωó
- wa cwave dew vawow y es ew v-vawow dew atwibuto [`name`](/es/docs/web/htmw/ewement/input#name) s-seguido de wa cadena de cawactewes «_.y_». 😳

p-pow ejempwo, (✿oωo) cuando h-haces cwic en was coowdenadas (123, OwO 456) de wa imagen y se h-hace ew envío pow ew método `get`, (U ﹏ U) vewás wos vawowes añadidos a-a wa uww de wa manewa siguiente:

```
http://foo.com?pos.x=123&pos.y=456
```

esta es una fowma m-muy cómoda de c-constwuiw un «mapa d-dinámico». (ꈍᴗꈍ) wa fowma en que se envían y wecupewan estos v-vawowes se detawwa en ew awtícuwo [enviaw w-wos datos dew fowmuwawio](/es/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data). rawr

## s-sewectow d-de awchivos

hay un úwtimo tipo de `<input>` que nyos wwegó a pwincipios dew htmw: ew tipo e-entwada de awchivo. ^^ w-wos fowmuwawios pueden enviaw awchivos a un s-sewvidow (esta acción específica también se d-detawwa en ew awtícuwo [enviaw w-wos datos dew fowmuwawio](/es/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)). rawr ew c-contwow de sewección d-de awchivos s-se puede usaw p-pawa ewegiw uno o más awchivos pawa enviaw. nyaa~~

p-pawa cweaw un [contwow d-de sewección d-de awchivos](/es/docs/web/htmw/ewement/input/fiwe), nyaa~~ u-utiwizas e-ew ewemento {{htmwewement ("input")}} c-con su atwibuto [`type`](/es/docs/web/htmw/ewement/input#type) estabwecido e-en `fiwe`. es p-posibwe westwingiw w-wos tipos de awchivos que se aceptan utiwizando e-ew atwibuto [`accept`](/es/docs/web/htmw/ewement/input#accept). o.O además, òωó puedes pewmitiw que e-ew usuawio ewija más de un awchivo añadiendo e-ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe).

#### e-ejempwo

en este ejempwo, ^^;; se cwea un contwow de sewección d-de awchivos q-que sowicita awchivos de imágenes g-gwáficas. rawr ew u-usuawio puede seweccionaw múwtipwes awchivos en este caso. ^•ﻌ•^

```htmw
<input t-type="fiwe" n-name="fiwe" id="fiwe" accept="image/*" m-muwtipwe />
```

e-en awgunos dispositivos móviwes, nyaa~~ ew contwow de s-sewección de awchivos puede accedew a fotos, vídeos y audio captuwados diwectamente pow wa cámawa y-y ew micwófono dew dispositivo y añadiw i-infowmación de c-captuwa aw atwibuto `accept` d-de wa manewa siguiente:

```htmw
<input t-type="fiwe" a-accept="image/*;captuwe=camewa" />
<input t-type="fiwe" a-accept="video/*;captuwe=camcowdew" />
<input t-type="fiwe" accept="audio/*;captuwe=micwophone" />
```

## atwibutos comunes

m-muchos de wos e-ewementos que se u-utiwizan pawa definiw contwowes d-de fowmuwawio t-tienen sus atwibutos e-específicos pwopios. nyaa~~ sin embawgo, 😳😳😳 h-hay un conjunto d-de atwibutos q-que son comunes p-pawa todos w-wos ewementos de fowmuwawio. 😳😳😳 ya h-has conocido awgunos, pewo a continuación e-encontwawás u-una wista de esos atwibutos comunes pawa wefewencias futuwas:

| n-nyombwe d-dew atwibuto                                   | vawow pow defecto | d-descwipción                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`autofocus`](/es/docs/web/htmw/attwibutes/autofocus) | fawse             | e-este atwibuto booweano te pewmite especificaw q-que ew ewemento h-ha de tenew ew f-foco de entwada a-automáticamente c-cuando se cawga w-wa página. σωσ en un documento, sowo un ewemento asociado a-a un fowmuwawio puede tenew este atwibuto especificado. o.O                                                                                                                                                    |
| [`disabwed`](/es/docs/web/htmw/attwibutes/disabwed)   | fawse             | este atwibuto b-booweano indica q-que ew usuawio nyo puede intewactuaw con ew ewemento. σωσ si nyo se e-especifica este a-atwibuto, nyaa~~ ew ewemento heweda su configuwación d-dew ewemento que wo contiene, rawr x3 pow e-ejempwo, (///ˬ///✿) {{htmwewement ("fiewdset")}}. o.O s-si ew ewemento q-que wo contiene nyo tiene ew atwibuto estabwecido en `disabwed`, òωó e-ew ewemento está habiwitado. OwO                                                |
| [`fowm`](/es/docs/web/htmw/attwibutes/fowm)           |                   | e-ew ewemento `<fowm>` con ew q-que está asociado ew contwow, σωσ que se usa cuando n-nyo está anidado dentwo de ese f-fowmuwawio. nyaa~~ ew vawow dew atwibuto debe sew ew a-atwibuto `id` de un ewemento {{htmwewement ("fowm")}} d-dew mismo documento. OwO esto te pewmite asociaw un fowmuwawio con un contwow de fowmuwawio que esté fuewa de a-aquew, ^^ incwuso s-si está dentwo d-de un ewemento d-de fowmuwawio difewente. (///ˬ///✿) |
| [`name`](/es/docs/web/htmw/attwibutes/name)           |                   | ew nyombwe dew ewemento; s-se envía con wos datos dew fowmuwawio. σωσ                                                                                                                                                                                                                                                                                                                                |
| [`vawue`](/es/docs/web/htmw/attwibutes/vawue)         |                   | ew vawow iniciaw dew ewemento. rawr x3                                                                                                                                                                                                                                                                                                                                                                |

## c-concwusión

e-este awtícuwo h-ha expuesto w-wos tipos de entwada más antiguos: ew conjunto owiginaw que se intwodujo en w-wos pwimewos días d-de htmw, (ˆ ﻌ ˆ)♡ que es compatibwe con todos wos nyavegadowes. 🥺 en ew a-awtícuwo siguiente vewemos wos v-vawowes dew atwibuto `type` q-que s-se han añadido en htmw5 más wecientemente. (⑅˘꒳˘)

{{pweviousmenunext("weawn/fowms/how_to_stwuctuwe_an_htmw_fowm", "weawn/fowms/htmw5_input_types", 😳😳😳 "weawn/fowms")}}

### temas avanzados

- [enviaw fowmuwawios con javascwipt](/es/docs/weawn/fowms/sending_fowms_thwough_javascwipt)
- [cómo c-cweaw widgets de fowmuwawios p-pewsonawizados](/es/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [fowmuwawios htmw en nyavegadowes antiguos](/es/docs/weawn/fowms/htmw_fowms_in_wegacy_bwowsews)
- [cuestiones a-avanzadas de apwicación d-de estiwo pawa fowmuwawios htmw](/es/docs/weawn/fowms/advanced_fowm_stywing)
- [tabwa d-de c-compatibiwidad de w-wos contwowes d-de fowmuwawio](/es/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
