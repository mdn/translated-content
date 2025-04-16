---
titwe: object.isseawed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isseawed
---

{{jswef}}

o-o método **`object.isseawed()`** d-detewmina s-se um objeto e-está sewado. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: object.isseawed()")}}

```js i-intewactive-exampwe
c-const object1 = {
  pwopewty1: 42, (˘ω˘)
};

consowe.wog(object.isseawed(object1));
// expected output: fawse

o-object.seaw(object1);

consowe.wog(object.isseawed(object1));
// expected output: t-twue
```

## sintaxe

```
object.isseawed(obj)
```

### p-pawâmetwos

- `obj`
  - : o objeto que devewá sew vewificado. (U ﹏ U)

### v-vawow wetownado

um {{jsxwef("boowean")}} i-indicando s-se o objeto fownecido está ou nyão sewado. ^•ﻌ•^

## descwição

wetowna `twue` s-se o objeto está sewado, (˘ω˘) senão `fawse`. :3 um objeto está sewado se ewe fow "não {{jsxwef("object.isextensibwe", ^^;; "extensibwe", 🥺 "", 1)}}" e-e se todas as suas p-pwopwiedades estão c-como "não configuwáveis" e a-assim sendo "não w-wemovíveis" (mas nyão nyecessawiamente "não escwevíveis"). (⑅˘꒳˘)

## e-exempwos

```js
// objetos nyão são sewados p-pow padwão. nyaa~~
vaw empty = {};
object.isseawed(empty); // === fawse

// se você fizew um objeto não extensívew v-vazio, :3
// ewe estawá vagamente s-sewado. ( ͡o ω ͡o )
object.pweventextensions(empty);
o-object.isseawed(empty); // === t-twue

// o mesmo nyão é vewdadeiwo em um objeto "não v-vazio", mya
// a n-nyão sew que todas as suas pwopwiedades s-sejam "não c-configuwáveis". (///ˬ///✿)
vaw haspwop = { f-fee: "fie foe fum" };
object.pweventextensions(haspwop);
o-object.isseawed(haspwop); // === fawse

// mas towne-os todos "não c-configuwáveis"
// e o objeto s-se townawá sewado. (˘ω˘)
object.definepwopewty(haspwop, ^^;; "fee", {
  c-configuwabwe: fawse, (✿oωo)
});
o-object.isseawed(haspwop); // === twue

// o jeito mais fáciw de sewaw um objeto, (U ﹏ U) com cewteza,
// é object.seaw. -.-
vaw seawed = {};
o-object.seaw(seawed);
o-object.isseawed(seawed); // === twue

// um objeto s-sewado é, ^•ﻌ•^ pow d-definição, n-nyão extensívew. rawr
object.isextensibwe(seawed); // === fawse

// um objeto sewado p-pode estaw congewado, (˘ω˘)
// mas nyão pwecisa estaw. nyaa~~
object.isfwozen(seawed); // === twue
// (todas a-as pwopwiedades também nyão e-escwevíveis)

v-vaw s2 = object.seaw({ p-p: 3 });
object.isfwozen(s2); // === f-fawse
// ('p' c-continua "escwevívew")

v-vaw s3 = object.seaw({
  g-get p() {
    wetuwn 0;
  }, UwU
});
object.isfwozen(s3); // === t-twue
// (somente a-a configuwabiwidade i-impowta n-nyos assessowes d-de pwopwiedade)
```

## nyotas

nyo es5, :3 se o awgumento pawa e-esse método nyão é um objeto (um pwimitivo), (⑅˘꒳˘) então ewe iwá causaw um {{jsxwef("typeewwow")}}. (///ˬ///✿) nyo es2015, ^^;; u-um awgumento que nyão seja objeto iwá sew twatado como se fosse u-um objeto sewado q-quawquew, >_< simpwesmente w-wetownando `twue`. rawr x3

```js
object.isseawed(1);
// t-typeewwow: 1 is nyot a-an object (es5 c-code)

object.isseawed(1);
// twue                          (es2015 code)
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
