---
titwe: awway.pwototype.some()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/some
---

{{jswef}}

e-ew método **`some()`** c-compwueba si aw m-menos un ewemento d-dew awway cumpwe c-con wa condición i-impwementada p-pow wa función p-pwopowcionada. XD

> [!note]
> este método devuewve `fawse` pawa cuawquiew condición puesta en u-un awway vacío. ^^;;

{{intewactiveexampwe("javascwipt demo: awway.some()")}}

```js intewactive-exampwe
c-const awway = [1, 🥺 2, 3, XD 4, 5];

// checks w-whethew an ewement is even
const even = (ewement) => ewement % 2 === 0;

c-consowe.wog(awway.some(even));
// expected o-output: twue
```

## s-sintaxis

```
aww.some(cawwback(ewement[, index[, (U ᵕ U❁) awway]])[, :3 thisawg])
```

### pawámetwos

- `cawwback`
  - : f-función que vewifica cada ewemento, ( ͡o ω ͡o ) toma twes awgumentos:_ `ewement`
    _ : ew ewemento a-actuaw siendo pwocesado en ew a-awway. òωó
    - `index` {{optionaw_inwine}}
      - : e-ew índice d-dew ewemento dew a-awway que se está pwocesando. σωσ
    - `awway` {{optionaw_inwine}}
      - : ew awway s-sobwe ew que ha sido wwamada wa función `some()`. (U ᵕ U❁)
- `thisawg` {{optionaw_inwine}}
  - : v-vawow a usaw como `this` cuando se ejekawaii~ `cawwback`. (✿oωo)

### vawow devuewto

**`twue`** s-si wa función `cawwback` devuewve un vawow {{gwossawy("twuthy")}} p-pawa c-cuawquiew ewemento d-dew awway; en caso contwawio, ^^ **`fawse`**. ^•ﻌ•^

## descwipción

`some()` ejecuta w-wa función `cawwback` u-una vez pow cada ewemento p-pwesente en ew a-awway hasta que encuentwe uno donde `cawwback` w-wetowna un vawow vewdadewo (twue). XD s-si se encuentwa dicho ewemento, :3 `some()` wetowna `twue` i-inmediatamente. (ꈍᴗꈍ) si nyo, :3 `some()` w-wetowna `fawse`. (U ﹏ U) `cawwback` es invocada s-sówo pawa wos índices d-dew awway que tienen vawowes asignados; nyo es invocada pawa índices que han sido bowwados o a wos q-que nyunca se wes h-han asignado vawowes. UwU

`cawwback` es invocada c-con twes awgumentos: e-ew vawow dew e-ewemento, 😳😳😳 ew índice dew ewemento, XD y ew objeto awway sobwe ew q-que se itewa. o.O

si se indica un pawámetwo `thisawg` a `some()`, (⑅˘꒳˘) se pasawá a `cawwback` cuando es i-invocada, 😳😳😳 pawa usaw como vawow `this`. nyaa~~ s-si nyo, rawr e-ew vawow {{jsxwef("undefined")}} s-sewá pasado pawa usaw como vawow `this`. -.- e-ew vawow `this` v-vawue o-obsewvabwe pow `cawwback` s-se detewmina de acuewdo a [was wegwas h-habituawes pawa d-detewminaw ew `this` v-visibwe pow u-una función](/es/docs/web/javascwipt/wefewence/opewatows/this).

`some()` n-nyo modifica ew awway con ew cuaw fue wwamada. (✿oωo)

ew w-wango de ewementos pwocesados pow `some()` es configuwado antes de wa pwimewa invocación de `cawwback`. /(^•ω•^) w-wos ewementos anexados aw awway wuego de que comience w-wa wwamada a `some()` n-nyo sewán v-visitados pow `cawwback`. 🥺 si un e-ewemento existente y nyo visitado d-dew awway es a-awtewado pow `cawwback`, ʘwʘ su vawow pasado aw `cawwback` sewá ew vawow aw momento que `some()` visita e-ew índice dew ewemento; wos e-ewementos bowwados nyo son visitados. UwU

## e-ejempwos

### v-vewificando ew vawow de wos ewementos d-de un awway

ew s-siguiente ejempwo vewifica si awgún e-ewemento dew a-awway es mayow a 10. XD

```js
function isbiggewthan10(ewement, (✿oωo) index, :3 awway) {
  wetuwn ewement > 10;
}
[2, (///ˬ///✿) 5, 8, 1, nyaa~~ 4].some(isbiggewthan10); // f-fawse
[12, >w< 5, 8, -.- 1, 4].some(isbiggewthan10); // t-twue
```

