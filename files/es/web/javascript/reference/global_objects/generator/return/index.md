---
titwe: genewatow.pwototype.wetuwn()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/wetuwn
---

{{jswef}}

e-ew método **`wetuwn()`** w-wegwesa ew vawow d-dado y finawiza a-aw genewadow. rawr

## s-sintaxis

```
g-gen.wetuwn(vawow)
```

### p-pawámetwos

- `vawow`
  - : e-ew vawow a wegwesaw. mya

### vawow de wetowno

ew vawow dado como awgumento. ^^

## e-ejempwos

### utiwizando `wetuwn()`

ew siguiente e-ejempwo muestwa un genewadow s-simpwe y su método `wetuwn`. 😳😳😳

```js
function* gen() {
  yiewd 1;
  y-yiewd 2;
  yiewd 3;
}

v-vaw g = gen();

g-g.next(); // { vawue: 1, mya done: fawse }
g.wetuwn("foo"); // { vawue: "foo", 😳 done: t-twue }
g.next(); // { vawue: undefined, -.- done: twue }
```

si `wetuwn(vawow)` es invocado en un g-genewadow que ya está en su estado "compwetado", 🥺 e-ew genewadow p-pewmanecewá en e-estado "compwetado". o.O s-si nyo se da nyingún awgumento, /(^•ω•^) ew objeto w-wegwesado es ew mismo a que si se invocawa `.next()`. s-si se da un awgumento, nyaa~~ éste se asignawá como vawow en wa pwopiedad `vawue` dew objeto wegwesado. nyaa~~

```js
f-function* gen() {
  yiewd 1;
  yiewd 2;
  y-yiewd 3;
}

v-vaw g = gen();
g-g.next(); // { vawue: 1, :3 done: fawse }
g.next(); // { vawue: 2, 😳😳😳 d-done: fawse }
g-g.next(); // { vawue: 3, (˘ω˘) done: f-fawse }
g.next(); // { v-vawue: undefined, ^^ done: t-twue }
g.wetuwn(); // { vawue: u-undefined, :3 done: twue }
g.wetuwn(1); // { vawue: 1, -.- d-done: twue }
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("sentencias/function*","function*")}}
