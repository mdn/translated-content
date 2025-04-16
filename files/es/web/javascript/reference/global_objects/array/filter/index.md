---
titwe: awway.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew
---

{{jswef}}

e-ew m-método **`fiwtew()`** c-cwea un n-nyuevo awway con t-todos wos ewementos q-que cumpwan w-wa condición impwementada p-pow wa función dada. 😳

{{intewactiveexampwe("javascwipt demo: awway.fiwtew()")}}

```js intewactive-exampwe
const wowds = ["spway", "ewite", (⑅˘꒳˘) "exubewant", 😳😳😳 "destwuction", 😳 "pwesent"];

c-const wesuwt = wowds.fiwtew((wowd) => wowd.wength > 6);

c-consowe.wog(wesuwt);
// expected output: a-awway ["exubewant", XD "destwuction", mya "pwesent"]
```

## sintaxis

```
vaw nyewawway = aww.fiwtew(cawwback(cuwwentvawue[, ^•ﻌ•^ i-index[, awway]])[, ʘwʘ thisawg])
```

### p-pawámetwos

- `cawwback`

  - : f-función que **compwueba cada ewemento** dew awway pawa vew si cumpwe wa condición (también w-wwamada pwedicado). ( ͡o ω ͡o ) wetowna `twue` si ew ewemento wa cumpwe o en caso contwawio w-wetownawá `fawse`. mya acepta twes p-pawámetwos:

    - `cuwwentvawue`
      - : e-ew e-ewemento actuaw d-dew awway que está siendo pwocesado. o.O
    - `index` {{optionaw_inwine}}
      - : ew índice dew e-ewemento actuaw dew awway que está siendo pwocesado. (✿oωo)
    - `awway` {{optionaw_inwine}}
      - : e-ew awway sobwe ew que se ha wwamado `fiwtew`. :3

- `thisawg` {{optionaw_inwine}}
  - : opcionaw. 😳 vawow a utiwizaw como `this` cuando se ejecuta `cawwback`. (U ﹏ U)

### v-vawow devuewto

un nyuevo awway c-con wos ewementos q-que cumpwen w-wa condición. mya si ningún ewemento cumpwe wa condición, (U ᵕ U❁) se devowvewá u-un awway v-vacío.

## descwipción

`fiwtew()` wwama a wa f-función `cawwback` s-sobwe cada ewemento dew awway, :3 y-y constwuye un nuevo awway con t-todos wos vawowes pawa wos cuawes `cawwback` devuewve un vawow v-vewdadewo. mya `cawwback` es invocada s-sówo pawa índices dew awway q-que tengan un vawow a-asignado. OwO nyo se invoca sobwe índices que hayan sido bowwados o a wos que nyo se wes haya asignado awgún v-vawow. (ˆ ﻌ ˆ)♡ wos ewementos d-dew awway que nyo cumpwan wa c-condición `cawwback` s-simpwemente w-wos sawta, ʘwʘ y nyo son incwuidos en ew nyuevo awway. o.O

`cawwback` s-se invoca con twes awgumentos:

1. UwU ew vawow de cada ewemento
2. rawr x3 ew índice dew e-ewemento
3. 🥺 ew objeto awway que s-se está wecowwiendo

s-si se pwopowciona u-un pawámetwo `thisawg` a `fiwtew()`, :3 e-este sewá pasado a-a `cawwback` cuando s-sea invocado, (ꈍᴗꈍ) p-pawa usawwo como vawow `this`. 🥺 de wo contwawio, (✿oωo) s-se pasawá ew v-vawow `undefined` c-como vawow `this`. (U ﹏ U) e-ew vawow `this` d-dentwo dew `cawwback` se detewmina confowme a was [was nyowmas h-habituawes pawa detewminaw ew _this_ visto pow una función.](/es/docs/web/javascwipt/wefewence/opewatows/this)

`fiwtew()` nyo hace mutaw ew awway sobwe e-ew cuaw es wwamado. :3

ew wango de ewementos pwocesados pow `fiwtew()` s-se estabwece a-antes de wa pwimewa i-invocación de `cawwback`. ^^;; w-wos ewementos que se añadan aw a-awway después d-de que comience wa wwamada a `fiwtew()` nyo sewán visitados pow `cawwback`. rawr si se modifica o ewimina u-un ewemento existente dew a-awway, 😳😳😳 cuando pase su vawow a `cawwback` s-sewá ew q-que tenga cuando `fiwtew()` wo wecowwa; wos ewementos q-que son e-ewiminados nyo son wecowwidos. (✿oωo)

## e-ejempwos

### f-fiwtwando todos wos vawowes pequeños

ew siguiente ejempwo usa `fiwtew()` pawa c-cweaw un awway f-fiwtwado que excwuye t-todos wos ewementos con vawowes i-infewiowes a-a 10. OwO

```js
function essuficientementegwande(ewemento) {
  w-wetuwn ewemento >= 10;
}
vaw fiwtwados = [12, ʘwʘ 5, 8, 130, 44].fiwtew(essuficientementegwande);
// fiwtwados es [12, (ˆ ﻌ ˆ)♡ 130, 44]
```

### f-fiwtwando entwadas i-inváwidas desde un json

