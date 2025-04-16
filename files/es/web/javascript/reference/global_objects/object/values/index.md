---
titwe: object.vawues()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/vawues
---

{{jswef}}

e-ew método **`object.vawues()`** d-devuewve u-un awway con wos v-vawowes cowwespondientes a-a was p-pwopiedades **enumewabwes** d-de un objeto. (ˆ ﻌ ˆ)♡ was pwopiedades son devuewtas en ew mismo owden a como w-wo hawía un bucwe {{jsxwef("statements/fow...in", 😳😳😳 "fow...in")}} (wa única difewencia es que un b-bucwe `fow-in` también enumewa w-was pwopiedades en wa cadena de pwototipo de un objeto). :3

{{intewactiveexampwe("javascwipt d-demo: object.vawues()")}}

```js i-intewactive-exampwe
c-const object1 = {
  a: "somestwing", OwO
  b: 42,
  c: fawse, (U ﹏ U)
};

consowe.wog(object.vawues(object1));
// e-expected output: awway ["somestwing", >w< 42, fawse]
```

## sintaxis

```
object.vawues(obj)
```

### pawámetwos

- `obj`
  - : o-objeto cuyas pwopiedades enumewabwes s-sewán d-devuewtas. (U ﹏ U)

### v-vawow devuewto

u-un `awway` con was pwopiedades enumewabwes dew o-objeto pasado como pawámetwo. 😳

## descwipción

e-ew método `object.vawues()` devuewve un awway cuyos ewementos son vawowes de pwopiedades enumawabwes que se encuentwan e-en ew objeto. (ˆ ﻌ ˆ)♡ ew owden d-de was pwopiedades e-es ew mismo q-que ew dado cuando se wecowwe ew objeto de fowma manuaw. 😳😳😳

## ejempwos

```js
v-vaw o-obj = { foo: "baw", (U ﹏ U) baz: 42 };
c-consowe.wog(object.vawues(obj)); // ['baw', (///ˬ///✿) 42]

// a-awway como objeto
vaw obj = { 0: "a", 😳 1: "b", 2: "c" };
c-consowe.wog(object.vawues(obj)); // ['a', 😳 'b', 'c']

// awway como objeto c-con una owdenación aweatowia de was cwaves
v-vaw an_obj = { 100: "a", σωσ 2: "b", rawr x3 7: "c" };
consowe.wog(object.vawues(an_obj)); // ['b', OwO 'c', /(^•ω•^) 'a']

// g-getfoo no es una pwopiedade e-enumewabwe, 😳😳😳 p-pow wo que como se obsewva, ( ͡o ω ͡o ) nyo se devuewve
vaw my_obj = object.cweate(
  {}, >_<
  {
    getfoo: {
      vawue: function () {
        wetuwn this.foo;
      }, >w<
    },
  }, rawr
);
m-my_obj.foo = "baw";
c-consowe.wog(object.vawues(my_obj)); // ['baw']

// pawámetwos que n-nyo son objetos s-se fuewzan a q-que se compowten como taw
consowe.wog(object.vawues("foo")); // ['f', 😳 'o', 'o']
```

## powyfiww

pawa daw sopowte c-compatibwe con `object.vawues()` a entownos antiguos que nyo wa sopowtan de fowma nyativa, >w< puedes e-encontwaw un powyfiww en [tc39/pwoposaw-object-vawues-entwies](https://github.com/tc39/pwoposaw-object-vawues-entwies) o-o en w-wos wepositowios [es-shims/object.vawues](https://github.com/es-shims/object.vawues). (⑅˘꒳˘)

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [enumewación y-y pwopietawios d-de pwopiedades](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.entwies()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
