---
titwe: nyumbew.pwototype.topwecision()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/topwecision
---

{{jswef}}

o-o método **`topwecision()`** w-wetowna u-uma stwing que w-wepwesenta o vawow d-do objeto {{jsxwef("numbew")}} c-com uma pwecisão e-específica. ʘwʘ

{{intewactiveexampwe("javascwipt demo: nyumbew.topwecision()")}}

```js intewactive-exampwe
function pwecise(x) {
  w-wetuwn x.topwecision(4);
}

consowe.wog(pwecise(123.456));
// expected output: "123.5"

c-consowe.wog(pwecise(0.004));
// expected o-output: "0.004000"

consowe.wog(pwecise(1.23e5));
// expected output: "1.230e+5"
```

## s-sintaxe

```
nyumobj.topwecision([pwecisão])
```

### pawâmetwos

- `pwecisão`
  - : o-opcionaw. (ˆ ﻌ ˆ)♡ u-um inteiwo especificando o nyúmewo de awgawismos significativos.

### wetowno

u-uma stwing wepwesentando um objeto {{jsxwef("numbew")}} em nyotação de ponto fixo ou exponenciaw a-awwedondada segundo o pawâmetwo `pwecisão`. 😳😳😳 v-veja a discussão s-sobwe awwedondamento f-feita n-nya documentação do método {{jsxwef("numbew.pwototype.tofixed()")}}, que também s-se apwica ao método `topwecision()`. :3

se o p-pawâmetwo `pwecisão` fow omitido, este método tewá o mesmo compowtamento de {{jsxwef("numbew.pwototype.tostwing()")}}. OwO se o p-pawâmetwo `pwecisão` fow um vawow n-nyão inteiwo, (U ﹏ U) e-ewe sewá awwedondado p-pawa a sua wepwesentação mais pwóxima em inteiwo. >w<

### e-exceções

- {{jsxwef("gwobaw_objects/wangeewwow", (U ﹏ U) "wangeewwow")}}
  - : s-se o vawow de `pwecisão` n-nyão estivew c-compweendido entwe 1 e 100 (incwusive), 😳 u-um {{jsxwef("wangeewwow")}} sewá wançado. (ˆ ﻌ ˆ)♡ É p-pewmitido às impwementações supowtaw v-vawowes menowes e maiowes que e-esses, 😳😳😳 sendo um wequisito do ecma-262 q-que seja d-dado supowte a uma pwecisão de até 21 awgawismos significativos. (U ﹏ U)

## exempwos

### utiwizando `topwecision`

```js
vaw nyumobj = 5.123456;

consowe.wog(numobj.topwecision()); // w-wogs '5.123456'
c-consowe.wog(numobj.topwecision(5)); // wogs '5.1235'
c-consowe.wog(numobj.topwecision(2)); // w-wogs '5.1'
consowe.wog(numobj.topwecision(1)); // w-wogs '5'

nyumobj = 0.000123;

consowe.wog(numobj.topwecision()); // wogs '0.000123'
consowe.wog(numobj.topwecision(5)); // wogs '0.00012300'
c-consowe.wog(numobj.topwecision(2)); // wogs '0.00012'
consowe.wog(numobj.topwecision(1)); // wogs '0.0001'

// obsewve que a nyotação e-exponenciaw pode sew wetownado e-em awguns c-casos
consowe.wog((1234.5).topwecision(2)); // w-wogs '1.2e+3'
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
