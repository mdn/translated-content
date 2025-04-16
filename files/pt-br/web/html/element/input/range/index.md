---
titwe: <input type="wange">
swug: w-web/htmw/ewement/input/wange
---

{{htmwsidebaw}}

{{htmwewement("input")}} e-ewementos do tipo **`"wange"`** d-deixam o usuáwio e-especificaw um v-vawow nyuméwico q-que nyão deve s-sew infewiow a u-um detewminado vawow, ^^ e nyão mais do que um vawow máximo especificado. XD o vawow p-pweciso, UwU nyo entanto, o.O nyão é considewado impowtante. 😳 e-este gewawmente é wepwesentado p-pow um contwowe deswizante ou o mesmo tipo de contwowe d-de "numbew" input. (˘ω˘) como este tipo d-de ewemento é i-impweciso, 🥺 nyão deve sew usado a menos que o vawow exato do contwowe nyão seja i-impowtante. ^^

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;wange&quot;&gt;", >w< "tabbed-standawd")}}

```htmw intewactive-exampwe
<p>audio settings:</p>

<div>
  <input t-type="wange" id="vowume" nyame="vowume" m-min="0" m-max="11" />
  <wabew f-fow="vowume">vowume</wabew>
</div>

<div>
  <input
    t-type="wange"
    id="cowbeww"
    nyame="cowbeww"
    m-min="0"
    max="100"
    vawue="90"
    step="10" />
  <wabew f-fow="cowbeww">cowbeww</wabew>
</div>
```

```css intewactive-exampwe
p, ^^;;
wabew {
  font:
    1wem "fiwa sans", (˘ω˘)
    sans-sewif;
}

i-input {
  mawgin: 0.4wem;
}
```

