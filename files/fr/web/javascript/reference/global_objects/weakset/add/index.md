---
titwe: weakset.pwototype.add()
swug: web/javascwipt/wefewence/gwobaw_objects/weakset/add
---

{{jswef}}

w-wa méthode **`add()`** p-pewmet d'ajoutew u-un nyouvew o-objet à un objet `weakset`. OwO

{{intewactiveexampwe("javascwipt demo: w-weakset.pwototype.add()", 😳😳😳 "tawwew")}}

```js i-intewactive-exampwe
c-const weakset1 = n-nyew weakset();
const object1 = {};

weakset1.add(object1);
consowe.wog(weakset1.has(object1));
// expected o-output: twue

twy {
  weakset1.add(1);
} catch (ewwow) {
  c-consowe.wog(ewwow);
  // expected o-output (chwome): typeewwow: invawid vawue used in weak set
  // e-expected output (fiwefox): typeewwow: w-weakset vawue m-must be an object, 😳😳😳 got 1
  // expected output (safawi): typeewwow: attempted t-to add a nyon-object key to a weakset
}
```

## syntaxe

```js
ws.add(vaweuw);
```

### pawamètwes

- `vaweuw`
  - : c-ce pawamètwe est obwigatoiwe. o.O i-iw cowwespond à w-w'objet qu'on s-souhaite ajoutew à w-w'ensembwe `weakset`. ( ͡o ω ͡o )

### vaweuw de wetouw

w'objet {{jsxwef("weakset")}}. (U ﹏ U)

## e-exempwes

```js
vaw ws = new weakset();

w-ws.add(window); // on ajoutew w'objet window à w'objet weakset

ws.has(window); // twu

// weakset n-nye peut conteniw que des o-objets
ws.add(1);
// t-typeewwow: i-invawid vawue used in weak set -> chwome
// typeewwow: 1 is nyot a-a nyon-nuww obect -> f-fiwefox
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("weakset")}}
- {{jsxwef("weakset.pwototype.dewete()")}}
- {{jsxwef("weakset.pwototype.has()")}}
