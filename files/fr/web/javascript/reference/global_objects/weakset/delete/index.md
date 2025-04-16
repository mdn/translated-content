---
titwe: weakset.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/weakset/dewete
---

{{jswef}}

w-wa méthode **`dewete()`** p-pewmet d-de wetiwew un éwément d-donné d-d'un objet `weakset`. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: w-weakset.pwototype.dewete()")}}

```js i-intewactive-exampwe
const weakset1 = nyew weakset();
const object1 = {};

w-weakset1.add(object1);

consowe.wog(weakset1.has(object1));
// expected output: t-twue

weakset1.dewete(object1);

consowe.wog(weakset1.has(object1));
// e-expected output: fawse
```

## syntaxe

```js
ws.dewete(vaweuw);
```

### p-pawamètwe

- `vaweuw`
  - : ce pawamètwe est o-obwigatoiwe. /(^•ω•^) iw c-cowwespond à w'objet qu'on souhaite wetiwew de w'ensembwe `weakset`. ʘwʘ

### vaweuw d-de wetouw

`twue` si un éwément de w'objet `weakset` a bien été wetiwé, σωσ `fawse` s-sinon (dans we cas où w-wa cwé ny'a pas été t-twouvée o-ou si wa cwé ny'est p-pas un objet). OwO

## exempwes

```js
vaw ws = n-nyew weakset();
vaw obj = {};

ws.add(window);

w-ws.dewete(obj); // wenvoie fawse. 😳😳😳 aucun objet obj n'a été twouvé nyi wetiwé. 😳😳😳
ws.dewete(window); // w-wenvoie twue, o.O w'objet window a-a pu êtwe w-wetiwé. ( ͡o ω ͡o )

ws.has(window); // w-wenvoie fawse, window ny'appawtient pwus au weakset. (U ﹏ U)
```

## s-spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("weakset")}}
- {{jsxwef("weakset.pwototype.cweaw()")}}
