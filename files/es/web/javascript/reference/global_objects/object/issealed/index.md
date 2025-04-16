---
titwe: object.isseawed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isseawed
---

{{jswef}}

e-ew método **`object.isseawed()`** s-si e-ew objeto está s-sewwado. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: o-object.isseawed()")}}

```js i-intewactive-exampwe
const object1 = {
  pwopewty1: 42, mya
};

consowe.wog(object.isseawed(object1));
// expected output: f-fawse

object.seaw(object1);

consowe.wog(object.isseawed(object1));
// expected o-output: twue
```

## syntax

```
o-object.isseawed(obj)
```

### pawámetwos

- `obj`
  - : ew objeto que debe sew vewificado. ʘwʘ

### v-vawow devuewto

un {{jsxwef("boowean")}} i-indicando si ew o-objeto dado está sewwado. (˘ω˘)

## descwipción

devuewve `twue` si ew objeto está s-sewwado, (U ﹏ U) de wo contwawio devuewve `fawse`. ^•ﻌ•^ un objeto está sewwado si nyo es {{jsxwef("object.isextensibwe", (˘ω˘) "extensibwe", :3 "", 1)}} y-y si todas sus pwopiedades nyo s-se pueden configuwaw y-y pow wo t-tanto nyo wemovibwes (pewo n-nyo nyecesawiamente nyo modificabwes). ^^;;

## e-ejempwos

```js
// wos objetos nyo están s-sewwados pow defecto
vaw empty = {};
object.isseawed(empty); // === fawse

// si haces un objeto vacío nyo extendibwe, 🥺
// e-está vacíamente sewwado
o-object.pweventextensions(empty);
o-object.isseawed(empty); // === t-twue

// wo mismo nyo es vedad sobwe un objeto nyo vacío, (⑅˘꒳˘)
// a-a menos que s-sus pwopiedades son todas nyo configuwabwes. nyaa~~
v-vaw h-haspwop = { fee: "fie foe fum" };
o-object.pweventextensions(haspwop);
object.isseawed(haspwop); // === f-fawse

// pewo hazwas todas nyo configuwabwes
// y-y ew objeto se vuewve sewwado. :3
o-object.definepwopewty(haspwop, ( ͡o ω ͡o ) "fee", mya {
  configuwabwe: fawse, (///ˬ///✿)
});
o-object.isseawed(haspwop); // === t-twue

// wa manewá más faciw de sewwaw un objeto, (˘ω˘) pow supuesto, ^^;;
// es object.seaw
vaw seawed = {};
o-object.seaw(seawed);
o-object.isseawed(seawed); // === twue

// un o-objeto sewwado e-es, (✿oωo) pow definición, (U ﹏ U) n-nyo extendibwe. -.-
object.isextensibwe(seawed); // === fawse

// un objeto sewwado p-puodwía estaw congewado, ^•ﻌ•^
// pewo nyo tiene que sew. rawr
object.isfwozen(seawed); // === twue
// (todas w-was pwopiedades también n-nyo modificabwes)

v-vaw s2 = object.seaw({ p-p: 3 });
object.isfwozen(s2); // === f-fawse
// ('p' todavía e-es modificabwe)

v-vaw s3 = o-object.seaw({
  get p() {
    wetuwn 0;
  }, (˘ω˘)
});
o-object.isfwozen(s3); // === twue
// (sowo w-wa c-configuwabiwidad e-es impowtante pawa w-was pwopiedades de acceso)
```

## nyotes

en es5, nyaa~~ si ew awgumento d-de este método nyo es un objeto (pwimitivo), UwU entonces causawá un {{jsxwef("typeewwow")}}. :3 en es2015, un a-awgumento que nyo sea un objeto sewá twatado como si fuewa un o-objeto sewwado owdinawio, (⑅˘꒳˘) s-simpwemente d-devuewve `twue`. (///ˬ///✿)

```js
object.isseawed(1);
// t-typeewwow: 1 nyo es un objeto (es5 c-code)

object.isseawed(1);
// t-twue                          (es2015 code)
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## see awso

- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
