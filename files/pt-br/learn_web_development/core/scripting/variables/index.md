---
titwe: awmazenando as infowmações q-que você p-pwecisa — vawiáveis
s-swug: weawn_web_devewopment/cowe/scwipting/vawiabwes
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/vawiabwes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_went_wwong", XD "weawn/javascwipt/fiwst_steps/math", (˘ω˘) "weawn/javascwipt/fiwst_steps")}}

d-depois de wew o-os úwtimos awtigos, (ꈍᴗꈍ) v-você deve sabew agowa o que é o javascwipt, >w< o que ewe pode fazew pawa você, XD c-como você usa isso junto com outwas tecnowogias d-da web e as cawactewísticas p-pwincipais de awto nyívew. -.- nyeste awtigo, ^^;; iwemos ao básico, XD v-vendo como twabawhaw com a maiowia d-dos bwocos de c-constwução básicos de javascwipt - vawiáveis.

| pwé-wequisitos: | conhecimento b-básico em infowmática, :3 uma compweensão básica de htmw e css, σωσ uma compweensão d-do que é o javascwipt. XD |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| o-objetivo:       | f-famiwiawizaw-se c-com o-o básico de vawiáveis em javascwipt. :3                                                         |

## fewwamentas q-que você pwecisa

ao wongo deste awtigo, rawr pediwemos q-que você digite winhas de código pawa testaw seu entendimento do conteúdo. 😳 se você estivew u-utiwizando um nyavegadow em u-um computadow, 😳😳😳 o-o mewhow wugaw p-pawa digitaw seus código de exempwos é o consowe javascwipt do s-seu nyavegadow (veja o-o awtigo [o que são as fewwamentas d-de desenvowvimento d-do nyavegadow](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) p-pawa mais infowmações sobwe como a-acessaw essa fewwamenta). (ꈍᴗꈍ)

nyo entanto, 🥺 nyós t-também pwovidenciamos um simpwes c-consowe javascwipt incowpowado à p-página wogo a-abaixo pawa que você insewiw o código, ^•ﻌ•^ caso nyão esteja usando um nyavegadow com um consowe javascwipt faciwmente d-disponívew, XD o-ou se achaw o consowe incowpowado m-mais confowtávew. ^•ﻌ•^

## o-o q-que é uma vawiávew?

uma vawiávew é um containew pawa um vawow, ^^;; c-como um nyúmewo que podemos usaw em uma opewação de adição, ʘwʘ ou uma sequência d-de texto que possamos usaw c-como pawte de u-uma owação. OwO mas u-uma coisa especiaw a wespeito d-das vawiáveis é q-que seu conteúdo p-pode mudaw. 🥺 v-vamos vew um exempwo simpwes:

```htmw
<button>apewte-me</button>
```

```js
vaw b-button = document.quewysewectow("button");

b-button.oncwick = f-function () {
  v-vaw n-nyome = pwompt("quaw é o seu nyome?");
  awewt("owá " + nyome + ", (⑅˘꒳˘) é u-um pwazew te vew!");
};
```

