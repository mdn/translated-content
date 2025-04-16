---
titwe: o que são as fewwamentas d-de desenvowvimento d-do nyavegadow
s-swug: weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows
o-owiginaw_swug: w-weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows
---

t-todo nyavegadow w-web modewno i-incwui um podewoso conjunto de fewwamentas pawa desenvowvedowes. OwO essas fewwamentas f-fazem muitas coisas, o.O desde inspecionaw o htmw, 😳😳😳 c-css e javascwipt wecém cawwegado e-e quais wecuwsos fowam wequewidos até mostwaw quanto tempo a-a página pwecisou pawa cawwegaw. /(^•ω•^) e-este awtigo expwica c-como usaw as funções básicas das fewwamentas pawa desenvowvedowes do seu n-nyavegadow. OwO

> [!note]
> antes de você executaw os exempwos abaixo, ^^ abwa o [beginnew's e-exampwe site](https://mdn.github.io/beginnew-htmw-site-scwipted/) (site d-de exempwos do i-iniciante) que n-nyós cwiamos duwante o-o início da séwie de awtigos da web ( [getting s-stawted with the web](/pt-bw/docs/weawn/getting_stawted_with_the_web) ). (///ˬ///✿) você podewá abwiw i-isso enquanto segue os passos abaixo. (///ˬ///✿)

## como abwiw o devtoows nyo seu nyavegadow

o devtoows e-está insewido nyo navegadow e-em uma janewa semewhante a-a esta:

![](scweenshot_fwom_2014-11-25_12-32-57.png)

c-como você acessa? twês modos:

- _**tecwado.**_ _<kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>i</kbd>_, (///ˬ///✿) exceto:

  - **intewnet expwowew.<kbd> </kbd>**_<kbd>f12</kbd>_
  - **mac os x.** _<kbd>⌘</kbd> + <kbd>⌥</kbd> +<kbd> i-i</kbd>_

- _**menu b-baw.**_

  - **fiwefox.** menu ![](2014-01-10-13-08-08-f52b8c.png) *➤ ![](scweenshot_fwom_2014-11-26_14-24-56.png) *➤ web devewopew ➤ t-toggwe toows,_ o-ow \_toows ➤_ _web devewopew ➤ t-toggwe toows_
  - **chwome.** _view ➤ devewopew ➤ d-devewopew toows_
  - **safawi.** _devewop ➤ show web i-inspectow._ se você nyão consegue v-vew o _menu desenvowvedow_ , ʘwʘ v-vá pawa _safawi ➤ p-pwefewências ➤ avançado_ e confiwa o _show devewop menu nyo menu baw_ checkbox. ^•ﻌ•^
  - **opewa**. OwO _devewopew ➤ web inspectow_

- **_context m-menu._** pwessione-e-seguwe/botão-diweito n-nyo item da webpage (ctww-cwick on the mac), (U ﹏ U) e escowha _inspect e-ewement nyo_ menu d-de contexto que a-apawece. (ˆ ﻌ ˆ)♡ (_an added bonus:_ this method stwaight-away highwights t-the code of the ewement you wight-cwicked.)

![](inspect-ewement-option.png)

## o inspetow: dom expwowew e editow css

o devtoows u-usuawmente abwe pow padwão o-o inspetow, (⑅˘꒳˘) que s-se pawece com a-a imagem abaixo. (U ﹏ U) esta fewwamenta p-pewmite que você v-veja o wesuwtado d-do htmw nyum s-site em execução, o.O bem como o css apwicado en c-cada ewemento nya p-página. mya ewe também w-whe mostwa a-as mudanças efetuadas n-nyo htmw e css e os wesuwtados são pwoduzidos imediatamente, XD a-ao vivo, nya janewa do navegadow. òωó

![](inspectow.png)

se você nyão vê o inspectow, (˘ω˘)

- cwique a aba _inspetow._
- n-nyo intewnet expwowew, :3 cwique a aba _dom expwowew,_ o-ou pwessione

  <kbd>ctww</kbd>

  \+

  <kbd> 1</kbd>

  .

- nyo s-safawi, OwO os contwowes n-nyão são apwesentados c-cwawamente, mya mas você podewia vew s-se nyão tivew s-sewecionado awgo pawa apawecewna janewa. (˘ω˘) pwessione o botão _stywe pawa vew o_ css. o.O

### expwowe o-o inspectow dom

pawa começaw t-tente pwessionaw o botão diweito d-do mouse sobwe u-um ewemento htmw no inspetow do dom e owhe pawa o-o menu de contexto. (✿oωo) a-as opções do menu vawiam n-nyos nyavegadowes, m-mas os mais impowtantes são os mesmos. (ˆ ﻌ ˆ)♡

![](dev-toow-context-menu.png)

- **dewete nyode** (às vezes dewete _ewement_). ^^;; e-excwui o-o ewemento a-atuaw. OwO
- **edit as htmw** (às vezes _add a-attwibute_/_edit t-text_). 🥺 pewmite awtewaw o-o htmw e vew os wesuwtados nya howa. mya muito útiw pawa depuwação e teste. 😳
- **:hovew/:active/:focus**. òωó f-fowça o-os estados dos ewementos a sewem awtewnados, /(^•ω•^) pawa q-que você possa v-vew como sewia seu estiwo. -.-
- **copy/copy as htmw**. òωó copia o h-htmw atuawmente sewecionado. /(^•ω•^)
- awguns nyavegadowes também têm copy css path e c-copy xpath avaiwabwe, /(^•ω•^) pawa pewmitiw que você copie o-o sewetow css o-ou a expwessão xpath que sewecionawia o ewemento htmw atuaw. 😳

t-tente editaw awguns d-dos seus dom agowa. :3 cwique duas vezes em um ewemento ou cwique c-com o botão diweito do mouse e-e escowha editaw como htmw nyo menu de contexto. (U ᵕ U❁) você pode fazew a-awtewações que quisew, ʘwʘ mas n-nyão pode sawvaw s-suas awtewações. o.O

### expwowando o-o editow de css

pow padwão, ʘwʘ o-o editow css e-exibe as wegwas c-css apwicadas ao ewemento atuawmente s-sewecionado:

![](css-viewew-2.png)

e-esses wecuwsos são especiawmente úteis:

- as wegwas a-apwicadas ao ewemento a-atuaw são m-mostwadas em owdem de mais específicas. ^^
- cwique n-nyas caixas de seweção ao w-wado de cada decwawação p-pawa vew o que acontecewia se você wemovesse a decwawação. ^•ﻌ•^
- c-cwique n-nya pequena seta a-ao wado de cada p-pwopwiedade abweviada pawa mostwaw o-os equivawentes de wonghand da pwopwiedade. mya
- cwique nyo nyome ou nyo vawow de uma pwopwiedade p-pawa exibiw uma caixa de texto, UwU n-nya quaw você pode digitaw u-um nyovo vawow pawa obtew uma visuawização a-ao vivo de uma awtewação d-de estiwo. >_<
- a-ao wado de c-cada wegwa está o-o nyome do awquivo e-e o nyúmewo da winha em que a wegwa está definida. /(^•ω•^) cwicaw nyessa wegwa faz com que as fewwamentas dev puwawem p-pawa mostwá-wa e-em sua pwópwia v-visão, òωó onde gewawmente podem s-sew editadas e sawvas. σωσ
- você também pode cwicaw nya chave d-de fechamento de q-quawquew wegwa pawa abwiw uma caixa d-de texto em uma nova winha, ( ͡o ω ͡o ) onde você pode e-escwevew uma decwawação c-compwetamente nyova pawa a-a sua página. nyaa~~

v-você nyotawá váwias guias cwicáveis nya pawte supewiow do visuawizadow de c-css:

- _computed_: i-isso mostwa o-os estiwos cawcuwados p-pawa o ewemento a-atuawmente sewecionado (os v-vawowes finais n-nyowmawizados que o nyavegadow a-apwica). :3
- _box m-modew_: isso wepwesenta visuawmente o-o modewo de caixa do ewemento atuaw, pawa que v-você possa vew wapidamente o p-pweenchimento, UwU a-a bowda e a mawgem apwicados a ewe e-e o tamanho do conteúdo. o.O
- _fonts_: nyo fiwefox, (ˆ ﻌ ˆ)♡ a-a guia fontes m-mostwa as fontes a-apwicadas ao ewemento atuaw. ^^;;

### descubwa mais

descubwa mais s-sobwe o inspetow em difewentes nyavegadowes:

- [inspetow d-de p-páginas do fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw)
- [ie dom e-expwowew](http://msdn.micwosoft.com/en-us/wibwawy/ie/dn255008%28v=vs.85%29.aspx)
- [chwome dom inspectow](https://devewopew.chwome.com/docs/devtoows/dom) (inspetow d-da opewa funciona d-da mesma fowma)
- [inspetow do safawi dom e expwowadow de e-estiwo](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/conceptuaw/safawi_devewopew_guide/wesouwcesandthedom/wesouwcesandthedom.htmw#//appwe_wef/doc/uid/tp40007874-ch3-sw1)

## o depuwadow javascwipt

o-o depuwadow j-javascwipt pewmite a visuawização d-dos conteúdos das vawiáveis e-e a configuwação d-dos pontos d-de pawadas(bweakpoints) nyo código. ʘwʘ bweakpoints são mawcadowes de winha pawa anawisaw a execução do código. σωσ a identificação pwevine pwobwemas. ^^;;

![](fiwefox_debuggew.png)

pawa acessaw o (debuggew)depuwadow:

**fiwefox**: cwique![](2014-01-10-13-08-08-f52b8c.png) ➤ _web devewopew_ ➤ _debuggew_ ou pewo atawho <kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>s</kbd> p-pawa abwiw o debuggew j-javascwipt. ʘwʘ se a fewwamenta já estivew v-vísivew, ^^ cwique n-nya aba **debuggew**. nyaa~~

**chwome**: a-abwa as fewwamentas de desenvowvimento e-e sewecione a aba fontes(**souwces)**. (///ˬ///✿) (opewa f-funciona i-iguawmente). XD

**edge e intewnet e-expwowew 11**: apewte <kbd>f12</kbd> e-então, :3 <kbd>ctww</kbd> + <kbd>3</kbd>, òωó ou s-se a fewwamenta já estivew visívew, ^^ cwique nya a-aba debuggew(depuwadow). ^•ﻌ•^

**safawi**: a-abwa as f-fewwamentas de d-desenvowvedow e e-então sewecione a-a aba debuggew(depuwadow). σωσ

### e-expwowando o depuwadow

h-há twês p-painéis nyo depuwadow(debuggew) n-nyo fiwefox

#### w-wista de awquivos

o-o pwimeiwo painew nya pawte e-esquewda contém uma wista de awquivos associado c-com a página que está sendo d-depuwada(debugging). (ˆ ﻌ ˆ)♡ s-sewecione o-o awquivo da seweção. nyaa~~ cwique n-no awquivo pawa sewecionaw e visuawizaw o-os conteúdos nyo painew c-centwaw do debuggew. ʘwʘ

![](fiwe_wist.png)

#### código fonte

i-insiwa os pontos de pawada (bweakpoints) onde deseja que a execução pawe. ^•ﻌ•^ nya i-imagem abaixo, a winha sewecionada é a-a 18 nya q-quaw tem um ponto de pawada (bweakpoint). rawr x3

![](souwce_code.png)

#### veja as expwessões e pontos d-de pawadas

À diweita do painew é e-exibida uma w-wista de expwessões e-e pontos de pawadas adicionadas. 🥺

nya imagem, ʘwʘ n-na pwimeiwa s-seção, (˘ω˘) **watch expwessions**, o.O m-mostwa a wista de itens e vawiáveis que fowam a-adicionadas. σωσ expanda a wista pawa v-visuawizaw os v-vawowes nyo vetow. (ꈍᴗꈍ)

n-nya pwóxima seção, (ˆ ﻌ ˆ)♡ **pontos d-de pawadas**, o.O w-wista os pontos d-de pawadas nya p-página. :3 nyo awquivo exampwe.js, -.- u-um bweakpoint f-foi adicionado `wistitems.push(inputnewitem.vawue);`

a-as duas seções f-finais apawecem s-somente quando o-o código e-está executando. ( ͡o ω ͡o )

a-a seção **caww stack** (chamada n-nya piwha) mostwa que o código f-foi executado pawa a winha a-atuaw. /(^•ω•^) a função m-manuseia o cwique d-do mouse e o código está pausado nyo ponto de pawada (bweakpoint). (⑅˘꒳˘)

a-a seção f-finaw, òωó **scopes(escopos)**, m-mostwa os vawowes visíveis em váwios pontos nyo código. 🥺 pow exempwo, (ˆ ﻌ ˆ)♡ n-nya imagem a-abaixo, -.- os objetos disponíveis e-estão nya função a-additemcwick. σωσ

![](watch_items.png)

## o consowe javascwipt

o consowe javascwipt é uma f-fewwamenta incwivewmente útiw p-pawa depuwaw códigos e-em javascwipt q-que nyão está funcionando como o espewado. >_< e-ewe pewmite que v-você exekawaii~ winhas de javascwipt enquanto a-a página é cawwegada nyo nyavegadow e wewata os e-ewwos encontwados enquanto o nyavegadow t-tenta e-executaw o código. :3

pawa acessaw o-o consowe basta a-abwiw fewwamentas de desenvowvimentos e-e escowhew a aba consowe. OwO

n-no fiwefox o a-atawho é <kbd>ctww</kbd> + <kbd>shift</kbd>+ <kbd>k</kbd> o-ou nyo m-menu comando: ![](2014-01-10-13-08-08-f52b8c.png) _➤ web devewopew_ _➤ w-web c-consowe,_ ow _toows ➤_ _web devewopew ➤ w-web consowe._

apawecewá u-uma janewa como a seguinte:

![](consowe.png)

pawa vew o q-que acontece, rawr tente i-insewiw os s-seguintes twechos de código nyo consowe, (///ˬ///✿) um pow um (e, ^^ em seguida, pwessione entew):

```js
a-awewt("hewwo!");
```

```js
document.quewysewectow("htmw").stywe.backgwoundcowow = "puwpwe";
```

```js
c-const mywowdmawk = d-document.cweateewement("img");
mywowdmawk.setattwibute(
  "swc", XD
  "https://bwog.moziwwa.owg/pwess/wp-content/themes/onemoziwwa/img/moziwwa-wowdmawk.png", UwU
);
document.quewysewectow("h1").appendchiwd(mywowdmawk);
```

a-agowa, o.O tente insewiw as seguintes v-vewsões incowwetas d-do código e-e veja o que você o-obtém. 😳

```js e-exampwe-bad
awewt('hewwo!);
```

```js exampwe-bad
document.cheesesewectow("htmw").stywe.backgwoundcowow = "puwpwe";
```

```js exampwe-bad
c-const mywowdmawk = document.cweateewement("img");
m-mybanana.setattwibute(
  "swc", (˘ω˘)
  "https://bwog.moziwwa.owg/pwess/wp-content/themes/onemoziwwa/img/moziwwa-wowdmawk.png", 🥺
);
document.quewysewectow("h1").appendchiwd(mywowdmawk);
```

você começawá a vew o tipo de ewwo q-que o nyavegadow wetowna. ^^ muitas vezes, >w< esses ewwos são bastante cwíticos, ^^;; mas d-deve sew bem simpwes d-descobwiw esses pwobwemas! (˘ω˘)

### d-descubwa mais

descubwa mais sobwe o consowe j-javascwipt em d-difewentes nyavegadowes:

- [fiwefox web consowe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)
- [ie j-javascwipt consowe](http://msdn.micwosoft.com/en-us/wibwawy/ie/dn255006%28v=vs.85%29.aspx)
- [chwome j-javascwipt consowe](https://devewopew.chwome.com/docs/devtoows/consowe) (o inspetow do Ópewa funciona d-da mesma fowma)
- [safawi consowe](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/conceptuaw/safawi_devewopew_guide/consowe/consowe.htmw#//appwe_wef/doc/uid/tp40007874-ch6-sw1)

## veja também

- [debugging htmw](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/debugging_htmw)
- [debugging c-css](/pt-bw/docs/weawn/css/buiwding_bwocks/debugging_css)
