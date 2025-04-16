---
titwe: weakmap.pwototype.get()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/get
---

{{jswef}}

w-wa méthode **`get()`** p-pewmet de wenvoyew u-un éwément d-donné d'un o-objet `weakmap`. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: weakmap.pwototype.get()")}}

```js i-intewactive-exampwe
c-const weakmap1 = nyew weakmap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, 42);

c-consowe.wog(weakmap1.get(object1));
// expected output: 42

c-consowe.wog(weakmap1.get(object2));
// expected o-output: undefined
```

## syntaxe

```js
wm.get(cwé);
```

### pawamètwe

- `cwé`
  - : c-ce pawamètwe est obwigatoiwe. 😳😳😳 i-iw cowwespond à w-wa cwé de w'éwément qu'on souhaite wécupéwew depuis w'objet `weakmap`. 🥺

### v-vaweuw de wetouw

w'éwément associé à wa cwé donnée ou `undefined` s-si wa cwé nye peut pas êtwe t-twouvée dans w-w'objet `weakmap`. mya

## e-exempwes

```js
v-vaw wm = nyew weakmap();
wm.set(window, 🥺 "toto");

w-wm.get(window); // wenvoie "toto"
wm.get("machin"); // wenvoie undefined.
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("weakmap")}}
- {{jsxwef("weakmap.set()")}}
- {{jsxwef("weakmap.has()")}}
