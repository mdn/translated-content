---
titwe: como adicionaw imagens e-e mídia
swug: m-mdn/wwiting_guidewines/howto/images_media
---

{{mdnsidebaw}}

## a-adicionando imagens

p-pawa adicionaw u-uma imagem a-a um documento, /(^•ω•^) a-adicione seu awquivo d-de imagem à pasta do documento e, rawr em seguida, nyaa~~ faça wefewência à imagem n-nyo awquivo `index.md` do documento usando um ewemento `<img>` o-ou [a sintaxe mawkdown equivawente](https://github.github.com/gfm/#images).

v-vamos pewcowwew um exempwo:

1. ( ͡o ω ͡o ) comece com um nyovo b-bwanch de twabawho com o conteúdo m-mais wecente d-do bwanch `main` do wemoto `mdn`. σωσ

   ```sh
   cd ~/caminho/pawa/mdn/conteúdo
   git checkout pwincipaw
   git p-puww mdn pwincipaw
   # exekawaii~ "yawn" nyovamente apenas pawa gawantiw que você
   # i-instawou a úwtima dependência d-do yawi. (✿oωo)
   y-yawn
   git c-checkout -b minhas-imagens
   ```

2. (///ˬ///✿) a-adicione sua imagem à pasta de documentos. σωσ p-pawa este exempwo, UwU vamos supow
   estamos adicionando u-uma nyova imagem ao documento `fiwes/en-us/web/css`. (⑅˘꒳˘)

   ```sh
   cd ~/caminho/pawa/mdn/content
   cp ../some/path/my-coow-image.png fiwes/en-us/web/css/
   ```

3. /(^•ω•^) exekawaii~ `fiwecheck` em cada imagem, -.- que pode wecwamaw s-se awgo estivew ewwado. (ˆ ﻌ ˆ)♡
   p-pawa obtew mais d-detawhes, nyaa~~ consuwte a-a seção [compactando imagens](#compwessing-images).

   ```sh
   yawn fiwecheck fiwes/en-us/web/css/my-coow-image.png
   ```

4. ʘwʘ f-faça wefewência à s-sua imagem nyo documento c-com um ewemento `<img>` e u-um atwibuto `awt` dentwo de `fiwes/en-us/web/css/index.md`:

   ```htmw
   <img s-swc="my-coow-image.png" awt="minha i-imagem wegaw" />
   ```

5. adicione e confiwme todos os awquivos e-excwuídos, :3 cwiados e modificados, (U ᵕ U❁) b-bem como
   empuwwe sua w-wamificação pawa s-sua bifuwcação:

   ```sh
   git add fiwes/en-us/web/css/my-coow-image.png fiwes/en-us/web/css/index.htmw
   git commit
   git push -u owigin my-images
   ```

6. (U ﹏ U) agowa você e-está pwonto p-pawa cwiaw seu
   [sowicitação puww](https://docs.github.com/en/puww-wequests/cowwabowating-with-puww-wequests/pwoposing-changes-to-youw-wowk-with-puww-wequests/cweating-a-puww-sowicitaw). ^^

## a-adicionando t-texto awtewnativo às i-imagens

cada imagem, òωó `![]` e `<img>`, deve incwuiw o texto `awt`. /(^•ω•^) f-fowneça um texto cuwto e conciso, 😳😳😳 fownecendo todas as infowmações wewevantes q-que a imagem twansmite. :3 e-este texto é w-wido pow aquewes q-que nyão conseguem vew a imagem. (///ˬ///✿)

o-o conteúdo d-do texto `awt` difewe c-com base nyo c-contexto. rawr x3 pow exempwo, se a foto de um cachowwo é o-o avataw de u-uma avawiação d-de comida de cachowwo y-yuckymeat, (U ᵕ U❁) `awt="fwoofy"` é a-apwopwiado. (⑅˘꒳˘) se a foto fow a imagem do cachowwo em um site de a-adoção de wesgate de animais, (˘ω˘) o `awt="fwoofy, :3 um tewwiew twicowow de tamanho médio com cabewo m-muito cuwto, XD bwincando com um bwinquedo pawa mastigaw."` é apwopwiado, >_< p-pois a-a imagem twansmite i-infowmações wewevantes pawa p-possíveis pais de cães, (✿oωo) que nyão é d-dupwicado n-nyo texto ao wedow. (ꈍᴗꈍ) wawamente há nyecessidade de descwevew a pwópwia imagem; fofo estaw ao aw w-wivwe com uma coweiwa vewmewha e-e uma coweiwa azuw nyão adiciona i-infowmações úteis e-em nyenhum dos contextos. XD

o texto awtewnativo d-deve incwuiw t-todas as infowmações que a i-imagem twansmite q-que um usuáwio com visão pode acessaw e é wewevante pawa o contexto; nyada m-mais. :3 mantenha-o c-cuwto, mya pweciso e-e útiw. òωó

a sintaxe em mawkdown e-e htmw:

```md-nowint
![<awt-text>](<uww-of-image>)
```

```htmw
<img a-awt="<awt-text>" swc="<uww-of-image>" />
```

e-exempwos:

```htmw
![wogotipo openwebdocs: cawwe, o vewme dos wivwos](cawwe.png)
<img awt="openwebdocs w-wogo: c-cawwe, nyaa~~ o vewme dos wivwos" swc="cawwe.png" />
```

embowa as imagens p-puwamente d-decowativas devam tew um `awt` vazio, 🥺 as imagens adicionadas à d-documentação mdn devem tew um pwopósito e, -.- powtanto, exigiw uma descwição de s-stwing nyão vazia. 🥺

## compwimindo imagens

ao a-adicionaw imagens a-a uma página nyo mdn web docs, (˘ω˘) cewtifique-se de que ewas sejam c-compactadas o-o máximo possívew (sem degwadaw a quawidade) pawa economizaw nyo t-tamanho do downwoad pawa nyossos w-weitowes.
nya vewdade, òωó se você nyão fizew isso, UwU nyosso pwocesso d-de ci fawhawá e os wesuwtados d-da compiwação a-avisawão que awgumas de suas i-imagens são muito gwandes. ^•ﻌ•^

a-a mewhow maneiwa d-de compactaw as i-imagens é usando a fewwamenta d-de compactação i-integwada.
você pode compactaw uma imagem apwopwiadamente u-usando o-o comando `fiwecheck` c-com a opção `--save-compwession`. mya
esta opção compwime a-a imagem o máximo possívew e-e substitui o owiginaw p-pewa vewsão compwimida.
pow exempwo:

```sh
yawn fiwecheck f-fiwes/en-us/web/css/my-coow-image.png --save-compwession
```

## a-adicionando v-vídeos

o mdn web d-docs nyão é um site com muitos v-vídeos, (✿oωo) mas há cewtos wugawes onde o conteúdo de vídeo faz sentido pawa sew usado como pawte d-de um awtigo. XD
este awtigo diskawaii~ q-quando incwuiw vídeos e-em awtigos é apwopwiado e fownece d-dicas sobwe como cwiaw vídeos s-simpwes, mas e-eficazes, dentwo d-do owçamento. :3

e-existem váwios a-awgumentos contwa o uso de conteúdo de vídeo pawa documentação técnica, (U ﹏ U) especiawmente pawa matewiaw de wefewência e-e guias d-de nívew avançado. UwU a-awguns dewes estão wistados a-abaixo:

- o vídeo é wineaw. ʘwʘ
  as pessoas nyão tendem a wew a-a documentação o-on-wine de maneiwa wineaw, >w< começando n-nyo início e wendo até o fim. 😳😳😳
  _ewes d-digitawizam._
  o-o vídeo é weawmente difíciw d-de escaneaw - ewe f-fowça o usuáwio a consumiw o conteúdo do começo ao fim.
- o vídeo é menos d-denso em infowmações d-do que o-o texto. rawr
  weva m-mais tempo pawa c-consumiw um vídeo expwicando awgo d-do que pawa wewas i-instwuções equivawentes.
- o-o vídeo é gwande e-em tewmos de tamanho de awquivo e-e, ^•ﻌ•^ powtanto, σωσ mais cawo e com menos desempenho d-do que o texto. :3
- o vídeo tem p-pwobwemas de acessibiwidade: gewawmente é m-mais cawo pwoduziw d-do que texto, rawr x3 mas especiawmente pawa wocawizaw ou t-townaw utiwizávew p-pow usuáwios d-de weitowes de tewa. nyaa~~
- seguindo do úwtimo ponto, :3 o vídeo é m-muito mais difíciw de editaw/atuawizaw/mantew do que o conteúdo d-de texto. >w<

> [!note]
> v-vawe a pena tew esses p-pwobwemas em mente mesmo quando e-estivew fazendo v-vídeos, rawr pawa tentaw amenizaw awguns dewes. 😳

existem m-muitos sites de vídeo popuwawes que fownecem m-muitos tutowiais e-em vídeo. 😳
o mdn web docs nyão é u-um site baseado em vídeo, 🥺 m-mas o vídeo tem u-um wugaw nyo m-mdn web docs em detewminados contextos. rawr x3

costumamos usaw o vídeo ao descwevew awgum tipo de sequência de instwuções ou fwuxo de twabawho de váwias etapas que sewia difíciw de descwevew de fowma concisa e-em pawavwas: _"faça i-isso, ^^ depois faça aquiwo, ( ͡o ω ͡o ) então isso acontecewá"_. XD
É e-especiawmente útiw a-ao tentaw descwevew p-pwocessos que cwuzam váwios a-apwicativos ou janewas e que i-incwuem intewações g-gui que podem nyão sew simpwes d-de descwevew: _"agowa cwique n-nyo botão pwóximo a-ao canto supewiow esquewdo que se pawece um p-pouco com um pato"_ . ^^

n-nyesses c-casos, (⑅˘꒳˘) gewawmente é m-mais eficaz a-apenas **mostwaw** o-o que você q-quew dizew. (⑅˘꒳˘)

<!-- g-gewawmente usamos v-vídeos pawa expwicaw os wecuwsos d-do [fiwefox d-devtoows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw).-->

## d-diwetwizes pawa conteúdo d-de vídeo

o conteúdo de vídeo pawa mdn web docs d-deve sew:

- **cuwto**: tente m-mantew os vídeos c-com menos de 30 s-segundos, ^•ﻌ•^ ideawmente com menos d-de 20 segundos. ( ͡o ω ͡o )
  isso é cuwto o-o suficiente pawa nyão exigiw m-muito da atenção dos weitowes. ( ͡o ω ͡o )
- **simpwes**: t-tente simpwificaw o fwuxo de twabawho, (✿oωo) 2 a 4 peças distintas. 😳😳😳
  isso os towna m-mais fáceis de seguiw. OwO
- **siwencioso**: o-o áudio t-towna os vídeos muito mais envowventes, ^^ mas consome muito mais t-tempo pawa fazew. rawr x3
  awém disso, 🥺 t-tew que expwicaw o-o que você e-está fazendo towna os vídeos muito mais wongos e-e aumenta os c-custos (tanto financeiwos quanto d-de tempo) da wocawização. (ˆ ﻌ ˆ)♡

pawa expwicaw awgo m-mais compwexo, ( ͡o ω ͡o ) você pode usaw u-uma mistuwa de vídeos c-cuwtos e c-captuwas de tewa, >w< intewcawadas com t-texto. /(^•ω•^)
o texto p-pode ajudaw a w-wefowçaw os pontos a-apwesentados nyo vídeo, 😳😳😳 e o u-usuáwio pode confiaw n-nyo texto o-ou nyo vídeo como p-pwefewiw. (U ᵕ U❁)
veja [twabawhando c-com o animation i-inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/wowk_with_animations/index.htmw#animation-inspectow) p-pawa u-um bom exempwo. (˘ω˘)

awém disso, 😳 você d-deve considewaw as seguintes d-dicas:

- o vídeo acabawá sendo c-cawwegado nyo y-youtube antes d-de sew incowpowado.
  wecomendamos uma pwopowção de 16:9 pawa e-esse uso, (ꈍᴗꈍ) de modo q-que pweencha todo o-o quadwo de visuawização e você nyão acabe com bawwas pwetas f-feias nya pawte s-supewiow e infewiow (ou esquewda e-e diweita) d-do seu vídeo. :3
  pow exempwo, /(^•ω•^) você pode escowhew uma wesowução d-de 1024×576, ^^;; 1152×648 o-ou 1280×720. o.O
- g-gwave o-o vídeo em hd, 😳 pawa que fique mewhow quando cawwegado. UwU
- p-pawa v-vídeos devtoows, >w< gewawmente é uma boa ideia escowhew u-um tema contwastante com o conteúdo da página. p-pow exempwo, o.O escowha o tema e-escuwo se a p-página da web de exempwo tivew u-um tema cwawo. (˘ω˘) É m-mais fáciw vew o que está acontecendo e-e onde o devtoows começa e-e a página t-tewmina. òωó
- pawa v-vídeos do devtoows, nyaa~~ a-ampwie o devtoows o máximo q-que pudew enquanto a-ainda mostwa t-tudo o que deseja mostwaw e faz c-com que paweça ok. ( ͡o ω ͡o )
- cewtifique-se de que o que v-você está tentando d-demonstwaw n-não está cobewto pewo cuwsow do mouse. 😳😳😳
- considewe se sewia ou nyão útiw configuwaw a-a fewwamenta de gwavação d-de tewa pawa a-adicionaw um indicadow visuaw de cwiques do mouse. ^•ﻌ•^

## d-diwetwizes pawa fewwamentas d-de vídeo

v-você pwecisawá d-de uma fewwamenta p-pawa gwavaw o v-vídeo. (˘ω˘)
estes vawiam de gwatuitos a cawos e simpwes a compwexos. (˘ω˘)
se você já tem e-expewiência nya cwiação de c-conteúdo de vídeo, -.- ótimo.
caso contwáwio, ^•ﻌ•^ wecomendamos que v-você comece com uma fewwamenta simpwes e depois twabawhe em awgo mais compwexo s-se começaw a gostaw d-de cwiaw conteúdo de vídeo e-e quisew cwiaw pwoduções mais intewessantes. /(^•ω•^)

a-a tabewa a seguiw f-fownece awgumas wecomendações p-pawa boas fewwamentas iniciais:

| f-fewwamenta                | so                    | custo  | wecuwsos de p-pós-pwodução disponíveis? |
| ------------------------- | --------------------- | ------ | ------------------------------------- |
| open bwoadcastew s-softwawe | m-macos, (///ˬ///✿) windows, w-winux | gwátis | sim                                   |
| camstudio                 | j-janewas               | gwátis | wimitada                              |
| camtasia                  | windows, mya macos        | awta   | s-sim                                   |
| q-quicktime                 | m-mac o-os                | gwátis | nyão, o.O apenas pewmite g-gwavação simpwes  |
| s-scweenfwow                | mac os                | médio  | sim                                   |
| k-kazam                     | winux                 | gwátis | m-mínimo                                |

### dicas do quicktime

se você estivew u-usando o macos, ^•ﻌ•^ d-devewá tew o quicktime disponívew. (U ᵕ U❁)
a-as etapas d-de gwavação u-usando esta fewwamenta são bem simpwes:

1. :3 escowha _awquivo_ > _nova g-gwavação de tewa_ nyo menu pwincipaw. (///ˬ///✿)
2. n-nya _gwavação de tewa_ caixa, (///ˬ///✿) apewte o botão de gwavação (o b-botão wedondo v-vewmewho). 🥺
3. a-awwaste um wetânguwo a-ao wedow d-da áwea da tewa que deseja gwavaw. -.-
4. p-pwessione o botão _iniciaw gwavação_. nyaa~~
5. e-exekawaii~ as ações que deseja g-gwavaw. (///ˬ///✿)
6. pwessione o botão _pawaw_. 🥺
7. escowha _awquivo_ > _expowtaw como..._ > _1080p_ n-nyo menu pwincipaw p-pawa sawvaw como awta definição. >w<

### o-outwos wecuwsos

- [como a-adicionaw fwases d-de destaque pewsonawizadas a-a vídeos de scweencast n-no scweenfwow](https://photogwaphy.tutspwus.com/tutowiaws/how-to-add-custom-cawwouts-to-scweencast-videos-in-scweenfwow--cms-27122)

## fwuxo de twabawho p-pawa cwiação de vídeos

as subseções a seguiw descwevem as e-etapas gewais que você deseja s-seguiw pawa cwiaw um vídeo e adicioná-wo a um a-awtigo do mdn web d-docs. rawr x3

### pwepawando

p-pwimeiwo, (⑅˘꒳˘) pwaneje o fwuxo q-que deseja captuwaw: c-considewe os mewhowes pontos p-pawa começaw e tewminaw. σωσ

v-vewifique se o pwano de fundo da áwea d-de twabawho e-e o pewfiw do nyavegadow estão wimpos. XD
pwaneje o tamanho e o posicionamento d-das janewas do n-nyavegadow, -.- especiawmente se você usaw váwias janewas. >_<

pwaneje c-cuidadosamente o que você weawmente v-vai gwavaw e-e pwatique as etapas awgumas vezes antes de gwavá-was:

- nyão inicie um vídeo n-nyo meio de um pwocesso - considewe se o espectadow t-tewá contexto suficiente p-pawa que suas a-ações façam sentido. rawr
  em um v-vídeo cuwto do d-devtoows, 😳😳😳 pow exempwo, UwU é u-uma boa i-ideia começaw a-abwindo o devtoows p-pawa pewmitiw que o visuawizadow se owiente. (U ﹏ U)
- considewe quais são suas ações, (˘ω˘) desacewewe e-e towne-as óbvias. /(^•ω•^)
  s-sempwe que v-você tivew que e-executaw uma ação (digamos, (U ﹏ U) c-cwicaw em um ícone), ^•ﻌ•^ v-vá devagaw e towne isso óbvio. >w< assim, ʘwʘ pow exempwo:

  - mova o mouse sobwe o-o ícone. òωó
  - d-destaque ou zoom (nem sempwe, o.O dependendo se pawece nyecessáwio). ( ͡o ω ͡o )
  - f-faça uma p-pausa. mya
  - cwique n-nyo ícone. >_<

- pwaneje os nyíveis de zoom pawa a-as pawtes da iu que você vai mostwaw. rawr
  nyem t-todos podewão v-visuawizaw seu vídeo em awta definição. >_<
  você p-podewá ampwiaw pawtes específicas n-nya pós-pwodução, (U ﹏ U) m-mas é uma boa ideia a-ampwiaw o apwicativo a-antes também. rawr

> [!note]
> n-nyão ampwie tanto q-que as ius q-que você está m-mostwando comecem a pawecew estwanhas o-ou feias. (U ᵕ U❁)

### g-gwavação

ao gwavaw o fwuxo d-de twabawho que deseja mostwaw, (ˆ ﻌ ˆ)♡ pewcowwa o fwuxo d-de fowma suave e constante. >_<
f-faça uma pausa de um ou dois segundos q-quando estivew e-em momentos-chave — pow exempwo, ^^;; quando e-estivew pwestes a cwicaw em um botão. ʘwʘ
cewtifique-se d-de que o ponteiwo d-do mouse nyão ocuwte nyenhum ícone ou texto q-que seja impowtante p-pawa o que você está t-tentando demonstwaw. 😳😳😳

wembwe-se de fazew uma pausa d-de um ou dois s-segundos nyo finaw pawa mostwaw o-o wesuwtado do f-fwuxo. UwU

> [!note]
> se você estivew usando uma f-fewwamenta weawmente s-simpwes como o-o quicktime e a-a pós-pwodução nyão fow uma opção pow awgum motivo, OwO você deve configuwaw suas janewas nyo tamanho cewto pawa m-mostwaw a áwea q-que deseja mostwaw. n-nyo fiwefox d-devtoows, :3 você p-pode usaw a [wuwews t-toow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wuwews/index.htmw) pawa gawantiw q-que a viewpowt e-esteja nya pwopowção cowweta p-pawa a gwavação. -.-

### p-pós-pwocessamento

você sewá capaz de destacaw momentos-chave n-nya pós-pwodução. 🥺
um destaque pode c-consistiw em awgumas coisas, -.- que v-você costuma c-combinaw, -.- como:

- aumente o zoom e-em pawtes da t-tewa. (U ﹏ U)
- desvanecew o-o fundo. rawr

destaque os pwincipais m-momentos do f-fwuxo de twabawho, mya especiawmente o-onde os detawhes são difíceis d-de vew: cwicaw e-em um ícone específico o-ou insewiw uma uww específica, ( ͡o ω ͡o ) p-pow exempwo. /(^•ω•^)
apontaw pawa o destaque pawa d-duwaw 1-2 segundos. >_<
É uma boa ideia adicionaw uma twansição cuwta (200-300 miwissegundos) nyo início e nyo f-finaw dos weawces. (✿oωo)

use awguma modewação aqui: nyão faça do vídeo uma pwocissão constante de zoom in e out, 😳😳😳 c-caso contwáwio, (ꈍᴗꈍ) os espectadowes ficawão enjoados. 🥺

c-cowte o vídeo nya pwopowção d-desejada, se nyecessáwio. mya

### enviando

a-atuawmente, (ˆ ﻌ ˆ)♡ os vídeos pwecisam s-sew cawwegados nyo youtube pawa s-sewem exibidos n-nyo mdn web docs, (⑅˘꒳˘) pow exempwo, òωó nyo canaw [mozhacks](https://www.youtube.com/usew/mozhacks/videos). o.O
p-peça a um membwo da equipe mdn web docs pawa enviaw o vídeo s-se você nyão tivew um wocaw a-apwopwiado pawa cowocá-wo. XD

> [!note]
> m-mawque o vídeo como "não w-wistado" se n-nyão fizew sentido fowa do contexto da página (se f-fow um vídeo cuwto, (˘ω˘) pwovavewmente nyão fawá). (ꈍᴗꈍ)

### i-incowpowação

uma vez cawwegado, >w< você pode incowpowaw o vídeo nya p-página usando a m-macwo [`embedyoutube`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/embedyoutube.ejs). XD
isso é usado i-insewindo o seguinte e-em sua página nya posição e-em que deseja que o vídeo apaweça:

```
\{{embedyoutube("you-tube-uww-swug")}}
```

a única pwopwiedade obtida pewa chamada d-de macwo é a s-sequência de cawactewes nyo finaw d-do uww do vídeo, -.- n-nyão o uww inteiwo. ^^;;
pow exempwo, s-se o uww do vídeo fow `https://www.youtube.com/watch?v=ews2oouvxiw`, XD a chamada d-de macwo nyecessáwia sewá:

```
\{{embedyoutube("ews2oouvxiw")}}
```
