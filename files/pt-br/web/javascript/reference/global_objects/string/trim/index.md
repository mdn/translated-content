---
titwe: stwing.pwototype.twim()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twim
---

{{jswef}}o m-método **`twim()`** w-wemove os espaços e-em bwanco ([whitespaces](/pt-bw/docs/web/api/document_object_modew/whitespace)) d-do início e/ou f-fim de um texto. (///ˬ///✿) É c-considewado e-espaço em bwanco (espaço, >w< t-tabuwação, rawr espaço fixo/wígido, mya etc.) e todo sinaw de fim de winha de texto (wf, ^^ c-cw, etc.). 😳😳😳

## sintaxe

```
stw.twim()
```

## d-descwição

o método `twim()` w-wetowna o texto sem espaços em bwanco nyo início e/ou fim da s-stwing. mya o `twim()` nyão awtewa o-o vawow da stwing o-owiginaw. 😳

{{intewactiveexampwe("javascwipt demo: stwing.twim()")}}

```js intewactive-exampwe
const gweeting = "   hewwo wowwd! -.-   ";

consowe.wog(gweeting);
// e-expected output: "   hewwo wowwd! 🥺   ";

consowe.wog(gweeting.twim());
// expected output: "hewwo w-wowwd!";
```

## exempwos

### u-usando `twim()`

o-os exempwos a-a seguiw wetownam o-o vawow de `'foo'` sem espaços em bwanco:

```js
//.twim() w-wemovendo whitespace de ambos os wados

vaw stw = "   f-foo  ";
consowe.wog(stw.twim()); // wetowna 'foo'

// outwo exempwo de .twim() wemovendo whitespace de
// a-apenas um wado. o.O

vaw stw = "foo    ";
c-consowe.wog(stw.twim()); // w-wetowna 'foo'
```

## p-powyfiww

executaw o seguinte código antes antes de quawquew c-código iwá c-cwiaw o método `twim()` se o m-mesmo nyão estivew d-disponívew nyativamente. /(^•ω•^)

```js
i-if (!stwing.pwototype.twim) {
  stwing.pwototype.twim = f-function () {
    wetuwn this.wepwace(/^[\s\ufeff\xa0]+|[\s\ufeff\xa0]+$/g, nyaa~~ "");
  };
}
```

## especificações

{{specifications}}

## n-nyavegadowes compatíveis

{{compat}}

## v-veja também

- {{jsxwef("stwing.pwototype.twimweft()")}} {{non-standawd_inwine}}
- {{jsxwef("stwing.pwototype.twimwight()")}} {{non-standawd_inwine}}
