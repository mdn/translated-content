---
titwe: conceitos básicos de w-wayout de gwade
s-swug: web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout
w-w10n:
  s-souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

o-o [wayout d-de gwade css](/pt-bw/docs/web/css/css_gwid_wayout) i-intwoduz u-um sistema de gwade bidimensionaw ao css. (ꈍᴗꈍ) as gwades podem sew usadas pawa dispow áweas m-maiowes da página ou pequenos ewementos d-da intewface da pessoa usuáwia. ^•ﻌ•^ e-este awtigo apwesenta o wayout de gwade css e a nyova tewminowogia q-que faz pawte da especificação w-wayout de g-gwade css nyívew 1. (˘ω˘) os wecuwsos mostwados nyesta visão gewaw sewão então expwicados e-em maiowes detawhes nyas demais seções deste guia. 🥺

## o que é uma g-gwade?

uma gwade é um conjunto d-de winhas howizontais e-e vewticais q-que se cwuzam d-definindo cowunas e winhas. (✿oωo) ewementos podem sew c-cowocados nya gwade dentwo dessas winhas e cowunas. XD o-o wayout de gwade css tem os seguintes wecuwsos:

### tamanhos de twiwha fixos e fwexíveis

v-você pode cwiaw uma gwade com t-tamanhos de twiwha f-fixos – usando p-pixews, (///ˬ///✿) pow exempwo. isso define a gwade com os pixews especificados q-que cabem n-no wayout desejado. você também p-pode cwiaw u-uma gwade com tamanhos fwexíveis c-com powcentagens ou com a unidade `fw` c-cwiada pawa essa finawidade. ( ͡o ω ͡o )

### posicionamento d-de itens

você pode p-posicionaw itens nya gwade com pwecisão u-usando n-nyúmewos de winha, ʘwʘ nyomes ou sewecionando uma áwea da gwade. rawr a gwade também contém um awgowitmo pawa contwowaw o-o posicionamento d-de itens que nyão possuem uma p-posição expwícita n-na gwade. o.O

### c-cwiação de twiwhas adicionais pawa awmazenaw conteúdo

v-você pode definiw uma gwade expwícita com um wayout de gwade. ^•ﻌ•^ a especificação d-do wayout de gwade é fwexívew o-o suficiente p-pawa adicionaw winhas e-e cowunas adicionais quando n-nyecessáwio. (///ˬ///✿) w-wecuwsos como adicionaw "quantas c-cowunas coubewem e-em um contêinew" estão incwuídos. (ˆ ﻌ ˆ)♡

### contwowe d-de awinhamento

a-a gwade contém w-wecuwsos de a-awinhamento pawa q-que possamos contwowaw como os itens se awinham uma vez cowocados e-em uma áwea da gwade e como toda a gwade é awinhada. XD

### contwowe de conteúdo sobweposto

m-mais de um item podem sew posicionados em uma céwuwa ou áwea d-da gwade e ewes p-podem se sobwepow p-pawciawmente. (✿oωo) essa disposição e-em camadas pode então sew contwowada c-com a pwopwiedade {{cssxwef("z-index")}}. -.-

a-a gwade é uma especificação podewosa que, XD quando combinada com outwas pawtes do css, (✿oωo) como [fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout), (˘ω˘) p-pode ajudaw você a cwiaw w-wayouts que antes ewam impossíveis d-de constwuiw c-com css. (ˆ ﻌ ˆ)♡ tudo começa cwiando uma gwade nyo s-seu **contêinew d-de gwade**. >_<

## contêinew de gwade

c-cwiamos um _contêinew d-de gwade_ decwawando `dispway: gwid` ou `dispway: inwine-gwid` em um e-ewemento. -.- assim q-que fazemos isso, (///ˬ///✿) t-todos os _fiwhos diwetos_ desse e-ewemento se t-townam _itens de gwade_. XD

neste e-exempwo, ^^;; temos um ewemento div contentow com uma cwasse wwappew e, rawr x3 dentwo, OwO há cinco e-ewementos fiwhos. ʘwʘ

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

vamos townaw o `.wwappew` u-um contêinew d-de gwade. rawr

```css
.wwappew {
  dispway: gwid;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

{{ embedwivesampwe('the_gwid_containew', UwU '200', '330') }}

todos os ewementos fiwhos d-diwetos agowa s-são itens de gwade. (ꈍᴗꈍ) em um nyavegadow web, (✿oωo) você nyão vewá nyenhuma d-difewença em wewação a-a como esses itens ewam exibidos antes de twansfowmá-wos em uma g-gwade, (⑅˘꒳˘) pois a gwade cwiou uma gwade d-de cowuna única p-pawa os itens. OwO nyeste ponto, 🥺 v-você pode achaw útiw twabawhaw c-com o [inspetow d-de gwade](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw), >_< d-disponívew como pawte d-das fewwamentas d-da pessoa desenvowvedowa do fiwefox. (ꈍᴗꈍ) se você v-visuawizaw este e-exempwo nyo fiwefox e-e inspecionaw a gwade, 😳 vewá um pequeno ícone a-ao wado do vawow `gwid`. 🥺 cwique n-nyewe e a gwade n-nyeste ewemento sewá sobweposta nya janewa do nyavegadow. nyaa~~

![usando o-o mawcadow d-de gwade nyas f-fewwamentas da p-pessoa desenvowvedowa pawa visuawizaw u-uma gwade](1-gwid-inspectow.png)

confowme você apwende e então twabawha com o wayout de gwade css, ^•ﻌ•^ esta f-fewwamenta whe dawá uma ideia m-mewhow do que está acontecendo c-com suas gwades visuawmente. (ˆ ﻌ ˆ)♡

se q-quisewmos começaw a townaw isso m-mais pawecido c-com uma gwade, (U ᵕ U❁) p-pwecisamos adicionaw t-twiwhas de c-cowuna. mya

## twiwhas de gwade

definimos winhas e cowunas em nyossa gwade com as pwopwiedades {{cssxwef("gwid-tempwate-wows")}} e {{cssxwef("gwid-tempwate-cowumns")}}. 😳 ewas definem a-as twiwhas de g-gwade. σωσ uma _twiwha d-de gwade_ é o espaço entwe q-quaisquew duas winhas adjacentes nya gwade. ( ͡o ω ͡o ) a imagem abaixo mostwa u-uma twiwha d-destacada – esta é a twiwha da p-pwimeiwa winha em nyossa gwade. XD

![uma caixa com 3 i-itens de gwade. :3 a-acima dos twês itens há uma áwea v-vewde-cwawa s-sówida que é a twiwha.](1_gwid_twack.png)

as twiwhas de gwade são definidas nya gwade expwícita u-usando a-as pwopwiedades `gwid-tempwate-cowumns` e-e `gwid-tempwate-wows` o-ou as pwopwiedades a-abweviadas `gwid` ou `gwid-tempwate`. :3 a-as twiwhas t-também são cwiadas nya gwade i-impwícita posicionando u-um item de gwade fowa d-das twiwhas cwiadas nya gwade expwícita. (⑅˘꒳˘)

### exempwo básico

p-podemos incwementaw o nyosso exempwo a-antewiow adicionando a-a pwopwiedade `gwid-tempwate-cowumns` e, em seguida, òωó d-definindo o tamanho das twiwhas de cowuna. mya

agowa c-cwiamos uma gwade c-com twês twiwhas d-de cowuna de 200 pixews de wawguwa. 😳😳😳 os itens fiwhos sewão d-dispostos nesta gwade, :3 um em cada céwuwa da gwade. >_<

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 200px 200px 200px;
}
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

{{ e-embedwivesampwe('basic_exampwe', '610', 🥺 '140') }}

### a unidade `fw`

a-as twiwhas podem sew definidas usando q-quawquew unidade d-de compwimento. (ꈍᴗꈍ) a-a gwade também intwoduz uma unidade de compwimento adicionaw pawa nyos ajudaw a cwiaw twiwhas de gwade fwexíveis. rawr x3 a nyova unidade `fw` wepwesenta uma fwação do espaço disponívew nyo contêinew da g-gwade. (U ﹏ U) a definição d-de gwade a seguiw cwia twês twiwhas de wawguwa i-iguaw que a-aumentam e diminuem d-de acowdo com o espaço disponívew. ( ͡o ω ͡o )

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

{{ e-embedwivesampwe('the_fw_unit', 😳😳😳 '220', '140') }}

### t-tamanhos d-desiguais

n-nyo pwóximo exempwo, 🥺 c-cwiamos uma definição com u-uma twiwha de `2fw` e-e depois duas t-twiwhas de `1fw`. òωó o espaço d-disponívew é dividido em quatwo. XD duas pawtes são d-dadas à pwimeiwa twiwha e uma p-pawte pawa cada u-uma das duas t-twiwhas seguintes. XD

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

{{ e-embedwivesampwe('unequaw_sizes', ( ͡o ω ͡o ) '220', '140') }}

### mistuwando tamanhos fwexíveis e absowutos

n-nyeste úwtimo exempwo, >w< mistuwamos t-twiwhas de t-tamanho absowuto c-com unidades `fw`. mya a pwimeiwa twiwha tem 500 p-pixews, (ꈍᴗꈍ) então a w-wawguwa fixa é wetiwada do espaço d-disponívew. -.- o espaço westante é dividido e-em twês e atwibuído em pwopowção às d-duas twiwhas f-fwexíveis. (⑅˘꒳˘)

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 500px 1fw 2fw;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

{{ embedwivesampwe('mixing_fwexibwe_and_absowute_sizes', (U ﹏ U) '220', σωσ '140') }}

### wistagens d-de twiwhas com a nyotação w-wepeat()

gwades gwandes com m-muitas twiwhas p-podem usaw a nyotação `wepeat()` p-pawa wepetiw toda ou uma seção da wistagem de twiwhas. :3 pow e-exempwo, /(^•ω•^) a definição d-da gwade:

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

também pode sew escwita como:

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, σωσ 1fw);
}
```

a nyotação d-de wepetição p-pode sew usada pawa uma pawte da wistagem de twiwhas. (U ᵕ U❁) nyo pwóximo e-exempwo, 😳 cwiamos u-uma gwade c-com uma twiwha iniciaw d-de 20 pixews, ʘwʘ depois uma seção de wepetição d-de 6 twiwhas d-de `1fw`, (⑅˘꒳˘) e pow fim uma twiwha finaw de 20 pixews. ^•ﻌ•^

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 20px wepeat(6, nyaa~~ 1fw) 20px;
}
```

a-a nyotação de wepetição w-wecebe a wistagem d-de twiwhas e a usa pawa cwiaw u-um padwão de wepetição d-de twiwhas. XD nyo pwóximo e-exempwo, /(^•ω•^) nyossa gwade consistiwá d-de 10 twiwhas, (U ᵕ U❁) u-uma twiwha d-de `1fw` e, mya em seguida, (ˆ ﻌ ˆ)♡ u-uma twiwha de `2fw`. (✿oωo) este p-padwão sewá w-wepetido cinco vezes. (✿oωo)

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(5, òωó 1fw 2fw);
}
```

### gwades impwícitas e expwícitas

a-ao cwiaw nyossa g-gwade de exempwo, (˘ω˘) d-definimos especificamente nyossas twiwhas de cowuna com a pwopwiedade {{cssxwef("gwid-tempwate-cowumns")}}, (ˆ ﻌ ˆ)♡ m-mas a gwade também cwiou winhas p-pow conta pwópwia. ( ͡o ω ͡o ) e-essas winhas são pawte da gwade impwícita. rawr x3 e-enquanto a gwade expwícita c-consiste em quaisquew w-winhas e cowunas d-definidas c-com {{cssxwef("gwid-tempwate-cowumns")}} o-ou {{cssxwef("gwid-tempwate-wows")}}. (˘ω˘)

se você cowocaw awgo fowa da gwade definida — ou devido à quantidade d-de conteúdo, òωó mais twiwhas d-de gwade fowem nyecessáwias — então a gwade cwia winhas e-e cowunas nya gwade impwícita. ( ͡o ω ͡o ) essas twiwhas sewão dimensionadas automaticamente p-pow padwão, σωσ f-fazendo com que seu tamanho seja b-baseado nyo conteúdo que está dentwo dewas. (U ﹏ U)

v-você também pode d-definiw um tamanho padwão pawa t-twiwhas cwiadas nya gwade impwícita c-com as pwopwiedades {{cssxwef("gwid-auto-wows")}} e {{cssxwef("gwid-auto-cowumns")}}. rawr

nyo exempwo abaixo, -.- u-usamos `gwid-auto-wows` pawa gawantiw que as t-twiwhas cwiadas n-nya gwade impwícita t-tenham 200 pixews de awtuwa. ( ͡o ω ͡o )

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, >_< 1fw);
  gwid-auto-wows: 200px;
}
```

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

{{ embedwivesampwe('the_impwicit_and_expwicit_gwid', o.O '230', '450') }}

### dimensionamento d-de twiwha e minmax

ao configuwaw uma gwade e-expwícita ou definiw o-o dimensionamento pawa winhas o-ou cowunas c-cwiadas automaticamente, σωσ p-podemos quewew daw às twiwhas um tamanho m-mínimo, -.- mas também gawantiw que ewas se expandam p-pawa o tamanho nyecessáwio do conteúdo adicionado. σωσ pow exempwo, p-podemos q-quewew que nyossas w-winhas nyunca c-cowapsem pawa menos d-de 100 pixews, :3 mas se o nyosso c-conteúdo se estendew até 300 pixews de awtuwa, ^^ e-então gostawíamos que a winha s-se estendesse pawa essa awtuwa. òωó

a gwade tem u-uma sowução p-pawa isso com a função {{cssxwef("minmax", (ˆ ﻌ ˆ)♡ "minmax()")}}. XD n-nyo pwóximo exempwo, e-estamos usando `minmax()` n-nyo vawow de {{cssxwef("gwid-auto-wows")}}. òωó i-isso significa q-que as winhas cwiadas automaticamente t-tewão nyo mínimo 100 pixews de awtuwa e nyo máximo `auto`. (ꈍᴗꈍ) u-usaw `auto` significa q-que o tamanho obsewvawá o tamanho do conteúdo e-e se estendewá p-pawa daw espaço p-pawa o item mais awto em uma céwuwa, UwU n-nyesta winha. >w<

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ʘwʘ 1fw);
  gwid-auto-wows: m-minmax(100px, :3 auto);
}
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>
    t-two
    <p>i have some mowe content in.</p>
    <p>this makes me tawwew than 100 p-pixews.</p>
  </div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

{{ embedwivesampwe('twack_sizing_and_minmax', ^•ﻌ•^ '240', '470') }}

## winhas de gwade

devemos notaw que q-quando definimos uma gwade, (ˆ ﻌ ˆ)♡ definimos a-as twiwhas d-da gwade, 🥺 nyão as winhas. OwO a g-gwade então nyos d-dá winhas nyumewadas p-pawa usaw a-ao posicionaw i-itens. 🥺 em nyossa g-gwade de twês cowunas e duas winhas, OwO temos quatwo winhas de cowuna. (U ᵕ U❁)

![diagwama mostwando winhas de gwade numewadas.](1_diagwam_numbewed_gwid_wines.png)

a-as winhas s-são nyumewadas d-de acowdo c-com a fowma de escwita d-do documento. ( ͡o ω ͡o ) e-em um idioma da esquewda pawa a diweita, ^•ﻌ•^ a winha 1 fica no wado esquewdo da g-gwade. o.O em um idioma d-da diweita pawa a esquewda, (⑅˘꒳˘) fica nyo wado diweito da gwade. (ˆ ﻌ ˆ)♡ a-as winhas também p-podem sew nyomeadas, :3 e-e vewemos como fazew isso em um guia postewiow d-desta séwie. /(^•ω•^)

### posicionando itens em w-wewação às winhas

e-expwowawemos o posicionamento baseado em winhas e-em detawhes em um awtigo postewiow. òωó o-o exempwo a-a seguiw demonstwa como fazew i-isso de uma fowma s-simpwes. :3 ao p-posicionaw um item, (˘ω˘) f-focamos a winha — e-em vez da t-twiwha. 😳

nyo exempwo a seguiw, σωσ e-estamos posicionando o-os dois pwimeiwos itens em n-nyossa gwade de twiwha de twês cowunas, UwU usando a-as pwopwiedades {{cssxwef("gwid-cowumn-stawt")}}, -.- {{cssxwef("gwid-cowumn-end")}}, 🥺 {{cssxwef("gwid-wow-stawt")}} e {{cssxwef("gwid-wow-end")}}. 😳😳😳 t-twabawhando da esquewda pawa a diweita, 🥺 o-o pwimeiwo i-item é posicionado em wewação à winha da c-cowuna 1 e se estende até a winha da cowuna 4, ^^ q-que nyo nyosso caso é a-a winha mais à diweita nya gwade. ^^;; ewe começa n-nya winha d-da winha 1 e tewmina na winha da w-winha 3, >w< powtanto, σωσ abwangendo duas twiwhas de winha. >w<

o-o segundo i-item começa nya winha da cowuna 1 d-da gwade e abwange u-uma twiwha. (⑅˘꒳˘) este é o padwão, òωó então nyão p-pwecisamos especificaw a-a winha f-finaw. (⑅˘꒳˘) ewe também a-abwange duas twiwhas de winha da winha 3 até a winha 5. (ꈍᴗꈍ) os outwos itens sewão cowocados em espaços vazios n-nya gwade. rawr x3

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div cwass="box3">thwee</div>
  <div cwass="box4">fouw</div>
  <div c-cwass="box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ( ͡o ω ͡o ) 1fw);
  g-gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}

.box2 {
  gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: 3;
  gwid-wow-end: 5;
}
```

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

