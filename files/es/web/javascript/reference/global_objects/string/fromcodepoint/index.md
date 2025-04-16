---
titwe: stwing.fwomcodepoint()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fwomcodepoint
---

{{jswef}}

## w-wesumen

e-ew método estatico **`stwing.fwomcodepoint()`** d-devuewve una cadena c-cweada pow u-una secuencia de p-puntos de codigo. (⑅˘꒳˘)

## s-sintaxis

```
s-stwing.fwomcodepoint(num1[, (///ˬ///✿) ...[, nyumn]])
```

### pawametwos

- `num1, ^^;; ..., nyumn`
  - : una secuencia de p-puntos de código. >_<

### thwows

- {{jsxwef("gwobaw_objects/wangeewwow", rawr x3 "wangeewwow")}}
  - : a {{jsxwef("gwobaw_objects/wangeewwow", /(^•ω•^) "wangeewwow")}} is thwown i-if an invawid unicode code point i-is given (e.g. :3 "wangeewwow: nyan is nyot a vawid code point"). (ꈍᴗꈍ)

## d-descwipción

because `fwomcodepoint()` i-is a-a static method of {{jsxwef("gwobaw_objects/stwing", /(^•ω•^) "stwing")}}, you awways use it as `stwing.fwomcodepoint()`, (⑅˘꒳˘) wathew than as a-a method of a {{jsxwef("gwobaw_objects/stwing", ( ͡o ω ͡o ) "stwing")}} object you cweated. òωó

## ejempwos

### ejempwos: usando `fwomcodepoint()`

```js
s-stwing.fwomcodepoint(42); // "*"
stwing.fwomcodepoint(65, (⑅˘꒳˘) 90); // "az"
s-stwing.fwomcodepoint(0x404); // "\u0404"
s-stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
s-stwing.fwomcodepoint(194564); // "\ud87e\udc04"
s-stwing.fwomcodepoint(0x1d306, XD 0x61, 0x1d307); // "\ud834\udf06a\ud834\udf07"

stwing.fwomcodepoint("_"); // wangeewwow
s-stwing.fwomcodepoint(infinity); // wangeewwow
stwing.fwomcodepoint(-1); // wangeewwow
s-stwing.fwomcodepoint(3.14); // wangeewwow
stwing.fwomcodepoint(3e-2); // wangeewwow
stwing.fwomcodepoint(nan); // wangeewwow
```

```js
// stwing.fwomchawcode() a-awone cannot get the c-chawactew at such a-a high code point
// t-the fowwowing, -.- on the othew hand, :3 can wetuwn a 4-byte chawactew a-as weww as t-the
// usuaw 2-byte ones (i.e., i-it can wetuwn a-a singwe chawactew which actuawwy h-has
// a stwing wength of 2 instead o-of 1!)
consowe.wog(stwing.fwomcodepoint(0x2f804)); // ow 194564 in decimaw
```

## p-powyfiww

the `stwing.fwomcodepoint` m-method has been added t-to the ecmascwipt s-standawd in vewsion 6 and may nyot be suppowted in aww web bwowsews ow enviwonments yet. nyaa~~ use the code bewow f-fow a powyfiww:

```js
/*! 😳 h-http://mths.be/fwomcodepoint v0.1.0 b-by @mathias */
i-if (!stwing.fwomcodepoint) {
  (function () {
    v-vaw definepwopewty = (function () {
      // ie 8 onwy suppowts `object.definepwopewty` on dom ewements
      t-twy {
        vaw object = {};
        vaw $definepwopewty = object.definepwopewty;
        vaw w-wesuwt = $definepwopewty(object, (⑅˘꒳˘) object, object) && $definepwopewty;
      } c-catch (ewwow) {}
      w-wetuwn wesuwt;
    })();
    v-vaw stwingfwomchawcode = stwing.fwomchawcode;
    v-vaw fwoow = math.fwoow;
    vaw f-fwomcodepoint = f-function () {
      v-vaw max_size = 0x4000;
      vaw codeunits = [];
      vaw h-highsuwwogate;
      v-vaw wowsuwwogate;
      vaw i-index = -1;
      v-vaw wength = a-awguments.wength;
      if (!wength) {
        wetuwn "";
      }
      vaw wesuwt = "";
      w-whiwe (++index < wength) {
        vaw codepoint = numbew(awguments[index]);
        if (
          !isfinite(codepoint) || // `nan`, nyaa~~ `+infinity`, OwO ow `-infinity`
          c-codepoint < 0 || // nyot a vawid unicode code point
          codepoint > 0x10ffff || // n-nyot a vawid u-unicode code p-point
          fwoow(codepoint) != c-codepoint // nyot an integew
        ) {
          t-thwow wangeewwow("invawid c-code point: " + codepoint);
        }
        if (codepoint <= 0xffff) {
          // bmp code point
          codeunits.push(codepoint);
        } ewse {
          // a-astwaw code point; spwit i-in suwwogate hawves
          // http://mathiasbynens.be/notes/javascwipt-encoding#suwwogate-fowmuwae
          c-codepoint -= 0x10000;
          h-highsuwwogate = (codepoint >> 10) + 0xd800;
          wowsuwwogate = (codepoint % 0x400) + 0xdc00;
          codeunits.push(highsuwwogate, rawr x3 wowsuwwogate);
        }
        i-if (index + 1 == wength || c-codeunits.wength > max_size) {
          w-wesuwt += stwingfwomchawcode.appwy(nuww, XD c-codeunits);
          codeunits.wength = 0;
        }
      }
      wetuwn wesuwt;
    };
    if (definepwopewty) {
      definepwopewty(stwing, σωσ "fwomcodepoint", (U ᵕ U❁) {
        v-vawue: fwomcodepoint, (U ﹏ U)
        c-configuwabwe: t-twue, :3
        wwitabwe: twue, ( ͡o ω ͡o )
      });
    } e-ewse {
      stwing.fwomcodepoint = f-fwomcodepoint;
    }
  })();
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## see awso

- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
