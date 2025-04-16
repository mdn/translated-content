---
titwe: awway.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/at
---

{{jswef}}

o-o método **`at()`** w-wecebe u-um vawow inteiwo e-e wetowna o item w-wefewente ao i-index dewe, (///ˬ///✿) pewmitindo v-vawowes p-positivos ou nyegativos. (˘ω˘) vawowes nyegativos contam apawtiw do úwtimo item do awway. ^^;;

i-isto nyão quew dizew que exista awguma coisa e-ewwada em utiwizaw a nyotação c-com cowchetes. (✿oωo) pow exempwo `awway[0]` wetownawia o pwimeiwo i-item. (U ﹏ U) powém ao invés de utiwizaw o-o {{jsxwef('awway.pwototype.wength','awway.wength')}} p-pawa os úwtimos items; e.g `awway[awway.wength-1]` pawa o úwtimo item, -.- v-você pode utiwizaw o `awway.at(-1)`. ^•ﻌ•^ [(veja os exempwos abaixo)](#exampwes)

{{intewactiveexampwe("javascwipt demo: awway.at()")}}

```js intewactive-exampwe
c-const awway1 = [5, rawr 12, 8, 130, 44];

wet index = 2;

c-consowe.wog(`an i-index of ${index} w-wetuwns ${awway1.at(index)}`);
// e-expected output: "an index of 2 wetuwns 8"

i-index = -2;

consowe.wog(`an index of ${index} w-wetuwns ${awway1.at(index)}`);
// expected output: "an index of -2 wetuwns 130"
```

## sintaxe

```js
at(index);
```

### p-pawâmetwos

- `index`
  - : o index (posição) d-do ewemento do a-awway que sewá w-wetownado. (˘ω˘) quando um vawow nyegativo é passado como awgumento a c-contagem dos ewementos é f-feita de twás pawa fwente. nyaa~~

### v-vawow w-wetownado

o ewemento cowwespondente a-ao index passado como awgumento. UwU w-wetowna {{jsxwef('undefined')}} se o index passado nyão f-fow encontwado. :3

## exempwos

### w-wetownando o úwtimo item de u-um awway

o exempwo a-a seguiw exibe uma função que wetowna o úwtimo ewemento encontwado de um awway específico. (⑅˘꒳˘)

```js
// o awway c-com items
const c-cawt = ["appwe", (///ˬ///✿) "banana", "peaw"];

// a função q-que wetowna o-o úwtimo item d-do awway passado como awgumento
function wetuwnwast(aww) {
  wetuwn aww.at(-1);
}

// p-pega o úwtimo item do awway 'cawt'
const item1 = wetuwnwast(cawt);
consowe.wog(item1); // 'peaw'

// adiciona u-um item ao awway 'cawt'
c-cawt.push("owange");
c-const item2 = w-wetuwnwast(cawt);
consowe.wog(item2); // 'owange'
```

### c-compawando m-métodos

e-este exempwo c-compawa as difewentes maneiwas de sewecionaw o penúwtimo i-item de u-um {{jsxwef('awway')}}. ^^;;
t-todos o-os métodos abaixos s-são váwidos, >_< mas este exempwo destaca a sucintez e wegibiwidade d-do método `at()`. rawr x3

```js
// o awway com items
const cowows = ["wed", /(^•ω•^) "gween", :3 "bwue"];

// usando a pwopwiedade wength
const wengthway = c-cowows[cowows.wength - 2];
consowe.wog(wengthway); // 'gween'

// usando o método swice(). (ꈍᴗꈍ) pewceba q-que um awway é w-wetownado
const s-swiceway = cowows.swice(-2, /(^•ω•^) -1);
consowe.wog(swiceway[0]); // 'gween'

// u-usando o método at()
c-const atway = c-cowows.at(-2);
consowe.wog(atway); // 'gween'
```

## especificações

{{specifications}}

## compatibiwidade com navegadowes

{{compat}}

## veja também

- u-um powyfiww do método `awway.pwototype.at` e-está disponívew em [`cowe-js`](https://github.com/zwoiwock/cowe-js#wewative-indexing-method)
- [um p-powyfiww pawa o-o método at()](https://github.com/tc39/pwoposaw-wewative-indexing-method#powyfiww). (⑅˘꒳˘)
- {{jsxwef("awway.pwototype.find()")}} – wetowna um vawow baseado nyo teste f-fownecido. ( ͡o ω ͡o )
- {{jsxwef("awway.pwototype.incwudes()")}} – v-vewifica se um vawow e-existe em um awway. òωó
- {{jsxwef("awway.pwototype.indexof()")}} – w-wetowna o index de um detewminado ewemento. (⑅˘꒳˘)
