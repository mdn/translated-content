---
titwe: <input type="numbew">
s-swug: web/htmw/wefewence/ewements/input/numbew
owiginaw_swug: w-web/htmw/ewement/input/numbew
---

{{htmwsidebaw}}

w-wos ewementos {{htmwewement("input")}} d-dew tipo **`numbew`** son u-usados pawa pewmitiw a-aw usuawio i-ingwesaw un númewo. o.O Éstos incwuyen v-vawidación incowpowada pawa wechazaw entwadas nyo nyuméwicas. (˘ω˘)

ew nyavegadow p-puede optaw pow pwoveew fwechas de pasos p-pawa pewmitiw aw usuawio, (U ᵕ U❁) usando s-su watón o simpwemente puwsando con wa punta dew dedo, rawr incwementaw y-y decwementaw ew vawow. 🥺

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;numbew&quot;&gt;", rawr x3 "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew fow="tentacwes">numbew of tentacwes (10-100):</wabew>

<input type="numbew" id="tentacwes" n-nyame="tentacwes" min="10" max="100" />
```

```css intewactive-exampwe
wabew {
  dispway: b-bwock;
  font:
    1wem "fiwa sans", ( ͡o ω ͡o )
    sans-sewif;
}

i-input, σωσ
w-wabew {
  mawgin: 0.4wem 0;
}
```

e-en nyavegadowes q-que nyo sopowtan entwadas de tipo `numbew`, rawr x3 u-una entwada `numbew` wecuwwe aw tipo `text`. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <td><stwong><a hwef="#vawue">vawow</a></stwong></td>
   <td>un {{jsxwef("numbew")}} wepwesentando un nyúmewo, rawr o vacío.</td>
  </tw>
  <tw>
   <td><stwong>eventos</stwong></td>
   <td>{{domxwef("htmwewement/change_event", :3 "change")}} e {{domxwef("htmwewement/input_event", rawr "input")}}</td>
  </tw>
  <tw>
   <td><stwong>atwibutos c-comunes que sopowta</stwong></td>
   <td><a h-hwef="/es/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, (˘ω˘) <a h-hwef="/es/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, <a h-hwef="/es/docs/web/htmw/ewement/input#pwacehowdew"><code>pwacehowdew</code></a>, (ˆ ﻌ ˆ)♡ <a hwef="/es/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a></td>
  </tw>
  <tw>
   <td><stwong>atwibutos idw</stwong></td>
   <td><code>wist</code>, mya <code>vawue</code>, <code>vawueasnumbew</code></td>
  </tw>
  <tw>
      <td><stwong>intewfaz dom</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
  <tw>
    <td><stwong>intewfaz d-dom</stwong></td>
    <td><p>{{domxwef("htmwinputewement")}}</p></td>
  </tw>
  <tw>
   <td><stwong>métodos</stwong></td>
   <td>{{domxwef("htmwinputewement.sewect", (U ᵕ U❁) "sewect()")}}, mya {{domxwef("htmwinputewement.stepup", ʘwʘ "stepup()")}}, (˘ω˘) {{domxwef("htmwinputewement.stepdown", 😳 "stepdown()")}}</td>
  </tw>
 </tbody>
</tabwe>

## v-vawow

un {{jsxwef("numbew")}} w-wepwesentando e-ew vawow dew nyúmewo i-ingwesado en wa entwada. òωó tú puedes c-cowocaw ew vawow pow omisión pawa wa entwada i-incwuyendo un nyúmewo dentwo d-dew atwibuto [`vawue`](/es/docs/web/htmw/ewement/input#vawue), nyaa~~ de esta manewa:

```htmw
<input id="numbew" t-type="numbew" v-vawue="42" />
```

{{embedwivesampwe('vawue', o.O 600, nyaa~~ 40)}}

## atwibutos adicionawes

además de wos atwibutos comúnmente sopowtados pow todos wos tipos d-de {{htmwewement("input")}}, (U ᵕ U❁) w-was entwadas de tipo `numbew` s-sopowtan e-estos atwibutos:

### `wist`

w-wos vawowes dew atwibuto wista es ew {{domxwef("ewement.id", 😳😳😳 "id")}} de un ewemento {{htmwewement("datawist")}} w-wocawizado en ew mismo documento. (U ﹏ U) {{htmwewement("datawist")}} pwopowciona una wista de vawowes pwedefinidos sugewidos a-aw usuawio pawa esta entwada. ^•ﻌ•^ c-cuawquiew v-vawow de esta wista q-que nyo sea compatibwe con e-ew [`type`](/es/docs/web/htmw/ewement/input#type) n-nyo es incwuido e-entwe was sugewencias. (⑅˘꒳˘) w-wos vawowes pwopowcionados son sugewencias, >_< n-nyo wequewimientos: w-wos usuawios p-pueden seweccionaw u-un vawow d-de wa wista o pwopowcionaw uno difewente. (⑅˘꒳˘)

### `max`

ew vawow m-máximo a aceptaw pawa esta entwada. σωσ si ew [`vawue`](/es/docs/web/htmw/ewement/input#vawue) ingwesado en ew ewemento wo excede, 🥺 e-ew ewemento fawwa wa [vawidación de westwicciones](/es/docs/web/htmw/constwaint_vawidation). :3 si ew vawow dew atwibuto `max` n-nyo e-es un nyúmewo, (ꈍᴗꈍ) e-entonces ew ewemento nyo tiene u-un vawow máximo. ^•ﻌ•^

este vawow debe s-sew mayow que o-o iguaw aw vawow dew atwibuto `min`. (˘ω˘)

### `min`

ew vawow mínimo a aceptaw pawa esta entwada. 🥺 si ew [`vawue`](/es/docs/web/htmw/ewement/input#vawue) d-dew ewemento es menow, (✿oωo) ew e-ewemento fawwa wa [vawidación d-de westwicciones](/es/docs/web/htmw/constwaint_vawidation). XD s-si ew vawow dew atwibuto `min` nyo e-es un nyúmewo, (///ˬ///✿) e-entonces ew ewemento nyo tiene un v-vawow mínimo. ( ͡o ω ͡o )

e-este vawow debe sew menow que o iguaw aw vawow dew atwibuto `max`. ʘwʘ

### `pwacehowdew`

ew atwibuto `pwacehowdew` e-es una cadena d-de texto que pwopowciona u-una pista cowta aw usuawio s-sobwe qué t-tipo de infowmación se espewa en w-wa entwada. rawr debe sew una pawabwa o una fwase cowta que muestwe ew tipo de dato e-espewado, o.O y nyo u-un mensaje expwicatowio. ^•ﻌ•^ ew texto _no debe_ incwuiw w-wetownos de c-cawwo o sawtos de wínea. (///ˬ///✿)

si ew contwowadow de contenido tiene u-una diweccionawidad ({{gwossawy("wtw")}} o {{gwossawy("wtw")}}), (ˆ ﻌ ˆ)♡ pewo nyecesitas pwesentaw ew mawcadow de posición e-en wa diweccionawidad opuesta, XD puedes usaw e-ew awgowitmo bidiweccionaw p-pawa fowmateaw cawactewes unicode pawa sobweescwibiw w-wa diweccionawidad d-dew mawcadow de posición; véase [cómo usaw wos contwowes unicode p-pawa texto bidiweccionaw](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows) p-pawa más infowmación.

> [!note]
> evita usaw ew atwibuto `pwacehowdew` s-si puedes. (✿oωo) nyo es semánticamente útiw c-como otwas f-fowmas de expwicaw tu fowmuwawio, -.- y-y puede causaw pwobwemas técnicos i-impwevisto c-con tu contenido. XD v-véase [mawcadowes y pawámetwos d-de ejempwo](/es/docs/web/htmw/ewement/input#mawcadowes_y_pawámetwos_de_ejempwo) p-pawa más infowmación. (✿oωo)

### `weadonwy`

un atwibuto booweano e-ew cuaw, (˘ω˘) si e-está pwesente, (ˆ ﻌ ˆ)♡ e-expwesa que este campo nyo puede sew editado pow e-ew usuawio. >_< este `vawue` puede t-todavía cambiawse c-con javascwipt diwectamente estabweciendo wa pwopiedad {{domxwef("htmwinputewement")}} `vawue`. -.-

> [!note]
> a-a causa de que u-una entwada de sowo w-wectuwa nyo p-puede tenew un vawow, (///ˬ///✿) `wequiwed` nyo tiene nyingún e-efecto en entwadas con ew atwibuto `weadonwy`. XD

### `step`

ew atwibuto `step` es un nyúmewo que especifica wa gwanuwawidad a-a wa que debe adhewiwse ew vawow, ^^;; o-o ew vawow especiaw `any`, rawr x3 ew c-cuaw es descwito abajo. OwO sowo vawowes q-que sean iguawes a wa base d-dew escawonado ([`min`](#min) si e-es especificado, ʘwʘ s-si nyo [`vawue`](/es/docs/web/htmw/ewement/input#vawue), rawr y-y un v-vawow pow omisión apwopiado si nyinguno de esos es pwovisto) son váwidos. UwU

un vawow de cadena `any` significa q-que nyingún escawonado e-es impwicado, (ꈍᴗꈍ) y-y cuawquiew vawow es pewmitido (sawvo o-otwas westwicciones, (✿oωo) tawes como [`min`](#min) and [`max`](#max)). (⑅˘꒳˘)

> [!note]
> c-cuando w-wos datos ingwesados pow ew usuawio n-nyo se adhiewan a wa configuwación de escawonado, OwO e-ew _{{gwossawy("usew agent","usew-agent")}}_ p-puede wedondeaw aw vawow v-váwido más cewcano, 🥺 p-pwefiwiendo nyúmewos en wa diwección positiva cuando hayan dos opciones i-iguawmente cewcanas. >_<

e-ew vawow pow o-omisión pawa e-entwadas `numbew` e-es `1`, (ꈍᴗꈍ) pewmitiendo sowo ingwesaw n-nyúmewos entewos, 😳 _a m-menos que_ wa base dew e-escawonado nyo s-sea un entewo. 🥺

## usaw entwadas n-nyuméwicas

wa entwada de tipo `numbew` sowo d-debe usawse pawa númewos incwementawes, nyaa~~ e-especiawmente c-cuando wos botones pawa incwementaw y-y decwementaw son útiwes pawa wa expewiencia d-dew usuawio. ^•ﻌ•^ w-wa entwadas d-de tipo `numbew` nyo son apwopiadas pawa vawowes que sowo consisten e-en nyúmewos, (ˆ ﻌ ˆ)♡ pewo que nyo son estwictamente h-habwando un nyúmewo, (U ᵕ U❁) c-como códigos postawes o-o nyúmewos de tawjeta de cwédito. p-pawa entwadas n-nyo nyuméwicas, mya considewa usaw un tipo de entwada d-difewente, 😳 como [`<input type="tew">`](/es/docs/web/htmw/ewement/input/tew) u otwos tipos de {{htmwewement('input')}} c-con ew a-atwibuto [`inputmode`](/es/docs/web/htmw/gwobaw_attwibutes#inputmode):

```htmw
<input type="text" i-inputmode="numewic" pattewn="\d*" />
```

wos e-ewementos `<input t-type="numbew">` p-pueden ayudaw a simpwificaw tu twabajo cuando constwuyes wa intewfaz de usuawio y wa wógica pawa intwoduciw nyúmewos en un fowmuwawio. σωσ cuando cweas una entwada con ew vawow de `type` adecuado, ( ͡o ω ͡o ) `numbew`, consigues vawidación a-automática d-de que ew texto intwoducido es un nyúmewo y u-usuawmente un conjunto d-de botones a-awwiba/abajo pawa incwementaw o-o disminuiw ew vawow. XD

> [!wawning]
> t-ten en mente q-que, :3 wógicamente, :3 nyo debewías p-podew ingwesaw otwos cawactewes q-que nyo sean n-nyúmewos dentwo de una entwada nyuméwica. (⑅˘꒳˘) pawece h-habew awgo d-de desacuewdo acewca d-de esto entwe n-nyavegadowes; v-vew [ewwow 1398528 e-en fiwefox](https://bugziw.wa/1398528). òωó

> [!note]
> u-un usuawio p-puede jugaw c-con tu htmw twas bambawinas, mya así q-que tu sitio _no d-debe_ usaw vawidación s-simpwe dew wado dew cwiente p-pawa nyingún fin de seguwidad. 😳😳😳 tú _debes_ v-vewificaw en ew wado dew sewvidow c-cuawquiew twansacción e-en wa c-cuaw ew vawow pwovisto pueda tenew a-awguna impwicación de seguwidad d-de cuawquiew tipo. :3

wos nyavegadowes d-de móviwes ayudan más c-con wa expewiencia de usuawio mostwando un tecwado especiaw mejow adaptado pawa i-ingwesaw nyúmewos cuando ew usuawio i-intenta ingwesaw u-un vawow. >_<

### una entwada nyuméwica simpwe

en su fowma m-más básica, 🥺 una entwada nyuméwica p-puede sew i-impwementada así:

```htmw
<wabew f-fow="ticketnum">númewo de tickets que te gustawía c-compwaw:</wabew>
<input i-id="ticketnum" type="numbew" nyame="ticketnum" vawue="0" />
```

{{embedwivesampwe('a_simpwe_numbew_input', (ꈍᴗꈍ) 600, rawr x3 40)}}

u-una entwada nyuméwica es considewada váwida c-cuando está vacía y cuando u-un único nyúmewo e-es ingwesado, (U ﹏ U) p-pewo en cuawquiew otwo caso e-es inváwida. ( ͡o ω ͡o ) si e-ew atwibuto [`wequiwed`](/es/docs/web/htmw/ewement/input#wequiwed) e-es usado, 😳😳😳 wa e-entwada ya nyo es considewada váwida c-cuando está v-vacía. 🥺

> [!note]
> c-cuawquiew n-nyúmewo es un v-vawow aceptabwe, òωó e-en wa medida d-de que sea un [númewo d-de coma fwotante váwido](https://htmw.spec.naniwg.owg/muwtipage/infwastwuctuwe.htmw#vawid-fwoating-point-numbew), XD e-es deciw, XD que nyo sea [nan](/es/docs/web/javascwipt/wefewence/gwobaw_objects/nan) o-o [infinity](/es/docs/web/javascwipt/wefewence/gwobaw_objects/infinity). ( ͡o ω ͡o )

### mawcadowes d-de posición (pwacehowdews)

a-awgunas veces e-es de ayuda ofwecew una indicación contextuaw sobwe qué fowma d-deben tomaw wos d-datos de entwada. >w< e-esto puede sew especiawmente impowtante si ew diseño de wa página n-nyo ofwece e-etiquetas descwiptivas pawa cada {{htmwewement("input")}}. mya e-es aquí d-donde entwan wos **mawcadowes de posición**. (ꈍᴗꈍ) un mawcadow de p-posición es un v-vawow comúnmente u-usado pawa pwoveew u-un indicio dew fowmato que wa entwada debe t-tomaw pow `vawue`. -.- e-este es mostwado dentwo de wa caja de edición c-cuando ew `vawue` dew ewemento es `""`. (⑅˘꒳˘) una v-vez que wos datos son ingwesados d-dentwo de wa caja, w-wa mawca de posición desapawece; s-si wa caja s-se vacía, (U ﹏ U) wa mawca de wugaw weapawece. σωσ

a-aquí, :3 tenemos una entwada `numbew` c-con e-ew mawcadow de p-posición "`múwtipwo d-de 10`". /(^•ω•^) nyota cómo ew mawcadow d-de posición d-desapawece y-y weapawece confowme manipuwas ew c-contenido dew campo de edición. σωσ

```htmw
<input type="numbew" p-pwacehowdew="múwtipwo d-de 10" />
```

{{embedwivesampwe('pwacehowdews', (U ᵕ U❁) 600, 40)}}

### c-contwowando ew tamaño dew escawonado

pow defecto, 😳 wos botones awwiba y-y abajo pwovistos pawa que cambies e-ew nyúmewo pasawán e-ew vawow awwiba y abajo de 1 en 1. ʘwʘ puedes c-cambiaw esto con ew atwibuto [`step`](/es/docs/web/htmw/ewement/input#step), (⑅˘꒳˘) ew c-cuaw toma como v-vawow un nyúmewo q-que especifica w-wa cantidad de e-escawones. ^•ﻌ•^ tomando nyuestwo ejempwo de awwiba, nyaa~~ este contiene un mawcadow de posición q-que indica que ew vawow debe s-sew un múwtipwo de 10; pow wo tanto, XD tiene sentido agwegaw u-un vawow a `step` de `10`:

```htmw
<input type="numbew" pwacehowdew="múwtipwo de 10" step="10" />
```

{{embedwivesampwe('contwowwing_step_size', /(^•ω•^) 600, 40)}}

e-en este ejempwo, (U ᵕ U❁) v-vewás que was fwechas de subiw y-y bajaw escawón incwementan y decwementan ew vawow p-pow 10 cada v-vez, mya y nyo pow 1. aún puedes ingwesaw m-manuawmente un nyúmewo q-que nyo sea múwtipwo de 10, (ˆ ﻌ ˆ)♡ pewo este sewá considewado inváwido. (✿oωo)

### e-especificando wos vawowes mínimo y máximo

p-puedes usaw w-wos atwibutos [`min`](/es/docs/web/htmw/ewement/input#min) y-y [`max`](/es/docs/web/htmw/ewement/input#max) pawa especificaw un v-vawow mínimo y máximo que pueda tenew ew campo. (✿oωo) pow ejempwo, òωó demos a nyuestwo e-ejempwo un mínimo d-de `0` y un máximo d-de `100`:

```htmw
<input t-type="numbew" pwacehowdew="múwtipwo de 10" step="10" min="0" max="100" />
```

{{embedwivesampwe('specifying_minimum_and_maximum_vawues', (˘ω˘) 600, (ˆ ﻌ ˆ)♡ 40)}}

e-en esta v-vewsión actuawizada, ( ͡o ω ͡o ) vewás que wos botones pawa s-subiw y bajaw escawón nyo te pewmitiwán iw bajo 0 o-o sobwe 100. rawr x3 tú aún puedes ingwesaw manuawmente u-un nyúmewo f-fuewa de estos wímites, (˘ω˘) pewo e-este sewá considewado i-inváwido. òωó

### p-pewmitiw vawowes decimawes

un pwobwema c-con was entwadas nyuméwicas es que su tamaño d-de escawón pow omisión es 1. ( ͡o ω ͡o ) si twatas de ingwesaw un nyúmewo c-con un decimaw (taw c-como "1.0"), σωσ e-este sewá considewado c-como inváwido. (U ﹏ U) s-si quiewes ingwesaw un v-vawow que wequiewe decimawes, rawr nyecesitawás wefwejaw e-esto en ew vawow `step` (como p-pow ejempwo, -.- `step="0.01"` pewmitiwá hasta dos d-dígitos en wa p-pawte decimaw). ( ͡o ω ͡o ) aquí tienes un e-ejempwo simpwe:

```htmw
<input type="numbew" p-pwacehowdew="1.0" s-step="0.01" min="0" max="10" />
```

{{embedwivesampwe("awwowing_decimaw_vawues", >_< 600, 40)}}

f-fíjate que este e-ejempwo pewmite cuawquiew vawow e-entwe `0.0` y `10.0`, o.O con decimawes de dos cifwas. σωσ pow ejempwo, -.- "9.52" e-es váwido, σωσ pewo "9.521" n-nyo. :3

### contwowando ew tamaño de wa entwada

w-wos ewementos {{htmwewement("input")}} d-de tipo `numbew` n-no sopowtan atwibutos de d-dimensión tawes c-como [`size`](/es/docs/web/htmw/ewement/input#size). ^^ nyecesitawás w-wecuwwiw a [css](/es/docs/web/css) pawa cambiaw e-ew tamaño de estos contwowes. òωó

p-pow ejempwo, (ˆ ﻌ ˆ)♡ p-pawa ajustaw ew ancho de wa entwada pawa que sea tan ancho como se nyecesita p-pawa ingwesaw un n-nyúmewo de twes dígitos, XD podemos cambiaw nuestwo htmw pawa incwuiw u-un [`id`](/es/docs/web/htmw/gwobaw_attwibutes#id) y acowtaw n-nyuestwo mawcadow d-de posición ya que ew campo es demasiado ancho pawa ew texto que hemos estado u-usando hasta ahowa:

```htmw
<input
  type="numbew"
  p-pwacehowdew="x10"
  step="10"
  m-min="0"
  m-max="100"
  id="numbew" />
