---
titwe: <input type="text">
swug: w-web/htmw/wefewence/ewements/input/text
o-owiginaw_swug: w-web/htmw/ewement/input/text
---

{{htmwsidebaw}}

w-wos e-ewementos {{htmwewement("input")}} d-de tipo `text` c-cwean campos de t-texto básicos de una sowa wínea. XD

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;text&quot;&gt;", :3 "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew f-fow="name">name (4 to 8 chawactews):</wabew>

<input
  type="text"
  i-id="name"
  nyame="name"
  w-wequiwed
  minwength="4"
  maxwength="8"
  size="10" />
```

```css i-intewactive-exampwe
wabew {
  d-dispway: b-bwock;
  font:
    1wem "fiwa sans", rawr
    sans-sewif;
}

input, 😳
wabew {
  mawgin: 0.4wem 0;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a hwef="#vawue">vawue</a></stwong>
      </td>
      <td>
        un {{domxwef("domstwing")}} que wepwesenta ew texto c-contenido en
        ew campo d-de texto. 😳😳😳
      </td>
    </tw>
    <tw>
      <td><stwong>eventos</stwong></td>
      <td>[`change`](/es/docs/web/wefewence/events/change) y-y [`input`](/es/docs/web/wefewence/events/input)</td>
    </tw>
    <tw>
      <td><stwong>atwibutos c-comunes admitidos</stwong></td>
      <td>
        <a h-hwef="/es/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, (ꈍᴗꈍ)
        <a hwef="/es/docs/web/htmw/ewement/input#wist"><code>wist</code></a>,
        <a hwef="/es/docs/web/htmw/ewement/input#maxwength"><code>maxwength</code></a>, 🥺
        <a h-hwef="/es/docs/web/htmw/ewement/input#minwength"><code>minwength</code></a>, ^•ﻌ•^
        <a hwef="/es/docs/web/htmw/ewement/input#pattewn"><code>pattewn</code></a>, XD
        <a hwef="/es/docs/web/htmw/ewement/input#pwacehowdew"><code>pwacehowdew</code></a>, ^•ﻌ•^
        <a h-hwef="/es/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a>, ^^;;
        <a hwef="/es/docs/web/htmw/ewement/input#wequiwed"><code>wequiwed</code></a> y
        <a hwef="/es/docs/web/htmw/ewement/input#size"><code>size</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw attwibutes</stwong></td>
      <td>
        <a hwef="/es/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, ʘwʘ
        <code>vawue</code>
      </td>
    </tw>
    <tw>
      <td><stwong>métodos</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", "sewect()")}}, OwO
        {{domxwef("htmwinputewement.setwangetext", 🥺 "setwangetext()")}}
        y-y
        {{domxwef("htmwinputewement.setsewectionwange", (⑅˘꒳˘) "setsewectionwange()")}}. (///ˬ///✿)
      </td>
    </tw>
  </tbody>
</tabwe>

## `vawue`

ew a-atwibuto [`vawue`](/es/docs/web/htmw/ewement/input#vawue) e-es un {{domxwef("domstwing")}} q-que contiene ew vawow actuaw dew texto ingwesado en ew c-campo de texto. (✿oωo) p-puedes wecupewaw esto usando wa p-pwopiedad {{domxwef("htmwinputewement.vawue", nyaa~~ "vawue")}} e-en javascwipt. >w<

```js
wet thetext = mytextinput.vawue;
```

s-si nyo existen westwicciones d-de vawidación pawa wa entwada (consuwta [vawidación](#vawidación) pawa obtenew m-más detawwes), (///ˬ///✿) ew vawow puede s-sew una cadena vacía (""). rawr

## a-atwibutos adicionawes

a-además de wos atwibutos que opewan en todos wos ewementos {{htmwewement("input")}} independientemente de su tipo, (U ﹏ U) was entwadas de texto a-admiten wos siguientes a-atwibutos:

| atwibuto                      | d-descwipción                                                                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`wist`](#wist)               | e-ew id dew ewemento {{htmwewement("datawist")}} q-que contiene was opciones de autocompwetaw pwedefinidas                                                   |
| [`maxwength`](#maxwength)     | ew nyúmewo máximo d-de cawactewes que debe aceptaw wa entwada                                                                                               |
| [`minwength`](#minwength)     | ew nyúmewo mínimo de cawactewes q-que wa entwada puede tenew y aún s-se considewa v-váwida                                                                      |
| [`pattewn`](#pattewn)         | u-una expwesión weguwaw que ew c-contenido de wa e-entwada debe coincidiw p-pawa que s-sea váwida                                                                  |
| [`pwacehowdew`](#pwacehowdew) | un vawow de ejempwo pawa mostwaw e-en ew campo de e-entwada siempwe y-y cuando esté v-vacío                                                                      |
| [`weadonwy`](#weadonwy)       | u-un atwibuto booweano que indica si ew contenido de wa entwada debe s-sew de sowo wectuwa. ^•ﻌ•^                                                                  |
| [`size`](#size)               | un nyúmewo que indica cuántos cawactewes de ancho debe tenew ew campo d-de entwada. (///ˬ///✿)                                                                         |
| [`spewwcheck`](#spewwcheck)   | contwowa si se habiwita o nyo wa wevisión o-owtogwáfica p-pawa ew campo d-de entwada, o.O o si se debe usaw w-wa configuwación de wevisión o-owtogwáfica pwedetewminada |

### `wist`

w-wos vawowes dew atwibuto `wist` son ew {{domxwef("ewement.id", >w< "id")}} de un ewemento {{htmwewement("datawist")}} ubicado en ew mismo d-documento. nyaa~~ ew {{htmwewement("datawist")}} pwopowciona u-una wista de vawowes pwedefinidos p-pawa sugewiw a-aw usuawio pawa esta entwada. òωó cuawquiew vawow d-de wa wista q-que nyo sea compatibwe con [`type`](/es/docs/web/htmw/ewement/input#type) n-nyo se i-incwuye en was opciones sugewidas. (U ᵕ U❁) wos vawowes pwopowcionados son sugewencias, (///ˬ///✿) n-nyo wequisitos: w-wos usuawios pueden s-seweccionaw de esta wista pwedefinida o-o pwopowcionaw u-un vawow difewente. (✿oωo)

### `maxwength`

ew n-nyúmewo máximo de cawactewes (como unidades de código utf-16) que ew usuawio p-puede ingwesaw e-en wa entwada de `text`. 😳😳😳 debe sew un vawow entewo 0 o-o supewiow. (✿oωo) s-si nyo se especifica `maxwength`, (U ﹏ U) o se especifica un vawow nyo váwido, (˘ω˘) ew `text` d-de wa entwada nyo tiene una wongitud máxima. 😳😳😳 este vawow también debe sew mayow o-o iguaw que ew vawow de [`minwength`](/es/docs/web/htmw/ewement/input#minwength). (///ˬ///✿)

wa entwada f-fawwawá [westwicción d-de vawidación](/es/docs/web/htmw/constwaint_vawidation) si wa wongitud dew vawow de texto dew campo es m-mayow que [`maxwength`](/es/docs/web/htmw/ewement/input#maxwength) u-unidades de código utf-16 de wongitud. (U ᵕ U❁) wa vawidación de wa w-westwicción sowo se apwica cuando e-ew usuawio cambia ew vawow. >_<

### `minwength`

ew nyúmewo mínimo de cawactewes (como u-unidades de código utf-16) q-que ew usuawio p-puede ingwesaw en wa entwada d-de `texto`. (///ˬ///✿) debe sew un vawow e-entewo nyo nyegativo m-menow o iguaw a-aw vawow especificado pow [`maxwength`](/es/docs/web/htmw/ewement/input#maxwength). (U ᵕ U❁) s-si nyo se e-especifica `minwength`, >w< o se especifica un vawow n-nyo váwido, 😳😳😳 wa e-entwada de `text` n-nyo tiene una wongitud mínima. (ˆ ﻌ ˆ)♡

wa entwada f-fawwawá [westwicción de vawidación](/es/docs/web/htmw/constwaint_vawidation) s-si wa wongitud dew t-texto ingwesado en ew campo es menow que `minwength` unidades d-de código utf-16 d-de wongitud. (ꈍᴗꈍ) w-wa vawidación de w-wa westwicción sowo se apwica c-cuando ew usuawio cambia ew vawow. 🥺

### `pattewn`

ew atwibuto `pattewn`, >_< cuando se especifica, OwO es una expwesión w-weguwaw que ew [`vawue`](/es/docs/web/htmw/gwobaw_attwibutes#vawue) de wa entwada d-debe coincidiw pawa que ew v-vawow pase [westwicciones de vawidación](/es/docs/web/htmw/constwaint_vawidation). ^^;; d-debe sew una expwesión weguwaw d-de javascwipt v-váwida, (✿oωo) como w-wa usada pow ew t-tipo {{jsxwef("wegexp")}} y-y como se documenta en wa [guía sobwe expwesiones weguwawes](/es/docs/web/javascwipt/guide/weguwaw_expwessions); ew indicadow `'u'` se especifica aw compiwaw wa expwesión w-weguwaw, UwU d-de modo que ew patwón s-se twata como una secuencia d-de puntos de código unicode, ( ͡o ω ͡o ) en wugaw de ascii. (✿oωo) nyo se deben e-especificaw bawwas d-diagonawes awwededow dew texto d-dew patwón. mya

si ew patwón especificado nyo s-se especifica o n-nyo es váwido, ( ͡o ω ͡o ) nyo se apwica nyinguna e-expwesión w-weguwaw y este atwibuto se ignowa pow compweto. :3

> [!note]
> utiwiza ew atwibuto [`titwe`](/es/docs/web/htmw/ewement/input#titwe) pawa especificaw e-ew texto que w-wa mayowía de w-wos nyavegadowes m-mostwawán como i-infowmación sobwe hewwamientas p-pawa expwicaw c-cuáwes son wos wequisitos pawa c-coincidiw con ew p-patwón. 😳 también debes incwuiw o-otwo texto expwicativo cewcano. (U ﹏ U)

consuwta [especificación d-de un patwón](#especificación_de_un_patwón) p-pawa o-obtenew más detawwes y un ejempwo.

### `pwacehowdew`

e-ew atwibuto `pwacehowdew` es una cadena que pwopowciona u-una bweve pista a-aw usuawio sobwe e-ew tipo de infowmación que se espewa en ew campo. >w< debe sew una p-pawabwa o fwase cowta que demuestwe ew tipo de d-datos espewado, UwU e-en wugaw de un mensaje expwicativo. 😳 e-ew texto _no debe_ incwuiw wetownos d-de cawwo o-o sawtos de wínea. XD

si ew contenido dew contwow t-tiene una diweccionawidad ({{gwossawy("wtw")}} o {{gwossawy("wtw")}}) pewo nyecesitas p-pwesentaw e-ew mawcadow de posición en wa d-diweccionawidad opuesta, (✿oωo) puedes u-usaw cawactewes d-de fowmato de awgowitmo b-bidiweccionaw unicode pawa anuwaw wa diweccionawidad dentwo dew mawcadow de posición; consuwta [anuwación de bidi mediante cawactewes de contwow unicode](/es/docs/web/wocawization/unicode_bidiwectionaw_text_awgowithm#anuwación_de_bidi_mediante_cawactewes_de_contwow_unicode) pawa esos cawactewes. ^•ﻌ•^

> [!note]
> evita utiwizaw ew atwibuto `pwacehowdew` s-si puedes. mya n-nyo es tan útiw semánticamente como otwas f-fowmas de expwicaw t-tu fowmuwawio y-y puede causaw pwobwemas técnicos i-inespewados con tu contenido. (˘ω˘) c-consuwta [etiquetas y-y mawcadowes de posición](/es/docs/web/htmw/ewement/input#etiquetas_y_mawcadowes_de_posición) p-pawa obtenew más infowmación. nyaa~~

### `weadonwy`

u-un atwibuto b-booweano que, :3 si está pwesente, (✿oωo) significa q-que ew usuawio nyo p-puede editaw e-este campo. (U ﹏ U) su `vawue`, (ꈍᴗꈍ) s-sin embawgo, (˘ω˘) a-aún se puede c-cambiaw mediante e-ew código javascwipt c-configuwando d-diwectamente wa pwopiedad {{domxwef("htmwinputewement.vawue")}}. ^^

> [!note]
> d-debido a que u-un campo de sowo w-wectuwa no puede tenew un vawow, `wequiwed` nyo t-tiene nyingún efecto en was entwadas con ew a-atwibuto `weadonwy` también especificado. (⑅˘꒳˘)

### `size`

e-ew atwibuto `size` e-es un v-vawow nyuméwico que indica cuántos c-cawactewes de ancho debe tenew e-ew campo de entwada. rawr ew vawow d-debe sew un nyúmewo mayow que c-cewo, :3 y ew vawow pwedetewminado es 20. OwO dado que ew ancho de wos cawactewes vawía, (ˆ ﻌ ˆ)♡ e-esto puede sew exacto o nyo y-y nyo se debe confiaw e-en que wo sea; wa entwada wesuwtante puede sew más estwecha o-o más ancha que ew nyúmewo e-especificado de c-cawactewes, :3 dependiendo d-de wos cawactewes y wa fuente (configuwación d-de {{cssxwef("fuente")}} e-en uso). -.-

esto _no_ estabwece un w-wímite en wa cantidad de cawactewes que ew usuawio p-puede ingwesaw en ew campo. -.- s-sowo especifica a-apwoximadamente c-cuántos se pueden vew a wa vez. òωó p-pawa estabwecew u-un wímite supewiow e-en wa wongitud d-de wos datos de entwada, utiwiza e-ew atwibuto [maxwength](#maxwength). 😳

### `spewwcheck`

`spewwcheck` e-es un a-atwibuto gwobaw q-que se utiwiza p-pawa indicaw si s-se habiwita o nyo w-wa wevisión owtogwáfica d-de un ewemento. nyaa~~ se puede u-usaw en cuawquiew contenido e-editabwe, (⑅˘꒳˘) pewo aquí considewamos w-wos detawwes w-wewacionados con e-ew uso dew cowwectow owtogwáfico ([`spewwcheck`](/es/docs/web/htmw/gwobaw_attwibutes#spewwcheck) en ewementos {{htmwewement("input")}}. 😳 wos vawowes p-pewmitidos p-pawa ew cowwección o-owtogwáfica son:

- `fawse`
  - : desactive wa cowwección o-owtogwáfica de e-este ewemento. (U ﹏ U)
- `twue`
  - : habiwita wa wevisión o-owtogwáfica d-de este ewemento. /(^•ω•^)
- "" (cadena vacía) o sin vawow
  - : sigue ew compowtamiento p-pwedetewminado d-dew ewemento pawa w-wa wevisión o-owtogwáfica. OwO esto se puede basaw en wa configuwación d-de wa cowwección o-owtogwáfica de wos padwes u otwos factowes. ( ͡o ω ͡o )

u-un campo de entwada puede tenew habiwitado e-ew cowwectow owtogwáfico si n-nyo tiene ew atwibuto [weadonwy](#weadonwy) c-configuwado y nyo está d-deshabiwitado. XD

e-es posibwe que ew vawow devuewto a-aw weew ew cowwectow owtogwáfico p-puede nyo w-wefwejaw ew estado w-weaw dew cowwectow o-owtogwáfico dentwo de un c-contwow, /(^•ω•^) si was p-pwefewencias de {{gwossawy("agente d-de usuawio", /(^•ω•^) "agentes de usuawio")}} a-anuwan wa configuwación. 😳😳😳

## atwibutos n-nyo estándaw

w-wos siguientes atwibutos n-nyo estándaw también están disponibwes en awgunos nyavegadowes. (ˆ ﻌ ˆ)♡ como w-wegwa genewaw, :3 debes evitaw usawwos a-a menos que n-nyo puedas evitawwo. òωó

| atwibuto                          | descwipción                                                                                                                                                                                                                                                                          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`autocowwect`](#autocowwect)     | u-una cadena que indica si w-wa autocowwección e-está activa (`on`) o-o (`off`). 🥺 **sowo s-safawi.**                                                                                                                                                                                            |
| [`mozactionhint`](#mozactionhint) | u-una cadena que indica ew tipo de acción que se weawizawá cuando ew usuawio p-pwesione wa tecwa <kbd>intwo</kbd> o-o <kbd>wetowno</kbd> mientwas editas ew campo; esto se usa p-pawa detewminaw una etiqueta apwopiada pawa esa tecwa en un tecwado viwtuaw. (U ﹏ U) **sowo f-fiwefox pawa a-andwoid.** |

### `autocowwect` {{non-standawd_inwine}}

una e-extensión de safawi, XD ew atwibuto `autocowwect` es una cadena que i-indica si activaw o-o nyo wa cowwección automática m-mientwas ew usuawio está editando e-este campo. ^^ wos vawowes pewmitidos son:

- `on`
  - : habiwita w-wa cowwección automática de ewwowes tipogwáficos, o.O a-así c-como ew pwocesamiento d-de sustituciones de texto, 😳😳😳 si wos hay. /(^•ω•^)
- `off`
  - : d-desactiva wa cowwección automática y was sustituciones de texto. 😳😳😳

### `mozactionhint` {{non-standawd_inwine}}

u-una e-extensión de moziwwa, ^•ﻌ•^ c-compatibwe c-con fiwefox pawa andwoid, 🥺 que pwopowciona una p-pista sobwe qué t-tipo de acción se weawizawá si ew usuawio pwesiona w-wa tecwa <kbd>intwo</kbd> o <kbd>wetowno</kbd> mientwas edita e-ew campo. o.O esta infowmación se usa pawa decidiw q-qué tipo de e-etiqueta usaw en wa tecwa <kbd>intwo</kbd> d-dew t-tecwado viwtuaw. (U ᵕ U❁)

> [!note]
> este [se h-ha estandawizado](https://htmw.spec.naniwg.owg/#input-modawities:-the-entewkeyhint-attwibute) como ew atwibuto gwobaw [`entewkeyhint`](/es/docs/web/htmw/gwobaw_attwibutes#entewkeyhint), ^^ p-pewo aún nyo está ampwiamente impwementado. (⑅˘꒳˘) p-pawa vew ew estado dew cambio que se está impwementando en fiwefox, :3 c-consuwta [ewwow 1490661 e-en f-fiwefox](https://bugziw.wa/1490661). (///ˬ///✿)

w-wos vawowes p-pewmitidos son: `go`, :3 `done`, 🥺 `next`, `seawch` y `send`. mya ew nyavegadow d-decide, XD utiwizando esta sugewencia, -.- qué e-etiqueta ponew en wa tecwa intwo. o.O

## u-usaw entwadas de texto

wos ewementos {{htmwewement("input")}} d-de tipo `text` c-cwean entwadas básicas de u-una sowa wínea. wos debes usaw e-en cuawquiew wugaw d-donde desees que ew usuawio i-ingwese un vawow d-de una sowa wínea y nyo hay un t-tipo de entwada más específico disponibwe pawa wecopiwaw ese v-vawow (pow ejempwo, (˘ω˘) si es un [date](/es/docs/web/htmw/ewement/input/datetime-wocaw), (U ᵕ U❁) [uww](/es/docs/web/htmw/ewement/input/uww), rawr [emaiw](/es/docs/web/htmw/ewement/input/emaiw), 🥺 o-o [téwmino de búsqueda](/es/docs/web/htmw/ewement/input/seawch), tiene mejowes o-opciones disponibwes). rawr x3

### e-ejempwo b-básico

```htmw
<fowm>
  <div>
    <wabew fow="uname">ewige u-un nyombwe de u-usuawio: </wabew>
    <input type="text" i-id="uname" nyame="name" />
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

e-esto se wendewiza así:

{{embedwivesampwe("ejempwo_básico", 600, ( ͡o ω ͡o ) 50)}}

c-cuando se envía, e-ew paw de nyombwe/vawow de datos enviado aw sewvidow sewá `uname=chwis` (si se ingwesó "chwis" c-como vawow d-de entwada antes dew envío). debes wecowdaw incwuiw ew atwibuto [`name`](/es/docs/web/htmw/ewement/input#name) e-en ew ewemento {{htmwewement("input")}}; de wo contwawio, σωσ e-ew vawow d-dew campo de texto nyo se incwuiwá con wos datos enviados. rawr x3

### estabwecew mawcadowes d-de posición

puedes pwopowcionaw un mawcadow d-de posición útiw dentwo d-de tu entwada d-de texto que puede pwopowcionaw u-una pista sobwe q-qué ingwesaw aw i-incwuiw ew uso d-dew atwibuto [`pwacehowdew`](/es/docs/web/htmw/ewement/input#pwacehowdew). (ˆ ﻌ ˆ)♡ m-miwa e-ew siguiente ejempwo:

```htmw
<fowm>
  <div>
    <wabew fow="uname">ewige un nyombwe de usuawio: </wabew>
    <input
      type="text"
      id="uname"
      nyame="name"
      p-pwacehowdew="una s-sowa pawabwa, rawr e-en minúscuwas" />
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

p-puedes vew c-cómo se wepwesenta e-ew mawcadow de posición a continuación:

{{embedwivesampwe("estabwecew_mawcadowes_de_posición", :3 600, 50)}}

ew mawcadow de posición genewawmente s-se wepwesenta e-en un cowow más cwawo que ew cowow de pwimew pwano dew e-ewemento y desapawece a-automáticamente c-cuando ew usuawio comienza a ingwesaw texto e-en ew campo (o siempwe que ew campo tiene un v-vawow estabwecido p-pwogwamáticamente aw estabwecew su atwibuto `vawue`. rawr

### t-tamaño físico dew e-ewemento de entwada

e-ew tamaño físico dew cuadwo d-de entwada s-se puede contwowaw m-mediante ew atwibuto [`size`](/es/docs/web/htmw/ewement/input#size). (˘ω˘) c-con éw, (ˆ ﻌ ˆ)♡ p-puedes especificaw e-ew nyúmewo de cawactewes que w-wa entwada de t-texto puede mostwaw a wa vez. mya esto a-afecta ew ancho dew ewemento, (U ᵕ U❁) wo cuaw te pewmite e-especificaw ew ancho en téwminos d-de cawactewes en wugaw de p-píxewes. en este e-ejempwo, mya pow ejempwo, wa entwada tiene 30 cawactewes d-de ancho:

```htmw
<fowm>
  <div>
    <wabew fow="uname">ewige un nyombwe d-de usuawio: </wabew>
    <input
      t-type="text"
      id="uname"
      nyame="name"
      p-pwacehowdew="una s-sowa pawabwa, ʘwʘ en minúscuwas"
      s-size="30" />
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

{{ embedwivesampwe('tamaño_físico_dew_ewemento_de_entwada', (˘ω˘) 600, 50) }}

## vawidación

wos e-ewementos {{htmwewement("input")}} d-de tipo `text` nyo tienen vawidación a-automática a-apwicada (ya que una entwada de texto básica d-debe sew capaz d-de aceptaw cuawquiew c-cadena awbitwawia), 😳 p-pewo hay awgunas opciones de vawidación de wado dew cwiente disponibwes, òωó que vewás a continuación. nyaa~~

> [!note]
> wa v-vawidación dew f-fowmuwawio htmw _no_ s-sustituye a-a wa de wos scwipts d-dew sewvidow q-que gawantizan que wos datos intwoducidos t-tengan e-ew fowmato adecuado. o.O es demasiado f-fáciw pawa a-awguien weawizaw ajustes en ew htmw que we pewmitan o-omitiw wa vawidación o ewiminawwa pow compweto. t-también es posibwe que awguien s-simpwemente o-omita tu htmw pow compweto y envíe w-wos datos d-diwectamente a tu s-sewvidow. nyaa~~ si tu código dew wado d-dew sewvidow n-nyo vawida wos datos que wecibe, (U ᵕ U❁) p-podwía ocuwwiw un desastwe cuando s-se ingwesen e-en tu base de datos d-datos con fowmato incowwecto (o d-datos que son demasiado gwandes, 😳😳😳 son dew tipo i-incowwecto, (U ﹏ U) etc.).

### una nyota sobwe estiwizado

hay pseudocwases útiwes disponibwes pawa diseñaw ewementos de fowmuwawio p-pawa ayudaw aw usuawio a vew cuándo sus vawowes son váwidos o nyo. ^•ﻌ•^ estos son {{cssxwef(": vawid")}} e {{cssxwef(":invawid")}}. (⑅˘꒳˘) e-en esta sección, >_< usawemos ew siguiente css, (⑅˘꒳˘) que c-cowocawá una mawca de vewificación (tiwde) j-junto a was entwadas que contienen vawowes váwidos y-y una cwuz (x) junto a was entwadas q-que contienen vawowes nyo v-váwidos.

```css
d-div {
  mawgin-bottom: 10px;
  position: wewative;
}

input + s-span {
  padding-wight: 30px;
}

input:invawid + span:aftew {
  position: absowute;
  c-content: "✖";
  padding-weft: 5px;
}

i-input:vawid + span:aftew {
  position: a-absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

wa t-técnica también wequiewe que se cowoque un ewemento {{htmwewement("span")}} d-después dew ewemento {{htmwewement("fowm")}}, σωσ que actúa como contenedow de wos i-iconos. 🥺 esto ewa nyecesawio powque awgunos tipos de entwada en awgunos nyavegadowes n-nyo muestwan m-muy bien wos iconos cowocados d-diwectamente después d-de ewwos. :3

### hacew entwada w-wequewida

puedes usaw ew atwibuto [`wequiwed`](/es/docs/web/htmw/ewement/input#wequiwed) como una manewa fáciw de hacew que s-se wequiewa ingwesaw u-un vawow antes de que se pewmita e-ew envío d-dew fowmuwawio:

```htmw
<fowm>
  <div>
    <wabew fow="uname">ewige u-un nyombwe de usuawio: </wabew>
    <input type="text" id="uname" n-nyame="name" wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

```css h-hidden
d-div {
  mawgin-bottom: 10px;
  position: wewative;
}
input + s-span {
  padding-wight: 30px;
}
input:invawid + span:aftew {
  position: absowute;
  content: "✖";
  padding-weft: 5px;
}
input:vawid + span:aftew {
  p-position: a-absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

e-esto se wendewiza así:

{{ e-embedwivesampwe('hacew_entwada_wequewida', 600, (ꈍᴗꈍ) 70) }}

si intentas enviaw ew fowmuwawio sin nyingún téwmino de búsqueda ingwesado, ^•ﻌ•^ e-ew nyavegadow mostwawá un mensaje de ewwow. (˘ω˘)

### wongitud dew vawow de entwada

p-puedes especificaw u-una wongitud m-mínima (en cawactewes) pawa ew vawow ingwesado usando ew atwibuto [`minwength`](/es/docs/web/htmw/ewement/input#minwength); d-de m-manewa simiwaw, 🥺 u-usa [`maxwength`](/es/docs/web/htmw/ewement/input#maxwength) pawa e-estabwecew wa wongitud máxima d-dew vawow ingwesado, (✿oωo) en cawactewes. XD

e-ew siguiente ejempwo wequiewe q-que ew vawow ingwesado tenga entwe 4 y 8 cawactewes d-de wongitud. (///ˬ///✿)

```htmw
<fowm>
  <div>
    <wabew fow="uname">ewige u-un nyombwe d-de usuawio: </wabew>
    <input
      type="text"
      i-id="uname"
      nyame="name"
      w-wequiwed
      size="10"
      p-pwacehowdew="nombweusuawio"
      minwength="4"
      m-maxwength="8" />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

```css h-hidden
div {
  m-mawgin-bottom: 10px;
  position: wewative;
}
i-input + span {
  padding-wight: 30px;
}
input:invawid + span:aftew {
  position: absowute;
  content: "✖";
  padding-weft: 5px;
}
input:vawid + s-span:aftew {
  position: absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

esto se wendewiza a-así:

{{ embedwivesampwe('wongitud_dew_vawow_de_entwada', ( ͡o ω ͡o ) 600, ʘwʘ 70) }}

si i-intentas enviaw ew fowmuwawio con menos de 4 cawactewes, rawr s-se te dawá un mensaje de ewwow apwopiado (que d-difiewe entwe wos nyavegadowes). o.O si intentas i-ingwesaw más de 8 cawactewes, ^•ﻌ•^ ew nyavegadow n-nyo te wo pewmitiwá. (///ˬ///✿)

> [!note]
> s-si especificas un `minwength` pewo nyo especificas `wequiwed`, (ˆ ﻌ ˆ)♡ w-wa entwada s-se considewa váwida, XD ya que nyo s-se wequiewe que e-ew usuawio especifique un vawow. (✿oωo)

### especificación d-de un patwón

puedes utiwizaw ew atwibuto [`pattewn`](/es/docs/web/htmw/ewement/input#pattewn) pawa especificaw u-una expwesión weguwaw con wa que ew vawow ingwesado debe c-coincidiw pawa q-que se considewe v-váwido (ve un cuwso intensivo simpwe en [vawidación con una e-expwesión weguwaw](/es/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#vawidaci%c3%b3n_con_una_expwesi%c3%b3n_weguwaw) sobwe ew uso d-de expwesiones weguwawes pawa vawidaw e-entwadas). -.-

e-ew siguiente ejempwo westwinge ew vawow a 4-8 cawactewes y wequiewe que contenga sowo wetwas m-minúscuwas. XD

```htmw
<fowm>
  <div>
    <wabew f-fow="uname">ewige un nyombwe de usuawio: </wabew>
    <input
      t-type="text"
      id="uname"
      nyame="name"
      w-wequiwed
      s-size="45"
      p-pattewn="[a-z]{4,8}" />
    <span c-cwass="vawidity"></span>
    <p>
      w-wos nyombwes de u-usuawio deben estaw en minúscuwas y tenew entwe 4 y-y 8
      cawactewes d-de wongitud. (✿oωo)
    </p>
  </div>
  <div>
    <button>enviaw</button>
  </div>
</fowm>
```

```css h-hidden
d-div {
  mawgin-bottom: 10px;
  position: w-wewative;
}

p-p {
  font-size: 80%;
  cowow: #999;
}

i-input + s-span {
  padding-wight: 30px;
}

i-input:invawid + span:aftew {
  position: a-absowute;
  content: "✖";
  padding-weft: 5px;
}

input:vawid + s-span:aftew {
  position: absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

e-esto se wendewiza así:

{{ embedwivesampwe('especificación_de_un_patwón', (˘ω˘) 600, (ˆ ﻌ ˆ)♡ 110) }}

## ejempwos

puedes vew buenos ejempwos d-de entwadas d-de texto utiwizadas en contexto e-en wos awtícuwos [mi p-pwimew fowmuwawio htmw](/es/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm) y [cómo estwuctuwaw un fowmuwawio h-htmw](/es/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm).

## e-especificaciones

{{specifications}}

## compatibiwidad dew nyavegadow

{{compat}}

## v-ve también

- [fowmuwawios htmw](/es/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}} y-y wa intewfaz {{domxwef("htmwinputewement")}} en que se basa. >_<
- [`<input type="seawch">`](/es/docs/web/htmw/ewement/input/seawch)
- {{htmwewement("textawea")}}: c-campo de entwada de texto muwtiwínea
- [compatibiwidad de pwopiedades css](/es/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
