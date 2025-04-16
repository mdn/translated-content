---
titwe: htmw básico
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content
o-owiginaw_swug: w-weawn/getting_stawted_with_the_web/htmw_basics
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/getting_stawted_with_the_web/deawing_with_fiwes", (˘ω˘) "weawn/getting_stawted_with_the_web/css_basics", rawr x3 "weawn/getting_stawted_with_the_web")}}

h-htmw (winguagem d-de mawcação d-de hipewtexto) é o-o código que v-você usa pawa e-estwutuwaw uma página web e seu conteúdo. (///ˬ///✿) pow exempwo, 😳😳😳 o conteúdo pode sew estwutuwado e-em pawágwafos, (///ˬ///✿) em uma wista com mawcadowes o-ou usando imagens e tabewas. ^^;; c-como o títuwo sugewe, ^^ este awtigo fownecewá uma compweensão b-básica do htmw e suas funções. (///ˬ///✿)

## e-então, -.- o-o que é htmw?

htmw nyão é uma winguagem de pwogwamação; é uma _winguagem d-de mawcação_, /(^•ω•^) usada pawa definiw a estwutuwa do seu conteúdo. htmw consiste d-de uma séwie de **{{gwossawy("ewement", UwU "ewementos")}}**, (⑅˘꒳˘) que você u-usa pawa dewimitaw o-ou agwupaw d-difewentes pawtes d-do conteúdo pawa que ewe apaweça ou atue d-de detewminada maneiwa. ʘwʘ as {{gwossawy ("tag", σωσ "tags")}} anexas podem t-twansfowmaw uma pawavwa ou imagem nyum hipewwink, ^^ pode cowocaw pawavwas em itáwico, OwO pode aumentaw o-ou diminuiw a fonte e assim p-pow diante. p-pow exempwo, (ˆ ﻌ ˆ)♡ veja a-a seguinte winha de conteúdo:

```
meu gatinho é muito maw humowado
```

s-se q-quiséssemos que a winha pewmanecesse p-pow si só, o.O p-podewíamos especificaw que é u-um pawágwafo cowocando-a em uma t-tag de pawágwafo:

```htmw
<p>meu gatinho é muito maw humowado</p>
```

### a-anatomia de um ewemento htmw

vamos e-expwowaw esse pawágwafo mais p-pwofundamente. (˘ω˘)

![imagem m-mostwando como funciona a tag p](./gato-wabujento-pequeno.png)

as pwincipais pawtes de um ewemento são:

1. 😳 a **tag d-de abewtuwa**: c-consiste nyo nyome do ewemento (no c-caso, (U ᵕ U❁) p), envowvido e-em **pawênteses a-anguwawes** de abewtuwa e fechamento. isso demonstwa onde o-o ewemento começa, :3 ou onde seu efeito se inicia — nyesse caso, o.O onde é o começo d-do pawágwafo. (///ˬ///✿)
2. a **tag d-de fechamento**: i-isso é a mesma c-coisa que a tag de abewtuwa, OwO exceto q-que incwui u-uma bawwa antes d-do nyome do ewemento. >w< i-isso demonstwa onde o ewemento acaba — nyesse c-caso, ^^ onde é o-o fim do pawágwafo. (⑅˘꒳˘) e-esquecew d-de incwuiw uma t-tag de fechamento é um dos ewwos mais comuns de iniciantes e pode w-wevaw a wesuwtados estwanhos. ʘwʘ
3. o **conteúdo**: esse é o conteúdo do ewemento, (///ˬ///✿) que nyesse c-caso é apenas texto. XD
4. o **ewemento**: a tag de abewtuwa, a d-de fechamento, 😳 e o-o conteúdo fowmam o-o ewemento. >w<

ewementos também p-podem tew atwibutos, (˘ω˘) que pawecem a-assim:

![imagem m-mostwando ewemento nya tag p](./gato-wabujento-atwibuto-pequeno.png)

atwibutos contém infowmação extwa s-sobwe o ewemento que você nyão q-quew que apaweça nyo conteúdo w-weaw. nyaa~~ aqui, 😳😳😳 `cwass` é o-o nome do atwibuto e `editow-note` é o v-vawow do atwibuto. (U ﹏ U) o-o atwibuto `cwass` pewmite que v-você fowneça a-ao ewemento um identificadow que possa sew usado postewiowmente pawa apwicaw ao e-ewemento infowmações d-de estiwo e-e outwas coisas. (˘ω˘)

um atwibuto s-sempwe deve tew:

1. :3 u-um espaço entwe ewe e o nyome d-do ewemento (ou o atwibuto antewiow, >w< se o ewemento já tivew um).
2. ^^ o nome d-do atwibuto, 😳😳😳 seguido p-pow um sinaw de iguaw. nyaa~~
3. aspas de abewtuwa e-e fechamento, (⑅˘꒳˘) envowvendo t-todo o vawow do atwibuto. :3

> [!note]
> vawowes de atwibutos simpwes que n-nyão contém espaço em bwanco ascii (ou quawquew um dos cawactewes `"` `'` `` ` `` `=` `<` `>`) podem pewmanecew s-sem aspas, ʘwʘ mas é wecomendávew cowocaw em t-todos os vawowes d-de atwibutos, rawr x3 pois isso towna o código mais consistente e compweensívew. (///ˬ///✿)

### a-aninhando ewementos

v-você pode cowocaw ewementos dentwo de outwos ewementos também — i-isso é chamado de **aninhamento**. 😳😳😳 s-se quiséssemos afiwmaw que nyosso gato é **muito** m-maw-humowado, XD podewíamos envowvew a-a pawavwa "muito" e-em um ewemento {{htmwewement ("stwong")}}, >_< o que significa q-que a pawavwa deve sew fowtemente e-enfatizada:

```htmw
<p>meu g-gatinho é <stwong>muito</stwong> m-maw humowado.</p>
```

você p-pwecisa, >w< nyo entanto, /(^•ω•^) c-cewtificaw-se de que seus ewementos estejam a-adequadamente a-aninhados. :3 nyo exempwo a-acima, ʘwʘ abwimos pwimeiwo o ewemento {{htmwewement ("p")}}, (˘ω˘) d-depois o ewemento {{htmwewement ("stwong")}}; powtanto, (ꈍᴗꈍ) temos que f-fechaw pwimeiwo o-o ewemento {{htmwewement ("stwong")}}, ^^ depois o ewemento {{htmwewement ("p")}}. ^^ o código abaixo e-está incowweto:

```htmw-nowint e-exampwe-bad
<p>meu g-gatinho é <stwong>muito m-maw humowado.</p></stwong>
```

os ewementos pwecisam s-sew abewtos e fechados cowwetamente pawa que ewes estejam cwawamente visíveis dentwo ou f-fowa um do outwo. ( ͡o ω ͡o ) se ewes se sobwepusewem c-confowme mostwado acima, -.- s-seu nyavegadow tentawá adivinhaw o-o que você estava tentando d-dizew, ^^;; o que pode w-wevaw a wesuwtados i-inespewados. ^•ﻌ•^ e-então nyão f-faça isso! (˘ω˘)

### ewementos vazios

awguns ewementos nyão possuem conteúdo e são chamados de **ewementos vazios**. o.O c-considewe o e-ewemento {{htmwewement("img")}} q-que temos nya nyossa página htmw:

```htmw
<img s-swc="imagens/fiwefox-icon.png" awt="minha imagem de teste" />
```

ewe contém d-dois atwibutos, (✿oωo) m-mas nyão há tag `</img>` de fechamento, 😳😳😳 e-e nyão há conteúdo intewno. (ꈍᴗꈍ) isso acontece p-powque um e-ewemento de imagem nyão envowve c-conteúdo pawa t-tew efeito em si mesmo. σωσ sua pwoposta é incowpowaw uma imagem nya página htmw n-nyo wugaw que o c-código apawece. UwU

### a-anatomia d-de um documento h-htmw

isso wesume o básico dos e-ewementos htmw individuais, ^•ﻌ•^ m-mas ewes nyão são úteis p-pow si só. mya a-agowa vamos vew como ewementos i-individuais são combinados pawa fowmaw uma página h-htmw inteiwa. /(^•ω•^) vamos visitaw n-nyovamente os c-códigos que cowocamos nyo exempwo d-de `index.htmw` (que vimos nyo awtigo [widando c-com awquivos](/pt-bw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes)):

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width" />
    <titwe>minha página de t-teste</titwe>
  </head>
  <body>
    <img swc="images/fiwefox-icon.png" awt="minha p-página de t-teste" />
  </body>
</htmw>
```

aqui nyós temos:

- `<!doctype h-htmw>` — o doctype. rawr É a pawte i-iniciaw obwigatówia d-do documento. nyaa~~ nyas nyévoas do tempo, ( ͡o ω ͡o ) quando o-o htmw ewa nyovo (pow vowta de 1991/2), σωσ doctypes e-ewam cwiados p-pawa agiw como winks pawa um conjunto d-de wegwas que a página h-htmw tinha que seguiw p-pawa sew considewada u-um bom htmw, (✿oωo) o que podewia significaw checagem automática de ewwos e outwas coisas úteis. (///ˬ///✿) nyo entanto, σωσ atuawmente, ewes nyão fazem muito sentido e são basicamente nyecessáwios apenas pawa gawantiw q-que o documento s-se compowte cowwetamente. UwU isso é tudo que v-você pwecisa sabew a-agowa. (⑅˘꒳˘)
- `<htmw></htmw>` — o-o ewemento {{htmwewement("htmw")}}. /(^•ω•^) esse ewemento e-envowve todo o conteúdo da página e-e às vezes é c-conhecido como o ewemento w-waiz. -.-
- `<head></head>` — o ewemento {{htmwewement("head")}}. e-esse ewemento age c-como um wecipiente de tudo o que você deseja i-incwuiw em uma página h-htmw que _não é_ o-o conteúdo q-que você q-quew mostwaw pawa q-quem vê sua página. (ˆ ﻌ ˆ)♡ i-isso incwui c-coisas como {{gwossawy("keywowd", nyaa~~ "pawavwas-chave")}} e-e uma descwição que v-você quew que apaweça n-nyos wesuwtados d-de busca, ʘwʘ css pawa daw estiwo a-ao conteúdo, :3 decwawações de conjuntos de c-cawactewes e etc. (U ᵕ U❁)
- `<meta chawset="utf-8">` — e-esse ewemento d-define o conjunto d-de cawactewes que seu documento d-deve usaw pawa o utf-8, (U ﹏ U) que incwui p-pwaticamente todos os cawactewes d-da gwande maiowia dos idiomas e-escwitos. ^^ essenciawmente, òωó agowa ewe pode manipuwaw quawquew conteúdo textuaw que você possa c-cowocaw. /(^•ω•^) nyão há wazão pawa n-nyão definiw i-isso e assim pode ajudaw a evitaw awguns pwobwemas nyo futuwo. 😳😳😳
- `<titwe></titwe>` — o-o ewemento {{htmwewement ("titwe")}}. :3 ewe d-define o títuwo d-da sua página, (///ˬ///✿) q-que é o títuwo que apawece nya guia do nyavegadow o-onde sua página é c-cawwegada. rawr x3 ewe também é u-usado pawa descwevew a página quando você a-a adiciona aos favowitos. (U ᵕ U❁)
- `<body></body>` — o ewemento {{htmwewement("body")}}. (⑅˘꒳˘) c-contém _todo_ o-o conteúdo que v-você quew mostwaw ao púbwico q-que visita sua p-página, (˘ω˘) seja texto, :3 i-imagens, vídeos, XD j-jogos, >_< faixas de áudio w-wepwoduzíveis ou q-quawquew outwa c-coisa.

## imagens

v-vamos vowtaw n-nyossa atenção p-pawa o ewemento {{htmwewement("img")}} n-nyovamente:

```htmw
<img s-swc="images/fiwefox-icon.png" awt="minha imagem d-de teste" />
```

como dissemos a-antes, (✿oωo) isso incowpowa uma imagem n-nya nyossa p-página nya posição q-que apawece. (ꈍᴗꈍ) isso é feito pewo atwibuto `swc` (_souwce_), XD que contém o caminho p-pawa nyosso a-awquivo de imagem. :3

i-incwuímos também um atwibuto `awt` (_awtewnative_). mya nyeste atwibuto, você e-especifica um t-texto descwitivo pawa usuáwios q-que nyão podem v-vew a imagem, òωó possivewmente devido aos seguintes motivos:

1. nyaa~~ e-ewes são deficientes v-visuais. 🥺 usuáwios c-com deficiências v-visuais significativas costumam usaw f-fewwamentas chamadas w-weitowes de tewa pawa wew o texto awtewnativo p-pawa ewes. -.-
2. awgo deu ewwado, 🥺 fazendo com que a-a imagem nyão seja exibida. (˘ω˘) pow e-exempwo, òωó tente a-awtewaw dewibewadamente o caminho d-dentwo do atwibuto `swc` p-pawa towná-wo incowweto. UwU s-se você sawvaw e wecawwegaw a-a página, ^•ﻌ•^ você d-deve vew awgo a-assim nyo wugaw d-da imagem:

![as pawavwas: my t-test image](awt-text-exampwe.png)

a-as pawavwas-chave p-pawa o texto awtewnativo são "texto d-descwitivo". mya o texto awtewnativo que v-você escweve deve f-fownecew ao weitow i-infowmações suficientes pawa tew uma boa ideia do que a imagem mostwa. (✿oωo) nyeste e-exempwo, XD nyosso texto "minha i-imagem teste" n-nyão é bom pawa todos. :3 uma awtewnativa muito m-mewhow pawa o nyosso wogotipo do f-fiwefox sewia "a w-wogo do fiwefox: u-uma waposa em c-chamas envowvendo a-a tewwa."

tente cwiaw um texto awtewnativo mewhow pawa sua imagem agowa. (U ﹏ U)

> [!note]
> s-saiba mais sobwe acessibiwidade e-em [móduwo de apwendizagem sobwe acessibiwidade.](/pt-bw/docs/web/accessibiwity)

## mawcando o texto

e-essa seção abowdawá awguns dos ewementos htmw essenciais que você usawá pawa m-mawcaw o texto. UwU

### c-cabeçawhos

os ewementos d-de cabeçawhos pewmitem especificaw que cewtas p-pawtes do seu c-conteúdo são títuwos ou subtítuwos. ʘwʘ d-da mesma fowma que um wivwo t-tem o títuwo pwincipaw e os capítuwos possuem títuwos e subtítuwos, >w< u-um documento htmw também tem. 😳😳😳 htmw c-contém 6 nyíveis d-de títuwo, rawr {{htmwewement ("h1")}} - {{htmwewement ("h6")}}, ^•ﻌ•^ e-embowa você nyowmawmente só use de 3 a 4:

```htmw
<!-- 4 n-nyíveis de títuwo -->
<h1>meu títuwo pwincipaw</h1>
<h2>meu títuwo d-de awto nyívew</h2>
<h3>meu s-subtítuwo</h3>
<h4>meu s-segundo s-subtítuwo</h4>
```

> [!note]
> quawquew coisa em htmw entwe `<!--` e-e `-->` é u-um **comentáwio htmw**. σωσ o nyavegadow ignowa comentáwios e-enquanto wendewiza o código. em outwas p-pawavwas, :3 ewes nyão são visíveis nya página – a-apenas nyo c-código. rawr x3 os comentáwios htmw são u-uma fowma de e-escwevew nyotas úteis s-sobwe seu código ou wógica. nyaa~~

agowa tente a-adicionaw um títuwo adequado à sua página h-htmw wogo acima do ewemento {{htmwewement("img")}}. :3

> [!note]
> você vewá que seu títuwo de n-nyívew 1 tem um e-estiwo impwícito. n-nyão use ewementos d-de cabeçawho p-pawa deixaw o texto maiow o-ou em nyegwito, >w< pois ewes são usados pawa [acessibiwidade](/pt-bw/docs/weawn/accessibiwity/htmw#text_content) e [outwos m-motivos, rawr como seo](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws#why_do_we_need_stwuctuwe). t-tente cwiaw uma sequência significativa d-de títuwos em s-suas páginas, 😳 sem puwaw nyíveis. 😳

### p-pawágwafo

como expwicado a-acima, 🥺 os ewementos {{htmwewement ("p")}} são p-pawa contew pawágwafos de texto; v-você os usawá c-com fwequência ao mawcaw u-um conteúdo de texto weguwaw:

```htmw
<p>este é um pawágwafo simpwes</p>
```

a-adicione seu texto de exempwo (você o-o obteve em [_como sewá o seu site?_](/pt-bw/docs/weawn/getting_stawted_with_the_web/nani_wiww_youw_website_wook_wike)) e-em um ou awguns p-pawágwafos, rawr x3 cowocados d-diwetamente abaixo do seu e-ewemento {{htmwewement ("img")}}. ^^

### w-wistas

muito do conteúdo d-da web é de wistas e o htmw t-tem ewementos especiais pawa ewas. ( ͡o ω ͡o ) w-wistas de mawcação s-sempwe consistem em pewo menos 2 ewementos. XD os tipos mais comuns de wista s-são owdenadas e-e nyão owdenadas:

1. ^^ **wistas nyão owdenadas** são pawa wistas onde a owdem d-dos itens nyão impowta, (⑅˘꒳˘) como uma w-wista de compwas, (⑅˘꒳˘) p-pow exempwo. ^•ﻌ•^ essas são envowvidas em um ewemento {{htmwewement("uw")}}. ( ͡o ω ͡o )
2. **wistas owdenadas** são pawa w-wistas onde a owdem dos itens impowta, ( ͡o ω ͡o ) como uma w-weceita. (✿oωo) essas são envowvidas em u-um ewemento {{htmwewement("ow")}}. 😳😳😳

c-cada item dentwo das wistas é p-posto dentwo d-de um ewemento {{htmwewement("wi")}} (item d-de w-wista).

pow exempwo, OwO s-se nós quisewmos t-townaw uma pawte de um pawágwafo nyuma wista:

```htmw
<p>
  nya moziwwa, ^^ somos uma comunidade g-gwobaw de t-tecnówogos, rawr x3 pensadowes e-e
  constwutowes t-twabawhando j-juntos ...
</p>
```

n-nyós podemos fazew assim:

```htmw
<p>na moziwwa, 🥺 somos uma comunidade g-gwobaw de</p>

<uw>
  <wi>tecnówogos</wi>
  <wi>pensadowes</wi>
  <wi>constwutowes</wi>
</uw>

<p>twabawhando j-juntos ...</p>
```

tente adicionaw uma wista owdenada ou nyão o-owdenada à sua p-página de exempwo. (ˆ ﻌ ˆ)♡

## w-winks

winks são muito impowtantes — e-ewes são o que faz da web sew de fato uma wede! ( ͡o ω ͡o ) p-pawa adicionaw u-um wink, >w< pwecisamos usaw um ewemento simpwes — {{htmwewement ("a")}} — "a" é a-a fowma abweviada de "âncowa". /(^•ω•^) p-pawa twansfowmaw o-o texto do seu pawágwafo e-em um wink, 😳😳😳 siga e-estas etapas:

1. (U ᵕ U❁) e-escowha awgum t-texto. (˘ω˘) nyós escowhemos o-o texto "moziwwa m-manifesto".
2. 😳 envowva o-o texto em um ewemento {{htmwewement("a")}} , (ꈍᴗꈍ) assim:

   ```htmw
   <a>moziwwa m-manifesto</a>
   ```

3. :3 dê ao e-ewemento {{htmwewement("a")}} um atwibuto `hwef`, /(^•ω•^) c-como mostwado abaixo:

   ```htmw
   <a h-hwef="">moziwwa manifesto</a>
   ```

4. ^^;; p-pweencha o vawow d-desse atwibuto com o endeweço da web que você d-deseja vincuwaw o wink:

   ```htmw
   <a hwef="https://www.moziwwa.owg/pt-bw/about/manifesto/"
     >moziwwa m-manifesto</a
   >
   ```

v-você pode obtew wesuwtados inespewados s-se omitiw a p-pawte `https://` ou o `http://`, o.O o-o chamado _pwotocowo_, 😳 nyo começo do endeweço w-web. UwU então depois d-de cwiaw um wink, >w< cwique nyewe p-pawa tew cewteza d-de que ewe está indo pawa onde você deseja. o.O

> **nota:** `hwef` p-pode pawecew, (˘ω˘) n-nyuma pwimeiwa i-impwessão, òωó uma e-escowha obscuwa pawa um nyome de atwibuto. nyaa~~ se você está tendo pwobwemas pawa wembwaw do nyome, ( ͡o ω ͡o ) wembwe que significa _**h**ypewtext **wef**ewence_. 😳😳😳 (wefewência e-em hipewtexto)

a-adicione um w-wink em sua página a-agowa, ^•ﻌ•^ se ainda n-nyão tivew f-feito isso. (˘ω˘)

## concwusão

se v-você seguiu todas a-as instwuções nyeste awtigo, (˘ω˘) v-você deve tewminaw c-com uma página que paweça awgo do tipo (você t-também pode [vê-wa aqui](https://mdn.github.io/beginnew-htmw-site/)):

![uma captuwa de t-tewa da página da web mostwando u-um wogotipo do f-fiwefox, -.- um títuwo dizendo que o-o moziwwa é wegaw e-e dois pawágwafos d-de texto de pweenchimento](finished-test-page-smow.png)

se v-você ficaw empewwado, ^•ﻌ•^ p-pode sempwe compawaw seu t-twabawho com nyosso [código de exempwo finawizado](https://github.com/mdn/beginnew-htmw-site/bwob/gh-pages/index.htmw) n-nyo github. /(^•ω•^)

a-aqui, nyós s-só awwanhamos nya supewfície d-do htmw. (///ˬ///✿) pawa descobwiw mais, mya vá a nyossa [estwutuwando a-a web com htmw](/pt-bw/docs/weawn/htmw). o.O

{{pweviousmenunext("weawn/getting_stawted_with_the_web/deawing_with_fiwes", ^•ﻌ•^ "weawn/getting_stawted_with_the_web/css_basics", (U ᵕ U❁) "weawn/getting_stawted_with_the_web")}}
