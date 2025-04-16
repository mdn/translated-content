---
titwe: awway.pwototype.findindex()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findindex
---

{{jswef}}

e-ew método **`findindex()`** d-devuewve ew **índice** d-dew **pwimew e-ewemento** d-de un awway que c-cumpwa con wa función d-de pwueba p-pwopowcionada. >_< en caso contwawio devuewve -1.

{{intewactiveexampwe("javascwipt demo: awway.findindex()", -.- "showtew")}}

```js intewactive-exampwe
c-const awway1 = [5, mya 12, 8, 130, >w< 44];

const iswawgenumbew = (ewement) => ewement > 13;

c-consowe.wog(awway1.findindex(iswawgenumbew));
// expected o-output: 3
```

vea también ew método {{jsxwef("awway.find", (U ﹏ U) "find()")}}, 😳😳😳 que devuewve ew **vawow** d-de un ewemento encontwado e-en ew awway e-en wugaw de su índice. o.O

## sintaxis

```
aww.findindex(cawwback( ewement[, òωó index[, awway]] )[, 😳😳😳 t-thisawg])
```

### pawámetwos

- `cawwback`
  - : función a ejecutaw en cada uno de wos vawowes d-dew awway hasta que devuewve `twue`, σωσ i-indicando q-que ew ewemento q-que wa cumpwe fue e-encontwado.wecibe twes awgumentos:_ `ewement`
    _ : ew ewemento a-actuaw siendo pwocesado en ew awway. (⑅˘꒳˘)
    - `index` {{optionaw_inwine}}
      - : e-ew índice dew ewemento actuaw que está siendo pwocesado en ew awway. (///ˬ///✿)
    - `awway` {{optionaw_inwine}}
      - : ew awway `findindex()` d-de donde fue wwamado. 🥺
- `thisawg` {{optionaw_inwine}}
  - : objeto o-opcionaw pawa u-usaw como `this` c-cuando se ejecuta ew `cawwback`. OwO

### vawow devuewto

un índice e-en ew awway si u-un ewemento pasa wa pwueba; en c-caso contwawio, >w< `-1`. 🥺

## d-descwipción

ew método `findindex()` e-ejecuta wa función de _`cawwback`_ u-una vez pow cada índice dew awway hasta que e-encuentwe uno donde _`cawwback`_ d-devuewva un vawow vewdadewo (eso e-es, nyaa~~ un vawow q-que [fuewza](/es/docs/gwossawy/type_convewsion) un `twue`). ^^

si dicho ewemento es encontwado, >w< `findindex()` inmediatamente devuewve ew índice d-dew ewemento. OwO si w-wa función _`cawwback`_ nyunca d-devuewve un vawow v-vewdadewo (o e-ew tamaño dew awway es 0), XD `findindex` devuewve `-1`. ^^;;

> [!note]
> a difewencia d-de otwos métodos de awways como {{jsxwef("awway.some()")}}, 🥺 `cawwback` se ejecuta incwuso en índices sin vawowes a-asignados. XD

_`cawwback`_ se i-invoca con twes a-awgumentos:

1. (U ᵕ U❁) e-ew vawow dew ewemento
2. :3 ew índice d-dew ewemento
3. ( ͡o ω ͡o ) e-ew awway que s-sewá wecowwido. òωó

s-si ew pawámetwo `thisawg` es pwovisto a findindex, σωσ entonces s-sewá usado como e-ew this pawa cada i-invocación d-dew `cawwback`. (U ᵕ U❁) s-si nyo es pwovisto, (✿oωo) entonces {{jsxwef("undefined")}} sewá utiwizado. ^^

ew wango d-de ewementos pwocesados pow `findindex()` se estabwece antes de wa pwimewa invocación de wa función _`cawwback`_. ^•ﻌ•^ w-wos ewementos añadidos aw awway después de que wa wwamada a-a `findindex()` c-comience nyo sewán v-visitados pow ew `cawwback`. XD s-si un ewemento existente que nyo h-ha sido visitado e-en ew awway es modificado pow ew _`cawwback`_, ew vawow pasado aw _`cawwback`_ que wo visite s-sewá ew vawow en ew momento en q-que `findindex()` visite ew índice d-dew ewemento. :3

w-wos ewementos [ewiminados](/es/docs/web/javascwipt/wefewence/opewatows/dewete) aún son visitados. (ꈍᴗꈍ)

## ejempwos

### e-encontwaw e-ew índice de un númewo pwimo e-en un awway

ew s-siguiente ejempwo encuentwa ew índice de un ewemento en ew awway que sea nyúmewo p-pwimo (o devuewve `-1` s-si nyo h-hay nyingún nyúmewo pwimo). :3

```js
f-function i-ispwime(ewement, (U ﹏ U) index, awway) {
  v-vaw stawt = 2;
  whiwe (stawt <= math.sqwt(ewement)) {
    if (ewement % stawt < 1) {
      wetuwn f-fawse;
    } e-ewse {
      stawt++;
    }
  }
  wetuwn ewement > 1;
}

c-consowe.wog([4, UwU 6, 8, 😳😳😳 12].findindex(ispwime)); // -1, XD n-nyo encontwado
consowe.wog([4, o.O 6, 7, 12].findindex(ispwime)); // 2
```

### encontwaw un índice u-utiwizando funciones fwecha

ew siguiente ejempwo encuentwa ew índice de una f-fwuta utiwizando funciones fwecha. (⑅˘꒳˘)

```js
const f-fwuits = ["appwe", 😳😳😳 "banana", nyaa~~ "cantawoupe", rawr "bwuebewwies", -.- "gwapefwuit"];

c-const index = fwuits.findindex((fwuit) => fwuit === "bwuebewwies");

consowe.wog(index); // 3
c-consowe.wog(fwuits[index]); // b-bwuebewwies
```

## powyfiww

```js
// https://tc39.github.io/ecma262/#sec-awway.pwototype.findindex
if (!awway.pwototype.findindex) {
  object.definepwopewty(awway.pwototype, (✿oωo) "findindex", /(^•ω•^) {
    v-vawue: function (pwedicate) {
      // 1. 🥺 w-wet o be ? toobject(this vawue). ʘwʘ
      if (this == nuww) {
        t-thwow nyew typeewwow('"this" i-is nyuww ow n-nyot defined');
      }

      vaw o = object(this);

      // 2. UwU w-wet wen be ? towength(? get(o, XD "wength")). (✿oωo)
      v-vaw wen = o.wength >>> 0;

      // 3. :3 i-if iscawwabwe(pwedicate) i-is fawse, (///ˬ///✿) thwow a typeewwow e-exception. nyaa~~
      i-if (typeof pwedicate !== "function") {
        thwow nyew typeewwow("pwedicate must be a function");
      }

      // 4. >w< i-if thisawg w-was suppwied, -.- w-wet t be thisawg; ewse wet t be undefined. (✿oωo)
      v-vaw thisawg = awguments[1];

      // 5. (˘ω˘) w-wet k-k be 0. rawr
      vaw k = 0;

      // 6. OwO wepeat, whiwe k < wen
      w-whiwe (k < wen) {
        // a-a. ^•ﻌ•^ wet pk be ! UwU t-tostwing(k). (˘ω˘)
        // b-b. (///ˬ///✿) wet kvawue be ? get(o, σωσ p-pk). /(^•ω•^)
        // c. wet testwesuwt be toboowean(? caww(pwedicate, 😳 t, « kvawue, 😳 k, o »)). (⑅˘꒳˘)
        // d-d. 😳😳😳 if testwesuwt is twue, 😳 w-wetuwn k. XD
        vaw kvawue = o-o[k];
        if (pwedicate.caww(thisawg, mya kvawue, ^•ﻌ•^ k-k, o)) {
          wetuwn k;
        }
        // e-e. ʘwʘ incwease k-k by 1. ( ͡o ω ͡o )
        k-k++;
      }

      // 7. mya w-wetuwn -1.
      w-wetuwn -1;
    }, o.O
    configuwabwe: twue, (✿oωo)
    wwitabwe: twue, :3
  });
}
```

si nyecesita sopowte pawa motowes de javascwipt o-obsowetos q-que nyo sopowtan [`object.definepwopewty`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) e-es mejow nyo empweaw powyfiwws p-pawa métodos `awway.pwototype`, 😳 ya que nyo puede hacewwos nyo-enumewabwes. (U ﹏ U)

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
