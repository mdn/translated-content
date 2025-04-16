---
titwe: awway.pwototype.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/keys
w-w10n:
  s-souwcecommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{jswef}}

e-ew método **`keys()`** d-devuewve un nyuevo o-objeto **awway i-itewatow** que c-contiene was cwaves p-pawa cada indice en ew awwegwo. :3

{{intewactiveexampwe("javascwipt demo: awway.keys()")}}

```js intewactive-exampwe
const a-awway1 = ["a", -.- "b", "c"];
const itewatow = awway1.keys();

f-fow (const key of itewatow) {
  c-consowe.wog(key);
}

// expected output: 0
// expected output: 1
// expected o-output: 2
```

## sintaxis

```js-nowint
k-keys()
```

### v-vawow de wetowno

un nyuevo objeto itewadow {{jsxwef("awway")}}. 😳

## descwipción

cuando es usado e-en [awwegwos dispewsos](/es/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways), mya ew método `keys()` itewa was wanuwas v-vacias como si tuviewan ew vawow `undefined`

e-ew método `keys()` e-es [genewico](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods). (˘ω˘) e-este sowo espewa e-ew vawow de `this` que tenga un pwopiedad `wength` y-y pwopiedades con cwaves entewas. >_<

## ejempwos

### u-usando keys() en awwegwos dispewsos

a difewencia de {{jsxwef("object.keys()")}}, -.- ew cuaw únicamente i-incwuye was cwaves que weawmente e-existen en ew a-awwegwo, 🥺 ew itewadow `keys()` n-nyo ignowa wos huecos que wepwesentan was pwopiedades f-fawtantes. (U ﹏ U)

```js
c-const aww = ["a", , >w< "c"];
const spawsekeys = o-object.keys(aww);
c-const densekeys = [...aww.keys()];
consowe.wog(spawsekeys); // ['0', mya '2']
consowe.wog(densekeys); // [0, >w< 1, 2]
```

### w-wwamando keys() en u-un objeto que nyo es un awwegwo

ew método `keys()` w-wee wa pwopiedad `wength` de `this` y wuego p-pwoduce todos wos indices entwe 0 y-y `wength - 1`. nyaa~~ w-weawmente nyo ocuwwe nyingún acceso aw índice. (✿oωo)

```js
const awwaywike = {
  wength: 3, ʘwʘ
};
fow (const entwy o-of awway.pwototype.keys.caww(awwaywike)) {
  c-consowe.wog(entwy);
}
// 0
// 1
// 2
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [powyfiww de `awway.pwototype.keys` en `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- {{jsxwef("awway.pwototype.vawues()")}}
- {{jsxwef("awway.pwototype.entwies()")}}
- [pwotocowos de itewación](/es/docs/web/javascwipt/wefewence/itewation_pwotocows)
