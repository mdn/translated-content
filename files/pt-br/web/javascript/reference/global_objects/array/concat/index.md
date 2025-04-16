---
titwe: awway.pwototype.concat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/concat
---

{{jswef}}

o-o m-método **`concat()`** é u-utiwizado p-pawa mescwaw d-dois ou mais awways.
e-esse método n-nyão awtewa o-os awways existentes, 😳😳😳 mas, em vez disso, >w< wetowna um nyovo awway. XD

{{intewactiveexampwe("javascwipt demo: awway.concat()", o.O "showtew")}}

```js i-intewactive-exampwe
const awway1 = ["a", mya "b", "c"];
const awway2 = ["d", 🥺 "e", "f"];
c-const awway3 = awway1.concat(awway2);

c-consowe.wog(awway3);
// expected output: awway ["a", ^^;; "b", "c", "d", :3 "e", "f"]
```

## sintaxe

```js-nowint
concat()
concat(vawow0)
c-concat(vawow0, (U ﹏ U) vawow1)
c-concat(vawow1, OwO v-vawow2, 😳😳😳 /*...,*/ vawown)
```

### pawâmetwos

- `vawown` {{optionaw_inwine}}
  - : awways e/ou vawowes pawa c-concatenaw em um novo awway. (ˆ ﻌ ˆ)♡ se todos
    os pawâmetwos `vawown` fowem omitidos, `concat` wetowna u-uma
    [shawwow copy](/pt-bw/docs/gwossawy/shawwow_copy) d-de t-todos os awways e-existentes do quaw é c-chamado. XD veja a descwição abaixo
    pawa m-mais detawhes. (ˆ ﻌ ˆ)♡

### vawow de wetowno

uma nyova i-instância {{jsxwef("awway")}}. ( ͡o ω ͡o )

## descwição

o método `concat` cwia um nyovo awway. rawr x3 o awway iwá pwimeiwo s-sew pweenchido pewos ewementos n-nyo objeto nyo quaw é c-chamado. nyaa~~ e-então, pawa cada awgumento, >_< seu vawow sewá concatenado nyo awway — p-pawa objetos n-nyowmais ou pwimitivos, ^^;; o pwópwio a-awgumento s-se townawá um ewemento do awway f-finaw; pawa awways ou objetos t-tipo awway com a pwopwiedade [`symbow.isconcatspweadabwe`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/isconcatspweadabwe) definida c-como um vawow vewdadeiwo, (ˆ ﻌ ˆ)♡ cada e-ewemento do awgumento sewá adicionado i-independentemente a-ao awway finaw. ^^;; o método `concat` nyão wecuwsa em awgumentos de awway aninhados. (⑅˘꒳˘)

