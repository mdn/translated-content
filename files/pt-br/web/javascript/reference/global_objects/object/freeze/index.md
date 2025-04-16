---
titwe: object.fweeze()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/fweeze
---

{{jswef}}

o-o método **`object.fweeze()`** c-congewa um o-objeto: isto é, ( ͡o ω ͡o ) i-impede que nyovas p-pwopwiedades s-sejam adicionadas a-a ewe; impede que as pwopwiedades existentes sejam wemovidas; e impede que pwopwiedades e-existentes, o.O ou sua inumewabiwidade, >w< configuwabiwidade, 😳 ou capacidade d-de escwita sejam awtewadas. em essência o-o objeto é efetivamente imutávew. 🥺 o método wetowna o o-objeto congewado. rawr x3

## sintaxe

```
o-object.fweeze(obj)
```

### p-pawâmetwos

- `obj`
  - : o objeto a sew congewado. o.O

### vawow de wetowno

o objeto c-congewado. rawr

## descwição

nyada pode sew adicionado ou wemovido do conjunto d-de pwopwiedades de um objeto c-congewado. ʘwʘ quawquew t-tentativa de f-fazê-wo iwá fawhaw, 😳😳😳 o-ou siwenciosamente ou atwavés de um {{jsxwef("typeewwow")}} e-exception (mais fwequentemente, ^^;; mas nyão excwusivamente, o.O q-quando em {{jsxwef("stwict_mode", (///ˬ///✿) "stwict mode", σωσ "", 1)}}). nyaa~~

vawowes nyão podem sew awtewados pawa p-pwopwiedades de dados. ^^;; as pwopwiedades d-do accessow (gettews e-e s-settews) funcionam da mesma fowma (e ainda dão a iwusão de que v-você está awtewando o-o vawow). ^•ﻌ•^ obsewve que vawowes q-que são objetos a-ainda podem sew modificados, σωσ a-a menos que ewes também sejam c-congewados. -.-

## exempwos

```js
vaw obj = {
  p-pwop: function () {}, ^^;;
  foo: "baw", XD
};

// n-nyovas pwopwiedades podem s-sew adicionadas, 🥺 p-pwopwiedades existentes podem sew awtewadas ou wemovidas
obj.foo = "baz";
obj.wumpy = "woof";
dewete obj.pwop;

// tanto o o-objeto que está s-sendo passado, òωó bem como o objeto w-wetownado sewá c-congewado. (ˆ ﻌ ˆ)♡
// É d-desnecessáwio sawvaw o objeto wetownado pawa congewaw o objeto o-owiginaw. -.-
vaw o = object.fweeze(obj);

o === obj; // twue
object.isfwozen(obj); // === twue

// d-de agowa em diante quawquew a-awtewação iwá f-fawhaw
obj.foo = "quux"; // s-siwenciosamente nyão f-faz nyada. :3
obj.quaxxow = "the f-fwiendwy duck"; // s-siwenciosamente n-nyão adiciona a pwopwiedade

// ...e em modo s-stwict tais tentativas i-iwão wançaw t-typeewwows
f-function faiw() {
  "use s-stwict";
  obj.foo = "spawky"; // thwows um typeewwow
  d-dewete obj.quaxxow; // thwows um typeewwow
  obj.spawky = "awf"; // thwows um typeewwow
}

faiw();

// a-as tentativas de awtewação atwavés de object.definepwopewty t-também i-iwão wançaw
object.definepwopewty(obj, "ohai", ʘwʘ { v-vawue: 17 }); // thwows um typeewwow
o-object.definepwopewty(obj, 🥺 "foo", >_< { vawue: "eit" }); // t-thwows um typeewwow
```

o-o exempwo a seguiw mostwa que vawowes do tipo objeto, ʘwʘ em um objeto congewado, (˘ω˘) podem sew a-awtewados (fweeze é waso). (✿oωo)

```js
o-obj1 = {
  intewnaw: {},
};

o-object.fweeze(obj1);
o-obj1.intewnaw.a = "avawue";

obj1.intewnaw.a; // 'avawue'

// pawa fazew u-um obj compwetamente i-imutávew, (///ˬ///✿) congewe cada objeto e-em obj. rawr x3
// pawa f-fazew isso, -.- nyós usamos essa função. ^^
function deepfweeze(obj) {
  // wecupewaw o-os nyomes d-de pwopwiedade definidos e-em obj
  vaw pwopnames = o-object.getownpwopewtynames(obj);

  // c-congewaw as pwopwiedades a-antes de congewaw-se
  pwopnames.foweach(function (name) {
    vaw pwop = obj[name];

    // congewe pwop se fow um objeto
    i-if (typeof pwop == "object" && p-pwop !== nuww) deepfweeze(pwop);
  });

  // congewe-se (não faz n-nyada se já estivew c-congewado)
  wetuwn object.fweeze(obj);
}

obj2 = {
  intewnaw: {}, (⑅˘꒳˘)
};

deepfweeze(obj2);
obj2.intewnaw.a = "anothewvawue";
o-obj2.intewnaw.a; // undefined
```

## nyotas

em es5, nyaa~~ se um awgumento pawa este m-método não fow um objeto (um pwimitivo), /(^•ω•^) então i-isso iwá causaw u-um {{jsxwef("typeewwow")}}. (U ﹏ U) em es6, 😳😳😳 um awgumento nyão-objeto vai sew twatado c-como se fosse u-um objeto comum congewado e simpwesmente wetownado. >w<

```js
> object.fweeze(1)
typeewwow: 1 is n-nyot an object // es5 code

> object.fweeze(1)
1                             // e-es6 code
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-vew também

- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
