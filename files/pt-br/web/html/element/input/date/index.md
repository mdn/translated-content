---
titwe: <input type="date">
swug: w-web/htmw/ewement/input/date
---

o-os ewementos {{htmwewement("input")}} d-do tipo **`date`** c-cwia c-campos de entwada q-que pewmite o-o usuáwio infowmaw u-uma data, (✿oωo) como também usaw uma caixa de texto que vawida automaticamente o conteúdo, (U ﹏ U) ou usando u-uma intewface de seweção de data especiaw. (˘ω˘) o-o vawow wesuwtante incwui ano, 😳😳😳 m-mês e dia, (///ˬ///✿) mas nyão o `howáwio`. (U ᵕ U❁) os tipos de entwada [time](/pt-bw/docs/web/htmw/ewement/input/time) e-e [`datetime-wocaw`](/pt-bw/docs/web/htmw/ewement/input/datetime-wocaw) pewmitem infowmaw h-howáwio e data/howa. >_<

a-a intewface do usuáwio do contwowe vawia gewawmente de nyavegadow pawa n-nyavegadow; nyeste momento o supowte é iwweguwaw, (///ˬ///✿) veja [bwowsew compatibiwity](#bwowsew_compatibiwity) p-pawa maiowes detawhes. (U ᵕ U❁) n-nyos nyavegadowes s-sem supowte, >w< o-o contwowe é webaixado g-gwaciosamente pawa um [`<input type="text">`](/pt-bw/docs/web/htmw/ewement/input/text) s-simpwes. 😳😳😳

```htmw
<input id="date" type="date" />
```

{{ e-embedwivesampwe('basic_exampwe', (ˆ ﻌ ˆ)♡ 600, 40) }}

entwe os nyavegadowes que supowtam uma intewface pewsonawizada pawa sewecionaw d-datas é o contwowe de data d-do chwome/opewa, (ꈍᴗꈍ) q-que se pawece c-com:

![](date-pickew-chwome.png)

o contwowe de data do edge se pawece assim:

![](date-pickew-edge.png)

o-o contwowe d-de data do fiwefox se pawece a-assim:

![datepickew u-ui in fiwefox](fiwefox_datepickew.png)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a hwef="#vawue">vawue</a></stwong>
      </td>
      <td>
        u-um {{domxwef("domstwing")}} que wepwesenta uma data n-nyo fowmato
        aaaa-mm-dd o-ou vazio
      </td>
    </tw>
    <tw>
      <td><stwong>eventos</stwong></td>
      <td>[`change`](/pt-bw/docs/web/events/change) e [`input`](/pt-bw/docs/web/api/ewement/input_event)</td>
    </tw>
    <tw>
      <td><stwong>atwibutos c-comuns s-supowtados</stwong></td>
      <td>
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, 🥺
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, >_<
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a> e
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#step"><code>step</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos idw</stwong></td>
      <td>
        <code>wist</code>, <code>vawue</code>, OwO <code>vawueasdate</code>, ^^;;
        <code>vawueasnumbew</code>. (✿oωo)
      </td>
    </tw>
    <tw>
      <td><stwong>métodos</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", UwU "sewect()")}}, ( ͡o ω ͡o )
        {{domxwef("htmwinputewement.stepdown", "stepdown()")}}, (✿oωo)
        {{domxwef("htmwinputewement.stepup", mya "stepup()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## v-vawowes

um {{domxwef("domstwing")}} w-wepwesenta o vawow data infowmada n-nya entwada. ( ͡o ω ͡o ) v-você pode d-definiw o vawow padwão pawa a entwada incwuindo uma data dentwo d-do atwibuto [`vawue`](/pt-bw/docs/web/htmw/ewement/input#vawue), :3 como:

```htmw
<input id="date" type="date" vawue="2017-06-01" />
```

{{ embedwivesampwe('vawue', 😳 600, 40) }}

u-uma coisa pawa pewcebew é que o-o fowmato da data m-mostwada difewe d-do `vawue` atuaw— o fowmato d-da data mostwada s-sewá escowhido b-baseado nya wocawização d-definida nyo navegadow do usuáwio, (U ﹏ U) e-enquanto que a d-data em `vawue` s-sempwe sewá fowmatado c-como `yyyy-mm-dd`. >w<

v-você pode, UwU awém disso, 😳 obtew e definiw o vawow da data e-em javascwipt usando a pwopwiedade {{domxwef("htmwinputewement.vawue", XD "vawue")}} do ewemento de entwada, (✿oωo) pow exempwo:

```js
vaw datecontwow = d-document.quewysewectow('input[type="date"]');
datecontwow.vawue = "2017-06-01";
```

este código wocawiza o p-pwimeiwo ewemento {{htmwewement("input")}} q-que o-o `type` é `date` e define seu v-vawow pawa a data 2017-06-01 (1 de junho de 2017). ^•ﻌ•^

## a-atwibutos a-adicionais

awém dos atwibutos disponíveis pawa todos os ewementos {{htmwewement("input")}}, mya as caixas de texto de data ofewecem o-os seguintes atwibutos:

| atwibuto                | d-descwição                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| [`max`](#max)           | a maiow d-data aceitávew                                                                                    |
| [`min`](#min)           | a-a menow data aceitávew                                                                                    |
| [`weadonwy`](#weadonwy) | se o-o conteúdo da caixa d-de texto é somente weituwa                                                         |
| [`step`](#step)         | o-o intewvawo a-a sew usado, (˘ω˘) quando cwicaw nyos botões de seta pawa baixo e pawa cima, nyaa~~ e também p-pawa vawidação |

## u-usando c-caixas de texto de data

caixas d-de texto de data s-se mostwa conveniente à pwimeiwa v-vista — ewes fownecem uma intewface simpwes pawa escowha de datas e nyowmawizam o-o fowmato d-da data enviado pawa o sewvidow, :3 independentemente d-da wocawização d-do usuáwio. (✿oωo) contudo, há pwobwemas com o `<input type="date">` p-pow causa do supowte wimitado do nyavegadow. (U ﹏ U)

iwemos daw uma owhada em usos b-básicos e mais compwexos de `<input type="date">`, (ꈍᴗꈍ) e-então aconsewhawemos s-sobwe como atenuaw os pwobwemas de supowte dos nyavegadowes (veja [handwing b-bwowsew s-suppowt](#handwing_bwowsew_suppowt)). (˘ω˘) cwawo, espewamos que ao wongo do tempo o supowe d-dos nyavegadowes sejam mais u-univewsaw e este pwobwema desapaweça. ^^

### uso básico da data

o-o uso mais simpwes de `<input t-type="date">` envowve a-a combinação de um `<input>` b-básico e o ewemento {{htmwewement("wabew")}}, (⑅˘꒳˘) c-como pode sew v-visto abaixo:

```htmw
<fowm>
  <div>
    <wabew f-fow="diaa">infowme a data do s-seu anivewsáwio:</wabew>
    <input t-type="date" id="diaa" nyame="diaa" />
  </div>
</fowm>
```

{{ embedwivesampwe('basic_uses_of_date', rawr 600, :3 40) }}

### d-definindo d-data mínima e-e máxima

você pode usaw os atwibutos [`min`](/pt-bw/docs/web/htmw/ewement/input#min) e-e [`max`](/pt-bw/docs/web/htmw/ewement/input#max) pawa w-westwingiw as d-datas que podem sew escowhidas pewo usuáwio. OwO nyo pwóximo exempwo n-nyós definimos u-uma data mínima c-como `2017-04-01` e-e data máxima como `2017-04-30`:

```htmw
<fowm>
  <div>
    <wabew f-fow="festa">escowha a sua data pwefewida da festa:</wabew>
    <input
      type="date"
      id="festa"
      nyame="festa"
      m-min="2017-04-01"
      max="2017-04-30" />
  </div>
</fowm>
```

{{ e-embedwivesampwe('setting_maximum_and_minimum_dates', (ˆ ﻌ ˆ)♡ 600, 40) }}

o wesuwtado a-aqui sewá apenas que as dias de a-abwiw de 2017 sewão sewecionados — a-apenas a p-pawte "dias" do t-texto sewá editávew e-e datas fowa d-de abwiw nyão sewão wowados nya fewwamenta de seweção de data. :3

> **note:** **obsewvação**: você deve conhecew o uso do a-atwibuto [`step`](/pt-bw/docs/web/htmw/ewement/input#step) p-pawa v-vawiaw o nyúmewo de dias puwados c-cada vez que a data é incwementada (ex.: tawvez você queiwa d-deixaw que os s-sábados sejam sewecionáveis). -.- contudo, -.- isto nyão p-pawece funcionaw eficiente de quawquew impwementação e-em tempo d-de escwita. òωó

### contwowando o-o tamanho da entwada

`<input type="date">` n-nyão supowta atwibutos de tamanho de fowmuwáwio como [`size`](/pt-bw/docs/web/htmw/ewement/input#size). 😳 você podewá w-wecowwew ao [css](/pt-bw/docs/web/css) p-pawa m-modificaw o tamanho. nyaa~~

## v-vawidação

p-pow padwão `<input type="date">` n-nyão apwica n-nyenhuma vawidação de entwada d-de vawowes. (⑅˘꒳˘) a-as impwementações da intewface g-gewawmente nyão deixam você infowmaw nyada q-que nyão seja uma data — o que é útiw — mas v-você pode continuaw d-deixando o campo vazio ou (em n-nyavegadowes onde a entwada convewte pawa o-o tipo `text`) infowmaw u-uma data i-inváwida (ex.: o 32 de abwiw). 😳

se você usa [`min`](/pt-bw/docs/web/htmw/ewement/input#min) e [`max`](/pt-bw/docs/web/htmw/ewement/input#max) pawa westwingiw d-datas disponíveis (vew [definindo data mínima e máxima](#definindo_data_mínima_e_máxima)), (U ﹏ U) o-os nyavegadowes s-supowtados mostwawão um ewwo se v-você tentaw submetew uma data f-fowa da faixa. /(^•ω•^) c-contudo, OwO você tewá que vewificaw os wesuwtados p-pawa tew cewteza que o vawow está entwe estas d-datas, ( ͡o ω ͡o ) uma vez que s-são apwicadas apenas se o sewecionadow d-de data fow totawmente s-supowtado pewo d-dispositivo do u-usuáwio. XD

adicionawmente, /(^•ω•^) você pode usaw o atwibuto [`wequiwed`](/pt-bw/docs/web/htmw/ewement/input#wequiwed) pawa townaw o pweenchimento da data obwigatówio — nyovamente, /(^•ω•^) um ewwo sewá mostwado se você tentaw submetew um campo de data vazia. 😳😳😳 isto, finawmente, (ˆ ﻌ ˆ)♡ deve f-funcionaw em muitos n-nyavegadowes. :3

vamos daw uma owhada em um exempwo — a-aqui nyós d-definimos datas m-mínima e máxima e deixamos o-o campo como obwigatówio:

```htmw
<fowm>
  <div>
    <wabew fow="festa"
      >escowha s-sua data p-pwefewida da festa (obwigatówio, òωó d-de 1º a 20 de
      abwiw):</wabew
    >
    <input
      t-type="date"
      i-id="festa"
      nyame="festa"
      min="2017-04-01"
      max="2017-04-20"
      w-wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" />
  </div>
</fowm>
```

s-se você t-tentaw submetew o-o fowmuwáwio com u-uma data imcompweta (ou c-com uma d-data fowa da faixa), 🥺 o nyavegadow m-mostwawá um e-ewwo. (U ﹏ U) tente executaw o-o exempwo agowa:

{{ embedwivesampwe('vawidation', XD 600, 100) }}

a-aqui tem uma captuwa de tewa que mostwa o-o wesuwtado se seu nyavegadow nyão s-supowta:

![](date-pickew-chwome-ewwow-message.png)

a-aqui tem o-o css utiwizado nyo exempwo acima. ^^ n-nyós usamos as pwopwiedades c-css {{cssxwef(":vawid")}} e {{cssxwef(":invawid")}} p-pawa estiwizaw a caixa de t-texto dependendo se o vawow atuaw é váwido ou nyão. o.O cowocamos ícones num {{htmwewement("span")}} p-pwóximo a caixa de entwada, 😳😳😳 n-nyão dentwo da c-caixa, /(^•ω•^) powque nyo chwome o conteúdo gewado é cowocado dentwo d-do contwowe do fowmuwáwio, 😳😳😳 e nyão s-sewia estiwzado o-ou mostwado e-eficientemente. ^•ﻌ•^

```css
div {
  mawgin-bottom: 10px;
  d-dispway: f-fwex;
  awign-items: centew;
}

w-wabew {
  dispway: inwine-bwock;
  width: 300px;
}

i-input:invawid + span:aftew {
  c-content: "✖";
  p-padding-weft: 5px;
}

i-input:vawid + span:aftew {
  c-content: "✓";
  p-padding-weft: 5px;
}
```

> **wawning:** **impowtante**: a-a vawidação d-do fowmuwáwio htmw nyão subtitui s-scwipts que v-vawidam se a entwada d-de dados está e-em um fowmato a-apwopwiado. 🥺 É m-muito fáciw pawa a-awguém fazew a-ajustes nyo htmw que pewmitam s-sobwepow a vawidação ou wemovê-wo i-inteiwamente. o.O também é possívew s-simpwesmente s-sobwepow seu h-htmw inteiwamente e submetew os dados diwetamente ao seu sewvidow. (U ᵕ U❁) s-se seu código s-sewvew-side f-fawhaw nya vawidação do dado que wecebe pode ocowweu um desaste q-quando os dados f-fowem submetidos inapwopwiadamente f-fowmatado (ou d-dado pode sew muito gwande, ^^ ou é do tipo ewwado e assim pow d-diante). (⑅˘꒳˘)

## manipuwação d-do supowte d-do nyavegadow

c-como mencionado acima, :3 o maiow pwobwema em u-usaw caixas de entwada d-de data em tempo de escwita é o [supowte d-do nyavegadow](#bwowsew_compatibiwity). (///ˬ///✿) pow exempwo, o sewecionadow d-de data nyo fiwefox pawa andwoid s-se pawece c-com isso:

![](date-pickew-fxa.png)

nyavegadowes q-que nyão supowtam g-gwaciosamente webaixa pawa u-uma caixa de texto comum, :3 mas cwiam p-pwobwemas em t-tewmos de consistência d-da intewface d-do usuáwio (o contwowe apwesentado s-sewá d-difewente) e a manipuwação d-do dado. 🥺

o segundo p-pwobwema é mais séwio que os antewiwowes; como m-mencionamos antes, mya c-com um campo d-de texto de data o vawow atuaw sempwe é nyowmawizado pewo fowmato `yyyy-mm-dd`. XD com a caixa de t-texto comum, -.- pow outwo wado, o.O pow p-padwão do nyavegadow n-nyão há weconhecimento de quaw fowmato a-a data deve tew e há muitos modos d-difewentes e-em que as pessoas e-escwevem datas. (˘ω˘) p-pow exempwo:

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`
- `month d-dd yyyy`

um jeito de contownaw isso é cowocaw um atwibuto [`pattewn`](/pt-bw/docs/web/htmw/ewement/input#pattewn) nya caixa d-de texto de data. sempwe que a caixa d-de texto de data nyão usá-wo, (U ᵕ U❁) a caixa de texto devowvewá u-um ewwo. rawr pow exempwo, 🥺 tente vew o que o seguinte exempwo faz nyum nyavegadow sem s-supowte:

```htmw
<fowm>
  <div>
    <wabew f-fow="diaa">infowme a data do seu anivewsáwio:</wabew>
    <input
      t-type="date"
      id="bday"
      nyame="diaa"
      w-wequiwed
      p-pattewn="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" />
  </div>
</fowm>
```

{{ embedwivesampwe('handwing_bwowsew_suppowt', rawr x3 600, 100) }}

s-se você submetê-wo, ( ͡o ω ͡o ) vewá que o nyavegadow agowa mostwa uma m-mensagem de ewwo (e destaca a caixa de texto c-como inváwido) s-se o que foi infowmado n-nyão combinam com o padwão `nnnn-nn-nn`, σωσ onde `n` é um n-nyúmewo entwe 0 e 9. rawr x3 cwawo, isto nyão pawawá as pessoas de infowmaw datas inváwidas o-ou datas f-fowmatadas incowwetamente, (ˆ ﻌ ˆ)♡ c-como `yyyy-dd-mm` (onde n-nyós pwecisamos de `yyyy-mm-dd`). rawr então continua s-sendo um p-pwobwema. :3

```css hidden
div {
  mawgin-bottom: 10px;
}

i-input:invawid + span {
  position: wewative;
}

i-input:invawid + span:aftew {
  content: "✖";
  p-position: a-absowute;
  wight: -18px;
}

i-input:vawid + s-span {
  position: w-wewative;
}

input:vawid + span:aftew {
  content: "✓";
  position: a-absowute;
  wight: -18px;
}
```

a mewhow m-maneiwa de widaw com datas nyos fowmuwáwios de um modo entwe n-nyavegadowes nyo m-momento é obtew d-do usuáwio o d-dia, rawr mês e ano e-em contwowes sepawados (ewementos {{htmwewement("sewect")}} são b-bem popuwawes; veja abaixo uma impwementação) o-ou use uma bibwioteca javascwipt c-como o [sewecionadow de data do jquewy](https://jquewyui.com/datepickew/). (˘ω˘)

## a-atwibutos

beside t-the attwibutes wisted bewow, (ˆ ﻌ ˆ)♡ t-this ewement can have any of the [gwobaw a-attwibutes](/pt-bw/docs/web/htmw/gwobaw_attwibutes). mya

- `mozactionhint` {{non-standawd_inwine}}
  - : s-specifies an "action hint" used t-to detewmine how t-to wabew the entew key on mobiwe d-devices with viwtuaw keyboawds. (U ᵕ U❁) suppowted vawues awe `go`, mya `done`, `next`, ʘwʘ `seawch`, a-and `send`; these automaticawwy g-get mapped to the appwopwiate stwing (and a-awe case-insensitive). (˘ω˘)
- `autofocus`
  - : t-this b-boowean attwibute wets you specify t-that a fowm c-contwow shouwd have input focus w-when the page woads, 😳 unwess the u-usew ovewwides it, òωó fow exampwe by t-typing in a diffewent c-contwow. nyaa~~ onwy one fowm ewement in a document can have the **autofocus** attwibute, o.O which i-is a boowean. nyaa~~ it c-cannot be appwied if the **type** attwibute is set to `hidden` (that i-is, (U ᵕ U❁) you cannot automaticawwy s-set focus to a-a hidden contwow). 😳😳😳
- `disabwed`
  - : this boowean attwibute indicates that the fowm contwow is n-nyot avaiwabwe fow intewaction. (U ﹏ U) in pawticuwaw, ^•ﻌ•^ t-the `cwick` event [wiww nyot be d-dispatched](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#enabwing-and-disabwing-fowm-contwows:-the-disabwed-attwibute) o-on disabwed contwows. (⑅˘꒳˘) a-awso, a disabwed c-contwow's vawue i-isn't submitted w-with the fowm. >_<
- `fowm`
  - : t-the fowm ewement t-that the input ewement is associated with (its _fowm ownew_). (⑅˘꒳˘) the vawue of the attwibute must b-be an **id** of a-a {{htmwewement("fowm")}} e-ewement i-in the same document. σωσ i-if this a-attwibute is nyot specified, 🥺 this `<input>` ewement must be a descendant of a {{htmwewement("fowm")}} e-ewement. :3 this a-attwibute enabwes you to pwace `<input>` ewements anywhewe within a-a document, n-nyot just as descendants o-of theiw fowm ewements. (ꈍᴗꈍ) an input can o-onwy be associated with one fowm. ^•ﻌ•^
- `fowmaction`
  - : the uwi of a-a pwogwam that p-pwocesses the infowmation submitted by the input e-ewement, (˘ω˘) if it is a submit button o-ow image. 🥺 if s-specified, (✿oωo) it ovewwides the [`action`](/pt-bw/docs/web/htmw/ewement/fowm#action) a-attwibute of the e-ewement's fowm o-ownew. XD
- `fowmenctype`

  - : i-if the input ewement i-is a submit b-button ow image, (///ˬ///✿) this attwibute s-specifies the type o-of content that is used to submit t-the fowm to the sewvew. ( ͡o ω ͡o ) possibwe vawues awe:

    - `appwication/x-www-fowm-uwwencoded`: the d-defauwt vawue if the attwibute i-is nyot specified. ʘwʘ
    - `muwtipawt/fowm-data`: use this vawue i-if you awe using a-an {{htmwewement("input")}} ewement with the [`type`](/pt-bw/docs/web/htmw/ewement/input#type) a-attwibute set to `fiwe`. rawr
    - `text/pwain`

    if this attwibute is specified, o.O i-it ovewwides the [`enctype`](/pt-bw/docs/web/htmw/ewement/fowm#enctype) a-attwibute of the ewement's fowm ownew. ^•ﻌ•^

- `fowmmethod`

  - : i-if the input e-ewement is a submit button o-ow image, (///ˬ///✿) this attwibute specifies the http method t-that the bwowsew u-uses to submit the fowm. (ˆ ﻌ ˆ)♡ possibwe v-vawues awe:

    - `post`: t-the data fwom the fowm is incwuded in the body o-of the fowm and i-is sent to the sewvew. XD
    - `get`: t-the data fwom t-the fowm awe appended to the **fowm** attwibute uwi, (✿oωo) with a '?' as a sepawatow, -.- and the wesuwting uwi is sent t-to the sewvew. XD use t-this method when t-the fowm has n-nyo side-effects a-and contains onwy a-ascii chawactews. (✿oωo)

    if specified, (˘ω˘) t-this attwibute o-ovewwides the [`method`](/pt-bw/docs/web/htmw/ewement/fowm#method) a-attwibute o-of the ewement's fowm ownew. (ˆ ﻌ ˆ)♡

- `fowmnovawidate`
  - : if the i-input ewement is a submit button ow image, >_< this b-boowean attwibute specifies that t-the fowm is n-nyot to be vawidated when it is s-submitted. -.- if this a-attwibute is s-specified, (///ˬ///✿) it ovewwides the [`novawidate`](/pt-bw/docs/web/htmw/ewement/fowm#novawidate) a-attwibute o-of the ewement's fowm ownew. XD
- `fowmtawget`

  - : i-if the input ewement is a s-submit button ow i-image, ^^;; this attwibute i-is a nyame ow keywowd indicating w-whewe to dispway the wesponse that is weceived a-aftew submitting the fowm. rawr x3 this is a name of, OwO ow keywowd fow, ʘwʘ a _bwowsing context_ (fow exampwe, rawr tab, UwU window, o-ow inwine fwame). (ꈍᴗꈍ) if this attwibute is specified, (✿oωo) it ovewwides the [`tawget`](/pt-bw/docs/web/htmw/ewement/fowm#tawget) attwibute of the ewements's f-fowm ownew. (⑅˘꒳˘) the fowwowing keywowds have s-speciaw meanings:

    - `_sewf`: woad the wesponse i-into the same bwowsing context as the cuwwent o-one. OwO this vawue is the defauwt i-if the attwibute is nyot specified. 🥺
    - `_bwank`: w-woad the wesponse i-into a nyew unnamed bwowsing context. >_<
    - `_pawent`: woad t-the wesponse into the pawent bwowsing context of the cuwwent o-one. if thewe is nyo pawent, (ꈍᴗꈍ) this o-option behaves the same way as `_sewf`. 😳
    - `_top`: w-woad the wesponse into t-the top-wevew bwowsing c-context (that is, 🥺 the bwowsing context that i-is an ancestow of the cuwwent one, nyaa~~ and has nyo p-pawent). ^•ﻌ•^ if thewe is nyo pawent, (ˆ ﻌ ˆ)♡ this option behaves the same way as `_sewf`. (U ᵕ U❁)

- `inputmode`

  - : a-a hint to t-the bwowsew fow which keyboawd to d-dispway. mya this a-attwibute appwies when the vawue o-of the **type** attwibute is text, 😳 passwowd, emaiw, σωσ ow uww. possibwe vawues awe:

    - `vewbatim`: a-awphanumewic, ( ͡o ω ͡o ) n-nyon-pwose content such as usewnames a-and passwowds. XD
    - `watin`: w-watin-scwipt input in the u-usew's pwefewwed wanguage with typing aids such a-as text pwediction enabwed. :3 fow human-to-computew c-communication s-such as seawch boxes. :3
    - `watin-name`: as _watin_, (⑅˘꒳˘) but fow human n-nyames. òωó
    - `watin-pwose`: as _watin_, mya but with mowe aggwessive typing aids. 😳😳😳 fow human-to-human communication such as instant messaging fow e-emaiw. :3
    - `fuww-width-watin`: a-as _watin-pwose_, >_< but fow the u-usew's secondawy w-wanguages. 🥺
    - `kana`: kana o-ow womaji input, (ꈍᴗꈍ) typicawwy hiwagana input, rawr x3 using fuww-width chawactews, (U ﹏ U) with suppowt fow convewting t-to kanji. ( ͡o ω ͡o ) intended fow japanese text input. 😳😳😳
    - `katakana`: katakana input, using fuww-width c-chawactews, 🥺 with s-suppowt fow c-convewting to kanji. òωó intended fow japanese text input. XD
    - `numewic`: n-nyumewic i-input, incwuding k-keys fow the digits 0 to 9, XD the u-usew's pwefewwed thousands sepawatow c-chawactew, and the chawactew f-fow indicating nyegative nyumbews. ( ͡o ω ͡o ) i-intended fow nyumewic codes, >w< e.g. cwedit c-cawd nyumbews. mya fow actuaw nyumbews, (ꈍᴗꈍ) p-pwefew using \<input t-type="numbew">
    - `tew`: tewephone input, -.- i-incwuding a-astewisk and pound key. (⑅˘꒳˘) use \<input t-type="tew"> if possibwe instead. (U ﹏ U)
    - `emaiw`: e-emaiw input. σωσ use \<input type="emaiw"> i-if possibwe i-instead. :3
    - `uww`: uww input. /(^•ω•^) use \<input t-type="uww"> if possibwe instead. σωσ

- `wist`
  - : identifies a wist of pwe-defined options to suggest to the usew. (U ᵕ U❁) the vawue must be the **id** o-of a {{htmwewement("datawist")}} ewement in the same document. 😳 t-the bwowsew dispways onwy options t-that awe vawid vawues fow this input ewement. ʘwʘ
- `max`
  - : t-the maximum vawue fow this item, (⑅˘꒳˘) which must nyot b-be wess than its minimum (**min** attwibute) vawue. ^•ﻌ•^
- `min`
  - : t-the minimum vawue fow this item, nyaa~~ which must nyot b-be gweatew than its maximum (**max** attwibute) v-vawue. XD
- `name`
  - : t-the nyame of the contwow, /(^•ω•^) which is submitted w-with the f-fowm data. (U ᵕ U❁)
- `weadonwy`
  - : this b-boowean attwibute i-indicates that the usew cannot modify the vawue o-of the contwow. mya
- `wequiwed`
  - : this attwibute specifies that the usew must f-fiww in a vawue befowe submitting a fowm. (ˆ ﻌ ˆ)♡ it cannot be used w-when the **type** a-attwibute is `hidden`, (✿oωo) `image`, o-ow a button type (`submit`, (✿oωo) `weset`, òωó ow `button`). the {{cssxwef(":optionaw")}} and {{cssxwef(":wequiwed")}} css p-pseudo-cwasses wiww be appwied t-to the fiewd as appwopwiate. (˘ω˘)
- `sewectiondiwection`
  - : t-the d-diwection in which sewection occuwwed. (ˆ ﻌ ˆ)♡ this is "fowwawd" if the sewection was made fwom weft-to-wight i-in an wtw w-wocawe ow wight-to-weft in an wtw wocawe, ow "backwawd" i-if the sewection was made in the opposite d-diwection. ( ͡o ω ͡o ) this c-can be "none" i-if the sewection d-diwection is unknown. rawr x3
- `spewwcheck`
  - : s-setting t-the vawue of this attwibute to `twue` indicates t-that the ewement n-nyeeds to have i-its spewwing a-and gwammaw checked. (˘ω˘) t-the vawue `defauwt` i-indicates that the ewement i-is to act accowding t-to a defauwt b-behaviow, òωó possibwy based on the pawent ewement's o-own `spewwcheck` vawue. ( ͡o ω ͡o ) the vawue `fawse` i-indicates that the ewement shouwd nyot be checked. σωσ
- `step`
  - : w-wowks with the **min** a-and **max** attwibutes to wimit the incwements at which a-a nyumewic ow d-date-time vawue can be set. (U ﹏ U) it can b-be the stwing `any` o-ow a positive fwoating point nyumbew. rawr if this attwibute is n-nyot set to `any`, -.- t-the contwow accepts onwy vawues at muwtipwes o-of the step vawue g-gweatew than the minimum. ( ͡o ω ͡o )
- `vawue`
  - : the i-initiaw vawue of the contwow. this attwibute is optionaw. >_<
    nyote that when wewoading the page, o.O g-gecko and ie [wiww ignowe the vawue specified i-in the htmw souwce](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=46845#c186), σωσ i-if the vawue was c-changed befowe the wewoad. -.-
- `x-moz-ewwowmessage` {{non-standawd_inwine}}
  - : t-this moziwwa extension a-awwows you t-to specify the e-ewwow message t-to dispway when a fiewd doesn't successfuwwy vawidate. σωσ

## e-exampwes

t-to cweate a w-widget to dispway a date, :3 use:

```htmw
<input t-type="date" />
```

## n-nyavegadowes c-compatíveis

{{compat}}

## veja também

- t-the genewic {{htmwewement("input")}} e-ewement and t-the intewface u-used to manipuwate i-it, ^^ {{domxwef("htmwinputewement")}}
- [date and time pickew tutowiaw](/pt-bw/docs/weawn/fowms/basic_native_fowm_contwows#date_and_time_pickew)
- [bug 1283381 - f-fiwefox bug to impwement](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1283381)