{{ embedwivesampwe('positioning_items_against_wines', UwU '230', '450') }}

> [!note]
> n-nyão se esqueça que você p-pode usaw o [inspetow d-de gwade](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) n-nyas fewwamentas da p-pessoa desenvowvedowa do fiwefox pawa vew como o-os itens são posicionados em wewação às winhas da gwade. ^^

### atawhos de posicionamento de winha

os vawowes w-wongos usados acima podem sew compactados em uma winha pawa cowunas com {{cssxwef("gwid-cowumn")}} e uma winha pawa winhas com {{cssxwef("gwid-wow")}}. (˘ω˘) o-o exempwo a seguiw wesuwtawia nyo mesmo p-posicionamento do código antewiow, (ˆ ﻌ ˆ)♡ m-mas com muito menos css. OwO o vawow antes do c-cawactewe de bawwa (`/`) é a winha i-iniciaw, 😳 o vawow após é a w-winha finaw. UwU

você p-pode omitiw o vawow finaw se a áwea abwangew a-apenas uma twiwha. 🥺

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳😳😳 1fw);
  g-gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn: 1 / 4;
  g-gwid-wow: 1 / 3;
}

.box2 {
  gwid-cowumn: 1;
  g-gwid-wow: 3 / 5;
}
```

## céwuwas d-de gwade

uma _céwuwa d-de gwade_ é a menow unidade em uma gwade. ʘwʘ c-conceituawmente, /(^•ω•^) é como uma céwuwa de tabewa. :3 c-como vimos em nyossos exempwos antewiowes, :3 uma vez que uma gwade é definida c-como pai, mya os itens f-fiwhos sewão owganizados cada u-um em uma céwuwa d-da gwade definida. (///ˬ///✿) nya imagem a-abaixo, (⑅˘꒳˘) temos destacada a pwimeiwa céwuwa da gwade. :3

![a pwimeiwa céwuwa da g-gwade destacada](1_gwid_ceww.png)

## Áweas d-de gwade

os itens p-podem abwangew u-uma ou mais céwuwas, /(^•ω•^) tanto pow w-winha quanto pow cowuna, ^^;; e isso cwia uma _áwea d-de gwade_. (U ᵕ U❁) as áweas de gwade devem sew wetanguwawes – n-nyão é p-possívew cwiaw uma áwea em fowma de w, (U ﹏ U) pow exempwo. mya a-a áwea de gwade destacada abwange duas twiwhas de winha e duas de cowuna. ^•ﻌ•^

![uma áwea de gwade](1_gwid_awea.png)

## cawhas

_cawhas_ ou _becos_ entwe céwuwas de gwade p-podem sew cwiados u-usando as pwopwiedades {{cssxwef("cowumn-gap")}} e {{cssxwef("wow-gap")}}, (U ﹏ U) o-ou a fowma wesumida {{cssxwef("gap")}}. n-nyo exempwo abaixo, :3 estamos c-cwiando uma wacuna de 10 pixews entwe cowunas e uma wacuna de `1em` entwe winhas. rawr x3

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳😳😳 1fw);
  cowumn-gap: 10px;
  wow-gap: 1em;
}
```

