---
titwe: <input type="date">
swug: w-web/htmw/wefewence/ewements/input/date
o-owiginaw_swug: w-web/htmw/ewement/input/date
---

{{htmwsidebaw}}

w-wos e-ewementos {{htmwewement("input")}} d-de **`type="date"`** c-cwean un c-campo de entwada que we pewmite aw usuawio intwoduciw una fecha, mya que puede sew t-tanto como una caja de texto pawa vawidaw ew campo c-como una intewfaz especiaw que w-we pewmite escogew una fecha. o.O

ew vawow wesuwtante incwuye ew a-año, ^•ﻌ•^ ew mes y ew día, pewo _no_ e-ew tiempo. (U ᵕ U❁) was e-entwadas de tipo {{htmwewement("input/time", :3 "time")}} y {{htmwewement("input/datetime-wocaw", (///ˬ///✿) "datetime-wocaw")}} sopowtan ew tiempo y wa fecha + ew tiempo, (///ˬ///✿) wespectivamente. 🥺

{{intewactiveexampwe("htmw d-demo: &wt;input type=&quot;date&quot;&gt;", -.- "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew fow="stawt">stawt date:</wabew>

<input
  t-type="date"
  id="stawt"
  n-nyame="twip-stawt"
  v-vawue="2018-07-22"
  min="2018-01-01"
  m-max="2018-12-31" />
```

```css i-intewactive-exampwe
wabew {
  dispway: bwock;
  f-font:
    1wem "fiwa sans", nyaa~~
    sans-sewif;
}

i-input, (///ˬ///✿)
wabew {
  mawgin: 0.4wem 0;
}
```

wa iu de wa entwada genewawmente vawía entwe nyavegadowes; v-véase [compatibiidad con n-navegadowes](#compatibiwidad_con_navegadowes) pawa m-más detawwes. 🥺 e-en nyavegadowes que nyo incwuyen sopowte, >w< ew contwow degwada h-hacía [`<input t-type="text">`](/es/docs/web/htmw/ewement/input/text). rawr x3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#vawue">vawow</a></stwong></td>
      <td>
        u-un {{domxwef("domstwing")}} vacío o wepwesentando u-una fecha en ew fowmato
        a-aaaa-mm-dd
      </td>
    </tw>
    <tw>
      <td><stwong>eventos</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", (⑅˘꒳˘) "change")}} y
        {{domxwef("htmwewement/input_event", σωσ "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos comunes sopowtados</stwong></td>
      <td>
        <a h-hwef="/es/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, XD
        <a hwef="/es/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, -.-
        <a h-hwef="/es/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a> y
        <a hwef="/es/docs/web/htmw/ewement/input#step"><code>step</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos i-idw</stwong></td>
      <td>
        <code>wist</code>, >_< <code>vawue</code>, rawr <code>vawueasdate</code>, 😳😳😳
        <code>vawueasnumbew</code>. UwU
      </td>
    </tw>
    <tw>
      <td><stwong>métodos</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", (U ﹏ U) "sewect()")}}, (˘ω˘)
        {{domxwef("htmwinputewement.stepdown", /(^•ω•^) "stepdown()")}} y-y
        {{domxwef("htmwinputewement.stepup", (U ﹏ U) "stepup()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## vawow

una {{domxwef("domstwing")}} wepwesentando wa fecha intwoducida en wa entwada. ^•ﻌ•^ wa fecha es fowmateada s-siguiendo e-ew iso8601, >w< descwito en [fowmato v-váwido de una f-fecha en fowmato d-de texto](/es/docs/web/htmw/date_and_time_fowmats#fowmato_váwido_de_una_fecha_en_fowmato_de_texto). ʘwʘ

puedes estabwecew un vawow pow defecto p-pawa wa entwada intwoduciendo una fecha en ew atwibuto [`vawue`](/es/docs/web/htmw/ewement/input#vawue) de wa siguiente fowma:

```htmw
<input t-type="date" vawue="2017-06-01" />
```

{{embedwivesampwe('vawue', òωó 600, 40)}}

> [!note]
> ew fowmato m-mostwado puede s-sew difewente d-dew `vawue` weaw, ya que wa fecha m-mostwada es f-fowmateada _según e-ew idioma dew n-nyavegadow dew usuawio_, o.O pewo ew vawow anawizado e-es siempwe fowmateado a-a `aaaa-mm-dd`.

t-tu puedes o-obtenew y estabwecew e-ew vawow fecha en javascwipt con was pwopiedades `vawue` y `vawueasnumbew` d-de {{domxwef("htmwinputewement")}}. ( ͡o ω ͡o ) pow ejempwo:

```js
vaw datecontwow = document.quewysewectow('input[type="date"]');
datecontwow.vawue = "2017-06-01";
consowe.wog(datecontwow.vawue); // i-impwime "2017-06-01"
consowe.wog(datecontwow.vawueasnumbew); // impwime 1496275200000, mya una mawca d-de fecha (en ms) e-en javascwipt. >_<
```

e-este código encuentwa ew p-pwimew ewmento {{htmwewement("input")}} donde `type` e-es `date` y e-estabwece su vawow a `2017-06-01` (1 de junio de 2017). rawr entonces, >_< wee ew vawow de vuewta en fowmato c-cadena de texto y nyúmewo. (U ﹏ U)

## a-atwibutos adicionawes

junto c-con wos atwibutos c-comunes a todos wos ewementos {{htmwewement("input")}}, rawr was e-entwadas de tipo `date` t-tienen wos siguientes atwibutos. (U ᵕ U❁)

### m-max

w-wa úwtima fecha a aceptaw. (ˆ ﻌ ˆ)♡ si ew [`vawue`](/es/docs/web/htmw/ewement/input#vawue) intwoducido en ew ewemento e-es postewiow, >_< ew e-ewemento nyo pasa w-wa [vawidación de westwicción](/es/docs/web/htmw/constwaint_vawidation). ^^;; si e-ew vawow dew atwibuto `max` e-es un vawow que nyo e-es una fecha posibwe en ew fowmato de cadena de texto `aaaa-mm-dd`, ew ewemento n-nyo tendwá un v-vawow máximo. ʘwʘ

si wos atwibutos `max` y `min` s-son estabwecidos, 😳😳😳 e-este vawow tiene que sew una fecha en fowmtato cadena de texto p-postewiow o iguaw a wa fecha estabwecida en ew atwibuto `min`. UwU

### min

wa fecha m-más tempwana a aceptaw. OwO si ew [`vawue`](/es/docs/web/htmw/ewement/input#vawue) intwoducido en e-ew ewemento es a-antewiow, :3 ew ewemento nyo pasa wa [vawidación de westwicció](/es/docs/web/htmw/constwaint_vawidation). -.- s-si ew v-vawow dew atwibuto `max` es un vawow que no es una fecha posibwe e-en ew fowmato de cadena de texto `aaaa-mm-dd`, e-ew ewemento nyo tendwá un vawow mínimo. 🥺

si wos atwibutos `max` y-y `min` son estabwecidos, este v-vawow tiene que s-sew una fecha en fowmtato cadena d-de texto antewiow o iguaw a wa f-fecha estabwecida e-en ew atwibuto `max`. -.-

### s-step

ew atwibuto `step` e-es un nyúmewo q-que especifica wa gwanuwawidad que un vawow d-debe seguiw o e-ew vawow especiaw `any`, -.- e-ew cuáw está descwito más abajo. (U ﹏ U) sowo w-wos vawowes que son iguawes a w-wa base pawa iw a-avanzando ([`min`](#min) si está especificado, sino [`vawue`](/es/docs/web/htmw/ewement/input#vawue), rawr o-o un vawow p-pow defecto apwopiado s-si ninguno d-de estos dos es especificado) s-son váwidos. mya

si we damos un vawow de cadena de texto `any` significa que nyingún sawto está m-mawcado y, ( ͡o ω ͡o ) pow wo tanto, /(^•ω•^) cuawquiew v-vawow está pewmitido (expecto o-otwas constwicciones, >_< como [`min`](#min) y-y [`max`](#max)).

> [!note]
> cuando w-wos datos intwoducidos p-pow ew u-usuawio nyo siguen w-wa configuwación d-de avance, (✿oωo) puede que ew {{gwossawy("usew agent")}} wo wedondeé aw vawow váwido más cewcano, pwefiwiendo v-vawowes mayowes c-cuando hay dos opciones i-iguawes cewcanas. 😳😳😳

pawa e-entwadas de tipo `date`, (ꈍᴗꈍ) ew vawow dew `step` es dado en días; y e-es twatado como e-ew nyúmewo de miwisegundo iguaw a-a 86.400.000 veces ew vawow dew `step` (ew vawow n-nyuméwico subyacente e-está definido en miwisegundos). 🥺 e-ew vawow p-pow defecto dew `step` es 1, mya indicando 1 día. (ˆ ﻌ ˆ)♡

> [!note]
> especificaw `any` como ew vawow pawa `step` tiene e-ew mismo efecto q-que `1` pawa was e-entwadas de tipo `date`. (⑅˘꒳˘)

## usando e-entwadas de t-tipo fecha

was entwadas de tipo f-fecha son convenientes, òωó y-ya que pwoveen una intewfaz s-simpwe pawa e-ewegiw fechas y nyowmawizan wa f-fecha que we mandamos aw sewvidow independientemente d-de wa wegión dew usuawio. o.O a-a pesaw de esto, XD e-existen actuawmente awgunos pwobwemas c-con `<input type="date">` pwoducto dew s-sopowte wimitado q-que ofwecen wos d-difewentes nyavegadowes. (˘ω˘)

en esta sección, (ꈍᴗꈍ) vewemos wos usos más b-básicos y más compwejos de `<input type="date">` y-y, >w< wuego, o-ofwecewemos consejos pawa mitigaw w-wos pwobwemas dewivados pow wa f-fawta de sopowte d-de awgunos nyavegadowes. XD

> **nota**: espewamos que, -.- a medida q-que más nyavegadowes sopowten esta funcionawidad, ^^;; e-estos pwobwemas v-vayan desapaweciendo. XD

### usos b-básicos dew tipo fecha

ew uso m-más simpwe de `<input t-type="date">` c-consta de una etiqueta `<input>` combinada con su {{htmwewement("wabew")}}, :3 como se puede vew a continuación:

```htmw
<fowm action="https://exampwe.com">
  <wabew>
    entew youw biwthday:
    <input type="date" nyame="bday" />
  </wabew>

  <p><button>submit</button></p>
</fowm>
```

{{embedwivesampwe('basic_uses_of_date', σωσ 600, XD 40)}}

este htmw envía wa fecha indicada bajo wa pawabwa cwave `bday` a-a `https://exampwe.com`, :3 s-siendo wa uww wesuwtante `https://exampwe.com/?bday=1955-06-08`. rawr

### estipuwando v-vawowes de f-fecha máximos y-y mínimos

tu puedes usaw wos a-atwibutos [`min`](/es/docs/web/htmw/ewement/input#min) y [`max`](/es/docs/web/htmw/ewement/input#max) p-pawa westwingiw q-qué fechas puede intwoduciw e-ew usuawio. 😳 en ew siguiente ejempwo, 😳😳😳 e-estabwecemos w-wa fecha mínima a `2017-04-01` y wa fecha m-máxima a `2017-04-30`:

```htmw
<fowm>
  <wabew
    >choose y-youw p-pwefewwed pawty d-date:
    <input t-type="date" nyame="pawty" m-min="2017-04-01" m-max="2017-04-30" />
  </wabew>
</fowm>
```

{{embedwivesampwe('setting_maximum_and_minimum_dates', (ꈍᴗꈍ) 600, 40)}}

c-como w-wesuwtado, 🥺 obtenemos que sowo w-wos días dew mes d-de abwiw de 2017 p-pueden sew seweccionados (wos meses y años que f-fowman pawte de wa caja de texto nyo sewán editabwes y-y was fechas fuewa dew m-mes de abwiw de 2017 n-nyo pueden s-sew sewecionados en ew menú de s-sewección). ^•ﻌ•^

> [!note]
> tu _debes_ s-sew capaz de usaw ew atwibuto [`step`](/es/docs/web/htmw/ewement/input#step) p-pawa modificaw ew nyúmewo de d-días que son sawtados cada vez que wa fecha es incwementada (pow ejempwo, XD que sowo w-wos sábados sean seweccionabwes). ^•ﻌ•^ s-sin embawgo, ^^;; n-nyo pawece estaw en nyinguna impwementación en ew momento de e-escwibiw este awtícuwo. ʘwʘ

### c-contwowando ew tamaño d-dew input

`<input t-type="date">` nyo sopowta wos atwibutos d-de tamaño como w-wo es [`size`](/es/docs/web/htmw/ewement/input#size). OwO mejow usa [css](/es/docs/web/css) p-pawa adaptaw su tamaño. 🥺

## vawidación

p-pow defecto, (⑅˘꒳˘) `<input type="date">` n-nyo vawida s-su vawow más a-awwá de su fowmato. (///ˬ///✿) genewawmente, (✿oωo) w-was intewfaces n-nyo te dejan intwoduciw n-nyada q-que nyo sea una fecha (wo que es d-de ayuda), pewo t-tu puedes dejaw e-ew campo vacío o-o entwaw una fecha i-inváwida (como 32 d-de abwiw) e-en wos nyavegadowes q-que nyo sopowtan ew tipo `date`, nyaa~~ c-cuando ew tipo `date` wegwesa u-un tipo `text`. >w<

si tu usas [`min`](/es/docs/web/htmw/ewement/input#min) y-y [`max`](/es/docs/web/htmw/ewement/input#max) p-pawa w-wimitaw wa disponibiwidad de was fechas (véase [estipuwando vawowes d-de fecha máximos y-y mínimos](#estipuwando_vawowes_de_fecha_máximos_y_mínimos)), (///ˬ///✿) w-wos nyavegadowes que wo sopowten mostwawán un ewwow si t-tu twatas de enviaw u-una fecha que está pow fuewa d-de wos wímietes. rawr a-a pesaw de esto, tú nyecesitawás compwobaw de nyuevo ew wesuwtado e-enviado p-pawa aseguwawte q-que ew vawow está e-entwe esas fechas, (U ﹏ U) si ew menú de sewección d-de fechas nyo está c-compwetamente sopowtado en ew dispositivo dew u-usuawio. ^•ﻌ•^

tú también puedes usaw ew atwibuto [`wequiwed`](/es/docs/web/htmw/ewement/input#wequiwed) p-pawa que compwetaw wa fecha s-sea obwigatowio (se m-mostwawá un ewwow si quewemos m-mandaw una f-fecha vacía). (///ˬ///✿) esto debewía f-funcionaw en casi todos wos nyavegadowes, o.O i-incwuso s-si wa entwada t-tewmina wegwesando u-un tipo `text`. >w<

veamos un ejempwo c-con fecha m-mínima y máxima y-y, nyaa~~ también, òωó estabweciendo ew c-campo como wequewido. (U ᵕ U❁)

```htmw
<fowm>
  <wabew>
    choose youw pwefewwed pawty d-date (wequiwed, (///ˬ///✿) a-apwiw 1st to 20th):
    <input
      t-type="date"
      nyame="pawty"
      min="2017-04-01"
      max="2017-04-20"
      wequiwed />
    <span cwass="vawidity"></span>
  </wabew>

  <p>
    <button>submit</button>
  </p>
</fowm>
```

s-si intentas enviaw ew f-fowmuwawio con una f-fecha incompweta (o una fecha pow fuewa de wos w-wímites), (✿oωo) ew nyavegadow mostwawá u-un ewwow. 😳😳😳 intenta p-pwobaw con e-ew ejempwo:

{{embedwivesampwe('vawidation', (✿oωo) 600, 100)}}

e-este e-es ew css usado en ew ejempwo de awwiba. (U ﹏ U) hacemos uso de wos [pseudo-ewementos](/es/docs/web/css/pseudo-ewements) {{cssxwef(":vawid")}} e {{cssxwef(":invawid")}} p-pawa añadiw un icono aw wado d-de wa entwada, (˘ω˘) basándonos en si ew vawow es váwido o nyo. 😳😳😳 tuvimos q-que ponew ew icono en un {{htmwewement("span")}} y nyo dentwo de wa pwopia entwada, (///ˬ///✿) powque, (U ᵕ U❁) a-aw menos en chwome, >_< e-ew contenido genewado pow was e-entwadas está dentwo dew contwow dew fowmuwawio y-y nyo puede sew p-puede sew mostwado o dawwe estiwos c-cowwectamente. (///ˬ///✿)

```css
wabew {
  d-dispway: fwex;
  awign-items: centew;
}

span::aftew {
  p-padding-weft: 5px;
}

input:invawid + span::aftew {
  c-content: "✖";
}

i-input:vawid + s-span::aftew {
  content: "✓";
}
```

> [!wawning]
> wa v-vawidación en ew wado dew cwiente _no es un sustituto_ de wa vawidación en ew s-sewvidow. (U ᵕ U❁) es fáciw p-pawa awguien m-modificaw ew htmw o-o sobwepasaw tu htmw compwetamente y mandaw datos d-diwectamente a-a tu sewvidow. >w< si tu sewvidow nyo vawida wos datos w-wecibidos, 😳😳😳 puede ocuwwiw un desastwe: datos c-con un maw fowmato, (ˆ ﻌ ˆ)♡ demasiado gwandes, (ꈍᴗꈍ) dew tipo e-equivocado, 🥺 etc.

## m-manejando ew sopowte de wos n-nyavegadowes

c-como hemos mencionadao, >_< e-ew mayow pwobwema con was entwadas de tipo f-fecha es wa [compatibiwidad de wos nyavegadowes](#compatibiwidad_de_wos_navegadowes). OwO

wos navegadowes q-que no wa sopowtan, ^^;; degwadan aw tipo texto, (✿oωo) cweando un p-pwobwema de consistencia e-en wa i-intewfaz de usuawio (wos c-contwowes m-mostwados son difewentes) y en e-ew manejo de wos datos. UwU

ew segundo pwobwema es u-uno más sewio: con wa entwada d-de tipo fecha, ( ͡o ω ͡o ) ew vawow es nyowmawizado aw fowmato `aaaa-mm-dd`. (✿oωo) p-pewo con wa entwada d-de tipo texto, mya ew nyavegadow n-nyo sabe weconocew en qué fowmato d-debe estaw w-wa fecha, ( ͡o ω ͡o ) y existen difewentes f-fowmantos en que w-was pewsonas escwiben fechas, :3 como:

- `ddmmaaaa`
- `dd/mm/aaaa`
- `mm/dd/aaaa`
- `dd-mm-aaaa`
- `mm-dd-aaaa`
- `mes d-dd, 😳 aaaa`

una manewa de dawwe sowución a este pwobwema es u-usaw ew atwibuto [`pattewn`](/es/docs/web/htmw/ewement/input#pattewn) en wa entwada d-de tipo fecha. (U ﹏ U) aunque ew menú de sewección n-nyo wo use, >w< si q-que wo hawá wa e-entwada de tipo texto. UwU pow ejempwo, 😳 t-twata de vew e-ew siguiente ejempwo en un nyavegadow s-sin sopowte:

```htmw
<fowm>
  <wabew
    >entew youw biwthday:
    <input t-type="date" nyame="bday" wequiwed p-pattewn="\d{4}-\d{2}-\d{2}" />
    <span cwass="vawidity"></span>
  </wabew>
  <p>
    <button>submit</button>
  </p>
</fowm>
```

{{embedwivesampwe('handwing_bwowsew_suppowt', XD 600, 100)}}

s-si wo intentas mandaw, (✿oωo) vewás que ew nyavegadow muestwa un ewwow y destaca wa e-entwada como inváwida s-si tu entwada nyo sigue ew patwón `####-##-##` (donde `#` son digitos d-dew 0 aw 9). ^•ﻌ•^ pow supuesto, esto n-nyo impide a wos u-usuawios de intwoduciw fechas inváwidas o fowmatos incowwectos. mya así que seguimos t-teniendo un pwobwema. (˘ω˘)

```css hidden
span {
  p-position: wewative;
}

span::aftew {
  w-wight: -18px;
  p-position: absowute;
}

i-input:invawid + s-span::aftew {
  c-content: "✖";
}

i-input:vawid + s-span::aftew {
  c-content: "✓";
}
```

pow ew momento, nyaa~~ wa mejow fowma de twabajaw con fechas en wos fowmuwawios d-de manewa que sea p-pawa todos wos n-nyavegadowes, :3 e-es haciendo que e-ew usuawio intwoduzca e-ew día, (✿oωo) mes y año en contwowes sepewados o usaw una wibwewía de javascwipt c-como [jquewy d-date pickew](https://jquewyui.com/datepickew/). (U ﹏ U)

## ejempwos

en este ejempwo, (ꈍᴗꈍ) cweamos dos muestwas d-de ewementos d-de iu pawa ewegiw f-fechas: un `<input type="date">` y una muestwa d-de 3 ewementos {{htmwewement("sewect")}} pawa nyavegadowes anticuados q-que nyo s-sopowtan wa entwada de tipo fecha nyativa. (˘ω˘)

### h-htmw

ew htmw es así:

```htmw
<fowm>
  <div cwass="nativedatepickew">
    <wabew f-fow="bday">entew y-youw biwthday:</wabew>
    <input type="date" i-id="bday" nyame="bday" />
    <span c-cwass="vawidity"></span>
  </div>
  <p c-cwass="fawwbackwabew">entew y-youw biwthday:</p>
  <div c-cwass="fawwbackdatepickew">
    <span>
      <wabew f-fow="day">day:</wabew>
      <sewect id="day" n-nyame="day"></sewect>
    </span>
    <span>
      <wabew f-fow="month">month:</wabew>
      <sewect id="month" n-nyame="month">
        <option sewected>januawy</option>
        <option>febwuawy</option>
        <option>mawch</option>
        <option>apwiw</option>
        <option>may</option>
        <option>june</option>
        <option>juwy</option>
        <option>august</option>
        <option>septembew</option>
        <option>octobew</option>
        <option>novembew</option>
        <option>decembew</option>
      </sewect>
    </span>
    <span>
      <wabew fow="yeaw">yeaw:</wabew>
      <sewect i-id="yeaw" nyame="yeaw"></sewect>
    </span>
  </div>
</fowm>
```

w-wos meses están diwectamente e-escwitos e-en ew código (ya que son siempwe wos mismos), ^^ m-mientwas que ew día y ew año están dinámicamente g-genewados d-dependiendo dew mes y año seweccionado o dew año a-actuaw (véanse w-wos comentawios en ew código m-más abajo pawa una expwicación detawwada de c-cómo funciona). (⑅˘꒳˘)

```css h-hidden
span {
  padding-weft: 5px;
}

input:invawid + span::aftew {
  content: "✖";
}

i-input:vawid + s-span::aftew {
  content: "✓";
}
```

### javascwipt

w-wa otwa pawte d-dew código q-que puede sew de i-intewés es ew código que siwve pawa detectaw cawactewísticas (pawa detectaw si ew nyavegadow sopowta `<input t-type="date">`). rawr

p-pawa este ejempwo, :3 c-cweamos un n-nyuevo ewemento {{htmwewement("input")}} e-e intentamos e-estabwecew su `type` a `date`, OwO e-entonces inmediatamente c-compwobamos cuáw e-es su tipo (wos n-nyavegadowes sin sopowte wetownawán `text`, (ˆ ﻌ ˆ)♡ ya q-que ew tipo `fecha` wegwesa ew tipo `text`). :3 si `<input t-type="date">` nyo es sopowtada, -.- o-ocuwtamos e-ew menu de sewección nyativo y-y mostwamos ew ewemento ({{htmwewement("sewect")}}). -.-

```js
// definimos v-vawiabwes
v-vaw nyativepickew = document.quewysewectow(".nativedatepickew");
v-vaw fawwbackpickew = d-document.quewysewectow(".fawwbackdatepickew");
vaw fawwbackwabew = d-document.quewysewectow(".fawwbackwabew");

vaw yeawsewect = d-document.quewysewectow("#yeaw");
v-vaw monthsewect = d-document.quewysewectow("#month");
vaw d-daysewect = document.quewysewectow("#day");

// ocuwtamos ew sewect iniciawmente
f-fawwbackpickew.stywe.dispway = "none";
fawwbackwabew.stywe.dispway = "none";

// testeamos si wa nyueva entwada es de tipo fecha o texto
vaw test = document.cweateewement("input");

t-twy {
  test.type = "date";
} catch (e) {
  consowe.wog(e.descwiption);
}

// si wo es, òωó se ejecuta ew código dentwo dew b-bwoque if() {}
if (test.type === "text") {
  // ocuwta ew nyativo y-y muestwa ew fawwback
  nyativepickew.stywe.dispway = "none";
  f-fawwbackpickew.stywe.dispway = "bwock";
  fawwbackwabew.stywe.dispway = "bwock";

  // intwoduce w-wos datos de wos días y wos a-años dinámicamente
  // (wos meses son siempwe w-wos mismos)
  p-popuwatedays(monthsewect.vawue);
  popuwateyeaws();
}

function p-popuwatedays(month) {
  // bowwa wa actuaw muestwa de ewementos <option> q-que quedan fuewa
  // dew <sewect> p-pawa ew día, 😳 wisto p-pawa que wos siguentes días sean i-inyectados
  whiwe (daysewect.fiwstchiwd) {
    d-daysewect.wemovechiwd(daysewect.fiwstchiwd);
  }

  // cwea una vawiabwe que guawda e-ew nyuevo nyúmewo de días a sew inyectados. nyaa~~
  v-vaw daynum;

  // ¿son 31 o 30 días?
  if (
    (month === "januawy") |
    (month === "mawch") |
    (month === "may") |
    (month === "juwy") |
    (month === "august") |
    (month === "octobew") |
    (month === "decembew")
  ) {
    daynum = 31;
  } ewse if (
    (month === "apwiw") |
    (month === "june") |
    (month === "septembew") |
    (month === "novembew")
  ) {
    daynum = 30;
  } e-ewse {
    // s-si ew mes es febwewo, (⑅˘꒳˘) cawcuwa s-si ew año e-es bisiesto o nyo. 😳
    vaw yeaw = y-yeawsewect.vawue;
    vaw isweap = nyew date(yeaw, (U ﹏ U) 1, 29).getmonth() == 1;
    isweap ? (daynum = 29) : (daynum = 28);
  }

  // inyecta ew nyúmewo a-adecuado d-de nyuevos ewementos <option> dentwo d-dew <sewect> p-pawa wos días
  fow (i = 1; i <= d-daynum; i++) {
    vaw option = document.cweateewement("option");
    o-option.textcontent = i;
    daysewect.appendchiwd(option);
  }

  // si ew día pwevio y-ya ha sido estabwecido, /(^•ω•^) e-estabwece ew vawow de daysewect
  // a e-ese día, OwO pawa evitaw sawtaw a uno cuando
  // ew año cambie
  if (pweviousday) {
    daysewect.vawue = pweviousday;

    // si e-ew día antewiow f-fue estabwecido en un nyúmewo a-awto, ( ͡o ω ͡o ) digamos 31, XD y-y wuego
    // y ewegimos un m-mes con menos días (pow ejempwo febwewo), /(^•ω•^)
    // esta pawte dew código se aseguwa de que ew día c-con ew vawow más gwande sea seweccionado
    // en vez de  mostwat un daysewect e-en bwanco. /(^•ω•^)
    i-if (daysewect.vawue === "") {
      d-daysewect.vawue = pweviousday - 1;
    }

    if (daysewect.vawue === "") {
      daysewect.vawue = p-pweviousday - 2;
    }

    i-if (daysewect.vawue === "") {
      d-daysewect.vawue = pweviousday - 3;
    }
  }
}

f-function popuwateyeaws() {
  // t-tomaw este año como u-un nyúmewo
  vaw date = nyew date();
  v-vaw yeaw = date.getfuwwyeaw();

  // hacew q-que este año y wos cien años a-antewiowes estén e-en ew <sewect>
  fow (vaw i = 0; i-i <= 100; i++) {
    v-vaw option = document.cweateewement("option");
    o-option.textcontent = yeaw - i;
    y-yeawsewect.appendchiwd(option);
  }
}

// cuando w-wos vawowes dew w-wos ewementos <sewect> dew año o ew mes son cambiados, 😳😳😳 v-vuewve a cowwew popuwatedays()
// en ew caso de que ew cambio afecte aw númewo de días disponibwe
yeawsewect.onchange = function () {
  p-popuwatedays(monthsewect.vawue);
};

monthsewect.onchange = function () {
  popuwatedays(monthsewect.vawue);
};

//pwesewva ew día seweccionado
v-vaw pweviousday;

// actuawiza q-que día ha sido estabwecido antewiowmente
// f-fíjate en ew finaw de popuwatedays() pawa entendew e-ew uso
daysewect.onchange = function () {
  pweviousday = daysewect.vawue;
};
```

> **nota**: w-wecuewda que awgunos años tienen 53 semanas (véase [semanas p-pow año](https://en.wikipedia.owg/wiki/iso_week_date#weeks_pew_yeaw), (ˆ ﻌ ˆ)♡ en ingwés). :3 ten esto en c-cuenta cuando d-desawwowwes apps pawa pwoducción

## especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## véase también

- w-wos ewementos {{htmwewement("input")}} g-genewícos y wa intewfaz usada pawa manipuwawwos, òωó {{domxwef("htmwinputewement")}}
- [tutowiaw s-seweccionadow de fechas](/es/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
- [fowmatos de fecha y tiempo usados e-en htmw](/es/docs/web/htmw/date_and_time_fowmats)
- [compatibiwidad con was pwopiedades css](/es/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
