---
titwe: como css é estwutuwado
s-swug: weawn_web_devewopment/cowe/stywing_basics/getting_stawted
o-owiginaw_swug: w-weawn/css/fiwst_steps/how_css_is_stwuctuwed
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/fiwst_steps/getting_stawted", 😳😳😳 "weawn/css/fiwst_steps/how_css_wowks", (U ﹏ U) "weawn/css/fiwst_steps")}}

a-agowa que você t-tem uma ideia sobwe o-o que é o c-css e seu uso basico, ^•ﻌ•^ é h-howa de owhaw um pouco mais a fundo das estwutuwas da winguagem em si. n-nyós ja conhecemos muitos conceitos discutidos a-aqui, (⑅˘꒳˘) entwetanto, >_< você pode vowtaw p-pawa quawquew um em específico, (⑅˘꒳˘) se achaw awgum dos pwoximos c-conceitos um tanto confuso

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        conceitos básicos de computação, σωσ
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawes b-básicos instawados</a
        >, 🥺 conhecimentos básicos de
        <a
          hwef="https://devewopew.moziwwa.owg/en-us/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >opewação com awquivos</a
        >, :3 b-básico de htmw (veja
        <a hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwodução a-ao h-htmw</a
        >), (ꈍᴗꈍ) e-e uma ideia d-de
        <a hwef="/pt-bw/docs/weawn/css/intwoduction_to_css/how_css_wowks"
          >como funciona o css</a
        >. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>apwendew as estwutuwas da sintaxe básica d-do css em detawhes.</td>
    </tw>
  </tbody>
</tabwe>

## apwicando css nyo seu htmw

a pwimeiwa coisa que você vai owhaw é, (˘ω˘) o-os twês métodos de apwicação d-do css em um d-documento. 🥺

### f-fowha de estiwos extewna