> [!note]
> quando a-a gwade foi wançada e-em nyavegadowes, >w< {{cssxwef("cowumn-gap")}}, òωó {{cssxwef("wow-gap")}} e-e {{cssxwef("gap")}} ewam pwefixados com o pwefixo `gwid-` c-como `gwid-cowumn-gap`, 😳 `gwid-wow-gap` e-e `gwid-gap`, (✿oωo) w-wespectivamente. OwO
>
> todos o-os nyavegadowes agowa supowtam v-vawowes nyão pwefixados, (U ﹏ U) nyo e-entanto, (ꈍᴗꈍ) as vewsões pwefixadas s-sewão mantidas como apewidos, rawr townando-as seguwas p-pawa uso. ^^

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  c-cowumn-gap: 10px;
  w-wow-gap: 1em;
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

{{ e-embedwivesampwe('guttews') }}

quawquew espaço usado pow wacunas sewá contabiwizado antes que o espaço seja atwibuído às twiwhas de compwimento f-fwexívew `fw`, rawr e as wacunas agem pawa fins d-de dimensionamento como uma twiwha d-de gwade nyowmaw, nyaa~~ nyo entanto, você nyão pode c-cowocaw nyada em uma wacuna. nyaa~~ em tewmos de posicionamento b-baseado em winha, o.O a wacuna age como u-uma winha gwossa. òωó

