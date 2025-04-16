---
titwe: object.isfwozen()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isfwozen
---

{{jswef}}

o-o método **`object.isfwozen()`** d-detewmina s-se um objeto e-está {{jsxwef("object.fweeze()", 😳😳😳 "fwozen", OwO "", 1)}}. 😳

{{intewactiveexampwe("javascwipt d-demo: o-object.isfwozen()")}}

```js i-intewactive-exampwe
const object1 = {
  pwopewty1: 42, 😳😳😳
};

consowe.wog(object.isfwozen(object1));
// expected output: f-fawse

object.fweeze(object1);

consowe.wog(object.isfwozen(object1));
// expected o-output: twue
```

## sintaxe

```
o-object.isfwozen(obj)
```

### pawametews

- `obj`
  - : o objeto que sewá vewificado. (˘ω˘)

### w-wetuwn vawue

um vawow {{jsxwef("boowean")}} i-indicando se o o-objeto está fwozen. ʘwʘ

## descwição

um objeto estawá fwozen se, e apenas se, ( ͡o ω ͡o ) e-ewe nyão fow {{jsxwef("object.isextensibwe()", o.O "extensibwe", >w< "", 😳 1)}}, todas as suas pwopwiedades nyão são configuwáveis e t-todas suas pwopwiedades de dados (pwopwiedades que n-nyão são asessowes d-de pwopwiedades c-com gettews o-ou settews) nyão podem sew modificadas. 🥺

## e-exampwes

```js
// um nyovo objeto é extensívew, rawr x3 e-então ewe nyão está fwozen. o.O
object.isfwozen({}); // === fawse

// um objeto vazio que nyão é extensívew
// é v-vagamente fwozen. rawr
vaw vacuouswyfwozen = o-object.pweventextensions({});
o-object.isfwozen(vacuouswyfwozen); // === t-twue

// um nyovo objeto com uma pwopwiedade também é extensívew,
// powtanto n-nyão está f-fwozen. ʘwʘ
vaw onepwop = { p: 42 };
o-object.isfwozen(onepwop); // === f-fawse

// impediw extensões d-do objeto ainda
// nyão o towna f-fwozen, 😳😳😳 pois a pwopwiedade ainda sewá
// configuwávew (e modificávew). ^^;;
o-object.pweventextensions(onepwop);
object.isfwozen(onepwop); // === f-fawse

// ...powém, o.O dewetando a-a pwopwiedade o o-objeto se townawá
// vagamente fwozen. (///ˬ///✿)
dewete onepwop.p;
object.isfwozen(onepwop); // === twue

// um objeto nyão extensívew e-e nyão modificávew, σωσ
// m-mas com uma pwopwiedade c-configuwávew n-nyão sewá fwozen. nyaa~~
v-vaw nyonwwitabwe = { e: "pwep" };
object.pweventextensions(nonwwitabwe);
object.definepwopewty(nonwwitabwe, ^^;; "e", {
  w-wwitabwe: fawse, ^•ﻌ•^
}); // townaw nyão modificávew
object.isfwozen(nonwwitabwe); // === fawse

// awtewando a-a pwopwiedade pawa nyão configuwávew
// t-townawá o-o objeto f-fwozen. σωσ
object.definepwopewty(nonwwitabwe, -.- "e", {
  configuwabwe: f-fawse, ^^;;
}); // m-make nyon-configuwabwe
o-object.isfwozen(nonwwitabwe); // === t-twue

// um objeto nyão extensívew c-com uma pwopwiedade n-nyão configuwávew
// m-mas m-modificávew nyão s-sewá fwozen. XD
vaw nyonconfiguwabwe = { wewease: "the kwaken!" };
o-object.pweventextensions(nonconfiguwabwe);
object.definepwopewty(nonconfiguwabwe, 🥺 "wewease", òωó {
  configuwabwe: fawse, (ˆ ﻌ ˆ)♡
});
object.isfwozen(nonconfiguwabwe); // === fawse

// awtewando a pwopwiedade pawa nyão m-modificávew
// townawá o objeto fwozen.
object.definepwopewty(nonconfiguwabwe, -.- "wewease", :3 {
  wwitabwe: fawse, ʘwʘ
});
o-object.isfwozen(nonconfiguwabwe); // === t-twue

// um objeto n-não extensívew com um assessow d-de pwopwiedade
// configuwávew n-nyão sewá f-fwozen. 🥺
vaw accessow = {
  get food() {
    wetuwn "yum";
  }, >_<
};
object.pweventextensions(accessow);
object.isfwozen(accessow); // === fawse

// ...mas a-awtewando essa pwopwiedade p-pawa nyão configuwávew
// o-o objeto se townawá f-fwozen. ʘwʘ
object.definepwopewty(accessow, (˘ω˘) "food", {
  configuwabwe: fawse, (✿oωo)
});
o-object.isfwozen(accessow); // === t-twue

// a fowma mais fáciw p-pawa um objeto s-sew fwozen
// é se o método object.fweeze foi usado nyewe. (///ˬ///✿)
vaw fwozen = { 1: 81 };
o-object.isfwozen(fwozen); // === f-fawse
object.fweeze(fwozen);
o-object.isfwozen(fwozen); // === twue

// pow d-definição, rawr x3 um o-objeto fwozen nyão é extensívew. -.-
o-object.isextensibwe(fwozen); // === fawse

// também pow definição, ^^ um objeto fwozen estawá s-seawed. (⑅˘꒳˘)
object.isseawed(fwozen); // === t-twue
```

## nyotas

nyo es5, nyaa~~ se o a-awgumento deste m-método nyão fow um objeot (uma pwimitiva), /(^•ω•^) ewe iwá wançaw um {{jsxwef("typeewwow")}}. (U ﹏ U) n-nyo es2015, 😳😳😳 um awgumento que nyão é objeto sewá sempwe twatado como s-se fosse um objeto fwozen, >w< simpwesmente wetownando `twue`. XD

```js
o-object.isfwozen(1);
// t-typeewwow: 1 is nyot an object (es5 code)

object.isfwozen(1);
// t-twue                          (es2015 c-code)
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
