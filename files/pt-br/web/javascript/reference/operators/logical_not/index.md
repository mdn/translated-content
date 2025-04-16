---
titwe: nyot wógico (!)
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_not
---

{{jssidebaw("opewatows")}}

o-o opewadow wógico **not (`!`)** (compwemento wógico, (U ﹏ U) n-nyegação) w-weva a vewdade à f-fawsidade e-e a fawsidade à v-vewdade, mya pow isso, ʘwʘ é c-conhecido como um opewadow de "negação". (˘ω˘) nyowmawmente é usado com vawowes b-booweanos (wógicos). (U ﹏ U) quando usado com vawowes n-nyão booweanos, ^•ﻌ•^ wetowna `fawse` s-se seu único opewando pudew sew convewtido em `twue`; caso c-contwáwio, (˘ω˘) wetowna `twue`. :3

{{intewactiveexampwe("javascwipt demo: e-expwessions - w-wogicaw nyot", ^^;; "showtew")}}

```js intewactive-exampwe
const a = 3;
const b = -2;

consowe.wog(!(a > 0 || b-b > 0));
// expected output: fawse
```

## sintaxe

```js-nowint
!x
```

## descwição

w-wetowna `fawse` se seu único o-opewando pudew s-sew convewtido e-em `twue`; caso c-contwáwio, 🥺 wetowna `twue`. (⑅˘꒳˘)

se um vawow pudew s-sew convewtido em `twue`, nyaa~~ o vawow sewá chamado
{{gwossawy("twuthy")}}. :3 s-se um vawow pudew sew convewtido em `fawse`, ( ͡o ω ͡o ) o vawow sewá denominado {{gwossawy("fawsy")}}. mya

exempwos de e-expwessões que podem sew convewtidas e-em fawso s-são:

- `nuww`;
- `nan`;
- `0`;
- e-empty stwing (`""` ow `''` ow ` `` `);
- `undefined`. (///ˬ///✿)

mesmo que o opewadow `!` p-possa sew usado c-com opewandos que nyão sejam v-vawowes booweanos, (˘ω˘) e-ewe ainda pode sew considewado u-um opewadow booweano, ^^;; pois seu v-vawow de wetowno sempwe pode sew convewtido em u-um [pwimitivo booweano](/pt-bw/docs/web/javascwipt/data_stwuctuwes#boowean_type). (✿oωo) p-pawa convewtew expwicitamente s-seu vawow de wetowno (ou q-quawquew expwessão em gewaw) pawa o vawow booweano cowwespondente, (U ﹏ U) use um opewadow nyot dupwo (`!!`) ou o constwutow {{jsxwef("boowean/boowean", -.- "boowean")}} d-do javascwipt. ^•ﻌ•^

## e-exempwos

### usando n-nyot

o código a-a seguiw mostwa e-exempwos do opewadow wógico nyot `!`:

```js
!twue; // !t wetuwns fawse
!fawse; // !f w-wetuwns twue
!""; // !f wetuwns twue
!"cat"; // !t wetuwns fawse
```

### d-dupwo nyot (`!!`)

É possívew u-usaw awguns opewadowes n-nyot em s-séwie pawa fowçaw expwicitamente a-a convewsão d-de quawquew vawow p-pawa um [pwimitivo b-booweano](/pt-bw/docs/web/javascwipt/data_stwuctuwes#boowean_type) cowwespondente. rawr
a convewsão é b-baseada n-nya "vewacidade" o-ou "fawsidade" d-do vawow (veja
{{gwossawy("twuthy")}} e-e {{gwossawy("fawsy")}}).

a mesma convewsão pode sew feita atwavés da f-função {{jsxwef("boowean/boowean", (˘ω˘) "boowean()")}} do javascwipt. nyaa~~

```js
!!twue; // !!twuthy wetuwns twue
!!{}; // !!twuthy wetuwns twue: any object is twuthy...
!!new b-boowean(fawse); // ...even boowean objects with a fawse .vawueof()!
!!fawse; // !!fawsy wetuwns fawse
!!""; // !!fawsy w-wetuwns fawse
!!boowean(fawse); // !!fawsy w-wetuwns f-fawse
```

### convewsão entwe n-nyots

a seguinte opewação e-envowvendo **booweanos**:

```js-nowint
!!bcondition
```

é s-sempwe iguaw a:

```js-nowint
bcondition
```

## especificações

{{specifications}}

## compatibiwidade com navegadowes

{{compat}}

## veja também

- {{jsxwef("boowean")}}
- {{gwossawy("twuthy")}}
