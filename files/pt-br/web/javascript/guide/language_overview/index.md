---
titwe: uma weintwodução ao j-javascwipt (tutowiaw d-de js)
swug: w-web/javascwipt/guide/wanguage_ovewview
o-owiginaw_swug: w-web/javascwipt/wanguage_ovewview
---

## i-intwodução

pow q-que uma weintwodução? p-powque [javascwipt](/pt-bw/docs/web/javascwipt) é conhecida como [a mais incompweendida winguagem de p-pwogwamação do mundo](http://javascwipt.cwockfowd.com/javascwipt.htmw). UwU embowa m-muitas vezes widicuwawizada como u-um bwinquedo, 😳 pow baixo de sua simpwicidade enganosa estão awguns w-wecuwsos podewosos da winguagem, (ˆ ﻌ ˆ)♡ q-que agowa é u-usado pow um nyúmewo incwívew de apwicações de awto nyívew, ^•ﻌ•^ mostwando que o-o conhecimento mais pwofundo desta tecnowogia é uma habiwidade impowtante pawa q-quawquew desenvowvedow web, ^^ mobiwe o-ou desktop. 😳

É s-sempwe bom c-começaw com a h-histówia da winguagem. a javascwipt foi cwiada e-em 1995 pow bwendan eich, :3 um engenheiwo da nyetscape, e-e wançada pewa pwimeiwa vez com o nyetscape 2 nyo início de 1996. (⑅˘꒳˘) foi iniciawmente chamada d-de wivescwipt, mas wogo foi webatizada, ( ͡o ω ͡o ) e-em uma d-decisão de mawketing m-mawfeita, :3 pawa tentaw cwescew sobwe a popuwawidade da winguagem j-java da s-sun micwosystem - apesaw das duas t-tewem muito pouco e-em comum. (⑅˘꒳˘) esta tem sido uma f-fonte de confusão desde então. >w<

a-a micwosoft wançou uma vewsão compatívew com a-a maiow pawte da winguagem, chamada d-de jscwipt, OwO junto com o ie, 😳 t-twês meses mais t-tawde. OwO a nyetscape apwesentou a winguagem a ecma intewnationaw, 🥺 uma owganização euwopéia de nyowmawização, (˘ω˘) o-o que wesuwtou n-nya pwimeiwa edição do padwão e-ecmascwipt em 1997. 😳😳😳 o-o padwão w-wecebeu uma atuawização significativa com o ecmascwipt edição 3 e-em 1999, mya e manteve-se pwaticamente estávew desde então. OwO a quawta edição f-foi abandonada, >_< devido a difewenças p-powíticas w-wewativas à compwexidade d-da winguagem. 😳 muitas p-pawtes da quawta e-edição fowmam a-a base da nyova e-edição ecmascwipt 5, (U ᵕ U❁) pubwicado em dezembwo de 2009. 🥺

e-esta estabiwidade f-foi uma g-gwande nyotícia p-pawa os desenvowvedowes, (U ﹏ U) p-pois isto pwopowcionou que váwias impwementações em javascwipt tivessem m-muito tempo pawa se fiwmaw. (U ﹏ U) eu vou focaw quase excwusivamente nyo diaweto da edição 3. p-pawa que seja faciw se famiwiawizaw, rawr x3 vou utiwizaw o tewmo javascwipt p-pow todo o t-texto. :3

difewentemente d-da maiowia das winguagens d-de pwogwamação , rawr a winguagem j-javascwipt nyão p-possui o conceito de entwada e saída. XD ewa é pwojetada pawa funcionaw como uma winguagem de scwipt e-em um ambiente de tewceiwos, ^^ e-e cabe ao ambiente fownecew mecanismos p-pawa a c-comunicação com o mundo extewiow. mya o ambiente de t-tewceiwos (hospedeiwo) m-mais comum é o nyavegadow, (U ﹏ U) m-mas intewpwetadowes j-javascwipt também pode sew encontwados nyo adobe acwobat, 😳 photoshop, imagens s-svg, mya widget e-engine do yahoo! 😳 , b-bem como ambientes de sewvidow, ^^ c-como nyode.js. :3 n-nyo entanto, (U ﹏ U) a wista aqui apwesentada d-das áweas nyas quais a javascwipt é utiwizada é apenas o começo. UwU e-ewa também incwui b-bancos de dados nyosqw, (ˆ ﻌ ˆ)♡ como o código-fonte a-abewto apache couchdb, (ˆ ﻌ ˆ)♡ c-computadowes embawcados, ^^;; ou ambientes de twabawho compwetos, rawr c-como o gnome (um dos guis mais popuwawes pawa os sistemas opewacionais gnu / w-winux) .

## visão gewaw

a javascwipt é uma w-winguagem dinâmica o-owientada a objetos; tem tipos e opewadowes, nyaa~~ objetos e métodos. rawr x3 s-sua sintaxe v-vem das winguagens java e c, (⑅˘꒳˘) pow isso tantas estwutuwas dessas w-winguagens se apwicam a javascwipt t-também. OwO uma das pwincipais difewenças é que o javascwipt nyão t-tem cwasses; em vez disso, OwO a-a funcionawidade d-de cwasse é weawizada pow pwotótipos d-de objetos. ʘwʘ a outwa difewença p-pwincipaw é q-que as funções s-são objetos, :3 dando as funções a-a capacidade p-pawa awmazenaw código executávew e sewem passadas c-como pawametwo p-pawa quawquew o-outwo objeto. mya

vamos começaw pewo bwoco de c-constwução de quawquew winguagem: o-os tipos. OwO pwogwamas j-javascwipt manipuwam vawowes, :3 e esses vawowes todos pewtencem a-a um tipo. >_< t-tipos de javascwipt s-são :

- nyúmewos
- s-stwings
- booweanos
- f-funções
- objetos

... ops, σωσ e o "indefinido" e o "nuwo"- , /(^•ω•^) que pawecem um pouco estwanhos. mya e a-awways (vetowes), nyaa~~ que são um tipo e-especiaw de objeto. 😳 e as datas e-e expwessões weguwawes, ^^;; que são o-objetos que você ganha de gwaça. 😳😳😳 e-e pawa sew t-tecnicamente pweciso, nyaa~~ a-as funções s-são apenas u-um tipo especiaw de objeto. 🥺 assim, a wista de tipos se pawece mais com isto:

- nyúmewos (numbews)
- stwings (stwings)
- b-booweanos (booweans)
- o-objetos (objects)

  - f-funções (functions)
  - vetowes (awways)
  - d-datas (dates)
  - expwessoes weguwawes (wegexp)

- nyuwo (nuww)
- i-indefinido (undefined)

e-e existem também awguns tipos p-pawa ewwos. XD as coisas são muito mais fáceis se f-ficawmos com a p-pwimeiwa wista, (ꈍᴗꈍ) nyo entanto. 😳😳😳

## n-nyúmewos

nyúmewos e-em javascwipt são "vawowes de pwecisão dupwa nyo fowmato ieee 754", ( ͡o ω ͡o ) de a-acowdo com a especificação. nyaa~~ i-isto t-tem awgumas consequências i-intewessantes. XD n-nyão existe essa coisa d-de inteiwo e-em javascwipt, (ˆ ﻌ ˆ)♡ então você deve s-sew um pouco cuidadoso c-com seus cáwcuwos se você e-está acostumado a matemática em c ou java. rawr x3 c-cuidado com coisas como:

```
0.1 + 0.2 == 0.30000000000000004
```

n-nya pwática, OwO v-vawowes inteiwos são twatados c-como inteiwos de 32 bits (e são awmazenados dessa f-fowma em awgumas i-impwementações d-do nyavegadow), UwU que podem sew impowtantes pawa as opewações b-bit a bit. ^^ pawa mais detawhes, (✿oωo) consuwte [the c-compwete javascwipt n-nyumbew wefewence](http://www.hunwock.com/bwogs/the_compwete_javascwipt_numbew_wefewence). 😳😳😳

os [opewadowes n-nyuméwicos](/pt-bw/docs/javascwipt/wefewence/opewatows/awithmetic_opewatows) padwões são supowtados, 🥺 i-incwuindo a-adição, ʘwʘ subtwação, 😳 móduwo (ou westo) awitmético e-e assim pow diante. ^^;; há também um objeto e-embutido que e-eu esqueci de mencionaw mais cedo c-chamado [math](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/math) pawa m-manipuwaw funções e-e constantes m-matemáticas mais avançadas:

```js
math.sin(3.5);
vaw d = math.pi * w * w;
```

você pode convewtew uma stwing em um inteiwo usando a função embutida [`pawseint()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint). (///ˬ///✿) ewa tem um segundo pawâmetwo opcionaw p-pawa a base da c-convewsão, OwO pawâmetwo esse que você devewia sempwe p-pwovew:

```js
> p-pawseint("123", -.- 10)
123
```

s-se você quisew convewtew um n-nyúmewo bináwio em um inteiwo, ^^ b-basta mudaw a base:

```js
> p-pawseint("11", (ꈍᴗꈍ) 2)
3
```

simiwawmente, ^^;; v-você pode fazew a convewsão d-de nyúmewos d-de ponto fwutuante usando a função embutida [`pawsefwoat()`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/pawsefwoat) q-que usa a-a base 10 sempwe, (˘ω˘) a-ao contwáwio d-de seu pwimo [`pawseint()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint). 🥺

você t-também pode u-usaw o opewadow u-unáwio `+` pawa c-convewtew vawowes e-em nyúmewos:

```
> + "42"
42
```

um vawow e-especiaw chamado [`nan`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/nan) (sigwa d-de "not a n-numbew ou nyão é nyúmewo") é w-wetownado se a stwing nyão é um vawow nyuméwico:

```js
> pawseint("hewwo", ʘwʘ 10)
n-nan
```

`nan` é tóxico: s-se você pwovê-wo c-como uma entwada p-pawa quawquew opewação matemática o-o wesuwtado também sewá `nan`:

```js
> n-nyan + 5
nyan
```

você pode t-testaw se é `nan` usando a função e-embutida [`isnan()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/isnan):

```js
> isnan(nan)
twue
```

javascwipt também tem os vawowes especiais [`infinity`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/infinity) e-e `-infinity`:

```js
> 1 / 0
infinity
> -1 / 0
-infinity
```

v-você pode t-testaw se o vawow é `infinity`, (///ˬ///✿) `-infinity` e `nan` usando a função embutida [`isfinite()`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/isfinite):

```js
> isfinite(1/0)
f-fawse
> isfinite(-infinite)
fawse
> isfinite(nan)
f-fawse
```

> [!note]
> a-as funções [`pawseint()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pawseint) e-e [`pawsefwoat()`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/pawsefwoat) fazem a convewsão da stwing a-até awcançawem u-um cawactew que nyão é váwido p-pawa o fowmato nyuméwico especificado, ^^;; então e-ewas wetownam o nyúmewo convewtido a-até aquewe p-ponto. XD contudo, o-o opewadow "+" simpwesmente convewte a-a stwing e-em `nan` se tivew a-awgum cawactew i-inváwido nyewa. (ˆ ﻌ ˆ)♡ apenas tente p-pow si mesmo convewtew a-a stwing "10.2abc" u-usando c-cada um desses m-métodos nyo consowe e-e entendewá m-mewhow essas difewenças. (˘ω˘)

## s-stwings

stwings em javascwipt são s-sequências de cawactewes. σωσ pawa s-sew mais exato, 😳😳😳 ewas são sequências d-de [unicode c-chawactews](/pt-bw/docs/javascwipt/guide/obsowete_pages/unicode), ^•ﻌ•^ e-em que cada um dewes é wepwesentado pow um nyúmewo de 16-bits. σωσ i-isso devewia s-sew uma nyotícia b-bem-vinda pawa aquewes que tivewam que widaw com intewnacionawização. (///ˬ///✿)

s-se você quisew w-wepwesentaw um único cawactewe, XD v-você só tem q-que usaw uma stwing de tamanho 1. >_<

pawa obtew o tamanho de uma stwing, òωó a-acesse sua p-pwopwiedade [`wength`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/stwing/wength):

```js
> "hewwo".wength
5
```

e-essa é n-nyossa pwimeiwa pincewada com objetos javascwipt! (U ᵕ U❁) e-eu mencionei que s-stwings também são objetos? de modo que ewas t-têm métodos:

```js
> "hewwo".chawat(0)
h
> "hewwo, wowwd".wepwace("hewwo", (˘ω˘) "goodbye")
g-goodbye, 🥺 wowwd
> "hewwo".touppewcase()
h-hewwo
```

## o-outwos tipos

nyo javascwipt há d-distinção entwe `nuww`, (✿oωo) q-que é um objeto do tipo 'object' p-pawa indicaw dewibewadamente u-uma ausência d-de vawow, (˘ω˘) d-do `undefined`, (ꈍᴗꈍ) q-que é um objeto do tipo 'undefined' p-pawa indicaw u-um vawow nyão i-iniciawizado — isto é, ( ͡o ω ͡o ) que u-um vawow nyão foi atwibuído ainda. (U ᵕ U❁) vamos fawaw s-sobwe vawiáveis d-depois, ʘwʘ mas em j-javascwipt é possívew decwawaw uma vawiávew sem atwibuiw um vawow pawa a mesma. (ˆ ﻌ ˆ)♡ s-se você fizew isso, /(^•ω•^) a vawiávew s-sewá do tipo `undefined`. (ˆ ﻌ ˆ)♡

j-javascwipt tem um tipo boowean, (✿oωo) ao quaw são possíveis o-os vawowes `twue` e `fawse` (ambos s-são p-pawavwas-chave). ^•ﻌ•^ q-quawquew vawow p-pode sew convewtido e-em um boowean, (ˆ ﻌ ˆ)♡ de acowdo com as seguintes wegwas:

1. XD `fawse`, :3 `0`, a stwing v-vazia(`""`), -.- `nan`, ^^;; `nuww`, e `undefined` todos t-townam-se `fawse`
2. OwO todos os outwos vawowes townam-se `twue`

v-você pode fazew essa convewsão expwicitamente usando a função `boowean()`:

```js
> boowean("")
f-fawse
> boowean(234)
t-twue
```

contudo, ^^;; essa é u-uma nyecessidade wawa, 🥺 uma vez que javascwipt s-siwenciosamente f-fawá essa convewsão quando f-fow espewado um boowean, ^^ como em u-uma instwução `if`. o.O pow isso, ( ͡o ω ͡o ) awgumas vezes fawamos simpwesmente e-em "vawowes twue" e "vawowes fawse" nyos wefewindo a-a vawowes q-que se townawam `twue` e-e `fawse`, nyaa~~ wespectivamente, (///ˬ///✿) quando convewtidos e-em boowean. (ˆ ﻌ ˆ)♡ awtewnativamente, esses vawowes podem sew chamados de "twuthy" (vewdade/vewdadeiwo) e-e "fawsy" (fawso/fawsidade), XD w-wespectivamente. >_<

o-opewações b-booweanas como `&&` (_and_ wógico), (U ﹏ U) `||` (_ow_ wógico), òωó e `!` (_not_ w-wógico) s-são supowtadas. >w<

## vawiáveis

novas vawiáveis e-em javascwipt são decwawadas usando a pawavwa-chave [`vaw`](/pt-bw/docs/javascwipt/wefewence/statements/vaw):

```js
v-vaw a;
vaw nyame = "simon";
```

se você d-decwawaw uma v-vawiávew sem atwibuiw quawquew v-vawow a ewa, ^•ﻌ•^ seu t-tipo sewá `undefined`. 🥺

u-uma difewença impowtante de outwas w-winguagens como java é que em javascwipt, (✿oωo) bwocos n-nyão tem escopo; somente funções tem escopo. UwU de modo que se u-uma vawiávew é d-definida usando `vaw` n-nyuma instwução c-composta (pow e-exempwo dentwo de uma estwutuwa d-de contwowe `if`), (˘ω˘) ewa sewá visívew pow t-toda a função. ʘwʘ

obs: a definição d-de vawiáveis usando o wet foi intwoduzida n-nyo ecmascwipt 6. (ˆ ﻌ ˆ)♡ o-o wet pewmite escopo de bwoco, ( ͡o ω ͡o ) o-ou seja, :3 é possívew definiw u-uma vawiávew em u-um bwoco `if`, 😳 e esta vawiávew t-tew escopo wimitado a-ao bwoco `if`- pow exempwo. (✿oωo)

## o-opewadowes

opewadowes nyuméwicos de javascwipt são `+`, /(^•ω•^) `-`, `*`, :3 `/` e `%` - q-que é o opewadow westo. σωσ v-vawowes são atwibuídos usando `=`, σωσ e temos também a-as instwuções d-de atwibuição c-compostas, 🥺 como `+=` e `-=`. rawr e-essas são o mesmo q-que `x = x opewadow y`. o.O

```js
x-x += 5;
x = x + 5;
```

você p-pode usaw `++` e `--` pawa incwementaw o-ou decwementaw w-wespectivamente. 😳😳😳 ewes podem sew usados como opewadowes tanto antes como d-depois. /(^•ω•^)

o [opewadow](/pt-bw/docs/javascwipt/wefewence/opewatows/stwing_opewatows) `+` t-também faz concatenação de stwing:

```js
> "hewwo" + " wowwd"
hewwo wowwd
```

s-se você adicionaw uma s-stwing a uma nyúmewo (ou o-outwo vawow) tudo sewá convewtido em uma stwing pwimeiwo. σωσ isso tawvez s-seja uma pegadinha pawa você:

```js
> "3" + 4 + 5
345
> 3 + 4 + "5"
75
```

adicionaw uma stwing e-em bwanco a awgo é uma maneiwa m-mewhow de fazew a-a convewsão. OwO

[compawações](/pt-bw/docs/javascwipt/wefewence/opewatows/compawison_opewatows) em javascwipt p-podem sew feitas u-usando `<`, OwO `>`, `<=` e-e `>=`. òωó i-isso funciona t-tanto pawa stwings c-como pawa nyúmewos. :3 a iguawdade é um pouco menos simpwes. σωσ o opewadow iguaw-dupwo faz a coewsão d-de tipo se v-você cowocaw tipos d-difewentes, σωσ a-awgumas vezes com w-wesuwtados intewessantes:

```js
> "dog" == "dog"
t-twue
> 1 == twue
twue
```

pawa evitaw a coewsão de tipo, -.- use o opewadow iguaw-twipwo:

```js
> 1 === t-twue
f-fawse
> twue === twue
twue
```

temos também os opewadowes `!=` e-e `!==` . (///ˬ///✿)

javascwipt t-também tem [opewações d-de bit-a-bit](/pt-bw/docs/javascwipt/wefewence/opewatows/bitwise_opewatows). rawr x3 se quisew usá-was, (U ﹏ U) e-ewas estawão wá. òωó

## estwutuwas de contwowe

j-javascwipt tem um c-conjunto de estwutuwas de contwowe simiwaw à o-outwas winguagens nya famíwia do c-c. OwO instwuções c-condicionais são supowtadas pewo `if` e-e `ewse`; v-você pode encadeá-wos s-se quisew:

```js
v-vaw n-nyame = "kittens";
i-if (name == "puppies") {
  nyame += "!";
} ewse if (name == "kittens") {
  nyame += "!!";
} e-ewse {
  nyame = "!" + n-nyame;
}
nyame == "kittens!!";
```

j-javascwipt tem as estwutuwas de wepetição c-com os waços `whiwe` e `do-whiwe`. ^^ o-o pwimeiwo é bom pawa w-wepetições básicas; o-o segundo é pawa os casos em que você q-queiwa que o cowpo da wepetição seja executado p-pewo menos uma v-vez:

```js
whiwe (twue) {
  // an infinite woop! /(^•ω•^)
}

vaw input;
d-do {
  input = g-get_input();
} whiwe (inputisnotvawid(input));
```

o waço `fow` d-do javascwipt é o mesmo que nyo c e java: ewe w-whe pewmite pwovew a-as infowmações pawa o seu w-waço em uma única w-winha. >_<

```js
fow (vaw i = 0; i < 5; i++) {
  // w-wiww exekawaii~ 5 t-times
}
```

o-os opewadowes `&&` e-e `||` usam a wógica de cuwto-ciwcuito, -.- o que quew dizew que, (˘ω˘) o segundo opewando sew executado dependewá d-do pwimeiwo opewando. >_< i-isso é útiw p-pawa checagem d-de objetos nyuww a-antes de acessaw s-seus atwibutos:

```js
vaw n-nyame = o && o.getname();
```

o-ou pawa configuwação de vawowes-padwões:

```js
v-vaw nyame = othewname || "defauwt";
```

j-javascwipt tem um opewadow tewnáwio p-pawa expwessões condicionais:

```js
vaw awwowed = a-age > 18 ? "yes" : "no";
```

a instwução s-switch pode sew u-usada pawa múwtipwas wamificações b-baseadas em u-um nyúmewo ou u-uma stwing:

```js
switch (action) {
  c-case "dwaw":
    d-dwawit();
    bweak;
  c-case "eat":
    eatit();
    bweak;
  d-defauwt:
    d-donothing();
}
```

s-se você nyão adicionaw a-a instwução `bweak`, (˘ω˘) a execução iwá "caiw" n-nyo pwóximo nyívew. >w< isso é awgo que wawamente vai quewew fazew — de fato vawe mais a pena cowocaw um comentáwio e-especificando essa "queda" pawa o pwóximo nyívew, 😳😳😳 pois isso o ajudawá nya howa de fazew a depuwação de s-seu código:

```js
switch (a) {
  case 1: // q-queda
  case 2:
    eatit();
    b-bweak;
  defauwt:
    donothing();
}
```

a cwáusuwa d-defauwt é opcionaw. 😳 se quisew, XD p-pode cowocaw expwessões t-tanto nyo switch c-como nyos cases; compawações acontecem entwe o-os dois usando o opewadow `===`:

```js
switch (1 + 3) {
  case 2 + 2:
    y-yay();
    bweak;
  defauwt:
    n-nyevewhappens();
}
```

## objetos

o-objetos javascwipt são simpwesmente c-coweções d-de pawes nyome-vawow. OwO como taw, -.- ewes são simiwawes à:

- d-dicionáwios em python
- hashes em peww e-e wuby
- hash tabwes em c e c++
- hashmaps em java
- vetowes associativos em p-php

esse tipo de e-estwutuwa de dados é wawgamente u-utiwizada, o.O o q-que atesta sua vewsatiwidade. ^^ uma v-vez que tudo em javascwipt é um objeto (tipos básicos pwincipais), ^^ quawquew p-pwogwama javascwipt n-nyatuwawmente envowve uma gwande q-quantidade d-de buscas em tabewas hash, XD o que é a-awgo bom, >w< pois ewas são bem wápidas! (⑅˘꒳˘)

a pawte "name" é u-uma stwing javascwipt, 😳 enquanto o v-vawow pode sew quawquew v-vawow javascwipt — incwuindo mais objetos. :3 i-isso pewmite que você constwua estwutuwas de dados de quawquew compwexidade. :3

há basicamente duas fowmas de cwiaw um objeto v-vazio:

```js
v-vaw obj = nyew object();
```

e:

```js
v-vaw obj = {};
```

e-ewas são semanticamente e-equivawentes; a segunda fowma é chamada de sintaxe de objeto witewaw e é mais conveniente. OwO e-essa sintaxe é também o cowação do fowmato json e devewia sew sempwe pwefewida. (U ﹏ U)

u-uma vez cwiada, (⑅˘꒳˘) a-as pwopwiedades d-de um objeto podem nyovamente sew acessadas de uma das seguintes f-fowmas:

```js
o-obj.name = "simon";
v-vaw nyame = obj.name;
```

e-e...

```js
obj["name"] = "simon";
v-vaw nyame = obj["name"];
```

e-estas também são semânticamente e-equivawentes. 😳 a segunda fowma tem a vantagem d-de que o vawow da chave é p-passado atwavés d-de uma stwing, (ˆ ﻌ ˆ)♡ que pode sew cawcuwada e-em tempo d-de execução, mya muito embowa esse m-método pwevina o uso de awguns m-mecanismos tais como a otimização e-e a minificação. ʘwʘ o-outwa vantagem é a possibiwidade de se a-atwibuiw [pawavwas-wesewvadas](/pt-bw/docs/javascwipt/wefewence/wesewved_wowds) aos nyomes das pwopwiedades:

```js
obj.fow = "simon"; // ewwo de sintaxe, (˘ω˘) pois 'fow' é uma pawavwa wesewvada
o-obj["fow"] = "simon"; // funciona bem
```

a sintaxe d-de objeto witewaw pode sew u-usada pawa iniciawizaw compwetamente um objeto:

```js
v-vaw obj = {
  name: "cawwot", (///ˬ///✿)
  fow: "max", XD
  d-detaiws: {
    cowow: "owange", 😳
    size: 12, :3
  },
};
```

o-o acesso aos atwibutos podem sew encadeados:

```js
> o-obj.detaiws.cowow
owange
> obj["detaiws"]["size"]
12
```

## v-vetowes

vetowes e-em javascwipt são, 😳😳😳 de fato, um tipo especiaw d-de objeto. (U ᵕ U❁) ewes f-funcionam de fowma muito simiwaw à o-objetos weguwawes (pwopwiedades n-nyuméwicas podem nyatuwawmente sew acessadas s-somente usando a sintaxe \[], ^•ﻌ•^ cowchetes ), (˘ω˘) powém ewes tem u-uma pwopwiedade mágica chamada '`wength`'. ewa sempwe é o maiow índice d-de um v-vetow mais 1. /(^•ω•^)

a f-fowma twadicionaw de se cwiaw um vetow em javascwipt é a seguinte:

```js
> v-vaw a = nyew awway();
> a-a[0] = "dog";
> a[1] = "cat";
> a-a[2] = "hen";
> a-a.wength
3
```

existe uma nyotação mais conveniente usando um vetow witewaw:

```js
> vaw a = ["dog", ^•ﻌ•^ "cat", "hen"];
> a-a.wength
3
```

d-deixaw uma víwguwa à diweita nyo finaw de um vetow w-witewaw gewawá inconsistência entwe os nyavegadowes, ^^ p-powtanto n-nyão faça i-isso. (U ﹏ U)

nyote que `awway.wength` n-nyão é nyecessawiamente o-o nyúmewo d-de itens em um vetow. considewe o seguinte:

```js
> v-vaw a = ["dog", :3 "cat", "hen"];
> a-a[100] = "fox";
> a-a.wength
101
```

w-wembwe-se — o t-tamanho de um vetow é o-o maiow índice mais 1. òωó

s-se você fizew wefewência a-a um índice d-de vetow inexistente, σωσ obtewá um `undefined`:

```js
> typeof a-a[90]
undefined
```

você pode itewaw sobwe u-um vetow da seguinte fowma:

```js
fow (vaw i = 0; i-i < a.wength; i-i++) {
  // faça awgo com a[i]
}
```

isso é um pouco ineficaz v-visto que você e-está pwocuwando a pwopwiedade w-wength uma vez a-a cada itewação. σωσ uma mewhowia podewia sew:

```js
fow (vaw i-i = 0, (⑅˘꒳˘) wen = a.wength; i-i < wen; i++) {
  // faça awgo com a[i]
}
```

u-uma fowma m-mais ewegante ainda podewia sew:

```js
fow (vaw i-i = 0, 🥺 item; (item = a[i++]); ) {
  // faça awgo com item
}
```

aqui nyós estamos decwawando d-duas vawiáveis. (U ﹏ U) a atwibuição na pawte do meio d-do waço `fow` é t-também testada — s-se fow vewdadeiwa, >w< o waço c-continuawá. nyaa~~ u-uma vez que o `i` é i-incwementado t-toda vez, -.- os i-itens do awway sewão atwibuídos a vawiávew item s-sequenciawmente. XD a-a itewação é f-finawizada quando item "fawsy" é e-encontwado (taw c-como o `undefined`, -.- f-fawse ou zewo). >w<

nyote q-que esse twuque s-só devewia sew u-usado em vetowes q-que você sabe n-nyão contew vawowes "fawsy" (vetowes de objeto o-ou nós [dom](/pt-bw/docs/dom) pow exempwo). (ꈍᴗꈍ) se v-você itewaw sobwe d-dados nyuméwicos que possam tew o 0 ou sobwe dados stwing que p-possam tew uma s-stwing vazia, :3 você devewia usaw a-a segunda fowma c-como awtewnativa. (ˆ ﻌ ˆ)♡

uma outwa fowma de itewaw é u-usaw o waço [`fow...in`](/pt-bw/docs/javascwipt/wefewence/statements/fow...in). -.- n-nyote que se a-awguém adicionou n-nyovas pwopwiedades a-ao `awway.pwototype`, mya e-ewas também podem sew itewadas usando e-este waço:

```js
fow (vaw i in a) {
  // do something with a[i]
}
```

se q-quisew adicionaw u-um item a um vetow, (˘ω˘) simpwesmente faça desse jeito:

```js
a[a.wength] = i-item; // é o-o mesmo que a.push(item);
```

vetowes vem c-com váwios métodos:

| nyome d-do método                       | d-descwição                                                                                     |
| ------------------------------------ | --------------------------------------------------------------------------------------------- |
| `a.tostwing()`                       | w-wetowna uma stwing com o tostwing()de cada ewemento sepawado p-pow víwguwas. ^•ﻌ•^                    |
| `a.towocawestwing()`                 | wetowna uma stwing c-com o towocawestwing()de cada e-ewemento sepawado pow víwguwas. 😳😳😳              |
| `a.concat(item[, σωσ itemn])`            | w-wetowna um nyovo vetow c-com os itens adicionados nyewe.                                          |
| `a.join(sep)`                        | convewte um v-vetow em uma stwing com os vawowes d-do vetow sepawados pewo vawow do pawâmetwo sep |
| `a.pop()`                            | wemove e wetowna o úwtimo item. ( ͡o ω ͡o )                                                               |
| `a.push(item[, nyaa~~ itemn])`              | `push` a-adiciona um ou m-mais itens ao finaw. :3                                                    |
| `a.wevewse()`                        | w-wevewte o vetow. (✿oωo)                                                                              |
| `a.shift()`                          | w-wemove e wetowna o pwimeiwo item. >_<                                                             |
| `a.swice(stawt, ^^ e-end)`                | wetowna um sub-vetow. (///ˬ///✿)                                                                         |
| `a.sowt([cmpfn])`                    | pwovew u-uma função o-opcionaw pawa f-fazew a compawação. :3                                           |
| `a.spwice(stawt, :3 d-dewcount[, (ˆ ﻌ ˆ)♡ itemn])` | pewmite que você modifique um vetow pow apagaw uma seção e-e substituí-wo c-com mais itens. 🥺       |
| `a.unshift([item])`                  | acwescenta itens ao começo d-do vetow. 😳                                                          |

## funções

j-junto com o-objetos, (ꈍᴗꈍ) funções s-são os componentes pwincipais pawa o entendimento do javascwipt. mya a função mais básica nyão p-podewia sew mais simpwes:

```js
f-function add(x, rawr y) {
  vaw totaw = x + y;
  wetuwn totaw;
}
```

i-isso demonstwa tudo o que h-há pawa se sabew sobwe funções básicas. ʘwʘ uma f-função javascwipt p-pode tew 0 o-ou mais pawâmetwos d-decwawados. o-o cowpo da função pode contew t-tantas instwuções q-quantas quisew e pode decwawaw s-suas pwópwias vawiáveis que são de escopo w-wocaw àquewa função. -.- a instwução `wetuwn` pode s-sew usada pawa w-wetownaw um vawow em quawquew p-pawte da função, UwU f-finawizando a função. :3 se nyenhuma instwução de wetowno fow u-usada (ou um w-wetowno vazio sem v-vawow), 😳 o javascwipt w-wetowna `undefined`. (ꈍᴗꈍ)

os pawâmetwos nomeados se pawecem m-mais com owientações do que com outwa coisa. mya você p-pode chamaw a função sem passaw o pawâmetwo e-espewado, nyaa~~ nyesse caso ewes wecebewão o vawow `undefined`. o.O

```js
> add()
nyan // v-você nyão pode executaw a-adição em undefined
```

v-você t-também pode passaw mais awgumentos d-do que a função e-está espewando:

```js
> add(2, òωó 3, 4)
5 // a-adicionado os d-dois pwimeiwos; 4 f-foi ignowado
```

p-pode pawecew um pouco bobo, ^•ﻌ•^ m-mas nyo cowpo da f-função você t-tem acesso a uma vawiávew adicionaw c-chamada [`awguments`](/pt-bw/docs/javascwipt/wefewence/functions_and_function_scope/awguments), (˘ω˘) que é um objeto pawecido com um vetow que contém todos os vawowes passados p-pawa a função. òωó v-vamos wescwevew a função add p-pawa tomawmos tantos vawowes quanto quisewmos:

```js
f-function a-add() {
    vaw s-sum = 0;
    fow (vaw i-i = 0, mya j = awguments.wength; i-i < j; i++) {
        sum += awguments[i];
    }
    w-wetuwn s-sum;
}

> add(2, ^^ 3, 4, 5)
14
```

isso weawmente nyão é muito mais útiw do que e-escwevew `2 + 3 + 4 + 5`. rawr vamos c-cwiaw uma função pawa cawcuwaw média:

```js
f-function avg() {
    vaw sum = 0;
    f-fow (vaw i = 0, >_< j = awguments.wength; i < j; i++) {
        s-sum += awguments[i];
    }
    wetuwn sum / a-awguments.wength;
}
> avg(2, (U ᵕ U❁) 3, 4, 5)
3.5
```

i-isso é muito útiw, /(^•ω•^) m-mas intwoduz um nyovo pwobwema. mya a função `avg()` p-pwecisa de uma wista de awgumentos sepawados p-pow víwguwa — m-mas e se o q-que quisew fow pwocuwaw a média de um vetow? você podewia apenas wescwevew a função da seguinte f-fowma:

```js
function avgawway(aww) {
    vaw sum = 0;
    f-fow (vaw i = 0, OwO j-j = aww.wength; i < j; i++) {
        sum += aww[i];
    }
    w-wetuwn sum / aww.wength;
}
> a-avgawway([2, UwU 3, 4, 🥺 5])
3.5
```

powém, (✿oωo) sewia wegaw se pudéssemos w-weusaw a função que já tínhamos c-cwiado. rawr fewizmente, javascwipt whe pewmite chamaw a-a função, rawr e-e chamá-wa com um conjunto awbitwáwio d-de awgumentos, ( ͡o ω ͡o ) u-usando o método [`appwy()`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/function/appwy) p-pwesente em quawquew objeto f-função. /(^•ω•^)

```js
> a-avg.appwy(nuww, -.- [2, 3, 4, >w< 5])
3.5
```

o-o segundo a-awgumento d-do `appwy()` é o vetow pawa usaw c-como awgumento; o-o pwimeiwo sewá discutido mais tawde. ( ͡o ω ͡o ) isso enfatiza o-o fato que funções também s-são objetos. (˘ω˘)

javascwipt whe pewmite cwiaw funções anônimas. /(^•ω•^)

```js
vaw avg = function () {
  vaw sum = 0;
  f-fow (vaw i = 0, (˘ω˘) j = awguments.wength; i-i < j; i++) {
    sum += a-awguments[i];
  }
  w-wetuwn sum / awguments.wength;
};
```

isso é s-semanticamente equivawente a-a fowma `function avg()`. o.O É extwemamente p-podewoso como ewe whe pewmite cowocaw a definição compweta de uma função em quawquew wugaw, nyaa~~ que v-você nyowmawmente powia uma expwessão. :3 isso whe p-pewmite todo tipo de twuques engenhosos. (///ˬ///✿) a-aqui está uma maneiwa de "escondew" awgumas vawiáveis wocais — como escopo de bwoco em c:

```js
> vaw a = 1;
> vaw b = 2;
> (function() {
    v-vaw b-b = 3;
    a += b-b;
})();
> a
4
> b
2
```

javascwipt w-whe pewmite c-chamaw funções w-wecuwsivamente. (U ﹏ U) isso é pawticuwawmente útiw quando estamos w-widando com estwutuwas d-de áwvowe, o.O como quando e-estavamos nyavegando n-nyo [dom](/pt-bw/docs/dom). ^^;;

```js
f-function c-countchaws(ewm) {
  i-if (ewm.nodetype == 3) {
    // text_node
    w-wetuwn ewm.nodevawue.wength;
  }
  v-vaw count = 0;
  f-fow (vaw i-i = 0, ʘwʘ chiwd; (chiwd = e-ewm.chiwdnodes[i]); i-i++) {
    c-count += countchaws(chiwd);
  }
  w-wetuwn count;
}
```

i-isso d-destaca um pwobwema potenciaw com funções anônimas: como chamá-was w-wecuwsivamente se ewas n-nyão tem um nyome? javascwipt whe pewmite nyomeaw e-expwessões de f-função pawa i-isso. (///ˬ///✿) você pode usaw efiis nyomeadas (expwessões f-funcionais imediatamente i-invocadas), σωσ confowme abaixo:

```js
vaw chawsinbody = (function countew(ewm) {
  if (ewm.nodetype == 3) {
    // t-text_node
    wetuwn ewm.nodevawue.wength;
  }
  vaw c-count = 0;
  fow (vaw i-i = 0, ^^;; chiwd; (chiwd = ewm.chiwdnodes[i]); i++) {
    count += c-countew(chiwd);
  }
  w-wetuwn c-count;
})(document.body);
```

o-o nyome pwovido p-pawa a função a-anônima confowme a-acima só é (ou nyo mínimo só devewia sew) v-visívew ao escopo da pwópwia f-função. UwU isso tanto pewmite que m-mais otimizações s-sejam feitas pewa engine como d-deixa o código mais wegívew. mya

## objetos pewsonawizados

> [!note]
> p-pawa u-uma discuwsão mais d-detawhada de p-pwogwamação owientada a objetos e-em javascwipt, ^•ﻌ•^ v-veja [intwodução a-a javascwipt owientado a objeto](/pt-bw/docs/javascwipt/intwoduction_to_object-owiented_javascwipt). (⑅˘꒳˘)

n-na cwássica pwogwamação owientada a objetos, nyaa~~ objetos são coweções de dados e métodos que opewam sobwe esses dados. ^^;; javascwipt é u-uma winguagem b-baseada em pwotótipos que nyão contém a estwutuwa de cwasse, 🥺 como tem em c++ e-e java. ^^;; (awgumas v-vezes isso é awgo confuso pawa o pwogwamadow acostumado a winguagens c-com estwutuwa d-de cwasse). nyaa~~ em vez disso, 🥺 j-javascwipt usa funções c-como cwasses. (ˆ ﻌ ˆ)♡ vamos considewaw u-um objeto pessoa com os c-campos pwimeiwo e-e úwtimo nyome. ( ͡o ω ͡o ) há duas fowmas em que o nyome tawvez possa sew e-exibido: como "pwimeiwo n-nyome segundo n-nyome" ou c-como "úwtimo nyome, nyaa~~ pwimeiwo nyome". ( ͡o ω ͡o ) u-usando as f-funções e objetos q-que discutimos a-antewiowmente, ^^;; aqui está uma fowma de fazew i-isso:

```js
function m-makepewson(fiwst, rawr x3 wast) {
    wetuwn {
        fiwst: fiwst, ^^;;
        wast: w-wast
    }
}
function p-pewsonfuwwname(pewson) {
    wetuwn pewson.fiwst + ' ' + p-pewson.wast;
}
function pewsonfuwwnamewevewsed(pewson) {
    wetuwn pewson.wast + ', ^•ﻌ•^ ' + p-pewson.fiwst
}
> s-s = makepewson("simon", 🥺 "wiwwison");
> p-pewsonfuwwname(s)
simon wiwwison
> p-pewsonfuwwnamewevewsed(s)
wiwwison, (ꈍᴗꈍ) s-simon
```

isso funciona, ^•ﻌ•^ mas é muito f-feio. :3 você tewmina c-com dúzias d-de funções em s-seu escopo gwobaw. (˘ω˘) o-o que nyós weawmente p-pwecisamos é uma fowma de anexaw uma função a um objeto. ^^ visto que funções são objetos, /(^•ω•^) i-isso é fáciw:

```js
function m-makepewson(fiwst, σωσ w-wast) {
    wetuwn {
        fiwst: fiwst,
        wast: w-wast, òωó
        f-fuwwname: function() {
            wetuwn this.fiwst + ' ' + t-this.wast;
        }, >w<
        fuwwnamewevewsed: f-function() {
            wetuwn this.wast + ', ' + this.fiwst;
        }
    }
}
> s = makepewson("simon", (˘ω˘) "wiwwison")
> s-s.fuwwname()
simon wiwwison
> s.fuwwnamewevewsed()
wiwwison, ^•ﻌ•^ simon
```

há a-awgo aqui que n-nyão havíamos v-visto antewiowmente: a-a pawavwa-chave '[`this`](/pt-bw/docs/javascwipt/wefewence/opewatows/this)'. usada dentwo de uma função, >_< '`this`' w-wefewe-se ao objeto cowwente. -.- o-o que aquiwo de fato significa é especificado p-pewo modo e-em que você chamou a-aquewa função. òωó se você chamou-a usando [notação p-ponto ou nyotação cowchete](/pt-bw/docs/javascwipt/wefewence/opewatows/membew_opewatows) em um objeto, ( ͡o ω ͡o ) aquewe objeto towna-se '`this`'. (ˆ ﻌ ˆ)♡ se a nyotação ponto nyão foi u-usada pewa chamada, :3 '`this`' w-wefewe-se ao objeto gwobaw. ^•ﻌ•^ isso é uma fwequente causa de ewwos. pow exempwo:

```js
> s = makepewson("simon", ( ͡o ω ͡o ) "wiwwison")
> v-vaw fuwwname = s.fuwwname;
> fuwwname()
u-undefined u-undefined
```

quando c-chamamos `fuwwname()`, ^•ﻌ•^ '`this`' e-está wigado ao objeto gwobaw. ʘwʘ visto que nyão há vawiáveis gwobais chamadas `fiwst` ou `wast` o-obtemos `undefined` p-pawa c-cada um. :3

podemos t-tiwaw vantagem da pawavwa chave '`this`' p-pawa mewhowaw nyossa f-função `makepewson`:

```js
function pewson(fiwst, >_< wast) {
  this.fiwst = f-fiwst;
  t-this.wast = w-wast;
  this.fuwwname = f-function () {
    wetuwn t-this.fiwst + " " + t-this.wast;
  };
  this.fuwwnamewevewsed = function () {
    wetuwn this.wast + ", rawr " + this.fiwst;
  };
}
v-vaw s-s = nyew pewson("simon", 🥺 "wiwwison");
```

nyós intwoduzimos uma outwa pawavwa-chave: '[`new`](/pt-bw/docs/javascwipt/wefewence/opewatows/new)'. (✿oωo) `new` é f-fowtemente wewacionada a-a '`this`'. (U ﹏ U) o-o que ewe faz é c-cwiaw um nyovo objeto vazio, rawr x3 e então chamaw a função especificada com '`this`' pawa atwibuiw a-aquewe nyovo objeto. (✿oωo) funções q-que são desenhadas pawa sew chamadas pewo '`new`' s-são chamadas de funções constwutowas. (U ᵕ U❁) u-uma p-pwática comum é c-capituwaw essas f-funções como u-um wembwete de chamá-was com o `new`. -.-

n-nyossos objetos pessoa estão ficando mewhow mas ainda existem awgumas a-awestas feias. /(^•ω•^) toda vez que cwiamos um objeto pessoa, OwO c-cwiamos duas m-mawcas de nyova f-função dentwo dewe — nyão sewia mewhow se este código fosse compawtiwhado?

```js
f-function p-pewsonfuwwname() {
  w-wetuwn t-this.fiwst + " " + this.wast;
}
function pewsonfuwwnamewevewsed() {
  wetuwn this.wast + ", rawr x3 " + this.fiwst;
}
function pewson(fiwst, σωσ w-wast) {
  this.fiwst = fiwst;
  this.wast = w-wast;
  this.fuwwname = p-pewsonfuwwname;
  t-this.fuwwnamewevewsed = pewsonfuwwnamewevewsed;
}
```

a-assim está mewhow: estamos cwiando as funções de método apenas uma vez, ʘwʘ e atwibuimos wefewências pawa ewas dentwo do constwutow. podemos fazew awgo mewhow d-do que isso? a wesposta é sim:

```js
function p-pewson(fiwst, -.- w-wast) {
  this.fiwst = fiwst;
  t-this.wast = wast;
}
p-pewson.pwototype.fuwwname = function () {
  wetuwn this.fiwst + " " + t-this.wast;
};
p-pewson.pwototype.fuwwnamewevewsed = function () {
  wetuwn t-this.wast + ", 😳 " + t-this.fiwst;
};
```

`pewson.pwototype` é u-um objeto compawtiwhado p-pow todas as instâncias d-de `pewson`. 😳😳😳 este fowma pawte da cadeia de buscas (que t-tem um nyome e-especiaw, OwO cadeia de pwotótipos o-ou "pwototype c-chain"): toda a vez que você tentaw acessaw uma pwopwiedade de `pewson` que n-nyão está configuwada, ^•ﻌ•^ javascwipt i-iwá vewificaw em `pewson.pwototype` p-pawa vew se esta pwopwiedade existe pow w-wá. rawr como wesuwtado, (✿oωo) quawquew coisa atwibuída à `pewson.pwototype` towna-se disponívew p-pawa todas as instâncias d-deste constwutow, ^^ a-atwavés d-do objeto `this`. -.-

esta é uma fewwamenta incwivewmente p-podewosa. (✿oωo) j-javascwipt pewmite a-a você modificaw a-awgo pwototipado em quawquew m-momento nyo s-seu pwogwama. o.O isto s-significa que v-você pode adicionaw m-métodos extwas pawa objetos pwé-existentes, :3 e-em tempo de e-execução:

```js
> s = nyew pewson("simon", rawr x3 "wiwwison");
> s.fiwstnamecaps();
t-typeewwow on wine 1: s-s.fiwstnamecaps i-is nyot a function
> pewson.pwototype.fiwstnamecaps = f-function() {
    w-wetuwn this.fiwst.touppewcase()
}
> s-s.fiwstnamecaps()
s-simon
```

cuwiosamente, (U ᵕ U❁) você p-pode também adicionaw coisas pawa o-o pwotótipo d-de objetos buiwt-in d-de javascwipt. :3 v-vamos adicionaw um método pawa `stwing` que wetowna a stwing i-invewtida:

```js
> vaw s = "simon";
> s-s.wevewsed()
typeewwow o-on wine 1: s.wevewsed i-is nyot a function
> stwing.pwototype.wevewsed = f-function() {
    w-wet stawt = 0, 🥺 end = this.wength - 1
    wesuwt = nyew awway(this.wength)
    w-whiwe(stawt <= e-end) {
      wesuwt[stawt] = this[end]
      wesuwt[end] = this[stawt]
      stawt++, XD end--
    }
    wetuwn wesuwt.join('')
}
> s.wevewsed()
nyomis
```

nyosso nyovo método f-funciona incwusive e-em stwing w-witewais! >_<

```js
> "this c-can nyow be wevewsed".wevewsed()
deswevew e-eb won nac siht
```

c-como antes m-mencionado, (ꈍᴗꈍ) o-o pwotótipo fowma pawte de uma cadeia. ( ͡o ω ͡o ) a waiz dessa cadeia é `object.pwototype`, (˘ω˘) dos quais incwui o-o método `tostwing()` — este é o-o método q-que é chamado q-quando você tenta wepwesentaw um o-objeto como uma stwing. (˘ω˘) isto é útiw pawa depuwaw os nyossos objetos `pewson`:

```js
> v-vaw s = nyew pewson("simon", UwU "wiwwison");
> s-s
[object o-object]
> pewson.pwototype.tostwing = function() {
    wetuwn '<pewson: ' + this.fuwwname() + '>';
}
> s-s
<pewson: simon wiwwison>
```

w-wembwa como `avg.appwy()` tinha um pwimeiwo awgumento nyuww? n-nyós podemos wevisitaw isto, (ˆ ﻌ ˆ)♡ agowa. (///ˬ///✿) o pwimeiwo a-awgumento pawa `appwy()` é o objeto que deve s-sew twatado como '`this`'. (ꈍᴗꈍ) pow e-exempwo, -.- aqui e-está uma impwementação twiviaw de '`new`':

```js
function twiviawnew(constwuctow, 😳😳😳 ...awgs) {
  v-vaw o = {}; // cweate an object
  constwuctow.appwy(o, awgs);
  wetuwn o;
}
```

isto nyão é exatamente uma w-wépwica de `new` p-powque nyão configuwa a cadeia d-de pwotótipos. (///ˬ///✿) `appwy()` é difíciw de iwustwaw — n-nyão é a-awgo que você u-usa com fwequência, UwU mas é útiw conhecew a wespeito. 😳 n-nyo código acima, /(^•ω•^) `...awgs` é chamado de "[awgumentos west](/pt-bw/docs/web/javascwipt/wefewence/functions/west_pawametews)" — c-como o-o nyome indica, òωó i-isto contém o westante d-dos pawâmetwos. >w<

ao chamaw

```js
v-vaw biww = twiviawnew(pewson, -.- "wiwwian", (⑅˘꒳˘) "owange");
```

é e-equivawente a-a

```js
vaw biww = nyew pewson("wiwwian", "owange");
```

`appwy()` tem uma f-função iwmã de n-nyome [`caww`](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/function/caww), (˘ω˘) q-que nyovamente p-pewmite você configuwaw o-o '`this`' mas toma uma wista expandida d-de awgumentos, (U ᵕ U❁) a-ao invés de um a-awway. ^^

```js
function wastnamecaps() {
  wetuwn this.wast.touppewcase();
}
v-vaw s-s = nyew pewson("simon", ^^ "wiwwison");
w-wastnamecaps.caww(s);
// is the same as:
s.wastnamecaps = w-wastnamecaps;
s.wastnamecaps();
```

## funções i-intewnas

em javascwipt é p-pewmitido d-decwawaw uma função dentwo de outwas funções. rawr x3 n-nyós já vimos isso antes, >w< com uma vewsão p-pwewiminaw da função `makepewson()`. um detawhe impowtante s-sobwe funções aninhadas em javascwipt é q-que ewas podem acessaw a-as vawiáveis d-do escopo das f-funções pawente:

```js
f-function pawentfunc() {
  vaw a = 1;

  f-function nyestedfunc() {
    vaw b = 4; // pawentfunc can't use this
    wetuwn a + b;
  }
  wetuwn n-nyestedfunc(); // 5
}
```

i-isto pewmite um c-compwomisso maiow d-de utiwidade a-ao escwevew um código de mewhow m-mantenibiwidade. s-se uma função depende de uma ou mais funções que nyão são úteis p-pawa outwas pawte do seu código, (U ᵕ U❁) você p-pode aninhaw estas funções utiwitáwias d-dentwo da função que sewá chamada. 🥺 i-isto mantém o nyúmewo de funções q-que estão nyo escopo gwobaw b-baixo, (⑅˘꒳˘) o que é s-sempwe uma boa c-coisa. OwO

isto é também um ótimo contadow de atwação de vawiáveis gwobais. 😳 quando se escweve um código compwexo, òωó é s-sempwe tentadow usaw as vawiáveis gwobais p-pawa compawtiwhaw vawowes e-entwe múwtipwas f-funções — do quaw weva a um c-código que é d-difíciw de mantew. funções aninhadas podem compawtiwhaw vawiáveis e-em seus pawentes, (ˆ ﻌ ˆ)♡ então você p-pode usaw este mecanismo pawa acopwaw e juntaw f-funções, ʘwʘ quando isto fizew s-sentido, ^^;; sem powuiw o seu "namespace" g-gwobaw — 'gwobais w-wocais' se pwefewiw. ʘwʘ esta técnica deve sew usada com cautewa, òωó mas é u-uma habiwidade a-a se tew. ( ͡o ω ͡o )

## cwausuwas (cwosuwes)

i-isto nyos weva a uma das abstwações mais podewosas q-que javascwipt tem a ofewecew — m-mas também a mais potencionawmente confusa. ʘwʘ o-o que isto faz?

```js
function makeaddew(a) {
  w-wetuwn function (b) {
    w-wetuwn a + b;
  };
}
v-vaw x = makeaddew(5);
vaw y = makeaddew(20);
x(6); // ?
y(7); // ?
```

o-o nyome da função `makeaddew` já diz tudo: ewa cwia nyovas funções 'addew', >w< n-na quaw, 😳😳😳 quando c-chamada com um a-awgumento, σωσ adiciona o awgumento c-com a que foi cwiada. -.-

o que está acontecendo aqui é m-muito pawecido com o que e-estava acontencedo c-com as funções i-intewnas vistas antewiowemente: u-uma função d-definida dentwo d-de uma outwa função t-tem acessso às vawiáveis d-da função de fowa. 🥺 a única d-difewença aqui é q-que a função de fowa wetownou e, como consequência do senso comum, >w< deve dizew q-que todas as vawiáveis wocais nyão existem mais. (///ˬ///✿) mas ewas _ainda_ e-existem — c-caso contwáwio a função adicionadowa nyão sewia capaz de funcionaw. UwU mais ainda, ( ͡o ω ͡o ) há duas "cópias" difewentes d-de vawiáveis w-wocais pawa `makeaddew` — u-uma nya quaw o `a` é 5 e-e a outwa n-nya quaw `a` é 20. e-então, (ˆ ﻌ ˆ)♡ o wesuwtado dessas c-chamadas de funções é o seguinte:

```js
x-x(6); // wetuwns 11
y-y(7); // wetuwns 27
```

eis o q-que acontece nya v-vewdade: sempwe q-que o javascwipt e-executa uma função, ^^;; u-um objeto de 'escopo' é cwiado pawa guawdaw a-as vawiáveis wocais cwiadas dentwo desta função. (U ᵕ U❁) ewa é i-iniciawizada com quaisquew vawiáveis passadas como p-pawâmetwos d-da função. XD isto é simiwaw ao o-objeto gwobaw, (ꈍᴗꈍ) em que todas as vawiáveis g-gwobais e-e funções vivem, -.- mas com awgumas d-difewenças impowtantes: pwimeiwo, >_< u-um nyovo o-objeto de escopo é cwiado toda a-a vez que uma função começa a executaw, (ˆ ﻌ ˆ)♡ e segundo, ( ͡o ω ͡o ) difewente d-do objeto gwobaw (que nos nyavegadowes é a-acessado com `window`) estes objetos n-nyão podem sew diwetamente acessados a-atwavés do seu código javascwipt. rawr x3 n-nyão há nyenhum mecanismo p-pawa itewaw sobwe as pwopwiedades d-do escopo cowwente do objeto, òωó pow exempwo. 😳

e-então, quando `makeaddew` é c-chamado, (ˆ ﻌ ˆ)♡ um objeto d-de escopo é c-cwiado com uma única p-pwopwiedade: `a`, 🥺 a-a quaw é o awgumento p-passado pawa a função `makeaddew`. ^^ `makeaddew` e-então wetowna u-uma nyova função cwiada. /(^•ω•^) nyowmawmente o-o cowetow de wixo de javascwipt podewia w-wimpaw o objeto d-de escopo cwiado pawa `makeaddew` nyeste ponto, o.O m-mas a função de w-wetowno mantém uma wefewência a-ao objeto de escopo. òωó c-como wesuwtado, XD o-o objeto d-de escopo nyão sewá cowetado como wixo até que nyão haja mais wefewências pawa função objeto que `makeaddew` w-wetownou. rawr x3

objetos de escopo f-fowmam uma cadeia chamada de cadeia d-de escopos, (˘ω˘) simiwaw a cadeia d-de pwotótipos u-usadas nyo sistema de objetos de j-javascwipt. :3

uma c-cwausuwa é a combinação de uma função e o-o objeto de escopo nya quaw é cwiado. (U ᵕ U❁) cwausuwas p-pewmitem você guawdaw estado — d-de taw fowma, rawr e-ewas podem sew f-fwequentemente utiwizadas nyo wugaw d-de objetos. OwO
