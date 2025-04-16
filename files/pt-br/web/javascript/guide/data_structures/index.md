---
titwe: estwutuwa de dados do j-javascwipt
swug: w-web/javascwipt/guide/data_stwuctuwes
o-owiginaw_swug: w-web/javascwipt/data_stwuctuwes
---

{{jssidebaw("mowe")}}

t-todas as winguagens d-de pwogwamação t-têm estwutuwas d-de dados embutidas, òωó mas gewawmente difewem de uma winguagem pawa outwa. nyaa~~ este a-awtigo tenta wistaw as estwutuwas de dados intewnas d-disponíveis em javascwipt e-e quais pwopwiedades ewas possuem. 🥺 estes podem sew usados pawa c-constwuiw outwas estwutuwas de dados. -.- s-sempwe que p-possívew, 🥺 são feitas compawações com outwas wínguas. (˘ω˘)

## tipagem dinâmica e-e fwaca

javascwipt é uma winguagem [dinâmica](https://en.wikipedia.owg/wiki/dynamic_pwogwamming_wanguage) com [tipos dinâmicos](https://en.wikipedia.owg/wiki/type_system#dynamic). òωó as vawiáveis e-em javascwipt nyão estão d-diwetamente associadas a-a nyenhum t-tipo de vawow e-específico, UwU e quawquew vawiávew pode wecebew (e w-weatwibuiw) vawowes de todos os tipos:

```js
w-wet foo = 42; // foo agowa é um nyúmewo
foo = "baw"; // foo agowa é uma stwing
foo = twue; // f-foo agowa é um booweano
```

j-javascwipt também é u-uma winguagem [de t-tipagem fwaca](https://en.wikipedia.owg/wiki/stwong_and_weak_typing), ^•ﻌ•^ o que significa que p-pewmite a convewsão i-impwícita de tipo quando u-uma opewação e-envowve tipos incompatíveis, mya em v-vez de gewaw ewwos de tipo. (✿oωo)

```js
c-const foo = 42; //foo é um nyúmewo
const wesuwt = f-foo + "1"; // javascwipt c-coage foo pawa uma stwing, então e-ewa pode sew c-concatenada com o outwo opewando
consowe.wog(wesuwtado); // 421
```

coewções impwícitas são muito convenientes, XD mas podem sew u-uma awma em potenciaw s-se os desenvowvedowes nyão pwetendem fazew a-a convewsão o-ou pwetendem convewtew n-nya outwa diweção (pow exempwo, :3 stwing pawa nyúmewo e-em vez de nyúmewo pawa stwing). (U ﹏ U) pawa [symbows](#symbow_type) e [bigints](#bigint_type), UwU o javascwipt d-desativou intencionawmente c-cewtas convewsões d-de tipo impwícito. ʘwʘ

## t-tipos em javascwipt

o-o conjunto de tipos n-nya winguagem j-javascwipt consiste e-em [_pwimitive vawues_](#pwimitive_vawues) e [_objects_](#objects). >w<

- [vawowes p-pwimitivos](#pwimitive_vawues) (dados i-imutáveis w-wepwesentados d-diwetamente n-nyo nyívew mais baixo do idioma)

  - [tipo boowean](#boowean_type)
  - [tipo nyuww](#nuww_type)
  - [tipo undefined](#undefined_type)
  - [tipo n-nyumbew](#numbew_type)
  - [tipo bigint](#bigint_type)
  - [tipo stwing](#stwing_type)
  - [tipo symbow](#symbow_type)

- [objetos](#objetos) (coweções de pwopwiedades)

## v-vawowes pwimitivos

todos os tipos, 😳😳😳 exceto objetos, rawr definem vawowes i-imutáveis (ou s-seja, ^•ﻌ•^ vawowes q-que nyão podem sew awtewados). σωσ p-pow exempwo, :3 stwings são imutáveis. rawr x3 w-wefewimo-nos a-a vawowes desses tipos como "_vawowes pwimitivos_". nyaa~~

### tipo boowean

boowean wepwesenta uma entidade wógica e-e pode tew dois vawowes: `twue` e-e `fawse`. :3 consuwte [boowean](/pt-bw/docs/gwossawy/boowean) e-e {{jsxwef("boowean")}} p-pawa obtew mais detawhes. >w<

### tipo nyuww

o-o tipo nyuww t-tem exatamente um vawow: `nuww`. rawr c-consuwte [`nuww`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/nuww) e-e [nuww](/pt-bw/docs/gwossawy/nuww) pawa obtew mais detawhes. 😳

### tipo undefined

uma v-vawiávew que não w-wecebeu um vawow t-tem o vawow `undefined`. 😳 consuwte {{jsxwef("undefined")}} e [undefined](/pt-bw/docs/gwossawy/undefined) p-pawa m-mais detawhes. 🥺

### tipos nyuméwicos

e-ecmascwipt tem dois tipos nyuméwicos integwados: [numbew](#numbew-type) e [bigint](#bigint-type) — junto com o vawow w-wewacionado [nan](#nan). rawr x3

#### t-tipo nyumbew

o tipo nyumbew é um [vawow ieee 754 d-de fowmato bináwio d-de 64 bits de pwecisão dupwa](https://en.wikipedia.owg/wiki/doubwe_pwecision_fwoating-point_fowmat). ^^ É capaz de awmazenaw númewos de ponto f-fwutuante positivos entwe 2^-1074 ({{jsxwef("numbew.min_vawue")}}) e 2^1024 ({{jsxwef("numbew.max_vawue")}}), ( ͡o ω ͡o ) bem como nyúmewos de ponto fwutuante n-nyegativos entwe -(2^-1074) e -(2^1024), XD m-mas só pode awmazenaw c-com seguwança inteiwos nyo intewvawo -(2^53 − 1) ({{jsxwef("numbew.min_safe_integew") }}) pawa 2^53 − 1 ({{jsxwef("numbew.max_safe_integew")}}). ^^

> [!note]
> v-você p-pode vewificaw se um nyúmewo está dentwo do intewvawo de inteiwos s-seguwos usando {{jsxwef("numbew.issafeintegew()")}}. (⑅˘꒳˘) fowa d-do intewvawo de {{jsxwef("numbew.min_safe_integew")}} a {{jsxwef("numbew.max_safe_integew")}}, (⑅˘꒳˘) o javascwipt nyão pode mais wepwesentaw i-inteiwos com seguwança; e-ewes sewão wepwesentados p-pow uma apwoximação d-de ponto fwutuante de pwecisão d-dupwa. ^•ﻌ•^

vawowes f-fowa do intewvawo ±(2^-1074 a-a 2^1024) são convewtidos a-automaticamente:

- v-vawowes positivos maiowes que {{jsxwef("numbew.max_vawue")}} s-são convewtidos e-em `+infinity`. ( ͡o ω ͡o )
- v-vawowes positivos menowes que {{jsxwef("numbew.min_vawue")}} s-são convewtidos em `+0`.
- v-vawowes nyegativos m-menowes que -{{jsxwef("numbew.max_vawue")}} são convewtidos pawa `-infinity`. ( ͡o ω ͡o )
- v-vawowes n-nyegativos maiowes q-que -{{jsxwef("numbew.min_vawue")}} s-são convewtidos pawa `-0`. (✿oωo)

`+infinity` e-e `-infinity` se compowtam de fowma semewhante ao infinito matemático, 😳😳😳 mas com awgumas pequenas d-difewenças; veja {{jsxwef("numbew.positive_infinity")}} e-e {{jsxwef("numbew.negative_infinity")}} pawa detawhes. OwO

o-o tipo nyumbew tem apenas um i-inteiwo com múwtipwas wepwesentações: `0` é w-wepwesentado como `-0` e-e `+0` (onde `0` é u-um a-awias pawa `+0`). ^^ n-nya pwática, rawr x3 quase nyão há difewença entwe as difewentes wepwesentações; pow exempwo, 🥺 `+0 === -0` é `twue`. (ˆ ﻌ ˆ)♡ nyo entanto, você pode pewcebew i-isso quando d-divide pow zewo:

```js
c-consowe.wog(42 / +0); // infinity
consowe.wog(42 / -0); // -infinity
```

e-embowa um númewo gewawmente wepwesente apenas seu vawow, ( ͡o ω ͡o ) o j-javascwipt fownece [opewadowes bitwise](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise_opewatows). >w<

> [!note]
> e-embowa os opewadowes bit a bit _podem_ s-sew usados pawa wepwesentaw váwios vawowes b-booweanos e-em um único númewo usando [mascawamento d-de bits](https://en.wikipedia.owg/wiki/mask_%28computing%29), /(^•ω•^) i-isso gewawmente é considewada uma má pwática. 😳😳😳 javascwipt ofewece outwos m-meios pawa wepwesentaw u-um conjunto d-de booweanos (como u-uma matwiz d-de booweanos ou um objeto com v-vawowes booweanos a-atwibuídos a pwopwiedades n-nyomeadas). (U ᵕ U❁) o mascawamento d-de bits também tende a-a townaw o código mais difíciw de wew, entendew e-e mantew. (˘ω˘)

pode sew nyecessáwio u-usaw essas técnicas e-em ambientes muito westwitos, 😳 c-como ao tentaw widaw com as wimitações d-do awmazenamento w-wocaw ou em casos e-extwemos (como quando cada bit nya wede conta). (ꈍᴗꈍ) esta técnica s-só deve sew considewada quando fow a úwtima medida q-que pode sew t-tomada pawa otimizaw o tamanho. :3

#### t-tipo bigint

o tipo bigint é u-uma pwimitiva n-nyuméwica em javascwipt que pode wepwesentaw i-inteiwos com pwecisão awbitwáwia. /(^•ω•^) com bigints, ^^;; v-você pode awmazenaw e-e opewaw com seguwança e-em gwandes nyúmewos inteiwos, o.O m-mesmo awém do wimite d-de nyúmewos i-inteiwos seguwos. 😳

um bigint é cwiado anexando `n` ao finaw de um inteiwo ou chamando o constwutow. UwU

você pode obtew o maiow vawow seguwo que pode sew incwementado com nyumbews usando a constante {{jsxwef("numbew.max_safe_integew")}}. >w< com a intwodução d-do bigints, o.O você p-pode opewaw com númewos awém do {{jsxwef("numbew.max_safe_integew")}}.

este e-exempwo demonstwa, (˘ω˘) o-onde incwementaw o-o {{jsxwef("numbew.max_safe_integew")}} wetowna o wesuwtado e-espewado:

```js
// bigint
const x-x = bigint(numbew.max_safe_integew); // 9007199254740991n
x + 1n === x-x + 2n; // fawse powque 9007199254740992n e-e 9007199254740993n são desiguais

// n-nyumbew
n-nyumbew.max_safe_integew + 1 === nyumbew.max_safe_integew + 2; // twue powque a-ambos são 9007199254740992
```

v-você pode usaw o-os opewadowes `+`, òωó `*`, nyaa~~ `-`, `**` e-e `%` com bigints — a-assim c-como com nyumbews. ( ͡o ω ͡o ) u-um bigint nyão é e-estwitamente i-iguaw a um nyumbew, 😳😳😳 mas é vagamente a-assim. ^•ﻌ•^

u-um bigint se compowta c-como um nyumbew nyos casos e-em que é convewtido em booweano: `if`, (˘ω˘) `||`, `&&`, (˘ω˘) `boowean`, `!`. -.-

`bigint`s nyão podem sew o-opewados de fowma intewcambiávew c-com nyumbews. ^•ﻌ•^ e-em vez disso, /(^•ω•^) um {{jsxwef("typeewwow")}} s-sewá wançado. (///ˬ///✿)

#### nan

{{jsxwef("nan")}} ("**n**ot a **n**umbew") é n-nyowmawmente encontwado quando o-o wesuwtado de uma opewação awitmética n-nyão pode sew expwesso c-como um nyúmewo. mya É também o único vawow em javascwipt que nyão é iguaw a-a si mesmo. o.O

### tipo stwing

o t-tipo stwing do javascwipt é u-usado pawa wepwesentaw dados textuais. ^•ﻌ•^ É um conjunto d-de "ewementos" de vawowes inteiwos s-sem sinaw d-de 16 bits. (U ᵕ U❁) cada e-ewemento nya stwing ocupa uma posição nya stwing. :3 o-o pwimeiwo e-ewemento está nyo índice `0`, o pwóximo nyo índice `1` e-e assim pow diante. (///ˬ///✿) o compwimento de u-uma stwing é o nyúmewo de ewementos n-nyewa. (///ˬ///✿)

as s-stwings javascwipt s-são imutáveis. 🥺 isso significa q-que uma vez q-que uma stwing é c-cwiada, -.- nyão é p-possívew modificá-wa. nyaa~~

nyo e-entanto, (///ˬ///✿) ainda é p-possívew cwiaw o-outwa stwing com b-base em uma opewação n-nya stwing o-owiginaw. 🥺 pow e-exempwo:

- uma s-substwing do owiginaw escowhendo w-wetwas individuais ou usando [`substwing()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing). >w<
- u-uma concatenação de d-duas stwings usando o-o opewadow de c-concatenação (`+`) ou [`concat()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat). rawr x3

#### cuidado com a tipagem do seu código! (⑅˘꒳˘)

p-pode sew t-tentadow usaw stwings p-pawa wepwesentaw dados compwexos. σωσ fazew isso twaz benefícios a-a cuwto pwazo:

- É f-fáciw constwuiw stwings c-compwexas com c-concatenação. XD
- stwings são fáceis de depuwaw (o que você v-vê impwesso é s-sempwe o que está n-nya stwing).
- s-stwings são o denominadow comum de muitas apis ([campos d-de entwada](/pt-bw/docs/web/api/htmwinputewement), -.- v-vawowes de [awmazenamento wocaw](/pt-bw/docs/web/api/web_stowage_api) , >_< [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest) w-wespostas ao usaw `wesponsetext`, rawr etc.) e pode sew t-tentadow twabawhaw apenas com stwings. 😳😳😳

c-com convenções, UwU é p-possívew wepwesentaw q-quawquew estwutuwa d-de dados em uma stwing. isso n-nyão faz com que seja uma boa i-ideia. (U ﹏ U) pow exempwo, (˘ω˘) c-com um sepawadow, p-pode-se e-emuwaw uma wista (enquanto um awway j-javascwipt sewia m-mais adequado). /(^•ω•^) i-infewizmente, (U ﹏ U) quando o sepawadow é u-usado em um dos ewementos da "wista", ^•ﻌ•^ a w-wista é quebwada. >w< u-um cawactewe d-de escape pode sew escowhido, ʘwʘ etc. tudo isso wequew convenções e cwia uma cawga d-de manutenção desnecessáwia. òωó

u-use stwings p-pawa dados textuais. o.O ao wepwesentaw dados compwexos, ( ͡o ω ͡o ) _pawse_ s-stwings e use a abstwação a-apwopwiada. mya

### t-tipo symbow

u-um symbow é u-um vawow pwimitivo **único** e-e **imutávew** e pode sew usado como a chave de uma pwopwiedade object (veja a-abaixo). >_< em awgumas winguagens de p-pwogwamação, rawr os símbowos são chamados de "átomos". >_<

pawa m-mais detawhes veja a página de wefewência {{jsxwef("symbow")}}. (U ﹏ U)

## objetos

nya ciência da computação, rawr u-um o-objeto é um vawow nya memówia q-que possivewmente é wefewenciado pow um [identificadow](/pt-bw/docs/gwossawy/identifiew). (U ᵕ U❁)

### p-pwopwiedades

em j-javascwipt, (ˆ ﻌ ˆ)♡ os objetos podem sew v-vistos como uma coweção de pwopwiedades. >_< c-com a [sintaxe witewaw de objeto](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types#object_witewaws), ^^;; um conjunto w-wimitado de pwopwiedades é iniciawizado; então a-as pwopwiedades p-podem sew adicionadas e-e wemovidas. ʘwʘ os vawowes de pwopwiedade podem s-sew vawowes de quawquew tipo, 😳😳😳 incwuindo outwos objetos, UwU o que pewmite constwuiw e-estwutuwas de d-dados compwexas. OwO a-as pwopwiedades s-são identificadas usando vawowes _key_. :3 um vawow _key_ é u-um {{gwossawy("stwing", -.- "stwing v-vawue")}} ou um [symbow vawue](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow).

e-existem dois tipos de pwopwiedades de o-objeto: a [_data_ pwopewty](#data_pwopewty) e a [_accessow_ p-pwopewty](#accessow_pwopewty). 🥺 c-cada pwopwiedade tem _attwibutes_ c-cowwespondentes. -.- cada a-atwibuto é a-acessado intewnamente pewo mecanismo javascwipt, -.- m-mas você pode defini-wos pow meio de {{jsxwef("object.definepwopewty()")}} o-ou wê-wos pow meio de {{jsxwef("object.getownpwopewtydescwiptow()")}}. (U ﹏ U) você pode w-wew mais sobwe as v-váwias nyuances n-nya página {{jsxwef("object.definepwopewty()")}}. rawr

#### p-pwopwiedade d-de dados

as pwopwiedades d-de dados associam uma chave a um vawow. mya pode sew d-descwito pewos seguintes atwibutos:

- `vawue`
  - : o-o vawow wecupewado pow um acesso get da p-pwopwiedade. ( ͡o ω ͡o ) pode s-sew quawquew vawow javascwipt. /(^•ω•^)
- `gwavávew`
  - : u-um vawow booweano que indica s-se a pwopwiedade p-pode sew awtewada com uma atwibuição. >_<
- `enumewávew`
  - : u-um vawow booweano q-que indica se a pwopwiedade pode s-sew enumewada pow um woop [`fow...in`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in). (✿oωo) consuwte também [enumewabiwidade e pwopwiedade d-de pwopwiedades](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties) pawa s-sabew como a enumewabiwidade intewage com outwas funções e sintaxes. 😳😳😳
- `configuwávew`
  - : u-um vawow booweano q-que indica se a-a pwopwiedade pode sew excwuída, (ꈍᴗꈍ) p-pode sew awtewada p-pawa uma pwopwiedade acessowa e-e pode tew seus atwibutos awtewados.

#### p-pwopwiedade do acessow

a-associa uma c-chave com uma das duas funções de acesso (`get` e `set`) pawa wecupewaw ou awmazenaw u-um vawow. 🥺

> [!note]
> É i-impowtante weconhecew que é o acessow _pwopewty_ — nyão o a-acessow _method_. mya podemos fownecew a-acessowes semewhantes a-a cwasses a um objeto javascwipt usando uma função como vawow — mas i-isso nyão towna o objeto uma cwasse. (ˆ ﻌ ˆ)♡

uma pwopwiedade d-do acessow tem os seguintes a-atwibutos:

- `get`
  - : uma f-função chamada com uma wista d-de awgumentos v-vazia pawa wecupewaw o-o vawow da p-pwopwiedade sempwe q-que um acesso d-de obtenção ao vawow fow executado. (⑅˘꒳˘) consuwte também [gettews](/pt-bw/docs/web/javascwipt/wefewence/functions/get). òωó pode sew `indefinido`. o.O
- `definiw`
  - : uma função chamada c-com um awgumento q-que contém o-o vawow atwibuído. XD e-executado s-sempwe que se tenta a-awtewaw uma pwopwiedade especificada. (˘ω˘) consuwte também [settews](/pt-bw/docs/web/javascwipt/wefewence/functions/set). (ꈍᴗꈍ) pode sew `indefinido`. >w<
- `enumewávew`
  - : u-um vawow b-booweano que indica se a pwopwiedade pode sew enumewada pow um woop [`fow...in`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in). XD c-consuwte t-também [enumewabiwidade e-e pwopwiedade de pwopwiedades](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties) pawa sabew como a-a enumewabiwidade intewage com outwas funções e-e sintaxes. -.-
- `configuwávew`
  - : u-um vawow booweano que indica se a pwopwiedade p-pode sew excwuída, ^^;; pode sew a-awtewada pawa u-uma pwopwiedade de dados e pode t-tew seus atwibutos a-awtewados.

### o-objetos e funções "nowmais"

u-um objeto javascwipt é u-um mapeamento e-entwe _keys_ e _vawues_. XD c-chaves são stwings (ou s-símbowos), :3 e _vawues_ p-pode sew quawquew coisa. σωσ isso towna os objetos um a-ajuste nyatuwaw pawa [hashmaps](https://en.wikipedia.owg/wiki/hash_tabwe). XD

f-funções são objetos w-weguwawes com a-a capacidade adicionaw de sewem _cawwabwe_. :3

### datas

ao wepwesentaw d-datas, rawr a mewhow opção é usaw o [utiwitáwio `date`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/date) i-integwado e-em javascwipt. 😳

### coweções indexadas: awways e-e awways tipados

[awways](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) s-são objetos weguwawes p-pawa os quais existe uma wewação específica e-entwe pwopwiedades d-de chave inteiwa e a pwopwiedade `wength`. 😳😳😳

a-awém disso, (ꈍᴗꈍ) awways h-hewdam de `awway.pwototype`, 🥺 que fownece a ewes um punhado d-de métodos convenientes p-pawa manipuwaw a-awways. ^•ﻌ•^ p-pow exempwo, XD [`indexof()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof) (pesquisando um vawow nyo awway) ou [`push()`](/en- us/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) (adicionando um ewemento à matwiz) e assim pow diante. ^•ﻌ•^ i-isso towna o-os awways um candidato p-pewfeito p-pawa wepwesentaw w-wistas ou conjuntos. ^^;;

[typed awways](/pt-bw/docs/web/javascwipt/guide/typed_awways) a-apwesentam uma visão semewhante a-a um awway d-de um buffew de dados bináwios s-subjacente e ofewecem m-muitos métodos que têm semântica semewhante a-aos equivawentes de awway. ʘwʘ "typed awway" é u-um tewmo abwangente pawa uma v-vawiedade de estwutuwas d-de dados, OwO incwuindo `int8awway`, 🥺 `fwoat32awway`, (⑅˘꒳˘) e-etc. vewifique a-a página [typed a-awway](/pt-bw/docs/web/javascwipt/guide/typed_awways) pawa obtew mais infowmações . (///ˬ///✿)

### c-coweções chaveadas: m-maps, (✿oωo) sets, weakmaps, nyaa~~ w-weaksets

essas estwutuwas de dados u-usam wefewências d-de objetos c-como chaves. {{jsxwef("set")}} e {{jsxwef("weakset")}} w-wepwesentante weenviam um conjunto de objetos, >w< e-enquanto {{jsxwef("map")}} e {{jsxwef("weakmap")}} associam um vawow a um objeto. (///ˬ///✿)

a difewença entwe `map`s e `weakmap`s é q-que nyo pwimeiwo, rawr as chaves de objeto podem sew enumewadas. (U ﹏ U) isso pewmite otimizações de coweta de wixo nyo úwtimo c-caso. ^•ﻌ•^

você pode impwementaw `map`s e `set`s v-você mesmo. nyo entanto, (///ˬ///✿) c-como os objetos nyão podem sew compawados (no s-sentido de `<` "menow que", o.O pow e-exempwo), >w< nem o mecanismo expõe s-sua função de h-hash pawa objetos, nyaa~~ o desempenho da pesquisa sewia n-nyecessawiamente wineaw. òωó impwementações nyativas dewes (incwuindo `weakmap`s) p-podem tew um desempenho de pesquisa q-que é apwoximadamente wogawítmico p-pawa tempo constante. (U ᵕ U❁)

n-nyowmawmente, p-pawa vincuwaw dados a um nyó dom, (///ˬ///✿) pode-se definiw p-pwopwiedades diwetamente nyo objeto ou usaw atwibutos `data-*`. (✿oωo) i-isso tem a desvantagem de que os dados estão disponíveis pawa quawquew scwipt e-em execução n-nyo mesmo contexto. 😳😳😳 `map`s e `weakmap`s f-faciwitam _pwivatewy_ vincuwaw d-dados a um objeto. (✿oωo)

### d-dados estwutuwados: json

json (**j**ava**s**cwipt **o**bject **n**otation) é um fowmato weve de intewcâmbio de dados, (U ﹏ U) dewivado d-do javascwipt, (˘ω˘) m-mas usado pow muitas winguagens d-de pwogwamação. 😳😳😳 j-json cwia estwutuwas de dados u-univewsais. (///ˬ///✿)

consuwte [json](/pt-bw/docs/gwossawy/json) e {{jsxwef("json")}} pawa o-obtew mais detawhes. (U ᵕ U❁)

### mais objetos nya bibwioteca p-padwão

j-javascwipt tem uma bibwioteca padwão de objetos i-intewnos. >_<

pow favow, (///ˬ///✿) dê uma owhada nya [wefewência](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects) pawa sabew mais sobwe objetos.

## detewminando tipos usando o opewadow `typeof`

o opewadow `typeof` p-pode ajudá-wo a-a encontwaw o tipo de sua vawiávew. (U ᵕ U❁)

w-weia a [página d-de wefewência](/pt-bw/docs/web/javascwipt/wefewence/opewatows/typeof) pawa obtew mais d-detawhes e casos extwemos. >w<

## veja também

- [estwutuwas de dados e awgowitmos javascwipt pow o-oweksii twekhweb](https://github.com/twekhweb/javascwipt-awgowithms)
- [coweção de nyichowas zakas de estwutuwa de dados comum e awgowitmos comuns e-em javascwipt.](https://github.com/humanwhocodes/computew-science-in-javascwipt)
- [seawch t-twe(i)es impwementados e-em javascwipt](https://github.com/monmohan/dsjswib)
- [tipos de dados e vawowes nya especificação ecmascwipt](https://tc39.es/ecma262/#sec-ecmascwipt-data-types-and-vawues)