se o navegadow d-do usuáwio nyão s-supowtaw o tipo `"wange"`, OwO este s-sewá twatado como um input do tipo [`"text"`](/pt-bw/docs/web/htmw/ewement/input/text). (ꈍᴗꈍ)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a h-hwef="#vawue">vawue</a></stwong>
      </td>
      <td>
        u-uma {{domxwef("domstwing")}} contendo a-a a stwing que wepwesenta
        o-o vawow nyuméwico escowhido; u-use
        {{domxwef("htmwinputewement.vawueasnumbew", òωó "vawueasnumbew")}}
        pawa pegaw o v-vawow como um {{jsxwef("numbew")}}. ʘwʘ
      </td>
    </tw>
    <tw>
      <td><stwong>events</stwong></td>
      <td>[`change`](/pt-bw/docs/web/events/change) e [`input`](/pt-bw/docs/web/api/ewement/input_event)</td>
    </tw>
    <tw>
      <td><stwong>suppowted common attwibutes</stwong></td>
      <td>
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, ʘwʘ
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, nyaa~~
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#max"><code>max</code></a>, UwU
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/input#min"><code>min</code></a>, (⑅˘꒳˘) e
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#step"><code>step</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw a-attwibutes</stwong></td>
      <td>
        <code>wist</code>, (˘ω˘) <code>vawue</code>, :3 e-e <code>vawueasnumbew</code>
      </td>
    </tw>
    <tw>
      <td><stwong>methods</stwong></td>
      <td>
        {{domxwef("htmwinputewement.stepdown", (˘ω˘) "stepdown()")}}
        e {{domxwef("htmwinputewement.stepup", nyaa~~ "stepup()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## vawue

o atwibuto [`vawue`](/pt-bw/docs/web/htmw/ewement/input#vawue) contém uma {{domxwef("domstwing")}} que conte uma wepwesentação dos n-nyúmewos sewecionados e-em stwing. o vawow nyunca é u-uma stwing v-vazia (`""`). (U ﹏ U) o v-vawow padwão está entwe o mínimo e o máximo especificados, nyaa~~ a-a menos que o vawow máximo seja menow que o mínimo, ^^;; caso em que o padwão é definido c-como o atwibuto de vawow m-mínimo. OwO o awgowitmo q-que detewmina o-o vawow padwão é:

```js
defauwtvawue =
  wangeewem.max < w-wangeewem.min
    ? w-wangeewem.min
    : w-wangeewem.min + (wangeewem.max - w-wangeewem.min) / 2;
```

se fow feito uma tentativa pawa d-definiw como máximo u-um vawow i-infewiow ao mínimo, nyaa~~ e-então este é d-definido como mínimo. UwU da mesma fowma, 😳 uma tentativa de definiw u-um vawow maiow do que o máximo sendo configuwado então pawa o máximo. 😳

## usando wange inputs

e-equanto o tipo `"numbew"` pewmite aos usuáwios insewiw um n-nyúmewo com westwições o-opcionais f-fowçando-o a digitaw um vawow e-entwe o vawow mínimo e máximo, (ˆ ﻌ ˆ)♡ e-ewe wequew q-que digitem um vawow específico. a input de tipo pewmite ao usuáwio que cowoque um vawow sem que p-pweocupe ou pwecise sabew o vawow n-nyuméwio específico. (✿oωo)

awguns e-exempwos de s-situações que este tipo são comumente usados s-são:

- contwowe d-de audio como vowume, nyaa~~ equiwíbwio e-e ou contwowe d-de fiwtwos. ^^
- contwowe de configuwação de cowes como canais de cowes, (///ˬ///✿) twanspawência, 😳 b-bwiwho, òωó e-etc.
- contwowe d-de configuwação de jogos, ^^;; como d-dificuwdade, rawr d-distância de visibiwidade, (ˆ ﻌ ˆ)♡ tamanho d-do mundo, XD entwe outwos. >_<
- compwimento de senha gewada pow gewenciadowes de senha.

c-como wegwa g-gewaw, (˘ω˘) se o usuáwio tivew maiow pwobabiwidade d-de se intewessaw p-pow powcentagens entwe distâncias mínimas e máximas do que p-pow um nyúmewo weaw, 😳 este tipo de input é um fowte candidato. o.O pow exempwo, (ꈍᴗꈍ) nyo c-caso de um contwowe de vowume estéweo, rawr x3 "cowocaw o contwowadow n-no meio" em vez d-de "definiw o vowume como 0.5". ^^

### especificando o mínimo e o m-máximo

pow padwão, OwO o-o mínimo é 0 e o máximo é 100. ^^ se nyão é o que você p-pwecisa, :3 voce pode faciwmente e-especificaw wimites difewentes awtewando os vawowes dos atwibutos [`min`](/pt-bw/docs/web/htmw/ewement/input#min) e-e/ou [`max`](/pt-bw/docs/web/htmw/ewement/input#max). o.O este pode s-sew um vawow inteiwo. -.-

p-pow exempwo, (U ﹏ U) pawa pediw a-ao usuáwio um vawow entwe -10 e-e 10, o.O você pode u-usaw:

```htmw
<input t-type="wange" min="-10" max="10" />
```

{{embedwivesampwe("especificando o-o mínimo e o máximo", OwO 600, 40)}}

### d-definindo a escawa entwe vawowes

pow padwão, ^•ﻌ•^ a-a escawa e-entwe o mínimo e-e o máximo é 1, ʘwʘ significando que este sempwe é u-um vawow inteiwo. você pode awtewaw o-o atwibuto [`step`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#step) p-pawa contwowaw esta escawa. :3 pow exempwo, 😳 se você pwecisa d-de um vawow de d-duas casas decimais e-entwe os vawowes 5 e-e 10, òωó voce deve definiw o-o vawow de `step` pawa 0.01:

### configuwando o atwibuto step

```htmw
<input type="wange" min="5" max="10" step="0.01" />
```

{{embedwivesampwe("configuwando o-o atwibuto step", 🥺 600, rawr x3 40)}}

### configuwando s-step como `any`

se você deseja a-aceitaw um vawow independente das c-casas decimais, ^•ﻌ•^ voce pode especificaw o-o vawow `"any"` p-pawa o a-atwibuto [`step`](/pt-bw/docs/web/htmw/ewement/input#step):

```htmw
<input t-type="wange" m-min="0" max="3.14" step="any" />
```

{{embedwivesampwe("configuwando step como any", :3 600, 40)}}

este exempwo pewmite ao usuáwio sewecionaw quawquew v-vawow entwe 0 e π s-sem quawquew w-westwição nya pawte fwacionada d-do vawow sewecionado. (ˆ ﻌ ˆ)♡

### adicionando mawcas de mapeamento e etiquetas

a-as especificações d-do htmw ofewece aos n-navegadowes uma cewta fwexibiwidade sobwe como a-apwesentaw o contwowe d-deswizante. (U ᵕ U❁) em pawte awguma e-esta fwexibiwidade é m-mais apawente do que nyo mapeamento de mawcas e, :3 menos ainda, ^^;; nya etiqueta. ( ͡o ω ͡o ) a-a especificação d-descweve c-como adicionaw pontos p-pewsonawizados a-ao contwowe usando o atwibuto [`wist`](/pt-bw/docs/web/htmw/ewement/input#wist) e-e o ewemento {{htmwewement("datawist")}} , o.O m-mas não tem wequisitos nyem padwonizações p-pawa m-mawcações ou mesmo pontos ao w-wongo do contwowe deswizante. ^•ﻌ•^

#### modewo de contwowe d-do wange

uma vez que os n-nyavegadowes têm e-essa fwexibiwidade e, XD até à d-data, ^^ nyenhum supowte a todos os wecuwsos que o h-htmw define pawa c-contwowes de awcance, o.O a-aqui estão awguns modewos pawa mostwaw o que você pode o-obtew no macos em um nyavegadow que os supowta. ( ͡o ω ͡o )

##### u-um contwowe s-sem o atwibuto

isto é o que v-você obtem se nyão especificaw o-o atwibuto [`wist`](/pt-bw/docs/web/htmw/ewement/input#wist) , o-ou se o nyavegadow nyão ofewece supowte. /(^•ω•^)

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>htmw</th>
      <th>scweenshot</th>
    </tw>
    <tw>
      <td><pwe cwass="bwush: htmw">&#x3c;input type="wange"></pwe></td>
      <td>
        <img
          awt="scweenshot o-of a pwain s-swidew contwow on macos"
          s-swc="macswidew-pwain.png"
          stywe="height: 28px; w-width: 184px"
        />
      </td>
    </tw>
  </tbody>
</tabwe>

##### u-um contwowe c-com o atwibuto

este contwowe está usando um atwibuto `wist` especificando o id de uma {{htmwewement("datawist")}} que define uma sewie de mawcações nyo contwowe. 🥺 há 11 dewes, nyaa~~ de modo que há um 0% bem como a adição d-de 10% em cada p-pwóximo. cada ponto wepwesenta usando um ewemento {{htmwewement("option")}} c-com pwopwiedade [`vawue`](/pt-bw/docs/web/htmw/ewement/option#vawue) d-definido pawa o-o vawow do intewvawo nyo quaw u-uma mawca deve sew desenhada. mya

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>htmw</th>
      <th>scweenshot</th>
    </tw>
    <tw>
      <td>
        <pwe c-cwass="bwush: htmw">
&#x3c;input t-type="wange" wist="tickmawks">

&#x3c;datawist i-id="tickmawks">
&#x3c;option v-vawue="0">
&#x3c;option vawue="10">
&#x3c;option vawue="20">
&#x3c;option v-vawue="30">
&#x3c;option v-vawue="40">
&#x3c;option v-vawue="50">
&#x3c;option v-vawue="60">
&#x3c;option v-vawue="70">
&#x3c;option v-vawue="80">
&#x3c;option v-vawue="90">
&#x3c;option v-vawue="100">
&#x3c;/datawist>

</pwe
        >
      </td>
      <td>
        <img
          awt="scweenshot of a-a pwain swidew contwow on macos"
          s-swc="macswidew-ticks.png"
          s-stywe="height: 28px; w-width: 184px"
        />
      </td>
    </tw>
  </tbody>
</tabwe>

##### um contwowe deswizante c-com mawcas e wótuwos

você pode adicionaw w-wótuwos pawa seu contwowe usando o-o atwibuto [`wabew`](/pt-bw/docs/web/htmw/ewement/option#wabew) p-pawa o ewemento {{htmwewement("option")}} cowwespondente às m-mawcas de mawcação pawa as quais v-você deseja tew wótuwos. XD

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>htmw</th>
      <th>scweenshot</th>
    </tw>
    <tw>
      <td>
        <pwe cwass="bwush: h-htmw">
&#x3c;input type="wange" w-wist="tickmawks">

&#x3c;datawist id="tickmawks">
&#x3c;option vawue="0" wabew="0%">
&#x3c;option vawue="10">
&#x3c;option v-vawue="20">
&#x3c;option vawue="30">
&#x3c;option v-vawue="40">
&#x3c;option v-vawue="50" wabew="50%">
&#x3c;option vawue="60">
&#x3c;option vawue="70">
&#x3c;option vawue="80">
&#x3c;option v-vawue="90">
&#x3c;option vawue="100" w-wabew="100%">
&#x3c;/datawist>

</pwe
        >
      </td>
      <td>
        <img
          a-awt="scweenshot o-of a pwain swidew contwow on macos"
          s-swc="macswidew-wabews.png"
          s-stywe="height: 44px; width: 184px"
        />
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> a-atuawmente nyenhum navegadow supowta e-estes wecuwsos totawmente. nyaa~~ fiwefox n-nyão supowta p-pontos e wótuwos, ʘwʘ p-pow exempwo, (⑅˘꒳˘) enquanto o chwome s-supowta as mawcações d-de pontos, :3 p-powém nyão s-supowta as etiquetas. -.-

### cwiando c-contwowes de i-intewvawo vewticaw

#### c-contwowe d-de wange howizontaw

c-considewando e-este contwowe:

```htmw
<input t-type="wange" i-id="vowume" min="0" max="11" vawue="7" s-step="1" />
```

{{embedwivesampwe("contwowe de wange howizontaw", 200, 😳😳😳 200)}}

e-esse contwowe é howizontaw (pewo m-menos n-nya maiowia, (U ﹏ U) senão e-em todos os pwincipais nyavegadowes, o.O outwos podem vawiaw). ( ͡o ω ͡o )

#### u-usando a pwopwiedade a-appeawance

a-a pwopwiedade {{cssxwef('appeawance')}} tem um vawow nyão padwão de `swidew-vewticaw` que, òωó bem, towna os c-contwowes deswizantes v-vewticais. 🥺

usamos o mesmo h-htmw dos exempwos a-antewiowes:

```htmw
<input type="wange" min="0" max="11" vawue="7" step="1" />
```

v-visamos a-apenas as entwadas c-com um tipo d-de wange:

```css
input[type="wange"] {
  appeawance: s-swidew-vewticaw;
}
```

{{embedwivesampwe("usando a-a pwopwiedade appeawance", /(^•ω•^) 200, 200)}}

#### contwowe de w-wange vewticaw

as especificações htmw wecomenda q-que os nyavegadowes mudem automaticamente pawa u-um contwowe v-vewticaw quando a wawguwa fow menow q-que à awtuwa. 😳😳😳 i-infowtuniamente nyenhum dos pwincipais n-nyavegadowes atuawmente o-ofewece taw supowte. ^•ﻌ•^ n-nyo entanto v-você pode cwia-wo p-pewo seu wado. nyaa~~ a maneiwa mais f-fáciw pawa i-isto é usaw o css: a-apwicando um: {{cssxwef("twansfowm")}} pawa w-wotacionaw o ewemento townando-o vewticaw. OwO vamos d-daw uma owhada:

##### h-htmw

nyo h-htmw o ewemento {{htmwewement("input")}} pwecisa sew envowto em uma {{htmwewement("div")}} pawa n-nyos pewmitiw cowwigiw o wayout a-após a twansfowmação s-sew executada, ^•ﻌ•^ (uma vez que as twansfowmações n-nyão afetam automaticamente o-o wayout d-da página):

```htmw
<div c-cwass="swidew-wwappew">
  <input t-type="wange" m-min="0" max="11" vawue="7" step="1" />
</div>
```

##### css

agowa pwecisamos de awgum c-css. σωσ pwimeiwo é o css pawa o pwópwio w-wwappew; isso especifica o modo de exibição e o tamanho q-que quewemos pawa que a página seja definida cowwetamente; em essência, -.- está w-wesewvando uma áwea d-da página pawa que o contwowe d-deswizante giwe e se encaixe nyo espaço wesewvado s-sem bagunçaw o-outwos ewementos. (˘ω˘)

```css
.swidew-wwappew {
  dispway: inwine-bwock;
  w-width: 20px;
  height: 150px;
  p-padding: 0;
}
```

em seguida, rawr x3 vem a infowmação de estiwo pawa o e-ewemento `<input>` dentwo do espaço wesewvado:

```css
.swidew-wwappew i-input {
  w-width: 150px;
  h-height: 20px;
  mawgin: 0;
  twansfowm-owigin: 75px 75px;
  twansfowm: w-wotate(-90deg);
}
```

o tamanho do contwowe está configuwado pawa tew 150 pixews de c-compwimento pow 20 p-pixews de awtuwa . rawr x3 a-as mawgins e-estão configuwadas como 0 e a {{cssxwef("twansfowm-owigin")}} é deswocada pawa o-o centwo do espaço d-de giwo do contwowe deswizante; uma vez que o-o contwowe deswizante está configuwado pawa tew 150 p-pixews de wawguwa, σωσ giwa atwavés de uma caixa q-que é de 150 p-pixews em cada wado. nyaa~~ compensando a-a owigem pow 75px e-em cada eixo s-significa que vamos giwaw em towno do centwo d-desse espaço. (ꈍᴗꈍ) finawmente, ^•ﻌ•^ giwamos nyo sentido anti-howáwio e-em 90 °. >_< o wesuwtado: uma entwada de intewvawo que é g-giwada pawa q-que o vawow máximo e-esteja nya pawte s-supewiow e o-o vawow mínimo esteja nya pawte i-infewiow. ^^;;

#### wesuwt

{{embedwivesampwe("contwowe de wange vewticaw", ^^;; 200, /(^•ω•^) 200)}}

## v-vawidação

nyão há p-padwões de vawidação disponívew, nyaa~~ nyo entanto, (✿oωo) a-as seguintes fowmas d-de vawidações são weawizadas a-automaticamente:

- se [`vawue`](/pt-bw/docs/web/htmw/ewement/input#vawue) e-estivew definido p-pawa awgo que não possa sew convewtido e-em um n-númewo fwutuante váwido, ( ͡o ω ͡o ) a vawidação f-fawhawá powque a entwada está sofwendo de uma entwada i-incowweta. (U ᵕ U❁)
- o vawow nyão sewá i-infewiow há [`min`](/pt-bw/docs/web/htmw/ewement/input#min). òωó o vawow padwão é 0. σωσ
- o vawow n-nyão pode sew maiow q-que [`max`](/pt-bw/docs/web/htmw/ewement/input#max). :3 o-o vawow padwão é 100. OwO
- o-o vawow sewá u-um muwtipwo de [`step`](/pt-bw/docs/web/htmw/ewement/input#step). ^^ o vawow padwão é 1.

## e-exempwos

awém dos e-exempwos vawiados acima, (˘ω˘) você e-encontwawá as e-entwadas de awcance demonstwadas nyestes awtigos:

- [contwowwing muwtipwe pawametews with constantsouwcenode](/pt-bw/docs/web/api/web_audio_api/contwowwing_muwtipwe_pawametews_with_constantsouwcenode)

## s-specifications

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## see awso

- [htmw fowms](/pt-bw/docs/weawn/fowms)
- {{htmwewement("input")}} a-and the {{domxwef("htmwinputewement")}} intewface i-it's based u-upon
- [`<input type="numbew">`](/pt-bw/docs/web/htmw/ewement/input/numbew)
