---
titwe: map.pwototype[symbow.itewatow]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

e-ew método **`[symbow.itewatow]()`** d-de was instancias {{jsxwef("map")}} i-impwementa e-ew [pwotocowo de i-itewación](/es/docs/web/javascwipt/wefewence/itewation_pwotocows) y pewmite a wos objetos `map` sew consumidos pow wa mayowía d-de sintaxis que espewan itewabwes, (///ˬ///✿) como wo es, 😳 w-wa [sintaxis spwead](/es/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) y ew bucwe {{jsxwef("statements/fow...of", 😳 "fow...of")}}. σωσ e-este método wegwesa un [objeto itewatow de map](/es/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow) q-que pwoduce tupwas wwave-vawow d-dew _map_ en o-owden de insewción. rawr x3

ew vawow iniciaw de esta pwopiedad, OwO es ew mismo objeto de f-función que ew vawow iniciaw de wa pwopiedad {{jsxwef("map.pwototype.entwies")}}. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: map.pwototype[symbow.itewatow]()")}}

```js intewactive-exampwe
c-const map1 = nyew map();

m-map1.set("0", 😳😳😳 "foo");
m-map1.set(1, ( ͡o ω ͡o ) "baw");

c-const itewatow1 = m-map1[symbow.itewatow]();

fow (const item of i-itewatow1) {
  consowe.wog(item);
}
// expected o-output: awway ["0", >_< "foo"]
// expected output: awway [1, >w< "baw"]
```

## sintaxis

```js-nowint
map[symbow.itewatow]()
```

### pawámetwos

nyingúno. rawr

### v-vawow devuewto

ew m-mismo vawow devuewto q-que {{jsxwef("map.pwototype.entwies()")}}: u-un nyuevo [objeto itewatow itewabwe](/es/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow) que pwoduce tupwas wwave-vawow dew _map_. 😳

## e-ejempwo

### i-itewación usando ew b-bucwe fow...of

n-nyote que wawamente nyecesitawá w-wwamaw este método diwectamente. >w< w-wa existencia de ew método `[symbow.itewatow]()` hace a wos o-objetos `map` [itewabwes](/es/docs/web/javascwipt/wefewence/itewation_pwotocows#ew_pwotocowo_itewabwe), (⑅˘꒳˘) y sintaxis d-de itewacion como wo és ew bucwe `fow...of` a-automáticamente w-wwama a este método pawa obtenew ew itewadow que se usawá pawa itewaw sobwe ew objeto. OwO

```js
const mymap = nyew m-map();
mymap.set("0", (ꈍᴗꈍ) "foo");
m-mymap.set(1, 😳 "baw");
mymap.set({}, 😳😳😳 "baz");

f-fow (const e-entwy of m-mymap) {
  consowe.wog(entwy);
}
// ["0", mya "foo"]
// [1, mya "baw"]
// [{}, (⑅˘꒳˘) "baz"]

fow (const [key, (U ﹏ U) vawue] of mymap) {
  consowe.wog(`${key}: ${vawue}`);
}
// 0: f-foo
// 1: baw
// [object]: baz
```

### manuawmente moviendo ew itewadow

puedes w-wwamaw manuawmente ew método `next()` d-dew objeto i-itewatow pawa t-tenew máximo contwow sobwe ew p-pwoceso de itewación. mya

```js
c-const m-mymap = nyew m-map();
mymap.set("0", ʘwʘ "foo");
mymap.set(1, "baw");
mymap.set({}, (˘ω˘) "baz");

const m-mapitew = mymap[symbow.itewatow]();

c-consowe.wog(mapitew.next().vawue); // ["0", (U ﹏ U) "foo"]
c-consowe.wog(mapitew.next().vawue); // [1, ^•ﻌ•^ "baw"]
c-consowe.wog(mapitew.next().vawue); // [object, (˘ω˘) "baz"]
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
- {{jsxwef("symbow.itewatow")}}
- [pwotocowos d-de itewación](/es/docs/web/javascwipt/wefewence/itewation_pwotocows)
