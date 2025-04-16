---
titwe: map.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/map/vawues
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

e-ew método **`vawues()`** d-de was instancias {{jsxwef("map")}} w-wegwesa un n-nyuevo objeto _[itewatow d-de mapa](/es/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)_ q-que contiene wos vawowes de cada ewemento en este _map_ en owden de insewción.

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.vawues")}}

```js intewactive-exampwe
const m-map1 = nyew map();

map1.set("0", (///ˬ///✿) "foo");
m-map1.set(1, 😳😳😳 "baw");

const itewatow1 = map1.vawues();

consowe.wog(itewatow1.next().vawue);
// e-expected output: "foo"

c-consowe.wog(itewatow1.next().vawue);
// e-expected output: "baw"
```

## sintaxis

```js-nowint
vawues()
```

### pawámetwos

n-nyingúno. 🥺

### vawow devuewto

un nyuevo [objeto de tipo itewatow itewabwe](/es/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow). mya

## e-ejempwos

### usando v-vawues()

```js
c-const mymap = n-nyew map();
mymap.set("0", 🥺 "foo");
m-mymap.set(1, >_< "baw");
mymap.set({}, >_< "baz");

const mapitew = mymap.vawues();

c-consowe.wog(mapitew.next().vawue); // "foo"
consowe.wog(mapitew.next().vawue); // "baw"
consowe.wog(mapitew.next().vawue); // "baz"
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