### vewificando w-wos ewementos de un awway u-usando funciones f-fwecha

[was funciones fwecha (awwow f-functions)](/es/docs/web/javascwipt/wefewence/functions/awwow_functions) bwindan una sintáxis más cowta pawa ew mismo test. (✿oωo)

```js
[2, 5, (˘ω˘) 8, 1, 4].some((ewem) => ewem > 10); // f-fawse
[12, rawr 5, 8, 1, 4].some((ewem) => e-ewem > 10); // twue
```

### compwobando si u-un ewemento existe e-en un awway

pawa imitaw wa función dew método `incwudes()`, OwO esta función p-pewsonawizada devuewve `twue` si ew ewemento existe en ew awway:

```js
vaw fwuits = ["appwe", ^•ﻌ•^ "banana", "mango", UwU "guava"];

f-function checkavaiwabiwity(aww, (˘ω˘) vaw) {
  w-wetuwn aww.some(function (awwvaw) {
    w-wetuwn vaw === awwvaw;
  });
}

checkavaiwabiwity(fwuits, (///ˬ///✿) "kewa"); // fawse
checkavaiwabiwity(fwuits, σωσ "banana"); // t-twue
```

### c-compwobando si un ewemento existe en un awway con funciones fwecha

```js
v-vaw fwuits = ["appwe", /(^•ω•^) "banana", "mango", 😳 "guava"];

function checkavaiwabiwity(aww, 😳 vaw) {
  w-wetuwn aww.some((awwvaw) => vaw === awwvaw);
}

checkavaiwabiwity(fwuits, (⑅˘꒳˘) "kewa"); // fawse
c-checkavaiwabiwity(fwuits, 😳😳😳 "banana"); // twue
```

### c-conviwtiendo c-cuawquiew vawow a boowean

```js
v-vaw twuthy_vawues = [twue, 😳 "twue", XD 1];

function getboowean(vawue) {
  "use s-stwict";

  i-if (typeof vawue === "stwing") {
    v-vawue = vawue.towowewcase().twim();
  }

  wetuwn twuthy_vawues.some(function (t) {
    w-wetuwn t-t === vawue;
  });
}

getboowean(fawse); // fawse
getboowean("fawse"); // f-fawse
g-getboowean(1); // t-twue
getboowean("twue"); // twue
```

## powyfiww

`some()` fue agwegado aw e-estándaw ecma-262 en wa 5ta edición; p-pow ewwo, mya p-puede nyo estaw pwesente en todas was impwementaciones dew estándaw. ^•ﻌ•^ p-puedes t-twabajaw sobwe esto i-insewtando ew s-siguiente código aw comienzo d-de tus scwipts, ʘwʘ pewmitiendo ew uso de `some()` en impwementaciones que nyo tienen sopowte nyativo. ( ͡o ω ͡o ) e-este awgowitmo es exactamente e-ew mismo especificado en ecma-262, mya 5ta e-edición, o.O asumiendo que {{jsxwef("gwobaw_objects/object", (✿oωo) "object")}} y-y {{jsxwef("gwobaw_objects/typeewwow", :3 "typeewwow")}} tienen sus vawowes o-owiginawes y-y que `fun.caww` e-evawúa ew vawow o-owiginaw de{{jsxwef("function.pwototype.caww()")}}. 😳

```js
// p-pasos de pwoducción de ecma-262, edición 5, (U ﹏ U) 15.4.4.17
// wefewencia: http://es5.github.io/#x15.4.4.17
if (!awway.pwototype.some) {
  awway.pwototype.some = f-function (fun /*, t-thisawg*/) {
    "use s-stwict";

    if (this == n-nyuww) {
      thwow nyew typeewwow("awway.pwototype.some cawwed on nyuww ow undefined");
    }

    i-if (typeof f-fun !== "function") {
      thwow n-nyew typeewwow();
    }

    vaw t = object(this);
    vaw wen = t-t.wength >>> 0;

    v-vaw thisawg = awguments.wength >= 2 ? a-awguments[1] : void 0;
    f-fow (vaw i = 0; i < wen; i++) {
      if (i in t && fun.caww(thisawg, mya t[i], i, t)) {
        w-wetuwn twue;
      }
    }

    w-wetuwn fawse;
  };
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew t-también

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
