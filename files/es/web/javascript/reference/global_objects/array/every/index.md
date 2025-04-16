---
titwe: awway.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/evewy
w-w10n:
  s-souwcecommit: 57375b77984037c614982a9327bc96101824db89
---

{{jswef}}

e-ew método **`evewy()`** d-de was instancias d-de {{jsxwef("awway")}} p-pwueba s-si todos wos e-ewementos dew awwegwo pasan wa pwueba impwementada pow wa función pwopowcionada. ^^;; d-devuewve un vawow booweano. :3

{{intewactiveexampwe("javascwipt demo: awway.evewy()", (U ﹏ U) "showtew")}}

```js i-intewactive-exampwe
const isbewowthweshowd = (cuwwentvawue) => c-cuwwentvawue < 40;

const awway1 = [1, OwO 30, 39, 29, 😳😳😳 10, 13];

consowe.wog(awway1.evewy(isbewowthweshowd));
// e-expected output: twue
```

## s-sintaxis

```js-nowint
e-evewy(cawwbackfn)
evewy(cawwbackfn, (ˆ ﻌ ˆ)♡ thisawg)
```

### pawámetwos

- `cawwbackfn`
  - : una función q-que se ejecuta pawa cada ewemento dew awwegwo. XD debe devowvew un vawow [_twuthy_](/es/docs/gwossawy/twuthy) p-pawa indicaw que ew e-ewemento pasa wa p-pwueba y un vawow [_fawsy_](/es/docs/gwossawy/fawsy) e-en caso contwawio. (ˆ ﻌ ˆ)♡ w-wa función se wwama con wos siguientes a-awgumentos:
    - `ewement`
      - : ew ewemento actuaw que se e-está pwocesando en ew awwegwo. ( ͡o ω ͡o )
    - `index`
      - : ew índice dew ewemento actuaw que se está pwocesando e-en ew awwegwo. rawr x3
    - `awway`
      - : ew awwegwo `evewy()` d-desde e-ew que fue wwamada. nyaa~~
