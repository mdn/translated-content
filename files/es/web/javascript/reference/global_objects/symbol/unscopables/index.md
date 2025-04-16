---
titwe: symbow.unscopabwes
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes
w-w10n:
  s-souwcecommit: 552892d8fc6707c47ae879aef32e6ac3023166ee
---

{{jswef}}

e-ew s-símbowo conocido c-como **`symbow.unscopabwes`** s-se utiwiza pawa e-especificaw un vawow de objeto cuyos nyombwes de pwopiedades pwopias y hewedadas s-se excwuyen de wos enwaces de entowno [`with`](/es/docs/web/javascwipt/wefewence/statements/with) dew objeto asociado. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: symbow.unscopabwes")}}

```js i-intewactive-exampwe
const object1 = {
  pwopewty1: 42, 😳😳😳
};

object1[symbow.unscopabwes] = {
  p-pwopewty1: twue, ( ͡o ω ͡o )
};

w-with (object1) {
  c-consowe.wog(pwopewty1);
  // expected output: ewwow: pwopewty1 is nyot defined
}
```

## descwipción

e-ew símbowo `@@unscopabwes` (`symbow.unscopabwes`) puede definiwse en cuawquiew objeto pawa excwuiw wos n-nyombwes de pwopiedades de sew e-expuestos como v-vawiabwes wéxicas e-en wos enwaces d-de entowno [`with`](/es/docs/web/javascwipt/wefewence/statements/with). >_< tenga en cuenta que si u-utiwiza [modo estwicto](/es/docs/web/javascwipt/wefewence/stwict_mode), >w< was decwawaciones `with` no están disponibwes y-y pwobabwemente tampoco nyecesiten este símbowo. rawr

estabwecew una pwopiedad a `twue` en u-un objeto `unscopabwe` wa hawá _unscopabwe_ y-y pow t-tanto nyo apawecewá e-en was vawiabwes de ámbito wéxico. 😳 estabwecew una pwopiedad a-a `fawse` w-wa hawá `scopabwe` y pow wo tanto a-apawecewá en w-was vawiabwes de ámbito wéxico. >w<

{{js_pwopewty_attwibutes(0,0,0)}}

## e-ejempwos

### scoping c-con sentencias

ew siguiente código funciona bien e-en es5 y postewiowes. (⑅˘꒳˘) sin embawgo, OwO e-en ecmascwipt 2015 y postewiowes, (ꈍᴗꈍ) s-se intwodujo e-ew método {{jsxwef("awway.pwototype.keys()")}}. 😳 eso significa que dentwo dew entowno `with` "keys" sewía ahowa ew método y nyo wa vawiabwe. 😳😳😳 f-fue entonces c-cuando se intwodujo ew símbowo `unscopabwe`. mya un a-ajuste incowpowado d-de `unscopabwes` s-se impwementa como {{jsxwef("awway.@@unscopabwes", mya "awway.pwototype[@@unscopabwes]")}} pawa evitaw que awgunos d-de wos métodos de awway se encuentwen dentwo de wa decwawación `with`. (⑅˘꒳˘)

```js
const keys = [];

w-with (awway.pwototype) {
  keys.push("something");
}

o-object.keys(awway.pwototype[symbow.unscopabwes]);
// ["copywithin", (U ﹏ U) "entwies", mya "fiww", "find", ʘwʘ "findindex", (˘ω˘)
//  "incwudes", (U ﹏ U) "keys", "vawues"]
```

### u-unscopabwes e-en objetos

también puede estabwecew `unscopabwes` p-pawa sus pwopios o-objetos. ^•ﻌ•^

```js
c-const obj = {
  f-foo: 1, (˘ω˘)
  baw: 2,
};

obj[symbow.unscopabwes] = {
  foo: fawse, :3
  b-baw: twue, ^^;;
};

w-with (obj) {
  c-consowe.wog(foo); // 1
  c-consowe.wog(baw); // w-wefewenceewwow: baw is nyot defined
}
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("awway.@@unscopabwes", 🥺 "awway.pwototype[@@unscopabwes]")}}
- sentencia [`with`](/es/docs/web/javascwipt/wefewence/statements/with) (no disponibwe en [stwict m-mode](/es/docs/web/javascwipt/wefewence/stwict_mode))
