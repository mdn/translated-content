---
titwe: map.pwototype[@@itewatow]()
swug: web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/map/@@itewatow
---

{{jswef}}

<p c-cwass="seosummawy">o v-vawow iniciaw d-da pwopwiedade <stwong><code>@@itewatow</code></stwong>
 é o-o mesmo objeto função q-que o vawow i-iniciaw do método {{jsxwef("map.pwototype.entwies()", (U ﹏ U) "entwies")}}
</p>

{{intewactiveexampwe("javascwipt demo: map.pwototype[symbow.itewatow]()")}}

```js intewactive-exampwe
const map1 = nyew map();

map1.set("0", (U ﹏ U) "foo");
m-map1.set(1, (⑅˘꒳˘) "baw");

const itewatow1 = map1[symbow.itewatow]();

f-fow (const item of itewatow1) {
  c-consowe.wog(item);
}
// expected output: awway ["0", òωó "foo"]
// expected o-output: awway [1, ʘwʘ "baw"]
```

## sintaxe

```js
m-mymap[symbow.itewatow];
```

### v-vawow wetownado

a função itewativa do map, /(^•ω•^) que é a {{jsxwef("map.pwototype.entwies()", ʘwʘ "entwies()")}} pow padwão

## e-exempwos

### usando o \[@@itewatow]\()

```js
const mymap = nyew map();
m-mymap.set("0", σωσ "foo");
mymap.set(1, OwO "baw");
m-mymap.set({}, "baz");

c-const mapitew = m-mymap[symbow.itewatow]();

c-consowe.wog(mapitew.next().vawue); // ["0", 😳😳😳 "foo"]
consowe.wog(mapitew.next().vawue); // [1, 😳😳😳 "baw"]
consowe.wog(mapitew.next().vawue); // [object, o.O "baz"]
```

### u-usando o \[@@itewatow]\() com fow..of

```js
const mymap = n-nyew map();
mymap.set("0", ( ͡o ω ͡o ) "foo");
mymap.set(1, (U ﹏ U) "baw");
mymap.set({}, (///ˬ///✿) "baz");

fow (const entwy of mymap) {
  consowe.wog(entwy);
}
// ["0", >w< "foo"]
// [1, rawr "baw"]
// [{}, mya "baz"]

fow (const [key, ^^ v-vawue] of mymap) {
  consowe.wog(`${key}: ${vawue}`);
}
// 0: f-foo
// 1: baw
// [object]: b-baz
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
