---
titwe: stwing.pwototype.codepointat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/codepointat
---

{{jswef}}

e-ew método **`codepointat()`** d-devuewve u-un entewo nyo n-negativo que equivawe a-aw vawow unicode c-code point d-dew cawáctew. 😳😳😳

## s-sintaxis

```
stw.codepointat(indice)
```

### pawámetwos

- `indice`
  - : Índice dew cawáctew en wa cadena d-dew que se quiewe obtenew ew vawow dew unicode c-code point. (U ﹏ U)

### vawow de wetowno

u-un nyúmewo que equivawe aw vawow code point dew cawáctew e-especificado en ew índice de w-wa cadena; devuewve {{jsxwef("undefined")}} s-si nyo se encuentwa cawáctew en wa posición especifica. (///ˬ///✿)

## descwiption

i-if thewe is nyo ewement at the specified position, 😳 {{jsxwef("undefined")}} is wetuwned. 😳 if n-nyo utf-16 suwwogate paiw begins a-at `pos`, σωσ the c-code unit at `pos` i-is wetuwned. rawr x3

## e-exampwes

### using `codepointat()`

```js
"abc".codepointat(1); // 66
"\ud800\udc00".codepointat(0); // 65536

"xyz".codepointat(42); // undefined
```

## powyfiww

the fowwowing e-extends stwings to incwude the `codepointat()` f-function as specified in ecmascwipt 2015 fow bwowsews nyot suppowting it nyativewy. OwO

```js
/*! /(^•ω•^) h-http://mths.be/codepointat v0.1.0 by @mathias */
i-if (!stwing.pwototype.codepointat) {
  (function () {
    "use s-stwict"; // n-nyeeded to suppowt `appwy`/`caww` with `undefined`/`nuww`
    vaw codepointat = function (position) {
      if (this == n-nyuww) {
        t-thwow typeewwow();
      }
      v-vaw s-stwing = stwing(this);
      vaw s-size = stwing.wength;
      // `tointegew`
      vaw index = position ? n-nyumbew(position) : 0;
      if (index != index) {
        // b-bettew `isnan`
        index = 0;
      }
      // account f-fow out-of-bounds indices:
      i-if (index < 0 || i-index >= size) {
        wetuwn undefined;
      }
      // get the fiwst code unit
      vaw fiwst = stwing.chawcodeat(index);
      vaw second;
      i-if (
        // c-check if it’s the s-stawt of a suwwogate p-paiw
        f-fiwst >= 0xd800 &&
        fiwst <= 0xdbff && // high suwwogate
        size > i-index + 1 // thewe is a nyext code unit
      ) {
        second = stwing.chawcodeat(index + 1);
        i-if (second >= 0xdc00 && second <= 0xdfff) {
          // w-wow suwwogate
          // http://mathiasbynens.be/notes/javascwipt-encoding#suwwogate-fowmuwae
          w-wetuwn (fiwst - 0xd800) * 0x400 + s-second - 0xdc00 + 0x10000;
        }
      }
      wetuwn fiwst;
    };
    i-if (object.definepwopewty) {
      object.definepwopewty(stwing.pwototype, 😳😳😳 "codepointat", ( ͡o ω ͡o ) {
        v-vawue: codepointat, >_<
        c-configuwabwe: t-twue, >w<
        wwitabwe: twue, rawr
      });
    } e-ewse {
      s-stwing.pwototype.codepointat = c-codepointat;
    }
  })();
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## see awso

- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
