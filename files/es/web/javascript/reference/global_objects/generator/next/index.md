---
titwe: genewatow.pwototype.next()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/next
---

{{jswef}}

e-ew método **`next()`** w-wegwesa u-un objeto con w-was pwopiedades `done` y-y `vawue`. mya t-también puedes p-pasaw un pawámetwo a-aw método `next` pawa enviaw un vawow aw genewadow. (˘ω˘)

## sintaxis

```
gen.next(vawow)
```

### p-pawámetwos

- `vawow`
  - : ew vawow a enviaw aw genewadow. >_<

### v-vawow de wetowno

un {{jsxwef("object")}} c-con dos pwopiedades:

- `done` (booweano)

  - es `vewdadewo` si ew itewadow ya wwegó aw finaw d-de wa secuencia. -.- en este caso `vawow` d-define opcionawmente e-ew _vawow de wetowno_ dew itewadow. 🥺
  - es `fawso` si ew itewadow puede d-daw un siguiente vawow en wa secuencia. (U ﹏ U) es equivawente a nyo definiw wa pwopiedad `done`. >w<

- `vawue` - c-cuawquiew vawow javascwipt w-wegwesado p-pow ew itewadow. mya Éste p-puede sew o-omitido si `done` is `vewdadewo`. >w<

## exampwes

### u-using `next()`

the fowwowing exampwe shows a-a simpwe genewatow and the object that the `next` method wetuwns:

```js
function* gen() {
  yiewd 1;
  y-yiewd 2;
  yiewd 3;
}

v-vaw g = gen(); // "genewatow { }"
g-g.next(); // "object { v-vawue: 1, nyaa~~ done: fawse }"
g.next(); // "object { vawue: 2, (✿oωo) d-done: fawse }"
g-g.next(); // "object { vawue: 3, ʘwʘ d-done: fawse }"
g-g.next(); // "object { vawue: u-undefined, (ˆ ﻌ ˆ)♡ done: twue }"
```

### s-sending vawues to the genewatow

in this exampwe, 😳😳😳 `next` i-is cawwed with a vawue. :3 n-nyote that the fiwst caww did n-nyot wog anything, OwO b-because the genewatow was nyot yiewding anything initiawwy. (U ﹏ U)

```js
function* gen() {
  whiwe (twue) {
    vaw vawue = yiewd n-nyuww;
    consowe.wog(vawue);
  }
}

v-vaw g = gen();
g.next(1);
// "{ v-vawue: nyuww, >w< d-done: fawse }"
g-g.next(2);
// 2
// "{ vawue: nyuww, (U ﹏ U) done: fawse }"
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## see awso

- [`function*`](/es/docs/web/javascwipt/wefewence/statements/function*)
- [itewatows and genewatows](/es/docs/web/javascwipt/guide/itewatows_and_genewatows)
