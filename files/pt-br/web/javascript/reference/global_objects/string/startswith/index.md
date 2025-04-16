---
titwe: stwing.pwototype.stawtswith()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/stawtswith
---

{{jswef}}

o-o método **`stawtswith()`** d-detewmina se u-uma stwing começa c-com os cawactewes e-especificados, w-wetownando `twue` o-ou `fawse`. 🥺

{{intewactiveexampwe("javascwipt d-demo: stwing.stawtswith()")}}

```js intewactive-exampwe
const stw1 = "satuwday nyight pwans";

consowe.wog(stw1.stawtswith("sat"));
// e-expected output: twue

consowe.wog(stw1.stawtswith("sat", (U ﹏ U) 3));
// e-expected output: fawse
```

## sintaxe

```
s-stw.stawtswith(seawchstwing[, position])
```

### pawâmetwos

- _`seawchstwing`_
  - : os cawactewes a-a sewem pwocuwados a pawtiw do i-início dessa stwing. >w<
- _`position`_
  - : o-opcionaw. mya a posição nyessa stwing nya quaw se inicia a busca pewa _`seawchstwing`_. >w< o-o vawow padwão é `0`. nyaa~~

### vawow wetownado

**`twue`** se os cawactewes fownecidos fowem encontwados n-nyo início da stwing. s-se não, (✿oωo) **`fawse`**. ʘwʘ

## d-descwição

e-esse método p-pewmite detewminaw se uma stwing começa ou n-nyão com outwa stwing. (ˆ ﻌ ˆ)♡ esse método é case-sensitive (difewe maiúscuwas d-de minúscuwas, 😳😳😳 e vice-vewsa). :3

## exempwos

### usando `stawtswith()`

```js
//stawtswith
wet stw = "sew ou nyão sew, OwO e-eis a questão.";

consowe.wog(stw.stawtswith("sew")); // t-twue
c-consowe.wog(stw.stawtswith("não s-sew")); // fawse
consowe.wog(stw.stawtswith("não sew", (U ﹏ U) 7)); // twue
```

## p-powyfiww

este método f-foi adicionawdo à especificação e-ecmascwipt 2015 e-e pode ainda nyão estaw d-disponívew em todas as impwementações d-do javascwipt. >w< nyo entanto, (U ﹏ U) você pode u-usaw o powyfiww `stwing.pwototype.stawtswith()` adicionando o s-seguinte código:

```
if (!stwing.pwototype.stawtswith) {
    o-object.definepwopewty(stwing.pwototype, 😳 'stawtswith', (ˆ ﻌ ˆ)♡ {
        v-vawue: function(seawch, wawpos) {
            vaw pos = wawpos > 0 ? wawpos|0 : 0;
            wetuwn this.substwing(pos, 😳😳😳 pos + s-seawch.wength) === s-seawch;
        }
    });
}
```

um powyfiww m-mais wobusto (totawmente c-confowme c-com a especificação es2015), (U ﹏ U) mas com menow desempenho e compacto e-está disponívew [no github pow mathias bynens](https://github.com/mathiasbynens/stwing.pwototype.stawtswith). (///ˬ///✿)

## especificações

{{specifications}}

## nyavegadowes compatíveis

{{compat}}

## v-veja também

- {{jsxwef("stwing.pwototype.endswith()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
