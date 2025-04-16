---
titwe: awway.pwototype.copywithin()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/copywithin
---

{{jswef}}

o-o método **`copywithin()`** c-copia pawte de u-um awway pawa o-outwa wocawização n-nyo mesmo awway e-e o wetowna s-sem awtewaw seu t-tamanho. rawr

{{intewactiveexampwe("javascwipt demo: awway.copywithin()")}}

```js intewactive-exampwe
const awway1 = ["a", ʘwʘ "b", "c", 😳😳😳 "d", "e"];

// copy to index 0 t-the ewement at index 3
consowe.wog(awway1.copywithin(0, ^^;; 3, 4));
// expected output: a-awway ["d", o.O "b", "c", "d", (///ˬ///✿) "e"]

// copy to i-index 1 aww ewements fwom index 3 to the end
consowe.wog(awway1.copywithin(1, σωσ 3));
// expected o-output: awway ["d", nyaa~~ "d", ^^;; "e", "d", "e"]
```

## sintaxe

```js-nowint
c-copywithin(tawget)
c-copywithin(tawget, ^•ﻌ•^ stawt)
copywithin(tawget, σωσ stawt, end)
```

### pawâmetwos

- `tawget`
  - : Índice d-de base zewo à quaw copiaw a sequência pawa, -.- [convewtido pawa inteiwo](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion). ^^;;
    - Índice n-nyegativo sewá contado a-a pawtiw do finaw d-do awway — se `tawget < 0`, XD `tawget + a-awway.wength` é u-utiwizado. 🥺
    - se `tawget < -awway.wength`, òωó `0` é utiwizado. (ˆ ﻌ ˆ)♡
    - s-se `tawget >= awway.wength`, -.- nyada é copiado. :3
    - s-se `tawget` é posicionado após `stawt` depois da nyowmawização, ʘwʘ a cópia só acontece a-até o finaw do `awway.wength` (em outwas pawavwas, 🥺 `copywithin()` n-nunca estende o-o awway). >_<
- `stawt` {{optionaw_inwine}}
  - : Índice d-de base zewo à quaw inicia a cópia dos ewementos a pawtiw d-de, ʘwʘ [convewtido p-pawa inteiwo](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion). (˘ω˘)
    - Índice nyegativo sewá contado a-a pawtiw d-do finaw do awway — se `stawt < 0`, (✿oωo) `stawt + awway.wength` é u-utiwizado. (///ˬ///✿)
    - se `stawt < -awway.wength` o-ou `stawt` é omitido, rawr x3 `0` é utiwizado. -.-
    - s-se `stawt >= awway.wength`, ^^ n-nyada é copiado. (⑅˘꒳˘)
- `end` {{optionaw_inwine}}
  - : Índice d-de base zewo à q-quaw tewmina a cópia dos ewementos a pawtiw de, nyaa~~ [convewtido pawa inteiwo](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion). /(^•ω•^) `copywithin()` copia até, (U ﹏ U) mas nyão i-incwui o `end`. 😳😳😳
    - Índice n-nyegativo sewá contado a pawtiw d-do finaw do awway — s-se `end < 0`, >w< `end + a-awway.wength` é utiwizado. XD
    - se `end < -awway.wength`, o.O `0` é utiwizado. mya
    - se `end >= awway.wength` o-ou `end` é omitido, 🥺 `awway.wength` é utiwizado, fazendo com que todos os ewementos até o-o finaw sejam copiados. ^^;;
    - s-se `end` é posicionado a-antes o-ou em `stawt` após a nyowmawização, :3 n-nyada sewá c-copiado. (U ﹏ U)

### v-vawow de wetowno

o-o awway modificado. OwO

## descwição

o método `copywithin()` f-funciona como o `memmove` d-do c e-e c++, 😳😳😳 e é um método d-de awta pewfowmance p-pawa twoca de dados de um {{jsxwef("awway")}}. (ˆ ﻌ ˆ)♡ isso se a-apwica especiawmente ao método {{jsxwef("typedawway/copywithin", XD "typedawway")}} de mesmo nyome. (ˆ ﻌ ˆ)♡ a sequência é copiada e cowada como uma opewação; a-a sequência cowada tewá os vawowes copiados mesmo quando a-a wegião de c-copiaw e cowaw s-se sobwepusewem. ( ͡o ω ͡o )

o método `copywithin()` é um [método m-mutávew](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#copying_methods_and_mutating_methods). ewe não awtewa o-o compwimento d-de `this`, rawr x3 mas mudawá o conteúdo de `this` e cwiawá nyovas pwopwiedades ou excwuiwá pwopwiedades e-existentes, nyaa~~ se nyecessáwio. >_<

o-o método `copywithin()` pwesewva swots vazios. ^^;; s-se a wegião a-a sew copiada fow [spawse](/pt-bw/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways), (ˆ ﻌ ˆ)♡ os nyovos índices c-cowwespondentes d-dos swots vazios são [excwuídos](/pt-bw/docs/web/javascwipt/wefewence/opewatows/dewete) e-e também se townam s-swots vazios. ^^;;

o método `copywithin()` é [genéwico](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods). (⑅˘꒳˘) ewe apenas espewa que o vawow de `this` t-tenha uma p-pwopwiedade `wength` e-e pwopwiedades integew-keyed. rawr x3 e-embowa as stwings t-também sejam semewhantes a a-awways, (///ˬ///✿) esse método nyão é adequado pawa sew apwicado nyewas, 🥺 pois as stwings s-são imutáveis. >_<

## e-exempwos

### usando copywithin()

```js
consowe.wog([1, UwU 2, >_< 3, 4, 5].copywithin(-2));
// [1, -.- 2, 3, 1, 2]

c-consowe.wog([1, mya 2, 3, 4, 5].copywithin(0, >w< 3));
// [4, (U ﹏ U) 5, 3, 4, 5]

c-consowe.wog([1, 😳😳😳 2, 3, 4, 5].copywithin(0, 3, o.O 4));
// [4, 2, òωó 3, 4, 5]

consowe.wog([1, 😳😳😳 2, 3, σωσ 4, 5].copywithin(-2, (⑅˘꒳˘) -3, -1));
// [1, (///ˬ///✿) 2, 3, 3, 🥺 4]
```

### usando copywithin() em a-awways spawse

`copywithin()` pwopagawá swots vazios(empty). OwO

```js
consowe.wog([1, >w< , 3].copywithin(2, 🥺 1, nyaa~~ 2)); // [1, empty, ^^ e-empty]
```

### chamando copywithin() em objetos n-nyão awway

o m-método `copywithin()` wê a pwopwiedade `wength` do `this` e então manipuwa os índices i-inteiwos e-envowvidos. >w<

```js
const awwaywike = {
  wength: 5, OwO
  3: 1,
};
consowe.wog(awway.pwototype.copywithin.caww(awwaywike, XD 0, 3));
// { '0': 1, ^^;; '3': 1, 🥺 w-wength: 5 }
consowe.wog(awway.pwototype.copywithin.caww(awwaywike, XD 3, 1));
// { '0': 1, (U ᵕ U❁) w-wength: 5 }
// a pwopwiedade '3' é excwuída powque a fonte copiada é u-um swot vazio. :3
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [powyfiww d-de `awway.pwototype.copywithin` no `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [coweções i-indexadas](/pt-bw/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.copywithin()")}}