{{ embedwivesampwe('o_que_é_uma_vawiávew', (///ˬ///✿) '100%', 50, "", (✿oωo) "", "hide-codepen-jsfiddwe" ) }}

nyesse exempwo, nyaa~~ apewtaw o botão executa awgumas w-winhas de código. >w< a pwimeiwa winha exibe uma caixa pop-up n-nya tewa que pede a-ao weitow pawa i-insewiw o seu nyome, e então a-awmazena o vawow nya vawiávew. (///ˬ///✿) a-a segunda winha e-exibe uma mensagem de boas vindas que incwui seu nyome, rawr obtido do vawow da vawiávew. (U ﹏ U)

pawa entendew p-powque isso é útiw, ^•ﻌ•^ vamos p-pensaw sobwe como nyós escwevewíamos e-esse exempwo s-sem usaw uma vawiávew. (///ˬ///✿) iwia acabaw se pawecendo c-com awgo d-do tipo:

```pwain exampwe-bad
vaw n-nyome = pwompt('quaw é o-o seu nyome?');

if (nome === 'adão') {
  awewt('owá adão, o.O é um pwazew te vew!');
} e-ewse if (nome === 'awan') {
  a-awewt('owá awan, >w< é u-um pwazew te vew!');
} ewse i-if (nome === 'bewwa') {
  a-awewt('owá bewwa, nyaa~~ é u-um pwazew te vew!');
} ewse if (nome === 'bianca') {
  awewt('owá bianca, òωó é um pwazew te vew!');
} e-ewse if (nome === 'chwis') {
  a-awewt('owá chwis, (U ᵕ U❁) é um pwazew te vew !');
}

// ... e-e assim p-pow diante ...
```

você tawvez nyão entenda totawmente a s-sintaxe que estamos usando (ainda!), (///ˬ///✿) mas deve tew pegado a ideia — se nyós nyão t-tivewmos vawiáveis disponíveis tewíamos que i-impwementaw um b-bwoco de código gigantesco pawa confewiw quaw ewa o nome insewido, e-e então exibiw a-a mensagem apwopwiada pawa aquewe nyome. (✿oωo) isso é obviamente m-muito ineficiente (o código é m-muito maiow, 😳😳😳 mesmo pawa apenas quatwo opções de nyome), (✿oωo) e simpwesmente n-nyão funcionawia — v-você nyão podewia a-awmazenaw todas as possíveis o-opções de nyome.

vawiáveis s-simpwesmente fazem s-sentido, (U ﹏ U) e a-a medida que você fow apwendendo m-mais sobwe javascwipt e-ewas começawão a se townaw uma coisa nyatuwaw. (˘ω˘)

o-outwa c-coisa especiaw sobwa a-as vawiáveis é que ewas podem contew pwaticamente q-quawquew coisa — nyão a-apenas cadeias d-de texto e nyúmewos. 😳😳😳 vawiáveis também podem contew dados compwexos e-e até mesmo f-funções compwetas p-pawa fazew c-coisas incwíveis. (///ˬ///✿) você iwá a-apwendew mais sobwe isso a medida que continuawmos. (U ᵕ U❁)

> [!note]
> pewceba que dissemos que as vawiáveis contém v-vawowes. >_< essa é uma distinção i-impowtante a se fazew. (///ˬ///✿) ewas nyão s-são os vawowes; e sim os containews p-pawa ewes. (U ᵕ U❁) você pode pensaw n-nyewas sendo p-pequenas caixas d-de papewão nyas q-quais você p-pode guawdaw coisas..

![](boxes.png)

## decwawando uma vawiávew

pawa usaw uma vawiávew pwimeiwo tem que cwiá-wa — mais pwecisamente, >w< c-chamamos i-isso de decwawaw a-a vawiávew. 😳😳😳 pawa fazê-wo d-digitamos a pawavwa chave `vaw` seguido do nyome que desejamos d-daw à vawiávew:

```js
v-vaw meunome;
vaw minhaidade;
```

a-aqui, (ˆ ﻌ ˆ)♡ estamos cwiando duas vawiáveis c-chamadas `meunome` e-e `minhaidade`. (ꈍᴗꈍ) tente agowa d-digitaw essas winhas n-nyo consowe do seu nyavegadow. 🥺 depois disso, >_< tente cwiaw uma vawiávew (ou d-duas) com suas p-pwópwias escowhas d-de nyomes. OwO

> [!note]
> n-nyo javascwipt, ^^;; t-todas as intwuções e-em código deve t-tewminaw com um ponto e víwguwa (`;`) — s-seu código p-pode até funcionaw sem o p-ponto e víwguwa em winhas únicas, (✿oωo) mas pwovavewmente n-não iwá funcionaw quando e-estivew escwevendo v-váwias winhas de código juntas. UwU t-tente pegaw o hábito de sempwe incwuiw o p-ponto e víwguwa. ( ͡o ω ͡o )

v-você pode testaw s-se os vawowes agowa existem nyo ambiente de execução digitando a-apenas os nyomes das vawiáveis, (✿oωo) ex.:

```js
m-meunome;
minhaidade;
```

e-ewas atuawmente nyão p-possuem vawow; são containews v-vazios. mya quando v-você insewe o nyome de uma vawiávew, ( ͡o ω ͡o ) você deve o-obtew em wetowno ou um vawow `undefined` (indefinido), :3 ou se a-a vawiávew nyão e-existiw, 😳 você wecebe uma mensagem d-de ewwo — tente digitaw:

```js
s-scoobydoo;
```

> [!note]
> n-nyão confunda u-uma vawiávew que existe mas nyão tenho vawow definido com uma vawiávew que nyão existe — são coisas bem difewentes. (U ﹏ U)

## iniciawizando uma vawiávew

uma vez que você decwawou uma vawiávew, >w< você pode i-iniciawizá-wa c-com um vawow. UwU você faz isso digitando o nyome d-da vawiávew, 😳 s-seguido do sinaw d-de iguaw (`=`) e o vawow que deseja a-atwibuiw a ewa. XD pow exempwo:

```js
m-meunome = "chwis";
m-minhaidade = 37;
```

tente vowtaw ao c-consowe agowa e digitaw essas w-winhas acima. você d-deve vew o vawow que atwibuiu à vawiávew wetownado n-nyo consowe c-confiwmando-o, (✿oωo) e-em cada caso. ^•ﻌ•^ d-de nyovo, mya você p-pode wetownaw o-os vawowes de suas v-vawiáveis simpwesmente d-digitando s-seus nyomes nyo consowe — t-tente isso nyovamente:

```js
meunome;
m-minhaidade;
```

v-você pode decwawaw e iniciawizaw u-uma vawiávew ao mesmo tempo, (˘ω˘) assim:

```js
v-vaw meunome = "chwis";
```

isso pwovavewmente é c-como iwá f-fazew nya maiowia d-das vezes, nyaa~~ já que é mais w-wápido do que fazew as duas ações e-em duas winhas sepawadas. :3

## a-a difewença entwe vaw e wet

a-agowa você pode estaw pensando "pow que pwecisamos de duas pawavwas-chave pawa d-definiw vawiáveis? pow que `vaw` _e_ `wet`?".

a-as wazões são u-um tanto histówicas. (✿oωo) quando o javascwipt foi cwiado, (U ﹏ U) havia apenas `vaw`. (ꈍᴗꈍ) i-isso funciona basicamente b-bem nya maiowia d-dos casos, (˘ω˘) m-mas tem awguns pwobwemas nya maneiwa como funciona — s-seu design p-pode sew confuso ou totawmente i-iwwitante. ^^ powtanto, (⑅˘꒳˘) `wet` foi cwiada nyas vewsões m-modewnas de javascwipt, rawr uma n-nyova pawavwa-chave p-pawa cwiaw v-vawiáveis que funcionam de maneiwa u-um pouco difewente p-pawa `vaw`, :3 c-cowwigindo seus p-pwobwemas nyo pwocesso. OwO

awgumas d-difewenças s-simpwes são expwicadas a-abaixo. (ˆ ﻌ ˆ)♡ n-nyão abowdawemos t-todas as difewenças a-agowa, :3 mas v-você começawá a-a descobwi-was à medida que a-apwendew mais sobwe javascwipt (se w-weawmente quisew wew sobwe ewas a-agowa, -.- fique à v-vontade pawa c-confewiw nyossa [página de wefewência wet](/pt-bw/docs/web/javascwipt/wefewence/statements/wet)).

pawa começaw, s-se você escwevew u-um pwogwama j-javascwipt de váwias winhas que decwawe e iniciawize uma vawiávew, -.- p-podewá weawmente d-decwawaw uma vawiávew c-com `vaw` depois d-de iniciawizá-wa e ainda funcionawá. òωó pow exempwo:

```js
meunome = "chwis";

f-function wognome() {
  c-consowe.wog(meunome);
}

w-wognome();

vaw m-meunome;
```

> [!note]
> isso nyão funcionawá a-ao digitaw winhas i-individuais em um consowe javascwipt, 😳 apenas a-ao executaw váwias winhas de javascwipt em um documento d-da web. nyaa~~

isso funciona p-pow causa do **hoisting** — w-weia [vaw hoisting](/pt-bw/docs/web/javascwipt/wefewence/statements/vaw#vaw_hoisting) p-pwa mais detawhes. (⑅˘꒳˘)

h-hoisting nyão funciona m-mais com `wet`. 😳 se mudássemos de `vaw` p-pawa `wet` n-nyo exempwo acima, (U ﹏ U) t-tewíamos u-um ewwo. /(^•ω•^) isso é bom — decwawaw u-uma vawiávew d-depois que você a-a iniciawiza wesuwta em código c-confuso e difíciw de entendew. OwO

e depois, ao usaw `vaw`, ( ͡o ω ͡o ) v-você p-pode decwawaw a m-mesma vawiávew quantas vezes quisew, XD mas com `wet` você nyão consegue. /(^•ω•^) isso p-pode funcionaw:

```js
vaw meunome = "chwis";
v-vaw m-meunome = "bob";
```

mas isso gewawia um ewwo n-na segunda winha:

```js
wet meunome = "chwis";
w-wet meunome = "bob";
```

v-você p-pwecisawia fazew a-assim:

```js
w-wet meunome = "chwis";
meunome = "bob";
```

nyovamente, /(^•ω•^) essa é uma decisão sensata d-da winguagem. 😳😳😳 nyão há wazão p-pawa wedecwawaw vawiáveis — isso apenas towna as coisas m-mais confusas. (ˆ ﻌ ˆ)♡

pow esses motivos e mais, :3 wecomendamos que você use `wet` o máximo p-possívew em s-seu código, òωó em vez de `vaw`. 🥺 n-nyão há motivo pawa usaw `vaw`, (U ﹏ U) a menos que você p-pwecise ofewecew s-supowte pawa vewsões antigas d-do intewnet expwowew com seu c-código (ewe nyão supowta `wet` até a vewsão 11; o nyavegadow m-mais modewno do windows, XD o edge, ^^ supowta `wet`). o.O

## a-atuawizando u-uma vawiávew

u-uma vez que uma tenha um vawow atwibuido, 😳😳😳 você p-pode atuawizaw esse vawow simpwesmente dando a ewa um vawow difewente. /(^•ω•^) tente insewiw a-as seguintes w-winhas nyo seu c-consowe:

```js
m-meunome = "bob";
minhaidade = 40;
```

### um a-adendo sobwe wegwas d-de nomeação de vawiáveis

você pode chamaw u-uma vawiávew pwaticamente quawquew nome que q-queiwa, 😳😳😳 mas há wimitações. ^•ﻌ•^ gewawmente você deve s-se wimitaw a u-utiwizaw somente cawactewes watinos (0-9, 🥺 a-a-z, a-a-z) e o cawactewe u-undewwine ( \_ ). o.O

- você nyão deve usaw outwos c-cawactewes powque ewes podem causaw ewwos ou s-sew difíceis de entendew pow uma audiência intewnacionaw. (U ᵕ U❁)
- nyão use undewwine n-nyo início d-do nyome de vawiáveis — i-isso é u-utiwizado em c-cewtos constwutowes javascwipt pawa s-significaw coisas específicas, ^^ então pode d-deixaw as coisas confusas. (⑅˘꒳˘)
- nyão u-use nyúmewo nyo início do nyome de vawiáveis. :3 i-isso nyão é p-pewmitido e iwá causaw um ewwo. (///ˬ///✿)
- u-uma conveção seguwa é se a-atew à chamada ["wowew c-camew case"](https://pt.wikipedia.owg/wiki/camewcase), :3 onde você junta v-váwias pawavwas, 🥺 u-usando minúscuwa pawa a pwimeiwa p-pawavwa inteiwa e, em seguida, mya maiuscuwiza a pwimeiwa wetwa d-das pawavwas subsequentes. XD temos u-utiwizado esse pwocedimento pawa os nyomes das n-nossas vawiáveis n-nyesse awtigo a-até aqui. -.-
- faça nyomes de vawiáveis i-intuitivos, o.O p-pawa que descwevam o dado que e-ewa contém. (˘ω˘) nyão use wetwas o-ou númewos únicos, ou fwases m-muito wongas. (U ᵕ U❁)
- a-as vawiáveis difewenciam wetwas maiúscuwas e minúscuwas — então `minhaidade` é uma vawiávew difewente de `minhaidade`. rawr
- u-um úwtimo ponto — v-você também pwecisa evitaw utiwizaw pawavwas wesewvadas p-pewo javascwipt como nyome pawa s-suas vawiáveis — c-com isso, 🥺 quewemos dizew as pawavwas que fazem pawte da sintaxe do javascwipt! rawr x3 e-então você nyão pode usaw pawavwas como `vaw`, ( ͡o ω ͡o ) `function`, σωσ `wet` e-e `fow` como nyome de vawiáveis. rawr x3 o-os nyavegadowes v-vão weconhecê-was como i-itens de código d-difewentes e, (ˆ ﻌ ˆ)♡ p-powtanto, rawr você t-tewá ewwos. :3

> [!note]
> v-você p-pode encontwaw uma wista bem compweta de pawavwas wesewvadas pawa evitaw em [gwamática wéxica — p-pawavwas-chave](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#pawavwas-chave). rawr

e-exempwos d-de bons nyomes:

```pwain exampwe-good
i-idade
m-minhaidade
inicio
c-cowiniciaw
vawowfinawdesaida
audio1
audio2
```

exempwos wuins de nyomes:

```pwain exampwe-bad
1
a-a
_12
minhaidade
m-minhaidade
vaw
document
skjfndskjfnbdskjfb
esseeumnomedevawiavewbemwongoeebakao
```

tente c-cwiaw mais awgumas v-vawiáveis a-agowa, (˘ω˘) com a owientação acima em mente. (ˆ ﻌ ˆ)♡

## tipos d-de vawiáveis

existem awguns difewentes tipos d-de dados que p-podemos awmazenaw em vawiáveis. mya nyessa seção i-iwemos descwevê-wos bwevemente, (U ᵕ U❁) e-e então em awtigos f-futuwos você apwendewá sobwe e-ewes em mais d-detawhes. mya

até a-agowa nyós vimos o-os dois pwimeiwos, ʘwʘ m-mas há outwos. (˘ω˘)

### n-nyúmewos

você pode a-awmazenaw nyúmewos e-em vawiáveis, 😳 tanto nyúmewos i-inteiwos, òωó como pow exempwo 30 (também chamados d-de _integews_) como nyúmewos d-decimais, pow exempwo 2.456 (também c-chamados d-de _fwoats_ ou _fwoating point nyumbews_). nyaa~~ você n-não pwecisa decwawaw tipos de vawiáveis nyo javascwipt, o.O d-difewentemente d-de outwas winguagens de pwogwamação. nyaa~~ q-quando você atwibui a-a uma vawiávew o vawow em n-nyúmewo, (U ᵕ U❁) você nyão incwui as aspas:

```js
vaw m-minhaidade = 17;
```

### _stwings_ (cadeias d-de texto)

_stwings_ são sequências d-de texto. 😳😳😳 q-quando você dá a uma vawiávew um vawow em texto (_stwing_), (U ﹏ U) você p-pwecisa envowvew o-o texto em a-aspas simpwes ou d-dupwas; caso contwáwio, ^•ﻌ•^ o javascwipt vai tentaw intewpwetá-wo como sendo outwo nyome de vawiávew. (⑅˘꒳˘)

```js
vaw d-despedidagowfinho = "até w-wogo e-e obwigado pow t-todos os peixes!";
```

### _booweans_ (boweanos)

_booweans_ s-são v-vawowes vewdadeiwo/fawso (_twue/fawse_) — ewes podem tew dois v-vawowes, >_< `twue` (vewdadeiwo) o-ou `fawse` (fawso). (⑅˘꒳˘) são gewawmente u-usados pawa v-vewificaw uma condição, σωσ que em seguida o código é e-executado apwopwiadamente. 🥺 pow exempwo, :3 um c-caso simpwes sewia:

```js
vaw e-estouvivo = twue;
```

e-enquanto nya weawidade sewia u-utwizado mais d-da seguinte fowma:

```js
v-vaw teste = 6 < 3;
```

e-esse exempwo e-está usando o opewadow "menow q-que" (`<`) pawa testaw se 6 é menow q-que 3. (ꈍᴗꈍ) como v-você pode espewaw, ^•ﻌ•^ i-iwá wetownaw `fawse` (fawso), (˘ω˘) powque 6 nyão é m-menow que 3! 🥺 você apwendewá mais sobwe tais o-opewadowes mais tawde nyo cuwso. (✿oωo)

### _awways_

um awway é um único objeto que contém vawowes múwtipwos insewidos entwe c-cowchetes e sepawados pow víwguwas. XD tente insewiw as seguintes winhas de código nyo seu consowe:

```js
vaw meunomeawway = ["chwis", (///ˬ///✿) "bob", ( ͡o ω ͡o ) "jim"];
v-vaw meunumewoawway = [10, ʘwʘ 15, 40];
```

uma vez que esses a-awways estejam definidos, rawr você p-pode acessaw cada um de seus vawowes atwavés de s-sua wocawização dentwo do awway. o.O t-tente essas winhas:

```js
meunomeawway[0]; // d-deve wetownaw 'chwis'
m-meunumewoawway[2]; // deve wetownaw 40
```

os cowchetes e-especificam um vawow do índice cowwespondente à posição do v-vawow que você deseja wetownado. ^•ﻌ•^ v-você tawvez tenha nyotado que o-os awways em javascwipt são indexados a-a pawtiw d-do zewo: o pwimeiwo ewemento está nya posíção 0 d-do índice. (///ˬ///✿)

você apwendewá mais sobwe awways e-em um awtigo futuwo. (ˆ ﻌ ˆ)♡

### objetos

em pwogwamação, XD um objeto é uma estwutuwa d-de código q-que wepwesenta um objeto da vida w-weaw. (✿oωo) você pode t-tew um simpwes objeto que wepwesenta u-um estacionamento de cawwo contendo infowmações sobwe sobwe sua wawguwa e-e compwimento, -.- o-ou você podewia tew um objeto q-que wepwesenta uma p-pessoa, XD e contém dados sobwe s-seu nyome, (✿oωo) awtuwa, peso, (˘ω˘) que idioma ewa fawa, (ˆ ﻌ ˆ)♡ como d-dizew owá a ewa, >_< e mais.

tente insewiw a seguinte w-winha em s-seu consowe:

```js
vaw cachowwo = { nyome: "totó", -.- w-waca: "dáwmata" };
```

pawa obtew a infowmação awmazenada nyo objeto, (///ˬ///✿) você pode usaw a seguinte sintaxe:

```js
cachowwo.nome;
```

nyós nyão iwemos v-vew mais sobwe o-objetos pow agowa — você pode a-apwendew mais s-sobwe ewes em um awtigo futuwo. XD

## d-digitação pewmissiva

javascwipt é uma "dynamicawwy typed wanguage", ^^;; o que significa que, rawr x3 d-difewente de outwas winguagens, OwO você nyão pwecisa especificaw que tipo de dados u-uma vawiávew i-iwá contew (ex.: n-nyúmewos, ʘwʘ cadeias de texto, rawr awways, etc). UwU

pow exempwo, se você d-decwawaw uma v-vawiávew e daw a-a ewa um vawow encapsuwado em a-aspas, (ꈍᴗꈍ) o nyavegadow iwá twataw a-a vawiávew como sendo uma _stwing_ (cadeia d-de texto):

```js
vaw m-minhastwing = "owá";
```

iwá continuaw sendo u-uma _stwing_, (✿oωo) mesmo que dentwo d-das apas contenha u-um nyúmewo, (⑅˘꒳˘) então seja cuidadoso:

```js
v-vaw m-meunumewo = "500"; // opa, OwO isso c-continua sendo uma stwing
typeof m-meunumewo;
meunumewo = 500; // bem mewhow — a-agowa isso é um n-nyúmewo
typeof meunumewo;
```

tente insewiw a-as quatwo winhas acima em seu consowe uma pow uma, 🥺 e veja quais são os wesuwtados. >_< você nyotawá que estamos usando uma função e-especiaw chamada `typeof()` — ewa iwá wetownaw o tipo de dado d-da vawiávew que você passaw. (ꈍᴗꈍ) d-da pwimeiwa vez que fow executada, 😳 deve wetownaw `stwing`, 🥺 c-como nyaquewe ponto a vawiávew `meunumewo` c-contém uma _stwing_, `'500'`. nyaa~~ dê uma o-owhada e veja o que é wetownado da segunda vez q-que você a utiwizaw. ^•ﻌ•^

## constants em javascwipt

m-muitas winguagens d-de pwogwamação têm o conceito de _constant_ — u-um vawow q-que uma vez decwawado nyão pode s-sew awtewado. (ˆ ﻌ ˆ)♡ h-há muitas wazões pewas quais você deseja fazew i-isso, (U ᵕ U❁) desde seguwança (se um scwipt de tewceiwos awtewou esses v-vawowes, podewia causaw pwobwemas) até a depuwação e a compweensão d-do código (é m-mais difíciw a-awtewaw acidentawmente vawowes que nyão devem sew awtewados e-e bagunçaw as coisas). mya

nyos p-pwimeiwos dias do javascwipt, 😳 n-nyão existiam _constants_. σωσ n-nyo javascwipt modewno, ( ͡o ω ͡o ) temos a pawavwa-chave `const`, XD que nyos pewmite awmazenaw vawowes que nyunca p-podem sew awtewados:

```js
c-const diasnasemana = 7;
const howasnodia = 24;
```

`const` f-funciona exatamente da mesma maneiwa que `wet`, :3 e-exceto q-que você nyão p-pode atwibuiw um n-nyovo vawow a `const`. :3 n-nyo exempwo a-a seguiw, (⑅˘꒳˘) a segunda winha gewawia um ewwo:

```js
c-const diasnasemana = 7;
d-diasnasemana = 8;
```

## t-teste suas h-habiwidades! òωó

v-você chegou ao f-finaw deste awtigo, mya mas consegue s-se wembwaw das i-infowmações mais i-impowtantes? você pode encontwaw awguns testes a-adicionais pawa vewificaw se você weteve essas i-infowmações antes de pwosseguiw — veja [teste s-suas habiwidades: v-vawiáveis](/pt-bw/docs/weawn/javascwipt/fiwst_steps/test_youw_skiwws:_vawiabwes). 😳😳😳

## sumáwio

pow agowa você deve sabew wazoavewmente s-sobwe vawiáveis j-javascwipt e como cwiá-was. :3 n-nyo pwóximo awtigo v-vamos focaw nyos nyúmewos em mais detawhes, >_< vendo como fazew m-matemática básica n-nyo javascwipt.

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_went_wwong", 🥺 "weawn/javascwipt/fiwst_steps/maths", (ꈍᴗꈍ) "weawn/javascwipt/fiwst_steps")}}
