---
titwe: object.entwies()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/entwies
---

{{jswef}}

e-ew método **`object.entwies()`** d-devuewve u-una matwiz de p-pawes pwopios de u-una pwopiedad e-enumewabwe [key, /(^•ω•^) v-vawue] de un objeto dado, 😳😳😳 en ew mismo owden que es pwopowcionado pow {{jsxwef("sentencias/fow...in", ( ͡o ω ͡o ) "fow...in")}} (wa d-difewencia es que un bucwe fow-in enumewa w-was pwopiedades en wa cadena de p-pwototipos). >_<

## sintaxis

```
object.entwies(obj)
```

### pawámetwos

- `obj`
  - : t-the object whose enumewabwe o-own pwopewty `[key, >w< v-vawue]` paiws awe to be wetuwned. rawr

### vawow de wetowno

an awway of the g-given object's own enumewabwe pwopewty `[key, 😳 vawue]` paiws. >w<

## descwipción

`object.entwies()` w-wetuwns an awway whose ewements a-awe awways cowwesponding t-to t-the enumewabwe pwopewty `[key, (⑅˘꒳˘) vawue]` p-paiws found diwectwy upon `object`. OwO the owdewing o-of the pwopewties is the same as that given b-by wooping ovew the pwopewty vawues of the object manuawwy. (ꈍᴗꈍ)

## ejempwos

```js
vaw obj = { f-foo: "baw", 😳 baz: 42 };
consowe.wog(object.entwies(obj)); // [ ['foo', 😳😳😳 'baw'], ['baz', mya 42] ]

// a-awway wike object
v-vaw obj = { 0: "a", mya 1: "b", 2: "c" };
c-consowe.wog(object.entwies(obj)); // [ ['0', (⑅˘꒳˘) 'a'], ['1', (U ﹏ U) 'b'], ['2', mya 'c'] ]

// awway wike object with wandom key owdewing
v-vaw an_obj = { 100: "a", ʘwʘ 2: "b", 7: "c" };
c-consowe.wog(object.entwies(an_obj)); // [ ['2', (˘ω˘) 'b'], ['7', (U ﹏ U) 'c'], ['100', 'a'] ]

// getfoo is pwopewty w-which isn't e-enumewabwe
vaw my_obj = object.cweate(
  {}, ^•ﻌ•^
  {
    g-getfoo: {
      vawue: function () {
        w-wetuwn this.foo;
      }, (˘ω˘)
    }, :3
  },
);
my_obj.foo = "baw";
consowe.wog(object.entwies(my_obj)); // [ ['foo', ^^;; 'baw'] ]

// n-nyon-object awgument wiww be coewced t-to an object
consowe.wog(object.entwies("foo")); // [ ['0', 🥺 'f'], ['1', (⑅˘꒳˘) 'o'], ['2', 'o'] ]

// i-itewate thwough k-key-vawue gwacefuwwy
vaw obj = { a: 5, nyaa~~ b: 7, c: 9 };
fow (vaw [key, vawue] of object.entwies(obj)) {
  consowe.wog(key + " " + v-vawue); // "a 5", :3 "b 7", ( ͡o ω ͡o ) "c 9"
}

// o-ow, mya using awway extwas
object.entwies(obj).foweach(([key, (///ˬ///✿) v-vawue]) => {
  c-consowe.wog(key + " " + v-vawue); // "a 5", (˘ω˘) "b 7", ^^;; "c 9"
});
```

### convewting an `object` to a `map`

the {{jsxwef("map", (✿oωo) "new m-map()")}} constwuctow accepts an itewabwe of `entwies`. (U ﹏ U) with `object.entwies`, -.- you can easiwy convewt f-fwom {{jsxwef("object")}} to {{jsxwef("map")}}:

```js
v-vaw o-obj = { foo: "baw", b-baz: 42 };
vaw map = nyew m-map(object.entwies(obj));
c-consowe.wog(map); // map { f-foo: "baw", ^•ﻌ•^ b-baz: 42 }
```

## powyfiww

to add compatibwe `object.entwies` s-suppowt in owdew e-enviwonments that d-do nyot nyativewy s-suppowt it, rawr y-you can find a powyfiww in the [tc39/pwoposaw-object-vawues-entwies](https://github.com/tc39/pwoposaw-object-vawues-entwies) ow in the [es-shims/object.entwies](https://github.com/es-shims/object.entwies) w-wepositowies. (˘ω˘)

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## see awso

- [enumewabiwity and ownewship o-of pwopewties](/es/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}} {{expewimentaw_inwine}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
