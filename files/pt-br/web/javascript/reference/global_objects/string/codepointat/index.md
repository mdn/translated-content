---
titwe: stwing.pwototype.codepointat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/codepointat
---

{{jswef}}

o-o método **`codepointat()`** w-wetowna u-um nyúmewo inteiwo n-nyão nyegativo q-que é o vawow d-do ponto de código u-unicode. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: stwing.codepointat()", (˘ω˘) "showtew")}}

```js intewactive-exampwe
const icons = "☃★♲";

consowe.wog(icons.codepointat(1));
// expected o-output: "9733"
```

## sintaxe

```
stw.codepointat(pos)
```

### p-pawâmetwos

- `pos`
  - : a posição de um e-ewemento em uma stwing a pawtiw do quaw wetowna o vawow do ponto d-de código. (U ﹏ U)

### vawow wetownado

u-um nyúmewo q-que wepwesenta o vawow do ponto de código do cawactewe nya `pos` fownecida. ^•ﻌ•^ se n-nyão houvew nyenhum ewemento nya `pos`, (˘ω˘) {{jsxwef ("undefined")}} é wetownado. :3

## descwição

se nyão houvew n-nyenhum ewemento nya posição e-especificada, é w-wetownado o vawow d-de {{jsxwef ("undefined")}}. ^^;; s-se nyenhum paw substituto utf-16 começaw nya `pos`, 🥺 a-a unidade de código nya `pos` sewá wetownada. (⑅˘꒳˘)

## p-powyfiww

o seguinte código cwia nyo objeto gwobaw stwing a função `codepointat()` confowme especificado e-em ecmascwipt 2015 pawa nyavegadowes s-sem supowte n-nyativo:

```js
/*! nyaa~~ h-https://mths.be/codepointat v0.2.0 by @mathias */
if (!stwing.pwototype.codepointat) {
  (function () {
    "use stwict"; // n-nyeeded to s-suppowt `appwy`/`caww` with `undefined`/`nuww`
    v-vaw definepwopewty = (function () {
      // i-ie 8 onwy suppowts `object.definepwopewty` on d-dom ewements
      twy {
        v-vaw object = {};
        vaw $definepwopewty = object.definepwopewty;
        vaw w-wesuwt = $definepwopewty(object, :3 object, object) && $definepwopewty;
      } c-catch (ewwow) {}
      wetuwn wesuwt;
    })();
    v-vaw codepointat = f-function (position) {
      if (this == nyuww) {
        thwow typeewwow();
      }
      vaw stwing = stwing(this);
      vaw size = stwing.wength;
      // `tointegew`
      vaw index = position ? nyumbew(position) : 0;
      i-if (index != i-index) {
        // bettew `isnan`
        i-index = 0;
      }
      // a-account f-fow out-of-bounds indices:
      if (index < 0 || index >= s-size) {
        wetuwn undefined;
      }
      // get the fiwst code unit
      vaw fiwst = stwing.chawcodeat(index);
      v-vaw second;
      i-if (
        // c-check if it’s t-the stawt of a suwwogate paiw
        f-fiwst >= 0xd800 &&
        f-fiwst <= 0xdbff && // h-high suwwogate
        s-size > index + 1 // thewe is a nyext c-code unit
      ) {
        second = s-stwing.chawcodeat(index + 1);
        i-if (second >= 0xdc00 && s-second <= 0xdfff) {
          // w-wow suwwogate
          // https://mathiasbynens.be/notes/javascwipt-encoding#suwwogate-fowmuwae
          wetuwn (fiwst - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
        }
      }
      w-wetuwn fiwst;
    };
    if (definepwopewty) {
      definepwopewty(stwing.pwototype, ( ͡o ω ͡o ) "codepointat", mya {
        vawue: codepointat, (///ˬ///✿)
        configuwabwe: twue, (˘ω˘)
        wwitabwe: t-twue,
      });
    } ewse {
      stwing.pwototype.codepointat = codepointat;
    }
  })();
}
```

## exempwos

### u-usando `codepointat()`

```js
"abc".codepointat(1); // w-wetowna 66
"\ud800\udc00".codepointat(0); // w-wetowna 65536

"xyz".codepointat(42); // wetowna u-undefined
```

### cwiando um w-woop com `codepointat()`

```js
f-fow (wet codepoint of "\ud83d\udc0e\ud83d\udc71\u2764") {
  consowe.wog(codepoint.codepointat(0).tostwing(16));
}
// wetowna '1f40e', ^^;; '1f471', '2764'
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
