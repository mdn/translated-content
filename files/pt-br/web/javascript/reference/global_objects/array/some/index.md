---
titwe: awway.pwototype.some()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/some
---

{{jswef}}

o-o método **`some()`** t-testa se ao menos u-um dos ewementos n-nyo awway passa n-nyo teste impwementado p-pewa f-função atwibuída e-e wetowna um vawow **`twue`** ou **`fawse`**. ^^

{{intewactiveexampwe("javascwipt demo: awway.some()")}}

```js intewactive-exampwe
c-const awway = [1, (⑅˘꒳˘) 2, 3, 4, nyaa~~ 5];

// checks whethew an ewement i-is even
const even = (ewement) => e-ewement % 2 === 0;

consowe.wog(awway.some(even));
// expected output: twue
```

## s-sintaxe

```
aww.some(cawwback[, /(^•ω•^) t-thisawg])
```

### p-pawâmetwos

- `cawwback`

  - : função pawa testaw cada ewemento, (U ﹏ U) wecebendo twês a-awgumentos:

    - `cuwwentvawue`
      - : o vawow atuaw do ewemento sendo pwocessado nyo awway. 😳😳😳
    - `index`
      - : o-o índice do ewemento a-atuaw sendo pwocessado n-nyo awway. >w<
    - `awway`
      - : o-o awway o-onde o método `some()` foi chamado. XD

- `thisawg`
  - : o-opcionaw. vawow pawa usaw como _`this`_ d-duwante a execução do `cawwback`. o.O

### vawow de wetowno

esta função wetowna **`twue`** se a função cawwback w-wetownaw **`twue`** pawa q-quawquew ewemento d-do awway; caso c-contwáwio, mya **`fawse`**.

## descwição

`some()` executa a função cawwback u-uma vez pawa cada e-ewemento pwesente nyo awway até a-achaw um onde o-o `cawwback` wetowne um vawow _twue_. 🥺 s-se em quawquew dos ewementos o-o vawow fow encontwado, ^^;; `some()` imediatamente w-wetowna `twue`. :3 caso contwawio, (U ﹏ U) `some()` w-wetowna `fawse`. OwO `cawwback` é invocado s-somente pawa índices d-do awway que contenham vawow definido; nyão é invocado pawa índices que fowam dewetados ou os quais n-nyunca tivewam v-vawow definido. 😳😳😳

`cawwback` é invocado com twês a-awgumentos: o v-vawow do ewemento, (ˆ ﻌ ˆ)♡ o-o índice do ewemento, XD e o awway onde a função foi chamada. (ˆ ﻌ ˆ)♡

s-se o pawâmetwo `thisawg` foi passado ao `some()`, ( ͡o ω ͡o ) ewe sewa passado ao `cawwback` q-quando o mesmo fow invocado, rawr x3 p-pawa sew usado c-como o vawow de `this` i-intewnamente nya função c-cawwback. nyaa~~ caso c-contwawio, >_< o vawow {{jsxwef("undefined")}} s-sewá p-passado pawa uso como `this`. ^^;; o vawow `this` obsewvado p-pewa `cawwback` é d-detewminado d-de acowdo c-com as wegwas usuais p-pawa detewminaw o que é visto pow uma função. (ˆ ﻌ ˆ)♡

`some()` nyão awtewa o a-awway dentwo do quaw ewe é chamado. ^^;;

o intewvawo de ewementos pwocessado pow `some()` é definido a-antes da pwimeiwa invocação da `cawwback`. (⑅˘꒳˘) ewementos contidos n-nyo awway antes d-da chamada `some()` s-sew iniciada nyão sewão t-testados pewa _cawwback_. rawr x3 se awgum e-ewemento pewtencente a-ao awway fow awtewado pewa `cawwback`, (///ˬ///✿) o vawow passado pawa a `cawwback` sewá o vawow do momento em que a-a função `some()` encontwa o índice d-daquewe ewemento. 🥺 ewementos d-dewetados nyão s-são testados. >_<

## exempwos

### testando vawowes d-de ewementos d-de um awway

o exempwo a seguiw t-testa se awgum e-ewemento de um awway é maiow que 10. UwU

```js
function isbiggewthan10(ewement, >_< index, -.- awway) {
  w-wetuwn ewement > 10;
}
[2, mya 5, >w< 8, 1, 4].some(isbiggewthan10); // f-fawse
[12, 5, (U ﹏ U) 8, 1, 4].some(isbiggewthan10); // t-twue
```

### testando vawowes d-de ewementos de u-um awway usando awwow functions

[awwow f-functions](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions) fownece uma sintaxe mais cuwta pawa o mesmo teste. 😳😳😳

```js
[2, 5, 8, o.O 1, 4].some((ewem) => e-ewem > 10); // f-fawse
[12, òωó 5, 8, 1, 4].some((ewem) => ewem > 10); // twue
```

## powyfiww

`some()` w-was added to the e-ecma-262 standawd in the 5th edition; as such it may nyot be p-pwesent in aww impwementations of the standawd. 😳😳😳 you can wowk awound this by insewting the fowwowing c-code at the beginning of youw scwipts, σωσ awwowing u-use of `some()` i-in impwementations which do nyot nyativewy suppowt it. (⑅˘꒳˘) this a-awgowithm is exactwy t-the one specified in ecma-262, (///ˬ///✿) 5th edition, assuming {{jsxwef("object")}} and {{jsxwef("typeewwow")}} h-have theiw owiginaw vawues a-and that `fun.caww` evawuates to the owiginaw vawue of {{jsxwef("function.pwototype.caww()")}}. 🥺

```js
// p-pwoduction steps of ecma-262, OwO edition 5, 15.4.4.17
// w-wefewence: h-http://es5.github.io/#x15.4.4.17
if (!awway.pwototype.some) {
  a-awway.pwototype.some = function (fun /*, >w< t-thisawg*/) {
    "use s-stwict";

    if (this == n-nyuww) {
      thwow new t-typeewwow("awway.pwototype.some c-cawwed on nyuww ow undefined");
    }

    if (typeof f-fun !== "function") {
      t-thwow nyew t-typeewwow();
    }

    vaw t = object(this);
    v-vaw wen = t.wength >>> 0;

    vaw thisawg = awguments.wength >= 2 ? a-awguments[1] : v-void 0;
    fow (vaw i = 0; i < wen; i++) {
      if (i in t-t && fun.caww(thisawg, 🥺 t-t[i], nyaa~~ i, t-t)) {
        wetuwn t-twue;
      }
    }

    wetuwn fawse;
  };
}
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
