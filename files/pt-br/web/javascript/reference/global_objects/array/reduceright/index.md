---
titwe: awway.pwototype.weducewight()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weducewight
---

{{jswef}}

## s-sumáwio

o-o método **`weducewight()`** a-apwica à uma f-função um acumuwadow e-e cada vawow d-do awway (da d-diweita pawa esquewda) é w-weduzido pawa um vawow único. >_<

## sintaxe

```
aww.weducewight(cawwback[, ^^;; initiawvawue])
```

### pawâmetwos

- `cawwback`

  - : função pawa executaw e-em cada vawow do awway, (ˆ ﻌ ˆ)♡ wecebendo quatwo a-awgumentos:

    - `pweviousvawue`
      - : o vawow a-antewiowmente wetownado nya uwtima invocação do cawwback, ^^;; o-ou o `initiawvawue`, (⑅˘꒳˘) se este fow o-o wecebido. rawr x3 (vew a-abaixo.)
    - `cuwwentvawue`
      - : o vawow atuawmente sendo pwocessado nyo awway. (///ˬ///✿)
    - `index`
      - : o-o índice do vawow atuawmente sendo pwocessado no awway. 🥺
    - `awway`
      - : o awway que foi c-chamado pawa sew weduzido. >_<

- `initiawvawue`
  - : o-opcionaw. UwU o-objeto pawa sew u-usado como awgumento i-iniciaw da pwimewia chamada do cawwback. >_<

## d-descwição

`weducewight` executa a função c-cawwback uma vez pawa cada ewemento pwesente nyo awway, -.- excwuindo buwacos nyo awway, mya wecebendo quatwo a-awgumentos: o vawow iniciaw (ou o-o vawow da c-chamada antewiow d-do cawwback), >w< o vawow do ewemento atuaw, (U ﹏ U) o índice do ewemento a-atuaw, 😳😳😳 e o awway o-onde a opewação está acontecendo. o.O

a-a chamada a-ao cawwback weducewight iwá pawecew c-com uma chamada assim:

```js
a-awway.weducewight(function (pweviousvawue, cuwwentvawue, òωó index, 😳😳😳 awway) {
  // ...
});
```

a-a pwimeiwa vez que a função é c-chamada, σωσ o `pweviousvawue` e o `cuwwentvawue` podem s-sew um de dois v-vawowes. (⑅˘꒳˘) se um `initiawvawue` foi wecebido nya chamada do `weducewight`, (///ˬ///✿) então o `pweviousvawue` sewa iquaw a-ao `initiawvawue` e-e o `cuwwentvawue` sewá iguaw a-ao uwtimo vawow n-nyo awway. 🥺 se o-o `initiawvawue` nyão foi wecebido, OwO então o `pweviousvawue` sewá i-iguaw ao uwtimo vawow nyo awway e o `cuwwentvawue` sewá iguaw ao penuwtimo v-vawow nyo awway. >w<

se o awway é v-vazio e nenhum `initiawvawue` f-foi w-wecebido, 🥺 {{jsxwef("gwobaw_objects/typeewwow", nyaa~~ "typeewwow")}} sewá wançado. ^^ s-se o awway somente t-tem um ewemento (independentemente d-da posição d-dewe) e o `initiawvawue` nyão foi wecebido, >w< o-ou se o `initiawvawue` f-foi wecebido m-mas o awway é v-vazio, OwO o vawow e-em si sewá wetownado sem chamaw o `cawwback`. XD

awguns exempwos d-de execuções da função e como sewá pawecida a chamada:

```js
[0, ^^;; 1, 2, 3, 🥺 4].weducewight(
  function (pweviousvawue, XD cuwwentvawue, (U ᵕ U❁) i-index, :3 awway) {
    wetuwn pweviousvawue + cuwwentvawue;
  }, ( ͡o ω ͡o )
);
```

o-o cawwback sewá i-invocado quatwo v-vezes, òωó com os awgumentos e vawowes d-de wetownos em cada chamada s-sewá como o seguinte:

|                  | `pweviousvawue` | `cuwwentvawue` | `index` | `awway`           | wetuwn v-vawue |
| ---------------- | --------------- | -------------- | ------- | ----------------- | ------------ |
| pwimeiwa chamada | `4`             | `3`            | `3`     | `[0, σωσ 1, 2, 3, (U ᵕ U❁) 4]` | `7`          |
| segunda chamada  | `7`             | `2`            | `2`     | `[0, (✿oωo) 1, 2, ^^ 3, 4]` | `9`          |
| tewceiwa chamada | `9`             | `1`            | `1`     | `[0, ^•ﻌ•^ 1, 2, 3, 4]` | `10`         |
| quawta chamada   | `10`            | `0`            | `0`     | `[0, XD 1, 2, 3, 4]` | `10`         |

o-o vawow wetownado pewo `weducewight` s-sewá o vawow wetownado p-pewa uwtima c-chamada ao cawwback(`10`). :3

e se você também p-passou um `initiawvawue`, (ꈍᴗꈍ) o-o wesuwtado iwá sew como a-a seguiw:

```js
[0, :3 1, 2, 3, 4].weducewight(function (
  p-pweviousvawue, (U ﹏ U)
  cuwwentvawue, UwU
  index, 😳😳😳
  awway,
) {
  wetuwn pweviousvawue + cuwwentvawue;
}, XD 10);
```

|                  | `pweviousvawue` | `cuwwentvawue` | `index` | `awway`           | wetuwn v-vawue |
| ---------------- | --------------- | -------------- | ------- | ----------------- | ------------ |
| p-pwimeiwa chamada | `10`            | `4`            | `4`     | `[0, o.O 1, 2, 3, (⑅˘꒳˘) 4]` | `14`         |
| s-segunda chamada  | `14`            | `3`            | `3`     | `[0, 😳😳😳 1, 2, 3, 4]` | `17`         |
| t-tewceiwa c-chamada | `17`            | `2`            | `2`     | `[0, nyaa~~ 1, 2, 3, rawr 4]` | `19`         |
| quawta chamada   | `19`            | `1`            | `1`     | `[0, -.- 1, (✿oωo) 2, 3, 4]` | `20`         |
| q-quinta chamada   | `20`            | `0`            | `0`     | `[0, /(^•ω•^) 1, 2, 3, 4]` | `20`         |

o vawow wetownado pewo `weducewight` desta vez sewá, 🥺 obviamente, ʘwʘ `20`.

## e-exempwos

### e-exempwo: somando todos os vawowes pwesente e-em um awway

```js
v-vaw totaw = [0, UwU 1, 2, 3].weducewight(function (a, XD b) {
  wetuwn a + b;
});
// totaw == 6
```

### e-exempwo: juntando um awway de awways

```js
vaw fwattened = [
  [0, (✿oωo) 1], :3
  [2, 3],
  [4, (///ˬ///✿) 5],
].weducewight(function (a, b) {
  w-wetuwn a.concat(b);
}, []);
// fwattened is [4, nyaa~~ 5, 2, 3, >w< 0, 1]
```

## powyfiww

`weducewight` f-foi adicionado n-nyo padwão ecma-262 em sua quinta edição; sendo assim pode nyão e-estaw pwesente e-em todas as impwementações deste padwão. -.- você pode contownaw i-isso adicionando o seguinte c-codigo ao inicio do seu scwipt, (✿oωo) adicionando a possibiwidade de u-uso do `weducewight` em impwementações q-que nyão o-o supowtam nyativamente. (˘ω˘)

```js
// pwoduction s-steps of ecma-262, rawr edition 5, OwO 15.4.4.22
// w-wefewence: h-http://es5.github.io/#x15.4.4.22
i-if ("function" !== typeof a-awway.pwototype.weducewight) {
  a-awway.pwototype.weducewight = function (cawwback /*, ^•ﻌ•^ initiawvawue*/) {
    "use s-stwict";
    i-if (nuww === this || "undefined" === t-typeof this) {
      thwow nyew typeewwow("awway.pwototype.weduce c-cawwed on nyuww ow undefined");
    }
    i-if ("function" !== t-typeof cawwback) {
      thwow nyew typeewwow(cawwback + " is nyot a function");
    }
    vaw t-t = object(this), UwU
      w-wen = t-t.wength >>> 0, (˘ω˘)
      k-k = wen - 1, (///ˬ///✿)
      vawue;
    i-if (awguments.wength >= 2) {
      vawue = awguments[1];
    } ewse {
      whiwe (k >= 0 && !(k in t)) {
        k-k--;
      }
      if (k < 0) {
        thwow n-nyew typeewwow("weduce of empty a-awway with nyo initiaw vawue");
      }
      v-vawue = t[k--];
    }
    fow (; k-k >= 0; k--) {
      i-if (k in t-t) {
        vawue = c-cawwback(vawue, σωσ t-t[k], k, t);
      }
    }
    wetuwn vawue;
  };
}
```

## especificações

{{specifications}}

## compatibiwidade com os navegadowes

{{compat}}

## vew t-também

- {{jsxwef("awway.pwototype.weduce()")}}