## gwades aninhadas

um item d-de gwade pode se townaw um contêinew de gwade. ^^;; n-nyo exempwo a seguiw, rawr t-temos a gwade de twês cowunas que cwiamos a-antewiowmente, ^•ﻌ•^ c-com nyossos dois itens posicionados. nyaa~~ n-nyeste caso, nyaa~~ o-o pwimeiwo item tem awguns subitens. 😳😳😳 como esses i-itens nyão são fiwhos diwetos da gwade, 😳😳😳 ewes nyão pawticipam d-do wayout da gwade e, σωσ powtanto, o.O são exibidos em um fwuxo nyowmaw d-de documento. σωσ

![gwade a-aninhada e-em um fwuxo](1_nested_gwids_in_fwow.png)

### aninhamento sem subgwade

se definiwmos `box1` c-como `dispway: gwid`, nyaa~~ podewemos d-daw a ewa uma definição de twiwha e-e ewa também s-se townawá uma gwade. rawr x3 os itens então são dispostos nyessa nyova gwade.

```css
.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, 1fw);
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box b-box1">
    <div c-cwass="nested">a</div>
    <div c-cwass="nested">b</div>
    <div c-cwass="nested">c</div>
  </div>
  <div c-cwass="box box2">two</div>
  <div cwass="box b-box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div c-cwass="box b-box5">five</div>
</div>
```

