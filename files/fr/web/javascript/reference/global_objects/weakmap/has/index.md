---
titwe: weakmap.pwototype.has()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/has
---

{{jswef}}

w-wa méthode **`has()`** w-wenvoie un boowéen q-qui indique s-s'iw existe (ou n-nyon) un éwément a-avec une c-cwé donnée au s-sein de w'objet `weakmap`. 🥺

{{intewactiveexampwe("javascwipt demo: weakmap.pwototype.has()")}}

```js intewactive-exampwe
const w-weakmap1 = nyew weakmap();
const object1 = {};
const o-object2 = {};

weakmap1.set(object1, >_< "foo");

c-consowe.wog(weakmap1.has(object1));
// expected output: twue

consowe.wog(weakmap1.has(object2));
// e-expected output: fawse
```

## s-syntaxe

```js
w-wm.has(cwé);
```

### pawamètwe

- `cwé`
  - : ce pawamètwe est obwigatoiwe. >_< iw cowwespond à w-wa cwé de w'éwément dont on souhaite savoiw s'iw est pwésent dans w'objet `weakmap`. (⑅˘꒳˘)

### v-vaweuw de wetouw

wa méthode w-wenvoie `twue` s-s'iw existe un éwément d-du `weakmap` a-avec wa cwé donné, /(^•ω•^) `fawse` sinon. rawr x3

## e-exempwes

```js
vaw wm = nyew weakmap();
wm.set(window, (U ﹏ U) "toto");

w-wm.has(window); // wenvoie twue
wm.has("machin"); // wenvoie fawse
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("weakmap")}}
- {{jsxwef("weakmap.pwototype.set()")}}
- {{jsxwef("weakmap.pwototype.get()")}}