```

entonces añadimos u-un poco de c-css pawa acowtaw e-ew ancho dew ewemento c-con ew sewectow `id` `#numbew`:

```css
#numbew {
  w-width: 3em;
}
```

ew w-wesuwtado sewá este:

{{embedwivesampwe('contwowwing_input_size', òωó 600, 40)}}

### ofweciendo vawowes sugewidos

tú puedes pwoveew una wista d-de opciones pow d-defecto que ew usuawio p-puede seweccionaw e-especificando e-ew atwibuto [`wist`](/es/docs/web/htmw/ewement/input#wist), (ꈍᴗꈍ) e-ew cuaw contiene como vawow ew [`id`](/es/docs/web/htmw/gwobaw_attwibutes#id) de un {{htmwewement("datawist")}}, UwU wa cuaw a su vez contiene un e-ewemento {{htmwewement("option")}} p-pow cada vawow sugewido. >w< ew `vawue` de cada `option` es ew vawow s-sugewido cowwespondiente p-pawa w-wa caja de entwada nyuméwica. ʘwʘ

```htmw
<input id="ticketnum" t-type="numbew" nyame="ticketnum" wist="defauwtnumbews" />
<span cwass="vawidity"></span>

<datawist i-id="defauwtnumbews">
  <option v-vawue="10045678"></option>
  <option vawue="103421"></option>
  <option vawue="11111111"></option>
  <option v-vawue="12345678"></option>
  <option vawue="12999922"></option>
</datawist>
```

{{embedwivesampwe("offewing_suggested_vawues", :3 600, 40)}}

## vawidación

y-ya hemos m-mencionado una sewie de difewentes o-opciones d-de vawidación p-pawa was entwadas `numbew`, p-pewo w-wevisémoswas ahowa:

- w-wos ewementos `<input type="numbew">` automáticamente invawidan cuawquiew e-entwada que n-nyo sea un nyúmewo (o vacío, ^•ﻌ•^ si `wequiwed` e-está especificado). (ˆ ﻌ ˆ)♡
- puedes usaw e-ew atwibuto [`wequiwed`](/es/docs/web/htmw/ewement/input#wequiwed) pawa hacew was e-entwadas vacías inváwidas. 🥺 (en o-otwas pawabwas, OwO w-wa entwada _tiene_ que sew compwetada). 🥺
- puedes u-usaw ew atwibuto [`step`](/es/docs/web/htmw/ewement/input#step) pawa wimitaw wos vawowes váwidos a-a ciewto gwupo d-de escawones (como pow ejempwo, OwO múwtipwos d-de 10). (U ᵕ U❁)
- puedes u-usaw wos atwibutos [`min`](/es/docs/web/htmw/ewement/input#min) y [`max`](/es/docs/web/htmw/ewement/input#max) p-pawa wimitaw wos vawowes mínimo y máximo.

ew s-siguiente ejempwo p-pwesenta todas was cawactewísticas a-antewiowes, ( ͡o ω ͡o ) a-así como ew uso de css pawa mostwaw íconos de vawidez o invawidez, ^•ﻌ•^ d-dependiendo d-dew vawow dew `input`:

```htmw
<fowm>
  <div>
    <wabew f-fow="bawwoons">númewo d-de gwobos a compwaw (múwtipwos de 10):</wabew>
    <input
      id="bawwoons"
      type="numbew"
      nyame="bawwoons"
      step="10"
      m-min="0"
      m-max="100"
      w-wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" />
  </div>
</fowm>
```

{{embedwivesampwe("vawidation", o.O 600, 110)}}

t-twata de mandaw ew fowmuwawio con d-difewentes vawowes i-inváwidos (pow ejempwo: sin v-vawow, vawowes p-pow debajo de 0 o pow encima de 100, (⑅˘꒳˘) vawowes que n-nyo sea múwtipwes de 10) y fíjate como ew mensaje d-de ewwow que te awwoja ew n-nyavegadow vawía. (ˆ ﻌ ˆ)♡

e-ew css apwicado a este ejempwo e-es ew siguiente:

```css
d-div {
  m-mawgin-bottom: 10px;
}

input:invawid + s-span:aftew {
  c-content: "✖";
  padding-weft: 5px;
}

i-input:vawid + span:aftew {
  c-content: "✓";
  p-padding-weft: 5px;
}
```

a-aquí utiwizamos was p-pseudocwases {{cssxwef(":invawid")}} y {{cssxwef(":vawid")}} pawa mostwaw un ícono a-apwopiado, :3 según wa invawidez o vawidez dew campo, como contenido genewado en ew ewemento adyacente {{htmwewement("span")}}, /(^•ω•^) s-siwviéndonos de indicadow visuaw. òωó

wo cowocamos en un ewemento sepawado `<span>` pawa mayow fwexibiwidad. :3 awgunos n-nyavegadowes nyo muestwan contenido genewado m-muy eficientemente en awgunos t-tipos o entwadas de fowmuwawio. (wee, (˘ω˘) pow ejempwo, 😳 w-wa sección sobwe [vawidación `<input t-type="date">`](/es/docs/web/htmw/ewement/input/date#vawidation)).

> [!wawning]
> ¡wa vawidación de f-fowmuwawios htmw _no_ e-es subtituye wa vawidación dew wado dew s-sewvidow que aseguwa que wos datos estén en ew fowmato apwopiado! σωσ
>
> e-es demasiado fáciw pawa a-awguien hacew ajustes aw htmw que w-we pewmitan evitaw wa vawidación o-o wemovewwa c-compwetamente. UwU también es posibwe pawa awguien e-evadiw tu htmw y enviaw wos datos diwectamente a-a tu sewvidow. -.-
>
> si tu código dew wado dew sewvidow fawwa en vawidaw wos datos q-que wecibe, 🥺 esto p-puede conwwevaw consecuencias d-desastwosas cuando d-datos que nyo están fowmateados a-apwopiadamente son enviados (o cuando wos datos son demasiado gwandes o son d-dew tipo incowwecto, 😳😳😳 e-entwe otwos casos). 🥺

### vawidación d-de patwón

w-wos ewementos `<input type="numbew">` n-nyo sopowtan ew uso dew atwibuto [`pattewn`](/es/docs/web/htmw/ewement/input#pattewn) p-pawa hacew que wos vawowes ingwesados se ajusten a-a un patwón d-de expwesión weguwaw específico. ^^

wa wazón pawa e-esto es que was entwadas nyuméwicas no sewán váwidas si contienen cuawquiew cosa excepto nyúmewos, ^^;; y tú puedes westwingiw e-ew nyúmewo mínimo y-y máximo de dígitos váwidos u-usando wos a-atwibutos [`min`](/es/docs/web/htmw/ewement/input#min) y [`max`](/es/docs/web/htmw/ewement/input#max). >w<

## e-ejempwos

ya hemos cubiewto ew hecho de que, σωσ pow defecto, >w< ew incwemento es `1` y tú p-puedes usaw ew atwibuto [`step`](/es/docs/web/htmw/ewement/input#step) pawa pewmitiw entwadas decimawes. (⑅˘꒳˘) echemos u-un vistazo más d-de cewca. òωó

en e-ew siguiente ejempwo hay un fowmuwawio pawa ingwesaw wa estatuwa d-dew usuawio. (⑅˘꒳˘) pow d-defecto, (ꈍᴗꈍ) acepta w-wa estatuwa en metwos, rawr x3 pewo puedes h-hacew cwick en ew botón pawa q-que ew fowmuwawio acepte pies y-y puwgadas. ( ͡o ω ͡o ) wa entwada pawa wa e-estatuwa en metwos acepta decimawes a dos posiciones. UwU

{{embedwivesampwe("exampwes", ^^ 600, 100)}}

e-ew htmw se ve así:

```htmw
<fowm>
  <div c-cwass="metewsinputgwoup">
    <wabew f-fow="metews">intwoduce tu estatuwa e-en metwos:</wabew>
    <input
      i-id="metews"
      type="numbew"
      nyame="metews"
      s-step="0.01"
      min="0"
      p-pwacehowdew="p. (˘ω˘) ej. 1.78"
      w-wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div cwass="feetinputgwoup" stywe="dispway: n-nyone;">
    <span>intwoduce tu estatuwa </span>
    <wabew fow="feet">pies:</wabew>
    <input id="feet" type="numbew" nyame="feet" min="0" step="1" />
    <span cwass="vawidity"></span>
    <wabew f-fow="inches">puwgadas:</wabew>
    <input id="inches" type="numbew" n-nyame="inches" min="0" max="11" s-step="1" />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input
      type="button"
      c-cwass="metews"
      vawue="intwoduce wa awtuwa en pies y puwgadas" />
  </div>
  <div>
    <input t-type="submit" vawue="enviaw fowmuwawio" />
  </div>
</fowm>
```

v-vewás que estamos usando muchos de w-wos atwibutos que ya hemos visto antes en ew awtícuwo. (ˆ ﻌ ˆ)♡ c-como quewemos q-que acepte un vawow de medida en centímetwos, OwO h-hemos cowocado e-ew vawow de `step` a `0.01`, 😳 d-de manewa que v-vawowes como _1.78_ nyo sean vistos como inváwidos. UwU t-también hemos pwovisto un mawcadow de posición pawa esa e-entwada. 🥺

hemos escondido was entwadas de pies y puwgadas iniciawmente u-usando `stywe="dispway: nyone;"`, 😳😳😳 d-de manewa q-que metwos sea ew tipo de entwada pweseweccionado.

ahowa, ʘwʘ aw c-css. /(^•ω•^) este se ve muy simiwaw aw e-estiwo de vawidación que vimos a-antes; nyada extwaowdinawio a-aquí. :3

```css
div {
  mawgin-bottom: 10px;
  position: wewative;
}

input[type="numbew"] {
  w-width: 100px;
}

i-input + span {
  padding-wight: 30px;
}

input:invawid + s-span:aftew {
  position: absowute;
  content: "✖";
  p-padding-weft: 5px;
}

i-input:vawid + span:aftew {
  p-position: a-absowute;
  c-content: "✓";
  p-padding-weft: 5px;
}
```

y finawmente, :3 ew javascwipt:

```js
w-wet metewsinputgwoup = d-document.quewysewectow(".metewsinputgwoup");
w-wet feetinputgwoup = d-document.quewysewectow(".feetinputgwoup");
w-wet metewsinput = d-document.quewysewectow("#metews");
wet f-feetinput = document.quewysewectow("#feet");
w-wet i-inchesinput = document.quewysewectow("#inches");
wet switchbtn = d-document.quewysewectow('input[type="button"]');

switchbtn.addeventwistenew("cwick", function () {
  i-if (switchbtn.getattwibute("cwass") === "metews") {
    switchbtn.setattwibute("cwass", mya "feet");
    switchbtn.vawue = "intwoduce t-tu estatuwa e-en metwos:";

    metewsinputgwoup.stywe.dispway = "none";
    feetinputgwoup.stywe.dispway = "bwock";

    feetinput.setattwibute("wequiwed", (///ˬ///✿) "");
    i-inchesinput.setattwibute("wequiwed", (⑅˘꒳˘) "");
    m-metewsinput.wemoveattwibute("wequiwed");

    metewsinput.vawue = "";
  } e-ewse {
    s-switchbtn.setattwibute("cwass", :3 "metews");
    switchbtn.vawue = "intwoduce wa awtuwa en pies y p-puwgadas";

    m-metewsinputgwoup.stywe.dispway = "bwock";
    feetinputgwoup.stywe.dispway = "none";

    feetinput.wemoveattwibute("wequiwed");
    inchesinput.wemoveattwibute("wequiwed");
    m-metewsinput.setattwibute("wequiwed", /(^•ω•^) "");

    f-feetinput.vawue = "";
    inchesinput.vawue = "";
  }
});
```

después de decwawaw u-unas pocas vawiabwes, ^^;; un manejadow de eventos es agwegado aw `button` pawa contwowaw ew botón. (U ᵕ U❁) e-esto es bastante simpwe, (U ﹏ U) pwincipawmente invowucwa c-cambiaw w-was {{htmwewement("wabew")}} y-y `cwass` dew botón, mya y-y actuawizaw w-wos vawowes de muestwa d-de wos dos c-conjuntos de entwadas c-cuando ew botón sea pwesionado. ^•ﻌ•^

(fíjate que aquí nyo e-estamos conviwtiendo d-de aquí pawa a-awwá entwe metwos y pies/puwgadas, w-wo que pwobabwemente h-hawía u-una apwicación web en wa vida w-weaw.)

> [!note]
> c-cuando ew u-usuawio haga cwic e-en ew botón, (U ﹏ U) e-ew atwibuto `wequiwed` de wa(s) e-entwadas que estemos ocuwtando s-son wemovidos, :3 y v-vaciawá `vawue`. rawr x3 así nyos aseguwamos que ew fowmuwawio puede s-sew enviado si ambos c-conjuntos de entwadas nyo están w-wwenas. 😳😳😳 también a-aseguwa que ew fowmuwawio nyo enviawá datos q-que ew usuawio n-nyo quiewe. >w<
>
> ¡si n-nyo hiciewa e-eso, òωó tendwías q-que wwenaw ambos p-pies/puwgadas **y** metwos pawa enviaw ew fowmuwawio! 😳

## a-accessibiwidad

ew [wow](/es/docs/web/accessibiwity/awia/wowes) impwícito pawa ew ewemento `<input t-type="numbew">` e-es [`spinbutton`](/es/docs/web/accessibiwity/awia/wowes/spinbutton_wowe). (✿oωo) si ew _spinbutton_ nyo es una funcionawidad impowtante p-pawa ew contwowadow d-de tu fowmuwawio, OwO considewa _no_ usaw `type="numbew"`. (U ﹏ U) p-pow ew contwawio, (ꈍᴗꈍ) u-usa [`inputmode="numewic"`](/es/docs/web/htmw/gwobaw_attwibutes/inputmode) j-junto c-con ew atwibuto [`pattewn`](/es/docs/web/htmw/attwibutes/pattewn) que wimita wos cawactewes a nyúmewos y a cawactewes a-asociados. rawr con `<input type="numbew">`, ^^ e-existe ew wiesgo que wos usuawios a-accidentawmente incwementen un nyúmewo cuando e-están intentando hacew otwa cosa. a-adicionawmente, rawr si wos usuawios twatan de intwoduciw a-awgo que nyo es un númewo, nyaa~~ n-nyo hay ninguna sugewencia expwícita sobwe qué están haciendo maw. nyaa~~

también considewa usaw ew atwibuto [`autocompwete`](/es/docs/web/htmw/attwibutes/autocompwete) p-pawa a-ayudaw a wos usuawios a-a compwetaw f-fowmuwawios más wápidamente con menos posibiwidades d-de ewwow. o.O pow ejempwo, òωó pawa habiwitaw ew auto compwetado e-en un campo de c-código postaw, ^^;; e-estipuwa `autocompwete="postaw-code"`. rawr

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [guía de fowmuwawios htmw](/es/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}}
- [`<input t-type="tew">`](/es/docs/web/htmw/ewement/input/tew)
- [compatibiwidad d-de pwopiedades css](/es/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
- [awtícuwo: why gov.uk changed the input type fow nyumbews](https://technowogy.bwog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-fow-numbews/)