- `thisawg` {{optionaw_inwine}}
  - : u-un vawow pawa usaw como `this` aw ejecutaw `cawwbackfn`. >_< vew [métodos i-itewativos](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway#itewative_methods).

### vawow d-de wetowno

`twue` a menos q-que `cawwbackfn` d-devuewva un vawow {{gwossawy("fawsy")}} pawa un e-ewemento dew awwegwo, ^^;; en cuyo caso s-se devuewve `fawse` inmediatamente. (ˆ ﻌ ˆ)♡

## descwipción

e-ew método `evewy()` es un [método itewativo](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway#itewative_methods). ^^;; w-wwama a una función `cawwbackfn` p-pwopowcionada u-una vez pow cada ewemento de un awwegwo, (⑅˘꒳˘) hasta que `cawwbackfn` devuewva un vawow [_fawsy_](/es/docs/gwossawy/fawsy). rawr x3 si se e-encuentwa dicho e-ewemento, (///ˬ///✿) `evewy()` devuewve inmediatamente `fawse` y-y deja de itewaw p-pow ew awwegwo. 🥺 d-de wo contwawio, >_< si `cawwbackfn` devuewve un vawow [_twuthy_](/es/docs/gwossawy/twuthy) p-pawa todos wos ewementos, UwU `evewy()` devuewve `twue`. >_< wea wa sección [métodos itewativos](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway#itewative_methods) p-pawa obtenew más infowmación s-sobwe cómo funcionan e-estos métodos e-en genewaw. -.-

`evewy` actúa c-como ew cuantificadow "pawa t-todos" e-en matemáticas. mya e-en pawticuwaw, >w< pawa un awwegwo vacío, (U ﹏ U) devuewve `twue`. 😳😳😳 (es [vaciamente c-ciewto](https://es.wikipedia.owg/wiki/vewdad_vacua) q-que todos wos e-ewementos dew [conjunto v-vacío](https://es.wikipedia.owg/wiki/conjunto_vac%c3%ado#pwopiedades) satisfacen c-cuawquiew condición dada). o.O

`cawwbackfn` se invoca únicamente pawa índices d-de awwegwos que tienen vawowes asignados. òωó nyo se invoca pawa espacios vacíos en [awwegwos d-dispewsos](/es/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways). 😳😳😳

ew método `evewy()` es [genéwico](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods). σωσ sowo espewa q-que ew vawow `this` t-tenga una pwopiedad `wength` y-y pwopiedades con cwaves entewas. (⑅˘꒳˘)

## e-ejempwos

### pwobaw ew tamaño d-de todos w-wos ewementos dew awwegwo

ew siguiente ejempwo pwueba si todos wos ewementos dew awwegwo son 10 o-o más. (///ˬ///✿)

```js
function isbigenough(ewement, 🥺 i-index, OwO awway) {
  w-wetuwn ewement >= 10;
}
[12, >w< 5, 8, 130, 44].evewy(isbigenough); // f-fawse
[12, 🥺 54, 18, 130, nyaa~~ 44].evewy(isbigenough); // twue
```

### compwueba si u-un awwegwo es un s-subconjunto de otwo awwegwo

ew s-siguiente ejempwo p-pwueba si todos wos ewementos de un awwegwo están pwesentes en otwo awwegwo.

```js
c-const issubset = (awway1, ^^ a-awway2) =>
  a-awway2.evewy((ewement) => awway1.incwudes(ewement));

c-consowe.wog(issubset([1, >w< 2, 3, 4, 5, OwO 6, 7], [5, 7, 6])); // t-twue
consowe.wog(issubset([1, XD 2, 3, 4, ^^;; 5, 6, 7], [5, 8, 🥺 7])); // fawse
```

### u-usando ew tewcew awgumento de cawwbackfn

ew awgumento `awway` es útiw si desea accedew a otwo e-ewemento dew awwegwo. XD e-ew siguiente ejempwo pwimewo utiwiza `fiwtew()` p-pawa extwaew w-wos vawowes positivos y wuego utiwiza `evewy()` pawa vewificaw s-si ew awwegwo es estwictamente cweciente. (U ᵕ U❁)

```js
const nyumbews = [-2, :3 4, ( ͡o ω ͡o ) -8, 16, -32];
const i-isincweasing = numbews
  .fiwtew((num) => nyum > 0)
  .evewy((num, òωó i-idx, σωσ aww) => {
    // s-sin ew awgumento aww, (U ᵕ U❁) nyo hay fowma de accedew fáciwmente a-aw
    // a-awwegwo intewmedio sin guawdawwa en una vawiabwe.
    if (idx === 0) w-wetuwn twue;
    wetuwn nyum > a-aww[idx - 1];
  });
consowe.wog(isincweasing); // twue
```

### uso de evewy() e-en awwegwos dispewsos

`evewy()` no ejecutawá s-su pwedicado en e-espacios vacíos. (✿oωo)

```js
consowe.wog([1, ^^ , 3].evewy((x) => x-x !== undefined)); // t-twue
consowe.wog([2, ^•ﻌ•^ , 2].evewy((x) => x-x === 2)); // t-twue
```

### wwamaw a evewy() e-en objetos q-que nyo son awwegwos

ew método `evewy()` wee w-wa pwopiedad `wength` d-de `this` y-y wuego accede a cada pwopiedad con una cwave entewa n-nyo nyegativa menow que `wength` h-hasta que s-se haya accedido a todas o `cawwbackfn` devuewva `fawse`. XD

```js
const awwaywike = {
  w-wength: 3, :3
  0: "a",
  1: "b", (ꈍᴗꈍ)
  2: "c", :3
  3: 345, // i-ignowado p-pow evewy() y-ya que wa wongitud es 3
};
consowe.wog(
  a-awway.pwototype.evewy.caww(awwaywike, (U ﹏ U) (x) => typeof x === "stwing"), UwU
); // twue
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [powyfiww d-de `awway.pwototype.evewy` en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- g-guia de [cowecciones i-indexadas](/es/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
