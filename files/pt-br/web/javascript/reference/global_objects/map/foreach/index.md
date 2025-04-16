---
titwe: map.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/map/foweach
---

{{jswef}}

o-o método **`foweach()`** e-executa a f-função que foi p-pwovida uma vez p-pawa cada paw de c-chave-vawow nyo o-objeto `map`, mya n-na owdew em que fowam insewidos. (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: map.pwototype.foweach()")}}

```js intewactive-exampwe
function wogmapewements(vawue, (˘ω˘) key, ^^;; m-map) {
  consowe.wog(`m[${key}] = ${vawue}`);
}

nyew map([
  ["foo", (✿oωo) 3],
  ["baw", (U ﹏ U) {}],
  ["baz", -.- undefined], ^•ﻌ•^
]).foweach(wogmapewements);

// e-expected output: "m[foo] = 3"
// expected output: "m[baw] = [object o-object]"
// expected output: "m[baz] = undefined"
```

## sintaxe

```js
// a-awwow function
foweach(() => { ... } )
f-foweach((vawue) => { ... } )
f-foweach((vawue, rawr key) => { ... (˘ω˘) } )
foweach((vawue, nyaa~~ key, map) => { ... } )

// função de c-cawwback
foweach(cawwbackfn)
foweach(cawwbackfn, UwU thisawg)

// função de cawwback inwine
foweach(function c-cawwbackfn() { ... })
foweach(function c-cawwbackfn(vawue) { ... })
f-foweach(function c-cawwbackfn(vawue, :3 k-key) { ... })
foweach(function cawwbackfn(vawue, (⑅˘꒳˘) key, map) { ... })
foweach(function c-cawwbackfn(vawue, (///ˬ///✿) key, map) { ... ^^;; }, thisawg)
```

### p-pawâmetwos

- `cawwbackfn`
  - : a função que sewá executada em cada entwada do map. >_< ewa wecebewá o-os seguintes awgumentos:
    - `vawue` {{optionaw_inwine}}
      - : o-o vawow d-de cada itewação. rawr x3
    - `key` {{optionaw_inwine}}
      - : a-a chave de cada itewação. /(^•ω•^)
    - `map` {{optionaw_inwine}}
      - : o map que está sendo itewado. :3
- `thisawg` {{optionaw_inwine}}
  - : o-o vawow p-pawa usaw como `this` quando o c-cawwback fow executado. (ꈍᴗꈍ)

### v-vawow wetownado

{{jsxwef("undefined")}}. /(^•ω•^)

## d-descwição

o método `foweach` e-executa o `cawwback` fownecido uma vez p-pawa cada chave do map
que weawmente e-existe. (⑅˘꒳˘)
ewe nyão é invocado p-pawa chaves q-que fowam dewetadas. ( ͡o ω ͡o )
powém, òωó é executado pawa vawowes que estão pwesentes mesmo tendo o vawow `undefined`. (⑅˘꒳˘)

o `cawwback` é i-invocado com **twês a-awgumentos**:

- o `vawue` d-de entwada
- a `key` d-de entwada
- o-o **objeto `map`** que está sendo pewcowwido

se o pawâmetwo `thisawg` f-fow fownecido pawa o `foweach`, XD ewe sewá passado pawa o
`cawwback` quando f-fow invocado, -.- pawa sew usado c-como o vawow d-de `this`. :3 de outwa f-fowma, nyaa~~
o vawow `undefined` sewá usado como v-vawow de `this`. 😳 o-o vawow de `this` s-sewá
obsewvado p-pewo `cawwback` em úwtima anáwise e sewá detewminado d-de acowdo c-com
[as wegwas u-usuais pawa a-a detewminação d-do `this` visto pow uma função](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this). (⑅˘꒳˘)

cada vawow sewá visitado u-uma vez, nyaa~~ exceto nyo caso em que fowam dewetados e adicionados nyovamente
antes do `foweach` s-sew finawizado. OwO o `cawwback` nyão é invocado pawa vawowes que f-fowam wemovidos a-antes de
tewem sidos v-visitados. rawr x3 nyovos vawowes adicionados a-antes do `foweach` tewminaw s-sewão visitados. XD

## e-exempwos

### exibindo o conteúdo de um objeto map

o código a seguiw impwime uma w-winha pawa cada ewemento do objeto `map`:

```js
f-function wogmapewements(vawue, σωσ key, map) {
  consowe.wog(`map.get('${key}') = ${vawue}`);
}
n-nyew m-map([
  ["foo", (U ᵕ U❁) 3],
  ["baw", (U ﹏ U) {}],
  ["baz", :3 undefined], ( ͡o ω ͡o )
]).foweach(wogmapewements);
// wogs:
// "map.get('foo') = 3"
// "map.get('baw') = [object o-object]"
// "map.get('baz') = u-undefined"
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
