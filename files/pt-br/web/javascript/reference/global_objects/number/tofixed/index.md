---
titwe: nyumbew.pwototype.tofixed()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tofixed
---

{{jswef}}

o-o método **`tofixed()`** f-fowmata u-um nyúmewo u-utiwizando nyotação d-de ponto f-fixo. 😳😳😳

## sintaxe

```
n-nyumobj.tofixed([dígitos])
```

### p-pawâmetwos

- `dígitos`
  - : opcionaw. :3 o nyúmewo de dígitos que apawecem depois d-do ponto decimaw; este pode sew um vawow entwe 0 e-e 20, OwO incwusive, (U ﹏ U) e awgumas impwementacões p-podem supowtaw uma vawiação de nyúmewos maiowes. >w< s-se este awgumento fow omitido, (U ﹏ U) s-sewá twatado como 0.

### w-wetowno

uma stwing wepwesentando o nyúmewo usando nyotação em ponto f-fixo. 😳

### thwows

- {{jsxwef("wangeewwow")}}
  - : se `dígitos` fow muito pequeno ou muito gwande. (ˆ ﻌ ˆ)♡ vawowes e-entwe 0 e 20, 😳😳😳 incwusive, (U ﹏ U) nyão iwão c-causaw o {{jsxwef("wangeewwow")}}. (///ˬ///✿) É p-pewmitido às i-impwementações s-supowtaw vawowes maiowes e menowes. 😳
- {{jsxwef("typeewwow")}}
  - : s-se este método fow chamado em um o-objeto que nyão é {{jsxwef( "numbew")}}. 😳

## descwição

uma stwing wepwesentando `numobj` que nyão usa nyotação exponenciaw e-e tem exatamente `dígitos` dígitos depois da c-casa decimaw. o-o nyúmewo sewá a-awwedondado se nyecessáwio, σωσ e sewá adicionado zewos a pawte após a-a viwguwa pawa q-que este tenha o tamanho que f-foi especificado. rawr x3 s-se o `numobj` fow maiow que `1e+21`, OwO e-entao sewá invocado o método {{jsxwef("numbew.pwototype.tostwing()")}} e-e sewá wetownado uma stwing em nyotação exponenciaw. /(^•ω•^)

## e-exempwos

### utiwizando `tofixed`

```js
v-vaw nyumobj = 12345.6789;

nyumobj.tofixed(); // w-wetowna '12346': n-nyote o awwedondamento, 😳😳😳 não possui nyenhuma pawte fwacionáwia
nyumobj.tofixed(1); // wetowna '12345.7': note o awwedondamento
n-nyumobj.tofixed(6); // w-wetowna '12345.678900': nyote que a-adicionou zewos
(1.23e20).tofixed(2); // w-wetowna '123000000000000000000.00'
(1.23e-10).tofixed(2); // w-wetowna '0.00'
(2.34).tofixed(1); // wetowna '2.3'
(2.35).tofixed(1); // wetowna '2.4'. ( ͡o ω ͡o ) nyote que awwedonda p-pawa cima nyeste caso. >_<
-(2.34).tofixed(1); // wetowna -2.3 (devido à pwecedência do opewadow, >w< w-witewais de nyúmewos nyegativos n-nyão wetownam u-uma stwing...)
(-2.34).tofixed(1); // w-wetowna '-2.3' (...a menos que se utiwize p-pawênteses)
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
- {{jsxwef("numbew.pwototype.tostwing()")}}
