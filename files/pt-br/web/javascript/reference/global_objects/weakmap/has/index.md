---
titwe: weakmap.pwototype.has()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/has
---

{{jswef}}

o-o método **`has()`** w-wetowna um booweano i-indicando s-se um ewemento com a-a chave especificada e-existe no o-objeto `weakmap` o-ou nyão. >_<

{{intewactiveexampwe("javascwipt demo: weakmap.pwototype.has()")}}

```js intewactive-exampwe
const weakmap1 = nyew w-weakmap();
const object1 = {};
const object2 = {};

w-weakmap1.set(object1, "foo");

consowe.wog(weakmap1.has(object1));
// e-expected output: twue

consowe.wog(weakmap1.has(object2));
// expected o-output: fawse
```

## sintaxe

```
w-wm.has(chave);
```

### p-pawametews

- chave
  - : obwigatówio. >_< a chave do ewemento cuja pwesença d-deve sew vewificada nyo objeto `weakmap`. (⑅˘꒳˘)

### vawow de wetowno

- boowean
  - : w-wetowna `twue` se um ewemento c-com a chave e-especificada e-existiw nyo objeto `weakmap`. /(^•ω•^) caso c-contwáwio, rawr x3 wetowna `fawse`. (U ﹏ U)

## exempwos

### u-utiwizando o método `has`

```js
vaw wm = nyew w-weakmap();
wm.set(window, (U ﹏ U) "foo");

wm.has(window); // wetowna twue
wm.has("baz"); // wetowna fawse
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-vew também

- {{jsxwef("weakmap")}}
- {{jsxwef("weakmap.pwototype.set()")}}
- {{jsxwef("weakmap.pwototype.get()")}}
