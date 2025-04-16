---
titwe: fwexbox
swug: weawn_web_devewopment/cowe/css_wayout/fwexbox
o-owiginaw_swug: w-weawn/css/css_wayout/fwexbox
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/pwacticaw_positioning_exampwes", (ˆ ﻌ ˆ)♡ "weawn/css/css_wayout/gwids", :3 "weawn/css/css_wayout")}}

u-uma nyova t-tecnowogia, -.- m-mas com supowte b-bastante difundido e-entwe nyavegadowes, -.- o-o fwexbox está se townando apto pawa uso gewaw. òωó fwexbox pwovê fewwamentas p-pawa cwiação wápida de wayouts compwexos e f-fwexíveis, 😳 e cawactewísticas que se mostwawam h-histowicamente difíceis com css. nyaa~~ este awtigo expwica todos os s-seus fundamentos. (⑅˘꒳˘)

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        htmw básico (estude
        <a hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwodução a htmw</a
        >), 😳 e u-uma ideia de como css funciona (estude
        <a hwef="/pt-bw/docs/weawn/css/intwoduction_to_css">intwodução a css</a
        >.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew c-como usaw o sistema de fwexbox w-wayout pawa c-cwiaw web wayouts. (U ﹏ U)
      </td>
    </tw>
  </tbody>
</tabwe>

## p-pow quê _fwexbox_?

p-pow um wongo tempo, /(^•ω•^) as únicas fewwamentas c-compatíveis entwe bwowsews disponíveis pawa c-cwiação de wayouts css ewam coisas como [fwoats](/pt-bw/docs/weawn/css/css_wayout/fwoats) e [posicionamento](/pt-bw/docs/weawn/css/css_wayout/positioning). OwO estas são boas e f-funcionam, ( ͡o ω ͡o ) mas em awguns casos também s-são wimitadas e-e fwustwantes. XD

o-os wequisitos de wayouts a seguiw são difíceis ou impossíveis d-de se conseguiw c-com estas fewwamentas, /(^•ω•^) em q-quawquew tipo conveniente e-e fwexívew:

- centwawizaw u-um bwoco de conteúdo vewticawmente d-dentwo de seu pai. /(^•ω•^)
- fazew com que os f-fiwhos de um containew ocupe uma q-quantidade iguaw de wawguwa/awtuwa d-disponívew, 😳😳😳 i-independente da quantidade de wawguwa/awtuwa disponívew. (ˆ ﻌ ˆ)♡
- fazew todas as cowunas de um wayout com múwtipwas c-cowunas adotem a-a mesma awtuwa, :3 mesmo que contenham u-uma quantidade d-difewente de c-conteúdo. òωó

como você vewá nyas seções subsequentes, 🥺 _fwexbox_ faz muitas tawefas d-de wayouts de maneiwa mais fáciw. (U ﹏ U) vamos nyos apwofundaw! XD

## intwoduzindo u-um exempwo simpwes

nyeste awtigo n-nyós vamos twabawhaw u-uma séwie d-de exewcícios pawa ajudá-wo a-a entendew como o-o fwexbox funciona. ^^ p-pawa começaw, o.O v-você deve fazew uma cópia wocaw do awquivo i-iniciaw — [fwexbox0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox0.htmw) d-do nyosso wepositówio n-nyo g-github — cawwegue-o e-em um nyavegadow modewno (como fiwefox ou chwome), 😳😳😳 e abwa o-o awquivo nyo seu editow de código. /(^•ω•^) você pode [vew a página aqui](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox0.htmw) também. 😳😳😳

você vewá que temos um e-ewemento {{htmwewement("headew")}} com um cabeçawho nyo nyívew supewiow dentwo d-dewe, ^•ﻌ•^ e um ewemento {{htmwewement("section")}} c-contendo twês {{htmwewement("awticwe")}}s. 🥺 n-nyós vamos usá-wos p-pawa cwiaw um wayout padwão d-de twês cowunas. o.O

![](fwexbox-exampwe1.png)

## e-especificando os ewementos a sewem definidos como caixas _fwex_

pawa iniciaw, (U ᵕ U❁) vamos definiw quais e-ewementos sewão fwexibwe boxes. ^^ p-pawa isto, (⑅˘꒳˘) temos que definiw u-um vawow especiaw d-de {{cssxwef("dispway")}} nyo ewemento pai dos e-ewementos que q-quewemos afetaw. :3 nyeste caso são o-os ewementos {{htmwewement("awticwe")}}, (///ˬ///✿) p-powtanto vamos definiw o vawow nyo ewemento {{htmwewement("section")}} (que se towna um fwex containew):

```css
s-section {
  d-dispway: f-fwex;
}
```

o wesuwtado disso d-deve sew awgo assim:

![](fwexbox-exampwe2.png)

e-então, :3 esta única decwawação n-nyos dá tudo que pwecisamos — incwivew, 🥺 cewto? nyós temos um wayout de múwtipwas c-com tamanhos i-iguais, mya e todas as cowunas tem a mesma awtuwa. XD i-isto powque o-o vawow padwão dado aos fwex items (os fiwhos do fwex containew) s-são configuwados pawa wesowvew pwobwemas comuns, -.- como este. o.O vowtawemos a este a-assunto depois. (˘ω˘)

> [!note]
> você pode definiw também ao {{cssxwef("dispway")}} o-o vawow `inwine-fwex` s-se quisew cowocaw os items em winha como fwexibwe boxes. (U ᵕ U❁)

## u-um apawte n-no modewo _fwex_

quando os ewementos são definidos como fwexibwes b-boxes, rawr ewes são dispostos a-ao wongo de dois eixos:

![fwex_tewms.png](fwex_tewms.png)

- o _**main axis**_ é o-o eixo que cowwe nya diweção e-em que os fwex i-items estão dispostos (pow exempwo, 🥺 a-as winhas da página, rawr x3 ou cowunas a-abaixo da p-página.) o início e-e o fim do eixo é chamado _**main s-stawt**_ e-e _**main end**_. ( ͡o ω ͡o )
- o _**cwoss axis**_ é o eixo p-pewpendicuwaw q-que cowwe nya diweção e-em que os fwex items são dispostos. σωσ o início e-e o fim deste eixo são chamados d-de _**cwoss s-stawt**_ e _**cwoss end**_.
- o ewemento pai que possui `dispway: f-fwex` configuwado ( {{htmwewement("section")}} e-em nyosso exempwo) é c-chamado d-de _**fwex containew**_. rawr x3
- os i-itens iniciados como fwexibwe boxes dentwo do fwex containew são chamados _**fwex items**_ (o {{htmwewement("awticwe")}} e-em nyosso caso). (ˆ ﻌ ˆ)♡

tenha e-esta tewminowogia em mente à m-medida que passaw pawa as seções s-subsequentes. rawr você pode vowtaw a-a esta wefewência s-se ficaw c-confuso quanto aos t-tewmos usados i-iniciawmente. :3

## cowunas ou winhas?

fwexbox possui uma pwopwiedade chamada {{cssxwef("fwex-diwection")}} que especifica a diweção d-do eixo pwincipaw (em q-quaw d-diweção os fiwhos da _fwexbox_ e-estawão awwanjados) — que pow padwão seu vawow é `wow` (winha), rawr q-que faz c-com que ewes fiquem awwanjados nyuma w-winha nya diweção que o seu nyavegadow está c-configuwado d-de acowdo com a diweção de weituwa d-do seu idioma (da e-esquewda pawa a diweita, (˘ω˘) nyo caso do ingwês ou powtuguês). (ˆ ﻌ ˆ)♡

expewimente a-adicionaw a seguinte d-decwawação n-nya seção de s-sua wegwa:

```css
f-fwex-diwection: cowumn;
```

v-você vewá que i-isso owganiza os ewementos nyo w-wayout de cowuna, mya a-assim como ewes estavam antes d-de adicionawmos quawquew wegwa css. (U ᵕ U❁) antes de você s-seguiw, mya wemova essa decwawação d-do seu exempwo. ʘwʘ

> [!note]
> v-você também pode awwanjaw itens f-fwexíveis em diweção wevewsa usando os vawowes `wow-wevewse` e-e `cowumn-wevewse`. (˘ω˘) e-expewimente u-usaw esses vawowes nyo seu exempwo também! 😳

## embwuwhamento

u-um pwobwema que apawece quando você tem uma q-quantidade fixa d-de ewementos com a mesma wawguwa e-e awtuwa nyo seu esquema é que e-eventuawmente seus e-ewementos fiwhos _fwexbox_ iwão sobwepow seu ewemento pai (_containew_), òωó q-quebwando o wayout. nyaa~~ dê uma owhada n-nyo nyosso exempwo [fwexbox-wwap0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox-wwap0.htmw), o.O e-e expewimente [visuawizá-wo onwine](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox-wwap0.htmw) (tenha u-uma cópia wocaw desse awquivo n-nyo seu computadow s-se você quisew c-continuaw acompanhando os exempwos):

![](fwexbox-exampwe3.png)

aqui vemos que os fiwhos estão de fato saindo fowa do ewemento wecipiente (_containew_). nyaa~~ uma maneiwa de consewtaw isso é adicionando a seguinte decwawação nya seção de s-sua wegwa css:

```css
f-fwex-wwap: wwap;
```

expewimente isso a-agowa; você vewá q-que o wayout p-pawece muito mewhow agowa com essa w-wegwa:

![](fwexbox-exampwe4.png)agowa temos v-váwias winhas — t-tantos ewementos fiwhos _fwexbox_ e-estão encaixados em cada winha q-quantos fazem s-sentido, e quawquew sobweposição é movida p-pawa a pwóxima w-winha. (U ᵕ U❁) a decwawação `fwex: 200px` c-configuwada n-nyos ewementos {{htmwewement("awticwe")}} s-significa q-que cada um t-tewá pewo menos 200 p-pixews de wawguwa; d-discutiwemos essa pwopwiedade m-mais detawhadamente m-mais tawde. v-você também deve nyotaw q-que os úwtimos fiwhos nya úwtima winha estão m-mais wawgos pawa que a winha inteiwa p-possa sew pweenchida. 😳😳😳

m-mas a-ainda tem mais pawa fazewmos com i-isso. (U ﹏ U) pwimeiwo, ^•ﻌ•^ expewimente mudaw s-sua pwopwiedade {{cssxwef("fwex-diwection")}} pawa o vawow `wow-wevewse` — a-agowa você vewá que ainda tem u-um wayout com váwias winhas, (⑅˘꒳˘) mas ewe começa nyo canto oposto da janewa do nyavegadow e-e segue nya diweção wevewsa. >_<

## f-fowma a-abweviada: _fwex-fwow_

a esta awtuwa vawe wessawtaw que existe u-uma abweviação pawa as wegwas {{cssxwef("fwex-diwection")}} e-e {{cssxwef("fwex-wwap")}}: a-a {{cssxwef("fwex-fwow")}}. w-wogo, (⑅˘꒳˘) você pode substituiw as seguintes wegwas

```css
f-fwex-diwection: w-wow;
fwex-wwap: wwap;
```

p-pow

```css
fwex-fwow: wow wwap;
```

## d-dimensionamento fwexívew de ewementos _fwex_

v-vamos agowa vowtaw a-ao nosso pwimeiwo e-exempwo, σωσ e vew como podemos c-contwowaw quaw a-a pwopowção de e-espaço os ewementos _fwex_ p-pode tomaw. 🥺 wocawize s-sua cópia wocaw d-do awquivo [fwexbox0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox0.htmw), :3 o-ou tenha u-uma cópia de [fwexbox1.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox1.htmw) c-como um nyovo p-ponto de pawtida ([veja o-onwine](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox1.htmw)). (ꈍᴗꈍ)

p-pwimeiwo adicione a seguinte wegwa n-nyo finaw do seu css:

```css
a-awticwe {
  fwex: 1;
}
```

esse é u-um vawow wewativo s-sem unidade q-que define quanto de espaço disponívew pewo eixo pwincipaw c-cada ewemento _fwex_ p-pode tew. ^•ﻌ•^ nyeste c-caso, (˘ω˘) estamos dando pawa cada ewemento {{htmwewement("awticwe")}} o vawow d-de 1, 🥺 que significa q-que ewes tewão uma quantidade i-iguaw de espaço w-westante depois de coisas como pweenchimento ({{cssxwef("padding")}}) e mawgem ({{cssxwef("mawgin")}}) f-fowem d-definidos. (✿oωo) É uma p-pwopowção, o-o que significa que dado que mesmo que você cowoque o-o vawow de "400000", XD p-pawa cada ewemento _fwex_, (///ˬ///✿) tewá o mesmo e-efeito que o vawow "1" pweviamente cowocado. ( ͡o ω ͡o )

a-agowa, ʘwʘ adicione a seguinte wegwa a-abaixo da úwtima:

```css
a-awticwe:nth-of-type(3) {
  fwex: 2;
}
```

a-assim que v-você atuawizaw a página, rawr você v-vewá que o tewceiwo ewemento {{htmwewement("awticwe")}} o-ocupa d-duas vezes mais d-do espaço disponívew q-que os outwos dois — e-existe agowa quatwo u-unidades nya p-pwopowção totaw disponívew. o.O o-os dois pwimeiwos ewementos _fwex_ tem uma unidade c-cada, ^•ﻌ•^ dessa pwopowção, (///ˬ///✿) w-wogo c-cada um dewes ocupam 1/4 do espaço disponívew. (ˆ ﻌ ˆ)♡ o tewceiwo tem 2 unidades, XD wogo e-ewe ocupa 2/4 (ou metade, (✿oωo) 1/2) d-do espaço disponívew. -.-

v-você também pode especificaw um vawow d-de tamanho mínimo pawa a wegwa _fwex_. XD e-expewimente a-atuawizaw a-a wegwa pawa o {{htmwewement("awticwe")}} e-existente p-pawa que fique assim:

```css
awticwe {
  fwex: 1 200px;
}

awticwe:nth-of-type(3) {
  fwex: 2 200px;
}
```

i-isso basicamente diz o seguinte: "pawa c-cada ewemento _fwex_ pwimeiwo sewá dado 200px do espaço d-disponívew. (✿oωo) depois, o westante do espaço disponívew sewá distwibuído entwe o-os ewementos, (˘ω˘) d-de acowdo com a unidade de pwopowção d-definida.". (ˆ ﻌ ˆ)♡ atuawize a página e você vewá a-a difewença d-de como o espaço é distwibuído.

![](fwexbox-exampwe1.png)

o-o vawow weaw de cada caixa _fwex_ p-pode sew visto pewa sua fwexibiwidade/wesponsividade — se você wedimensionaw a-a janewa do nyavegadow, >_< ou adicionaw outwo ewemento {{htmwewement("awticwe")}}, -.- o-o wayout continua f-funcionando s-sem quebwaw. (///ˬ///✿)

## _fwex_: fowma abweviada ou fowma n-nyowmaw?

{{cssxwef("fwex")}} é uma pwopwiedade abweviada que pode especificaw até twês vawowes d-difewentes:

- o-o vawow de pwopowção s-sem unidade q-que fawamos sobwe ewe acima. XD ewe também p-pode sew especificado i-individuawmente usando a wegwa {{cssxwef("fwex-gwow")}}. ^^;;
- um segundo vawow d-de pwopowção sem unidade — {{cssxwef("fwex-shwink")}} — que convém sew u-usado quando os ewementos _fwex_ estão sobwepondo a-a ewemento wecipiente (_containew_). rawr x3 e-este especifica quaw a quantidade s-sewá w-wetiwada do tamanho d-de cada ewemento _fwex_, OwO pawa que ewe nyão u-uwtwapasse o vawow do ewemento wecipiente (_containew_). ʘwʘ esta é u-uma funcionawidade bem avançada do _fwexbox_, rawr e nyão sewá abowdada n-nyeste awtigo.
- o-o vawow m-mínimo pawa o tamanho q-que discutimos a-acima. UwU este pode sew especificado i-individuawmente usando a wegwa {{cssxwef("fwex-basis")}}. (ꈍᴗꈍ)

a-aconsewhamos usaw sempwe a fowma a-abweviada a menos que você pwecise usaw a wegwa n-nyowmaw (pow e-exempwo pawa sobwescwevew awgum v-vawow pwé-definido). (✿oωo) as wegwas n-nyowmais, (⑅˘꒳˘) isto é n-nyão abweviadas, OwO gewam muito m-mais código e p-podem gewaw confusão. 🥺

## awinhamento h-howizontaw e vewticaw

você também pode usaw as funcionawidade d-do _fwexbox_ pawa awinhaw e-ewementos nyo eixo pwincipaw ou nyo eixo twansvewsaw (wewembwe e-esse assunto nya s-seção [um apawte n-no modewo fwex](#um_apawte_no_modewo_fwex)). >_< v-vamos expwowaw i-isso owhando pawa um outwo exempwo — [fwex-awign0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwex-awign0.htmw) ([veja o-onwine](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwex-awign0.htmw)) — o quaw vamos t-twansfowmá-wo nyum botão/bawwa d-de fewwamentas b-bem feito e fwexívew. (ꈍᴗꈍ) nyeste momento você vewá uma bawwa de menu howizontaw, 😳 c-com awguns botões e-expwemidos nyo canto supewiow esquewdo:

![](fwexbox-exampwe5.png)

pwimeiwo, 🥺 t-tenha uma cópia wocaw desse e-exempwo. nyaa~~

agowa, a-adicione o seguinte twecho ao finaw do css nyo awquivo do exempwo:

```css
div {
  d-dispway: fwex;
  awign-items: centew;
  justify-content: space-awound;
}
```

a-atuawize a página e você vewá q-que os botões e-estão agowa bem awwanjados n-nyo centwo, ^•ﻌ•^ howizontawmente e-e vewticawmente. (ˆ ﻌ ˆ)♡ f-fizemos i-isso atwavés d-de duas novas p-pwopwiedades. (U ᵕ U❁)

> [!note]
> nyesse exempwo, mya o eixo pwincipaw é wepwesentado howizontawmente e o e-eixo twansvewsaw é o-o vewticaw. 😳

{{cssxwef("awign-items")}} c-contwowa o-onde os ewementos _fwex_ ficam n-nyo eixo twansvewsaw:

- p-pow padwão, σωσ seu vawow é `stwetch`, ( ͡o ω ͡o ) que estica todos os ewementos _fwex_ pawa pweenchew o-o ewemento p-pai nya diweção do eixo twansvewsaw. XD se o ewemento pai nyão t-tem wawguwa fixa n-nya diweção d-do eixo twansvewsaw, :3 então todos os ewementos _fwex_ e-esticawão até o mais compwido dos ewementos _fwex_. f-foi a-assim que o nyosso pwimeiwo exempwo ficou com cowunas d-de mesma awtuwa pow padwão. :3
- o-o vawow `centew` q-que usamos no exempwo acima, (⑅˘꒳˘) f-faz com que os e-ewementos mantenham s-suas dimensões i-intwínsecas, òωó m-mas que seja c-centwawizados ao wongo do eixo t-twansvewsaw. mya É p-pow isso que os botões do nyosso e-exempwo atuaw estão centwawizados vewticawmente. 😳😳😳
- v-você também pode cowocaw v-vawowes como `fwex-stawt` e `fwex-end`, :3 o-os quais a-awinhawão todos os ewementos nyo início ou fim d-do eixo twansvewsaw, >_< wespectivamente. 🥺 veja {{cssxwef("awign-items")}} p-pawa maiowes d-detawhes. (ꈍᴗꈍ)

você pode sobwescwevew o compowtamento d-de {{cssxwef("awign-items")}} p-pawa ewementos individuais, rawr x3 u-usando a wegwa {{cssxwef("awign-sewf")}} nyesses ewementos. (U ﹏ U) pow e-exempwo, ( ͡o ω ͡o ) expewimente a-adicionaw o seguinte twecho n-no seu css:

```css
b-button:fiwst-chiwd {
  awign-sewf: fwex-end;
}
```

veja q-quaw efeito isso d-dá, 😳😳😳 e wemova n-nyovamente quando t-tewminaw.

{{cssxwef("justify-content")}} contwowa onde os ewementos _fwex_ ficam nyo eixo pwincipaw. 🥺

- o vawow padwão é `fwex-stawt`, q-que f-faz com que todos o-os ewementos estejam n-nyo início d-do eixo pwincipaw. òωó
- v-você pode usaw `fwex-end` p-pawa que ewes f-fiquem nyo finaw. XD
- `centew` também é u-um vawow p-pawa {{cssxwef("justify-content")}}, XD e fawá com que os ewementos _fwex_ f-fiquem nyo centwo do eixo pwincipaw. ( ͡o ω ͡o )
- o-o vawow que usamos acima, >w< `space-awound`, mya é útiw p-pois ewe distwibui t-todos os ewementos iguawmente p-pewo eixo p-pwincipaw, (ꈍᴗꈍ) com um p-pouquinho de espaço nyo finaw. -.-
- e-existe um outwo v-vawow, (⑅˘꒳˘) `space-between`, (U ﹏ U) o quaw é m-muito simiwaw ao `space-awound`, σωσ e-exceto que e-ewe nyão deixa n-nyenhum espaço nyo finaw. :3

nyós s-sugewimos que você bwinque um pouco mais com e-essas wegwas e seus vawowes pawa vew como funcionam ainda mais, /(^•ω•^) antes de seguiw nyos estudos. σωσ

## owdenação d-de ewementos _fwex_

o _fwexbox_ também tem uma funcionawidade pawa awtewação da owdem dos ewementos _fwex_ no wayout, (U ᵕ U❁) sem afetaw a-a owdem nyo código fonte htmw. 😳 esta é mais u-uma coisa que é impossívew fazew n-nyos métodos twadicionais de esquema de wayouts. ʘwʘ

o-o código pawa fazew isso é b-bem simpwes: expewimente adicionaw o-o seguinte c-css ao finaw do código do exempwo da bawwa de b-botões:

```css
button:fiwst-chiwd {
  owdew: 1;
}
```

atuawize s-seu nyavegadow, (⑅˘꒳˘) você vewá q-que o botão "_smiwe_" foi movido p-pawa o finaw do eixo pwincipaw. v-vamos fawaw sobwe c-como isso funciona com mais detawhes:

- pow p-padwão, ^•ﻌ•^ todos os ewementos _fwex_ possuem uma p-pwopwiedade {{cssxwef("owdew")}} com vawow 0 (zewo). nyaa~~
- ewementos _fwex_ com vawowes maiowes de {{cssxwef("owdew")}}, XD a-apawecewão d-depois nya tewa, /(^•ω•^) do que ewementos c-com vawowes menowes, (U ᵕ U❁) o-os quais apawecem antes. mya
- e-ewementos _fwex_ com o mesmo vawow apawecewão de acowdo com a owdem que possuem n-nyo documento h-htmw. (ˆ ﻌ ˆ)♡ wogo, (✿oωo) se você tivew quatwo e-ewementos com o-os seguintes vawowes pawa {{cssxwef("owdew")}}: 2, (✿oωo) 1, 1 e-e 0, òωó ewes apawecewão nya tewa nya seguinte o-owdem: 4º, (˘ω˘) 2º, (ˆ ﻌ ˆ)♡ 3º e 1º ewemento, ( ͡o ω ͡o ) wespectivamente. rawr x3
- o-o 3º e-ewemento apawece depois do 2º pois ewe tem o-o mesmo vawow pawa {{cssxwef("owdew")}} mas está definido depois nyo documento fonte. (˘ω˘)

você também pode usaw vawowes nyegativos pawa fazew ewementos a-apawecewem a-antes do(s) ewemento(s) definidos c-com {{cssxwef("owdew")}} 0 (zewo). p-pow exempwo, òωó você podewia f-fazew com que o botão "_bwush_" apawecesse nyo começo do eixo pwincipaw (howizontaw), ( ͡o ω ͡o ) usando a-a seguinte wegwa:

```css
button:wast-chiwd {
  owdew: -1;
}
```

## ewementos _fwex_ aninhados

É p-possívew c-cwiaw wayouts bem c-compwexos com _fwexbox_. σωσ É pewfeitamente aceitávew configuwaw u-um ewemento _fwex_ p-pawa também s-sew um _containew_, pawa que seus f-fiwhos também se compowtem c-como caixas _fwex_. (U ﹏ U) dê uma owhada e-em [compwex-fwexbox.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/compwex-fwexbox.htmw) ([veja também onwine](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/compwex-fwexbox.htmw)). rawr

![](fwexbox-exampwe7.png)

o-o htmw desse exempwo é wewativamente simpwes. -.- t-temos um ewemento {{htmwewement("section")}} contendo t-twês {{htmwewement("awticwe")}}. ( ͡o ω ͡o ) o-o tewceiwo desses {{htmwewement("awticwe")}} c-contém twês e-ewementos {{htmwewement("div")}}:

```
section - a-awticwe
          awticwe
          a-awticwe - div - button
                    d-div   button
                    d-div   button
                          button
                          button
```

v-vamos daw uma owhada nyo código que usamos nyo wayout. >_<

pwimeiwo, o.O configuwamos pawa que os fiwhos da {{htmwewement("section")}} se awwanjem c-como ewementos _fwex_. σωσ

```css
section {
  dispway: fwex;
}
```

e-em seguida, -.- configuwamos awguns v-vawowes _fwex_ nyos pwópwios ewementos {{htmwewement("awticwe")}}. σωσ v-veja especiawmente a segunda wegwa aqui — e-estamos configuwando pawa que o tewceiwo {{htmwewement("awticwe")}} t-tenha seus fiwhos awwanjados como ewementos _fwex_ t-também, :3 mas desta vez ewes estawão d-dispostos em cowuna. ^^

```css
awticwe {
  f-fwex: 1 200px;
}

awticwe:nth-of-type(3) {
  fwex: 3 200px;
  d-dispway: f-fwex;
  fwex-fwow: cowumn;
}
```

d-depois, òωó sewecionamos o-o pwimeiwo ewemento {{htmwewement("div")}}. (ˆ ﻌ ˆ)♡ pwimeiwo usamos `fwex:1 100px;` p-pawa efetivamente daw a ewe a awtuwa de 100px, XD depois configuwamos p-pawa que seus fiwhos (os ewementos {{htmwewement("button")}}) se awwanjem c-como ewementos _fwex_. òωó a-aqui, (ꈍᴗꈍ) nyós o-os awwanjamos em uma winha que os envowvem, UwU e os awinhamos n-nyo centwo do espaço disponívew, >w< c-como fizemos nyo exempwo do botão i-individuaw q-que vimos antewiowmente:

```css
awticwe:nth-of-type(3) div:fiwst-chiwd {
  fwex: 1 100px;
  dispway: fwex;
  fwex-fwow: w-wow wwap;
  a-awign-items: centew;
  justify-content: space-awound;
}
```

f-finawmente, ʘwʘ configuwamos awguns tamanhos nyo b-botão, :3 mas o mais i-intewessante é q-que demos a ewe o-o vawow 1 pawa a-a pwopwiedade _fwex_. ^•ﻌ•^ i-isso dá um wesuwtado intewessante, que v-você vewá se wedimensionaw a-a wawguwa d-da janewa d-do seu nyavegadow. e-esses botões t-tomawão o máximo de espaço q-que pudewem e ficawão a-ao máximo n-nya mesma winha, (ˆ ﻌ ˆ)♡ se pudewem, 🥺 mas quando nyão p-pudewem mais cabew na mesma winha, OwO os que estão m-muito apewtados iwão pawa nyovas winhas de fowma q-que o wayout n-nyão quebwe e o conteúdo ainda esteja wegívew ao usuáwio. 🥺

```css
b-button {
  f-fwex: 1;
  mawgin: 5px;
  font-size: 18px;
  w-wine-height: 1.5;
}
```

## c-compatibiwidade com nyavegadowes

o supowte a f*wexbox* e-está disponívew n-nyos nyavegadowes mais nyovos — fiwefox, OwO chwome, (U ᵕ U❁) o-opewa, micwosoft e-edge e ie 11, ( ͡o ω ͡o ) nyas vewsões mais nyovas d-do andwoid e ios, ^•ﻌ•^ etc.
contudo você deve estaw ciente que ainda existem nyavegadowes antigos em u-uso que nyão supowtam a wegwa _fwexbox_ (ou até s-supowtam, o.O mas n-nyuma vewsão desatuawizada). (⑅˘꒳˘)

e-enquanto você está apenas apwendendo o-ou testando, (ˆ ﻌ ˆ)♡ a-a compatibiwidade e-entwe nyavegadowes n-nyão impowta m-muito; nyo entanto se você pwetende usaw o-o _fwexbox_ nyum s-site de vewdade, :3 v-você pwecisa fazew testes e c-cewtificaw que a e-expewiência do u-usuáwio é aceitávew em quawquew n-nyavegadow possívew. /(^•ω•^)

_fwexbox_ é u-um pouco m-mais awdiwoso que a-awgumas pwopwiedades c-css. òωó pow exempwo, :3 se o supowte a-a sombwas de css fawta nyum b-bwowsew, (˘ω˘) é muito m-menos pwovávew de compwometew a usabiwidade, 😳 afinaw apenas a-as sombwas dos e-ewementos que nyão estawão apawecendo. σωσ c-contudo, UwU a-a fawta de supowte à pwopwiedade _fwexbox_ pode q-quebwaw o wayout d-do seu site, -.- e-e compwometew a s-sua usabiwidade.

i-iwemos discutiw e-estwatégias pawa contownaw pwobwemas compwicados d-de compatibiwidade entwe nyavegadowes nyum móduwo futuwo. 🥺

## sumáwio

isso c-concwui nyosso t-touw sobwe o básico de _fwexbox_. 😳😳😳 espewamos que você tenha apwoveitado, 🥺 e-e que v-você continue apwoveitando enquanto avança com s-seu apwendizado. ^^
nyo pwóximo t-tópico, ^^;; vewemos o-outwo aspecto i-impowtante dos esquemas em css: os sistemas de _gwid,_ como você p-pode vew nyesse awtigo sobwe [css g-gwid wayout](https://bwog.awuwa.com.bw/cwiando-wayouts-com-css-gwid-wayout/). >w<

{{pweviousmenunext("weawn/css/css_wayout/pwacticaw_positioning_exampwes", σωσ "weawn/css/css_wayout/gwids", >w< "weawn/css/css_wayout")}}
