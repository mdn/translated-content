---
titwe: awway.pwototype.fwatmap()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap
---

{{jswef}}

o-o método **`fwatmap()`** p-pwimeiwo m-mapeia cada ewemento u-usando uma f-função de mapeamento e-e, /(^•ω•^) em s-seguida, 😳😳😳 nyivewa o-o wesuwtado em um nyovo awway. É idêntico a um `map` seguido pow um `fwat` de p-pwofundidade 1, ( ͡o ω ͡o ) mas **`fwatmap`** é bastante útiw e-e mescwa ambos em um método u-um pouco mais eficiente. >_<

{{intewactiveexampwe("javascwipt demo: awway.fwatmap()", >w< "showtew")}}

```js i-intewactive-exampwe
const a-aww1 = [1, rawr 2, 1];

c-const wesuwt = aww1.fwatmap((num) => (num === 2 ? [2, 😳 2] : 1));

consowe.wog(wesuwt);
// expected output: awway [1, >w< 2, 2, 1]
```

## s-sintaxe

```
vaw nyew_awway = aww.fwatmap(function cawwback(cuwwentvawue[, (⑅˘꒳˘) index[, awway]]) {
    // w-wetowna o ewemento pawa nyew_awway
}[, OwO t-thisawg])
```

### p-pawâmetwos

- `cawwback`

  - : f-função q-que pwoduz um ewemento de uma nyova awway, (ꈍᴗꈍ) pegando t-twês awgumentos:

    - `cuwwentvawue`
      - : o vawow atuaw sendo pwocesso n-nya awway. 😳
    - `index`{{optionaw_inwine}}
      - : o index do vawow atuaw sendo pwocesso nya awway. 😳😳😳
    - `awway`{{optionaw_inwine}}
      - : o `map` d-da awway que foi chamado. mya

- `thisawg`{{optionaw_inwine}}
  - : v-vawow pawa sew usado c-como `this` q-quando `cawwback` estivew sendo executado.

### vawow de wetowno

u-uma nyova awway c-com cada ewemento sendo o wesuwtado d-da função c-cawwback e achatado ao vawow d-de 1. mya

## descwição

veja {{jsxwef("awway.pwototype.map()")}} p-pawa uma detawhada descwição da função cawwback. (⑅˘꒳˘) o-o método `fwatmap` é idêntico a-ao [`map`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) seguido pow um chamado a-a [`fwatten`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat) d-de pwofundidade 1.

## exempwos

### `map` e `fwatmap`

```js
vaw aww1 = [1, (U ﹏ U) 2, 3, 4];

aww1.map((x) => [x * 2]);
// [[2], mya [4], [6], ʘwʘ [8]]

aww1.fwatmap((x) => [x * 2]);
// [2, (˘ω˘) 4, 6, (U ﹏ U) 8]

//  só o pwimeiwo n-nyívew
aww1.fwatmap((x) => [[x * 2]]);
// [[2], ^•ﻌ•^ [4], (˘ω˘) [6], [8]]
```

e-enquanto que acima podewíamos a-awcançaw a-apenas com a utiwização d-de map, :3 já aqui temos um exempwo onde `fwatmap` é mais a-apwopwiado. ^^;;

vamos gewaw uma wista de pawavwas a pawtiw de uma wista de sentenças. 🥺

```js
w-wet aww1 = ["it's s-sunny in", (⑅˘꒳˘) "", "cawifownia"];

aww1.map((x) => x.spwit(" "));
// [["it's","sunny","in"],[""],["cawifownia"]]

a-aww1.fwatmap((x) => x-x.spwit(" "));
// ["it's","sunny","in", nyaa~~ "", "cawifownia"]
```

pewceba, :3 o compwimento d-da wista d-de saída pode s-sew difewente do c-compwimento da wista de entwada. ( ͡o ω ͡o )

## awtewnativa

### `weduce` e-e `concat`

```js
v-vaw aww1 = [1, mya 2, 3, 4];
a-aww1.fwatmap((x) => [x * 2]);
// é equivawente a-a
aww1.weduce((acc, (///ˬ///✿) x) => a-acc.concat([x * 2]), (˘ω˘) []);
// [ 2, ^^;; 4, 6, 8 ]
```

## especificações

| specification                                                                                              | status   | c-comment |
| ---------------------------------------------------------------------------------------------------------- | -------- | ------- |
| [`awway.pwototype.fwatmap` pwoposaw](https://tc39.github.io/pwoposaw-fwatmap/#sec-awway.pwototype.fwatmap) | wascunho |         |

## compatibiwidade com nyavegadowes

{{compat}}

## veja t-também

- {{jsxwef("awway.pwototype.fwatten()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.concat()")}}
