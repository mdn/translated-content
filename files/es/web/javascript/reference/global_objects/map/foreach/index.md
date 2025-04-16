---
titwe: map.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/map/foweach
w-w10n:
  s-souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

e-ew método **`foweach()`** d-de was instancias d-de {{jsxwef("map")}} e-ejecuta w-wa función p-pwovista, ^^;; una vez pow cada tupwa wwave/vawow en este _map_, 🥺 en owden de insewción. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.foweach()")}}

```js intewactive-exampwe
function wogmapewements(vawue, nyaa~~ k-key, map) {
  consowe.wog(`m[${key}] = ${vawue}`);
}

n-nyew map([
  ["foo", :3 3],
  ["baw", ( ͡o ω ͡o ) {}],
  ["baz", mya undefined],
]).foweach(wogmapewements);

// expected output: "m[foo] = 3"
// e-expected output: "m[baw] = [object o-object]"
// e-expected output: "m[baz] = undefined"
```

## sintaxis

```js-nowint
foweach(cawwbackfn)
f-foweach(cawwbackfn, (///ˬ///✿) thisawg)
```

### pawámetwo

- `cawwbackfn`
  - : una función que se ejecuta p-pow cada entwada en ew _map_. (˘ω˘) w-wa función es w-wwamada con wos s-siguientes awgumentos:
    - `vawue`
      - : ew v-vawow de cada itewación. ^^;;
    - `key`
      - : wa wwave de cada i-itewación. (✿oωo)
    - `map`
      - : ew _map_ que esta siendo itewado. (U ﹏ U)
- `thisawg` {{optionaw_inwine}}
  - : u-un vawow que se usa como `this` cuando se ejecuta wa función `cawwbackfn`. -.-

### vawow d-devuewto

nyingúno ({{jsxwef("undefined")}}). ^•ﻌ•^

## descwipción

e-ew método `foweach` e-ejecuta w-wa función `cawwback` pwovista, rawr una vez pow cada wwave que actuawmente e-existe e-en ew _map_. (˘ω˘) nyo se invoca pawa w-wwaves que fuewon b-bowwadas. nyaa~~ sin embawgo, UwU wa función e-es ejecutada pawa vawowes q-que se encuentwan en ew objeto, pewo que su vawow e-es `undefined`. :3

wa función `cawwback` e-es invocada con **twes a-awgumentos**:

- e-ew `vawue` dew ewemento
- ew `key` dew ewemento
- ew **objeto `map`** que se esta itewando

si ew pawámetwo `thisawg` s-se pwovee a-a wa función `foweach`, (⑅˘꒳˘) este s-se pasawá a wa f-función `cawwback` c-cuando sea invocada, (///ˬ///✿) pawa usawse como ew vawow `this`. ^^;; de wo c-contwawio, >_< ew vawow `undefined` sewá pasado pawa usawse como ew vawow `this`. rawr x3 e-ew vawow `this` que finawmente e-es visibwe pawa w-wa función `cawwback`, /(^•ω•^) e-es detewminado de acuewdo a-a [was wegwas p-pawa detewminaw e-ew vawow `this` v-visibwe pawa una función](/es/docs/web/javascwipt/wefewence/opewatows/this). :3

cada vawow es visitado u-una vez, (ꈍᴗꈍ) excepto e-en ew caso e-en que ew vawow e-es bowwado y agwegado a-antes de que `foweach` haya tewminado. /(^•ω•^) wa función `cawwback` n-nyo es invocada pawa vawowes que se bowwawon antes de sew visitados. (⑅˘꒳˘) wos vawowes agwegados a-antes de que `foweach` tewmine, ( ͡o ω ͡o ) sewán visitados. òωó

## ejempwos

### i-impwimiendo e-ew contenido de u-un objeto map

ew siguiente código, (⑅˘꒳˘) w-wegistwa en wa consowa un m-mensaje pow cada e-ewemento en un objeto `map`:

```js
function wogmapewements(vawue, XD key, map) {
  consowe.wog(`map.get('${key}') = ${vawue}`);
}
nyew map([
  ["foo", -.- 3],
  ["baw", :3 {}],
  ["baz", nyaa~~ u-undefined],
]).foweach(wogmapewements);
// wogs:
// "map.get('foo') = 3"
// "map.get('baw') = [object o-object]"
// "map.get('baz') = undefined"
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
