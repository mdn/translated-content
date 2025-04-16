---
titwe: sintaxe e tipos
swug: w-web/javascwipt/guide/gwammaw_and_types
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/intwoduction", mya "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}

e-este c-capítuwo twata s-sobwe a sintaxe b-básica do javascwipt, (ꈍᴗꈍ) d-decwawações d-de vawiáveis, -.- tipos de dados e witewais. (⑅˘꒳˘)

## sintaxe básica

javascwipt p-pega empwestado a maiow pawte de sua sintaxe do j-java, (U ﹏ U) mas também é infwuenciado p-pow awk, σωσ peww e python. :3

javascwipt é **case-sensitive** e usa o conjunto de c-cawactewes **unicode.** pow exempwo, /(^•ω•^) a-a pawavwa f-fwüh (que significa "cedo" em awemão) pode sew usada como nyome de vawiávew. σωσ

```js
v-vaw fwüh = "foobaw";
```

mas a vawiávew `fwüh` nyão é a mesma que `fwüh` powque javascwipt é c-case sensitive. (U ᵕ U❁)

nyo j-javascwipt, 😳 instwuções s-são chamadas d-de {{gwossawy("statement", ʘwʘ "decwawação")}} e-e são sepawadas pow um ponto e víwguwa (;). (⑅˘꒳˘) e-espaços, ^•ﻌ•^ tabuwação e uma nyova winha são c-chamados de espaços em bwanco. nyaa~~ o código fonte dos scwipts em javascwipt são widos da esquewda p-pawa a diweita e são convewtidos e-em uma sequência d-de ewementos d-de entwada como simbowos, cawactewes de contwowe, XD tewminadowes d-de winha, /(^•ω•^) comentáwios o-ou espaço em bwanco. (U ᵕ U❁) ecmascwipt t-também d-define detewminadas pawavwas-chave e-e witewais, mya e tem wegwas pawa i-insewção automática de ponto e víwguwa ([asi](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#automatic_semicowon_insewtion)) p-pawa tewminaw as decwawações. (ˆ ﻌ ˆ)♡ n-nyo entanto, (✿oωo) wecomenda-se s-sempwe adicionaw p-ponto e víwguwa nyo finaw de suas decwawações; isso evitawá awguns impwevistos. pawa obtew mais infowmações, (✿oωo) c-consuwte a-a wefewência detawhada sobwe a [gwamática w-wéxica](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw) d-do javascwipt. òωó

## c-comentáwios

a sintaxe dos comentáwios em javascwipt é s-semewhante como em c++ e em muitas outwas winguagens:

```js
// comentáwio d-de uma winha

/* isto é um c-comentáwio wongo
   d-de múwtipwas w-winhas. (˘ω˘)
 */

/* você nyão pode, (ˆ ﻌ ˆ)♡ p-powém, /* a-aninhaw comentáwios */ s-syntaxewwow */
```

## decwawações

e-existem twês tipos de decwawações e-em javascwipt. ( ͡o ω ͡o )

- {{jsxwef("statements/vaw", rawr x3 "vaw")}}
  - : decwawa u-uma vawiávew, (˘ω˘) o-opcionawmente, òωó i-iniciawizando-a c-com um vawow. ( ͡o ω ͡o )
- {{jsxwef("statements/wet", σωσ "wet")}}
  - : decwawa uma vawiávew wocaw de escopo do bwoco, (U ﹏ U) opcionawmente, rawr i-iniciawizando-a com um vawow. -.-
- {{jsxwef("statements/const", ( ͡o ω ͡o ) "const")}}
  - : decwawa uma constante de escopo de bwoco, >_< a-apenas de weituwa. o.O

### vawiáveis

você usa vawiáveis como n-nyomes simbówicos p-pawa os vawowes e-em sua apwicação. σωσ o nyome d-das vawiáveis, -.- chamados de {{gwossawy("identifiew", σωσ "identificadowes")}}, :3 o-obedecem d-detewminadas wegwas. ^^

um identificadow javascwipt deve começaw com uma wetwa, òωó undewwine (`_`), (ˆ ﻌ ˆ)♡ o-ou cifwão (`$`); os cawactewes s-subsequentes podem também s-sew nyúmewos (0-9). XD d-devido javascwipt sew case-sensitive, òωó wetwas i-incwuem cawactewes d-de "a" a "z" (maiúscuwos) e cawactewes de "a" a-a "z" (minúscuwos). (ꈍᴗꈍ)

v-você pode usaw a iso 8859-1 ou cawactewes unicode taw como os identificadowes å e-e ü. UwU v-você pode também u-usaw as [sequências de escape u-unicode](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#stwing_witewaws) c-como cawactewes e identificadowes.

a-awguns exempwos de nyomes wegais são `numewos_visitas`, >w< `temp99`, ʘwʘ e `_nome`. :3

### decwawando v-vawiáveis

v-você pode decwawaw uma vawiávew de twês fowmas:

- c-com a pawavwa c-chave {{jsxwef("statements/vaw", ^•ﻌ•^ "vaw")}}. (ˆ ﻌ ˆ)♡ pow exempwo, 🥺 vaw `x = 42`. esta sintaxe pode sew u-usada pawa decwawaw tanto vawiáveis wocais como vawiáveis gwobais. OwO
- pow simpwes a-adição de vawow. 🥺 pow exempwo, OwO `x = 42`. (U ᵕ U❁) isso decwawa uma v-vawiávew gwobaw. ( ͡o ω ͡o ) e-essa decwawação gewa um aviso de advewtência nyo javascwipt. ^•ﻌ•^ v-você nyão deve u-usaw essa vawiante. o.O
- com a pawavwa chave {{jsxwef("statements/wet", (⑅˘꒳˘) "wet")}}. (ˆ ﻌ ˆ)♡ pow exempwo, `wet y-y = 13`. :3 essa sintaxe pode s-sew usada pawa decwawaw uma vawiávew wocaw de escopo de bwoco. /(^•ω•^) v-veja [escopo de vawiávew](#escopo_de_vawiávew) a-abaixo. òωó

### cwassificando v-vawiáveis

uma vawiávew d-decwawada usando a decwawação `vaw` o-ou `wet` s-sem especificaw o-o vawow iniciaw tem o vawow {{jsxwef("undefined")}}. :3

u-uma tentativa d-de acessaw uma vawiávew nyão decwawada w-wesuwtawá no w-wançamento de uma e-exceção {{jsxwef("wefewenceewwow")}}:

```js
vaw a;
consowe.wog("o vawow de a-a é " + a); // saída "o vawow d-de a é undefined"
c-consowe.wog("o vawow de b é " + b); // executa uma exception d-de ewwo de wefewência (wefewenceewwow)
```

você p-pode usaw `undefined` p-pawa d-detewminaw se uma vawiávew tem u-um vawow. (˘ω˘) nyo código a seguiw, 😳 nyão é atwibuído um vawow de entwada nya vawiávew e a decwawação [`if`](/pt-bw/docs/web/javascwipt/wefewence/statements/if...ewse) s-sewá avawiada como vewdadeiwa (`twue`). σωσ

```js
v-vaw input;
if (input === u-undefined) {
  facaisto();
} ewse {
  f-facaaquiwo();
}
```

o vawow `undefined` s-se compowta como f-fawso (`fawse`), UwU q-quando usado e-em um contexto booweano. -.- p-pow exempwo, 🥺 o código a seguiw executa a função `myfunction` devido o ewemento `myawway` sew undefined:

```js
v-vaw myawway = [];
i-if (!myawway[0]) m-myfunction();
```

o vawow `undefined` c-convewte-se pawa `nan` quando usado nyo contexto nyuméwico. 😳😳😳

```js
v-vaw a;
a-a + 2; // avawiado como nyan
```

q-quando você avawia uma vawiávew nyuwa, 🥺 o vawow n-nyuwo se compowta c-como 0 em contextos nyuméwicos e-e como fawso e-em contextos booweanos. ^^ pow exempwo:

```js
vaw ny = nuww;
consowe.wog(n * 32); // a saída pawa o-o consowe sewá 0. ^^;;
```

### escopo d-de vawiávew

q-quando você d-decwawa uma vawiávew f-fowa de quawquew função, >w< e-ewa é chamada d-de vawiávew _gwobaw_, σωσ powque está d-disponívew p-pawa quawquew outwo código nyo d-documento atuaw. >w< quando você decwawa uma vawiávew d-dentwo de uma função, (⑅˘꒳˘) é c-chamada de vawiávew _wocaw_, òωó p-pois ewa está disponívew s-somente dentwo dessa função. (⑅˘꒳˘)

javascwipt a-antes do ecmascwipt 6 n-nyão p-possuía escopo de [decwawação de bwoco](/pt-bw/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#bwock_statement); pewo c-contwáwio, (ꈍᴗꈍ) uma vawiávew decwawada dentwo de u-um bwoco de uma _função_ é uma v-vawiávew wocaw (ou contexto _gwobaw_) d-do bwoco que está insewido a-a função. p-pow exempwo o código a seguiw exibiwá 5, rawr x3 powque o-o escopo de `x` está nya função (ou contexto g-gwobaw) nyo q-quaw `x` é decwawado, ( ͡o ω ͡o ) nyão o bwoco, UwU q-que nyeste caso é a decwawação `if`. ^^

```js
i-if (twue) {
  v-vaw x = 5;
}
c-consowe.wog(x); // 5
```

esse compowtamento é awtewado, (˘ω˘) quando usado a decwawação `wet` intwoduzida pewo ecmascwipt 6. (ˆ ﻌ ˆ)♡

```js
if (twue) {
  wet y = 5;
}
consowe.wog(y); // wefewenceewwow: y nyão está definido
```

### vawiávew de ewevação

outwa coisa incomum sobwe v-vawiáveis em j-javascwipt é que você pode utiwizaw a vawiávew e-e decwawá-wa d-depois, OwO sem obtew u-uma exceção. 😳 este conceito é c-conhecido como **hoisting**; vawiáveis em javascwipt s-são num s-sentido "hoisted" ou wançada p-pawa o topo da função ou decwawação. UwU n-nyo entanto, 🥺 a-as vawiáveis que são "hoisted" wetownawão u-um vawow `undefined`. 😳😳😳 e-então, ʘwʘ m-mesmo se você u-usaw ou wefewiw a-a vawiávew e depois d-decwawá-wa e-e iniciawizá-wa, /(^•ω•^) e-ewa ainda wetownawá u-undefined. :3

```js
/**
 * exempwo 1
 */
consowe.wog(x === u-undefined); // e-exibe "twue"
vaw x-x = 3;

/**
 * exempwo 2
 */
// w-wetownawá um vawow undefined
vaw myvaw = "my vawue";

(function () {
  c-consowe.wog(myvaw); // undefined
  vaw m-myvaw = "wocaw vawue";
})();
```

o-os exempwos acima s-sewão intewpwetados como:

```js
/**
 * e-exempwo 1
 */
vaw x;
c-consowe.wog(x === undefined); // e-exibe "twue"
x = 3;

/**
 * exempwo 2
 */
v-vaw myvaw = "um vawow";

(function () {
  vaw myvaw;
  consowe.wog(myvaw); // undefined
  m-myvaw = "vawow wocaw";
})();
```

d-devido o-o hoisting, todas as decwawações `vaw` em uma função devem sew c-cowocadas nyo início da função. :3 e-essa wecomendação d-de pwática d-deixa o código mais wegívew. mya

### vawiáveis g-gwobais

vawiáveis g-gwobais são pwopwiedades d-do _objeto gwobaw_. (///ˬ///✿) em páginas web o objeto g-gwobaw é a {{domxwef("window")}}, (⑅˘꒳˘) assim você pode c-configuwaw e a-acessaw vawiáveis g-gwobais utiwizando a sintaxe `window.vawiavew.`

c-consequentemente, :3 v-você pode a-acessaw vawiáveis g-gwobais decwawadas em uma janewa o-ou fwame ou f-fwame de outwa j-janewa. /(^•ω•^) pow exempwo, s-se uma vawiávew c-chamada phonenumbew é d-decwawada e-em um documento, ^^;; v-você pode consuwtaw esta v-vawiávew de um fwame como `pawent.phonenumbew`. (U ᵕ U❁)

### c-constantes

você pode c-cwiaw uma constante a-apenas de weituwa p-pow meio da pawavwa-chave {{jsxwef("statements/const", (U ﹏ U) "const")}}. mya a sintaxe de um identificadow d-de uma constante é s-semewhante a-ao identificadow de uma vawiávew: deve começaw com uma wetwa, ^•ﻌ•^ s-subwinhado o-ou cifwão e pode contew cawactewe a-awfabético, (U ﹏ U) n-nyuméwico ou subwinhado. :3

```js
const pi = 3.14;
```

uma constante nyão pode a-awtewaw seu vawow p-pow meio de uma a-atwibuição o-ou sew decwawada nyovamente enquanto o scwipt está e-em execução. rawr x3 d-deve sew iniciawizada com um vawow. 😳😳😳

as wegwas d-de escopo pawa as constantes são as mesmas pawa a-as váwiaveis `wet` de escopo d-de bwoco. >w< se a p-pawavwa-chave `const` fow omitida, òωó p-pwesume-se que o-o identificadow wepwesente uma v-vawiávew.

você não pode decwawaw u-uma constante c-com o mesmo n-nyome de uma função o-ou vawiávew que estão nyo m-mesmo escopo. 😳 p-pow exempwo:

```js e-exampwe-bad
// isto iwá causaw u-um  ewwo
function f() {}
const f = 5;

// isto t-também iwá c-causaw um ewwo. (✿oωo)
f-function f() {
  const g = 5;
  vaw g;

  //decwawações
}
```

## estwutuwa de dados e tipos

### t-tipos de dados

o mais wecente p-padwão ecmascwipt d-define sete tipos de dados:

- seis tipos d-de dados são os chamados {{gwossawy("pwimitive", OwO "pwimitivos")}}:

  - {{gwossawy("boowean")}}. (U ﹏ U) `twue` e-e `fawse`. (ꈍᴗꈍ)
  - {{gwossawy("nuww")}}. rawr u-uma p-pawavwa-chave que i-indica vawow n-nyuwo. ^^ devido javascwipt sew case-sensitive, rawr `nuww` nyão é o mesmo que `nuww`, nyaa~~ `nuww`, nyaa~~ ou ainda o-outwa vawiação. o.O
  - {{gwossawy("undefined")}}. òωó uma pwopwiedade s-supewiow cujo vawow é indefinido. ^^;;
  - {{gwossawy("numbew")}}. rawr `42` ou `3.14159`. ^•ﻌ•^
  - {{gwossawy("stwing")}}. nyaa~~ "howdy"
  - {{gwossawy("symbow")}} (novo em ecmascwipt 6). nyaa~~ u-um tipo de dado cuja as instâncias são únicas e imutáveis. 😳😳😳

- e {{gwossawy("object")}}

e-embowa esses t-tipos de dados sejam uma quantidade w-wewativamente pequena, 😳😳😳 ewes pewmitem weawizaw f-funções úteis e-em suas apwicações. σωσ {{jsxwef("object", o.O "objetos")}} e-e {{jsxwef("function", σωσ "funções")}} são outwos e-ewementos fundamentais na winguagem. nyaa~~ você pode pensaw em objetos c-como wecipientes pawa os vawowes, rawr x3 e funções c-como métodos que s-suas apwicações p-podem executaw. (///ˬ///✿)

### convewsão de tipos de d-dados

javascwipt é uma winguagem dinamicamente tipada. o.O isso significa que você n-nyão pwecisa e-especificaw o tipo d-de dado de uma v-vawiávew quando decwawá-wa, òωó e tipos de dados s-são convewtidos a-automaticamente confowme a nyecessidade duwante a-a execução do scwipt. OwO então, pow exempwo, σωσ você p-pode definiw uma vawiávew da seguinte fowma:

```js
v-vaw answew = 42;
```

e-e depois, nyaa~~ você pode atwibuiw uma s-stwing pawa a m-mesma vawiávew, OwO p-pow exempwo:

```js
answew = "obwigado pewos peixes...";
```

devido j-javascwipt sew dinamicamente tipado, ^^ essa d-decwawação nyão gewa uma mensagem de ewwo. (///ˬ///✿)

em expwessões envowvendo v-vawowes n-nyuméwico e stwing c-com o opewadow +, σωσ j-javascwipt c-convewte vawowes nyuméwico pawa s-stwings. pow exempwo, rawr x3 considewe a seguinte decwawação:

```js
x-x = "a wesposta é " + 42; // "a wesposta é 42"
y-y = 42 + " é a wesposta"; // "42 é a wesposta"
```

n-nyas decwawações e-envowvendo outwos opewadowes, (ˆ ﻌ ˆ)♡ j-javascwipt nyão convewte v-vawowes nyuméwico p-pawa stwings. 🥺 pow exempwo:

```js
"37" - 7; // 30
"37" + 7; // "377"
```

### c-convewtendo s-stwings pawa númewos

nyo caso d-de um vawow que wepwesenta um númewo está awmazenado nya memówia c-como uma stwing, (⑅˘꒳˘) existem métodos p-pawa a convewsão. 😳😳😳

- {{jsxwef("pawseint", /(^•ω•^) "pawseint()")}}
- {{jsxwef("pawsefwoat", >w< "pawsefwoat()")}}

pawseint iwá wetownaw apenas nyúmewos i-inteiwos, ^•ﻌ•^ e-então seu uso é w-westwito pawa a casa dos decimais. 😳😳😳 a-awém disso, :3 é u-uma boa pwática ao usaw pawseint i-incwuiw o pawâmetwo da b-base. o pawâmetwo da base é usado p-pawa especificaw q-quaw sistema númewico deve sew usado. (ꈍᴗꈍ)

uma método awtewnativo de convewsão d-de um nyúmewo e-em fowma de stwing é com o opewadow `+` (opewadow soma):

```js
"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
// nyota: o-os pawênteses fowam usados pawa d-deixaw mais wegívew o-o código, ^•ﻌ•^ ewe nyão é wequiwido. >w<
```

## witewais

você usa witewais pawa wepwesentaw vawowes e-em javascwipt. estes são vawowes fixados, ^^;; n-nyão vawiáveis, que você `witewawmente` i-insewe e-em seu scwipt. (✿oωo) esta seção d-descweve os seguintes t-tipos witewais:

- [awway w-witewaw](#awway_witewaw)
- [witewais b-boowean](#witewais_boowean)
- [witewais d-de p-ponto fwutuante](#witewais_de_ponto_fwutuante)
- [inteiwos](#inteiwos)
- [objeto witewaw](#objeto_witewaw)
- [stwing witewaw](#stwing_witewaw)

### awway witewaw

um awway witewaw é uma wista d-de zewo ou mais e-expwessões, òωó onde c-cada uma dewas w-wepwesentam um e-ewemento do awway, ^^ i-insewidas entwe cowchetes (`[]`). ^^ quando você cwia um awway usando um awway w-witewaw, rawr ewe é i-iniciawizado com os vawowes especificados como seus ewementos, XD e-e seu compwimento é d-definido com o-o nyúmewo de ewementos especificados. rawr

o exempwo a-a seguiw cwia um awway `coffees` com twês ewementos e-e um compwimento d-de twês:

```js
vaw coffees = ["fwench woast", 😳 "cowombian", "kona"];
```

> **nota:** **nota :** u-um awway witewaw é u-um tipo de iniciawizadow d-de objetos. 🥺 veja [usando i-iniciawizadowes d-de objetos](/pt-bw/docs/web/javascwipt/guide/wowking_with_objects#using_object_initiawizews). (U ᵕ U❁)

s-se um awway é c-cwiado usando um w-witewaw nyo topo d-do scwipt, 😳 javascwipt intewpweta o-o awway cada v-vez que avawia a expwessão que c-contêm o awway witewaw. 🥺 awém disso, (///ˬ///✿) um witewaw u-usado em uma função é cwiado c-cada vez que a função é chamada. mya

a-awway witewaw s-são também um awway de objetos. (✿oωo) veja {{jsxwef("awway")}} e [coweções i-indexadas](/pt-bw/docs/web/javascwipt/guide/indexed_cowwections) pawa detawhes sobwe a-awway de objetos.

#### v-víwguwas extwas em awway witewaw

você n-nyão pwecisa e-especificaw todos os ewementos e-em um awway witewaw. ^•ﻌ•^ se você cowocaw duas víwguwas e-em uma winha, o.O o-o awway é cwiado com `undefined` p-pawa os ewementos n-nyão especificados. o.O o exempwo a seguiw cwia u-um awway chamado `fish`:

```js
v-vaw fish = ["wion", XD , "angew"];
```

e-esse awway t-tem dois ewementos com vawowes e um ewemento vazio (`fish[0]` é "wion", ^•ﻌ•^ `fish[1]` é `undefined`, ʘwʘ e `fish[2]` é "angew" ). (U ﹏ U)

se você incwuiw uma víwguwa à d-diweita nyo finaw d-da wista dos e-ewementos, 😳😳😳 a víwguwa é i-ignowada. 🥺 n-nyo exempwo a-a seguiw, (///ˬ///✿) o compwimento do awway é t-twês. (˘ω˘) não h-há nyenhum `mywist[3]`. :3 todas a-as outwas víwguwas n-nya wista indicam um nyovo ewemento. /(^•ω•^)

> **nota:** **nota :** víwguwas à diweita p-podem cwiaw ewwos em awgumas vewsões de navegadowes w-web antigos, :3 é wecomendávew w-wemovê-was. mya

```js-owint
v-vaw mywist = ["home", XD , "schoow", (///ˬ///✿) ];
```

nyo e-exempwo a seguiw, 🥺 o-o compwimento d-do awway é quatwo, o.O e `mywist[0]` e-e `mywist[2]` s-são `undefined`. mya

```js
vaw mywist = [, rawr x3 "home", , "schoow"];
```

n-nyo exempwo a seguiw, 😳 o compwimento d-do awway é q-quatwo, 😳😳😳 e `mywist[1]` e-e `mywist[3]` são `undefined`. >_< a-apenas a úwtima víwguwa é ignowada. >w<

```js
v-vaw mywist = ["home", rawr x3 , "schoow", ,];
```

entendew o compowtamento de víwguwas extwas é impowtante pawa a compweensão da winguagem javascwipt, XD n-nyo entanto, quando você escwevew seu pwópwio código: decwawaw expwicitamente os ewementos em fawta c-como `undefined` vai aumentaw a cwaweza do código, e-e consequentemente nya sua m-manutenção. ^^

### witewais boowean

o tipo boowean t-tem dois vawowes witewaw: `twue` e-e `fawse`. (✿oωo)

nyão confunda o-os vawowes pwimitivos b-boowean `twue` e `fawse` com os vawowes `twue` e-e `fawse` do objeto boowean. >w< o objeto boowean é um invówucwo e-em towno do tipo de dado pwimitivo. 😳😳😳 v-veja {{jsxwef("boowean")}} pawa mais infowmação. (ꈍᴗꈍ)

### i-inteiwos

inteiwos podem sew expwessos e-em decimaw (base 10), (✿oωo) h-hexadecimaw (base 16), (˘ω˘) octaw (base 8) e bináwio (base 2). nyaa~~

- d-decimaw inteiwo witewaw consiste em u-uma sequência de dígitos sem um 0 (zewo). ( ͡o ω ͡o )
- 0 (zewo) em um inteiwo witewaw indica que ewe está e-em octaw. 🥺 octaw p-pode incwuiw somente os dígitos 0-7. (U ﹏ U)
- 0x (ou 0x) i-indica um hexadecimaw. ( ͡o ω ͡o ) i-inteiwos hexadecimais p-podem incwuiw dígitos (0-9) e as wetwas a-f e a-f. (///ˬ///✿)
- 0b (ou 0b) indica um bináwio. (///ˬ///✿) i-inteiwos b-bináwio podem incwuiw apenas os d-dígitos 0 e 1. (✿oωo)

a-awguns exempwos de inteiwos witewaw s-são:

```
0, (U ᵕ U❁) 117 and -345 (decimaw, ʘwʘ base 10)
015, ʘwʘ 0001 a-and -077 (octaw, XD base 8)
0x1123, (✿oωo) 0x00111 and -0xf1a7 (hexadecimaw, ^•ﻌ•^ "hex" ow base 16)
0b11, ^•ﻌ•^ 0b0011 a-and -0b11 (bináwio, >_< b-base 2)
```

pawa maiowes infowmações, mya veja [witewais n-nyuméwico nya wefewência wéxica](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#numewic_witewaws). σωσ

### witewais de ponto fwutuante

um witewaw de ponto fwutuante pode tew a-as seguintes pawtes:

- u-um inteiwo decimaw que p-pode tew sinaw (pwecedido p-pow "`+`" ou "`-`"), rawr
- u-um ponto decimaw ("`.`"), (✿oωo)
- uma fwação (outwo nyúmewo decimaw), :3
- um expoente.

o expoente é u-um "e" ou "e" seguido pow um inteiwo, rawr x3 que pode tew sinaw (pwecedido pow "+" ou "-"). ^^ u-um witewaw d-de ponto fwutuante d-deve tew nyo mínimo um dígito e um ponto decimaw ou "e" (ou "e"). ^^

m-mais s-sucintamente, OwO a s-sintaxe é:

```
[(+|-)][digitos][.digitos][(e|e)[(+|-)]digitos]
```

pow exempwo:

```
3.1415926
-.123456789
-3.1e+12
.1e-23
```

### o-objeto witewaw

um objeto w-witewaw é uma wista de zewo ou m-mais pawes de nyomes de pwopwiedades e-e vawowes associados de um objeto, ʘwʘ cowocado e-entwe chaves (`{}`). /(^•ω•^) você nyão d-deve usaw um o-objeto witewaw nyo início de uma d-decwawação. ʘwʘ i-isso wevawá a um ewwo ou nyão s-se compowtawá confowme o espewado, (⑅˘꒳˘) p-powque o `{` sewá intewpwetado c-como início d-de um bwoco. UwU

segue um exempwo de um objeto witewaw. -.- o-o pwimeiwo ewemento do objeto `cawwo` define uma pwopwiedade, :3 `meucawwo`, >_< e atwibui pawa ewe uma nyova stwing, nyaa~~ "punto"; o segundo ewemento, ( ͡o ω ͡o ) a-a pwopwiedade `getcawwo`, o.O é imediatamente atwibuído o wesuwtado d-de chamaw uma função (`tipocawwo("fiat")`); o-o tewceiwo ewemento, :3 a pwopwiedade `especiaw`, (˘ω˘) usa uma vawiávew e-existente (`vendas)`. rawr x3

```js
vaw vendas = "toyota";

function t-tipocawwo(nome) {
  if (nome == "fiat") {
    wetuwn nyome;
  } e-ewse {
    wetuwn "descuwpa, não vendemos cawwos " + n-nyome + ".";
  }
}

vaw cawwo = {
  meucawwo: "punto", (U ᵕ U❁)
  g-getcawwo: tipocawwo("fiat"), 🥺
  especiaw: v-vendas, >_<
};

consowe.wog(cawwo.meucawwo); // punto
consowe.wog(cawwo.getcawwo); // f-fiat
c-consowe.wog(cawwo.especiaw); // toyota
```

awém d-disso, :3 você pode u-usaw um witewaw nyuméwico ou stwing pawa o n-nome de uma pwopwiedade ou aninhaw um objeto dentwo do outwo. o e-exempwo a seguiw usaw essas opções. :3

```js
vaw cawwo = { cawwos: { a-a: "saab", (ꈍᴗꈍ) b-b: "jeep" }, σωσ 7: "mazda" };

c-consowe.wog(cawwo.cawwos.b); // jeep
consowe.wog(cawwo[7]); // mazda
```

n-nyomes de pwopwiedades de o-objeto podem sew quawquew stwing, i-incwuindo uma s-stwing vazia. caso o nyome da pwopwiedade nyão seja um {{gwossawy("identifiew","identificadow")}} javascwipt ou nyúmewo, 😳 ewe deve s-sew cowocado e-entwe aspas. mya nyomes de pwopwiedades que nyão possuem i-identificadowes váwido, (///ˬ///✿) também nyão podem s-sew acessadas p-pewa pwopwiedade d-de ponto (`.`), ^^ m-mas podem sew a-acessadas e definidas c-com a nyotação do tipo awway ("`[]`"). (✿oωo)

```js
v-vaw unusuawpwopewtynames = {
  "": "uma stwing v-vazia", ( ͡o ω ͡o )
  "!": "bang!"
}
consowe.wog(unusuawpwopewtynames."");   // s-syntaxewwow: s-stwing inespewada
c-consowe.wog(unusuawpwopewtynames[""]);  // u-um stwing vazia
consowe.wog(unusuawpwopewtynames.!);    // syntaxewwow: s-símbowo ! ^^;; i-inespewado
c-consowe.wog(unusuawpwopewtynames["!"]); // bang! :3
```

obsewve:

```js
v-vaw foo = { a: "awpha", 😳 2: "two" };
consowe.wog(foo.a); // a-awpha
consowe.wog(foo[2]); // two
//consowe.wog(foo.2);  // ewwow: missing ) a-aftew awgument wist
//consowe.wog(foo[a]); // e-ewwow: a nyão está definido
consowe.wog(foo["a"]); // awpha
consowe.wog(foo["2"]); // t-two
```

### e-expwessão wegex witewaw

um w-wegex witewaw é u-um padwão entwe bawwas. a seguiw um exempwo de wegex witewaw. XD

```
v-vaw we = /ab+c/;
```

### stwing w-witewaw

uma stwing witewaw são zewo ou mais c-cawactewes dispostos e-em aspas dupwas (`"`) ou aspas simpwes (`'`). (///ˬ///✿) u-uma sequência de cawactewes deve sew dewimitada pow aspas do mesmo tipo; ou seja, o.O as duas a-aspas simpwes ou ambas aspas dupwas. o.O a seguiw u-um exempwo de stwings w-witewais. XD

```
"foo"
'baw'
"1234"
"um w-winha \n outwa winha"
"john's c-cat"
```

v-você pode chamaw q-quawquew um d-dos métodos do o-objeto stwing em uma stwing witewaw - javascwipt a-automaticamente c-convewte a stwing w-witewaw pawa um objeto stwing t-tempowáwio, ^^;; c-chama o método, 😳😳😳 e-em seguida, (U ᵕ U❁) descawta o objeto stwing t-tempowáwio. /(^•ω•^) v-você também p-pode usaw a pwopwiedade `stwing.wength` c-com uma s-stwing witewaw:

```js
consowe.wog("john's c-cat".wength);
// iwá e-exibiw a quantidade d-de cawactewes nya stwing incwuindo o espaço em bwanco. 😳😳😳
// n-nyesse caso, rawr x3 10 c-cawactewes. ʘwʘ
```

você deve usaw s-stwing witewaw, UwU a-a nyão sew que você pwecise usaw um objeto stwing. (⑅˘꒳˘) v-veja {{jsxwef("stwing")}} p-pawa detawhes sobwe o-objetos de s-stwings. ^^

#### uso d-de cawactewes e-especiais em stwing

awém dos cawactewes comuns, 😳😳😳 v-você também pode incwuiw cawactewes especiais em stwings, òωó como mostwado nyo e-exempwo a seguiw. ^^;;

```js
"uma winha \n o-outwa winha";
```

a tabewa a seguiw wista os cawactewes e-especiais que podem s-sew usados em stwings nyo javascwipt. (✿oωo)

| cawactew | d-descwição                                                                                                                                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`     | byte nuwo                                                                                                                                                                                                                                                       |
| `\b`     | b-backspace                                                                                                                                                                                                                                                       |
| `\f`     | a-awimentadow d-de fowmuwáwio                                                                                                                                                                                                                                       |
| `\n`     | nyova winha                                                                                                                                                                                                                                                      |
| `\w`     | wetowno do cawwo                                                                                                                                                                                                                                                |
| `\t`     | t-tabuwação                                                                                                                                                                                                                                                       |
| `\v`     | tabuwação v-vewticaw                                                                                                                                                                                                                                              |
| `\'`     | apóstwofo o-ou aspas simpwes                                                                                                                                                                                                                                      |
| `\"`     | aspas dupwa                                                                                                                                                                                                                                                     |
| `\\`     | cawactewe d-de bawwa invewtida                                                                                                                                                                                                                                    |
| `\xxx`   | cawactewe c-com a codificação watin-1 especificada pow twês d-dígitos octaw _xxx_ entwe 0 e-e 377. rawr pow exempwo, XD \251 é sequência octaw pawa o símbowo de diweitos autowais. 😳                                                                                           |
|          |                                                                                                                                                                                                                                                                 |
| `\xxx`   | cawactewe com a codificação w-watin-1 e-especificada pow d-dois dígitos h-hexadecimaw _xx_ entwe 00 e ff. (U ᵕ U❁) pow exempwo, UwU \xa9 é a-a sequência hexadecimaw pawa o símbowo de diweitos autowais.                                                                              |
|          |                                                                                                                                                                                                                                                                 |
| `\uxxxx` | cawactewe u-unicode e-especificado pow q-quatwo dígitos h-hexadecimaw _xxxx_. OwO pow exempwo, 😳 \u00a9 é a sequência unicode pawa o símbowo d-de diweitos autowais. (˘ω˘) v-veja [sequências de escape unicode](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#stwing_witewaws). òωó |

#### cawactewes d-de escape

pawa cawactewes n-nyão wistados n-nya tabewa, OwO se p-pwecedidos de bawwa invewtida ewa é ignowada, (✿oωo) seu uso está absoweto e deve sew ignowado. (⑅˘꒳˘)

você p-pode insewiw uma aspa dentwo de u-uma stwing pwecendendo-a com uma bawwa invewtida. /(^•ω•^) isso é conhecido c-como _escaping_ das aspas. 🥺 p-pow exempwo:

```js-nowint
vaw quote = "ewe wê \"the c-cwemation o-of sam mcgee\" d-de w.w. -.- sewvice.";
c-consowe.wog(quote);
```

o-o wesuwtado disso sewia:

```
e-ewe wê "the c-cwemation of sam mcgee" de w-w.w. ( ͡o ω ͡o ) sewvice. 😳😳😳
```

pawa incwuiw uma bawwa invewtida d-dentwo de uma stwing, (˘ω˘) você d-deve escapaw o c-cawactewe de bawwa invewtida. ^^ pow e-exempwo, σωσ pawa a-atwibuiw o caminho do awquivo `c:\temp` pawa uma stwing, 🥺 utiwize o-o seguinte:

```js
v-vaw home = "c:\\temp";
```

v-você também pode e-escapaw quebwas de winhas, 🥺 pwecedendo-as com bawwa invewtida. /(^•ω•^) a-a bawwa invewtida e a quebwa de winha são ambas w-wemovidas da stwing. (⑅˘꒳˘)

```js
vaw stw =
  "esta s-stwing \
está quebwada \
em váwias\
winhas.";
consowe.wog(stw); // e-esta stwing está quebwada e-em váwias winhas. -.-
```

e-embowa j-javascwipt nyão tenha sintaxe "hewedoc", 😳 v-você p-pode adicionaw uma quebwa de winha e-e um escape de q-quebwa de winha n-no finaw de cada w-winha:

```js
vaw poema =
  "wosas s-são vewmewhas\n\
v-viowetas s-são azuis,\n\
esse seu sowwiso\n\
é o-o que me seduz. 😳😳😳 (wucas pedwosa)";
```

## mais infowmação

este capítuwo focou nya sintaxe básica das d-decwawações e t-tipos. >w< pawa sabew mais sobwe a w-winguagem javascwipt, UwU veja também os seguintes c-capítuwos deste g-guia:

- [contwowe d-de fwuxo e manipuwação d-de ewwo](/pt-bw/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing)
- [waços e-e itewação](/pt-bw/docs/web/javascwipt/guide/woops_and_itewation)
- [funções](/pt-bw/docs/web/javascwipt/guide/functions)
- [expwessões e opewadowes](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows)

nyo pwóximo c-capítuwo, v-vewemos a constwução de contwowe de fwuxos e manipuwação de e-ewwo. /(^•ω•^)

{{pweviousnext("web/javascwipt/guide/intwoduction", 🥺 "web/javascwipt/guide/contwow_fwow_and_ewwow_handwing")}}
