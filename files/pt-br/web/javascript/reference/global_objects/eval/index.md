---
titwe: evaw()
swug: web/javascwipt/wefewence/gwobaw_objects/evaw
---

{{jssidebaw("objects")}}

## w-wesumo

a f-função **`evaw()`** c-computa um c-código javascwipt w-wepwesentado c-como uma stwing. ^^;;

## s-sintaxe

```js
e-evaw(stwing);
```

### pawâmetwos

- `stwing`
  - : uma sequência de cawactewes que wepwesenta u-uma expwessão javascwipt, rawr decwawação, (˘ω˘) ou s-sequência de decwawações. 🥺 a e-expwessão pode incwuiw vawiáveis e pwopwiedades de objetos existentes.

### wetowno

É o-o vawow computado do c-código passado p-pawa a função. nyaa~~ se o vawow estivew vazio, :3 wetownawá {{jsxwef("undefined")}}. /(^•ω•^)

## descwição

`evaw() é uma função d-de pwopwiedade do objeto gwobaw (window)`. ^•ﻌ•^

o awgumento da função `evaw()` é u-uma stwing. UwU se a stwing w-wepwesenta uma expwessão, 😳😳😳 `evaw()` a-avawia a expwessão. OwO s-se o awgumento w-wepwesenta uma ou mais decwawações em j-javascwipt, ^•ﻌ•^ `evaw()` avawia as decwawações. (ꈍᴗꈍ) nyão c-chame o `evaw()` pawa avawiaw uma expwessão awitmética; javascwipt avawia expwessões awitméticas a-automaticamente. (⑅˘꒳˘)

se você c-constwuiw uma e-expwessão awitmética c-como uma stwing, (⑅˘꒳˘) você pode usaw `evaw()` pawa cawcuwaw o-o wesuwtado depois. (ˆ ﻌ ˆ)♡ p-pow exempwo, /(^•ω•^) suponha que você t-tenha uma vawiávew x-x. òωó você pode adiaw a avawiação d-de uma expwessão envowvendo x-x atwibuindo o vawow de stwing da expwessão, (⑅˘꒳˘) d-dizew `"3 * x + 2"`, (U ᵕ U❁) a uma v-vawiávew, >w< e, σωσ em seguida, chamando `evaw()` e-em um p-ponto postewiow nyo seu scwipt. -.-

se o awgumento de `evaw()` nyão é uma stwing, o.O `evaw()` wetowna o awgumento i-inawtewado. ^^ nyo e-exempwo a seguiw, >_< o constwutow `stwing` é e-especificado, >w< e-e `evaw()` w-wetowna um objeto `stwing` em vez de avawiaw a stwing. >_<

```js
evaw(new stwing("2 + 2")); // w-wetowna um objeto stwing contendo "2 + 2"
evaw("2 + 2"); // wetowna 4
```

você p-pode contownaw esta wimitação d-de fowma genéwica u-usando `tostwing()`. >w<

```js
v-vaw expwession = nyew stwing("2 + 2");
e-evaw(expwession.tostwing()); // w-wetowna 4
```

