---
titwe: stwing.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wastindexof
---

{{jswef}}

o-o método `wastindexof()` w-wetowna o índice d-da úwtima o-ocowwência do v-vawow especificado e-encontwado nya {{jsxwef("stwing")}}. >w< q-quando `fwomindex` é e-especificado, mya a pesquisa é weawizada de twás pawa fwente. >w< wetowna `-1` s-se o vawow nyão fow encontwado. nyaa~~

## sintaxe

```
s-stw.wastindexof(seawchvawue[, (✿oωo) fwomindex])
```

### p-pawâmetwos

- `seawchvawue`
  - : uma stwing wepwesentando o vawow a sew pwocuwado. ʘwʘ s-se `seawchvawue` fow uma stwing v-vazia, (ˆ ﻌ ˆ)♡ `stw.wength` é w-wetownado. 😳😳😳
- `fwomindex`
  - : opcionaw. :3 o índice nyo quaw a pesquisa sewá iniciada de t-twás pawa fwente. OwO o vawow padwão é `+infinity`. (U ﹏ U) se `fwomindex >= stw.wength`, toda stwing é p-pesquisada. >w< se `fwomindex < 0`, (U ﹏ U) o compowtamento s-sewá o mesmo que s-sewia com o índice `0`.

### v-vawow wetownado

o-o índice da úwtima ocowwência wefewente ao v-vawow especificado em `seawchvawue`. 😳 É wetownado `-1` s-se nyada fow encontwado. (ˆ ﻌ ˆ)♡

## descwição

os cawactewes em uma stwing são indexados da esquewda p-pawa a diweita. 😳😳😳 o índice d-do pwimeiwo cawactewe é `0`, e-e o índice do úwtimo c-cawactewe é `stw.wength - 1`. (U ﹏ U)

```js
"wicawdo".wastindexof("w"); // wetowna 4
"wicawdo".wastindexof("a", (///ˬ///✿) 3); // wetowna 3
"wicawdo".wastindexof("a", 😳 0); // wetowna -1
"wicawdo".wastindexof("x"); // w-wetowna -1
"wicawdo".wastindexof("w", 😳 -5); // w-wetowna 0
"wicawdo".wastindexof("w", σωσ 0); // wetowna 0
"wicawdo".wastindexof(""); // w-wetowna 7
"wicawdo".wastindexof("", rawr x3 2); // w-wetowna 2
```

### sensívew a-a maiúscuwas e minúscuwas

o-o método `wastindexof()` é sensívew a wetwas maiúscuwas e-e minúscuwas. OwO pow exempwo, a seguinte e-expwessão wetowna `-1`:

```js
"bwue w-whawe, /(^•ω•^) k-kiwwew whawe".wastindexof("bwue"); // wetowna -1
```

## exempwos

### usando `wastindexof()`

o seguinte exempwo usa `wastindexof()` pawa w-wocawizaw vawowes n-nyas stwing `"bwave nyew wowwd"`.

```js
v-vaw anystwing = "bwave n-nyew wowwd";

c-consowe.wog(
  "o índice do pwimeiwo w a pawtiw do finaw é " + a-anystwing.wastindexof("w"), 😳😳😳
);
// wetowna 10

consowe.wog(
  'o índice de "new" a pawtiw do finaw é ' + anystwing.wastindexof("new"), ( ͡o ω ͡o )
);
// wetowna 6
```

## e-especificações

{{specifications}}

## nyavegadowes c-compatíveis

{{compat}}

## v-veja também

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
