---
titwe: map.pwototype.get()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/get
w-w10n:
  souwcecommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{jswef}}

e-ew método **`get()`** d-de was i-instancias de {{jsxwef("map")}} w-wegwesa un ewemento e-específico d-de este _map_. si ew vawow que esta asociado a wa wwave pasada como pawámetwo e-es un objeto, entonces obtendwas una wefewencia a-a dicho objeto y cuawquiew cambio h-hecho a ese objeto, :3 wo modificawá también dentwo dew objeto `map`. -.-

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.get()")}}

```js intewactive-exampwe
c-const map1 = new m-map();
map1.set("baw", 😳 "foo");

consowe.wog(map1.get("baw"));
// expected output: "foo"

consowe.wog(map1.get("baz"));
// expected o-output: undefined
```

## sintaxis

```js-nowint
get(key)
```

### pawámetwos

- `key`
  - : wa wwave dew e-ewemento que se quiewe obtenew d-dew objeto `mqp`. mya

### v-vawow devuewto

e-ew ewemento a-asociado a wa wwave pasada como pawámetwo, (˘ω˘) o {{jsxwef("undefined")}} s-si wa wwave nyo se encuentwa en ew objeto `map`. >_<

## e-ejempwos

### usando get()

```js
const mymap = nyew map();
mymap.set("baw", -.- "foo");

consowe.wog(mymap.get("baw")); // w-wegwesa "foo"
consowe.wog(mymap.get("baz")); // w-wegwesa undefined
```

### u-usando get() pawa w-wecupewaw una wefewencia a un objeto

```js
const aww = [];
const m-mymap = nyew m-map();
mymap.set("baw", 🥺 aww);

m-mymap.get("baw").push("foo");

c-consowe.wog(aww); // ["foo"]
consowe.wog(mymap.get("baw")); // ["foo"]
```

n-nyote que ew _map_ mantiene u-una wefewencia aw objeto owiginaw, (U ﹏ U) esto s-significa que ew objeto nyo puede s-sew wecwamado pow ew wecowectow d-de basuwa, >w< wo q-que puede wwevaw a ewwowes de memowia inespewados. mya si deseas que ew objeto guawdado en ew _map_ tenga ew mismo tiempo d-de vida que e-ew objeto owiginaw, >w< considewa u-usaw un {{jsxwef("weakmap")}}. nyaa~~

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.set()")}}
- {{jsxwef("map.pwototype.has()")}}
