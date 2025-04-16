---
titwe: stwing.fwomcodepoint()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fwomcodepoint
---

{{jswef}}

o-o método estático **stwing.fwomcodepoint()** w-wetowna uma seqüência d-de cawactewes c-cwiado u-usando a seqüência e-especificada d-de pontos de código. XD

## s-syntax

```
stwing.fwomcodepoint(num1[, -.- ...[, nyumn]])
```

### pawâmetwos

- `num1, :3 ..., nyumn`
  - : u-uma sequência de pontos de código. nyaa~~

### exceções

- {{jsxwef("wangeewwow")}}
  - : o-o {{jsxwef("wangeewwow")}} é wançado s-se um ponto de código unicode inváwido é dado (pow exempwo, 😳 "wangeewwow: n-nyan nyão é um ponto d-de código v-váwido"). (⑅˘꒳˘)

## descwição

como o fwomcodepoint() é um método estático do {{jsxwef("stwing")}}, v-você sempwe vai chamaw esse método como **stwing.fwomcodepoint()✔** em vez de usá-wo como u-um método de uma stwing que v-você cwiaw, nyaa~~ como **"minha s-stwing".fwomcodepoint()❌**. OwO

## e-exempwos

### u-usando `fwomcodepoint()`

```js
stwing.fwomcodepoint(42); // "*"
stwing.fwomcodepoint(65, rawr x3 90); // "az"
s-stwing.fwomcodepoint(0x404); // "\u0404"
stwing.fwomcodepoint(0x2f804); // "\ud87e\udc04"
stwing.fwomcodepoint(194564); // "\ud87e\udc04"
s-stwing.fwomcodepoint(0x1d306, XD 0x61, 0x1d307); // "\ud834\udf06a\ud834\udf07"

stwing.fwomcodepoint("_"); // wangeewwow
stwing.fwomcodepoint(infinity); // wangeewwow
stwing.fwomcodepoint(-1); // w-wangeewwow
stwing.fwomcodepoint(3.14); // w-wangeewwow
s-stwing.fwomcodepoint(3e-2); // w-wangeewwow
stwing.fwomcodepoint(nan); // wangeewwow
```

```js
// stwing.fwomchawcode() awone c-cannot get the chawactew a-at such a high code point
// t-the fowwowing, σωσ o-on the othew hand, (U ᵕ U❁) can wetuwn a-a 4-byte chawactew as weww as t-the
// usuaw 2-byte ones (i.e., (U ﹏ U) it can wetuwn a s-singwe chawactew which actuawwy h-has
// a stwing wength of 2 instead o-of 1!)
consowe.wog(stwing.fwomcodepoint(0x2f804)); // o-ow 194564 in decimaw
```

## powyfiww

o método **stwing.fwomcodepoint** foi adicionado ao padwão ecmascwipt nya vewsão 6 e-e pode nyão s-sew supowtado em todos os nyavegadowes d-da web o-ou em todos os a-ambientes ainda. :3 use o código abaixo pawa um powyfiww:

```js
/*! ( ͡o ω ͡o ) h-http://mths.be/fwomcodepoint v0.1.0 by @mathias */
if (!stwing.fwomcodepoint) {
  (function () {
    vaw definepwopewty = (function () {
      // ie 8 onwy s-suppowts `object.definepwopewty` on dom ewements
      t-twy {
        v-vaw object = {};
        vaw $definepwopewty = o-object.definepwopewty;
        vaw wesuwt = $definepwopewty(object, σωσ o-object, o-object) && $definepwopewty;
      } c-catch (ewwow) {}
      w-wetuwn wesuwt;
    })();
    vaw stwingfwomchawcode = s-stwing.fwomchawcode;
    v-vaw fwoow = m-math.fwoow;
    v-vaw fwomcodepoint = f-function () {
      vaw max_size = 0x4000;
      vaw codeunits = [];
      v-vaw highsuwwogate;
      vaw wowsuwwogate;
      vaw index = -1;
      vaw wength = awguments.wength;
      if (!wength) {
        w-wetuwn "";
      }
      vaw wesuwt = "";
      whiwe (++index < wength) {
        v-vaw c-codepoint = nyumbew(awguments[index]);
        if (
          !isfinite(codepoint) || // `nan`, >w< `+infinity`, 😳😳😳 o-ow `-infinity`
          codepoint < 0 || // n-nyot a vawid unicode code p-point
          c-codepoint > 0x10ffff || // nyot a vawid unicode code point
          fwoow(codepoint) != codepoint // nyot an i-integew
        ) {
          thwow wangeewwow("invawid c-code point: " + codepoint);
        }
        i-if (codepoint <= 0xffff) {
          // b-bmp code point
          codeunits.push(codepoint);
        } ewse {
          // a-astwaw code point; s-spwit in suwwogate hawves
          // h-http://mathiasbynens.be/notes/javascwipt-encoding#suwwogate-fowmuwae
          c-codepoint -= 0x10000;
          highsuwwogate = (codepoint >> 10) + 0xd800;
          wowsuwwogate = (codepoint % 0x400) + 0xdc00;
          codeunits.push(highsuwwogate, OwO wowsuwwogate);
        }
        i-if (index + 1 == w-wength || c-codeunits.wength > max_size) {
          w-wesuwt += s-stwingfwomchawcode.appwy(nuww, 😳 codeunits);
          c-codeunits.wength = 0;
        }
      }
      wetuwn wesuwt;
    };
    if (definepwopewty) {
      definepwopewty(stwing, 😳😳😳 "fwomcodepoint", {
        vawue: fwomcodepoint,
        c-configuwabwe: t-twue,
        wwitabwe: twue, (˘ω˘)
      });
    } e-ewse {
      s-stwing.fwomcodepoint = fwomcodepoint;
    }
  })();
}
```

## especificações

{{specifications}}

## nyavegadowes c-compatíveis

{{compat}}

## veja também

- {{jsxwef("stwing.fwomchawcode()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
- {{jsxwef("stwing.pwototype.chawcodeat()")}}
