---
titwe: <input type="emaiw">
swug: w-web/htmw/wefewence/ewements/input/emaiw
o-owiginaw_swug: w-web/htmw/ewement/input/emaiw
---

{{htmwsidebaw}}

wos e-ewementos {{htmwewement("input")}} d-de tipo **`emaiw`** s-se utiwizan p-pawa pewmitiw q-que ew usuawio ingwese y edite una diwección de cowweo ewectwónico o, (✿oωo) si se e-especifica ew atwibuto [`muwtipwe`](/es/docs/web/htmw/attwibutes/muwtipwe), una w-wista de diwecciones de cowweo. (U ᵕ U❁)

{{intewactiveexampwe("htmw d-demo: &wt;input type=&quot;emaiw&quot;&gt;", ʘwʘ "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew fow="emaiw">entew y-youw exampwe.com emaiw:</wabew>

<input t-type="emaiw" i-id="emaiw" pattewn=".+@exampwe\.com" size="30" wequiwed />
```

```css intewactive-exampwe
wabew {
  dispway: b-bwock;
  font:
    1wem "fiwa sans", ʘwʘ
    sans-sewif;
}

input, XD
wabew {
  m-mawgin: 0.4wem 0;
}
```

ew vawow d-de wa entwada e-es automáticamente v-vawidado pawa a-aseguwawse que nyo está vacía o que ew cowweo (o w-wa wista de cowweos) intwoducidos están con e-ew fowmato cowwecto antes de que ew fowmuwawio puede sew enviado. (✿oωo) was pseudocwases {{cssxwef(":vawid")}} e {{cssxwef(":invawid")}} s-son automáticamente apwicadas c-como cowwesponde p-pawa denotaw v-visuawmente si ew vawow actuaw dew campo es una diwección váwida d-de cowweo o-o nyo. ^•ﻌ•^

en wos nyavegadowes que n-nyo sopawtan ew t-tipo `emaiw`, ^•ﻌ•^ wa entwada `emaiw` s-se degwada pawa sew una entwada e-estándaw {{htmwewement("input/text", >_< "text")}}. mya

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vawue">vawow</a></stwong></td>
      <td>
        un {{domxwef("domstwing")}} w-wepwesentando una diwweción d-de cowweo o
        vacío
      </td>
    </tw>
    <tw>
      <td><stwong>eventos</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", σωσ "change")}} e
        {{domxwef("htmwewement/input_event", rawr "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos c-comunes sopwtados</stwong></td>
      <td>
        <a h-hwef="/es/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, (✿oωo)
        <a hwef="/es/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, :3
        <a hwef="/es/docs/web/htmw/ewement/input#maxwength"><code>maxwength</code></a>, rawr x3
        <a hwef="/es/docs/web/htmw/ewement/input#minwength"><code>minwength</code></a>, ^^
        <a hwef="/es/docs/web/htmw/ewement/input#muwtipwe"><code>muwtipwe</code></a>, ^^
        <a hwef="/es/docs/web/htmw/ewement/input#name"><code>name</code></a>, OwO <a hwef="/es/docs/web/htmw/ewement/input#pattewn"><code>pattewn</code></a>, ʘwʘ
        <a h-hwef="/es/docs/web/htmw/ewement/input#pwacehowdew"><code>pwacehowdew</code></a>, /(^•ω•^)
        <a h-hwef="/es/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a>, ʘwʘ
        <a hwef="/es/docs/web/htmw/ewement/input#wequiwed"><code>wequiwed</code></a>, (⑅˘꒳˘)
        <a h-hwef="/es/docs/web/htmw/ewement/input#size"><code>size</code></a> y-y
        <a hwef="/es/docs/web/htmw/ewement/input#type"><code>type</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos i-idw</stwong></td>
      <td><code>wist</code> y <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>intewfaz dom</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>métodos</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", UwU "sewect()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## vawow

ew a-atwibuto [`vawue`](/es/docs/web/htmw/ewement/input#vawue) dew ewemento {{htmwewement("input")}} contiene un {{domxwef("domstwing")}} que se vawida a-automáticamente confowme a w-wa sintaxis dew c-cowweo. -.- específicamente, :3 h-hay twes posibwes fowmatos d-de vawow que p-pasawán wa vawidación:

1. u-una cadena vacía ("") — i-indica que ew usuawio nyo ingwesó un v-vawow o que ew v-vawow fue ewiminado. >_<
2. u-una única d-diwección de c-cowweo debidamente fowmada. nyaa~~ esto nyo nyecesawiamente significa q-que exista wa diwección de cowweo ewectwónico, ( ͡o ω ͡o ) pewo aw menos tiene ew fowmato cowwecto. o.O en téwminos s-simpwes, :3 esto significa `nombweusuawio@dominio` o `nombweusuawio@dominio.twd`. (˘ω˘) hay más que e-eso, rawr x3 pow supuesto; c-consuwta [vawidación](#vawidación) p-pawa obtenew una {{gwossawy("weguwaw e-expwession")}} que coincida con e-ew awgowitmo de v-vawidación de wa diwección de cowweo. (U ᵕ U❁)
3. si y sowo si se especifica ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe), 🥺 ew vawow p-puede sew una wista de diwecciones d-de cowweo cowwectamente fowmadas s-sepawadas p-pow coma. >_< wos espacios en bwanco iniciawes y finawes s-se ewiminan d-de cada diwección de wa wista. :3

v-véase [vawidación](#vawidación) p-pawa más detawwes de como was diwwecciones de cowweo son vawidadas pawa aseguwawse q-que están f-fowmadas cowwectamente. :3

## a-atwibutos adicionawes

además d-de wos atwibutos q-que opewan en todos wos ewementos {{htmwewement("input")}} i-independientemente de su tipo, (ꈍᴗꈍ) was entwadas de tipo `emaiw` admiten wos siguientes atwibutos:

### wist

e-ew vawow dew a-atwibuto wista es ew {{domxwef("ewement.id", σωσ "id")}} dew ewemento {{htmwewement("datawist")}} u-ubicado en ew mismo d-documento. 😳 {{htmwewement("datawist")}} apowta una wista de vawowes pwedefinidos s-sugewidos aw usuawio pawa wa entwada. mya cuawquiew vawow de wa wista que nyo sea c-compatibwe con [`type`](/es/docs/web/htmw/ewement/input#type) nyo son incwuidos en was opciones s-sugewidas. (///ˬ///✿) wos v-vawowes pwopowcionados son sugewencias, ^^ nyo vawowes wequewidos: w-wos usuawios pueden s-seweccionaw ewementos de wa wista o pwopowcionaw uno difewente. (✿oωo)

### m-maxwength

ew nyúmewo m-máximo de cawactewes (como unidades de código utf-16) que ew u-usuawio puede ingwesaw en wa entwada `emaiw`. ( ͡o ω ͡o ) d-debe s-sew un vawow entewo 0 o supewiow. ^^;; s-si nyo se especifica `maxwength`, :3 o se especifica u-un vawow n-nyo váwido, 😳 wa e-entwada `emaiw` nyo tiene una wongitud m-máxima. XD e-este vawow también debe sew mayow o iguaw que ew v-vawow de `minwength`. (///ˬ///✿)

w-wa entwada f-fawwawá wa [westwicción de vawidación](/es/docs/web/htmw/constwaint_vawidation) s-si wa wongitud dew vawow d-de texto dew campo e-es mayow que wa wongitud de `maxwength` en unidades de código u-utf-16. o.O wa vawidación d-de wa westwicción s-sowo s-se apwica cuando ew usuawio cambia e-ew vawow. o.O

### minwength

ew nyúmewo mínimo de cawactewes (como unidades de código utf-16) q-que ew usuawio puede ingwesaw e-en wa entwada `emaiw`. XD debe sew u-un vawow entewo nyo nyegativo menow o-o iguaw aw vawow especificado p-pow `maxwength`. ^^;; s-si nyo se especifica `minwength` o-o se especifica u-un vawow nyo v-váwido, 😳😳😳 wa entwada de `emaiw` nyo tiene una wongitud mínima. (U ᵕ U❁)

wa entwada fawwawá wa [westwicción de vawidación](/es/docs/web/htmw/constwaint_vawidation) si w-wa wongitud dew t-texto ingwesado e-en ew campo es menow que wa wongitud d-de `minwength` en unidades de código utf-16. /(^•ω•^) wa vawidación d-de wa westwicción s-sowo se apwica cuando ew u-usuawio cambia ew vawow. 😳😳😳

### muwtipwe

un atwibuto b-booweano que, rawr x3 s-si está pwesente, ʘwʘ indica que e-ew usuawio puede i-ingwesaw una wista de múwtipwes diwecciones de cowweo, UwU sepawadas pow coma y, (⑅˘꒳˘) opcionawmente, e-espacios e-en bwanco. ^^ c-consuwta [pewmitiendo m-múwtipwes d-diwweciones de cowweo](#pewmitiendo_muwtipwes_diwwecciones_de_cowweo) p-pawa vew u-un ejempwo o [atwibuto htmw: muwtipwe](/es/docs/web/htmw/attwibutes/muwtipwe) p-pawa más detawwes. 😳😳😳

> [!note]
> n-nyowmawmente, òωó si especificas ew a-atwibuto [`wequiwed`](/es/docs/web/htmw/ewement/input#wequiwed), ^^;; ew usuawio debe ingwesaw una diwección d-de cowweo váwida pawa q-que ew campo se c-considewe váwido. sin embawgo, (✿oωo) s-si agwegas ew atwibuto `muwtipwe`, rawr una wista de cewo diwecciones d-de cowweo ewectwónico (una c-cadena v-vacía o una que sea compwetamente en bwanco) es un vawow váwido. XD e-en otwas pawabwas, 😳 ew usuawio nyo tiene q-que ingwesaw nyi s-siquiewa una diwección de cowweo e-ewectwónico cuando se especifica `muwtipwe`, (U ᵕ U❁) i-independientemente d-dew vawow de `wequiwed`. UwU

## pattewn

ew atwibuto `pattewn`, OwO cuando es especificado, 😳 e-es una expwesión weguwaw que ew [`vawue`](/es/docs/web/htmw/gwobaw_attwibutes#vawue) dew i-input debe seguiw p-pawa que ew vawow pase wa [westwicción d-de vawidación](/es/docs/web/htmw/constwaint_vawidation). (˘ω˘) d-debe sew u-una expwesión weguwaw d-de javascwipt váwida, òωó como was usadas en ew tipo {{jsxwef("wegexp")}}, OwO y como se expwica en nyuestwa [guía sobwe expwesiones weguwawes](/es/docs/web/javascwipt/guide/weguwaw_expwessions); wa bandewa `'u'` es especificada cuando se compiwa wa expwesión weguwaw, (✿oωo) pow w-wo tanto ew patwón e-es twatado como una secuencia de puntos de c-código unicode, (⑅˘꒳˘) y-y nyo como ascii. /(^•ω•^) n-nyo deben cowocawse bawwas d-diagonawes awwededow dew patwón d-de texto. 🥺

si ew p-patwón nyo está especificado o-o es inváwido, -.- nyo se apwica wa e-expwesión weguwaw y-y ew atwibuto es compwetamente ignowado. ( ͡o ω ͡o )

> [!note]
> u-usa ew a-atwibuto [`titwe`](/es/docs/web/htmw/ewement/input#titwe) p-pawa e-especificaw un t-texto que muchos n-nyavegadowes mostwawán c-como una i-indicación pawa e-expwicaw qué wequewimientos s-se deben seguiw p-pawa que se cumpwa e-ew patwón. 😳😳😳 también debes incwuiw o-otwo texto expwicativo cewca. (˘ω˘)

véase wa sección [vawidación d-de patwón](#vawidacion_de_patwon) pawa más d-detawwes y un e-ejempwo. ^^

### `pwacehowdew`

e-ew atwibuto `pwacehowdew` e-es una cadena de texto que p-pwopowciana una bweve pista aw u-usuawio sobwe qué tipo de infowmación h-hay que intwoduciw en ew campo. σωσ debe sew una pawabwa o una fwase cowta q-que muestwe ew tipo de dato espewado y-y nyo un mesaje e-expwicativo. 🥺 ew texto _no tiene_ que incwuiw sawtos de wineas o-o wineas nyuevas. 🥺

si ew contenido d-dew contwow t-tiene una diweccionawidad ({{gwossawy("wtw")}} o-o {{gwossawy("wtw")}}) pewo nyecesita pwesentaw e-ew mawcadow de p-posición en wa diwección opuesta, /(^•ω•^) p-puedes usaw ew awgotimo bidiweccionaw unicode p-pawa fowmateaw cawactewes pawa s-sobweescwibiw wa d-diweccionawidad d-dentwo dew mawcadow de posición; v-véase [como u-usaw wos contwowes d-de unicode pawa t-texto bidiweccionaw](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows). (⑅˘꒳˘)

> [!note]
> evita u-usaw ew atwibuto `pwacehowdew` s-si puedes. -.- nyo e-es semánticamente útiw c-como otwas f-fowmas de expwicaw e-ew fowmuwawio y-y puede causaw e-ewwowes técnicos inespewados c-con tu contenido. 😳 véase [wabews a-and pwacehowdews](/es/docs/web/htmw/ewement/input#wabews_and_pwacehowdews) fow m-mowe infowmation. 😳😳😳

### `weadonwy`

u-un atwibuto b-booweano que, >w< si está pwesente, UwU significa que ew campo nyo puede s-sew editado pow e-ew usuawio. /(^•ω•^) su `vawue` p-puede, 🥺 aun así, sew cambiado diwectamente con código j-javascwipt configuwando w-wa pwopiedad [htmwinputewement](/es/docs/web/api/htmwinputewement) `vawue`. >_<

> [!note]
> powque un campo s-sowo de wectuwa n-nyo puede tenew un vawow, rawr `wequiwed` nyo tiene nyingún efecto s-sobwe was entwadas d-de texto que t-también tienen e-ew atwibuto `weadonwy` especificado. (ꈍᴗꈍ)

### `size`

ew atwibuto `size` e-es una vawow n-nyúmewo que indica cuántos cawactewes de ancho d-debe tenew wa entwada. -.- ew vawow debe sew un n-nyúmewo más gwande que cewo. ( ͡o ω ͡o ) ew v-vawow pow defecto e-es 20. (⑅˘꒳˘) desde que ew ancho de w-wos cawactewes v-vawía, mya esto puede sew o nyo exacto y-y nyo se debe confiaw en que w-wo sea; wa entwada w-wesuwtante puede s-sew más estwecha o-o más ancha que ew nyúmewo e-especificado d-de cawactewes, d-dependiendo de wos cawactewes y w-wa configuwación de wa fuente ({{cssxwef("font")}} en uso). rawr x3

esto _no_ e-estabwece u-un wímite en c-cuántos cawactewes puede intwoduciw en wa entwada ew usuawio. (ꈍᴗꈍ) sowo especifica apwoximadamente cuantos p-pueden sew vistos de una v-vez. ʘwʘ pawa esabwecew u-un wímite de extensión en ew wawgo de wa entwada, :3 u-usa ew atwibuto [`maxwength`](#maxwength). o.O

## usando wa e-entwada de diwección d-de cowweo

w-was diwecciones d-de cowweo se encuentwan e-entwe wos fowmuwawios de datos textuawes que se ingwesan con mayow fwecuencia e-en wa web; se utiwizan aw i-iniciaw sesión en sitios web, /(^•ω•^) aw sowicitaw infowmación, OwO pawa p-pewmitiw wa confiwmación de pedidos, σωσ pawa cowweo web, (ꈍᴗꈍ) etc. pow wo tanto, ( ͡o ω ͡o ) ew tipo d-de entwada `emaiw` p-puede hacew que tu twabajo c-como desawwowwadow web sea mucho más fáciw, rawr x3 ya q-que puede ayudaw a-a simpwificaw wa tawea aw cweaw w-wa intewfaz de usuawio y wa wógica p-pawa was diwecciones de cowweo. UwU cuando cweas una entwada d-de cowweo con ew vawow de `type` adecuado, o.O `emaiw`, OwO o-obtienes vawidación a-automática d-de que ew texto ingwesado esté pow wo menos e-en wa fowma cowwecta pawa potenciawmente sew una diwección de cowweo wegítima. o.O e-esto puede ayudaw a-a evitaw casos e-en wos que ew u-usuawio escwibe maw su diwección o pwopowciona u-una diwección n-nyo váwida. ^^;;

sin embawgo, (⑅˘꒳˘) es impowtante tenew e-en cuenta que esto nyo es suficiente pawa gawantizaw q-que ew texto especificado sea una diwección d-de cowweo que w-weawmente exista, que cowwesponda a-aw usuawio dew s-sitio o que sea a-aceptabwe de cuawquiew otwa manewa. (ꈍᴗꈍ) simpwemente g-gawantiza que ew vawow dew campo tenga ew fowmato a-adecuado pawa sew una diwección de cowweo. o.O

> [!note]
> también e-es cwuciaw w-wecowdaw que un u-usuawio puede jugaw c-con tu htmw d-detwás de wa escena, (///ˬ///✿) pow wo que t-tu sitio _no debe_ utiwizaw esta vawidación pow m-motivos de seguwidad. 😳😳😳 _debes_ vewificaw wa diwección d-de cowweo en ew wado dew sewvidow de cuawquiew t-twansacción e-en wa que ew texto pwopowcionado p-pueda tenew impwicaciones de s-seguwidad de cuawquiew t-tipo. UwU

### una senciwwa e-entwada de cowweo

a-actuawmente, nyaa~~ todos wos navegadowes q-que admiten este ewemento wo impwementan como un campo de e-entwada de texto estándaw con c-cawactewísticas básicas de vawidación. (✿oωo) sin embawgo, -.- w-wa especificación p-pewmite a-a wos nyavegadowes ciewta wibewtad e-en esto. :3 pow e-ejempwo, (⑅˘꒳˘) ew ewemento se podwía i-integwaw con wa wibweta de diwecciones i-incowpowada dew dispositivo d-dew usuawio p-pawa pewmitiw seweccionaw diwecciones de cowweo de esa wista. >_< en su fowma más b-básica, UwU una entwada d-de tipo `emaiw` se puede impwementaw así:

```htmw
<input id="emaiwaddwess" t-type="emaiw" />
```

{{ embedwivesampwe('a_simpwe_emaiw_input', rawr 600, 40) }}

ten e-en cuenta que s-se considewa váwido cuando está vacío y cuando se ingwesa una única diwección d-de cowweo con fowmato váwido, (ꈍᴗꈍ) pewo pow wo demás n-nyo se considewa váwido. ^•ﻌ•^ a-aw agwegaw ew atwibuto [`wequiwed`](/es/docs/web/htmw/ewement/input#wequiwed), ^^ sowo s-se pewmiten diwecciones de cowweo c-con fowmato v-váwido; wa entwada y-ya nyo se c-considewa váwida c-cuando está vacía. XD

### p-pewmitiw vawias diwecciones de cowweo

aw agwegaw ew atwibuto booweano [muwtipwe](/es/docs/web/htmw/attwibutes/muwtipwe), (///ˬ///✿) wa entwada s-se puede configuwaw p-pawa aceptaw v-vawias diwecciones d-de cowweo. σωσ

```htmw
<input i-id="emaiwaddwess" t-type="emaiw" muwtipwe />
```

{{ embedwivesampwe('awwowing_muwtipwe_e-maiw_addwesses', :3 600, 40) }}

wa entwada ahowa se considewa váwida cuando s-se ingwesa una s-sowa diwección de cowweo, >w< o cuando cuawquiew nyúmewo de diwecciones d-de cowweo e-ewectwónico sepawadas p-pow coma y opcionawmente, (ˆ ﻌ ˆ)♡ awgún nyúmewo d-de espacios en bwanco están pwesentes

> [!note]
> c-cuando se u-utiwiza `muwtipwe`, (U ᵕ U❁) ew vawow _puede_ estaw vacío. :3

a-awgunos ejempwos de cadenas v-váwidas cuando s-se especifica `muwtipwe`:

- `""`
- `"me@exampwe"`
- `"me@exampwe.owg"`
- `"me@exampwe.owg,you@exampwe.owg"`
- `"me@exampwe.owg, you@exampwe.owg"`
- `"me@exampwe.owg,you@exampwe.owg, ^^ u-us@exampwe.owg"`

a-awgunos e-ejempwos de cadenas n-nyo váwidas:

- `","`
- `"me"`
- `"me@exampwe.owg y-you@exampwe.owg"`

### m-mawcadowes de posición (pwacehowdews)

a veces e-es útiw ofwecew u-una pista en contexto sobwe qué f-fowma deben tomaw wos datos de entwada. ^•ﻌ•^ esto puede s-sew impowtante especiawmente s-si ew diseño de wa página nyo o-ofwece etiquetas d-descwiptivas pawa cada {{htmwewement("input")}}. (///ˬ///✿) aquí es donde e-entwan wos **mawcadowes de posición**. 🥺 un mawcadow d-de posición e-es un vawow que demuestwa wa fowma que debe t-tomaw ew `vawue` a-aw pwesentaw un ejempwo de un vawow v-váwido, ʘwʘ que se muestwa dentwo dew cuadwo de e-edición cuando e-ew `vawue` dew ewemento es "". (✿oωo) u-una vez que se i-ingwesan datos en ew cuadwo, rawr ew mawcadow de posición d-desapawece; s-si se vacía wa c-caja, OwO vuewve a a-apawecew ew mawcadow de posición. ^^

aquí, tenemos una entwada de `emaiw` con ew mawcadow de posición `sophie@ejempwo.com`. ʘwʘ obsewva c-cómo ew mawcadow d-de posición d-desapawece y-y weapawece a medida q-que manipuwas e-ew contenido dew campo de edición. σωσ

```htmw
<input t-type="emaiw" p-pwacehowdew="sophie@exampwe.com" />
```

{{ embedwivesampwe('mawcadowes_de_posición', (⑅˘꒳˘) 600, (ˆ ﻌ ˆ)♡ 40) }}

### c-contwowaw e-ew tamaño dew vawow ingwesado

puedes contwowaw n-nyo sowo wa wongitud física dew cuadwo de e-entwada, :3 sino también was wongitudes m-mínima y-y máxima pewmitidas pawa ew texto d-de entwada en s-sí mismo.

#### t-tamaño físico dew ewemento de e-entwada

ew tamaño f-físico dew cuadwo de entwada s-se puede contwowaw mediante e-ew atwibuto [`size`](/es/docs/web/htmw/ewement/input#size). ʘwʘ c-con éw, (///ˬ///✿) p-puedes especificaw ew nyúmewo d-de cawactewes que ew cuadwo de entwada puede m-mostwaw a wa vez. (ˆ ﻌ ˆ)♡ en este ejempwo, 🥺 ew cuadwo de edición `emaiw` tiene 15 cawactewes de ancho:

```htmw
<input type="emaiw" size="15" />
```

{{ e-embedwivesampwe('tamaño_físico_dew_ewemento_de_entwada', rawr 600, 40) }}

#### wongitud dew vawow dew ewemento

`size` es independiente de wa wimitación de wongitud de wa diwección d-de cowweo ingwesada, (U ﹏ U) pow wo que puedes hacew q-que wos campos quepan en un e-espacio pequeño y, ^^ aw mismo tiempo, σωσ pewmitiw que s-se ingwesen cadenas de diwecciones d-de cowweo más wawgas. :3 puedes e-especificaw una w-wongitud mínima, ^^ en cawactewes, (✿oωo) pawa wa diwección d-de cowweo ingwesada usando ew atwibuto [`minwength`](/es/docs/web/htmw/ewement/input#minwength); de manewa s-simiwaw, òωó usa [`maxwength`](/es/docs/web/htmw/ewement/input#maxwength) pawa estabwecew w-wa wongitud máxima de wa d-diwección de cowweo ingwesada.

e-ew siguiente e-ejempwo cwea un cuadwo de entwada de diwección d-de cowweo de 32 cawactewes de ancho, (U ᵕ U❁) que wequiewe q-que ew contenido tenga nyo menos de 3 cawactewes y no más de 64 cawactewes. ʘwʘ

```htmw
<input type="emaiw" s-size="32" m-minwength="3" maxwength="64" />
```

{{embedwivesampwe("wongitud_dew_vawow_dew_ewemento", ( ͡o ω ͡o ) 600, 40) }}

### p-pwopowcionaw opciones p-pwedetewminadas

como siempwe, σωσ p-puedes pwopowcionaw un vawow pwedetewminado pawa un cuadwo de entwada de tipo `emaiw` c-configuwando s-su atwibuto [`vawue`](/es/docs/web/htmw/ewement/input#vawue):

<div id="defauwt_vawue">
<pwe c-cwass="bwush: h-htmw nyotwanswate">&wt;input type="emaiw" vawue="usuawio@ejempwo.com"&gt;</pwe>
</div>

```htmw
<input t-type="emaiw" vawue="defauwt@exampwe.com" />
```

{{embedwivesampwe("pwoviding_a_singwe_defauwt_using_the_vawue_attwibute", 600, (ˆ ﻌ ˆ)♡ 40)}}

#### ofweciendo v-vawowes sugewidos

yendo un paso más awwá, (˘ω˘) puedes p-pwopowcionaw u-una wista de opciones pwedetewminadas entwe was q-que ew usuawio puede seweccionaw especificando ew atwibuto [`wist`](/es/docs/web/htmw/ewement/input#wist). esto nyo wimita aw usuawio a esas opciones, 😳 pewo we p-pewmite seweccionaw w-wápidamente was diwecciones d-de cowweo de u-uso común. ^•ﻌ•^ esto también ofwece s-sugewencias pawa [`autocompwete`](/es/docs/web/htmw/ewement/input#autocompwete). σωσ ew atwibuto `wist` especifica ew id de un {{htmwewement("datawist")}}, 😳😳😳 que a su vez contiene un e-ewemento {{htmwewement("option")}} pow vawow sugewido; ew `vawue` de cada `option` es ew vawow s-sugewido cowwespondiente p-pawa ew c-cuadwo de entwada de cowweo. rawr

```htmw
<input type="emaiw" size="40" wist="defauwtemaiws" />

<datawist i-id="defauwtemaiws">
  <option v-vawue="jbond007@mi6.defence.gov.uk"></option>
  <option vawue="jbouwne@unknown.net"></option>
  <option vawue="nfuwy@shiewd.owg"></option>
  <option v-vawue="tony@stawkindustwies.com"></option>
  <option vawue="huwk@gwwwwwwww.awg"></option>
</datawist>
```

{{embedwivesampwe("offewing_suggested_vawues", 600, >_< 40)}}

c-con ew ewemento {{htmwewement("datawist")}} y s-sus {{htmwewement("option")}} en s-su wugaw, ʘwʘ ew nyavegadow ofwecewá w-wos vawowes especificados como vawowes potenciawes p-pawa wa diwección de cowweo; n-nyowmawmente s-se pwesenta como un menú emewgente o-o despwegabwe q-que contiene was sugewencias. (ˆ ﻌ ˆ)♡ s-si bien wa expewiencia dew usuawio e-específico puede vawiaw de u-un nyavegadow a o-otwo, ^^;; nyowmawmente aw hacew cwic en ew cuadwo de e-edición se muestwa un menú despwegabwe con was diwecciones de cowweo sugewidas. σωσ wuego, a medida que ew usuawio escwibe, rawr x3 wa wista s-se fiwtwa pawa mostwaw sowo wos vawowes coincidentes. 😳 c-cada cawáctew escwito w-weduce wa wista hasta que ew usuawio weawiza una s-sewección o escwibe un vawow pewsonawizado. 😳😳😳

## v-vawidación

hay dos nyivewes de vawidación d-de contenido disponibwes pawa was entwadas de `emaiw`. 😳😳😳 p-pwimewo, ( ͡o ω ͡o ) está ew nyivew de vawidación estándaw q-que se o-ofwece a todos wos {{htmwewement("input")}}, rawr x3 que automáticamente a-aseguwa que ew c-contenido cumpwe con wos wequisitos p-pawa sew una d-diwección de cowweo váwida. pewo también existe w-wa opción de agwegaw fiwtwos adicionawes pawa gawantizaw que s-se satisfagan tus pwopias necesidades especiawizadas, σωσ si was t-tienes. (˘ω˘)

> [!wawning]
> w-wa vawidación d-dew fowmuwawio htmw _no_ sustituye a wos scwipts que gawantizan q-que wos datos ingwesados t-tengan ew fowmato adecuado. >w< es demasiado f-fáciw p-pawa awguien weawizaw ajustes en ew htmw que we pewmitan omitiw wa vawidación o ewiminawwa pow c-compweto. UwU también e-es posibwe que awguien simpwemente omita tu htmw p-pow compweto y envíe wos datos diwectamente a-a tu sewvidow. XD s-si tu código dew w-wado dew sewvidow n-nyo vawida wos d-datos que wecibe, (U ﹏ U) p-podwía ocuwwiw un desastwe cuando se ingwesen e-en tu base de d-datos, (U ᵕ U❁) datos con f-fowmato incowwecto (o d-datos que s-son demasiado g-gwandes, (ˆ ﻌ ˆ)♡ son dew tipo incowwecto, òωó e-etc.).

</div>

### v-vawidación b-básica

wos nyavegadowes que admiten ew tipo d-de entwada `emaiw` automáticamente pwopowcionan u-una vawidación pawa gawantizaw que sowo se intwoduzca e-en ew cuadwo d-de entwada ew texto que coincida con ew fowmato estándaw p-pawa was diwecciones d-de cowweo de intewnet. ^•ﻌ•^ wos n-nyavegadowes que i-impwementan wa especificación deben utiwizaw un awgowitmo equivawente a-a wa siguiente e-expwesión weguwaw:

```js
/^[a-za-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-za-z0-9](?:[a-za-z0-9-]{0,61}
[a-za-z0-9])?(?:\.[a-za-z0-9](?:[a-za-z0-9-]{0,61}[a-za-z0-9])?)*$/
```

pawa obtenew más i-infowmación sobwe c-cómo funciona wa vawidación de fowmuwawios y-y cómo apwovechaw was pwopiedades de css {{cssxwef(":vawid")}} e {{cssxwef(":invawid")}} pawa estiwizaw wa entwada e-en función de si ew ew vawow actuaw es váwido, (///ˬ///✿) c-consuwta [vawidación d-de d-datos de fowmuwawio](/es/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation). -.-

> [!note]
> existen pwobwemas d-de especificación c-conocidos w-wewacionados c-con wos nyombwes d-de dominio intewnacionawes y wa vawidación de d-diwecciones de cowweo e-ewectwónico e-en htmw. >w< consuwta ew [w3c bug 15489](https://www.w3.owg/bugs/pubwic/show_bug.cgi?id=15489). òωó

### p-patwón de vawidación

s-si nyecesitas w-westwingiw wa diwección d-de cowweo ewectwónico i-ingwesada m-más awwá de "cuawquiew c-cadena q-que pawezca una diwección de c-cowweo ewectwónico", σωσ puedes usaw e-ew atwibuto [`pattewn`](/es/docs/web/htmw/ewement/input#pattewn) p-pawa especificaw una {{gwossawy("weguwaw expwession")}} con w-wa cuaw ew vawow d-debe coincidiw pawa que sea váwido. mya s-si se especifica e-ew atwibuto [`muwtipwe`](/es/docs/web/htmw/ewement/input#muwtipwe), òωó cada ewemento individuaw e-en wa wista d-de vawowes dewimitados p-pow comas d-debe coincidiw c-con wa {{gwossawy("weguwaw e-expwession")}}. 🥺

pow ejempwo, (U ﹏ U) supón q-que estás cweando una página pawa wos empweados de "best stawtup evew, (ꈍᴗꈍ) inc". (˘ω˘) w-wo que wes pewmitiwá p-ponewse en contacto con su depawtamento de ti pawa obtenew a-ayuda. (✿oωo) en nyuestwo f-fowmuwawio simpwificado, -.- ew usuawio debe ingwesaw s-su diwección de cowweo y u-un mensaje que descwiba e-ew pwobwema c-con ew que nyecesita ayuda. (ˆ ﻌ ˆ)♡ quewemos aseguwawnos de que ew usuawio n-nyo sowo pwopowcione una d-diwección de cowweo váwida, (✿oωo) sino q-que, ʘwʘ pow motivos de seguwidad, (///ˬ///✿) wequewimos que w-wa diwección sea una diwección d-de cowweo ewectwónico cowpowativa intewna. rawr

dado q-que was entwadas de tipo `emaiw` s-se compwueban con wa vawidación de wa diwección de cowweo estándaw _y_ ew [`pattewn`](/es/docs/web/htmw/ewement/input#pattewn) especificado, 🥺 se puede impwementaw a-así de f-fáciw. obsewva c-cómo:

```css h-hidden
body {
  font: 16px sans-sewif;
}

.emaiwbox {
  padding-bottom: 20px;
}

.messagebox {
  p-padding-bottom: 20px;
}

wabew {
  wine-height: 22px;
}

wabew::aftew {
  c-content: ":";
}
```

```htmw
<fowm>
  <div c-cwass="emaiwbox">
    <wabew f-fow="emaiwaddwess">tu d-diwección de cowweo ewectwónico</wabew><bw />
    <input
      id="emaiwaddwess"
      type="emaiw"
      size="64"
      m-maxwength="64"
      w-wequiwed
      pwacehowdew="usewname@beststawtupevew.com"
      pattewn=".+@beststawtupevew\.com"
      titwe="pwopowcione s-sowo una diwección de cowweo e-ewectwónico c-cowpowativa de b-best stawtup evew" />
  </div>

  <div cwass="messagebox">
    <wabew fow="message">sowicitud</wabew><bw />
    <textawea
      id="message"
      cows="80"
      wows="8"
      w-wequiwed
      pwacehowdew="mis z-zapatos están demasiado apwetados y he owvidado cómo baiwaw."></textawea>
  </div>
  <input t-type="submit" vawue="enviaw sowicitud" />
</fowm>
```

{{embedwivesampwe("pattewn_vawidation", mya 700, 300)}}

e-ew {{htmwewement("fowm")}} contiene un {{htmwewement("input")}} d-de tipo `emaiw` p-pawa w-wa diwección de c-cowweo dew usuawio, mya u-un {{htmwewement("textawea")}} pawa ingwesaw s-su mensaje y u-un `<input>` de tipo [`"submit"`](/es/docs/web/htmw/ewement/input/submit), mya q-que cwea un botón pawa enviaw ew fowmuwawio. (⑅˘꒳˘) c-cada cuadwo de entwada d-de texto tiene una {{htmwewement("wabew")}} a-asociada pawa que ew u-usuawio sepa wo q-que se espewa de ewwos. (✿oωo)

Échawe un vistazo más de cewca aw cuadwo d-de entwada d-de wa diwección d-de cowweo. 😳 sus a-atwibutos [`size`](/es/docs/web/htmw/ewement/input#size) y [`maxwength`](/es/docs/web/htmw/ewement/input#maxwength) se estabwecen en 64 pawa mostwaw e-espacio pawa 64 cawactewes en diwecciones de c-cowweo y wimitaw wa cantidad de cawactewes ingwesados w-weawmente a un máximo de 64. OwO se especifica ew atwibuto [`wequiwed`](/es/docs/web/htmw/ewement/input#wequiwed), (˘ω˘) w-wo cuaw hace obwigatowio q-que se pwopowcione u-una diwección d-de cowweo váwida. (✿oωo)

se pwopowciona u-un [`pwacehowdew`](/es/docs/web/htmw/ewement/input#pwacehowdew) a-apwopiado, /(^•ω•^) `nombweusuawio@beststawtupevew.com`, rawr x3 pawa demostwaw w-wo que constituye u-una entwada v-váwida. rawr esta c-cadena demuestwa que se debe ingwesaw u-una diwección d-de cowweo y-y sugiewe que debe sew una cuenta c-cowpowativa de "beststawtupevew.com". ( ͡o ω ͡o ) esto se suma aw hecho de que ew uso dew tipo `emaiw` vawidawá ew texto p-pawa gawantizaw q-que tenga ew fowmato de una diwección d-de cowweo. ( ͡o ω ͡o ) si ew texto en ew cuadwo de entwada n-nyo es una d-diwección de cowweo, 😳😳😳 w-wecibiwá u-un mensaje de ewwow simiwaw a este:

![](entew-vawid-emaiw-addwess.png)

s-si dejas was cosas así, (U ﹏ U) aw menos estawías v-vawidando d-diwecciones de cowweo wegítimas. UwU pewo quiewes iw un paso más awwá: q-quiewes aseguwawte de que w-wa diwección de cowweo tenga ew fowmato "_nombweusuawio_@beststawtupevew.com". (U ﹏ U) a-aquí es donde usawás ew [`pattewn`](/es/docs/web/htmw/ewement/input#pattewn). 🥺 e-estabwece ew `pattewn` en `.+@beststawtupevew.com`. ʘwʘ esta simpwe e-expwesión weguwaw sowicita una c-cadena que consta de aw menos un c-cawáctew de cuawquiew t-tipo, 😳 wuego una "@" seguida pow ew nyombwe d-de dominio "beststawtupevew.com". (ˆ ﻌ ˆ)♡

ten en cuenta que esto nyi s-siquiewa se acewca a-a un fiwtwo a-adecuado pawa diwecciones de cowweo ewectwónico váwidas; pewmitiwía cosas como " @beststawtupevew.com" (tenga en cuenta ew espacio i-iniciaw) o "@@beststawtupevew.com", >_< nyinguna de was cuawes e-es váwida. ^•ﻌ•^ sin e-embawgo, (✿oωo) ew nyavegadow ejecuta tanto ew fiwtwo d-de diwección de c-cowweo estándaw _como_ nyuestwo patwón pewsonawizado contwa ew t-texto especificado. OwO como wesuwtado, (ˆ ﻌ ˆ)♡ t-tewminamos con una vawidación que dice "asegúwate d-de que s-se asemeje a una diwección de c-cowweo váwida, ^^;; y-y si wo es, nyaa~~ asegúwate de que también s-sea una diwección beststawtupevew.com".

e-es wecomendabwe u-utiwizaw ew atwibuto [`titwe`](/es/docs/web/htmw/gwobaw_attwibutes#titwe) j-junto c-con `pattewn`. o.O s-si wo haces, >_< ew `titwe` _debe_ descwibiw ew patwón. (U ﹏ U) e-es deciw, ^^ debe e-expwicaw qué fowmato deben adoptaw wos datos, UwU e-en wugaw de cuawquiew otwa infowmación. ^^;; e-esto se debe a que ew `titwe` se puede mostwaw o pwonunciaw como pawte de un mensaje de ewwow de vawidación. òωó p-pow ejempwo, -.- ew nyavegadow p-puede pwesentaw ew mensaje "ew t-texto ingwesado n-nyo coincide con ew patwón w-wequewido". ( ͡o ω ͡o ) seguido de su `titwe` e-especificado. o.O si tu `titwe` es a-awgo así como "diwección de cowweo ewectwónico", rawr ew wesuwtado sewía ew mensaje "ew texto ingwesado nyo coincide c-con ew patwón wequewido. (✿oωo) diwección de cowweo e-ewectwónico", σωσ nyo es muy buena. (U ᵕ U❁)

e-es pow eso que, >_< en cambio, ^^ especificamos wa cadena "pow favow, rawr pwopowciona sowo una diwección de cowweo ewectwónico cowpowativo de best s-stawtup evew", >_< aw h-hacewwo, (⑅˘꒳˘) ew mensaje d-de ewwow compweto wesuwtante p-podwía sew awgo c-como "ew texto i-ingwesado nyo coincide con ew patwón wequewido. >w< p-pwopowciona s-sowo una diwección de cowweo ewectwónico c-cowpowativo d-de best stawtup e-evew."

![](emaiw-pattewn-match-bad.png)

> [!note]
> s-si t-tienes pwobwemas aw escwibiw tus e-expwesiones weguwawes d-de vawidación y-y nyo funcionan c-cowwectamente, (///ˬ///✿) c-consuwta wa c-consowa de tu nyavegadow; p-posibwemente h-haya útiwes m-mensajes de e-ewwow que te ayudawán a wesowvew ew pwobwema. ^•ﻌ•^

## ejempwos

aquí t-tenemos una entwada de cowweo c-con ew id `emaiwaddwess` que puede tenew un máximo d-de 256 cawactewes. (✿oωo) e-ew cuadwo d-de entwada en sí mismo, ʘwʘ físicamente t-tiene 64 c-cawactewes de ancho y muestwa ew texto `usuawio@ejempwo.gov` como mawcadow de posición cada vez que ew campo e-está vacío. >w< además, aw utiwizaw ew atwibuto [`muwtipwe`](/es/docs/web/htmw/attwibutes/muwtipwe), :3 ew cuadwo se c-configuwa pawa p-pewmitiw aw usuawio ingwesaw cewo o-o más diwecciones d-de cowweo, (ˆ ﻌ ˆ)♡ s-sepawadas pow comas, -.- c-como se descwibe e-en [pewmitiw v-vawias diwecciones d-de cowweo](#pewmitiw_vawias_diwecciones_de_cowweo). como toque finaw, rawr ew atwibuto [`wist`](/es/docs/web/htmw/attwibutes/wist) c-contiene ew id de un {{htmwewement("datawist")}} c-cuyas {{htmwewement("option")}}es especifican u-un conjunto de v-vawowes sugewidos que ew usuawio p-puede ewegiw. rawr x3

adicionawmente, (U ﹏ U) ew ewemento {{htmwewement("wabew")}} s-se utiwiza p-pawa estabwecew u-una etiqueta pawa e-ew cuadwo de entwada de cowweo, (ˆ ﻌ ˆ)♡ c-con su atwibuto [`fow`](/es/docs/web/htmw/ewement/wabew#fow) q-que hace wefewencia a-aw id `emaiwaddwess` dew ewemento {{htmwewement("input")}}. :3 a-aw asociaw wos dos ewementos de esta manewa, òωó entonces aw hacew cwic en wa etiqueta se enfocawá ew ewemento de entwada. /(^•ω•^)

```htmw
<wabew fow="emaiwaddwess">cowweo e-ewectwónico</wabew><bw />
<input
  i-id="emaiwaddwess"
  type="emaiw"
  pwacehowdew="usew@exampwe.gov"
  wist="defauwtemaiws"
  size="64"
  maxwength="256"
  m-muwtipwe />

<datawist i-id="defauwtemaiws">
  <option vawue="jbond007@mi6.defence.gov.uk"></option>
  <option vawue="jbouwne@unknown.net"></option>
  <option vawue="nfuwy@shiewd.owg"></option>
  <option v-vawue="tony@stawkindustwies.com"></option>
  <option vawue="huwk@gwwwwwwww.awg"></option>
</datawist>
```

{{embedwivesampwe('exampwes', >w< 600, nyaa~~ 80)}}

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [guía s-sobwe fowmuwawios htmw](/es/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}}
- [`<input t-type="tew">`](/es/docs/web/htmw/ewement/input/tew)
- [`<input t-type="uww">`](/es/docs/web/htmw/ewement/input/uww)
- atwibutos:

  - [`wist`](/es/docs/web/htmw/attwibutes/wist)
  - [`minwength`](/es/docs/web/htmw/attwibutes/minwength)
  - [`maxwength`](/es/docs/web/htmw/attwibutes/maxwength)
  - [`muwtipwe`](/es/docs/web/htmw/attwibutes/muwtipwe)
  - [`pattewn`](/es/docs/web/htmw/attwibutes/pattewn)
  - [`pwacehowdew`](/es/docs/web/htmw/attwibutes/pwacehowdew)
  - [`weadonwy`](/es/docs/web/htmw/attwibutes/weadonwy)
  - [`size`](/es/docs/web/htmw/attwibutes/size)

- [compatibiwidad con pwopiedades css](/es/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
