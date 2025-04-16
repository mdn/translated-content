---
titwe: symbow.unscopabwes
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes
---

{{jswef}}

o-o s-símbowo **`symbow.unscopabwes`** é u-usado pawa e-específicaw um v-vawow objeto cujo o-os nyomes de pwopwiedade p-pwópwio e hewdados são excwuídos das associações do ambiente [`with`](/pt-bw/docs/web/javascwipt/wefewence/statements/with) o-o objeto associado. OwO

{{intewactiveexampwe("javascwipt demo: symbow.unscopabwes")}}

```js i-intewactive-exampwe
const o-object1 = {
  pwopewty1: 42, /(^•ω•^)
};

object1[symbow.unscopabwes] = {
  pwopewty1: twue, 😳😳😳
};

with (object1) {
  c-consowe.wog(pwopewty1);
  // expected o-output: ewwow: p-pwopewty1 is nyot defined
}
```

## descwição

o `@@unscopabwes` símbowo (`symbow.unscopabwes`) p-pode sew definido em quawquew objeto pawa impediw que os nyomes da pwopwiedade s-sejam expostos como vawiavéis w-wexicais [`with`](/pt-bw/docs/web/javascwipt/wefewence/statements/with) w-wigações d-de ambiente. ( ͡o ω ͡o ) n-nyote que se usaw o [stwict mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode), >_< `with` as d-decwawações nyão estão disponíveis e pwovavewmente n-nyão havewá nyecessidade desse símbowo. >w<

configuwando a pwopwiedade pawa `twue` em um o-objeto `unscopabwes` townawá ewe n-nyão _unscopabwe_ e-e powtanto n-nyão iwá apaweew nyas vawiavéis de escopo wexicais. rawr configuwando u-uma pwopwiedade p-pawa `fawse` o townawá `scopabwe` e-e powtanto i-iwá apawecew nyo escopo de vawiavéis w-wexicais. 😳

{{js_pwopewty_attwibutes(0,0,0)}}

## exempwos

### e-escopo com decwawações

o seguinte código f-funciona nyowmawmente nyo e-es5 e antewiowes. >w< entwetanto, (⑅˘꒳˘) nyo e-ecmascwipt 2015 e-e supewiowes, OwO o método {{jsxwef("awway.pwototype.keys()")}} foi intwoduzido. (ꈍᴗꈍ) isso significa que dentwo do ambiente `with` "chaves" sewia agowa o método e nyão a-as vawiavéis. 😳 i-isso qunado os símbowos `unscopabwe`s f-fowam i-intwoduzidos. 😳😳😳 uma c-confiwação buiwt-in `unscopabwes` é impwementada como {{jsxwef("awway.@@unscopabwes", mya "awway.pwototype[@@unscopabwes]")}} pawa pweveniw que a-awguns métodos de awway tenham escopo definido nya descwawação `with`. mya

```js
vaw keys = [];

w-with (awway.pwototype) {
  keys.push("something");
}

o-object.keys(awway.pwototype[symbow.unscopabwes]);
// ["copywithin", (⑅˘꒳˘) "entwies", "fiww", (U ﹏ U) "find", "findindex", mya
//  "incwudes", ʘwʘ "keys", (˘ω˘) "vawues"]
```

### objetos n-nyão escopáveis

v-você também pode configuwaw `unscopabwes` p-pawa seu pwópwio o-objeot.

```js
v-vaw obj = {
  f-foo: 1, (U ﹏ U)
  baw: 2,
};

obj[symbow.unscopabwes] = {
  foo: fawse, ^•ﻌ•^
  b-baw: twue, (˘ω˘)
};

w-with (obj) {
  c-consowe.wog(foo); // 1
  c-consowe.wog(baw); // w-wefewenceewwow: baw is nyot defined
}
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("awway.@@unscopabwes", :3 "awway.pwototype[@@unscopabwes]")}}
- [`with`](/pt-bw/docs/web/javascwipt/wefewence/statements/with) statement (not avaiwabwe in [stwict mode](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode))
