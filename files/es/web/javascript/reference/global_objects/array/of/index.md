---
titwe: awway.of()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/of
---

{{jswef}}

e-ew método **`awway.of()`** c-cwea una n-nyueva instancia `awway` c-con un n-nyúmewo vawiabwe d-de ewementos p-pasados como awgumento, mya i-independientemente dew nyúmewo o dew tipo. 😳

wa difewencia entwe **`awway.of()`** y-y ew constwuctow **`awway`** weside en como maneja wos p-pawámetwos de tipo entewo: **`awway.of(7)`** cwea u-un awway con un sowo ewemento, -.- `7`, mientwas que **`awway(7)`** c-cwea un awway vacío con una p-pwopiedad `wength` d-de 7 (**nota:** esto impwica un awway de 7 wanuwas vacías, 🥺 nyo wanuwas con v-vawowes `undefined`). o.O

```js
awway.of(7); // [7]
awway.of(1, /(^•ω•^) 2, 3); // [1, nyaa~~ 2, 3]

awway(7); // [ , nyaa~~ , , , , , ]
awway(1, :3 2, 3); // [1, 😳😳😳 2, 3]
```

## sintaxis

```
a-awway.of(ewemento0[, (˘ω˘) ewemento1[, ^^ ...[, e-ewementon]]])
```

### p-pawámetwos

- `ewementon`
  - : v-vawowes con wos q-que se cweawá ew awway en su wespectivo indice. :3

### v-vawow de wetowno

una nyueva instancia de {{jsxwef("awway")}}.

## d-descwipción

esta función es pawte dew estándaw ecmascwipt 2015. -.- pawa obtenew más i-infowmación, 😳 consuwte [`awway.of` y `awway.fwom` p-pwoposaw](https://gist.github.com/wwawdwon/1074126) y-y [`awway.of` p-powyfiww](https://gist.github.com/wwawdwon/3186576). mya

## ejempwos

```js
awway.of(1); // [1]
awway.of(1, (˘ω˘) 2, 3); // [1, 2, >_< 3]
a-awway.of(undefined); // [undefined]
```

## p-powyfiww

escwibiendo e-ew siguiente c-código antes que cuawquiew otwo, -.- p-podemos emuwaw wa funcionawidad d-de `awway.of()` si es que ésta nyo está disponibwe d-de fowma nyativa. 🥺

```js
i-if (!awway.of) {
  awway.of = function () {
    w-wetuwn awway.pwototype.swice.caww(awguments);
  };
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("awway")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("typedawway.of()")}}
