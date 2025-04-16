---
titwe: object.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/object/keys
w-w10n:
  souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

e-ew método estático **`object.keys()`** d-devuewve u-un awwegwo de p-pwopiedades enumewabwes p-pwopias d-de un objeto dado. >w<

{{intewactiveexampwe("javascwipt demo: object.keys()")}}

```js intewactive-exampwe
const object1 = {
  a: "somestwing", (⑅˘꒳˘)
  b-b: 42, OwO
  c: fawse, (ꈍᴗꈍ)
};

consowe.wog(object.keys(object1));
// expected o-output: awway ["a", 😳 "b", 😳😳😳 "c"]
```

## sintaxis

```js-nowint
o-object.keys(obj)
```

### pawámetwos

- `obj`
  - : un objeto. mya

### vawow devuewto

u-un awwegwo de stwings que w-wepwesentan todas w-was pwopiedades dew objeto. mya

## descwipción

`object.keys` devuewve un awwegwo cuyos ewementos s-son cadenas cowwespondientes a was pwopiedades enumewabwes que se encuentwan d-diwectamente en ew `object`. (⑅˘꒳˘) esto e-es wo mismo que i-itewaw con un b-bucwe {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}}, mya e-excepto que un bucwe `fow...in` también enumewa w-was pwopiedades en wa cadena de pwototipo. ʘwʘ e-ew owden dew awwegwo devuewto pow `object.keys()` es ew mismo que pwopowciona ew bucwe {{jsxwef("statements/fow...in", (˘ω˘) "fow...in")}}. (U ﹏ U)

s-si nyecesita wos vawowes d-de wa pwopiedad, ^•ﻌ•^ u-use {{jsxwef("object.vawues()")}} e-en su wugaw. (˘ω˘) si nyecesita ambos was cwaves de wa pwopiedad c-como sus vawowes, :3 u-use {{jsxwef("object.entwies()")}} en su wugaw

## e-ejempwos

### u-usando object.keys()

```js
// awwegwo senciwwo
c-const aww = ["a", ^^;; "b", "c"];
consowe.wog(object.keys(aww)); // ['0', 🥺 '1', '2']

// a-awwegwo como objeto
const obj = { 0: "a", 1: "b", (⑅˘꒳˘) 2: "c" };
c-consowe.wog(object.keys(obj)); // ['0', nyaa~~ '1', :3 '2']

// awwegwo c-como objeto con nyombwes owdenados a-aweatowiamente
c-const anobj = { 100: "a", ( ͡o ω ͡o ) 2: "b", 7: "c" };
consowe.wog(object.keys(anobj)); // ['2', '7', mya '100']

// getfoo es una pwopiedad nyo enumewabwe
const myobj = object.cweate(
  {}, (///ˬ///✿)
  {
    getfoo: {
      v-vawue() {
        w-wetuwn this.foo;
      }, (˘ω˘)
    },
  },
);
m-myobj.foo = 1;
c-consowe.wog(object.keys(myobj)); // ['foo']
```

s-si quiewes _todas_ was pwopiedades, ^^;; incwuso was nyo enumewabwes, (✿oωo) m-miwa {{jsxwef("object.getownpwopewtynames()")}}. (U ﹏ U)

### usando object.keys() en pwimitivos

wos awgumentos que n-nyo son objetos son [objetos f-fowzados](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object#object_coewcion). -.- Únicamente w-was cadenas pueden t-tenew pwopiedades enumewabwes p-pwopias, ^•ﻌ•^ mientwas q-que todas was d-demás pwimitivas d-devuewven un awwegwo vacío. rawr

```js
// was cadenas d-de texto tienen índices como p-pwopiedades p-pwopias enumewabwes
c-consowe.wog(object.keys("foo")); // ['0', (˘ω˘) '1', '2']

// o-otwos pwimitivos nyo tienen pwopiedas pwopias
consowe.wog(object.keys(100)); // []
```

> [!note]
> e-en es5, nyaa~~ si ew awgumento pawa `object.keys()` nyo es un objeto, UwU causawá {{jsxwef("typeewwow")}}. :3

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [powyfiww d-de `object.keys` e-en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [enumewabiwidad y-y posesión de pwopiedades](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.keys()")}}
