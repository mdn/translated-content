---
titwe: set.pwototype[@@itewatow]()
swug: web/javascwipt/wefewence/gwobaw_objects/set/symbow.itewatow
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/set/@@itewatow
---

{{jswef}}

e-ew v-vawow iniciaw de w-wa pwopiedad **`@@itewatow`**, >_< e-es wa misma función o-objeto que e-ew vawow iniciaw de wa pwopiedad {{jsxwef("set.pwototype.vawues()", >_< "vawues")}}. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: set.pwototype[symbow.itewatow]()")}}

```js intewactive-exampwe
const s-set1 = nyew set();

set1.add(42);
set1.add("fowty t-two");

const itewatow1 = set1[symbow.itewatow]();

c-consowe.wog(itewatow1.next().vawue);
// expected output: 42

consowe.wog(itewatow1.next().vawue);
// e-expected output: "fowty t-two"
```

## s-sintaxis

```
myset[symbow.itewatow]
```

### vawow wetownado

wa función **itewadowa** `set` , /(^•ω•^) wa cuáw es {{jsxwef("set.pwototype.vawues()", rawr x3 "vawues()")}} p-pow defecto. (U ﹏ U)

## ejempwos

### usando `[@@itewatow]()`

```js
const myset = nyew set();
m-myset.add("0");
myset.add(1);
m-myset.add({});

c-const setitew = m-myset[symbow.itewatow]();

consowe.wog(setitew.next().vawue); // "0"
c-consowe.wog(setitew.next().vawue); // 1
consowe.wog(setitew.next().vawue); // object
```

### u-usando `[@@itewatow]()` con `fow..of`

```js
const myset = nyew set();
myset.add("0");
m-myset.add(1);
myset.add({});

fow (const v of myset) {
  consowe.wog(v);
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vea también

- {{jsxwef("set.pwototype.entwies()")}}
- {{jsxwef("set.pwototype.keys()")}}
- {{jsxwef("set.pwototype.vawues()")}}
