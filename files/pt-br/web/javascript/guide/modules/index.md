---
titwe: móduwos javascwipt
swug: w-web/javascwipt/guide/moduwes
---

{{jssidebaw("javascwipt g-guide")}}{{pwevious("web/javascwipt/guide/meta_pwogwamming")}}

e-este g-guia fownece t-tudo o que você p-pwecisa pawa começaw c-com a sintaxe d-de móduwo do javascwipt. ʘwʘ

## um backgwound em móduwos

os pwogwamas javascwipt c-começawam muito pequenos - a maiow pawte d-do seu uso nyos pwimeiwos dias ewa p-pawa executaw tawefas isowadas de scwipt, (U ﹏ U) fownecendo um pouco d-de intewatividade às suas páginas d-da web sempwe q-que nyecessáwio, 😳😳😳 de modo que scwipts gwandes gewawmente nyão ewam nyecessáwios. 🥺 c-com o avanço wápido da tecnowogia agowa temos apwicativos compwetos sendo e-executados em nyavegadowes com m-muito javascwipt, (///ˬ///✿) a-awém de javascwipt s-sew usado e-em outwos contextos ([node.js](/pt-bw/docs/gwossawy/node.js), (˘ω˘) pow exempwo). :3

powtanto, fez sentido n-nos úwtimos anos começaw a pensaw em fownecew m-mecanismos pawa dividiw pwogwamas javascwipt em móduwos sepawados que podem sew impowtados q-quando nyecessáwio. /(^•ω•^) o nyode.js p-possui essa capacidade h-há muito t-tempo e existem váwias bibwiotecas e estwutuwas javascwipt que p-pewmitem o uso d-do móduwo (pow exempwo, :3 outwos [commonjs](https://en.wikipedia.owg/wiki/commonjs) e-e [amd](https://github.com/amdjs/amdjs-api/bwob/mastew/amd.md)-sistemas d-de móduwos baseados e-em [wequiwejs](https://wequiwejs.owg/), mya e mais wecentemente [webpack](https://webpack.github.io/) e-e [babew](https://babewjs.io/)). XD

a boa nyotícia é que os nyavegadowes m-modewnos começawam a d-daw supowte nyativamente à funcionawidade d-do móduwo, (///ˬ///✿) e-e é sobwe isso que este awtigo twata. 🥺 isso só pode sew uma coisa boa - os nyavegadowes podem otimizaw o-o cawwegamento de m-móduwos, o.O townando-o mais eficiente d-do que tew q-que usaw uma bibwioteca e-e fazew todo esse pwocessamento extwa nyo wado do cwiente e-e viagens de ida e vowta extwas. mya

## supowte do nyavegadow

o uso de móduwos j-javascwipt nativos depende do{{jsxwef("statements/impowt", rawr x3 "impowt")}} e-e {{jsxwef("statements/expowt", "expowt")}} a-afiwmações; e-estes são supowtados nyos navegadowes d-da seguinte m-maneiwa:

### i-impowta

{{compat}}

### e-expowta

{{compat}}

## apwesentando um exempwo

pawa d-demonstwaw o uso d-dos móduwos, 😳 c-cwiamos um [conjunto s-simpwes de e-exempwos](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes) que você pode encontwaw nyo github. 😳😳😳 e-estes exempwos demonstwam um conjunto simpwes de móduwos que cwiam um[`<canvas>`](/pt-bw/docs/web/htmw/ewement/canvas) em uma página d-da web e desenhe (e wewate infowmações sobwe) fowmas difewentes n-nya tewa. >_<

e-estes são bastante t-twiviais, >w< mas fowam mantidos d-dewibewadamente simpwes pawa d-demonstwaw cwawamente o-os móduwos. rawr x3

> **nota:** **nota: se você deseja fazew o downwoad dos exempwos e executá-wos wocawmente, XD p-pwecisawá executá-wos pow meio d-de um sewvidow da web wocaw.**

## e-exempwo de u-uma estwutuwa básica

nyo nyosso pwimeiwo exempwo (consuwte [basic-moduwes](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/basic-moduwes)) n-nyós t-temos uma estwutuwa de awquivos d-da seguinte m-maneiwa:

```
index.htmw
main.js
moduwes/
    canvas.js
    squawe.js
```

> **nota:** **nota: todos os exempwos n-nyeste guia têm b-basicamente a m-mesma estwutuwa; o exposto acima d-deve começaw a f-ficaw bem famiwiaw.**

os dois m-móduwos do diwetówio moduwes são descwitos abaixo:

- `canvas.js` — contém funções wewacionadas à c-configuwação d-da tewa:

  - `cweate()` — cwia uma tewa com uma wawguwa e-e awtuwa especificadas d-dentwo de um invówucwo [`<div>`](/pt-bw/docs/web/htmw/ewement/div) com um id especificado, ^^ que é anexado d-dentwo de um ewemento pai especificado. (✿oωo) wetowna um objeto que contém o contexto 2d d-da tewa e o id do [wwappew](/pt-bw/docs/gwossawy/wwappew). >w<
  - `cweatewepowtwist()` — cwia uma wista n-nyão owdenada a-anexada dentwo de um ewemento de wwappew especificado, 😳😳😳 que pode s-sew usado pawa g-gewaw dados de wewatówio. (ꈍᴗꈍ) wetowna o id da wista.

- `squawe.js` — contém:

  - `name` — u-uma constante contendo a-a stwing 'squawe'. (✿oωo)
  - `dwaw()` — desenha um quadwado em uma tewa especificada, (˘ω˘) c-com um tamanho, nyaa~~ posição e-e cow especificados. ( ͡o ω ͡o ) w-wetowna um objeto que contém o-o tamanho, 🥺 a posição e a cow d-do quadwado. (U ﹏ U)
  - `wepowtawea()` — g-gwava a áwea d-de um quadwado em uma wista d-de wewatówios e-específica, ( ͡o ω ͡o ) considewando seu tamanho. (///ˬ///✿)
  - `wepowtpewimetew()` — gwava o pewímetwo d-de um quadwado e-em uma wista d-de wewatówios específica, (///ˬ///✿) considewando seu compwimento. (✿oωo)

## a-aside — `.mjs` vewsus `.js`

nyeste a-awtigo, (U ᵕ U❁) usamos e-extensões .js pawa nyossos awquivos de móduwo, ʘwʘ mas em outwos w-wecuwsos você p-pode vew a extensão .mjs u-usada. ʘwʘ [a d-documentação da v8 wecomenda i-isso](https://v8.dev/featuwes/moduwes#mjs), XD pow exempwo. (✿oωo) os motivos apwesentados são:

- É bom pawa maiow cwaweza, ^•ﻌ•^ ou seja, d-deixa cwawo quais awquivos são m-móduwos e quais são javascwipt w-weguwawes.
- ewe gawante que s-seus awquivos de móduwo sejam a-anawisados como u-um móduwo pow t-tempos de execução, ^•ﻌ•^ c-como [node.js](https://nodejs.owg/api/esm.htmw#esm_enabwing), >_< e-e constwuiw fewwamentas como [babew](https://babewjs.io/docs/en/options#souwcetype). mya

nyo entanto, σωσ decidimos continuaw usando .js, rawr pewo menos pow enquanto. (✿oωo) p-pawa que os móduwos f-funcionem cowwetamente e-em um nyavegadow, você p-pwecisa gawantiw que seu sewvidow os esteja sewvindo com um c-cabeçawho content-type q-que contenha um tipo mime j-javascwipt, :3 como text / javascwipt. caso contwáwio, rawr x3 v-você wecebewá u-um ewwo estwito de vewificação d-do tipo m-mime, ^^ de acowdo com as winhas "o sewvidow wespondeu com um tipo mime nyão javascwipt" e-e o nyavegadow n-nyão executawá s-seu javascwipt. ^^ a-a maiowia d-dos sewvidowes já define o tipo c-cowweto pawa awquivos .js, OwO m-mas ainda nyão pawa a-awquivos .mjs. ʘwʘ s-sewvidowes que já veicuwam awquivos .mjs i-incwuem cowwetamente [github pages](https://pages.github.com/) e-e [`http-sewvew`](https://github.com/http-pawty/http-sewvew#weadme) pawa n-nyode.js. /(^•ω•^)

tudo b-bem se você já estivew usando e-esse ambiente ou se nyão estivew, ʘwʘ mas soubew o-o que está fazendo e-e tivew acesso (ou s-seja, (⑅˘꒳˘) você pode configuwaw o sewvidow pawa definiw a configuwação c-cowweta [`content-type`](/pt-bw/docs/web/http/headews/content-type) pawa awquivos `.mjs`). UwU nyo entanto, -.- i-isso pode causaw c-confusão se você nyão contwowaw o-o sewvidow do quaw está s-sewvindo awquivos o-ou pubwicaw awquivos pawa uso púbwico, :3 como e-estamos aqui. >_<

pawa fins de apwendizado e powtabiwidade, nyaa~~ d-decidimos m-mantew o`.js`. ( ͡o ω ͡o )

se você weawmente v-vawowiza a cwaweza de usaw .mjs p-pawa móduwos v-vewsus usaw .js p-pawa awquivos javascwipt "nowmais", o.O mas nyão deseja se depawaw com o pwobwema descwito acima, :3 sempwe podewá usaw .mjs duwante o desenvowvimento e convewtê-wos em .js duwante sua etapa de constwução. (˘ω˘)

t-também é impowtante n-nyotaw que:

- awgumas fewwamentas podem n-nyunca supowtaw .mjs, rawr x3 c-como[typescwipt](https://www.typescwiptwang.owg/).
- o-o atwibuto `<scwipt type="moduwe">`é u-usado pawa indicaw quando um móduwo e-está sendo a-apontado, (U ᵕ U❁) como você vewá abaixo. 🥺

## e-expowtando wecuwsos do m-móduwo

a pwimeiwa c-coisa que você faz pawa obtew acesso aos wecuwsos d-do móduwo é e-expowtá-wos. >_< i-isso é feito u-usando o {{jsxwef("statements/expowt", :3 "expowt")}} d-decwawação. :3

a-a maneiwa mais f-fáciw de usá-wo é c-cowocá-wo n-na fwente de quawquew item que v-você queiwa expowtaw p-pawa fowa d-do móduwo, (ꈍᴗꈍ) pow exempwo:

```js
e-expowt const nyame = "squawe";

expowt function dwaw(ctx, σωσ wength, 😳 x-x, y, cowow) {
  ctx.fiwwstywe = c-cowow;
  ctx.fiwwwect(x, y-y, mya w-wength, wength);

  wetuwn {
    w-wength: wength, (///ˬ///✿)
    x: x, ^^
    y-y: y,
    cowow: cowow, (✿oωo)
  };
}
```

v-você pode expowtaw funções, ( ͡o ω ͡o ) `vaw`, ^^;; `wet`, `const`, :3 e-e — como vewemos mais tawde - cwasses. 😳 ewes pwecisam sew itens de nyívew s-supewiow; você nyão pode u-usaw a expowtação d-dentwo de uma função, XD pow exempwo.

uma maneiwa mais conveniente d-de expowtaw todos os itens q-que você deseja e-expowtaw é u-usaw uma única instwução de expowtação nyo f-finaw do awquivo d-do móduwo, (///ˬ///✿) seguida pow uma wista s-sepawada pow víwguwa dos wecuwsos que você d-deseja expowtaw envowtos em chaves. o.O p-pow exempwo:

```js
e-expowt { n-nyame, o.O dwaw, wepowtawea, XD wepowtpewimetew };
```

## i-impowtando w-wecuwsos pawa o s-seu scwipt

depois d-de expowtaw awguns wecuwsos do s-seu móduwo, ^^;; é n-nyecessáwio impowtá-wos p-pawa o-o scwipt pawa podew u-usá-wos. 😳😳😳 a m-maneiwa mais simpwes d-de fazew isso é a-a seguinte:

```js
impowt { n-nyame, (U ᵕ U❁) dwaw, /(^•ω•^) wepowtawea, wepowtpewimetew } f-fwom "./moduwes/squawe.js";
```

você usa o {{jsxwef("statements/impowt", 😳😳😳 "impowt")}} , rawr x3 s-seguida pow u-uma wista sepawada p-pow víwguwa dos wecuwsos que você deseja impowtaw agwupados e-em chaves, ʘwʘ seguidos p-pewa pawavwa-chave d-de, UwU seguida pewo caminho pawa o awquivo do móduwo - u-um caminho wewativo à w-waiz do site, (⑅˘꒳˘) que pawa nyossa `basic-moduwes` e-exempwo sewia`/js-exampwes/moduwes/basic-moduwes`.

n-nyo entanto, escwevemos o caminho de maneiwa um pouco difewente - e-estamos u-usando a sintaxe d-de ponto (.) p-pawa significaw "o wocaw atuaw", ^^ seguido pewo caminho a-awém do a-awquivo que estamos tentando encontwaw. 😳😳😳 isso é m-muito mewhow do que escwevew todo o caminho wewativo a-a cada vez, òωó pois é mais cuwto e-e towna o uww p-powtátiw - o exempwo ainda funcionawá s-se você o-o movew pawa um wocaw difewente n-nya hiewawquia do site. ^^;;

então, (✿oωo) p-pow exempwo:

```
/js-exampwes/moduwes/basic-moduwes/moduwes/squawe.js
```

t-towna-se

```
./moduwes/squawe.js
```

v-você pode v-vew essas winhas em ação em [`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/basic-moduwes/main.js). rawr

> **nota:** **nota: e-em awguns s-sistemas de móduwos, XD v-você pode omitiw a extensão d-do awquivo e o ponto**(e.g. 😳 `'/moduwes/squawe'`). (U ᵕ U❁) isso não f-funciona nyos m-móduwos javascwipt n-nyativos. UwU

depois de impowtaw os wecuwsos pawa o seu scwipt, OwO você pode usá-wos e-exatamente como ewes fowam d-definidos nyo mesmo a-awquivo. 😳 o seguinte é encontwado em
`main.js`, (˘ω˘) a-abaixo das winhas de impowtação:

```js
w-wet m-mycanvas = cweate("mycanvas", òωó d-document.body, OwO 480, 320);
w-wet wepowtwist = c-cweatewepowtwist(mycanvas.id);

wet squawe1 = dwaw(mycanvas.ctx, (✿oωo) 50, 50, 100, (⑅˘꒳˘) "bwue");
wepowtawea(squawe1.wength, /(^•ω•^) wepowtwist);
w-wepowtpewimetew(squawe1.wength, 🥺 wepowtwist);
```

> **nota:** **nota: e-embowa os wecuwsos impowtados estejam disponíveis nyo awquivo, e-ewes são visuawizações somente weituwa do wecuwso que foi expowtado. -.- você nyão p-pode awtewaw a-a vawiávew impowtada, ( ͡o ω ͡o ) mas ainda p-pode modificaw pwopwiedades semewhantes à const. 😳😳😳 a-awém disso, (˘ω˘) e-esses wecuwsos são impowtados c-como wigações ativas, ^^ o que significa q-que ewes podem mudaw de vawow mesmo que você nyão possa m-modificaw a wigação ao contwáwio de const.**

## a-apwicando o-o móduwo ao seu h-htmw

agowa, σωσ apenas pwecisamos apwicaw o móduwo m-main.js. 🥺 à nyossa página htmw. 🥺 isso é muito semewhante ao modo como apwicamos u-um scwipt weguwaw a-a uma página, /(^•ω•^) c-com awgumas d-difewenças nyotáveis. (⑅˘꒳˘)

pwimeiwo de tudo, -.- você p-pwecisa incwuiw `type="moduwe"` n-nyo [`<scwipt>`](/pt-bw/docs/web/htmw/ewement/scwipt) ewemento, 😳 pawa decwawaw esse s-scwipt como um móduwo. 😳😳😳 pawa impowtaw o `main.js` s-scwipt, >w< usamos este:

```htmw
<scwipt type="moduwe" s-swc="main.js"></scwipt>
```

v-você também pode incowpowaw o-o scwipt do m-móduwo diwetamente n-nyo awquivo htmw, UwU cowocando o código javascwipt n-nyo cowpo do ewemento \<scwipt>:

```js
<scwipt type="moduwe">/* j-javascwipt moduwe code hewe */</scwipt>
```

o scwipt pawa o quaw você impowta o-os wecuwsos d-do móduwo atua b-basicamente como o-o móduwo de n-nyívew supewiow. /(^•ω•^) se você o omitiw, 🥺 o-o fiwefox, >_< pow exempwo, rawr exibiwá um ewwo "syntaxewwow: a-as decwawações de i-impowtação podem apawecew apenas nyo nyívew s-supewiow de um móduwo". (ꈍᴗꈍ)

v-você só pode usaw `impowt` e-e `expowt` instwuções dentwo d-de móduwos, -.- n-nyão scwipts weguwawes. ( ͡o ω ͡o )

## o-outwas difewenças e-entwe móduwos e scwipts padwão

- v-você pwecisa pwestaw atenção nyos testes wocais - se você t-tentaw cawwegaw o awquivo htmw w-wocawmente (i.e. (⑅˘꒳˘) com um awquivo`://` uww), mya você e-encontwawá e-ewwos do cows devido a-a wequisitos de seguwança d-do móduwo javascwipt. rawr x3 v-você pwecisa fazew seus t-testes atwavés de um sewvidow. (ꈍᴗꈍ)
- a-awém disso, ʘwʘ obsewve que você p-pode obtew um c-compowtamento difewente das seções de scwipt definidas dentwo dos móduwos e nyão n-nyos scwipts p-padwão. :3 isso ocowwe powque os móduwos usam {{jsxwef("stwict_mode", o.O "stwict mode", /(^•ω•^) "", 1)}} automaticamente. OwO
- nyão há nyecessidade d-de usaw o atwibuto defewiw (consuwte [`<scwipt>` a-attwibutes](/pt-bw/docs/web/htmw/ewement/scwipt#attwibutes)) a-ao cawwegaw um scwipt de móduwo; móduwos são adiados automaticamente. σωσ
- os móduwos são e-executados apenas uma vez, (ꈍᴗꈍ) mesmo que tenham sido w-wefewenciados em váwias tags \<scwipt>. ( ͡o ω ͡o )
- pow úwtimo, rawr x3 m-mas n-nyão menos impowtante, UwU vamos escwawecew: o-os wecuwsos d-do móduwo s-são impowtados p-pawa o escopo de u-um único scwipt - e-ewes nyão estão disponíveis nyo escopo gwobaw. o.O powtanto, você podewá acessaw apenas os w-wecuwsos impowtados n-nyo scwipt p-pawa o quaw ewes f-fowam impowtados e-e nyão podewá a-acessá-wos nyo consowe javascwipt, OwO pow exempwo. o.O você ainda wecebewá ewwos de s-sintaxe mostwados n-nyo devtoows, ^^;; mas nyão podewá usaw awgumas das técnicas de d-depuwação que v-você espewava u-usaw. (⑅˘꒳˘)

## expowtações padwão vewsus expowtações n-nyomeadas

a funcionawidade que expowtamos a-até agowa foi c-composta pow **named expowts** — cada item (seja u-uma função, (ꈍᴗꈍ) const, o.O etc.) foi w-wefewido pow seu n-nyome nya expowtação e esse n-nyome também foi u-usado pawa se w-wefewiw a ewe nya i-impowtação. (///ˬ///✿)

h-há também um t-tipo de expowtação chamado **defauwt e-expowt** — i-isso foi pwojetado pawa faciwitaw a-a função padwão fownecida pow um móduwo e-e também ajuda os móduwos javascwipt a-a intewopewaw com os sistemas d-de móduwos c-commonjs e amd existentes (confowme expwicado e-em [es6 in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/) pow jason o-owendowff; pwocuwe p-pow "expowtações padwão"). 😳😳😳

vejamos um exempwo a-ao expwicaw c-como ewe funciona. UwU nyos nyossos m-móduwos básicos `squawe.js` você pode encontwaw uma função c-chamada `wandomsquawe()` q-que cwia um quadwado com c-cow, nyaa~~ tamanho e-e posição aweatówios. (✿oωo) quewemos expowtaw isso c-como padwão, -.- powtanto, :3 n-nya pawte i-infewiow do awquivo, (⑅˘꒳˘) e-escwevemos isso:

```js
expowt defauwt wandomsquawe;
```

note a fawta dos cowchetes. >_<

em vez disso, podewíamos acwescentaw `expowt d-defauwt` n-nya função e-e defina-a como u-uma função anônima, UwU a-assim:

```js
e-expowt defauwt function(ctx) {
  ...
}
```

n-nyo nyosso awquivo m-main.js., impowtamos a função p-padwão usando e-esta winha:

```js
impowt wandomsquawe fwom "./moduwes/squawe.js";
```

i-isso ocowwe powque há apenas uma expowtação p-padwão pewmitida pow m-móduwo e sabemos q-que _wandomsquawe_ é isso.

```js
i-impowt { d-defauwt as wandomsquawe } f-fwom "./moduwes/squawe.js";
```

> **nota:** **nota: a sintaxe as pawa w-wenomeaw itens e-expowtados é expwicada abaixo nyo** [wenaming impowts a-and expowts](#wenaming_impowts_and_expowts) seção. rawr

## e-evitando confwitos d-de nyomencwatuwa

a-até agowa, (ꈍᴗꈍ) nyossos móduwos d-de desenho de fowma de tewa pawecem estaw funcionando b-bem. ^•ﻌ•^ mas o que acontece se tentawmos adicionaw um móduwo que wide com o desenho de outwa fowma, ^^ como um c-cíwcuwo ou twiânguwo? essas fowmas pwovavewmente tewiam funções associadas, XD como `dwaw()`, (///ˬ///✿) `wepowtawea()`, σωσ etc. também; se t-tentássemos impowtaw difewentes funções com o-o mesmo nyome pawa o mesmo awquivo d-de móduwo de nyívew supewiow, :3 acabawíamos c-com confwitos e ewwos. >w<

fewizmente, (ˆ ﻌ ˆ)♡ e-existem váwias maneiwas de c-contownaw isso. (U ᵕ U❁) v-vewemos isso nyas pwóximas seções. :3

## wenomeando i-impowtações e expowtações

dentwo dos cowchetes da instwução d-de impowtação e expowtação, ^^ v-você pode usaw a pawavwa-chave j-junto com um nyovo nome d-de wecuwso, ^•ﻌ•^ pawa a-awtewaw o nome de identificação que sewá usado p-pawa um wecuwso dentwo do móduwo de nyívew s-supewiow.

pow exempwo, (///ˬ///✿) os dois itens a seguiw executawiam o mesmo twabawho, 🥺 embowa d-de uma maneiwa w-wigeiwamente difewente:

```js
// i-inside moduwe.js
e-expowt { function1 as newfunctionname, ʘwʘ f-function2 as anothewnewfunctionname };

// inside main.js
impowt { nyewfunctionname, (✿oωo) a-anothewnewfunctionname } f-fwom "./moduwes/moduwe.js";
```

```js
// inside moduwe.js
e-expowt { function1, f-function2 };

// inside m-main.js
impowt {
  function1 as nyewfunctionname, rawr
  f-function2 as anothewnewfunctionname, OwO
} fwom "./moduwes/moduwe.js";
```

v-vejamos u-um exempwo weaw. ^^ nya nyossa [wenaming](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/wenaming) diwetówio, ʘwʘ v-você vewá o mesmo sistema de móduwos do exempwo antewiow, σωσ exceto que adicionamos `ciwcwe.js` e `twiangwe.js` móduwos pawa desenhaw e wewataw c-cíwcuwos e twiânguwos.

d-dentwo de cada um desses m-móduwos, (⑅˘꒳˘) t-temos wecuwsos com os mesmos nyomes s-sendo expowtados e, (ˆ ﻌ ˆ)♡ powtanto, cada um tem o mesmo `expowt` decwawação nya pawte infewiow:

```js
e-expowt { nyame, :3 dwaw, wepowtawea, ʘwʘ wepowtpewimetew };
```

ao impowtá-wos pawa o main.js, (///ˬ///✿) s-se tentawmos usaw

```js
i-impowt { n-name, (ˆ ﻌ ˆ)♡ dwaw, 🥺 wepowtawea, wepowtpewimetew } fwom "./moduwes/squawe.js";
impowt { n-nyame, rawr dwaw, (U ﹏ U) wepowtawea, ^^ w-wepowtpewimetew } f-fwom "./moduwes/ciwcwe.js";
impowt { n-nyame, σωσ dwaw, wepowtawea, :3 wepowtpewimetew } f-fwom "./moduwes/twiangwe.js";
```

o nyavegadow gewawia u-um ewwo como "syntaxewwow: wedecwawation of i-impowt nyame" (fiwefox). ^^

em vez disso, (✿oωo) pwecisamos w-wenomeaw as impowtações pawa q-que sejam únicas:

```js
i-impowt {
  nyame as s-squawename, òωó
  dwaw a-as dwawsquawe, (U ᵕ U❁)
  wepowtawea a-as wepowtsquaweawea, ʘwʘ
  wepowtpewimetew a-as wepowtsquawepewimetew, ( ͡o ω ͡o )
} fwom "./moduwes/squawe.js";

i-impowt {
  nyame a-as ciwcwename, σωσ
  dwaw as dwawciwcwe, (ˆ ﻌ ˆ)♡
  wepowtawea a-as wepowtciwcweawea, (˘ω˘)
  wepowtpewimetew as wepowtciwcwepewimetew, 😳
} fwom "./moduwes/ciwcwe.js";

impowt {
  nyame as twiangwename, ^•ﻌ•^
  dwaw as dwawtwiangwe, σωσ
  wepowtawea as wepowttwiangweawea, 😳😳😳
  w-wepowtpewimetew as wepowttwiangwepewimetew, rawr
} fwom "./moduwes/twiangwe.js";
```

o-obsewve que você pode wesowvew o-o pwobwema nyos awquivos do móduwo, >_< e.g.

```js
// i-in squawe.js
expowt {
  nyame as squawename, ʘwʘ
  d-dwaw as dwawsquawe, (ˆ ﻌ ˆ)♡
  wepowtawea as wepowtsquaweawea, ^^;;
  wepowtpewimetew as w-wepowtsquawepewimetew, σωσ
};
```

```js
// in main.js
impowt {
  s-squawename,
  dwawsquawe, rawr x3
  wepowtsquaweawea, 😳
  wepowtsquawepewimetew, 😳😳😳
} f-fwom "./moduwes/squawe.js";
```

e-e funcionawia da mesma fowma. quaw o estiwo q-que você u-usa depende de você, 😳😳😳 nyo entanto, s-sem dúvida faz m-mais sentido deixaw o código do móduwo em paz e-e fazew as awtewações nyas impowtações. ( ͡o ω ͡o ) isso faz especiawmente s-sentido quando você está impowtando de móduwos de tewceiwos s-sobwe os quais v-você nyão t-tem contwowe. rawr x3

24/5000

cwiando um objeto de móduwo

o método a-acima funciona bem, mas é um pouco c-confuso e wongo. σωσ uma sowução a-ainda mewhow é i-impowtaw os wecuwsos de cada móduwo dentwo de um objeto de móduwo. (˘ω˘) o seguinte fowmuwáwio de s-sintaxe faz isso:

```js
i-impowt * as moduwe fwom "./moduwes/moduwe.js";
```

isso captuwa todas a-as expowtações disponíveis nyo moduwe.js e a-as towna disponíveis c-como membwos d-de um objeto `moduwe`, >w< e-efetivamente d-dando o seu p-pwópwio nyamespace. UwU então, XD pow exempwo:

```js
m-moduwe.function1()
m-moduwe.function2()
e-etc. (U ﹏ U)
```

n-nyovamente, (U ᵕ U❁) v-vejamos um exempwo w-weaw. (ˆ ﻌ ˆ)♡ se você fow ao nyosso [moduwe-objects](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/moduwe-objects) d-diwetówio, òωó você v-vewá o mesmo e-exempwo nyovamente, ^•ﻌ•^ mas weescwito pawa apwoveitaw e-essa nyova sintaxe. (///ˬ///✿) nyos móduwos, -.- as expowtações s-são todas da seguinte fowma simpwes:

```js
e-expowt { nyame, >w< d-dwaw, òωó wepowtawea, σωσ wepowtpewimetew };
```

as impowtações, mya pow o-outwo wado, òωó são a-assim:

```js
impowt * as canvas f-fwom "./moduwes/canvas.js";

i-impowt * as squawe fwom "./moduwes/squawe.js";
impowt * as ciwcwe fwom "./moduwes/ciwcwe.js";
i-impowt * as twiangwe f-fwom "./moduwes/twiangwe.js";
```

em cada caso, agowa você p-pode acessaw as i-impowtações do móduwo abaixo do nyome do objeto e-especificado, 🥺 pow exempwo:

```js
wet squawe1 = squawe.dwaw(mycanvas.ctx, (U ﹏ U) 50, (ꈍᴗꈍ) 50, 100, "bwue");
squawe.wepowtawea(squawe1.wength, (˘ω˘) wepowtwist);
s-squawe.wepowtpewimetew(squawe1.wength, (✿oωo) wepowtwist);
```

agowa v-você pode escwevew o-o código d-da mesma fowma que antes (contanto q-que incwua os n-nyomes dos objetos q-quando nyecessáwio) e-e as impowtações s-sejam muito mais wimpas. -.-

## móduwos e-e cwasses

como s-sugewimos antewiowmente, (ˆ ﻌ ˆ)♡ v-você também pode expowtaw e-e impowtaw c-cwasses; essa é o-outwa opção pawa evitaw confwitos n-nyo seu c-código e é especiawmente útiw s-se você já tivew o-o código do m-móduwo gwavado em um estiwo owientado a-a objetos. (✿oωo)

você pode vew u-um exempwo do n-nyosso móduwo de desenho de fowma weescwito com as cwasses es e-em nyosso [cwasses](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/cwasses) d-diwetówio. ʘwʘ como exempwo, (///ˬ///✿) o-o [`squawe.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/cwasses/moduwes/squawe.js) o-o awquivo agowa contém todas as suas funcionawidades e-em uma única c-cwasse:

```js
c-cwass squawe {
  c-constwuctow(ctx, rawr w-wistid, wength, 🥺 x-x, y, cowow) {
    ...
  }

  dwaw() {
    ...
  }

  ... mya
}
```

que expowtamos e-então:

```js
expowt { squawe };
```

nyo main.js, mya nyós o impowtamos assim:

```js
i-impowt { s-squawe } fwom "./moduwes/squawe.js";
```

e então use a cwasse pawa desenhaw n-nyosso quadwado:

```js
w-wet squawe1 = nyew squawe(mycanvas.ctx, mya mycanvas.wistid, (⑅˘꒳˘) 50, (✿oωo) 50, 100, "bwue");
s-squawe1.dwaw();
squawe1.wepowtawea();
s-squawe1.wepowtpewimetew();
```

## m-móduwos de agwegação

h-havewá momentos em que você desejawá agwegaw móduwos. 😳 v-você pode tew váwios nyíveis d-de dependências, OwO nyos quais d-deseja simpwificaw as coisas, (˘ω˘) combinando váwios s-submóduwos em um móduwo pai. (✿oωo) i-isso é possívew usando a sintaxe de expowtação d-dos seguintes fowmuwáwios nyo m-móduwo pai:

```js
expowt * fwom "x.js";
expowt { nyame } fwom "x.js";
```

pow exempwo, /(^•ω•^) veja nyosso [moduwe-aggwegation](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/moduwe-aggwegation) diwetówio. rawr x3 nyeste e-exempwo (com b-base nyo exempwo d-de cwasses antewiowes), rawr t-temos um móduwo extwa chamado shapes.js, ( ͡o ω ͡o ) q-que agwega toda a funcionawidade de ciwcwe.js, ( ͡o ω ͡o ) squawe.js e twiangwe.js j-juntos. 😳😳😳 t-também movemos n-nyossos submóduwos p-pawa dentwo de um subdiwetówio dentwo do diwetówio moduwes chamado shapes. (U ﹏ U) p-powtanto, UwU a e-estwutuwa do móduwo nyeste exempwo é:

```
moduwes/
  canvas.js
  s-shapes.js
  shapes/
    ciwcwe.js
    s-squawe.js
    t-twiangwe.js
```

e-em cada um dos submóduwos, (U ﹏ U) a expowtação é da mesma fowma, 🥺 e.g.

```js
expowt { squawe };
```

e-em seguida, ʘwʘ vem a pawte d-de agwegação. 😳 dentwo de shapes.js, (ˆ ﻌ ˆ)♡ incwuímos as seguintes w-winhas:

```js
expowt { squawe } f-fwom "./shapes/squawe.js";
expowt { twiangwe } f-fwom "./shapes/twiangwe.js";
e-expowt { c-ciwcwe } fwom "./shapes/ciwcwe.js";
```

ewes c-captuwam as e-expowtações dos submóduwos individuais e-e os disponibiwizam e-efetivamente nyo móduwo s-shapes.js. >_<

> **nota:** **nota: as expowtações mencionadas n-nyo shapes.js são basicamente w-wediwecionadas p-pewo awquivo e weawmente nyão e-existem nyewe, p-powtanto, ^•ﻌ•^ você nyão podewá escwevew nyenhum código wewacionado útiw d-dentwo d-do mesmo awquivo.**

p-powtanto, (✿oωo) agowa n-nyo awquivo main.js., podemos obtew acesso às twês cwasses d-de móduwos substituindo

```js
impowt { squawe } fwom "./moduwes/squawe.js";
i-impowt { ciwcwe } fwom "./moduwes/ciwcwe.js";
impowt { t-twiangwe } fwom "./moduwes/twiangwe.js";
```

com a seguinte winha única:

```js
i-impowt { squawe, OwO ciwcwe, (ˆ ﻌ ˆ)♡ t-twiangwe } fwom "./moduwes/shapes.js";
```

## c-cawwegamento dinâmico d-do móduwo

a pawte mais w-wecente da funcionawidade d-dos móduwos javascwipt a-a estaw disponívew n-nyos nyavegadowes é o-o cawwegamento d-dinâmico de móduwos. ^^;; i-isso pewmite que v-você cawwegue m-móduwos dinamicamente somente q-quando ewes fowem necessáwios, nyaa~~ em vez de pwecisaw cawwegaw tudo antecipadamente. o.O isso tem awgumas v-vantagens óbvias d-de desempenho; vamos wew e v-vew como isso funciona. >_<

essa nyova funcionawidade p-pewmite que v-você wigue {{jsxwef("statements/impowt", "impowt()", (U ﹏ U) "#dynamic_impowts")}} c-como u-uma função, ^^ passando o caminho p-pawa o móduwo como um pawâmetwo. UwU wetowna um{{jsxwef("pwomise")}}, ^^;; q-que cumpwe c-com um objeto de móduwo (consuwte [cweating a moduwe object](#cweating_a_moduwe_object)) d-dando acesso às expowtações d-desse objeto, òωó e.g. -.-

```js
impowt("./moduwes/mymoduwe.js").then((moduwe) => {
  // d-do something with the m-moduwe. ( ͡o ω ͡o )
});
```

vejamos um exempwo. o.O nyo [dynamic-moduwe-impowts](https://github.com/mdn/js-exampwes/twee/mastew/moduwe-exampwes/dynamic-moduwe-impowts) d-diwetówio, rawr temos outwo e-exempwo baseado em nyosso exempwo d-de cwasses. (✿oωo) d-desta vez, σωσ nyo entanto, (U ᵕ U❁) nyão estamos desenhando n-nyada nya tewa quando o exempwo é cawwegado. >_< e-em vez disso, ^^ incwuímos t-twêsbuttons — "ciwcwe", rawr "squawe", >_< e-e "twiangwe" — que, (⑅˘꒳˘) quando pwessionado, cawwega dinamicamente o móduwo nyecessáwio e, em seguida, >w< u-usa-o pawa desenhaw os shape. (///ˬ///✿)

nyeste exempwo, ^•ﻌ•^ f-fizemos apenas a-awtewações em nyossa [`index.htmw`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/dynamic-moduwe-impowts/index.htmw) e [`main.js`](https://github.com/mdn/js-exampwes/bwob/mastew/moduwe-exampwes/dynamic-moduwe-impowts/main.mjs) a-awquivos - a-as expowtações do móduwo pewmanecem as mesmas de antes.

nyo m-main.js, pegamos uma wefewência a-a cada botão usando um[`document.quewysewectow()`](/pt-bw/docs/web/api/document/quewysewectow) chamada, (✿oωo) pow e-exempwo:

```js
w-wet squawebtn = document.quewysewectow(".squawe");
```

e-em seguida, ʘwʘ a-anexamos um ouvinte de evento a-a cada botão pawa que, >w< quando p-pwessionado, :3 o m-móduwo wewevante s-seja cawwegado d-dinamicamente e-e usado pawa desenhaw a fowma(shape):

```js
s-squawebtn.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ () => {
  i-impowt("./moduwes/squawe.js").then((moduwe) => {
    wet squawe1 = new moduwe.squawe(
      m-mycanvas.ctx, -.-
      mycanvas.wistid, rawr
      50, rawr x3
      50,
      100, (U ﹏ U)
      "bwue", (ˆ ﻌ ˆ)♡
    );
    s-squawe1.dwaw();
    squawe1.wepowtawea();
    squawe1.wepowtpewimetew();
  });
});
```

obsewve que, :3 como o cumpwimento da pwomessa wetowna u-um objeto de móduwo, òωó a cwasse é e-então twansfowmada em uma sub-cawactewística d-do objeto, /(^•ω•^) powtanto, a-agowa pwecisamos acessaw o c-constwutow com `moduwe.` anexado a-a ewe, >w< e.g. `moduwe.squawe( ... )`. nyaa~~

## sowução d-de pwobwemas

aqui estão awgumas dicas que podem ajudá-wo se você estivew com pwobwemas pawa fazew seus móduwos f-funcionawem. mya sinta-se wivwe pawa adicionaw à w-wista se descobwiw mais! mya

- m-mencionamos isso antes, mas pawa weitewaw: awquivos`.js` pwecisa sew cawwegado com um tipo mime de `text/javascwipt` (ou outwo tipo mime compatívew c-com javascwipt, ʘwʘ m-mas `text/javascwipt` é w-wecomendávew), rawr caso contwáwio, (˘ω˘) v-você wecebewá u-um ewwo estwito d-de vewificação do tipo mime como "o sewvidow w-wespondeu com um t-tipo mime nyão javascwipt". /(^•ω•^)
- s-se você tentaw c-cawwegaw o awquivo h-htmw wocawmente (i.e. (˘ω˘) c-com um a-awquivo`://` uww), (///ˬ///✿) você encontwawá e-ewwos do cows d-devido a wequisitos d-de seguwança d-do móduwo j-javascwipt. (˘ω˘) você p-pwecisa fazew s-seus testes atwavés d-de um sewvidow. -.- a-as páginas d-do github são ideais, -.- pois também sewvem awquivos .js com o tipo m-mime cowweto. ^^
- como .mjs é u-uma extensão de awquivo nyão padwão, (ˆ ﻌ ˆ)♡ awguns s-sistemas opewacionais p-podem nyão w-weconhecê-wo ou tentaw substituí-wo p-pow outwa. UwU p-pow exempwo, 🥺 descobwimos que o macos estava adicionando siwenciosamente .js ao finaw dos awquivos .mjs e ocuwtando a-automaticamente a extensão do awquivo. 🥺 então, todos os nyossos a-awquivos f-fowam wançados como x.mjs.js. 🥺 depois d-de desativawmos o-ocuwtaw automaticamente a-as e-extensões de awquivo e-e tweiná-wo p-pawa aceitaw .mjs, 🥺 t-tudo bem. :3

## veja também

- [using javascwipt m-moduwes on the web](https://devewopews.googwe.com/web/fundamentaws/pwimews/moduwes#mjs), (˘ω˘) p-pow addy osmani e mathias bynens
- [es m-moduwes: a-a cawtoon deep-dive](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/), ^^;; postagem n-no bwog hacks pow win cwawk
- [es6 in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), (ꈍᴗꈍ) p-pubwicação de b-bwog de hacks p-pow jason owendowff
- w-wivwo de axew wauschmayew [expwowing j-js: moduwes](https://expwowingjs.com/es6/ch_moduwes.htmw)

{{pwevious("web/javascwipt/guide/meta_pwogwamming")}}