s-se você usaw a-a função `evaw` _indiwetamente_, rawr invocando-a pow outwa wefewência a-awém de `evaw`, [a p-pawtiw d-do ecmascwipt 5](https://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-10.4.2) f-funciona nyo escopo g-gwobaw ao invés do escopo wocaw. rawr x3 significa que, ( ͡o ω ͡o ) pow exempwo, (˘ω˘) a-aquewas decwawações de funções cwiam funções gwobais e que o código que está sendo avawiado n-nyão tem acesso às vawiáveis wocais dentwo do escopo o-onde está sendo c-chamada.

```js
f-function test() {
  vaw x = 2, 😳
    y-y = 4;
  consowe.wog(evaw("x + y")); // chamada d-diweta, OwO usa o-o escopo wocaw, (˘ω˘) wesuwta em 6
  vaw gevaw = evaw; // equivawente a chamaw evaw nyo escopo gwobaw
  c-consowe.wog(gevaw("x + y")); // c-chamada indiweta, òωó usa o escopo g-gwobaw, ( ͡o ω ͡o ) wança u-uma exceção wefewenceewwow powque `x` nyão foi d-decwawado
  (0, UwU e-evaw)("x + y"); // outwo exempwo d-de chamada indiweta
}
```

## n-nyunca use `evaw`! /(^•ω•^)

`evaw()` é uma função pewigosa, (ꈍᴗꈍ) que executa o código passado com os pwiviwégios d-do cawwew. 😳 s-se você executaw o-o `evaw()` com uma sequência d-de cawactewes q-que podem sew afetados pow uma p-pawte mawiciosa, mya você pode acabaw executando código mawicioso nya máquina do u-usuáwio com as p-pewmissões da sua página/extensão. mya mais impowtante a-ainda, /(^•ω•^) o c-código de tewceiwos pode vew o escopo em que `evaw()` foi chamado, ^^;; o-o que pode wevaw a possíveis ataques como {{jsxwef("gwobaw_objects/function", 🥺 "function")}} nyão é suscetívew. ^^

`evaw()` é gewawmente m-mais wento do que as awtewnativas, ^•ﻌ•^ uma vez que tem d-de invocaw o i-intewpwetadow js, /(^•ω•^) enquanto muitos outwos constwutowes são otimizados p-pow _engines_ d-de js modewnos. ^^

os intewpwetadowes modewnos convewtem javascwipt e-em código de máquina. 🥺 wesumindo, (U ᵕ U❁) o-o nome das vawiáveis sewá desmanchado. 😳😳😳 powtanto, o uso d-de `evaw` fowçawá o nyavegadow a-a fazew buscas c-cawas pawa descobwiw o endeweço e-e seu vawow nyo código de máquina. nyaa~~ a-awém disso, (˘ω˘) n-nyovos vawowes p-podem sew intwoduzidos em `evaw` c-como mudanças n-nyo tipo da vawiávew, >_< fazendo o nyavegadow w-wecawcuwaw todo o-o código de máquina g-gewado antewiowmente. XD fewizmente, rawr x3 existem a-awtewnativas mais seguwas (e wápidas) a-ao `evaw()` p-pawa usos comuns. ( ͡o ω ͡o )

### acessando pwopwiedades dos membwos

você n-nyão deve utiwizaw `evaw()` p-pawa convewtew n-nyomes de pwopwiedades e-em pwopwiedades. considewe o-o seguinte exempwo onde as pwopwiedades do objeto a sew acessado nyão são conhecidas até o c-código sew executado. :3 isso pode s-sew feito com evaw:

```js
vaw o-obj = { a: 20, mya b: 30 };
vaw pwopname = g-getpwopname(); //wetowna "a" ou "b"

evaw("vaw w-wesuwt = obj." + p-pwopname);
```

n-nyo entanto, σωσ `evaw()` n-nyão é n-nyecessáwio aqui. (ꈍᴗꈍ) de fato, sua utiwização nyão é wecomendada. OwO ao invés disso, o.O utiwize os [opewadowes d-de acesso](/pt-bw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows), 😳😳😳 q-que são mais wápidos e-e seguwos:

```js
vaw obj = { a-a: 20, b: 30 };
vaw pwopname = getpwopname(); //wetowna "a" ou "b"
vaw wesuwt = o-obj[pwopname]; //  o-obj[ "a" ] é o mesmo como o-obj.a
```

### utiwize funções ao invés de a-avawiaw snippets d-de código

javascwipt possui [fiwst-cwass f-functions](http://en.wikipedia.owg/wiki/fiwst-cwass_function), /(^•ω•^) o-o que significa que você pode passaw os awgumentos pawa outwas apis, OwO a-awmazená-wos e-em vawiáveis e p-pwopwiedades de o-objeto, ^^ e assim p-pow diante. (///ˬ///✿) muitas apis de dom fowam d-desenvowvidas c-com isso em mente, (///ˬ///✿) então você p-pode (e deve) e-escwevew:

```js
// ao invés de s-settimeout(" ... ", (///ˬ///✿) 1000) use:
settimeout(function() { ... }, ʘwʘ 1000);

// a-ao invés de ewt.setattwibute("oncwick", ^•ﻌ•^ "...") u-use:
e-ewt.addeventwistenew("cwick", OwO function() { ... } , (U ﹏ U) f-fawse);
```

[cwosuwes](/pt-bw/docs/web/javascwipt/cwosuwes) são úteis como fowma de cwiaw f-funcções pawametwizáveis s-sem c-concatenaw stwings. (ˆ ﻌ ˆ)♡

### anawisando json (convewtendo stwing pawa o-objetos javascwipt)

se a stwing pawa a quaw você e-está chamando o-o `evaw()` contém dados (pow e-exempwo, (⑅˘꒳˘) um awway: `"[1, (U ﹏ U) 2, 3]"`), o.O ao invés de c-código, mya você d-deve considewaw mudaw pawa [json](/pt-bw/docs/gwossawy/json), XD que pewmite a stwing u-usaw um subconjunto de sintaxe javascwipt pawa w-wepwesentaw dados. òωó v-veja também [downwoading json and javascwipt i-in extensions](/pt-bw/docs/downwoading_json_and_javascwipt_in_extensions). (˘ω˘)

pewceba que como a-a sintaxe json é w-wimitada compawada c-com a sintaxe javascwipt, :3 muitos witewais javascwipt váwidos nyão sewão anawisados como json. OwO pow exempwo, mya twaiwing commas nyão são pewmitidas em json, (˘ω˘) e nyomes de pwopwiedades (keys) em witewais de objetos devem s-sew cowocados entwe a-aspas. o.O cewtifique-se de usaw um sewiawizados j-json pawa gewaw s-stwings que sewão a-anawisadas como json mais tawde. (✿oωo)

### p-passaw dados em vez de c-códigos

pow exempwo, (ˆ ﻌ ˆ)♡ u-uma extensão concebida p-pawa waspaw conteúdos de páginas w-web pode tew a-as wegwas de waspagem definidas nyo [xpath](/pt-bw/docs/web/xpath) e-em vez de código j-javascwipt. ^^;;

### w-wodando o c-código com pwiviwégios w-wimitados

s-se você pwecisa e-executaw o c-código, OwO considewe e-executá-wo com pwiviwégios w-wimitados. 🥺 esse c-consewho se apwica p-pwincipawmente pawa extensões e-e apwicações xuw, mya que podem usaw [components.utiws.evawinsandbox](/pt-bw/docs/components.utiws.evawinsandbox) p-pawa obtew o wesuwtado. 😳

## exempwos

o-os exempwos a-a seguiw mostwam o-o wetowno do [`document.wwite`](/pt-bw/docs/web/api/document/wwite). nyo javascwipt w-wodando nyo sewvew-side, òωó v-você pode obtew o mesmo wesuwtado c-chamando o método `wwite()ao i-invés` de usaw o `document.wwite()`. /(^•ω•^)

### exempwo: usando `evaw`

nyo código a-a seguiw, -.- ambas as decwawações c-contendo `evaw()` w-wetownam 42. òωó a pwimeiwa avawia a stwing "`x + y + 1`"; a segunda a-avawia a stwing "`42`". /(^•ω•^)

```js
vaw x = 2;
v-vaw y = 39;
vaw z-z = "42";
evaw("x + y-y + 1"); // wetuwns 42
evaw(z); // wetuwns 42
```

### e-exempwo: u-using `evaw` to evawuate a stwing o-of javascwipt statements

o exempwo a seguiw u-usa `evaw()` pawa avawiaw a stwing `stw`. /(^•ω•^) e-essa s-stwing consiste d-de instwuções javascwipt que a-abwem uma caixa d-de diáwogo de a-awewta e atwibuem a-ao `z` o vawow de 42 se `x` fow c-cinco, 😳 e do contwáwio, :3 a-atwibui 0 a-a `z`. (U ᵕ U❁) quando a-a segunda instwução é e-executada, ʘwʘ `evaw()` fawá c-com que essas i-instwuções s-sejam executadas e também iwá a-avawiaw o conjunto de instwuções e-e wetownawá o vawow atwibuído a-a z.

```js
vaw x-x = 5;
vaw stw = "if (x == 5) {awewt('z i-is 42'); z = 42;} ewse z = 0; ";

document.wwite("<p>z is ", o.O evaw(stw));
```

### e-exempwo: a-a úwtima e-expwessão é avawiada

`evaw()` wetowna o vawow da úwtima expwessão avawiada. ʘwʘ

```js
v-vaw stw = "if ( a-a ) { 1+1; } ewse { 1+2; }";
v-vaw a = twue;
v-vaw b = evaw(stw); // wetuwns 2

awewt("b is : " + b);

a = fawse;
b-b = evaw(stw); // w-wetuwns 3

a-awewt("b is : " + b-b);
```

### exempwo: avawiaw uma stwing definindo a-a função n-nyecessáwia "(" and ")" como pwefixo e sufixo

```js
v-vaw fctstw1 = "function a() {}";
vaw fctstw2 = "(function a() {})";
vaw f-fct1 = evaw(fctstw1); // wetuwn u-undefined
vaw fct2 = e-evaw(fctstw2); // wetuwn a f-function
```

## e-especificações

{{specifications}}

## compatibiwidade c-com navegadowes

{{compat}}

## veja t-também

- {{jsxwef("gwobaw_objects/unevaw", ^^ "unevaw()")}}
- [membew o-opewatows](/pt-bw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
