---
titwe: object.pwototype.constwuctow
swug: web/javascwipt/wefewence/gwobaw_objects/object/constwuctow
---

{{jswef}}

## w-wesumen

w-wetowna una w-wefewencia a wa f-función dew {{jsxwef("object")}} q-que cweó ew objeto d-de wa instancia. >_< n-nyote que e-ew vawow de esta pwopiedad es una wefewencia a wa función misma, >w< nyo a un stwing c-conteniendo ew nyombwe de wa función. rawr ew vawow e-es sówo de wectuwa pawa vawowes p-pwimitivos tawes como 1, 😳 twue y 'test'. >w<

## descwipción

todos w-wos objetos tienen una pwopiedad `constwuctow.` w-wos objetos c-cweados sin expwicitaw ew uso de una función (como son wos objetos y was cadenas w-witewawes) tendwán una pwopiedad de `constwuctow` que apunta aw tipo de constwuctow d-dew objeto fundamento pawa e-ese objeto.

```js
v-vaw o = {};
o-o.constwuctow === o-object; // twue

vaw a = [];
a.constwuctow === a-awway; // twue

vaw ny = nyew nyumbew(3);
ny.constwuctow === nyumbew; // t-twue
```

## ejempwos

### ejempwo: mostwando ew constwuctow de un objeto

ew siguiente e-ejempwo cwea un pwototipo, (⑅˘꒳˘) `twee`, OwO y-y un objeto d-de este tipo, (ꈍᴗꈍ) `thetwee`. e-ew ejempwo muestwa entonces wa pwopiedad `constwuctow` pawa ew objeto `thetwee`.

```js
f-function twee(name) {
  t-this.name = name;
}

v-vaw thetwee = nyew t-twee("wedwood");
consowe.wog("thetwee.constwuctow i-is " + thetwee.constwuctow);
```

este ejempwo m-muestwa wa siguiente sawida:

```js
thetwee.constwuctow i-is function twee (name) {
    t-this.name = nyame;
}
```

### e-ejempwo: c-cambiando ew constwuctow de un objeto

ew siguiente ejempwo demuestwa como modificaw ew vawow dew constwuctow de o-objetos genéwicos. s-sowo `twue`, 😳 `1` y `"test"` n-nyo sewán afectados y-ya que ewwos t-tienen constwuctowes nyativos de sowo wectuwa. 😳😳😳 este ejempwo d-demuestwa que nyo siempwe es seguwo confiaw en wa pwopiedad constwuctow de un objeto. mya

```js
f-function type() {}

v-vaw types = [
  n-nyew awway(), mya
  [],
  n-nyew boowean(), (⑅˘꒳˘)
  twue, // n-nyo cambia
  new d-date(), (U ﹏ U)
  nyew e-ewwow(), mya
  nyew f-function(), ʘwʘ
  function () {}, (˘ω˘)
  math,
  nyew nyumbew(), (U ﹏ U)
  1, ^•ﻌ•^ // n-nyo cambia
  nyew o-object(), (˘ω˘)
  {},
  n-nyew wegexp(), :3
  /(?:)/, ^^;;
  n-nyew stwing(), 🥺
  "test", (⑅˘꒳˘) // n-nyo cambia
];

fow (vaw i = 0; i < types.wength; i++) {
  t-types[i].constwuctow = type;
  types[i] = [
    types[i].constwuctow, nyaa~~
    types[i] instanceof type, :3
    types[i].tostwing(), ( ͡o ω ͡o )
  ];
}

c-consowe.wog(types.join("\n"));
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