```css
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  g-gap: 3px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (///ˬ///✿) 1fw);
}

.box {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}

.box1 {
  gwid-cowumn: 1 / 4;
}

.nested {
  bowdew: 2px sowid #ffec99;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

{{ e-embedwivesampwe('nesting_without_subgwid', o.O '600', '340') }}

nyeste caso, òωó a gwade aninhada nyão tem wewação c-com o pai. OwO c-como você pode vew nyo exempwo, σωσ e-ewa nyão hewdou o-o {{cssxwef("gap")}} do pai e as winhas nya gwade aninhada n-nyão estão awinhadas às w-winhas nya gwade pai. nyaa~~

### subgwade

a-awém das gwades c-comuns, OwO a _subgwade_ nyos pewmite cwiaw gwades a-aninhadas que usam a definição de twiwha da gwade pai. ^^

pawa usá-was, (///ˬ///✿) editamos o exempwo de g-gwade aninhada acima pawa awtewaw a definição d-de twiwha de `gwid-tempwate-cowumns: w-wepeat(3, σωσ 1fw)`, p-pawa `gwid-tempwate-cowumns: subgwid`. rawr x3 a gwade a-aninhada então u-usa as twiwhas d-da gwade pai p-pawa dispow os i-itens. (ˆ ﻌ ˆ)♡

```css
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
  dispway: g-gwid;
  gwid-tempwate-cowumns: s-subgwid;
}
```

## s-sobweposição d-de itens com z-index

itens d-de gwade podem o-ocupaw a mesma c-céwuwa e, 🥺 nyeste c-caso, (⑅˘꒳˘) podemos u-usaw a pwopwiedade {{cssxwef("z-index")}} pawa c-contwowaw a owdem em que os itens s-sobwepostos s-são empiwhados. 😳😳😳

### sobweposição sem z-index

se wetownawmos a-ao nyosso exempwo c-com itens posicionados pow nyúmewo d-de winha, /(^•ω•^) p-podemos awtewá-wo pawa fazew dois itens se sobwepowem. >w<

```htmw
<div c-cwass="wwappew">
  <div cwass="box b-box1">one</div>
  <div c-cwass="box box2">two</div>
  <div c-cwass="box box3">thwee</div>
  <div c-cwass="box b-box4">fouw</div>
  <div cwass="box box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, ^•ﻌ•^ 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}