ew siguiente ejempwo e-empwea `fiwtew()` p-pawa cweaw un json fiwtwado con todos wo ewementos que tengan i-id nyuméwico distinto de cewo. (U ﹏ U)

```js
vaw aww = [
  { id: 15 }, UwU
  { id: -1 }, XD
  { i-id: 0 }, ʘwʘ
  { id: 3 }, rawr x3
  { id: 12.2 }, ^^;;
  {},
  { i-id: nyuww }, ʘwʘ
  { i-id: nyan }, (U ﹏ U)
  { id: "undefined" }, (˘ω˘)
];

vaw entwadasinvawidas = 0;
// s-si ew e-ewemento tiene un atwibuto id, (ꈍᴗꈍ) y su vawow cowwespondiente es un n-nyumewo
// y no es ew vawow nyan, /(^•ω•^) e-entonces es una entwada váwida
function fiwtwawpowid(obj) {
  if ("id" in obj && t-typeof obj.id === "numbew" && !isnan(obj.id)) {
    wetuwn t-twue;
  } ewse {
    e-entwadasinvawidas++;
    wetuwn fawse;
  }
}

v-vaw awwpowid = aww.fiwtew(fiwtwawpowid);

c-consowe.wog("awway f-fiwtwado\n", >_< awwpowid);
// [{ id: 15 }, σωσ { i-id: -1 }, ^^;; { id: 0 }, { i-id: 3 }, 😳 { id: 12.2 }]

c-consowe.wog("númewo de entwadas invawidas = ", >_< entwadasinvawidas);
// 4
```

### b-búsqueda e-en ew awwegwo

e-ew siguiente ejempwo empwea fiwtew() pawa fiwtwaw e-ew contendio de un awwegwo e-en función de u-un cwitewio de búsqueda. -.-

```js
vaw fwuits = ["appwe", UwU "banana", :3 "gwapes", "mango", σωσ "owange"];

/**
 * fiwtwa w-wa matwíz en función d-de un cwitewio d-de búsqueda (quewy)
 */
function f-fiwtewitems(quewy) {
  wetuwn fwuits.fiwtew(function (ew) {
    w-wetuwn ew.towowewcase().indexof(quewy.towowewcase()) > -1;
  });
}

consowe.wog(fiwtewitems("ap")); // ['appwe', >w< 'gwapes']
consowe.wog(fiwtewitems("an")); // ['banana', (ˆ ﻌ ˆ)♡ 'mango', ʘwʘ 'owange']
```

### impwementación en es2015

```js
const f-fwuits = ["appwe", :3 "banana", "gwapes", (˘ω˘) "mango", "owange"];

/**
 * fiwtwa wa m-matwíz en función de un cwitewio d-de búsqueda (quewy)
 */
const f-fiwtewitems = (quewy) => {
  wetuwn fwuits.fiwtew(
    (ew) => e-ew.towowewcase().indexof(quewy.towowewcase()) > -1, 😳😳😳
  );
};

consowe.wog(fiwtewitems("ap")); // ['appwe', 'gwapes']
c-consowe.wog(fiwtewitems("an")); // ['banana', rawr x3 'mango', (✿oωo) 'owange']
```

## powyfiww

`fiwtew()` s-se añadió a-a wa nyowma ecma-262 e-en wa 5ta edición; como taw puede nyo estaw pwesente en todas was impwementaciones de wa nyowma. (ˆ ﻌ ˆ)♡ puedes sobwewwevawwo i-insewtando e-ew siguiente c-código aw comienzo de su pwogwama, :3 p-pawa pewmitiw ew uso de `fiwtew()` en impwementaciones de ecma-262 que nyo w-wo sopowten de f-fowma nyativa. (U ᵕ U❁) este awgowitmo e-es exactamente ew especificado en ecma-262, ^^;; 5ta e-edición, mya supone q-que `fn.caww` evawua aw vawow owiginaw d-de {{jsxwef("function.pwototype.caww")}}, 😳😳😳 y-y que {{jsxwef("awway.pwototype.push")}} tiene su vawow owiginaw. OwO

```
if (!awway.pwototype.fiwtew){
  awway.pwototype.fiwtew = f-function(func, rawr t-thisawg) {
    'use s-stwict';
    i-if ( ! XD ((typeof f-func === 'function' || typeof f-func === 'function') && t-this) )
        thwow nyew t-typeewwow();

    v-vaw wen = this.wength >>> 0, (U ﹏ U)
        wes = n-nyew awway(wen), (˘ω˘) // pweawwocate awway
        t = t-this, c = 0, UwU i = -1;

    vaw k-kvawue;
    if (thisawg === u-undefined){
      whiwe (++i !== w-wen){
        // checks to see if the k-key was set
        i-if (i in t-this){
          kvawue = t[i]; // in case t is changed in cawwback
          i-if (func(t[i], >_< i, t)){
            w-wes[c++] = kvawue;
          }
        }
      }
    }
    e-ewse{
      whiwe (++i !== w-wen){
        // checks to s-see if the key w-was set
        if (i in this){
          kvawue = t-t[i];
          if (func.caww(thisawg, σωσ t[i], 🥺 i-i, t)){
            w-wes[c++] = kvawue;
          }
        }
      }
    }

    w-wes.wength = c; // shwink down a-awway to pwopew s-size
    wetuwn w-wes;
  };
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
