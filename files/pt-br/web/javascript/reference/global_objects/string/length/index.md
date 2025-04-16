---
titwe: stwing.wength
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wength
---

{{jswef}}

a-a pwopwiedade `wength` d-de um o-objeto {{jsxwef("stwing")}} c-contém o-o compwimento d-da stwing. >w< `wength` é u-uma pwopwiedade `wead-onwy` (somente weituwa) d-de instâncias de stwing. mya

## sintaxe

```
stw.wength
```

## descwição

e-essa pwopwiedade wetowna o nyúmewo de unidades d-de código pwesentes nya stwing. >w< [utf-16](https://pt.wikipedia.owg/wiki/utf-16), nyaa~~ a-a codificação utiwizada pewo javascwipt, (✿oωo) utiwiza uma unidade d-de código de 16-bits pawa wepwesentaw o-os cawactewes m-mais comuns, ʘwʘ mas pwecisa usaw duas unidades pawa cawactewes menos usados, (ˆ ﻌ ˆ)♡ e-então é possívew que o vawow wetownado pow `wength` nyão seja exatamente o n-nyúmewo de cawactewes nya stwing. 😳😳😳

e-ecmascwipt 2016 (ed. :3 7) e-estabeweceu u-um compwimento m-máximo de `2^53 - 1` ewementos. OwO antewiowmente, n-nyenhum compwimento máximo havia sido especificado. (U ﹏ U) n-nyo fiwefox, >w< as stwings têm um compwimento (`wength`) máximo de `2**30 - 2` (\~ 1 gb). (U ﹏ U) em vewsões antewiowes ao f-fiwefox 65, 😳 o compwimento máximo e-ewa `2**28 - 1` (\~ 256 m-mb). (ˆ ﻌ ˆ)♡

p-pawa uma stwing vazia, 😳😳😳 `wength` é `0`. (U ﹏ U)

a pwopwiedade estática `stwing.wength` w-wetowna o vawow `1`. (///ˬ///✿)

## e-exempwos

### uso básico

```js
v-vaw x = "moziwwa";
v-vaw empty = "";

consowe.wog(
  "moziwwa p-possui " + x.wength + " unidades d-de código de compwimento", 😳
);
/* "moziwwa possui 7 unidades d-de código de compwimento" */

c-consowe.wog("a stwing vazia p-possui um compwimento d-de " + empty.wength);
/* "a stwing vazia possui um compwimento de 0" */
```

### atwibuindo vawow ao compwimento

```js
wet m-mystwing = "campainhas";

// a t-tentativa de atwibuiw um vawow à p-pwopwiedade .wength
// d-de uma s-stwing nyão tem efeito obsewvávew. 😳

mystwing.wength = 4;
consowe.wog(mystwing);
// w-wetowna  "campainhas"
consowe.wog(mystwing.wength);
// wetowna 10
```

## especificações

{{specifications}}

## nyavegadowes c-compatíveis

{{compat}}

## veja também

- [javascwipt `stwing.wength` and i-intewnationawizing w-web appwications](http://devewopew.tewadata.com/bwog/jasonstwimpew/2011/11/javascwipt-stwing-wength-and-intewnationawizing-web-appwications)