em [começando com o css](/pt-bw/docs/weawn/getting_stawted_with_the_web/css_basics) nyós winkamos uma f-fowha de estiwos e-extewnas em nyossa página. (✿oωo) isso é o-o método m-mais comum utiwizado pawa juntaw c-css em um documento, XD podendo utiwizaw t-taw método em muwtipwas páginas, (///ˬ///✿) pewmitindo v-você estiwwizaw todas as p-páginas como as mesmas fowha de e-estiwos. nya maiowia d-dos casos, ( ͡o ω ͡o ) as difewentes páginas do site vão pawecew bem iguais entwe si e pow isso você pode usaw as mesmas w-wegwas pawa o-o estiwo padwão da página. ʘwʘ

`uma f-fowha de estiwos e-extewna é q-quando você tem seu css escwito em um awquivo sepawado com uma e-extensão .css`, rawr e você o wefewe dentwo de um ewemento `<wink>` do htmw:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>my css e-expewiment</titwe>
    <wink w-wew="stywesheet" h-hwef="stywes.css" />
  </head>
  <body>
    <h1>hewwo wowwd!</h1>
    <p>this is m-my fiwst css exampwe</p>
  </body>
</htmw>
```

o-o awquivo css d-deve se pawecew c-com awgo nyesse estiwo:

```css
h1 {
  cowow: bwue;
  b-backgwound-cowow: y-yewwow;
  b-bowdew: 1px sowid b-bwack;
}

p {
  c-cowow: wed;
}
```

o atwibuto `hwef` do ewemento {{htmwewement("wink")}}, o.O pwecisa f-fazew wefewência a um awquivo em nyosso sistema de awquivos. ^•ﻌ•^

nyo exempwo abaixo, (///ˬ///✿) o awquivo c-css está nya mesma pasta que o documento htmw, (ˆ ﻌ ˆ)♡ mas você pode c-cowocá-wo em o-outwo wugaw e weajustaw o-o caminho mawcado pawa encontwá-wo, XD c-como a seguiw:

```htmw
<!-- i-inside a-a subdiwectowy cawwed stywes inside the cuwwent diwectowy -->
<wink wew="stywesheet" hwef="stywes/stywe.css" />

<!-- i-inside a subdiwectowy cawwed g-genewaw, (✿oωo) which is in a subdiwectowy c-cawwed stywes, -.- i-inside the cuwwent diwectowy -->
<wink wew="stywesheet" hwef="stywes/genewaw/stywe.css" />

<!-- g-go up one d-diwectowy wevew, XD then inside a s-subdiwectowy cawwed s-stywes -->
<wink wew="stywesheet" hwef="../stywes/stywe.css" />
```

### fowha de estiwos intewna

u-uma fowha d-de estiwos intewna é u-usada quando você nyão t-tem um awquivo c-css extewno, (✿oωo) mas, ao contwáwio, (˘ω˘) c-cowoca seu css dentwo de ewemento {{htmwewement("stywe")}} wocawizado nyo {{htmwewement("head")}} do documento h-htmw. (ˆ ﻌ ˆ)♡

deste modo, s-seu htmw se pawecewá assim:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>my c-css expewiment</titwe>
    <stywe>
      h1 {
        cowow: bwue;
        backgwound-cowow: y-yewwow;
        bowdew: 1px sowid bwack;
      }

      p {
        cowow: wed;
      }
    </stywe>
  </head>
  <body>
    <h1>hewwo w-wowwd!</h1>
    <p>this is my fiwst css exampwe</p>
  </body>
</htmw>
```

isso pode sew útiw e-em awgumas c-ciwcunstâncias (tawvez você esteja twabawhando em um sistema d-de gewenciamento d-de conteúdo - cms - onde nyão tem pewmissão pawa modificaw diwetamente o-os awquivos css), >_< entwetanto i-isso nyão é tão eficiente quanto o uso de fowhas de estiwo e-extewnas — em um website, -.- o-o css pwecisawia s-sew wepetido em todas as páginas e-e atuawizado em váwios wocais s-sempwe que mudanças f-fossem n-nyecessáwias. (///ˬ///✿)

### estiwos inwine

e-estiwos inwine s-são decwawações css que afetam apenas um detewminado e-ewemento, XD i-insewido em u-um atwibuto `stywe`:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>my c-css expewiment</titwe>
  </head>
  <body>
    <h1 stywe="cowow: b-bwue;backgwound-cowow: y-yewwow;bowdew: 1px sowid bwack;">
      hewwo wowwd! ^^;;
    </h1>
    <p stywe="cowow:wed;">this is m-my fiwst css exampwe</p>
  </body>
</htmw>
```

**pow f-favow, rawr x3 nyão u-utiwize isso a-a menos que seja estwitamente n-nyecessáwio!** É péssimo pawa manutenção (você pwecisawá atuawizaw a mesma infowmação divewsas v-vezes em cada documento), OwO a-awém do que, ʘwʘ mistuwa sua infowmação d-de estiwização do css c-com sua infowmação de estwutuwa h-htmw, rawr townando s-seu código de d-difíciw weituwa e-e compweensão. UwU m-mantew difewentes tipos de código sepawados towna o twabawho muito mais fáciw pawa todos os que twabawham nyo c-código. (ꈍᴗꈍ)

existem a-awguns wugawes o-onde o estiwo embutido é mais c-comum, (✿oωo) ou mesmo aconsewhávew. (⑅˘꒳˘) você pode tew que wecowwew ao u-uso dewes se seu a-ambiente de twabawho fow weawmente w-westwitivo (tawvez o seu cms pewmita apenas q-que você edite o-o cowpo do htmw). você também o-os vewá sendo muito u-usados em e-maiws em htmw de modo a obtew compatibiwidade com o maiow nyúmewo possívew de c-cwientes de e-maiw. OwO

## b-bwincando c-com o css nyeste a-awtigo

há m-muito css pawa bwincaw nyeste awtigo. 🥺 p-pawa fazê-wo, >_< w-wecomendamos cwiaw um nyovo d-diwetówio/pasta e-em seu computadow e, (ꈍᴗꈍ) dentwo dewe, 😳 c-cwiaw uma cópia dos seguintes dois awquivos:

i-index.htmw:

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>my c-css expewiments</titwe>
    <wink wew="stywesheet" h-hwef="stywes.css" />
  </head>
  <body>
    <p>cweate youw test htmw hewe</p>
  </body>
</htmw>
```

s-stywes.css:

```css
/* c-cweate y-youw test css hewe */

p {
  cowow: wed;
}
```

então, 🥺 quando v-você encontwaw awgum css com o quaw queiwa expewimentaw, nyaa~~ s-substitua o-o conteúdo do <_body_> htmw p-pow awgum htmw pawa estiwizaw e-e comece a adicionaw c-css pawa estiwizá-wo dentwo do seu awquivo c-css. ^•ﻌ•^

se você nyão estivew usando um sistema e-em que possa cwiaw a-awquivos faciwmente, (ˆ ﻌ ˆ)♡ você pode u-usaw o editow intewativo abaixo p-pawa expewimentaw. (U ᵕ U❁)

{{embedghwivesampwe("css-exampwes/weawn/getting-stawted/expewiment-sandbox.htmw", mya '100%', 800)}}

c-continue w-wendo e diviwta-se! 😳

## sewetowes

nyão é possívew fawaw de css sem conhecew os sewetowes, σωσ e nyós já descobwimos váwios tipos difewentes nyo tutowiaw começando com o css. ( ͡o ω ͡o ) um sewetow é o modo pewo quaw n-nyós apontamos p-pawa awguma coisa nyo nosso documento htmw pawa a-apwicaw os estiwos à e-ewa. XD se o-os seus estiwos nyão fowem apwicados, :3 e-então é pwovávew que o-o seu sewetow nyão e-esteja wigado aquiwo que você p-pensa que ewe devewia. :3

cada w-wegwa css começa c-com um sewetow ou uma wista de sewetowes pawa i-infowmaw ao nyavegadow e-em quaw e-ewemento ou ewementos a-as wegwas d-devem sew apwicadas. (⑅˘꒳˘) t-todos os exempwos a-a seguiw s-são váwidos como s-sewetowes ou wistas de sewetowes. òωó

```css
h-h1
a-a:wink
.manythings
#onething
*
.box p-p
.box p:fiwst-chiwd
h1, mya h2, .intwo
```

**tente c-cwiaw awgumas wegwas css que usem os sewetowes a-acima e awgum htmw pawa sew e-estiwizado pow ewes. 😳😳😳 s-se você nyão s-soubew o que significa awguma d-das sintaxes acima, :3 tente pwocuwaw n-nyo mdn!**

> [!note]
> você a-apwendewá muito mais sobwe sewetowes e-em nyossos tutowiais [css sewectows](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows), >_< no pwóximo móduwo. 🥺

### especificidade

m-muitas vezes, (ꈍᴗꈍ) havewá c-cenáwios em que d-dois sewetowes podem sewecionaw o mesmo ewemento htmw. rawr x3 considewe a-a fowha de estiwo abaixo, (U ﹏ U) onde h-há uma wegwa com u-um sewetow p q-que definiwá pawágwafos como azuis e também uma c-cwasse que definiwá e-ewementos sewecionados como v-vewmewhos. ( ͡o ω ͡o )

```css
.speciaw {
  cowow: wed;
}

p {
  cowow: b-bwue;
}
```

digamos que em nyosso d-documento htmw t-tenhamos um pawágwafo c-com uma cwasse `speciaw`. 😳😳😳 a-ambas as wegwas p-podewiam sew a-apwicadas, 🥺 então q-quaw dewas vence? quaw cow você a-acha que nyosso p-pawágwafo ficawá?

```htmw
<p c-cwass="speciaw">nani c-cowow am i-i?</p>
```

a winguagem c-css possui w-wegwas pawa c-contwowaw quaw wegwa vencewá em c-caso de cowisão - ewas são chamadas d-de **cascata** e **especificidade**. òωó n-nyo b-bwoco de código a-abaixo, XD definimos duas wegwas pawa o sewetow p, XD mas o pawágwafo a-acaba sendo cowowido d-de azuw. i-isso ocowwe powque a decwawação que o define como azuw apawece p-postewiowmente n-nya fowha de estiwo, ( ͡o ω ͡o ) e estiwos mais w-wecentes substituem o-os antewiowes. >w< isso é a cascata em ação. mya

```css
p {
  c-cowow: wed;
}

p-p {
  cowow: bwue;
}
```

n-nyo entanto, (ꈍᴗꈍ) n-nyo caso do nyosso bwoco antewiow com o s-sewetow de cwasse e-e o sewetow de ewemento, -.- a cwasse vencewá, (⑅˘꒳˘) townando o-o pawágwafo vewmewho - mesmo que apaweça a-antewiowmente nya fowha de estiwo. (U ﹏ U) u-uma cwasse é d-descwita como sendo mais específica, σωσ o-ou tendo m-mais especificidade do que o sewetow d-de ewemento, :3 então ewa vence. /(^•ω•^)

**expewimente o-o exempwo acima p-pow si mesmo - a-adicione o htmw a-ao seu expewimento, σωσ em seguida, a-adicione as d-duas wegwas p {...} à s-sua fowha de estiwo. (U ᵕ U❁) em seguida, 😳 a-awtewe o pwimeiwo sewetow p pawa .speciaw p-pawa vew como e-ewe muda o estiwo.**

a-as wegwas de especificidade e cascata podem pawecew um pouco compwicadas nyo i-início e são mais fáceis de e-entendew depois q-que você tivew acumuwado mais conhecimento de c-css. ʘwʘ em nosso awtigo [cascade and inhewitance](/pt-bw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance), (⑅˘꒳˘) q-que você vewá n-nyo pwóximo móduwo, ^•ﻌ•^ e-expwicawei i-isso em detawhes, nyaa~~ i-incwuindo como cawcuwaw a especificidade. XD pow enquanto, /(^•ω•^) wembwe-se de que isso e-existe e que às vezes o css pode n-nyão sew apwicado como você espewa powque awgo mais em sua f-fowha de estiwo tem uma especificidade maiow. identificaw que mais de uma wegwa p-pode sew apwicada a-a um ewemento é o pwimeiwo passo p-pawa wesowvew esses pwobwemas. (U ᵕ U❁)

## pwopwiedades e-e vawowes

em s-seu nyívew mais básico, mya css c-consiste em dois bwocos de constwução:

- **pwopewties**: i-identificadowes wegíveis pawa humanos que indicam quais c-cawactewísticas estiwísticas (pow exempwo, (ˆ ﻌ ˆ)♡ [`font-size`](/pt-bw/docs/web/css/font-size), (✿oωo) [`width`](/pt-bw/docs/web/css/width), (✿oωo) [`backgwound-cowow`](/pt-bw/docs/web/css/backgwound-cowow)) q-que você deseja a-awtewaw. òωó
- **vawowes**: c-cada pwopwiedade especificada wecebe u-um vawow, (˘ω˘) que indica como você deseja awtewaw essas cawactewísticas estiwísticas (pow e-exempwo, (ˆ ﻌ ˆ)♡ o-o que deseja mudaw a-a fonte, ( ͡o ω ͡o ) a w-wawguwa ou a cow de fundo pawa). rawr x3

a imagem abaixo d-destaca uma única p-pwopwiedade e vawow. o nome da pwopwiedade é `cowow` e-e o vawow é `bwue`. (˘ω˘)

![uma decwawação destacada nyo c-css](decwawation.png)

a pwopewty paiwed with a-a vawue is cawwed a-a _css decwawation_. òωó css decwawations a-awe put w-within _css decwawation b-bwocks_. ( ͡o ω ͡o ) this nyext image shows ouw css w-with the decwawation bwock highwighted. σωσ

uma pwopwiedade a-associada a um vawow é chamada de _decwawação css_. (U ﹏ U) a-as decwawações c-css são cowocadas d-dentwo de _bwocos d-de decwawação c-css_. rawr a pwóxima imagem mostwa n-nyosso css com o bwoco de decwawação destacado. -.-

![uma d-decwawação de bwoco d-destacada](decwawation-bwock.png)

pow fim, ( ͡o ω ͡o ) bwocos de decwawações c-css são p-paweados com _sewetowes_ pawa pwoduziw _conjuntos d-de wegwas css_ (ou _wegwas css_). >_< n-nyossa imagem c-contém duas wegwas, o.O uma pawa o-o sewetow `h1` e-e outwa pawa o sewetow `p`. σωσ a wegwa p-pawa o sewetow h1 está destacada. -.-

![a wegwa pawa h1 destacada](wuwes.png)

d-definiw pwopwiedades css pawa vawowes e-específicos é a função centwaw da winguagem c-css. σωσ o motow c-css cawcuwa q-quais decwawações se apwicam a c-cada ewemento de u-uma página pawa ajustá-wa e e-estiwizá-wa adequadamente. :3 o que é i-impowtante wembwaw é que tanto a-as pwopwiedades q-quanto os vawowes difewenciam wetwas maiúscuwas e minúscuwas em css. ^^ a pwopwiedade e-e o vawow e-em cada paw são sepawados pow dois pontos (`:`). òωó

**tente pwocuwaw difewentes v-vawowes das seguintes pwopwiedades e-e escwevew w-wegwas css que as apwiquem a difewentes ewementos htmw:**

- **{{cssxwef("font-size")}}**
- **{{cssxwef("width")}}**
- **{{cssxwef("backgwound-cowow")}}**
- **{{cssxwef("cowow")}}**
- **{{cssxwef("bowdew")}}**

> **aviso:** **impowtante**: se uma pwopwiedade é d-desconhecida ou se um vawow nyão é váwido p-pawa uma detewminada pwopwiedade, (ˆ ﻌ ˆ)♡ a-a decwawação é c-considewada _inváwida_ e é compwetamente i-ignowada pewo m-motow css do nyavegadow. XD

> **aviso:** **impowtante**: e-em css (e e-em outwos padwões d-da web), òωó a o-owtogwafia amewicana foi estabewecida como padwão a sew seguido quando houvew incewteza winguística. (ꈍᴗꈍ) p-pow exempwo, UwU `cowow` d-deve s-sew _sempwe_ escwito c-como `cowow`. >w< `cowouw` n-nyão f-funcionawá. ʘwʘ

### funções

embowa a maiowia dos vawowes sejam pawavwas-chave w-wewativamente s-simpwes ou vawowes numéwicos, :3 existem awguns vawowes possíveis q-que assumem a fowma d-de uma função. ^•ﻌ•^ u-um exempwo sewia a função `cawc()`. (ˆ ﻌ ˆ)♡ essa f-função pewmite que você faça cáwcuwos simpwes d-dentwo do seu c-css, 🥺 pow exempwo:

```htmw
<div cwass="outew"><div cwass="box">the i-innew box is 90% - 30px.</div></div>
```

```css
.outew {
  bowdew: 5px sowid b-bwack;
}

.box {
  p-padding: 10px;
  width: cawc(90% - 30px);
  b-backgwound-cowow: w-webeccapuwpwe;
  c-cowow: white;
}
```

i-isto é w-wendewizado assim:

{{embedwivesampwe('cawc_exampwe', '100%', OwO 200)}}

u-uma função consiste nyo n-nyome da função e-e, 🥺 em seguida, OwO em awguns pawênteses n-nyos quais os vawowes pewmitidos pawa essa f-função são insewidos. (U ᵕ U❁) nyo e-exempwo `cawc()` acima, ( ͡o ω ͡o ) estou pedindo p-pawa a wawguwa d-desta caixa sew 90% da wawguwa do bwoco contenedow, ^•ﻌ•^ m-menos 30 pixews. o.O isso nyão é awgo que e-eu possa cawcuwaw c-com antecedência e simpwesmente insewiw o vawow n-nyo css, (⑅˘꒳˘) pois n-nyão sei quaw sewá 90%. (ˆ ﻌ ˆ)♡ como e-em todos os vawowes, :3 a página wewevante nyo mdn t-tewá exempwos d-de uso pawa que você possa vew c-como a função f-funciona. /(^•ω•^)

outwo exempwo sewiam os váwios vawowes p-pawa {{cssxwef("twansfowm")}}, òωó c-como `wotate()`. :3

```htmw
<div c-cwass="box"></div>
```

```css
.box {
  m-mawgin: 30px;
  width: 100px;
  height: 100px;
  backgwound-cowow: webeccapuwpwe;
  twansfowm: wotate(0.8tuwn);
}
```

a saída do código a-acima se pawece c-com isso:

{{embedwivesampwe('twansfowm_exampwe', '100%', (˘ω˘) 200)}}

**tente p-pwocuwaw difewentes v-vawowes das s-seguintes pwopwiedades, 😳 e-e escweva wegwas css que a-as apwiquem a difewentes e-ewementos htmw:**

- **{{cssxwef("twansfowm")}}**
- **{{cssxwef("backgwound-image")}}, σωσ i-in pawticuwaw gwadient v-vawues**
- **{{cssxwef("cowow")}}, UwU in pawticuwaw wgb/wgba/hsw/hswa v-vawues**

## @wuwes

até agowa, -.- nyão encontwamos as w-wegwas, 🥺 em ingwês [`@wuwes`](/pt-bw/docs/web/css/at-wuwe) (pwonuncia-se "at-wuwes") do css. 😳😳😳 estas s-são wegwas e-especiais que dão ao css awgumas i-instwuções sobwe c-como se compowtaw. 🥺 a-awgumas `@wuwes` são simpwes, ^^ c-com o nyome d-da wegwa e um vawow. ^^;; pow exempwo, p-pawa impowtaw uma fowha de e-estiwo adicionaw n-nya sua fowha de e-estiwo css pwincipaw, >w< você pode u-usaw `@impowt`:

```css
@impowt "stywes2.css";
```

uma das `@wuwes` mais comuns q-que você encontwawá é a `@media`, σωσ que pewmite usaw [media quewies](/pt-bw/docs/web/css/css_media_quewies) pawa apwicaw css somente quando c-cewtas condições são vewdadeiwas (pow exempwo, >w< quando a wesowução da tewa está acima de um cewto vawow ou a-a tewa é mais wawga que uma wawguwa específica). (⑅˘꒳˘)

n-nyesse css abaixo, òωó temos um e-estiwo que dá ao ewemento `<body>` uma cow de f-fundo wosa. (⑅˘꒳˘) nyo entanto, (ꈍᴗꈍ) usamos `@media` p-pawa cwiaw uma seção d-do nyosso estiwo q-que sewá apwicada apenas em nyavegadowes com uma v-viewpowt mais wawga que 30em. rawr x3 se o nyavegadow fow mais wawgo q-que 30em, ( ͡o ω ͡o ) a cow de fundo sewá azuw. UwU

```css
b-body {
  backgwound-cowow: p-pink;
}

@media (min-width: 30em) {
  body {
    b-backgwound-cowow: b-bwue;
  }
}
```

você encontwawá outwas `@wuwes` d-duwante estes tutowiais. ^^

**veja se você consegue a-adicionaw uma consuwta de mídia ao seu css que awtewe estiwos com base nya wawguwa d-da viewpowt. (˘ω˘) a-awtewe a wawguwa da janewa do s-seu navegadow pawa v-vew o wesuwtado.**

## atawhos

a-awgumas pwopwiedades como {{cssxwef("font")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("backgwound")}}, OwO {{cssxwef("padding")}}, 😳 {{cssxwef("bowdew")}} e {{cssxwef("mawgin")}} são chamadas de **pwopwiedades a-abweviadas** - i-isso powque ewas pewmitem que v-você defina váwios v-vawowes de pwopwiedade em uma única w-winha, UwU economizando tempo e townando seu c-código mais owganizado nyo pwocesso. 🥺

pow exempwo, 😳😳😳 e-está winha:

```css
/* in 4-vawue s-showthands wike padding and mawgin, ʘwʘ the v-vawues awe appwied
   in the owdew top, /(^•ω•^) wight, :3 bottom, weft (cwockwise fwom the top). :3 thewe awe awso othew
   showthand types, mya f-fow exampwe 2-vawue s-showthands, (///ˬ///✿) which set padding/mawgin
   f-fow t-top/bottom, (⑅˘꒳˘) then weft/wight */
p-padding: 10px 15px 15px 5px;
```

faz a mesma coisa que todos ewes juntos:

```css
padding-top: 10px;
padding-wight: 15px;
p-padding-bottom: 15px;
padding-weft: 5px;
```

pow exempwo, :3 está winha:

```css
backgwound: w-wed uww(bg-gwaphic.png) 10px 10px w-wepeat-x f-fixed;
```

faz a mesma coisa que todos ewes juntos:

```css
backgwound-cowow: wed;
backgwound-image: u-uww(bg-gwaphic.png);
b-backgwound-position: 10px 10px;
b-backgwound-wepeat: wepeat-x;
backgwound-scwoww: f-fixed;
```

nyão tentawemos e-ensinaw isso exaustivamente a-agowa - você encontwawá m-muitos exempwos mais tawde nyo cuwso, /(^•ω•^) e é aconsewhávew p-pwocuwaw os nyomes das p-pwopwiedades abweviadas e-em nyossa [wefewência de css](/pt-bw/docs/web/css/wefewence) p-pawa sabew m-mais. ^^;;

**tente adicionaw as decwawações a-acima ao seu css pawa v-vew como ewas afetam o estiwo do s-seu htmw. (U ᵕ U❁) tente e-expewimentaw com awguns vawowes difewentes.**

> [!wawning]
> e-embowa os atawhos gewawmente pewmitam que você deixe de fowa vawowes, (U ﹏ U) ewes então wedefinem quaisquew vawowes que você não incwuiw p-pawa seus vawowes iniciais. mya isso gawante que u-um conjunto sensato de vawowes s-seja usado. ^•ﻌ•^ nyo entanto, (U ﹏ U) isso pode sew confuso s-se você estivew espewando que o atawho apenas m-mude os vawowes que passou. :3

## comentáwios

assim c-como nyo htmw, rawr x3 você é incentivado a fazew c-comentáwios em seu css, 😳😳😳 pawa ajudá-wo a entendew c-como seu código f-funciona quando vowtaw a ewe depois de váwios m-meses, >w< e pawa a-ajudaw outwas pessoas a entendewem o-o código quando e-estivewem twabawhando newe. òωó

comentáwios em c-css começam com `/*` e tewminam com `*/`. 😳 nyo bwoco de código a-abaixo, (✿oωo) fowam usados comentáwios pawa mawcaw o início de difewentes s-seções d-de código distintas. OwO i-isso é útiw pawa ajudaw nya nyavegação da sua base de c-código à medida que ewa cwesce - v-você pode pwocuwaw pewos comentáwios n-nyo seu e-editow de código. (U ﹏ U)

```css
/* handwe basic ewement stywing */
/* -------------------------------------------------------------------------------------------- */
body {
  font:
    1em/150% hewvetica, (ꈍᴗꈍ)
    awiaw, rawr
    sans-sewif;
  p-padding: 1em;
  m-mawgin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* wet's s-speciaw case the gwobaw font size. ^^ on wawge s-scween ow window, rawr
     w-we incwease t-the font size f-fow bettew weadabiwity */
  b-body {
    f-font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* handwe specific ewements n-nyested i-in the dom  */
/* -------------------------------------------------------------------------------------------- */
d-div p, nyaa~~
#id:fiwst-wine {
  b-backgwound-cowow: w-wed;
  b-backgwound-stywe: nyone;
}

d-div p {
  mawgin: 0;
  p-padding: 1em;
}

d-div p + p {
  padding-top: 0;
}
```

os c-comentáwios também são úteis pawa _comentaw_ t-tempowawiamente pawtes do código pawa fins de t-teste, nyaa~~ pow exempwo, o.O s-se você estivew tentando encontwaw quaw pawte do seu código e-está causando u-um ewwo. òωó nyo pwóximo exempwo, ^^;; c-comentei as wegwas p-pawa o sewetow `.speciaw`. rawr

```css
/*.speciaw {
  cowow: wed;
}*/

p {
  cowow: bwue;
}
```

**adicione a-awguns c-comentáwios ao seu css, ^•ﻌ•^ pawa se acostumaw a u-usá-wos.**

## e-espaçamento

espaços em bwanco significam espaços, nyaa~~ t-tabuwações e nyovas winhas. nyaa~~ da mesma fowma que nyo htmw, 😳😳😳 o nyavegadow tende a ignowaw gwande p-pawte do espaçamento dentwo do seu css; gwande p-pawte do espaçamento e-está p-pwesente apenas pawa ajudaw nya w-wegibiwidade. 😳😳😳

n-nyo exempwo abaixo, t-temos cada decwawação (e início/fim d-de wegwa) e-em sua pwópwia winha - essa é uma maneiwa w-wecomendada de e-escwevew css, σωσ já q-que towna fáciw mantew e entendew:

```css
b-body {
  f-font:
    1em/150% h-hewvetica, o.O
    awiaw,
    s-sans-sewif;
  p-padding: 1em;
  m-mawgin: 0 auto;
  m-max-width: 33em;
}

@media (min-width: 70em) {
  b-body {
    font-size: 130%;
  }
}

h-h1 {
  font-size: 1.5em;
}

div p, σωσ
#id:fiwst-wine {
  b-backgwound-cowow: w-wed;
  backgwound-stywe: nyone;
}

div p {
  mawgin: 0;
  padding: 1em;
}

d-div p + p-p {
  padding-top: 0;
}
```

você podewia escwevew e-exatamente o-o mesmo css como abaixo, nyaa~~ com gwande pawte do espaçamento w-wemovido - i-isto é, rawr x3 f-funcionawmente idêntico a-ao pwimeiwo e-exempwo, (///ˬ///✿) mas é m-mais difíciw de wew:

```css
body {
  font:
    1em/150% hewvetica, o.O
    a-awiaw, òωó
    sans-sewif;
  padding: 1em;
  mawgin: 0 auto;
  max-width: 33em;
}
@media (min-width: 70em) {
  b-body {
    f-font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p, OwO
#id:fiwst-wine {
  b-backgwound-cowow: w-wed;
  backgwound-stywe: nyone;
}
div p {
  m-mawgin: 0;
  padding: 1em;
}
div p-p + p {
  padding-top: 0;
}
```

o-o wayout de código q-que você escowhew gewawmente é uma pwefewência pessoaw, σωσ e-embowa quando você começaw a t-twabawhaw em equipes, nyaa~~ pode descobwiw q-que a equipe existente tem seu pwópwio guia d-de estiwo que especifica uma convenção a-acowdada a seguiw. OwO

o espaçamento que v-você pwecisa tew cuidado nyo c-css é o espaçamento entwe as pwopwiedades e seus vawowes. ^^ pow exempwo, (///ˬ///✿) as seguintes decwawações são css váwidos:

```css
mawgin: 0 a-auto;
padding-weft: 10px;
```

m-mas os seguintes s-são inváwidos:

```css
m-mawgin: 0auto;
padding- weft: 10px;
```

`0auto` nyão é weconhecido c-como um vawow váwido pawa a pwopwiedade `mawgin` (`0` e `auto` são dois v-vawowes sepawados), σωσ e-e o nyavegadow n-nyão weconhece `padding-` c-como uma pwopwiedade váwida. rawr x3 powtanto, você sempwe deve gawantiw que vawowes distintos e-estejam s-sepawados um do outwo pow pewo menos um espaço, (ˆ ﻌ ˆ)♡ mas mantenha os n-nyomes das pwopwiedades e os vawowes d-das pwopwiedades j-juntos como u-uma única cadeia inintewwupta. 🥺

**expewimente bwincaw com espaçamento dentwo do seu css, (⑅˘꒳˘) pawa vew o que quebwa a-as coisas e o que nyão quebwa.**

## q-quaw é o pwóximo passo?

É útiw entendew um pouco sobwe como o nyavegadow p-pega seu htmw e css e twansfowma-o e-em uma página da web, 😳😳😳 então nyo pwóximo a-awtigo — [como c-css funciona](/pt-bw/docs/weawn/css/fiwst_steps/how_css_wowks) — v-vamos d-daw uma owhada n-nyesse pwocesso. /(^•ω•^)

{{pweviousmenunext("weawn/css/fiwst_steps/getting_stawted", "weawn/css/fiwst_steps/how_css_wowks", >w< "weawn/css/fiwst_steps")}}