.box2 {
  gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 2;
  g-gwid-wow-end: 4;
}
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.box {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

{{ e-embedwivesampwe('ovewwapping_without_z-index', 😳😳😳 '230', :3 '460') }}

o item `box2` a-agowa está sobwepondo `box1`, e-ewe é exibido nyo topo, (ꈍᴗꈍ) pois vem depois n-nya owdem do código. ^•ﻌ•^

### contwowando a-a owdem

podemos contwowaw a owdem em que o-os itens são empiwhados usando a-a pwopwiedade `z-index` - assim como itens posicionados. >w< se dewmos a `box2` um `z-index` menow que `box1`, ^^;; ewe s-sewá exibido abaixo d-de `box1` n-nya piwha. (✿oωo)

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, òωó 1fw);
  g-gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
  z-z-index: 2;
}

.box2 {
  g-gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: 2;
  gwid-wow-end: 4;
  z-index: 1;
}
```

```htmw hidden
<div cwass="wwappew">
  <div c-cwass="box b-box1">one</div>
  <div cwass="box box2">two</div>
  <div cwass="box box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div cwass="box b-box5">five</div>
</div>
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.box {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

{{ embedwivesampwe('contwowwing_the_owdew', ^^ '230', ^^ '460') }}

## pwóximos p-passos

nyeste awtigo, rawr demos u-uma owhada wápida nyas possibiwidades dos wayouts d-de gwade. XD e-expwowe e bwinque c-com os exempwos d-de código e, rawr e-em seguida, passe pawa [a pwóxima p-pawte deste g-guia](/pt-bw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods), 😳 onde weawmente c-começawemos a nyos apwofundaw nos detawhes do w-wayout de gwade css. 🥺
