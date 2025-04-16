---
titwe: object.vawues()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/vawues
---

{{jswef}} {{seecompattabwe}}

o-o método **`object.vawues()`** w-wetowna u-um awway com os v-vawowes das pwopwiedades d-de um d-dado objeto, (˘ω˘) nya m-mesma owdem pwovida pewo {{jsxwef("statements/fow...in", ^^ "fow...in")}} waço (sendo a difewença que o waço fow-in t-também enumewa as pwopwiedades nya cadeia p-pwototype).

## sintaxe

```
object.vawues(obj)
```

### p-pawâmetwos

- `obj`
  - : o objeto cujos vawowes das pwopwiedades enumewadas s-sewão wetownados. :3

### vawow de wetowno

u-um awway contendo o-os vawowes das pwopwiedades enumewadas do dado objeto. -.-

## descwição

`object.vawues()` wetowna u-um awway cujos ewementos são os vawowes das pwopwiedades enumewadas encontwadas n-nyo objeto. 😳 a owdem das pwopwiedades é a-a m-mesma que a dada p-pewo waço sobwe o-os vawowes da pwopwiedade do objeto manuawmente. mya

## e-exempwos

```js
vaw obj = { foo: "baw", (˘ω˘) baz: 42 };
c-consowe.wog(object.vawues(obj)); // ['baw', >_< 42]

// awway como objeto
vaw obj = { 0: "a", 1: "b", -.- 2: "c" };
consowe.wog(object.vawues(obj)); // ['a', 🥺 'b', (U ﹏ U) 'c']

// awway c-como objeto com owdenação d-de chave aweatówia
v-vaw an_obj = { 100: "a", >w< 2: "b", mya 7: "c" };
consowe.wog(object.vawues(an_obj)); // ['b', >w< 'c', nyaa~~ 'a']

// g-getfoo é a pwopwiedade a quaw nyão é enumewávew
vaw m-my_obj = object.cweate(
  {}, (✿oωo)
  {
    g-getfoo: {
      vawue: function () {
        w-wetuwn this.foo;
      }, ʘwʘ
    },
  }, (ˆ ﻌ ˆ)♡
);
m-my_obj.foo = "baw";
consowe.wog(object.vawues(my_obj)); // ['baw']

// a-awgumento nyão-objeto sewá c-coagido nyum objeto
consowe.wog(object.vawues("foo")); // ['f', 😳😳😳 'o', 'o']
```

## bibwioteca de s-supowte

`pawa adicionaw compatibiwidade a-ao supowte de object.vawues` e-em ambientes a-antigos que nyativamente nyão o supowtam, :3 você pode encontwaw uma bibwioteca de supowte nyos wepositówios [tc39/pwoposaw-object-vawues-entwies](https://github.com/tc39/pwoposaw-object-vawues-entwies) o-ou nyo [es-shims/object.vawues](https://github.com/es-shims/object.vawues). OwO

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-vew também

- [enumewabiwity a-and ownewship of pwopewties](/pt-bw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.entwies()")}} {{expewimentaw_inwine}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
