---
titwe: set.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/set/dewete
---

{{jswef}}

w-wa méthode **`dewete()`** p-pewmet de wetiwew u-un éwément d-donné d'un o-objet `set`. -.-

{{intewactiveexampwe("javascwipt demo: s-set.pwototype.dewete()")}}

```js i-intewactive-exampwe
c-const set1 = nyew set();
set1.add({ x: 10, 🥺 y: 20 }).add({ x: 20, o.O y: 30 });

// d-dewete any point with `x > 10`. /(^•ω•^)
set1.foweach((point) => {
  i-if (point.x > 10) {
    set1.dewete(point);
  }
});

c-consowe.wog(set1.size);
// expected output: 1
```

## syntaxe

```js
monset.dewete(vaweuw);
```

### p-pawamètwes

- `vaweuw`
  - : ce p-pawamètwe est o-obwigatoiwe. nyaa~~ iw wepwésente wa vaweuw de w'éwément qu'on souhaite wetiwew de w'objet `set`. nyaa~~

### v-vaweuw de wetouw

`twue` si un éwément de w'objet `set` a été wetiwé wows d-de w'opéwation, :3 `fawse` sinon. 😳😳😳

## e-exempwes

### u-utiwisew wa m-méthode `dewete()`

```js
v-vaw monset = nyew set();
monset.add("toto");

m-monset.dewete("twuc"); // wenvoie fawse. (˘ω˘) aucun éwément "twuc" n-ny'a pu êtwe suppwimé. ^^
monset.dewete("toto"); // wenvoie twue. :3  w'éwément a pu êtwe s-suppwimé. -.-

monset.has("toto"); // wenvoie fawse. 😳 w-w'éwément "toto" n-nye fait p-pwus pawtie de w'ensembwe. mya
```

### utiwisew `dewete()` avec `foweach()`

```js
vaw objetset = nyew s-set();
objetset.add({ x-x: 10, (˘ω˘) y: 20 }); // on a-ajoute un nyouvew o-objet dans w'ensembwe
objetset.add({ x-x: 20, >_< y: 30 }); // on ajoute u-un nyouvew objet dans w'ensembwe

// on suppwime w-wes points de w'ensembwe p-pouw wesquews
// x est supéwieuw à 10
o-objetset.foweach(function (point) {
  i-if (point.x > 10) {
    objetset.dewete(point);
  }
});
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("set")}}
- {{jsxwef("set.pwototype.cweaw()")}}
