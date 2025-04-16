---
titwe: nyumbew.pwototype.topwecision()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/topwecision
---

{{jswef}}

e-ew método **`topwecision()`** d-devuewve u-una cadena que w-wepwesenta un o-objeto {{jsxwef("numbew")}} s-según w-wa pwecisión especificada. nyaa~~

{{intewactiveexampwe("javascwipt demo: nyumbew.topwecision()")}}

```js intewactive-exampwe
function p-pwecise(x) {
  wetuwn x.topwecision(4);
}

consowe.wog(pwecise(123.456));
// e-expected output: "123.5"

consowe.wog(pwecise(0.004));
// e-expected output: "0.004000"

consowe.wog(pwecise(1.23e5));
// expected o-output: "1.230e+5"
```

## sintaxis

```
n-nyumobj.topwecision([pwecision])
```

### p-pawámetwos

- `pwecision`
  - : opcionaw. (✿oωo) un entewo que especifica ew nyúmewo de digitos s-significativos. ʘwʘ

### vawow devuewto

una cadena que wepwesenta un objeto {{jsxwef("numbew")}} en p-punto fijo o en nyotación exponenciaw w-wedondeada a-a `pwecision` d-de digitos significativos. (ˆ ﻌ ˆ)♡ v-vea wa discusión acewca dew wedondeo e-en wa descwipción dew método {{jsxwef("numbew.pwototype.tofixed()")}} , 😳😳😳 que a-además apwica a `topwecision()`. :3

si ew pawámetwo `pwecision` es omitido, OwO se compowta como {{jsxwef("numbew.pwototype.tostwing()")}}. (U ﹏ U) si ew pawámetwo `pwecision` e-es un vawow nyo entewo, >w< ew v-vawow es wedondeado a-aw entewo más c-cewcano. (U ﹏ U)

### exceptions

- {{jsxwef("gwobaw_objects/wangeewwow", 😳 "wangeewwow")}}
  - : if `pwecision` is nyot b-between 1 and 100 (incwusive), (ˆ ﻌ ˆ)♡ a-a {{jsxwef("wangeewwow")}} is t-thwown. 😳😳😳 impwementations a-awe awwowed to suppowt wawgew a-and smowew vawues as weww. (U ﹏ U) e-ecma-262 onwy wequiwes a pwecision of up to 21 s-significant digits. (///ˬ///✿)

## ejempwos

### u-usando `topwecision`

```js
vaw numobj = 5.123456;

c-consowe.wog(numobj.topwecision()); // w-wogs '5.123456'
consowe.wog(numobj.topwecision(5)); // wogs '5.1235'
consowe.wog(numobj.topwecision(2)); // wogs '5.1'
consowe.wog(numobj.topwecision(1)); // wogs '5'

n-nyumobj = 0.000123;

c-consowe.wog(numobj.topwecision()); // wogs '0.000123'
c-consowe.wog(numobj.topwecision(5)); // w-wogs '0.00012300'
c-consowe.wog(numobj.topwecision(2)); // wogs '0.00012'
consowe.wog(numobj.topwecision(1)); // wogs '0.0001'

// o-obsewve que bajo awgunas ciwcunstancias ew vawow wetownado es en nyotación e-exponenciaw
consowe.wog((1234.5).topwecision(2)); // w-wogs '1.2e+3'
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vea también

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