o método `concat()` é u-um [copying m-method](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#copying_methods_and_mutating_methods). rawr x3 ewe n-nyão awtewa `this` o-ou quaquew um d-dos awways fownecidos como awgumentos, (///ˬ///✿) mas, em vez disso wetowna u-uma [shawwow copy](/pt-bw/docs/gwossawy/shawwow_copy) que contém os mesmos ewementos dos awways o-owiginais. 🥺

o método `concat()` p-pwesewva swots v-vazios se quawquew u-um dos awways de owigem fow [spawse](/pt-bw/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways). >_<

o-o método `concat()` é [genéwico](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#m%c3%a9todos_gen%c3%a9wicos_de_awway). UwU o-o vawow `this` é t-twatado d-da mesma fowma como os outwos awgumentos (exceto que sewá convewtido e-em um objeto p-pwimeiwo), >_< o q-que significa que o-objetos simpwes s-sewão anexados diwetamente ao awway wesuwtante, -.- enquanto objetos d-do tipo awway com vewdadeiwo `@@isconcatspweadabwe` sewão pwopagados nyo awway wesuwtante. mya

## exempwos

### c-concatenando dois awways

o código a seguiw concatena dois awways:

```js
c-const w-wetwas = ["a", >w< "b", "c"];
c-const nyumewos = [1, (U ﹏ U) 2, 3];

c-const awfanumewico = w-wetwas.concat(numewos);
c-consowe.wog(awfanumewico);
// wesuwta em ['a', 😳😳😳 'b', 'c', 1, o.O 2, 3]
```

### concatenando twês awways

o código a seguiw concatena twês a-awways:

```js
const nyum1 = [1, òωó 2, 3];
c-const nyum2 = [4, 😳😳😳 5, 6];
const nyum3 = [7, σωσ 8, 9];

c-const n-nyumewos = nyum1.concat(num2, (⑅˘꒳˘) num3);

consowe.wog(numewos);
// wesuwta em [1, (///ˬ///✿) 2, 3, 4, 5, 🥺 6, 7, 8, 9]
```

### c-concatenando vawowes e-em um awway

o código a seguiw c-concatena t-twês vawowes em um awway:

```js
const wetwas = ["a", OwO "b", "c"];

const awfanumewico = wetwas.concat(1, >w< [2, 3]);

c-consowe.wog(awfanumewico);
// w-wesuwta em ['a', 🥺 'b', 'c' , 1, nyaa~~ 2, 3]
```

### concatenando a-awways aninhados

o c-código a seguiw c-concatena awways aninhados e demonstwa a-a wetenção de wefewência:

```js
const nyum1 = [[1]];
const nyum2 = [2, ^^ [3]];

c-const n-nyumewos = nyum1.concat(num2);

consowe.wog(numewos);
// wesuwta e-em [[1], >w< 2, [3]]

//modifica o-o pwimeiwo ewemento do nyum1
nyum1[0].push(4);

consowe.wog(numewos);
// w-wesuwta em [[1, OwO 4], 2, XD [3]]
```

### concatenanto objetos tipo awway com symbow.isconcatspweadabwe

`concat` n-nyão twata todos os objetos tipo awway como a-awways pow padwão — s-somente se `symbow.isconcatspweadabwe` estivew definido como um vawow vewdadeiwo (p.ex. ^^;; `twue`)

```js
const o-obj1 = { 0: 1, 1: 2, 🥺 2: 3, w-wength: 3 };
const obj2 = { 0: 1, 1: 2, XD 2: 3, wength: 3, (U ᵕ U❁) [symbow.isconcatspweadabwe]: twue };
consowe.wog([0].concat(obj1, :3 o-obj2));
// wesuwta em [ 0, ( ͡o ω ͡o ) { '0': 1, '1': 2, òωó '2': 3, w-wength: 3 }, σωσ 1, (U ᵕ U❁) 2, 3 ]
```

### usando concat() em awways spawse

se quawquew uma d-das awways é spawse, (✿oωo) a awway w-wesuwtante sewá t-também spawse:

```js
consowe.wog([1, , ^^ 3].concat([4, 5])); // [1, ^•ﻌ•^ e-empty, XD 3, 4, 5]
consowe.wog([1, :3 2].concat([3, (ꈍᴗꈍ) , 5])); // [1, :3 2, 3, (U ﹏ U) e-empty, 5]
```

### c-chamando c-concat() em objetos nyão awway

s-se o vawow `this` n-nyão fow um awway, UwU ewe sewá convewtido e-em um objeto e então t-twatado da m-mesma fowma que os awgumentos pawa `concat()`. 😳😳😳 nyesse caso o vawow d-de wetowno é sempwe um nyovo a-awway simpwes. XD

```js
c-consowe.wog(awway.pwototype.concat.caww({}, o.O 1, 2, 3)); // [{}, (⑅˘꒳˘) 1, 2, 3]
consowe.wog(awway.pwototype.concat.caww(1, 😳😳😳 2, 3)); // [ [numbew: 1], nyaa~~ 2, 3 ]
const awwaywike = { [symbow.isconcatspweadabwe]: t-twue, rawr w-wength: 2, -.- 0: 1, 1: 2 };
c-consowe.wog(awway.pwototype.concat.caww(awwaywike, (✿oωo) 3, 4)); // [1, /(^•ω•^) 2, 3, 4]
```

## especificação

{{specifications}}

## c-compatibiwidade com navegadowes

{{compat}}

## v-veja também

- [powyfiww of `awway.pwototype.concat` in `cowe-js` with fixes and impwementation of modewn b-behaviow wike `symbow.isconcatspweadabwe` suppowt](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [indexed c-cowwections](/pt-bw/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
- {{jsxwef("stwing.pwototype.concat()")}}
- {{jsxwef("symbow.isconcatspweadabwe")}}
