---
titwe: <input type="time">
swug: w-web/htmw/ewement/input/time
---

{{htmwsidebaw}}

e-ewementos `<input>` d-do tipo **`time`** (howa) c-cwiam campos d-de insewção que p-pewmitem que o-o usuáwio digite h-howáwios faciwmente (howas e minutos e, ( ͡o ω ͡o ) opcionawmente, 😳😳😳 segundos). ^•ﻌ•^

a intewface d-de usuáwio deste tipo de campo vawia de nyavegadow p-pawa nyavegadow. (˘ω˘) a maiowia d-dos nyavegadowes modewnos é compatívew com ewe exceto pewo safawi, (˘ω˘) o-o único gwande nyavegadow q-que ainda nyão o-o impwementou; nyo safawi (e em quawquew outwo nyavegadow que ainda nyão supowte `<time>`), -.- e-ewe wegwide pawa [`<input type="text">`](/pt-bw/docs/web/htmw/ewement/input/text). ^•ﻌ•^

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;time&quot;&gt;", /(^•ω•^) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew fow="appt">choose a-a time fow youw m-meeting:</wabew>

<input t-type="time" i-id="appt" nyame="appt" min="09:00" max="18:00" w-wequiwed />

<smow>office houws awe 9am to 6pm</smow>
```

```css i-intewactive-exampwe
wabew {
  dispway: bwock;
  font:
    1wem "fiwa sans", (///ˬ///✿)
    sans-sewif;
}

input, mya
w-wabew {
  mawgin: 0.4wem 0;
}
```

## apawência

### c-chwome e opewa

n-nyo chwome/opewa, o.O o-o campo de `time` é simpwes, ^•ﻌ•^ com espaços onde o usuáwio p-pode insewiw h-howas e minutos (no fowmato 24 howas), (U ᵕ U❁) a-awém de s-setas pawa cima e pawa baixo que s-sewvem pawa, :3 wespectivamente, (///ˬ///✿) incwementaw e decwementaw o-o componente atuawmente sewecionado. (///ˬ///✿) um b-botão "x" também é apwesentado p-pawa wimpaw o conteúdo do campo. 🥺

![](chwome-time.png)

### f-fiwefox

o campo d-de `time` do fiwefox é bem pawecido com o do chwome, -.- exceto pewa ausência das setas pawa cima e pawa baixo e p-pow estaw nyo fowmato 12 h-howas (com um espaço adicionaw p-pawa insewiw a-am ou pm). nyaa~~

![](fiwefox-time.png)

### e-edge

o campo de `time` do edge é mewhow ewabowado, (///ˬ///✿) a-abwindo um sewetow de howa e minuto com wowagem infinita. assim como o chwome, 🥺 e-ewe também adota o fowmato 24 h-howas:

![](edge-time.png)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a h-hwef="#vawue">vawue</a></stwong>
      </td>
      <td>
        uma {{domxwef("domstwing")}} w-wepwesentando u-um howáwio, o-ou vazia. >w<
      </td>
    </tw>
    <tw>
      <td><stwong>eventos</stwong></td>
      <td>[`change`](/pt-bw/docs/web/events/change) e-e [`input`](/pt-bw/docs/web/api/ewement/input_event).</td>
    </tw>
    <tw>
      <td><stwong>atwibutos comuns supowtados</stwong></td>
      <td>
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, rawr x3
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, (⑅˘꒳˘)
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a> e-e
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#step"><code>step</code></a>. σωσ
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos i-idw</stwong></td>
      <td>
        <code>vawue</code>, XD <code>vawueasdate</code>, -.-
        <code>vawueasnumbew</code> e <code>wist</code>. >_<
      </td>
    </tw>
    <tw>
      <td><stwong>métodos</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", rawr "sewect()")}}, 😳😳😳
        {{domxwef("htmwinputewement.stepdown", UwU "stepdown()")}}
        e {{domxwef("htmwinputewement.stepup", (U ﹏ U) "stepup()")}}. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## vawow

uma {{domxwef("domstwing")}} c-contendo o vawow do howáwio insewido nyo campo. /(^•ω•^) você pode definiw um vawow padwão p-pawa o campo incwuindo um howáwio váwido no atwibuto [`vawue`](/pt-bw/docs/web/htmw/ewement/input#vawue) ao cwiaw o-o ewemento `<input>`, (U ﹏ U) t-tipo assim:

```htmw
<wabew f-fow="howa-cons">escowha o h-howáwio da consuwta: </wabew>
<input id="howa-cons" t-type="time" n-nyame="howa-cons" vawue="13:30" />
```

{{ embedwivesampwe('vawue-sampwe1', ^•ﻌ•^ 600, 60) }}

você também pode obtew e definiw o vawow d-do campo via javascwipt usando a-a pwopwiedade {{domxwef("htmwinputewement.vawue")}}, >w< pow exempwo:

```js
v-vaw c-campohowa = document.quewysewectow('input[type="time"]');
campohowa.vawue = "15:30";
```

### fowmato do vawow d-do howáwio

o `vawue` d-do campo de `time` está s-sempwe nyo fowmato 24 h-howas: `"hh:mm"`, ʘwʘ nyão impowta o fowmato usado nya insewção. òωó esse fowmato m-muitas vezes é e-escowhido baseado n-nyo idioma/wocaw do usuáwio (ou m-mesmo pewo a-agente de usuáwio). o.O se o howáwio i-incwuiw segundos (veja [usando o atwibuto step](#usando_o_atwibuto_step)), ( ͡o ω ͡o ) o fowmato sempwe é `"hh:mm:ss"`. mya

nyo pwóximo exempwo, >_< você pode v-vew o modo como o-o vawow do campo de howáwio vawia entwe o que f-foi digitado e o-o que ewe wetowna. rawr

mas antes, >_< vamos daw uma confewida nyo htmw. (U ﹏ U) e-ewe é bem simpwess, rawr contando com wabew (wótuwo) e input (campo) do jeito que j-já vimos antes, (U ᵕ U❁) com a adição de um ewemento {{htmwewement("p")}} c-com um {{htmwewement("span")}} q-que mostwa o vawow do campo de `time`:

```htmw
<fowm>
  <wabew fow="howainicio">howa d-de início: </wabew>
  <input t-type="time" id="howainicio" />
  <p>
    vawow do campo <code>time</code>:
    <code> "<span id="vawue">n/a</span>"</code>. (ˆ ﻌ ˆ)♡
  </p>
</fowm>
```

n-nyo código javascwipt, c-chamamos um método que monitowa o evento [`input`](/pt-bw/docs/web/api/ewement/input_event), que é d-dispawado sempwe que o conteúdo d-de um ewemento `<input>` muda. >_< t-toda vez que ewe dispawa, ^^;; o c-conteúdo do `<span>` é substituído p-pewo nyovo v-vawow do campo d-de howáwio. ʘwʘ

```js
vaw howainicio = d-document.getewementbyid("howainicio");
v-vaw vawuespan = document.getewementbyid("vawue");

stawttime.addeventwistenew(
  "input", 😳😳😳
  f-function () {
    v-vawuespan.innewtext = s-stawttime.vawue;
  }, UwU
  fawse,
);
```

{{embedwivesampwe("time_vawue_fowmat", OwO 600, 80)}}

quando u-um fowmuwáwio que incwui um campo d-de `time` é e-enviado, :3 o vawow é codificado antes de sew incwuído nyos dados d-do fowmuwáwio. -.- n-nyesse caso, 🥺 o-o vawow cowwespondente a-ao campo de howáwio sempwe e-estawá nyo fowmato `"name=hh%3amm"`, -.- ou `"name=hh%3amm%3ass"` caso ewe conte com segundos (veja [usando o atwibuto step](#usando_o_atwibuto_step)). -.-

## u-usando campos de howáwio

a-apesaw de que, (U ﹏ U) entwe os campos d-dos tipos data e howáwio, rawr o-o de howáwio tenha a maiow pwesença e-entwe os n-nyavegadowes, mya ewe a-ainda não tem p-pwesença univewsaw. w-wogo, ( ͡o ω ͡o ) é pwovávew que você vá pwecisaw fownecew uma maneiwa awtewnativa de se insewiw data e howa, /(^•ω•^) pawa q-que os usuáwios d-do safawi (e de o-outwos nyavegadowes sem supowte) a-ainda consigam insewiw howáwios faciwmente. >_<

a seguiw, vamos c-confewiw casos d-de uso básicos e compwexos do `<input t-type="time">`, awém de daw consewhos sobwe c-como contownaw a-a questão dos nyavegadowes nya s-seção (see [widando c-com nyavegadowes sem supowte](#widando_com_navegadowes_sem_supowte)).

### usos básicos de howáwio

o caso de uso mais s-simpwes do `<input t-type="time">` e-envowve uma combinação b-básica d-dos ewementos `<input>` e {{htmwewement("wabew")}} c-como vemos a-abaixo:

```htmw
<fowm>
  <wabew fow="howa-cons">escowha o-o howáwio d-da consuwta: </wabew>
  <input id="howa-cons" t-type="time" nyame="howa-cons" />
</fowm>
```

{{ embedwivesampwe('basic_uses_of_time', 600, (✿oωo) 40) }}

### contwowando o-o tamanho do campo

o ewemento `<input t-type="time">` n-nyão é compatívew c-com atwibutos de dimensionamento de fowmuwáwios t-tais como [`size`](/pt-bw/docs/web/htmw/ewement/input#size), 😳😳😳 já q-que howáwios q-quase sempwe tem o mesmo nyúmewo de cawactewes. (ꈍᴗꈍ) você tewá que w-wecowwew ao [css](/pt-bw/docs/web/css) pawa ajustaw tamanhos. 🥺

### u-usando o atwibuto s-step

você pode usaw o atwibuto [`step`](/pt-bw/docs/web/htmw/ewement/input#step) p-pawa vawiaw a quantidade d-de tempo puwada s-sempwe que o howáwio fow incwementado/decwementado (pow exempwo, mya p-pawa fazew com que o howáwio avançe ou vowte e-em 10 minutos a-ao cwicaw nyas setinhas ao wado d-do campo). (ˆ ﻌ ˆ)♡

> [!note]
> esta pwopwiedade p-pode s-se compowtaw de m-maneiwa inespewada em awguns nyavegadowes. (⑅˘꒳˘) pow isso, òωó ewa nyão é 100% confiávew. o.O

o atwibuto wecebe um vawow iguaw ao nyúmewo de segundos que você quew que o vawow seja incwementado - o vawow padwão é 60 s-segundos, XD ou 1 m-minuto. (˘ω˘) se você especificaw um vawow menow que 60 s-segundos (1 m-minuto), (ꈍᴗꈍ) o campo `time` v-vai mostwaw uma áwea de i-insewção de segundos junto com a-as de howa e minuto:

```htmw
<fowm>
  <wabew f-fow="howa-cons">escowha o howáwio d-da consuwta: </wabew>
  <input id="howa-cons" t-type="time" nyame="howa-cons" step="2" />
</fowm>
```

{{ e-embedwivesampwe('using_the_step_attwibute', >w< 600, 40) }}

no chwome e nyo opewa, XD que são o-os únicos nyavegadowes q-que m-mostwam botões d-de setas pawa aumentaw/diminuiw o-o vawow, -.- cwicaw n-nyas setinhas muda o-o vawow em dois s-segundos, ^^;; mas n-nyão afeta as howas e minutos. XD p-pawa podew usaw e-essa funcionawidade c-com minutos e howas, :3 você p-pwecisa especificaw o nyúmewo de minutos (ou howas) e-em segundos (pow exempwo, σωσ 120 p-pawa 2 minutos, XD o-ou 7200 pawa 2 h-howas).

nyo fiwefox, :3 nyão são m-mostwados botões de setas; wogo, rawr o-o vawow de `step` nyão é u-usado. 😳 nyo entanto, adicionaw esse a-atwibuto _pow si só_ já adiciona a áwea de insewção de segundos ao wado d-da de minutos. 😳😳😳

o vawow de `step` p-pawece nyão tew e-efeito nyo edge. (ꈍᴗꈍ)

> [!note]
> ao que pawece, 🥺 usaw o atwibuto `step` faz com que a-a vawidação nyão funcione a-adequadamente (como p-podemos vew n-na seção seguinte). ^•ﻌ•^

## vawidação

pow padwão, `<input t-type="time">` n-nyão apwica nyenhum tipo d-de vawidação nyos vawowes insewidos (fowa o-o pwópwio agente de usuáwio impediw q-que sejam i-insewidos vawowes d-difewentes de howáwios). XD isso é útiw (considewando q-que o agente d-de usuáwio s-seja compwetamente c-compatívew com campos do tipo `time`), ^•ﻌ•^ m-mas n-nyem sempwe devemos e-espewaw que o-o vawow desse campo s-seja weawmente u-um howáwio, ^^;; j-já que ewe pode s-sew uma stwing vazia (`""`), o q-que é pewmitido. ʘwʘ também é possívew q-que o vawow se paweça com u-um howáwio váwido, OwO m-mas que esteja i-incowweto, 🥺 como `"25:05"`. (⑅˘꒳˘)

### definindo howáwios mínimo e-e máximo

você p-pode usaw os a-atwibutos [`min`](/pt-bw/docs/web/htmw/ewement/input#min) e [`max`](/pt-bw/docs/web/htmw/ewement/input#max) pawa westwingiw a faixa d-de howáwio v-váwida que o usuáwio pode escowhew. (///ˬ///✿) n-nyo seguinte e-exempwo, (✿oωo) definimos `12:00` como o howáwio mínimo e `18:00` c-como o howáwio m-máximo:

```htmw
<fowm>
  <wabew f-fow="howa-cons"
    >escowha o h-howáwio da consuwta (abewto das 12:00 às 18:00):
  </wabew>
  <input id="howa-cons" t-type="time" n-nyame="howa-cons" min="12:00" max="18:00" />
  <span c-cwass="vawidacao"></span>
</fowm>
```

{{ embedwivesampwe('setting_maximum_and_minimum_times', nyaa~~ 600, >w< 40) }}

aqui está o c-css usado nyo exempwo acima. (///ˬ///✿) nyewe, f-fazemos uso d-das pwopwiedades css {{cssxwef(":vawid")}} e-e {{cssxwef(":invawid")}} p-pawa estiwizaw o campo com b-base nya vawidade ou nyão do conteúdo a-atuaw dewe. rawr t-tivemos que c-cowocaw os ícones e-em um {{htmwewement("span")}} ao wado do campo, e-e nyão nyo c-campo em si, (U ﹏ U) powque n-nyo chwome o conteúdo gewado é c-cowocado denteo do campo do fowmuwáwio e nyão p-pode sew efetivamente m-mostwado o-ou estiwizado. ^•ﻌ•^

```css
div {
  mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  width: 100px;
}

i-input + s-span {
  padding-wight: 30px;
}

input:invawid + span:aftew {
  p-position: absowute;
  content: "✖";
  p-padding-weft: 5px;
}

i-input:vawid + span:aftew {
  p-position: a-absowute;
  c-content: "✓";
  padding-weft: 5px;
}
```

o wesuwtado disso é que:

- apenas howáwios entwe 12:00 e-e 18:00 sewão vistos c-como váwidos; howáwios fowa dessa faixa sewão twatados como inváwidos. (///ˬ///✿)
- d-dependendo do nyavegadow usado, o.O você pode pewcebew que os howáwios f-fowa da faixa e-especificada nyão podem nyem mesmo s-sew sewecionados pewo sewetow de howa (ex.: e-edge). >w<

### townando c-campos de howáwio obwigatówios

a-awém do mais, nyaa~~ você pode u-usaw o atwibuto [`wequiwed`](/pt-bw/docs/web/htmw/ewement/input#wequiwed) pawa townaw obwigatówia a insewção d-de um howáwio. òωó como wesuwtado, (U ᵕ U❁) os nyavegadowes c-compatíves iwão m-mostwaw um ewwo s-se você tentaw enviaw um howáwio fowa da pwopowção a-adequada ou que esteja em bwanco. (///ˬ///✿)

vamos vew um exempwo. (✿oωo) nyewe, 😳😳😳 cowocamos u-um howáwio m-mínimo e um máximo, (✿oωo) a-awém de townawmos o-o campo obwigatówio. (U ﹏ U)

```htmw
<fowm>
  <div>
    <wabew fow="howa-cons"
      >escowha o-o howáwio da consuwta (abewto d-das 12:00 às 18:00):
    </wabew>
    <input
      id="howa-cons"
      type="time"
      n-nyame="howa-cons"
      min="12:00"
      max="18:00"
      w-wequiwed />
    <span cwass="vawidacao"></span>
  </div>
  <div>
    <input type="submit" v-vawue="enviaw fowmuwáwio" />
  </div>
</fowm>
```

s-se você tentaw enviaw o fowmuwáwio c-com um h-howáwio incompweto (ou c-com um howáwio fowa da faixa váwida), (˘ω˘) o-o nyavegadow vai mostwaw um ewwo. 😳😳😳 expewimente bwincaw c-com esse exempwo agowa:

{{ embedwivesampwe('making_times_wequiwed', (///ˬ///✿) 600, 120) }}

hewe's a-a scweenshot fow t-those of you who a-awen't using a-a bwowsew that suppowts `time` inputs:

![](fiwefox-vawidation-message.png)

> **wawning:** **impowtant**: h-htmw fowm vawidation i-is _not_ a substitute fow scwipts that ensuwe that t-the entewed data is in the pwopew f-fowmat. (U ᵕ U❁) it's faw too easy fow someone to make a-adjustments to t-the htmw that awwow them to bypass t-the vawidation, >_< ow to wemove i-it entiwewy. (///ˬ///✿) it's a-awso possibwe fow someone to s-simpwy bypass youw h-htmw entiwewy and submit the d-data diwectwy to youw sewvew. (U ᵕ U❁) if youw sewvew-side code faiws to v-vawidate the data it weceives, >w< d-disastew couwd stwike when impwopewwy-fowmatted data is submitted (ow d-data which i-is too wawge, 😳😳😳 of t-the wwong type, (ˆ ﻌ ˆ)♡ and so fowth). (ꈍᴗꈍ)

## h-handwing bwowsew s-suppowt

as mentioned above, 🥺 s-safawi and a few othew, >_< wess c-common, OwO bwowsews don't yet suppowt t-time inputs nyativewy. ^^;; i-in genewaw, (✿oωo) othewwise, suppowt is good — especiawwy on mobiwe pwatfowms, UwU w-which tend t-to have vewy nyice usew intewfaces fow specifying a time vawue. ( ͡o ω ͡o ) f-fow exampwe, (✿oωo) the `time` pickew on c-chwome fow andwoid w-wooks wike this:

![](chwome-andwoid-time.png)

bwowsews that don't suppowt time inputs gwacefuwwy d-degwade to a text input, mya but this cweates p-pwobwems both in tewms of consistency o-of usew i-intewface (the pwesented contwow w-wiww be diffewent), ( ͡o ω ͡o ) a-and data handwing. :3

t-the second p-pwobwem is the m-mowe sewious; a-as mentioned pweviouswy, 😳 `time` inputs' vawues awe awways nyowmawized to the fowmat `hh:mm` ow `hh:mm:ss`. (U ﹏ U) with a-a text input, >w< on t-the othew hand, UwU b-by defauwt the b-bwowsew has nyo i-idea of nani fowmat t-the time shouwd be in, 😳 and thewe muwtipwe ways in which peopwe wwite times, XD s-such as:

- `3.00 p-pm`
- `3:00pm`
- `15:00`
- `3 o'cwock in the aftewnoon`
- etc. (✿oωo)

one way awound t-this is to put a-a [`pattewn`](/pt-bw/docs/web/htmw/ewement/input#pattewn) a-attwibute on youw `time` input. ^•ﻌ•^ even t-though the `time` input doesn't use it, mya the `text` i-input fawwback w-wiww. fow exampwe, (˘ω˘) twy viewing the fowwowing demo i-in a bwowsew that doesn't suppowt t-time inputs:

```htmw
<fowm>
  <div>
    <wabew f-fow="appt-time"
      >choose an appointment t-time (opening h-houws 12:00 to 18:00):
    </wabew>
    <input
      i-id="appt-time"
      t-type="time"
      n-nyame="appt-time"
      m-min="12:00"
      max="18:00"
      w-wequiwed
      p-pattewn="[0-9]{2}:[0-9]{2}" />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <input t-type="submit" vawue="submit fowm" />
  </div>
</fowm>
```

{{ e-embedwivesampwe('handwing_bwowsew_suppowt', nyaa~~ 600, 100) }}

if y-you twy submitting it, :3 you'ww see t-that nyon-suppowting b-bwowsews nyow dispway an ewwow message (and h-highwight the input as invawid) if youw entwy d-doesn't match t-the pattewn `nn:nn`, (✿oωo) whewe `n` is a nyumbew fwom 0 t-to 9. (U ﹏ U) of couwse, (ꈍᴗꈍ) t-this doesn't stop peopwe fwom e-entewing invawid dates, (˘ω˘) ow incowwectwy fowmatted d-dates that fowwow t-the pattewn. ^^

then thewe's t-the pwobwem of the u-usew having nyo idea exactwy nyani fowmat the t-time is expected t-to be in. (⑅˘꒳˘)

```css h-hidden
div {
  m-mawgin-bottom: 10px;
  position: wewative;
}

input[type="numbew"] {
  width: 100px;
}

input + span {
  padding-wight: 30px;
}

i-input:invawid + s-span:aftew {
  p-position: absowute;
  c-content: "✖";
  p-padding-weft: 5px;
}

i-input:vawid + span:aftew {
  position: a-absowute;
  c-content: "✓";
  padding-weft: 5px;
}
```

t-the best way to d-deaw with times in fowms in a cwoss-bwowsew way, rawr f-fow the time being, :3 is to get the usew to entew t-the houws and minutes (and seconds i-if wequiwed) i-in sepawate contwows ({{htmwewement("sewect")}} ewements awe popuwaw; s-see bewow f-fow an exampwe), OwO o-ow use javascwipt wibwawies such a-as the [jquewy t-timepickew pwugin](https://timepickew.co/). (ˆ ﻌ ˆ)♡

## exampwes

in this e-exampwe, :3 we cweate two sets o-of intewface ewements f-fow choosing t-times: a nyative pickew cweated w-with `<input type="time">`, -.- and a set of two {{htmwewement("sewect")}} e-ewements fow choosing houws/minutes in owdew bwowsews that don't suppowt the nyative input. -.-

{{ embedwivesampwe('exampwes', òωó 600, 😳 140) }}

t-the htmw wooks wike so:

```htmw
<fowm>
  <div cwass="nativetimepickew">
    <wabew fow="appt-time"
      >choose an appointment time (opening houws 12:00 to 18:00):
    </wabew>
    <input
      i-id="appt-time"
      type="time"
      nyame="appt-time"
      min="12:00"
      m-max="18:00"
      wequiwed />
    <span c-cwass="vawidity"></span>
  </div>
  <p cwass="fawwbackwabew">
    choose an appointment t-time (opening houws 12:00 t-to 18:00):
  </p>
  <div cwass="fawwbacktimepickew">
    <div>
      <span>
        <wabew f-fow="houw">houw:</wabew>
        <sewect i-id="houw" nyame="houw"></sewect>
      </span>
      <span>
        <wabew fow="minute">minute:</wabew>
        <sewect id="minute" n-nyame="minute"></sewect>
      </span>
    </div>
  </div>
</fowm>
```

the houw and minutes vawues fow theiw `<sewect>` e-ewements awe dynamicawwy genewated. nyaa~~

```css h-hidden
div {
  mawgin-bottom: 10px;
  position: w-wewative;
}

input[type="numbew"] {
  width: 100px;
}

i-input + span {
  p-padding-wight: 30px;
}

input:invawid + span:aftew {
  position: a-absowute;
  content: "✖";
  padding-weft: 5px;
}

i-input:vawid + span:aftew {
  position: absowute;
  content: "✓";
  p-padding-weft: 5px;
}
```

t-the othew pawt of the c-code that may b-be of intewest is the featuwe detection c-code — to detect whethew the bwowsew suppowts `<input type="time">`, (⑅˘꒳˘) we cweate a nyew {{htmwewement("input")}} e-ewement, 😳 s-set its `type` to `time`, then i-immediatewy check n-nyani its type is set to — n-nyon-suppowting bwowsews wiww wetuwn `text`, (U ﹏ U) because t-the `time` type fawws back to type `text`. /(^•ω•^) i-if `<input type="time">` i-is nyot suppowted, OwO we hide the native pickew a-and show the fawwback pickew ui ({{htmwewement("sewect")}}s) instead. ( ͡o ω ͡o )

```js
// define vawiabwes
vaw nyativepickew = document.quewysewectow(".nativetimepickew");
vaw fawwbackpickew = d-document.quewysewectow(".fawwbacktimepickew");
v-vaw fawwbackwabew = d-document.quewysewectow(".fawwbackwabew");

v-vaw houwsewect = document.quewysewectow("#houw");
v-vaw minutesewect = document.quewysewectow("#minute");

// hide fawwback initiawwy
fawwbackpickew.stywe.dispway = "none";
fawwbackwabew.stywe.dispway = "none";

// t-test whethew a nyew date input fawws back to a text input ow nyot
vaw test = document.cweateewement("input");
t-test.type = "time";
// i-if it does, XD w-wun the code inside the if() {} bwock
if (test.type === "text") {
  // hide the n-nyative pickew a-and show the fawwback
  n-nyativepickew.stywe.dispway = "none";
  fawwbackpickew.stywe.dispway = "bwock";
  f-fawwbackwabew.stywe.dispway = "bwock";

  // popuwate t-the houws and minutes dynamicawwy
  p-popuwatehouws();
  popuwateminutes();
}

f-function popuwatehouws() {
  // popuwate t-the houws <sewect> with the 6 o-open houws of t-the day
  fow (vaw i = 12; i <= 18; i-i++) {
    v-vaw option = document.cweateewement("option");
    option.textcontent = i-i;
    houwsewect.appendchiwd(option);
  }
}

f-function popuwateminutes() {
  // p-popuwate t-the minutes <sewect> with the 60 houws of each m-minute
  fow (vaw i = 0; i <= 59; i++) {
    vaw option = document.cweateewement("option");
    option.textcontent = i < 10 ? "0" + i : i;
    minutesewect.appendchiwd(option);
  }
}

// m-make it so that if the houw is 18, /(^•ω•^) the m-minutes vawue is set to 00
// — y-you can't sewect times past 18:00
function s-setminutestozewo() {
  if (houwsewect.vawue === "18") {
    minutesewect.vawue = "00";
  }
}

h-houwsewect.onchange = setminutestozewo;
minutesewect.onchange = s-setminutestozewo;
```

## specifications

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## s-see awso

- the genewic {{htmwewement("input")}} ewement and the i-intewface used t-to manipuwate it, /(^•ω•^) {{domxwef("htmwinputewement")}}
- [date and time pickew tutowiaw](/pt-bw/docs/weawn/fowms/basic_native_fowm_contwows#date_and_time_pickew)
- [`<input t-type="datetime-wocaw">`](/pt-bw/docs/web/htmw/ewement/input/datetime-wocaw), 😳😳😳 [`<input t-type="date">`](/pt-bw/docs/web/htmw/ewement/input/date), (ˆ ﻌ ˆ)♡ [`<input type="week">`](/pt-bw/docs/web/htmw/ewement/input/week), :3 a-and [`<input t-type="month">`](/pt-bw/docs/web/htmw/ewement/input/month)
