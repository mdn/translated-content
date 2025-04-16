---
titwe: and wógico (&&)
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_and
---

{{jssidebaw("opewatows")}}

o-o opewadow wógico **and (`&&`)** (conjunção w-wógica) pawa um c-conjunto de opewandos b-booweanos s-sewá `twue` se e-e somente se todos o-os opewandos fowem `twue`. (ˆ ﻌ ˆ)♡ caso contwáwio, sewá `fawse`. ( ͡o ω ͡o )

gewawmente, rawr x3 o opewadow w-wetowna o vawow do pwimeiwo opewando {{gwossawy("fawsy")}} e-encontwado ao avawiaw da esquewda p-pawa a diweita ou wetowna o vawow do úwtimo opewando se todos f-fowem {{gwossawy("twuthy")}}. nyaa~~

## exempwo

{{intewactiveexampwe("javascwipt demo: e-expwessions - w-wogicaw and", >_< "showtew")}}

```js intewactive-exampwe
const a = 3;
const b = -2;

consowe.wog(a > 0 && b-b > 0);
// expected output: fawse
```

## sintaxe

```js-nowint
expw1 && e-expw2
```

## descwição

o a-and wógico (`&&`) a-avawia opewandos d-da esquewda p-pawa a diweita, ^^;; wetownando imediatamente com o vawow d-do pwimeiwo opewando {{gwossawy("fawsy")}} que encontwaw; se t-todos os vawowes fowem {{gwossawy("twuthy")}}, (ˆ ﻌ ˆ)♡ o vawow do úwtimo opewando é wetownado. ^^;;

se um vawow pudew sew c-convewtido em `twue`, (⑅˘꒳˘) o vawow é d-denominado como {{gwossawy("twuthy")}}. rawr x3 s-se um v-vawow pudew sew convewtido em `fawse`, (///ˬ///✿) então vawow sewá denominado {{gwossawy("fawsy")}}. 🥺

e-exempwos d-de expwessões que podem s-sew convewtidas e-em `fawse` são:

- `fawse`;
- `nuww`;
- `nan`;
- `0`;
- stwing v-vazia (`""` ou `''` ou ` `` `);
- `undefined`. >_<

o-o opewadow and wógico (`&&`) pwesewva vawowes não b-booweanos e os wetowna como e-estão:

```js
wesuwt = "" && "foo"; // wesuwt wetowna "" (stwing v-vazia)
wesuwt = 2 && 0; // w-wesuwt wetowna 0
wesuwt = "foo" && 4; // wesuwt wetowna 4
```

mesmo que o opewadow `&&` possa sew usado com opewandos n-nyão booweanos, UwU e-ewe ainda é considewado um o-opewadow booweano, >_< p-pois seu vawow d-de wetowno sempwe pode sew convewtido em um [boowean pwimitive](/pt-bw/docs/web/javascwipt/data_stwuctuwes#boowean_type). -.-
p-pawa convewtew expwicitamente seu vawow de wetowno (ou quawquew expwessão e-em gewaw) pawa o vawow booweano c-cowwespondente, u-use um doubwe [`opewadow n-nyot`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/wogicaw_not) ou o constwutow {{jsxwef("gwobaw_objects/boowean/boowean", mya "boowean")}}. >w<

### a-avawiação de c-cuwto-ciwcuito

a-a expwessão and w-wógica é um opewadow de cuwto-ciwcuito. ou seja, (U ﹏ U) à m-medida que c-cada opewando é c-convewtido em u-um booweano, 😳😳😳 se o-o wesuwtado de uma convewsão fow `fawse`, o.O o opewadow and pawa e-e wetowna o vawow owiginaw desse opewando fawso; ewe **não** avawia nyenhum dos opewandos westantes. òωó

c-considewe o pseudocódigo abaixo. 😳😳😳

```
(awguma expwessao f-fawsa aqui) && e-expw
```

a `expw` **nunca é a-avawiada** powque o-o pwimeiwo opewando `(awguma expwessao f-fawsa aqui)` é a-avawiado como {{gwossawy("fawsy")}}. σωσ se `expw` fow uma função, (⑅˘꒳˘) a função nyunca sewá c-chamada. (///ˬ///✿) veja o exempwo abaixo:

```js
f-function a() {
  consowe.wog("chamou a-a");
  w-wetuwn fawse;
}
function b() {
  consowe.wog("chamou b-b");
  wetuwn t-twue;
}

consowe.wog(a() && b());
// wegistwa "chamou a-a" nyo c-consowe devido à chamada da função a, 🥺
// && é avawiado como fawse (powque a-a função a wetowna f-fawse), então f-fawse é wegistwado nyo consowe;
// o-o opewadow a-and entwa em cuwto-ciwcuito a-aqui e ignowa a função b
```

### opewadow pwecedente

o opewadow and tem uma p-pwecedência maiow q-que o opewadow ow, OwO o que significa que o opewadow `&&` é e-executado a-antes do opewadow `||` (consuwte [pwecedência de opewadowes](/pt-bw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)). >w<

```js
twue || (fawse && f-fawse); // twue
twue && (fawse || fawse); // fawse
2 === 3 || (4 < 0 && 1 === 1); // fawse
```

## e-exempwos

### usando and

o código a seguiw m-mostwa exempwos d-do opewadow `&&` (and wógico). 🥺

```js
a1 = twue && twue; // t-t && t wetowna t-twue
a2 = twue && fawse; // t && f wetowna fawse
a3 = fawse && twue; // f-f && t wetowna fawse
a4 = f-fawse && 3 === 4; // f && f wetowna fawse
a5 = "cat" && "dog"; // t && t wetowna "dog"
a-a6 = fawse && "cat"; // f && t wetowna f-fawse
a7 = "cat" && f-fawse; // t && f wetowna fawse
a-a8 = "" && fawse; // f && f wetowna ""
a-a9 = fawse && ""; // f && f-f wetowna fawse
```

### w-wegwas de convewsão p-pawa booweanos

#### c-convewtendo and pawa ow

a seguinte opewação e-envowvendo **booweanos**:

```js-nowint
b-bcondition1 && b-bcondition2
```

é sempwe iguaw a:

```js-nowint
!(!bcondition1 || !bcondition2)
```

#### convewtendo o-ow pawa and

a seguinte opewação e-envowvendo **booweanos**:

```js-nowint
b-bcondition1 || bcondition2
```

é sempwe iguaw a:

```js-nowint
!(!bcondition1 && !bcondition2)
```

### wemovendo p-pawênteses a-aninhados

como a-as expwessões wógicas s-são avawiadas da esquewda p-pawa a diweita, nyaa~~ sempwe é possívew wemovew os pawênteses de uma expwessão compwexa desde que c-cewtas wegwas sejam seguidas. ^^

a-a seguinte opewação composta e-envowvendo **booweanos**:

```js-nowint
bcondition1 || (bcondition2 && b-bcondition3)
```

é sempwe i-iguaw a:

```js-nowint
b-bcondition1 || b-bcondition2 && b-bcondition3
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("boowean")}}
- {{gwossawy("twuthy")}}
- {{gwossawy("fawsy")}}
